import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SelectsVotingContextPort } from '../../../application/ports/secondary/context/selects-voting.context-port';
import { SetsStateVotingContextPort } from '../../../application/ports/secondary/context/sets-state-voting.context-port';
import { VotingContext } from '../../../application/ports/secondary/context/voting.context';

@Injectable()
export class InMemoryVotingStorage implements SelectsVotingContextPort, SetsStateVotingContextPort {
  private _subject: Subject<Partial<VotingContext>> = new BehaviorSubject<Partial<VotingContext>>({});

  select(): Observable<Partial<VotingContext>> {
    return this._subject.asObservable();
  }

  setState(state: VotingContext): Observable<void> {
    return of(this._subject.next(state)).pipe(map(() => void 0));
  }
}
