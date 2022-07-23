import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import {

import { Router } from '@angular/router';
import {
  EditFeatureCommandPort,
  EDIT_FEATURE_COMMAND,
} from '../../../application/ports/primary/command/edit-feature.command-port';
import { EditFeatureCommand } from '../../../application/ports/primary/command/edit-feature.command';

import {
  GetsCurrentSelectedFeatureIdQueryPort,
  GETS_CURRENT_SELECTED_FEATURE_ID_QUERY,
} from '../../../application/ports/primary/query/gets-current-selected-feature-id.query-port';
import {
  GetsCurrentSelectedFeatureEditionQueryPort,
  GETS_CURRENT_SELECTED_FEATURE_EDITION_QUERY,
} from '../../../application/ports/primary/query/gets-current-selected-feature-edition.query-port';


@Component({
  selector: 'lib-edit-feature',
  templateUrl: './edit-feature.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditFeatureComponent {

  editFeatureForm$: Observable<FormGroup> =
    this._getsCurrentSelectedFeatureIdQuery
      .getCurrentSelectedFeatureIdQuery()
      .pipe(
        switchMap((query) =>
          this._getsCurrentSelectedFeatureEditionQuery.getCurrentSelectedFeatureEditionQuery(
            query.selectedId
          )
        ),
        map((feature) => {
          return new FormGroup({
            title: new FormControl(feature.title, Validators.required),
            type: new FormControl(feature.type, Validators.required),
            description: new FormControl(
              feature.description,
              Validators.required
            ),
            id: new FormControl(feature.id),
          });
        })
      );

  constructor(
    @Inject(EDIT_FEATURE_COMMAND)
    private _editFeatureCommand: EditFeatureCommandPort,
    @Inject(GETS_CURRENT_SELECTED_FEATURE_ID_QUERY)
    private _getsCurrentSelectedFeatureIdQuery: GetsCurrentSelectedFeatureIdQueryPort,
    @Inject(GETS_CURRENT_SELECTED_FEATURE_EDITION_QUERY)
    private _getsCurrentSelectedFeatureEditionQuery: GetsCurrentSelectedFeatureEditionQueryPort,

    private router: Router
  ) {}

  onEditFeatureFormSubmited(editFeatureForm: FormGroup): void {

    if (editFeatureForm.invalid) {
      return;
    }
    this._editFeatureCommand
      .editFeature(
        new EditFeatureCommand(
          editFeatureForm.get('id')?.value,
          editFeatureForm.get('title')?.value,
          editFeatureForm.get('type')?.value,
          editFeatureForm.get('description')?.value
        )
      )
      .pipe(take(1))

      .subscribe(() =>
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        })
      );

  }
}
