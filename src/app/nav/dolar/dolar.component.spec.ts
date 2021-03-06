/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DolarComponent } from './dolar.component';

describe('DolarComponent', () => {
  let component: DolarComponent;
  let fixture: ComponentFixture<DolarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DolarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
