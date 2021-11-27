function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-component-about-about-module"], {
  /***/
  "./src/app/main/component/about/about-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/main/component/about/about-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: AboutRoutingModule */

  /***/
  function srcAppMainComponentAboutAboutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function () {
      return AboutRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/about-page/about-page.component */
    "./src/app/main/component/about/components/about-page/about-page.component.ts");

    var aboutRoutes = [{
      path: '',
      component: _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__["AboutPageComponent"]
    }];

    var AboutRoutingModule = function AboutRoutingModule() {
      _classCallCheck(this, AboutRoutingModule);
    };

    AboutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AboutRoutingModule
    });
    AboutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AboutRoutingModule_Factory(t) {
        return new (t || AboutRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(aboutRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(aboutRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/component/about/about.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/main/component/about/about.module.ts ***!
    \******************************************************/

  /*! exports provided: AboutModule, createTranslateLoader */

  /***/
  function srcAppMainComponentAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
      return AboutModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/about-page/about-page.component */
    "./src/app/main/component/about/components/about-page/about-page.component.ts");
    /* harmony import */


    var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about-routing.module */
    "./src/app/main/component/about/about-routing.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_shared_main_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared-main.module */
    "./src/app/main/component/shared/shared-main.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AboutModule = function AboutModule() {
      _classCallCheck(this, AboutModule);
    };

    AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AboutModule
    });
    AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AboutModule_Factory(t) {
        return new (t || AboutModule)();
      },
      providers: [],
      imports: [[_about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"], _shared_shared_main_module__WEBPACK_IMPORTED_MODULE_4__["SharedMainModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
        },
        isolate: true
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutModule, {
        declarations: [_components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_1__["AboutPageComponent"]],
        imports: [_about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"], _shared_shared_main_module__WEBPACK_IMPORTED_MODULE_4__["SharedMainModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_1__["AboutPageComponent"]],
          imports: [_about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"], _shared_shared_main_module__WEBPACK_IMPORTED_MODULE_4__["SharedMainModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
              useFactory: createTranslateLoader,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
            },
            isolate: true
          })],
          exports: [],
          providers: []
        }]
      }], null, null);
    })();

    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }
    /***/

  },

  /***/
  "./src/app/main/component/about/components/about-page/about-page.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/main/component/about/components/about-page/about-page.component.ts ***!
    \************************************************************************************/

  /*! exports provided: AboutPageComponent */

  /***/
  function srcAppMainComponentAboutComponentsAboutPageAboutPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function () {
      return AboutPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @global-service/localstorage/local-storage.service */
    "./src/app/main/service/localstorage/local-storage.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = function _c0() {
      return ["/places"];
    };

    var _c1 = function _c1() {
      return {
        exact: true
      };
    };

    var _c2 = function _c2() {
      return ["/tips"];
    };

    var _c3 = function _c3() {
      return [];
    };

    var AboutPageComponent = /*#__PURE__*/function () {
      function AboutPageComponent(router, localStorageService, translate) {
        _classCallCheck(this, AboutPageComponent);

        this.router = router;
        this.localStorageService = localStorageService;
        this.translate = translate;
      }

      _createClass(AboutPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.localStorageService.userIdBehaviourSubject.subscribe(function (userId) {
            return _this.userId = userId;
          });
          this.subscribeToLangChange();
          this.bindLang(this.localStorageService.getCurrentLanguage());
        }
      }, {
        key: "bindLang",
        value: function bindLang(lang) {
          this.translate.setDefaultLang(lang);
        }
      }, {
        key: "subscribeToLangChange",
        value: function subscribeToLangChange() {
          this.langChangeSub = this.localStorageService.languageSubject.subscribe(this.bindLang.bind(this));
        }
      }, {
        key: "navigateToHabit",
        value: function navigateToHabit() {
          this.router.navigate(['profile', this.userId]);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.langChangeSub.unsubscribe();
        }
      }]);

      return AboutPageComponent;
    }();

    AboutPageComponent.ɵfac = function AboutPageComponent_Factory(t) {
      return new (t || AboutPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]));
    };

    AboutPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutPageComponent,
      selectors: [["app-about-page"]],
      decls: 112,
      vars: 82,
      consts: [["id", "main-content", "role", "main"], [1, "page-wrapper"], [1, "container-about"], [1, "full-text-block"], [1, "primary-global-button", 3, "click"], ["src", "assets/img/Illustrationman.png", "alt", "Illustration man"], [1, "vision"], [1, "container-vision"], ["src", "assets/img/Vision.png", "alt", "vision"], [1, "steps-main-block"], [1, "dashed-line"], [1, "leaves"], [1, "steps-wrapper"], [1, "card-content", "card-store"], ["src", "assets/img/illustration-store.png", "alt", "illustration store", 1, "card-imgage"], [1, "card-title"], [1, "card-title-number"], [1, "card-title-text"], [1, "card-info"], [1, "main-card-text"], ["fragment", "top-user-bar", "routerLinkActive", "active-link", 1, "card-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "card-eco-place", "card-content"], ["fragment", "tips", "routerLinkActive", "active-link", 1, "card-link", 3, "routerLink", "routerLinkActiveOptions"], ["src", "assets/img/illustration-earth.png", "alt", "illustration earth"], [1, "card-eco-products", "card-content"], ["src", "assets/img/illustration-money.png", "alt", "illustration money"], [1, "card-link", "disabled-link", 3, "routerLink"], [1, "card-content", "card-story"], ["routerLink", "[]", 1, "card-link", "disabled-link", 3, "title"], ["src", "assets/img/illustration-recycle.png", "alt", "illustration recycle"], [1, "card-content", "card-people"], ["src", "assets/img/illustration-people.png", "alt", "illustration people"], ["id", "fifth-card-text", 1, "main-card-text"], ["routerLink", "[]", 1, "disabled-link", "card-link", 3, "title"]],
      template: function AboutPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutPageComponent_Template_button_click_10_listener() {
            return ctx.navigateToHabit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutPageComponent_Template_button_click_24_listener() {
            return ctx.navigateToHabit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](86, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](90, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](94, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](103, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](107, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](109, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](111, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 29, "about-us.intro.block-1.header"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 31, "about-us.intro.block-1.text"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 33, "about-us.intro.block-1.button"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 35, "about-us.intro.block-2.header"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 37, "about-us.intro.block-2.text"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 39, "about-us.intro.block-2.button"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 41, "about-us.steps.title"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 43, "about-us.steps.block-1.header"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 45, "about-us.steps.block-1.text"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](77, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](78, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 47, "about-us.steps.block-1.button"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 49, "about-us.steps.block-2.header"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 51, "about-us.steps.block-2.text"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](79, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](80, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 53, "about-us.steps.block-2.button"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 55, "about-us.steps.block-3.header"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 57, "about-us.steps.block-3.text"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](81, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](79, 59, "about-us.steps.block-3.button"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](86, 61, "about-us.steps.block-4.header"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](90, 63, "about-us.steps.block-4.text"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](92, 65, "about-us.disabled-link"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](94, 67, "about-us.steps.block-4.button"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](103, 69, "about-us.steps.block-5.header"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](107, 71, "about-us.steps.block-5.text"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](109, 73, "about-us.disabled-link"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](111, 75, "about-us.steps.block-5.button"), " ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
      styles: ["body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.disabled-link[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n\n.steps-main-block[_ngcontent-%COMP%] {\n  position: relative;\n  margin: auto 150px;\n}\n\n.steps-wrapper[_ngcontent-%COMP%] {\n  margin-top: -3767px;\n}\n\n.full-text-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 48px;\n  line-height: 60px;\n  font-family: var(--secondary-font);\n}\n\n.full-text-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 36px;\n  font-family: var(--primary-font);\n}\n\n.full-text-block[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: var(--primary-font);\n  padding: 16px 40px;\n}\n\n.container-about[_ngcontent-%COMP%] {\n  padding-bottom: 250px;\n  background-image: url('/GreenCityClient/assets/img/curly-line.png');\n  background-size: 100% 100%;\n}\n\n.container-about[_ngcontent-%COMP%]   .full-text-block[_ngcontent-%COMP%] {\n  margin-left: 171px;\n}\n\n.container-about[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.vision[_ngcontent-%COMP%] {\n  background-image: url('/GreenCityClient/assets/img/wave-line.png');\n  background-size: 100% 100%;\n  margin-bottom: 100px;\n}\n\n.container-vision[_ngcontent-%COMP%] {\n  margin: auto 171px;\n  padding-bottom: 250px;\n}\n\n.container-about[_ngcontent-%COMP%], .container-vision[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.card-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n  padding: 40px 48px;\n  line-height: 36px;\n  font-size: 24px;\n  font-family: var(--primary-font);\n  position: relative;\n  top: 150px;\n  background: white;\n}\n\n.card-info[_ngcontent-%COMP%]   .card-link[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 28px;\n  text-decoration: underline;\n  color: var(--secondary-dark-green);\n  font-size: 16px;\n  line-height: 18.75px;\n}\n\n.card-title-text[_ngcontent-%COMP%] {\n  width: 441px;\n  background: white;\n  font-size: 32px;\n  font-family: var(--primary-font);\n  margin: 44px auto auto 24px;\n  font-weight: bold;\n}\n\n.card-store[_ngcontent-%COMP%] {\n  margin-bottom: 175px;\n}\n\n.card-store[_ngcontent-%COMP%]   .card-title-number[_ngcontent-%COMP%]::before {\n  content: url('/GreenCityClient/assets/img/1.png');\n}\n\n.card-eco-place[_ngcontent-%COMP%] {\n  margin-bottom: 270px;\n}\n\n.card-eco-place[_ngcontent-%COMP%]   .card-title-number[_ngcontent-%COMP%]::before {\n  content: url('/GreenCityClient/assets/img/2.png');\n}\n\n.card-eco-products[_ngcontent-%COMP%] {\n  margin-top: 216px;\n}\n\n.card-eco-products[_ngcontent-%COMP%]   .card-title-number[_ngcontent-%COMP%]::before {\n  content: url('/GreenCityClient/assets/img/3.png');\n}\n\n.card-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.card-story[_ngcontent-%COMP%] {\n  margin-top: 300px;\n}\n\n.card-story[_ngcontent-%COMP%]   .card-title-number[_ngcontent-%COMP%]::before {\n  content: url('/GreenCityClient/assets/img/4.png');\n}\n\n.card-people[_ngcontent-%COMP%] {\n  margin-top: 320px;\n}\n\n.card-people[_ngcontent-%COMP%]   .card-title-number[_ngcontent-%COMP%]::before {\n  content: url('/GreenCityClient/assets/img/5.png');\n}\n\n.dashed-line[_ngcontent-%COMP%] {\n  position: relative;\n  background: url('/GreenCityClient/assets/img/dashed-line.png');\n  width: 832px;\n  height: 3576px;\n  margin: auto;\n  z-index: -1;\n}\n\n.leaves[_ngcontent-%COMP%] {\n  position: relative;\n  top: 12px;\n  left: 107px;\n  background: url('/GreenCityClient/assets/img/leaves.png') no-repeat;\n  width: 641px;\n  height: 3214px;\n  z-index: -1;\n}\n\n@media only screen and (max-width: 1199px) {\n  .container-vision[_ngcontent-%COMP%] {\n    margin: auto 30px;\n  }\n\n  .steps-main-block[_ngcontent-%COMP%] {\n    margin: auto 30px;\n  }\n\n  .card-title[_ngcontent-%COMP%] {\n    width: auto;\n  }\n\n  .card-info[_ngcontent-%COMP%] {\n    padding: 0;\n    margin: 0;\n  }\n\n  .card-title-text[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n\n@media only screen and (max-width: 1024px) {\n  .container-about[_ngcontent-%COMP%], .container-vision[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .container-about[_ngcontent-%COMP%]   .full-text-block[_ngcontent-%COMP%], .container-vision[_ngcontent-%COMP%]   .full-text-block[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  .container-about[_ngcontent-%COMP%] {\n    margin: auto 30px;\n  }\n\n  .container-vision[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    order: 2;\n  }\n\n  .card-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin: 0;\n  }\n  .card-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    order: 2;\n  }\n  .card-content[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%] {\n    position: relative;\n    top: 0;\n  }\n\n  .dashed-line[_ngcontent-%COMP%], .leaves[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .steps-wrapper[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvYWJvdXQvY29tcG9uZW50cy9hYm91dC1wYWdlL0Q6XFxTb2Z0U2VydmVfQWNhZGVteVxcR3JlZW5DaXR5XFxnaC1wYWdlc1xcR3JlZW5DaXR5Q2xpZW50L3NyY1xcYXBwXFxtYWluXFxjb21wb25lbnRcXGFib3V0XFxjb21wb25lbnRzXFxhYm91dC1wYWdlXFxhYm91dC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbXBvbmVudC9hYm91dC9jb21wb25lbnRzL2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtBQ0FKOztBREdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUNESjs7QURJRTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURNQTtFQVNFLHFCQUFBO0VBQ0EsbUVBQUE7RUFDQSwwQkFBQTtBQ1hGOztBRENFO0VBQ0Usa0JBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0FDQUo7O0FEUUE7RUFDRSxrRUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNMRjs7QURRQTs7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURPRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0xKOztBRFNBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQ05GOztBRFNBO0VBS0Usb0JBQUE7QUNWRjs7QURNRTtFQUNFLGlEQUFBO0FDSko7O0FEVUE7RUFLRSxvQkFBQTtBQ1hGOztBRE9FO0VBQ0UsaURBQUE7QUNMSjs7QURXQTtFQUtFLGlCQUFBO0FDWkY7O0FEUUU7RUFDRSxpREFBQTtBQ05KOztBRFlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDVEY7O0FEWUE7RUFLRSxpQkFBQTtBQ2JGOztBRFNFO0VBQ0UsaURBQUE7QUNQSjs7QURhQTtFQUtFLGlCQUFBO0FDZEY7O0FEVUU7RUFDRSxpREFBQTtBQ1JKOztBRGNBO0VBQ0Usa0JBQUE7RUFDQSw4REFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNYRjs7QURjQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtRUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ1hGOztBRGNBO0VBQ0U7SUFDRSxpQkFBQTtFQ1hGOztFRGNBO0lBQ0UsaUJBQUE7RUNYRjs7RURjQTtJQUNFLFdBQUE7RUNYRjs7RURjQTtJQUNFLFVBQUE7SUFDQSxTQUFBO0VDWEY7O0VEY0E7SUFDRSxXQUFBO0VDWEY7QUFDRjs7QURjQTtFQUNFOztJQUVFLHNCQUFBO0VDWkY7RURjRTs7SUFDRSxjQUFBO0VDWEo7O0VEZUE7SUFDRSxpQkFBQTtFQ1pGOztFRGdCRTtJQUNFLFFBQUE7RUNiSjs7RURpQkE7SUFDRSxzQkFBQTtJQUNBLFNBQUE7RUNkRjtFRGdCRTtJQUNFLGVBQUE7SUFDQSxRQUFBO0VDZEo7RURpQkU7SUFDRSxrQkFBQTtJQUNBLE1BQUE7RUNmSjs7RURtQkE7O0lBRUUsYUFBQTtFQ2hCRjs7RURtQkE7SUFDRSxhQUFBO0VDaEJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbXBvbmVudC9hYm91dC9jb21wb25lbnRzL2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kaXNhYmxlZC1saW5rIHtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4uc3RlcHMtbWFpbi1ibG9jayB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogYXV0byAxNTBweDtcclxufVxyXG5cclxuLnN0ZXBzLXdyYXBwZXIge1xyXG4gIG1hcmdpbi10b3A6IC0zNzY3cHg7XHJcbn1cclxuXHJcbi5mdWxsLXRleHQtYmxvY2sge1xyXG4gIGgyIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyLWFib3V0IHtcclxuICAuZnVsbC10ZXh0LWJsb2NrIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNzFweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgcGFkZGluZy1ib3R0b206IDI1MHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9hc3NldHMvaW1nL2N1cmx5LWxpbmUucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbi52aXNpb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9hc3NldHMvaW1nL3dhdmUtbGluZS5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci12aXNpb24ge1xyXG4gIG1hcmdpbjogYXV0byAxNzFweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjUwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItYWJvdXQsXHJcbi5jb250YWluZXItdmlzaW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uY2FyZC1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDQwcHggNDhweDtcclxuICBsaW5lLWhlaWdodDogMzZweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gIC5jYXJkLWxpbmsge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRhcmstZ3JlZW4pO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4Ljc1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC10aXRsZS10ZXh0IHtcclxuICB3aWR0aDogNDQxcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xyXG4gIG1hcmdpbjogNDRweCBhdXRvIGF1dG8gMjRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNhcmQtc3RvcmUge1xyXG4gIC5jYXJkLXRpdGxlLW51bWJlcjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IHVybCgnfi9hc3NldHMvaW1nLzEucG5nJyk7XHJcbiAgfVxyXG5cclxuICBtYXJnaW4tYm90dG9tOiAxNzVweDtcclxufVxyXG5cclxuLmNhcmQtZWNvLXBsYWNlIHtcclxuICAuY2FyZC10aXRsZS1udW1iZXI6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiB1cmwoJ34vYXNzZXRzL2ltZy8yLnBuZycpO1xyXG4gIH1cclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMjcwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWVjby1wcm9kdWN0cyB7XHJcbiAgLmNhcmQtdGl0bGUtbnVtYmVyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogdXJsKCd+L2Fzc2V0cy9pbWcvMy5wbmcnKTtcclxuICB9XHJcblxyXG4gIG1hcmdpbi10b3A6IDIxNnB4O1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uY2FyZC1zdG9yeSB7XHJcbiAgLmNhcmQtdGl0bGUtbnVtYmVyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogdXJsKCd+L2Fzc2V0cy9pbWcvNC5wbmcnKTtcclxuICB9XHJcblxyXG4gIG1hcmdpbi10b3A6IDMwMHB4O1xyXG59XHJcblxyXG4uY2FyZC1wZW9wbGUge1xyXG4gIC5jYXJkLXRpdGxlLW51bWJlcjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IHVybCgnfi9hc3NldHMvaW1nLzUucG5nJyk7XHJcbiAgfVxyXG5cclxuICBtYXJnaW4tdG9wOiAzMjBweDtcclxufVxyXG5cclxuLmRhc2hlZC1saW5lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogdXJsKCd+L2Fzc2V0cy9pbWcvZGFzaGVkLWxpbmUucG5nJyk7XHJcbiAgd2lkdGg6IDgzMnB4O1xyXG4gIGhlaWdodDogMzU3NnB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmxlYXZlcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTJweDtcclxuICBsZWZ0OiAxMDdweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJ34vYXNzZXRzL2ltZy9sZWF2ZXMucG5nJykgbm8tcmVwZWF0O1xyXG4gIHdpZHRoOiA2NDFweDtcclxuICBoZWlnaHQ6IDMyMTRweDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAuY29udGFpbmVyLXZpc2lvbiB7XHJcbiAgICBtYXJnaW46IGF1dG8gMzBweDtcclxuICB9XHJcblxyXG4gIC5zdGVwcy1tYWluLWJsb2NrIHtcclxuICAgIG1hcmdpbjogYXV0byAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtdGl0bGUge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbmZvIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuY2FyZC10aXRsZS10ZXh0IHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAuY29udGFpbmVyLWFib3V0LFxyXG4gIC5jb250YWluZXItdmlzaW9uIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLmZ1bGwtdGV4dC1ibG9jayB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1hYm91dCB7XHJcbiAgICBtYXJnaW46IGF1dG8gMzBweDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXItdmlzaW9uIHtcclxuICAgIGltZyB7XHJcbiAgICAgIG9yZGVyOiAyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGVudCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgb3JkZXI6IDI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtaW5mbyB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRhc2hlZC1saW5lLFxyXG4gIC5sZWF2ZXMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zdGVwcy13cmFwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG59XHJcbiIsImJvZHkge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmRpc2FibGVkLWxpbmsge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uc3RlcHMtbWFpbi1ibG9jayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvIDE1MHB4O1xufVxuXG4uc3RlcHMtd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IC0zNzY3cHg7XG59XG5cbi5mdWxsLXRleHQtYmxvY2sgaDIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XG59XG4uZnVsbC10ZXh0LWJsb2NrIHAge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbn1cbi5mdWxsLXRleHQtYmxvY2sgYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIHBhZGRpbmc6IDE2cHggNDBweDtcbn1cblxuLmNvbnRhaW5lci1hYm91dCB7XG4gIHBhZGRpbmctYm90dG9tOiAyNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifi9hc3NldHMvaW1nL2N1cmx5LWxpbmUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cbi5jb250YWluZXItYWJvdXQgLmZ1bGwtdGV4dC1ibG9jayB7XG4gIG1hcmdpbi1sZWZ0OiAxNzFweDtcbn1cbi5jb250YWluZXItYWJvdXQgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLnZpc2lvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn4vYXNzZXRzL2ltZy93YXZlLWxpbmUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5jb250YWluZXItdmlzaW9uIHtcbiAgbWFyZ2luOiBhdXRvIDE3MXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjUwcHg7XG59XG5cbi5jb250YWluZXItYWJvdXQsXG4uY29udGFpbmVyLXZpc2lvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmNhcmQtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHggNDhweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uY2FyZC1pbmZvIC5jYXJkLWxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiAyOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1kYXJrLWdyZWVuKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTguNzVweDtcbn1cblxuLmNhcmQtdGl0bGUtdGV4dCB7XG4gIHdpZHRoOiA0NDFweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIG1hcmdpbjogNDRweCBhdXRvIGF1dG8gMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXJkLXN0b3JlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTc1cHg7XG59XG4uY2FyZC1zdG9yZSAuY2FyZC10aXRsZS1udW1iZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybChcIn4vYXNzZXRzL2ltZy8xLnBuZ1wiKTtcbn1cblxuLmNhcmQtZWNvLXBsYWNlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjcwcHg7XG59XG4uY2FyZC1lY28tcGxhY2UgLmNhcmQtdGl0bGUtbnVtYmVyOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoXCJ+L2Fzc2V0cy9pbWcvMi5wbmdcIik7XG59XG5cbi5jYXJkLWVjby1wcm9kdWN0cyB7XG4gIG1hcmdpbi10b3A6IDIxNnB4O1xufVxuLmNhcmQtZWNvLXByb2R1Y3RzIC5jYXJkLXRpdGxlLW51bWJlcjo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKFwifi9hc3NldHMvaW1nLzMucG5nXCIpO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jYXJkLXN0b3J5IHtcbiAgbWFyZ2luLXRvcDogMzAwcHg7XG59XG4uY2FyZC1zdG9yeSAuY2FyZC10aXRsZS1udW1iZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybChcIn4vYXNzZXRzL2ltZy80LnBuZ1wiKTtcbn1cblxuLmNhcmQtcGVvcGxlIHtcbiAgbWFyZ2luLXRvcDogMzIwcHg7XG59XG4uY2FyZC1wZW9wbGUgLmNhcmQtdGl0bGUtbnVtYmVyOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoXCJ+L2Fzc2V0cy9pbWcvNS5wbmdcIik7XG59XG5cbi5kYXNoZWQtbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogdXJsKFwifi9hc3NldHMvaW1nL2Rhc2hlZC1saW5lLnBuZ1wiKTtcbiAgd2lkdGg6IDgzMnB4O1xuICBoZWlnaHQ6IDM1NzZweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmxlYXZlcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMnB4O1xuICBsZWZ0OiAxMDdweDtcbiAgYmFja2dyb3VuZDogdXJsKFwifi9hc3NldHMvaW1nL2xlYXZlcy5wbmdcIikgbm8tcmVwZWF0O1xuICB3aWR0aDogNjQxcHg7XG4gIGhlaWdodDogMzIxNHB4O1xuICB6LWluZGV4OiAtMTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgLmNvbnRhaW5lci12aXNpb24ge1xuICAgIG1hcmdpbjogYXV0byAzMHB4O1xuICB9XG5cbiAgLnN0ZXBzLW1haW4tYmxvY2sge1xuICAgIG1hcmdpbjogYXV0byAzMHB4O1xuICB9XG5cbiAgLmNhcmQtdGl0bGUge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgLmNhcmQtaW5mbyB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuY2FyZC10aXRsZS10ZXh0IHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmNvbnRhaW5lci1hYm91dCxcbi5jb250YWluZXItdmlzaW9uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb250YWluZXItYWJvdXQgLmZ1bGwtdGV4dC1ibG9jayxcbi5jb250YWluZXItdmlzaW9uIC5mdWxsLXRleHQtYmxvY2sge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgLmNvbnRhaW5lci1hYm91dCB7XG4gICAgbWFyZ2luOiBhdXRvIDMwcHg7XG4gIH1cblxuICAuY29udGFpbmVyLXZpc2lvbiBpbWcge1xuICAgIG9yZGVyOiAyO1xuICB9XG5cbiAgLmNhcmQtY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmNhcmQtY29udGVudCBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvcmRlcjogMjtcbiAgfVxuICAuY2FyZC1jb250ZW50IC5jYXJkLWluZm8ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gIH1cblxuICAuZGFzaGVkLWxpbmUsXG4ubGVhdmVzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnN0ZXBzLXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-page',
          templateUrl: './about-page.component.html',
          styleUrls: ['./about-page.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=main-component-about-about-module-es5.js.map