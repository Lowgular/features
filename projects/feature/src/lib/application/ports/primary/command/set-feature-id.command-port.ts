import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SetFeatureIdCommand } from './set-feature-id.command';

export const SET_FEATURE_ID_COMMAND = new InjectionToken<SetFeatureIdCommandPort>('SET_FEATURE_ID_COMMAND');

export interface SetFeatureIdCommandPort {
  setFeatureId(command: SetFeatureIdCommand): Observable<void>;
}
