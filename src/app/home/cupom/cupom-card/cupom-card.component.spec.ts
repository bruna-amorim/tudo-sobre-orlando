/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CupomCardComponent } from './cupom-card.component';

describe('CupomCardComponent', () => {
  let component: CupomCardComponent;
  let fixture: ComponentFixture<CupomCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupomCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
