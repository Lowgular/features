import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { combineLatest, Observable, take, tap } from 'rxjs';
import { FeatureListQuery } from '../../../application/ports/primary/query/feature-list.query';
import {
  GETS_CURRENT_FEATURE_LIST_QUERY,
  GetsCurrentFeatureListQueryPort,
} from '../../../application/ports/primary/query/gets-current-feature-list.query-port';
import {
  SELECTS_VOTING_CONTEXT,
  SelectsVotingContextPort,
} from '../../../application/ports/secondary/context/selects-voting.context-port';
import {
  SETS_STATE_VOTING_CONTEXT,
  SetsStateVotingContextPort,
} from '../../../application/ports/secondary/context/sets-state-voting.context-port';
import { FeatureListItemQuery } from '../../../application/ports/primary/query/feature-list-item.query';
import {
  SelectsCurrentUserContextPort,
  SELECTS_CURRENT_USER_CONTEXT,
} from '@shared';
import {
  SetsFeatureDtoPort,
  SETS_FEATURE_DTO,
} from '../../../application/ports/secondary/dto/sets-feature.dto-port';
import {
  GetsOneFeatureDtoPort,
  GETS_ONE_FEATURE_DTO,
} from '../../../application/ports/secondary/dto/gets-one-feature.dto-port';

@Component({
  selector: 'lib-feature-list',
  templateUrl: './feature-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureListComponent {
  liked = false;

  toggleVotingIcon() {
    this.liked = !this.liked;
  }

  featureListQuery$: Observable<FeatureListQuery> =
    this._getsCurrentFeatureListQuery.getCurrentFeatureListQuery();

  constructor(
    @Inject(GETS_CURRENT_FEATURE_LIST_QUERY)
    private _getsCurrentFeatureListQuery: GetsCurrentFeatureListQueryPort,
    @Inject(SELECTS_VOTING_CONTEXT)
    private _selectsVotingContext: SelectsVotingContextPort,
    @Inject(SETS_STATE_VOTING_CONTEXT)
    private _setsStateVotingContext: SetsStateVotingContextPort,
    @Inject(SELECTS_CURRENT_USER_CONTEXT)
    private _selectsCurrentUserContext: SelectsCurrentUserContextPort,
    @Inject(SETS_FEATURE_DTO)
    private _setsFeatureDto: SetsFeatureDtoPort,
    @Inject(GETS_ONE_FEATURE_DTO)
    private _getsOneFeatureDto: GetsOneFeatureDtoPort
  ) {}

  onVotingIconClicked(selectedFeature: FeatureListItemQuery): void {
    this._setsStateVotingContext
      .setState({
        votedFeatureId: selectedFeature.id,
      })
      .subscribe();
    combineLatest([
      this._selectsCurrentUserContext.select('currentUserId'),
      this._selectsVotingContext.select(),
      this._getsOneFeatureDto.getOne(selectedFeature.id),
    ])
      .pipe(
        take(1),
        tap(([user, votedFeature, featureDto]) => {
          if (!featureDto.voters.includes(user as string)) {
            this._setsFeatureDto.set({
              id: votedFeature.votedFeatureId,
              voters: [...featureDto.voters].concat(user as string),
            });
          } else if (featureDto.voters.includes(user as string)) {
            let votersSet = new Set(featureDto.voters);
            votersSet.delete(user as string);
            this._setsFeatureDto.set({
              id: votedFeature.votedFeatureId,
              voters: [...votersSet],
            });
          }
        })
      )
      .subscribe();
  }
}
