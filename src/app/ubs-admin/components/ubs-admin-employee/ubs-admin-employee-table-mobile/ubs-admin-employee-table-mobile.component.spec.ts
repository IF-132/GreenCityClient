import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Page } from 'src/app/ubs-admin/models/ubs-admin.interface';
import { createTranslateLoaderUbs } from 'src/app/ubs-admin/ubs-admin.module';
import { UbsAdminEmployeeMethodsClass } from '../ubs-admin-abstract/ubs-admin-employee-methods';

import { UbsAdminEmployeeTableMobileComponent } from './ubs-admin-employee-table-mobile.component';

class AdminEmployeeTableStub {
  openModalWindow() {}
  toDeleteEmployee() {}
}

describe('UbsAdminEmployeeTableMobileComponent', () => {
  let component: UbsAdminEmployeeTableMobileComponent;
  let fixture: ComponentFixture<UbsAdminEmployeeTableMobileComponent>;
  let employeeTableFunc: UbsAdminEmployeeMethodsClass;
  const mockUpPageData: Page = {
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
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoaderUbs,
            deps: [HttpClient]
          },
          isolate: true
        })
      ],
      providers: [
        { provide: UbsAdminEmployeeMethodsClass, useClass: AdminEmployeeTableStub },
        { provide: HttpClient, useValue: true }
      ]
    }).compileComponents();

    employeeTableFunc = TestBed.inject(UbsAdminEmployeeMethodsClass);
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

  it(' check setChooseItem function', () => {
    component.setChooseItem(2);
    expect(component.chooseItemId).toBe(2);
  });
});
