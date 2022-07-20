import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, switchMap } from 'rxjs';
import { FeatureIdContext } from '../../../application/ports/secondary/context/feature-id.context';
import {
  SELECTS_FEATURE_ID_CONTEXT,
  SelectsFeatureIdContextPort,
} from '../../../application/ports/secondary/context/selects-feature-id.context-port';
import { FeatureDTO } from '../../../application/ports/secondary/dto/feature.dto';
import {
  GetsOneFeatureDtoPort,
  GETS_ONE_FEATURE_DTO,
} from '../../../application/ports/secondary/dto/gets-one-feature.dto-port';

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
    private _getsOneFeatureDto: GetsOneFeatureDtoPort
  ) {}
}
