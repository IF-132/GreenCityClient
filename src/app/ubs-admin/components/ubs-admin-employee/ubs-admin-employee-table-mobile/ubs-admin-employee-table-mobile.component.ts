import { Component, DoCheck, Input } from '@angular/core';
import { Page } from 'src/app/ubs-admin/models/ubs-admin.interface';
import { UbsAdminEmployeeTableComponent } from '../ubs-admin-employee-table/ubs-admin-employee-table.component';

@Component({
  selector: 'app-ubs-admin-employee-table-mobile',
  templateUrl: './ubs-admin-employee-table-mobile.component.html',
  styleUrls: ['./ubs-admin-employee-table-mobile.component.scss']
})
export class UbsAdminEmployeeTableMobileComponent implements DoCheck {
  @Input()
  dataSource;

  @Input()
  screenWidth: number;

  isLoading = true;
  chooseItemId = 0;

  constructor(private employeeTableFunc: UbsAdminEmployeeTableComponent) {}

  ngDoCheck(): void {
    if (this.dataSource) {
      this.isLoading = false;
    }
  }

  openModal(employeeData: Page): void {
    this.employeeTableFunc.openModal(employeeData);
  }

  deleteEmployee(employeeId: number) {
    this.employeeTableFunc.deleteEmployee(employeeId);
  }

  setChooseItem(itemId: number): void {
    this.chooseItemId = itemId;
  }
}
