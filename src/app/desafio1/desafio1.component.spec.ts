import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desafio1Component } from './desafio1.component';

describe('Desafio1Component', () => {
  let component: Desafio1Component;
  let fixture: ComponentFixture<Desafio1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Desafio1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Desafio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
