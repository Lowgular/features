import { NgModule } from '@angular/core';
import { IsNotLoggedInGuard } from './isNotLoggedIn.guard';

@NgModule({
  imports: [],
  declarations: [],
  providers: [IsNotLoggedInGuard],
  exports: [],
})
export class IsNotLoggedInGuardModule {}
