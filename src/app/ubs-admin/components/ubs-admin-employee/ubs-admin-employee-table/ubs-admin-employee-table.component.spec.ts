import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { UbsAdminEmployeeService } from 'src/app/ubs-admin/services/ubs-admin-employee.service';
import { UbsAdminEmployeeTableComponent } from './ubs-admin-employee-table.component';

describe('UbsAdminEmployeeTableComponent', () => {
  let component: UbsAdminEmployeeTableComponent;
  let fixture: ComponentFixture<UbsAdminEmployeeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UbsAdminEmployeeTableComponent],
      imports: [HttpClientTestingModule, MatDialogModule],
      providers: [UbsAdminEmployeeService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbsAdminEmployeeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check initial value of variables', () => {
    expect(component.currentPageForTable).toBe(0);
    expect(component.isUpdateTable).toBe(false);
  });

  it('ngOnInit function check', () => {
    let spy = spyOn(component, 'getTable');

    component.ngOnInit();
    expect(component.screenWidth).toBeDefined();
    expect(spy).toHaveBeenCalled();
  });

  it('getEmployees function must return list of Employee', async () => {
    component.getTable();
  });
});
