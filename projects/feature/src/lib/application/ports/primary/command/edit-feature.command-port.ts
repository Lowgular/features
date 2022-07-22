import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { EditFeatureCommand } from './edit-feature.command';

export const EDIT_FEATURE_COMMAND = new InjectionToken<EditFeatureCommandPort>('EDIT_FEATURE_COMMAND');

export interface EditFeatureCommandPort {
  editFeature(command: EditFeatureCommand): Observable<void>;
}
