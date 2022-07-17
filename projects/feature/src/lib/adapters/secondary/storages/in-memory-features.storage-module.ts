import { NgModule } from '@angular/core';
import { InMemoryFeaturesStorage } from './in-memory-features.storage';
import { SETS_STATE_FEATURE_CONTEXT } from '../../../application/ports/secondary/context/sets-state-feature.context-port';
import { SELECTS_FEATURE_CONTEXT } from '../../../application/ports/secondary/context/selects-feature.context-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryFeaturesStorage, { provide: SETS_STATE_FEATURE_CONTEXT, useExisting: InMemoryFeaturesStorage }, { provide: SELECTS_FEATURE_CONTEXT, useExisting: InMemoryFeaturesStorage }],
  	exports: [] })
export class InMemoryFeaturesStorageModule {
}
