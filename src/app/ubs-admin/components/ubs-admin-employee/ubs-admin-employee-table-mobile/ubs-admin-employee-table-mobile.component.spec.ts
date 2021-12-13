import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { Page } from 'src/app/ubs-admin/models/ubs-admin.interface';
import { UbsAdminEmployeeTableComponent } from '../ubs-admin-employee-table/ubs-admin-employee-table.component';

import { UbsAdminEmployeeTableMobileComponent } from './ubs-admin-employee-table-mobile.component';

class AdminEmployeeTableStub {
  openModal() {}
  deleteEmployee() {}
}

describe('UbsAdminEmployeeTableMobileComponent', () => {
  let component: UbsAdminEmployeeTableMobileComponent;
  let fixture: ComponentFixture<UbsAdminEmployeeTableMobileComponent>;
  let employeeTableFunc: UbsAdminEmployeeTableComponent;
  let mockUpPageData: Page = {
    id: 3,
    firstName: 'Andrii',
    lastName: 'K',
    email: 'and@aka.com',
    phoneNumber: '+380507770000',
    employeePositions: [],
    image: 'image',
    receivingStations: []
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UbsAdminEmployeeTableMobileComponent],
      imports: [HttpClientTestingModule, MatDialogModule],
      providers: [{ provide: UbsAdminEmployeeTableComponent, useClass: AdminEmployeeTableStub }]
    }).compileComponents();

    employeeTableFunc = TestBed.get(UbsAdminEmployeeTableComponent);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbsAdminEmployeeTableMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('detecting initial value of variables', () => {
    expect(component.isLoading).toBeTruthy();
    expect(component.chooseItemId).toBe(0);
  });

  it('check openModal function', () => {
    spyOn(employeeTableFunc, 'openModal');
    component.openModal(mockUpPageData);
    expect(employeeTableFunc.openModal).toHaveBeenCalledWith(mockUpPageData);
  });

  it('check deleteEmployee function', () => {
    spyOn(employeeTableFunc, 'deleteEmployee');
    component.deleteEmployee(2);
    expect(employeeTableFunc.deleteEmployee).toHaveBeenCalledWith(2);
  });

  it(' check setChooseItem function', () => {
    component.setChooseItem(2);
    expect(component.chooseItemId).toBe(2);
  });
});
