import { TestBed } from '@angular/core/testing';

import { CalculadorParcelasService } from './calculador-parcelas.service';

describe('CalculadorParcelasService', () => {
  let service: CalculadorParcelasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadorParcelasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
