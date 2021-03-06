/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProgramEditComponent } from './program-edit.component';

describe('ProgramEditComponent', () => {
  let component: ProgramEditComponent;
  let fixture: ComponentFixture<ProgramEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
