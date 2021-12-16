import { MatDialog } from '@angular/material/dialog';
import { Page } from 'ngx-pagination/dist/pagination-controls.directive';
import { take } from 'rxjs/operators';
import { UbsAdminEmployeeService } from 'src/app/ubs-admin/services/ubs-admin-employee.service';
import { DialogPopUpComponent } from '../../shared/components/dialog-pop-up/dialog-pop-up.component';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

export abstract class UbsAdminEmployeeMethodsClass {
  deleteDialogData = {
    popupTitle: 'employees.warning-title',
    popupConfirm: 'employees.btn.yes',
    popupCancel: 'employees.btn.no'
  };

  constructor(private matDialog: MatDialog, private adminEmployeeService: UbsAdminEmployeeService) {}

  openModalWindow(employeeData) {
    this.matDialog.open(EmployeeFormComponent, {
      data: employeeData,
      hasBackdrop: true,
      closeOnNavigation: true,
      disableClose: true,
      panelClass: 'custom-dialog-container'
    });
  }

  toDeleteEmployee(employeeId: number) {
    const matDialogRef = this.matDialog.open(DialogPopUpComponent, {
      data: this.deleteDialogData,
      hasBackdrop: true,
      closeOnNavigation: true,
      disableClose: true,
      panelClass: ''
    });

    matDialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.adminEmployeeService.deleteEmployee(employeeId).subscribe();
        }
      });
  }
}
