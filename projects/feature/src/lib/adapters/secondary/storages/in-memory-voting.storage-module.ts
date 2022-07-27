import { NgModule } from '@angular/core';
import { InMemoryVotingStorage } from './in-memory-voting.storage';
import { SELECTS_VOTING_CONTEXT } from '../../../application/ports/secondary/context/selects-voting.context-port';
import { SETS_STATE_VOTING_CONTEXT } from '../../../application/ports/secondary/context/sets-state-voting.context-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryVotingStorage, { provide: SELECTS_VOTING_CONTEXT, useExisting: InMemoryVotingStorage }, { provide: SETS_STATE_VOTING_CONTEXT, useExisting: InMemoryVotingStorage }],
  	exports: [] })
export class InMemoryVotingStorageModule {
}
