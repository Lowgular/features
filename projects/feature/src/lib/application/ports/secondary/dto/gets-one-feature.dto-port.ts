import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureDTO } from './feature.dto';

export const GETS_ONE_FEATURE_DTO = new InjectionToken<GetsOneFeatureDtoPort>('GETS_ONE_FEATURE_DTO');

export interface GetsOneFeatureDtoPort {
  getOne(id: string): Observable<FeatureDTO>;
}
