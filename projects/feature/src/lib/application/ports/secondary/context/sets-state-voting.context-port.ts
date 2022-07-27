import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { VotingContext } from './voting.context';

export const SETS_STATE_VOTING_CONTEXT = new InjectionToken<SetsStateVotingContextPort>('SETS_STATE_VOTING_CONTEXT');

export interface SetsStateVotingContextPort {
  setState(state: VotingContext): Observable<void>;
}
