import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SetsStateFeatureContextPort } from '../../../application/ports/secondary/context/sets-state-feature.context-port';
import { SelectsFeatureContextPort } from '../../../application/ports/secondary/context/selects-feature.context-port';
import { FeatureContext } from '../../../application/ports/secondary/context/feature.context';

@Injectable()
export class InMemoryFeaturesStorage implements SetsStateFeatureContextPort, SelectsFeatureContextPort {
  private _subject: Subject<Partial<FeatureContext>> = new BehaviorSubject<Partial<FeatureContext>>({});

  setState(state: FeatureContext): Observable<void> {
    return of(this._subject.next(state)).pipe(map(() => void 0));
  }

  select(): Observable<Partial<FeatureContext>> {
    return this._subject.asObservable();
  }
}
