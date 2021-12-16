import { Component, HostListener, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Page } from 'src/app/ubs-admin/models/ubs-admin.interface';
import { UbsAdminEmployeeService } from 'src/app/ubs-admin/services/ubs-admin-employee.service';
import { UbsAdminEmployeeMethodsClass } from '../ubs-admin-abstract/ubs-admin-employee-methods';

@Component({
  selector: 'app-ubs-admin-employee-table',
  templateUrl: './ubs-admin-employee-table.component.html',
  styleUrls: ['./ubs-admin-employee-table.component.scss']
})
export class UbsAdminEmployeeTableComponent extends UbsAdminEmployeeMethodsClass implements OnInit {
  currentPageForTable = 0;
  isUpdateTable = false;
  isLoading = true;
  sizeForTable = 30;
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  arrayOfHeaders = [];
  totalPagesForTable: number;
  tableData: any[];
  isStationsOpen = false;
  isPositionsOpen = false;
  allPositions: any[] = [];
  allStations: any[] = [];
  selectedStations: string[] = [];
  selectedPositions: string[] = [];
  filteredTableData: any[] = [];
  deleteDialogData = {
    popupTitle: 'employees.warning-title',
    popupConfirm: 'employees.btn.yes',
    popupCancel: 'employees.btn.no'
  };
  screenWidth: number;
  constructor(private ubsAdminEmployeeService: UbsAdminEmployeeService, private dialog: MatDialog) {
    super(dialog, ubsAdminEmployeeService);
  }

  ngOnInit(): void {
    this.getTable();
    this.screenWidth = window.innerWidth;
  }

  getTable() {
    this.isLoading = true;
    this.ubsAdminEmployeeService.getEmployees(this.currentPageForTable, this.sizeForTable).subscribe((item) => {
      this.tableData = item[`content`];
      this.totalPagesForTable = item[`totalPages`];
      this.dataSource = new MatTableDataSource(this.tableData);
      this.setDisplayedColumns();
      this.isLoading = false;
      this.isUpdateTable = false;
    });
  }

  setDisplayedColumns() {
    this.displayedColumns = ['editOrDelete', 'fullName', 'position', 'location', 'email', 'phoneNumber'];
  }

  updateTable() {
    this.isUpdateTable = true;
    this.ubsAdminEmployeeService.getEmployees(this.currentPageForTable, this.sizeForTable).subscribe((item) => {
      this.tableData.push(...item[`content`]);
      this.dataSource.data = this.tableData;
      this.isUpdateTable = false;
    });
  }

  onScroll() {
    if (!this.isUpdateTable && this.currentPageForTable < this.totalPagesForTable - 1) {
      this.currentPageForTable++;
      this.updateTable();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openPositions() {
    this.isPositionsOpen = !this.isPositionsOpen;
    this.isStationsOpen = false;
    if (this.allPositions.length === 0) {
      this.ubsAdminEmployeeService.getAllPositions().subscribe((pos) => {
        this.allPositions = pos;
      });
    }
    if (this.isPositionsOpen === false) {
      this.selectedPositions = [];
    }
  }

  getPositionId(e: any, id: string) {
    if (e.target.checked) {
      this.selectedPositions.push(id);
      this.positionsFilter();
    } else {
      this.selectedPositions = this.selectedPositions.filter((m) => m !== id);
      this.positionsFilter();
    }
  }

  positionsFilter() {
    if (this.selectedPositions.length !== 0) {
      this.onPositionSelected();
    } else if (this.selectedStations.length === 0 && this.selectedPositions.length === 0) {
      this.dataSource.data = this.tableData;
    }
  }

  onPositionSelected() {
    this.filteredTableData = this.tableData.filter((user) => {
      return user.employeePositions.some((position) => {
        return this.selectedPositions.some((ids) => position.id === ids);
      });
    });
    this.dataSource.data = this.filteredTableData;
  }

  getStationId(e: any, id: string) {
    if (e.target.checked) {
      this.selectedStations.push(id);
      this.stationsFilter();
    } else {
      this.selectedStations = this.selectedStations.filter((m) => m !== id);
      this.stationsFilter();
    }
  }

  stationsFilter() {
    if (this.selectedStations.length !== 0) {
      this.onStationSelected();
    } else if (this.selectedPositions.length === 0 && this.selectedStations.length === 0) {
      this.dataSource.data = this.tableData;
    }
  }

  onStationSelected() {
    this.filteredTableData = this.tableData.filter((user) => {
      return user.receivingStations.some((station) => {
        return this.selectedStations.some((ids) => station.id === ids);
      });
    });
    this.dataSource.data = this.filteredTableData;
  }

  openStations() {
    this.isStationsOpen = !this.isStationsOpen;
    this.isPositionsOpen = false;
    if (this.allStations.length === 0) {
      this.ubsAdminEmployeeService.getAllStations().subscribe((stations) => {
        this.allStations = stations;
      });
    }
    if (this.isStationsOpen === false) {
      this.selectedStations = [];
    }
  }

  openModal(employeeData: Page) {
    this.openModalWindow(employeeData);
  }

  deleteEmployee(employeeId: number) {
    this.toDeleteEmployee(employeeId);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    return !(this.screenWidth < 782 && this.screenWidth > 319);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.onToggleScrollBtn();
  }
  onToggleScrollBtn() {
    const btnElement = document.getElementById('swipeTopBtn');
    btnElement.style.display = document.body.scrollTop > 300 || document.documentElement.scrollTop > 300 ? 'block' : 'none';
  }

  goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
