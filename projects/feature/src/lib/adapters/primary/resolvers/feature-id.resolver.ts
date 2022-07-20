import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import {
  SETS_STATE_FEATURE_ID_CONTEXT,
  SetsStateFeatureIdContextPort,
} from '../../../application/ports/secondary/context/sets-state-feature-id.context-port';

@Injectable()
export class FeatureIdResolver implements Resolve<void> {
  constructor(
    @Inject(SETS_STATE_FEATURE_ID_CONTEXT)
    private _setsStateFeatureIdContext: SetsStateFeatureIdContextPort
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<void> {
    return this._setsStateFeatureIdContext.setFeatureId({
      selectedFeatureId: route.params['featureId'],
    });
  }
}
