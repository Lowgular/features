import { Inject, Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { CreateFeatureCommandPort } from '../ports/primary/command/create-feature.command-port';
import { LoadFeaturesCommandPort } from '../ports/primary/command/load-features.command-port';
import { GetsCurrentFeatureListQueryPort } from '../ports/primary/query/gets-current-feature-list.query-port';
import { EditFeatureCommandPort } from '../ports/primary/command/edit-feature.command-port';
import { SetFeatureIdCommandPort } from '../ports/primary/command/set-feature-id.command-port';
import { GetsCurrentSelectedFeatureIdQueryPort } from '../ports/primary/query/gets-current-selected-feature-id.query-port';
import { GetsCurrentSelectedFeatureEditionQueryPort } from '../ports/primary/query/gets-current-selected-feature-edition.query-port';
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
import {
  SELECTS_FEATURE_ID_CONTEXT,
  SelectsFeatureIdContextPort,
} from '../ports/secondary/context/selects-feature-id.context-port';
import {
  GETS_ONE_FEATURE_DTO,
  GetsOneFeatureDtoPort,
} from '../ports/secondary/dto/gets-one-feature.dto-port';
import { LoadFeaturesCommand } from '../ports/primary/command/load-features.command';
import { CreateFeatureCommand } from '../ports/primary/command/create-feature.command';
import { FeatureListQuery } from '../ports/primary/query/feature-list.query';
import { EditFeatureCommand } from '../ports/primary/command/edit-feature.command';
import { SetFeatureIdCommand } from '../ports/primary/command/set-feature-id.command';
import { SelectedFeatureIdQuery } from '../ports/primary/query/selected-feature-id.query';
import { FeatureIdContext } from '../ports/secondary/context/feature-id.context';
import { SelectedFeatureEditionQuery } from '../ports/primary/query/selected-feature-edition.query';
import { FeatureDTO } from '../ports/secondary/dto/feature.dto';
import { mapFromFeatureContext } from './feature-list-query.mapper';
import {
  SelectsCurrentUserContextPort,
  SELECTS_CURRENT_USER_CONTEXT,
} from '@shared';

@Injectable()
export class FeaturesState
  implements
    CreateFeatureCommandPort,
    LoadFeaturesCommandPort,
    GetsCurrentFeatureListQueryPort,
    EditFeatureCommandPort,
    SetFeatureIdCommandPort,
    GetsCurrentSelectedFeatureIdQueryPort,
    GetsCurrentSelectedFeatureEditionQueryPort
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
    private _setsStateFeatureIdContext: SetsStateFeatureIdContextPort,
    @Inject(SELECTS_FEATURE_ID_CONTEXT)
    private _selectsFeatureIdContext: SelectsFeatureIdContextPort,
    @Inject(SELECTS_CURRENT_USER_CONTEXT)
    private _selectsCurrentUserContext: SelectsCurrentUserContextPort,
    @Inject(GETS_ONE_FEATURE_DTO)
    private _getsOneFeatureDto: GetsOneFeatureDtoPort
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
    return this._selectsCurrentUserContext.select('currentUserId').pipe(
      take(1),
      switchMap((userContext) =>
        this._addsFeatureDto.add({
          title: command.title,
          description: command.description,
          type: command.type,
          status: 'pending',
          creator: userContext,
          voters: [],
        })
      )
    );
  }

  getCurrentFeatureListQuery(): Observable<FeatureListQuery> {
    return this._selectsFeatureContext
      .select()
      .pipe(map((context) => mapFromFeatureContext(context)));
  }

  editFeature(command: EditFeatureCommand): Observable<void> {
    return this._setsFeatureDto
      .set({
        id: command.id,
        title: command.title,
        description: command.description,
        type: command.type,
      })
      .pipe(
        switchMap(() => this._getsAllFeatureDto.getAll()),
        switchMap((features) =>
          this._setsStateFeatureContext.setState({ all: features })
        )
      );
  }

  setFeatureId(command: SetFeatureIdCommand): Observable<void> {
    return this._setsStateFeatureIdContext.setFeatureId(
      command.selectedFeatureId
    );
  }

  getCurrentSelectedFeatureIdQuery(): Observable<SelectedFeatureIdQuery> {
    return this._selectsFeatureIdContext
      .select()
      .pipe(
        map(
          (
            featureIdContext: Partial<FeatureIdContext>
          ): SelectedFeatureIdQuery =>
            new SelectedFeatureIdQuery(featureIdContext.selectedFeatureId || '')
        )
      );
  }

  getCurrentSelectedFeatureEditionQuery(
    selectedFeatureId: string
  ): Observable<SelectedFeatureEditionQuery> {
    return this._getsOneFeatureDto
      .getOne(selectedFeatureId)
      .pipe(
        map(
          (featureDTO: FeatureDTO): SelectedFeatureEditionQuery =>
            new SelectedFeatureEditionQuery(
              featureDTO.id,
              featureDTO.title,
              featureDTO.type,
              featureDTO.description
            )
        )
      );
  }
}
