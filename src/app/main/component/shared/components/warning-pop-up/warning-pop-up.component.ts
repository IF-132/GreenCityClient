import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OrderService } from '../../../ubs/services/order.service';

@Component({
  selector: 'app-warning-pop-up',
  templateUrl: './warning-pop-up.component.html',
  styleUrls: ['./warning-pop-up.component.scss']
})
export class WarningPopUpComponent implements OnInit, OnDestroy {
  public popupTitle: string;
  public popupSubtitle: string;
  public popupConfirm: string;
  public popupCancel: string;
  public closeButton = './assets/img/profile/icons/cancel.svg';
  public deleteButtonVisible: boolean;
  private destroyed$: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public router: Router,
    public orderService: OrderService,
    private matDialogRef: MatDialogRef<WarningPopUpComponent>
  ) {
    this.orderService.isStepperFinalSubject.subscribe((stepperPosition: boolean) => {
      this.deleteButtonVisible = stepperPosition;
    });
  }

  ngOnInit() {
    this.setTitles();
    this.matDialogRef
      .keydownEvents()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((event) => {
        if (event.key === 'Escape') {
          this.userReply(false);
        }
        if (event.key === 'Enter') {
          this.userReply(true);
        }
      });
    this.matDialogRef
      .backdropClick()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => this.userReply(false));
  }

  private setTitles(): void {
    this.popupTitle = this.data.popupTitle;
    this.popupSubtitle = this.data.popupSubtitle;
    this.popupConfirm = this.data.popupConfirm;
    this.popupCancel = this.data.popupCancel;
  }

  public userReply(reply: boolean): void {
    if (reply) {
      localStorage.removeItem('newsTags');
    }

    this.matDialogRef.close(reply);
  }

  cancelUBSwithoutSaving(): void {
    this.orderService.cancelUBSwithoutSaving();
    this.router.navigateByUrl('/ubs');
    this.matDialogRef.close();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
