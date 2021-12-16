import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UbsAdminEmployeeService } from './ubs-admin-employee.service';

describe('UbsAdminEmployeeService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UbsAdminEmployeeService]
    })
  );

  it('should be created', () => {
    const service: UbsAdminEmployeeService = TestBed.inject(UbsAdminEmployeeService);
    expect(service).toBeTruthy();
  });
});
