import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectedFeatureEditionQuery } from './selected-feature-edition.query';

export const GETS_CURRENT_SELECTED_FEATURE_EDITION_QUERY =
  new InjectionToken<GetsCurrentSelectedFeatureEditionQueryPort>(
    'GETS_CURRENT_SELECTED_FEATURE_EDITION_QUERY'
  );

export interface GetsCurrentSelectedFeatureEditionQueryPort {
  getCurrentSelectedFeatureEditionQuery(
    selectedFeatureId: string
  ): Observable<SelectedFeatureEditionQuery>;
}
