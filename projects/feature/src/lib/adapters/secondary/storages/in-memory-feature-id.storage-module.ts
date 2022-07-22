import { NgModule } from '@angular/core';
import { InMemoryFeatureIdStorage } from './in-memory-feature-id.storage';
import { SETS_STATE_FEATURE_ID_CONTEXT } from '../../../application/ports/secondary/context/sets-state-feature-id.context-port';
import { SELECTS_FEATURE_ID_CONTEXT } from '../../../application/ports/secondary/context/selects-feature-id.context-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    InMemoryFeatureIdStorage,

    {
      provide: SETS_STATE_FEATURE_ID_CONTEXT,
      useExisting: InMemoryFeatureIdStorage,
    },
    {
      provide: SELECTS_FEATURE_ID_CONTEXT,
      useExisting: InMemoryFeatureIdStorage,
    },
  ],
  exports: [],
})
export class InMemoryFeatureIdStorageModule {}
