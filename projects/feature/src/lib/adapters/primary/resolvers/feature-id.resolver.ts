import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import {
  SetFeatureIdCommandPort,
  SET_FEATURE_ID_COMMAND,
} from '../../../application/ports/primary/command/set-feature-id.command-port';

@Injectable()
export class FeatureIdResolver implements Resolve<void> {
  constructor(
    @Inject(SET_FEATURE_ID_COMMAND)
    private _setFeatureIdCommand: SetFeatureIdCommandPort
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<void> {
    return this._setFeatureIdCommand.setFeatureId({
      selectedFeatureId: route.params['featureId'],
    });
  }
}
