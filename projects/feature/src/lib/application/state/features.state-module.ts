import { NgModule } from '@angular/core';
import { FeaturesState } from './features.state';
import { CREATE_FEATURE_COMMAND } from '../ports/primary/command/add-feature.command-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    FeaturesState,
    { provide: CREATE_FEATURE_COMMAND, useExisting: FeaturesState },
  ],
  exports: [],
})
export class FeaturesStateModule {}
