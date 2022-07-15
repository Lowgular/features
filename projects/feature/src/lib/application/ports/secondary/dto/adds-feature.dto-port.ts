import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureDTO } from './feature.dto';

export const ADDS_FEATURE_DTO = new InjectionToken<AddsFeatureDtoPort>('ADDS_FEATURE_DTO');

export interface AddsFeatureDtoPort {
  add(feature: Partial<FeatureDTO>): Observable<void>;
}
