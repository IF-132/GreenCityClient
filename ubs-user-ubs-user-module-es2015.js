(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ubs-user-ubs-user-module"],{

/***/ "./src/app/ubs-user/services/client-profile.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/ubs-user/services/client-profile.service.ts ***!
  \*************************************************************/
/*! exports provided: ClientProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientProfileService", function() { return ClientProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_main_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/main/links */ "./src/app/main/links.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ClientProfileService {
    constructor(http) {
        this.http = http;
    }
    getDataClientProfile() {
        return this.http.get(`${src_app_main_links__WEBPACK_IMPORTED_MODULE_1__["mainUbsLink"]}/ubs/userProfile/user/getUserProfile`);
    }
    postDataClientProfile(user) {
        return this.http.post(`${src_app_main_links__WEBPACK_IMPORTED_MODULE_1__["mainUbsLink"]}/ubs/userProfile/user/update`, user);
    }
}
ClientProfileService.ɵfac = function ClientProfileService_Factory(t) { return new (t || ClientProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ClientProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClientProfileService, factory: ClientProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ubs-user/services/user-orders.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/ubs-user/services/user-orders.service.ts ***!
  \**********************************************************/
/*! exports provided: UserOrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOrdersService", function() { return UserOrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class UserOrdersService {
    constructor(http) {
        this.http = http;
        this.url = 'https://greencity-ubs.azurewebsites.net/ubs/client';
    }
    getAllUserOrders() {
        const lang = localStorage.getItem('language') === 'ua' ? 1 : 2;
        return this.http.get(`${this.url}/get-all-orders-data/${lang}`);
    }
    deleteOrder(orderId) {
        return this.http.delete(`${this.url}/delete-order/${orderId}`);
    }
}
UserOrdersService.ɵfac = function UserOrdersService_Factory(t) { return new (t || UserOrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserOrdersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserOrdersService, factory: UserOrdersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserOrdersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ubs-user/ubs-user-bonuses/services/bonuses.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ubs-user/ubs-user-bonuses/services/bonuses.service.ts ***!
  \***********************************************************************/
/*! exports provided: BonusesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusesService", function() { return BonusesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @environment/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class BonusesService {
    constructor(http) {
        this.http = http;
        this.url = _environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUbsLink;
    }
    getUserBonuses() {
        return this.http.get(`${this.url}/ubs/client/users-pointsToUse`);
    }
}
BonusesService.ɵfac = function BonusesService_Factory(t) { return new (t || BonusesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BonusesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BonusesService, factory: BonusesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonusesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ubs-user/ubs-user-bonuses/ubs-user-bonuses.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/ubs-user/ubs-user-bonuses/ubs-user-bonuses.component.ts ***!
  \*************************************************************************/
/*! exports provided: UbsUserBonusesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbsUserBonusesComponent", function() { return UbsUserBonusesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _global_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @global-errors/mat-snack-bar/mat-snack-bar.component */ "./src/app/main/component/errors/mat-snack-bar/mat-snack-bar.component.ts");
/* harmony import */ var _services_bonuses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/bonuses.service */ "./src/app/ubs-user/ubs-user-bonuses/services/bonuses.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_spinner_ubs_spinner_ubs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/spinner-ubs/spinner-ubs.component */ "./src/app/shared/spinner-ubs/spinner-ubs.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");













function UbsUserBonusesComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "bonuses.no-bonuses"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "bonuses.get-bonuses"));
} }
function UbsUserBonusesComponent_ng_container_1_div_2_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "bonuses.enrollment-date"), " ");
} }
function UbsUserBonusesComponent_ng_container_1_div_2_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r12.dateOfEnrollment, "d.MM.yyyy"));
} }
function UbsUserBonusesComponent_ng_container_1_div_2_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "bonuses.amount"));
} }
function UbsUserBonusesComponent_ng_container_1_div_2_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r13.amount);
} }
function UbsUserBonusesComponent_ng_container_1_div_2_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "bonuses.reason"));
} }
function UbsUserBonusesComponent_ng_container_1_div_2_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "bonuses.order"), " \u2116", element_r14.numberOfOrder, "");
} }
function UbsUserBonusesComponent_ng_container_1_div_2_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
function UbsUserBonusesComponent_ng_container_1_div_2_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 26);
} }
function UbsUserBonusesComponent_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function UbsUserBonusesComponent_ng_container_1_div_2_Template_table_matSortChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UbsUserBonusesComponent_ng_container_1_div_2_th_13_Template, 3, 3, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UbsUserBonusesComponent_ng_container_1_div_2_td_14_Template, 3, 4, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UbsUserBonusesComponent_ng_container_1_div_2_th_16_Template, 3, 3, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UbsUserBonusesComponent_ng_container_1_div_2_td_17_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UbsUserBonusesComponent_ng_container_1_div_2_th_19_Template, 3, 3, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UbsUserBonusesComponent_ng_container_1_div_2_td_20_Template, 3, 4, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UbsUserBonusesComponent_ng_container_1_div_2_tr_21_Template, 1, 0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UbsUserBonusesComponent_ng_container_1_div_2_tr_22_Template, 1, 0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, "bonuses.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.totalBonuses);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "bonuses.about-bonuses-system"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r3.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r3.displayedColumns);
} }
function UbsUserBonusesComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UbsUserBonusesComponent_ng_container_1_div_1_Template, 7, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UbsUserBonusesComponent_ng_container_1_div_2_Template, 23, 10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.totalBonuses);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.totalBonuses);
} }
function UbsUserBonusesComponent_app_ubs_spinner_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ubs-spinner");
} }
class UbsUserBonusesComponent {
    constructor(snackBar, bonusesService) {
        this.snackBar = snackBar;
        this.bonusesService = bonusesService;
        this.displayedColumns = ['dateOfEnrollment', 'amount', 'reason'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.isLoading = true;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.getBonusesData();
        this.dataSource.sort = this.sort;
    }
    getBonusesData() {
        this.isLoading = true;
        this.bonusesService
            .getUserBonuses()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy))
            .subscribe((res) => {
            this.bonusesList = res.ubsUserBonuses;
            this.dataSource.data = res.ubsUserBonuses;
            this.totalBonuses = res.userBonuses;
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
            this.snackBar.openSnackBar('Oops, something went wrong. Please reload page or try again later.');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        });
    }
    sortData(sort) {
        const data = this.bonusesList.slice();
        if (!sort.active || sort.direction === '') {
            return;
        }
        this.dataSource.data = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            return this.compare(new Date(a.dateOfEnrollment).getDate(), new Date(b.dateOfEnrollment).getDate(), isAsc);
        });
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    ngOnDestroy() {
        this.destroy.next();
        this.destroy.unsubscribe();
    }
}
UbsUserBonusesComponent.ɵfac = function UbsUserBonusesComponent_Factory(t) { return new (t || UbsUserBonusesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bonuses_service__WEBPACK_IMPORTED_MODULE_6__["BonusesService"])); };
UbsUserBonusesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UbsUserBonusesComponent, selectors: [["app-ubs-user-bonuses"]], viewQuery: function UbsUserBonusesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 3, vars: 2, consts: [[1, "bonuses-container"], [4, "ngIf"], ["class", "no-bonuses-wrapper", 4, "ngIf"], ["class", "bonuses-exist-wrapper", 4, "ngIf"], [1, "no-bonuses-wrapper"], [1, "no-bonuses-text"], ["href", "#", 1, "more-about-bonuses-link"], [1, "bonuses-exist-wrapper"], [1, "total-bonuses-number"], [1, "total-bonuses-number__header"], [1, "total-bonuses-number__amount"], ["href", "", 1, "more-about-bonuses-link", "link-center"], [1, "bonuses-table-wrapper"], ["mat-table", "", "matSort", "", "aria-label", "user's bonuses table", 1, "table", 3, "dataSource", "matSortChange"], ["matColumnDef", "dateOfEnrollment"], ["mat-header-cell", "", "class", "table-header", "mat-sort-header", "", "scope", "col", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "amount"], ["mat-header-cell", "", "scope", "col", 4, "matHeaderCellDef"], ["matColumnDef", "reason"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", "", "scope", "col", 1, "table-header"], ["mat-cell", ""], ["mat-header-cell", "", "scope", "col"], ["mat-header-row", ""], ["mat-row", ""]], template: function UbsUserBonusesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UbsUserBonusesComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UbsUserBonusesComponent_app_ubs_spinner_2_Template, 1, 0, "app-ubs-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _shared_spinner_ubs_spinner_ubs_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerUbsComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".bonuses-container[_ngcontent-%COMP%] {\n  padding: 40px 32px;\n  font-family: var(--primary-font);\n  text-align: center;\n}\n\n.no-bonuses-wrapper[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n\n.no-bonuses-text[_ngcontent-%COMP%] {\n  padding-right: 8px;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 400;\n}\n\n.more-about-bonuses-link[_ngcontent-%COMP%] {\n  color: var(--primary-green);\n}\n\n.link-center[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  padding: 24px 0 64px 0;\n}\n\n.bonuses-exist-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.total-bonuses-number[_ngcontent-%COMP%] {\n  width: 228px;\n  height: 140px;\n  background-color: var(--primary-white);\n  box-shadow: 1px 4px 8px rgba(100, 114, 125, 0.18);\n  text-align: center;\n  padding-top: 24px;\n  margin: 0 auto;\n}\n\n.total-bonuses-number__header[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  letter-spacing: 0.2px;\n  line-height: 28px;\n}\n\n.total-bonuses-number__amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 32px;\n  letter-spacing: 0.2px;\n  line-height: 40px;\n}\n\n.bonuses-table-wrapper[_ngcontent-%COMP%] {\n  max-width: 775px;\n  margin: 0 auto;\n}\n\n.mat-header-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%] {\n  color: var(--ubs-primary-grey);\n  padding: 17px 0;\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.date-sort-icon[_ngcontent-%COMP%] {\n  padding-left: 6.5px;\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: 0.1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWJzLXVzZXIvdWJzLXVzZXItYm9udXNlcy9EOlxcU29mdFNlcnZlX0FjYWRlbXlcXEdyZWVuQ2l0eVxcZ2gtcGFnZXNcXEdyZWVuQ2l0eUNsaWVudC9zcmNcXGFwcFxcdWJzLXVzZXJcXHVicy11c2VyLWJvbnVzZXNcXHVicy11c2VyLWJvbnVzZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Vicy11c2VyL3Vicy11c2VyLWJvbnVzZXMvdWJzLXVzZXItYm9udXNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsaURBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7O0VBRUUsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdWJzLXVzZXIvdWJzLXVzZXItYm9udXNlcy91YnMtdXNlci1ib251c2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvbnVzZXMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiA0MHB4IDMycHg7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubm8tYm9udXNlcy13cmFwcGVyIHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLm5vLWJvbnVzZXMtdGV4dCB7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4ubW9yZS1hYm91dC1ib251c2VzLWxpbmsge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcclxufVxyXG5cclxuLmxpbmstY2VudGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDI0cHggMCA2NHB4IDA7XHJcbn1cclxuXHJcbi5ib251c2VzLWV4aXN0LXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udG90YWwtYm9udXNlcy1udW1iZXIge1xyXG4gIHdpZHRoOiAyMjhweDtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xyXG4gIGJveC1zaGFkb3c6IDFweCA0cHggOHB4IHJnYmEoMTAwLCAxMTQsIDEyNSwgMC4xOCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4udG90YWwtYm9udXNlcy1udW1iZXJfX2hlYWRlciB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcblxyXG4udG90YWwtYm9udXNlcy1udW1iZXJfX2Ftb3VudCB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uYm9udXNlcy10YWJsZS13cmFwcGVyIHtcclxuICBtYXgtd2lkdGg6IDc3NXB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1jZWxsLFxyXG4ubWF0LWNlbGwge1xyXG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcclxuICBwYWRkaW5nOiAxN3B4IDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZGF0ZS1zb3J0LWljb24ge1xyXG4gIHBhZGRpbmctbGVmdDogNi41cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xyXG59XHJcbiIsIi5ib251c2VzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDQwcHggMzJweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5vLWJvbnVzZXMtd3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4ubm8tYm9udXNlcy10ZXh0IHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubW9yZS1hYm91dC1ib251c2VzLWxpbmsge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XG59XG5cbi5saW5rLWNlbnRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjRweCAwIDY0cHggMDtcbn1cblxuLmJvbnVzZXMtZXhpc3Qtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG90YWwtYm9udXNlcy1udW1iZXIge1xuICB3aWR0aDogMjI4cHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xuICBib3gtc2hhZG93OiAxcHggNHB4IDhweCByZ2JhKDEwMCwgMTE0LCAxMjUsIDAuMTgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnRvdGFsLWJvbnVzZXMtbnVtYmVyX19oZWFkZXIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbi50b3RhbC1ib251c2VzLW51bWJlcl9fYW1vdW50IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuXG4uYm9udXNlcy10YWJsZS13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiA3NzVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5tYXQtaGVhZGVyLWNlbGwsXG4ubWF0LWNlbGwge1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XG4gIHBhZGRpbmc6IDE3cHggMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmRhdGUtc29ydC1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiA2LjVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UbsUserBonusesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ubs-user-bonuses',
                templateUrl: './ubs-user-bonuses.component.html',
                styleUrls: ['./ubs-user-bonuses.component.scss']
            }]
    }], function () { return [{ type: _global_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarComponent"] }, { type: _services_bonuses_service__WEBPACK_IMPORTED_MODULE_6__["BonusesService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "./src/app/ubs-user/ubs-user-messages/notification-body/notification-body.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/ubs-user/ubs-user-messages/notification-body/notification-body.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: NotificationBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationBodyComponent", function() { return NotificationBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user-messages.service */ "./src/app/ubs-user/services/user-messages.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





class NotificationBodyComponent {
    constructor(userMessagesService, router, elementRef) {
        this.userMessagesService = userMessagesService;
        this.router = router;
        this.elementRef = elementRef;
    }
    redirectToPayment() {
        this.router.navigate(['ubs/notification/confirm/' + this.orderId]);
    }
    ngAfterViewInit() {
        if (this.elementRef.nativeElement.querySelector('.button-pay')) {
            this.elementRef.nativeElement.querySelector('.button-pay').addEventListener('click', this.redirectToPayment.bind(this));
        }
    }
}
NotificationBodyComponent.ɵfac = function NotificationBodyComponent_Factory(t) { return new (t || NotificationBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_messages_service__WEBPACK_IMPORTED_MODULE_1__["UserMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NotificationBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationBodyComponent, selectors: [["app-notification-body"]], inputs: { body: "body", orderId: "orderId" }, decls: 2, vars: 3, consts: [[3, "innerHTML"]], template: function NotificationBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.body), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: [".links {\n  color: black;\n  text-decoration: none;\n  border-bottom: 1px solid black;\n}\n\n.links:hover {\n  color: var(--ubs-secondary-grey);\n  border-bottom: 1px solid var(--ubs-secondary-grey);\n}\n\n.button-pay {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  text-align: center;\n  border: none;\n  text-decoration: none;\n  text-transform: none;\n  height: 36px;\n  width: 114px;\n  margin-bottom: 16px;\n  border-radius: 4px;\n  background: var(--ubs-button-light-green);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.button-pay:hover {\n  cursor: pointer;\n}\n\n.price {\n  color: var(--ubs-quaternary-dark-grey);\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.numberOrder {\n  color: var(--ubs-quaternary-dark-grey);\n  font-weight: 500;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWJzLXVzZXIvdWJzLXVzZXItbWVzc2FnZXMvbm90aWZpY2F0aW9uLWJvZHkvRDpcXFNvZnRTZXJ2ZV9BY2FkZW15XFxHcmVlbkNpdHlcXGdoLXBhZ2VzXFxHcmVlbkNpdHlDbGllbnQvc3JjXFxhcHBcXHVicy11c2VyXFx1YnMtdXNlci1tZXNzYWdlc1xcbm90aWZpY2F0aW9uLWJvZHlcXG5vdGlmaWNhdGlvbi1ib2R5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91YnMtdXNlci91YnMtdXNlci1tZXNzYWdlcy9ub3RpZmljYXRpb24tYm9keS9ub3RpZmljYXRpb24tYm9keS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtFQUNBLGtEQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENFO0VBQ0UsZUFBQTtBQ0NKOztBREdBO0VBQ0Usc0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC91YnMtdXNlci91YnMtdXNlci1tZXNzYWdlcy9ub3RpZmljYXRpb24tYm9keS9ub3RpZmljYXRpb24tYm9keS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rcyB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5saW5rczpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLXVicy1zZWNvbmRhcnktZ3JleSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXVicy1zZWNvbmRhcnktZ3JleSk7XHJcbn1cclxuXHJcbi5idXR0b24tcGF5IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGhlaWdodDogMzZweDtcclxuICB3aWR0aDogMTE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5wcmljZSB7XHJcbiAgY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5udW1iZXJPcmRlciB7XHJcbiAgY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuIiwiLmxpbmtzIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmxpbmtzOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXVicy1zZWNvbmRhcnktZ3JleSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS11YnMtc2Vjb25kYXJ5LWdyZXkpO1xufVxuXG4uYnV0dG9uLXBheSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgaGVpZ2h0OiAzNnB4O1xuICB3aWR0aDogMTE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJ1dHRvbi1wYXk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcmljZSB7XG4gIGNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5udW1iZXJPcmRlciB7XG4gIGNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE1cHg7XG59Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationBodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notification-body',
                templateUrl: './notification-body.component.html',
                styleUrls: ['./notification-body.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _services_user_messages_service__WEBPACK_IMPORTED_MODULE_1__["UserMessagesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { body: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], orderId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ubs-user/ubs-user-messages/ubs-user-messages.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ubs-user/ubs-user-messages/ubs-user-messages.component.ts ***!
  \***************************************************************************/
/*! exports provided: UbsUserMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbsUserMessagesComponent", function() { return UbsUserMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_user_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user-messages.service */ "./src/app/ubs-user/services/user-messages.service.ts");
/* harmony import */ var _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @global-service/localstorage/local-storage.service */ "./src/app/main/service/localstorage/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _notification_body_notification_body_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notification-body/notification-body.component */ "./src/app/ubs-user/ubs-user-messages/notification-body/notification-body.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");














function UbsUserMessagesComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UbsUserMessagesComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UbsUserMessagesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0423 \u0432\u0430\u0441 \u0449\u0435 \u043D\u0435\u043C\u0430\u0454 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UbsUserMessagesComponent_div_19_mat_expansion_panel_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UbsUserMessagesComponent_div_19_mat_expansion_panel_2_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-notification-body", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("body", notification_r5.body)("orderId", notification_r5.orderId);
} }
function UbsUserMessagesComponent_div_19_mat_expansion_panel_2_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457 \u043F\u043E\u0440\u0443\u0448\u0435\u043D\u043D\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UbsUserMessagesComponent_div_19_mat_expansion_panel_2_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", notification_r5.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { textColorTitle: a0 }; };
function UbsUserMessagesComponent_div_19_mat_expansion_panel_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UbsUserMessagesComponent_div_19_mat_expansion_panel_2_Template_mat_expansion_panel_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const notification_r5 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.setRead(notification_r5.id, notification_r5.read); })("opened", function UbsUserMessagesComponent_div_19_mat_expansion_panel_2_Template_mat_expansion_panel_opened_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.panelOpenState = true; })("closed", function UbsUserMessagesComponent_div_19_mat_expansion_panel_2_Template_mat_expansion_panel_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-panel-description", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UbsUserMessagesComponent_div_19_mat_expansion_panel_2_div_10_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UbsUserMessagesComponent_div_19_mat_expansion_panel_2_div_11_Template, 2, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UbsUserMessagesComponent_div_19_mat_expansion_panel_2_div_12_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UbsUserMessagesComponent_div_19_mat_expansion_panel_2_div_13_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, !notification_r5.read));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, !notification_r5.read));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", notification_r5.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, !notification_r5.read));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 10, notification_r5.notificationTime, "HH:mm dd.MM.yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isLoadSmallSpinner && !notification_r5.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isLoadSmallSpinner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", notification_r5.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", notification_r5.img);
} }
const _c1 = function (a1, a2, a3) { return { id: "pag", itemsPerPage: a1, currentPage: a2, totalItems: a3 }; };
function UbsUserMessagesComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UbsUserMessagesComponent_div_19_mat_expansion_panel_2_Template, 14, 19, "mat-expansion-panel", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "pagination-controls", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function UbsUserMessagesComponent_div_19_Template_pagination_controls_pageChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onTableDataChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r3.notifications, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c1, ctx_r3.pageSize, ctx_r3.page, ctx_r3.count)));
} }
class UbsUserMessagesComponent {
    constructor(userMessagesService, localStorageService, router, route) {
        this.userMessagesService = userMessagesService;
        this.localStorageService = localStorageService;
        this.router = router;
        this.route = route;
        this.isAnyMessages = true;
        this.panelOpenState = false;
        this.page = 1;
        this.count = 0;
        this.pageSize = 10;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.localization = {
            title: 'ubs-user-notification.title',
            id: 'ubs-user-notification.title-table.number',
            themeMessages: 'ubs-user-notification.title-table.theme-messages',
            time: 'ubs-user-notification.title-table.time'
        };
    }
    ngOnInit() {
        this.route.params.subscribe((val) => {
            this.page = +this.route.snapshot.paramMap.get('pageId');
            this.subscribeToLangChange();
        });
    }
    subscribeToLangChange() {
        this.localStorageService.languageBehaviourSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(() => this.fetchNotification());
    }
    fetchNotification() {
        this.isLoadBar = true;
        this.userMessagesService
            .getNotification(this.page - 1, this.pageSize)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy))
            .subscribe((response) => {
            this.notifications = response.page;
            this.count = response.totalElements;
            this.isAnyMessages = this.notifications.length > 0;
            this.isLoadSpinner = this.isLoadBar = false;
        }, (error) => {
            console.log(error);
        });
    }
    setRead(notificationId, isRead) {
        let isGetNotificationBody = true;
        let notificationItem;
        notificationItem = this.notifications.find((item) => item.id === notificationId);
        if (notificationItem.body) {
            isGetNotificationBody = false;
        }
        if (!notificationItem.read) {
            this.userMessagesService.countOfNoReadeMessages--;
        }
        if (isGetNotificationBody) {
            this.notifications.forEach((item) => {
                if (item.id === notificationId) {
                    item.read = true;
                }
            });
            this.isLoadSmallSpinner = true;
            this.userMessagesService
                .setReadNotification(notificationId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy))
                .subscribe((response) => {
                const findNotification = this.notifications.find((item) => item.id === notificationId);
                findNotification.body = response.body;
                findNotification.isOpen = true;
                this.isLoadSmallSpinner = false;
            });
        }
    }
    onTableDataChange(event) {
        this.router.navigate(['/ubs-user/messages/' + event]);
    }
    ngOnDestroy() {
        this.destroy.next();
        this.destroy.unsubscribe();
    }
}
UbsUserMessagesComponent.ɵfac = function UbsUserMessagesComponent_Factory(t) { return new (t || UbsUserMessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_messages_service__WEBPACK_IMPORTED_MODULE_3__["UserMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
UbsUserMessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UbsUserMessagesComponent, selectors: [["app-ubs-user-messages"]], decls: 20, vars: 16, consts: [[1, "wrapper"], [1, "content"], [1, "main_header"], [1, "header-list"], [1, "col-2", "id"], [1, "col-5"], [1, "col-5", "time"], [1, "under-line"], ["class", "load-spinner", 4, "ngIf"], ["class", "load-bar", 4, "ngIf"], ["class", "if-empty", 4, "ngIf"], [4, "ngIf"], [1, "load-spinner"], [1, "custom-spinner"], [1, "load-bar"], ["mode", "indeterminate", 1, "custom-bar"], [1, "if-empty"], ["multi", "false"], [3, "click", "opened", "closed", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], ["autoHide", "true", "id", "pag", "previousLabel", "", "nextLabel", "", "directionLinks", "true", "maxSize", "5", 1, "my-pagination", 3, "pageChange"], [3, "click", "opened", "closed"], [3, "ngClass"], [1, "col-2"], [1, "title", 3, "ngClass"], [1, "date", 3, "ngClass"], ["class", "load-spinner small", 4, "ngIf"], ["class", "description", 4, "ngIf"], ["class", "description title-img", 4, "ngIf"], ["class", "description img", 4, "ngIf"], [1, "load-spinner", "small"], ["diameter", "60", 1, "custom-spinner"], [1, "description"], [3, "body", "orderId"], [1, "description", "title-img"], [1, "description", "img"], ["alt", "", 3, "src"]], template: function UbsUserMessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UbsUserMessagesComponent_div_16_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UbsUserMessagesComponent_div_17_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UbsUserMessagesComponent_div_18_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UbsUserMessagesComponent_div_19_Template, 6, 8, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, ctx.localization.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 10, ctx.localization.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 12, ctx.localization.themeMessages));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 14, ctx.localization.time));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoadSpinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoadBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAnyMessages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAnyMessages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationControlsComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelDescription"], _notification_body_notification_body_component__WEBPACK_IMPORTED_MODULE_11__["NotificationBodyComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 110%;\n  height: 100vh;\n  position: relative;\n  margin-left: -25px;\n  line-height: 24px;\n  color: var(--ubs-primary-black);\n  font-family: var(--primary-font);\n  background-color: var(--after-primary-light-grey);\n}\n\n.main_header[_ngcontent-%COMP%] {\n  margin: 0 0 51px 0;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 40px;\n}\n\n.header-list[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: -32px;\n}\n\n.header-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: var(--ubs-primary-grey);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  text-align: left;\n}\n\n.under-line[_ngcontent-%COMP%] {\n  width: 92%;\n  height: 1px;\n  background: var(--ubs-primary-light-grey);\n}\n\n.if-empty[_ngcontent-%COMP%] {\n  margin: 35px 0 0 19px;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 28px;\n  letter-spacing: 0.002em;\n  text-align: left;\n  color: var(--ubs-primary-grey);\n}\n\n.ng-star-inserted[_ngcontent-%COMP%] {\n  width: 96%;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  margin: 10px 0 10px 0;\n  box-shadow: none;\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  width: 37px;\n  text-align: left;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-left: 38px;\n  padding-left: 10px;\n}\n\n.date[_ngcontent-%COMP%] {\n  max-width: 38%;\n  padding-right: 45px;\n}\n\n.item[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.col-5[_ngcontent-%COMP%] {\n  flex: 0 0 38.666667%;\n  max-width: 41.666667%;\n}\n\n.id[_ngcontent-%COMP%] {\n  flex: 0 0 18.666667%;\n  max-width: 18.666667%;\n}\n\n.description[_ngcontent-%COMP%] {\n  color: var(--ubs-secondary-grey);\n  max-width: 40%;\n  margin-left: 20.5%;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 24px;\n}\n\n.img[_ngcontent-%COMP%] {\n  max-width: 284px;\n}\n\n.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.title-img[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 10px;\n  color: var(--ubs-quaternary-dark-grey);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  text-align: left;\n}\n\n.time[_ngcontent-%COMP%] {\n  margin-left: -44px;\n}\n\n.my-pagination[_ngcontent-%COMP%]  .ngx-pagination {\n  font-family: var(--primary-font);\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0;\n  text-align: left;\n}\n\n.my-pagination[_ngcontent-%COMP%]  .ngx-pagination li {\n  margin-right: 10px;\n}\n\n.my-pagination[_ngcontent-%COMP%]  .ngx-pagination .current {\n  padding: 0.1875rem 0.405rem;\n  background: none;\n  color: black;\n  border: 1px solid #444e55;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\n\n.my-pagination[_ngcontent-%COMP%]  .ngx-pagination .pagination-previous a::before {\n  content: \" \";\n  width: 20px;\n  height: 12px;\n  margin-right: -5px;\n  background: url('arrow_left_ubs_messages_active.svg') no-repeat 100%;\n}\n\n.my-pagination[_ngcontent-%COMP%]  .ngx-pagination .pagination-previous.disabled::before {\n  content: \" \";\n  width: 20px;\n  height: 12px;\n  margin-right: -5px;\n  background: url('arrow_left_ubs_messages.svg') no-repeat 100%;\n}\n\n.my-pagination[_ngcontent-%COMP%]  .ngx-pagination .pagination-next a::after {\n  content: \" \";\n  width: 20px;\n  height: 12px;\n  margin-left: -5px;\n  background: url('arrow_right_ubs_messages_active.svg') no-repeat 100%;\n}\n\n.my-pagination[_ngcontent-%COMP%]  .ngx-pagination .pagination-next.disabled::after {\n  content: \" \";\n  width: 20px;\n  height: 12px;\n  margin-left: -5px;\n  background: url('arrow_right_ubs_messages.svg') no-repeat 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin: 0 0 0 30px;\n  padding-bottom: 100px;\n}\n\n.textColorTitle[_ngcontent-%COMP%] {\n  color: var(--primary-black);\n}\n\n.load-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n}\n\n.load-bar[_ngcontent-%COMP%] {\n  width: 92%;\n  margin-top: -1px;\n}\n\n.small[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n[_nghost-%COMP%]     .custom-spinner circle {\n  stroke: #e2e2e2;\n}\n\n  .mat-progress-bar-fill::after {\n  background: #e2e2e2;\n}\n\n  .mat-progress-bar-buffer {\n  background: #bfbfbf;\n}\n\n@media (max-width: 990px) {\n  .wrapper[_ngcontent-%COMP%] {\n    width: 110%;\n    height: 100vh;\n    position: relative;\n    margin-left: 0;\n    padding: 0 20px;\n    line-height: 24px;\n    color: var(--ubs-primary-black);\n    font-family: var(--primary-font);\n    background-color: var(--after-primary-light-grey);\n  }\n}\n\n@media (max-width: 480px) {\n  .content[_ngcontent-%COMP%] {\n    margin: 0;\n    padding-bottom: 100px;\n  }\n\n  .header-list[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    margin-top: -32px;\n  }\n  .header-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    color: var(--ubs-primary-grey);\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 20px;\n    letter-spacing: 0.1px;\n    text-align: left;\n  }\n\n  .mat-expansion-panel-header[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0 10px;\n  }\n  .mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-content[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n\n  .wrapper[_ngcontent-%COMP%] {\n    width: 110%;\n    height: 100vh;\n    position: relative;\n    margin-left: 0;\n    padding: 0 15px 0 10px;\n    line-height: 24px;\n    color: var(--ubs-primary-black);\n    font-family: var(--primary-font);\n    background-color: var(--after-primary-light-grey);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWJzLXVzZXIvdWJzLXVzZXItbWVzc2FnZXMvRDpcXFNvZnRTZXJ2ZV9BY2FkZW15XFxHcmVlbkNpdHlcXGdoLXBhZ2VzXFxHcmVlbkNpdHlDbGllbnQvc3JjXFxhcHBcXHVicy11c2VyXFx1YnMtdXNlci1tZXNzYWdlc1xcdWJzLXVzZXItbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Vicy11c2VyL3Vicy11c2VyLW1lc3NhZ2VzL3Vicy11c2VyLW1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaURBQUE7QUNiRjs7QURnQkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNiRjs7QURnQkE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUNiRjs7QURlRTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNiSjs7QURpQkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0FDZEY7O0FEaUJBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FDZEY7O0FEaUJBO0VBQ0UsVUFBQTtBQ2RGOztBRGlCQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUNkRjs7QURpQkE7RUFDRSxXQUFBO0FDZEY7O0FEaUJBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDZEY7O0FEaUJBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDZEY7O0FEaUJBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDZEY7O0FEaUJBO0VBQ0UsYUFBQTtBQ2RGOztBRGlCQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUNkRjs7QURpQkE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FDZEY7O0FEaUJBO0VBQ0UsZ0NBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDZEY7O0FEaUJBO0VBQ0UsZ0JBQUE7QUNkRjs7QURnQkU7RUFDRSxXQUFBO0FDZEo7O0FEa0JBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNmRjs7QURrQkE7RUFDRSxrQkFBQTtBQ2ZGOztBRGtCQTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNmRjs7QURpQkU7RUFDRSxrQkFBQTtBQ2ZKOztBRGtCRTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDaEJKOztBRG1CRTtFQW5LQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQW1LRSxvRUFBQTtBQ2ZKOztBRGtCRTtFQXpLQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQXlLRSw2REFBQTtBQ2RKOztBRGlCRTtFQXhLQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQXdLRSxxRUFBQTtBQ2JKOztBRGdCRTtFQTlLQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQThLRSw4REFBQTtBQ1pKOztBRGdCQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNiRjs7QURnQkE7RUFDRSwyQkFBQTtBQ2JGOztBRGdCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNiRjs7QURnQkE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNiRjs7QURnQkE7RUFDRSxhQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsZUFBQTtBQ2JGOztBRGdCQTtFQUNFLG1CQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsbUJBQUE7QUNiRjs7QURnQkE7RUFDRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsK0JBQUE7SUFDQSxnQ0FBQTtJQUNBLGlEQUFBO0VDYkY7QUFDRjs7QURnQkE7RUFDRTtJQUNFLFNBQUE7SUFDQSxxQkFBQTtFQ2RGOztFRGlCQTtJQUNFLGFBQUE7SUFDQSw4QkFBQTtJQUNBLGlCQUFBO0VDZEY7RURnQkU7SUFDRSw4QkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxxQkFBQTtJQUNBLGdCQUFBO0VDZEo7O0VEa0JBO0lBQ0UsV0FBQTtJQUNBLGVBQUE7RUNmRjtFRGlCRTtJQUNFLG1CQUFBO0VDZko7O0VEbUJBO0lBQ0UsV0FBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0EsK0JBQUE7SUFDQSxnQ0FBQTtJQUNBLGlEQUFBO0VDaEJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91YnMtdXNlci91YnMtdXNlci1tZXNzYWdlcy91YnMtdXNlci1tZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBsZWZ0LWFycm93IHtcclxuICBjb250ZW50OiAnICc7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTVweDtcclxufVxyXG5cclxuQG1peGluIHJpZ2h0LWFycm93IHtcclxuICBjb250ZW50OiAnICc7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgd2lkdGg6IDExMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ibGFjayk7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWZ0ZXItcHJpbWFyeS1saWdodC1ncmV5KTtcclxufVxyXG5cclxuLm1haW5faGVhZGVyIHtcclxuICBtYXJnaW46IDAgMCA1MXB4IDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogLTMycHg7XHJcblxyXG4gIGRpdiB7XHJcbiAgICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuLnVuZGVyLWxpbmUge1xyXG4gIHdpZHRoOiA5MiU7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdWJzLXByaW1hcnktbGlnaHQtZ3JleSk7XHJcbn1cclxuXHJcbi5pZi1lbXB0eSB7XHJcbiAgbWFyZ2luOiAzNXB4IDAgMCAxOXB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMDJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcclxufVxyXG5cclxuLm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gIHdpZHRoOiA5NiU7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcclxuICB3aWR0aDogMzdweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDM4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgbWF4LXdpZHRoOiAzOCU7XHJcbiAgcGFkZGluZy1yaWdodDogNDVweDtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jb2wtNSB7XHJcbiAgZmxleDogMCAwIDM4LjY2NjY2NyU7XHJcbiAgbWF4LXdpZHRoOiA0MS42NjY2NjclO1xyXG59XHJcblxyXG4uaWQge1xyXG4gIGZsZXg6IDAgMCAxOC42NjY2NjclO1xyXG4gIG1heC13aWR0aDogMTguNjY2NjY3JTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBjb2xvcjogdmFyKC0tdWJzLXNlY29uZGFyeS1ncmV5KTtcclxuICBtYXgtd2lkdGg6IDQwJTtcclxuICBtYXJnaW4tbGVmdDogMjAuNSU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBtYXgtd2lkdGg6IDI4NHB4O1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUtaW1nIHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGltZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC00NHB4O1xyXG59XHJcblxyXG4ubXktcGFnaW5hdGlvbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24ge1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICBsaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuY3VycmVudCB7XHJcbiAgICBwYWRkaW5nOiAwLjE4NzVyZW0gMC40MDVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ0NGU1NTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG5cclxuICAucGFnaW5hdGlvbi1wcmV2aW91cyBhOjpiZWZvcmUge1xyXG4gICAgQGluY2x1ZGUgbGVmdC1hcnJvdztcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvdWJzL2Fycm93X2xlZnRfdWJzX21lc3NhZ2VzX2FjdGl2ZS5zdmcnKSBuby1yZXBlYXQgMTAwJTtcclxuICB9XHJcblxyXG4gIC5wYWdpbmF0aW9uLXByZXZpb3VzLmRpc2FibGVkOjpiZWZvcmUge1xyXG4gICAgQGluY2x1ZGUgbGVmdC1hcnJvdztcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvdWJzL2Fycm93X2xlZnRfdWJzX21lc3NhZ2VzLnN2ZycpIG5vLXJlcGVhdCAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnBhZ2luYXRpb24tbmV4dCBhOjphZnRlciB7XHJcbiAgICBAaW5jbHVkZSByaWdodC1hcnJvdztcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvdWJzL2Fycm93X3JpZ2h0X3Vic19tZXNzYWdlc19hY3RpdmUuc3ZnJykgbm8tcmVwZWF0IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucGFnaW5hdGlvbi1uZXh0LmRpc2FibGVkOjphZnRlciB7XHJcbiAgICBAaW5jbHVkZSByaWdodC1hcnJvdztcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvdWJzL2Fycm93X3JpZ2h0X3Vic19tZXNzYWdlcy5zdmcnKSBuby1yZXBlYXQgMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBtYXJnaW46IDAgMCAwIDMwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4udGV4dENvbG9yVGl0bGUge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJsYWNrKTtcclxufVxyXG5cclxuLmxvYWQtc3Bpbm5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5sb2FkLWJhciB7XHJcbiAgd2lkdGg6IDkyJTtcclxuICBtYXJnaW4tdG9wOiAtMXB4O1xyXG59XHJcblxyXG4uc21hbGwge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLXNwaW5uZXIgY2lyY2xlIHtcclxuICBzdHJva2U6ICNlMmUyZTI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogI2UyZTJlMjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XHJcbiAgYmFja2dyb3VuZDogI2JmYmZiZjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MHB4KSB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgd2lkdGg6IDExMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ibGFjayk7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFmdGVyLXByaW1hcnktbGlnaHQtZ3JleSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuY29udGVudCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi10b3A6IC0zMnB4O1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcblxyXG4gICAgLm1hdC1jb250ZW50IHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC53cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMTAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogMCAxNXB4IDAgMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWJsYWNrKTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWZ0ZXItcHJpbWFyeS1saWdodC1ncmV5KTtcclxuICB9XHJcbn1cclxuIiwiLndyYXBwZXIge1xuICB3aWR0aDogMTEwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktYmxhY2spO1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWZ0ZXItcHJpbWFyeS1saWdodC1ncmV5KTtcbn1cblxuLm1haW5faGVhZGVyIHtcbiAgbWFyZ2luOiAwIDAgNTFweCAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5oZWFkZXItbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IC0zMnB4O1xufVxuLmhlYWRlci1saXN0IGRpdiB7XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi51bmRlci1saW5lIHtcbiAgd2lkdGg6IDkyJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXVicy1wcmltYXJ5LWxpZ2h0LWdyZXkpO1xufVxuXG4uaWYtZW1wdHkge1xuICBtYXJnaW46IDM1cHggMCAwIDE5cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDAyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcbn1cblxuLm5nLXN0YXItaW5zZXJ0ZWQge1xuICB3aWR0aDogOTYlO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gIHdpZHRoOiAzN3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMzhweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uZGF0ZSB7XG4gIG1heC13aWR0aDogMzglO1xuICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xufVxuXG4uaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb2wtNSB7XG4gIGZsZXg6IDAgMCAzOC42NjY2NjclO1xuICBtYXgtd2lkdGg6IDQxLjY2NjY2NyU7XG59XG5cbi5pZCB7XG4gIGZsZXg6IDAgMCAxOC42NjY2NjclO1xuICBtYXgtd2lkdGg6IDE4LjY2NjY2NyU7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS11YnMtc2Vjb25kYXJ5LWdyZXkpO1xuICBtYXgtd2lkdGg6IDQwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwLjUlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5pbWcge1xuICBtYXgtd2lkdGg6IDI4NHB4O1xufVxuLmltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRpdGxlLWltZyB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRpbWUge1xuICBtYXJnaW4tbGVmdDogLTQ0cHg7XG59XG5cbi5teS1wYWdpbmF0aW9uOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm15LXBhZ2luYXRpb246Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGxpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm15LXBhZ2luYXRpb246Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcbiAgcGFkZGluZzogMC4xODc1cmVtIDAuNDA1cmVtO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NDRlNTU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5teS1wYWdpbmF0aW9uOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cyBhOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3Vicy9hcnJvd19sZWZ0X3Vic19tZXNzYWdlc19hY3RpdmUuc3ZnXCIpIG5vLXJlcGVhdCAxMDAlO1xufVxuLm15LXBhZ2luYXRpb246Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzLmRpc2FibGVkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3Vicy9hcnJvd19sZWZ0X3Vic19tZXNzYWdlcy5zdmdcIikgbm8tcmVwZWF0IDEwMCU7XG59XG4ubXktcGFnaW5hdGlvbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dCBhOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy91YnMvYXJyb3dfcmlnaHRfdWJzX21lc3NhZ2VzX2FjdGl2ZS5zdmdcIikgbm8tcmVwZWF0IDEwMCU7XG59XG4ubXktcGFnaW5hdGlvbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dC5kaXNhYmxlZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvdWJzL2Fycm93X3JpZ2h0X3Vic19tZXNzYWdlcy5zdmdcIikgbm8tcmVwZWF0IDEwMCU7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luOiAwIDAgMCAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG5cbi50ZXh0Q29sb3JUaXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJsYWNrKTtcbn1cblxuLmxvYWQtc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubG9hZC1iYXIge1xuICB3aWR0aDogOTIlO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xufVxuXG4uc21hbGwge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1zcGlubmVyIGNpcmNsZSB7XG4gIHN0cm9rZTogI2UyZTJlMjtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2UyZTJlMjtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQ6ICNiZmJmYmY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCkge1xuICAud3JhcHBlciB7XG4gICAgd2lkdGg6IDExMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ibGFjayk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWZ0ZXItcHJpbWFyeS1saWdodC1ncmV5KTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB9XG5cbiAgLmhlYWRlci1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tdG9wOiAtMzJweDtcbiAgfVxuICAuaGVhZGVyLWxpc3QgZGl2IHtcbiAgICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gIH1cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIC5tYXQtY29udGVudCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC53cmFwcGVyIHtcbiAgICB3aWR0aDogMTEwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBwYWRkaW5nOiAwIDE1cHggMCAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ibGFjayk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWZ0ZXItcHJpbWFyeS1saWdodC1ncmV5KTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UbsUserMessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ubs-user-messages',
                templateUrl: './ubs-user-messages.component.html',
                styleUrls: ['./ubs-user-messages.component.scss']
            }]
    }], function () { return [{ type: _services_user_messages_service__WEBPACK_IMPORTED_MODULE_3__["UserMessagesService"] }, { type: _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ubs-user/ubs-user-order-details/ubs-user-order-details.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/ubs-user/ubs-user-order-details/ubs-user-order-details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UbsUserOrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbsUserOrderDetailsComponent", function() { return UbsUserOrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _shared_spinner_ubs_spinner_ubs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/spinner-ubs/spinner-ubs.component */ "./src/app/shared/spinner-ubs/spinner-ubs.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_localized_currency_pipe_localized_currency_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/localized-currency-pipe/localized-currency.pipe */ "./src/app/shared/localized-currency-pipe/localized-currency.pipe.ts");







function UbsUserOrderDetailsComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "localizedCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "localizedCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bag_r8 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bag_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", bag_r8.capacity, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, "user-orders.details.litr"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 11, bag_r8.price)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.order.amountOfBagsOrdered[bag_r8.id], " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 13, "user-orders.details.pieces"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 17, ctx_r0.order.amountOfBagsOrdered[bag_r8.id] * bag_r8.price)));
} }
function UbsUserOrderDetailsComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "user-orders.details.certificate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("-", ctx_r1.order.orderCertificateTotalDiscount, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "user-orders.details.currency"), "");
} }
function UbsUserOrderDetailsComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "localizedCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "user-orders.details.bonuses"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx_r2.order.orderBonusDiscount)), "");
} }
function UbsUserOrderDetailsComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "localizedCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "user-orders.details.services-amount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx_r3.order.orderExportedPrice)));
} }
function UbsUserOrderDetailsComponent_ol_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "user-orders.details.delivery"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "user-orders.details.order-number"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.order.numbersFromShop.join(", "), "");
} }
function UbsUserOrderDetailsComponent_li_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "user-orders.details.comment"), " ", ctx_r5.order.addressComment, "");
} }
function UbsUserOrderDetailsComponent_ng_template_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ubs-spinner", 22);
} }
const _c0 = function () { return { fontSize: "16px" }; };
class UbsUserOrderDetailsComponent {
}
UbsUserOrderDetailsComponent.ɵfac = function UbsUserOrderDetailsComponent_Factory(t) { return new (t || UbsUserOrderDetailsComponent)(); };
UbsUserOrderDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UbsUserOrderDetailsComponent, selectors: [["app-ubs-user-order-details"]], inputs: { order: "order" }, decls: 81, vars: 60, consts: [[1, "full_card"], [1, "header_details"], ["aria-label", "orderDetailsTable", 1, "table_of_details"], [1, "header_table"], ["scope", "row"], ["class", "data_table", 4, "ngFor", "ngForOf"], [1, "sum_of_order"], ["colspan", "4"], ["class", "optional_row", 4, "ngIf"], [1, "sum_to_pay"], [1, "order_details"], [4, "ngIf"], [1, "recipient"], [1, "bold_text"], [1, "download"], [1, "arrow"], [3, "ngStyle"], [1, "maximize"], [1, "text"], ["spinner", ""], [1, "data_table"], [1, "optional_row"], [1, "mx-auto"]], template: function UbsUserOrderDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UbsUserOrderDetailsComponent_tr_21_Template, 17, 19, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "localizedCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UbsUserOrderDetailsComponent_tr_32_Template, 7, 7, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, UbsUserOrderDetailsComponent_tr_33_Template, 8, 8, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, UbsUserOrderDetailsComponent_tr_34_Template, 8, 8, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "localizedCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, UbsUserOrderDetailsComponent_ol_44_Template, 9, 7, "ol", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ol", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, UbsUserOrderDetailsComponent_li_68_Template, 3, 4, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "arrow_downward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "maximize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, UbsUserOrderDetailsComponent_ng_template_79_Template, 1, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 28, "user-orders.details.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 30, "user-orders.details.services"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 32, "user-orders.details.volume"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 34, "user-orders.details.cost"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 36, "user-orders.details.bags-amount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 38, "user-orders.details.sum"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.order.bags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 40, "user-orders.details.order-sum"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 42, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 44, ctx.order.orderFullPrice)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.order.orderCertificateTotalDiscount !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.order.orderBonusDiscount !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.order.orderStatus === "DONE_UNPAID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 46, "user-orders.details.amount-due"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 48, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 50, ctx.order.orderDiscountedPrice)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.order.numbersFromShop[0] !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 52, "user-orders.details.recipient"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.order.userInfoDto.recipientName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.userInfoDto.recipientSurname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.userInfoDto.recipientPhoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.userInfoDto.recipientEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 54, "user-orders.details.export-address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.addressExportDetailsDto.addressCity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.addressExportDetailsDto.addressStreet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.addressExportDetailsDto.addressDistrict);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.order.addressComment === !null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](58, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](59, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](78, 56, "user-orders.details.receipt"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _shared_spinner_ubs_spinner_ubs_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerUbsComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _shared_localized_currency_pipe_localized_currency_pipe__WEBPACK_IMPORTED_MODULE_5__["LocalizedCurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]], styles: [".full_card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 28px auto;\n  max-width: 670px;\n  margin-left: 56px;\n  color: var(--ubs-secondary-grey);\n}\n.full_card[_ngcontent-%COMP%]   .header_details[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: 0.002em;\n  color: var(--ubs-primary-black);\n  font-family: var(--primary-font);\n}\n.table_of_details[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-family: var(--primary-font);\n}\n.table_of_details[_ngcontent-%COMP%]   .header_table[_ngcontent-%COMP%] {\n  height: 34px;\n  margin: 5px 0 2px 0;\n  border-bottom: 1px solid var(--ubs-primary-light-grey);\n}\n.table_of_details[_ngcontent-%COMP%]   .header_table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.table_of_details[_ngcontent-%COMP%]   .header_table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4) {\n  text-align: center;\n}\n.table_of_details[_ngcontent-%COMP%]   .header_table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5) {\n  text-align: right;\n}\n.table_of_details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 28px;\n}\n.data_table[_ngcontent-%COMP%] {\n  color: var(--ubs-quaternary-dark-grey);\n}\n.data_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.sum_of_order[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--ubs-primary-light-grey);\n}\n.sum_of_order[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 16px;\n  text-align: right;\n}\n.sum_to_pay[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  padding-bottom: 16px;\n  text-align: right;\n}\n.optional_row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  text-align: right;\n}\n.data_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n  padding-left: 40px;\n}\n.data_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n  text-align: right;\n  color: var(--ubs-primary-grey);\n  font-weight: bold;\n}\n.sum_of_order[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  color: var(--ubs-primary-grey);\n  font-weight: bold;\n}\n.sum_to_pay[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  color: var(--ubs-primary-grey);\n  font-weight: bold;\n}\n.optional_row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  color: var(--primary-green);\n  font-size: 10px;\n  line-height: 12px;\n}\n.order_details[_ngcontent-%COMP%] {\n  width: 450px;\n  margin-left: 16px;\n  color: var(--ubs-primary-grey);\n  font-family: var(--primary-font);\n}\n.order_details[_ngcontent-%COMP%]   .recipient[_ngcontent-%COMP%] {\n  margin: 32px 0;\n}\n.order_details[_ngcontent-%COMP%]   .bold_text[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.order_details[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.download[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-areas: \"arrow text\" \"maximize text\";\n  grid-template-columns: 16px auto;\n  grid-template-rows: 17px auto;\n  justify-content: end;\n  margin: 0 18px 33px 0;\n  color: var(--primary-green);\n}\n.arrow[_ngcontent-%COMP%] {\n  grid-area: arrow;\n}\n.maximize[_ngcontent-%COMP%] {\n  grid-area: maximize;\n  width: 16px;\n  height: 1px;\n  transform: rotate(-180deg);\n}\n.text[_ngcontent-%COMP%] {\n  grid-area: text;\n  margin: 0 22px;\n}\n@media (max-width: 1100px) {\n  .full_card[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-rows: 28px auto;\n    max-width: 670px;\n    margin: 0;\n    color: var(--ubs-secondary-grey);\n  }\n  .full_card[_ngcontent-%COMP%]   .header_details[_ngcontent-%COMP%] {\n    font-size: 20px;\n    line-height: 28px;\n    font-weight: bold;\n    letter-spacing: 0.002em;\n    color: var(--ubs-primary-black);\n    font-family: var(--primary-font);\n  }\n}\n@media (max-width: 460px) {\n  .download[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-areas: \"arrow text\" \"maximize text\";\n    grid-template-columns: 16px auto;\n    grid-template-rows: 17px auto;\n    justify-content: center;\n    margin: 20px 18px 33px 0;\n    color: var(--primary-green);\n  }\n\n  .order_details[_ngcontent-%COMP%] {\n    width: 450px;\n    margin: 0;\n    color: var(--ubs-primary-grey);\n    font-family: var(--primary-font);\n  }\n  .order_details[_ngcontent-%COMP%]   .recipient[_ngcontent-%COMP%] {\n    margin: 32px 0;\n  }\n  .order_details[_ngcontent-%COMP%]   .bold_text[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .order_details[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    padding: 0;\n    list-style-type: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWJzLXVzZXIvdWJzLXVzZXItb3JkZXItZGV0YWlscy9EOlxcU29mdFNlcnZlX0FjYWRlbXlcXEdyZWVuQ2l0eVxcZ2gtcGFnZXNcXEdyZWVuQ2l0eUNsaWVudC9zcmNcXGFwcFxcdWJzLXVzZXJcXHVicy11c2VyLW9yZGVyLWRldGFpbHNcXHVicy11c2VyLW9yZGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Vicy11c2VyL3Vicy11c2VyLW9yZGVyLWRldGFpbHMvdWJzLXVzZXItb3JkZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQ0NKO0FER0E7RUFDRSxnQkFBQTtFQUNBLGdDQUFBO0FDQUY7QURFRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNEQUFBO0FDQUo7QURFSTtFQUNFLGdCQUFBO0FDQU47QURHSTtFQUNFLGtCQUFBO0FDRE47QURJSTtFQUNFLGlCQUFBO0FDRk47QURNRTtFQUNFLGlCQUFBO0FDSko7QURRQTtFQUNFLHNDQUFBO0FDTEY7QURPRTtFQUNFLGdCQUFBO0FDTEo7QURTQTtFQUNFLG1EQUFBO0FDTkY7QURRRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNOSjtBRFdFO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDUko7QURhRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNWSjtBRGNBO0VBQ0Usa0JBQUE7QUNYRjtBRGNBO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FDWEY7QURjQTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7QUNYRjtBRGNBO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtBQ1hGO0FEY0E7RUFDRSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1hGO0FEY0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0FDWEY7QURhRTtFQUNFLGNBQUE7QUNYSjtBRGNFO0VBQ0UsaUJBQUE7QUNaSjtBRGVFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQ2JKO0FEaUJBO0VBQ0UsYUFBQTtFQUNBLGlEQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQ2RGO0FEaUJBO0VBQ0UsZ0JBQUE7QUNkRjtBRGlCQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ2RGO0FEaUJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNkRjtBRGlCQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDZCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxTQUFBO0lBQ0EsZ0NBQUE7RUNkRjtFRGdCRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsdUJBQUE7SUFDQSwrQkFBQTtJQUNBLGdDQUFBO0VDZEo7QUFDRjtBRGtCQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGlEQUFBO0lBQ0EsZ0NBQUE7SUFDQSw2QkFBQTtJQUNBLHVCQUFBO0lBQ0Esd0JBQUE7SUFDQSwyQkFBQTtFQ2hCRjs7RURtQkE7SUFDRSxZQUFBO0lBQ0EsU0FBQTtJQUNBLDhCQUFBO0lBQ0EsZ0NBQUE7RUNoQkY7RURrQkU7SUFDRSxjQUFBO0VDaEJKO0VEbUJFO0lBQ0UsaUJBQUE7RUNqQko7RURvQkU7SUFDRSxnQkFBQTtJQUNBLFVBQUE7SUFDQSxxQkFBQTtFQ2xCSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdWJzLXVzZXIvdWJzLXVzZXItb3JkZXItZGV0YWlscy91YnMtdXNlci1vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGxfY2FyZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI4cHggYXV0bztcclxuICBtYXgtd2lkdGg6IDY3MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1NnB4O1xyXG4gIGNvbG9yOiB2YXIoLS11YnMtc2Vjb25kYXJ5LWdyZXkpO1xyXG5cclxuICAuaGVhZGVyX2RldGFpbHMge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAwMmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWJsYWNrKTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xyXG4gIH1cclxufVxyXG5cclxuLnRhYmxlX29mX2RldGFpbHMge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcblxyXG4gIC5oZWFkZXJfdGFibGUge1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgbWFyZ2luOiA1cHggMCAycHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS11YnMtcHJpbWFyeS1saWdodC1ncmV5KTtcclxuXHJcbiAgICB0aCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGg6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHRoOm50aC1jaGlsZCg1KSB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGQge1xyXG4gICAgcGFkZGluZy10b3A6IDI4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZGF0YV90YWJsZSB7XHJcbiAgY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XHJcblxyXG4gIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uc3VtX29mX29yZGVyIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tdWJzLXByaW1hcnktbGlnaHQtZ3JleSk7XHJcblxyXG4gIHRkIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4uc3VtX3RvX3BheSB7XHJcbiAgdGQge1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4ub3B0aW9uYWxfcm93IHtcclxuICB0ZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4uZGF0YV90YWJsZSB0ZDpudGgtY2hpbGQoNCkge1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxufVxyXG5cclxuLmRhdGFfdGFibGUgdGQ6bnRoLWNoaWxkKDUpIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zdW1fb2Zfb3JkZXIgdGQ6bnRoLWNoaWxkKDIpIHtcclxuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zdW1fdG9fcGF5IHRkOm50aC1jaGlsZCgyKSB7XHJcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ub3B0aW9uYWxfcm93IHRkOm50aC1jaGlsZCgyKSB7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBsaW5lLWhlaWdodDogMTJweDtcclxufVxyXG5cclxuLm9yZGVyX2RldGFpbHMge1xyXG4gIHdpZHRoOiA0NTBweDtcclxuICBtYXJnaW4tbGVmdDogMTZweDtcclxuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcblxyXG4gIC5yZWNpcGllbnQge1xyXG4gICAgbWFyZ2luOiAzMnB4IDA7XHJcbiAgfVxyXG5cclxuICAuYm9sZF90ZXh0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgb2wge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5kb3dubG9hZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnYXJyb3cgdGV4dCcgJ21heGltaXplIHRleHQnO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTZweCBhdXRvO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTdweCBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIG1hcmdpbjogMCAxOHB4IDMzcHggMDtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XHJcbn1cclxuXHJcbi5hcnJvdyB7XHJcbiAgZ3JpZC1hcmVhOiBhcnJvdztcclxufVxyXG5cclxuLm1heGltaXplIHtcclxuICBncmlkLWFyZWE6IG1heGltaXplO1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgZ3JpZC1hcmVhOiB0ZXh0O1xyXG4gIG1hcmdpbjogMCAyMnB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgLmZ1bGxfY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyOHB4IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDY3MHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1zZWNvbmRhcnktZ3JleSk7XHJcblxyXG4gICAgLmhlYWRlcl9kZXRhaWxzIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAwMmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktYmxhY2spO1xyXG4gICAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NjBweCkge1xyXG4gIC5kb3dubG9hZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2Fycm93IHRleHQnICdtYXhpbWl6ZSB0ZXh0JztcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTZweCBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxN3B4IGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweCAxOHB4IDMzcHggMDtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcclxuICB9XHJcblxyXG4gIC5vcmRlcl9kZXRhaWxzIHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xyXG5cclxuICAgIC5yZWNpcGllbnQge1xyXG4gICAgICBtYXJnaW46IDMycHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuYm9sZF90ZXh0IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgb2wge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5mdWxsX2NhcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI4cHggYXV0bztcbiAgbWF4LXdpZHRoOiA2NzBweDtcbiAgbWFyZ2luLWxlZnQ6IDU2cHg7XG4gIGNvbG9yOiB2YXIoLS11YnMtc2Vjb25kYXJ5LWdyZXkpO1xufVxuLmZ1bGxfY2FyZCAuaGVhZGVyX2RldGFpbHMge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDAyZW07XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ibGFjayk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xufVxuXG4udGFibGVfb2ZfZGV0YWlscyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xufVxuLnRhYmxlX29mX2RldGFpbHMgLmhlYWRlcl90YWJsZSB7XG4gIGhlaWdodDogMzRweDtcbiAgbWFyZ2luOiA1cHggMCAycHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXVicy1wcmltYXJ5LWxpZ2h0LWdyZXkpO1xufVxuLnRhYmxlX29mX2RldGFpbHMgLmhlYWRlcl90YWJsZSB0aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udGFibGVfb2ZfZGV0YWlscyAuaGVhZGVyX3RhYmxlIHRoOm50aC1jaGlsZCg0KSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50YWJsZV9vZl9kZXRhaWxzIC5oZWFkZXJfdGFibGUgdGg6bnRoLWNoaWxkKDUpIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4udGFibGVfb2ZfZGV0YWlscyB0ZCB7XG4gIHBhZGRpbmctdG9wOiAyOHB4O1xufVxuXG4uZGF0YV90YWJsZSB7XG4gIGNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xufVxuLmRhdGFfdGFibGUgdGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc3VtX29mX29yZGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXVicy1wcmltYXJ5LWxpZ2h0LWdyZXkpO1xufVxuLnN1bV9vZl9vcmRlciB0ZCB7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnN1bV90b19wYXkgdGQge1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5vcHRpb25hbF9yb3cgdGQge1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmRhdGFfdGFibGUgdGQ6bnRoLWNoaWxkKDQpIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuXG4uZGF0YV90YWJsZSB0ZDpudGgtY2hpbGQoNSkge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN1bV9vZl9vcmRlciB0ZDpudGgtY2hpbGQoMikge1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3VtX3RvX3BheSB0ZDpudGgtY2hpbGQoMikge1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ub3B0aW9uYWxfcm93IHRkOm50aC1jaGlsZCgyKSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cblxuLm9yZGVyX2RldGFpbHMge1xuICB3aWR0aDogNDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xufVxuLm9yZGVyX2RldGFpbHMgLnJlY2lwaWVudCB7XG4gIG1hcmdpbjogMzJweCAwO1xufVxuLm9yZGVyX2RldGFpbHMgLmJvbGRfdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm9yZGVyX2RldGFpbHMgb2wge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5kb3dubG9hZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYXJyb3cgdGV4dFwiIFwibWF4aW1pemUgdGV4dFwiO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2cHggYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxN3B4IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBtYXJnaW46IDAgMThweCAzM3B4IDA7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcbn1cblxuLmFycm93IHtcbiAgZ3JpZC1hcmVhOiBhcnJvdztcbn1cblxuLm1heGltaXplIHtcbiAgZ3JpZC1hcmVhOiBtYXhpbWl6ZTtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMXB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbn1cblxuLnRleHQge1xuICBncmlkLWFyZWE6IHRleHQ7XG4gIG1hcmdpbjogMCAyMnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIC5mdWxsX2NhcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyOHB4IGF1dG87XG4gICAgbWF4LXdpZHRoOiA2NzBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHZhcigtLXVicy1zZWNvbmRhcnktZ3JleSk7XG4gIH1cbiAgLmZ1bGxfY2FyZCAuaGVhZGVyX2RldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMDJlbTtcbiAgICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktYmxhY2spO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgLmRvd25sb2FkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYXJyb3cgdGV4dFwiIFwibWF4aW1pemUgdGV4dFwiO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTZweCBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTdweCBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweCAxOHB4IDMzcHggMDtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XG4gIH1cblxuICAub3JkZXJfZGV0YWlscyB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIH1cbiAgLm9yZGVyX2RldGFpbHMgLnJlY2lwaWVudCB7XG4gICAgbWFyZ2luOiAzMnB4IDA7XG4gIH1cbiAgLm9yZGVyX2RldGFpbHMgLmJvbGRfdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLm9yZGVyX2RldGFpbHMgb2wge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UbsUserOrderDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ubs-user-order-details',
                templateUrl: './ubs-user-order-details.component.html',
                styleUrls: ['./ubs-user-order-details.component.scss']
            }]
    }], null, { order: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ubs-user/ubs-user-orders-list/ubs-user-orders-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/ubs-user/ubs-user-orders-list/ubs-user-orders-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UbsUserOrdersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbsUserOrdersListComponent", function() { return UbsUserOrdersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user-orders.service */ "./src/app/ubs-user/services/user-orders.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _ubs_user_order_details_ubs_user_order_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ubs-user-order-details/ubs-user-order-details.component */ "./src/app/ubs-user/ubs-user-order-details/ubs-user-order-details.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_localized_currency_pipe_localized_currency_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/localized-currency-pipe/localized-currency.pipe */ "./src/app/shared/localized-currency-pipe/localized-currency.pipe.ts");









function UbsUserOrdersListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "user-orders.order-number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, "user-orders.order-date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, "user-orders.order-status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, "user-orders.order-payment-status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 13, "user-orders.payment-amount"));
} }
function UbsUserOrdersListComponent_mat_expansion_panel_2_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UbsUserOrdersListComponent_mat_expansion_panel_2_div_17_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const order_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.deleteCard(order_r2.generalOrderInfo.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "user-orders.btn.cancel"));
} }
function UbsUserOrdersListComponent_mat_expansion_panel_2_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "user-orders.btn.pay"));
} }
function UbsUserOrdersListComponent_mat_expansion_panel_2_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "user-orders.btn.order-again"));
} }
function UbsUserOrdersListComponent_mat_expansion_panel_2_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ubs-user-order-details", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("order", order_r2);
} }
function UbsUserOrdersListComponent_mat_expansion_panel_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UbsUserOrdersListComponent_mat_expansion_panel_2_Template_mat_expansion_panel_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const order_r2 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.changeCard(order_r2.generalOrderInfo.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-panel-description", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-panel-description", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-panel-description", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "localizedCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UbsUserOrdersListComponent_mat_expansion_panel_2_div_17_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UbsUserOrdersListComponent_mat_expansion_panel_2_div_18_Template, 4, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UbsUserOrdersListComponent_mat_expansion_panel_2_div_19_Template, 4, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UbsUserOrdersListComponent_mat_expansion_panel_2_div_20_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r2.generalOrderInfo.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 9, order_r2.generalOrderInfo.dateFormed, "dd.MM.y"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r2.generalOrderInfo.orderStatusName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r2.generalOrderInfo.orderPaymentStatusName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 14, order_r2.orderDiscountedPrice)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isOrderFormed(order_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isOrderUnpaid(order_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isOrderDone(order_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r2.extend);
} }
class UbsUserOrdersListComponent {
    constructor(userOrdersService, dialog) {
        this.userOrdersService = userOrdersService;
        this.dialog = dialog;
    }
    isOrderFormed(order) {
        return order.generalOrderInfo.orderStatus === 'FORMED';
    }
    isOrderUnpaid(order) {
        return order.generalOrderInfo.orderStatus === 'DONE_UNPAID' || order.generalOrderInfo.orderStatus === 'FORMED';
    }
    isOrderDone(order) {
        return (order.generalOrderInfo.orderStatus === 'ON_THE_ROUTE' ||
            order.generalOrderInfo.orderStatus === 'CONFIRMED' ||
            order.generalOrderInfo.orderStatus === 'DONE');
    }
    changeCard(id) {
        this.orders.forEach((order) => {
            if (order.generalOrderInfo.id === id) {
                order.extend = !order.extend;
            }
            else {
                order.extend = false;
            }
        });
    }
    deleteCard(orderId) {
        this.userOrdersService.deleteOrder(orderId).subscribe();
        for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].generalOrderInfo.id === orderId) {
                this.orders.splice(i, 1);
                break;
            }
        }
    }
}
UbsUserOrdersListComponent.ɵfac = function UbsUserOrdersListComponent_Factory(t) { return new (t || UbsUserOrdersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_orders_service__WEBPACK_IMPORTED_MODULE_1__["UserOrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
UbsUserOrdersListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UbsUserOrdersListComponent, selectors: [["app-ubs-user-orders-list"]], inputs: { orders: "orders" }, decls: 3, vars: 2, consts: [["class", "header_list", 4, "ngIf"], ["multi", "false"], [3, "click", 4, "ngFor", "ngForOf"], [1, "header_list"], [1, "header_list-num"], [1, "header_list-date"], [1, "header_list-status"], [1, "header_list-paymentStatus"], [1, "header_list-paymentAmount"], [1, "empty-div"], [3, "click"], [1, "mat-content-wrapper"], [1, "order_list-num"], [1, "order_list-date"], [1, "order_list-status"], [1, "order_list-paymentStatus"], [1, "order_list-paymentAmount"], [1, "btns_group"], ["class", "btn_grid_cancel", 4, "ngIf"], ["class", "btn_grid_pay", 4, "ngIf"], ["class", "btn_grid_order", 4, "ngIf"], ["class", "description", 4, "ngIf"], [1, "btn_grid_cancel"], [1, "btn_cancel", 3, "click"], [1, "btn_grid_pay"], [1, "btn_pay"], [1, "btn_grid_order"], [1, "btn_order"], [1, "description"], [3, "order"]], template: function UbsUserOrdersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UbsUserOrdersListComponent_div_0_Template, 17, 15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UbsUserOrdersListComponent_mat_expansion_panel_2_Template, 21, 16, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orders.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelDescription"], _ubs_user_order_details_ubs_user_order_details_component__WEBPACK_IMPORTED_MODULE_5__["UbsUserOrderDetailsComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _shared_localized_currency_pipe_localized_currency_pipe__WEBPACK_IMPORTED_MODULE_7__["LocalizedCurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".mat-tab-label-content {\n  font-size: 20px;\n}\n  .mat-tab-labels .mat-tab-label-active .mat-tab-label-content {\n  color: var(--ubs-button-light-green);\n}\n  .mat-tab-group.mat-primary .mat-ink-bar,   .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: var(--primary-green);\n}\n  .mat-expansion-panel-header {\n  height: 64px !important;\n}\n.header_list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n}\n.header_list[_ngcontent-%COMP%]   .header_list-num[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.header_list[_ngcontent-%COMP%]   .header_list-date[_ngcontent-%COMP%], .header_list[_ngcontent-%COMP%]   .header_list-status[_ngcontent-%COMP%], .header_list[_ngcontent-%COMP%]   .header_list-paymentStatus[_ngcontent-%COMP%], .header_list[_ngcontent-%COMP%]   .header_list-paymentAmount[_ngcontent-%COMP%] {\n  flex-grow: 2;\n}\n.empty-div[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.mat-content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n}\n.btns_group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.btns_group[_ngcontent-%COMP%]   .btn_grid_cancel[_ngcontent-%COMP%], .btns_group[_ngcontent-%COMP%]   .btn_grid_pay[_ngcontent-%COMP%], .btns_group[_ngcontent-%COMP%]   .btn_grid_fake[_ngcontent-%COMP%] {\n  width: 114px;\n  margin: 0 20px 0 0;\n}\n.btns_group[_ngcontent-%COMP%]   .btn_grid_cancel[_ngcontent-%COMP%]   .btn_pay[_ngcontent-%COMP%], .btns_group[_ngcontent-%COMP%]   .btn_grid_pay[_ngcontent-%COMP%]   .btn_pay[_ngcontent-%COMP%], .btns_group[_ngcontent-%COMP%]   .btn_grid_fake[_ngcontent-%COMP%]   .btn_pay[_ngcontent-%COMP%] {\n  height: 36px;\n  width: 114px;\n  border: none;\n  color: var(--ubs-primary-white);\n  padding: 8px 20px 8px 20px;\n  background: var(--ubs-button-light-green);\n  border-radius: 4px;\n}\n.btns_group[_ngcontent-%COMP%]   .btn_grid_cancel[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%], .btns_group[_ngcontent-%COMP%]   .btn_grid_pay[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%], .btns_group[_ngcontent-%COMP%]   .btn_grid_fake[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%] {\n  height: 36px;\n  width: 114px;\n  color: var(--ubs-quaternary-dark-grey);\n  background: var(--ubs-primary-white);\n  border: 1px solid var(--ubs-primary-green);\n  border-radius: 4px;\n}\n.btns_group[_ngcontent-%COMP%]   .btn_grid_cancel[_ngcontent-%COMP%]   .btn_fake[_ngcontent-%COMP%], .btns_group[_ngcontent-%COMP%]   .btn_grid_pay[_ngcontent-%COMP%]   .btn_fake[_ngcontent-%COMP%], .btns_group[_ngcontent-%COMP%]   .btn_grid_fake[_ngcontent-%COMP%]   .btn_fake[_ngcontent-%COMP%] {\n  display: none;\n}\n.btns_group[_ngcontent-%COMP%]   .btn_grid_order[_ngcontent-%COMP%] {\n  margin: 0 20px 0 64px;\n}\n.btns_group[_ngcontent-%COMP%]   .btn_grid_order[_ngcontent-%COMP%]   .btn_order[_ngcontent-%COMP%] {\n  height: 36px;\n  color: var(--ubs-button-light-green);\n  border: 1px solid var(--ubs-button-light-green);\n  padding: 8px 24px 8px 24px;\n  background: var(--ubs-primary-white);\n  border-radius: 4px;\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  margin: 10px 0 10px 0;\n  box-shadow: none;\n}\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 1060px) {\n  .header_list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    font-size: 12px;\n    font-weight: 500;\n  }\n  .header_list[_ngcontent-%COMP%]   .header_list-num[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n  .header_list[_ngcontent-%COMP%]   .header_list-date[_ngcontent-%COMP%], .header_list[_ngcontent-%COMP%]   .header_list-status[_ngcontent-%COMP%], .header_list[_ngcontent-%COMP%]   .header_list-paymentStatus[_ngcontent-%COMP%], .header_list[_ngcontent-%COMP%]   .header_list-paymentAmount[_ngcontent-%COMP%] {\n    flex-grow: 2;\n  }\n\n  .mat-expansion-panel-header[_ngcontent-%COMP%] {\n    height: 64px !important;\n    font-size: 13px;\n  }\n}\n@media (max-width: 800px) {\n  .header_list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    font-size: 12px;\n    font-weight: 500;\n  }\n  .header_list[_ngcontent-%COMP%]   .header_list-num[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    width: 40px;\n    margin-right: 25px;\n  }\n  .header_list[_ngcontent-%COMP%]   .header_list-date[_ngcontent-%COMP%], .header_list[_ngcontent-%COMP%]   .header_list-status[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header_list[_ngcontent-%COMP%]   .header_list-paymentStatus[_ngcontent-%COMP%], .header_list[_ngcontent-%COMP%]   .header_list-paymentAmount[_ngcontent-%COMP%] {\n    flex-grow: 2;\n  }\n\n  .mat-expansion-panel-header[_ngcontent-%COMP%] {\n    height: 64px !important;\n    font-size: 13px;\n  }\n\n  .order_list-date[_ngcontent-%COMP%], .order_list-status[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 600px) {\n    .mat-content {\n    display: flex;\n    flex-direction: column !important;\n  }\n\n  .mat-expansion-panel-header[_ngcontent-%COMP%] {\n    height: 90px !important;\n  }\n\n  .btns_group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    margin-top: 10px;\n  }\n\n  .empty-div[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWJzLXVzZXIvdWJzLXVzZXItb3JkZXJzLWxpc3QvRDpcXFNvZnRTZXJ2ZV9BY2FkZW15XFxHcmVlbkNpdHlcXGdoLXBhZ2VzXFxHcmVlbkNpdHlDbGllbnQvc3JjXFxhcHBcXHVicy11c2VyXFx1YnMtdXNlci1vcmRlcnMtbGlzdFxcdWJzLXVzZXItb3JkZXJzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Vicy11c2VyL3Vicy11c2VyLW9yZGVycy1saXN0L3Vicy11c2VyLW9yZGVycy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQ0FKO0FESUk7RUFDRSxvQ0FBQTtBQ0ZOO0FETUU7O0VBRUUsc0NBQUE7QUNKSjtBRE9FO0VBQ0UsdUJBQUE7QUNMSjtBRFNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNORjtBRFFFO0VBQ0UsWUFBQTtBQ05KO0FEU0U7Ozs7RUFJRSxZQUFBO0FDUEo7QURXQTtFQUNFLFlBQUE7QUNSRjtBRFdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtBQ1JGO0FEV0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ1JGO0FEVUU7OztFQUdFLFlBQUE7RUFDQSxrQkFBQTtBQ1JKO0FEVUk7OztFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0FDTk47QURTSTs7O0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtBQ0xOO0FEUUk7OztFQUNFLGFBQUE7QUNKTjtBRFFFO0VBQ0UscUJBQUE7QUNOSjtBRFFJO0VBQ0UsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsK0NBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUNOTjtBRFdBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQ1JGO0FEV0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNSRjtBRFdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDUkY7QURXQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNSRjtFRFVFO0lBQ0UsWUFBQTtFQ1JKO0VEV0U7Ozs7SUFJRSxZQUFBO0VDVEo7O0VEYUE7SUFDRSx1QkFBQTtJQUNBLGVBQUE7RUNWRjtBQUNGO0FEYUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDWEY7RURhRTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUNYSjtFRGNFOztJQUVFLGFBQUE7RUNaSjtFRGVFOztJQUVFLFlBQUE7RUNiSjs7RURpQkE7SUFDRSx1QkFBQTtJQUNBLGVBQUE7RUNkRjs7RURpQkE7O0lBRUUsYUFBQTtFQ2RGO0FBQ0Y7QURpQkE7RUFFSTtJQUNFLGFBQUE7SUFDQSxpQ0FBQTtFQ2hCSjs7RURvQkE7SUFDRSx1QkFBQTtFQ2pCRjs7RURvQkE7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLDZCQUFBO0lBQ0EsZ0JBQUE7RUNqQkY7O0VEb0JBO0lBQ0UsYUFBQTtFQ2pCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdWJzLXVzZXIvdWJzLXVzZXItb3JkZXJzLWxpc3QvdWJzLXVzZXItb3JkZXJzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdC10YWItbGFiZWxzIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgICAubWF0LXRhYi1sYWJlbC1jb250ZW50IHtcclxuICAgICAgY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyLFxyXG4gIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgIGhlaWdodDogNjRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlcl9saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcblxyXG4gIC5oZWFkZXJfbGlzdC1udW0ge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlcl9saXN0LWRhdGUsXHJcbiAgLmhlYWRlcl9saXN0LXN0YXR1cyxcclxuICAuaGVhZGVyX2xpc3QtcGF5bWVudFN0YXR1cyxcclxuICAuaGVhZGVyX2xpc3QtcGF5bWVudEFtb3VudCB7XHJcbiAgICBmbGV4LWdyb3c6IDI7XHJcbiAgfVxyXG59XHJcblxyXG4uZW1wdHktZGl2IHtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5tYXQtY29udGVudC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmJ0bnNfZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuYnRuX2dyaWRfY2FuY2VsLFxyXG4gIC5idG5fZ3JpZF9wYXksXHJcbiAgLmJ0bl9ncmlkX2Zha2Uge1xyXG4gICAgd2lkdGg6IDExNHB4O1xyXG4gICAgbWFyZ2luOiAwIDIwcHggMCAwO1xyXG5cclxuICAgIC5idG5fcGF5IHtcclxuICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICB3aWR0aDogMTE0cHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LXdoaXRlKTtcclxuICAgICAgcGFkZGluZzogOHB4IDIwcHggOHB4IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bl9jYW5jZWwge1xyXG4gICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgIHdpZHRoOiAxMTRweDtcclxuICAgICAgY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXVicy1wcmltYXJ5LXdoaXRlKTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdWJzLXByaW1hcnktZ3JlZW4pO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bl9mYWtlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG5fZ3JpZF9vcmRlciB7XHJcbiAgICBtYXJnaW46IDAgMjBweCAwIDY0cHg7XHJcblxyXG4gICAgLmJ0bl9vcmRlciB7XHJcbiAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcclxuICAgICAgcGFkZGluZzogOHB4IDI0cHggOHB4IDI0cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXVicy1wcmltYXJ5LXdoaXRlKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gIG1hcmdpbjogMTBweCAwIDEwcHggMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDYwcHgpIHtcclxuICAuaGVhZGVyX2xpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAuaGVhZGVyX2xpc3QtbnVtIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXJfbGlzdC1kYXRlLFxyXG4gICAgLmhlYWRlcl9saXN0LXN0YXR1cyxcclxuICAgIC5oZWFkZXJfbGlzdC1wYXltZW50U3RhdHVzLFxyXG4gICAgLmhlYWRlcl9saXN0LXBheW1lbnRBbW91bnQge1xyXG4gICAgICBmbGV4LWdyb3c6IDI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA2NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuaGVhZGVyX2xpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAuaGVhZGVyX2xpc3QtbnVtIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXJfbGlzdC1kYXRlLFxyXG4gICAgLmhlYWRlcl9saXN0LXN0YXR1cyB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlcl9saXN0LXBheW1lbnRTdGF0dXMsXHJcbiAgICAuaGVhZGVyX2xpc3QtcGF5bWVudEFtb3VudCB7XHJcbiAgICAgIGZsZXgtZ3JvdzogMjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDY0cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcblxyXG4gIC5vcmRlcl9saXN0LWRhdGUsXHJcbiAgLm9yZGVyX2xpc3Qtc3RhdHVzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICA6Om5nLWRlZXAge1xyXG4gICAgLm1hdC1jb250ZW50IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgIGhlaWdodDogOTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJ0bnNfZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmVtcHR5LWRpdiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iLCI6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbHMgLm1hdC10YWItbGFiZWwtYWN0aXZlIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xuICBjb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XG59XG46Om5nLWRlZXAgLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyLFxuOjpuZy1kZWVwIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XG59XG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgaGVpZ2h0OiA2NHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXJfbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4uaGVhZGVyX2xpc3QgLmhlYWRlcl9saXN0LW51bSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5oZWFkZXJfbGlzdCAuaGVhZGVyX2xpc3QtZGF0ZSxcbi5oZWFkZXJfbGlzdCAuaGVhZGVyX2xpc3Qtc3RhdHVzLFxuLmhlYWRlcl9saXN0IC5oZWFkZXJfbGlzdC1wYXltZW50U3RhdHVzLFxuLmhlYWRlcl9saXN0IC5oZWFkZXJfbGlzdC1wYXltZW50QW1vdW50IHtcbiAgZmxleC1ncm93OiAyO1xufVxuXG4uZW1wdHktZGl2IHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4ubWF0LWNvbnRlbnQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXg6IDE7XG59XG5cbi5idG5zX2dyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5idG5zX2dyb3VwIC5idG5fZ3JpZF9jYW5jZWwsXG4uYnRuc19ncm91cCAuYnRuX2dyaWRfcGF5LFxuLmJ0bnNfZ3JvdXAgLmJ0bl9ncmlkX2Zha2Uge1xuICB3aWR0aDogMTE0cHg7XG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcbn1cbi5idG5zX2dyb3VwIC5idG5fZ3JpZF9jYW5jZWwgLmJ0bl9wYXksXG4uYnRuc19ncm91cCAuYnRuX2dyaWRfcGF5IC5idG5fcGF5LFxuLmJ0bnNfZ3JvdXAgLmJ0bl9ncmlkX2Zha2UgLmJ0bl9wYXkge1xuICBoZWlnaHQ6IDM2cHg7XG4gIHdpZHRoOiAxMTRweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktd2hpdGUpO1xuICBwYWRkaW5nOiA4cHggMjBweCA4cHggMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5idG5zX2dyb3VwIC5idG5fZ3JpZF9jYW5jZWwgLmJ0bl9jYW5jZWwsXG4uYnRuc19ncm91cCAuYnRuX2dyaWRfcGF5IC5idG5fY2FuY2VsLFxuLmJ0bnNfZ3JvdXAgLmJ0bl9ncmlkX2Zha2UgLmJ0bl9jYW5jZWwge1xuICBoZWlnaHQ6IDM2cHg7XG4gIHdpZHRoOiAxMTRweDtcbiAgY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXVicy1wcmltYXJ5LXdoaXRlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdWJzLXByaW1hcnktZ3JlZW4pO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uYnRuc19ncm91cCAuYnRuX2dyaWRfY2FuY2VsIC5idG5fZmFrZSxcbi5idG5zX2dyb3VwIC5idG5fZ3JpZF9wYXkgLmJ0bl9mYWtlLFxuLmJ0bnNfZ3JvdXAgLmJ0bl9ncmlkX2Zha2UgLmJ0bl9mYWtlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5idG5zX2dyb3VwIC5idG5fZ3JpZF9vcmRlciB7XG4gIG1hcmdpbjogMCAyMHB4IDAgNjRweDtcbn1cbi5idG5zX2dyb3VwIC5idG5fZ3JpZF9vcmRlciAuYnRuX29yZGVyIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBjb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xuICBwYWRkaW5nOiA4cHggMjRweCA4cHggMjRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdWJzLXByaW1hcnktd2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTA2MHB4KSB7XG4gIC5oZWFkZXJfbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgLmhlYWRlcl9saXN0IC5oZWFkZXJfbGlzdC1udW0ge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAuaGVhZGVyX2xpc3QgLmhlYWRlcl9saXN0LWRhdGUsXG4uaGVhZGVyX2xpc3QgLmhlYWRlcl9saXN0LXN0YXR1cyxcbi5oZWFkZXJfbGlzdCAuaGVhZGVyX2xpc3QtcGF5bWVudFN0YXR1cyxcbi5oZWFkZXJfbGlzdCAuaGVhZGVyX2xpc3QtcGF5bWVudEFtb3VudCB7XG4gICAgZmxleC1ncm93OiAyO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDY0cHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuaGVhZGVyX2xpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIC5oZWFkZXJfbGlzdCAuaGVhZGVyX2xpc3QtbnVtIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICB9XG4gIC5oZWFkZXJfbGlzdCAuaGVhZGVyX2xpc3QtZGF0ZSxcbi5oZWFkZXJfbGlzdCAuaGVhZGVyX2xpc3Qtc3RhdHVzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5oZWFkZXJfbGlzdCAuaGVhZGVyX2xpc3QtcGF5bWVudFN0YXR1cyxcbi5oZWFkZXJfbGlzdCAuaGVhZGVyX2xpc3QtcGF5bWVudEFtb3VudCB7XG4gICAgZmxleC1ncm93OiAyO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDY0cHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cblxuICAub3JkZXJfbGlzdC1kYXRlLFxuLm9yZGVyX2xpc3Qtc3RhdHVzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgOjpuZy1kZWVwIC5tYXQtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIGhlaWdodDogOTBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ0bnNfZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICAuZW1wdHktZGl2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UbsUserOrdersListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ubs-user-orders-list',
                templateUrl: './ubs-user-orders-list.component.html',
                styleUrls: ['./ubs-user-orders-list.component.scss']
            }]
    }], function () { return [{ type: _services_user_orders_service__WEBPACK_IMPORTED_MODULE_1__["UserOrdersService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { orders: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ubs-user/ubs-user-orders/ubs-user-orders.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ubs-user/ubs-user-orders/ubs-user-orders.component.ts ***!
  \***********************************************************************/
/*! exports provided: UbsUserOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbsUserOrdersComponent", function() { return UbsUserOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _global_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @global-errors/mat-snack-bar/mat-snack-bar.component */ "./src/app/main/component/errors/mat-snack-bar/mat-snack-bar.component.ts");
/* harmony import */ var _services_user_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user-orders.service */ "./src/app/ubs-user/services/user-orders.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _ubs_user_orders_list_ubs_user_orders_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ubs-user-orders-list/ubs-user-orders-list.component */ "./src/app/ubs-user/ubs-user-orders-list/ubs-user-orders-list.component.ts");
/* harmony import */ var _shared_spinner_ubs_spinner_ubs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/spinner-ubs/spinner-ubs.component */ "./src/app/shared/spinner-ubs/spinner-ubs.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");











function UbsUserOrdersComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "user-orders.no-orders"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "user-orders.make-order"));
} }
function UbsUserOrdersComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-ubs-user-orders-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-ubs-user-orders-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "user-orders.current-orders"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("orders", ctx_r4.currentOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "user-orders.order-history"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("orders", ctx_r4.orderHistory);
} }
function UbsUserOrdersComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UbsUserOrdersComponent_div_4_div_1_Template, 7, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UbsUserOrdersComponent_div_4_div_2_Template, 9, 8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.orders || ctx_r0.orders.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.orders && ctx_r0.orders.length !== 0);
} }
function UbsUserOrdersComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ubs-spinner", 13);
} }
class UbsUserOrdersComponent {
    constructor(snackBar, userOrdersService) {
        this.snackBar = snackBar;
        this.userOrdersService = userOrdersService;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loading = false;
    }
    ngOnInit() {
        this.userOrdersService
            .getAllUserOrders()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
            this.snackBar.openSnackBar('Oops, something went wrong. Please reload page or try again later.');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }))
            .subscribe((item) => {
            this.orders = item;
            this.loading = true;
            this.currentOrders = this.orders.filter((order) => order.orderStatus !== 'DONE' && order.orderStatus !== 'CANCELLED');
            this.orderHistory = this.orders.filter((order) => order.orderStatus === 'DONE' || order.orderStatus === 'CANCELLED');
        });
    }
    ngOnDestroy() {
        this.destroy.next();
        this.destroy.unsubscribe();
    }
}
UbsUserOrdersComponent.ɵfac = function UbsUserOrdersComponent_Factory(t) { return new (t || UbsUserOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_orders_service__WEBPACK_IMPORTED_MODULE_4__["UserOrdersService"])); };
UbsUserOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UbsUserOrdersComponent, selectors: [["app-ubs-user-orders"]], decls: 7, vars: 5, consts: [[1, "wrapper"], [1, "main_header"], [4, "ngIf", "ngIfElse"], ["spinner", ""], ["class", "if_empty", 4, "ngIf"], ["class", "cards", 4, "ngIf"], [1, "if_empty"], ["href", "#"], [1, "cards"], ["animationDuration", "0ms"], [3, "label"], [3, "orders"], [1, "empty"], [1, "mx-auto"]], template: function UbsUserOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UbsUserOrdersComponent_div_4_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UbsUserOrdersComponent_ng_template_5_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "user-orders.order-title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _ubs_user_orders_list_ubs_user_orders_list_component__WEBPACK_IMPORTED_MODULE_7__["UbsUserOrdersListComponent"], _shared_spinner_ubs_spinner_ubs_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerUbsComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n  margin-top: 5px;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--ubs-primary-black);\n  font-family: var(--primary-font);\n  background-color: var(--after-primary-light-grey);\n}\n\n.main_header[_ngcontent-%COMP%] {\n  margin: 0 0 30px 20px;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 40px;\n}\n\n.if_empty[_ngcontent-%COMP%] {\n  margin: 16px 0 0 44px;\n}\n\n.if_empty[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 13px;\n  color: var(--ubs-primary-green);\n}\n\n.cards[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.cards[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%] {\n  height: 80px;\n}\n\n@media (max-width: 960px) {\n  .wrapper[_ngcontent-%COMP%] {\n    height: 100vh;\n    margin: 5px 0 0 45px;\n    font-size: 16px;\n    line-height: 24px;\n    color: var(--ubs-primary-black);\n    font-family: var(--primary-font);\n    background-color: var(--after-primary-light-grey);\n  }\n}\n\n@media (max-width: 480px) {\n  .wrapper[_ngcontent-%COMP%] {\n    height: 100vh;\n    margin: 5px 10px 0 10px;\n    font-size: 16px;\n    line-height: 24px;\n    color: var(--ubs-primary-black);\n    font-family: var(--primary-font);\n    background-color: var(--after-primary-light-grey);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWJzLXVzZXIvdWJzLXVzZXItb3JkZXJzL0Q6XFxTb2Z0U2VydmVfQWNhZGVteVxcR3JlZW5DaXR5XFxnaC1wYWdlc1xcR3JlZW5DaXR5Q2xpZW50L3NyY1xcYXBwXFx1YnMtdXNlclxcdWJzLXVzZXItb3JkZXJzXFx1YnMtdXNlci1vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Vicy11c2VyL3Vicy11c2VyLW9yZGVycy91YnMtdXNlci1vcmRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpREFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBRENFO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtBQ0NKOztBREdBO0VBQ0UsV0FBQTtBQ0FGOztBREVFO0VBQ0UsWUFBQTtBQ0FKOztBRElBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esb0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSwrQkFBQTtJQUNBLGdDQUFBO0lBQ0EsaURBQUE7RUNERjtBQUNGOztBRElBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSwrQkFBQTtJQUNBLGdDQUFBO0lBQ0EsaURBQUE7RUNGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdWJzLXVzZXIvdWJzLXVzZXItb3JkZXJzL3Vicy11c2VyLW9yZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWJsYWNrKTtcclxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZnRlci1wcmltYXJ5LWxpZ2h0LWdyZXkpO1xyXG59XHJcblxyXG4ubWFpbl9oZWFkZXIge1xyXG4gIG1hcmdpbjogMCAwIDMwcHggMjBweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5pZl9lbXB0eSB7XHJcbiAgbWFyZ2luOiAxNnB4IDAgMCA0NHB4O1xyXG5cclxuICBhIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZWVuKTtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5lbXB0eSB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luOiA1cHggMCAwIDQ1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ibGFjayk7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFmdGVyLXByaW1hcnktbGlnaHQtZ3JleSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luOiA1cHggMTBweCAwIDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ibGFjayk7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFmdGVyLXByaW1hcnktbGlnaHQtZ3JleSk7XHJcbiAgfVxyXG59XHJcbiIsIi53cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktYmxhY2spO1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWZ0ZXItcHJpbWFyeS1saWdodC1ncmV5KTtcbn1cblxuLm1haW5faGVhZGVyIHtcbiAgbWFyZ2luOiAwIDAgMzBweCAyMHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5pZl9lbXB0eSB7XG4gIG1hcmdpbjogMTZweCAwIDAgNDRweDtcbn1cbi5pZl9lbXB0eSBhIHtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmVlbik7XG59XG5cbi5jYXJkcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmRzIC5lbXB0eSB7XG4gIGhlaWdodDogODBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogNXB4IDAgMCA0NXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktYmxhY2spO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFmdGVyLXByaW1hcnktbGlnaHQtZ3JleSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAud3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IDVweCAxMHB4IDAgMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWJsYWNrKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZnRlci1wcmltYXJ5LWxpZ2h0LWdyZXkpO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UbsUserOrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ubs-user-orders',
                templateUrl: './ubs-user-orders.component.html',
                styleUrls: ['./ubs-user-orders.component.scss']
            }]
    }], function () { return [{ type: _global_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarComponent"] }, { type: _services_user_orders_service__WEBPACK_IMPORTED_MODULE_4__["UserOrdersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ubs-user/ubs-user-profile-page/ubs-profile-change-password-pop-up/ubs-profile-change-password-pop-up.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/ubs-user/ubs-user-profile-page/ubs-profile-change-password-pop-up/ubs-profile-change-password-pop-up.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: UbsProfileChangePasswordPopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbsProfileChangePasswordPopUpComponent", function() { return UbsProfileChangePasswordPopUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");










function UbsProfileChangePasswordPopUpComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ubs-client-profile.password-error-new"), " ");
} }
function UbsProfileChangePasswordPopUpComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ubs-client-profile.password-error-confirm"), " ");
} }
class UbsProfileChangePasswordPopUpComponent {
    constructor(data, fb) {
        this.data = data;
        this.fb = fb;
        this.passRegexp = /^(?=.*[A-Za-z]+)(?=.*\d+)(?=.*[~`!@#$%^&*()+=_\-{}|:;”’?\/<>,.\]\[]+).{8,}$/;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.formConfig = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.passRegexp)]],
            currentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        }, { validators: [this.checkConfirmPassword, this.checkNewPassword] });
    }
    checkConfirmPassword(group) {
        const password = group.get('password').value;
        const confirmPassword = group.get('confirmPassword').value;
        return password === confirmPassword ? null : { notSame: true };
    }
    checkNewPassword(group) {
        const password = group.get('password').value;
        const currentPassword = group.get('currentPassword').value;
        return password !== currentPassword ? null : { same: true };
    }
}
UbsProfileChangePasswordPopUpComponent.ɵfac = function UbsProfileChangePasswordPopUpComponent_Factory(t) { return new (t || UbsProfileChangePasswordPopUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
UbsProfileChangePasswordPopUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UbsProfileChangePasswordPopUpComponent, selectors: [["app-ubs-profile-change-password-pop-up"]], decls: 33, vars: 22, consts: [[1, "dialog-container"], ["mat-dialog-title", ""], [3, "formGroup"], [1, "input"], [1, "forms-inputs"], ["matInput", "", "type", "password", "formControlName", "currentPassword"], ["matInput", "", "type", "password", "formControlName", "password"], [4, "ngIf"], ["matInput", "", "type", "password", "formControlName", "confirmPassword"], [1, "action-btns"], ["align", "end"], ["mat-dialog-close", "", 1, "btn", "btn-ubs-outline-success"], ["mat-dialog-close", "", "cdkFocusInitial", "", 1, "btn", "btn-ubs", 3, "disabled"]], template: function UbsProfileChangePasswordPopUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UbsProfileChangePasswordPopUpComponent_mat_error_17_Template, 3, 3, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UbsProfileChangePasswordPopUpComponent_mat_error_24_Template, 3, 3, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-dialog-actions", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, "ubs-client-profile.change-password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 12, "ubs-client-profile.old-password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 14, "ubs-client-profile.new-password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formConfig.errors == null ? null : ctx.formConfig.errors.same) && ctx.formConfig.value.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 16, "ubs-client-profile.repeat-password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formConfig.errors == null ? null : ctx.formConfig.errors.notSame);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 18, "ubs-client-profile.btn.change-password-cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formConfig.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 20, "ubs-client-profile.btn.change-password"), " ");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".dialog-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  font-family: var(--primary-font);\n}\n.dialog-container[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.dialog-container[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .forms-inputs[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.dialog-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 250px;\n}\n.dialog-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 5px;\n  font-family: var(--secondary-font);\n}\n.dialog-container[_ngcontent-%COMP%]   .btn-ubs[_ngcontent-%COMP%] {\n  font-size: 18px;\n  background-color: var(--ubs-button-light-green);\n  color: var(--ubs-tertiary-dark-grey);\n}\n.dialog-container[_ngcontent-%COMP%]   .btn-ubs-outline-success[_ngcontent-%COMP%] {\n  color: var(--ubs-button-light-green);\n  border-color: var(--ubs-button-light-green);\n}\n.dialog-container[_ngcontent-%COMP%]   .btn-ubs-outline-success[_ngcontent-%COMP%]:hover {\n  color: var(--ubs-secondary-dark-grey);\n  background-color: var(--ubs-button-light-green);\n  border-color: var(--ubs-button-light-green);\n}\n.dialog-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: var(--ubs-primary-grey);\n  border: 1px solid var(--ubs-primary-grey);\n  color: var(--ubs-primary-white);\n}\n.dialog-container[_ngcontent-%COMP%]   .action-btns[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWJzLXVzZXIvdWJzLXVzZXItcHJvZmlsZS1wYWdlL3Vicy1wcm9maWxlLWNoYW5nZS1wYXNzd29yZC1wb3AtdXAvRDpcXFNvZnRTZXJ2ZV9BY2FkZW15XFxHcmVlbkNpdHlcXGdoLXBhZ2VzXFxHcmVlbkNpdHlDbGllbnQvc3JjXFxhcHBcXHVicy11c2VyXFx1YnMtdXNlci1wcm9maWxlLXBhZ2VcXHVicy1wcm9maWxlLWNoYW5nZS1wYXNzd29yZC1wb3AtdXBcXHVicy1wcm9maWxlLWNoYW5nZS1wYXNzd29yZC1wb3AtdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Vicy11c2VyL3Vicy11c2VyLXByb2ZpbGUtcGFnZS91YnMtcHJvZmlsZS1jaGFuZ2UtcGFzc3dvcmQtcG9wLXVwL3Vicy1wcm9maWxlLWNoYW5nZS1wYXNzd29yZC1wb3AtdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtBQ0NKO0FEQ0k7RUFDRSxZQUFBO0FDQ047QURHRTtFQUNFLFlBQUE7QUNESjtBRElFO0VBQ0UsV0FBQTtFQUNBLGtDQUFBO0FDRko7QURLRTtFQUNFLGVBQUE7RUFDQSwrQ0FBQTtFQUNBLG9DQUFBO0FDSEo7QURNRTtFQUNFLG9DQUFBO0VBQ0EsMkNBQUE7QUNKSjtBRE9FO0VBQ0UscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLDJDQUFBO0FDTEo7QURRRTtFQUNFLHlDQUFBO0VBQ0EseUNBQUE7RUFDQSwrQkFBQTtBQ05KO0FEU0U7RUFDRSxZQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC91YnMtdXNlci91YnMtdXNlci1wcm9maWxlLXBhZ2UvdWJzLXByb2ZpbGUtY2hhbmdlLXBhc3N3b3JkLXBvcC11cC91YnMtcHJvZmlsZS1jaGFuZ2UtcGFzc3dvcmQtcG9wLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcblxyXG4gIC5pbnB1dCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcblxyXG4gICAgLmZvcm1zLWlucHV0cyB7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XHJcbiAgfVxyXG5cclxuICAuYnRuLXVicyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtdGVydGlhcnktZGFyay1ncmV5KTtcclxuICB9XHJcblxyXG4gIC5idG4tdWJzLW91dGxpbmUtc3VjY2VzcyB7XHJcbiAgICBjb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi11YnMtb3V0bGluZS1zdWNjZXNzOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtc2Vjb25kYXJ5LWRhcmstZ3JleSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XHJcbiAgfVxyXG5cclxuICBidXR0b246ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS13aGl0ZSk7XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uLWJ0bnMge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxufVxyXG4iLCIuZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xufVxuLmRpYWxvZy1jb250YWluZXIgLmlucHV0IHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmRpYWxvZy1jb250YWluZXIgLmlucHV0IC5mb3Jtcy1pbnB1dHMge1xuICB3aWR0aDogMjAwcHg7XG59XG4uZGlhbG9nLWNvbnRhaW5lciBpbnB1dCB7XG4gIHdpZHRoOiAyNTBweDtcbn1cbi5kaWFsb2ctY29udGFpbmVyIGJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xufVxuLmRpYWxvZy1jb250YWluZXIgLmJ0bi11YnMge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xuICBjb2xvcjogdmFyKC0tdWJzLXRlcnRpYXJ5LWRhcmstZ3JleSk7XG59XG4uZGlhbG9nLWNvbnRhaW5lciAuYnRuLXVicy1vdXRsaW5lLXN1Y2Nlc3Mge1xuICBjb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XG59XG4uZGlhbG9nLWNvbnRhaW5lciAuYnRuLXVicy1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tdWJzLXNlY29uZGFyeS1kYXJrLWdyZXkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcbn1cbi5kaWFsb2ctY29udGFpbmVyIGJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LXdoaXRlKTtcbn1cbi5kaWFsb2ctY29udGFpbmVyIC5hY3Rpb24tYnRucyB7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UbsProfileChangePasswordPopUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ubs-profile-change-password-pop-up',
                templateUrl: './ubs-profile-change-password-pop-up.component.html',
                styleUrls: ['./ubs-profile-change-password-pop-up.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ubs-user/ubs-user-profile-page/ubs-profile-delete-pop-up/ubs-profile-delete-pop-up.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/ubs-user/ubs-user-profile-page/ubs-profile-delete-pop-up/ubs-profile-delete-pop-up.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: UbsProfileDeletePopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbsProfileDeletePopUpComponent", function() { return UbsProfileDeletePopUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




class UbsProfileDeletePopUpComponent {
}
UbsProfileDeletePopUpComponent.ɵfac = function UbsProfileDeletePopUpComponent_Factory(t) { return new (t || UbsProfileDeletePopUpComponent)(); };
UbsProfileDeletePopUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UbsProfileDeletePopUpComponent, selectors: [["app-ubs-profile-delete-pop-up"]], decls: 15, vars: 13, consts: [[1, "dialog-container"], ["mat-dialog-title", ""], ["align", "end"], ["mat-dialog-close", "", 1, "btn", "btn-ubs-outline-success"], ["cdkFocusInitial", "", 1, "btn", "btn-success", "btn-ubs", 3, "mat-dialog-close"]], template: function UbsProfileDeletePopUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-actions", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "ubs-client-profile.delete-title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "ubs-client-profile.delete-message"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, "ubs-client-profile.btn.delete-profile-cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 11, "ubs-client-profile.btn.delete-profile-save"), " ");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: [".dialog-container[_ngcontent-%COMP%] {\n  width: 450px;\n  padding: 20px;\n  font-family: var(--secondary-font);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.btn-ubs[_ngcontent-%COMP%] {\n  font-size: 18px;\n  background-color: var(--ubs-button-light-green);\n  color: var(--ubs-tertiary-dark-grey);\n}\n\n.btn-ubs-outline-success[_ngcontent-%COMP%] {\n  color: var(--ubs-button-light-green);\n  border-color: var(--ubs-button-light-green);\n}\n\n.btn-ubs-outline-success[_ngcontent-%COMP%]:hover {\n  color: var(--ubs-secondary-dark-grey);\n  background-color: var(--ubs-button-light-green);\n  border-color: var(--ubs-button-light-green);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWJzLXVzZXIvdWJzLXVzZXItcHJvZmlsZS1wYWdlL3Vicy1wcm9maWxlLWRlbGV0ZS1wb3AtdXAvRDpcXFNvZnRTZXJ2ZV9BY2FkZW15XFxHcmVlbkNpdHlcXGdoLXBhZ2VzXFxHcmVlbkNpdHlDbGllbnQvc3JjXFxhcHBcXHVicy11c2VyXFx1YnMtdXNlci1wcm9maWxlLXBhZ2VcXHVicy1wcm9maWxlLWRlbGV0ZS1wb3AtdXBcXHVicy1wcm9maWxlLWRlbGV0ZS1wb3AtdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Vicy11c2VyL3Vicy11c2VyLXByb2ZpbGUtcGFnZS91YnMtcHJvZmlsZS1kZWxldGUtcG9wLXVwL3Vicy1wcm9maWxlLWRlbGV0ZS1wb3AtdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0FDSkY7O0FET0E7RUFDRSxZQUFBO0FDSkY7O0FET0E7RUFDRSxlQUFBO0VBQ0EsK0NBQUE7RUFDQSxvQ0FBQTtBQ0pGOztBRE9BO0VBQ0Usb0NBQUE7RUFDQSwyQ0FBQTtBQ0pGOztBRE9BO0VBQ0UscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLDJDQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC91YnMtdXNlci91YnMtdXNlci1wcm9maWxlLXBhZ2UvdWJzLXByb2ZpbGUtZGVsZXRlLXBvcC11cC91YnMtcHJvZmlsZS1kZWxldGUtcG9wLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGhlaWdodC1hbmQtd2lkdGgoJGhlaWdodCwgJHdpZHRoKSB7XHJcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gIHdpZHRoOiAkd2lkdGg7XHJcbn1cclxuXHJcbi5kaWFsb2ctY29udGFpbmVyIHtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmJ0bi11YnMge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcclxuICBjb2xvcjogdmFyKC0tdWJzLXRlcnRpYXJ5LWRhcmstZ3JleSk7XHJcbn1cclxuXHJcbi5idG4tdWJzLW91dGxpbmUtc3VjY2VzcyB7XHJcbiAgY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XHJcbn1cclxuXHJcbi5idG4tdWJzLW91dGxpbmUtc3VjY2Vzczpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLXVicy1zZWNvbmRhcnktZGFyay1ncmV5KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xyXG59XHJcbiIsIi5kaWFsb2ctY29udGFpbmVyIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5idG4tdWJzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcbiAgY29sb3I6IHZhcigtLXVicy10ZXJ0aWFyeS1kYXJrLWdyZXkpO1xufVxuXG4uYnRuLXVicy1vdXRsaW5lLXN1Y2Nlc3Mge1xuICBjb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XG59XG5cbi5idG4tdWJzLW91dGxpbmUtc3VjY2Vzczpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS11YnMtc2Vjb25kYXJ5LWRhcmstZ3JleSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xuICBib3JkZXItY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UbsProfileDeletePopUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ubs-profile-delete-pop-up',
                templateUrl: './ubs-profile-delete-pop-up.component.html',
                styleUrls: ['./ubs-profile-delete-pop-up.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/ubs-user/ubs-user-profile-page/ubs-user-profile-page.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/ubs-user/ubs-user-profile-page/ubs-user-profile-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UbsUserProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbsUserProfilePageComponent", function() { return UbsUserProfilePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_main_image_pathes_sign_in_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/main/image-pathes/sign-in-icons */ "./src/app/main/image-pathes/sign-in-icons.ts");
/* harmony import */ var _ubs_profile_delete_pop_up_ubs_profile_delete_pop_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ubs-profile-delete-pop-up/ubs-profile-delete-pop-up.component */ "./src/app/ubs-user/ubs-user-profile-page/ubs-profile-delete-pop-up/ubs-profile-delete-pop-up.component.ts");
/* harmony import */ var _ubs_profile_change_password_pop_up_ubs_profile_change_password_pop_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ubs-profile-change-password-pop-up/ubs-profile-change-password-pop-up.component */ "./src/app/ubs-user/ubs-user-profile-page/ubs-profile-change-password-pop-up/ubs-profile-change-password-pop-up.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_ubs_user_services_client_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/ubs-user/services/client-profile.service */ "./src/app/ubs-user/services/client-profile.service.ts");
/* harmony import */ var _global_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @global-errors/mat-snack-bar/mat-snack-bar.component */ "./src/app/main/component/errors/mat-snack-bar/mat-snack-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_imask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-imask */ "./node_modules/angular-imask/__ivy_ngcc__/fesm2015/angular-imask.js");
/* harmony import */ var _shared_spinner_ubs_spinner_ubs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/spinner-ubs/spinner-ubs.component */ "./src/app/shared/spinner-ubs/spinner-ubs.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");














function UbsUserProfilePageComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ubs-client-profile.message-if-edit"), " ");
} }
function UbsUserProfilePageComponent_form_11_input_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 41);
} }
function UbsUserProfilePageComponent_form_11_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.userProfile == null ? null : ctx_r7.userProfile.recipientName);
} }
function UbsUserProfilePageComponent_form_11_input_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 42);
} }
function UbsUserProfilePageComponent_form_11_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.userProfile == null ? null : ctx_r9.userProfile.recipientSurname);
} }
function UbsUserProfilePageComponent_form_11_input_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 43);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
} }
function UbsUserProfilePageComponent_form_11_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.userProfile == null ? null : ctx_r11.userProfile.recipientEmail);
} }
const _c0 = function (a0) { return { mask: a0 }; };
function UbsUserProfilePageComponent_form_11_input_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 44);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r12.userForm.controls["recipientPhone"])("unmask", true)("imask", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r12.phoneMask));
} }
function UbsUserProfilePageComponent_form_11_p_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+380", ctx_r13.userProfile == null ? null : ctx_r13.userProfile.recipientPhone, "");
} }
function UbsUserProfilePageComponent_form_11_input_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 45);
} }
function UbsUserProfilePageComponent_form_11_p_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.userProfile == null ? null : ctx_r15.userProfile.addressDto.city);
} }
function UbsUserProfilePageComponent_form_11_input_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 46);
} }
function UbsUserProfilePageComponent_form_11_p_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.userProfile == null ? null : ctx_r17.userProfile.addressDto.street);
} }
function UbsUserProfilePageComponent_form_11_input_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 47);
} }
function UbsUserProfilePageComponent_form_11_p_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.userProfile == null ? null : ctx_r19.userProfile.addressDto.houseNumber);
} }
function UbsUserProfilePageComponent_form_11_input_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 48);
} }
function UbsUserProfilePageComponent_form_11_p_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.userProfile == null ? null : ctx_r21.userProfile.addressDto.houseCorpus);
} }
function UbsUserProfilePageComponent_form_11_input_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 49);
} }
function UbsUserProfilePageComponent_form_11_p_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.userProfile == null ? null : ctx_r23.userProfile.addressDto.entranceNumber);
} }
function UbsUserProfilePageComponent_form_11_input_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 50);
} }
function UbsUserProfilePageComponent_form_11_p_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.userProfile == null ? null : ctx_r25.userProfile.addressDto.district);
} }
function UbsUserProfilePageComponent_form_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UbsUserProfilePageComponent_form_11_input_8_Template, 1, 0, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UbsUserProfilePageComponent_form_11_p_9_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UbsUserProfilePageComponent_form_11_input_14_Template, 1, 0, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UbsUserProfilePageComponent_form_11_p_15_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UbsUserProfilePageComponent_form_11_input_23_Template, 1, 1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UbsUserProfilePageComponent_form_11_p_24_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UbsUserProfilePageComponent_form_11_input_29_Template, 1, 5, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, UbsUserProfilePageComponent_form_11_p_30_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, UbsUserProfilePageComponent_form_11_input_39_Template, 1, 0, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, UbsUserProfilePageComponent_form_11_p_40_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, UbsUserProfilePageComponent_form_11_input_46_Template, 1, 0, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, UbsUserProfilePageComponent_form_11_p_47_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, UbsUserProfilePageComponent_form_11_input_52_Template, 1, 0, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, UbsUserProfilePageComponent_form_11_p_53_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, UbsUserProfilePageComponent_form_11_input_58_Template, 1, 0, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, UbsUserProfilePageComponent_form_11_p_59_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, UbsUserProfilePageComponent_form_11_input_64_Template, 1, 0, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, UbsUserProfilePageComponent_form_11_p_65_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, UbsUserProfilePageComponent_form_11_input_70_Template, 1, 0, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, UbsUserProfilePageComponent_form_11_p_71_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.userForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 34, "ubs-client-profile.personal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 36, "ubs-client-profile.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 38, "ubs-client-profile.surname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 40, "ubs-client-profile.contacts"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 42, "ubs-client-profile.email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 44, "ubs-client-profile.phone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 46, "ubs-client-profile.address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 48, "ubs-client-profile.city"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 50, "ubs-client-profile.street"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 52, "ubs-client-profile.house"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 54, "ubs-client-profile.corpus"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 56, "ubs-client-profile.entrance"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 58, "ubs-client-profile.district"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isEditing);
} }
function UbsUserProfilePageComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UbsUserProfilePageComponent_div_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UbsUserProfilePageComponent_div_12_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "ubs-client-profile.btn.cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.userForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "ubs-client-profile.btn.save"), " ");
} }
function UbsUserProfilePageComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UbsUserProfilePageComponent_div_13_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.openChangePasswordDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UbsUserProfilePageComponent_div_13_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.openDeleteProfileDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "ubs-client-profile.additional"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, "ubs-client-profile.btn.change-password"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, "ubs-client-profile.btn.delete-profile"), " ");
} }
function UbsUserProfilePageComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ubs-spinner", 59);
} }
class UbsUserProfilePageComponent {
    constructor(dialog, clientProfileService, snackBar) {
        this.dialog = dialog;
        this.clientProfileService = clientProfileService;
        this.snackBar = snackBar;
        this.defaultAddress = {
            actual: true,
            city: '',
            coordinates: {
                latitude: 1,
                longitude: 1
            },
            district: '',
            entranceNumber: '',
            houseCorpus: '',
            houseNumber: '',
            id: null,
            street: ''
        };
        this.googleIcon = src_app_main_image_pathes_sign_in_icons__WEBPACK_IMPORTED_MODULE_2__["SignInIcons"].picGoogle;
        this.isEditing = false;
        this.isFetching = false;
        this.phoneMask = '+{38} 000 000 00 00';
        this.regexp = /^([a-zа-яїєґ '-])+$/iu;
        this.regexpEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        this.regexpWithDigits = /^([a-zа-яїєґ0-9 '-])+$/iu;
    }
    ngOnInit() {
        this.getUserData();
    }
    composeFormData(data) {
        var _a;
        return Object.assign(Object.assign({}, data), { recipientPhone: (_a = data.recipientPhone) === null || _a === void 0 ? void 0 : _a.slice(-9) });
    }
    getUserData() {
        this.isFetching = true;
        this.clientProfileService.getDataClientProfile().subscribe((res) => {
            var _a;
            this.userProfile = this.composeFormData(res);
            this.userProfile.addressDto = (_a = this.userProfile.addressDto) !== null && _a !== void 0 ? _a : this.defaultAddress;
            this.userInit();
            this.isFetching = false;
        }, (err) => {
            this.isFetching = false;
            this.snackBar.openSnackBar('ubs-client-profile.error-message');
        });
    }
    userInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((_a = this.userProfile) === null || _a === void 0 ? void 0 : _a.addressDto.city, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.regexp), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]),
                street: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((_b = this.userProfile) === null || _b === void 0 ? void 0 : _b.addressDto.street, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.regexpWithDigits), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]),
                houseNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((_c = this.userProfile) === null || _c === void 0 ? void 0 : _c.addressDto.houseNumber, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.regexpWithDigits),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4)
                ]),
                houseCorpus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((_d = this.userProfile) === null || _d === void 0 ? void 0 : _d.addressDto.houseCorpus, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.regexpWithDigits),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4)
                ]),
                entranceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((_e = this.userProfile) === null || _e === void 0 ? void 0 : _e.addressDto.entranceNumber, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.regexpWithDigits),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4)
                ]),
                district: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((_f = this.userProfile) === null || _f === void 0 ? void 0 : _f.addressDto.district, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.regexpWithDigits),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)
                ])
            }),
            recipientName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((_g = this.userProfile) === null || _g === void 0 ? void 0 : _g.recipientName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.regexp)]),
            recipientSurname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((_h = this.userProfile) === null || _h === void 0 ? void 0 : _h.recipientSurname, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.regexp)]),
            recipientEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((_j = this.userProfile) === null || _j === void 0 ? void 0 : _j.recipientEmail, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.regexpEmail)]),
            recipientPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`+38 0${(_k = this.userProfile) === null || _k === void 0 ? void 0 : _k.recipientPhone}`, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(12)])
        });
        this.isFetching = false;
    }
    onEdit() {
        this.isEditing = true;
        this.isFetching = false;
    }
    onCancel() {
        this.userInit();
        this.isEditing = false;
    }
    onSubmit() {
        if (this.userForm.valid) {
            this.isFetching = true;
            this.isEditing = false;
            const submitData = {
                addressDto: Object.assign(Object.assign({}, this.userForm.value.address), { id: this.userProfile.addressDto.id, actual: this.userProfile.addressDto.actual, coordinates: this.userProfile.addressDto.coordinates }),
                recipientEmail: this.userForm.value.recipientEmail,
                recipientName: this.userForm.value.recipientName,
                recipientPhone: this.userForm.value.recipientPhone,
                recipientSurname: this.userForm.value.recipientSurname
            };
            this.clientProfileService.postDataClientProfile(submitData).subscribe((res) => {
                this.isFetching = false;
                this.userProfile = this.composeFormData(res);
            }, (err) => {
                this.isFetching = false;
                this.snackBar.openSnackBar('ubs-client-profile.error-message');
            });
        }
        else {
            this.isEditing = true;
        }
    }
    openDeleteProfileDialog() {
        this.dialog.open(_ubs_profile_delete_pop_up_ubs_profile_delete_pop_up_component__WEBPACK_IMPORTED_MODULE_3__["UbsProfileDeletePopUpComponent"], {
            hasBackdrop: true
        });
    }
    openChangePasswordDialog() {
        this.dialog.open(_ubs_profile_change_password_pop_up_ubs_profile_change_password_pop_up_component__WEBPACK_IMPORTED_MODULE_4__["UbsProfileChangePasswordPopUpComponent"], {
            hasBackdrop: true
        });
    }
}
UbsUserProfilePageComponent.ɵfac = function UbsUserProfilePageComponent_Factory(t) { return new (t || UbsUserProfilePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_ubs_user_services_client_profile_service__WEBPACK_IMPORTED_MODULE_6__["ClientProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarComponent"])); };
UbsUserProfilePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UbsUserProfilePageComponent, selectors: [["app-ubs-user-profile-page"]], decls: 16, vars: 8, consts: [[1, "ubs_profile-container", "mx-auto"], [1, "container"], [1, "row"], [1, "ubs_profile-header"], [1, "header-text"], [1, "container-fluid"], ["class", "message-text", 4, "ngIf"], [1, "input-group", "input-group-sm"], [3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "submit-btns", 4, "ngIf"], ["class", "ubs_profile-footer", 4, "ngIf"], ["spinner", ""], [1, "message-text"], [3, "formGroup"], [1, "form-group", "col-sm-5"], ["for", "recipientName"], ["type", "text", "class", "form-control", "id", "recipientName", "formControlName", "recipientName", 4, "ngIf"], [4, "ngIf"], ["for", "recipientSurname"], ["type", "text", "class", "form-control", "id", "recipientSurname", "formControlName", "recipientSurname", 4, "ngIf"], ["for", "recipientEmail", 1, "form-label"], ["type", "email", "class", "form-control", "id", "recipientEmail", "formControlName", "recipientEmail", "aria-describedby", "emailHelp", 3, "readonly", 4, "ngIf"], [1, "form-group", "col-sm-4"], ["for", "recipientPhone", 1, "form-label"], ["type", "tel", "class", "form-control", "id", "recipientPhone", "placeholder", "+38___ ___ __ __", 3, "formControl", "unmask", "imask", 4, "ngIf"], ["formGroupName", "address", 1, "address"], [1, "form-group", "col-sm-3"], ["for", "city", 1, "form-label"], ["type", "text", "class", "form-control", "id", "city", "formControlName", "city", 4, "ngIf"], [1, "house"], ["for", "street", 1, "form-label"], ["type", "text", "class", "form-control", "id", "street", "formControlName", "street", 4, "ngIf"], [1, "form-group", "col-sm-2"], ["for", "houseNumber", 1, "form-label"], ["type", "text", "class", "form-control", "id", "houseNumber", "formControlName", "houseNumber", 4, "ngIf"], ["for", "houseCorpus", 1, "form-label"], ["type", "text", "class", "form-control", "id", "houseCorpus", "formControlName", "houseCorpus", 4, "ngIf"], ["for", "entranceNumber", 1, "form-label"], ["type", "text", "class", "form-control", "id", "entranceNumber", "formControlName", "entranceNumber", 4, "ngIf"], ["for", "district", 1, "form-label"], ["type", "text", "class", "form-control", "id", "district", "formControlName", "district", 4, "ngIf"], ["type", "text", "id", "recipientName", "formControlName", "recipientName", 1, "form-control"], ["type", "text", "id", "recipientSurname", "formControlName", "recipientSurname", 1, "form-control"], ["type", "email", "id", "recipientEmail", "formControlName", "recipientEmail", "aria-describedby", "emailHelp", 1, "form-control", 3, "readonly"], ["type", "tel", "id", "recipientPhone", "placeholder", "+38___ ___ __ __", 1, "form-control", 3, "formControl", "unmask", "imask"], ["type", "text", "id", "city", "formControlName", "city", 1, "form-control"], ["type", "text", "id", "street", "formControlName", "street", 1, "form-control"], ["type", "text", "id", "houseNumber", "formControlName", "houseNumber", 1, "form-control"], ["type", "text", "id", "houseCorpus", "formControlName", "houseCorpus", 1, "form-control"], ["type", "text", "id", "entranceNumber", "formControlName", "entranceNumber", 1, "form-control"], ["type", "text", "id", "district", "formControlName", "district", 1, "form-control"], [1, "submit-btns"], ["type", "submit", 1, "btn", "btn-ubs-outline-success", "cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "ubs_profile-footer"], [1, "footer-text"], [1, "footer-btns"], [1, "btn", "btn-ubs-outline-success", "open", 3, "click"], [1, "btn", "btn-ubs-outline-success", "delete", 3, "click"], [1, "mx-auto"]], template: function UbsUserProfilePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UbsUserProfilePageComponent_p_9_Template, 3, 3, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UbsUserProfilePageComponent_form_11_Template, 72, 60, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UbsUserProfilePageComponent_div_12_Template, 7, 7, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UbsUserProfilePageComponent_div_13_Template, 12, 9, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UbsUserProfilePageComponent_ng_template_14_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, "ubs-client-profile.data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFetching)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEditing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], angular_imask__WEBPACK_IMPORTED_MODULE_9__["IMaskDirective"], _shared_spinner_ubs_spinner_ubs_component__WEBPACK_IMPORTED_MODULE_10__["SpinnerUbsComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: [".ubs_profile-container[_ngcontent-%COMP%] {\n  font-family: var(--primary-font);\n  font-size: 0.9em;\n  max-width: 1200px;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 100px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .ubs_profile-header[_ngcontent-%COMP%] {\n  width: 905px;\n  display: flex;\n  justify-content: space-between;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .ubs_profile-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  margin: 0 20px 20px 20px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  padding: 20px;\n  width: 905px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .house[_ngcontent-%COMP%] {\n  display: flex;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .house[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--ubs-secondary-grey);\n}\n.ubs_profile-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid var(--ubs-error-ligh-red);\n}\n.ubs_profile-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 30px 0 30px 30px;\n  font-family: var(--secondary-font);\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .btn-ubs-outline-success[_ngcontent-%COMP%] {\n  color: var(--ubs-button-light-green);\n  border-color: var(--ubs-button-light-green);\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .btn-ubs-outline-success[_ngcontent-%COMP%]:hover {\n  color: var(--ubs-secondary-dark-grey);\n  background-color: var(--ubs-button-light-green);\n  border-color: var(--ubs-button-light-green);\n}\n.ubs_profile-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 30px 0 30px 15px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: black;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 13px 13px 13px 0;\n  color: black;\n  font-size: 16px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .account[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 20px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .account[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .account[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 15px 30px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .submit-btns[_ngcontent-%COMP%] {\n  width: 905px;\n  display: flex;\n  justify-content: flex-end;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: var(--ubs-primary-grey);\n  border: 1px solid var(--ubs-primary-grey);\n  color: var(--ubs-primary-white);\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .ubs_profile-footer[_ngcontent-%COMP%] {\n  width: 905px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .ubs_profile-footer[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .ubs_profile-footer[_ngcontent-%COMP%]   .footer-btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin: 0 10px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);\n}\n@media (max-width: 1439px) {\n  .ubs_profile-container[_ngcontent-%COMP%] {\n    max-width: 800px;\n  }\n}\n@media (max-width: 992px) {\n  .ubs_profile-container[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n@media (max-width: 600px) {\n  .house[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .house[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin-right: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWJzLXVzZXIvdWJzLXVzZXItcHJvZmlsZS1wYWdlL0Q6XFxTb2Z0U2VydmVfQWNhZGVteVxcR3JlZW5DaXR5XFxnaC1wYWdlc1xcR3JlZW5DaXR5Q2xpZW50L3NyY1xcYXBwXFx1YnMtdXNlclxcdWJzLXVzZXItcHJvZmlsZS1wYWdlXFx1YnMtdXNlci1wcm9maWxlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Vicy11c2VyL3Vicy11c2VyLXByb2ZpbGUtcGFnZS91YnMtdXNlci1wcm9maWxlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDQ0o7QURDSTtFQUNFLHdCQUFBO0FDQ047QURHRTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0FDREo7QURHSTtFQUNFLGlCQUFBO0FDRE47QURLRTtFQUNFLGFBQUE7QUNISjtBREtJO0VBQ0Usa0JBQUE7QUNITjtBRE9FO0VBQ0UsU0FBQTtFQUNBLGdDQUFBO0FDTEo7QURRRTtFQUNFLGNBQUE7QUNOSjtBRFNFO0VBQ0UsMkNBQUE7QUNQSjtBRFVFO0VBQ0Usd0JBQUE7RUFDQSxrQ0FBQTtBQ1JKO0FEV0U7RUFDRSxvQ0FBQTtFQUNBLDJDQUFBO0FDVEo7QURZRTtFQUNFLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSwyQ0FBQTtBQ1ZKO0FEYUU7RUFDRSxpQkFBQTtFQUNBLHdCQUFBO0FDWEo7QURjRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ1pKO0FEZ0JJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ2ROO0FEa0JFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNoQko7QURrQkk7RUFDRSxXQUFBO0FDaEJOO0FEbUJJO0VBQ0UsaUJBQUE7QUNqQk47QURxQkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDbkJKO0FEc0JFO0VBQ0UseUNBQUE7RUFDQSx5Q0FBQTtFQUNBLCtCQUFBO0FDcEJKO0FEdUJFO0VBQ0UsWUFBQTtBQ3JCSjtBRHVCSTtFQUNFLFlBQUE7QUNyQk47QUR3Qkk7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7QUN0Qk47QUQyQkE7RUFDRTtJQUNFLGdCQUFBO0VDeEJGO0FBQ0Y7QUQyQkE7RUFDRTtJQUNFLGdCQUFBO0VDekJGO0FBQ0Y7QUQ0QkE7RUFDRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtFQzFCRjtFRDRCRTtJQUNFLGtCQUFBO0VDMUJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91YnMtdXNlci91YnMtdXNlci1wcm9maWxlLXBhZ2UvdWJzLXVzZXItcHJvZmlsZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVic19wcm9maWxlLWNvbnRhaW5lciB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG5cclxuICAudWJzX3Byb2ZpbGUtaGVhZGVyIHtcclxuICAgIHdpZHRoOiA5MDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgLmhlYWRlci10ZXh0IHtcclxuICAgICAgbWFyZ2luOiAwIDIwcHggMjBweCAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmlucHV0LWdyb3VwIHtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiA5MDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhvdXNlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1zZWNvbmRhcnktZ3JleSk7XHJcbiAgfVxyXG5cclxuICBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcblxyXG4gIGlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11YnMtZXJyb3ItbGlnaC1yZWQpO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMzBweCAwIDMwcHggMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XHJcbiAgfVxyXG5cclxuICAuYnRuLXVicy1vdXRsaW5lLXN1Y2Nlc3Mge1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcclxuICB9XHJcblxyXG4gIC5idG4tdWJzLW91dGxpbmUtc3VjY2Vzczpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tdWJzLXNlY29uZGFyeS1kYXJrLWdyZXkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xyXG4gIH1cclxuXHJcbiAgaDUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDMwcHggMCAzMHB4IDE1cHg7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIHAge1xyXG4gICAgICBwYWRkaW5nOiAxM3B4IDEzcHggMTNweCAwO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hY2NvdW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMTVweCAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN1Ym1pdC1idG5zIHtcclxuICAgIHdpZHRoOiA5MDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XHJcbiAgICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktd2hpdGUpO1xyXG4gIH1cclxuXHJcbiAgLnVic19wcm9maWxlLWZvb3RlciB7XHJcbiAgICB3aWR0aDogOTA1cHg7XHJcblxyXG4gICAgLmZvb3Rlci10ZXh0IHtcclxuICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItYnRucyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQzOXB4KSB7XHJcbiAgLnVic19wcm9maWxlLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLnVic19wcm9maWxlLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmhvdXNlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnVic19wcm9maWxlLWNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuLnVic19wcm9maWxlLWNvbnRhaW5lciAudWJzX3Byb2ZpbGUtaGVhZGVyIHtcbiAgd2lkdGg6IDkwNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4udWJzX3Byb2ZpbGUtY29udGFpbmVyIC51YnNfcHJvZmlsZS1oZWFkZXIgLmhlYWRlci10ZXh0IHtcbiAgbWFyZ2luOiAwIDIwcHggMjBweCAyMHB4O1xufVxuLnVic19wcm9maWxlLWNvbnRhaW5lciAuaW5wdXQtZ3JvdXAge1xuICBtYXJnaW46IDAgMTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDkwNXB4O1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuLnVic19wcm9maWxlLWNvbnRhaW5lciAuaW5wdXQtZ3JvdXAgZm9ybSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLnVic19wcm9maWxlLWNvbnRhaW5lciAuaG91c2Uge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnVic19wcm9maWxlLWNvbnRhaW5lciAuaG91c2UgZGl2IHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuLnVic19wcm9maWxlLWNvbnRhaW5lciBsYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXVicy1zZWNvbmRhcnktZ3JleSk7XG59XG4udWJzX3Byb2ZpbGUtY29udGFpbmVyIGlucHV0IHtcbiAgZm9udC1zaXplOiAxZW07XG59XG4udWJzX3Byb2ZpbGUtY29udGFpbmVyIGlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXVicy1lcnJvci1saWdoLXJlZCk7XG59XG4udWJzX3Byb2ZpbGUtY29udGFpbmVyIGJ1dHRvbiB7XG4gIG1hcmdpbjogMzBweCAwIDMwcHggMzBweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeS1mb250KTtcbn1cbi51YnNfcHJvZmlsZS1jb250YWluZXIgLmJ0bi11YnMtb3V0bGluZS1zdWNjZXNzIHtcbiAgY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xuICBib3JkZXItY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xufVxuLnVic19wcm9maWxlLWNvbnRhaW5lciAuYnRuLXVicy1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tdWJzLXNlY29uZGFyeS1kYXJrLWdyZXkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcbn1cbi51YnNfcHJvZmlsZS1jb250YWluZXIgaDUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAzMHB4IDAgMzBweCAxNXB4O1xufVxuLnVic19wcm9maWxlLWNvbnRhaW5lciBoMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG59XG4udWJzX3Byb2ZpbGUtY29udGFpbmVyIC5mb3JtLWdyb3VwIHAge1xuICBwYWRkaW5nOiAxM3B4IDEzcHggMTNweCAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi51YnNfcHJvZmlsZS1jb250YWluZXIgLmFjY291bnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDIwcHg7XG59XG4udWJzX3Byb2ZpbGUtY29udGFpbmVyIC5hY2NvdW50IGltZyB7XG4gIHdpZHRoOiA1MHB4O1xufVxuLnVic19wcm9maWxlLWNvbnRhaW5lciAuYWNjb3VudCBwIHtcbiAgbWFyZ2luOiAxNXB4IDMwcHg7XG59XG4udWJzX3Byb2ZpbGUtY29udGFpbmVyIC5zdWJtaXQtYnRucyB7XG4gIHdpZHRoOiA5MDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi51YnNfcHJvZmlsZS1jb250YWluZXIgYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktd2hpdGUpO1xufVxuLnVic19wcm9maWxlLWNvbnRhaW5lciAudWJzX3Byb2ZpbGUtZm9vdGVyIHtcbiAgd2lkdGg6IDkwNXB4O1xufVxuLnVic19wcm9maWxlLWNvbnRhaW5lciAudWJzX3Byb2ZpbGUtZm9vdGVyIC5mb290ZXItdGV4dCB7XG4gIG1hcmdpbjogMjBweDtcbn1cbi51YnNfcHJvZmlsZS1jb250YWluZXIgLnVic19wcm9maWxlLWZvb3RlciAuZm9vdGVyLWJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQzOXB4KSB7XG4gIC51YnNfcHJvZmlsZS1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAudWJzX3Byb2ZpbGUtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmhvdXNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmhvdXNlIGRpdiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UbsUserProfilePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ubs-user-profile-page',
                templateUrl: './ubs-user-profile-page.component.html',
                styleUrls: ['./ubs-user-profile-page.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: src_app_ubs_user_services_client_profile_service__WEBPACK_IMPORTED_MODULE_6__["ClientProfileService"] }, { type: _global_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ubs-user/ubs-user-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/ubs-user/ubs-user-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UbsUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbsUserRoutingModule", function() { return UbsUserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ubs_user_guard_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ubs-user-guard.guard */ "./src/app/ubs-user/ubs-user-guard.guard.ts");
/* harmony import */ var _ubs_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ubs-user.component */ "./src/app/ubs-user/ubs-user.component.ts");
/* harmony import */ var _ubs_user_orders_ubs_user_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ubs-user-orders/ubs-user-orders.component */ "./src/app/ubs-user/ubs-user-orders/ubs-user-orders.component.ts");
/* harmony import */ var _ubs_user_messages_ubs_user_messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ubs-user-messages/ubs-user-messages.component */ "./src/app/ubs-user/ubs-user-messages/ubs-user-messages.component.ts");
/* harmony import */ var _ubs_user_bonuses_ubs_user_bonuses_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ubs-user-bonuses/ubs-user-bonuses.component */ "./src/app/ubs-user/ubs-user-bonuses/ubs-user-bonuses.component.ts");
/* harmony import */ var _ubs_user_profile_page_ubs_user_profile_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ubs-user-profile-page/ubs-user-profile-page.component */ "./src/app/ubs-user/ubs-user-profile-page/ubs-user-profile-page.component.ts");










const routes = [
    {
        path: '',
        component: _ubs_user_component__WEBPACK_IMPORTED_MODULE_3__["UbsUserComponent"],
        canActivate: [_ubs_user_guard_guard__WEBPACK_IMPORTED_MODULE_2__["UbsUserGuardGuard"]],
        children: [
            { path: 'profile', component: _ubs_user_profile_page_ubs_user_profile_page_component__WEBPACK_IMPORTED_MODULE_7__["UbsUserProfilePageComponent"] },
            { path: 'orders', component: _ubs_user_orders_ubs_user_orders_component__WEBPACK_IMPORTED_MODULE_4__["UbsUserOrdersComponent"] },
            { path: 'bonuses', component: _ubs_user_bonuses_ubs_user_bonuses_component__WEBPACK_IMPORTED_MODULE_6__["UbsUserBonusesComponent"] },
            { path: `messages/:pageId`, component: _ubs_user_messages_ubs_user_messages_component__WEBPACK_IMPORTED_MODULE_5__["UbsUserMessagesComponent"] }
        ]
    }
];
class UbsUserRoutingModule {
}
UbsUserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UbsUserRoutingModule });
UbsUserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UbsUserRoutingModule_Factory(t) { return new (t || UbsUserRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UbsUserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UbsUserRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/ubs-user/ubs-user-sidebar/ubs-user-sidebar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/ubs-user/ubs-user-sidebar/ubs-user-sidebar.component.ts ***!
  \*************************************************************************/
/*! exports provided: UbsUserSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbsUserSidebarComponent", function() { return UbsUserSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_ubs_base_sidebar_ubs_base_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/ubs-base-sidebar/ubs-base-sidebar.component */ "./src/app/shared/ubs-base-sidebar/ubs-base-sidebar.component.ts");
/* harmony import */ var _services_user_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user-messages.service */ "./src/app/ubs-user/services/user-messages.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _global_service_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @global-service/jwt/jwt.service */ "./src/app/main/service/jwt/jwt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class UbsUserSidebarComponent extends src_app_shared_ubs_base_sidebar_ubs_base_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["UbsBaseSidebarComponent"] {
    constructor(service, breakpointObserver, jwtService) {
        super(service, breakpointObserver, jwtService);
        this.service = service;
        this.breakpointObserver = breakpointObserver;
        this.jwtService = jwtService;
        this.listElementsUser = [
            {
                link: 'assets/img/sidebarIcons/workers_icon.svg',
                name: 'ubs-user.user_data',
                routerLink: 'profile'
            },
            {
                link: 'assets/img/sidebarIcons/shopping-cart_icon.svg',
                name: 'ubs-user.orders',
                routerLink: 'orders'
            },
            {
                link: './assets/img/sidebarIcons/achievement_icon.svg',
                name: 'ubs-user.invoice',
                routerLink: 'bonuses'
            },
            {
                link: 'assets/img/sidebarIcons/none_notification_Bell.svg',
                name: 'ubs-user.messages',
                routerLink: 'messages/1'
            }
        ];
    }
}
UbsUserSidebarComponent.ɵfac = function UbsUserSidebarComponent_Factory(t) { return new (t || UbsUserSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_messages_service__WEBPACK_IMPORTED_MODULE_2__["UserMessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_service_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"])); };
UbsUserSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UbsUserSidebarComponent, selectors: [["app-ubs-user-sidebar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 1, consts: [[3, "listElements"]], template: function UbsUserSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-ubs-base-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listElements", ctx.listElementsUser);
    } }, directives: [src_app_shared_ubs_base_sidebar_ubs_base_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["UbsBaseSidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UbsUserSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ubs-user-sidebar',
                templateUrl: './ubs-user-sidebar.component.html'
            }]
    }], function () { return [{ type: _services_user_messages_service__WEBPACK_IMPORTED_MODULE_2__["UserMessagesService"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] }, { type: _global_service_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ubs-user/ubs-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/ubs-user/ubs-user.component.ts ***!
  \************************************************/
/*! exports provided: UbsUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbsUserComponent", function() { return UbsUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @global-service/localstorage/local-storage.service */ "./src/app/main/service/localstorage/local-storage.service.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_search_popup_search_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/search-popup/search-popup.component */ "./src/app/shared/search-popup/search-popup.component.ts");
/* harmony import */ var _ubs_user_sidebar_ubs_user_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ubs-user-sidebar/ubs-user-sidebar.component */ "./src/app/ubs-user/ubs-user-sidebar/ubs-user-sidebar.component.ts");
/* harmony import */ var _shared_ubs_footer_ubs_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/ubs-footer/ubs-footer.component */ "./src/app/shared/ubs-footer/ubs-footer.component.ts");










class UbsUserComponent {
    constructor(translate, localStorageService) {
        this.translate = translate;
        this.localStorageService = localStorageService;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.localStorageService.languageBehaviourSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy)).subscribe((lang) => {
            this.translate.setDefaultLang(lang !== 'en' && lang !== 'ua' ? 'ua' : lang);
        });
    }
    ngOnDestroy() {
        this.destroy.next(true);
        this.destroy.complete();
    }
}
UbsUserComponent.ɵfac = function UbsUserComponent_Factory(t) { return new (t || UbsUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"])); };
UbsUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UbsUserComponent, selectors: [["app-ubs-user"]], decls: 4, vars: 0, template: function UbsUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-search-popup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-ubs-user-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-ubs-footer");
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _shared_search_popup_search_popup_component__WEBPACK_IMPORTED_MODULE_6__["SearchPopupComponent"], _ubs_user_sidebar_ubs_user_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["UbsUserSidebarComponent"], _shared_ubs_footer_ubs_footer_component__WEBPACK_IMPORTED_MODULE_8__["UbsFooterComponent"]], styles: ["[_nghost-%COMP%] {\n  font-family: var(--primary-font);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWJzLXVzZXIvRDpcXFNvZnRTZXJ2ZV9BY2FkZW15XFxHcmVlbkNpdHlcXGdoLXBhZ2VzXFxHcmVlbkNpdHlDbGllbnQvc3JjXFxhcHBcXHVicy11c2VyXFx1YnMtdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWJzLXVzZXIvdWJzLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdWJzLXVzZXIvdWJzLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UbsUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ubs-user',
                templateUrl: './ubs-user.component.html',
                styleUrls: ['./ubs-user.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ubs-user/ubs-user.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ubs-user/ubs-user.module.ts ***!
  \*********************************************/
/*! exports provided: UbsUserModule, createTranslateLoaderUbsUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UbsUserModule", function() { return UbsUserModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoaderUbsUser", function() { return createTranslateLoaderUbsUser; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ubs_user_orders_list_ubs_user_orders_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ubs-user-orders-list/ubs-user-orders-list.component */ "./src/app/ubs-user/ubs-user-orders-list/ubs-user-orders-list.component.ts");
/* harmony import */ var _ubs_user_order_details_ubs_user_order_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ubs-user-order-details/ubs-user-order-details.component */ "./src/app/ubs-user/ubs-user-order-details/ubs-user-order-details.component.ts");
/* harmony import */ var _ubs_user_orders_ubs_user_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ubs-user-orders/ubs-user-orders.component */ "./src/app/ubs-user/ubs-user-orders/ubs-user-orders.component.ts");
/* harmony import */ var _ubs_user_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ubs-user-routing.module */ "./src/app/ubs-user/ubs-user-routing.module.ts");
/* harmony import */ var _ubs_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ubs-user.component */ "./src/app/ubs-user/ubs-user.component.ts");
/* harmony import */ var _ubs_user_sidebar_ubs_user_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ubs-user-sidebar/ubs-user-sidebar.component */ "./src/app/ubs-user/ubs-user-sidebar/ubs-user-sidebar.component.ts");
/* harmony import */ var angular_imask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-imask */ "./node_modules/angular-imask/__ivy_ngcc__/fesm2015/angular-imask.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _ubs_user_messages_ubs_user_messages_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ubs-user-messages/ubs-user-messages.component */ "./src/app/ubs-user/ubs-user-messages/ubs-user-messages.component.ts");
/* harmony import */ var _ubs_user_messages_notification_body_notification_body_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ubs-user-messages/notification-body/notification-body.component */ "./src/app/ubs-user/ubs-user-messages/notification-body/notification-body.component.ts");
/* harmony import */ var _ubs_user_bonuses_ubs_user_bonuses_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ubs-user-bonuses/ubs-user-bonuses.component */ "./src/app/ubs-user/ubs-user-bonuses/ubs-user-bonuses.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _ubs_user_profile_page_ubs_user_profile_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ubs-user-profile-page/ubs-user-profile-page.component */ "./src/app/ubs-user/ubs-user-profile-page/ubs-user-profile-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ubs_user_profile_page_ubs_profile_change_password_pop_up_ubs_profile_change_password_pop_up_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ubs-user-profile-page/ubs-profile-change-password-pop-up/ubs-profile-change-password-pop-up.component */ "./src/app/ubs-user/ubs-user-profile-page/ubs-profile-change-password-pop-up/ubs-profile-change-password-pop-up.component.ts");
/* harmony import */ var _ubs_user_profile_page_ubs_profile_delete_pop_up_ubs_profile_delete_pop_up_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ubs-user-profile-page/ubs-profile-delete-pop-up/ubs-profile-delete-pop-up.component */ "./src/app/ubs-user/ubs-user-profile-page/ubs-profile-delete-pop-up/ubs-profile-delete-pop-up.component.ts");




























class UbsUserModule {
}
UbsUserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UbsUserModule });
UbsUserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UbsUserModule_Factory(t) { return new (t || UbsUserModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_21__["MaterialModule"],
            _ubs_user_routing_module__WEBPACK_IMPORTED_MODULE_10__["UbsUserRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            angular_imask__WEBPACK_IMPORTED_MODULE_13__["IMaskModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                    useFactory: createTranslateLoaderUbsUser,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                },
                isolate: true
            }),
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UbsUserModule, { declarations: [_ubs_user_sidebar_ubs_user_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["UbsUserSidebarComponent"],
        _ubs_user_bonuses_ubs_user_bonuses_component__WEBPACK_IMPORTED_MODULE_20__["UbsUserBonusesComponent"],
        _ubs_user_component__WEBPACK_IMPORTED_MODULE_11__["UbsUserComponent"],
        _ubs_user_order_details_ubs_user_order_details_component__WEBPACK_IMPORTED_MODULE_8__["UbsUserOrderDetailsComponent"],
        _ubs_user_orders_ubs_user_orders_component__WEBPACK_IMPORTED_MODULE_9__["UbsUserOrdersComponent"],
        _ubs_user_orders_list_ubs_user_orders_list_component__WEBPACK_IMPORTED_MODULE_7__["UbsUserOrdersListComponent"],
        _ubs_user_messages_ubs_user_messages_component__WEBPACK_IMPORTED_MODULE_18__["UbsUserMessagesComponent"],
        _ubs_user_messages_notification_body_notification_body_component__WEBPACK_IMPORTED_MODULE_19__["NotificationBodyComponent"],
        _ubs_user_profile_page_ubs_user_profile_page_component__WEBPACK_IMPORTED_MODULE_22__["UbsUserProfilePageComponent"],
        _ubs_user_profile_page_ubs_profile_change_password_pop_up_ubs_profile_change_password_pop_up_component__WEBPACK_IMPORTED_MODULE_24__["UbsProfileChangePasswordPopUpComponent"],
        _ubs_user_profile_page_ubs_profile_delete_pop_up_ubs_profile_delete_pop_up_component__WEBPACK_IMPORTED_MODULE_25__["UbsProfileDeletePopUpComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_21__["MaterialModule"],
        _ubs_user_routing_module__WEBPACK_IMPORTED_MODULE_10__["UbsUserRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        angular_imask__WEBPACK_IMPORTED_MODULE_13__["IMaskModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UbsUserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _ubs_user_sidebar_ubs_user_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["UbsUserSidebarComponent"],
                    _ubs_user_bonuses_ubs_user_bonuses_component__WEBPACK_IMPORTED_MODULE_20__["UbsUserBonusesComponent"],
                    _ubs_user_component__WEBPACK_IMPORTED_MODULE_11__["UbsUserComponent"],
                    _ubs_user_order_details_ubs_user_order_details_component__WEBPACK_IMPORTED_MODULE_8__["UbsUserOrderDetailsComponent"],
                    _ubs_user_orders_ubs_user_orders_component__WEBPACK_IMPORTED_MODULE_9__["UbsUserOrdersComponent"],
                    _ubs_user_orders_list_ubs_user_orders_list_component__WEBPACK_IMPORTED_MODULE_7__["UbsUserOrdersListComponent"],
                    _ubs_user_messages_ubs_user_messages_component__WEBPACK_IMPORTED_MODULE_18__["UbsUserMessagesComponent"],
                    _ubs_user_messages_notification_body_notification_body_component__WEBPACK_IMPORTED_MODULE_19__["NotificationBodyComponent"],
                    _ubs_user_profile_page_ubs_user_profile_page_component__WEBPACK_IMPORTED_MODULE_22__["UbsUserProfilePageComponent"],
                    _ubs_user_profile_page_ubs_profile_change_password_pop_up_ubs_profile_change_password_pop_up_component__WEBPACK_IMPORTED_MODULE_24__["UbsProfileChangePasswordPopUpComponent"],
                    _ubs_user_profile_page_ubs_profile_delete_pop_up_ubs_profile_delete_pop_up_component__WEBPACK_IMPORTED_MODULE_25__["UbsProfileDeletePopUpComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_21__["MaterialModule"],
                    _ubs_user_routing_module__WEBPACK_IMPORTED_MODULE_10__["UbsUserRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    angular_imask__WEBPACK_IMPORTED_MODULE_13__["IMaskModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                            useFactory: createTranslateLoaderUbsUser,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                        },
                        isolate: true
                    }),
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"]
                ],
                entryComponents: [_ubs_user_profile_page_ubs_profile_change_password_pop_up_ubs_profile_change_password_pop_up_component__WEBPACK_IMPORTED_MODULE_24__["UbsProfileChangePasswordPopUpComponent"], _ubs_user_profile_page_ubs_profile_delete_pop_up_ubs_profile_delete_pop_up_component__WEBPACK_IMPORTED_MODULE_25__["UbsProfileDeletePopUpComponent"]]
            }]
    }], null, null); })();
function createTranslateLoaderUbsUser(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http, './assets/i18n/ubs-admin/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=ubs-user-ubs-user-module-es2015.js.map