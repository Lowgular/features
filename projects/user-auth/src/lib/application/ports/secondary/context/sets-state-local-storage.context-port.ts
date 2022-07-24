import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const SETS_STATE_LOCAL_STORAGE_CONTEXT =
  new InjectionToken<SetsStateLocalStorageContextPort>(
    'SETS_STATE_LOCAL_STORAGE_CONTEXT'
  );

export interface SetsStateLocalStorageContextPort {
  setLocalStorage(key: string, value: string): void;
}
