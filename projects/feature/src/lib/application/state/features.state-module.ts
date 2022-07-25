import { NgModule } from '@angular/core';
import { FeaturesState } from './features.state';
import { CREATE_FEATURE_COMMAND } from '../ports/primary/command/create-feature.command-port';
import { LOAD_FEATURES_COMMAND } from '../ports/primary/command/load-features.command-port';
import { GETS_CURRENT_FEATURE_LIST_QUERY } from '../ports/primary/query/gets-current-feature-list.query-port';
import { EDIT_FEATURE_COMMAND } from '../ports/primary/command/edit-feature.command-port';
import { SET_FEATURE_ID_COMMAND } from '../ports/primary/command/set-feature-id.command-port';
import { GETS_CURRENT_SELECTED_FEATURE_ID_QUERY } from '../ports/primary/query/gets-current-selected-feature-id.query-port';
import { GETS_CURRENT_SELECTED_FEATURE_EDITION_QUERY } from '../ports/primary/query/gets-current-selected-feature-edition.query-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    FeaturesState,
    { provide: CREATE_FEATURE_COMMAND, useExisting: FeaturesState },
    { provide: LOAD_FEATURES_COMMAND, useExisting: FeaturesState },
    { provide: GETS_CURRENT_FEATURE_LIST_QUERY, useExisting: FeaturesState },
    { provide: EDIT_FEATURE_COMMAND, useExisting: FeaturesState },
    { provide: SET_FEATURE_ID_COMMAND, useExisting: FeaturesState },
    { provide: GETS_CURRENT_SELECTED_FEATURE_ID_QUERY, useExisting: FeaturesState },
    { provide: GETS_CURRENT_SELECTED_FEATURE_EDITION_QUERY, useExisting: FeaturesState }
  ],
  exports: [],
})
export class FeaturesStateModule {}
