import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs';
import {
  ADDS_CREDENTIALS_DTO,
  AddsCredentialsDtoPort,
} from '../../../application/ports/secondary/dto/adds-credentials.dto-port';
import {
  SetsStateCurrentUserContextPort,
  SETS_STATE_CURRENT_USER_CONTEXT,
} from 'projects/shared/src/lib/application/ports/secondary/context/sets-state-current-user.context-port';

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
    @Inject(SETS_STATE_CURRENT_USER_CONTEXT)
    private _setsStateCurrentUserContext: SetsStateCurrentUserContextPort,
    private _router: Router
  ) {}

  onLoginSubmited(login: FormGroup): void {
    this._addsCredentialsDto
      .add({
        email: login.get('email')?.value,
        password: login.get('licenceKey')?.value,
      })
      .pipe(
        take(1),
        tap((data) =>
          this._setsStateCurrentUserContext.setState('currentUserId', data.id)
        )
      )
      .subscribe(() => {
        this._router.navigate(['/']);
      });
  }

  hideVisibilityIcon: boolean = true;
  visibilityIcon: string = 'visibility_off';
  textType: string = 'password';

  onHideIconClicked() {
    if (this.hideVisibilityIcon === true) {
      this.hideVisibilityIcon = false;
      this.visibilityIcon = 'visibility';
      this.textType = 'text';
    } else {
      this.hideVisibilityIcon = true;
      this.visibilityIcon = 'visibility_off';
      this.textType = 'password';
    }
  }
}
