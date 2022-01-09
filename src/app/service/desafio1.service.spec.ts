import { TestBed } from '@angular/core/testing';

import { Desafio1Service } from './desafio1.service';

describe('Desafio1Service', () => {
  let service: Desafio1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Desafio1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
