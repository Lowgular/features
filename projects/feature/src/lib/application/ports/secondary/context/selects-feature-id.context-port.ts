import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureIdContext } from './feature-id.context';

export const SELECTS_FEATURE_ID_CONTEXT = new InjectionToken<SelectsFeatureIdContextPort>('SELECTS_FEATURE_ID_CONTEXT');

export interface SelectsFeatureIdContextPort {
  select(): Observable<Partial<FeatureIdContext>>;
}
