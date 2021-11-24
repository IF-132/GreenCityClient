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
    let firstName = component.employeeForm.controls['firstName'];
    expect(firstName.valid).toBeFalsy();
  });

  it('First name field should be invalid when user input numbers', () => {
    let firstName = component.employeeForm.controls['firstName'];
    let errors = {};
    firstName.setValue('345');
    errors = firstName.errors || {};
    expect(errors['pattern']).toBeTruthy();
  });

  it('First name field should be invalid when user input punctuation marks like &?!', () => {
    let firstName = component.employeeForm.controls['firstName'];
    let errors = {};
    firstName.setValue('$&?!');
    errors = firstName.errors || {};
    expect(errors['pattern']).toBeTruthy();
  });

  it('First name field should be valid when user input letters', () => {
    let firstName = component.employeeForm.controls['firstName'];
    firstName.setValue('test');
    expect(firstName.valid).toBeTruthy();
  });

  it('First name field should be valid when user input ukrainian letters', () => {
    let firstName = component.employeeForm.controls['firstName'];
    firstName.setValue('Тест');
    expect(firstName.valid).toBeTruthy();
  });

  it('First name field should be valid when user input name on other languages (korean for example)', () => {
    let firstName = component.employeeForm.controls['firstName'];
    firstName.setValue('하');
    expect(firstName.valid).toBeTruthy();
  });

  it('First name field should be valid when user input letters, spaces, dashes and apostrophe', () => {
    let firstName = component.employeeForm.controls['firstName'];
    firstName.setValue("Conan'O-Brian Lionel");
    expect(firstName.valid).toBeTruthy();
  });

  it('Last name field should be invalid when empty', () => {
    let lastName = component.employeeForm.controls['lastName'];
    expect(lastName.valid).toBeFalsy();
  });

  it('Last name field should be invalid when user input numbers', () => {
    let lastName = component.employeeForm.controls['lastName'];
    let errors = {};
    lastName.setValue('678');
    errors = lastName.errors || {};
    expect(errors['pattern']).toBeTruthy();
  });

  it('Last name field should be invalid when user input punctuation marks like &?!', () => {
    let lastName = component.employeeForm.controls['lastName'];
    let errors = {};
    lastName.setValue('$&?!');
    errors = lastName.errors || {};
    expect(errors['pattern']).toBeTruthy();
  });

  it('Last name field should be valid when user input letters', () => {
    let lastName = component.employeeForm.controls['lastName'];
    lastName.setValue('test');
    expect(lastName.valid).toBeTruthy();
  });

  it('Last name field should be valid when user input ukrainian letters', () => {
    let lastName = component.employeeForm.controls['lastName'];
    lastName.setValue('Тест');
    expect(lastName.valid).toBeTruthy();
  });

  it('Last name field should be valid when user input name on other languages (korean for example)', () => {
    let lastName = component.employeeForm.controls['lastName'];
    lastName.setValue('현상');
    expect(lastName.valid).toBeTruthy();
  });

  it('Last name field should be valid when user input letters, spaces, dashes and apostrophe', () => {
    let lastName = component.employeeForm.controls['lastName'];
    lastName.setValue("Mortimer'D Chester-great-son");
    expect(lastName.valid).toBeTruthy();
  });

  it('Phone number field should be invalid when empty', () => {
    let phoneNumber = component.employeeForm.controls['phoneNumber'];
    expect(phoneNumber.valid).toBeFalsy();
  });

  it('Phone number field should be valid with normal number', () => {
    let phoneNumber = component.employeeForm.controls['phoneNumber'];
    phoneNumber.setValue('+380111111111');
    expect(phoneNumber.valid).toBeTruthy();
  });

  it('Form is invalid when phone number field value is too short', () => {
    let phoneNumber = component.employeeForm.controls['phoneNumber'];
    phoneNumber.setValue('+3801111');
    expect(component.employeeForm.invalid).toBeTruthy();
  });

  it('Email field should be invalid when empty', () => {
    let email = component.employeeForm.controls['email'];
    expect(email.valid).toBeFalsy();
  });

  it('Email field should be invalid without @ in the middle', () => {
    let email = component.employeeForm.controls['email'];
    email.setValue('test');
    expect(email.invalid).toBeTruthy();
  });

  it('Email field should be valid with normal mail', () => {
    let email = component.employeeForm.controls['email'];
    email.setValue('test@mail.com');
    expect(email.valid).toBeTruthy();
  });

  it('Form should be valid with all required fields filled (except employee position and receiving station)', () => {
    let firstName = component.employeeForm.controls['firstName'];
    firstName.setValue('test');
    let lastName = component.employeeForm.controls['lastName'];
    lastName.setValue('test');
    let phoneNumber = component.employeeForm.controls['phoneNumber'];
    phoneNumber.setValue('+380111111111');
    let email = component.employeeForm.controls['email'];
    email.setValue('test@mail.com');
    expect(component.employeeForm.valid).toBeTruthy();
  });
});
