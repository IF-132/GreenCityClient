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

  function fillAllFields(firstNameValue: string, lastNameValue: string, phoneNumberValue: string, emailValue: string) {
    const firstName = component.employeeForm.controls.firstName;
    firstName.setValue(firstNameValue);
    const lastName = component.employeeForm.controls.lastName;
    lastName.setValue(lastNameValue);
    const phoneNumber = component.employeeForm.controls.phoneNumber;
    phoneNumber.setValue(phoneNumberValue);
    const email = component.employeeForm.controls.email;
    email.setValue(emailValue);
  }

  const validValues = {
    name: 'test',
    phone: '+380111111111',
    mail: 'test@mail.com'
  };

  it('Employee form should create', () => {
    expect(component).toBeTruthy();
  });

  it('Employee form should be invalid when all fields are empty', () => {
    fillAllFields('', '', '', '');
    expect(component.employeeForm.valid).toBeFalsy();
  });

  it('Form should be invalid when First name field is empty', () => {
    fillAllFields('', validValues.name, validValues.phone, validValues.mail);
    expect(component.employeeForm.valid).toBeFalsy();
  });

  it('First name field should be invalid when user input numbers', () => {
    const firstName = component.employeeForm.controls.firstName;
    firstName.setValue('345');
    expect(firstName.errors.pattern).toBeTruthy();
  });

  it('First name field should be invalid when user input punctuation marks like &?!', () => {
    const firstName = component.employeeForm.controls.firstName;
    firstName.setValue('$&?!');
    expect(firstName.errors.pattern).toBeTruthy();
  });

  it('First name field should be valid when user input letters', () => {
    const firstName = component.employeeForm.controls.firstName;
    firstName.setValue('Test');
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
    firstName.setValue("Conan'O-Brian Lionel");
    expect(firstName.valid).toBeTruthy();
  });

  it('Form should be invalid when Last name field is empty', () => {
    fillAllFields(validValues.name, '', validValues.phone, validValues.mail);
    expect(component.employeeForm.valid).toBeFalsy();
  });

  it('Last name field should be invalid when user input numbers', () => {
    const lastName = component.employeeForm.controls.lastName;
    lastName.setValue('678');
    expect(lastName.errors.pattern).toBeTruthy();
  });

  it('Last name field should be invalid when user input punctuation marks like &?!', () => {
    const lastName = component.employeeForm.controls.lastName;
    lastName.setValue('$&?!');
    expect(lastName.errors.pattern).toBeTruthy();
  });

  it('Last name field should be valid when user input letters', () => {
    const lastName = component.employeeForm.controls.lastName;
    lastName.setValue('Test');
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
    lastName.setValue("Mortimer'D Chester-great-son");
    expect(lastName.valid).toBeTruthy();
  });

  it('Form should be invalid when Phone number field is empty', () => {
    fillAllFields(validValues.name, validValues.name, '', validValues.mail);
    expect(component.employeeForm.valid).toBeFalsy();
  });

  it('Phone number field should be valid with normal number', () => {
    const phoneNumber = component.employeeForm.controls.phoneNumber;
    phoneNumber.setValue(validValues.phone);
    expect(phoneNumber.valid).toBeTruthy();
  });

  it('Form should be invalid when phone number field value is too short', () => {
    fillAllFields(validValues.name, validValues.name, '+3801111', validValues.mail);
    expect(component.employeeForm.invalid).toBeTruthy();
  });

  it('Form should be invalid when Email field is empty', () => {
    fillAllFields(validValues.name, validValues.name, validValues.phone, '');
    expect(component.employeeForm.valid).toBeFalsy();
  });

  it('Email field should be invalid without @ in the middle', () => {
    const email = component.employeeForm.controls.email;
    email.setValue('test');
    expect(email.invalid).toBeTruthy();
  });

  it('Email field should be valid with normal mail', () => {
    const email = component.employeeForm.controls.email;
    email.setValue(validValues.mail);
    expect(email.valid).toBeTruthy();
  });

  it('Form should be valid with all required fields filled (except employee position and receiving station)', () => {
    fillAllFields(validValues.name, validValues.name, validValues.phone, validValues.mail);
    expect(component.employeeForm.valid).toBeTruthy();
  });
});
