import { NgModule } from '@angular/core';
import { InMemoryCurrentUserStorage } from './in-memory-current-user.storage';
import { SETS_STATE_CURRENT_USER_CONTEXT } from '../../../application/ports/secondary/context/sets-state-current-user.context-port';
import { SELECTS_CURRENT_USER_CONTEXT } from '../../../application/ports/secondary/context/selects-current-user.context-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    InMemoryCurrentUserStorage,
    {
      provide: SETS_STATE_CURRENT_USER_CONTEXT,
      useExisting: InMemoryCurrentUserStorage,
    },
    {
      provide: SELECTS_CURRENT_USER_CONTEXT,
      useExisting: InMemoryCurrentUserStorage,
    },
  ],
  exports: [],
})
export class InMemoryCurrentUserStorageModule {}
