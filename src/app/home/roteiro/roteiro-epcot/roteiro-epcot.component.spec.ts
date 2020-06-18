/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoteiroEpcotComponent } from './roteiro-epcot.component';

describe('RoteiroEpcotComponent', () => {
  let component: RoteiroEpcotComponent;
  let fixture: ComponentFixture<RoteiroEpcotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoteiroEpcotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoteiroEpcotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
