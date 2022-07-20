import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SetFeatureIdCommand } from '../../primary/command/set-feature-id.command';

export const SETS_STATE_FEATURE_ID_CONTEXT =
  new InjectionToken<SetsStateFeatureIdContextPort>(
    'SETS_STATE_FEATURE_ID_CONTEXT'
  );

export interface SetsStateFeatureIdContextPort {
  setFeatureId(command: SetFeatureIdCommand): Observable<void>;
}
