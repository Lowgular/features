import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureContext } from './feature.context';

export const SETS_STATE_FEATURE_CONTEXT = new InjectionToken<SetsStateFeatureContextPort>('SETS_STATE_FEATURE_CONTEXT');

export interface SetsStateFeatureContextPort {
  setState(state: FeatureContext): Observable<void>;
}
