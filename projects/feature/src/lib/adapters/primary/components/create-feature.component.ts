import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { AddFeatureCommand } from '../../../application/ports/primary/command/add-feature.command';
import {
  ADD_FEATURE_COMMAND,
  AddFeatureCommandPort,
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
    @Inject(ADD_FEATURE_COMMAND)
    private _addFeatureCommand: AddFeatureCommandPort
  ) {}

  onNewFeatureFormSubmited(newFeatureForm: FormGroup): void {
    if (newFeatureForm.invalid) {
      return;
    }
    this._addFeatureCommand
      .addFeature(
        new AddFeatureCommand(
          newFeatureForm.get('title')?.value,
          newFeatureForm.get('description')?.value,
          newFeatureForm.get('type')?.value
        )
      )
      .pipe(take(1))
      .subscribe(() => this.newFeatureForm.reset());
  }
}
