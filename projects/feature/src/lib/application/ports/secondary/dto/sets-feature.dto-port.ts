import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureDTO } from './feature.dto';

export const SETS_FEATURE_DTO = new InjectionToken<SetsFeatureDtoPort>('SETS_FEATURE_DTO');

export interface SetsFeatureDtoPort {
  set(feature: Partial<FeatureDTO>): Observable<void>;
}
