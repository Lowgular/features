import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Component } from '@angular/core';
import { SetsStateCurrentUserContextPort } from '../../../application/ports/secondary/context/sets-state-current-user.context-port';
import { SelectsCurrentUserContextPort } from '../../../application/ports/secondary/context/selects-current-user.context-port';
import { LocalService, LOCAL_SERVICE } from './localService';
import { ClearsCurrentUserContextPort } from '../../../application/ports/secondary/context/clears-current-user.context-port';

@Injectable()
export class CurrentUserStorage
  implements
    SetsStateCurrentUserContextPort,
    SelectsCurrentUserContextPort,
    ClearsCurrentUserContextPort
{
  constructor(@Inject(LOCAL_SERVICE) private _localService: LocalService) {}

  setState(key: string, value: string): Observable<void> {
    return of(this._localService.saveData(key, value));
  }

  select(key: string): Observable<string> {
    return of(this._localService.getData('currentUserId') as string);
  }

  clear() {
    this._localService.clearData();
  }
}
