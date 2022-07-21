import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from, of, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AddsFeatureDtoPort } from '../../../application/ports/secondary/dto/adds-feature.dto-port';
import { GetsAllFeatureDtoPort } from '../../../application/ports/secondary/dto/gets-all-feature.dto-port';
import { GetsOneFeatureDtoPort } from '../../../application/ports/secondary/dto/gets-one-feature.dto-port';
import { SetsFeatureDtoPort } from '../../../application/ports/secondary/dto/sets-feature.dto-port';
import { FeatureDTO } from '../../../application/ports/secondary/dto/feature.dto';

@Injectable()
export class FirebaseFeaturesService implements AddsFeatureDtoPort, GetsAllFeatureDtoPort, GetsOneFeatureDtoPort, SetsFeatureDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(feature: Partial<FeatureDTO>): Observable<void> {
    return from(this._client.collection('features').add(feature)).pipe(map(() => void 0));
  }

  getAll(): Observable<FeatureDTO[]> {
    return this._client.collection<FeatureDTO>('features').valueChanges(({idField: 'id'}));
  }

  getOne(id: string): Observable<FeatureDTO> {
    return this._client.doc<FeatureDTO>('features/'+id).valueChanges({idField: 'id'}).pipe(switchMap((item) => (item ? of(item) : throwError(new Error('Item does not exist in firebase')))));
  }

  set(feature: Partial<FeatureDTO>): Observable<void> {
    return from(this._client.doc('features/'+feature.id).update(feature)).pipe(map(() => void 0));
  }
}
