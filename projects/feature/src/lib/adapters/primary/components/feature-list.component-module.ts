import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureListComponent } from './feature-list.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MatButtonModule, RouterModule],
  declarations: [FeatureListComponent],
  providers: [],
  exports: [FeatureListComponent],
})
export class FeatureListComponentModule {}
