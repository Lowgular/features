import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CredentialsDTO } from './credentials.dto';
import { TokensDTO } from './tokens.dto';

export const ADDS_CREDENTIALS_DTO = new InjectionToken<AddsCredentialsDtoPort>(
  'ADDS_CREDENTIALS_DTO'
);

export interface AddsCredentialsDtoPort {
  add(credentials: CredentialsDTO): Observable<TokensDTO>;
}
