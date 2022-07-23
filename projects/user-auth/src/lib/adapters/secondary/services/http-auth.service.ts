import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { AddsCredentialsDtoPort } from '../../../application/ports/secondary/dto/adds-credentials.dto-port';
import { CredentialsDTO } from '../../../application/ports/secondary/dto/credentials.dto';

@Injectable()
export class HttpAuthService implements AddsCredentialsDtoPort {
  constructor(private _client: HttpClient) {}

  add(credentials: CredentialsDTO): Observable<void> {
    return this._client
      .post<any>(
        'https://us-central1-lowgular-extension.cloudfunctions.net/auth/login',
        credentials
      )
      .pipe(
        take(1),
        catchError((error) => of(void 0)),
        map(() => void 0)
      );
  }
}
