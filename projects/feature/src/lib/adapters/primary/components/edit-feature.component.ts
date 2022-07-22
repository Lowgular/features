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
  SELECTS_FEATURE_ID_CONTEXT,
  SelectsFeatureIdContextPort,
} from '../../../application/ports/secondary/context/selects-feature-id.context-port';
import {
  GETS_ONE_FEATURE_DTO,
  GetsOneFeatureDtoPort,
} from '../../../application/ports/secondary/dto/gets-one-feature.dto-port';
import {
  SETS_FEATURE_DTO,
  SetsFeatureDtoPort,
} from '../../../application/ports/secondary/dto/sets-feature.dto-port';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-edit-feature',
  templateUrl: './edit-feature.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditFeatureComponent {
  editFeatureForm$: Observable<FormGroup> = this._selectsFeatureIdContext
    .select()
    .pipe(
      switchMap((context) =>
        this._getsOneFeatureDto.getOne(context.selectedFeatureId as string)
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
    @Inject(SELECTS_FEATURE_ID_CONTEXT)
    private _selectsFeatureIdContext: SelectsFeatureIdContextPort,
    @Inject(GETS_ONE_FEATURE_DTO)
    private _getsOneFeatureDto: GetsOneFeatureDtoPort,
    @Inject(SETS_FEATURE_DTO) private _setsFeatureDto: SetsFeatureDtoPort,
    private router: Router
  ) {}

  onEditFeatureFormSubmited(editFeatureForm: FormGroup): void {
    this._setsFeatureDto
      .set({
        id: editFeatureForm.get('id')?.value,
        title: editFeatureForm.get('title')?.value,
        type: editFeatureForm.get('type')?.value,
        description: editFeatureForm.get('description')?.value,
      })
      .subscribe(() => this.router.navigate(['/']));
  }
}
