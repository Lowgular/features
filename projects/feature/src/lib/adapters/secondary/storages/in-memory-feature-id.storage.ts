import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SetsStateFeatureIdContextPort } from '../../../application/ports/secondary/context/sets-state-feature-id.context-port';
import { FeatureIdContext } from '../../../application/ports/secondary/context/feature-id.context';

@Injectable()
export class InMemoryFeatureIdStorage implements SetsStateFeatureIdContextPort {
  private _subject: Subject<Partial<FeatureIdContext>> = new BehaviorSubject<
    Partial<FeatureIdContext>
  >({});

  setFeatureId(featureId: FeatureIdContext): Observable<void> {
    return of(this._subject.next(featureId)).pipe(map(() => void 0));
  }
}
