import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OrderService } from '../../../ubs/services/order.service';
import { Router } from '@angular/router';

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
  private destroyed$: ReplaySubject<any> = new ReplaySubject<any>(1);
  public visible: boolean;

  constructor(
    private matDialogRef: MatDialogRef<WarningPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public orderService: OrderService,
    public router: Router
  ) {
    this.orderService.getStepperFinal$.subscribe((data) => {
      this.visible = data;
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

  public cancelUBSwithoutSaving(): void {
    this.orderService.cancelUBSwithoutSaving();
    this.router.navigate(['ubs']);
    this.matDialogRef.close();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
