import { NgModule } from '@angular/core';
import { LocalStorage } from './local.storage';
import { SETS_STATE_LOCAL_STORAGE_CONTEXT } from '../../../application/ports/secondary/context/sets-state-local-storage.context-port';
import { SELECTS_LOCAL_STORAGE_CONTEXT } from '../../../application/ports/secondary/context/selects-local-storage.context-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    LocalStorage,
    {
      provide: SETS_STATE_LOCAL_STORAGE_CONTEXT,
      useExisting: LocalStorage,
    },
    {
      provide: SELECTS_LOCAL_STORAGE_CONTEXT,
      useExisting: LocalStorage,
    },
  ],
  exports: [],
})
export class LocalStorageModule {}
