import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';
import { AddsCredentialsDtoPort } from '../../../application/ports/secondary/dto/adds-credentials.dto-port';
import { CredentialsDTO } from '../../../application/ports/secondary/dto/credentials.dto';
import { ResponseDTO } from '../../../application/ports/secondary/dto/response.dto';

@Injectable()
export class HttpAuthService implements AddsCredentialsDtoPort {
  constructor(private _client: HttpClient) {}

  add(credentials: CredentialsDTO): Observable<ResponseDTO> {
    return this._client
      .post<any>(
        'https://us-central1-lowgular-extension.cloudfunctions.net/auth/login',
        { data: credentials }
      )
      .pipe(map((data) => data.data));
  }
}
