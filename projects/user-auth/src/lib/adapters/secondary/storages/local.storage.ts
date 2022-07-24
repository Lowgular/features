import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SetsStateLocalStorageContextPort } from '../../../application/ports/secondary/context/sets-state-local-storage.context-port';
import { SelectsLocalStorageContextPort } from '../../../application/ports/secondary/context/selects-local-storage.context-port';

@Injectable()
export class LocalStorage
  implements SetsStateLocalStorageContextPort, SelectsLocalStorageContextPort
{
  setLocalStorage(key: string, value: string): void {
    return localStorage.setItem(key, value);
  }

  isLoggedIn(): Observable<boolean> {
    if (localStorage.length !== 0) {
      return of(true);
    } else {
      return of(false);
    }
  }
}
