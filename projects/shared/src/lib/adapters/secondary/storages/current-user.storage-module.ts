import { NgModule } from '@angular/core';
import { CurrentUserStorage } from './current-user.storage';
import { SETS_STATE_CURRENT_USER_CONTEXT } from '../../../application/ports/secondary/context/sets-state-current-user.context-port';
import { SELECTS_CURRENT_USER_CONTEXT } from '../../../application/ports/secondary/context/selects-current-user.context-port';
import { CLEARS_CURRENT_USER_CONTEXT } from '../../../application/ports/secondary/context/clears-current-user.context-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    CurrentUserStorage,
    {
      provide: SETS_STATE_CURRENT_USER_CONTEXT,
      useExisting: CurrentUserStorage,
    },
    {
      provide: SELECTS_CURRENT_USER_CONTEXT,
      useExisting: CurrentUserStorage,
    },
    { provide: CLEARS_CURRENT_USER_CONTEXT, useExisting: CurrentUserStorage },
    {
      provide: Storage,
      useValue: localStorage,
    },
  ],
  exports: [],
})
export class CurrentUserStorageModule {}
