/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoteiroAnimalKigdomComponent } from './roteiro-animal-kigdom.component';

describe('RoteiroAnimalKigdomComponent', () => {
  let component: RoteiroAnimalKigdomComponent;
  let fixture: ComponentFixture<RoteiroAnimalKigdomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoteiroAnimalKigdomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoteiroAnimalKigdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
