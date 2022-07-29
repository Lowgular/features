import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [LogoutComponent],
  providers: [],
  exports: [LogoutComponent],
})
export class LogoutComponentModule {}
