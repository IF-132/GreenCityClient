import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBarComponent } from '@global-errors/mat-snack-bar/mat-snack-bar.component';
import { JwtService } from '@global-service/jwt/jwt.service';
import { LocalStorageService } from '@global-service/localstorage/local-storage.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OrderService } from '../../services/order.service';
import { UBSOrderFormService } from '../../services/ubs-order-form.service';

@Component({
  selector: 'app-ubs-confirm-page',
  templateUrl: './ubs-confirm-page.component.html',
  styleUrls: ['./ubs-confirm-page.component.scss']
})
export class UbsConfirmPageComponent implements OnInit, OnDestroy {
  orderId: string;
  responseStatus: string;
  orderResponseError = false;
  orderStatusDone: boolean;
  isSpinner = true;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBarComponent,
    private jwtService: JwtService,
    private ubsOrderFormService: UBSOrderFormService,
    private shareFormService: UBSOrderFormService,
    private localStorageService: LocalStorageService,
    private orderService: OrderService
  ) {}

  toPersonalAccount(): void {
    this.jwtService.userRole$.pipe(takeUntil(this.destroy$)).subscribe((userRole) => {
      const isAdmin = userRole === 'ROLE_ADMIN';
      this.saveDataOnLocalStorage();
      this.router.navigate([isAdmin ? 'ubs-admin' : 'ubs-user', 'orders']);
    });
  }

  ngOnInit() {
    this.ubsOrderFormService.orderId.pipe(takeUntil(this.destroy$)).subscribe((oderID) => {
      if (oderID) {
        this.orderId = JSON.parse(oderID).orderId;
        this.orderResponseError = this.ubsOrderFormService.getOrderResponseErrorStatus();
        this.orderStatusDone = this.ubsOrderFormService.getOrderStatus();
        this.renderView();
      } else {
        this.orderService
          .getUbsOrderStatus()
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            (response) => {
              this.orderResponseError = response.result === 'error';
              this.orderStatusDone = !this.orderResponseError;
              this.orderId = response.orderId ? response.orderId.split('_')[0] : this.localStorageService.getUbsFondyOrderId();
              this.renderView();
            },
            (error) => {
              this.orderResponseError = true;
              this.isSpinner = false;
              console.log(error);
            }
          );
      }
    });
  }

  renderView(): void {
    this.isSpinner = false;
    if (!this.orderResponseError && !this.orderStatusDone) {
      this.saveDataOnLocalStorage();
      this.snackBar.openSnackBar('successConfirmSaveOrder', this.orderId);
    } else if (!this.orderResponseError && this.orderStatusDone) {
      this.saveDataOnLocalStorage();
    }
  }

  saveDataOnLocalStorage(): void {
    this.shareFormService.isDataSaved = true;
    this.shareFormService.saveDataOnLocalStorage();
    this.localStorageService.removeUbsOrderId();
    this.localStorageService.removeUbsFondyOrderId();
  }

  returnToPayment() {
    this.router.navigateByUrl('/ubs/order');
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
