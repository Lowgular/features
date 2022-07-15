import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { AddFeatureCommand } from './add-feature.command';

export const ADD_FEATURE_COMMAND = new InjectionToken<AddFeatureCommandPort>('ADD_FEATURE_COMMAND');

export interface AddFeatureCommandPort {
  addFeature(command: AddFeatureCommand): Observable<void>;
}
