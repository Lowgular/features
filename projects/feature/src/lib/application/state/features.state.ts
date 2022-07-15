import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddFeatureCommandPort } from '../ports/primary/command/add-feature.command-port';
import {
  ADDS_FEATURE_DTO,
  AddsFeatureDtoPort,
} from '../ports/secondary/dto/adds-feature.dto-port';
import { AddFeatureCommand } from '../ports/primary/command/add-feature.command';

@Injectable()
export class FeaturesState implements AddFeatureCommandPort {
  constructor(
    @Inject(ADDS_FEATURE_DTO) private _addsFeatureDto: AddsFeatureDtoPort
  ) {}

  addFeature(command: AddFeatureCommand): Observable<void> {
    return this._addsFeatureDto.add({
      title: command.title,
      description: command.description,
      type: command.type,
      status: 'pending',
      creator: 'test creator id',
      voters: ['test creator id'],
    });
  }
}
