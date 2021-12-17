import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, async, tick, inject } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Employees } from 'src/app/ubs-admin/models/ubs-admin.interface';
import { UbsAdminEmployeeService } from 'src/app/ubs-admin/services/ubs-admin-employee.service';
import { UbsAdminEmployeeTableComponent } from './ubs-admin-employee-table.component';

describe('UbsAdminEmployeeTableComponent', () => {
  let component: UbsAdminEmployeeTableComponent;
  let fixture: ComponentFixture<UbsAdminEmployeeTableComponent>;
  let adminEmployeeService: UbsAdminEmployeeService;
  const employeesMockUp: Employees = {
    currentPage: 1,
    first: true,
    hasNext: true,
    hasPrevious: false,
    last: false,
    number: 2,
    content: [
      {
        id: 3,
        firstName: 'Andrii',
        lastName: 'K',
        email: 'and@aka.com',
        phoneNumber: '+380507770000',
        employeePositions: [],
        image: 'image',
        receivingStations: []
      }
    ],
    totalElements: 1,
    totalPages: 2
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UbsAdminEmployeeTableComponent],
      imports: [HttpClientTestingModule, MatDialogModule],
      providers: [UbsAdminEmployeeService]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UbsAdminEmployeeTableComponent);
    component = fixture.componentInstance;
    adminEmployeeService = TestBed.inject(UbsAdminEmployeeService);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check initial value of variables', () => {
    expect(component.currentPageForTable).toBe(0);
    expect(component.isUpdateTable).toBe(false);
  });

  it('ngOnInit function check', () => {
    const spy = spyOn(component, 'getTable');

    component.ngOnInit();
    expect(component.screenWidth).toBeDefined();
    expect(spy).toHaveBeenCalled();
  });

  it('getEmployees function must return list of Employee', () => {
    const response = employeesMockUp;
    const spy = spyOn(component, 'setDisplayedColumns');
    adminEmployeeService = TestBed.inject(UbsAdminEmployeeService);
    spyOn(adminEmployeeService, 'getEmployees').and.returnValue(of(response));

    component.getTable();
    expect(component.tableData).toBe(response.content);
    expect(component.totalPagesForTable).toBe(response.totalPages);
    expect(spy).toHaveBeenCalled();
    expect(component.isLoading).toBe(false);
    expect(component.isUpdateTable).toBe(false);
  });

  it('setDisplayedColumns function check', () => {
    const mockData = ['editOrDelete', 'fullName', 'position', 'location', 'email', 'phoneNumber'];
    component.setDisplayedColumns();
    expect(component.displayedColumns).toEqual(mockData);
  });

  it('updateTable function check', () => {
    adminEmployeeService = TestBed.inject(UbsAdminEmployeeService);

    component.updateTable();
    expect(component.isUpdateTable).toBe(true);
    component.isUpdateTable = false;
    expect(component.isUpdateTable).toBe(false);
  });

  it('onScroll function check', () => {
    component.currentPageForTable = 1;
    const updateTable = false;
    const currentPage = 1;
    const totalPages = 2;
    component.onScroll();
    if (!updateTable && currentPage < totalPages) {
      component.currentPageForTable++;
      expect(component.currentPageForTable).toBe(2);
    }
  });

  it('openPositions function check', () => {
    component.isPositionsOpen = true;
    component.openPositions();
    component.isPositionsOpen = false;
    expect(component.isPositionsOpen).toBe(false);
  });
});
