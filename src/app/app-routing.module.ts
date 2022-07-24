import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsNotLoggedInGuard, IsNotLoggedInGuardModule } from '@user-auth';
import { HomePageModule } from './pages/home.page-module';
import { LoginPageModule } from './pages/login.page-module';

const routes: Routes = [
  {
    path: '',
    canActivate: [IsNotLoggedInGuard],
    loadChildren: () => HomePageModule,
  },
  {
    path: 'login',
    loadChildren: () => LoginPageModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), IsNotLoggedInGuardModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
