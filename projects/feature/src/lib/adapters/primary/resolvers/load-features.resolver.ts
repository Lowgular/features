import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoadFeaturesCommand } from '../../../application/ports/primary/command/load-features.command';
import {
  LOAD_FEATURES_COMMAND,
  LoadFeaturesCommandPort,
} from '../../../application/ports/primary/command/load-features.command-port';

@Injectable()
export class LoadFeaturesResolver implements Resolve<void> {
  constructor(
    @Inject(LOAD_FEATURES_COMMAND)
    private _loadFeaturesCommand: LoadFeaturesCommandPort
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<void> {
    return this._loadFeaturesCommand.loadFeatures(new LoadFeaturesCommand());
  }
}
