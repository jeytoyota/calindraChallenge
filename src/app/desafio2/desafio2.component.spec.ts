import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desafio2Component } from './desafio2.component';

describe('Desafio2Component', () => {
  let component: Desafio2Component;
  let fixture: ComponentFixture<Desafio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Desafio2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Desafio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
