/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DolarService } from './dolar.service';

describe('Service: Dolar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DolarService]
    });
  });

  it('should ...', inject([DolarService], (service: DolarService) => {
    expect(service).toBeTruthy();
  }));
});
