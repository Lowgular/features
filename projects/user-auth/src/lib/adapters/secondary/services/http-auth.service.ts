import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddsCredentialsDtoPort } from '../../../application/ports/secondary/dto/adds-credentials.dto-port';
import { CredentialsDTO } from '../../../application/ports/secondary/dto/credentials.dto';

@Injectable()
export class HttpAuthService implements AddsCredentialsDtoPort {
  constructor(private _client: HttpClient) {}

  add(credentials: Partial<CredentialsDTO>): Observable<void> {
    return this._client
      .post<CredentialsDTO>(
        'https://us-central1-lowgular-extension.cloudfunctions.net/auth/login',
        credentials
      )
      .pipe(map(() => void 0));
  }
}
