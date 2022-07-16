import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddsFeatureDtoPort } from '../../../application/ports/secondary/dto/adds-feature.dto-port';
import { GetsAllFeatureDtoPort } from '../../../application/ports/secondary/dto/gets-all-feature.dto-port';
import { FeatureDTO } from '../../../application/ports/secondary/dto/feature.dto';

@Injectable()
export class FirebaseFeaturesService implements AddsFeatureDtoPort, GetsAllFeatureDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(feature: Partial<FeatureDTO>): Observable<void> {
    return from(this._client.collection('features').add(feature)).pipe(map(() => void 0));
  }

  getAll(): Observable<FeatureDTO[]> {
    return this._client.collection<FeatureDTO>('features').valueChanges(({idField: 'id'}));
  }
}
