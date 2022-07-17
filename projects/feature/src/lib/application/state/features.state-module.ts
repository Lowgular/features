import { NgModule } from '@angular/core';
import { FeaturesState } from './features.state';
import { LOAD_FEATURES_COMMAND } from '../ports/primary/command/load-features.command-port';
import { CREATE_FEATURE_COMMAND } from '../ports/primary/command/add-feature.command-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    FeaturesState,
    { provide: CREATE_FEATURE_COMMAND, useExisting: FeaturesState },
    { provide: LOAD_FEATURES_COMMAND, useExisting: FeaturesState }
  ],
  exports: [],
})
export class FeaturesStateModule {}
