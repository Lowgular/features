import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateFeatureComponent } from './create-feature.component';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [CreateFeatureComponent],
  	providers: [],
  	exports: [CreateFeatureComponent] })
export class CreateFeatureComponentModule {
}
