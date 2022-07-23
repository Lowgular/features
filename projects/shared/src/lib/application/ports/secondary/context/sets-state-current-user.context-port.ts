import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserContext } from './current-user.context';

export const SETS_STATE_CURRENT_USER_CONTEXT = new InjectionToken<SetsStateCurrentUserContextPort>('SETS_STATE_CURRENT_USER_CONTEXT');

export interface SetsStateCurrentUserContextPort {
  setState(state: CurrentUserContext): Observable<void>;
}
