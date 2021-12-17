function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-component-ubs-ubs-module"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js ***!
    \********************************************************************/

  /*! exports provided: CdkStep, CdkStepHeader, CdkStepLabel, CdkStepper, CdkStepperModule, CdkStepperNext, CdkStepperPrevious, MAT_STEPPER_GLOBAL_OPTIONS, STEPPER_GLOBAL_OPTIONS, STEP_STATE, StepperSelectionEvent */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015StepperJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStep", function () {
      return CdkStep;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepHeader", function () {
      return CdkStepHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepLabel", function () {
      return CdkStepLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepper", function () {
      return CdkStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepperModule", function () {
      return CdkStepperModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepperNext", function () {
      return CdkStepperNext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepperPrevious", function () {
      return CdkStepperPrevious;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_GLOBAL_OPTIONS", function () {
      return MAT_STEPPER_GLOBAL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STEPPER_GLOBAL_OPTIONS", function () {
      return STEPPER_GLOBAL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STEP_STATE", function () {
      return STEP_STATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepperSelectionEvent", function () {
      return StepperSelectionEvent;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/stepper/step-header.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    function CdkStep_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](0);
      }
    }

    var _c0 = ["*"];

    var CdkStepHeader = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       */
      function CdkStepHeader(_elementRef) {
        _classCallCheck(this, CdkStepHeader);

        this._elementRef = _elementRef;
      }
      /**
       * Focuses the step header.
       * @return {?}
       */


      _createClass(CdkStepHeader, [{
        key: "focus",
        value: function focus() {
          this._elementRef.nativeElement.focus();
        }
      }]);

      return CdkStepHeader;
    }();

    CdkStepHeader.ɵfac = function CdkStepHeader_Factory(t) {
      return new (t || CdkStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]));
    };

    CdkStepHeader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: CdkStepHeader,
      selectors: [["", "cdkStepHeader", ""]],
      hostAttrs: ["role", "tab"]
    });
    /** @nocollapse */

    CdkStepHeader.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
          selector: '[cdkStepHeader]',
          host: {
            'role': 'tab'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/stepper/step-label.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CdkStepLabel =
    /**
     * @param {?} template
     */
    function CdkStepLabel(
    /** @docs-private */
    template) {
      _classCallCheck(this, CdkStepLabel);

      this.template = template;
    };

    CdkStepLabel.ɵfac = function CdkStepLabel_Factory(t) {
      return new (t || CdkStepLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]));
    };

    CdkStepLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: CdkStepLabel,
      selectors: [["", "cdkStepLabel", ""]]
    });
    /** @nocollapse */

    CdkStepLabel.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
          selector: '[cdkStepLabel]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/stepper/stepper.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used to generate unique ID for each stepper component.
     * @type {?}
     */


    var nextId = 0;
    /**
     * Change event emitted on selection changes.
     */

    var StepperSelectionEvent = function StepperSelectionEvent() {
      _classCallCheck(this, StepperSelectionEvent);
    };

    if (false) {}
    /**
     * Enum to represent the different states of the steps.
     * @type {?}
     */


    var STEP_STATE = {
      NUMBER: 'number',
      EDIT: 'edit',
      DONE: 'done',
      ERROR: 'error'
    };
    /**
     * InjectionToken that can be used to specify the global stepper options.
     * @type {?}
     */

    var STEPPER_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["InjectionToken"]('STEPPER_GLOBAL_OPTIONS');
    /**
     * InjectionToken that can be used to specify the global stepper options.
     * @deprecated Use `STEPPER_GLOBAL_OPTIONS` instead.
     * \@breaking-change 8.0.0.
     * @type {?}
     */

    var MAT_STEPPER_GLOBAL_OPTIONS = STEPPER_GLOBAL_OPTIONS;
    /**
     * Configurable options for stepper.
     * @record
     */

    function StepperOptions() {}

    if (false) {}

    var CdkStep = /*#__PURE__*/function () {
      /**
       * \@breaking-change 8.0.0 remove the `?` after `stepperOptions`
       * @param {?} _stepper
       * @param {?=} stepperOptions
       */
      function CdkStep(_stepper, stepperOptions) {
        _classCallCheck(this, CdkStep);

        this._stepper = _stepper;
        /**
         * Whether user has seen the expanded step content or not.
         */

        this.interacted = false;
        this._editable = true;
        this._optional = false;
        this._completedOverride = null;
        this._customError = null;
        this._stepperOptions = stepperOptions ? stepperOptions : {};
        this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
        this._showError = !!this._stepperOptions.showError;
      }
      /**
       * Whether the user can return to this step once it has been marked as completed.
       * @return {?}
       */


      _createClass(CdkStep, [{
        key: "editable",
        get: function get() {
          return this._editable;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._editable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the completion of step is optional.
         * @return {?}
         */

      }, {
        key: "optional",
        get: function get() {
          return this._optional;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._optional = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether step is marked as completed.
         * @return {?}
         */

      }, {
        key: "completed",
        get: function get() {
          return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._completedOverride = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getDefaultCompleted",
        value: function _getDefaultCompleted() {
          return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
        }
        /**
         * Whether step has an error.
         * @return {?}
         */

      }, {
        key: "hasError",
        get: function get() {
          return this._customError == null ? this._getDefaultError() : this._customError;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._customError = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getDefaultError",
        value: function _getDefaultError() {
          return this.stepControl && this.stepControl.invalid && this.interacted;
        }
        /**
         * Selects this step component.
         * @return {?}
         */

      }, {
        key: "select",
        value: function select() {
          this._stepper.selected = this;
        }
        /**
         * Resets the step to its initial state. Note that this includes resetting form data.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this.interacted = false;

          if (this._completedOverride != null) {
            this._completedOverride = false;
          }

          if (this._customError != null) {
            this._customError = false;
          }

          if (this.stepControl) {
            this.stepControl.reset();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          // Since basically all inputs of the MatStep get proxied through the view down to the
          // underlying MatStepHeader, we have to make sure that change detection runs correctly.
          this._stepper._stateChanged();
        }
      }]);

      return CdkStep;
    }();

    CdkStep.ɵfac = function CdkStep_Factory(t) {
      return new (t || CdkStep)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return CdkStepper;
      })), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](STEPPER_GLOBAL_OPTIONS, 8));
    };

    CdkStep.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CdkStep,
      selectors: [["cdk-step"]],
      contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, CdkStepLabel, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
        }
      },
      viewQuery: function CdkStep_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      inputs: {
        editable: "editable",
        optional: "optional",
        completed: "completed",
        hasError: "hasError",
        stepControl: "stepControl",
        label: "label",
        errorMessage: "errorMessage",
        ariaLabel: ["aria-label", "ariaLabel"],
        ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
        state: "state"
      },
      exportAs: ["cdkStep"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function CdkStep_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CdkStep_ng_template_0_Template, 1, 0, "ng-template");
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    CdkStep.ctorParameters = function () {
      return [{
        type: CdkStepper,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return CdkStepper;
          })]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
          args: [STEPPER_GLOBAL_OPTIONS]
        }]
      }];
    };

    CdkStep.propDecorators = {
      stepLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"],
        args: [CdkStepLabel]
      }],
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], {
          "static": true
        }]
      }],
      stepControl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      errorMessage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
        args: ['aria-labelledby']
      }],
      state: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      editable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      optional: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      completed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      hasError: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStep, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
          selector: 'cdk-step',
          exportAs: 'cdkStep',
          template: '<ng-template><ng-content></ng-content></ng-template>',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: CdkStepper,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return CdkStepper;
            })]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
            args: [STEPPER_GLOBAL_OPTIONS]
          }]
        }];
      }, {
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        optional: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        completed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        hasError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        stepLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"],
          args: [CdkStepLabel]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"], {
            "static": true
          }]
        }],
        stepControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        errorMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
          args: ['aria-labelledby']
        }],
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }]
      });
    })();

    if (false) {}

    var CdkStepper = /*#__PURE__*/function () {
      /**
       * @param {?} _dir
       * @param {?} _changeDetectorRef
       * @param {?=} _elementRef
       * @param {?=} _document
       */
      function CdkStepper(_dir, _changeDetectorRef, _elementRef, _document) {
        _classCallCheck(this, CdkStepper);

        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        /**
         * Emits when the component is destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._linear = false;
        this._selectedIndex = 0;
        /**
         * Event emitted when the selected step has changed.
         */

        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this._orientation = 'horizontal';
        this._groupId = nextId++;
        this._document = _document;
      }
      /**
       * The list of step components that the stepper is holding.
       * @return {?}
       */


      _createClass(CdkStepper, [{
        key: "steps",
        get: function get() {
          return this._steps;
        }
        /**
         * Whether the validity of previous steps should be checked or not.
         * @return {?}
         */

      }, {
        key: "linear",
        get: function get() {
          return this._linear;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._linear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * The index of the selected step.
         * @return {?}
         */

      }, {
        key: "selectedIndex",
        get: function get() {
          return this._selectedIndex;
        }
        /**
         * @param {?} index
         * @return {?}
         */
        ,
        set: function set(index) {
          /** @type {?} */
          var newIndex = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(index);

          if (this.steps) {
            // Ensure that the index can't be out of bounds.
            if (newIndex < 0 || newIndex > this.steps.length - 1) {
              throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
            }

            if (this._selectedIndex != newIndex && !this._anyControlsInvalidOrPending(newIndex) && (newIndex >= this._selectedIndex || this.steps.toArray()[newIndex].editable)) {
              this._updateSelectedItemIndex(index);
            }
          } else {
            this._selectedIndex = newIndex;
          }
        }
        /**
         * The step that is selected.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          // @breaking-change 8.0.0 Change return type to `CdkStep | undefined`.
          return this.steps ? this.steps.toArray()[this.selectedIndex] :
          /** @type {?} */
          undefined;
        }
        /**
         * @param {?} step
         * @return {?}
         */
        ,
        set: function set(step) {
          this.selectedIndex = this.steps ? this.steps.toArray().indexOf(step) : -1;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          // Note that while the step headers are content children by default, any components that
          // extend this one might have them as view children. We initialize the keyboard handling in
          // AfterViewInit so we're guaranteed for both view and content children to be defined.
          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusKeyManager"](this._stepHeader).withWrap().withVerticalOrientation(this._orientation === 'vertical');
          (this._dir ?
          /** @type {?} */
          this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._layoutDirection()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @param {?} direction
          * @return {?}
          */
          function (direction) {
            return _this._keyManager.withHorizontalOrientation(direction);
          });

          this._keyManager.updateActiveItem(this._selectedIndex);

          this.steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (!_this.selected) {
              _this._selectedIndex = Math.max(_this._selectedIndex - 1, 0);
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Selects and focuses the next step in list.
         * @return {?}
         */

      }, {
        key: "next",
        value: function next() {
          this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
        }
        /**
         * Selects and focuses the previous step in list.
         * @return {?}
         */

      }, {
        key: "previous",
        value: function previous() {
          this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
        }
        /**
         * Resets the stepper to its initial state. Note that this includes clearing form data.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this._updateSelectedItemIndex(0);

          this.steps.forEach(
          /**
          * @param {?} step
          * @return {?}
          */
          function (step) {
            return step.reset();
          });

          this._stateChanged();
        }
        /**
         * Returns a unique id for each step label element.
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "_getStepLabelId",
        value: function _getStepLabelId(i) {
          return "cdk-step-label-".concat(this._groupId, "-").concat(i);
        }
        /**
         * Returns unique id for each step content element.
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "_getStepContentId",
        value: function _getStepContentId(i) {
          return "cdk-step-content-".concat(this._groupId, "-").concat(i);
        }
        /**
         * Marks the component to be change detected.
         * @return {?}
         */

      }, {
        key: "_stateChanged",
        value: function _stateChanged() {
          this._changeDetectorRef.markForCheck();
        }
        /**
         * Returns position state of the step with the given index.
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_getAnimationDirection",
        value: function _getAnimationDirection(index) {
          /** @type {?} */
          var position = index - this._selectedIndex;

          if (position < 0) {
            return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
          } else if (position > 0) {
            return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
          }

          return 'current';
        }
        /**
         * Returns the type of icon to be displayed.
         * @param {?} index
         * @param {?=} state
         * @return {?}
         */

      }, {
        key: "_getIndicatorType",
        value: function _getIndicatorType(index) {
          var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : STEP_STATE.NUMBER;

          /** @type {?} */
          var step = this.steps.toArray()[index];
          /** @type {?} */

          var isCurrentStep = this._isCurrentStep(index);

          return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) : this._getGuidelineLogic(step, isCurrentStep, state);
        }
        /**
         * @private
         * @param {?} step
         * @param {?} isCurrentStep
         * @return {?}
         */

      }, {
        key: "_getDefaultIndicatorLogic",
        value: function _getDefaultIndicatorLogic(step, isCurrentStep) {
          if (step._showError && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
          } else if (!step.completed || isCurrentStep) {
            return STEP_STATE.NUMBER;
          } else {
            return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
          }
        }
        /**
         * @private
         * @param {?} step
         * @param {?} isCurrentStep
         * @param {?=} state
         * @return {?}
         */

      }, {
        key: "_getGuidelineLogic",
        value: function _getGuidelineLogic(step, isCurrentStep) {
          var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : STEP_STATE.NUMBER;

          if (step._showError && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
          } else if (step.completed && !isCurrentStep) {
            return STEP_STATE.DONE;
          } else if (step.completed && isCurrentStep) {
            return state;
          } else if (step.editable && isCurrentStep) {
            return STEP_STATE.EDIT;
          } else {
            return state;
          }
        }
        /**
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_isCurrentStep",
        value: function _isCurrentStep(index) {
          return this._selectedIndex === index;
        }
        /**
         * Returns the index of the currently-focused step header.
         * @return {?}
         */

      }, {
        key: "_getFocusIndex",
        value: function _getFocusIndex() {
          return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
        }
        /**
         * @private
         * @param {?} newIndex
         * @return {?}
         */

      }, {
        key: "_updateSelectedItemIndex",
        value: function _updateSelectedItemIndex(newIndex) {
          /** @type {?} */
          var stepsArray = this.steps.toArray();
          this.selectionChange.emit({
            selectedIndex: newIndex,
            previouslySelectedIndex: this._selectedIndex,
            selectedStep: stepsArray[newIndex],
            previouslySelectedStep: stepsArray[this._selectedIndex]
          }); // If focus is inside the stepper, move it to the next header, otherwise it may become
          // lost when the active step content is hidden. We can't be more granular with the check
          // (e.g. checking whether focus is inside the active step), because we don't have a
          // reference to the elements that are rendering out the content.

          this._containsFocus() ? this._keyManager.setActiveItem(newIndex) : this._keyManager.updateActiveItem(newIndex);
          this._selectedIndex = newIndex;

          this._stateChanged();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onKeydown",
        value: function _onKeydown(event) {
          /** @type {?} */
          var hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event);
          /** @type {?} */

          var keyCode = event.keyCode;
          /** @type {?} */

          var manager = this._keyManager;

          if (manager.activeItemIndex != null && !hasModifier && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["SPACE"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"])) {
            this.selectedIndex = manager.activeItemIndex;
            event.preventDefault();
          } else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["HOME"]) {
            manager.setFirstItemActive();
            event.preventDefault();
          } else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["END"]) {
            manager.setLastItemActive();
            event.preventDefault();
          } else {
            manager.onKeydown(event);
          }
        }
        /**
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_anyControlsInvalidOrPending",
        value: function _anyControlsInvalidOrPending(index) {
          /** @type {?} */
          var steps = this.steps.toArray();
          steps[this._selectedIndex].interacted = true;

          if (this._linear && index >= 0) {
            return steps.slice(0, index).some(
            /**
            * @param {?} step
            * @return {?}
            */
            function (step) {
              /** @type {?} */
              var control = step.stepControl;
              /** @type {?} */

              var isIncomplete = control ? control.invalid || control.pending || !step.interacted : !step.completed;
              return isIncomplete && !step.optional && !step._completedOverride;
            });
          }

          return false;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_layoutDirection",
        value: function _layoutDirection() {
          return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        }
        /**
         * Checks whether the stepper contains the focused element.
         * @private
         * @return {?}
         */

      }, {
        key: "_containsFocus",
        value: function _containsFocus() {
          if (!this._document || !this._elementRef) {
            return false;
          }
          /** @type {?} */


          var stepperElement = this._elementRef.nativeElement;
          /** @type {?} */

          var focusedElement = this._document.activeElement;
          return stepperElement === focusedElement || stepperElement.contains(focusedElement);
        }
      }]);

      return CdkStepper;
    }();

    CdkStepper.ɵfac = function CdkStepper_Factory(t) {
      return new (t || CdkStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
    };

    CdkStepper.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: CdkStepper,
      selectors: [["", "cdkStepper", ""]],
      contentQueries: function CdkStepper_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, CdkStep, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, CdkStepHeader, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._steps = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
        }
      },
      inputs: {
        linear: "linear",
        selectedIndex: "selectedIndex",
        selected: "selected"
      },
      outputs: {
        selectionChange: "selectionChange"
      },
      exportAs: ["cdkStepper"]
    });
    /** @nocollapse */

    CdkStepper.ctorParameters = function () {
      return [{
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };

    CdkStepper.propDecorators = {
      _steps: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
        args: [CdkStep, {
          descendants: true
        }]
      }],
      _stepHeader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
        args: [CdkStepHeader, {
          descendants: true
        }]
      }],
      linear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      selectedIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      selectionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
          selector: '[cdkStepper]',
          exportAs: 'cdkStepper'
        }]
      }], function () {
        return [{
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      }, {
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }],
        linear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        selectedIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        _steps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
          args: [CdkStep, {
            descendants: true
          }]
        }],
        _stepHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChildren"],
          args: [CdkStepHeader, {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * Simplified representation of an "AbstractControl" from \@angular/forms.
     * Used to avoid having to bring in \@angular/forms for a single optional interface.
     * \@docs-private
     * @record
     */


    function AbstractControlLike() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/stepper/stepper-button.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Button that moves to the next step in a stepper workflow.
     */


    var CdkStepperNext = /*#__PURE__*/function () {
      /**
       * @param {?} _stepper
       */
      function CdkStepperNext(_stepper) {
        _classCallCheck(this, CdkStepperNext);

        this._stepper = _stepper;
        /**
         * Type of the next button. Defaults to "submit" if not specified.
         */

        this.type = 'submit';
      } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
      // In Ivy the `host` bindings will be merged when this class is extended, whereas in
      // ViewEngine they're overwritten.
      // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
      // tslint:disable-next-line:no-host-decorator-in-concrete

      /**
       * @return {?}
       */


      _createClass(CdkStepperNext, [{
        key: "_handleClick",
        value: function _handleClick() {
          this._stepper.next();
        }
      }]);

      return CdkStepperNext;
    }();

    CdkStepperNext.ɵfac = function CdkStepperNext_Factory(t) {
      return new (t || CdkStepperNext)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](CdkStepper));
    };

    CdkStepperNext.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: CdkStepperNext,
      selectors: [["button", "cdkStepperNext", ""]],
      hostVars: 1,
      hostBindings: function CdkStepperNext_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CdkStepperNext_click_HostBindingHandler() {
            return ctx._handleClick();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵhostProperty"]("type", ctx.type);
        }
      },
      inputs: {
        type: "type"
      }
    });
    /** @nocollapse */

    CdkStepperNext.ctorParameters = function () {
      return [{
        type: CdkStepper
      }];
    };

    CdkStepperNext.propDecorators = {
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      _handleClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
        args: ['click']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepperNext, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
          selector: 'button[cdkStepperNext]',
          host: {
            '[type]': 'type'
          }
        }]
      }], function () {
        return [{
          type: CdkStepper
        }];
      }, {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        _handleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
          args: ['click']
        }]
      });
    })();

    if (false) {}
    /**
     * Button that moves to the previous step in a stepper workflow.
     */


    var CdkStepperPrevious = /*#__PURE__*/function () {
      /**
       * @param {?} _stepper
       */
      function CdkStepperPrevious(_stepper) {
        _classCallCheck(this, CdkStepperPrevious);

        this._stepper = _stepper;
        /**
         * Type of the previous button. Defaults to "button" if not specified.
         */

        this.type = 'button';
      } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
      // In Ivy the `host` bindings will be merged when this class is extended, whereas in
      // ViewEngine they're overwritten.
      // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
      // tslint:disable-next-line:no-host-decorator-in-concrete

      /**
       * @return {?}
       */


      _createClass(CdkStepperPrevious, [{
        key: "_handleClick",
        value: function _handleClick() {
          this._stepper.previous();
        }
      }]);

      return CdkStepperPrevious;
    }();

    CdkStepperPrevious.ɵfac = function CdkStepperPrevious_Factory(t) {
      return new (t || CdkStepperPrevious)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](CdkStepper));
    };

    CdkStepperPrevious.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: CdkStepperPrevious,
      selectors: [["button", "cdkStepperPrevious", ""]],
      hostVars: 1,
      hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CdkStepperPrevious_click_HostBindingHandler() {
            return ctx._handleClick();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵhostProperty"]("type", ctx.type);
        }
      },
      inputs: {
        type: "type"
      }
    });
    /** @nocollapse */

    CdkStepperPrevious.ctorParameters = function () {
      return [{
        type: CdkStepper
      }];
    };

    CdkStepperPrevious.propDecorators = {
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
      }],
      _handleClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
        args: ['click']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepperPrevious, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
          selector: 'button[cdkStepperPrevious]',
          host: {
            '[type]': 'type'
          }
        }]
      }], function () {
        return [{
          type: CdkStepper
        }];
      }, {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }],
        _handleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
          args: ['click']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/stepper/stepper-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CdkStepperModule = function CdkStepperModule() {
      _classCallCheck(this, CdkStepperModule);
    };

    CdkStepperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: CdkStepperModule
    });
    CdkStepperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      factory: function CdkStepperModule_Factory(t) {
        return new (t || CdkStepperModule)();
      },
      imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CdkStepperModule, {
        declarations: function declarations() {
          return [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious];
        },
        imports: function imports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"]];
        },
        exports: function exports() {
          return [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CdkStepperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
          imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"]],
          exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious],
          declarations: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/stepper/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=stepper.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js ***!
    \*************************************************************************/

  /*! exports provided: MAT_STEPPER_INTL_PROVIDER, MAT_STEPPER_INTL_PROVIDER_FACTORY, MatHorizontalStepper, MatStep, MatStepHeader, MatStepLabel, MatStepper, MatStepperIcon, MatStepperIntl, MatStepperModule, MatStepperNext, MatStepperPrevious, MatVerticalStepper, matStepperAnimations */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015StepperJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER", function () {
      return MAT_STEPPER_INTL_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER_FACTORY", function () {
      return MAT_STEPPER_INTL_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHorizontalStepper", function () {
      return MatHorizontalStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStep", function () {
      return MatStep;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepHeader", function () {
      return MatStepHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepLabel", function () {
      return MatStepLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepper", function () {
      return MatStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperIcon", function () {
      return MatStepperIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperIntl", function () {
      return MatStepperIntl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperModule", function () {
      return MatStepperModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperNext", function () {
      return MatStepperNext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperPrevious", function () {
      return MatStepperPrevious;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatVerticalStepper", function () {
      return MatVerticalStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matStepperAnimations", function () {
      return matStepperAnimations;
    });
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/stepper/step-label.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    function MatStepHeader_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 9);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", ctx_r0._getIconContext());
      }
    }

    function MatStepHeader_ng_container_4_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6._getDefaultTextForState(ctx_r6.state));
      }
    }

    function MatStepHeader_ng_container_4_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7._getDefaultTextForState(ctx_r7.state));
      }
    }

    function MatStepHeader_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatStepHeader_ng_container_4_span_1_Template, 2, 1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MatStepHeader_ng_container_4_mat_icon_2_Template, 2, 1, "mat-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx_r1.state);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "number");
      }
    }

    function MatStepHeader_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 13);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2._templateLabel().template);
      }
    }

    function MatStepHeader_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.label);
      }
    }

    function MatStepHeader_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4._intl.optionalLabel);
      }
    }

    function MatStepHeader_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.errorMessage);
      }
    }

    function MatStep_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
      }
    }

    var _c0 = ["*"];

    function MatHorizontalStepper_ng_container_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 6);
      }
    }

    function MatHorizontalStepper_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-step-header", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatHorizontalStepper_ng_container_1_Template_mat_step_header_click_1_listener() {
          var step_r2 = ctx.$implicit;
          return step_r2.select();
        })("keydown", function MatHorizontalStepper_ng_container_1_Template_mat_step_header_keydown_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r7._onKeydown($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MatHorizontalStepper_ng_container_1_div_2_Template, 1, 0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var step_r2 = ctx.$implicit;
        var i_r3 = ctx.index;
        var isLast_r4 = ctx.last;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tabIndex", ctx_r0._getFocusIndex() === i_r3 ? 0 : 0 - 1)("id", ctx_r0._getStepLabelId(i_r3))("index", i_r3)("state", ctx_r0._getIndicatorType(i_r3, step_r2.state))("label", step_r2.stepLabel || step_r2.label)("selected", ctx_r0.selectedIndex === i_r3)("active", step_r2.completed || ctx_r0.selectedIndex === i_r3 || !ctx_r0.linear)("optional", step_r2.optional)("errorMessage", step_r2.errorMessage)("iconOverrides", ctx_r0._iconOverrides)("disableRipple", ctx_r0.disableRipple);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-posinset", i_r3 + 1)("aria-setsize", ctx_r0.steps.length)("aria-controls", ctx_r0._getStepContentId(i_r3))("aria-selected", ctx_r0.selectedIndex == i_r3)("aria-label", step_r2.ariaLabel || null)("aria-labelledby", !step_r2.ariaLabel && step_r2.ariaLabelledby ? step_r2.ariaLabelledby : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !isLast_r4);
      }
    }

    function MatHorizontalStepper_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@stepTransition.done", function MatHorizontalStepper_div_3_Template_div_animation_stepTransition_done_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r11._animationDone.next($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](1, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var step_r9 = ctx.$implicit;
        var i_r10 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@stepTransition", ctx_r1._getAnimationDirection(i_r10))("id", ctx_r1._getStepContentId(i_r10));

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("tabindex", ctx_r1.selectedIndex === i_r10 ? 0 : null)("aria-labelledby", ctx_r1._getStepLabelId(i_r10))("aria-expanded", ctx_r1.selectedIndex === i_r10);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", step_r9.content);
      }
    }

    function MatVerticalStepper_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-step-header", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatVerticalStepper_div_0_Template_mat_step_header_click_1_listener() {
          var step_r1 = ctx.$implicit;
          return step_r1.select();
        })("keydown", function MatVerticalStepper_div_0_Template_mat_step_header_keydown_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r5._onKeydown($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@stepTransition.done", function MatVerticalStepper_div_0_Template_div_animation_stepTransition_done_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r7._animationDone.next($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](5, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var step_r1 = ctx.$implicit;
        var i_r2 = ctx.index;
        var isLast_r3 = ctx.last;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tabIndex", ctx_r0._getFocusIndex() == i_r2 ? 0 : 0 - 1)("id", ctx_r0._getStepLabelId(i_r2))("index", i_r2)("state", ctx_r0._getIndicatorType(i_r2, step_r1.state))("label", step_r1.stepLabel || step_r1.label)("selected", ctx_r0.selectedIndex === i_r2)("active", step_r1.completed || ctx_r0.selectedIndex === i_r2 || !ctx_r0.linear)("optional", step_r1.optional)("errorMessage", step_r1.errorMessage)("iconOverrides", ctx_r0._iconOverrides)("disableRipple", ctx_r0.disableRipple);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-posinset", i_r2 + 1)("aria-setsize", ctx_r0.steps.length)("aria-controls", ctx_r0._getStepContentId(i_r2))("aria-selected", ctx_r0.selectedIndex === i_r2)("aria-label", step_r1.ariaLabel || null)("aria-labelledby", !step_r1.ariaLabel && step_r1.ariaLabelledby ? step_r1.ariaLabelledby : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-stepper-vertical-line", !isLast_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@stepTransition", ctx_r0._getAnimationDirection(i_r2))("id", ctx_r0._getStepContentId(i_r2));

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("tabindex", ctx_r0.selectedIndex === i_r2 ? 0 : null)("aria-labelledby", ctx_r0._getStepLabelId(i_r2))("aria-expanded", ctx_r0.selectedIndex === i_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", step_r1.content);
      }
    }

    var MatStepLabel = /*#__PURE__*/function (_angular_cdk_stepper_) {
      _inherits(MatStepLabel, _angular_cdk_stepper_);

      var _super = _createSuper(MatStepLabel);

      function MatStepLabel() {
        _classCallCheck(this, MatStepLabel);

        return _super.apply(this, arguments);
      }

      return MatStepLabel;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepLabel"]);

    MatStepLabel.ɵfac = function MatStepLabel_Factory(t) {
      return ɵMatStepLabel_BaseFactory(t || MatStepLabel);
    };

    MatStepLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatStepLabel,
      selectors: [["", "matStepLabel", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatStepLabel_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatStepLabel);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[matStepLabel]'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/stepper/stepper-intl.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Stepper data that is required for internationalization.
     */


    var MatStepperIntl = function MatStepperIntl() {
      _classCallCheck(this, MatStepperIntl);

      /**
       * Stream that emits whenever the labels here are changed. Use this to notify
       * components if the labels have changed after initialization.
       */
      this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
      /**
       * Label that is rendered below optional steps.
       */

      this.optionalLabel = 'Optional';
    };

    MatStepperIntl.ɵfac = function MatStepperIntl_Factory(t) {
      return new (t || MatStepperIntl)();
    };
    /** @nocollapse */


    MatStepperIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
      factory: function MatStepperIntl_Factory() {
        return new MatStepperIntl();
      },
      token: MatStepperIntl,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepperIntl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * \@docs-private
     * @param {?} parentIntl
     * @return {?}
     */


    function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
      return parentIntl || new MatStepperIntl();
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_STEPPER_INTL_PROVIDER = {
      provide: MatStepperIntl,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"](), MatStepperIntl]],
      useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/stepper/step-header.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatStepHeader = /*#__PURE__*/function (_angular_cdk_stepper_2) {
      _inherits(MatStepHeader, _angular_cdk_stepper_2);

      var _super2 = _createSuper(MatStepHeader);

      /**
       * @param {?} _intl
       * @param {?} _focusMonitor
       * @param {?} _elementRef
       * @param {?} changeDetectorRef
       */
      function MatStepHeader(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
        var _this2;

        _classCallCheck(this, MatStepHeader);

        _this2 = _super2.call(this, _elementRef);
        _this2._intl = _intl;
        _this2._focusMonitor = _focusMonitor;

        _focusMonitor.monitor(_elementRef, true);

        _this2._intlSubscription = _intl.changes.subscribe(
        /**
        * @return {?}
        */
        function () {
          return changeDetectorRef.markForCheck();
        });
        return _this2;
      }
      /**
       * @return {?}
       */


      _createClass(MatStepHeader, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._intlSubscription.unsubscribe();

          this._focusMonitor.stopMonitoring(this._elementRef);
        }
        /**
         * Focuses the step header.
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this._focusMonitor.focusVia(this._elementRef, 'program');
        }
        /**
         * Returns string label of given step if it is a text label.
         * @return {?}
         */

      }, {
        key: "_stringLabel",
        value: function _stringLabel() {
          return this.label instanceof MatStepLabel ? null : this.label;
        }
        /**
         * Returns MatStepLabel if the label of given step is a template label.
         * @return {?}
         */

      }, {
        key: "_templateLabel",
        value: function _templateLabel() {
          return this.label instanceof MatStepLabel ? this.label : null;
        }
        /**
         * Returns the host HTML element.
         * @return {?}
         */

      }, {
        key: "_getHostElement",
        value: function _getHostElement() {
          return this._elementRef.nativeElement;
        }
        /**
         * Template context variables that are exposed to the `matStepperIcon` instances.
         * @return {?}
         */

      }, {
        key: "_getIconContext",
        value: function _getIconContext() {
          return {
            index: this.index,
            active: this.active,
            optional: this.optional
          };
        }
        /**
         * @param {?} state
         * @return {?}
         */

      }, {
        key: "_getDefaultTextForState",
        value: function _getDefaultTextForState(state) {
          if (state == 'number') {
            return "".concat(this.index + 1);
          }

          if (state == 'edit') {
            return 'create';
          }

          if (state == 'error') {
            return 'warning';
          }

          return state;
        }
      }]);

      return MatStepHeader;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepHeader"]);

    MatStepHeader.ɵfac = function MatStepHeader_Factory(t) {
      return new (t || MatStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatStepperIntl), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
    };

    MatStepHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MatStepHeader,
      selectors: [["mat-step-header"]],
      hostAttrs: ["role", "tab", 1, "mat-step-header", "mat-focus-indicator"],
      inputs: {
        state: "state",
        label: "label",
        errorMessage: "errorMessage",
        iconOverrides: "iconOverrides",
        index: "index",
        selected: "selected",
        active: "active",
        optional: "optional",
        disableRipple: "disableRipple"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      decls: 10,
      vars: 19,
      consts: [["matRipple", "", 1, "mat-step-header-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content", 3, "ngSwitch"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngSwitchCase"], [3, "ngSwitch", 4, "ngSwitchDefault"], [1, "mat-step-label"], [3, "ngTemplateOutlet", 4, "ngIf"], ["class", "mat-step-text-label", 4, "ngIf"], ["class", "mat-step-optional", 4, "ngIf"], ["class", "mat-step-sub-label-error", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "ngTemplateOutlet"], [1, "mat-step-text-label"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"]],
      template: function MatStepHeader_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MatStepHeader_ng_container_3_Template, 1, 2, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MatStepHeader_ng_container_4_Template, 3, 2, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MatStepHeader_ng_container_6_Template, 1, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MatStepHeader_div_7_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, MatStepHeader_div_8_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MatStepHeader_div_9_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("mat-step-icon-state-", ctx.state, " mat-step-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-step-icon-selected", ctx.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", !!(ctx.iconOverrides && ctx.iconOverrides[ctx.state]));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._templateLabel());

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._stringLabel());

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.optional && ctx.state != "error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.state == "error");
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]],
      styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatStepHeader.ctorParameters = function () {
      return [{
        type: MatStepperIntl
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }];
    };

    MatStepHeader.propDecorators = {
      state: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      errorMessage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      iconOverrides: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      index: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      active: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      optional: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      disableRipple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-step-header',
          template: "<div class=\"mat-step-header-ripple\" matRipple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disableRipple\"></div>\n\n<div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\">\n  <div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\">\n    <ng-container\n      *ngSwitchCase=\"true\"\n      [ngTemplateOutlet]=\"iconOverrides[state]\"\n      [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container>\n    <ng-container *ngSwitchDefault [ngSwitch]=\"state\">\n      <span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span>\n      <mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon>\n    </ng-container>\n  </div>\n</div>\n<div class=\"mat-step-label\"\n     [class.mat-step-label-active]=\"active\"\n     [class.mat-step-label-selected]=\"selected\"\n     [class.mat-step-label-error]=\"state == 'error'\">\n  <!-- If there is a label template, use it. -->\n  <ng-container *ngIf=\"_templateLabel()\" [ngTemplateOutlet]=\"_templateLabel()!.template\">\n  </ng-container>\n  <!-- If there is no label template, fall back to the text label. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div>\n\n  <div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div>\n  <div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div>\n</div>\n\n",
          host: {
            'class': 'mat-step-header mat-focus-indicator',
            'role': 'tab'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
        }]
      }], function () {
        return [{
          type: MatStepperIntl
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      }, {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        errorMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        iconOverrides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        optional: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/stepper/stepper-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the Material steppers.
     * \@docs-private
     * @type {?}
     */


    var matStepperAnimations = {
      /**
       * Animation that transitions the step along the X axis in a horizontal stepper.
       */
      horizontalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('stepTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        transform: 'translate3d(-100%, 0, 0)',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        transform: 'none',
        visibility: 'visible'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        transform: 'translate3d(100%, 0, 0)',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('500ms cubic-bezier(0.35, 0, 0.25, 1)'))]),

      /**
       * Animation that transitions the step along the Y axis in a vertical stepper.
       */
      verticalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('stepTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        height: '0px',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        height: '0px',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
        height: '*',
        visibility: 'visible'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('* <=> current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/stepper/stepper-icon.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Template context available to an attached `matStepperIcon`.
     * @record
     */

    function MatStepperIconContext() {}

    if (false) {}
    /**
     * Template to be used to override the icons inside the step header.
     */


    var MatStepperIcon =
    /**
     * @param {?} templateRef
     */
    function MatStepperIcon(templateRef) {
      _classCallCheck(this, MatStepperIcon);

      this.templateRef = templateRef;
    };

    MatStepperIcon.ɵfac = function MatStepperIcon_Factory(t) {
      return new (t || MatStepperIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
    };

    MatStepperIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatStepperIcon,
      selectors: [["ng-template", "matStepperIcon", ""]],
      inputs: {
        name: ["matStepperIcon", "name"]
      }
    });
    /** @nocollapse */

    MatStepperIcon.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }];
    };

    MatStepperIcon.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matStepperIcon']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepperIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'ng-template[matStepperIcon]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matStepperIcon']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/stepper/stepper.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatStep = /*#__PURE__*/function (_angular_cdk_stepper_3) {
      _inherits(MatStep, _angular_cdk_stepper_3);

      var _super3 = _createSuper(MatStep);

      /**
       * \@breaking-change 8.0.0 remove the `?` after `stepperOptions`
       * @param {?} stepper
       * @param {?} _errorStateMatcher
       * @param {?=} stepperOptions
       */
      function MatStep(stepper, _errorStateMatcher, stepperOptions) {
        var _this3;

        _classCallCheck(this, MatStep);

        _this3 = _super3.call(this, stepper, stepperOptions);
        _this3._errorStateMatcher = _errorStateMatcher;
        return _this3;
      }
      /**
       * Custom error state matcher that additionally checks for validity of interacted form.
       * @param {?} control
       * @param {?} form
       * @return {?}
       */


      _createClass(MatStep, [{
        key: "isErrorState",
        value: function isErrorState(control, form) {
          /** @type {?} */
          var originalErrorState = this._errorStateMatcher.isErrorState(control, form); // Custom error state checks for the validity of form that is not submitted or touched
          // since user can trigger a form change by calling for another step without directly
          // interacting with the current form.

          /** @type {?} */


          var customErrorState = !!(control && control.invalid && this.interacted);
          return originalErrorState || customErrorState;
        }
      }]);

      return MatStep;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"]);

    MatStep.ɵfac = function MatStep_Factory(t) {
      return new (t || MatStep)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatStepper;
      })), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"], 4), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"], 8));
    };

    MatStep.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MatStep,
      selectors: [["mat-step"]],
      contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatStepLabel, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
        }
      },
      exportAs: ["matStep"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
        useExisting: MatStep
      }, {
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"],
        useExisting: MatStep
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatStep_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatStep_ng_template_0_Template, 1, 0, "ng-template");
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatStep.ctorParameters = function () {
      return [{
        type: MatStepper,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatStepper;
          })]
        }]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"]]
        }]
      }];
    };

    MatStep.propDecorators = {
      stepLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
        args: [MatStepLabel]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStep, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-step',
          template: "<ng-template><ng-content></ng-content></ng-template>\n",
          providers: [{
            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
            useExisting: MatStep
          }, {
            provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"],
            useExisting: MatStep
          }],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          exportAs: 'matStep',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: MatStepper,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return MatStepper;
            })]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"]]
          }]
        }];
      }, {
        stepLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [MatStepLabel]
        }]
      });
    })();

    if (false) {}

    var MatStepper = /*#__PURE__*/function (_angular_cdk_stepper_4) {
      _inherits(MatStepper, _angular_cdk_stepper_4);

      var _super4 = _createSuper(MatStepper);

      function MatStepper() {
        var _this4;

        _classCallCheck(this, MatStepper);

        _this4 = _super4.apply(this, arguments);
        /**
         * Event emitted when the current step is done transitioning in.
         */

        _this4.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Consumer-specified template-refs to be used to override the header icons.
         */

        _this4._iconOverrides = {};
        /**
         * Stream of animation `done` events when the body expands/collapses.
         */

        _this4._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        return _this4;
      }
      /**
       * @return {?}
       */


      _createClass(MatStepper, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this5 = this;

          this._icons.forEach(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref) {
            var name = _ref.name,
                templateRef = _ref.templateRef;
            return _this5._iconOverrides[name] = templateRef;
          }); // Mark the component for change detection whenever the content children query changes


          this._steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this5._stateChanged();
          });

          this._animationDone.pipe( // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
          // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
          // See https://github.com/angular/angular/issues/24084
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(
          /**
          * @param {?} x
          * @param {?} y
          * @return {?}
          */
          function (x, y) {
            return x.fromState === y.fromState && x.toState === y.toState;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            if (
            /** @type {?} */
            event.toState === 'current') {
              _this5.animationDone.emit();
            }
          });
        }
      }]);

      return MatStepper;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"]);

    MatStepper.ɵfac = function MatStepper_Factory(t) {
      return ɵMatStepper_BaseFactory(t || MatStepper);
    };

    MatStepper.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatStepper,
      selectors: [["", "matStepper", ""]],
      contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatStep, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatStepperIcon, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._steps = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._icons = _t);
        }
      },
      viewQuery: function MatStepper_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](MatStepHeader, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
        }
      },
      inputs: {
        disableRipple: "disableRipple"
      },
      outputs: {
        animationDone: "animationDone"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
        useExisting: MatStepper
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
    });
    MatStepper.propDecorators = {
      _stepHeader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
        args: [MatStepHeader]
      }],
      _steps: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [MatStep, {
          descendants: true
        }]
      }],
      _icons: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [MatStepperIcon, {
          descendants: true
        }]
      }],
      animationDone: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      disableRipple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };

    var ɵMatStepper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatStepper);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[matStepper]',
          providers: [{
            provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
            useExisting: MatStepper
          }]
        }]
      }], null, {
        animationDone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        _stepHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
          args: [MatStepHeader]
        }],
        _steps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatStep, {
            descendants: true
          }]
        }],
        _icons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatStepperIcon, {
            descendants: true
          }]
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();

    if (false) {}

    var MatHorizontalStepper = /*#__PURE__*/function (_MatStepper) {
      _inherits(MatHorizontalStepper, _MatStepper);

      var _super5 = _createSuper(MatHorizontalStepper);

      function MatHorizontalStepper() {
        var _this6;

        _classCallCheck(this, MatHorizontalStepper);

        _this6 = _super5.apply(this, arguments);
        /**
         * Whether the label should display in bottom or end position.
         */

        _this6.labelPosition = 'end';
        return _this6;
      }

      return MatHorizontalStepper;
    }(MatStepper);

    MatHorizontalStepper.ɵfac = function MatHorizontalStepper_Factory(t) {
      return ɵMatHorizontalStepper_BaseFactory(t || MatHorizontalStepper);
    };

    MatHorizontalStepper.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MatHorizontalStepper,
      selectors: [["mat-horizontal-stepper"]],
      hostAttrs: ["aria-orientation", "horizontal", "role", "tablist", 1, "mat-stepper-horizontal"],
      hostVars: 4,
      hostBindings: function MatHorizontalStepper_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-stepper-label-position-end", ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.labelPosition == "bottom");
        }
      },
      inputs: {
        selectedIndex: "selectedIndex",
        labelPosition: "labelPosition"
      },
      exportAs: ["matHorizontalStepper"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: MatStepper,
        useExisting: MatHorizontalStepper
      }, {
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
        useExisting: MatHorizontalStepper
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      decls: 4,
      vars: 2,
      consts: [[1, "mat-horizontal-stepper-header-container"], [4, "ngFor", "ngForOf"], [1, "mat-horizontal-content-container"], ["class", "mat-horizontal-stepper-content", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"], [1, "mat-horizontal-stepper-header", 3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "click", "keydown"], ["class", "mat-stepper-horizontal-line", 4, "ngIf"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"]],
      template: function MatHorizontalStepper_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatHorizontalStepper_ng_container_1_Template, 3, 18, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MatHorizontalStepper_div_3_Template, 2, 6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.steps);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.steps);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], MatStepHeader, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"],
      encapsulation: 2,
      data: {
        animation: [matStepperAnimations.horizontalStepTransition]
      },
      changeDetection: 0
    });
    MatHorizontalStepper.propDecorators = {
      labelPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };

    var ɵMatHorizontalStepper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatHorizontalStepper);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatHorizontalStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-horizontal-stepper',
          exportAs: 'matHorizontalStepper',
          template: "<div class=\"mat-horizontal-stepper-header-container\">\n  <ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\">\n    <mat-step-header class=\"mat-horizontal-stepper-header\"\n                     (click)=\"step.select()\"\n                     (keydown)=\"_onKeydown($event)\"\n                     [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\"\n                     [id]=\"_getStepLabelId(i)\"\n                     [attr.aria-posinset]=\"i + 1\"\n                     [attr.aria-setsize]=\"steps.length\"\n                     [attr.aria-controls]=\"_getStepContentId(i)\"\n                     [attr.aria-selected]=\"selectedIndex == i\"\n                     [attr.aria-label]=\"step.ariaLabel || null\"\n                     [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n                     [index]=\"i\"\n                     [state]=\"_getIndicatorType(i, step.state)\"\n                     [label]=\"step.stepLabel || step.label\"\n                     [selected]=\"selectedIndex === i\"\n                     [active]=\"step.completed || selectedIndex === i || !linear\"\n                     [optional]=\"step.optional\"\n                     [errorMessage]=\"step.errorMessage\"\n                     [iconOverrides]=\"_iconOverrides\"\n                     [disableRipple]=\"disableRipple\">\n    </mat-step-header>\n    <div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div>\n  </ng-container>\n</div>\n\n<div class=\"mat-horizontal-content-container\">\n  <div *ngFor=\"let step of steps; let i = index\"\n       [attr.tabindex]=\"selectedIndex === i ? 0 : null\"\n       class=\"mat-horizontal-stepper-content\" role=\"tabpanel\"\n       [@stepTransition]=\"_getAnimationDirection(i)\"\n       (@stepTransition.done)=\"_animationDone.next($event)\"\n       [id]=\"_getStepContentId(i)\"\n       [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n       [attr.aria-expanded]=\"selectedIndex === i\">\n    <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n  </div>\n</div>\n",
          inputs: ['selectedIndex'],
          host: {
            'class': 'mat-stepper-horizontal',
            '[class.mat-stepper-label-position-end]': 'labelPosition == "end"',
            '[class.mat-stepper-label-position-bottom]': 'labelPosition == "bottom"',
            'aria-orientation': 'horizontal',
            'role': 'tablist'
          },
          animations: [matStepperAnimations.horizontalStepTransition],
          providers: [{
            provide: MatStepper,
            useExisting: MatHorizontalStepper
          }, {
            provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
            useExisting: MatHorizontalStepper
          }],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
        }]
      }], null, {
        labelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();

    if (false) {}

    var MatVerticalStepper = /*#__PURE__*/function (_MatStepper2) {
      _inherits(MatVerticalStepper, _MatStepper2);

      var _super6 = _createSuper(MatVerticalStepper);

      /**
       * @param {?} dir
       * @param {?} changeDetectorRef
       * @param {?=} elementRef
       * @param {?=} _document
       */
      function MatVerticalStepper(dir, changeDetectorRef, // @breaking-change 8.0.0 `elementRef` and `_document` parameters to become required.
      elementRef, _document) {
        var _this7;

        _classCallCheck(this, MatVerticalStepper);

        _this7 = _super6.call(this, dir, changeDetectorRef, elementRef, _document);
        _this7._orientation = 'vertical';
        return _this7;
      }

      return MatVerticalStepper;
    }(MatStepper);

    MatVerticalStepper.ɵfac = function MatVerticalStepper_Factory(t) {
      return new (t || MatVerticalStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
    };

    MatVerticalStepper.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MatVerticalStepper,
      selectors: [["mat-vertical-stepper"]],
      hostAttrs: ["aria-orientation", "vertical", "role", "tablist", 1, "mat-stepper-vertical"],
      inputs: {
        selectedIndex: "selectedIndex"
      },
      exportAs: ["matVerticalStepper"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: MatStepper,
        useExisting: MatVerticalStepper
      }, {
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
        useExisting: MatVerticalStepper
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "mat-step", 4, "ngFor", "ngForOf"], [1, "mat-step"], [1, "mat-vertical-stepper-header", 3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "click", "keydown"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "ngTemplateOutlet"]],
      template: function MatVerticalStepper_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatVerticalStepper_div_0_Template, 6, 25, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.steps);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], MatStepHeader, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"],
      encapsulation: 2,
      data: {
        animation: [matStepperAnimations.verticalStepTransition]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    MatVerticalStepper.ctorParameters = function () {
      return [{
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatVerticalStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-vertical-stepper',
          exportAs: 'matVerticalStepper',
          template: "<div class=\"mat-step\" *ngFor=\"let step of steps; let i = index; let isLast = last\">\n  <mat-step-header class=\"mat-vertical-stepper-header\"\n                   (click)=\"step.select()\"\n                   (keydown)=\"_onKeydown($event)\"\n                   [tabIndex]=\"_getFocusIndex() == i ? 0 : -1\"\n                   [id]=\"_getStepLabelId(i)\"\n                   [attr.aria-posinset]=\"i + 1\"\n                   [attr.aria-setsize]=\"steps.length\"\n                   [attr.aria-controls]=\"_getStepContentId(i)\"\n                   [attr.aria-selected]=\"selectedIndex === i\"\n                   [attr.aria-label]=\"step.ariaLabel || null\"\n                   [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n                   [index]=\"i\"\n                   [state]=\"_getIndicatorType(i, step.state)\"\n                   [label]=\"step.stepLabel || step.label\"\n                   [selected]=\"selectedIndex === i\"\n                   [active]=\"step.completed || selectedIndex === i || !linear\"\n                   [optional]=\"step.optional\"\n                   [errorMessage]=\"step.errorMessage\"\n                   [iconOverrides]=\"_iconOverrides\"\n                   [disableRipple]=\"disableRipple\">\n  </mat-step-header>\n\n  <div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\">\n    <div class=\"mat-vertical-stepper-content\" role=\"tabpanel\"\n         [attr.tabindex]=\"selectedIndex === i ? 0 : null\"\n         [@stepTransition]=\"_getAnimationDirection(i)\"\n         (@stepTransition.done)=\"_animationDone.next($event)\"\n         [id]=\"_getStepContentId(i)\"\n         [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n         [attr.aria-expanded]=\"selectedIndex === i\">\n      <div class=\"mat-vertical-content\">\n        <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n",
          inputs: ['selectedIndex'],
          host: {
            'class': 'mat-stepper-vertical',
            'aria-orientation': 'vertical',
            'role': 'tablist'
          },
          animations: [matStepperAnimations.verticalStepTransition],
          providers: [{
            provide: MatStepper,
            useExisting: MatVerticalStepper
          }, {
            provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
            useExisting: MatVerticalStepper
          }],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
        }]
      }], function () {
        return [{
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/stepper/stepper-button.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Button that moves to the next step in a stepper workflow.
     */


    var MatStepperNext = /*#__PURE__*/function (_angular_cdk_stepper_5) {
      _inherits(MatStepperNext, _angular_cdk_stepper_5);

      var _super7 = _createSuper(MatStepperNext);

      function MatStepperNext() {
        _classCallCheck(this, MatStepperNext);

        return _super7.apply(this, arguments);
      }

      return MatStepperNext;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperNext"]);

    MatStepperNext.ɵfac = function MatStepperNext_Factory(t) {
      return ɵMatStepperNext_BaseFactory(t || MatStepperNext);
    };

    MatStepperNext.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatStepperNext,
      selectors: [["button", "matStepperNext", ""]],
      hostVars: 1,
      hostBindings: function MatStepperNext_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("type", ctx.type);
        }
      },
      inputs: {
        type: "type"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatStepperNext_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatStepperNext);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepperNext, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'button[matStepperNext]',
          host: {
            '[type]': 'type'
          },
          inputs: ['type']
        }]
      }], null, null);
    })();
    /**
     * Button that moves to the previous step in a stepper workflow.
     */


    var MatStepperPrevious = /*#__PURE__*/function (_angular_cdk_stepper_6) {
      _inherits(MatStepperPrevious, _angular_cdk_stepper_6);

      var _super8 = _createSuper(MatStepperPrevious);

      function MatStepperPrevious() {
        _classCallCheck(this, MatStepperPrevious);

        return _super8.apply(this, arguments);
      }

      return MatStepperPrevious;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperPrevious"]);

    MatStepperPrevious.ɵfac = function MatStepperPrevious_Factory(t) {
      return ɵMatStepperPrevious_BaseFactory(t || MatStepperPrevious);
    };

    MatStepperPrevious.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatStepperPrevious,
      selectors: [["button", "matStepperPrevious", ""]],
      hostVars: 1,
      hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵhostProperty"]("type", ctx.type);
        }
      },
      inputs: {
        type: "type"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatStepperPrevious_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatStepperPrevious);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepperPrevious, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'button[matStepperPrevious]',
          host: {
            '[type]': 'type'
          },
          inputs: ['type']
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/stepper/stepper-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatStepperModule = function MatStepperModule() {
      _classCallCheck(this, MatStepperModule);
    };

    MatStepperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: MatStepperModule
    });
    MatStepperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function MatStepperModule_Factory(t) {
        return new (t || MatStepperModule)();
      },
      providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]],
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatStepperModule, {
        declarations: function declarations() {
          return [MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]];
        },
        exports: function exports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatStepperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]],
          exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon],
          declarations: [MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon],
          providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/stepper/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=stepper.js.map

    /***/

  },

  /***/
  "./src/app/main/component/ubs/certificate-status.enum.ts":
  /*!***************************************************************!*\
    !*** ./src/app/main/component/ubs/certificate-status.enum.ts ***!
    \***************************************************************/

  /*! exports provided: CertificateStatus */

  /***/
  function srcAppMainComponentUbsCertificateStatusEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CertificateStatus", function () {
      return CertificateStatus;
    });

    var CertificateStatus;

    (function (CertificateStatus) {
      CertificateStatus["ACTIVE"] = "ACTIVE";
      CertificateStatus["NEW"] = "NEW";
      CertificateStatus["USED"] = "USED";
      CertificateStatus["EXPIRED"] = "EXPIRED";
    })(CertificateStatus || (CertificateStatus = {}));
    /***/

  },

  /***/
  "./src/app/main/component/ubs/components/ubs-confirm-page/ubs-confirm-page.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/main/component/ubs/components/ubs-confirm-page/ubs-confirm-page.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: UbsConfirmPageComponent */

  /***/
  function srcAppMainComponentUbsComponentsUbsConfirmPageUbsConfirmPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UbsConfirmPageComponent", function () {
      return UbsConfirmPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _global_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @global-errors/mat-snack-bar/mat-snack-bar.component */
    "./src/app/main/component/errors/mat-snack-bar/mat-snack-bar.component.ts");
    /* harmony import */


    var _global_service_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @global-service/jwt/jwt.service */
    "./src/app/main/service/jwt/jwt.service.ts");
    /* harmony import */


    var _services_ubs_order_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/ubs-order-form.service */
    "./src/app/main/component/ubs/services/ubs-order-form.service.ts");
    /* harmony import */


    var _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @global-service/localstorage/local-storage.service */
    "./src/app/main/service/localstorage/local-storage.service.ts");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/order.service */
    "./src/app/main/component/ubs/services/order.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function UbsConfirmPageComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UbsConfirmPageComponent_div_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.toPersonalAccount();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "confirm-page.to-personal-account"), " ");
      }
    }

    function UbsConfirmPageComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UbsConfirmPageComponent_div_4_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.returnToPayment();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "confirm-page.return-to-payment"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "confirm-page.oops"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, "confirm-page.order-not-paid"));
      }
    }

    function UbsConfirmPageComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "confirm-page.title-text"), " (\u2116", ctx_r2.orderId, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "confirm-page.description"));
      }
    }

    var UbsConfirmPageComponent = /*#__PURE__*/function () {
      function UbsConfirmPageComponent(router, activatedRoute, snackBar, jwtService, ubsOrderFormService, shareFormService, localStorageService, orderService) {
        _classCallCheck(this, UbsConfirmPageComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.jwtService = jwtService;
        this.ubsOrderFormService = ubsOrderFormService;
        this.shareFormService = shareFormService;
        this.localStorageService = localStorageService;
        this.orderService = orderService;
        this.orderResponseError = false;
        this.isSpinner = true;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(UbsConfirmPageComponent, [{
        key: "toPersonalAccount",
        value: function toPersonalAccount() {
          var _this8 = this;

          this.jwtService.userRole$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (userRole) {
            var isAdmin = userRole === 'ROLE_ADMIN';

            _this8.saveDataOnLocalStorage();

            _this8.router.navigate([isAdmin ? 'ubs-admin' : 'ubs-user', 'orders']);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.ubsOrderFormService.orderId.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (oderID) {
            if (oderID) {
              _this9.orderId = JSON.parse(oderID).orderId;
              _this9.orderResponseError = _this9.ubsOrderFormService.getOrderResponseErrorStatus();
              _this9.orderStatusDone = _this9.ubsOrderFormService.getOrderStatus();

              _this9.renderView();
            } else {
              _this9.orderService.getUbsOrderStatus().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this9.destroy$)).subscribe(function (response) {
                _this9.orderResponseError = response.result === 'error';
                _this9.orderStatusDone = !_this9.orderResponseError;
                _this9.orderId = response.orderId ? response.orderId.split('_')[0] : _this9.localStorageService.getUbsFondyOrderId();

                _this9.renderView();
              }, function (error) {
                _this9.orderResponseError = true;
                _this9.isSpinner = false;
                console.log(error);
              });
            }
          });
        }
      }, {
        key: "renderView",
        value: function renderView() {
          this.isSpinner = false;

          if (!this.orderResponseError && !this.orderStatusDone) {
            this.saveDataOnLocalStorage();
            this.snackBar.openSnackBar('successConfirmSaveOrder', this.orderId);
          } else if (!this.orderResponseError && this.orderStatusDone) {
            this.saveDataOnLocalStorage();
          }
        }
      }, {
        key: "saveDataOnLocalStorage",
        value: function saveDataOnLocalStorage() {
          this.shareFormService.isDataSaved = true;
          this.shareFormService.saveDataOnLocalStorage();
          this.localStorageService.removeUbsOrderId();
          this.localStorageService.removeUbsFondyOrderId();
        }
      }, {
        key: "returnToPayment",
        value: function returnToPayment() {
          this.router.navigateByUrl('/ubs/order');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }]);

      return UbsConfirmPageComponent;
    }();

    UbsConfirmPageComponent.ɵfac = function UbsConfirmPageComponent_Factory(t) {
      return new (t || UbsConfirmPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_service_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ubs_order_form_service__WEBPACK_IMPORTED_MODULE_6__["UBSOrderFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ubs_order_form_service__WEBPACK_IMPORTED_MODULE_6__["UBSOrderFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"]));
    };

    UbsConfirmPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UbsConfirmPageComponent,
      selectors: [["app-ubs-confirm-page"]],
      decls: 50,
      vars: 33,
      consts: [[1, "wraper"], [1, "order"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "error", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "row", "infolinks"], [1, "col-md-6", "list"], ["routerLink", "/ubs/order", 3, "click"], [1, "col-md-6"], ["src", "assets\\img\\ubs\\black_garbage_bag.svg", "alt", "eco-people", 1, "image"], [1, "row"], [1, "col-md-12"], [1, "p-40"], ["href", "", 1, "link"], [1, "btn", "primary-global-button", 3, "click"], [1, "error"], [1, "btn-back", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-chevron-left"], [1, "title"], [1, "description"]],
      template: function UbsConfirmPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UbsConfirmPageComponent_div_3_Template, 4, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UbsConfirmPageComponent_div_4_Template, 12, 9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UbsConfirmPageComponent_div_5_Template, 8, 7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UbsConfirmPageComponent_Template_a_click_13_listener() {
            return ctx.saveDataOnLocalStorage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.orderResponseError === false && ctx.orderStatusDone === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.orderResponseError === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 13, "confirm-page.ubsServices"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 15, "confirm-page.other-order"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 17, "confirm-page.mail"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 19, "confirm-page.ukraine-site"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 21, "confirm-page.eco-shop"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 23, "confirm-page.information"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 25, "confirm-page.instruction"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 27, "confirm-page.video"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 29, "confirm-page.questions"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 31, "confirm-page.contact"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchDefault"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
      styles: [".wraper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.wraper[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  width: 55%;\n  height: 50%;\n  box-shadow: 1px 4px 8px rgba(100, 114, 125, 0.18);\n  padding: 20px 40px;\n  color: var(--ubs-primary-grey);\n  font-family: var(--ubs-quaternary-font);\n  margin-top: -28px;\n  margin-bottom: 64px;\n  overflow: hidden;\n}\n.wraper[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  margin-top: 22px;\n  margin-left: 40px;\n  height: 2.75rem;\n  width: 254px;\n  border-radius: 4px;\n  font-size: 18px;\n  color: var(--ubs-quaternary-dark-grey);\n  border-color: var(--ubs-button-light-green);\n  background: var(--ubs-button-light-green);\n}\n.wraper[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n  border: 0;\n  color: var(--ubs-quaternary-dark-grey);\n  background: none;\n  font-size: 14px;\n  text-decoration: underline;\n  margin-left: -40px;\n}\n.wraper[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: var(--primary-font);\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 32px;\n  text-align: center;\n  letter-spacing: 0.002em;\n  color: var(--ubs-primary-grey);\n  margin-top: 40px;\n}\n.wraper[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.wraper[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-family: var(--primary-font);\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  color: var(--ubs-primary-grey);\n  width: 80%;\n  margin: auto;\n}\n.wraper[_ngcontent-%COMP%]   .infolinks[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.wraper[_ngcontent-%COMP%]   .infolinks[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--ubs-electric-violet);\n  font-family: var(--primary-font);\n  margin-top: 55px;\n}\n.wraper[_ngcontent-%COMP%]   .infolinks[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 14px;\n  color: var(--ubs-electric-violet);\n}\n.wraper[_ngcontent-%COMP%]   .infolinks[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.wraper[_ngcontent-%COMP%]   .infolinks[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--ubs-primary-grey);\n}\n.wraper[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 130%;\n  height: auto;\n  margin: 55px auto;\n}\n.wraper[_ngcontent-%COMP%]   .p-40[_ngcontent-%COMP%] {\n  padding-left: 40px;\n  font-size: 14px;\n  color: var(--ubs-primary-grey);\n}\n.wraper[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: var(--ubs-electric-violet);\n  text-decoration: underline;\n}\n@media screen and (min-width: 2500px) {\n  .wraper[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n    width: 44%;\n  }\n}\n@media screen and (max-width: 992px) {\n  .wraper[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n@media screen and (max-width: 575px) {\n  .wraper[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: -40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvdWJzL2NvbXBvbmVudHMvdWJzLWNvbmZpcm0tcGFnZS9EOlxcU29mdFNlcnZlX0FjYWRlbXlcXEdyZWVuQ2l0eVxcZ2gtcGFnZXNcXEdyZWVuQ2l0eUNsaWVudC9zcmNcXGFwcFxcbWFpblxcY29tcG9uZW50XFx1YnNcXGNvbXBvbmVudHNcXHVicy1jb25maXJtLXBhZ2VcXHVicy1jb25maXJtLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vY29tcG9uZW50L3Vicy9jb21wb25lbnRzL3Vicy1jb25maXJtLXBhZ2UvdWJzLWNvbmZpcm0tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0NGO0FEQ0U7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlEQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSwyQ0FBQTtFQUNBLHlDQUFBO0FDQ047QURFSTtFQUNFLFNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNBTjtBREdJO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDRE47QURJSTtFQUNFLGFBQUE7QUNGTjtBREtJO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDSE47QURPRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0xKO0FET0k7RUFDRSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQ0xOO0FET007RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQ0xSO0FEUU07RUFDRSxxQkFBQTtBQ05SO0FEU007RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ1BSO0FEWUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDVko7QURhRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FDWEo7QURjRTtFQUNFLGlDQUFBO0VBQ0EsMEJBQUE7QUNaSjtBRGdCQTtFQUVJO0lBQ0UsVUFBQTtFQ2RKO0FBQ0Y7QURrQkE7RUFFSTtJQUNFLFVBQUE7RUNqQko7QUFDRjtBRHFCQTtFQUVJO0lBQ0UsV0FBQTtJQUNBLGlCQUFBO0VDcEJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbXBvbmVudC91YnMvY29tcG9uZW50cy91YnMtY29uZmlybS1wYWdlL3Vicy1jb25maXJtLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAub3JkZXIge1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDRweCA4cHggcmdiKDEwMCAxMTQgMTI1IC8gMTglKTtcclxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS11YnMtcXVhdGVybmFyeS1mb250KTtcclxuICAgIG1hcmdpbi10b3A6IC0yOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgcGFkZGluZzogOHB4IDE0cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDIuNzVyZW07XHJcbiAgICAgIHdpZHRoOiAyNTRweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWJhY2sge1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAwMmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XHJcbiAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmVycm9yIC50aXRsZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbmZvbGlua3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAubGlzdCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdWJzLWVsZWN0cmljLXZpb2xldCk7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1NXB4O1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdWJzLWVsZWN0cmljLXZpb2xldCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEzMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDU1cHggYXV0bztcclxuICB9XHJcblxyXG4gIC5wLTQwIHtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcclxuICB9XHJcblxyXG4gIC5saW5rIHtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtZWxlY3RyaWMtdmlvbGV0KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjUwMHB4KSB7XHJcbiAgLndyYXBlciB7XHJcbiAgICAub3JkZXIge1xyXG4gICAgICB3aWR0aDogNDQlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAud3JhcGVyIHtcclxuICAgIC5vcmRlciB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIC53cmFwZXIge1xyXG4gICAgLm9yZGVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIud3JhcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ud3JhcGVyIC5vcmRlciB7XG4gIHdpZHRoOiA1NSU7XG4gIGhlaWdodDogNTAlO1xuICBib3gtc2hhZG93OiAxcHggNHB4IDhweCByZ2JhKDEwMCwgMTE0LCAxMjUsIDAuMTgpO1xuICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWZvbnQpO1xuICBtYXJnaW4tdG9wOiAtMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogNjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53cmFwZXIgLm9yZGVyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAxNHB4O1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgaGVpZ2h0OiAyLjc1cmVtO1xuICB3aWR0aDogMjU0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogdmFyKC0tdWJzLXF1YXRlcm5hcnktZGFyay1ncmV5KTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XG59XG4ud3JhcGVyIC5vcmRlciAuYnRuLWJhY2sge1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBtYXJnaW4tbGVmdDogLTQwcHg7XG59XG4ud3JhcGVyIC5vcmRlciAudGl0bGUge1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDAyZW07XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi53cmFwZXIgLm9yZGVyIC5lcnJvciAudGl0bGUge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLndyYXBlciAub3JkZXIgLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi53cmFwZXIgLmluZm9saW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi53cmFwZXIgLmluZm9saW5rcyAubGlzdCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogdmFyKC0tdWJzLWVsZWN0cmljLXZpb2xldCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICBtYXJnaW4tdG9wOiA1NXB4O1xufVxuLndyYXBlciAuaW5mb2xpbmtzIC5saXN0IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXVicy1lbGVjdHJpYy12aW9sZXQpO1xufVxuLndyYXBlciAuaW5mb2xpbmtzIC5saXN0IGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLndyYXBlciAuaW5mb2xpbmtzIC5saXN0IGg1IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xufVxuLndyYXBlciAuaW1hZ2Uge1xuICB3aWR0aDogMTMwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDU1cHggYXV0bztcbn1cbi53cmFwZXIgLnAtNDAge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xufVxuLndyYXBlciAubGluayB7XG4gIGNvbG9yOiB2YXIoLS11YnMtZWxlY3RyaWMtdmlvbGV0KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI1MDBweCkge1xuICAud3JhcGVyIC5vcmRlciB7XG4gICAgd2lkdGg6IDQ0JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLndyYXBlciAub3JkZXIge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC53cmFwZXIgLm9yZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UbsConfirmPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ubs-confirm-page',
          templateUrl: './ubs-confirm-page.component.html',
          styleUrls: ['./ubs-confirm-page.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _global_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarComponent"]
        }, {
          type: _global_service_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"]
        }, {
          type: _services_ubs_order_form_service__WEBPACK_IMPORTED_MODULE_6__["UBSOrderFormService"]
        }, {
          type: _services_ubs_order_form_service__WEBPACK_IMPORTED_MODULE_6__["UBSOrderFormService"]
        }, {
          type: _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]
        }, {
          type: _services_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/component/ubs/components/ubs-input-error/ubs-input-error.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/main/component/ubs/components/ubs-input-error/ubs-input-error.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: UBSInputErrorComponent */

  /***/
  function srcAppMainComponentUbsComponentsUbsInputErrorUbsInputErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UBSInputErrorComponent", function () {
      return UBSInputErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var UBSInputErrorComponent = /*#__PURE__*/function () {
      function UBSInputErrorComponent() {
        _classCallCheck(this, UBSInputErrorComponent);

        this.validationErrors = {
          email: 'input-error.email-wrong',
          minlength: 'input-error.minlength-short',
          maxlength: 'input-error.max-length',
          pattern: 'input-error.pattern',
          required: 'input-error.required'
        };
      }

      _createClass(UBSInputErrorComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.getType();
        }
      }, {
        key: "getType",
        value: function getType() {
          for (var error in this.validationErrors) {
            if (this.formElement.errors[error]) {
              this.errorMessage = this.validationErrors[error];
              break;
            }
          }
        }
      }]);

      return UBSInputErrorComponent;
    }();

    UBSInputErrorComponent.ɵfac = function UBSInputErrorComponent_Factory(t) {
      return new (t || UBSInputErrorComponent)();
    };

    UBSInputErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UBSInputErrorComponent,
      selectors: [["app-ubs-input-error"]],
      inputs: {
        controlName: "controlName",
        formElement: "formElement",
        certificateFieldValue: "certificateFieldValue",
        firstNameFieldValue: "firstNameFieldValue",
        anotherClientFirstNameFieldValue: "anotherClientFirstNameFieldValue",
        lastNameFieldValue: "lastNameFieldValue",
        anotherClientLastNameFieldValue: "anotherClientLastNameFieldValue",
        emailFieldValue: "emailFieldValue",
        anotherClientEmailFieldValue: "anotherClientEmailFieldValue",
        phoneNumberFieldValue: "phoneNumberFieldValue",
        anotherClientPhoneNumberFieldValue: "anotherClientPhoneNumberFieldValue",
        streetFieldValue: "streetFieldValue",
        houseNumberFieldValue: "houseNumberFieldValue"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 3,
      template: function UBSInputErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.errorMessage), "\n");
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UBSInputErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ubs-input-error',
          templateUrl: './ubs-input-error.component.html'
        }]
      }], null, {
        controlName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        formElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        certificateFieldValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        firstNameFieldValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        anotherClientFirstNameFieldValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lastNameFieldValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        anotherClientLastNameFieldValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        emailFieldValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        anotherClientEmailFieldValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        phoneNumberFieldValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        anotherClientPhoneNumberFieldValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        streetFieldValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        houseNumberFieldValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/component/ubs/components/ubs-main-page/ubs-main-page.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/main/component/ubs/components/ubs-main-page/ubs-main-page.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: UbsMainPageComponent */

  /***/
  function srcAppMainComponentUbsComponentsUbsMainPageUbsMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UbsMainPageComponent", function () {
      return UbsMainPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _image_pathes_ubs_main_page_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../image-pathes/ubs-main-page-images */
    "./src/app/main/image-pathes/ubs-main-page-images.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @global-service/localstorage/local-storage.service */
    "./src/app/main/service/localstorage/local-storage.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function UbsMainPageComponent_li_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var li_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, li_r4), " ");
      }
    }

    function UbsMainPageComponent_li_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rule_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, rule_r5), " ");
      }
    }

    function UbsMainPageComponent_div_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var elemPrice_r6 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.ubsMainPageImages.ubsRectangle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, elemPrice_r6.header));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, elemPrice_r6.content));
      }
    }

    function UbsMainPageComponent_div_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var step_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", step_r7.numberStep, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, step_r7.header));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, step_r7.content));
      }
    }

    var UbsMainPageComponent = /*#__PURE__*/function () {
      function UbsMainPageComponent(router, localeStorageService) {
        _classCallCheck(this, UbsMainPageComponent);

        this.router = router;
        this.localeStorageService = localeStorageService;
        this.ubsMainPageImages = _image_pathes_ubs_main_page_images__WEBPACK_IMPORTED_MODULE_1__["ubsMainPageImages"];
        this.priceCard = [{
          header: 'ubs-homepage.ubs-courier.price.price-title.li_1',
          content: 'ubs-homepage.ubs-courier.price.price-description.li_1'
        }, {
          header: 'ubs-homepage.ubs-courier.price.price-title.li_2',
          content: 'ubs-homepage.ubs-courier.price.price-description.li_2'
        }, {
          header: 'ubs-homepage.ubs-courier.price.price-title.li_3',
          content: 'ubs-homepage.ubs-courier.price.price-description.li_3'
        }];
        this.stepsOrder = [{
          header: 'ubs-homepage.ubs-courier.price.steps-title.li_1',
          content: 'ubs-homepage.ubs-courier.price.steps-content.li_1',
          numberStep: 1
        }, {
          header: 'ubs-homepage.ubs-courier.price.steps-title.li_2',
          content: 'ubs-homepage.ubs-courier.price.steps-content.li_2',
          numberStep: 2
        }, {
          header: 'ubs-homepage.ubs-courier.price.steps-title.li_3',
          content: 'ubs-homepage.ubs-courier.price.steps-content.li_3',
          numberStep: 3
        }, {
          header: 'ubs-homepage.ubs-courier.price.steps-title.li_4',
          content: 'ubs-homepage.ubs-courier.price.steps-content.li_4',
          numberStep: 4
        }];
        this.preparingContent = ['ubs-homepage.ubs-courier.preparing.content.li_1', 'ubs-homepage.ubs-courier.preparing.content.li_2', 'ubs-homepage.ubs-courier.preparing.content.li_3', 'ubs-homepage.ubs-courier.preparing.content.li_4', 'ubs-homepage.ubs-courier.preparing.content.li_5', 'ubs-homepage.ubs-courier.preparing.content.li_6', 'ubs-homepage.ubs-courier.preparing.content.li_7'];
        this.rules = ['ubs-homepage.ubs-courier.rules.content.li_1', 'ubs-homepage.ubs-courier.rules.content.li_2', 'ubs-homepage.ubs-courier.rules.content.li_3'];
      }

      _createClass(UbsMainPageComponent, [{
        key: "redirectToOrder",
        value: function redirectToOrder() {
          this.localeStorageService.setUbsRegistration(true);
          this.router.navigate(['ubs', 'order']);
        }
      }]);

      return UbsMainPageComponent;
    }();

    UbsMainPageComponent.ɵfac = function UbsMainPageComponent_Factory(t) {
      return new (t || UbsMainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]));
    };

    UbsMainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UbsMainPageComponent,
      selectors: [["app-ubs-main-page"]],
      decls: 75,
      vars: 51,
      consts: [[1, "ubsHomepage"], [1, "header-left"], ["alt", "ubs-armored-track", "aria-hidden", "true", 1, "ubs-image", 3, "src"], [1, "header-right"], [1, "main-content"], [1, "button", "primary-global-button", 3, "click"], [1, "section-header"], ["alt", "ubs-polygon", "aria-hidden", "true", 1, "ubs-polygon", 3, "src"], [1, "how-preparing"], ["alt", "ubs-green-garbage", "aria-hidden", "true", 1, "ubs-image", 3, "src"], [4, "ngFor", "ngForOf"], ["alt", "ubs-black-garbage", "aria-hidden", "true", 1, "ubs-image", 3, "src"], [1, "price-header"], [1, "boxCard"], ["id", "price-frame", 4, "ngFor", "ngForOf"], [1, "box"], ["id", "step-order", 4, "ngFor", "ngForOf"], ["id", "how-works"], ["alt", "ubs-signboard", "aria-hidden", "true", 1, "ubs-image", 3, "src"], ["id", "main-content"], ["id", "header-how-works"], [1, "time-how"], ["id", "how-works-content"], ["id", "price-frame"], ["alt", "ubs-rectangle", "aria-hidden", "true", 1, "ubs-rectangle", 3, "src"], [1, "header-price"], [1, "content-price"], ["id", "step-order"], [1, "circle"], [1, "header-step"], [1, "content-step"]],
      template: function UbsMainPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UbsMainPageComponent_Template_button_click_15_listener() {
            return ctx.redirectToOrder();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, UbsMainPageComponent_li_31_Template, 3, 3, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, UbsMainPageComponent_li_41_Template, 3, 3, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, UbsMainPageComponent_div_47_Template, 8, 7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, UbsMainPageComponent_div_50_Template, 10, 7, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "section", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UbsMainPageComponent_Template_button_click_72_listener() {
            return ctx.redirectToOrder();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 23, "ubs-homepage.general"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.ubsMainPageImages.ubsArmoredTrack, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 25, "ubs-homepage.header.caption"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 27, "ubs-homepage.header.content"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 29, "ubs-homepage.header.btn-order-courier"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 31, "ubs-homepage.ubs-courier.info-header"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.ubsMainPageImages.ubsPolygon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.ubsMainPageImages.ubsGreenGarbage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 33, "ubs-homepage.ubs-courier.preparing.caption"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.preparingContent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.ubsMainPageImages.ubsBlackGarbage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 35, "ubs-homepage.ubs-courier.rules.caption"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rules);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 37, "ubs-homepage.ubs-courier.price.caption"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.priceCard);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stepsOrder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.ubsMainPageImages.ubsSignboard, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 39, "ubs-homepage.ubs-courier.how-works.header"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 41, "ubs-homepage.ubs-courier.how-works.time.pre_1"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 43, "ubs-homepage.ubs-courier.how-works.time.pre_2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 45, "ubs-homepage.ubs-courier.how-works.content.pre_1"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 47, "ubs-homepage.ubs-courier.how-works.content.pre_2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](74, 49, "ubs-homepage.header.btn-order-courier"), " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
      styles: [".ubsHomepage[_ngcontent-%COMP%] {\n  vertical-align: top;\n  max-width: 1920px;\n  margin: 0 auto;\n  color: var(--ubs-primary-grey);\n  font-family: var(--primary-font);\n  font-style: normal;\n  font-weight: normal;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-stretch: normal;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 2;\n  text-align: center;\n  margin-bottom: 25px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 32px;\n  margin: 25px auto;\n}\n\n.button[_ngcontent-%COMP%] {\n  height: 44px;\n  width: 200px;\n  font-size: 18px;\n  background-color: var(--ubs-button-light-green);\n  color: var(--ubs-tertiary-dark-grey);\n  margin-top: 25px;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.price-header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 30px;\n  line-height: 44px;\n  text-align: center;\n  margin: 10px;\n}\n\n.header[_ngcontent-%COMP%] {\n  height: 559px;\n}\n\n.header-left[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 51%;\n  vertical-align: top;\n}\n\n.header-right[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 49%;\n}\n\n.ubs-image[_ngcontent-%COMP%] {\n  display: block;\n  outline: 0;\n  max-width: 100%;\n  height: auto;\n  margin: 20px auto 10px 0;\n  float: left;\n}\n\n.ubs-polygon[_ngcontent-%COMP%] {\n  display: block;\n  margin: 10px auto 65px;\n}\n\n.section-header[_ngcontent-%COMP%] {\n  margin: 85px auto 20px;\n  text-align: center;\n  font-size: 18px;\n  max-width: 665px;\n  line-height: 28px;\n  font-weight: bold;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 8px 25px 8px 5px;\n  list-style-type: square;\n  color: var(--ubs-primary-grey);\n  font-style: normal;\n  font-size: 16px;\n  line-height: 24px;\n  list-style-position: outside;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n[_ngcontent-%COMP%]::marker {\n  font-size: 24px;\n  padding-left: 0;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n#price-frame[_ngcontent-%COMP%] {\n  height: 291px;\n  width: 185px;\n  position: relative;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-image: url('first_rectangle.png');\n  background-size: 184px 282px;\n}\n\n.ubs-rectangle[_ngcontent-%COMP%] {\n  height: 230px;\n  width: 79px;\n  position: absolute;\n  top: 20px;\n  left: 55px;\n}\n\n.header-price[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  z-index: 2;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 28px;\n  align-self: start;\n  margin: 30% 0 10px;\n}\n\n.content-price[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  z-index: 2;\n  font-size: 16px;\n  line-height: 24px;\n  align-self: start;\n  margin: 50% 25px 10px;\n  padding-top: 10px;\n}\n\n.boxCard[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 1440px;\n  justify-content: center;\n}\n\n.box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n#step-order[_ngcontent-%COMP%] {\n  height: 203px;\n  width: 133px;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  flex: 1 0 25%;\n  margin: 50px;\n}\n\n.circle[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  position: relative;\n  line-height: 30px;\n  background-color: var(--ubs-tertiary-dark-grey);\n  color: var(--ubs-primary-white);\n  margin: 10px;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 20px;\n}\n\nhr[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 72px;\n  border: none;\n  background-color: var(--ubs-tertiary-light-grey);\n  position: absolute;\n  left: 55px;\n  top: 5px;\n}\n\n.header-step[_ngcontent-%COMP%] {\n  position: absolute;\n  font-weight: bold;\n  font-size: 17px;\n  line-height: 28px;\n  align-self: start;\n  margin: 25% 10px 10px;\n}\n\n.content-step[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 14px;\n  line-height: 28px;\n  align-self: start;\n  margin: 100px 10px 120px 10px;\n  padding-top: 20px;\n  width: 160px;\n}\n\n#how-works[_ngcontent-%COMP%] {\n  margin: 50px auto;\n}\n\n#header-how-works[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: bold;\n  line-height: 44px;\n  margin-bottom: 25px;\n}\n\n.time-how[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  margin: 1px 25px 1px auto;\n}\n\n#how-works-content[_ngcontent-%COMP%] {\n  margin: 15px 10px 15px 0;\n}\n\n@media screen and (min-width: 770px) {\n  #step-order[_ngcontent-%COMP%] {\n    height: 250px;\n    margin: 50px auto;\n  }\n\n  #price-frame[_ngcontent-%COMP%] {\n    height: 228px;\n    width: 250px;\n    background-size: 250px 228px;\n  }\n\n  .ubs-rectangle[_ngcontent-%COMP%] {\n    height: 189px;\n    width: 108px;\n    top: 15px;\n    left: 75px;\n  }\n\n  .header-price[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n\n  .content-price[_ngcontent-%COMP%] {\n    margin: 80px 40px 10px;\n  }\n}\n\n@media screen and (max-width: 770px) {\n  .how-preparing[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n    display: block;\n    max-width: 51%;\n  }\n  .how-preparing[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n    display: block;\n    width: auto;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .ubsHomepage[_ngcontent-%COMP%] {\n    margin: auto 12%;\n  }\n\n  #price-frame[_ngcontent-%COMP%] {\n    height: 178px;\n    width: 310px;\n    background-size: 310px 187px;\n  }\n\n  .ubs-rectangle[_ngcontent-%COMP%] {\n    height: 150px;\n    width: 163px;\n    top: 15px;\n    left: 75px;\n  }\n\n  .header-price[_ngcontent-%COMP%] {\n    margin-top: 40px;\n  }\n\n  .content-price[_ngcontent-%COMP%] {\n    margin: 70px 25px 10px;\n  }\n\n  .content-step[_ngcontent-%COMP%] {\n    margin-top: 110px;\n  }\n}\n\n@media screen and (max-width: 445px) {\n  .ubsHomepage[_ngcontent-%COMP%]   .ubs-polygon[_ngcontent-%COMP%] {\n    margin: 10px auto;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n    width: 90%;\n    padding: 10px;\n    text-align: center;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n    width: 85%;\n    text-align: justify;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n    max-width: 70%;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   .header-step[_ngcontent-%COMP%] {\n    margin-top: 45px;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   .content-step[_ngcontent-%COMP%] {\n    margin-top: 110px;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .how-preparing[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .how-preparing[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n    width: 89%;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .how-preparing[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .how-preparing[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    text-align: justify;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .how-preparing[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    text-align: justify;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .how-preparing[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n    max-width: 70%;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #step-order[_ngcontent-%COMP%] {\n    width: 89%;\n    margin: 20px 20px 0;\n    flex: none;\n    justify-content: center;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #step-order[_ngcontent-%COMP%]   .header-step[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   #step-order[_ngcontent-%COMP%]   .content-step[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 80px;\n    text-align: center;\n    font-size: 16px;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   #how-works[_ngcontent-%COMP%] {\n    margin-top: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   #how-works[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n    width: 85%;\n    text-align: justify;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   #how-works[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   #main-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   #how-works[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   #main-content[_ngcontent-%COMP%]   .time-how[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 17px;\n    text-align: center;\n    margin: 0;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   #how-works[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   #main-content[_ngcontent-%COMP%]   #header-how-works[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   #how-works[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   #main-content[_ngcontent-%COMP%]   #header-how-works[_ngcontent-%COMP%]   #how-works-content[_ngcontent-%COMP%] {\n    text-align: justify;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   #how-works[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n    max-width: 85%;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   #price-frame[_ngcontent-%COMP%] {\n    height: 178px;\n    width: 310px;\n    background-size: 310px 187px;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   .ubs-rectangle[_ngcontent-%COMP%] {\n    height: 150px;\n    width: 163px;\n    top: 15px;\n    left: 75px;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   .header-price[_ngcontent-%COMP%] {\n    margin-top: 40px;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   .content-price[_ngcontent-%COMP%] {\n    margin: 70px 25px 10px;\n  }\n  .ubsHomepage[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n\n@media screen and (max-width: 445px) and (max-width: 445px) and (max-height: 850px) {\n  .ubsHomepage[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n    margin-top: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvdWJzL2NvbXBvbmVudHMvdWJzLW1haW4tcGFnZS9EOlxcU29mdFNlcnZlX0FjYWRlbXlcXEdyZWVuQ2l0eVxcZ2gtcGFnZXNcXEdyZWVuQ2l0eUNsaWVudC9zcmNcXGFwcFxcbWFpblxcY29tcG9uZW50XFx1YnNcXGNvbXBvbmVudHNcXHVicy1tYWluLXBhZ2VcXHVicy1tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vY29tcG9uZW50L3Vicy9jb21wb25lbnRzL3Vicy1tYWluLXBhZ2UvdWJzLW1haW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURPQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSkY7O0FET0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDSkY7O0FET0E7RUE5QkUsWUErQjBCO0VBOUIxQixZQThCZ0M7RUFFaEMsZUFBQTtFQUNBLCtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0pGOztBRGVBO0VBQ0UsU0FBQTtBQ1pGOztBRGVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNaRjs7QURlQTtFQUNFLGFBQUE7QUNaRjs7QURlQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDWkY7O0FEZUE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUNaRjs7QURlQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7QUNaRjs7QURlQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtBQ1pGOztBRGVBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNaRjs7QURlQTtFQUNFLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUNaRjs7QURlQTtFQUNFLGtCQUFBO0FDWkY7O0FEZUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ1pGOztBRGVBO0VBQ0UsaUJBQUE7QUNaRjs7QURlQTtFQXhIRSxhQXlIMEI7RUF4SDFCLFlBd0hpQztFQUVqQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDRCQUFBO0FDWkY7O0FEZUE7RUFwSUUsYUFxSTBCO0VBcEkxQixXQW9JaUM7RUFFakMsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ1pGOztBRGVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNaRjs7QURlQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDWkY7O0FEZUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNaRjs7QURlQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNaRjs7QURlQTtFQS9LRSxhQWdMMEI7RUEvSzFCLFlBK0tpQztFQUVqQyxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDWkY7O0FEZUE7RUF6TEUsWUEwTDBCO0VBekwxQixXQXlMZ0M7RUFFaEMsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNaRjs7QURlQTtFQXRNRSxXQXVNMEI7RUF0TTFCLFdBc00rQjtFQUUvQixZQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDWkY7O0FEZUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ1pGOztBRGVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDWkY7O0FEZUE7RUFDRSxpQkFBQTtBQ1pGOztBRGVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ1pGOztBRGVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNaRjs7QURlQTtFQUNFLHdCQUFBO0FDWkY7O0FEZUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxpQkFBQTtFQ1pGOztFRGVBO0lBOVBBLGFBK1A0QjtJQTlQNUIsWUE4UG1DO0lBRWpDLDRCQUFBO0VDWkY7O0VEZUE7SUFwUUEsYUFxUTRCO0lBcFE1QixZQW9RbUM7SUFFakMsU0FBQTtJQUNBLFVBQUE7RUNaRjs7RURlQTtJQUNFLGdCQUFBO0VDWkY7O0VEZUE7SUFDRSxzQkFBQTtFQ1pGO0FBQ0Y7O0FEZUE7RUFFSTtJQUNFLGNBQUE7SUFDQSxjQUFBO0VDZEo7RURpQkU7SUFDRSxjQUFBO0lBQ0EsV0FBQTtFQ2ZKO0FBQ0Y7O0FEbUJBO0VBQ0U7SUFDRSxnQkFBQTtFQ2pCRjs7RURvQkE7SUF2U0EsYUF3UzRCO0lBdlM1QixZQXVTbUM7SUFFakMsNEJBQUE7RUNqQkY7O0VEb0JBO0lBN1NBLGFBOFM0QjtJQTdTNUIsWUE2U21DO0lBRWpDLFNBQUE7SUFDQSxVQUFBO0VDakJGOztFRG9CQTtJQUNFLGdCQUFBO0VDakJGOztFRG9CQTtJQUNFLHNCQUFBO0VDakJGOztFRG9CQTtJQUNFLGlCQUFBO0VDakJGO0FBQ0Y7O0FEb0JBO0VBRUk7SUFDRSxpQkFBQTtFQ25CSjtFRHNCRTtJQUNFLFVBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUNwQko7RUR1QkU7SUFDRSxnQkFBQTtFQ3JCSjtFRHdCRTtJQUNFLGFBQUE7SUFDQSxpQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUN0Qko7RUR3Qkk7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUN0Qk47RUR3Qk07SUFDRSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VDdEJSO0VEd0JRO0lBQ0Usa0JBQUE7RUN0QlY7RUQyQkk7SUFDRSxjQUFBO0VDekJOO0VENkJFO0lBQ0UsZ0JBQUE7RUMzQko7RUQ4QkU7SUFDRSxpQkFBQTtFQzVCSjtFRGdDSTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VDOUJOO0VEZ0NNO0lBQ0UsVUFBQTtFQzlCUjtFRGdDUTtJQUNFLGtCQUFBO0VDOUJWO0VEaUNRO0lBQ0UsbUJBQUE7RUMvQlY7RURtQ1U7SUFDRSxtQkFBQTtFQ2pDWjtFRHNDTTtJQUNFLGNBQUE7RUNwQ1I7RUR3Q0k7SUFDRSxzQkFBQTtFQ3RDTjtFRHdDTTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSx1QkFBQTtFQ3RDUjtFRHdDUTtJQUNFLGtCQUFBO0VDdENWO0VEeUNRO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VDdkNWO0VENkNFO0lBQ0UsYUFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUMzQ0o7RUQ2Q0k7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUMzQ047RUQ2Q007SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VDM0NSO0VENkNRO0lBQ0UsV0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7RUMzQ1Y7RUQ4Q1E7SUFDRSxrQkFBQTtFQzVDVjtFRDhDVTtJQUNFLG1CQUFBO0VDNUNaO0VEa0RJO0lBQ0UsY0FBQTtFQ2hETjtFRG9ERTtJQWpkRixhQWtkOEI7SUFqZDlCLFlBaWRxQztJQUVqQyw0QkFBQTtFQ2xESjtFRHFERTtJQXZkRixhQXdkOEI7SUF2ZDlCLFlBdWRxQztJQUVqQyxTQUFBO0lBQ0EsVUFBQTtFQ25ESjtFRHNERTtJQUNFLGdCQUFBO0VDcERKO0VEdURFO0lBQ0Usc0JBQUE7RUNyREo7RUR3REU7SUFDRSxVQUFBO0VDdERKO0FBQ0Y7O0FEeURFO0VBRUk7SUFDRSxnQkFBQTtFQ3hETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnQvdWJzL2NvbXBvbmVudHMvdWJzLW1haW4tcGFnZS91YnMtbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGhlaWdodC1hbmQtd2lkdGgoJGhlaWdodCwgJHdpZHRoKSB7XHJcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gIHdpZHRoOiAkd2lkdGg7XHJcbn1cclxuXHJcbi51YnNIb21lcGFnZSB7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBtYXgtd2lkdGg6IDE5MjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgbWFyZ2luOiAyNXB4IGF1dG87XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIEBpbmNsdWRlIGhlaWdodC1hbmQtd2lkdGgoNDRweCwgMjAwcHgpO1xyXG5cclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XHJcbiAgY29sb3I6IHZhcigtLXVicy10ZXJ0aWFyeS1kYXJrLWdyZXkpO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi8vIC5idG4tdWJzIHtcclxuLy8gICBAaW5jbHVkZSBoZWlnaHQtYW5kLXdpZHRoKDQ0cHgsIDIwMHB4KTtcclxuLy8gICBmb250LXNpemU6IDE4cHg7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XHJcbi8vICAgY29sb3I6IHZhcigtLXVicy10ZXJ0aWFyeS1kYXJrLWdyZXkpO1xyXG4vLyAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbi8vIH1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnByaWNlLWhlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGhlaWdodDogNTU5cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItbGVmdCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1heC13aWR0aDogNTElO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi5oZWFkZXItcmlnaHQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNDklO1xyXG59XHJcblxyXG4udWJzLWltYWdlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdXRsaW5lOiAwO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMTBweCAwO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4udWJzLXBvbHlnb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMTBweCBhdXRvIDY1cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRlciB7XHJcbiAgbWFyZ2luOiA4NXB4IGF1dG8gMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1heC13aWR0aDogNjY1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnVsIGxpIHtcclxuICBtYXJnaW46IDhweCAyNXB4IDhweCA1cHg7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XHJcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGlzdC1zdHlsZS1wb3NpdGlvbjogb3V0c2lkZTtcclxufVxyXG5cclxudWwge1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuOjptYXJrZXIge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5ib2xkIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI3ByaWNlLWZyYW1lIHtcclxuICBAaW5jbHVkZSBoZWlnaHQtYW5kLXdpZHRoKDI5MXB4LCAxODVweCk7XHJcblxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWcvdWJzL2ZpcnN0X3JlY3RhbmdsZS5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE4NHB4IDI4MnB4O1xyXG59XHJcblxyXG4udWJzLXJlY3RhbmdsZSB7XHJcbiAgQGluY2x1ZGUgaGVpZ2h0LWFuZC13aWR0aCgyMzBweCwgNzlweCk7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwcHg7XHJcbiAgbGVmdDogNTVweDtcclxufVxyXG5cclxuLmhlYWRlci1wcmljZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiAyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuICBhbGlnbi1zZWxmOiBzdGFydDtcclxuICBtYXJnaW46IDMwJSAwIDEwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXByaWNlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG4gIG1hcmdpbjogNTAlIDI1cHggMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmJveENhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1heC13aWR0aDogMTQ0MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbiNzdGVwLW9yZGVyIHtcclxuICBAaW5jbHVkZSBoZWlnaHQtYW5kLXdpZHRoKDIwM3B4LCAxMzNweCk7XHJcblxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4OiAxIDAgMjUlO1xyXG4gIG1hcmdpbjogNTBweDtcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgQGluY2x1ZGUgaGVpZ2h0LWFuZC13aWR0aCgzMHB4LCAzMHB4KTtcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVicy10ZXJ0aWFyeS1kYXJrLWdyZXkpO1xyXG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS13aGl0ZSk7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgQGluY2x1ZGUgaGVpZ2h0LWFuZC13aWR0aCgycHgsIDcycHgpO1xyXG5cclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWJzLXRlcnRpYXJ5LWxpZ2h0LWdyZXkpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1NXB4O1xyXG4gIHRvcDogNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyLXN0ZXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XHJcbiAgbWFyZ2luOiAyNSUgMTBweCAxMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1zdGVwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG4gIG1hcmdpbjogMTAwcHggMTBweCAxMjBweCAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHdpZHRoOiAxNjBweDtcclxufVxyXG5cclxuI2hvdy13b3JrcyB7XHJcbiAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbn1cclxuXHJcbiNoZWFkZXItaG93LXdvcmtzIHtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLnRpbWUtaG93IHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAxcHggMjVweCAxcHggYXV0bztcclxufVxyXG5cclxuI2hvdy13b3Jrcy1jb250ZW50IHtcclxuICBtYXJnaW46IDE1cHggMTBweCAxNXB4IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc3MHB4KSB7XHJcbiAgI3N0ZXAtb3JkZXIge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgI3ByaWNlLWZyYW1lIHtcclxuICAgIEBpbmNsdWRlIGhlaWdodC1hbmQtd2lkdGgoMjI4cHgsIDI1MHB4KTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI1MHB4IDIyOHB4O1xyXG4gIH1cclxuXHJcbiAgLnVicy1yZWN0YW5nbGUge1xyXG4gICAgQGluY2x1ZGUgaGVpZ2h0LWFuZC13aWR0aCgxODlweCwgMTA4cHgpO1xyXG5cclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDc1cHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLXByaWNlIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1wcmljZSB7XHJcbiAgICBtYXJnaW46IDgwcHggNDBweCAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpIHtcclxuICAuaG93LXByZXBhcmluZyB7XHJcbiAgICAuaGVhZGVyLWxlZnQge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWF4LXdpZHRoOiA1MSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlci1yaWdodCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gIC51YnNIb21lcGFnZSB7XHJcbiAgICBtYXJnaW46IGF1dG8gMTIlO1xyXG4gIH1cclxuXHJcbiAgI3ByaWNlLWZyYW1lIHtcclxuICAgIEBpbmNsdWRlIGhlaWdodC1hbmQtd2lkdGgoMTc4cHgsIDMxMHB4KTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMxMHB4IDE4N3B4O1xyXG4gIH1cclxuXHJcbiAgLnVicy1yZWN0YW5nbGUge1xyXG4gICAgQGluY2x1ZGUgaGVpZ2h0LWFuZC13aWR0aCgxNTBweCwgMTYzcHgpO1xyXG5cclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDc1cHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLXByaWNlIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1wcmljZSB7XHJcbiAgICBtYXJnaW46IDcwcHggMjVweCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtc3RlcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ0NXB4KSB7XHJcbiAgLnVic0hvbWVwYWdlIHtcclxuICAgIC51YnMtcG9seWdvbiB7XHJcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWN0aW9uLWhlYWRlciB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgLmhlYWRlci1yaWdodCB7XHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG5cclxuICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5oZWFkZXItbGVmdCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLXN0ZXAge1xyXG4gICAgICBtYXJnaW4tdG9wOiA0NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LXN0ZXAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgLmhvdy1wcmVwYXJpbmcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAuaGVhZGVyLXJpZ2h0IHtcclxuICAgICAgICAgIHdpZHRoOiA4OSU7XHJcblxyXG4gICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlci1sZWZ0IHtcclxuICAgICAgICAgIG1heC13aWR0aDogNzAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmJveCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgI3N0ZXAtb3JkZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDg5JTtcclxuICAgICAgICAgIG1hcmdpbjogMjBweCAyMHB4IDA7XHJcbiAgICAgICAgICBmbGV4OiBub25lO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgLmhlYWRlci1zdGVwIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jb250ZW50LXN0ZXAge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI2hvdy13b3JrcyB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgLmhlYWRlci1yaWdodCB7XHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG5cclxuICAgICAgICAjbWFpbi1jb250ZW50IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgIC50aW1lLWhvdyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNoZWFkZXItaG93LXdvcmtzIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgI2hvdy13b3Jrcy1jb250ZW50IHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaGVhZGVyLWxlZnQge1xyXG4gICAgICAgIG1heC13aWR0aDogODUlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI3ByaWNlLWZyYW1lIHtcclxuICAgICAgQGluY2x1ZGUgaGVpZ2h0LWFuZC13aWR0aCgxNzhweCwgMzEwcHgpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZC1zaXplOiAzMTBweCAxODdweDtcclxuICAgIH1cclxuXHJcbiAgICAudWJzLXJlY3RhbmdsZSB7XHJcbiAgICAgIEBpbmNsdWRlIGhlaWdodC1hbmQtd2lkdGgoMTUwcHgsIDE2M3B4KTtcclxuXHJcbiAgICAgIHRvcDogMTVweDtcclxuICAgICAgbGVmdDogNzVweDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLXByaWNlIHtcclxuICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC1wcmljZSB7XHJcbiAgICAgIG1hcmdpbjogNzBweCAyNXB4IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDVweCkgYW5kIChtYXgtaGVpZ2h0OiA4NTBweCkge1xyXG4gICAgLnVic0hvbWVwYWdlIHtcclxuICAgICAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi51YnNIb21lcGFnZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1heC13aWR0aDogMTkyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5oMSB7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG5oMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW46IDI1cHggYXV0bztcbn1cblxuLmJ1dHRvbiB7XG4gIGhlaWdodDogNDRweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xuICBjb2xvcjogdmFyKC0tdWJzLXRlcnRpYXJ5LWRhcmstZ3JleSk7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi5wcmljZS1oZWFkZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5oZWFkZXIge1xuICBoZWlnaHQ6IDU1OXB4O1xufVxuXG4uaGVhZGVyLWxlZnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogNTElO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uaGVhZGVyLXJpZ2h0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDklO1xufVxuXG4udWJzLWltYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG91dGxpbmU6IDA7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIwcHggYXV0byAxMHB4IDA7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udWJzLXBvbHlnb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxMHB4IGF1dG8gNjVweDtcbn1cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgbWFyZ2luOiA4NXB4IGF1dG8gMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1heC13aWR0aDogNjY1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxudWwgbGkge1xuICBtYXJnaW46IDhweCAyNXB4IDhweCA1cHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbGlzdC1zdHlsZS1wb3NpdGlvbjogb3V0c2lkZTtcbn1cblxudWwge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbjo6bWFya2VyIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNwcmljZS1mcmFtZSB7XG4gIGhlaWdodDogMjkxcHg7XG4gIHdpZHRoOiAxODVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltZy91YnMvZmlyc3RfcmVjdGFuZ2xlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxODRweCAyODJweDtcbn1cblxuLnVicy1yZWN0YW5nbGUge1xuICBoZWlnaHQ6IDIzMHB4O1xuICB3aWR0aDogNzlweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDU1cHg7XG59XG5cbi5oZWFkZXItcHJpY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBtYXJnaW46IDMwJSAwIDEwcHg7XG59XG5cbi5jb250ZW50LXByaWNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBtYXJnaW46IDUwJSAyNXB4IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uYm94Q2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbiNzdGVwLW9yZGVyIHtcbiAgaGVpZ2h0OiAyMDNweDtcbiAgd2lkdGg6IDEzM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleDogMSAwIDI1JTtcbiAgbWFyZ2luOiA1MHB4O1xufVxuXG4uY2lyY2xlIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWJzLXRlcnRpYXJ5LWRhcmstZ3JleSk7XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS13aGl0ZSk7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaHIge1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDcycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWJzLXRlcnRpYXJ5LWxpZ2h0LWdyZXkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDU1cHg7XG4gIHRvcDogNXB4O1xufVxuXG4uaGVhZGVyLXN0ZXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgbWFyZ2luOiAyNSUgMTBweCAxMHB4O1xufVxuXG4uY29udGVudC1zdGVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgbWFyZ2luOiAxMDBweCAxMHB4IDEyMHB4IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICB3aWR0aDogMTYwcHg7XG59XG5cbiNob3ctd29ya3Mge1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuI2hlYWRlci1ob3ctd29ya3Mge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLnRpbWUtaG93IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAxcHggMjVweCAxcHggYXV0bztcbn1cblxuI2hvdy13b3Jrcy1jb250ZW50IHtcbiAgbWFyZ2luOiAxNXB4IDEwcHggMTVweCAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NzBweCkge1xuICAjc3RlcC1vcmRlciB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgfVxuXG4gICNwcmljZS1mcmFtZSB7XG4gICAgaGVpZ2h0OiAyMjhweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyNTBweCAyMjhweDtcbiAgfVxuXG4gIC51YnMtcmVjdGFuZ2xlIHtcbiAgICBoZWlnaHQ6IDE4OXB4O1xuICAgIHdpZHRoOiAxMDhweDtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogNzVweDtcbiAgfVxuXG4gIC5oZWFkZXItcHJpY2Uge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cblxuICAuY29udGVudC1wcmljZSB7XG4gICAgbWFyZ2luOiA4MHB4IDQwcHggMTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpIHtcbiAgLmhvdy1wcmVwYXJpbmcgLmhlYWRlci1sZWZ0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXgtd2lkdGg6IDUxJTtcbiAgfVxuICAuaG93LXByZXBhcmluZyAuaGVhZGVyLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogYXV0bztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC51YnNIb21lcGFnZSB7XG4gICAgbWFyZ2luOiBhdXRvIDEyJTtcbiAgfVxuXG4gICNwcmljZS1mcmFtZSB7XG4gICAgaGVpZ2h0OiAxNzhweDtcbiAgICB3aWR0aDogMzEwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiAzMTBweCAxODdweDtcbiAgfVxuXG4gIC51YnMtcmVjdGFuZ2xlIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxNjNweDtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogNzVweDtcbiAgfVxuXG4gIC5oZWFkZXItcHJpY2Uge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cblxuICAuY29udGVudC1wcmljZSB7XG4gICAgbWFyZ2luOiA3MHB4IDI1cHggMTBweDtcbiAgfVxuXG4gIC5jb250ZW50LXN0ZXAge1xuICAgIG1hcmdpbi10b3A6IDExMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDVweCkge1xuICAudWJzSG9tZXBhZ2UgLnVicy1wb2x5Z29uIHtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxuICAudWJzSG9tZXBhZ2UgLnNlY3Rpb24taGVhZGVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC51YnNIb21lcGFnZSBoMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICAudWJzSG9tZXBhZ2UgaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnVic0hvbWVwYWdlIGhlYWRlciAuaGVhZGVyLXJpZ2h0IHtcbiAgICB3aWR0aDogODUlO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cbiAgLnVic0hvbWVwYWdlIGhlYWRlciAuaGVhZGVyLXJpZ2h0IC5tYWluLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAudWJzSG9tZXBhZ2UgaGVhZGVyIC5oZWFkZXItcmlnaHQgLm1haW4tY29udGVudCBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC51YnNIb21lcGFnZSBoZWFkZXIgLmhlYWRlci1sZWZ0IHtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgfVxuICAudWJzSG9tZXBhZ2UgLmhlYWRlci1zdGVwIHtcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xuICB9XG4gIC51YnNIb21lcGFnZSAuY29udGVudC1zdGVwIHtcbiAgICBtYXJnaW4tdG9wOiAxMTBweDtcbiAgfVxuICAudWJzSG9tZXBhZ2Ugc2VjdGlvbiAuaG93LXByZXBhcmluZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnVic0hvbWVwYWdlIHNlY3Rpb24gLmhvdy1wcmVwYXJpbmcgLmhlYWRlci1yaWdodCB7XG4gICAgd2lkdGg6IDg5JTtcbiAgfVxuICAudWJzSG9tZXBhZ2Ugc2VjdGlvbiAuaG93LXByZXBhcmluZyAuaGVhZGVyLXJpZ2h0IGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnVic0hvbWVwYWdlIHNlY3Rpb24gLmhvdy1wcmVwYXJpbmcgLmhlYWRlci1yaWdodCB1bCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxuICAudWJzSG9tZXBhZ2Ugc2VjdGlvbiAuaG93LXByZXBhcmluZyAuaGVhZGVyLXJpZ2h0IC5tYWluLWNvbnRlbnQgdWwge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cbiAgLnVic0hvbWVwYWdlIHNlY3Rpb24gLmhvdy1wcmVwYXJpbmcgLmhlYWRlci1sZWZ0IHtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgfVxuICAudWJzSG9tZXBhZ2Ugc2VjdGlvbiAuYm94IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC51YnNIb21lcGFnZSBzZWN0aW9uIC5ib3ggI3N0ZXAtb3JkZXIge1xuICAgIHdpZHRoOiA4OSU7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMDtcbiAgICBmbGV4OiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC51YnNIb21lcGFnZSBzZWN0aW9uIC5ib3ggI3N0ZXAtb3JkZXIgLmhlYWRlci1zdGVwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnVic0hvbWVwYWdlIHNlY3Rpb24gLmJveCAjc3RlcC1vcmRlciAuY29udGVudC1zdGVwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLnVic0hvbWVwYWdlICNob3ctd29ya3Mge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnVic0hvbWVwYWdlICNob3ctd29ya3MgLmhlYWRlci1yaWdodCB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB9XG4gIC51YnNIb21lcGFnZSAjaG93LXdvcmtzIC5oZWFkZXItcmlnaHQgI21haW4tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLnVic0hvbWVwYWdlICNob3ctd29ya3MgLmhlYWRlci1yaWdodCAjbWFpbi1jb250ZW50IC50aW1lLWhvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLnVic0hvbWVwYWdlICNob3ctd29ya3MgLmhlYWRlci1yaWdodCAjbWFpbi1jb250ZW50ICNoZWFkZXItaG93LXdvcmtzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnVic0hvbWVwYWdlICNob3ctd29ya3MgLmhlYWRlci1yaWdodCAjbWFpbi1jb250ZW50ICNoZWFkZXItaG93LXdvcmtzICNob3ctd29ya3MtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxuICAudWJzSG9tZXBhZ2UgI2hvdy13b3JrcyAuaGVhZGVyLWxlZnQge1xuICAgIG1heC13aWR0aDogODUlO1xuICB9XG4gIC51YnNIb21lcGFnZSAjcHJpY2UtZnJhbWUge1xuICAgIGhlaWdodDogMTc4cHg7XG4gICAgd2lkdGg6IDMxMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzEwcHggMTg3cHg7XG4gIH1cbiAgLnVic0hvbWVwYWdlIC51YnMtcmVjdGFuZ2xlIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxNjNweDtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogNzVweDtcbiAgfVxuICAudWJzSG9tZXBhZ2UgLmhlYWRlci1wcmljZSB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgfVxuICAudWJzSG9tZXBhZ2UgLmNvbnRlbnQtcHJpY2Uge1xuICAgIG1hcmdpbjogNzBweCAyNXB4IDEwcHg7XG4gIH1cbiAgLnVic0hvbWVwYWdlIC5idXR0b24ge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ0NXB4KSBhbmQgKG1heC13aWR0aDogNDQ1cHgpIGFuZCAobWF4LWhlaWdodDogODUwcHgpIHtcbiAgLnVic0hvbWVwYWdlIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UbsMainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ubs-main-page',
          templateUrl: './ubs-main-page.component.html',
          styleUrls: ['./ubs-main-page.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/component/ubs/components/ubs-order-details/ubs-order-details.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/main/component/ubs/components/ubs-order-details/ubs-order-details.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: UBSOrderDetailsComponent */

  /***/
  function srcAppMainComponentUbsComponentsUbsOrderDetailsUbsOrderDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UBSOrderDetailsComponent", function () {
      return UBSOrderDetailsComponent;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_components_form_base_form_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/components/form-base/form-base.component */
    "./src/app/main/component/shared/components/form-base/form-base.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _certificate_status_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../certificate-status.enum */
    "./src/app/main/component/ubs/certificate-status.enum.ts");
    /* harmony import */


    var _ubs_order_location_popup_ubs_order_location_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ubs-order-location-popup/ubs-order-location-popup.component */
    "./src/app/main/component/ubs/components/ubs-order-details/ubs-order-location-popup/ubs-order-location-popup.component.ts");
    /* harmony import */


    var _services_ubs_order_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/ubs-order-form.service */
    "./src/app/main/component/ubs/services/ubs-order-form.service.ts");
    /* harmony import */


    var _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @global-service/localstorage/local-storage.service */
    "./src/app/main/service/localstorage/local-storage.service.ts");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/order.service */
    "./src/app/main/component/ubs/services/order.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var angular_imask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! angular-imask */
    "./node_modules/angular-imask/__ivy_ngcc__/fesm2015/angular-imask.js");
    /* harmony import */


    var _shared_spinner_ubs_spinner_ubs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../../../shared/spinner-ubs/spinner-ubs.component */
    "./src/app/shared/spinner-ubs/spinner-ubs.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_localized_currency_pipe_localized_currency_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../../../shared/localized-currency-pipe/localized-currency.pipe */
    "./src/app/shared/localized-currency-pipe/localized-currency.pipe.ts");
    /* harmony import */


    var _shared_sort_list_by_lang_filter_list_by_lang_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../../../shared/sort-list-by-lang/filter-list-by-lang.pipe */
    "./src/app/shared/sort-list-by-lang/filter-list-by-lang.pipe.ts");
    /* harmony import */


    var _shared_volume_pipe_volume_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../../../../shared/volume-pipe/volume.pipe */
    "./src/app/shared/volume-pipe/volume.pipe.ts");

    function UBSOrderDetailsComponent_div_1_div_13_option_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var location_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", location_r23.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", location_r23.name, " ");
      }
    }

    function UBSOrderDetailsComponent_div_1_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "select", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UBSOrderDetailsComponent_div_1_div_13_Template_select_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r24.selectedLocationId = $event;
        })("ngModelChange", function UBSOrderDetailsComponent_div_1_div_13_Template_select_ngModelChange_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r26.saveLocation(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, UBSOrderDetailsComponent_div_1_div_13_option_2_Template, 2, 2, "option", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "filterByLang");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.selectedLocationId);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, ctx_r3.locations));
      }
    }

    function UBSOrderDetailsComponent_div_1_p_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "order-details.order-content"));
      }
    }

    var _c0 = function _c0(a0) {
      return {
        minAmountOfBigBags: a0
      };
    };

    function UBSOrderDetailsComponent_div_1_p_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, "order-details.min-big-bags", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ctx_r5.minAmountOfBigBags)), " ");
      }
    }

    var _c1 = function _c1(a0) {
      return {
        mask: a0
      };
    };

    function UBSOrderDetailsComponent_div_1_li_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "volume");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "localizedCurrency");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UBSOrderDetailsComponent_div_1_li_35_Template_input_change_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);

          var bag_r27 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r28.onQuantityChange(bag_r27.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "localizedCurrency");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bag_r27 = ctx.$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](bag_r27.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 8, bag_r27.capacity));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 12, bag_r27.price)));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("formControlName", "quantity", bag_r27.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "quantity" + bag_r27.id)("unmask", false)("imask", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](18, _c1, ctx_r6.servicesMask));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 14, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 16, bag_r27.quantity * bag_r27.price)), "");
      }
    }

    function UBSOrderDetailsComponent_div_1_p_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "strong", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "localizedCurrency");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, "order-details.certificate"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("-", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 6, ctx_r7.showCertificateUsed)), "");
      }
    }

    function UBSOrderDetailsComponent_div_1_p_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "strong", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "localizedCurrency");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, "order-details.bonuses"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("-", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 6, ctx_r8.pointsUsed)), "");
      }
    }

    function UBSOrderDetailsComponent_div_1_div_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "order-details.min-sum"));
      }
    }

    function UBSOrderDetailsComponent_div_1_div_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 1, "order-details.min-big-bags", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ctx_r10.minAmountOfBigBags)));
      }
    }

    function UBSOrderDetailsComponent_div_1_div_65_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UBSOrderDetailsComponent_div_1_div_65_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);

          var i_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r35.certificateSubmit(i_r31);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        var i_r31 = ctx_r38.index;
        var certificate_r30 = ctx_r38.$implicit;

        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r32.formArrayCertificates["controls"][i_r31].invalid || ctx_r32.formArrayCertificates["controls"][i_r31].pristine || !certificate_r30.value.length || ctx_r32.showTotal < ctx_r32.minOrderValue);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "order-details.activate"), " ");
      }
    }

    function UBSOrderDetailsComponent_div_1_div_65_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UBSOrderDetailsComponent_div_1_div_65_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r41);

          var i_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r39.deleteCertificate(i_r31);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r33.cancelCertBtn);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "order-details.cancel"), " ");
      }
    }

    function UBSOrderDetailsComponent_div_1_div_65_small_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "order-details.failed-certificate"), " ");
      }
    }

    function UBSOrderDetailsComponent_div_1_div_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, UBSOrderDetailsComponent_div_1_div_65_button_3_Template, 3, 4, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, UBSOrderDetailsComponent_div_1_div_65_button_4_Template, 3, 4, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, UBSOrderDetailsComponent_div_1_div_65_small_6_Template, 3, 3, "small", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var certificate_r30 = ctx.$implicit;
        var i_r31 = ctx.index;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("unmask", false)("imask", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c1, ctx_r11.certificateMask))("formControlName", i_r31)("readonly", ctx_r11.certStatuses[i_r31]);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.showActivateButton(i_r31));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.showCancelButton(i_r31));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", certificate_r30.invalid && certificate_r30.touched && ctx_r11.certificateError);
      }
    }

    function UBSOrderDetailsComponent_div_1_small_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "order-details.failed-certificate"), " ");
      }
    }

    var _c2 = function _c2(a0) {
      return {
        certDate: a0
      };
    };

    function UBSOrderDetailsComponent_div_1_small_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, "order-details.already-used", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c2, ctx_r13.certDate)), " ");
      }
    }

    function UBSOrderDetailsComponent_div_1_small_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, "order-details.expired", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c2, ctx_r14.certDate)), " ");
      }
    }

    var _c3 = function _c3(a0, a1) {
      return {
        certificateSum: a0,
        certDate: a1
      };
    };

    function UBSOrderDetailsComponent_div_1_small_70_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, "order-details.activated", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c3, ctx_r15.certificateSum, ctx_r15.certDate)), " ");
      }
    }

    function UBSOrderDetailsComponent_div_1_small_71_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, "order-details.activated", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c3, ctx_r16.certificateSum, ctx_r16.certDate)), " ");
      }
    }

    function UBSOrderDetailsComponent_div_1_button_72_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UBSOrderDetailsComponent_div_1_button_72_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r42.addNewCertificate();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r17.disableAddCertificate() || ctx_r17.cancelCertBtn || ctx_r17.certificateError || ctx_r17.failedCert);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "order-details.add-certificate"), " ");
      }
    }

    function UBSOrderDetailsComponent_div_1_div_86_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UBSOrderDetailsComponent_div_1_div_86_Template_input_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r44.resetPoints();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function UBSOrderDetailsComponent_div_1_div_86_Template_span_keyup_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          ctx_r46.selectPointsRadioBtn($event, "no");
          return ctx_r46.resetPoints();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UBSOrderDetailsComponent_div_1_div_86_Template_input_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r47.calculatePoints();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function UBSOrderDetailsComponent_div_1_div_86_Template_span_keyup_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          ctx_r48.selectPointsRadioBtn($event, "yes");
          return ctx_r48.calculatePoints();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, "order-details.no"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 4, "order-details.yes"), " ");
      }
    }

    function UBSOrderDetailsComponent_div_1_div_123_Template(rf, ctx) {
      if (rf & 1) {
        var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UBSOrderDetailsComponent_div_1_div_123_Template_input_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r51.changeShopRadioBtn();
        })("ngModelChange", function UBSOrderDetailsComponent_div_1_div_123_Template_input_ngModelChange_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52);

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r53.ecoStoreValidation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UBSOrderDetailsComponent_div_1_div_123_Template_span_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52);

          var i_r50 = ctx.index;

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r54.deleteOrder(i_r50);
        })("keyup", function UBSOrderDetailsComponent_div_1_div_123_Template_span_keyup_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52);

          var i_r50 = ctx.index;

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r55.removeOrder($event, i_r50);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r50 = ctx.index;

        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("inactive", ctx_r19.orderDetailsForm.controls.shop.value === "no");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 10, "order-details.enter-order-num"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "index", i_r50, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("tabindex", ctx_r19.isDisabled());

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", i_r50)("unmask", false)("imask", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c1, ctx_r19.ecoStoreMask))("pattern", ctx_r19.additionalOrdersPattern);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("tabindex", ctx_r19.isDisabled());
      }
    }

    function UBSOrderDetailsComponent_div_1_small_125_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "order-details.order-error"), " ");
      }
    }

    function UBSOrderDetailsComponent_div_1_small_137_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "order-details.comment-error"), " ");
      }
    }

    var _c4 = function _c4(a0) {
      return {
        currentLocation: a0
      };
    };

    function UBSOrderDetailsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UBSOrderDetailsComponent_div_1_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r56.changeLocation = !ctx_r56.changeLocation;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, UBSOrderDetailsComponent_div_1_div_13_Template, 4, 4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, UBSOrderDetailsComponent_div_1_p_14_Template, 3, 3, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, UBSOrderDetailsComponent_div_1_p_15_Template, 3, 6, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "form", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UBSOrderDetailsComponent_div_1_Template_form_change_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r58.changeOrderDetails();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ul", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, UBSOrderDetailsComponent_div_1_li_35_Template, 16, 20, "li", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](47, "localizedCurrency");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](48, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, UBSOrderDetailsComponent_div_1_p_49_Template, 9, 8, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, UBSOrderDetailsComponent_div_1_p_50_Template, 9, 8, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](58, "localizedCurrency");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](59, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, UBSOrderDetailsComponent_div_1_div_60_Template, 4, 3, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, UBSOrderDetailsComponent_div_1_div_61_Template, 4, 6, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](64, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, UBSOrderDetailsComponent_div_1_div_65_Template, 7, 9, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, UBSOrderDetailsComponent_div_1_small_67_Template, 3, 3, "small", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, UBSOrderDetailsComponent_div_1_small_68_Template, 3, 6, "small", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, UBSOrderDetailsComponent_div_1_small_69_Template, 3, 6, "small", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, UBSOrderDetailsComponent_div_1_small_70_Template, 3, 7, "small", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, UBSOrderDetailsComponent_div_1_small_71_Template, 3, 7, "small", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, UBSOrderDetailsComponent_div_1_button_72_Template, 3, 4, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](76, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](79, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](80, "localizedCurrency");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](81, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](85, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](86, UBSOrderDetailsComponent_div_1_div_86_Template, 11, 6, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "small", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](91, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](92, "localizedCurrency");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](93, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "small", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](97, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](98, "localizedCurrency");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](99, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](103, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](106, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "label", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](110, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UBSOrderDetailsComponent_div_1_Template_input_click_111_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r59.clearOrderValues();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "span", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function UBSOrderDetailsComponent_div_1_Template_span_keyup_112_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r60.selectShopRadioBtn($event, "no");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "label", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](115, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UBSOrderDetailsComponent_div_1_Template_input_click_116_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57);

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r61.renderer.selectRootElement("#index" + (ctx_r61.additionalOrders.controls.length - 1)).focus();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "span", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function UBSOrderDetailsComponent_div_1_Template_span_keyup_117_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57);

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r62.selectShopRadioBtn($event, "yes");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](122, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](123, UBSOrderDetailsComponent_div_1_div_123_Template, 7, 14, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](125, UBSOrderDetailsComponent_div_1_small_125_Template, 3, 3, "small", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UBSOrderDetailsComponent_div_1_Template_button_click_126_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57);

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r63.addOrder();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](128, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](133, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "textarea", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](135, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](137, UBSOrderDetailsComponent_div_1_small_137_Template, 3, 3, "small", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 57, "order-details.order-title"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 59, "order-details.current-location", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](126, _c4, ctx_r0.currentLocation)));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 62, "order-details.choose-location"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.changeLocation);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.selectedLocationId === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.selectedLocationId === 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.orderDetailsForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 64, "order-details.service"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 66, "order-details.volume"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 68, "order-details.cost"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 70, "order-details.number-of-packages"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 72, "order-details.sum"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.bags);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("d-none", ctx_r0.showTotal === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 74, "order-details.order-amount"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](47, 76, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](48, 78, ctx_r0.showTotal)));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.displayCert);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.pointsUsed);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 80, "order-details.amount-due"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](58, 82, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](59, 84, ctx_r0.finalSum)));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.displayMinOrderMes);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.displayMinBigBagsMes && ctx_r0.orderDetailsForm.dirty);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](64, 86, "order-details.question-certificate"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.formArrayCertificates.controls);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.certificateError);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.certStatus === "USED" && ctx_r0.failedCert);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.certStatus === "EXPIRED" && ctx_r0.failedCert);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.certSize);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.certStatus === "NEW" || ctx_r0.certStatus === "ACTIVE") && !ctx_r0.certSize);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.addCert && ctx_r0.finalSum > 0 && !ctx_r0.failedCert);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](76, 88, "order-details.bonus-need"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](79, 90, "order-details.bonus-left"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](80, 92, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](81, 94, ctx_r0.defaultPoints)), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](85, 96, "order-details.bonus-how-to-get"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.defaultPoints !== 0 && ctx_r0.showTotal !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("d-none", ctx_r0.pointsUsed === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](91, 98, "order-details.used"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](92, 100, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](93, 102, ctx_r0.pointsUsed)), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("d-none", ctx_r0.pointsUsed === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](97, 104, "order-details.balance"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](98, 106, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](99, 108, ctx_r0.points)), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](103, 110, "order-details.eco-shop"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](106, 112, "order-details.shop-order-question"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](110, 114, "order-details.no"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](115, 116, "order-details.yes"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](122, 118, "order-details.cant-found-order"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.additionalOrders.controls);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.displayOrderBtn && ctx_r0.additionalOrders.touched && ctx_r0.shop.value !== "no");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.additionalOrders.controls.length < 5 && !ctx_r0.displayOrderBtn);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](128, 120, "order-details.additional-orders"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](133, 122, "order-details.coment"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](135, 124, "order-details.any-details"));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pattern", ctx_r0.commentPattern);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.orderComment.invalid);
      }
    }

    function UBSOrderDetailsComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-ubs-spinner", 79);
      }
    }

    var UBSOrderDetailsComponent = /*#__PURE__*/function (_shared_components_fo) {
      _inherits(UBSOrderDetailsComponent, _shared_components_fo);

      var _super9 = _createSuper(UBSOrderDetailsComponent);

      function UBSOrderDetailsComponent(fb, shareFormService, localStorageService, orderService, renderer, router, dialog) {
        var _this10;

        _classCallCheck(this, UBSOrderDetailsComponent);

        _this10 = _super9.call(this, router, dialog, orderService);
        _this10.fb = fb;
        _this10.shareFormService = shareFormService;
        _this10.localStorageService = localStorageService;
        _this10.orderService = orderService;
        _this10.renderer = renderer;
        _this10.certStatuses = [];
        _this10.minOrderValue = 500;
        _this10.showTotal = 0;
        _this10.pointsUsed = 0;
        _this10.certificates = [];
        _this10.certificateSum = 0;
        _this10.total = 0;
        _this10.finalSum = 0;
        _this10.cancelCertBtn = false;
        _this10.displayMinOrderMes = false;
        _this10.displayMinBigBagsMes = false;
        _this10.displayMes = false;
        _this10.displayCert = false;
        _this10.displayShop = false;
        _this10.addCert = false;
        _this10.onSubmit = true;
        _this10.certificateMask = '0000-0000';
        _this10.ecoStoreMask = '0000000000';
        _this10.servicesMask = '000';
        _this10.certificatePattern = /(?!0000)\d{4}-(?!0000)\d{4}/;
        _this10.commentPattern = /^[i\s]{0,255}(.){0,255}[i\s]{0,255}$/;
        _this10.additionalOrdersPattern = /^\d{10}$/;
        _this10.displayOrderBtn = false;
        _this10.certSize = false;
        _this10.showCertificateUsed = 0;
        _this10.certificateLeft = 0;
        _this10.failedCert = false;
        _this10.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        _this10.certificateError = false;
        _this10.isDialogOpen = false;
        _this10.popupConfig = {
          hasBackdrop: true,
          closeOnNavigation: true,
          disableClose: true,
          panelClass: 'popup-dialog-container',
          data: {
            popupTitle: 'confirmation.title',
            popupSubtitle: 'confirmation.subTitle',
            popupConfirm: 'confirmation.cancel',
            popupCancel: 'confirmation.dismiss'
          }
        };
        _this10.isFetching = false;
        _this10.changeLocation = false;

        _this10.initForm();

        return _this10;
      }

      _createClass(UBSOrderDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          var locationId = this.shareFormService.locationId;

          if (locationId) {
            this.currentLanguage = this.localStorageService.getCurrentLanguage();
            this.locations = this.shareFormService.locations;
            this.selectedLocationId = locationId;
            this.saveLocation(false);
          } else {
            this.openLocationDialog();
          }

          localStorage.removeItem('UBSorderData');
          this.orderService.locationSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy)).subscribe(function () {
            _this11.takeOrderData();

            _this11.subscribeToLangChange();

            if (_this11.localStorageService.getUbsOrderData()) {
              _this11.calculateTotal();
            }
          });
        }
      }, {
        key: "saveLocation",
        value: function saveLocation(isCheck) {
          var _this12 = this;

          this.isFetching = true;
          var selectedLocation = {
            locationId: this.selectedLocationId
          };
          this.orderService.addLocation(selectedLocation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function () {
            _this12.setCurrentLocation(_this12.currentLanguage);

            _this12.isFetching = false;
            _this12.changeLocation = false;

            _this12.orderService.setLocationData(_this12.currentLocation);

            _this12.orderService.completedLocation(true);

            _this12.localStorageService.setLocationId(_this12.selectedLocationId);

            if (isCheck) {
              _this12.orderService.setCurrentAddress(JSON.parse(localStorage.getItem('addresses'))[0]);
            }
          });
        }
      }, {
        key: "setCurrentLocation",
        value: function setCurrentLocation(currentLanguage) {
          var _this13 = this;

          this.currentLocation = this.locations.find(function (loc) {
            return loc.id === _this13.selectedLocationId && loc.languageCode === currentLanguage;
          }).name;
        }
      }, {
        key: "getFormValues",
        value: function getFormValues() {
          return this.showTotal > 0;
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.orderDetailsForm = this.fb.group({
            orderComment: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            bonus: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('no'),
            shop: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('no'),
            formArrayCertificates: this.fb.array([new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.certificatePattern)])]),
            additionalOrders: this.fb.array(['']),
            orderSum: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(500)])
          });
        }
      }, {
        key: "openLocationDialog",
        value: function openLocationDialog() {
          var _this14 = this;

          this.isDialogOpen = true;
          var dialogRef = this.dialog.open(_ubs_order_location_popup_ubs_order_location_popup_component__WEBPACK_IMPORTED_MODULE_6__["UbsOrderLocationPopupComponent"], {
            hasBackdrop: true,
            disableClose: true
          });
          dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy)).subscribe(function (res) {
            if (res.data) {
              _this14.locations = res.data;
              _this14.selectedLocationId = res.locationId;

              _this14.setCurrentLocation(res.currentLanguage);
            }

            _this14.isDialogOpen = false;
          });
        }
      }, {
        key: "checkTotalBigBags",
        value: function checkTotalBigBags() {
          var _this15 = this;

          this.bags.forEach(function (bag) {
            if (bag.capacity === 120) {
              var q1 = _this15.orderDetailsForm.controls.quantity1;
              var q2 = _this15.orderDetailsForm.controls.quantity2;
              _this15.totalOfBigBags = +q1.value + +q2.value;
            }
          });
          setTimeout(function () {
            return _this15.checkForBigBagsMessage();
          });
        }
      }, {
        key: "checkForBigBagsMessage",
        value: function checkForBigBagsMessage() {
          this.displayMinBigBagsMes = this.minAmountOfBigBags > this.totalOfBigBags;
        }
      }, {
        key: "subscribeToLangChange",
        value: function subscribeToLangChange() {
          var _this16 = this;

          this.localStorageService.languageSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy)).subscribe(function () {
            _this16.currentLanguage = _this16.localStorageService.getCurrentLanguage();

            _this16.setCurrentLocation(_this16.currentLanguage);

            var inputsQuantity = [];

            _this16.bags.forEach(function (a) {
              inputsQuantity.push(a.quantity === undefined || a.quantity === null ? null : a.quantity);
              a.quantity = null;
            });

            _this16.bags = _this16.orders.bags;

            _this16.filterBags();

            _this16.bags.forEach(function (b) {
              b.quantity = inputsQuantity.shift();
            });

            _this16.calculateTotal();
          });
        }
      }, {
        key: "takeOrderData",
        value: function takeOrderData() {
          var _this17 = this;

          this.isFetching = true;
          this.currentLanguage = this.localStorageService.getCurrentLanguage();
          this.orderService.getOrders().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy)).subscribe(function (orderData) {
            _this17.orders = _this17.shareFormService.orderDetails;
            _this17.minAmountOfBigBags = orderData.minAmountOfBigBags;
            _this17.bags = _this17.orders.bags;
            _this17.points = _this17.orders.points;
            _this17.defaultPoints = _this17.points;
            _this17.certificateLeft = orderData.points;

            _this17.bags.forEach(function (bag) {
              bag.quantity = bag.quantity === undefined ? null : bag.quantity;

              _this17.orderDetailsForm.addControl('quantity' + String(bag.id), new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(999)]));

              var quantity = bag.quantity === null ? '' : +bag.quantity;
              var valueName = 'quantity' + String(bag.id);

              _this17.orderDetailsForm.controls[valueName].setValue(quantity);
            });

            _this17.filterBags();

            _this17.isFetching = false;
          });
        }
      }, {
        key: "filterBags",
        value: function filterBags() {
          var _this18 = this;

          this.bags = this.orders.bags.filter(function (value) {
            return value.code === _this18.currentLanguage;
          }).sort(function (a, b) {
            return b.price - a.price;
          });
        }
      }, {
        key: "changeForm",
        value: function changeForm() {
          this.orderDetailsForm.patchValue({
            orderSum: this.showTotal
          });
        }
      }, {
        key: "changeOrderDetails",
        value: function changeOrderDetails() {
          this.shareFormService.orderDetails.pointsToUse = this.pointsUsed;
          this.shareFormService.orderDetails.certificates = this.certificates;
          this.shareFormService.orderDetails.additionalOrders = this.additionalOrders.value;
          this.shareFormService.orderDetails.orderComment = this.orderDetailsForm.value.orderComment;
          this.shareFormService.orderDetails.certificatesSum = this.showCertificateUsed;
          this.shareFormService.orderDetails.pointsSum = this.pointsUsed;
          this.shareFormService.orderDetails.total = this.showTotal;
          this.shareFormService.orderDetails.finalSum = this.finalSum;
          this.shareFormService.changeOrderDetails();
        }
      }, {
        key: "formArrayCertificates",
        get: function get() {
          return this.orderDetailsForm.get('formArrayCertificates');
        }
      }, {
        key: "additionalOrders",
        get: function get() {
          return this.orderDetailsForm.get('additionalOrders');
        }
      }, {
        key: "orderComment",
        get: function get() {
          return this.orderDetailsForm.get('orderComment');
        }
      }, {
        key: "shop",
        get: function get() {
          return this.orderDetailsForm.get('shop');
        }
      }, {
        key: "calculateTotal",
        value: function calculateTotal() {
          var _this19 = this;

          this.total = 0;
          this.bags.forEach(function (bag) {
            _this19.total += bag.price * bag.quantity;
          });
          this.showTotal = this.total;
          this.changeForm();

          if (this.total < this.minOrderValue && this.orderDetailsForm.dirty) {
            this.displayMinOrderMes = true;
            this.onSubmit = true;
          } else {
            this.displayMinOrderMes = false;
            this.onSubmit = false;
          }

          this.finalSum = this.total - this.pointsUsed;

          if (this.certificateSum > 0) {
            if (this.total > this.certificateSum) {
              this.certificateLeft = 0;
              this.finalSum = this.total - this.certificateSum - this.pointsUsed;
              this.showCertificateUsed = this.certificateSum;
            } else {
              this.finalSum = 0;
              this.certificateLeft = this.certificateSum - this.total;
              this.showCertificateUsed = this.total;
              this.points = this.orders.points;
            }

            this.bonusesRemaining = this.certificateSum > 0;
          } else {
            this.certificateLeft = 0;
            this.finalSum = this.total - this.certificateSum - this.pointsUsed;
            this.showCertificateUsed = this.certificateSum;
          }

          this.changeOrderDetails();
        }
      }, {
        key: "ecoStoreValidation",
        value: function ecoStoreValidation() {
          var orderValues = _toConsumableArray(new Set(this.additionalOrders.value));

          var checkDuplicate = orderValues.length === this.additionalOrders.length;
          var counter = 0;
          this.additionalOrders.controls.forEach(function (controller) {
            if (controller.valid && controller.dirty && controller.value !== '' && checkDuplicate) {
              counter++;
            }
          });
          this.displayOrderBtn = counter === this.additionalOrders.controls.length;
        }
      }, {
        key: "changeShopRadioBtn",
        value: function changeShopRadioBtn() {
          this.orderDetailsForm.controls.shop.setValue('yes');
        }
      }, {
        key: "selectPointsRadioBtn",
        value: function selectPointsRadioBtn(event, radioButtonValue) {
          if (['Enter', 'Space', 'NumpadEnter'].includes(event.code)) {
            this.orderDetailsForm.controls.bonus.setValue(radioButtonValue);
          }
        }
      }, {
        key: "selectShopRadioBtn",
        value: function selectShopRadioBtn(event, radioButtonValue) {
          if (['Enter', 'Space', 'NumpadEnter'].includes(event.code)) {
            this.orderDetailsForm.controls.shop.setValue(radioButtonValue);
            radioButtonValue === 'yes' ? this.renderer.selectRootElement("#index".concat(this.additionalOrders.controls.length - 1)).focus() : this.clearOrderValues();
          }
        }
      }, {
        key: "isDisabled",
        value: function isDisabled() {
          return this.orderDetailsForm.controls.shop.value === 'yes' ? 0 : -1;
        }
      }, {
        key: "clearOrderValues",
        value: function clearOrderValues() {
          this.additionalOrders.controls[0].setValue('');

          if (this.additionalOrders.controls.length > 1) {
            this.additionalOrders.controls.splice(1);
          }

          this.ecoStoreValidation();
        }
      }, {
        key: "onQuantityChange",
        value: function onQuantityChange(id) {
          var _this20 = this;

          this.bags.forEach(function (bag) {
            var valueName = 'quantity' + String(bag.id);
            var orderFormBagController = _this20.orderDetailsForm.controls[valueName];
            var inputValue = "".concat(Number(orderFormBagController.value));
            orderFormBagController.setValue(inputValue);

            if (Number(orderFormBagController.value) > 0) {
              bag.quantity = orderFormBagController.value;
            } else {
              orderFormBagController.setValue('');
              bag.quantity = null;
            }
          });
          document.getElementById("quantity".concat(id)).focus();
          this.checkTotalBigBags();
          this.calculateTotal();

          if (this.orderDetailsForm.controls.bonus.value === 'yes') {
            this.calculatePoints();
          }
        }
      }, {
        key: "calculatePoints",
        value: function calculatePoints() {
          if (this.certificateSum <= 0) {
            this.calculatePointsWithoutCertificate();
          } else {
            this.calculatePointsWithCertificate();
          }

          this.finalSum = this.showTotal - this.pointsUsed - this.certificateSum;

          if (this.finalSum < 0) {
            this.finalSum = 0;
          }
        }
      }, {
        key: "calculatePointsWithoutCertificate",
        value: function calculatePointsWithoutCertificate() {
          this.showTotal = this.total;
          var totalSumIsBiggerThanPoints = this.points > this.finalSum;

          if (totalSumIsBiggerThanPoints) {
            this.pointsUsed += this.finalSum;
            this.points = this.points - this.finalSum;
            this.total = 0;
            return;
          }

          this.pointsUsed = this.points;
          this.points = 0;
          this.total = this.total - this.pointsUsed;
        }
      }, {
        key: "calculatePointsWithCertificate",
        value: function calculatePointsWithCertificate() {
          var totalSumIsBiggerThanPoints = this.points > this.finalSum;

          if (totalSumIsBiggerThanPoints) {
            this.pointsUsed = this.total - this.certificateSum;
            this.total = 0;
          } else {
            this.pointsUsed = this.points;
            this.total = this.total - this.pointsUsed;
          }

          this.points = this.points >= this.finalSum ? this.points - this.finalSum : 0;
        }
      }, {
        key: "resetPoints",
        value: function resetPoints() {
          this.showTotal = this.total;
          this.certificateSum = 0;
          this.finalSum = this.total;
          this.points = this.orders.points;
          this.pointsUsed = 0;
          this.certificateReset(true);
          this.calculateTotal();
        }
      }, {
        key: "addOrder",
        value: function addOrder() {
          var _this21 = this;

          var additionalOrdersArray = this.orderDetailsForm.get('additionalOrders');
          additionalOrdersArray.markAsUntouched();
          var additionalOrder = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)]);
          this.additionalOrders.push(additionalOrder);
          this.ecoStoreValidation();
          setTimeout(function () {
            _this21.renderer.selectRootElement("#index".concat(_this21.additionalOrders.controls.length - 1)).focus();
          }, 0);
        }
      }, {
        key: "deleteOrder",
        value: function deleteOrder(index) {
          var orders = this.additionalOrders;
          orders.length > 1 ? orders.removeAt(index) : orders.reset(['']);
          this.changeOrderDetails();
        }
      }, {
        key: "removeOrder",
        value: function removeOrder(event, index) {
          if (['Enter', 'Space', 'NumpadEnter'].includes(event.code)) {
            this.deleteOrder(index);
          }
        }
      }, {
        key: "disableAddCertificate",
        value: function disableAddCertificate() {
          return this.certificates.length === this.formArrayCertificates.length;
        }
      }, {
        key: "addNewCertificate",
        value: function addNewCertificate() {
          this.formArrayCertificates.push(this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.certificatePattern)]));
        }
      }, {
        key: "clearAdditionalCertificate",
        value: function clearAdditionalCertificate(index) {
          if (this.formArrayCertificates.length > 1) {
            if (this.certificates.length === 0) {
              this.certificateReset(true);
            }

            this.formArrayCertificates.removeAt(index);
          } else {
            this.certificateReset(true);
            this.formArrayCertificates.patchValue(['']);
            this.formArrayCertificates.markAsUntouched();
          }

          this.certStatuses.splice(index, 1);
          this.calculateCertificates(this.certificates);
        }
      }, {
        key: "deleteCertificate",
        value: function deleteCertificate(index) {
          this.certificates.splice(index, 1);
          this.clearAdditionalCertificate(index);
          this.certificateError = false;
        }
      }, {
        key: "certificateSubmit",
        value: function certificateSubmit(index) {
          if (!this.certificates.includes(this.formArrayCertificates.value[index])) {
            this.certificates.push(this.formArrayCertificates.value[index]);
            this.certStatuses.push(true);
            this.calculateCertificates(this.certificates);
          }
        }
      }, {
        key: "showCancelButton",
        value: function showCancelButton(i) {
          return this.certStatuses[i] && this.formArrayCertificates.controls[i].value || this.formArrayCertificates.controls.length > 1 && !this.formArrayCertificates.controls[i].value.length;
        }
      }, {
        key: "showActivateButton",
        value: function showActivateButton(i) {
          return !this.certStatuses[i] && this.formArrayCertificates.controls[i].value && !this.disableAddCertificate() || this.formArrayCertificates.controls.length === 1 && !this.formArrayCertificates.controls[i].value.length;
        }
      }, {
        key: "calculateCertificates",
        value: function calculateCertificates(arr) {
          var _this22 = this;

          if (arr.length > 0) {
            this.cancelCertBtn = true;
            arr.forEach(function (certificate, index) {
              _this22.orderService.processCertificate(certificate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(_this22.destroy)).subscribe(function (cert) {
                _this22.certificateMatch(cert);

                if (_this22.total < _this22.certificateSum) {
                  _this22.certSize = true;
                }

                _this22.calculateTotal();

                _this22.cancelCertBtn = false;
              }, function (error) {
                _this22.cancelCertBtn = false;

                if (error.status === 404) {
                  arr.splice(index, 1);
                  _this22.certificateError = true;
                }
              });
            });
          } else {
            this.calculateTotal();
          }

          this.certificateSum = 0;
        }
      }, {
        key: "certificateReset",
        value: function certificateReset(resetMessage) {
          if (resetMessage) {
            this.certDate = '';
            this.certStatus = '';
            this.addCert = true;
          }

          this.bonusesRemaining = false;
          this.showCertificateUsed = null;
          this.addCert = false;
          this.displayCert = false;
          this.certificates = [];
          this.certSize = false;
          this.certificateLeft = 0;
          this.certificateSum = 0;
          this.formArrayCertificates.patchValue(['']);
          this.calculateCertificates(this.certificates);
        }
      }, {
        key: "certificateMatch",
        value: function certificateMatch(cert) {
          if (cert.certificateStatus === _certificate_status_enum__WEBPACK_IMPORTED_MODULE_5__["CertificateStatus"].ACTIVE || cert.certificateStatus === _certificate_status_enum__WEBPACK_IMPORTED_MODULE_5__["CertificateStatus"].NEW) {
            this.certificateSum += cert.certificatePoints;
            this.displayCert = true;
            this.addCert = true;
          }

          this.failedCert = cert.certificateStatus === _certificate_status_enum__WEBPACK_IMPORTED_MODULE_5__["CertificateStatus"].EXPIRED || cert.certificateStatus === _certificate_status_enum__WEBPACK_IMPORTED_MODULE_5__["CertificateStatus"].USED;
          this.certificateSum = this.failedCert && this.formArrayCertificates.length === 1 ? 0 : this.certificateSum;
          this.certDate = this.certificateDateTreat(cert.certificateDate);
          this.certStatus = cert.certificateStatus;
        }
      }, {
        key: "certificateDateTreat",
        value: function certificateDateTreat(date) {
          return date.split('-').reverse().join('-');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy.next();
          this.destroy.unsubscribe();
        }
      }]);

      return UBSOrderDetailsComponent;
    }(_shared_components_form_base_form_base_component__WEBPACK_IMPORTED_MODULE_3__["FormBaseComponent"]);

    UBSOrderDetailsComponent.ɵfac = function UBSOrderDetailsComponent_Factory(t) {
      return new (t || UBSOrderDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_ubs_order_form_service__WEBPACK_IMPORTED_MODULE_7__["UBSOrderFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_9__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]));
    };

    UBSOrderDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: UBSOrderDetailsComponent,
      selectors: [["app-ubs-order-details"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      decls: 11,
      vars: 9,
      consts: [[1, "container"], [4, "ngIf", "ngIfElse"], ["spinner", ""], [1, "w-100", "d-flex", "justify-content-end", "buttons"], ["type", "button", 1, "secondary-global-button", "btn", "cancel-button", "btn-main", 3, "click"], ["type", "submit", "matStepperNext", "", 1, "primary-global-button", "btn", "btn-main", 3, "disabled"], [1, "header"], [1, "font-bolt", "order-title"], [1, "user-location"], [1, "change-location", 3, "click"], ["class", "list-locations", 4, "ngIf"], ["class", "order-content", 4, "ngIf"], [1, "form", 3, "formGroup", "change"], [1, "w-100", "d-flex", "justify-content-between", "mb-2"], [1, "col-3", "label", "m-0", "p-0"], [1, "col-2", "label", "m-0", "p-0"], [1, "col-2", "label", "m-0", "p-0", "margin-right"], [1, "col-2", "label", "m-0", "text-center", "p-0"], [1, "col-3", "label", "m-0", "text-center", "p-0"], [1, "main"], [1, "w-100", "p-0", "m-0"], ["class", "main-list_item d-flex justify-content-between align-items-baseline", 4, "ngFor", "ngForOf"], [1, "middle"], [1, "middle-container"], [1, "showTotal"], [1, "totalInfo"], [1, "total-content"], ["class", "total-content", 4, "ngIf"], ["class", "validMes", 4, "ngIf"], ["class", "addCertificate", "formArrayName", "formArrayCertificates", 4, "ngFor", "ngForOf"], [1, "messages-container"], ["class", "text-danger", 4, "ngIf"], ["class", "text-message", 4, "ngIf"], ["type", "button", "class", "addCertificateBtn", 3, "disabled", "click", 4, "ngIf"], [1, "points"], ["href", "#!", 1, "bonus-how-to-link"], ["class", "radio-btn", 4, "ngIf"], [1, "points-balance"], [1, "text-message"], [1, "bottom"], [1, "radio-btn"], [1, "custom-radio-btn"], ["formControlName", "shop", "type", "radio", "value", "no", "tabindex", "-1", 3, "click"], ["tabindex", "0", 1, "checkmark", 3, "keyup"], ["formControlName", "shop", "type", "radio", "value", "yes", "tabindex", "-1", 3, "click"], [1, "form-group", "shop_submit"], [1, "bottom-text"], ["formArrayName", "additionalOrders", "class", "form-group eco-store", 3, "inactive", 4, "ngFor", "ngForOf"], [1, "order-notification"], [1, "addOrderBtn", 3, "disabled", "click"], [1, "bottom_comment"], [1, "form-group", "comment"], ["formControlName", "orderComment", "rows", "7", 1, "shadow-none", "form-control", "textarea", 3, "placeholder", "pattern"], [1, "list-locations"], ["name", "region", 1, "choose-location", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "order-content"], [1, "main-list_item", "d-flex", "justify-content-between", "align-items-baseline"], [1, "col-3", "p-0", "m-0", "bag-name"], [1, "col-2", "p-0", "m-0", "bag-name"], [1, "col-2", "form-group", "count"], ["type", "number", "min", "0", "max", "999", "placeholder", "0", 1, "shadow-none", "form-control", "input", 3, "formControlName", "id", "unmask", "imask", "change"], [1, "col-3", "bag-name", "text-center"], [1, "money-saved"], [1, "validMes"], [1, "text-danger"], ["formArrayName", "formArrayCertificates", 1, "addCertificate"], ["type", "text", "placeholder", "xxxx-xxxx", 1, "shadow-none", "form-control", "col-12", "col-sm-8", "my-1", "input-border", 3, "unmask", "imask", "formControlName", "readonly"], [1, "form-group"], ["type", "button", "class", "primary-global-button btn", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "primary-global-button", "btn", 3, "disabled", "click"], ["type", "button", 1, "addCertificateBtn", 3, "disabled", "click"], ["formControlName", "bonus", "type", "radio", "value", "no", "tabindex", "-1", 3, "click"], ["formControlName", "bonus", "type", "radio", "value", "yes", "tabindex", "-1", 3, "click"], ["formArrayName", "additionalOrders", 1, "form-group", "eco-store"], [1, "label", "m-0"], ["type", "text", "placeholder", "xxxxxxxxxx", 1, "shadow-none", "form-control", "border-input", "p-2", "eco-store-input", 3, "id", "tabindex", "formControlName", "unmask", "imask", "pattern", "click", "ngModelChange"], ["input-close-button", "", 3, "tabindex", "click", "keyup"], [1, "mx-auto"]],
      template: function UBSOrderDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UBSOrderDetailsComponent_div_1_Template, 138, 128, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, UBSOrderDetailsComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UBSOrderDetailsComponent_Template_button_click_5_listener() {
            return ctx.cancelUBS();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bags && !ctx.isFetching && !ctx.isDialogOpen)("ngIfElse", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 5, "order-details.cancel"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.showTotal < 500 || ctx.minAmountOfBigBags > ctx.totalOfBigBags || ctx.orderComment.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 7, "order-details.next"), " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperNext"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], angular_imask__WEBPACK_IMPORTED_MODULE_14__["IMaskDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArrayName"], _shared_spinner_ubs_spinner_ubs_component__WEBPACK_IMPORTED_MODULE_15__["SpinnerUbsComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"], _shared_localized_currency_pipe_localized_currency_pipe__WEBPACK_IMPORTED_MODULE_17__["LocalizedCurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CurrencyPipe"], _shared_sort_list_by_lang_filter_list_by_lang_pipe__WEBPACK_IMPORTED_MODULE_18__["FilterListByLangPipe"], _shared_volume_pipe_volume_pipe__WEBPACK_IMPORTED_MODULE_19__["VolumePipe"]],
      styles: [".container[_ngcontent-%COMP%] {\n  box-shadow: 1px 4px 8px rgba(100, 114, 125, 0.18);\n  padding: 10px 25px 40px;\n  color: var(--ubs-primary-grey);\n}\n\n.btn[_ngcontent-%COMP%]:nth-child(1) {\n  color: var(--ubs-quaternary-dark-grey);\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin-top: 46px;\n}\n\n.buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1) {\n  margin-right: 1rem;\n  width: 136px;\n}\n\n.buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(2) {\n  width: 88px;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-family: var(--ubs-quaternary-font);\n  font-size: 24px;\n  font-weight: 700;\n  color: var(ubs-primary-grey);\n}\n\n.eco-store[_ngcontent-%COMP%]::-webkit-outer-spin-button, .eco-store[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n\n.eco-store[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 3rem 0 0;\n}\n\n.header[_ngcontent-%COMP%]   .order-title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.header[_ngcontent-%COMP%]   .order-content[_ngcontent-%COMP%] {\n  color: var(--ubs-secondary-grey);\n  margin-bottom: 2rem;\n}\n\n.header[_ngcontent-%COMP%]   .choose-location[_ngcontent-%COMP%] {\n  color: var(--ubs-primary-grey);\n  background: var(--primary-white);\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.25rem;\n  margin: 0.5rem 0 2rem 0;\n  width: 14rem;\n  border-color: var(--ubs-quintynary-light-grey);\n}\n\n.main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 1rem 0 1.2rem 0;\n  border-top: 1px solid var(--ubs-primary-light-grey);\n  border-bottom: 1px solid var(--ubs-primary-light-grey);\n}\n\n.label[_ngcontent-%COMP%] {\n  font-family: var(--ubs-quaternary-font);\n  font-size: 16px;\n  font-weight: 400;\n  color: var(--ubs-secondary-grey);\n  padding: 0;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  height: 2.25rem;\n  background: none;\n  padding-left: 0;\n  border: none;\n  display: flex;\n  font-size: 14px;\n}\n\n.count[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  border: 1px solid var(--ubs-quintynary-light-grey);\n  padding-left: 6px;\n  font-size: 14px;\n}\n\n.count[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus::-moz-placeholder {\n  color: transparent;\n}\n\n.count[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus::placeholder {\n  color: transparent;\n}\n\n.bag-quantity_placeholder[_ngcontent-%COMP%] {\n  color: var(--ubs-primary-light-grey);\n}\n\n.addOrderBtn[_ngcontent-%COMP%] {\n  width: 250px;\n  padding: 0;\n  text-align: left;\n  background: none;\n  color: var(--ubs-electric-violet);\n  font-size: 14px;\n  outline: none;\n}\n\n.addOrderBtn[_ngcontent-%COMP%]:disabled {\n  color: var(--ubs-quintynary-light-grey);\n}\n\n.addOrderBtn[_ngcontent-%COMP%]:hover {\n  background: none;\n}\n\n.addOrderBtn[_ngcontent-%COMP%]:focus {\n  text-decoration: underline;\n}\n\n.radio-btn[_ngcontent-%COMP%] {\n  margin-left: -6px;\n}\n\n.checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  left: 4px;\n  height: 16px;\n  width: 16px;\n  background-color: var(--ubs-primary-white);\n  border-radius: 50%;\n  border: 1px solid var(--ubs-quaternary-dark-grey);\n}\n\n.checkmark[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.custom-radio-btn[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 28px;\n  margin-bottom: 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.custom-radio-btn[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.custom-radio-btn[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: var(--ubs-primary-white);\n}\n\n.custom-radio-btn[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]::after {\n  top: 14%;\n  left: 15%;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--ubs-quaternary-dark-grey);\n}\n\n.custom-radio-btn[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: var(--ubs-primary-white);\n}\n\n.custom-radio-btn[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]::after {\n  display: block;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 8rem;\n  height: 2.75rem;\n  border-radius: 0;\n  border: none;\n}\n\n.totalInfo[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.totalInfo[_ngcontent-%COMP%]   .total-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  color: var(--ubs-secondary-grey);\n  font-family: var(--ubs-quaternary-font);\n  padding-right: 0.5rem;\n}\n\n.totalInfo[_ngcontent-%COMP%]   .total-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n  color: var(--ubs-primary-grey);\n}\n\n.totalInfo[_ngcontent-%COMP%]   .money-saved[_ngcontent-%COMP%] {\n  font-family: var(--ubs-quaternary-font);\n  font-size: 10px;\n  font-weight: 400;\n  color: var(--ubs-electric-violet) !important;\n}\n\n.totalInfo[_ngcontent-%COMP%]   .validMes[_ngcontent-%COMP%] {\n  margin-top: -1rem;\n  margin-bottom: 1rem;\n}\n\n.user-location[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  margin: 20px auto;\n}\n\n.user-location[_ngcontent-%COMP%]   .change-location[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 0;\n  text-align: left;\n  background: none;\n  color: var(--ubs-electric-violet);\n  outline: none;\n  font-size: 14px;\n}\n\n.user-location[_ngcontent-%COMP%]   .change-location[_ngcontent-%COMP%]:hover {\n  background: none;\n}\n\n.user-location[_ngcontent-%COMP%]   .list-locations[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 130px;\n}\n\n.middle-container[_ngcontent-%COMP%]   .showTotal[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 2rem;\n}\n\n.middle-container[_ngcontent-%COMP%]   .input-border[_ngcontent-%COMP%] {\n  background: var(--ubs-primary-white);\n  border: 1px solid var(--ubs-quintynary-light-grey);\n}\n\n.middle-container[_ngcontent-%COMP%]   .certificate-container[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .addCertificate[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-end;\n  width: 44%;\n}\n\n.middle-container[_ngcontent-%COMP%]   .certificate-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .addCertificate[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n\n.middle-container[_ngcontent-%COMP%]   .certificate-container[_ngcontent-%COMP%]   .validMes[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .addCertificate[_ngcontent-%COMP%]   .validMes[_ngcontent-%COMP%] {\n  width: 65%;\n  margin: -1rem 0 1rem;\n  color: var(--ubs-primary-green);\n}\n\n.middle-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 8rem;\n  height: 2.25rem;\n  font-size: 14px;\n}\n\n.middle-container[_ngcontent-%COMP%]   .addCertificate[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.middle-container[_ngcontent-%COMP%]   .addCertificate[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.middle-container[_ngcontent-%COMP%]   .addCertificateBtn[_ngcontent-%COMP%] {\n  width: 180px;\n  padding: 0;\n  text-align: left;\n  background: none;\n  color: var(--ubs-electric-violet);\n  outline: none;\n  font-size: 14px;\n}\n\n.middle-container[_ngcontent-%COMP%]   .addCertificateBtn[_ngcontent-%COMP%]:hover {\n  background: none;\n}\n\n.middle-container[_ngcontent-%COMP%]   .addBonus[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n\n.middle-container[_ngcontent-%COMP%]   .addBonus[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--ubs-electric-violet);\n  padding-left: 1rem;\n}\n\n.middle-container[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n.bottom[_ngcontent-%COMP%] {\n  font-family: var(--ubs-quaternary-font);\n  padding: 3rem 0;\n  margin-bottom: 3rem;\n  border-bottom: 1px solid var(--ubs-primary-light-grey);\n}\n\n.bottom[_ngcontent-%COMP%]   .custom-control[_ngcontent-%COMP%] {\n  padding-left: 1.4rem;\n}\n\n.bottom[_ngcontent-%COMP%]   .border-input[_ngcontent-%COMP%] {\n  border: 1px solid var(--ubs-quintynary-light-grey);\n}\n\n.bottom[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%] {\n  color: var(--ubs-primary-grey);\n  padding-left: 0;\n}\n\n.bottom[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::before {\n  background-color: var(--ubs-primary-white);\n}\n\n.bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.bottom[_ngcontent-%COMP%]   .inactive[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  background-color: var(--ubs-grey-white);\n}\n\n.bottom[_ngcontent-%COMP%]   .inactive[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.bottom[_ngcontent-%COMP%]   .eco-store[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.bottom[_ngcontent-%COMP%]   .eco-store[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\n  color: var(--ubs-primary-light-grey);\n  opacity: 1;\n  font-size: 0.9rem;\n}\n\n.bottom[_ngcontent-%COMP%]   .eco-store[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: var(--ubs-primary-light-grey);\n  opacity: 1;\n  font-size: 0.9rem;\n}\n\n.bottom[_ngcontent-%COMP%]   .eco-store[_ngcontent-%COMP%]    > [input-close-button][_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  top: 29px;\n  right: 5px;\n  color: var(--ubs-quintynary-light-grey);\n  font-size: 1.7em;\n  padding: 0 0.2em;\n  line-height: 1em;\n  cursor: pointer;\n}\n\n.bottom[_ngcontent-%COMP%]   .eco-store[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:focus, .bottom[_ngcontent-%COMP%]   .eco-store[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + span[_ngcontent-%COMP%], .bottom[_ngcontent-%COMP%]   .eco-store[_ngcontent-%COMP%]:hover    > [input-close-button][_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.sum[_ngcontent-%COMP%] {\n  width: 6rem;\n  margin-left: 3rem;\n}\n\n.sum[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 0;\n  text-align: center;\n  font-weight: 700;\n  font-size: 14px;\n}\n\n.middle[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n  padding: 30px 0;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--ubs-primary-light-grey);\n}\n\n.messages-container[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.messages-container[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--ubs-primary-green);\n}\n\n.points[_ngcontent-%COMP%] {\n  font-family: var(--ubs-quaternary-font);\n  margin-top: 3em;\n}\n\n.points[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.points[_ngcontent-%COMP%]   .points-balance[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n}\n\n.points[_ngcontent-%COMP%]   .bonus-how-to-link[_ngcontent-%COMP%], .points[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ubs-electric-violet);\n}\n\n.order-notification[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-family: var(--ubs-quaternary-font);\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--ubs-primary-grey);\n  line-height: 24px;\n}\n\n.primary-global-button[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 4px;\n  font-size: 18px;\n  color: var(--ubs-quaternary-dark-grey);\n  border-color: var(--ubs-button-light-green);\n  background: var(--ubs-button-light-green);\n}\n\n.primary-ubs-button[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 4px;\n  font-size: 18px;\n  color: var(--ubs-quaternary-dark-grey);\n  border-color: var(--ubs-button-light-green);\n  background: var(--ubs-button-light-green);\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid var(--ubs-quaternary-dark-grey);\n  font-size: 18px;\n}\n\n.shop_submit[_ngcontent-%COMP%] {\n  position: relative;\n  width: 85%;\n  margin-top: 1rem;\n}\n\n.shop_submit[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  width: 39%;\n}\n\n.bottom-text[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  width: 60%;\n  padding: 1.5rem 0 0 0.5rem;\n}\n\n.comment[_ngcontent-%COMP%] {\n  background: var(--ubs-primary-white);\n}\n\n.bottom_comment[_ngcontent-%COMP%] {\n  background: var(--ubs-primary-white);\n}\n\n.bottom_comment[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%] {\n  height: 6rem;\n  border: 1px solid var(--ubs-quintynary-light-grey);\n  padding: 0.5rem;\n  background: var(--ubs-primary-white);\n}\n\n.bottom_comment[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: var(--ubs-quaternary-font);\n  font-size: 14px;\n  font-weight: 400;\n  color: var(--ubs-primary-light-grey);\n  margin-bottom: 3rem;\n}\n\n.bottom_comment[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]::placeholder {\n  font-family: var(--ubs-quaternary-font);\n  font-size: 14px;\n  font-weight: 400;\n  color: var(--ubs-primary-light-grey);\n  margin-bottom: 3rem;\n}\n\n.btn-main[_ngcontent-%COMP%] {\n  height: 2.75rem;\n}\n\n.btn-main[_ngcontent-%COMP%]:disabled {\n  background: var(--ubs-quaternary-light-grey);\n  border-color: var(--ubs-quaternary-light-grey);\n}\n\nli[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.bag-name[_ngcontent-%COMP%] {\n  font-family: var(--ubs-quaternary-font);\n  font-size: 16px;\n  font-weight: 400;\n  color: var(--ubs-quaternary-dark-grey);\n}\n\n.bag-name[_ngcontent-%COMP%]:last-child {\n  color: var(--ubs-primary-grey);\n  font-weight: bold;\n}\n\n@media screen and (max-width: 575px) {\n  .mat-horizontal-content-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 15px;\n  }\n\n  .margin-right[_ngcontent-%COMP%] {\n    margin-right: 5px !important;\n    margin-left: -5px !important;\n  }\n\n  .buttons[_ngcontent-%COMP%] {\n    display: flex !important;\n    justify-content: center !important;\n    margin: 2em 0 1em;\n  }\n\n  .count[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .addOrderBtn[_ngcontent-%COMP%] {\n    color: var(--ubs-button-light-grey);\n    border: 1px solid;\n    border-radius: 3px;\n    font-style: normal;\n    font-weight: bold;\n    padding: 0.5em 1em;\n    margin: 1em 0;\n    text-align: center;\n  }\n\n  .bottom_comment[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%] {\n    height: 8em;\n  }\n\n  .label[_ngcontent-%COMP%], .bag-name[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n\n  .totalInfo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n\n  .header[_ngcontent-%COMP%] {\n    margin: 1rem 0 0;\n    text-align: center;\n  }\n  .header[_ngcontent-%COMP%]   .choose-location[_ngcontent-%COMP%] {\n    margin: 1em 0;\n  }\n\n  .user-location[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .user-location[_ngcontent-%COMP%]   .change-location[_ngcontent-%COMP%] {\n    color: var(--ubs-button-light-grey);\n    border: 1px solid;\n    border-radius: 3px;\n    font-style: normal;\n    font-weight: bold;\n    padding: 0.5em 1em;\n    margin: 1em 0;\n  }\n  .user-location[_ngcontent-%COMP%]   .list-locations[_ngcontent-%COMP%] {\n    position: static;\n  }\n\n  .points[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .points[_ngcontent-%COMP%]   .bonus-how-to-link[_ngcontent-%COMP%] {\n    color: var(--ubs-button-light-grey);\n    border: 1px solid;\n    border-radius: 3px;\n    font-style: normal;\n    font-weight: bold;\n    padding: 0.5em 1em;\n    margin: 1em 0;\n  }\n\n  .middle-container[_ngcontent-%COMP%] {\n    justify-content: center;\n    text-align: center;\n  }\n  .middle-container[_ngcontent-%COMP%]   .certificate-container[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .addCertificate[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: auto;\n  }\n  .middle-container[_ngcontent-%COMP%]   .certificate-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .addCertificate[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 0.7rem 1.9rem;\n    max-width: 128px;\n  }\n  .middle-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    padding-bottom: 2em;\n  }\n\n  .validMes[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .messages-container[_ngcontent-%COMP%] {\n    width: auto;\n    text-align: center;\n  }\n\n  .radio-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    margin: 1.5em 0;\n  }\n\n  .bottom[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n  .bottom[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 1em;\n  }\n  .bottom[_ngcontent-%COMP%]   .eco-store[_ngcontent-%COMP%]    > [input-close-button][_ngcontent-%COMP%] {\n    top: 26px;\n  }\n  .bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .shop_submit[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n\n  .bottom-text[_ngcontent-%COMP%] {\n    position: static;\n    width: 100%;\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvdWJzL2NvbXBvbmVudHMvdWJzLW9yZGVyLWRldGFpbHMvRDpcXFNvZnRTZXJ2ZV9BY2FkZW15XFxHcmVlbkNpdHlcXGdoLXBhZ2VzXFxHcmVlbkNpdHlDbGllbnQvc3JjXFxhcHBcXG1haW5cXGNvbXBvbmVudFxcdWJzXFxjb21wb25lbnRzXFx1YnMtb3JkZXItZGV0YWlsc1xcdWJzLW9yZGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vY29tcG9uZW50L3Vicy9jb21wb25lbnRzL3Vicy1vcmRlci1kZXRhaWxzL3Vicy1vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsaURBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0FDTkY7O0FEU0E7RUFDRSxzQ0FBQTtBQ05GOztBRFNBO0VBQ0UsZ0JBQUE7QUNORjs7QURRRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ05KOztBRFNFO0VBQ0UsV0FBQTtBQ1BKOztBRFdBO0VBN0JFLHVDQThCb0I7RUE3QnBCLGVBNkJ1RTtFQTVCdkUsZ0JBNEI2RTtFQTNCN0UsNEJBMkJnRDtBQ0xsRDs7QURRQTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUNMRjs7QURRQSxZQUFBOztBQUNBO0VBQ0UsMEJBQUE7QUNMRjs7QURRQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRE9FO0VBQ0UsbUJBQUE7QUNMSjs7QURRRTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7QUNOSjs7QURTRTtFQUNFLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsOENBQUE7QUNQSjs7QURXQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLG1EQUFBO0VBQ0Esc0RBQUE7QUNSRjs7QURXQTtFQTdFRSx1Q0E4RW9CO0VBN0VwQixlQTZFMkU7RUE1RTNFLGdCQTRFaUY7RUEzRWpGLGdDQTJFZ0Q7RUFFaEQsVUFBQTtBQ05GOztBRFNBO0VBQ0UsVUFBQTtBQ05GOztBRFNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ05GOztBRFVFO0VBQ0Usa0RBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNQSjs7QURVRTtFQUNFLGtCQUFBO0FDUko7O0FET0U7RUFDRSxrQkFBQTtBQ1JKOztBRFlBO0VBQ0Usb0NBQUE7QUNURjs7QURZQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNURjs7QURXRTtFQUNFLHVDQUFBO0FDVEo7O0FEWUU7RUFDRSxnQkFBQTtBQ1ZKOztBRGFFO0VBQ0UsMEJBQUE7QUNYSjs7QURlQTtFQUNFLGlCQUFBO0FDWkY7O0FEZUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNaRjs7QURjRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNaSjs7QURnQkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtBQ2JGOztBRGVFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ2JKOztBRGdCRTtFQUNFLDBDQUFBO0FDZEo7O0FEaUJFO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNmSjs7QURrQkU7RUFDRSwwQ0FBQTtBQ2hCSjs7QURrQkk7RUFDRSxjQUFBO0FDaEJOOztBRHFCQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDbEJGOztBRHFCQTtFQUNFLGlCQUFBO0FDbEJGOztBRG9CRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQkFBQTtBQ2xCSjs7QURvQkk7RUFDRSxrQkFBQTtFQUNBLDhCQUFBO0FDbEJOOztBRHNCRTtFQXpOQSx1Q0EwTnNCO0VBek50QixlQXlOeUY7RUF4TnpGLGdCQXdOK0Y7RUF2Ti9GLDRDQXVOa0Q7QUNqQnBEOztBRG9CRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNsQko7O0FEc0JBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNuQkY7O0FEcUJFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ25CSjs7QURxQkk7RUFDRSxnQkFBQTtBQ25CTjs7QUR1QkU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDckJKOztBRDBCRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDdkJKOztBRDBCRTtFQUNFLG9DQUFBO0VBQ0Esa0RBQUE7QUN4Qko7O0FEMkJFOztFQUVFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUN6Qko7O0FEMkJJOztFQUNFLGVBQUE7QUN4Qk47O0FEMkJJOztFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0FDeEJOOztBRDRCRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQzFCSjs7QUQ2QkU7RUFDRSxtQkFBQTtBQzNCSjs7QUQ2Qkk7RUFDRSxnQkFBQTtBQzNCTjs7QUQrQkU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDN0JKOztBRCtCSTtFQUNFLGdCQUFBO0FDN0JOOztBRGlDRTtFQUNFLGdCQUFBO0FDL0JKOztBRGlDSTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7QUMvQk47O0FEbUNFO0VBQ0UsY0FBQTtBQ2pDSjs7QURxQ0E7RUFDRSx1Q0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNEQUFBO0FDbENGOztBRG9DRTtFQUNFLG9CQUFBO0FDbENKOztBRHFDRTtFQUNFLGtEQUFBO0FDbkNKOztBRHNDRTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtBQ3BDSjs7QURzQ0k7RUFDRSwwQ0FBQTtBQ3BDTjs7QUR3Q0U7RUFDRSxlQUFBO0FDdENKOztBRDBDSTtFQUNFLHVDQUFBO0FDeENOOztBRDJDSTtFQUNFLGFBQUE7QUN6Q047O0FENkNFO0VBQ0Usa0JBQUE7QUMzQ0o7O0FENkNJO0VBQ0Usb0NBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUMzQ047O0FEd0NJO0VBQ0Usb0NBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUMzQ047O0FEOENJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUM1Q047O0FEK0NJOztFQUdFLFVBQUE7QUM5Q047O0FEbURBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDaERGOztBRGtERTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2hESjs7QURvREE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxzREFBQTtBQ2pERjs7QURvREE7RUFDRSxVQUFBO0FDakRGOztBRG1ERTtFQUNFLCtCQUFBO0FDakRKOztBRHFEQTtFQUNFLHVDQUFBO0VBQ0EsZUFBQTtBQ2xERjs7QURvREU7RUFDRSxlQUFBO0FDbERKOztBRHFERTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ25ESjs7QURzREU7O0VBRUUsZUFBQTtFQUNBLGlDQUFBO0FDcERKOztBRHdEQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ3JERjs7QUR3REE7RUE3YkUsdUNBOGJvQjtFQTdicEIsZUE2YnlFO0VBNWJ6RSxpQkE0YitFO0VBM2IvRSw4QkEyYmdEO0VBRWhELGlCQUFBO0FDbkRGOztBRHNEQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSwyQ0FBQTtFQUNBLHlDQUFBO0FDbkRGOztBRHNEQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSwyQ0FBQTtFQUNBLHlDQUFBO0FDbkRGOztBRHNEQTtFQUNFLGtCQUFBO0VBQ0EsaURBQUE7RUFDQSxlQUFBO0FDbkRGOztBRHNEQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDbkRGOztBRHFERTtFQUNFLFVBQUE7QUNuREo7O0FEdURBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FDcERGOztBRHVEQTtFQUNFLG9DQUFBO0FDcERGOztBRHVEQTtFQUNFLG9DQUFBO0FDcERGOztBRHNERTtFQUNFLFlBQUE7RUFDQSxrREFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ3BESjs7QURzREk7RUF6ZkYsdUNBMGZ3QjtFQXpmeEIsZUF5Zm1GO0VBeGZuRixnQkF3ZnlGO0VBdmZ6RixvQ0F1Zm9EO0VBRWhELG1CQUFBO0FDbEROOztBRCtDSTtFQXpmRix1Q0EwZndCO0VBemZ4QixlQXlmbUY7RUF4Zm5GLGdCQXdmeUY7RUF2ZnpGLG9DQXVmb0Q7RUFFaEQsbUJBQUE7QUNsRE47O0FEdURBO0VBQ0UsZUFBQTtBQ3BERjs7QURzREU7RUFDRSw0Q0FBQTtFQUNBLDhDQUFBO0FDcERKOztBRHdEQTtFQUNFLGdCQUFBO0FDckRGOztBRHdEQTtFQTlnQkUsdUNBK2dCb0I7RUE5Z0JwQixlQThnQmlGO0VBN2dCakYsZ0JBNmdCdUY7RUE1Z0J2RixzQ0E0Z0JnRDtBQ2xEbEQ7O0FEb0RFO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtBQ2xESjs7QURzREE7RUFDRTtJQUNFLFVBQUE7RUNuREY7O0VEc0RBO0lBQ0UsZUFBQTtJQUNBLGFBQUE7RUNuREY7O0VEc0RBO0lBQ0UsNEJBQUE7SUFDQSw0QkFBQTtFQ25ERjs7RURzREE7SUFDRSx3QkFBQTtJQUNBLGtDQUFBO0lBQ0EsaUJBQUE7RUNuREY7O0VEdURFO0lBQ0Usa0JBQUE7RUNwREo7O0VEd0RBO0lBQ0UsbUNBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VDckRGOztFRHlERTtJQUNFLFdBQUE7RUN0REo7O0VEMERBOztJQUVFLGlCQUFBO0VDdkRGOztFRDJERTtJQUNFLGlCQUFBO0VDeERKOztFRDREQTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUN6REY7RUQyREU7SUFDRSxhQUFBO0VDekRKOztFRDZEQTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VDMURGO0VENERFO0lBQ0UsbUNBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtFQzFESjtFRDZERTtJQUNFLGdCQUFBO0VDM0RKOztFRCtEQTtJQUNFLGtCQUFBO0VDNURGO0VEOERFO0lBQ0UsbUNBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtFQzVESjs7RURnRUE7SUFDRSx1QkFBQTtJQUNBLGtCQUFBO0VDN0RGO0VEK0RFOztJQUVFLHNCQUFBO0lBQ0EsV0FBQTtFQzdESjtFRCtESTs7SUFDRSxzQkFBQTtJQUNBLGdCQUFBO0VDNUROO0VEZ0VFO0lBQ0UsbUJBQUE7RUM5REo7O0VEa0VBO0lBQ0Usa0JBQUE7RUMvREY7O0VEa0VBO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0VDL0RGOztFRGtFQTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxlQUFBO0VDL0RGOztFRGtFQTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUMvREY7RURpRUU7SUFDRSxrQkFBQTtFQy9ESjtFRG1FSTtJQUNFLFNBQUE7RUNqRU47RURxRUU7SUFDRSxlQUFBO0VDbkVKOztFRHVFQTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtFQ3BFRjs7RUR1RUE7SUFDRSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VDcEVGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbXBvbmVudC91YnMvY29tcG9uZW50cy91YnMtb3JkZXItZGV0YWlscy91YnMtb3JkZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiB0ZXh0X3N0eWxlKCRmb250LCAkY29sb3IsICRzaXplLCAkd2VpZ2h0KSB7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250O1xyXG4gIGZvbnQtc2l6ZTogJHNpemU7XHJcbiAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgYm94LXNoYWRvdzogMXB4IDRweCA4cHggcmdiKDEwMCAxMTQgMTI1IC8gMTglKTtcclxuICBwYWRkaW5nOiAxMHB4IDI1cHggNDBweDtcclxuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XHJcbn1cclxuXHJcbi5idG46bnRoLWNoaWxkKDEpIHtcclxuICBjb2xvcjogdmFyKC0tdWJzLXF1YXRlcm5hcnktZGFyay1ncmV5KTtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIG1hcmdpbi10b3A6IDQ2cHg7XHJcblxyXG4gICYgLmJ0bjpudGgtY2hpbGQoMSkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgd2lkdGg6IDEzNnB4O1xyXG4gIH1cclxuXHJcbiAgJiAuYnRuOm50aC1jaGlsZCgyKSB7XHJcbiAgICB3aWR0aDogODhweDtcclxuICB9XHJcbn1cclxuXHJcbmgzIHtcclxuICBAaW5jbHVkZSB0ZXh0X3N0eWxlKHZhcigtLXVicy1xdWF0ZXJuYXJ5LWZvbnQpLCB2YXIodWJzLXByaW1hcnktZ3JleSksIDI0cHgsIDcwMCk7XHJcbn1cclxuXHJcbi5lY28tc3RvcmU6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbi5lY28tc3RvcmU6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIEZpcmVmb3ggKi9cclxuLmVjby1zdG9yZVt0eXBlPSdudW1iZXInXSB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogM3JlbSAwIDA7XHJcblxyXG4gIC5vcmRlci10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyLWNvbnRlbnQge1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1zZWNvbmRhcnktZ3JleSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLmNob29zZS1sb2NhdGlvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcclxuICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgbWFyZ2luOiAwLjVyZW0gMCAycmVtIDA7XHJcbiAgICB3aWR0aDogMTRyZW07XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXVicy1xdWludHluYXJ5LWxpZ2h0LWdyZXkpO1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAxcmVtIDAgMS4ycmVtIDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXVicy1wcmltYXJ5LWxpZ2h0LWdyZXkpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS11YnMtcHJpbWFyeS1saWdodC1ncmV5KTtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICBAaW5jbHVkZSB0ZXh0X3N0eWxlKHZhcigtLXVicy1xdWF0ZXJuYXJ5LWZvbnQpLCB2YXIoLS11YnMtc2Vjb25kYXJ5LWdyZXkpLCAxNnB4LCA0MDApO1xyXG5cclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgaGVpZ2h0OiAyLjI1cmVtO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNvdW50IHtcclxuICAuaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdWJzLXF1aW50eW5hcnktbGlnaHQtZ3JleSk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC5pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxufVxyXG5cclxuLmJhZy1xdWFudGl0eV9wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWxpZ2h0LWdyZXkpO1xyXG59XHJcblxyXG4uYWRkT3JkZXJCdG4ge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tdWJzLWVsZWN0cmljLXZpb2xldCk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1xdWludHluYXJ5LWxpZ2h0LWdyZXkpO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbn1cclxuXHJcbi5yYWRpby1idG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG59XHJcblxyXG4uY2hlY2ttYXJrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgbGVmdDogNHB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICB3aWR0aDogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS13aGl0ZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5jdXN0b20tcmFkaW8tYnRuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICYgaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICY6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LXdoaXRlKTtcclxuICB9XHJcblxyXG4gICYgLmNoZWNrbWFyazo6YWZ0ZXIge1xyXG4gICAgdG9wOiAxNCU7XHJcbiAgICBsZWZ0OiAxNSU7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XHJcbiAgfVxyXG5cclxuICAmIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LXdoaXRlKTtcclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICB3aWR0aDogOHJlbTtcclxuICBoZWlnaHQ6IDIuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi50b3RhbEluZm8ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICAudG90YWwtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtc2Vjb25kYXJ5LWdyZXkpO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWZvbnQpO1xyXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1vbmV5LXNhdmVkIHtcclxuICAgIEBpbmNsdWRlIHRleHRfc3R5bGUodmFyKC0tdWJzLXF1YXRlcm5hcnktZm9udCksIHZhcigtLXVicy1lbGVjdHJpYy12aW9sZXQpICFpbXBvcnRhbnQsIDEwcHgsIDQwMCk7XHJcbiAgfVxyXG5cclxuICAudmFsaWRNZXMge1xyXG4gICAgbWFyZ2luLXRvcDogLTFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnVzZXItbG9jYXRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG5cclxuICAuY2hhbmdlLWxvY2F0aW9uIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1lbGVjdHJpYy12aW9sZXQpO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5saXN0LWxvY2F0aW9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBsZWZ0OiAxMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5taWRkbGUtY29udGFpbmVyIHtcclxuICAuc2hvd1RvdGFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1ib3JkZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdWJzLXByaW1hcnktd2hpdGUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdWJzLXF1aW50eW5hcnktbGlnaHQtZ3JleSk7XHJcbiAgfVxyXG5cclxuICAuY2VydGlmaWNhdGUtY29udGFpbmVyLFxyXG4gIC5hZGRDZXJ0aWZpY2F0ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgd2lkdGg6IDQ0JTtcclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudmFsaWRNZXMge1xyXG4gICAgICB3aWR0aDogNjUlO1xyXG4gICAgICBtYXJnaW46IC0xcmVtIDAgMXJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZWVuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogOHJlbTtcclxuICAgIGhlaWdodDogMi4yNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC5hZGRDZXJ0aWZpY2F0ZSB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWRkQ2VydGlmaWNhdGVCdG4ge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1lbGVjdHJpYy12aW9sZXQpO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hZGRCb251cyB7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBjb2xvcjogdmFyKC0tdWJzLWVsZWN0cmljLXZpb2xldCk7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNtYWxsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmJvdHRvbSB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWZvbnQpO1xyXG4gIHBhZGRpbmc6IDNyZW0gMDtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS11YnMtcHJpbWFyeS1saWdodC1ncmV5KTtcclxuXHJcbiAgLmN1c3RvbS1jb250cm9sIHtcclxuICAgIHBhZGRpbmctbGVmdDogMS40cmVtO1xyXG4gIH1cclxuXHJcbiAgLmJvcmRlci1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11YnMtcXVpbnR5bmFyeS1saWdodC1ncmV5KTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tY29udHJvbC1sYWJlbCB7XHJcbiAgICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWJzLXByaW1hcnktd2hpdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuaW5hY3RpdmUge1xyXG4gICAgJiA+IGlucHV0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWJzLWdyZXktd2hpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiBzcGFuIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5lY28tc3RvcmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktbGlnaHQtZ3JleSk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiBbaW5wdXQtY2xvc2UtYnV0dG9uXSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAyOXB4O1xyXG4gICAgICByaWdodDogNXB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tdWJzLXF1aW50eW5hcnktbGlnaHQtZ3JleSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbiAgICAgIHBhZGRpbmc6IDAgMC4yZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuOmZvY3VzLFxyXG4gICAgaW5wdXQ6Zm9jdXMgKyBzcGFuLFxyXG4gICAgJjpob3ZlciA+IFtpbnB1dC1jbG9zZS1idXR0b25dIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zdW0ge1xyXG4gIHdpZHRoOiA2cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xyXG5cclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubWlkZGxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDMwcHggMDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXVicy1wcmltYXJ5LWxpZ2h0LWdyZXkpO1xyXG59XHJcblxyXG4ubWVzc2FnZXMtY29udGFpbmVyIHtcclxuICB3aWR0aDogNTAlO1xyXG5cclxuICBzbWFsbCB7XHJcbiAgICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JlZW4pO1xyXG4gIH1cclxufVxyXG5cclxuLnBvaW50cyB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWZvbnQpO1xyXG4gIG1hcmdpbi10b3A6IDNlbTtcclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAucG9pbnRzLWJhbGFuY2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgfVxyXG5cclxuICAuYm9udXMtaG93LXRvLWxpbmssXHJcbiAgc21hbGwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1lbGVjdHJpYy12aW9sZXQpO1xyXG4gIH1cclxufVxyXG5cclxuLm9yZGVyLW5vdGlmaWNhdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG59XHJcblxyXG5oNSB7XHJcbiAgQGluY2x1ZGUgdGV4dF9zdHlsZSh2YXIoLS11YnMtcXVhdGVybmFyeS1mb250KSwgdmFyKC0tdWJzLXByaW1hcnktZ3JleSksIDE2cHgsIGJvbGQpO1xyXG5cclxuICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuLnByaW1hcnktZ2xvYmFsLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogOHB4IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogdmFyKC0tdWJzLXF1YXRlcm5hcnktZGFyay1ncmV5KTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xyXG59XHJcblxyXG4ucHJpbWFyeS11YnMtYnV0dG9uIHtcclxuICBwYWRkaW5nOiA4cHggMTRweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XHJcbn1cclxuXHJcbi5jYW5jZWwtYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdWJzLXF1YXRlcm5hcnktZGFyay1ncmV5KTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5zaG9wX3N1Ym1pdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgd2lkdGg6IDM5JTtcclxuICB9XHJcbn1cclxuXHJcbi5ib3R0b20tdGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgcGFkZGluZzogMS41cmVtIDAgMCAwLjVyZW07XHJcbn1cclxuXHJcbi5jb21tZW50IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS11YnMtcHJpbWFyeS13aGl0ZSk7XHJcbn1cclxuXHJcbi5ib3R0b21fY29tbWVudCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdWJzLXByaW1hcnktd2hpdGUpO1xyXG5cclxuICAudGV4dGFyZWEge1xyXG4gICAgaGVpZ2h0OiA2cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdWJzLXF1aW50eW5hcnktbGlnaHQtZ3JleSk7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS11YnMtcHJpbWFyeS13aGl0ZSk7XHJcblxyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBAaW5jbHVkZSB0ZXh0X3N0eWxlKHZhcigtLXVicy1xdWF0ZXJuYXJ5LWZvbnQpLCB2YXIoLS11YnMtcHJpbWFyeS1saWdodC1ncmV5KSwgMTRweCwgNDAwKTtcclxuXHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLW1haW4ge1xyXG4gIGhlaWdodDogMi43NXJlbTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS11YnMtcXVhdGVybmFyeS1saWdodC1ncmV5KTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdWJzLXF1YXRlcm5hcnktbGlnaHQtZ3JleSk7XHJcbiAgfVxyXG59XHJcblxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmJhZy1uYW1lIHtcclxuICBAaW5jbHVkZSB0ZXh0X3N0eWxlKHZhcigtLXVicy1xdWF0ZXJuYXJ5LWZvbnQpLCB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpLCAxNnB4LCA0MDApO1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICAvLyBuZWVkIHRoaXMgdG8gZml4IGlzc3VlIG9uIHNjcmVlbnMobWF4LXdpZHRoIDM3NXB4KSBiZWNhdXNlIHNvbWVvbmUgdXNlZCBib290c3RyYXBcclxuICAubWFyZ2luLXJpZ2h0IHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogLTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMmVtIDAgMWVtO1xyXG4gIH1cclxuXHJcbiAgLmNvdW50IHtcclxuICAgIC5pbnB1dCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hZGRPcmRlckJ0biB7XHJcbiAgICBjb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmV5KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmJvdHRvbV9jb21tZW50IHtcclxuICAgIC50ZXh0YXJlYSB7XHJcbiAgICAgIGhlaWdodDogOGVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxhYmVsLFxyXG4gIC5iYWctbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcblxyXG4gIC50b3RhbEluZm8ge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBtYXJnaW46IDFyZW0gMCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5jaG9vc2UtbG9jYXRpb24ge1xyXG4gICAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVzZXItbG9jYXRpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5jaGFuZ2UtbG9jYXRpb24ge1xyXG4gICAgICBjb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmV5KTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xyXG4gICAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5saXN0LWxvY2F0aW9ucyB7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucG9pbnRzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAuYm9udXMtaG93LXRvLWxpbmsge1xyXG4gICAgICBjb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmV5KTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xyXG4gICAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1pZGRsZS1jb250YWluZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLmNlcnRpZmljYXRlLWNvbnRhaW5lcixcclxuICAgIC5hZGRDZXJ0aWZpY2F0ZSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG5cclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbSAxLjlyZW07XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMjhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGg1IHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC52YWxpZE1lcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubWVzc2FnZXMtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnJhZGlvLWJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIG1hcmdpbjogMS41ZW0gMDtcclxuICB9XHJcblxyXG4gIC5ib3R0b20ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5lY28tc3RvcmUge1xyXG4gICAgICAmID4gW2lucHV0LWNsb3NlLWJ1dHRvbl0ge1xyXG4gICAgICAgIHRvcDogMjZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2hvcF9zdWJtaXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuYm90dG9tLXRleHQge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDFweCA0cHggOHB4IHJnYmEoMTAwLCAxMTQsIDEyNSwgMC4xOCk7XG4gIHBhZGRpbmc6IDEwcHggMjVweCA0MHB4O1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XG59XG5cbi5idG46bnRoLWNoaWxkKDEpIHtcbiAgY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XG59XG5cbi5idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogNDZweDtcbn1cbi5idXR0b25zIC5idG46bnRoLWNoaWxkKDEpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB3aWR0aDogMTM2cHg7XG59XG4uYnV0dG9ucyAuYnRuOm50aC1jaGlsZCgyKSB7XG4gIHdpZHRoOiA4OHB4O1xufVxuXG5oMyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS11YnMtcXVhdGVybmFyeS1mb250KTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKHVicy1wcmltYXJ5LWdyZXkpO1xufVxuXG4uZWNvLXN0b3JlOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuLmVjby1zdG9yZTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBGaXJlZm94ICovXG4uZWNvLXN0b3JlW3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG4uaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogM3JlbSAwIDA7XG59XG4uaGVhZGVyIC5vcmRlci10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uaGVhZGVyIC5vcmRlci1jb250ZW50IHtcbiAgY29sb3I6IHZhcigtLXVicy1zZWNvbmRhcnktZ3JleSk7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uaGVhZGVyIC5jaG9vc2UtbG9jYXRpb24ge1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktd2hpdGUpO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBtYXJnaW46IDAuNXJlbSAwIDJyZW0gMDtcbiAgd2lkdGg6IDE0cmVtO1xuICBib3JkZXItY29sb3I6IHZhcigtLXVicy1xdWludHluYXJ5LWxpZ2h0LWdyZXkpO1xufVxuXG4ubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxcmVtIDAgMS4ycmVtIDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS11YnMtcHJpbWFyeS1saWdodC1ncmV5KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXVicy1wcmltYXJ5LWxpZ2h0LWdyZXkpO1xufVxuXG4ubGFiZWwge1xuICBmb250LWZhbWlseTogdmFyKC0tdWJzLXF1YXRlcm5hcnktZm9udCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLXVicy1zZWNvbmRhcnktZ3JleSk7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogMi4yNXJlbTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvdW50IC5pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXVicy1xdWludHluYXJ5LWxpZ2h0LWdyZXkpO1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvdW50IC5pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5iYWctcXVhbnRpdHlfcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktbGlnaHQtZ3JleSk7XG59XG5cbi5hZGRPcmRlckJ0biB7XG4gIHdpZHRoOiAyNTBweDtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHZhcigtLXVicy1lbGVjdHJpYy12aW9sZXQpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uYWRkT3JkZXJCdG46ZGlzYWJsZWQge1xuICBjb2xvcjogdmFyKC0tdWJzLXF1aW50eW5hcnktbGlnaHQtZ3JleSk7XG59XG4uYWRkT3JkZXJCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLmFkZE9yZGVyQnRuOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5yYWRpby1idG4ge1xuICBtYXJnaW4tbGVmdDogLTZweDtcbn1cblxuLmNoZWNrbWFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDRweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWJzLXByaW1hcnktd2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XG59XG4uY2hlY2ttYXJrOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmN1c3RvbS1yYWRpby1idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5jdXN0b20tcmFkaW8tYnRuIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY3VzdG9tLXJhZGlvLWJ0bjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS13aGl0ZSk7XG59XG4uY3VzdG9tLXJhZGlvLWJ0biAuY2hlY2ttYXJrOjphZnRlciB7XG4gIHRvcDogMTQlO1xuICBsZWZ0OiAxNSU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdWJzLXF1YXRlcm5hcnktZGFyay1ncmV5KTtcbn1cbi5jdXN0b20tcmFkaW8tYnRuIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWJzLXByaW1hcnktd2hpdGUpO1xufVxuLmN1c3RvbS1yYWRpby1idG4gaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6OmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiA4cmVtO1xuICBoZWlnaHQ6IDIuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnRvdGFsSW5mbyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnRvdGFsSW5mbyAudG90YWwtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGNvbG9yOiB2YXIoLS11YnMtc2Vjb25kYXJ5LWdyZXkpO1xuICBmb250LWZhbWlseTogdmFyKC0tdWJzLXF1YXRlcm5hcnktZm9udCk7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbn1cbi50b3RhbEluZm8gLnRvdGFsLWNvbnRlbnQgc3Ryb25nIHtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XG59XG4udG90YWxJbmZvIC5tb25leS1zYXZlZCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS11YnMtcXVhdGVybmFyeS1mb250KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0tdWJzLWVsZWN0cmljLXZpb2xldCkgIWltcG9ydGFudDtcbn1cbi50b3RhbEluZm8gLnZhbGlkTWVzIHtcbiAgbWFyZ2luLXRvcDogLTFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi51c2VyLWxvY2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cbi51c2VyLWxvY2F0aW9uIC5jaGFuZ2UtbG9jYXRpb24ge1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHZhcigtLXVicy1lbGVjdHJpYy12aW9sZXQpO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udXNlci1sb2NhdGlvbiAuY2hhbmdlLWxvY2F0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi51c2VyLWxvY2F0aW9uIC5saXN0LWxvY2F0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxMzBweDtcbn1cblxuLm1pZGRsZS1jb250YWluZXIgLnNob3dUb3RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuaW5wdXQtYm9yZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdWJzLXByaW1hcnktd2hpdGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11YnMtcXVpbnR5bmFyeS1saWdodC1ncmV5KTtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5jZXJ0aWZpY2F0ZS1jb250YWluZXIsXG4ubWlkZGxlLWNvbnRhaW5lciAuYWRkQ2VydGlmaWNhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICB3aWR0aDogNDQlO1xufVxuLm1pZGRsZS1jb250YWluZXIgLmNlcnRpZmljYXRlLWNvbnRhaW5lciBpbnB1dCxcbi5taWRkbGUtY29udGFpbmVyIC5hZGRDZXJ0aWZpY2F0ZSBpbnB1dCB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5jZXJ0aWZpY2F0ZS1jb250YWluZXIgLnZhbGlkTWVzLFxuLm1pZGRsZS1jb250YWluZXIgLmFkZENlcnRpZmljYXRlIC52YWxpZE1lcyB7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogLTFyZW0gMCAxcmVtO1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JlZW4pO1xufVxuLm1pZGRsZS1jb250YWluZXIgYnV0dG9uIHtcbiAgd2lkdGg6IDhyZW07XG4gIGhlaWdodDogMi4yNXJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1pZGRsZS1jb250YWluZXIgLmFkZENlcnRpZmljYXRlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5hZGRDZXJ0aWZpY2F0ZSBidXR0b24ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLm1pZGRsZS1jb250YWluZXIgLmFkZENlcnRpZmljYXRlQnRuIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogdmFyKC0tdWJzLWVsZWN0cmljLXZpb2xldCk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5hZGRDZXJ0aWZpY2F0ZUJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuYWRkQm9udXMge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuLm1pZGRsZS1jb250YWluZXIgLmFkZEJvbnVzIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tdWJzLWVsZWN0cmljLXZpb2xldCk7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cbi5taWRkbGUtY29udGFpbmVyIHNtYWxsIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5ib3R0b20ge1xuICBmb250LWZhbWlseTogdmFyKC0tdWJzLXF1YXRlcm5hcnktZm9udCk7XG4gIHBhZGRpbmc6IDNyZW0gMDtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXVicy1wcmltYXJ5LWxpZ2h0LWdyZXkpO1xufVxuLmJvdHRvbSAuY3VzdG9tLWNvbnRyb2wge1xuICBwYWRkaW5nLWxlZnQ6IDEuNHJlbTtcbn1cbi5ib3R0b20gLmJvcmRlci1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXVicy1xdWludHluYXJ5LWxpZ2h0LWdyZXkpO1xufVxuLmJvdHRvbSAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5ib3R0b20gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS13aGl0ZSk7XG59XG4uYm90dG9tIHAge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uYm90dG9tIC5pbmFjdGl2ZSA+IGlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWJzLWdyZXktd2hpdGUpO1xufVxuLmJvdHRvbSAuaW5hY3RpdmUgPiBzcGFuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5ib3R0b20gLmVjby1zdG9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ib3R0b20gLmVjby1zdG9yZSA6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWxpZ2h0LWdyZXkpO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5ib3R0b20gLmVjby1zdG9yZSA+IFtpbnB1dC1jbG9zZS1idXR0b25dIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI5cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIGNvbG9yOiB2YXIoLS11YnMtcXVpbnR5bmFyeS1saWdodC1ncmV5KTtcbiAgZm9udC1zaXplOiAxLjdlbTtcbiAgcGFkZGluZzogMCAwLjJlbTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJvdHRvbSAuZWNvLXN0b3JlIHNwYW46Zm9jdXMsXG4uYm90dG9tIC5lY28tc3RvcmUgaW5wdXQ6Zm9jdXMgKyBzcGFuLCAuYm90dG9tIC5lY28tc3RvcmU6aG92ZXIgPiBbaW5wdXQtY2xvc2UtYnV0dG9uXSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zdW0ge1xuICB3aWR0aDogNnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XG59XG4uc3VtIC5mb3JtLWNvbnRyb2wge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWlkZGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdWJzLXByaW1hcnktbGlnaHQtZ3JleSk7XG59XG5cbi5tZXNzYWdlcy1jb250YWluZXIge1xuICB3aWR0aDogNTAlO1xufVxuLm1lc3NhZ2VzLWNvbnRhaW5lciBzbWFsbCB7XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmVlbik7XG59XG5cbi5wb2ludHMge1xuICBmb250LWZhbWlseTogdmFyKC0tdWJzLXF1YXRlcm5hcnktZm9udCk7XG4gIG1hcmdpbi10b3A6IDNlbTtcbn1cbi5wb2ludHMgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5wb2ludHMgLnBvaW50cy1iYWxhbmNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbn1cbi5wb2ludHMgLmJvbnVzLWhvdy10by1saW5rLFxuLnBvaW50cyBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXVicy1lbGVjdHJpYy12aW9sZXQpO1xufVxuXG4ub3JkZXItbm90aWZpY2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbn1cblxuaDUge1xuICBmb250LWZhbWlseTogdmFyKC0tdWJzLXF1YXRlcm5hcnktZm9udCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5wcmltYXJ5LWdsb2JhbC1idXR0b24ge1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcbn1cblxuLnByaW1hcnktdWJzLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XG4gIGJhY2tncm91bmQ6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xufVxuXG4uY2FuY2VsLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdWJzLXF1YXRlcm5hcnktZGFyay1ncmV5KTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc2hvcF9zdWJtaXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4uc2hvcF9zdWJtaXQgLmZvcm0tZ3JvdXAge1xuICB3aWR0aDogMzklO1xufVxuXG4uYm90dG9tLXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nOiAxLjVyZW0gMCAwIDAuNXJlbTtcbn1cblxuLmNvbW1lbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS11YnMtcHJpbWFyeS13aGl0ZSk7XG59XG5cbi5ib3R0b21fY29tbWVudCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXVicy1wcmltYXJ5LXdoaXRlKTtcbn1cbi5ib3R0b21fY29tbWVudCAudGV4dGFyZWEge1xuICBoZWlnaHQ6IDZyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXVicy1xdWludHluYXJ5LWxpZ2h0LWdyZXkpO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXVicy1wcmltYXJ5LXdoaXRlKTtcbn1cbi5ib3R0b21fY29tbWVudCAudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWZvbnQpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1saWdodC1ncmV5KTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLmJ0bi1tYWluIHtcbiAgaGVpZ2h0OiAyLjc1cmVtO1xufVxuLmJ0bi1tYWluOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdWJzLXF1YXRlcm5hcnktbGlnaHQtZ3JleSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdWJzLXF1YXRlcm5hcnktbGlnaHQtZ3JleSk7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmJhZy1uYW1lIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWZvbnQpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xufVxuLmJhZy1uYW1lOmxhc3QtY2hpbGQge1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAubWF0LWhvcml6b250YWwtY29udGVudC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuXG4gIC5tYXJnaW4tcmlnaHQge1xuICAgIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDJlbSAwIDFlbTtcbiAgfVxuXG4gIC5jb3VudCAuaW5wdXQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5hZGRPcmRlckJ0biB7XG4gICAgY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JleSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgbWFyZ2luOiAxZW0gMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYm90dG9tX2NvbW1lbnQgLnRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDhlbTtcbiAgfVxuXG4gIC5sYWJlbCxcbi5iYWctbmFtZSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cblxuICAudG90YWxJbmZvIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgbWFyZ2luOiAxcmVtIDAgMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmhlYWRlciAuY2hvb3NlLWxvY2F0aW9uIHtcbiAgICBtYXJnaW46IDFlbSAwO1xuICB9XG5cbiAgLnVzZXItbG9jYXRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC51c2VyLWxvY2F0aW9uIC5jaGFuZ2UtbG9jYXRpb24ge1xuICAgIGNvbG9yOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZXkpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICAgIG1hcmdpbjogMWVtIDA7XG4gIH1cbiAgLnVzZXItbG9jYXRpb24gLmxpc3QtbG9jYXRpb25zIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG5cbiAgLnBvaW50cyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5wb2ludHMgLmJvbnVzLWhvdy10by1saW5rIHtcbiAgICBjb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmV5KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICBtYXJnaW46IDFlbSAwO1xuICB9XG5cbiAgLm1pZGRsZS1jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubWlkZGxlLWNvbnRhaW5lciAuY2VydGlmaWNhdGUtY29udGFpbmVyLFxuLm1pZGRsZS1jb250YWluZXIgLmFkZENlcnRpZmljYXRlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5taWRkbGUtY29udGFpbmVyIC5jZXJ0aWZpY2F0ZS1jb250YWluZXIgaW5wdXQsXG4ubWlkZGxlLWNvbnRhaW5lciAuYWRkQ2VydGlmaWNhdGUgaW5wdXQge1xuICAgIHBhZGRpbmc6IDAuN3JlbSAxLjlyZW07XG4gICAgbWF4LXdpZHRoOiAxMjhweDtcbiAgfVxuICAubWlkZGxlLWNvbnRhaW5lciBoNSB7XG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcbiAgfVxuXG4gIC52YWxpZE1lcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLm1lc3NhZ2VzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnJhZGlvLWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBtYXJnaW46IDEuNWVtIDA7XG4gIH1cblxuICAuYm90dG9tIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmJvdHRvbSBoMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG4gIC5ib3R0b20gLmVjby1zdG9yZSA+IFtpbnB1dC1jbG9zZS1idXR0b25dIHtcbiAgICB0b3A6IDI2cHg7XG4gIH1cbiAgLmJvdHRvbSBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAuc2hvcF9zdWJtaXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmJvdHRvbS10ZXh0IHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UBSOrderDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'app-ubs-order-details',
          templateUrl: './ubs-order-details.component.html',
          styleUrls: ['./ubs-order-details.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_ubs_order_form_service__WEBPACK_IMPORTED_MODULE_7__["UBSOrderFormService"]
        }, {
          type: _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"]
        }, {
          type: _services_order_service__WEBPACK_IMPORTED_MODULE_9__["OrderService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/component/ubs/components/ubs-order-details/ubs-order-location-popup/ubs-order-location-popup.component.ts":
  /*!********************************************************************************************************************************!*\
    !*** ./src/app/main/component/ubs/components/ubs-order-details/ubs-order-location-popup/ubs-order-location-popup.component.ts ***!
    \********************************************************************************************************************************/

  /*! exports provided: UbsOrderLocationPopupComponent */

  /***/
  function srcAppMainComponentUbsComponentsUbsOrderDetailsUbsOrderLocationPopupUbsOrderLocationPopupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UbsOrderLocationPopupComponent", function () {
      return UbsOrderLocationPopupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/order.service */
    "./src/app/main/component/ubs/services/order.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @global-service/localstorage/local-storage.service */
    "./src/app/main/service/localstorage/local-storage.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_spinner_ubs_spinner_ubs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../../shared/spinner-ubs/spinner-ubs.component */
    "./src/app/shared/spinner-ubs/spinner-ubs.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_sort_list_by_lang_filter_list_by_lang_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../../../shared/sort-list-by-lang/filter-list-by-lang.pipe */
    "./src/app/shared/sort-list-by-lang/filter-list-by-lang.pipe.ts");

    function UbsOrderLocationPopupComponent_form_8_option_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var location_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", location_r4.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", location_r4.name, " ");
      }
    }

    function UbsOrderLocationPopupComponent_form_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UbsOrderLocationPopupComponent_form_8_Template_select_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.selectedLocationId = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UbsOrderLocationPopupComponent_form_8_option_2_Template, 2, 2, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "filterByLang");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectedLocationId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r0.locations));
      }
    }

    function UbsOrderLocationPopupComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ubs-spinner", 14);
      }
    }

    var UbsOrderLocationPopupComponent = /*#__PURE__*/function () {
      function UbsOrderLocationPopupComponent(router, orderService, dialogRef, localStorageService) {
        _classCallCheck(this, UbsOrderLocationPopupComponent);

        this.router = router;
        this.orderService = orderService;
        this.dialogRef = dialogRef;
        this.localStorageService = localStorageService;
        this.closeButton = './assets/img/profile/icons/cancel.svg';
        this.isFetching = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.currentLanguage = this.localStorageService.getCurrentLanguage();
      }

      _createClass(UbsOrderLocationPopupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getLocations();
        }
      }, {
        key: "redirectToMain",
        value: function redirectToMain() {
          this.router.navigate(['ubs']);
        }
      }, {
        key: "setCurrentLocation",
        value: function setCurrentLocation(currentLanguage) {
          var _this23 = this;

          this.currentLocation = this.locations.find(function (loc) {
            return loc.id === _this23.selectedLocationId && loc.languageCode === currentLanguage;
          }).name;
        }
      }, {
        key: "getLocations",
        value: function getLocations() {
          var _this24 = this;

          this.isFetching = true;
          this.orderService.getLocations().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (res) {
            // get rid of "Країна чудес"
            _this24.locations = res.slice(0, 4);
            _this24.selectedLocationId = _this24.locations[0].id;
            _this24.isFetching = false;
          });
        }
      }, {
        key: "saveLocation",
        value: function saveLocation() {
          var _this25 = this;

          var selectedLocation = {
            locationId: this.selectedLocationId
          };
          this.orderService.addLocation(selectedLocation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function () {
            _this25.orderService.completedLocation(true);

            _this25.localStorageService.setLocationId(_this25.selectedLocationId);

            _this25.localStorageService.setLocations(_this25.locations);

            _this25.setCurrentLocation(_this25.currentLanguage);

            _this25.orderService.setLocationData(_this25.currentLocation);
          });
        }
      }, {
        key: "passDataToComponent",
        value: function passDataToComponent() {
          this.dialogRef.close({
            locationId: this.selectedLocationId,
            currentLanguage: this.currentLanguage,
            data: this.locations
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.passDataToComponent();
          this.destroy$.next();
          this.destroy$.complete();
        }
      }]);

      return UbsOrderLocationPopupComponent;
    }();

    UbsOrderLocationPopupComponent.ɵfac = function UbsOrderLocationPopupComponent_Factory(t) {
      return new (t || UbsOrderLocationPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]));
    };

    UbsOrderLocationPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UbsOrderLocationPopupComponent,
      selectors: [["app-ubs-order-location-popup"]],
      decls: 18,
      vars: 14,
      consts: [[1, "dialog-container"], [1, "close-container"], ["mat-dialog-close", "", 1, "close-btn", 3, "click"], ["alt", "close", 3, "src"], [1, "title"], ["class", "form", 4, "ngIf", "ngIfElse"], ["spinner", ""], ["align", "end", 1, "footer-btns"], ["mat-dialog-close", "", 1, "btn", "secondary-global-button", "cancel-btn", 3, "click"], ["cdkFocusInitial", "", 1, "btn-ubs", "primary-global-button", 3, "disabled", "mat-dialog-close", "click"], [1, "form"], ["name", "region", 1, "select", "form-select", "form-select-lg", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "mx-auto"]],
      template: function UbsOrderLocationPopupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UbsOrderLocationPopupComponent_Template_button_click_2_listener() {
            return ctx.redirectToMain();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UbsOrderLocationPopupComponent_form_8_Template, 4, 4, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UbsOrderLocationPopupComponent_ng_template_9_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-actions", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UbsOrderLocationPopupComponent_Template_button_click_12_listener() {
            return ctx.redirectToMain();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UbsOrderLocationPopupComponent_Template_button_click_15_listener() {
            return ctx.saveLocation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.closeButton, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "order-details.location.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFetching)("ngIfElse", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 10, "order-details.location.btn.back"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isFetching)("mat-dialog-close", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 12, "order-details.location.btn.continue"), " ");
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogActions"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _shared_spinner_ubs_spinner_ubs_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerUbsComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _shared_sort_list_by_lang_filter_list_by_lang_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterListByLangPipe"]],
      styles: [".dialog-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  justify-content: space-around;\n  align-items: center;\n  width: 470px;\n  height: 400px;\n  font-family: var(--primary-font);\n  font-weight: bold;\n  font-size: larger;\n}\n.dialog-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 15px;\n  font-weight: bolder;\n}\n.dialog-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  margin: 55px 20px 50px 20px;\n  font-size: 20px;\n}\n.dialog-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  margin: 20px;\n  height: 50px;\n  padding: 0 10px;\n}\n.dialog-container[_ngcontent-%COMP%]   .close-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.dialog-container[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  outline: none;\n}\n.dialog-container[_ngcontent-%COMP%]   .footer-btns[_ngcontent-%COMP%] {\n  bottom: 0;\n  right: 0;\n  margin: 20px 0 0 0;\n}\n.dialog-container[_ngcontent-%COMP%]   .footer-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  border-radius: 4px;\n  width: 9rem;\n  height: 3rem;\n}\n.dialog-container[_ngcontent-%COMP%]   .btn-ubs[_ngcontent-%COMP%] {\n  height: 44px;\n  width: 200px;\n  font-size: 18px;\n  background-color: var(--ubs-button-light-green);\n  color: var(--ubs-tertiary-dark-grey);\n  margin-top: 25px;\n}\n.dialog-container[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid var(--ubs-quaternary-dark-grey);\n  font-size: 18px;\n  color: var(--ubs-quaternary-dark-grey);\n}\n@media screen and (max-width: 575px) {\n  .dialog-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100vh;\n    justify-content: space-between;\n  }\n  .dialog-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    line-height: 1.5em;\n    margin: 1em 0.5em;\n    text-align: center;\n  }\n  .dialog-container[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n  .dialog-container[_ngcontent-%COMP%]   .footer-btns[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    gap: 2em;\n    align-content: space-between;\n    justify-content: center;\n    align-items: center;\n    padding-bottom: 10em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvdWJzL2NvbXBvbmVudHMvdWJzLW9yZGVyLWRldGFpbHMvdWJzLW9yZGVyLWxvY2F0aW9uLXBvcHVwL0Q6XFxTb2Z0U2VydmVfQWNhZGVteVxcR3JlZW5DaXR5XFxnaC1wYWdlc1xcR3JlZW5DaXR5Q2xpZW50L3NyY1xcYXBwXFxtYWluXFxjb21wb25lbnRcXHVic1xcY29tcG9uZW50c1xcdWJzLW9yZGVyLWRldGFpbHNcXHVicy1vcmRlci1sb2NhdGlvbi1wb3B1cFxcdWJzLW9yZGVyLWxvY2F0aW9uLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbXBvbmVudC91YnMvY29tcG9uZW50cy91YnMtb3JkZXItZGV0YWlscy91YnMtb3JkZXItbG9jYXRpb24tcG9wdXAvdWJzLW9yZGVyLWxvY2F0aW9uLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNKRjtBRE1FO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDSko7QURPRTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtBQ0xKO0FET0k7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNMTjtBRFNFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ1BKO0FEVUU7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FDUko7QURXRTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUNUSjtBRFdJO0VBQ0UsY0FBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNWTjtBRGNFO0VBMURBLFlBMkQ0QjtFQTFENUIsWUEwRGtDO0VBRWhDLGVBQUE7RUFDQSwrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNaSjtBRGVFO0VBQ0Usa0JBQUE7RUFDQSxpREFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtBQ2JKO0FEaUJBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0VDZEY7RURnQkU7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNkSjtFRGtCSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDaEJOO0VEb0JFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VDbEJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbXBvbmVudC91YnMvY29tcG9uZW50cy91YnMtb3JkZXItZGV0YWlscy91YnMtb3JkZXItbG9jYXRpb24tcG9wdXAvdWJzLW9yZGVyLWxvY2F0aW9uLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGhlaWdodC1hbmQtd2lkdGgoJGhlaWdodCwgJHdpZHRoKSB7XHJcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gIHdpZHRoOiAkd2lkdGg7XHJcbn1cclxuXHJcbi5kaWFsb2ctY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQ3MHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0ge1xyXG4gICAgbWFyZ2luOiA1NXB4IDIwcHggNTBweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxuICAgIC5zZWxlY3Qge1xyXG4gICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNsb3NlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlLWJ0biB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWJ0bnMge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgIC8vcGFkZGluZzogOHB4IDI0cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgd2lkdGg6IDlyZW07XHJcbiAgICAgIGhlaWdodDogM3JlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG4tdWJzIHtcclxuICAgIEBpbmNsdWRlIGhlaWdodC1hbmQtd2lkdGgoNDRweCwgMjAwcHgpO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xyXG4gICAgY29sb3I6IHZhcigtLXVicy10ZXJ0aWFyeS1kYXJrLWdyZXkpO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcblxyXG4gIC5jYW5jZWwtYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tdWJzLXF1YXRlcm5hcnktZGFyay1ncmV5KTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLmRpYWxvZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgbWFyZ2luOiAxZW0gMC41ZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY2xvc2UtYnRuIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLWJ0bnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBnYXA6IDJlbTtcclxuICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMGVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuZGlhbG9nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA0NzBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IGxhcmdlcjtcbn1cbi5kaWFsb2ctY29udGFpbmVyIC50aXRsZSB7XG4gIG1hcmdpbjogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5kaWFsb2ctY29udGFpbmVyIC5mb3JtIHtcbiAgbWFyZ2luOiA1NXB4IDIwcHggNTBweCAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uZGlhbG9nLWNvbnRhaW5lciAuZm9ybSAuc2VsZWN0IHtcbiAgbWFyZ2luOiAyMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5kaWFsb2ctY29udGFpbmVyIC5jbG9zZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5kaWFsb2ctY29udGFpbmVyIC5jbG9zZS1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmRpYWxvZy1jb250YWluZXIgLmZvb3Rlci1idG5zIHtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAyMHB4IDAgMCAwO1xufVxuLmRpYWxvZy1jb250YWluZXIgLmZvb3Rlci1idG5zIGJ1dHRvbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiA5cmVtO1xuICBoZWlnaHQ6IDNyZW07XG59XG4uZGlhbG9nLWNvbnRhaW5lciAuYnRuLXVicyB7XG4gIGhlaWdodDogNDRweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xuICBjb2xvcjogdmFyKC0tdWJzLXRlcnRpYXJ5LWRhcmstZ3JleSk7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG4uZGlhbG9nLWNvbnRhaW5lciAuY2FuY2VsLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdWJzLXF1YXRlcm5hcnktZGFyay1ncmV5KTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogdmFyKC0tdWJzLXF1YXRlcm5hcnktZGFyay1ncmV5KTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmRpYWxvZy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC5kaWFsb2ctY29udGFpbmVyIC50aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgIG1hcmdpbjogMWVtIDAuNWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZGlhbG9nLWNvbnRhaW5lciAuY2xvc2UtYnRuIGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC5kaWFsb2ctY29udGFpbmVyIC5mb290ZXItYnRucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogMmVtO1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBlbTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UbsOrderLocationPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ubs-order-location-popup',
          templateUrl: './ubs-order-location-popup.component.html',
          styleUrls: ['./ubs-order-location-popup.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
        }, {
          type: _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/component/ubs/components/ubs-order-form/ubs-order-form.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/main/component/ubs/components/ubs-order-form/ubs-order-form.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: UBSOrderFormComponent */

  /***/
  function srcAppMainComponentUbsComponentsUbsOrderFormUbsOrderFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UBSOrderFormComponent", function () {
      return UBSOrderFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/order.service */
    "./src/app/main/component/ubs/services/order.service.ts");
    /* harmony import */


    var _services_ubs_order_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/ubs-order-form.service */
    "./src/app/main/component/ubs/services/ubs-order-form.service.ts");
    /* harmony import */


    var _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @global-service/localstorage/local-storage.service */
    "./src/app/main/service/localstorage/local-storage.service.ts");
    /* harmony import */


    var _ubs_order_details_ubs_order_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../ubs-order-details/ubs-order-details.component */
    "./src/app/main/component/ubs/components/ubs-order-details/ubs-order-details.component.ts");
    /* harmony import */


    var _ubs_personal_information_ubs_personal_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../ubs-personal-information/ubs-personal-information.component */
    "./src/app/main/component/ubs/components/ubs-personal-information/ubs-personal-information.component.ts");
    /* harmony import */


    var _ubs_submit_order_ubs_submit_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../ubs-submit-order/ubs-submit-order.component */
    "./src/app/main/component/ubs/components/ubs-submit-order/ubs-submit-order.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = ["firstStep"];
    var _c1 = ["secondStep"];
    var _c2 = ["thirdStep"];

    function UBSOrderFormComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UBSOrderFormComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "order-form.order-details"));
      }
    }

    function UBSOrderFormComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "order-form.personal-data"));
      }
    }

    function UBSOrderFormComponent_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "order-form.payment"));
      }
    }

    var UBSOrderFormComponent = /*#__PURE__*/function () {
      function UBSOrderFormComponent(orderService, cdr, shareFormService, localStorageService) {
        _classCallCheck(this, UBSOrderFormComponent);

        this.orderService = orderService;
        this.cdr = cdr;
        this.shareFormService = shareFormService;
        this.localStorageService = localStorageService;
        this.completed = false;
      }

      _createClass(UBSOrderFormComponent, [{
        key: "onClose",
        value: function onClose() {
          this.saveDataOnLocalStorage();
          return true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.shareFormService.locationId = this.localStorageService.getLocationId();
          this.shareFormService.locations = this.localStorageService.getLocations();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.firstStepForm = this.stepOneComponent.orderDetailsForm;
          this.secondStepForm = this.stepTwoComponent.personalDataForm;
          this.thirdStepForm = this.stepThreeComponent.paymentForm;
          this.cdr.detectChanges();
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          var _a;

          this.completed = ((_a = this.stepper) === null || _a === void 0 ? void 0 : _a.selected.state) === 'finalStep';
          this.orderService.setStepperFinal(this.completed);
        }
      }, {
        key: "saveDataOnLocalStorage",
        value: function saveDataOnLocalStorage() {
          this.shareFormService.isDataSaved = false;
          this.shareFormService.saveDataOnLocalStorage();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.saveDataOnLocalStorage();
        }
      }]);

      return UBSOrderFormComponent;
    }();

    UBSOrderFormComponent.ɵfac = function UBSOrderFormComponent_Factory(t) {
      return new (t || UBSOrderFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ubs_order_form_service__WEBPACK_IMPORTED_MODULE_3__["UBSOrderFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]));
    };

    UBSOrderFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UBSOrderFormComponent,
      selectors: [["app-ubs-order-form"]],
      viewQuery: function UBSOrderFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_stepper__WEBPACK_IMPORTED_MODULE_1__["MatHorizontalStepper"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepOneComponent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepTwoComponent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepThreeComponent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
        }
      },
      hostBindings: function UBSOrderFormComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function UBSOrderFormComponent_beforeunload_HostBindingHandler() {
            return ctx.onClose();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 18,
      vars: 7,
      consts: [[1, "container"], [1, "h1", "text-center", "form-title"], ["linear", ""], ["matStepperIcon", "edit"], [3, "stepControl"], ["matStepLabel", ""], ["firstStep", ""], [3, "completed"], ["secondStep", ""], ["state", "finalStep", 3, "stepControl"], ["thirdStep", ""], [1, "text-light"]],
      template: function UBSOrderFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-horizontal-stepper", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UBSOrderFormComponent_ng_template_5_Template, 2, 0, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-step", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UBSOrderFormComponent_ng_template_7_Template, 2, 3, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-ubs-order-details", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-step", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UBSOrderFormComponent_ng_template_11_Template, 2, 3, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-ubs-personal-information", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-step", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UBSOrderFormComponent_ng_template_15_Template, 2, 3, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-ubs-submit-order", null, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "order-form.ubs-courier"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.firstStepForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.secondStepForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("completed", ctx.completed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.thirdStepForm);
        }
      },
      directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_1__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_1__["MatStepperIcon"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_1__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_1__["MatStepLabel"], _ubs_order_details_ubs_order_details_component__WEBPACK_IMPORTED_MODULE_5__["UBSOrderDetailsComponent"], _ubs_personal_information_ubs_personal_information_component__WEBPACK_IMPORTED_MODULE_6__["UBSPersonalInformationComponent"], _ubs_submit_order_ubs_submit_order_component__WEBPACK_IMPORTED_MODULE_7__["UBSSubmitOrderComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
      styles: [".mat-step-header .mat-step-label {\n  font-family: var(--ubs-quaternary-font);\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--ubs-quintynary-light-grey);\n}\n  .mat-step-header .mat-step-label.mat-step-label-active {\n  color: var(--ubs-quintynary-light-grey);\n}\n  .mat-step-header .mat-step-label.mat-step-label-selected {\n  color: var(--ubs-quaternary-dark-grey);\n}\n  .mat-step-header .mat-step-icon {\n  background-color: var(--ubs-quaternary-light-grey);\n}\n  .mat-step-header .mat-step-icon-selected,   .mat-step-header .mat-step-icon-state-edit {\n  background-color: var(--ubs-quaternary-dark-grey);\n}\n  .mat-step-header .mat-step-icon-state-number {\n  font-family: var(--ubs-quaternary-font);\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--ubs-quintynary-light-grey);\n}\n  .mat-step-header .mat-step-icon-state-number.mat-step-icon-selected {\n  color: var(--ubs-primary-white);\n}\n  .mat-step-header .mat-icon {\n  color: var(--ubs-secondary-grey);\n}\n.container[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.form-title[_ngcontent-%COMP%] {\n  font-family: var(--ubs-quaternary-font);\n  font-size: 40px;\n  font-weight: 700;\n  color: var(--ubs-primary-grey);\n  margin: -35px 0 35px 0;\n}\n@media (min-width: 481px) and (max-width: 767px) {\n   .mat-step-header .mat-step-label {\n    font-size: 13px;\n    line-height: 13px;\n  }\n}\n@media (min-width: 320px) and (max-width: 480px) {\n   .mat-step-header .mat-step-label {\n    font-size: 9px;\n    line-height: 9px;\n    white-space: break-spaces;\n  }\n}\n@media screen and (max-width: 575px) {\n    .mat-horizontal-content-container {\n    padding: 0 !important;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 105vw;\n  }\n\n  .form-title[_ngcontent-%COMP%] {\n    margin: 10px 0 35px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvdWJzL2NvbXBvbmVudHMvdWJzLW9yZGVyLWZvcm0vRDpcXFNvZnRTZXJ2ZV9BY2FkZW15XFxHcmVlbkNpdHlcXGdoLXBhZ2VzXFxHcmVlbkNpdHlDbGllbnQvc3JjXFxhcHBcXG1haW5cXGNvbXBvbmVudFxcdWJzXFxjb21wb25lbnRzXFx1YnMtb3JkZXItZm9ybVxcdWJzLW9yZGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vY29tcG9uZW50L3Vicy9jb21wb25lbnRzL3Vicy1vcmRlci1mb3JtL3Vicy1vcmRlci1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFFO0VBUEEsdUNBUXNCO0VBUHRCLGVBT29GO0VBTnBGLGdCQU0wRjtFQUwxRix1Q0FLa0Q7QUNKcEQ7QURPRTtFQUNFLHVDQUFBO0FDTEo7QURRRTtFQUNFLHNDQUFBO0FDTko7QURTRTtFQUNFLGtEQUFBO0FDUEo7QURVRTs7RUFFRSxpREFBQTtBQ1JKO0FEV0U7RUE1QkEsdUNBNkJzQjtFQTVCdEIsZUE0Qm9GO0VBM0JwRixnQkEyQjBGO0VBMUIxRix1Q0EwQmtEO0FDTnBEO0FEU0U7RUFDRSwrQkFBQTtBQ1BKO0FEVUU7RUFDRSxnQ0FBQTtBQ1JKO0FEWUE7RUFDRSxVQUFBO0FDVEY7QURZQTtFQTdDRSx1Q0E4Q29CO0VBN0NwQixlQTZDeUU7RUE1Q3pFLGdCQTRDK0U7RUEzQy9FLDhCQTJDZ0Q7RUFFaEQsc0JBQUE7QUNQRjtBRFVBO0VBRUk7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUNSSjtBQUNGO0FEWUE7RUFFSTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0VDWEo7QUFDRjtBRGVBO0VBQ0U7SUFDRSxxQkFBQTtFQ2JGOztFRGdCQTtJQUNFLFlBQUE7RUNiRjs7RURnQkE7SUFDRSxxQkFBQTtFQ2JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbXBvbmVudC91YnMvY29tcG9uZW50cy91YnMtb3JkZXItZm9ybS91YnMtb3JkZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiB0ZXh0X3N0eWxlKCRmb250LCAkY29sb3IsICRzaXplLCAkd2VpZ2h0KSB7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250O1xyXG4gIGZvbnQtc2l6ZTogJHNpemU7XHJcbiAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIge1xyXG4gIC5tYXQtc3RlcC1sYWJlbCB7XHJcbiAgICBAaW5jbHVkZSB0ZXh0X3N0eWxlKHZhcigtLXVicy1xdWF0ZXJuYXJ5LWZvbnQpLCB2YXIoLS11YnMtcXVpbnR5bmFyeS1saWdodC1ncmV5KSwgMThweCwgNzAwKTtcclxuICB9XHJcblxyXG4gIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1hY3RpdmUge1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1xdWludHluYXJ5LWxpZ2h0LWdyZXkpO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVkIHtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1zdGVwLWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWJzLXF1YXRlcm5hcnktbGlnaHQtZ3JleSk7XHJcbiAgfVxyXG5cclxuICAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcclxuICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XHJcbiAgfVxyXG5cclxuICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1udW1iZXIge1xyXG4gICAgQGluY2x1ZGUgdGV4dF9zdHlsZSh2YXIoLS11YnMtcXVhdGVybmFyeS1mb250KSwgdmFyKC0tdWJzLXF1aW50eW5hcnktbGlnaHQtZ3JleSksIDIwcHgsIDcwMCk7XHJcbiAgfVxyXG5cclxuICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1udW1iZXIubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCB7XHJcbiAgICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktd2hpdGUpO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1pY29uIHtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtc2Vjb25kYXJ5LWdyZXkpO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmZvcm0tdGl0bGUge1xyXG4gIEBpbmNsdWRlIHRleHRfc3R5bGUodmFyKC0tdWJzLXF1YXRlcm5hcnktZm9udCksIHZhcigtLXVicy1wcmltYXJ5LWdyZXkpLCA0MHB4LCA3MDApO1xyXG5cclxuICBtYXJnaW46IC0zNXB4IDAgMzVweCAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIDo6bmctZGVlcC5tYXQtc3RlcC1oZWFkZXIge1xyXG4gICAgLm1hdC1zdGVwLWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgOjpuZy1kZWVwLm1hdC1zdGVwLWhlYWRlciB7XHJcbiAgICAubWF0LXN0ZXAtbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDlweDtcclxuICAgICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDV2dztcclxuICB9XHJcblxyXG4gIC5mb3JtLXRpdGxlIHtcclxuICAgIG1hcmdpbjogMTBweCAwIDM1cHggMDtcclxuICB9XHJcbn1cclxuIiwiOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWZvbnQpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS11YnMtcXVpbnR5bmFyeS1saWdodC1ncmV5KTtcbn1cbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tdWJzLXF1aW50eW5hcnktbGlnaHQtZ3JleSk7XG59XG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtc2VsZWN0ZWQge1xuICBjb2xvcjogdmFyKC0tdWJzLXF1YXRlcm5hcnktZGFyay1ncmV5KTtcbn1cbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWJzLXF1YXRlcm5hcnktbGlnaHQtZ3JleSk7XG59XG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xufVxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtbnVtYmVyIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWZvbnQpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS11YnMtcXVpbnR5bmFyeS1saWdodC1ncmV5KTtcbn1cbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLW51bWJlci5tYXQtc3RlcC1pY29uLXNlbGVjdGVkIHtcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LXdoaXRlKTtcbn1cbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS11YnMtc2Vjb25kYXJ5LWdyZXkpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmZvcm0tdGl0bGUge1xuICBmb250LWZhbWlseTogdmFyKC0tdWJzLXF1YXRlcm5hcnktZm9udCk7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xuICBtYXJnaW46IC0zNXB4IDAgMzVweCAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICA6Om5nLWRlZXAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICA6Om5nLWRlZXAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbCB7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgbGluZS1oZWlnaHQ6IDlweDtcbiAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICA6Om5nLWRlZXAgLm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTA1dnc7XG4gIH1cblxuICAuZm9ybS10aXRsZSB7XG4gICAgbWFyZ2luOiAxMHB4IDAgMzVweCAwO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UBSOrderFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ubs-order-form',
          templateUrl: './ubs-order-form.component.html',
          styleUrls: ['./ubs-order-form.component.scss']
        }]
      }], function () {
        return [{
          type: _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _services_ubs_order_form_service__WEBPACK_IMPORTED_MODULE_3__["UBSOrderFormService"]
        }, {
          type: _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
        }];
      }, {
        stepOneComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['firstStep']
        }],
        stepTwoComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['secondStep']
        }],
        stepThreeComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['thirdStep']
        }],
        stepper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_1__["MatHorizontalStepper"]]
        }],
        onClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:beforeunload']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/component/ubs/components/ubs-personal-information/address/address.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/main/component/ubs/components/ubs-personal-information/address/address.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: AddressComponent */

  /***/
  function srcAppMainComponentUbsComponentsUbsPersonalInformationAddressAddressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressComponent", function () {
      return AddressComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function AddressComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "personal-info.address-corp"), " ", ctx_r0.address.houseCorpus, ", ");
      }
    }

    function AddressComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "personal-info.address-entrance"), " ", ctx_r1.address.entranceNumber, "");
      }
    }

    var AddressComponent = function AddressComponent() {
      _classCallCheck(this, AddressComponent);
    };

    AddressComponent.ɵfac = function AddressComponent_Factory(t) {
      return new (t || AddressComponent)();
    };

    AddressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddressComponent,
      selectors: [["app-address"]],
      inputs: {
        address: "address"
      },
      decls: 10,
      vars: 9,
      consts: [[1, "address", "d-flex", "flex-column"], [3, "ngIf"]],
      template: function AddressComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddressComponent_ng_template_5_Template, 2, 4, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddressComponent_ng_template_6_Template, 2, 4, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.address.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.address.street, ", ", ctx.address.houseNumber, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.address.houseCorpus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.address.entranceNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, "personal-info.address-district"), " ", ctx.address.district, "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: ["br[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvdWJzL2NvbXBvbmVudHMvdWJzLXBlcnNvbmFsLWluZm9ybWF0aW9uL2FkZHJlc3MvRDpcXFNvZnRTZXJ2ZV9BY2FkZW15XFxHcmVlbkNpdHlcXGdoLXBhZ2VzXFxHcmVlbkNpdHlDbGllbnQvc3JjXFxhcHBcXG1haW5cXGNvbXBvbmVudFxcdWJzXFxjb21wb25lbnRzXFx1YnMtcGVyc29uYWwtaW5mb3JtYXRpb25cXGFkZHJlc3NcXGFkZHJlc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vY29tcG9uZW50L3Vicy9jb21wb25lbnRzL3Vicy1wZXJzb25hbC1pbmZvcm1hdGlvbi9hZGRyZXNzL2FkZHJlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbXBvbmVudC91YnMvY29tcG9uZW50cy91YnMtcGVyc29uYWwtaW5mb3JtYXRpb24vYWRkcmVzcy9hZGRyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnIge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbiIsImJyIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-address',
          templateUrl: './address.component.html',
          styleUrls: ['./address.component.scss']
        }]
      }], null, {
        address: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/component/ubs/components/ubs-personal-information/ubs-add-address-pop-up/ubs-add-address-pop-up.component.ts":
  /*!***********************************************************************************************************************************!*\
    !*** ./src/app/main/component/ubs/components/ubs-personal-information/ubs-add-address-pop-up/ubs-add-address-pop-up.component.ts ***!
    \***********************************************************************************************************************************/

  /*! exports provided: UBSAddAddressPopUpComponent */

  /***/
  function srcAppMainComponentUbsComponentsUbsPersonalInformationUbsAddAddressPopUpUbsAddAddressPopUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UBSAddAddressPopUpComponent", function () {
      return UBSAddAddressPopUpComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../services/order.service */
    "./src/app/main/component/ubs/services/order.service.ts");
    /* harmony import */


    var src_app_main_component_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/main/component/errors/mat-snack-bar/mat-snack-bar.component */
    "./src/app/main/component/errors/mat-snack-bar/mat-snack-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-google-places-autocomplete */
    "./node_modules/ngx-google-places-autocomplete/__ivy_ngcc__/bundles/ngx-google-places-autocomplete.umd.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _ubs_input_error_ubs_input_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../ubs-input-error/ubs-input-error.component */
    "./src/app/main/component/ubs/components/ubs-input-error/ubs-input-error.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function UBSAddAddressPopUpComponent_option_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "option", 26);
      }

      if (rf & 2) {
        var region_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", region_r9 == null ? null : region_r9.regionName);
      }
    }

    function UBSAddAddressPopUpComponent_option_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", city_r10.cityName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "personal-info.pop-up-city-name"));
      }
    }

    function UBSAddAddressPopUpComponent_option_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var region_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](region_r11);
      }
    }

    function UBSAddAddressPopUpComponent_div_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-ubs-input-error", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formElement", ctx_r3.district)("controlName", "district");
      }
    }

    function UBSAddAddressPopUpComponent_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-ubs-input-error", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formElement", ctx_r4.street)("streetFieldValue", ctx_r4.street.value)("controlName", "street");
      }
    }

    function UBSAddAddressPopUpComponent_div_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-ubs-input-error", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formElement", ctx_r5.houseNumber)("controlName", "houseNumber");
      }
    }

    function UBSAddAddressPopUpComponent_div_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-ubs-input-error", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formElement", ctx_r6.houseCorpus)("controlName", "houseCorpus");
      }
    }

    function UBSAddAddressPopUpComponent_div_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-ubs-input-error", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formElement", ctx_r7.entranceNumber)("controlName", "entranceNumber");
      }
    }

    function UBSAddAddressPopUpComponent_div_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-ubs-input-error", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formElement", ctx_r8.addressComment)("controlName", "addressComment");
      }
    }

    var UBSAddAddressPopUpComponent = /*#__PURE__*/function () {
      function UBSAddAddressPopUpComponent(fb, orderService, dialogRef, data, snackBar) {
        _classCallCheck(this, UBSAddAddressPopUpComponent);

        this.fb = fb;
        this.orderService = orderService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.snackBar = snackBar;
        this.country = 'ua';
        this.region = '';
        this.districtDisabled = true;
        this.nextDisabled = true;
        this.isDisabled = false;
        this.streetPattern = /^[A-Za-zА-Яа-яїЇіІєЄёЁ.\'\-\ \\]+[A-Za-zА-Яа-яїЇіІєЄёЁ0-9.\'\-\ \\]*$/;
        this.corpusPattern = /^[A-Za-zА-Яа-яїЇіІєЄёЁ0-9]{1,4}$/;
        this.housePattern = /^[A-Za-zА-Яа-яїЇіІєЄёЁ0-9\.\-\/]+$/;
        this.entranceNumberPattern = /^([1-9]\d*)?$/;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.currentLocation = {};
        this.cities = [{
          cityName: 'Kyiv',
          northLat: 50.59079800991073,
          southLat: 50.21327301525928,
          eastLng: 30.82594104187906,
          westLng: 30.23944009690609
        }];
        this.regions = ['Голосіївський', 'Дарницький', 'Деснянський', 'Дніпровський', 'Оболонський', 'Печерський', 'Подільський', 'Святошинський', "\u0421\u043E\u043B\u043E\u043C'\u044F\u043D\u0441\u044C\u043A\u0438\u0439", 'Шевченківський'];
      }

      _createClass(UBSAddAddressPopUpComponent, [{
        key: "district",
        get: function get() {
          return this.addAddressForm.get('district');
        }
      }, {
        key: "street",
        get: function get() {
          return this.addAddressForm.get('street');
        }
      }, {
        key: "houseNumber",
        get: function get() {
          return this.addAddressForm.get('houseNumber');
        }
      }, {
        key: "houseCorpus",
        get: function get() {
          return this.addAddressForm.get('houseCorpus');
        }
      }, {
        key: "entranceNumber",
        get: function get() {
          return this.addAddressForm.get('entranceNumber');
        }
      }, {
        key: "addressComment",
        get: function get() {
          return this.addAddressForm.get('addressComment');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentLocation = this.data.currentLocation;
          this.region = this.data.district;
          this.addAddressForm = this.fb.group({
            region: [this.data.edit ? this.data.address.region : null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            city: [this.data.edit ? this.data.address.city : null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            district: [this.data.edit ? this.data.address.district : '', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            street: [this.data.edit ? this.data.address.street : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(40), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.streetPattern)]],
            houseNumber: [this.data.edit ? this.data.address.houseNumber : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.housePattern)]],
            houseCorpus: [this.data.edit ? this.data.address.houseCorpus : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.corpusPattern)]],
            entranceNumber: [this.data.edit ? this.data.address.entranceNumber : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.entranceNumberPattern)]],
            addressComment: [this.data.edit ? this.data.address.addressComment : '', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(255)],
            coordinates: {
              latitude: this.data.edit ? this.data.address.coordinates.latitude : '',
              longitude: this.data.edit ? this.data.address.coordinates.longitude : ''
            },
            id: [this.data.edit ? this.data.address.id : 0],
            actual: true
          }); // TODO: Must be removed if multi-city feature need to be implemented

          this.onCitySelected('Kiev');
        }
      }, {
        key: "onCitySelected",
        value: function onCitySelected(citySelected) {
          var _this26 = this;

          this.cities.forEach(function (city) {
            if (city.cityName === citySelected) {
              _this26.cityBounds = {
                north: city.northLat,
                south: city.southLat,
                east: city.eastLng,
                west: city.westLng
              };
            }
          });
          this.options = {
            bounds: this.cityBounds,
            strictBounds: true,
            types: ['address'],
            componentRestrictions: {
              country: 'UA'
            }
          };
        }
      }, {
        key: "onLocationSelected",
        value: function onLocationSelected(event) {
          this.addAddressForm.get('coordinates').setValue({
            latitude: (event.geometry.viewport.Bb.g + event.geometry.viewport.Bb.h) / 2,
            longitude: (event.geometry.viewport.Ra.g + event.geometry.viewport.Ra.h) / 2
          });
        }
      }, {
        key: "setDistrict",
        value: function setDistrict(event) {
          var getDistrict = event.address_components.filter(function (item) {
            return item.long_name.includes('район');
          })[0];

          if (getDistrict) {
            this.region = getDistrict.long_name.split(' ')[0];
          } else {
            this.region = event.vicinity.split(' ')[0];
          }
        }
      }, {
        key: "onAutocompleteSelected",
        value: function onAutocompleteSelected(event) {
          var streetName = event.name;
          this.addAddressForm.get('street').setValue(streetName);
          this.addAddressForm.get('district').setValue(this.region);
        }
      }, {
        key: "onDistrictSelected",
        value: function onDistrictSelected(event) {
          this.onLocationSelected(event);
          this.setDistrict(event);
          this.addAddressForm.get('district').setValue(this.region);
          this.districtDisabled = true;
          this.nextDisabled = false;
          this.onAutocompleteSelected(event);
        }
      }, {
        key: "selectCity",
        value: function selectCity(event) {
          this.addAddressForm.get('city').setValue(event.name);
        }
      }, {
        key: "onChange",
        value: function onChange() {
          this.region = null;
          this.addAddressForm.get('district').setValue(this.region);
          this.districtDisabled = false;
          this.nextDisabled = true;
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "addAdress",
        value: function addAdress() {
          var _this27 = this;

          this.isDisabled = true;

          if (this.currentLocation === 'Kyiv' || this.currentLocation === 'Київ') {
            this.addAddressForm.value.city = this.addAddressForm.get('city').value;
          }

          this.addAddressForm.value.region = this.addAddressForm.get('region').value;
          this.orderService.addAdress(this.addAddressForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this27.snackBar.openSnackBar('existAddress');

            _this27.dialogRef.close();

            _this27.isDisabled = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
          })).subscribe(function (list) {
            _this27.orderService.setCurrentAddress(_this27.addAddressForm.value);

            _this27.updatedAddresses = list;

            _this27.dialogRef.close();

            _this27.isDisabled = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy.next();
          this.destroy.unsubscribe();
        }
      }]);

      return UBSAddAddressPopUpComponent;
    }();

    UBSAddAddressPopUpComponent.ɵfac = function UBSAddAddressPopUpComponent_Factory(t) {
      return new (t || UBSAddAddressPopUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_main_component_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarComponent"]));
    };

    UBSAddAddressPopUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UBSAddAddressPopUpComponent,
      selectors: [["app-ubs-add-address-pop-up"]],
      decls: 76,
      vars: 71,
      consts: [[1, "row", "adress", 3, "formGroup"], [1, "w-100"], [1, "personal-info-pop-up-title"], [1, "w-100", "city-notice"], [1, "col-md-4", "col-sm-4", "form-group"], [1, "shadow-none", "form-control"], ["selected", "", 3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "city", 1, "shadow-none", "form-control"], ["selected", "", "disabled", "", "hidden", "", 3, "ngValue"], ["formControlName", "district", 1, "shadow-none", "form-control"], ["selected", "", "disabled", "", "hidden", ""], [4, "ngFor", "ngForOf"], ["class", "validation", 4, "ngIf"], [1, "col-lg-6", "col-md-12", "col-sm-12", "form-group"], ["id", "auto", "ngx-google-places-autocomplete", "", "formControlName", "street", "type", "text", 1, "shadow-none", "form-control", 3, "options", "placeholder", "pattern", "onAddressChange", "change"], [1, "row", "col-lg-6", "col-md-12", "col-sm-12", "d-flex", "justify-content-between", "form-group"], [1, "item", "col-sm-4"], ["formControlName", "houseNumber", "type", "text", 1, "shadow-none", "form-control", 3, "placeholder"], ["formControlName", "houseCorpus", "type", "text", 1, "shadow-none", "form-control", 3, "placeholder"], ["formControlName", "entranceNumber", "type", "text", 1, "shadow-none", "form-control", 3, "placeholder"], [1, "form-group", "comment-section"], ["formControlName", "addressComment", 1, "form-control", 3, "placeholder"], ["mat-dialog-actions", "", 1, "d-flex", "justify-content-center", "buttons"], ["mat-button", "", "type", "button", 1, "secondary-global-button", "btn", "m-0", "mr-2", 3, "click"], ["type", "submit", 1, "primary-global-button", "btn", "m-0", 3, "disabled", "click"], [3, "value"], [1, "validation"], [3, "formElement", "controlName"], [3, "formElement", "streetFieldValue", "controlName"]],
      template: function UBSAddAddressPopUpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Region");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UBSAddAddressPopUpComponent_option_13_Template, 1, 1, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, UBSAddAddressPopUpComponent_option_22_Template, 3, 4, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, UBSAddAddressPopUpComponent_option_31_Template, 2, 1, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, UBSAddAddressPopUpComponent_div_32_Template, 2, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onAddressChange", function UBSAddAddressPopUpComponent_Template_input_onAddressChange_37_listener($event) {
            return ctx.onDistrictSelected($event);
          })("change", function UBSAddAddressPopUpComponent_Template_input_change_37_listener() {
            return ctx.onChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, UBSAddAddressPopUpComponent_div_39_Template, 2, 3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, UBSAddAddressPopUpComponent_div_47_Template, 2, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, UBSAddAddressPopUpComponent_div_54_Template, 2, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](58, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, UBSAddAddressPopUpComponent_div_61_Template, 2, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "textarea", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](67, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, UBSAddAddressPopUpComponent_div_68_Template, 2, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UBSAddAddressPopUpComponent_Template_button_click_70_listener() {
            return ctx.onNoClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](72, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UBSAddAddressPopUpComponent_Template_button_click_73_listener() {
            return ctx.addAdress();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](75, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addAddressForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 35, "personal-info.pop-up-title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 37, "personal-info.pop-up-info-message"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.regions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 39, "personal-info.pop-up-city"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 41, "personal-info.pop-up-city"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cities);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 43, "personal-info.pop-up-district"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.districtDisabled ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 45, "personal-info.pop-up-enter-you-location"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.regions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.district.invalid && ctx.addAddressForm.get("district").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 47, "personal-info.pop-up-street"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 49, "personal-info.pop-up-enter-you-location"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.options)("pattern", ctx.streetPattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.addAddressForm.controls["city"].dirty ? null : true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.street.invalid && ctx.addAddressForm.get("street").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 51, "personal-info.pop-up-house"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 53, "personal-info.pop-up-house"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.houseNumber.invalid && ctx.houseNumber.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 55, "personal-info.pop-up-corps"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 57, "personal-info.pop-up-corps"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.houseCorpus.invalid && ctx.houseCorpus.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](58, 59, "personal-info.pop-up-entrance"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 61, "personal-info.pop-up-entrance"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.entranceNumber.invalid && ctx.entranceNumber.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](65, 63, "personal-info.info-address-coment"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](67, 65, "personal-info.pop-up-comment-placeholder"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addressComment.invalid && ctx.addressComment.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](72, 67, "personal-info.pop-up-cancel"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.addAddressForm.valid || ctx.isDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](75, 69, ctx.data.edit ? "personal-info.pop-up-save-changes" : "personal-info.pop-up-add-address"), " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__["GooglePlaceDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["PatternValidator"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogActions"], _ubs_input_error_ubs_input_error_component__WEBPACK_IMPORTED_MODULE_9__["UBSInputErrorComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
      styles: [".pac-container {\n  position: fixed !important;\n  top: 377px !important;\n}\n@media only screen and (max-width: 300px) {\n    .pac-container {\n    top: 384px !important;\n  }\n}\n@media only screen and (min-width: 301px) and (max-width: 500px) {\n    .pac-container {\n    top: 364px !important;\n  }\n}\n@media only screen and (min-width: 501px) and (max-width: 1000px) {\n    .pac-container {\n    top: 337px !important;\n  }\n}\nform[_ngcontent-%COMP%] {\n  position: relative;\n}\n.form-control[_ngcontent-%COMP%] {\n  height: 2.25rem;\n  font-size: 0.9rem;\n  color: var(--ubs-quaternary-dark-grey);\n}\n.form-control[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  color: var(--ubs-quaternary-dark-grey);\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  border: 1px solid var(--ubs-quintynary-light-grey);\n}\n.personal-info-pop-up-title[_ngcontent-%COMP%] {\n  margin: 0 0 20px 15px;\n  font-family: var(--ubs-tertiary-font);\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: 0.002em;\n  color: var(--ubs-primary-grey);\n}\n.city-notice[_ngcontent-%COMP%] {\n  margin: 0 0 20px 15px;\n  font-size: 14px;\n  color: var(--ubs-primary-grey);\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: var(--ubs-primary-light-grey);\n  opacity: 1;\n  font-size: 0.9rem;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: var(--ubs-primary-light-grey);\n  opacity: 1;\n  font-size: 0.9rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: var(--ubs-tertiary-font);\n  font-size: 16px;\n  line-height: 18px;\n  font-weight: 400;\n  color: var(--ubs-secondary-grey);\n}\n.form-group[_ngcontent-%COMP%]   select.ng-invalid[_ngcontent-%COMP%] {\n  color: var(--ubs-primary-light-grey);\n}\n.comment-section[_ngcontent-%COMP%] {\n  margin: 0 15px 20px 15px;\n  width: 100%;\n}\n.comment-section[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 92px;\n  padding: 12px 24px;\n  resize: none;\n  border: 1px solid var(--ubs-quintynary-light-grey);\n  color: var(--ubs-primary-grey);\n  font-size: 14px;\n}\n.btn[_ngcontent-%COMP%] {\n  width: 115px;\n  height: 40px;\n  border-radius: 4px;\n}\n.btn[_ngcontent-%COMP%]:nth-child(1) {\n  margin: 0 24px 0 16px;\n}\n.btn[_ngcontent-%COMP%]:nth-child(2) {\n  margin: 0 15px 0 0;\n}\n.validation[_ngcontent-%COMP%] {\n  color: var(--error-red);\n  font-size: 10px;\n}\n.buttons[_ngcontent-%COMP%] {\n  margin-bottom: 1px;\n}\n.buttons[_ngcontent-%COMP%]   .secondary-global-button[_ngcontent-%COMP%] {\n  border: 1px solid var(--ubs-quaternary-dark-grey);\n  color: var(--ubs-quaternary-dark-grey);\n  margin-right: 1rem !important;\n}\n.buttons[_ngcontent-%COMP%]   .primary-global-button[_ngcontent-%COMP%] {\n  width: 163px;\n  padding: 8px 14px;\n  color: var(--ubs-quaternary-dark-grey);\n  border-color: var(--ubs-button-light-green);\n  background: var(--ubs-button-light-green);\n}\n.buttons[_ngcontent-%COMP%]   .primary-global-button[_ngcontent-%COMP%]:disabled {\n  background: var(--ubs-quaternary-light-grey);\n  border-color: var(--ubs-quaternary-light-grey);\n}\n@media (max-width: 767px) {\n  form[_ngcontent-%COMP%] {\n    height: 100vh;\n    overflow-y: scroll;\n  }\n\n  .buttons[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n\n    .row {\n    justify-content: center;\n  }\n\n  .secondary-global-button[_ngcontent-%COMP%], .primary-global-button[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {\n    width: 100px;\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvdWJzL2NvbXBvbmVudHMvdWJzLXBlcnNvbmFsLWluZm9ybWF0aW9uL3Vicy1hZGQtYWRkcmVzcy1wb3AtdXAvRDpcXFNvZnRTZXJ2ZV9BY2FkZW15XFxHcmVlbkNpdHlcXGdoLXBhZ2VzXFxHcmVlbkNpdHlDbGllbnQvc3JjXFxhcHBcXG1haW5cXGNvbXBvbmVudFxcdWJzXFxjb21wb25lbnRzXFx1YnMtcGVyc29uYWwtaW5mb3JtYXRpb25cXHVicy1hZGQtYWRkcmVzcy1wb3AtdXBcXHVicy1hZGQtYWRkcmVzcy1wb3AtdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vY29tcG9uZW50L3Vicy9jb21wb25lbnRzL3Vicy1wZXJzb25hbC1pbmZvcm1hdGlvbi91YnMtYWRkLWFkZHJlc3MtcG9wLXVwL3Vicy1hZGQtYWRkcmVzcy1wb3AtdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7QURDRTtFQUpGO0lBS0kscUJBQUE7RUNFRjtBQUNGO0FEQUU7RUFSRjtJQVNJLHFCQUFBO0VDR0Y7QUFDRjtBRERFO0VBWkY7SUFhSSxxQkFBQTtFQ0lGO0FBQ0Y7QUREQTtFQUNFLGtCQUFBO0FDSUY7QUREQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0FDSUY7QURGRTtFQUNFLHNDQUFBO0FDSUo7QURBQTs7RUFFRSxrREFBQTtBQ0dGO0FEQUE7RUFDRSxxQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7QUNHRjtBREFBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNHRjtBREFBO0VBQ0Usb0NBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNHRjtBRE5BO0VBQ0Usb0NBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNHRjtBRENFO0VBQ0UscUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDRUo7QURDRTtFQUNFLG9DQUFBO0FDQ0o7QURHQTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtBQ0FGO0FERUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ0FKO0FESUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDREY7QURJQTtFQUNFLHFCQUFBO0FDREY7QURJQTtFQUNFLGtCQUFBO0FDREY7QURJQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtBQ0RGO0FER0U7RUFDRSxpREFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7QUNESjtBRElFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0NBQUE7RUFDQSwyQ0FBQTtFQUNBLHlDQUFBO0FDRko7QURJSTtFQUNFLDRDQUFBO0VBQ0EsOENBQUE7QUNGTjtBRE9BO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7RUNKRjs7RURPQTtJQUNFLG1CQUFBO0VDSkY7O0VET0E7SUFDRSx1QkFBQTtFQ0pGOztFRE9BOzs7SUFHRSxZQUFBO0lBQ0EsaUJBQUE7RUNKRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnQvdWJzL2NvbXBvbmVudHMvdWJzLXBlcnNvbmFsLWluZm9ybWF0aW9uL3Vicy1hZGQtYWRkcmVzcy1wb3AtdXAvdWJzLWFkZC1hZGRyZXNzLXBvcC11cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAucGFjLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAzNzdweCAhaW1wb3J0YW50O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgICB0b3A6IDM4NHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwMXB4KSBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIHRvcDogMzY0cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIHRvcDogMzM3cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgaGVpZ2h0OiAyLjI1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xyXG5cclxuICBvcHRpb24ge1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XHJcbiAgfVxyXG59XHJcblxyXG5pbnB1dCxcclxuc2VsZWN0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11YnMtcXVpbnR5bmFyeS1saWdodC1ncmV5KTtcclxufVxyXG5cclxuLnBlcnNvbmFsLWluZm8tcG9wLXVwLXRpdGxlIHtcclxuICBtYXJnaW46IDAgMCAyMHB4IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXVicy10ZXJ0aWFyeS1mb250KTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAwMmVtO1xyXG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcclxufVxyXG5cclxuLmNpdHktbm90aWNlIHtcclxuICBtYXJnaW46IDAgMCAyMHB4IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWxpZ2h0LWdyZXkpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBsYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tdWJzLXRlcnRpYXJ5LWZvbnQpO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1zZWNvbmRhcnktZ3JleSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3QubmctaW52YWxpZCB7XHJcbiAgICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktbGlnaHQtZ3JleSk7XHJcbiAgfVxyXG59XHJcblxyXG4uY29tbWVudC1zZWN0aW9uIHtcclxuICBtYXJnaW46IDAgMTVweCAyMHB4IDE1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIHRleHRhcmVhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkycHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11YnMtcXVpbnR5bmFyeS1saWdodC1ncmV5KTtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHdpZHRoOiAxMTVweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uYnRuOm50aC1jaGlsZCgxKSB7XHJcbiAgbWFyZ2luOiAwIDI0cHggMCAxNnB4O1xyXG59XHJcblxyXG4uYnRuOm50aC1jaGlsZCgyKSB7XHJcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xyXG59XHJcblxyXG4udmFsaWRhdGlvbiB7XHJcbiAgY29sb3I6IHZhcigtLWVycm9yLXJlZCk7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG5cclxuICAuc2Vjb25kYXJ5LWdsb2JhbC1idXR0b24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdWJzLXF1YXRlcm5hcnktZGFyay1ncmV5KTtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucHJpbWFyeS1nbG9iYWwtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxNjNweDtcclxuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XHJcblxyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWxpZ2h0LWdyZXkpO1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWxpZ2h0LWdyZXkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgZm9ybSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbnMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAucm93IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnNlY29uZGFyeS1nbG9iYWwtYnV0dG9uLFxyXG4gIC5wcmltYXJ5LWdsb2JhbC1idXR0b24sXHJcbiAgLmJ0biB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbn1cclxuIiwiOjpuZy1kZWVwIC5wYWMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHRvcDogMzc3cHggIWltcG9ydGFudDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgOjpuZy1kZWVwIC5wYWMtY29udGFpbmVyIHtcbiAgICB0b3A6IDM4NHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAxcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICA6Om5nLWRlZXAgLnBhYy1jb250YWluZXIge1xuICAgIHRvcDogMzY0cHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDFweCkgYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICA6Om5nLWRlZXAgLnBhYy1jb250YWluZXIge1xuICAgIHRvcDogMzM3cHggIWltcG9ydGFudDtcbiAgfVxufVxuXG5mb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiAyLjI1cmVtO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XG59XG4uZm9ybS1jb250cm9sIG9wdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xufVxuXG5pbnB1dCxcbnNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXVicy1xdWludHluYXJ5LWxpZ2h0LWdyZXkpO1xufVxuXG4ucGVyc29uYWwtaW5mby1wb3AtdXAtdGl0bGUge1xuICBtYXJnaW46IDAgMCAyMHB4IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS11YnMtdGVydGlhcnktZm9udCk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAwMmVtO1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XG59XG5cbi5jaXR5LW5vdGljZSB7XG4gIG1hcmdpbjogMCAwIDIwcHggMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktbGlnaHQtZ3JleSk7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS11YnMtdGVydGlhcnktZm9udCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS11YnMtc2Vjb25kYXJ5LWdyZXkpO1xufVxuLmZvcm0tZ3JvdXAgc2VsZWN0Lm5nLWludmFsaWQge1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktbGlnaHQtZ3JleSk7XG59XG5cbi5jb21tZW50LXNlY3Rpb24ge1xuICBtYXJnaW46IDAgMTVweCAyMHB4IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbW1lbnQtc2VjdGlvbiB0ZXh0YXJlYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MnB4O1xuICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdWJzLXF1aW50eW5hcnktbGlnaHQtZ3JleSk7XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDExNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmJ0bjpudGgtY2hpbGQoMSkge1xuICBtYXJnaW46IDAgMjRweCAwIDE2cHg7XG59XG5cbi5idG46bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xufVxuXG4udmFsaWRhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1lcnJvci1yZWQpO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5idXR0b25zIHtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuLmJ1dHRvbnMgLnNlY29uZGFyeS1nbG9iYWwtYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdWJzLXF1YXRlcm5hcnktZGFyay1ncmV5KTtcbiAgY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XG4gIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xufVxuLmJ1dHRvbnMgLnByaW1hcnktZ2xvYmFsLWJ1dHRvbiB7XG4gIHdpZHRoOiAxNjNweDtcbiAgcGFkZGluZzogOHB4IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcbn1cbi5idXR0b25zIC5wcmltYXJ5LWdsb2JhbC1idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS11YnMtcXVhdGVybmFyeS1saWdodC1ncmV5KTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1saWdodC1ncmV5KTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIGZvcm0ge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9XG5cbiAgLmJ1dHRvbnMge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cblxuICA6Om5nLWRlZXAgLnJvdyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuc2Vjb25kYXJ5LWdsb2JhbC1idXR0b24sXG4ucHJpbWFyeS1nbG9iYWwtYnV0dG9uLFxuLmJ0biB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UBSAddAddressPopUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-ubs-add-address-pop-up',
          templateUrl: './ubs-add-address-pop-up.component.html',
          styleUrls: ['./ubs-add-address-pop-up.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]
        }, {
          type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: src_app_main_component_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarComponent"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/component/ubs/components/ubs-personal-information/ubs-personal-information.component.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/main/component/ubs/components/ubs-personal-information/ubs-personal-information.component.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: UBSPersonalInformationComponent */

  /***/
  function srcAppMainComponentUbsComponentsUbsPersonalInformationUbsPersonalInformationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UBSPersonalInformationComponent", function () {
      return UBSPersonalInformationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_form_base_form_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/components/form-base/form-base.component */
    "./src/app/main/component/shared/components/form-base/form-base.component.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ubs_add_address_pop_up_ubs_add_address_pop_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ubs-add-address-pop-up/ubs-add-address-pop-up.component */
    "./src/app/main/component/ubs/components/ubs-personal-information/ubs-add-address-pop-up/ubs-add-address-pop-up.component.ts");
    /* harmony import */


    var _models_ubs_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../models/ubs.model */
    "./src/app/main/component/ubs/models/ubs.model.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/order.service */
    "./src/app/main/component/ubs/services/order.service.ts");
    /* harmony import */


    var _services_ubs_order_form_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/ubs-order-form.service */
    "./src/app/main/component/ubs/services/ubs-order-form.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var angular_imask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angular-imask */
    "./node_modules/angular-imask/__ivy_ngcc__/fesm2015/angular-imask.js");
    /* harmony import */


    var _ubs_input_error_ubs_input_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../ubs-input-error/ubs-input-error.component */
    "./src/app/main/component/ubs/components/ubs-input-error/ubs-input-error.component.ts");
    /* harmony import */


    var _address_address_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./address/address.component */
    "./src/app/main/component/ubs/components/ubs-personal-information/address/address.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function UBSPersonalInformationComponent_form_0_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ubs-input-error", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formElement", ctx_r1.getControl("firstName"))("firstNameFieldValue", ctx_r1.getControl("firstName").value)("controlName", "firstName");
      }
    }

    function UBSPersonalInformationComponent_form_0_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ubs-input-error", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formElement", ctx_r2.getControl("phoneNumber"))("phoneNumberFieldValue", ctx_r2.getControl("phoneNumber").value)("controlName", "phoneNumber");
      }
    }

    function UBSPersonalInformationComponent_form_0_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ubs-input-error", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formElement", ctx_r3.getControl("lastName"))("lastNameFieldValue", ctx_r3.getControl("lastName").value)("controlName", "lastName");
      }
    }

    function UBSPersonalInformationComponent_form_0_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ubs-input-error", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formElement", ctx_r4.getControl("email"))("emailFieldValue", ctx_r4.getControl("email").value)("controlName", "email");
      }
    }

    function UBSPersonalInformationComponent_form_0_div_34_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ubs-input-error", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formElement", ctx_r11.getControl("anotherClientFirstName"))("anotherClientFirstNameFieldValue", ctx_r11.getControl("anotherClientFirstName").value)("controlName", "anotherClientFirstName");
      }
    }

    function UBSPersonalInformationComponent_form_0_div_34_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ubs-input-error", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formElement", ctx_r12.getControl("anotherClientPhoneNumber"))("anotherClientPhoneNumberFieldValue", ctx_r12.getControl("anotherClientPhoneNumber").value)("controlName", "anotherClientPhoneNumber");
      }
    }

    function UBSPersonalInformationComponent_form_0_div_34_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ubs-input-error", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formElement", ctx_r13.getControl("anotherClientLastName"))("anotherClientLastNameFieldValue", ctx_r13.getControl("anotherClientLastName").value)("controlName", "anotherClientLastName");
      }
    }

    function UBSPersonalInformationComponent_form_0_div_34_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ubs-input-error", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formElement", ctx_r14.getControl("anotherClientEmail"))("anotherClientEmailFieldValue", ctx_r14.getControl("anotherClientEmail").value)("controlName", "anotherClientEmail");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        mask: a0
      };
    };

    function UBSPersonalInformationComponent_form_0_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UBSPersonalInformationComponent_form_0_div_34_div_7_Template, 2, 3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UBSPersonalInformationComponent_form_0_div_34_div_13_Template, 2, 3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UBSPersonalInformationComponent_form_0_div_34_div_20_Template, 2, 3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UBSPersonalInformationComponent_form_0_div_34_div_26_Template, 2, 3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 12, "personal-info.info-name"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 14, "personal-info.info-name"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.getControl("anotherClientFirstName").invalid && ctx_r5.getControl("anotherClientFirstName").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 16, "personal-info.info-phone"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unmask", true)("imask", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx_r5.phoneMask));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.getControl("anotherClientPhoneNumber").invalid && ctx_r5.getControl("anotherClientPhoneNumber").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 18, "personal-info.info-surname"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 20, "personal-info.info-surname"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.getControl("anotherClientLastName").invalid && ctx_r5.getControl("anotherClientLastName").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 22, "personal-info.info-optionally"), ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.getControl("anotherClientEmail").invalid && ctx_r5.getControl("anotherClientEmail").touched);
      }
    }

    function UBSPersonalInformationComponent_form_0_ng_template_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "personal-info.first-order"));
      }
    }

    function UBSPersonalInformationComponent_form_0_div_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "personal-info.info-no-address"));
      }
    }

    function UBSPersonalInformationComponent_form_0_ng_template_43_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UBSPersonalInformationComponent_form_0_ng_template_43_div_0_Template_input_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var address_r16 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r17.checkAddress(address_r16.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-address", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UBSPersonalInformationComponent_form_0_ng_template_43_div_0_Template_div_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var address_r16 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r19.editAddress(address_r16.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UBSPersonalInformationComponent_form_0_ng_template_43_div_0_Template_div_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var address_r16 = ctx.$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r20.deleteAddress(address_r16);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var address_r16 = ctx.$implicit;

        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", address_r16.id)("checked", address_r16.actual && ctx_r15.currentLocation === ctx_r15.kyivCityUA ? address_r16.city === ctx_r15.currentLocation : ctx_r15.currentLocation === ctx_r15.kyivCityEng ? address_r16.city === ctx_r15.kyivCityUA : ctx_r15.currentLocation === ctx_r15.kyivRegionEng ? address_r16.region === ctx_r15.kyivRegionUA || address_r16.city !== ctx_r15.kyivCityUA : ctx_r15.currentLocation === ctx_r15.kyivRegionUA ? address_r16.region === ctx_r15.currentLocation || address_r16.city !== ctx_r15.kyivCityUA : false)("disabled", ctx_r15.currentLocation === ctx_r15.kyivCityUA ? address_r16.city !== ctx_r15.currentLocation : ctx_r15.currentLocation === ctx_r15.kyivCityEng ? address_r16.city !== ctx_r15.kyivCityUA : ctx_r15.currentLocation === ctx_r15.kyivRegionEng ? address_r16.region !== ctx_r15.kyivRegionUA || address_r16.city === ctx_r15.kyivCityUA : ctx_r15.currentLocation === ctx_r15.kyivRegionUA ? address_r16.region !== ctx_r15.currentLocation || address_r16.city === ctx_r15.kyivCityUA : true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("address", address_r16);
      }
    }

    function UBSPersonalInformationComponent_form_0_ng_template_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UBSPersonalInformationComponent_form_0_ng_template_43_div_0_Template, 8, 4, "div", 47);
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.addresses);
      }
    }

    function UBSPersonalInformationComponent_form_0_div_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ubs-input-error", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formElement", ctx_r10.getControl("addressComment"))("controlName", "addressComment");
      }
    }

    function UBSPersonalInformationComponent_form_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UBSPersonalInformationComponent_form_0_div_11_Template, 2, 3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UBSPersonalInformationComponent_form_0_div_17_Template, 2, 3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UBSPersonalInformationComponent_form_0_div_23_Template, 2, 3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UBSPersonalInformationComponent_form_0_div_28_Template, 2, 3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UBSPersonalInformationComponent_form_0_Template_input_change_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.togglClient();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, UBSPersonalInformationComponent_form_0_div_34_Template, 27, 26, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, UBSPersonalInformationComponent_form_0_ng_template_41_Template, 3, 3, "ng-template", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, UBSPersonalInformationComponent_form_0_div_42_Template, 4, 3, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, UBSPersonalInformationComponent_form_0_ng_template_43_Template, 1, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UBSPersonalInformationComponent_form_0_Template_button_click_46_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.addNewAddress();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "textarea", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function UBSPersonalInformationComponent_form_0_Template_textarea_blur_54_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.changeAddressComment();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, UBSPersonalInformationComponent_form_0_div_56_Template, 2, 2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.personalDataForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 23, "personal-info.info-personal-data"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 25, "personal-info.info-name"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getControl("firstName").invalid && ctx_r0.getControl("firstName").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 27, "personal-info.info-phone"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unmask", true)("imask", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c0, ctx_r0.phoneMask));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getControl("phoneNumber").invalid && ctx_r0.getControl("phoneNumber").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 29, "personal-info.info-surname"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getControl("lastName").invalid && ctx_r0.getControl("lastName").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getControl("email").invalid && ctx_r0.getControl("email").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.anotherClient);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 31, "personal-info.info-other-client"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.anotherClient);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 33, "personal-info.info-address"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.firstOrder);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.addresses == null ? null : ctx_r0.addresses.length))("ngIfElse", _r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.addresses.length === ctx_r0.maxAddressLength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 35, "personal-info.info-add-address"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 37, "personal-info.info-address-coment"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 39, "personal-info.info-coment-placeholder"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getControl("addressComment").invalid && ctx_r0.getControl("addressComment").touched);
      }
    }

    var UBSPersonalInformationComponent = /*#__PURE__*/function (_shared_components_fo2) {
      _inherits(UBSPersonalInformationComponent, _shared_components_fo2);

      var _super10 = _createSuper(UBSPersonalInformationComponent);

      function UBSPersonalInformationComponent(router, dialog, orderService, shareFormService, fb) {
        var _this28;

        _classCallCheck(this, UBSPersonalInformationComponent);

        _this28 = _super10.call(this, router, dialog, orderService);
        _this28.router = router;
        _this28.dialog = dialog;
        _this28.orderService = orderService;
        _this28.shareFormService = shareFormService;
        _this28.fb = fb;
        _this28.shouldBePaid = true;
        _this28.addresses = [];
        _this28.maxAddressLength = 4;
        _this28.namePattern = /^[A-Za-zА-Яа-яїЇіІєЄёЁ\'\- ]+$/;
        _this28.phoneMask = '+{38\\0} (00) 000 00 00';
        _this28.firstOrder = true;
        _this28.anotherClient = false;
        _this28.currentLocation = {};
        _this28.locations = [];
        _this28.kyivCityUA = 'Київ';
        _this28.kyivCityEng = 'Kyiv';
        _this28.kyivRegionUA = 'Київська область';
        _this28.kyivRegionEng = 'Kyiv region';
        _this28.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        _this28.personalDataFormValidators = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_this28.namePattern)];
        _this28.popupConfig = {
          hasBackdrop: true,
          closeOnNavigation: true,
          disableClose: true,
          panelClass: 'popup-dialog-container',
          data: {
            popupTitle: 'confirmation.title',
            popupSubtitle: 'confirmation.subTitle',
            popupConfirm: 'confirmation.cancel',
            popupCancel: 'confirmation.dismiss'
          }
        };

        _this28.initForm();

        return _this28;
      }

      _createClass(UBSPersonalInformationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.takeUserData();
          this.orderService.locationSub.subscribe(function (data) {
            _this29.currentLocation = data;
          });
          this.orderService.currentAddress.subscribe(function (data) {
            _this29.personalDataForm.controls.address.setValue(data);

            _this29.personalDataForm.controls.addressComment.setValue(data.addressComment);
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _a;

          this.shareFormService.changePersonalData();

          if ((_a = changes.completed) === null || _a === void 0 ? void 0 : _a.currentValue) {
            this.submit();
          }
        }
      }, {
        key: "findAllAddresses",
        value: function findAllAddresses(isCheck) {
          var _this30 = this;

          this.orderService.findAllAddresses().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy)).subscribe(function (list) {
            _this30.addresses = _this30.getLastAddresses(list.addressList);
            localStorage.setItem('addresses', JSON.stringify(_this30.addresses));

            _this30.personalDataForm.patchValue({
              address: _this30.addresses
            });

            if (_this30.addresses[0] && isCheck) {
              _this30.checkAddress(_this30.addresses[0].id);
            }
          });
        }
      }, {
        key: "getLastAddresses",
        value: function getLastAddresses(addressList) {
          var lastAddresses = -4;
          return addressList.slice(lastAddresses);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy.next();
          this.destroy.unsubscribe();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.personalDataForm = this.fb.group({
            firstName: ['', this.personalDataFormValidators],
            lastName: ['', this.personalDataFormValidators],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            phoneNumber: ['+38 0', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(12)]],
            anotherClientFirstName: [''],
            anotherClientLastName: [''],
            anotherClientEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            anotherClientPhoneNumber: [''],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            addressComment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]
          });
        }
      }, {
        key: "takeUserData",
        value: function takeUserData() {
          var _this31 = this;

          this.orderService.getPersonalData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy)).subscribe(function (personalData) {
            _this31.personalData = _this31.shareFormService.personalData;

            _this31.setFormData();

            _this31.findAllAddresses(true);
          });
        }
      }, {
        key: "checkAddress",
        value: function checkAddress(addressId) {
          var _this32 = this;

          this.addresses.forEach(function (address) {
            if (address.id !== addressId && address.actual || address.id === addressId && !address.actual) {
              address.actual = !address.actual;
            }

            if (address.actual) {
              _this32.orderService.setCurrentAddress(address);
            }
          });
          this.changeAddressInPersonalData();
        }
      }, {
        key: "changeAddressInPersonalData",
        value: function changeAddressInPersonalData() {
          var activeAddress = this.addresses.find(function (address) {
            return address.actual;
          });
          this.personalData.city = activeAddress.city;
          this.personalData.district = activeAddress.district;
          this.personalData.street = activeAddress.street;
          this.personalData.houseNumber = activeAddress.houseNumber;
          this.personalData.houseCorpus = activeAddress.houseCorpus;
          this.personalData.entranceNumber = activeAddress.entranceNumber;
          this.personalData.latitude = activeAddress.coordinates.latitude;
          this.personalData.longitude = activeAddress.coordinates.longitude;
        }
      }, {
        key: "setFormData",
        value: function setFormData() {
          this.personalDataForm.patchValue({
            firstName: this.personalData.firstName,
            lastName: this.personalData.lastName,
            email: this.personalData.email,
            phoneNumber: '380' + this.personalData.phoneNumber,
            addressComment: this.addresses.length > 0 ? this.personalData.addressComment : ''
          });
        }
      }, {
        key: "togglClient",
        value: function togglClient() {
          var anotherClientFirstName = this.getControl('anotherClientFirstName');
          var anotherClientLastName = this.getControl('anotherClientLastName');
          var anotherClientPhoneNumber = this.getControl('anotherClientPhoneNumber');
          var anotherClientEmail = this.getControl('anotherClientEmail');
          this.anotherClient = !this.anotherClient;

          if (this.anotherClient) {
            anotherClientFirstName.setValidators(this.personalDataFormValidators);
            anotherClientLastName.setValidators(this.personalDataFormValidators);
            anotherClientPhoneNumber.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(12)]);
            anotherClientPhoneNumber.setValue('+380');
          } else {
            anotherClientFirstName.setValue('');
            anotherClientFirstName.clearValidators();
            anotherClientLastName.setValue('');
            anotherClientLastName.clearValidators();
            anotherClientPhoneNumber.setValue('');
            anotherClientPhoneNumber.clearValidators();
            anotherClientEmail.setValue('');
          }

          anotherClientFirstName.updateValueAndValidity();
          anotherClientLastName.updateValueAndValidity();
          anotherClientPhoneNumber.updateValueAndValidity();
        }
      }, {
        key: "editAddress",
        value: function editAddress(addressId) {
          this.openDialog(true, addressId);
        }
      }, {
        key: "activeAddressId",
        value: function activeAddressId() {
          var activeAddress = this.addresses.find(function (address) {
            return address.actual;
          });
          this.addressId = activeAddress.id;
        }
      }, {
        key: "deleteAddress",
        value: function deleteAddress(address) {
          var _this33 = this;

          this.orderService.deleteAddress(address).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy)).subscribe(function (list) {
            _this33.addresses = list.addressList;

            if (_this33.addresses[0]) {
              _this33.checkAddress(_this33.addresses[0].id);
            } else {
              _this33.personalDataForm.patchValue({
                address: ''
              });
            }
          });
        }
      }, {
        key: "addNewAddress",
        value: function addNewAddress() {
          this.openDialog(false);
          this.personalDataForm.patchValue({
            address: this.addresses
          });
        }
      }, {
        key: "getControl",
        value: function getControl(control) {
          return this.personalDataForm.get(control);
        }
      }, {
        key: "openDialog",
        value: function openDialog(isEdit, addressId) {
          var _this34 = this;

          var currentAddress = this.addresses.find(function (address) {
            return address.id === addressId;
          });
          var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"]();
          dialogConfig.panelClass = 'address-matDialog-styles';
          dialogConfig.data = {
            edit: isEdit,
            currentLocation: this.currentLocation,
            disrtrict: currentAddress === null || currentAddress === void 0 ? void 0 : currentAddress.district
          };

          if (isEdit) {
            dialogConfig.data.address = currentAddress;
          } else {
            dialogConfig.data.address = {};
          }

          var dialogRef = this.dialog.open(_ubs_add_address_pop_up_ubs_add_address_pop_up_component__WEBPACK_IMPORTED_MODULE_5__["UBSAddAddressPopUpComponent"], dialogConfig);
          dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy)).subscribe(function () {
            return _this34.findAllAddresses(false);
          });
        }
      }, {
        key: "getFormValues",
        value: function getFormValues() {
          return true;
        }
      }, {
        key: "submit",
        value: function submit() {
          this.firstOrder = false;
          this.activeAddressId();
          this.changeAddressInPersonalData();
          this.orderDetails = this.shareFormService.orderDetails;
          var orderBags = [];
          this.orderDetails.bags.forEach(function (bagItem, index) {
            if (bagItem.quantity !== null) {
              var bag = {
                amount: bagItem.quantity,
                id: bagItem.id
              };
              orderBags.push(bag);
            }
          });
          orderBags = orderBags.filter(function (bag) {
            return bag.amount !== 0;
          });
          this.personalData.firstName = this.personalDataForm.get('firstName').value;
          this.personalData.lastName = this.personalDataForm.get('lastName').value;
          this.personalData.email = this.personalDataForm.get('email').value;
          this.personalData.phoneNumber = this.personalDataForm.get('phoneNumber').value.slice(3);
          this.personalData.anotherClientFirstName = this.personalDataForm.get('anotherClientFirstName').value;
          this.personalData.anotherClientLastName = this.personalDataForm.get('anotherClientLastName').value;
          this.personalData.anotherClientEmail = this.personalDataForm.get('anotherClientEmail').value;
          this.personalData.anotherClientPhoneNumber = this.personalDataForm.get('anotherClientPhoneNumber').value.slice(3);
          this.personalData.addressComment = this.personalDataForm.get('addressComment').value;
          this.order = new _models_ubs_model__WEBPACK_IMPORTED_MODULE_6__["Order"](this.shareFormService.orderDetails.additionalOrders, this.addressId, orderBags, this.shareFormService.orderDetails.certificates, this.shareFormService.orderDetails.orderComment, this.personalData, this.shareFormService.orderDetails.pointsToUse, this.shouldBePaid);
          this.orderService.setOrder(this.order);
        }
      }, {
        key: "changeAddressComment",
        value: function changeAddressComment() {
          var _this35 = this;

          this.addresses.forEach(function (address) {
            if (address.actual) {
              address.addressComment = _this35.personalDataForm.controls.addressComment.value;

              _this35.orderService.addAdress(address).subscribe(function () {
                _this35.orderService.setCurrentAddress(address);

                _this35.findAllAddresses(false);
              });
            }
          });
        }
      }]);

      return UBSPersonalInformationComponent;
    }(_shared_components_form_base_form_base_component__WEBPACK_IMPORTED_MODULE_2__["FormBaseComponent"]);

    UBSPersonalInformationComponent.ɵfac = function UBSPersonalInformationComponent_Factory(t) {
      return new (t || UBSPersonalInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_9__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ubs_order_form_service__WEBPACK_IMPORTED_MODULE_10__["UBSOrderFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    UBSPersonalInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UBSPersonalInformationComponent,
      selectors: [["app-ubs-personal-information"]],
      inputs: {
        completed: "completed"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 13,
      vars: 11,
      consts: [[3, "formGroup", 4, "ngIf"], [1, "w-100", "d-flex", "justify-content-between", "buttons", "centered"], ["matStepperPrevious", "", 1, "secondary-global-button", "btn", "back-btn", "m-0"], ["aria-hidden", "true", 1, "fas", "fa-chevron-left"], [1, "w-100", "d-flex", "justify-content-end"], ["type", "button", 1, "secondary-global-button", "btn", "cansel-button", 3, "click"], ["type", "submit", "matStepperNext", "", 1, "primary-global-button", "btn", "m-0", 3, "disabled"], [3, "formGroup"], [1, "row", "personal-data"], [1, "w-100"], [1, "personal-data-title"], [1, "col-12", "col-sm-6", "form-group"], ["formControlName", "firstName", "type", "text", 1, "shadow-none", "form-control"], ["class", "validation", 4, "ngIf"], ["formControlName", "phoneNumber", "type", "text", "placeholder", "+38(___) ___ __ __", 1, "shadow-none", "form-control", 3, "unmask", "imask"], [1, "col-12", "col-sm-6", "form-group", "mt-2"], ["formControlName", "lastName", "type", "text", 1, "shadow-none", "form-control"], ["formControlName", "email", "type", "text", "placeholder", "example@email.com", 1, "shadow-none", "form-control"], [1, "row", "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input", 3, "checked", "change"], ["for", "flexCheckDefault", 1, "form-check-label"], ["class", "row personal-data", 4, "ngIf"], [1, "row", "adress-section"], [1, "address-title"], [3, "ngIf"], ["class", "no-addresses", 4, "ngIf", "ngIfElse"], ["addressesList", ""], [1, "w-100", "centered"], ["type", "button", "mat-raised-button", "", 1, "btn", "add-address", 3, "disabled", "click"], [1, "address-comment"], [1, "comment-title"], ["formControlName", "addressComment", 1, "form-control", 3, "placeholder", "blur"], [1, "validation"], [3, "formElement", "firstNameFieldValue", "controlName"], [3, "formElement", "phoneNumberFieldValue", "controlName"], [3, "formElement", "lastNameFieldValue", "controlName"], [3, "formElement", "emailFieldValue", "controlName"], ["formControlName", "anotherClientFirstName", "type", "text", 1, "shadow-none", "form-control", 3, "placeholder"], ["formControlName", "anotherClientPhoneNumber", "type", "text", "placeholder", "+38(___) ___ __ __", 1, "shadow-none", "form-control", 3, "unmask", "imask"], ["formControlName", "anotherClientLastName", "type", "text", 1, "shadow-none", "form-control", 3, "placeholder"], ["formControlName", "anotherClientEmail", "type", "text", "placeholder", "example@email.com", 1, "shadow-none", "form-control"], [3, "formElement", "anotherClientFirstNameFieldValue", "controlName"], [3, "formElement", "anotherClientPhoneNumberFieldValue", "controlName"], [3, "formElement", "anotherClientLastNameFieldValue", "controlName"], [3, "formElement", "anotherClientEmailFieldValue", "controlName"], [1, "ml-3"], [1, "no-addresses"], ["class", "w-50 d-flex mt-2 mb-2 col-lg-6 col-md-6 col-sm-12 col-12", 4, "ngFor", "ngForOf"], [1, "w-50", "d-flex", "mt-2", "mb-2", "col-lg-6", "col-md-6", "col-sm-12", "col-12"], [1, "custom-radio", "d-flex"], ["name", "address", "type", "radio", 3, "value", "checked", "disabled", "click"], [1, "col-md-6", 3, "address"], [1, "edit-address", 3, "click"], ["src", "assets/img/comments/edit.png", "alt", "edit image"], ["src", "assets/img/comments/delete.png", "alt", "delete image"], [3, "formElement", "controlName"]],
      template: function UBSPersonalInformationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UBSPersonalInformationComponent_form_0_Template, 57, 43, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UBSPersonalInformationComponent_Template_button_click_7_listener() {
            return ctx.cancelUBS();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.personalData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "personal-info.info-back"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, "personal-info.info-cancel"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.personalDataForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, "personal-info.info-next"), " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperNext"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], angular_imask__WEBPACK_IMPORTED_MODULE_13__["IMaskDirective"], _ubs_input_error_ubs_input_error_component__WEBPACK_IMPORTED_MODULE_14__["UBSInputErrorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _address_address_component__WEBPACK_IMPORTED_MODULE_15__["AddressComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"]],
      styles: [".address-matDialog-styles .mat-dialog-container {\n  margin: auto !important;\n  width: 80% !important;\n}\n  .address-matDialog-styles .pac-container .pac-item {\n  padding: 0 0 0 10px;\n  height: 32px;\n}\n  .address-matDialog-styles .pac-container .pac-item .pac-item-query {\n  color: var(--ubs-primary-grey);\n}\n  .address-matDialog-styles .pac-container .pac-item:hover {\n  background-color: var(--ubs-primary-green);\n}\n  .address-matDialog-styles .pac-container .pac-item:hover .pac-item-query {\n  color: var(----ubs-primary-white);\n}\n  .address-matDialog-styles .pac-container .pac-icon {\n  display: none;\n}\nform[_ngcontent-%COMP%] {\n  box-shadow: 1px 4px 8px rgba(100, 114, 125, 0.18);\n  padding: 10px 25px 40px;\n}\nhr[_ngcontent-%COMP%] {\n  margin: 24px 15px 32px;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  border: 1px solid var(--ubs-quintynary-light-grey);\n  padding: 0 0 0 24px;\n  color: var(--ubs-primary-grey);\n  font-size: 14px;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  height: 36px;\n}\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid var(--ubs-error-ligh-red);\n  font-size: 10px;\n}\n.validation[_ngcontent-%COMP%] {\n  color: var(--ubs-error-ligh-red);\n  font-size: 10px;\n}\ntextarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100px;\n  padding: 12px 24px;\n  resize: none;\n}\ntextarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: var(--ubs-quaternary-font);\n  font-size: 14px;\n  font-weight: 400;\n  color: var(--ubs-primary-light-grey);\n  margin-bottom: 3rem;\n}\ntextarea[_ngcontent-%COMP%]::placeholder {\n  font-family: var(--ubs-quaternary-font);\n  font-size: 14px;\n  font-weight: 400;\n  color: var(--ubs-primary-light-grey);\n  margin-bottom: 3rem;\n}\nlabel[_ngcontent-%COMP%], .adress-title[_ngcontent-%COMP%], .adress-notice[_ngcontent-%COMP%], .comment-title[_ngcontent-%COMP%], .city-notice[_ngcontent-%COMP%] {\n  font-family: var(--ubs-tertiary-font);\n  font-size: 16px;\n  line-height: 18px;\n  font-weight: 400;\n  color: var(--ubs-secondary-grey);\n}\n.personal-data-title[_ngcontent-%COMP%], .comment-title[_ngcontent-%COMP%], .address-title[_ngcontent-%COMP%] {\n  margin: 0 0 20px 15px;\n  font-family: var(--ubs-tertiary-font);\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: 0.002em;\n  color: var(--ubs-primary-grey);\n}\n.comment-title[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n}\n.personal-data[_ngcontent-%COMP%], .adress[_ngcontent-%COMP%] {\n  padding: 14px 5px 4px;\n}\n.personal-data[_ngcontent-%COMP%] {\n  margin: 32px 0;\n}\n.adress-section[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin: 0 auto;\n}\n.adress-section[_ngcontent-%COMP%]   .no-addresses[_ngcontent-%COMP%] {\n  margin: 0 0 0 15px;\n  font-size: 14px;\n}\n.adress-section[_ngcontent-%COMP%]   .adress[_ngcontent-%COMP%] {\n  margin: 0 0 32px;\n}\n.adress-section[_ngcontent-%COMP%]   .adress[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 48%;\n}\n.adress-section[_ngcontent-%COMP%]   .adress[_ngcontent-%COMP%]   .adress-title[_ngcontent-%COMP%] {\n  margin: 5px 0 20px 15px;\n}\n.adress-section[_ngcontent-%COMP%]   .adress[_ngcontent-%COMP%]   .adress-notice[_ngcontent-%COMP%] {\n  margin: 15px 0 15px 15px;\n}\n.adress-section[_ngcontent-%COMP%]   .adress[_ngcontent-%COMP%]   .city-notice[_ngcontent-%COMP%] {\n  margin: 5px 0 0 0;\n}\n.btn[_ngcontent-%COMP%] {\n  width: 136px;\n  height: 44px;\n  border-radius: 4px;\n}\n.primary-global-button[_ngcontent-%COMP%] {\n  width: 88px;\n  padding: 8px 14px;\n  border-radius: 4px;\n  color: var(--ubs-quaternary-dark-grey);\n  border-color: var(--ubs-button-light-green);\n  background: var(--ubs-button-light-green);\n}\n.primary-global-button[_ngcontent-%COMP%]:disabled {\n  background: var(--ubs-quaternary-light-grey);\n  border-color: var(--ubs-quaternary-light-grey);\n}\n.address-comment[_ngcontent-%COMP%] {\n  padding: 0 15px;\n}\n.form-check[_ngcontent-%COMP%] {\n  margin: 0 0 0 25px;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  top: -1px;\n  width: 16px;\n  height: 16px;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-size: 14px;\n  color: var(--ubs-primary-grey);\n}\n.add-address[_ngcontent-%COMP%] {\n  margin: 0 0 0 15px;\n  padding: 0;\n  text-align: left;\n  font-size: 14px;\n  color: var(--ubs-electric-violet);\n}\n.btn[_ngcontent-%COMP%]:nth-child(1) {\n  margin: 0 24px 0 16px;\n}\n.btn[_ngcontent-%COMP%]:nth-child(2) {\n  margin: 0 15px 0 0;\n}\n.edit-address[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 3px;\n  cursor: pointer;\n}\n.address[_ngcontent-%COMP%] {\n  width: 500px;\n  padding-bottom: 2rem;\n}\n.ml-3[_ngcontent-%COMP%] {\n  color: var(--ubs-secondary-grey);\n}\n.fas[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.buttons[_ngcontent-%COMP%] {\n  margin-top: 46px;\n}\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.cansel-button[_ngcontent-%COMP%] {\n  border: 1px solid var(--ubs-quaternary-dark-grey);\n  color: var(--ubs-quaternary-dark-grey);\n  margin-right: 1rem !important;\n}\n.back-btn[_ngcontent-%COMP%] {\n  border: 0;\n  color: var(--ubs-quaternary-dark-grey);\n}\n@media screen and (max-width: 575px) {\n    .address-matDialog-styles .mat-dialog-container {\n    width: 100vw !important;\n  }\n\n    #cdk-overlay-0 {\n    max-width: 100vw !important;\n  }\n\n  form[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 15px;\n  }\n\n  input[_ngcontent-%COMP%] {\n    padding: 0 0 0 10px;\n  }\n\n  textarea[_ngcontent-%COMP%] {\n    height: 120px;\n  }\n\n  .adress-section[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n\n  .personal-data[_ngcontent-%COMP%], .adress[_ngcontent-%COMP%] {\n    padding: 5px;\n    margin: 0;\n  }\n\n  .col-12[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n\n  .centered[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    margin: 2em 0 1em;\n    padding: 5px 1.35em;\n  }\n\n  .edit-address[_ngcontent-%COMP%] {\n    margin: 5px 10px;\n  }\n  .edit-address[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 17px;\n  }\n\n  .add-address[_ngcontent-%COMP%] {\n    align-self: center;\n    color: var(--ubs-button-light-grey);\n    border: 1px solid;\n    border-radius: 3px;\n    font-style: normal;\n    font-weight: bold;\n    padding: 0.5em 1em;\n    margin: 1em 0;\n    text-align: center;\n  }\n\n  .address-title[_ngcontent-%COMP%], .personal-data-title[_ngcontent-%COMP%], .comment-title[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 2em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvdWJzL2NvbXBvbmVudHMvdWJzLXBlcnNvbmFsLWluZm9ybWF0aW9uL0Q6XFxTb2Z0U2VydmVfQWNhZGVteVxcR3JlZW5DaXR5XFxnaC1wYWdlc1xcR3JlZW5DaXR5Q2xpZW50L3NyY1xcYXBwXFxtYWluXFxjb21wb25lbnRcXHVic1xcY29tcG9uZW50c1xcdWJzLXBlcnNvbmFsLWluZm9ybWF0aW9uXFx1YnMtcGVyc29uYWwtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vY29tcG9uZW50L3Vicy9jb21wb25lbnRzL3Vicy1wZXJzb25hbC1pbmZvcm1hdGlvbi91YnMtcGVyc29uYWwtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUU7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0FDUEo7QURXSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ1ROO0FEV007RUFDRSw4QkFBQTtBQ1RSO0FEWU07RUFDRSwwQ0FBQTtBQ1ZSO0FEWVE7RUFDRSxpQ0FBQTtBQ1ZWO0FEZUk7RUFDRSxhQUFBO0FDYk47QURrQkE7RUFDRSxpREFBQTtFQUNBLHVCQUFBO0FDZkY7QURrQkE7RUFDRSxzQkFBQTtBQ2ZGO0FEa0JBOzs7RUFHRSxrREFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDZkY7QURrQkE7O0VBRUUsWUFBQTtBQ2ZGO0FEa0JBO0VBQ0UsMkNBQUE7RUFDQSxlQUFBO0FDZkY7QURrQkE7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7QUNmRjtBRGtCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ2ZGO0FEaUJFO0VBNUVBLHVDQTZFc0I7RUE1RXRCLGVBNEVpRjtFQTNFakYsZ0JBMkV1RjtFQTFFdkYsb0NBMEVrRDtFQUVoRCxtQkFBQTtBQ2JKO0FEVUU7RUE1RUEsdUNBNkVzQjtFQTVFdEIsZUE0RWlGO0VBM0VqRixnQkEyRXVGO0VBMUV2RixvQ0EwRWtEO0VBRWhELG1CQUFBO0FDYko7QURpQkE7Ozs7O0VBS0UscUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDZEY7QURpQkE7OztFQUdFLHFCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtBQ2RGO0FEaUJBO0VBQ0Usa0JBQUE7QUNkRjtBRGlCQTs7RUFFRSxxQkFBQTtBQ2RGO0FEaUJBO0VBQ0UsY0FBQTtBQ2RGO0FEaUJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNkRjtBRGdCRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ2RKO0FEaUJFO0VBQ0UsZ0JBQUE7QUNmSjtBRGlCSTtFQUNFLFVBQUE7QUNmTjtBRGtCSTtFQUNFLHVCQUFBO0FDaEJOO0FEbUJJO0VBQ0Usd0JBQUE7QUNqQk47QURvQkk7RUFDRSxpQkFBQTtBQ2xCTjtBRHVCQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNwQkY7QUR1QkE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMkNBQUE7RUFDQSx5Q0FBQTtBQ3BCRjtBRHNCRTtFQUNFLDRDQUFBO0VBQ0EsOENBQUE7QUNwQko7QUR3QkE7RUFDRSxlQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7QUNyQkY7QUR1QkU7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNyQko7QUR3QkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ3RCSjtBRDBCQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FDdkJGO0FEMEJBO0VBQ0UscUJBQUE7QUN2QkY7QUQwQkE7RUFDRSxrQkFBQTtBQ3ZCRjtBRDBCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3ZCRjtBRDBCQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQ3ZCRjtBRDBCQTtFQUNFLGdDQUFBO0FDdkJGO0FEMEJBO0VBQ0UsaUJBQUE7QUN2QkY7QUQwQkE7RUFDRSxnQkFBQTtBQ3ZCRjtBRHlCRTtFQUNFLGVBQUE7QUN2Qko7QUQyQkE7RUFDRSxpREFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7QUN4QkY7QUQyQkE7RUFDRSxTQUFBO0VBQ0Esc0NBQUE7QUN4QkY7QUQyQkE7RUFFSTtJQUNFLHVCQUFBO0VDekJKOztFRDZCQTtJQUNFLDJCQUFBO0VDMUJGOztFRDZCQTtJQUNFLGVBQUE7SUFDQSxhQUFBO0VDMUJGOztFRDZCQTtJQUNFLG1CQUFBO0VDMUJGOztFRDZCQTtJQUNFLGFBQUE7RUMxQkY7O0VENkJBO0lBQ0UsWUFBQTtFQzFCRjs7RUQ2QkE7O0lBRUUsWUFBQTtJQUNBLFNBQUE7RUMxQkY7O0VENkJBO0lBQ0UscUJBQUE7RUMxQkY7O0VENkJBO0lBQ0UsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtFQzFCRjs7RUQ2QkE7SUFDRSxnQkFBQTtFQzFCRjtFRDRCRTtJQUNFLFdBQUE7RUMxQko7O0VEOEJBO0lBQ0Usa0JBQUE7SUFDQSxtQ0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUMzQkY7O0VEOEJBOzs7SUFHRSxrQkFBQTtJQUNBLGtCQUFBO0VDM0JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbXBvbmVudC91YnMvY29tcG9uZW50cy91YnMtcGVyc29uYWwtaW5mb3JtYXRpb24vdWJzLXBlcnNvbmFsLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIHRleHRfc3R5bGUoJGZvbnQsICRjb2xvciwgJHNpemUsICR3ZWlnaHQpIHtcclxuICBmb250LWZhbWlseTogJGZvbnQ7XHJcbiAgZm9udC1zaXplOiAkc2l6ZTtcclxuICBmb250LXdlaWdodDogJHdlaWdodDtcclxuICBjb2xvcjogJGNvbG9yO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFkZHJlc3MtbWF0RGlhbG9nLXN0eWxlcyB7XHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnBhYy1jb250YWluZXIge1xyXG4gICAgLnBhYy1pdGVtIHtcclxuICAgICAgcGFkZGluZzogMCAwIDAgMTBweDtcclxuICAgICAgaGVpZ2h0OiAzMnB4O1xyXG5cclxuICAgICAgLnBhYy1pdGVtLXF1ZXJ5IHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZWVuKTtcclxuXHJcbiAgICAgICAgLnBhYy1pdGVtLXF1ZXJ5IHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS0tLXVicy1wcmltYXJ5LXdoaXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucGFjLWljb24ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZm9ybSB7XHJcbiAgYm94LXNoYWRvdzogMXB4IDRweCA4cHggcmdiKDEwMCAxMTQgMTI1IC8gMTglKTtcclxuICBwYWRkaW5nOiAxMHB4IDI1cHggNDBweDtcclxufVxyXG5cclxuaHIge1xyXG4gIG1hcmdpbjogMjRweCAxNXB4IDMycHg7XHJcbn1cclxuXHJcbmlucHV0LFxyXG50ZXh0YXJlYSxcclxuc2VsZWN0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11YnMtcXVpbnR5bmFyeS1saWdodC1ncmV5KTtcclxuICBwYWRkaW5nOiAwIDAgMCAyNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbmlucHV0LFxyXG5zZWxlY3Qge1xyXG4gIGhlaWdodDogMzZweDtcclxufVxyXG5cclxuaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11YnMtZXJyb3ItbGlnaC1yZWQpO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLnZhbGlkYXRpb24ge1xyXG4gIGNvbG9yOiB2YXIoLS11YnMtZXJyb3ItbGlnaC1yZWQpO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuXHJcbiAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgQGluY2x1ZGUgdGV4dF9zdHlsZSh2YXIoLS11YnMtcXVhdGVybmFyeS1mb250KSwgdmFyKC0tdWJzLXByaW1hcnktbGlnaHQtZ3JleSksIDE0cHgsIDQwMCk7XHJcblxyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICB9XHJcbn1cclxuXHJcbmxhYmVsLFxyXG4uYWRyZXNzLXRpdGxlLFxyXG4uYWRyZXNzLW5vdGljZSxcclxuLmNvbW1lbnQtdGl0bGUsXHJcbi5jaXR5LW5vdGljZSB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXVicy10ZXJ0aWFyeS1mb250KTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogdmFyKC0tdWJzLXNlY29uZGFyeS1ncmV5KTtcclxufVxyXG5cclxuLnBlcnNvbmFsLWRhdGEtdGl0bGUsXHJcbi5jb21tZW50LXRpdGxlLFxyXG4uYWRkcmVzcy10aXRsZSB7XHJcbiAgbWFyZ2luOiAwIDAgMjBweCAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS11YnMtdGVydGlhcnktZm9udCk7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMDJlbTtcclxuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XHJcbn1cclxuXHJcbi5jb21tZW50LXRpdGxlIHtcclxuICBtYXJnaW46IDAgMCAyMHB4IDA7XHJcbn1cclxuXHJcbi5wZXJzb25hbC1kYXRhLFxyXG4uYWRyZXNzIHtcclxuICBwYWRkaW5nOiAxNHB4IDVweCA0cHg7XHJcbn1cclxuXHJcbi5wZXJzb25hbC1kYXRhIHtcclxuICBtYXJnaW46IDMycHggMDtcclxufVxyXG5cclxuLmFkcmVzcy1zZWN0aW9uIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIC5uby1hZGRyZXNzZXMge1xyXG4gICAgbWFyZ2luOiAwIDAgMCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLmFkcmVzcyB7XHJcbiAgICBtYXJnaW46IDAgMCAzMnB4O1xyXG5cclxuICAgIC5pdGVtIHtcclxuICAgICAgd2lkdGg6IDQ4JTtcclxuICAgIH1cclxuXHJcbiAgICAuYWRyZXNzLXRpdGxlIHtcclxuICAgICAgbWFyZ2luOiA1cHggMCAyMHB4IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFkcmVzcy1ub3RpY2Uge1xyXG4gICAgICBtYXJnaW46IDE1cHggMCAxNXB4IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNpdHktbm90aWNlIHtcclxuICAgICAgbWFyZ2luOiA1cHggMCAwIDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuIHtcclxuICB3aWR0aDogMTM2cHg7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnByaW1hcnktZ2xvYmFsLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDg4cHg7XHJcbiAgcGFkZGluZzogOHB4IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdWJzLXF1YXRlcm5hcnktbGlnaHQtZ3JleSk7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWxpZ2h0LWdyZXkpO1xyXG4gIH1cclxufVxyXG5cclxuLmFkZHJlc3MtY29tbWVudCB7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG59XHJcblxyXG4uZm9ybS1jaGVjayB7XHJcbiAgbWFyZ2luOiAwIDAgMCAyNXB4O1xyXG5cclxuICAuZm9ybS1jaGVjay1pbnB1dCB7XHJcbiAgICB0b3A6IC0xcHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICB9XHJcblxyXG4gIC5mb3JtLWNoZWNrLWxhYmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkLWFkZHJlc3Mge1xyXG4gIG1hcmdpbjogMCAwIDAgMTVweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS11YnMtZWxlY3RyaWMtdmlvbGV0KTtcclxufVxyXG5cclxuLmJ0bjpudGgtY2hpbGQoMSkge1xyXG4gIG1hcmdpbjogMCAyNHB4IDAgMTZweDtcclxufVxyXG5cclxuLmJ0bjpudGgtY2hpbGQoMikge1xyXG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcclxufVxyXG5cclxuLmVkaXQtYWRkcmVzcyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogM3B4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFkZHJlc3Mge1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLm1sLTMge1xyXG4gIGNvbG9yOiB2YXIoLS11YnMtc2Vjb25kYXJ5LWdyZXkpO1xyXG59XHJcblxyXG4uZmFzIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIG1hcmdpbi10b3A6IDQ2cHg7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2Fuc2VsLWJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdWJzLXF1YXRlcm5hcnktZGFyay1ncmV5KTtcclxuICBjb2xvcjogdmFyKC0tdWJzLXF1YXRlcm5hcnktZGFyay1ncmV5KTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJhY2stYnRuIHtcclxuICBib3JkZXI6IDA7XHJcbiAgY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgOjpuZy1kZWVwIC5hZGRyZXNzLW1hdERpYWxvZy1zdHlsZXMge1xyXG4gICAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgI2Nkay1vdmVybGF5LTAge1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgZm9ybSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMTBweDtcclxuICB9XHJcblxyXG4gIHRleHRhcmVhIHtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgfVxyXG5cclxuICAuYWRyZXNzLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuXHJcbiAgLnBlcnNvbmFsLWRhdGEsXHJcbiAgLmFkcmVzcyB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuY29sLTEyIHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jZW50ZXJlZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDJlbSAwIDFlbTtcclxuICAgIHBhZGRpbmc6IDVweCAxLjM1ZW07XHJcbiAgfVxyXG5cclxuICAuZWRpdC1hZGRyZXNzIHtcclxuICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDE3cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWRkLWFkZHJlc3Mge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JleSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xyXG4gICAgbWFyZ2luOiAxZW0gMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5hZGRyZXNzLXRpdGxlLFxyXG4gIC5wZXJzb25hbC1kYXRhLXRpdGxlLFxyXG4gIC5jb21tZW50LXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICB9XHJcbn1cclxuIiwiOjpuZy1kZWVwIC5hZGRyZXNzLW1hdERpYWxvZy1zdHlsZXMgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuYWRkcmVzcy1tYXREaWFsb2ctc3R5bGVzIC5wYWMtY29udGFpbmVyIC5wYWMtaXRlbSB7XG4gIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gIGhlaWdodDogMzJweDtcbn1cbjo6bmctZGVlcCAuYWRkcmVzcy1tYXREaWFsb2ctc3R5bGVzIC5wYWMtY29udGFpbmVyIC5wYWMtaXRlbSAucGFjLWl0ZW0tcXVlcnkge1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XG59XG46Om5nLWRlZXAgLmFkZHJlc3MtbWF0RGlhbG9nLXN0eWxlcyAucGFjLWNvbnRhaW5lciAucGFjLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmVlbik7XG59XG46Om5nLWRlZXAgLmFkZHJlc3MtbWF0RGlhbG9nLXN0eWxlcyAucGFjLWNvbnRhaW5lciAucGFjLWl0ZW06aG92ZXIgLnBhYy1pdGVtLXF1ZXJ5IHtcbiAgY29sb3I6IHZhcigtLS0tdWJzLXByaW1hcnktd2hpdGUpO1xufVxuOjpuZy1kZWVwIC5hZGRyZXNzLW1hdERpYWxvZy1zdHlsZXMgLnBhYy1jb250YWluZXIgLnBhYy1pY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuZm9ybSB7XG4gIGJveC1zaGFkb3c6IDFweCA0cHggOHB4IHJnYmEoMTAwLCAxMTQsIDEyNSwgMC4xOCk7XG4gIHBhZGRpbmc6IDEwcHggMjVweCA0MHB4O1xufVxuXG5ociB7XG4gIG1hcmdpbjogMjRweCAxNXB4IDMycHg7XG59XG5cbmlucHV0LFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11YnMtcXVpbnR5bmFyeS1saWdodC1ncmV5KTtcbiAgcGFkZGluZzogMCAwIDAgMjRweDtcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlucHV0LFxuc2VsZWN0IHtcbiAgaGVpZ2h0OiAzNnB4O1xufVxuXG5pbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11YnMtZXJyb3ItbGlnaC1yZWQpO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi52YWxpZGF0aW9uIHtcbiAgY29sb3I6IHZhcigtLXVicy1lcnJvci1saWdoLXJlZCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxudGV4dGFyZWEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgcmVzaXplOiBub25lO1xufVxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWZvbnQpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1saWdodC1ncmV5KTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxubGFiZWwsXG4uYWRyZXNzLXRpdGxlLFxuLmFkcmVzcy1ub3RpY2UsXG4uY29tbWVudC10aXRsZSxcbi5jaXR5LW5vdGljZSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS11YnMtdGVydGlhcnktZm9udCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS11YnMtc2Vjb25kYXJ5LWdyZXkpO1xufVxuXG4ucGVyc29uYWwtZGF0YS10aXRsZSxcbi5jb21tZW50LXRpdGxlLFxuLmFkZHJlc3MtdGl0bGUge1xuICBtYXJnaW46IDAgMCAyMHB4IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS11YnMtdGVydGlhcnktZm9udCk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAwMmVtO1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XG59XG5cbi5jb21tZW50LXRpdGxlIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xufVxuXG4ucGVyc29uYWwtZGF0YSxcbi5hZHJlc3Mge1xuICBwYWRkaW5nOiAxNHB4IDVweCA0cHg7XG59XG5cbi5wZXJzb25hbC1kYXRhIHtcbiAgbWFyZ2luOiAzMnB4IDA7XG59XG5cbi5hZHJlc3Mtc2VjdGlvbiB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uYWRyZXNzLXNlY3Rpb24gLm5vLWFkZHJlc3NlcyB7XG4gIG1hcmdpbjogMCAwIDAgMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmFkcmVzcy1zZWN0aW9uIC5hZHJlc3Mge1xuICBtYXJnaW46IDAgMCAzMnB4O1xufVxuLmFkcmVzcy1zZWN0aW9uIC5hZHJlc3MgLml0ZW0ge1xuICB3aWR0aDogNDglO1xufVxuLmFkcmVzcy1zZWN0aW9uIC5hZHJlc3MgLmFkcmVzcy10aXRsZSB7XG4gIG1hcmdpbjogNXB4IDAgMjBweCAxNXB4O1xufVxuLmFkcmVzcy1zZWN0aW9uIC5hZHJlc3MgLmFkcmVzcy1ub3RpY2Uge1xuICBtYXJnaW46IDE1cHggMCAxNXB4IDE1cHg7XG59XG4uYWRyZXNzLXNlY3Rpb24gLmFkcmVzcyAuY2l0eS1ub3RpY2Uge1xuICBtYXJnaW46IDVweCAwIDAgMDtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiAxMzZweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5wcmltYXJ5LWdsb2JhbC1idXR0b24ge1xuICB3aWR0aDogODhweDtcbiAgcGFkZGluZzogOHB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XG4gIGJhY2tncm91bmQ6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xufVxuLnByaW1hcnktZ2xvYmFsLWJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWxpZ2h0LWdyZXkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWxpZ2h0LWdyZXkpO1xufVxuXG4uYWRkcmVzcy1jb21tZW50IHtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uZm9ybS1jaGVjayB7XG4gIG1hcmdpbjogMCAwIDAgMjVweDtcbn1cbi5mb3JtLWNoZWNrIC5mb3JtLWNoZWNrLWlucHV0IHtcbiAgdG9wOiAtMXB4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuLmZvcm0tY2hlY2sgLmZvcm0tY2hlY2stbGFiZWwge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcbn1cblxuLmFkZC1hZGRyZXNzIHtcbiAgbWFyZ2luOiAwIDAgMCAxNXB4O1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS11YnMtZWxlY3RyaWMtdmlvbGV0KTtcbn1cblxuLmJ0bjpudGgtY2hpbGQoMSkge1xuICBtYXJnaW46IDAgMjRweCAwIDE2cHg7XG59XG5cbi5idG46bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xufVxuXG4uZWRpdC1hZGRyZXNzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkcmVzcyB7XG4gIHdpZHRoOiA1MDBweDtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG5cbi5tbC0zIHtcbiAgY29sb3I6IHZhcigtLXVicy1zZWNvbmRhcnktZ3JleSk7XG59XG5cbi5mYXMge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiA0NnB4O1xufVxuLmJ1dHRvbnMgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2Fuc2VsLWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XG4gIGNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLmJhY2stYnRuIHtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogdmFyKC0tdWJzLXF1YXRlcm5hcnktZGFyay1ncmV5KTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgOjpuZy1kZWVwIC5hZGRyZXNzLW1hdERpYWxvZy1zdHlsZXMgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgfVxuXG4gIDo6bmctZGVlcCAjY2RrLW92ZXJsYXktMCB7XG4gICAgbWF4LXdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICB9XG5cbiAgZm9ybSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgcGFkZGluZzogMCAwIDAgMTBweDtcbiAgfVxuXG4gIHRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICB9XG5cbiAgLmFkcmVzcy1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cblxuICAucGVyc29uYWwtZGF0YSxcbi5hZHJlc3Mge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuY29sLTEyIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY2VudGVyZWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyZW0gMCAxZW07XG4gICAgcGFkZGluZzogNXB4IDEuMzVlbTtcbiAgfVxuXG4gIC5lZGl0LWFkZHJlc3Mge1xuICAgIG1hcmdpbjogNXB4IDEwcHg7XG4gIH1cbiAgLmVkaXQtYWRkcmVzcyBpbWcge1xuICAgIHdpZHRoOiAxN3B4O1xuICB9XG5cbiAgLmFkZC1hZGRyZXNzIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JleSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgbWFyZ2luOiAxZW0gMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYWRkcmVzcy10aXRsZSxcbi5wZXJzb25hbC1kYXRhLXRpdGxlLFxuLmNvbW1lbnQtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UBSPersonalInformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ubs-personal-information',
          templateUrl: './ubs-personal-information.component.html',
          styleUrls: ['./ubs-personal-information.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
        }, {
          type: _services_order_service__WEBPACK_IMPORTED_MODULE_9__["OrderService"]
        }, {
          type: _services_ubs_order_form_service__WEBPACK_IMPORTED_MODULE_10__["UBSOrderFormService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, {
        completed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/component/ubs/components/ubs-submit-order/ubs-submit-order-notification/ubs-submit-order-notification.component.ts":
  /*!*****************************************************************************************************************************************!*\
    !*** ./src/app/main/component/ubs/components/ubs-submit-order/ubs-submit-order-notification/ubs-submit-order-notification.component.ts ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: UbsSubmitOrderNotificationComponent */

  /***/
  function srcAppMainComponentUbsComponentsUbsSubmitOrderUbsSubmitOrderNotificationUbsSubmitOrderNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UbsSubmitOrderNotificationComponent", function () {
      return UbsSubmitOrderNotificationComponent;
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


    var _ubs_submit_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ubs-submit-order.component */
    "./src/app/main/component/ubs/components/ubs-submit-order/ubs-submit-order.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var UbsSubmitOrderNotificationComponent = /*#__PURE__*/function () {
      function UbsSubmitOrderNotificationComponent(route) {
        _classCallCheck(this, UbsSubmitOrderNotificationComponent);

        this.route = route;
        this.isNotification = true;
      }

      _createClass(UbsSubmitOrderNotificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this36 = this;

          this.route.params.subscribe(function (val) {
            _this36.orderId = +_this36.route.snapshot.paramMap.get('orderId');
          });
        }
      }]);

      return UbsSubmitOrderNotificationComponent;
    }();

    UbsSubmitOrderNotificationComponent.ɵfac = function UbsSubmitOrderNotificationComponent_Factory(t) {
      return new (t || UbsSubmitOrderNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    UbsSubmitOrderNotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UbsSubmitOrderNotificationComponent,
      selectors: [["app-ubs-submit-order-notification"]],
      decls: 5,
      vars: 5,
      consts: [[1, "container"], [1, "h1", "text-center", "form-title"], [1, "wrap", 3, "orderIdFromNotification", "isNotification"]],
      template: function UbsSubmitOrderNotificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-ubs-submit-order", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "order-form.ubs-courier"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("orderIdFromNotification", ctx.orderId)("isNotification", ctx.isNotification);
        }
      },
      directives: [_ubs_submit_order_component__WEBPACK_IMPORTED_MODULE_2__["UBSSubmitOrderComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
      styles: ["button[_ngcontent-%COMP%] {\n  width: 9rem;\n  height: 3rem;\n  border-radius: 4px;\n  border: none;\n}\n\nli[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.fas[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin-top: 46px;\n}\n\n.cansel-button[_ngcontent-%COMP%] {\n  border: 1px solid var(--ubs-primary-green);\n  margin-right: 1rem;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  border: 0;\n}\n\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 3rem 0 0;\n}\n\n.header[_ngcontent-%COMP%]   .order-title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n  .mat-step-header .mat-step-label {\n  font-family: var(--ubs-quaternary-font);\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--ubs-secondary-grey);\n}\n\n  .mat-step-header .mat-step-label.mat-step-label-active {\n  color: var(--ubs-secondary-grey);\n}\n\n  .mat-step-header .mat-step-label.mat-step-label-selected {\n  color: var(--primary-green);\n}\n\n  .mat-step-header .mat-step-icon {\n  background-color: var(--ubs-quaternary-light-grey);\n}\n\n  .mat-step-header .mat-step-icon-selected,   .mat-step-header .mat-step-icon-state-edit {\n  background-color: var(--primary-green);\n}\n\n  .mat-step-header .mat-step-icon-state-number {\n  font-family: var(--ubs-quaternary-font);\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--ubs-quintynary-light-grey);\n}\n\n  .mat-step-header .mat-step-icon-state-number.mat-step-icon-selected {\n  color: var(--ubs-primary-white);\n}\n\n  .mat-step-header .mat-icon {\n  color: var(--ubs-secondary-grey);\n}\n\n.form-title[_ngcontent-%COMP%] {\n  font-family: var(--ubs-quaternary-font);\n  font-size: 40px;\n  font-weight: 700;\n  color: var(--ubs-primary-grey);\n  margin: -35px 0 35px 0;\n}\n\n@media (min-width: 481px) and (max-width: 767px) {\n   .mat-step-header .mat-step-label {\n    font-size: 13px;\n    line-height: 13px;\n  }\n}\n\n@media (min-width: 320px) and (max-width: 480px) {\n   .mat-step-header .mat-step-label {\n    font-size: 9px;\n    line-height: 9px;\n    white-space: break-spaces;\n  }\n}\n\n.container[_ngcontent-%COMP%] {\n  box-shadow: 1px 4px 8px rgba(100, 114, 125, 0.18);\n  padding: 10px 25px 40px;\n  color: var(--ubs-primary-grey);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvdWJzL2NvbXBvbmVudHMvdWJzLXN1Ym1pdC1vcmRlci91YnMtc3VibWl0LW9yZGVyLW5vdGlmaWNhdGlvbi9EOlxcU29mdFNlcnZlX0FjYWRlbXlcXEdyZWVuQ2l0eVxcZ2gtcGFnZXNcXEdyZWVuQ2l0eUNsaWVudC9zcmNcXGFwcFxcbWFpblxcY29tcG9uZW50XFx1YnNcXGNvbXBvbmVudHNcXHVicy1zdWJtaXQtb3JkZXJcXHVicy1zdWJtaXQtb3JkZXItbm90aWZpY2F0aW9uXFx1YnMtc3VibWl0LW9yZGVyLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9jb21wb25lbnQvdWJzL2NvbXBvbmVudHMvdWJzLXN1Ym1pdC1vcmRlci91YnMtc3VibWl0LW9yZGVyLW5vdGlmaWNhdGlvbi91YnMtc3VibWl0LW9yZGVyLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsMENBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxtQkFBQTtBQ0NKOztBRFdFO0VBUEEsdUNBUXNCO0VBUHRCLGVBTzZFO0VBTjdFLGdCQU1tRjtFQUxuRixnQ0FLa0Q7QUNMcEQ7O0FEUUU7RUFDRSxnQ0FBQTtBQ05KOztBRFNFO0VBQ0UsMkJBQUE7QUNQSjs7QURVRTtFQUNFLGtEQUFBO0FDUko7O0FEV0U7O0VBRUUsc0NBQUE7QUNUSjs7QURZRTtFQTVCQSx1Q0E2QnNCO0VBNUJ0QixlQTRCb0Y7RUEzQnBGLGdCQTJCMEY7RUExQjFGLHVDQTBCa0Q7QUNQcEQ7O0FEVUU7RUFDRSwrQkFBQTtBQ1JKOztBRFdFO0VBQ0UsZ0NBQUE7QUNUSjs7QURhQTtFQXpDRSx1Q0EwQ29CO0VBekNwQixlQXlDeUU7RUF4Q3pFLGdCQXdDK0U7RUF2Qy9FLDhCQXVDZ0Q7RUFFaEQsc0JBQUE7QUNSRjs7QURXQTtFQUVJO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VDVEo7QUFDRjs7QURhQTtFQUVJO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7RUNaSjtBQUNGOztBRGdCQTtFQUNFLGlEQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtBQ2RGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnQvdWJzL2NvbXBvbmVudHMvdWJzLXN1Ym1pdC1vcmRlci91YnMtc3VibWl0LW9yZGVyLW5vdGlmaWNhdGlvbi91YnMtc3VibWl0LW9yZGVyLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgd2lkdGg6IDlyZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmZhcyB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICBtYXJnaW4tdG9wOiA0NnB4O1xyXG59XHJcblxyXG4uY2Fuc2VsLWJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdWJzLXByaW1hcnktZ3JlZW4pO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLmJ0bi1iYWNrIHtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogM3JlbSAwIDA7XHJcblxyXG4gIC5vcmRlci10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRleHRfc3R5bGUoJGZvbnQsICRjb2xvciwgJHNpemUsICR3ZWlnaHQpIHtcclxuICBmb250LWZhbWlseTogJGZvbnQ7XHJcbiAgZm9udC1zaXplOiAkc2l6ZTtcclxuICBmb250LXdlaWdodDogJHdlaWdodDtcclxuICBjb2xvcjogJGNvbG9yO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciB7XHJcbiAgLm1hdC1zdGVwLWxhYmVsIHtcclxuICAgIEBpbmNsdWRlIHRleHRfc3R5bGUodmFyKC0tdWJzLXF1YXRlcm5hcnktZm9udCksIHZhcigtLXVicy1zZWNvbmRhcnktZ3JleSksIDE4cHgsIDcwMCk7XHJcbiAgfVxyXG5cclxuICAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZlIHtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtc2Vjb25kYXJ5LWdyZXkpO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVkIHtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcclxuICB9XHJcblxyXG4gIC5tYXQtc3RlcC1pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWxpZ2h0LWdyZXkpO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXHJcbiAgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcclxuICB9XHJcblxyXG4gIC5tYXQtc3RlcC1pY29uLXN0YXRlLW51bWJlciB7XHJcbiAgICBAaW5jbHVkZSB0ZXh0X3N0eWxlKHZhcigtLXVicy1xdWF0ZXJuYXJ5LWZvbnQpLCB2YXIoLS11YnMtcXVpbnR5bmFyeS1saWdodC1ncmV5KSwgMjBweCwgNzAwKTtcclxuICB9XHJcblxyXG4gIC5tYXQtc3RlcC1pY29uLXN0YXRlLW51bWJlci5tYXQtc3RlcC1pY29uLXNlbGVjdGVkIHtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS13aGl0ZSk7XHJcbiAgfVxyXG5cclxuICAubWF0LWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1zZWNvbmRhcnktZ3JleSk7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS10aXRsZSB7XHJcbiAgQGluY2x1ZGUgdGV4dF9zdHlsZSh2YXIoLS11YnMtcXVhdGVybmFyeS1mb250KSwgdmFyKC0tdWJzLXByaW1hcnktZ3JleSksIDQwcHgsIDcwMCk7XHJcblxyXG4gIG1hcmdpbjogLTM1cHggMCAzNXB4IDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgOjpuZy1kZWVwLm1hdC1zdGVwLWhlYWRlciB7XHJcbiAgICAubWF0LXN0ZXAtbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICA6Om5nLWRlZXAubWF0LXN0ZXAtaGVhZGVyIHtcclxuICAgIC5tYXQtc3RlcC1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogOXB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgYm94LXNoYWRvdzogMXB4IDRweCA4cHggcmdiKDEwMCAxMTQgMTI1IC8gMTglKTtcclxuICBwYWRkaW5nOiAxMHB4IDI1cHggNDBweDtcclxuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XHJcbn1cclxuIiwiYnV0dG9uIHtcbiAgd2lkdGg6IDlyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaDMge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZmFzIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogNDZweDtcbn1cblxuLmNhbnNlbC1idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11YnMtcHJpbWFyeS1ncmVlbik7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLmJ0bi1iYWNrIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4uaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogM3JlbSAwIDA7XG59XG4uaGVhZGVyIC5vcmRlci10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS11YnMtcXVhdGVybmFyeS1mb250KTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdWJzLXNlY29uZGFyeS1ncmV5KTtcbn1cbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tdWJzLXNlY29uZGFyeS1ncmV5KTtcbn1cbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1zZWxlY3RlZCB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcbn1cbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWJzLXF1YXRlcm5hcnktbGlnaHQtZ3JleSk7XG59XG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcbn1cbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLW51bWJlciB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS11YnMtcXVhdGVybmFyeS1mb250KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdWJzLXF1aW50eW5hcnktbGlnaHQtZ3JleSk7XG59XG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1udW1iZXIubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCB7XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS13aGl0ZSk7XG59XG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LWljb24ge1xuICBjb2xvcjogdmFyKC0tdWJzLXNlY29uZGFyeS1ncmV5KTtcbn1cblxuLmZvcm0tdGl0bGUge1xuICBmb250LWZhbWlseTogdmFyKC0tdWJzLXF1YXRlcm5hcnktZm9udCk7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xuICBtYXJnaW46IC0zNXB4IDAgMzVweCAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICA6Om5nLWRlZXAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICA6Om5nLWRlZXAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbCB7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgbGluZS1oZWlnaHQ6IDlweDtcbiAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xuICB9XG59XG4uY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDRweCA4cHggcmdiYSgxMDAsIDExNCwgMTI1LCAwLjE4KTtcbiAgcGFkZGluZzogMTBweCAyNXB4IDQwcHg7XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UbsSubmitOrderNotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ubs-submit-order-notification',
          templateUrl: './ubs-submit-order-notification.component.html',
          styleUrls: ['./ubs-submit-order-notification.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/component/ubs/components/ubs-submit-order/ubs-submit-order.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/main/component/ubs/components/ubs-submit-order/ubs-submit-order.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: UBSSubmitOrderComponent */

  /***/
  function srcAppMainComponentUbsComponentsUbsSubmitOrderUbsSubmitOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UBSSubmitOrderComponent", function () {
      return UBSSubmitOrderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_components_form_base_form_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/components/form-base/form-base.component */
    "./src/app/main/component/shared/components/form-base/form-base.component.ts");
    /* harmony import */


    var _models_ubs_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/ubs.model */
    "./src/app/main/component/ubs/models/ubs.model.ts");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/order.service */
    "./src/app/main/component/ubs/services/order.service.ts");
    /* harmony import */


    var _services_ubs_order_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/ubs-order-form.service */
    "./src/app/main/component/ubs/services/ubs-order-form.service.ts");
    /* harmony import */


    var _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @global-service/localstorage/local-storage.service */
    "./src/app/main/service/localstorage/local-storage.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_phone_number_treat_phone_number_treat_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../../shared/phone-number-treat/phone-number-treat.pipe */
    "./src/app/shared/phone-number-treat/phone-number-treat.pipe.ts");

    function UBSSubmitOrderComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UBSSubmitOrderComponent_div_1_li_24_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var bag_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bag_r14.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", bag_r14.capacity, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, "order-details.litr"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 11, bag_r14.price), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 13, "order-details.currency"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", bag_r14.quantity, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 15, "order-details.pieces"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 17, bag_r14.quantity * bag_r14.price), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 19, "order-details.currency"), "");
      }
    }

    function UBSSubmitOrderComponent_div_1_li_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UBSSubmitOrderComponent_div_1_li_24_ng_container_1_Template, 17, 21, "ng-container", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bag_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", bag_r14.quantity);
      }
    }

    function UBSSubmitOrderComponent_div_1_p_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "order-details.certificate"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("-", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx_r4.orderDetails.certificatesSum), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, "order-details.currency"), " ");
      }
    }

    function UBSSubmitOrderComponent_div_1_p_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "order-details.bonuses"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("-", ctx_r5.orderDetails.pointsToUse, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "order-details.currency"), "");
      }
    }

    function UBSSubmitOrderComponent_div_1_div_50_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r18 = ctx.$implicit;
        var last_r19 = ctx.last;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", order_r18, "", !last_r19 ? ",\xA0" : "", "");
      }
    }

    function UBSSubmitOrderComponent_div_1_div_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UBSSubmitOrderComponent_div_1_div_50_li_8_Template, 3, 2, "li", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "order-details.store-delivery"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "order-details.order-numbers"), " \xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.additionalOrders);
      }
    }

    function UBSSubmitOrderComponent_div_1_ul_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "phoneNumberTreat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r7.personalData.anotherClientFirstName, " ", ctx_r7.personalData.anotherClientLastName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 4, ctx_r7.personalData.anotherClientPhoneNumber, "380"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.personalData.anotherClientEmail);
      }
    }

    function UBSSubmitOrderComponent_div_1_ng_template_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "phoneNumberTreat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r9.personalData.firstName, " ", ctx_r9.personalData.lastName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 4, ctx_r9.personalData.phoneNumber, "380"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.personalData.email);
      }
    }

    function UBSSubmitOrderComponent_div_1_span_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](", ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "personal-info.address-corp"), " ", ctx_r10.personalData.houseCorpus, "");
      }
    }

    function UBSSubmitOrderComponent_div_1_span_70_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](", ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "personal-info.address-entrance"), " ", ctx_r11.personalData.entranceNumber, "");
      }
    }

    function UBSSubmitOrderComponent_div_1_li_74_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "order-details.address-comment"), " ", ctx_r12.personalData.addressComment, " ");
      }
    }

    function UBSSubmitOrderComponent_div_1_li_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "order-details.order-comment"), " ", ctx_r13.orderDetails.orderComment, " ");
      }
    }

    function UBSSubmitOrderComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UBSSubmitOrderComponent_div_1_li_24_Template, 2, 1, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, UBSSubmitOrderComponent_div_1_p_38_Template, 9, 9, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, UBSSubmitOrderComponent_div_1_p_39_Template, 8, 7, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, UBSSubmitOrderComponent_div_1_div_50_Template, 9, 7, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, UBSSubmitOrderComponent_div_1_ul_55_Template, 8, 7, "ul", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, UBSSubmitOrderComponent_div_1_ng_template_56_Template, 8, 7, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ul", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, UBSSubmitOrderComponent_div_1_span_69_Template, 3, 4, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, UBSSubmitOrderComponent_div_1_span_70_Template, 3, 4, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, UBSSubmitOrderComponent_div_1_li_74_Template, 3, 4, "li", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, UBSSubmitOrderComponent_div_1_li_75_Template, 3, 4, "li", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](87, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "select", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UBSSubmitOrderComponent_div_1_Template_select_change_89_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.orderButton($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](95, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 38, "order-details.your-order"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 40, "order-details.service"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 42, "order-details.volume"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 44, "order-details.cost"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 46, "order-details.number-of-packages"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 48, "order-details.sum"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.bags);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx_r1.orderDetails.total === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 50, "order-details.order-amount"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 52, ctx_r1.orderDetails.total), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 54, "order-details.currency"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.orderDetails.certificatesSum);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.orderDetails.pointsToUse);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 56, "order-details.amount-due"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 58, ctx_r1.orderDetails.finalSum), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 60, "order-details.currency"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.additionalOrders[0]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 62, "order-details.recipient"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.personalData.anotherClientFirstName)("ngIfElse", _r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 64, "order-details.export-address"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 66, "personal-info.address-city"), " ", ctx_r1.personalData.city, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.personalData.street, ", ", ctx_r1.personalData.houseNumber, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.personalData.houseCorpus);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.personalData.entranceNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 68, "personal-info.address-district"), " ", ctx_r1.personalData.district, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.personalData.addressComment);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.orderDetails.orderComment);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](80, 70, "order-form.payment"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](83, 72, "order-details.choose-payment"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](87, 74, "submit-order.choose-payment"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isFinalSumZero);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](92, 76, "submit-order.fondy-card"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](95, 78, "submit-order.liqpay-card"));
      }
    }

    function UBSSubmitOrderComponent_div_2_button_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "submit-order.back"), " ");
      }
    }

    function UBSSubmitOrderComponent_div_2_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 58);
      }
    }

    function UBSSubmitOrderComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UBSSubmitOrderComponent_div_2_button_1_Template, 4, 3, "button", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UBSSubmitOrderComponent_div_2_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.cancelUBS();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UBSSubmitOrderComponent_div_2_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.redirectToOrder();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UBSSubmitOrderComponent_div_2_span_7_Template, 1, 0, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isNotification);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, "order-details.cancel"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.isTotalAmountZero || ctx_r2.loadingAnim);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loadingAnim);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "submit-order.to-order"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.liqPayButtonForm, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var UBSSubmitOrderComponent = /*#__PURE__*/function (_shared_components_fo3) {
      _inherits(UBSSubmitOrderComponent, _shared_components_fo3);

      var _super11 = _createSuper(UBSSubmitOrderComponent);

      function UBSSubmitOrderComponent(orderService, ubsOrderFormService, shareFormService, localStorageService, sanitizer, fb, router, dialog) {
        var _this37;

        _classCallCheck(this, UBSSubmitOrderComponent);

        _this37 = _super11.call(this, router, dialog, orderService);
        _this37.orderService = orderService;
        _this37.ubsOrderFormService = ubsOrderFormService;
        _this37.shareFormService = shareFormService;
        _this37.localStorageService = localStorageService;
        _this37.sanitizer = sanitizer;
        _this37.fb = fb;
        _this37.paymentForm = _this37.fb.group({});
        _this37.isLiqPay = false;
        _this37.bags = [];
        _this37.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        _this37.popupConfig = {
          hasBackdrop: true,
          closeOnNavigation: true,
          disableClose: true,
          panelClass: 'popup-dialog-container',
          data: {
            popupTitle: 'confirmation.title',
            popupSubtitle: 'confirmation.subTitle',
            popupConfirm: 'confirmation.cancel',
            popupCancel: 'confirmation.dismiss'
          }
        };
        _this37.orderBags = [];
        _this37.isValidOrder = true;
        _this37.isFinalSumZero = true;
        _this37.isTotalAmountZero = true;
        return _this37;
      }

      _createClass(UBSSubmitOrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.isNotification) {
            this.isDownloadDataNotification = false;
            this.getOrderFormNotifications();
          } else {
            this.takeOrderDetails();
          }
        }
      }, {
        key: "getOrderFormNotifications",
        value: function getOrderFormNotifications() {
          var _this38 = this;

          this.orderBags = this.orderBags.filter(function (bag) {
            return bag.amount !== 0;
          });
          this.orderService.getOrderFromNotification(this.orderIdFromNotification).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy)).subscribe(function (response) {
            _this38.bags = response.bags;

            _this38.setDataFromNotification(response);

            _this38.bags.forEach(function (item) {
              item.name = 'Clothes';
              item.quantity = response.amountOfBagsOrdered[item.id];
              var bag = {
                amount: item.quantity,
                id: item.id
              };

              _this38.orderBags.push(bag);
            });

            _this38.setOrderNotification();

            _this38.orderService.setOrder(_this38.order);

            _this38.isValidOrder = response.orderDiscountedPrice <= 0;
            _this38.isDownloadDataNotification = true;
          });
        }
      }, {
        key: "setDataFromNotification",
        value: function setDataFromNotification(data) {
          this.additionalOrders = [];
          this.orderDetails = {
            points: data.orderBonusDiscount,
            total: data.orderFullPrice,
            finalSum: data.orderDiscountedPrice,
            certificatesSum: data.orderCertificateTotalDiscount,
            pointsToUse: data.orderBonusDiscount
          };
          this.personalData = {
            firstName: data.recipientName,
            lastName: data.recipientSurname,
            email: data.recipientEmail,
            phoneNumber: data.recipientPhone,
            addressComment: data.addressComment,
            city: data.addressCity,
            district: data.addressDistrict,
            street: data.addressStreet
          };
        }
      }, {
        key: "setOrderNotification",
        value: function setOrderNotification() {
          this.order = new _models_ubs_model__WEBPACK_IMPORTED_MODULE_4__["Order"](this.additionalOrders, 2282, this.orderBags, this.orderDetails.certificates, this.orderDetails.orderComment, this.personalData, this.orderDetails.pointsToUse, this.shouldBePaid);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy.next();
          this.destroy.unsubscribe();
        }
      }, {
        key: "getFormValues",
        value: function getFormValues() {
          return true;
        }
      }, {
        key: "takeOrderDetails",
        value: function takeOrderDetails() {
          var _this39 = this;

          this.shareFormService.changedOrder.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy)).subscribe(function (orderDetails) {
            _this39.orderDetails = orderDetails;
            _this39.bags = orderDetails.bags.filter(function (bagItem) {
              return bagItem.quantity !== null;
            });
            _this39.additionalOrders = orderDetails.additionalOrders;
            _this39.isFinalSumZero = orderDetails.finalSum <= 0;
            _this39.isTotalAmountZero = orderDetails.total === 0;
          });
          this.shareFormService.changedPersonalData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy)).subscribe(function (personalData) {
            _this39.personalData = personalData;
          });
        }
      }, {
        key: "redirectToOrder",
        value: function redirectToOrder() {
          var _this40 = this;

          this.loadingAnim = true;

          if (this.isFinalSumZero) {
            this.isLiqPay = false;
          }

          if (!this.isLiqPay) {
            this.orderService.getOrderUrl().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
              _this40.loadingAnim = false;
              _this40.shareFormService.isDataSaved = false;

              if (!_this40.shareFormService.orderUrl) {
                _this40.router.navigate(['ubs', 'confirm']);
              }
            })).subscribe(function (response) {
              var _JSON$parse = JSON.parse(response),
                  orderId = _JSON$parse.orderId,
                  link = _JSON$parse.link;

              _this40.shareFormService.orderUrl = '';

              _this40.localStorageService.removeUbsOrderId();

              if (_this40.isFinalSumZero && !_this40.isTotalAmountZero) {
                _this40.ubsOrderFormService.transferOrderId(orderId);

                _this40.ubsOrderFormService.setOrderResponseErrorStatus(false);

                _this40.ubsOrderFormService.setOrderStatus(true);
              } else {
                _this40.shareFormService.orderUrl = link.toString();

                _this40.localStorageService.setUbsFondyOrderId(orderId);

                document.location.href = _this40.shareFormService.orderUrl;
              }
            }, function (error) {
              _this40.loadingAnim = false;
            });
          } else {
            this.onNotSaveData();
          }
        }
      }, {
        key: "getLiqPayButton",
        value: function getLiqPayButton() {
          var _this41 = this;

          this.loadingAnim = true;
          this.orderService.getLiqPayForm().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy)).subscribe(function (res) {
            var _JSON$parse2 = JSON.parse(res),
                orderId = _JSON$parse2.orderId,
                liqPayButton = _JSON$parse2.liqPayButton;

            _this41.localStorageService.setUbsOrderId(orderId);

            _this41.liqPayButtonForm = _this41.sanitizer.bypassSecurityTrustHtml(liqPayButton);
            setTimeout(function () {
              _this41.liqPayButton = document.getElementsByName('btn_text');
              _this41.loadingAnim = false;
            }, 0);
          });
        }
      }, {
        key: "orderButton",
        value: function orderButton(event) {
          this.selectedPayment = event.target.value;

          if (this.selectedPayment === 'LiqPay') {
            this.isLiqPay = true;
            this.getLiqPayButton();
          } else {
            this.loadingAnim = false;
            this.isLiqPay = false;
          }
        }
      }, {
        key: "onNotSaveData",
        value: function onNotSaveData() {
          this.shareFormService.isDataSaved = true;
          this.liqPayButton[0].click();
        }
      }]);

      return UBSSubmitOrderComponent;
    }(_shared_components_form_base_form_base_component__WEBPACK_IMPORTED_MODULE_3__["FormBaseComponent"]);

    UBSSubmitOrderComponent.ɵfac = function UBSSubmitOrderComponent_Factory(t) {
      return new (t || UBSSubmitOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ubs_order_form_service__WEBPACK_IMPORTED_MODULE_6__["UBSOrderFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ubs_order_form_service__WEBPACK_IMPORTED_MODULE_6__["UBSOrderFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]));
    };

    UBSSubmitOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UBSSubmitOrderComponent,
      selectors: [["app-ubs-submit-order"]],
      inputs: {
        isNotification: "isNotification",
        orderIdFromNotification: "orderIdFromNotification"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 3,
      consts: [["class", "load-spinner", 4, "ngIf"], ["class", "container", 4, "ngIf"], ["class", "w-100 d-flex justify-content-between buttons centered", 4, "ngIf"], [1, "load-spinner"], [1, "custom-spinner"], [1, "container"], [1, "header"], [1, "font-bolt", "order-title"], [1, "form"], [1, "w-100", "d-flex", "justify-content-between", "mb-2"], [1, "col-3", "label", "m-0"], [1, "col-2", "label", "m-0"], [1, "col-3", "label", "m-0", "text-center"], [1, "services"], [1, "services-list", "w-100", "p-0", "m-0"], ["class", "services-list_item d-flex justify-content-between align-items-baseline", 4, "ngFor", "ngForOf"], [1, "middle"], [1, "middle-container"], [1, "showTotal"], [1, "totalInfo"], [1, "total-content"], ["class", "total-content", 4, "ngIf"], [1, "order-info-container", "d-flex", "flex-column"], ["class", "order-info", 4, "ngIf"], [1, "order-info"], [1, "order-header"], ["class", "order-list", 4, "ngIf", "ngIfElse"], ["defaultCase", ""], [1, "order-info", "m-0"], [1, "order-list"], [1, "order-list-item"], [4, "ngIf"], ["class", "order-list-item", 4, "ngIf"], [1, "bottom_comment"], [1, "form-group", "comment"], [1, "font-bolt", "bottom_comment_payment"], [1, "choose-payment"], [1, "col-12", "col-sm-12", "p-0"], [1, "choose-payment-chooser"], [1, "payment-select", "shadow-none", 3, "disabled", "change"], ["value", "Fondy", "selected", ""], ["value", "LiqPay"], [1, "services-list_item", "d-flex", "justify-content-between", "align-items-baseline"], [1, "col-3", "p-0", "m-0", "bag-name"], [1, "col-2", "p-0", "m-0", "bag-name"], [1, "col-3", "p-0", "m-0", "bag-name", "text-center"], [1, "money-saved"], [1, "order-list", "d-flex"], ["class", "order-list-item", 4, "ngFor", "ngForOf"], [1, "w-100", "d-flex", "justify-content-between", "buttons", "centered"], ["class", "secondary-global-button btn btn-back", "matStepperPrevious", "", 4, "ngIf"], [1, "w-100", "d-flex", "justify-content-end"], [1, "secondary-global-button", "btn", "cansel-button", "btn-main", 3, "click"], ["type", "submit", 1, "primary-global-button", "btn", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["id", "liqPayButton", 2, "display", "none", 3, "innerHTML"], ["matStepperPrevious", "", 1, "secondary-global-button", "btn", "btn-back"], ["aria-hidden", "true", 1, "fas", "fa-chevron-left"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]],
      template: function UBSSubmitOrderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UBSSubmitOrderComponent_div_0_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UBSSubmitOrderComponent_div_1_Template, 96, 80, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UBSSubmitOrderComponent_div_2_Template, 11, 10, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNotification && !ctx.isDownloadDataNotification);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bags.length && ctx.personalData || ctx.isNotification && ctx.isDownloadDataNotification);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bags.length && ctx.personalData || ctx.isNotification && ctx.isDownloadDataNotification);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperPrevious"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CurrencyPipe"], _shared_phone_number_treat_phone_number_treat_pipe__WEBPACK_IMPORTED_MODULE_16__["PhoneNumberTreatPipe"]],
      styles: ["button[_ngcontent-%COMP%] {\n  width: 9rem;\n  height: 3rem;\n  border-radius: 4px;\n  border: none;\n}\n\nli[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-size: 1.5rem;\n}\n\n.fas[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin-top: 46px;\n}\n\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 8rem;\n  height: 2.75rem;\n  font-size: 18px;\n}\n\n.cansel-button[_ngcontent-%COMP%] {\n  border: 1px solid var(--ubs-quaternary-dark-grey);\n  color: var(--ubs-quaternary-dark-grey);\n  margin-right: 1rem;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  border: 0;\n  color: var(--ubs-quaternary-dark-grey);\n}\n\n.container[_ngcontent-%COMP%] {\n  box-shadow: 1px 4px 8px rgba(100, 114, 125, 0.18);\n  padding: 10px 25px 40px;\n  color: var(--ubs-primary-grey);\n}\n\n.font-bolt[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 3rem 0 0;\n}\n\n.header[_ngcontent-%COMP%]   .order-title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.services[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 24px 0;\n  border-top: 1px solid var(--ubs-primary-light-grey);\n  border-bottom: 1px solid var(--ubs-primary-light-grey);\n}\n\n.services[_ngcontent-%COMP%]   .services-list_item[_ngcontent-%COMP%] {\n  margin: 28px 0;\n  color: var(--ubs-quaternary-dark-grey);\n}\n\n.services[_ngcontent-%COMP%]   .services-list_item[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n\n.services[_ngcontent-%COMP%]   .services-list_item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.label[_ngcontent-%COMP%] {\n  color: var(--ubs-secondary-grey);\n  padding: 0;\n}\n\n.primary-global-button[_ngcontent-%COMP%] {\n  padding: 8px 4px;\n  border-radius: 4px;\n  color: var(--ubs-quaternary-dark-grey);\n  border-color: var(--ubs-button-light-green);\n  background: var(--ubs-button-light-green);\n  display: flex;\n  justify-content: space-around;\n}\n\n.primary-global-button[_ngcontent-%COMP%]:disabled {\n  background: var(--ubs-quaternary-light-grey);\n  border-color: var(--ubs-quaternary-light-grey);\n}\n\n.middle[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 30px 0;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--ubs-primary-light-grey);\n}\n\n.totalInfo[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.totalInfo[_ngcontent-%COMP%]   .total-content[_ngcontent-%COMP%] {\n  color: var(--ubs-secondary-grey);\n}\n\n.totalInfo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n  color: var(--ubs-primary-grey);\n}\n\n.totalInfo[_ngcontent-%COMP%]   .money-saved[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.8rem;\n  color: var(--ubs-electric-violet);\n}\n\n.choose-payment[_ngcontent-%COMP%], .choose-payment-chooser[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n}\n\n.choose-payment[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 20px;\n  margin-bottom: 20px;\n  color: var(--ubs-primary-grey);\n}\n\n.choose-payment-chooser[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--ubs-secondary-grey);\n}\n\n.payment-select[_ngcontent-%COMP%] {\n  padding: 8px;\n  width: 323px;\n  height: 36px;\n  font-size: 14px;\n  color: var(--ubs-quaternary-dark-grey);\n  background: var(--ubs-primary-white);\n  border: 1px solid var(--quintynary-light-grey);\n  box-sizing: border-box;\n  border-radius: 4px;\n}\n\n.order-header[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.1px;\n  color: var(--ubs-primary-grey);\n}\n\n.middle-container[_ngcontent-%COMP%]   .showTotal[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 2rem;\n}\n\n.middle-container[_ngcontent-%COMP%]   .order-info-container[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 75%;\n}\n\n.middle-container[_ngcontent-%COMP%]   .order-info-container[_ngcontent-%COMP%]   .order-info[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n\n.middle-container[_ngcontent-%COMP%]   .order-info-container[_ngcontent-%COMP%]   .order-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.middle-container[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n.bottom_comment[_ngcontent-%COMP%] {\n  background: var(--ubs-primary-white);\n}\n\n.bottom_comment[_ngcontent-%COMP%]   .bottom_comment_payment[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.bottom_comment[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1) {\n  margin: 0 24px 0 0;\n  border: 1px solid var(--ubs-button-light-green);\n  background: none;\n  color: var(--ubs-button-light-green);\n}\n\n.bottom_comment[_ngcontent-%COMP%]   .btn-main[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 3rem;\n  border-radius: 0;\n  border: none;\n}\n\n.bottom_comment[_ngcontent-%COMP%]   .btn-main[_ngcontent-%COMP%]:hover {\n  background: var(--ubs-button-light-green);\n  color: var(--ubs-primary-white);\n}\n\n@media (min-width: 481px) and (max-width: 767px) {\n  .label[_ngcontent-%COMP%], .bag-name[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n\n  .totalInfo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .totalInfo[_ngcontent-%COMP%]   .money-saved[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n  }\n\n  .bottom_comment[_ngcontent-%COMP%]   .bottom_comment_payment[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  button[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .payment-select[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    width: 250px;\n  }\n\n  .order-header[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n\n  p[_ngcontent-%COMP%], a[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], small[_ngcontent-%COMP%], input[_ngcontent-%COMP%], li[_ngcontent-%COMP%], .choose-payment[_ngcontent-%COMP%], .choose-payment-chooser[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n\n@media (max-width: 575px) {\n  .label[_ngcontent-%COMP%], .bag-name[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n\n  .totalInfo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .totalInfo[_ngcontent-%COMP%]   .money-saved[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n\n  .bottom_comment[_ngcontent-%COMP%]   .bottom_comment_payment[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n\n  button[_ngcontent-%COMP%] {\n    width: 100px;\n    font-size: 0.7rem;\n  }\n\n  .order-header[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n\n  .order-list-item[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n\n  .payment-select[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    width: 250px;\n  }\n\n  p[_ngcontent-%COMP%], a[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], small[_ngcontent-%COMP%], input[_ngcontent-%COMP%], li[_ngcontent-%COMP%], .choose-payment[_ngcontent-%COMP%], .choose-payment-chooser[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n\n  .centered[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    margin: 2em 0 1em;\n    padding: 5px 1.35em;\n  }\n\n  .middle-container[_ngcontent-%COMP%]   .order-info-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.load-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n}\n\n[_nghost-%COMP%]     .custom-spinner circle {\n  stroke: #e2e2e2;\n}\n\n  .mat-progress-bar-fill::after {\n  background: #e2e2e2;\n}\n\n  .mat-progress-bar-buffer {\n  background: #bfbfbf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvdWJzL2NvbXBvbmVudHMvdWJzLXN1Ym1pdC1vcmRlci9EOlxcU29mdFNlcnZlX0FjYWRlbXlcXEdyZWVuQ2l0eVxcZ2gtcGFnZXNcXEdyZWVuQ2l0eUNsaWVudC9zcmNcXGFwcFxcbWFpblxcY29tcG9uZW50XFx1YnNcXGNvbXBvbmVudHNcXHVicy1zdWJtaXQtb3JkZXJcXHVicy1zdWJtaXQtb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vY29tcG9uZW50L3Vicy9jb21wb25lbnRzL3Vicy1zdWJtaXQtb3JkZXIvdWJzLXN1Ym1pdC1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNDSjs7QURHQTtFQUNFLGlEQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsU0FBQTtFQUNBLHNDQUFBO0FDQUY7O0FER0E7RUFDRSxpREFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURFRTtFQUNFLG1CQUFBO0FDQUo7O0FESUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLG1EQUFBO0VBQ0Esc0RBQUE7QUNERjs7QURHRTtFQUNFLGNBQUE7RUFDQSxzQ0FBQTtBQ0RKOztBREdJO0VBQ0UsYUFBQTtBQ0ROOztBRElJO0VBQ0UsZ0JBQUE7QUNGTjs7QURPQTtFQUNFLGdDQUFBO0VBQ0EsVUFBQTtBQ0pGOztBRE9BO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMkNBQUE7RUFDQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQ0pGOztBRE1FO0VBQ0UsNENBQUE7RUFDQSw4Q0FBQTtBQ0pKOztBRFFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLHNEQUFBO0FDTEY7O0FEUUE7RUFDRSxpQkFBQTtBQ0xGOztBRE9FO0VBQ0UsZ0NBQUE7QUNMSjs7QURRRTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7QUNOSjs7QURTRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtBQ1BKOztBRFdBOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUNSRjs7QURXQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNSRjs7QURXQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FDUkY7O0FEV0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ1JGOztBRFdBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUNSRjs7QURZRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDVEo7O0FEWUU7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUNWSjs7QURZSTtFQUNFLG1CQUFBO0FDVk47O0FEYUk7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDWE47O0FEZUU7RUFDRSxjQUFBO0FDYko7O0FEaUJBO0VBQ0Usb0NBQUE7QUNkRjs7QURnQkU7RUFDRSxnQkFBQTtBQ2RKOztBRGlCRTtFQUNFLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FDZko7O0FEa0JFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNoQko7O0FEa0JJO0VBQ0UseUNBQUE7RUFDQSwrQkFBQTtBQ2hCTjs7QURxQkE7RUFDRTs7SUFFRSxpQkFBQTtFQ2xCRjs7RURzQkU7SUFDRSxpQkFBQTtFQ25CSjtFRHNCRTtJQUNFLGtCQUFBO0VDcEJKOztFRHlCRTtJQUNFLGVBQUE7RUN0Qko7O0VEMEJBO0lBQ0UsaUJBQUE7RUN2QkY7O0VEMEJBO0lBQ0UsZUFBQTtFQ3ZCRjs7RUQwQkE7SUFDRSxlQUFBO0VDdkJGOztFRDBCQTtJQUNFLGlCQUFBO0lBQ0EsWUFBQTtFQ3ZCRjs7RUQwQkE7SUFDRSxpQkFBQTtFQ3ZCRjs7RUQwQkE7Ozs7Ozs7O0lBUUUsaUJBQUE7RUN2QkY7QUFDRjs7QUQwQkE7RUFDRTs7SUFFRSxpQkFBQTtFQ3hCRjs7RUQ0QkU7SUFDRSxpQkFBQTtFQ3pCSjtFRDRCRTtJQUNFLGlCQUFBO0VDMUJKOztFRCtCRTtJQUNFLGVBQUE7RUM1Qko7O0VEZ0NBO0lBQ0UsaUJBQUE7RUM3QkY7O0VEZ0NBO0lBQ0UsZUFBQTtFQzdCRjs7RURnQ0E7SUFDRSxZQUFBO0lBQ0EsaUJBQUE7RUM3QkY7O0VEZ0NBO0lBQ0UsaUJBQUE7RUM3QkY7O0VEZ0NBO0lBQ0UsaUJBQUE7RUM3QkY7O0VEZ0NBO0lBQ0UsaUJBQUE7SUFDQSxZQUFBO0VDN0JGOztFRGdDQTs7Ozs7Ozs7SUFRRSxpQkFBQTtFQzdCRjs7RURnQ0E7SUFDRSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0VDN0JGOztFRGlDRTtJQUNFLFdBQUE7RUM5Qko7QUFDRjs7QURrQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDaENGOztBRG1DQTtFQUNFLGVBQUE7QUNoQ0Y7O0FEbUNBO0VBQ0UsbUJBQUE7QUNoQ0Y7O0FEbUNBO0VBQ0UsbUJBQUE7QUNoQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbXBvbmVudC91YnMvY29tcG9uZW50cy91YnMtc3VibWl0LW9yZGVyL3Vicy1zdWJtaXQtb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIHdpZHRoOiA5cmVtO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuaDMge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5mYXMge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgbWFyZ2luLXRvcDogNDZweDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHdpZHRoOiA4cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNhbnNlbC1idXR0b24ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XHJcbiAgY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4uYnRuLWJhY2sge1xyXG4gIGJvcmRlcjogMDtcclxuICBjb2xvcjogdmFyKC0tdWJzLXF1YXRlcm5hcnktZGFyay1ncmV5KTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgYm94LXNoYWRvdzogMXB4IDRweCA4cHggcmdiKDEwMCAxMTQgMTI1IC8gMTglKTtcclxuICBwYWRkaW5nOiAxMHB4IDI1cHggNDBweDtcclxuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XHJcbn1cclxuXHJcbi5mb250LWJvbHQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDNyZW0gMCAwO1xyXG5cclxuICAub3JkZXItdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5zZXJ2aWNlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDI0cHggMDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tdWJzLXByaW1hcnktbGlnaHQtZ3JleSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXVicy1wcmltYXJ5LWxpZ2h0LWdyZXkpO1xyXG5cclxuICAuc2VydmljZXMtbGlzdF9pdGVtIHtcclxuICAgIG1hcmdpbjogMjhweCAwO1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgY29sb3I6IHZhcigtLXVicy1zZWNvbmRhcnktZ3JleSk7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnByaW1hcnktZ2xvYmFsLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogOHB4IDRweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWxpZ2h0LWdyZXkpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1saWdodC1ncmV5KTtcclxuICB9XHJcbn1cclxuXHJcbi5taWRkbGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDMwcHggMDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXVicy1wcmltYXJ5LWxpZ2h0LWdyZXkpO1xyXG59XHJcblxyXG4udG90YWxJbmZvIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgLnRvdGFsLWNvbnRlbnQge1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1zZWNvbmRhcnktZ3JleSk7XHJcbiAgfVxyXG5cclxuICBzdHJvbmcge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xyXG4gIH1cclxuXHJcbiAgLm1vbmV5LXNhdmVkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtZWxlY3RyaWMtdmlvbGV0KTtcclxuICB9XHJcbn1cclxuXHJcbi5jaG9vc2UtcGF5bWVudCxcclxuLmNob29zZS1wYXltZW50LWNob29zZXIge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uY2hvb3NlLXBheW1lbnQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcclxufVxyXG5cclxuLmNob29zZS1wYXltZW50LWNob29zZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogdmFyKC0tdWJzLXNlY29uZGFyeS1ncmV5KTtcclxufVxyXG5cclxuLnBheW1lbnQtc2VsZWN0IHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgd2lkdGg6IDMyM3B4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdWJzLXByaW1hcnktd2hpdGUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXF1aW50eW5hcnktbGlnaHQtZ3JleSk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5vcmRlci1oZWFkZXIge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xyXG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcclxufVxyXG5cclxuLm1pZGRsZS1jb250YWluZXIge1xyXG4gIC5zaG93VG90YWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyLWluZm8tY29udGFpbmVyIHtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDc1JTtcclxuXHJcbiAgICAub3JkZXItaW5mbyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm9yZGVyLWxpc3Qge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNtYWxsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmJvdHRvbV9jb21tZW50IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS11YnMtcHJpbWFyeS13aGl0ZSk7XHJcblxyXG4gIC5ib3R0b21fY29tbWVudF9wYXltZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgfVxyXG5cclxuICAuYnRuOm50aC1jaGlsZCgxKSB7XHJcbiAgICBtYXJnaW46IDAgMjRweCAwIDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XHJcbiAgfVxyXG5cclxuICAuYnRuLW1haW4ge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS13aGl0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5sYWJlbCxcclxuICAuYmFnLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG5cclxuICAudG90YWxJbmZvIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuXHJcbiAgICAubW9uZXktc2F2ZWQge1xyXG4gICAgICBmb250LXNpemU6IDAuNjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYm90dG9tX2NvbW1lbnQge1xyXG4gICAgLmJvdHRvbV9jb21tZW50X3BheW1lbnQge1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5cclxuICAucGF5bWVudC1zZWxlY3Qge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG5cclxuICAub3JkZXItaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxuXHJcbiAgcCxcclxuICBhLFxyXG4gIHRleHRhcmVhLFxyXG4gIHNtYWxsLFxyXG4gIGlucHV0LFxyXG4gIGxpLFxyXG4gIC5jaG9vc2UtcGF5bWVudCxcclxuICAuY2hvb3NlLXBheW1lbnQtY2hvb3NlciB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIC5sYWJlbCxcclxuICAuYmFnLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG5cclxuICAudG90YWxJbmZvIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAubW9uZXktc2F2ZWQge1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ib3R0b21fY29tbWVudCB7XHJcbiAgICAuYm90dG9tX2NvbW1lbnRfcGF5bWVudCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIH1cclxuXHJcbiAgaDUge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyLWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcblxyXG4gIC5vcmRlci1saXN0LWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG5cclxuICAucGF5bWVudC1zZWxlY3Qge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG5cclxuICBwLFxyXG4gIGEsXHJcbiAgdGV4dGFyZWEsXHJcbiAgc21hbGwsXHJcbiAgaW5wdXQsXHJcbiAgbGksXHJcbiAgLmNob29zZS1wYXltZW50LFxyXG4gIC5jaG9vc2UtcGF5bWVudC1jaG9vc2VyIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlcmVkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMmVtIDAgMWVtO1xyXG4gICAgcGFkZGluZzogNXB4IDEuMzVlbTtcclxuICB9XHJcblxyXG4gIC5taWRkbGUtY29udGFpbmVyIHtcclxuICAgIC5vcmRlci1pbmZvLWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxvYWQtc3Bpbm5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLXNwaW5uZXIgY2lyY2xlIHtcclxuICBzdHJva2U6ICNlMmUyZTI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogI2UyZTJlMjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XHJcbiAgYmFja2dyb3VuZDogI2JmYmZiZjtcclxufVxyXG4iLCJidXR0b24ge1xuICB3aWR0aDogOXJlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5oMyB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZmFzIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogNDZweDtcbn1cbi5idXR0b25zIGJ1dHRvbiB7XG4gIHdpZHRoOiA4cmVtO1xuICBoZWlnaHQ6IDIuNzVyZW07XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNhbnNlbC1idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xuICBjb2xvcjogdmFyKC0tdWJzLXF1YXRlcm5hcnktZGFyay1ncmV5KTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4uYnRuLWJhY2sge1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDRweCA4cHggcmdiYSgxMDAsIDExNCwgMTI1LCAwLjE4KTtcbiAgcGFkZGluZzogMTBweCAyNXB4IDQwcHg7XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcbn1cblxuLmZvbnQtYm9sdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogM3JlbSAwIDA7XG59XG4uaGVhZGVyIC5vcmRlci10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5zZXJ2aWNlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyNHB4IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS11YnMtcHJpbWFyeS1saWdodC1ncmV5KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXVicy1wcmltYXJ5LWxpZ2h0LWdyZXkpO1xufVxuLnNlcnZpY2VzIC5zZXJ2aWNlcy1saXN0X2l0ZW0ge1xuICBtYXJnaW46IDI4cHggMDtcbiAgY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XG59XG4uc2VydmljZXMgLnNlcnZpY2VzLWxpc3RfaXRlbTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uc2VydmljZXMgLnNlcnZpY2VzLWxpc3RfaXRlbTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmxhYmVsIHtcbiAgY29sb3I6IHZhcigtLXVicy1zZWNvbmRhcnktZ3JleSk7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wcmltYXJ5LWdsb2JhbC1idXR0b24ge1xuICBwYWRkaW5nOiA4cHggNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ucHJpbWFyeS1nbG9iYWwtYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdWJzLXF1YXRlcm5hcnktbGlnaHQtZ3JleSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdWJzLXF1YXRlcm5hcnktbGlnaHQtZ3JleSk7XG59XG5cbi5taWRkbGUge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMzBweCAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS11YnMtcHJpbWFyeS1saWdodC1ncmV5KTtcbn1cblxuLnRvdGFsSW5mbyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnRvdGFsSW5mbyAudG90YWwtY29udGVudCB7XG4gIGNvbG9yOiB2YXIoLS11YnMtc2Vjb25kYXJ5LWdyZXkpO1xufVxuLnRvdGFsSW5mbyBzdHJvbmcge1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcbn1cbi50b3RhbEluZm8gLm1vbmV5LXNhdmVkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiB2YXIoLS11YnMtZWxlY3RyaWMtdmlvbGV0KTtcbn1cblxuLmNob29zZS1wYXltZW50LFxuLmNob29zZS1wYXltZW50LWNob29zZXIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5jaG9vc2UtcGF5bWVudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcbn1cblxuLmNob29zZS1wYXltZW50LWNob29zZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogdmFyKC0tdWJzLXNlY29uZGFyeS1ncmV5KTtcbn1cblxuLnBheW1lbnQtc2VsZWN0IHtcbiAgcGFkZGluZzogOHB4O1xuICB3aWR0aDogMzIzcHg7XG4gIGhlaWdodDogMzZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tdWJzLXF1YXRlcm5hcnktZGFyay1ncmV5KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdWJzLXByaW1hcnktd2hpdGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1xdWludHluYXJ5LWxpZ2h0LWdyZXkpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5vcmRlci1oZWFkZXIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcbn1cblxuLm1pZGRsZS1jb250YWluZXIgLnNob3dUb3RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4ubWlkZGxlLWNvbnRhaW5lciAub3JkZXItaW5mby1jb250YWluZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiA3NSU7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAub3JkZXItaW5mby1jb250YWluZXIgLm9yZGVyLWluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuLm1pZGRsZS1jb250YWluZXIgLm9yZGVyLWluZm8tY29udGFpbmVyIC5vcmRlci1saXN0IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ubWlkZGxlLWNvbnRhaW5lciBzbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uYm90dG9tX2NvbW1lbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS11YnMtcHJpbWFyeS13aGl0ZSk7XG59XG4uYm90dG9tX2NvbW1lbnQgLmJvdHRvbV9jb21tZW50X3BheW1lbnQge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuLmJvdHRvbV9jb21tZW50IC5idG46bnRoLWNoaWxkKDEpIHtcbiAgbWFyZ2luOiAwIDI0cHggMCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xufVxuLmJvdHRvbV9jb21tZW50IC5idG4tbWFpbiB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IG5vbmU7XG59XG4uYm90dG9tX2NvbW1lbnQgLmJ0bi1tYWluOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS13aGl0ZSk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5sYWJlbCxcbi5iYWctbmFtZSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cblxuICAudG90YWxJbmZvIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG4gIC50b3RhbEluZm8gLm1vbmV5LXNhdmVkIHtcbiAgICBmb250LXNpemU6IDAuNjVyZW07XG4gIH1cblxuICAuYm90dG9tX2NvbW1lbnQgLmJvdHRvbV9jb21tZW50X3BheW1lbnQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxuXG4gIGg1IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC5wYXltZW50LXNlbGVjdCB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG5cbiAgLm9yZGVyLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cblxuICBwLFxuYSxcbnRleHRhcmVhLFxuc21hbGwsXG5pbnB1dCxcbmxpLFxuLmNob29zZS1wYXltZW50LFxuLmNob29zZS1wYXltZW50LWNob29zZXIge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmxhYmVsLFxuLmJhZy1uYW1lIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuXG4gIC50b3RhbEluZm8gc3BhbiB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbiAgLnRvdGFsSW5mbyAubW9uZXktc2F2ZWQge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG5cbiAgLmJvdHRvbV9jb21tZW50IC5ib3R0b21fY29tbWVudF9wYXltZW50IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cblxuICBoNSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gIH1cblxuICAub3JkZXItaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuXG4gIC5vcmRlci1saXN0LWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG5cbiAgLnBheW1lbnQtc2VsZWN0IHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cblxuICBwLFxuYSxcbnRleHRhcmVhLFxuc21hbGwsXG5pbnB1dCxcbmxpLFxuLmNob29zZS1wYXltZW50LFxuLmNob29zZS1wYXltZW50LWNob29zZXIge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG5cbiAgLmNlbnRlcmVkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMmVtIDAgMWVtO1xuICAgIHBhZGRpbmc6IDVweCAxLjM1ZW07XG4gIH1cblxuICAubWlkZGxlLWNvbnRhaW5lciAub3JkZXItaW5mby1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ubG9hZC1zcGlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLXNwaW5uZXIgY2lyY2xlIHtcbiAgc3Ryb2tlOiAjZTJlMmUyO1xufVxuXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTJlMmUyO1xufVxuXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgYmFja2dyb3VuZDogI2JmYmZiZjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UBSSubmitOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ubs-submit-order',
          templateUrl: './ubs-submit-order.component.html',
          styleUrls: ['./ubs-submit-order.component.scss']
        }]
      }], function () {
        return [{
          type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
        }, {
          type: _services_ubs_order_form_service__WEBPACK_IMPORTED_MODULE_6__["UBSOrderFormService"]
        }, {
          type: _services_ubs_order_form_service__WEBPACK_IMPORTED_MODULE_6__["UBSOrderFormService"]
        }, {
          type: _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]
        }];
      }, {
        isNotification: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        orderIdFromNotification: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/component/ubs/models/ubs.model.ts":
  /*!********************************************************!*\
    !*** ./src/app/main/component/ubs/models/ubs.model.ts ***!
    \********************************************************/

  /*! exports provided: Order */

  /***/
  function srcAppMainComponentUbsModelsUbsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Order", function () {
      return Order;
    });

    var Order = function Order(additionalOrders, addressId, bags, certificates, orderComment, personalData, pointsToUse, shouldBePaid) {
      _classCallCheck(this, Order);

      this.additionalOrders = additionalOrders;
      this.addressId = addressId;
      this.bags = bags;
      this.certificates = certificates;
      this.orderComment = orderComment;
      this.personalData = personalData;
      this.pointsToUse = pointsToUse;
      this.shouldBePaid = shouldBePaid;
    };
    /***/

  },

  /***/
  "./src/app/main/component/ubs/ubs-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/main/component/ubs/ubs-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: UbsRoutingModule */

  /***/
  function srcAppMainComponentUbsUbsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UbsRoutingModule", function () {
      return UbsRoutingModule;
    });
    /* harmony import */


    var _components_ubs_confirm_page_ubs_confirm_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/ubs-confirm-page/ubs-confirm-page.component */
    "./src/app/main/component/ubs/components/ubs-confirm-page/ubs-confirm-page.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _global_service_route_guards_auth_page_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @global-service/route-guards/auth-page-guard.service */
    "./src/app/main/service/route-guards/auth-page-guard.service.ts");
    /* harmony import */


    var _components_ubs_order_form_ubs_order_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/ubs-order-form/ubs-order-form.component */
    "./src/app/main/component/ubs/components/ubs-order-form/ubs-order-form.component.ts");
    /* harmony import */


    var _ubs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ubs.component */
    "./src/app/main/component/ubs/ubs.component.ts");
    /* harmony import */


    var _components_ubs_main_page_ubs_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/ubs-main-page/ubs-main-page.component */
    "./src/app/main/component/ubs/components/ubs-main-page/ubs-main-page.component.ts");
    /* harmony import */


    var _components_ubs_submit_order_ubs_submit_order_notification_ubs_submit_order_notification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/ubs-submit-order/ubs-submit-order-notification/ubs-submit-order-notification.component */
    "./src/app/main/component/ubs/components/ubs-submit-order/ubs-submit-order-notification/ubs-submit-order-notification.component.ts");

    var ubsRoutes = [{
      path: '',
      component: _ubs_component__WEBPACK_IMPORTED_MODULE_5__["UbsComponent"],
      children: [{
        path: '',
        component: _components_ubs_main_page_ubs_main_page_component__WEBPACK_IMPORTED_MODULE_6__["UbsMainPageComponent"]
      }, {
        path: 'order',
        component: _components_ubs_order_form_ubs_order_form_component__WEBPACK_IMPORTED_MODULE_4__["UBSOrderFormComponent"],
        canActivate: [_global_service_route_guards_auth_page_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthPageGuardService"]]
      }, {
        path: 'confirm',
        component: _components_ubs_confirm_page_ubs_confirm_page_component__WEBPACK_IMPORTED_MODULE_0__["UbsConfirmPageComponent"],
        canActivate: [_global_service_route_guards_auth_page_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthPageGuardService"]]
      }, {
        path: "notification/confirm/:orderId",
        component: _components_ubs_submit_order_ubs_submit_order_notification_ubs_submit_order_notification_component__WEBPACK_IMPORTED_MODULE_7__["UbsSubmitOrderNotificationComponent"],
        canActivate: [_global_service_route_guards_auth_page_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthPageGuardService"]]
      }]
    }];

    var UbsRoutingModule = function UbsRoutingModule() {
      _classCallCheck(this, UbsRoutingModule);
    };

    UbsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UbsRoutingModule
    });
    UbsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function UbsRoutingModule_Factory(t) {
        return new (t || UbsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ubsRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UbsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UbsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ubsRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/component/ubs/ubs.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/main/component/ubs/ubs.component.ts ***!
    \*****************************************************/

  /*! exports provided: UbsComponent */

  /***/
  function srcAppMainComponentUbsUbsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UbsComponent", function () {
      return UbsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @global-service/localstorage/local-storage.service */
    "./src/app/main/service/localstorage/local-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UbsComponent = /*#__PURE__*/function () {
      function UbsComponent(translate, localStorageService) {
        _classCallCheck(this, UbsComponent);

        this.translate = translate;
        this.localStorageService = localStorageService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
      }

      _createClass(UbsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this42 = this;

          this.localStorageService.languageBehaviourSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$)).subscribe(function (lang) {
            _this42.translate.setDefaultLang(lang);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyed$.next(true);
          this.destroyed$.complete();
        }
      }]);

      return UbsComponent;
    }();

    UbsComponent.ɵfac = function UbsComponent_Factory(t) {
      return new (t || UbsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]));
    };

    UbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UbsComponent,
      selectors: [["app-ubs"]],
      decls: 1,
      vars: 0,
      template: function UbsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UbsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ubs',
          templateUrl: './ubs.component.html'
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/component/ubs/ubs.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/main/component/ubs/ubs.module.ts ***!
    \**************************************************/

  /*! exports provided: UbsModule, createTranslateLoader */

  /***/
  function srcAppMainComponentUbsUbsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UbsModule", function () {
      return UbsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var angular_imask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-imask */
    "./node_modules/angular-imask/__ivy_ngcc__/fesm2015/angular-imask.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _environment_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @environment/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ubs_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./ubs-routing.module */
    "./src/app/main/component/ubs/ubs-routing.module.ts");
    /* harmony import */


    var _ubs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./ubs.component */
    "./src/app/main/component/ubs/ubs.component.ts");
    /* harmony import */


    var _components_ubs_order_form_ubs_order_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/ubs-order-form/ubs-order-form.component */
    "./src/app/main/component/ubs/components/ubs-order-form/ubs-order-form.component.ts");
    /* harmony import */


    var _components_ubs_order_details_ubs_order_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/ubs-order-details/ubs-order-details.component */
    "./src/app/main/component/ubs/components/ubs-order-details/ubs-order-details.component.ts");
    /* harmony import */


    var _components_ubs_personal_information_ubs_personal_information_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/ubs-personal-information/ubs-personal-information.component */
    "./src/app/main/component/ubs/components/ubs-personal-information/ubs-personal-information.component.ts");
    /* harmony import */


    var _components_ubs_submit_order_ubs_submit_order_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/ubs-submit-order/ubs-submit-order.component */
    "./src/app/main/component/ubs/components/ubs-submit-order/ubs-submit-order.component.ts");
    /* harmony import */


    var _components_ubs_input_error_ubs_input_error_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/ubs-input-error/ubs-input-error.component */
    "./src/app/main/component/ubs/components/ubs-input-error/ubs-input-error.component.ts");
    /* harmony import */


    var _components_ubs_personal_information_ubs_add_address_pop_up_ubs_add_address_pop_up_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/ubs-personal-information/ubs-add-address-pop-up/ubs-add-address-pop-up.component */
    "./src/app/main/component/ubs/components/ubs-personal-information/ubs-add-address-pop-up/ubs-add-address-pop-up.component.ts");
    /* harmony import */


    var _components_ubs_personal_information_address_address_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/ubs-personal-information/address/address.component */
    "./src/app/main/component/ubs/components/ubs-personal-information/address/address.component.ts");
    /* harmony import */


    var _components_ubs_confirm_page_ubs_confirm_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/ubs-confirm-page/ubs-confirm-page.component */
    "./src/app/main/component/ubs/components/ubs-confirm-page/ubs-confirm-page.component.ts");
    /* harmony import */


    var _shared_shared_main_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @shared/shared-main.module */
    "./src/app/main/component/shared/shared-main.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ngx-google-places-autocomplete */
    "./node_modules/ngx-google-places-autocomplete/__ivy_ngcc__/bundles/ngx-google-places-autocomplete.umd.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_23__);
    /* harmony import */


    var _components_ubs_main_page_ubs_main_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/ubs-main-page/ubs-main-page.component */
    "./src/app/main/component/ubs/components/ubs-main-page/ubs-main-page.component.ts");
    /* harmony import */


    var _components_ubs_order_details_ubs_order_location_popup_ubs_order_location_popup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/ubs-order-details/ubs-order-location-popup/ubs-order-location-popup.component */
    "./src/app/main/component/ubs/components/ubs-order-details/ubs-order-location-popup/ubs-order-location-popup.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _components_ubs_submit_order_ubs_submit_order_notification_ubs_submit_order_notification_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/ubs-submit-order/ubs-submit-order-notification/ubs-submit-order-notification.component */
    "./src/app/main/component/ubs/components/ubs-submit-order/ubs-submit-order-notification/ubs-submit-order-notification.component.ts");

    var UbsModule = function UbsModule() {
      _classCallCheck(this, UbsModule);
    };

    UbsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UbsModule
    });
    UbsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function UbsModule_Factory(t) {
        return new (t || UbsModule)();
      },
      providers: [{
        provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MAT_DIALOG_DEFAULT_OPTIONS"],
        useValue: {
          hasBackdrop: true
        }
      }, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]],
      imports: [[_angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ubs_routing_module__WEBPACK_IMPORTED_MODULE_11__["UbsRoutingModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], angular_imask__WEBPACK_IMPORTED_MODULE_6__["IMaskModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_23__["GooglePlaceModule"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
        apiKey: _environment_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].agmCoreModuleApiKey,
        libraries: ['places']
      }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]]
        },
        isolate: true
      }), _shared_shared_main_module__WEBPACK_IMPORTED_MODULE_21__["SharedMainModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_22__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UbsModule, {
        declarations: [_ubs_component__WEBPACK_IMPORTED_MODULE_12__["UbsComponent"], _components_ubs_order_form_ubs_order_form_component__WEBPACK_IMPORTED_MODULE_13__["UBSOrderFormComponent"], _components_ubs_order_details_ubs_order_details_component__WEBPACK_IMPORTED_MODULE_14__["UBSOrderDetailsComponent"], _components_ubs_personal_information_ubs_personal_information_component__WEBPACK_IMPORTED_MODULE_15__["UBSPersonalInformationComponent"], _components_ubs_submit_order_ubs_submit_order_component__WEBPACK_IMPORTED_MODULE_16__["UBSSubmitOrderComponent"], _components_ubs_input_error_ubs_input_error_component__WEBPACK_IMPORTED_MODULE_17__["UBSInputErrorComponent"], _components_ubs_personal_information_ubs_add_address_pop_up_ubs_add_address_pop_up_component__WEBPACK_IMPORTED_MODULE_18__["UBSAddAddressPopUpComponent"], _components_ubs_personal_information_address_address_component__WEBPACK_IMPORTED_MODULE_19__["AddressComponent"], _components_ubs_confirm_page_ubs_confirm_page_component__WEBPACK_IMPORTED_MODULE_20__["UbsConfirmPageComponent"], _components_ubs_main_page_ubs_main_page_component__WEBPACK_IMPORTED_MODULE_24__["UbsMainPageComponent"], _components_ubs_order_details_ubs_order_location_popup_ubs_order_location_popup_component__WEBPACK_IMPORTED_MODULE_25__["UbsOrderLocationPopupComponent"], _components_ubs_submit_order_ubs_submit_order_notification_ubs_submit_order_notification_component__WEBPACK_IMPORTED_MODULE_29__["UbsSubmitOrderNotificationComponent"]],
        imports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ubs_routing_module__WEBPACK_IMPORTED_MODULE_11__["UbsRoutingModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], angular_imask__WEBPACK_IMPORTED_MODULE_6__["IMaskModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_23__["GooglePlaceModule"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"], _shared_shared_main_module__WEBPACK_IMPORTED_MODULE_21__["SharedMainModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_22__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UbsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_ubs_component__WEBPACK_IMPORTED_MODULE_12__["UbsComponent"], _components_ubs_order_form_ubs_order_form_component__WEBPACK_IMPORTED_MODULE_13__["UBSOrderFormComponent"], _components_ubs_order_details_ubs_order_details_component__WEBPACK_IMPORTED_MODULE_14__["UBSOrderDetailsComponent"], _components_ubs_personal_information_ubs_personal_information_component__WEBPACK_IMPORTED_MODULE_15__["UBSPersonalInformationComponent"], _components_ubs_submit_order_ubs_submit_order_component__WEBPACK_IMPORTED_MODULE_16__["UBSSubmitOrderComponent"], _components_ubs_input_error_ubs_input_error_component__WEBPACK_IMPORTED_MODULE_17__["UBSInputErrorComponent"], _components_ubs_personal_information_ubs_add_address_pop_up_ubs_add_address_pop_up_component__WEBPACK_IMPORTED_MODULE_18__["UBSAddAddressPopUpComponent"], _components_ubs_personal_information_address_address_component__WEBPACK_IMPORTED_MODULE_19__["AddressComponent"], _components_ubs_confirm_page_ubs_confirm_page_component__WEBPACK_IMPORTED_MODULE_20__["UbsConfirmPageComponent"], _components_ubs_main_page_ubs_main_page_component__WEBPACK_IMPORTED_MODULE_24__["UbsMainPageComponent"], _components_ubs_order_details_ubs_order_location_popup_ubs_order_location_popup_component__WEBPACK_IMPORTED_MODULE_25__["UbsOrderLocationPopupComponent"], _components_ubs_submit_order_ubs_submit_order_notification_ubs_submit_order_notification_component__WEBPACK_IMPORTED_MODULE_29__["UbsSubmitOrderNotificationComponent"]],
          imports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ubs_routing_module__WEBPACK_IMPORTED_MODULE_11__["UbsRoutingModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], angular_imask__WEBPACK_IMPORTED_MODULE_6__["IMaskModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_23__["GooglePlaceModule"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
            apiKey: _environment_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].agmCoreModuleApiKey,
            libraries: ['places']
          }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
              useFactory: createTranslateLoader,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]]
            },
            isolate: true
          }), _shared_shared_main_module__WEBPACK_IMPORTED_MODULE_21__["SharedMainModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_22__["SharedModule"]],
          entryComponents: [_components_ubs_personal_information_ubs_add_address_pop_up_ubs_add_address_pop_up_component__WEBPACK_IMPORTED_MODULE_18__["UBSAddAddressPopUpComponent"], _components_ubs_order_details_ubs_order_location_popup_ubs_order_location_popup_component__WEBPACK_IMPORTED_MODULE_25__["UbsOrderLocationPopupComponent"]],
          exports: [],
          providers: [{
            provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MAT_DIALOG_DEFAULT_OPTIONS"],
            useValue: {
              hasBackdrop: true
            }
          }, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]]
        }]
      }], null, null);
    })();

    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/ubs/', '.json');
    }
    /***/

  },

  /***/
  "./src/app/main/image-pathes/ubs-main-page-images.ts":
  /*!***********************************************************!*\
    !*** ./src/app/main/image-pathes/ubs-main-page-images.ts ***!
    \***********************************************************/

  /*! exports provided: ubsMainPageImages */

  /***/
  function srcAppMainImagePathesUbsMainPageImagesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ubsMainPageImages", function () {
      return ubsMainPageImages;
    });

    var ubsMainPageImages = {
      ubsArmoredTrack: 'assets/img/ubs/armored_truck.svg',
      ubsGreenGarbage: 'assets/img/ubs/green_garbage_bag.svg',
      ubsBlackGarbage: 'assets/img/ubs/black_garbage_bag.svg',
      ubsRectangle: 'assets/img/ubs/second_rectangle.png',
      ubsPolygon: 'assets/img/ubs/polygon.svg',
      ubsSignboard: 'assets/img/ubs/ubs_signboard.svg'
    };
    /***/
  }
}]);
//# sourceMappingURL=main-component-ubs-ubs-module-es5.js.map