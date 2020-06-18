/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CupomListaComponent } from './cupom-lista.component';

describe('CupomListaComponent', () => {
  let component: CupomListaComponent;
  let fixture: ComponentFixture<CupomListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupomListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupomListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
