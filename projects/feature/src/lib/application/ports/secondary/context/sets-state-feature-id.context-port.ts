import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';


export const SETS_STATE_FEATURE_ID_CONTEXT =
  new InjectionToken<SetsStateFeatureIdContextPort>(
    'SETS_STATE_FEATURE_ID_CONTEXT'
  );

export interface SetsStateFeatureIdContextPort {

  setFeatureId(selectedFeatureId: string): Observable<void>;

}
