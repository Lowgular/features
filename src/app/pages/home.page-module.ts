import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  CreateFeatureComponentModule,
  FeatureListComponentModule,
  FeaturesStateModule,
  FirebaseFeaturesServiceModule,
  InMemoryFeaturesStorageModule,
  LoadFeaturesResolver,
  LoadFeaturesResolverModule,
} from '@feature';
import { HomePage } from './home.page';
import { MatButtonModule } from '@angular/material/button';
import { NewFeaturePage } from './new-feature.page';

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
    ]),
    CreateFeatureComponentModule,
    LoadFeaturesResolverModule,
    FeaturesStateModule,
    FirebaseFeaturesServiceModule,
    InMemoryFeaturesStorageModule,
    FeatureListComponentModule,
  ],
  declarations: [HomePage, NewFeaturePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
