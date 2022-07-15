import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateFeatureCommandPort } from '../ports/primary/command/add-feature.command-port';
import {
  ADDS_FEATURE_DTO,
  AddsFeatureDtoPort,
} from '../ports/secondary/dto/adds-feature.dto-port';
import { CreateFeatureCommand } from '../ports/primary/command/add-feature.command';

@Injectable()
export class FeaturesState implements CreateFeatureCommandPort {
  constructor(
    @Inject(ADDS_FEATURE_DTO) private _addsFeatureDto: AddsFeatureDtoPort
  ) {}

  createFeature(command: CreateFeatureCommand): Observable<void> {
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
