/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TemperaturaService } from './temperatura.service';

describe('Service: Temperatura', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemperaturaService]
    });
  });

  it('should ...', inject([TemperaturaService], (service: TemperaturaService) => {
    expect(service).toBeTruthy();
  }));
});
