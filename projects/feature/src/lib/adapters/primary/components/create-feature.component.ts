import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { CreateFeatureCommand } from '../../../application/ports/primary/command/add-feature.command';
import {
  CREATE_FEATURE_COMMAND,
  CreateFeatureCommandPort,
} from '../../../application/ports/primary/command/add-feature.command-port';

@Component({
  selector: 'lib-create-feature',
  templateUrl: './create-feature.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateFeatureComponent {
  readonly newFeatureForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    type: new FormControl(),
  });

  constructor(
    @Inject(CREATE_FEATURE_COMMAND)
    private _createFeatureCommand: CreateFeatureCommandPort,
    private router: Router
  ) {}

  onNewFeatureFormSubmited(newFeatureForm: FormGroup): void {
    if (newFeatureForm.invalid) {
      return;
    }
    this._createFeatureCommand
      .createFeature(
        new CreateFeatureCommand(
          newFeatureForm.get('title')?.value,
          newFeatureForm.get('description')?.value,
          newFeatureForm.get('type')?.value
        )
      )
      .pipe(take(1))
      .subscribe(() => this.newFeatureForm.reset());
    this.router.navigate(['/']);
  }
}
