import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseFeaturesService } from './firebase-features.service';
import { ADDS_FEATURE_DTO } from '../../../application/ports/secondary/dto/adds-feature.dto-port';
import { GETS_ALL_FEATURE_DTO } from '../../../application/ports/secondary/dto/gets-all-feature.dto-port';
import { GETS_ONE_FEATURE_DTO } from '../../../application/ports/secondary/dto/gets-one-feature.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseFeaturesService, { provide: ADDS_FEATURE_DTO, useExisting: FirebaseFeaturesService }, { provide: GETS_ALL_FEATURE_DTO, useExisting: FirebaseFeaturesService }, { provide: GETS_ONE_FEATURE_DTO, useExisting: FirebaseFeaturesService }],
  	exports: [] })
export class FirebaseFeaturesServiceModule {
}
