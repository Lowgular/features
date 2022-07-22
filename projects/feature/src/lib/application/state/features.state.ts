import { Inject, Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { CreateFeatureCommandPort } from '../ports/primary/command/create-feature.command-port';
import { LoadFeaturesCommandPort } from '../ports/primary/command/load-features.command-port';
import { GetsCurrentFeatureListQueryPort } from '../ports/primary/query/gets-current-feature-list.query-port';
import { EditFeatureCommandPort } from '../ports/primary/command/edit-feature.command-port';
import { SetFeatureIdCommandPort } from '../ports/primary/command/set-feature-id.command-port';
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
import {
  SETS_FEATURE_DTO,
  SetsFeatureDtoPort,
} from '../ports/secondary/dto/sets-feature.dto-port';
import {
  SETS_STATE_FEATURE_ID_CONTEXT,
  SetsStateFeatureIdContextPort,
} from '../ports/secondary/context/sets-state-feature-id.context-port';
import { LoadFeaturesCommand } from '../ports/primary/command/load-features.command';
import { CreateFeatureCommand } from '../ports/primary/command/create-feature.command';
import { FeatureListQuery } from '../ports/primary/query/feature-list.query';
import { EditFeatureCommand } from '../ports/primary/command/edit-feature.command';
import { SetFeatureIdCommand } from '../ports/primary/command/set-feature-id.command';
import { mapFromFeatureContext } from './feature-list-query.mapper';

@Injectable()
export class FeaturesState
  implements
    CreateFeatureCommandPort,
    LoadFeaturesCommandPort,
    GetsCurrentFeatureListQueryPort,
    EditFeatureCommandPort,
    SetFeatureIdCommandPort
{
  constructor(
    @Inject(ADDS_FEATURE_DTO) private _addsFeatureDto: AddsFeatureDtoPort,
    @Inject(SELECTS_FEATURE_CONTEXT)
    private _selectsFeatureContext: SelectsFeatureContextPort,
    @Inject(SETS_STATE_FEATURE_CONTEXT)
    private _setsStateFeatureContext: SetsStateFeatureContextPort,
    @Inject(GETS_ALL_FEATURE_DTO)
    private _getsAllFeatureDto: GetsAllFeatureDtoPort,
    @Inject(SETS_FEATURE_DTO) private _setsFeatureDto: SetsFeatureDtoPort,
    @Inject(SETS_STATE_FEATURE_ID_CONTEXT)
    private _setsStateFeatureIdContext: SetsStateFeatureIdContextPort
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

  getCurrentFeatureListQuery(): Observable<FeatureListQuery> {
    return this._selectsFeatureContext
      .select()
      .pipe(map((context) => mapFromFeatureContext(context)));
  }

  editFeature(command: EditFeatureCommand): Observable<void> {
    return this._setsFeatureDto.set({
      id: command.id,
      title: command.title,
      description: command.description,
      type: command.type,
    });
  }

  setFeatureId(command: SetFeatureIdCommand): Observable<void> {
    return this._setsStateFeatureIdContext.setFeatureId(
      command.selectedFeatureId
    );
  }
}
