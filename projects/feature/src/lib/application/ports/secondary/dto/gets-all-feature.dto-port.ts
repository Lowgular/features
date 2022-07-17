import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureDTO } from './feature.dto';

export const GETS_ALL_FEATURE_DTO = new InjectionToken<GetsAllFeatureDtoPort>('GETS_ALL_FEATURE_DTO');

export interface GetsAllFeatureDtoPort {
  getAll(): Observable<FeatureDTO[]>;
}
