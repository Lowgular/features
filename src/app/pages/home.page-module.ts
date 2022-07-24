import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  CreateFeatureComponentModule,
  EditFeatureComponentModule,
  FeatureIdResolver,
  FeatureIdResolverModule,
  FeatureListComponentModule,
  FeaturesStateModule,
  FirebaseFeaturesServiceModule,
  InMemoryFeatureIdStorageModule,
  InMemoryFeaturesStorageModule,
  LoadFeaturesResolver,
  LoadFeaturesResolverModule,
} from '@feature';
import { HomePage } from './home.page';
import { MatButtonModule } from '@angular/material/button';
import { NewFeaturePage } from './new-feature.page';
import { EditFeaturePage } from './edit-feature.page';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        resolve: [LoadFeaturesResolver],
        component: HomePage,
      },
      {
        path: 'new-feature',
        component: NewFeaturePage,
      },
      {
        path: 'edit-feature/:featureId',
        resolve: [FeatureIdResolver],
        component: EditFeaturePage,
      },
    ]),
    CreateFeatureComponentModule,
    LoadFeaturesResolverModule,
    FeaturesStateModule,
    FirebaseFeaturesServiceModule,
    InMemoryFeaturesStorageModule,
    FeatureListComponentModule,
    InMemoryFeatureIdStorageModule,
    EditFeatureComponentModule,
    FeatureIdResolverModule,
  ],
  declarations: [HomePage, NewFeaturePage, EditFeaturePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
