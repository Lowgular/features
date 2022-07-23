import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CredentialsDTO } from './credentials.dto';
import { ResponseDTO } from './response.dto';

export const ADDS_CREDENTIALS_DTO = new InjectionToken<AddsCredentialsDtoPort>(
  'ADDS_CREDENTIALS_DTO'
);

export interface AddsCredentialsDtoPort {
  add(credentials: CredentialsDTO): Observable<ResponseDTO>;
}
