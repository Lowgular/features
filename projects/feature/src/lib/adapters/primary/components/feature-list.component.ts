import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import {
  SelectsCurrentUserContextPort,
  SELECTS_CURRENT_USER_CONTEXT,
} from '@shared';
import { CurrentUserContext } from 'projects/shared/src/lib/application/ports/secondary/context/current-user.context';
import { Observable } from 'rxjs';
import { FeatureListQuery } from '../../../application/ports/primary/query/feature-list.query';
import {
  GETS_CURRENT_FEATURE_LIST_QUERY,
  GetsCurrentFeatureListQueryPort,
} from '../../../application/ports/primary/query/gets-current-feature-list.query-port';

@Component({
  selector: 'lib-feature-list',
  templateUrl: './feature-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureListComponent {
  featureListQuery$: Observable<FeatureListQuery> =
    this._getsCurrentFeatureListQuery.getCurrentFeatureListQuery();

  constructor(
    @Inject(GETS_CURRENT_FEATURE_LIST_QUERY)
    private _getsCurrentFeatureListQuery: GetsCurrentFeatureListQueryPort,
    @Inject(SELECTS_CURRENT_USER_CONTEXT)
    private _selectsCurrentUserContext: SelectsCurrentUserContextPort
  ) {}

  userContext$: Observable<Partial<CurrentUserContext>> =
    this._selectsCurrentUserContext.select();
}
