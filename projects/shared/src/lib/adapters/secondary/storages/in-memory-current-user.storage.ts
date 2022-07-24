import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SetsStateCurrentUserContextPort } from '../../../application/ports/secondary/context/sets-state-current-user.context-port';
import { SelectsCurrentUserContextPort } from '../../../application/ports/secondary/context/selects-current-user.context-port';
import { CurrentUserContext } from '../../../application/ports/secondary/context/current-user.context';

@Injectable()
export class InMemoryCurrentUserStorage
  implements SetsStateCurrentUserContextPort, SelectsCurrentUserContextPort
{
  private _subject: Subject<Partial<CurrentUserContext>> = new BehaviorSubject<
    Partial<CurrentUserContext>
  >({});

  setState(state: CurrentUserContext): Observable<void> {
    return of(this._subject.next(state)).pipe(map(() => void 0));
  }

  select(): Observable<Partial<CurrentUserContext>> {
    return this._subject.asObservable();
  }
}
