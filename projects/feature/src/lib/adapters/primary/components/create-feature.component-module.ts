import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFeatureComponent } from './create-feature.component';

@NgModule({ imports: [CommonModule],
  	declarations: [CreateFeatureComponent],
  	providers: [],
  	exports: [CreateFeatureComponent] })
export class CreateFeatureComponentModule {
}
