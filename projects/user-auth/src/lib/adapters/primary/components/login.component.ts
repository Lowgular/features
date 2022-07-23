import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ADDS_CREDENTIALS_DTO,
  AddsCredentialsDtoPort,
} from '../../../application/ports/secondary/dto/adds-credentials.dto-port';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  readonly login: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    licenceKey: new FormControl('', Validators.required),
  });

  constructor(
    @Inject(ADDS_CREDENTIALS_DTO)
    private _addsCredentialsDto: AddsCredentialsDtoPort,
    private _router: Router
  ) {}

  onLoginSubmited(login: FormGroup): void {
    this._addsCredentialsDto
      .add({
        email: login.get('email')?.value,
        password: login.get('licenceKey')?.value,
      })
      .subscribe(() => {
        this._router.navigate(['/']);
      });
  }
}
