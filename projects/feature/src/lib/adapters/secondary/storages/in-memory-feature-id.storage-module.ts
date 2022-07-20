import { NgModule } from '@angular/core';
import { InMemoryFeatureIdStorage } from './in-memory-feature-id.storage';
import { SETS_STATE_FEATURE_CONTEXT } from '../../../application/ports/secondary/context/sets-state-feature.context-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryFeatureIdStorage, { provide: SETS_STATE_FEATURE_CONTEXT, useExisting: InMemoryFeatureIdStorage }],
  	exports: [] })
export class InMemoryFeatureIdStorageModule {
}
