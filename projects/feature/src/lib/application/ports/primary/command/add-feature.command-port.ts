import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateFeatureCommand } from './add-feature.command';

export const CREATE_FEATURE_COMMAND =
  new InjectionToken<CreateFeatureCommandPort>('CREATE_FEATURE_COMMAND');

export interface CreateFeatureCommandPort {
  createFeature(command: CreateFeatureCommand): Observable<void>;
}
