import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureIdContext } from './feature-id.context';

export const SETS_STATE_FEATURE_ID_CONTEXT =
  new InjectionToken<SetsStateFeatureIdContextPort>(
    'SETS_STATE_FEATURE_ID_CONTEXT'
  );

export interface SetsStateFeatureIdContextPort {
  setFeatureId(featureId: FeatureIdContext): Observable<void>;
}
