import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureIdContext } from '../../../application/ports/secondary/context/feature-id.context';
import { SELECTS_FEATURE_ID_CONTEXT, SelectsFeatureIdContextPort } from '../../../application/ports/secondary/context/selects-feature-id.context-port';

@Component({ selector: 'lib-edit-feature', templateUrl: './edit-feature.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class EditFeatureComponent {
  selectedFeatureId$: Observable<Partial<FeatureIdContext>> = this._selectsFeatureIdContext.select();

  constructor(@Inject(SELECTS_FEATURE_ID_CONTEXT) private _selectsFeatureIdContext: SelectsFeatureIdContextPort) {
  }
}
