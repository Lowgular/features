import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadFeaturesCommand } from './load-features.command';

export const LOAD_FEATURES_COMMAND = new InjectionToken<LoadFeaturesCommandPort>('LOAD_FEATURES_COMMAND');

export interface LoadFeaturesCommandPort {
  loadFeatures(command: LoadFeaturesCommand): Observable<void>;
}
