import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  CreateFeatureComponentModule,
  FeaturesStateModule,
  FirebaseFeaturesServiceModule,
  InMemoryFeaturesStorageModule,
} from '@feature';
import { NewFeaturePage } from './new-feature.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewFeaturePage,
      },
    ]),
    CreateFeatureComponentModule,
    FeaturesStateModule,
    FirebaseFeaturesServiceModule,
    InMemoryFeaturesStorageModule,
  ],
  declarations: [NewFeaturePage],
  providers: [],
  exports: [],
})
export class NewFeaturePageModule {}
