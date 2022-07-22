import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SetsStateFeatureIdContextPort } from '../../../application/ports/secondary/context/sets-state-feature-id.context-port';
import { SelectsFeatureIdContextPort } from '../../../application/ports/secondary/context/selects-feature-id.context-port';
import { FeatureIdContext } from '../../../application/ports/secondary/context/feature-id.context';
import { SetFeatureIdCommand } from '../../../application/ports/primary/command/set-feature-id.command';

@Injectable()
export class InMemoryFeatureIdStorage
  implements SetsStateFeatureIdContextPort, SelectsFeatureIdContextPort
{
  private _subject: Subject<Partial<FeatureIdContext>> = new BehaviorSubject<
    Partial<FeatureIdContext>
  >({});


  setFeatureId(selectedFeatureId: string): Observable<void> {
    return of(this._subject.next({ selectedFeatureId })).pipe(
      map(() => void 0)
    );

  }

  select(): Observable<Partial<FeatureIdContext>> {
    return this._subject.asObservable();
  }
}
