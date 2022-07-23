import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectedFeatureIdQuery } from './selected-feature-id.query';

export const GETS_CURRENT_SELECTED_FEATURE_ID_QUERY = new InjectionToken<GetsCurrentSelectedFeatureIdQueryPort>('GETS_CURRENT_SELECTED_FEATURE_ID_QUERY');

export interface GetsCurrentSelectedFeatureIdQueryPort {
  getCurrentSelectedFeatureIdQuery(): Observable<SelectedFeatureIdQuery>;
}
