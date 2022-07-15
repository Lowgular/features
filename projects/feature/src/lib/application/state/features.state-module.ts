import { NgModule } from '@angular/core';
import { FeaturesState } from './features.state';
import { ADD_FEATURE_COMMAND } from '../ports/primary/command/add-feature.command-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [FeaturesState, { provide: ADD_FEATURE_COMMAND, useExisting: FeaturesState }],
  	exports: [] })
export class FeaturesStateModule {
}
