import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [AuthGuard],
  	exports: [] })
export class AuthGuardModule {
}
