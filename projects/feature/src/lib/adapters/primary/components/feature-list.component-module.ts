import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureListComponent } from './feature-list.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatBadgeModule,
    MatIconModule,
  ],
  declarations: [FeatureListComponent],
  providers: [],
  exports: [FeatureListComponent],
})
export class FeatureListComponentModule {}
