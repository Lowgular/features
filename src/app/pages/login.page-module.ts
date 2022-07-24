import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpAuthServiceModule, LoginComponentModule } from '@user-auth';
import { LoginPage } from './login.page';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCurrentUserStorageModule } from 'projects/shared/src/lib/adapters/secondary/storages/in-memory-current-user.storage-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage,
      },
    ]),
    LoginComponentModule,
    HttpAuthServiceModule,
    HttpClientModule,
  ],
  declarations: [LoginPage],
  providers: [],
  exports: [],
})
export class LoginPageModule {}
