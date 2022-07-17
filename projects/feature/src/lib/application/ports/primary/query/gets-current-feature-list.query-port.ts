import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureListQuery } from './feature-list.query';

export const GETS_CURRENT_FEATURE_LIST_QUERY = new InjectionToken<GetsCurrentFeatureListQueryPort>('GETS_CURRENT_FEATURE_LIST_QUERY');

export interface GetsCurrentFeatureListQueryPort {
  getCurrentFeatureListQuery(): Observable<FeatureListQuery>;
}
