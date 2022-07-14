import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewFeaturePage } from './new-feature.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: NewFeaturePage,
        }
      ])],
  	declarations: [NewFeaturePage],
  	providers: [],
  	exports: [] })
export class NewFeaturePageModule {
}
