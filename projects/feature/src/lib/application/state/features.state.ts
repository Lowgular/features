import { Inject, Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { LoadFeaturesCommandPort } from '../ports/primary/command/load-features.command-port';
import {
  ADDS_FEATURE_DTO,
  AddsFeatureDtoPort,
} from '../ports/secondary/dto/adds-feature.dto-port';
import {
  SELECTS_FEATURE_CONTEXT,
  SelectsFeatureContextPort,
} from '../ports/secondary/context/selects-feature.context-port';
import {
  SETS_STATE_FEATURE_CONTEXT,
  SetsStateFeatureContextPort,
} from '../ports/secondary/context/sets-state-feature.context-port';
import {
  GETS_ALL_FEATURE_DTO,
  GetsAllFeatureDtoPort,
} from '../ports/secondary/dto/gets-all-feature.dto-port';
import { LoadFeaturesCommand } from '../ports/primary/command/load-features.command';
import { CreateFeatureCommandPort } from '../ports/primary/command/add-feature.command-port';
import { CreateFeatureCommand } from '../ports/primary/command/add-feature.command';

@Injectable()
export class FeaturesState
  implements CreateFeatureCommandPort, LoadFeaturesCommandPort
{
  constructor(
    @Inject(ADDS_FEATURE_DTO) private _addsFeatureDto: AddsFeatureDtoPort,
    @Inject(SELECTS_FEATURE_CONTEXT)
    private _selectsFeatureContext: SelectsFeatureContextPort,
    @Inject(SETS_STATE_FEATURE_CONTEXT)
    private _setsStateFeatureContext: SetsStateFeatureContextPort,
    @Inject(GETS_ALL_FEATURE_DTO)
    private _getsAllFeatureDto: GetsAllFeatureDtoPort
  ) {}

  loadFeatures(command: LoadFeaturesCommand): Observable<void> {
    return this._getsAllFeatureDto.getAll().pipe(
      take(1),
      switchMap((features) =>
        this._setsStateFeatureContext.setState({ all: features })
      )
    );
  }

  createFeature(command: CreateFeatureCommand): Observable<void> {
    return combineLatest([
      this._addsFeatureDto.add({
        title: command.title,
        description: command.description,
        type: command.type,
        status: 'pending',
        creator: 'test creator id',
        voters: ['test creator id'],
      }),
      this._selectsFeatureContext.select().pipe(take(1)),
    ]).pipe(
      map(([newFeature, featureContext]) => {
        return {
          ...featureContext,
          all: [...(featureContext.all as any[]), newFeature],
        };
      }),
      switchMap((featureContext) =>
        this._setsStateFeatureContext.setState(featureContext)
      )
    );
  }
}