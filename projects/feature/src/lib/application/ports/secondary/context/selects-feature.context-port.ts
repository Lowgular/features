import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureContext } from './feature.context';

export const SELECTS_FEATURE_CONTEXT = new InjectionToken<SelectsFeatureContextPort>('SELECTS_FEATURE_CONTEXT');

export interface SelectsFeatureContextPort {
  select(): Observable<Partial<FeatureContext>>;
}
