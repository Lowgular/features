import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddsCredentialsDtoPort } from '../../../application/ports/secondary/dto/adds-credentials.dto-port';
import { CredentialsDTO } from '../../../application/ports/secondary/dto/credentials.dto';
import { TokensDTO } from '../../../application/ports/secondary/dto/tokens.dto';
import { TokensResponse } from './tokens.response';

@Injectable()
export class HttpAuthService implements AddsCredentialsDtoPort {
  constructor(private _client: HttpClient) {}

  add(credentials: CredentialsDTO): Observable<TokensDTO> {
    return this._client
      .post<TokensResponse>(
        'https://us-central1-lowgular-extension.cloudfunctions.net/auth/login',
        { data: credentials }
      )
      .pipe(map((tokens) => tokens.data));
  }
}
