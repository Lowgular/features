import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  EditFeatureComponentModule,
  FeatureIdResolver,
  FeatureIdResolverModule,
  FirebaseFeaturesServiceModule,
  InMemoryFeatureIdStorageModule,
} from '@feature';
import { EditFeaturePage } from './edit-feature.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        resolve: [FeatureIdResolver],
        component: EditFeaturePage,
      },
    ]),
    EditFeatureComponentModule,
    FeatureIdResolverModule,
    InMemoryFeatureIdStorageModule,
    FirebaseFeaturesServiceModule,
  ],
  declarations: [EditFeaturePage],
  providers: [],
  exports: [],
})
export class EditFeaturePageModule {}
