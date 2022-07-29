import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  ClearsCurrentUserContextPort,
  CLEARS_CURRENT_USER_CONTEXT,
} from 'projects/shared/src/lib/application/ports/secondary/context/clears-current-user.context-port';

@Component({
  selector: 'lib-logout',
  templateUrl: './logout.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutComponent {
  constructor(
    @Inject(CLEARS_CURRENT_USER_CONTEXT)
    private _clearsCurrentUserContext: ClearsCurrentUserContextPort,
    private router: Router
  ) {}

  onLogOutClicked() {
    this._clearsCurrentUserContext
      .clear()
      .subscribe(() => this.router.navigate(['login']));
  }
}
