import { Component, DoCheck, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Page } from 'src/app/ubs-admin/models/ubs-admin.interface';
import { UbsAdminEmployeeService } from 'src/app/ubs-admin/services/ubs-admin-employee.service';
import { UbsAdminEmployeeMethodsClass } from '../ubs-admin-abstract/ubs-admin-employee-methods';
import { UbsAdminEmployeeTableComponent } from '../ubs-admin-employee-table/ubs-admin-employee-table.component';

@Component({
  selector: 'app-ubs-admin-employee-table-mobile',
  templateUrl: './ubs-admin-employee-table-mobile.component.html',
  styleUrls: ['./ubs-admin-employee-table-mobile.component.scss']
})
export class UbsAdminEmployeeTableMobileComponent extends UbsAdminEmployeeMethodsClass implements DoCheck {
  @Input()
  dataSource;

  @Input()
  screenWidth: number;

  isLoading = true;
  chooseItemId = 0;

  constructor(private ubsAdminEmployeeService: UbsAdminEmployeeService, private dialog: MatDialog) {
    super(dialog, ubsAdminEmployeeService);
  }

  ngDoCheck(): void {
    if (this.dataSource) {
      this.isLoading = false;
    }
  }

  openModal(employeeData: Page): void {
    this.openModalWindow(employeeData);
  }

  deleteEmployee(employeeId: number) {
    this.toDeleteEmployee(employeeId);
  }

  setChooseItem(itemId: number): void {
    this.chooseItemId = itemId;
  }

  identify(index: number, item: Page) {
    return item.id;
  }
}
