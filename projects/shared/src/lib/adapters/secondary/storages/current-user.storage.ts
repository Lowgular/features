import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SetsStateCurrentUserContextPort } from '../../../application/ports/secondary/context/sets-state-current-user.context-port';
import { SelectsCurrentUserContextPort } from '../../../application/ports/secondary/context/selects-current-user.context-port';

@Injectable()
export class CurrentUserStorage
  implements SetsStateCurrentUserContextPort, SelectsCurrentUserContextPort
{
  constructor(private _localStorage: Storage) {}

  setState(key: string, value: string): Observable<void> {
    return of(this._localStorage.setItem(key, value));
  }

  select(key: string): Observable<string> {
    return of(this._localStorage.getItem('currentUserId') as string);
  }
}
