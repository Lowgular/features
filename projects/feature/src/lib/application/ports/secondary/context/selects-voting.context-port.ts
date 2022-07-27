import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { VotingContext } from './voting.context';

export const SELECTS_VOTING_CONTEXT = new InjectionToken<SelectsVotingContextPort>('SELECTS_VOTING_CONTEXT');

export interface SelectsVotingContextPort {
  select(): Observable<Partial<VotingContext>>;
}
