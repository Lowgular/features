import { NgModule } from '@angular/core';
import { FeaturesState } from './features.state';
import { LOAD_FEATURES_COMMAND } from '../ports/primary/command/load-features.command-port';
import { GETS_CURRENT_FEATURE_LIST_QUERY } from '../ports/primary/query/gets-current-feature-list.query-port';
import { CREATE_FEATURE_COMMAND } from '../ports/primary/command/add-feature.command-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    FeaturesState,
    { provide: CREATE_FEATURE_COMMAND, useExisting: FeaturesState },
    { provide: LOAD_FEATURES_COMMAND, useExisting: FeaturesState },
    { provide: GETS_CURRENT_FEATURE_LIST_QUERY, useExisting: FeaturesState }
  ],
  exports: [],
})
export class FeaturesStateModule {}
