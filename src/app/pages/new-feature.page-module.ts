import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  CreateFeatureComponentModule,
  FeaturesStateModule,
  FirebaseFeaturesServiceModule,
  InMemoryFeaturesStorageModule,
  LoadFeaturesResolver,
  LoadFeaturesResolverModule,
} from '@feature';
import { NewFeaturePage } from './new-feature.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        resolve: [LoadFeaturesResolver],
        component: NewFeaturePage,
      },
    ]),
    CreateFeatureComponentModule,
    FeaturesStateModule,
    FirebaseFeaturesServiceModule,
    InMemoryFeaturesStorageModule,
    LoadFeaturesResolverModule,
  ],
  declarations: [NewFeaturePage],
  providers: [],
  exports: [],
})
export class NewFeaturePageModule {}
