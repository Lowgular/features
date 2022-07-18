import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatureListComponentModule, FeaturesStateModule, FirebaseFeaturesServiceModule, InMemoryFeaturesStorageModule, LoadFeaturesResolver, LoadFeaturesResolverModule } from '@feature';
import { HomePage } from './home.page';
import { MatButtonModule } from '@angular/material/button';

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
    ]),
    LoadFeaturesResolverModule,
    FeaturesStateModule,
    FirebaseFeaturesServiceModule,
    InMemoryFeaturesStorageModule,
    FeatureListComponentModule
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
