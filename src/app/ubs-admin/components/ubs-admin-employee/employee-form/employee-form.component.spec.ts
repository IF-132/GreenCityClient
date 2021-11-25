import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { EmployeeFormComponent } from './employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

describe('EmployeeFormComponent', () => {
  let component: EmployeeFormComponent;
  let fixture: ComponentFixture<EmployeeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeFormComponent],
      imports: [MatDialogModule, HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule, TranslateModule.forRoot()],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Employee form should create', () => {
    expect(component).toBeTruthy();
  });

  it('Employee form should be invalid when empty', () => {
    expect(component.employeeForm.valid).toBeFalsy();
  });

  it('First name field should be invalid when empty', () => {
    const firstName = component.employeeForm.controls.firstName;
    expect(firstName.valid).toBeFalsy();
  });

  it('First name field should be invalid when user input numbers', () => {
    const firstName = component.employeeForm.controls.firstName;
    let errors = {};
    firstName.setValue('345');
    errors = firstName.errors || {};
    expect(Object.keys(errors)).toContain('pattern');
  });

  it('First name field should be invalid when user input punctuation marks like &?!', () => {
    const firstName = component.employeeForm.controls.firstName;
    let errors = {};
    firstName.setValue('$&?!');
    errors = firstName.errors || {};
    expect(Object.keys(errors)).toContain('pattern');
  });

  it('First name field should be valid when user input letters', () => {
    const firstName = component.employeeForm.controls.firstName;
    firstName.setValue('test');
    expect(firstName.valid).toBeTruthy();
  });

  it('First name field should be valid when user input ukrainian letters', () => {
    const firstName = component.employeeForm.controls.firstName;
    firstName.setValue('Тест');
    expect(firstName.valid).toBeTruthy();
  });

  it('First name field should be valid when user input name on other languages (korean for example)', () => {
    const firstName = component.employeeForm.controls.firstName;
    firstName.setValue('하');
    expect(firstName.valid).toBeTruthy();
  });

  it('First name field should be valid when user input letters, spaces, dashes and apostrophe', () => {
    const firstName = component.employeeForm.controls.firstName;
    firstName.setValue('Conan\'O-Brian Lionel');
    expect(firstName.valid).toBeTruthy();
  });

  it('Last name field should be invalid when empty', () => {
    const lastName = component.employeeForm.controls.lastName;
    expect(lastName.valid).toBeFalsy();
  });

  it('Last name field should be invalid when user input numbers', () => {
    const lastName = component.employeeForm.controls.lastName;
    let errors = {};
    lastName.setValue('678');
    errors = lastName.errors || {};
    expect(Object.keys(errors)).toContain('pattern');
  });

  it('Last name field should be invalid when user input punctuation marks like &?!', () => {
    const lastName = component.employeeForm.controls.lastName;
    let errors = {};
    lastName.setValue('$&?!');
    errors = lastName.errors || {};
    expect(Object.keys(errors)).toContain('pattern');
  });

  it('Last name field should be valid when user input letters', () => {
    const lastName = component.employeeForm.controls.lastName;
    lastName.setValue('test');
    expect(lastName.valid).toBeTruthy();
  });

  it('Last name field should be valid when user input ukrainian letters', () => {
    const lastName = component.employeeForm.controls.lastName;
    lastName.setValue('Тест');
    expect(lastName.valid).toBeTruthy();
  });

  it('Last name field should be valid when user input name on other languages (korean for example)', () => {
    const lastName = component.employeeForm.controls.lastName;
    lastName.setValue('현상');
    expect(lastName.valid).toBeTruthy();
  });

  it('Last name field should be valid when user input letters, spaces, dashes and apostrophe', () => {
    const lastName = component.employeeForm.controls.lastName;
    lastName.setValue('Mortimer\'D Chester-great-son');
    expect(lastName.valid).toBeTruthy();
  });

  it('Phone number field should be invalid when empty', () => {
    const phoneNumber = component.employeeForm.controls.phoneNumber;
    expect(phoneNumber.valid).toBeFalsy();
  });

  it('Phone number field should be valid with normal number', () => {
    const phoneNumber = component.employeeForm.controls.phoneNumber;
    phoneNumber.setValue('+380111111111');
    expect(phoneNumber.valid).toBeTruthy();
  });

  it('Form is invalid when phone number field value is too short', () => {
    const phoneNumber = component.employeeForm.controls.phoneNumber;
    phoneNumber.setValue('+3801111');
    expect(component.employeeForm.invalid).toBeTruthy();
  });

  it('Email field should be invalid when empty', () => {
    const email = component.employeeForm.controls.email;
    expect(email.valid).toBeFalsy();
  });

  it('Email field should be invalid without @ in the middle', () => {
    const email = component.employeeForm.controls.email;
    email.setValue('test');
    expect(email.invalid).toBeTruthy();
  });

  it('Email field should be valid with normal mail', () => {
    const email = component.employeeForm.controls.email;
    email.setValue('test@mail.com');
    expect(email.valid).toBeTruthy();
  });

  it('Form should be valid with all required fields filled (except employee position and receiving station)', () => {
    const firstName = component.employeeForm.controls.firstName;
    firstName.setValue('test');
    const lastName = component.employeeForm.controls.lastName;
    lastName.setValue('test');
    const phoneNumber = component.employeeForm.controls.phoneNumber;
    phoneNumber.setValue('+380111111111');
    const email = component.employeeForm.controls.email;
    email.setValue('test@mail.com');
    expect(component.employeeForm.valid).toBeTruthy();
  });
});
