import { NgModule } from '@angular/core';
import { HttpAuthService } from './http-auth.service';
import { ADDS_CREDENTIALS_DTO } from '../../../application/ports/secondary/dto/adds-credentials.dto-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    HttpAuthService,
    { provide: ADDS_CREDENTIALS_DTO, useExisting: HttpAuthService },
  ],
  exports: [],
})
export class HttpAuthServiceModule {}
