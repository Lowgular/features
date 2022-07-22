import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFeatureComponent } from './edit-feature.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [EditFeatureComponent],
  providers: [],
  exports: [EditFeatureComponent],
})
export class EditFeatureComponentModule {}
