function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/main/component/eco-news/services/eco-news.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/main/component/eco-news/services/eco-news.service.ts ***!
    \**********************************************************************/

  /*! exports provided: EcoNewsService */

  /***/
  function srcAppMainComponentEcoNewsServicesEcoNewsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EcoNewsService", function () {
      return EcoNewsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environment_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @environment/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @global-service/localstorage/local-storage.service */
    "./src/app/main/service/localstorage/local-storage.service.ts");

    var EcoNewsService = /*#__PURE__*/function () {
      function EcoNewsService(http, localStorageService) {
        var _this = this;

        _classCallCheck(this, EcoNewsService);

        this.http = http;
        this.localStorageService = localStorageService;
        this.backEnd = _environment_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendLink;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.localStorageService.languageBehaviourSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(function (language) {
          return _this.language = language;
        });
      }

      _createClass(EcoNewsService, [{
        key: "getAllPresentTags",
        value: function getAllPresentTags() {
          return this.http.get("".concat(this.backEnd, "econews/tags/all?lang=").concat(this.language));
        }
      }, {
        key: "getEcoNewsListByPage",
        value: function getEcoNewsListByPage(page, quantity) {
          return this.http.get("".concat(this.backEnd, "econews?page=").concat(page, "&size=").concat(quantity));
        }
      }, {
        key: "getNewsListByTags",
        value: function getNewsListByTags(page, quantity, tags) {
          return this.http.get("".concat(this.backEnd, "econews/tags?page=").concat(page, "&size=").concat(quantity, "&tags=").concat(tags));
        }
      }, {
        key: "getNewsList",
        value: function getNewsList() {
          var _this2 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.set('Content-type', 'application/json');
          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this2.http.get("".concat(_this2.backEnd, "econews")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (newsDto) {
              observer.next(newsDto);
            });
          });
        }
      }, {
        key: "getEcoNewsById",
        value: function getEcoNewsById(id) {
          return this.http.get("".concat(this.backEnd, "econews/").concat(id, "?lang=").concat(this.language));
        }
      }, {
        key: "getRecommendedNews",
        value: function getRecommendedNews(id) {
          return this.http.get("".concat(this.backEnd, "econews/recommended?openedEcoNewsId=").concat(id));
        }
      }, {
        key: "getIsLikedByUser",
        value: function getIsLikedByUser(econewsId) {
          return this.http.get("".concat(this.backEnd, "econews/isLikedByUser"), {
            params: {
              econewsId: econewsId
            }
          });
        }
      }, {
        key: "postToggleLike",
        value: function postToggleLike(id) {
          return this.http.post("".concat(this.backEnd, "econews/like?id=").concat(id), {});
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyed$.next(true);
          this.destroyed$.complete();
        }
      }]);

      return EcoNewsService;
    }();

    EcoNewsService.ɵfac = function EcoNewsService_Factory(t) {
      return new (t || EcoNewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]));
    };

    EcoNewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EcoNewsService,
      factory: EcoNewsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcoNewsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/image-pathes/single-news-images.ts":
  /*!*********************************************************!*\
    !*** ./src/app/main/image-pathes/single-news-images.ts ***!
    \*********************************************************/

  /*! exports provided: singleNewsImages */

  /***/
  function srcAppMainImagePathesSingleNewsImagesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "singleNewsImages", function () {
      return singleNewsImages;
    });

    var singleNewsImages = {
      arrowLeft: 'assets/img/icon/econews/arrow_left.svg',
      ellipse: 'assets/img/icon/econews/ellipse.svg',
      largeImage: 'assets/img/icon/econews/news-default-large.png',
      twitter: 'assets/img/icon/econews/twitter.svg',
      facebook: 'assets/img/icon/econews/facebook.svg',
      linkedIn: 'assets/img/icon/econews/linkedin.svg'
    };
    /***/
  },

  /***/
  "./src/app/main/service/word-declension/word-declension.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/main/service/word-declension/word-declension.service.ts ***!
    \*************************************************************************/

  /*! exports provided: WordDeclensionService */

  /***/
  function srcAppMainServiceWordDeclensionWordDeclensionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WordDeclensionService", function () {
      return WordDeclensionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WordDeclensionService = /*#__PURE__*/function () {
      function WordDeclensionService() {
        _classCallCheck(this, WordDeclensionService);
      }

      _createClass(WordDeclensionService, [{
        key: "setWordDeclension",
        value: function setWordDeclension(count) {
          var lastOne = -1;
          var lastTwo = -2;
          var suitableLastNumber = '1';
          var unsuitableLastNumber = '11';
          var suitableLastNumbers = '234';
          var unsuitableLastNumbers = ['12', '13', '14'];

          if (count.slice(lastOne) === suitableLastNumber && count.slice(lastTwo) !== unsuitableLastNumber) {
            return 'a';
          }

          if (suitableLastNumbers.includes(count.slice(lastOne)) && !unsuitableLastNumbers.includes(count.slice(lastTwo))) {
            return 'b';
          }

          return '';
        }
      }]);

      return WordDeclensionService;
    }();

    WordDeclensionService.ɵfac = function WordDeclensionService_Factory(t) {
      return new (t || WordDeclensionService)();
    };

    WordDeclensionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WordDeclensionService,
      factory: WordDeclensionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordDeclensionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map