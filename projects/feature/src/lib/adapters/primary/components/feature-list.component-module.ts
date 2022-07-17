import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureListComponent } from './feature-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [FeatureListComponent],
  	providers: [],
  	exports: [FeatureListComponent] })
export class FeatureListComponentModule {
}
