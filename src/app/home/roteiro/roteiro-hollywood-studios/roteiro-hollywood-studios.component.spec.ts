/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoteiroHollywoodStudiosComponent } from './roteiro-hollywood-studios.component';

describe('RoteiroHollywoodStudiosComponent', () => {
  let component: RoteiroHollywoodStudiosComponent;
  let fixture: ComponentFixture<RoteiroHollywoodStudiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoteiroHollywoodStudiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoteiroHollywoodStudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
