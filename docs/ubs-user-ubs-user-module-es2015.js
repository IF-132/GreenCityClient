(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ubs-user-ubs-user-module"],{

/***/ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/accordion.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/accordion.js ***!
  \**********************************************************************/
/*! exports provided: CdkAccordion, CdkAccordionItem, CdkAccordionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordion", function() { return CdkAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordionItem", function() { return CdkAccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordionModule", function() { return CdkAccordionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/accordion/accordion.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to generate unique ID for each accordion.
 * @type {?}
 */


let nextId = 0;
/**
 * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
 */
class CdkAccordion {
    constructor() {
        /**
         * Emits when the state of the accordion changes
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Stream that emits true/false when openAll/closeAll is triggered.
         */
        this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * A readonly id value to use for unique selection coordination.
         */
        this.id = `cdk-accordion-${nextId++}`;
        this._multi = false;
    }
    /**
     * Whether the accordion should allow multiple expanded accordion items simultaneously.
     * @return {?}
     */
    get multi() { return this._multi; }
    /**
     * @param {?} multi
     * @return {?}
     */
    set multi(multi) { this._multi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(multi); }
    /**
     * Opens all enabled accordion items in an accordion where multi is enabled.
     * @return {?}
     */
    openAll() {
        this._openCloseAll(true);
    }
    /**
     * Closes all enabled accordion items in an accordion where multi is enabled.
     * @return {?}
     */
    closeAll() {
        this._openCloseAll(false);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this._stateChanges.next(changes);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._stateChanges.complete();
    }
    /**
     * @private
     * @param {?} expanded
     * @return {?}
     */
    _openCloseAll(expanded) {
        if (this.multi) {
            this._openCloseAllActions.next(expanded);
        }
    }
}
CdkAccordion.ɵfac = function CdkAccordion_Factory(t) { return new (t || CdkAccordion)(); };
CdkAccordion.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkAccordion, selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]], inputs: { multi: "multi" }, exportAs: ["cdkAccordion"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
CdkAccordion.propDecorators = {
    multi: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordion, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'cdk-accordion, [cdkAccordion]',
                exportAs: 'cdkAccordion'
            }]
    }], function () { return []; }, { multi: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/accordion/accordion-item.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to generate unique ID for each accordion item.
 * @type {?}
 */
let nextId$1 = 0;
const ɵ0 = undefined;
/**
 * An basic directive expected to be extended and decorated as a component.  Sets up all
 * events and attributes needed to be managed by a CdkAccordion parent.
 */
class CdkAccordionItem {
    /**
     * @param {?} accordion
     * @param {?} _changeDetectorRef
     * @param {?} _expansionDispatcher
     */
    constructor(accordion, _changeDetectorRef, _expansionDispatcher) {
        this.accordion = accordion;
        this._changeDetectorRef = _changeDetectorRef;
        this._expansionDispatcher = _expansionDispatcher;
        /**
         * Subscription to openAll/closeAll events.
         */
        this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        /**
         * Event emitted every time the AccordionItem is closed.
         */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted every time the AccordionItem is opened.
         */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the AccordionItem is destroyed.
         */
        this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits whenever the expanded state of the accordion changes.
         * Primarily used to facilitate two-way binding.
         * \@docs-private
         */
        this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * The unique AccordionItem id.
         */
        this.id = `cdk-accordion-child-${nextId$1++}`;
        this._expanded = false;
        this._disabled = false;
        /**
         * Unregister function for _expansionDispatcher.
         */
        this._removeUniqueSelectionListener = (/**
         * @return {?}
         */
        () => { });
        this._removeUniqueSelectionListener =
            _expansionDispatcher.listen((/**
             * @param {?} id
             * @param {?} accordionId
             * @return {?}
             */
            (id, accordionId) => {
                if (this.accordion && !this.accordion.multi &&
                    this.accordion.id === accordionId && this.id !== id) {
                    this.expanded = false;
                }
            }));
        // When an accordion item is hosted in an accordion, subscribe to open/close events.
        if (this.accordion) {
            this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
        }
    }
    /**
     * Whether the AccordionItem is expanded.
     * @return {?}
     */
    get expanded() { return this._expanded; }
    /**
     * @param {?} expanded
     * @return {?}
     */
    set expanded(expanded) {
        expanded = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(expanded);
        // Only emit events and update the internal value if the value changes.
        if (this._expanded !== expanded) {
            this._expanded = expanded;
            this.expandedChange.emit(expanded);
            if (expanded) {
                this.opened.emit();
                /**
                 * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
                 * the name value is the id of the accordion.
                 * @type {?}
                 */
                const accordionId = this.accordion ? this.accordion.id : this.id;
                this._expansionDispatcher.notify(this.id, accordionId);
            }
            else {
                this.closed.emit();
            }
            // Ensures that the animation will run when the value is set outside of an `@Input`.
            // This includes cases like the open, close and toggle methods.
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Whether the AccordionItem is disabled.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} disabled
     * @return {?}
     */
    set disabled(disabled) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(disabled); }
    /**
     * Emits an event for the accordion item being destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        this.opened.complete();
        this.closed.complete();
        this.destroyed.emit();
        this.destroyed.complete();
        this._removeUniqueSelectionListener();
        this._openCloseAllSubscription.unsubscribe();
    }
    /**
     * Toggles the expanded state of the accordion item.
     * @return {?}
     */
    toggle() {
        if (!this.disabled) {
            this.expanded = !this.expanded;
        }
    }
    /**
     * Sets the expanded state of the accordion item to false.
     * @return {?}
     */
    close() {
        if (!this.disabled) {
            this.expanded = false;
        }
    }
    /**
     * Sets the expanded state of the accordion item to true.
     * @return {?}
     */
    open() {
        if (!this.disabled) {
            this.expanded = true;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _subscribeToOpenCloseAllActions() {
        return this.accordion._openCloseAllActions.subscribe((/**
         * @param {?} expanded
         * @return {?}
         */
        expanded => {
            // Only change expanded state if item is enabled
            if (!this.disabled) {
                this.expanded = expanded;
            }
        }));
    }
}
CdkAccordionItem.ɵfac = function CdkAccordionItem_Factory(t) { return new (t || CdkAccordionItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkAccordion, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"])); };
CdkAccordionItem.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkAccordionItem, selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]], inputs: { expanded: "expanded", disabled: "disabled" }, outputs: { closed: "closed", opened: "opened", destroyed: "destroyed", expandedChange: "expandedChange" }, exportAs: ["cdkAccordionItem"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            // Provide CdkAccordion as undefined to prevent nested accordion items from registering
            // to the same accordion.
            { provide: CdkAccordion, useValue: ɵ0 },
        ])] });
/** @nocollapse */
CdkAccordionItem.ctorParameters = () => [
    { type: CdkAccordion, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"] }
];
CdkAccordionItem.propDecorators = {
    closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    destroyed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    expandedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'cdk-accordion-item, [cdkAccordionItem]',
                exportAs: 'cdkAccordionItem',
                providers: [
                    // Provide CdkAccordion as undefined to prevent nested accordion items from registering
                    // to the same accordion.
                    { provide: CdkAccordion, useValue: ɵ0 },
                ]
            }]
    }], function () { return [{ type: CdkAccordion, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"] }]; }, { closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], destroyed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], expandedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/accordion/accordion-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CdkAccordionModule {
}
CdkAccordionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CdkAccordionModule });
CdkAccordionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CdkAccordionModule_Factory(t) { return new (t || CdkAccordionModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CdkAccordionModule, { declarations: [CdkAccordion,
        CdkAccordionItem], exports: [CdkAccordion,
        CdkAccordionItem] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [CdkAccordion, CdkAccordionItem],
                declarations: [CdkAccordion, CdkAccordionItem]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/accordion/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js ***!
  \***************************************************************************/
/*! exports provided: EXPANSION_PANEL_ANIMATION_TIMING, MAT_ACCORDION, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelContent, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle, matExpansionAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPANSION_PANEL_ANIMATION_TIMING", function() { return EXPANSION_PANEL_ANIMATION_TIMING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ACCORDION", function() { return MAT_ACCORDION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_EXPANSION_PANEL_DEFAULT_OPTIONS", function() { return MAT_EXPANSION_PANEL_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAccordion", function() { return MatAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionModule", function() { return MatExpansionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanel", function() { return MatExpansionPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelActionRow", function() { return MatExpansionPanelActionRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelContent", function() { return MatExpansionPanelContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelDescription", function() { return MatExpansionPanelDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelHeader", function() { return MatExpansionPanelHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelTitle", function() { return MatExpansionPanelTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matExpansionAnimations", function() { return matExpansionAnimations; });
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/accordion.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");













/**
 * @fileoverview added by tsickle
 * Generated from: src/material/expansion/accordion-base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Base interface for a `MatAccordion`.
 * \@docs-private
 * @record
 */






const _c0 = ["body"];
function MatExpansionPanel_ng_template_5_Template(rf, ctx) { }
const _c1 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
const _c2 = ["mat-expansion-panel-header", "*", "mat-action-row"];
const _c3 = function (a0, a1) { return { collapsedHeight: a0, expandedHeight: a1 }; };
const _c4 = function (a0, a1) { return { value: a0, params: a1 }; };
function MatExpansionPanelHeader_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@indicatorRotate", ctx_r0._getExpandedState());
} }
const _c5 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
const _c6 = ["mat-panel-title", "mat-panel-description", "*"];
function MatAccordionBase() { }
if (false) {}
/**
 * Token used to provide a `MatAccordion` to `MatExpansionPanel`.
 * Used primarily to avoid circular imports between `MatAccordion` and `MatExpansionPanel`.
 * @type {?}
 */
const MAT_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_ACCORDION');

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/expansion/expansion-animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time and timing curve for expansion panel animations.
 * @type {?}
 */
const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
/**
 * Animations used by the Material expansion panel.
 *
 * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
 * causes the animation state of moved components to become `void` upon exit, and not update again
 * upon reentry into the DOM.  This can lead a to situation for the expansion panel where the state
 * of the panel is `expanded` or `collapsed` but the animation state is `void`.
 *
 * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
 * are defined to have the same styles. Since angular animates from the current styles to the
 * destination state's style definition, in situations where we are moving from `void`'s styles to
 * `collapsed` this acts a noop since no style values change.
 *
 * In the case where angular's animation state is out of sync with the expansion panel's state, the
 * expansion panel being `expanded` and angular animations being `void`, the animation from the
 * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
 * occur as expected.
 *
 * Angular Bug: https://github.com/angular/angular/issues/18847
 *
 * \@docs-private
 * @type {?}
 */
const matExpansionAnimations = {
    /**
     * Animation that rotates the indicator arrow.
     */
    indicatorRotate: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('indicatorRotate', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'rotate(0deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'rotate(180deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING)),
    ]),
    /**
     * Animation that expands and collapses the panel header height.
     */
    expansionHeaderHeight: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('expansionHeight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
            height: '{{collapsedHeight}}',
        }), {
            params: { collapsedHeight: '48px' },
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
            height: '{{expandedHeight}}'
        }), {
            params: { expandedHeight: '64px' }
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["query"])('@indicatorRotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animateChild"])(), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING),
        ])),
    ]),
    /**
     * Animation that expands and collapses the panel content.
     */
    bodyExpansion: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('bodyExpansion', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ height: '0px', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ height: '*', visibility: 'visible' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING)),
    ])
};

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/expansion/expansion-panel-content.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Expansion panel content that will be rendered lazily
 * after the panel is opened for the first time.
 */
class MatExpansionPanelContent {
    /**
     * @param {?} _template
     */
    constructor(_template) {
        this._template = _template;
    }
}
MatExpansionPanelContent.ɵfac = function MatExpansionPanelContent_Factory(t) { return new (t || MatExpansionPanelContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
MatExpansionPanelContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatExpansionPanelContent, selectors: [["ng-template", "matExpansionPanelContent", ""]] });
/** @nocollapse */
MatExpansionPanelContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'ng-template[matExpansionPanelContent]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/expansion/expansion-panel.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter for generating unique element ids.
 * @type {?}
 */
let uniqueId = 0;
/**
 * Object that can be used to override the default options
 * for all of the expansion panels in a module.
 * @record
 */
function MatExpansionPanelDefaultOptions() { }
if (false) {}
/**
 * Injection token that can be used to configure the defalt
 * options for the expansion panel component.
 * @type {?}
 */
const MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');
const ɵ0 = undefined;
/**
 * `<mat-expansion-panel>`
 *
 * This component can be used as a single element to show expandable content, or as one of
 * multiple children of an element with the MatAccordion directive attached.
 */
class MatExpansionPanel extends _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionItem"] {
    /**
     * @param {?} accordion
     * @param {?} _changeDetectorRef
     * @param {?} _uniqueSelectionDispatcher
     * @param {?} _viewContainerRef
     * @param {?} _document
     * @param {?} _animationMode
     * @param {?=} defaultOptions
     */
    constructor(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
        super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
        this._viewContainerRef = _viewContainerRef;
        this._animationMode = _animationMode;
        this._hideToggle = false;
        /**
         * An event emitted after the body's expansion animation happens.
         */
        this.afterExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * An event emitted after the body's collapse animation happens.
         */
        this.afterCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Stream that emits for changes in `\@Input` properties.
         */
        this._inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        /**
         * ID for the associated header element. Used for a11y labelling.
         */
        this._headerId = `mat-expansion-panel-header-${uniqueId++}`;
        /**
         * Stream of body animation done events.
         */
        this._bodyAnimationDone = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.accordion = accordion;
        this._document = _document;
        // We need a Subject with distinctUntilChanged, because the `done` event
        // fires twice on some browsers. See https://github.com/angular/angular/issues/24084
        this._bodyAnimationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])((/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        (x, y) => {
            return x.fromState === y.fromState && x.toState === y.toState;
        }))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event.fromState !== 'void') {
                if (event.toState === 'expanded') {
                    this.afterExpand.emit();
                }
                else if (event.toState === 'collapsed') {
                    this.afterCollapse.emit();
                }
            }
        }));
        if (defaultOptions) {
            this.hideToggle = defaultOptions.hideToggle;
        }
    }
    /**
     * Whether the toggle indicator should be hidden.
     * @return {?}
     */
    get hideToggle() {
        return this._hideToggle || (this.accordion && this.accordion.hideToggle);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hideToggle(value) {
        this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
    }
    /**
     * The position of the expansion indicator.
     * @return {?}
     */
    get togglePosition() {
        return this._togglePosition || (this.accordion && this.accordion.togglePosition);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set togglePosition(value) {
        this._togglePosition = value;
    }
    /**
     * Determines whether the expansion panel should have spacing between it and its siblings.
     * @return {?}
     */
    _hasSpacing() {
        if (this.accordion) {
            return this.expanded && this.accordion.displayMode === 'default';
        }
        return false;
    }
    /**
     * Gets the expanded state string.
     * @return {?}
     */
    _getExpandedState() {
        return this.expanded ? 'expanded' : 'collapsed';
    }
    /**
     * Toggles the expanded state of the expansion panel.
     * @return {?}
     */
    toggle() {
        this.expanded = !this.expanded;
    }
    /**
     * Sets the expanded state of the expansion panel to false.
     * @return {?}
     */
    close() {
        this.expanded = false;
    }
    /**
     * Sets the expanded state of the expansion panel to true.
     * @return {?}
     */
    open() {
        this.expanded = true;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this._lazyContent) {
            // Render the content as soon as the panel becomes open.
            this.opened.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])((/** @type {?} */ (null))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((/**
             * @return {?}
             */
            () => this.expanded && !this._portal)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe((/**
             * @return {?}
             */
            () => {
                this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](this._lazyContent._template, this._viewContainerRef);
            }));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this._inputChanges.next(changes);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        this._bodyAnimationDone.complete();
        this._inputChanges.complete();
    }
    /**
     * Checks whether the expansion panel's content contains the currently-focused element.
     * @return {?}
     */
    _containsFocus() {
        if (this._body) {
            /** @type {?} */
            const focusedElement = this._document.activeElement;
            /** @type {?} */
            const bodyElement = this._body.nativeElement;
            return focusedElement === bodyElement || bodyElement.contains(focusedElement);
        }
        return false;
    }
}
MatExpansionPanel.ɵfac = function MatExpansionPanel_Factory(t) { return new (t || MatExpansionPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["UniqueSelectionDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8)); };
MatExpansionPanel.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MatExpansionPanel, selectors: [["mat-expansion-panel"]], contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelContent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
    } }, viewQuery: function MatExpansionPanel_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._body = _t.first);
    } }, hostAttrs: [1, "mat-expansion-panel"], hostVars: 6, hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-expanded", ctx.expanded)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-expansion-panel-spacing", ctx._hasSpacing());
    } }, inputs: { disabled: "disabled", expanded: "expanded", hideToggle: "hideToggle", togglePosition: "togglePosition" }, outputs: { opened: "opened", closed: "closed", expandedChange: "expandedChange", afterExpand: "afterExpand", afterCollapse: "afterCollapse" }, exportAs: ["matExpansionPanel"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            // Provide MatAccordion as undefined to prevent nested expansion panels from registering
            // to the same accordion.
            { provide: MAT_ACCORDION, useValue: ɵ0 },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 7, vars: 4, consts: [["role", "region", 1, "mat-expansion-panel-content", 3, "id"], ["body", ""], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]], template: function MatExpansionPanel_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@bodyExpansion.done", function MatExpansionPanel_Template_div_animation_bodyExpansion_done_1_listener($event) { return ctx._bodyAnimationDone.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MatExpansionPanel_ng_template_5_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](6, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@bodyExpansion", ctx._getExpandedState())("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-labelledby", ctx._headerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkPortalOutlet", ctx._portal);
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]], styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"], encapsulation: 2, data: { animation: [matExpansionAnimations.bodyExpansion] }, changeDetection: 0 });
/** @nocollapse */
MatExpansionPanel.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_ACCORDION,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["UniqueSelectionDispatcher"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
MatExpansionPanel.propDecorators = {
    hideToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    togglePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    afterExpand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    afterCollapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    _lazyContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [MatExpansionPanelContent,] }],
    _body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['body',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'mat-expansion-panel',
                exportAs: 'matExpansionPanel',
                template: "<ng-content select=\"mat-expansion-panel-header\"></ng-content>\n<div class=\"mat-expansion-panel-content\"\n     role=\"region\"\n     [@bodyExpansion]=\"_getExpandedState()\"\n     (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\"\n     [attr.aria-labelledby]=\"_headerId\"\n     [id]=\"id\"\n     #body>\n  <div class=\"mat-expansion-panel-body\">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n  </div>\n  <ng-content select=\"mat-action-row\"></ng-content>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                inputs: ['disabled', 'expanded'],
                outputs: ['opened', 'closed', 'expandedChange'],
                animations: [matExpansionAnimations.bodyExpansion],
                providers: [
                    // Provide MatAccordion as undefined to prevent nested expansion panels from registering
                    // to the same accordion.
                    { provide: MAT_ACCORDION, useValue: ɵ0 },
                ],
                host: {
                    'class': 'mat-expansion-panel',
                    '[class.mat-expanded]': 'expanded',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                    '[class.mat-expansion-panel-spacing]': '_hasSpacing()'
                },
                styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_ACCORDION]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["UniqueSelectionDispatcher"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { afterExpand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], afterCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], hideToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], togglePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], _lazyContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [MatExpansionPanelContent]
        }], _body: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['body']
        }] }); })();
if (false) {}
class MatExpansionPanelActionRow {
}
MatExpansionPanelActionRow.ɵfac = function MatExpansionPanelActionRow_Factory(t) { return new (t || MatExpansionPanelActionRow)(); };
MatExpansionPanelActionRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatExpansionPanelActionRow, selectors: [["mat-action-row"]], hostAttrs: [1, "mat-action-row"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelActionRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'mat-action-row',
                host: {
                    class: 'mat-action-row'
                }
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/expansion/expansion-panel-header.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * `<mat-expansion-panel-header>`
 *
 * This component corresponds to the header element of an `<mat-expansion-panel>`.
 */
class MatExpansionPanelHeader {
    /**
     * @param {?} panel
     * @param {?} _element
     * @param {?} _focusMonitor
     * @param {?} _changeDetectorRef
     * @param {?=} defaultOptions
     */
    constructor(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions) {
        this.panel = panel;
        this._element = _element;
        this._focusMonitor = _focusMonitor;
        this._changeDetectorRef = _changeDetectorRef;
        this._parentChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
        /**
         * Whether Angular animations in the panel header should be disabled.
         */
        this._animationsDisabled = true;
        /** @type {?} */
        const accordionHideToggleChange = panel.accordion ?
            panel.accordion._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((/**
             * @param {?} changes
             * @return {?}
             */
            changes => !!(changes['hideToggle'] || changes['togglePosition'])))) :
            rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"];
        // Since the toggle state depends on an @Input on the panel, we
        // need to subscribe and trigger change detection manually.
        this._parentChangeSubscription =
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((/**
             * @param {?} changes
             * @return {?}
             */
            changes => {
                return !!(changes['hideToggle'] ||
                    changes['disabled'] ||
                    changes['togglePosition']);
            }))))
                .subscribe((/**
             * @return {?}
             */
            () => this._changeDetectorRef.markForCheck()));
        // Avoids focus being lost if the panel contained the focused element and was closed.
        panel.closed
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((/**
         * @return {?}
         */
        () => panel._containsFocus())))
            .subscribe((/**
         * @return {?}
         */
        () => _focusMonitor.focusVia(_element, 'program')));
        _focusMonitor.monitor(_element).subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        origin => {
            if (origin && panel.accordion) {
                panel.accordion._handleHeaderFocus(this);
            }
        }));
        if (defaultOptions) {
            this.expandedHeight = defaultOptions.expandedHeight;
            this.collapsedHeight = defaultOptions.collapsedHeight;
        }
    }
    /**
     * @return {?}
     */
    _animationStarted() {
        // Currently the `expansionHeight` animation has a `void => collapsed` transition which is
        // there to work around a bug in Angular (see #13088), however this introduces a different
        // issue. The new transition will cause the header to animate in on init (see #16067), if the
        // consumer has set a header height that is different from the default one. We work around it
        // by disabling animations on the header and re-enabling them after the first animation has run.
        // Note that Angular dispatches animation events even if animations are disabled. Ideally this
        // wouldn't be necessary if we remove the `void => collapsed` transition, but we have to wait
        // for https://github.com/angular/angular/issues/18847 to be resolved.
        this._animationsDisabled = false;
    }
    /**
     * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
     * \@docs-private
     * @return {?}
     */
    get disabled() {
        return this.panel.disabled;
    }
    /**
     * Toggles the expanded state of the panel.
     * @return {?}
     */
    _toggle() {
        if (!this.disabled) {
            this.panel.toggle();
        }
    }
    /**
     * Gets whether the panel is expanded.
     * @return {?}
     */
    _isExpanded() {
        return this.panel.expanded;
    }
    /**
     * Gets the expanded state string of the panel.
     * @return {?}
     */
    _getExpandedState() {
        return this.panel._getExpandedState();
    }
    /**
     * Gets the panel id.
     * @return {?}
     */
    _getPanelId() {
        return this.panel.id;
    }
    /**
     * Gets the toggle position for the header.
     * @return {?}
     */
    _getTogglePosition() {
        return this.panel.togglePosition;
    }
    /**
     * Gets whether the expand indicator should be shown.
     * @return {?}
     */
    _showToggle() {
        return !this.panel.hideToggle && !this.panel.disabled;
    }
    /**
     * Handle keydown event calling to toggle() if appropriate.
     * @param {?} event
     * @return {?}
     */
    _keydown(event) {
        switch (event.keyCode) {
            // Toggle for space and enter keys.
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["SPACE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"]:
                if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event)) {
                    event.preventDefault();
                    this._toggle();
                }
                break;
            default:
                if (this.panel.accordion) {
                    this.panel.accordion._handleHeaderKeydown(event);
                }
                return;
        }
    }
    /**
     * Focuses the panel header. Implemented as a part of `FocusableOption`.
     * \@docs-private
     * @param {?=} origin Origin of the action that triggered the focus.
     * @param {?=} options
     * @return {?}
     */
    focus(origin = 'program', options) {
        this._focusMonitor.focusVia(this._element, origin, options);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._parentChangeSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._element);
    }
}
MatExpansionPanelHeader.ɵfac = function MatExpansionPanelHeader_Factory(t) { return new (t || MatExpansionPanelHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatExpansionPanel, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8)); };
MatExpansionPanelHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MatExpansionPanelHeader, selectors: [["mat-expansion-panel-header"]], hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"], hostVars: 19, hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcomponentHostSyntheticListener"]("@expansionHeight.start", function MatExpansionPanelHeader_animation_expansionHeight_start_HostBindingHandler() { return ctx._animationStarted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatExpansionPanelHeader_click_HostBindingHandler() { return ctx._toggle(); })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) { return ctx._keydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", ctx.panel._headerId)("tabindex", ctx.disabled ? 0 - 1 : 0)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵupdateSyntheticHostBinding"]("@.disabled", ctx._animationsDisabled)("@expansionHeight", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](16, _c4, ctx._getExpandedState(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](13, _c3, ctx.collapsedHeight, ctx.expandedHeight)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before");
    } }, inputs: { expandedHeight: "expandedHeight", collapsedHeight: "collapsedHeight" }, ngContentSelectors: _c6, decls: 5, vars: 1, consts: [[1, "mat-content"], ["class", "mat-expansion-indicator", 4, "ngIf"], [1, "mat-expansion-indicator"]], template: function MatExpansionPanelHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MatExpansionPanelHeader_span_4_Template, 1, 1, "span", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._showToggle());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;position:relative}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}\n"], encapsulation: 2, data: { animation: [
            matExpansionAnimations.indicatorRotate,
            matExpansionAnimations.expansionHeaderHeight
        ] }, changeDetection: 0 });
/** @nocollapse */
MatExpansionPanelHeader.ctorParameters = () => [
    { type: MatExpansionPanel, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
MatExpansionPanelHeader.propDecorators = {
    expandedHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    collapsedHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'mat-expansion-panel-header',
                template: "<span class=\"mat-content\">\n  <ng-content select=\"mat-panel-title\"></ng-content>\n  <ng-content select=\"mat-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<span [@indicatorRotate]=\"_getExpandedState()\" *ngIf=\"_showToggle()\"\n      class=\"mat-expansion-indicator\"></span>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                animations: [
                    matExpansionAnimations.indicatorRotate,
                    matExpansionAnimations.expansionHeaderHeight
                ],
                host: {
                    'class': 'mat-expansion-panel-header mat-focus-indicator',
                    'role': 'button',
                    '[attr.id]': 'panel._headerId',
                    '[attr.tabindex]': 'disabled ? -1 : 0',
                    '[attr.aria-controls]': '_getPanelId()',
                    '[attr.aria-expanded]': '_isExpanded()',
                    '[attr.aria-disabled]': 'panel.disabled',
                    '[class.mat-expanded]': '_isExpanded()',
                    '[class.mat-expansion-toggle-indicator-after]': `_getTogglePosition() === 'after'`,
                    '[class.mat-expansion-toggle-indicator-before]': `_getTogglePosition() === 'before'`,
                    '(click)': '_toggle()',
                    '(keydown)': '_keydown($event)',
                    '[@.disabled]': '_animationsDisabled',
                    '(@expansionHeight.start)': '_animationStarted()',
                    '[@expansionHeight]': `{
        value: _getExpandedState(),
        params: {
          collapsedHeight: collapsedHeight,
          expandedHeight: expandedHeight
        }
    }`
                },
                styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;position:relative}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}\n"]
            }]
    }], function () { return [{ type: MatExpansionPanel, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { expandedHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], collapsedHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
if (false) {}
/**
 * `<mat-panel-description>`
 *
 * This directive is to be used inside of the MatExpansionPanelHeader component.
 */
class MatExpansionPanelDescription {
}
MatExpansionPanelDescription.ɵfac = function MatExpansionPanelDescription_Factory(t) { return new (t || MatExpansionPanelDescription)(); };
MatExpansionPanelDescription.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatExpansionPanelDescription, selectors: [["mat-panel-description"]], hostAttrs: [1, "mat-expansion-panel-header-description"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelDescription, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'mat-panel-description',
                host: {
                    class: 'mat-expansion-panel-header-description'
                }
            }]
    }], null, null); })();
/**
 * `<mat-panel-title>`
 *
 * This directive is to be used inside of the MatExpansionPanelHeader component.
 */
class MatExpansionPanelTitle {
}
MatExpansionPanelTitle.ɵfac = function MatExpansionPanelTitle_Factory(t) { return new (t || MatExpansionPanelTitle)(); };
MatExpansionPanelTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatExpansionPanelTitle, selectors: [["mat-panel-title"]], hostAttrs: [1, "mat-expansion-panel-header-title"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'mat-panel-title',
                host: {
                    class: 'mat-expansion-panel-header-title'
                }
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/expansion/accordion.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive for a Material Design Accordion.
 */
class MatAccordion extends _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordion"] {
    constructor() {
        super(...arguments);
        /**
         * Headers belonging to this accordion.
         */
        this._ownHeaders = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
        this._hideToggle = false;
        /**
         * Display mode used for all expansion panels in the accordion. Currently two display
         * modes exist:
         *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
         *     panel at a different elevation from the rest of the accordion.
         *  flat - no spacing is placed around expanded panels, showing all panels at the same
         *     elevation.
         */
        this.displayMode = 'default';
        /**
         * The position of the expansion indicator.
         */
        this.togglePosition = 'after';
    }
    /**
     * Whether the expansion indicator should be hidden.
     * @return {?}
     */
    get hideToggle() { return this._hideToggle; }
    /**
     * @param {?} show
     * @return {?}
     */
    set hideToggle(show) { this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(show); }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._headers.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._headers))
            .subscribe((/**
         * @param {?} headers
         * @return {?}
         */
        (headers) => {
            this._ownHeaders.reset(headers.filter((/**
             * @param {?} header
             * @return {?}
             */
            header => header.panel.accordion === this)));
            this._ownHeaders.notifyOnChanges();
        }));
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusKeyManager"](this._ownHeaders).withWrap();
    }
    /**
     * Handles keyboard events coming in from the panel headers.
     * @param {?} event
     * @return {?}
     */
    _handleHeaderKeydown(event) {
        const { keyCode } = event;
        /** @type {?} */
        const manager = this._keyManager;
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"]) {
            if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event)) {
                manager.setFirstItemActive();
                event.preventDefault();
            }
        }
        else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["END"]) {
            if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event)) {
                manager.setLastItemActive();
                event.preventDefault();
            }
        }
        else {
            this._keyManager.onKeydown(event);
        }
    }
    /**
     * @param {?} header
     * @return {?}
     */
    _handleHeaderFocus(header) {
        this._keyManager.updateActiveItem(header);
    }
}
MatAccordion.ɵfac = function MatAccordion_Factory(t) { return ɵMatAccordion_BaseFactory(t || MatAccordion); };
MatAccordion.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatAccordion, selectors: [["mat-accordion"]], contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelHeader, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._headers = _t);
    } }, hostAttrs: [1, "mat-accordion"], hostVars: 2, hostBindings: function MatAccordion_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-accordion-multi", ctx.multi);
    } }, inputs: { multi: "multi", displayMode: "displayMode", togglePosition: "togglePosition", hideToggle: "hideToggle" }, exportAs: ["matAccordion"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
                provide: MAT_ACCORDION,
                useExisting: MatAccordion
            }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
MatAccordion.propDecorators = {
    _headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [MatExpansionPanelHeader, { descendants: true },] }],
    hideToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    displayMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    togglePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
const ɵMatAccordion_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatAccordion);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatAccordion, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'mat-accordion',
                exportAs: 'matAccordion',
                inputs: ['multi'],
                providers: [{
                        provide: MAT_ACCORDION,
                        useExisting: MatAccordion
                    }],
                host: {
                    class: 'mat-accordion',
                    // Class binding which is only used by the test harness as there is no other
                    // way for the harness to detect if multiple panel support is enabled.
                    '[class.mat-accordion-multi]': 'this.multi'
                }
            }]
    }], null, { displayMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], togglePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], hideToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], _headers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatExpansionPanelHeader, { descendants: true }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/expansion/expansion-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatExpansionModule {
}
MatExpansionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MatExpansionModule });
MatExpansionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function MatExpansionModule_Factory(t) { return new (t || MatExpansionModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatExpansionModule, { declarations: function () { return [MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelActionRow,
        MatExpansionPanelHeader,
        MatExpansionPanelTitle,
        MatExpansionPanelDescription,
        MatExpansionPanelContent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]]; }, exports: function () { return [MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelActionRow,
        MatExpansionPanelHeader,
        MatExpansionPanelTitle,
        MatExpansionPanelDescription,
        MatExpansionPanelContent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]],
                exports: [
                    MatAccordion,
                    MatExpansionPanel,
                    MatExpansionPanelActionRow,
                    MatExpansionPanelHeader,
                    MatExpansionPanelTitle,
                    MatExpansionPanelDescription,
                    MatExpansionPanelContent,
                ],
                declarations: [
                    MatAccordion,
                    MatExpansionPanel,
                    MatExpansionPanelActionRow,
                    MatExpansionPanelHeader,
                    MatExpansionPanelTitle,
                    MatExpansionPanelDescription,
                    MatExpansionPanelContent,
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/expansion/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=expansion.js.map

/***/ }),

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
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
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
function UbsUserMessagesComponent_div_19_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UbsUserMessagesComponent_div_19_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-notification-body", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("body", notification_r5.body)("orderId", notification_r5.orderId);
} }
function UbsUserMessagesComponent_div_19_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457 \u043F\u043E\u0440\u0443\u0448\u0435\u043D\u043D\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UbsUserMessagesComponent_div_19_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", notification_r5.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { textColorTitle: a0 }; };
function UbsUserMessagesComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UbsUserMessagesComponent_div_19_div_1_Template_mat_expansion_panel_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const notification_r5 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.setRead(notification_r5.id, notification_r5.read); })("opened", function UbsUserMessagesComponent_div_19_div_1_Template_mat_expansion_panel_opened_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.panelOpenState = true; })("closed", function UbsUserMessagesComponent_div_19_div_1_Template_mat_expansion_panel_closed_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-title", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-panel-description", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-panel-description", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UbsUserMessagesComponent_div_19_div_1_div_12_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UbsUserMessagesComponent_div_19_div_1_div_13_Template, 2, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UbsUserMessagesComponent_div_19_div_1_div_14_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UbsUserMessagesComponent_div_19_div_1_div_15_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 10, notification_r5.notificationTime, "HH:mm dd.MM.yyyy"), " ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UbsUserMessagesComponent_div_19_div_1_Template, 16, 19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "pagination-controls", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function UbsUserMessagesComponent_div_19_Template_pagination_controls_pageChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onTableDataChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r3.notifications, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c1, ctx_r3.pageSize, ctx_r3.page, ctx_r3.count)));
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
UbsUserMessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UbsUserMessagesComponent, selectors: [["app-ubs-user-messages"]], decls: 20, vars: 16, consts: [[1, "wrapper"], [1, "content"], [1, "main_header"], [1, "header-list"], [1, "col-2", "id"], [1, "col-5"], [1, "col-5", "time"], [1, "under-line"], ["class", "load-spinner", 4, "ngIf"], ["class", "load-bar", 4, "ngIf"], ["class", "if-empty", 4, "ngIf"], [4, "ngIf"], [1, "load-spinner"], [1, "custom-spinner"], [1, "load-bar"], ["mode", "indeterminate", 1, "custom-bar"], [1, "if-empty"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], ["autoHide", "true", "id", "pag", "previousLabel", "", "nextLabel", "", "directionLinks", "true", "maxSize", "5", 1, "my-pagination", 3, "pageChange"], [3, "click", "opened", "closed"], [3, "ngClass"], [1, "col-2"], [1, "title", 3, "ngClass"], [1, "date", 3, "ngClass"], ["class", "load-spinner small", 4, "ngIf"], ["class", "description", 4, "ngIf"], ["class", "description title-img", 4, "ngIf"], ["class", "description img", 4, "ngIf"], [1, "load-spinner", "small"], ["diameter", "60", 1, "custom-spinner"], [1, "description"], [3, "body", "orderId"], [1, "description", "title-img"], [1, "description", "img"], ["alt", "", 3, "src"]], template: function UbsUserMessagesComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UbsUserMessagesComponent_div_19_Template, 5, 8, "div", 11);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationControlsComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelDescription"], _notification_body_notification_body_component__WEBPACK_IMPORTED_MODULE_11__["NotificationBodyComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 110%;\n  height: 100vh;\n  position: relative;\n  margin-left: -25px;\n  line-height: 24px;\n  color: var(--ubs-primary-black);\n  font-family: var(--primary-font);\n  background-color: var(--after-primary-light-grey);\n}\n\n.main_header[_ngcontent-%COMP%] {\n  margin: 0 0 51px 0;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 40px;\n}\n\n.header-list[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: -32px;\n}\n\n.header-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: var(--ubs-primary-grey);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 20px;\n  letter-spacing: 0.1000000015px;\n  text-align: left;\n}\n\n.under-line[_ngcontent-%COMP%] {\n  width: 92%;\n  height: 1px;\n  background: var(--ubs-primary-light-grey);\n}\n\n.if-empty[_ngcontent-%COMP%] {\n  margin: 35px 0 0 19px;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 28px;\n  letter-spacing: 0.002em;\n  text-align: left;\n  color: var(--ubs-primary-grey);\n}\n\n.ng-star-inserted[_ngcontent-%COMP%] {\n  width: 96%;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  margin: 10px 0 10px 0;\n  box-shadow: none;\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  width: 37px;\n  text-align: left;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-left: 38px;\n  padding-left: 10px;\n}\n\n.date[_ngcontent-%COMP%] {\n  max-width: 38%;\n  padding-right: 45px;\n}\n\n.item[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.col-5[_ngcontent-%COMP%] {\n  flex: 0 0 38.666667%;\n  max-width: 41.666667%;\n}\n\n.id[_ngcontent-%COMP%] {\n  flex: 0 0 18.666667%;\n  max-width: 18.666667%;\n}\n\n.description[_ngcontent-%COMP%] {\n  color: var(--ubs-secondary-grey);\n  max-width: 40%;\n  margin-left: 20.5%;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 24px;\n}\n\n.img[_ngcontent-%COMP%] {\n  max-width: 284px;\n}\n\n.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.title-img[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 10px;\n  color: var(--ubs-quaternary-dark-grey);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 20px;\n  letter-spacing: 0.1000000015px;\n  text-align: left;\n}\n\n.time[_ngcontent-%COMP%] {\n  margin-left: -44px;\n}\n\n.my-pagination[_ngcontent-%COMP%]  .ngx-pagination {\n  font-family: var(--primary-font);\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0;\n  text-align: left;\n}\n\n.my-pagination[_ngcontent-%COMP%]  .ngx-pagination li {\n  margin-right: 10px;\n}\n\n.my-pagination[_ngcontent-%COMP%]  .ngx-pagination .current {\n  padding: 0.1875rem 0.405rem;\n  background: none;\n  color: black;\n  border: 1px solid #444e55;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\n\n.my-pagination[_ngcontent-%COMP%]  .ngx-pagination .pagination-previous a::before {\n  content: \" \";\n  width: 20px;\n  height: 12px;\n  margin-right: -5px;\n  background: url('arrow_left_ubs_messages_active.svg') no-repeat 100%;\n}\n\n.my-pagination[_ngcontent-%COMP%]  .ngx-pagination .pagination-previous.disabled::before {\n  content: \" \";\n  width: 20px;\n  height: 12px;\n  margin-right: -5px;\n  background: url('arrow_left_ubs_messages.svg') no-repeat 100%;\n}\n\n.my-pagination[_ngcontent-%COMP%]  .ngx-pagination .pagination-next a::after {\n  content: \" \";\n  width: 20px;\n  height: 12px;\n  margin-left: -5px;\n  background: url('arrow_right_ubs_messages_active.svg') no-repeat 100%;\n}\n\n.my-pagination[_ngcontent-%COMP%]  .ngx-pagination .pagination-next.disabled::after {\n  content: \" \";\n  width: 20px;\n  height: 12px;\n  margin-left: -5px;\n  background: url('arrow_right_ubs_messages.svg') no-repeat 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin: 0 0 0 30px;\n  padding-bottom: 100px;\n}\n\n.textColorTitle[_ngcontent-%COMP%] {\n  color: var(--primary-black);\n}\n\n.load-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n}\n\n.load-bar[_ngcontent-%COMP%] {\n  width: 92%;\n  margin-top: -1px;\n}\n\n.small[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n[_nghost-%COMP%]     .custom-spinner circle {\n  stroke: #e2e2e2;\n}\n\n  .mat-progress-bar-fill::after {\n  background: #e2e2e2;\n}\n\n  .mat-progress-bar-buffer {\n  background: #bfbfbf;\n}\n\n@media (max-width: 990px) {\n  .wrapper[_ngcontent-%COMP%] {\n    width: 110%;\n    height: 100vh;\n    position: relative;\n    margin-left: 0;\n    padding: 0 20px;\n    line-height: 24px;\n    color: var(--ubs-primary-black);\n    font-family: var(--primary-font);\n    background-color: var(--after-primary-light-grey);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWJzLXVzZXIvdWJzLXVzZXItbWVzc2FnZXMvRDpcXFNvZnRTZXJ2ZV9BY2FkZW15XFxHcmVlbkNpdHlcXGdoLXBhZ2VzXFxHcmVlbkNpdHlDbGllbnQvc3JjXFxhcHBcXHVicy11c2VyXFx1YnMtdXNlci1tZXNzYWdlc1xcdWJzLXVzZXItbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Vicy11c2VyL3Vicy11c2VyLW1lc3NhZ2VzL3Vicy11c2VyLW1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaURBQUE7QUNiRjs7QURnQkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNiRjs7QURnQkE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUNiRjs7QURlRTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNiSjs7QURpQkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0FDZEY7O0FEaUJBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FDZEY7O0FEaUJBO0VBQ0UsVUFBQTtBQ2RGOztBRGlCQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUNkRjs7QURpQkE7RUFDRSxXQUFBO0FDZEY7O0FEaUJBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDZEY7O0FEaUJBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDZEY7O0FEaUJBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDZEY7O0FEaUJBO0VBQ0UsYUFBQTtBQ2RGOztBRGlCQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUNkRjs7QURpQkE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FDZEY7O0FEaUJBO0VBQ0UsZ0NBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDZEY7O0FEaUJBO0VBQ0UsZ0JBQUE7QUNkRjs7QURnQkU7RUFDRSxXQUFBO0FDZEo7O0FEa0JBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNmRjs7QURrQkE7RUFDRSxrQkFBQTtBQ2ZGOztBRGtCQTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNmRjs7QURpQkU7RUFDRSxrQkFBQTtBQ2ZKOztBRGtCRTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDaEJKOztBRG1CRTtFQW5LQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQW1LRSxvRUFBQTtBQ2ZKOztBRGtCRTtFQXpLQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQXlLRSw2REFBQTtBQ2RKOztBRGlCRTtFQXhLQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQXdLRSxxRUFBQTtBQ2JKOztBRGdCRTtFQTlLQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQThLRSw4REFBQTtBQ1pKOztBRGdCQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNiRjs7QURnQkE7RUFDRSwyQkFBQTtBQ2JGOztBRGdCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNiRjs7QURnQkE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNiRjs7QURnQkE7RUFDRSxhQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsZUFBQTtBQ2JGOztBRGdCQTtFQUNFLG1CQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsbUJBQUE7QUNiRjs7QURnQkE7RUFDRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsK0JBQUE7SUFDQSxnQ0FBQTtJQUNBLGlEQUFBO0VDYkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Vicy11c2VyL3Vicy11c2VyLW1lc3NhZ2VzL3Vicy11c2VyLW1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGxlZnQtYXJyb3cge1xyXG4gIGNvbnRlbnQ6ICcgJztcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xyXG59XHJcblxyXG5AbWl4aW4gcmlnaHQtYXJyb3cge1xyXG4gIGNvbnRlbnQ6ICcgJztcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICB3aWR0aDogMTEwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWJsYWNrKTtcclxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZnRlci1wcmltYXJ5LWxpZ2h0LWdyZXkpO1xyXG59XHJcblxyXG4ubWFpbl9oZWFkZXIge1xyXG4gIG1hcmdpbjogMCAwIDUxcHggMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAtMzJweDtcclxuXHJcbiAgZGl2IHtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjEwMDAwMDAwMTQ5MDExNjEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuLnVuZGVyLWxpbmUge1xyXG4gIHdpZHRoOiA5MiU7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdWJzLXByaW1hcnktbGlnaHQtZ3JleSk7XHJcbn1cclxuXHJcbi5pZi1lbXB0eSB7XHJcbiAgbWFyZ2luOiAzNXB4IDAgMCAxOXB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMDJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcclxufVxyXG5cclxuLm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gIHdpZHRoOiA5NiU7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcclxuICB3aWR0aDogMzdweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDM4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgbWF4LXdpZHRoOiAzOCU7XHJcbiAgcGFkZGluZy1yaWdodDogNDVweDtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jb2wtNSB7XHJcbiAgZmxleDogMCAwIDM4LjY2NjY2NyU7XHJcbiAgbWF4LXdpZHRoOiA0MS42NjY2NjclO1xyXG59XHJcblxyXG4uaWQge1xyXG4gIGZsZXg6IDAgMCAxOC42NjY2NjclO1xyXG4gIG1heC13aWR0aDogMTguNjY2NjY3JTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBjb2xvcjogdmFyKC0tdWJzLXNlY29uZGFyeS1ncmV5KTtcclxuICBtYXgtd2lkdGg6IDQwJTtcclxuICBtYXJnaW4tbGVmdDogMjAuNSU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBtYXgtd2lkdGg6IDI4NHB4O1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUtaW1nIHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjEwMDAwMDAwMTQ5MDExNjEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnRpbWUge1xyXG4gIG1hcmdpbi1sZWZ0OiAtNDRweDtcclxufVxyXG5cclxuLm15LXBhZ2luYXRpb246Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIHtcclxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgbGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmN1cnJlbnQge1xyXG4gICAgcGFkZGluZzogMC4xODc1cmVtIDAuNDA1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NDRlNTU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuXHJcbiAgLnBhZ2luYXRpb24tcHJldmlvdXMgYTo6YmVmb3JlIHtcclxuICAgIEBpbmNsdWRlIGxlZnQtYXJyb3c7XHJcblxyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL3Vicy9hcnJvd19sZWZ0X3Vic19tZXNzYWdlc19hY3RpdmUuc3ZnJykgbm8tcmVwZWF0IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucGFnaW5hdGlvbi1wcmV2aW91cy5kaXNhYmxlZDo6YmVmb3JlIHtcclxuICAgIEBpbmNsdWRlIGxlZnQtYXJyb3c7XHJcblxyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL3Vicy9hcnJvd19sZWZ0X3Vic19tZXNzYWdlcy5zdmcnKSBuby1yZXBlYXQgMTAwJTtcclxuICB9XHJcblxyXG4gIC5wYWdpbmF0aW9uLW5leHQgYTo6YWZ0ZXIge1xyXG4gICAgQGluY2x1ZGUgcmlnaHQtYXJyb3c7XHJcblxyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL3Vicy9hcnJvd19yaWdodF91YnNfbWVzc2FnZXNfYWN0aXZlLnN2ZycpIG5vLXJlcGVhdCAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnBhZ2luYXRpb24tbmV4dC5kaXNhYmxlZDo6YWZ0ZXIge1xyXG4gICAgQGluY2x1ZGUgcmlnaHQtYXJyb3c7XHJcblxyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL3Vicy9hcnJvd19yaWdodF91YnNfbWVzc2FnZXMuc3ZnJykgbm8tcmVwZWF0IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgbWFyZ2luOiAwIDAgMCAzMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuLnRleHRDb2xvclRpdGxlIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ibGFjayk7XHJcbn1cclxuXHJcbi5sb2FkLXNwaW5uZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4ubG9hZC1iYXIge1xyXG4gIHdpZHRoOiA5MiU7XHJcbiAgbWFyZ2luLXRvcDogLTFweDtcclxufVxyXG5cclxuLnNtYWxsIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1zcGlubmVyIGNpcmNsZSB7XHJcbiAgc3Ryb2tlOiAjZTJlMmUyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlMmUyZTI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xyXG4gIGJhY2tncm91bmQ6ICNiZmJmYmY7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMTAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktYmxhY2spO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZnRlci1wcmltYXJ5LWxpZ2h0LWdyZXkpO1xyXG4gIH1cclxufVxyXG4iLCIud3JhcHBlciB7XG4gIHdpZHRoOiAxMTAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ibGFjayk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZnRlci1wcmltYXJ5LWxpZ2h0LWdyZXkpO1xufVxuXG4ubWFpbl9oZWFkZXIge1xuICBtYXJnaW46IDAgMCA1MXB4IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cblxuLmhlYWRlci1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogLTMycHg7XG59XG4uaGVhZGVyLWxpc3QgZGl2IHtcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjEwMDAwMDAwMTVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnVuZGVyLWxpbmUge1xuICB3aWR0aDogOTIlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdWJzLXByaW1hcnktbGlnaHQtZ3JleSk7XG59XG5cbi5pZi1lbXB0eSB7XG4gIG1hcmdpbjogMzVweCAwIDAgMTlweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMDJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xufVxuXG4ubmctc3Rhci1pbnNlcnRlZCB7XG4gIHdpZHRoOiA5NiU7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgd2lkdGg6IDM3cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAzOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5kYXRlIHtcbiAgbWF4LXdpZHRoOiAzOCU7XG4gIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XG59XG5cbi5pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNvbC01IHtcbiAgZmxleDogMCAwIDM4LjY2NjY2NyU7XG4gIG1heC13aWR0aDogNDEuNjY2NjY3JTtcbn1cblxuLmlkIHtcbiAgZmxleDogMCAwIDE4LjY2NjY2NyU7XG4gIG1heC13aWR0aDogMTguNjY2NjY3JTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLXVicy1zZWNvbmRhcnktZ3JleSk7XG4gIG1heC13aWR0aDogNDAlO1xuICBtYXJnaW4tbGVmdDogMjAuNSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmltZyB7XG4gIG1heC13aWR0aDogMjg0cHg7XG59XG4uaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGl0bGUtaW1nIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHZhcigtLXVicy1xdWF0ZXJuYXJ5LWRhcmstZ3JleSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTAwMDAwMDAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGltZSB7XG4gIG1hcmdpbi1sZWZ0OiAtNDRweDtcbn1cblxuLm15LXBhZ2luYXRpb246Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubXktcGFnaW5hdGlvbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gbGkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubXktcGFnaW5hdGlvbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xuICBwYWRkaW5nOiAwLjE4NzVyZW0gMC40MDVyZW07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ0NGU1NTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLm15LXBhZ2luYXRpb246Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzIGE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IC01cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvdWJzL2Fycm93X2xlZnRfdWJzX21lc3NhZ2VzX2FjdGl2ZS5zdmdcIikgbm8tcmVwZWF0IDEwMCU7XG59XG4ubXktcGFnaW5hdGlvbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMuZGlzYWJsZWQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IC01cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvdWJzL2Fycm93X2xlZnRfdWJzX21lc3NhZ2VzLnN2Z1wiKSBuby1yZXBlYXQgMTAwJTtcbn1cbi5teS1wYWdpbmF0aW9uOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0IGE6OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3Vicy9hcnJvd19yaWdodF91YnNfbWVzc2FnZXNfYWN0aXZlLnN2Z1wiKSBuby1yZXBlYXQgMTAwJTtcbn1cbi5teS1wYWdpbmF0aW9uOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0LmRpc2FibGVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy91YnMvYXJyb3dfcmlnaHRfdWJzX21lc3NhZ2VzLnN2Z1wiKSBuby1yZXBlYXQgMTAwJTtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW46IDAgMCAwIDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuLnRleHRDb2xvclRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktYmxhY2spO1xufVxuXG4ubG9hZC1zcGlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5sb2FkLWJhciB7XG4gIHdpZHRoOiA5MiU7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG59XG5cbi5zbWFsbCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLXNwaW5uZXIgY2lyY2xlIHtcbiAgc3Ryb2tlOiAjZTJlMmUyO1xufVxuXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTJlMmUyO1xufVxuXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgYmFja2dyb3VuZDogI2JmYmZiZjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICB3aWR0aDogMTEwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWJsYWNrKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZnRlci1wcmltYXJ5LWxpZ2h0LWdyZXkpO1xuICB9XG59Il19 */"] });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bag_r8 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", bag_r8.name, "\u0412\u0442\u043E\u0440\u0441\u0438\u0440\u043E\u0432\u0438\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", bag_r8.capacity, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, "user-orders.details.litr"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", bag_r8.price, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 11, "user-orders.details.currency"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.order.amountOfBagsOrdered[bag_r8.id], " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 13, "user-orders.details.pieces"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.order.amountOfBagsOrdered[bag_r8.id] * bag_r8.price, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 15, "user-orders.details.currency"), "");
} }
function UbsUserOrderDetailsComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
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
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "user-orders.details.bonuses"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("-", ctx_r2.order.orderBonusDiscount, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "user-orders.details.currency"), "");
} }
function UbsUserOrderDetailsComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
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
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "user-orders.details.services-amount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r3.order.orderExportedPrice, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "user-orders.details.currency"), "");
} }
function UbsUserOrderDetailsComponent_ol_42_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.order.additionalOrders.join(", "), "");
} }
function UbsUserOrderDetailsComponent_li_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "user-orders.details.comment"), " ", ctx_r5.order.addressComment, "");
} }
function UbsUserOrderDetailsComponent_ng_template_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ubs-spinner", 22);
} }
const _c0 = function () { return { fontSize: "16px" }; };
class UbsUserOrderDetailsComponent {
}
UbsUserOrderDetailsComponent.ɵfac = function UbsUserOrderDetailsComponent_Factory(t) { return new (t || UbsUserOrderDetailsComponent)(); };
UbsUserOrderDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UbsUserOrderDetailsComponent, selectors: [["app-ubs-user-order-details"]], inputs: { order: "order" }, decls: 79, vars: 58, consts: [[1, "full_card"], [1, "header_details"], ["aria-label", "orderDetailsTable", 1, "table_of_details"], [1, "header_table"], ["scope", "row"], ["class", "data_table", 4, "ngFor", "ngForOf"], [1, "sum_of_order"], ["colspan", "4"], ["class", "optional_row", 4, "ngIf"], [1, "sum_to_pay"], [1, "order_details"], [4, "ngIf"], [1, "recipient"], [1, "bold_text"], [1, "download"], [1, "arrow"], [3, "ngStyle"], [1, "maximize"], [1, "text"], ["spinner", ""], [1, "data_table"], [1, "optional_row"], [1, "mx-auto"]], template: function UbsUserOrderDetailsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UbsUserOrderDetailsComponent_tr_21_Template, 15, 17, "tr", 5);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, UbsUserOrderDetailsComponent_tr_31_Template, 7, 7, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UbsUserOrderDetailsComponent_tr_32_Template, 7, 7, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, UbsUserOrderDetailsComponent_tr_33_Template, 7, 7, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, UbsUserOrderDetailsComponent_ol_42_Template, 9, 7, "ol", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ol", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, UbsUserOrderDetailsComponent_li_66_Template, 3, 4, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "arrow_downward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "maximize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, UbsUserOrderDetailsComponent_ng_template_77_Template, 1, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 30, "user-orders.details.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 32, "user-orders.details.services"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 34, "user-orders.details.volume"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 36, "user-orders.details.cost"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 38, "user-orders.details.bags-amount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 40, "user-orders.details.sum"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.order.bags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 42, "user-orders.details.order-sum"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.order.orderFullPrice, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 44, "user-orders.details.currency"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.order.orderCertificateTotalDiscount !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.order.orderBonusDiscount !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.order.orderStatus === "DONE_UNPAID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 46, "user-orders.details.amount-due"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.order.orderDiscountedPrice, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 48, "user-orders.details.currency"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.order.additionalOrders[0] !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 50, "user-orders.details.recipient"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.order.recipientName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.recipientSurname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.recipientPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.recipientEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 52, "user-orders.details.export-address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.addressCity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.addressStreet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.addressDistrict);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.order.addressComment !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](56, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](57, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 54, "user-orders.details.receipt"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _shared_spinner_ubs_spinner_ubs_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerUbsComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: [".full_card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 28px auto;\n  grid-template-columns: 670px;\n  margin-left: 56px;\n  color: var(--ubs-secondary-grey);\n}\n.full_card[_ngcontent-%COMP%]   .header_details[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: bold;\n  letter-spacing: 0.002em;\n  color: var(--ubs-primary-black);\n  font-family: var(--primary-font);\n}\n.table_of_details[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-family: var(--primary-font);\n}\n.table_of_details[_ngcontent-%COMP%]   .header_table[_ngcontent-%COMP%] {\n  height: 34px;\n  margin: 5px 0 2px 0;\n  border-bottom: 1px solid var(--ubs-primary-light-grey);\n}\n.table_of_details[_ngcontent-%COMP%]   .header_table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.table_of_details[_ngcontent-%COMP%]   .header_table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4) {\n  text-align: center;\n}\n.table_of_details[_ngcontent-%COMP%]   .header_table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5) {\n  text-align: right;\n}\n.table_of_details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 28px;\n}\n.data_table[_ngcontent-%COMP%] {\n  color: var(--ubs-quaternary-dark-grey);\n}\n.data_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.sum_of_order[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--ubs-primary-light-grey);\n}\n.sum_of_order[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 16px;\n  text-align: right;\n}\n.sum_to_pay[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  padding-bottom: 16px;\n  text-align: right;\n}\n.optional_row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  text-align: right;\n}\n.data_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n  padding-left: 40px;\n}\n.data_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n  text-align: right;\n  color: var(--ubs-primary-grey);\n  font-weight: bold;\n}\n.sum_of_order[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  color: var(--ubs-primary-grey);\n  font-weight: bold;\n}\n.sum_to_pay[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  color: var(--ubs-primary-grey);\n  font-weight: bold;\n}\n.optional_row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  color: var(--primary-green);\n  font-size: 10px;\n  line-height: 12px;\n}\n.order_details[_ngcontent-%COMP%] {\n  width: 450px;\n  margin-left: 16px;\n  color: var(--ubs-primary-grey);\n  font-family: var(--primary-font);\n}\n.order_details[_ngcontent-%COMP%]   .recipient[_ngcontent-%COMP%] {\n  margin: 32px 0;\n}\n.order_details[_ngcontent-%COMP%]   .bold_text[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.order_details[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.download[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-areas: \"arrow text\" \"maximize text\";\n  grid-template-columns: 16px auto;\n  grid-template-rows: 17px auto;\n  justify-content: end;\n  margin: 0 18px 33px 0;\n  color: var(--primary-green);\n}\n.arrow[_ngcontent-%COMP%] {\n  grid-area: arrow;\n}\n.maximize[_ngcontent-%COMP%] {\n  grid-area: maximize;\n  width: 16px;\n  height: 1px;\n  transform: rotate(-180deg);\n}\n.text[_ngcontent-%COMP%] {\n  grid-area: text;\n  margin: 0 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWJzLXVzZXIvdWJzLXVzZXItb3JkZXItZGV0YWlscy9EOlxcU29mdFNlcnZlX0FjYWRlbXlcXEdyZWVuQ2l0eVxcZ2gtcGFnZXNcXEdyZWVuQ2l0eUNsaWVudC9zcmNcXGFwcFxcdWJzLXVzZXJcXHVicy11c2VyLW9yZGVyLWRldGFpbHNcXHVicy11c2VyLW9yZGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Vicy11c2VyL3Vicy11c2VyLW9yZGVyLWRldGFpbHMvdWJzLXVzZXItb3JkZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQ0NKO0FER0E7RUFDRSxnQkFBQTtFQUNBLGdDQUFBO0FDQUY7QURFRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNEQUFBO0FDQUo7QURFSTtFQUNFLGdCQUFBO0FDQU47QURHSTtFQUNFLGtCQUFBO0FDRE47QURJSTtFQUNFLGlCQUFBO0FDRk47QURNRTtFQUNFLGlCQUFBO0FDSko7QURRQTtFQUNFLHNDQUFBO0FDTEY7QURPRTtFQUNFLGdCQUFBO0FDTEo7QURTQTtFQUNFLG1EQUFBO0FDTkY7QURRRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNOSjtBRFdFO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDUko7QURhRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNWSjtBRGNBO0VBQ0Usa0JBQUE7QUNYRjtBRGNBO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FDWEY7QURjQTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7QUNYRjtBRGNBO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtBQ1hGO0FEY0E7RUFDRSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1hGO0FEY0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0FDWEY7QURhRTtFQUNFLGNBQUE7QUNYSjtBRGNFO0VBQ0UsaUJBQUE7QUNaSjtBRGVFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQ2JKO0FEaUJBO0VBQ0UsYUFBQTtFQUNBLGlEQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQ2RGO0FEaUJBO0VBQ0UsZ0JBQUE7QUNkRjtBRGlCQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ2RGO0FEaUJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNkRiIsImZpbGUiOiJzcmMvYXBwL3Vicy11c2VyL3Vicy11c2VyLW9yZGVyLWRldGFpbHMvdWJzLXVzZXItb3JkZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsX2NhcmQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyOHB4IGF1dG87XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2NzBweDtcclxuICBtYXJnaW4tbGVmdDogNTZweDtcclxuICBjb2xvcjogdmFyKC0tdWJzLXNlY29uZGFyeS1ncmV5KTtcclxuXHJcbiAgLmhlYWRlcl9kZXRhaWxzIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMDJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ibGFjayk7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcclxuICB9XHJcbn1cclxuXHJcbi50YWJsZV9vZl9kZXRhaWxzIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xyXG5cclxuICAuaGVhZGVyX3RhYmxlIHtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIG1hcmdpbjogNXB4IDAgMnB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdWJzLXByaW1hcnktbGlnaHQtZ3JleSk7XHJcblxyXG4gICAgdGgge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICB0aDpudGgtY2hpbGQoNSkge1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRkIHtcclxuICAgIHBhZGRpbmctdG9wOiAyOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmRhdGFfdGFibGUge1xyXG4gIGNvbG9yOiB2YXIoLS11YnMtcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xyXG5cclxuICB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuLnN1bV9vZl9vcmRlciB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXVicy1wcmltYXJ5LWxpZ2h0LWdyZXkpO1xyXG5cclxuICB0ZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLnN1bV90b19wYXkge1xyXG4gIHRkIHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLm9wdGlvbmFsX3JvdyB7XHJcbiAgdGQge1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLmRhdGFfdGFibGUgdGQ6bnRoLWNoaWxkKDQpIHtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbn1cclxuXHJcbi5kYXRhX3RhYmxlIHRkOm50aC1jaGlsZCg1KSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc3VtX29mX29yZGVyIHRkOm50aC1jaGlsZCgyKSB7XHJcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc3VtX3RvX3BheSB0ZDpudGgtY2hpbGQoMikge1xyXG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm9wdGlvbmFsX3JvdyB0ZDpudGgtY2hpbGQoMikge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5vcmRlcl9kZXRhaWxzIHtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xyXG5cclxuICAucmVjaXBpZW50IHtcclxuICAgIG1hcmdpbjogMzJweCAwO1xyXG4gIH1cclxuXHJcbiAgLmJvbGRfdGV4dCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIG9sIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uZG93bmxvYWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2Fycm93IHRleHQnICdtYXhpbWl6ZSB0ZXh0JztcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2cHggYXV0bztcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE3cHggYXV0bztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICBtYXJnaW46IDAgMThweCAzM3B4IDA7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xyXG59XHJcblxyXG4uYXJyb3cge1xyXG4gIGdyaWQtYXJlYTogYXJyb3c7XHJcbn1cclxuXHJcbi5tYXhpbWl6ZSB7XHJcbiAgZ3JpZC1hcmVhOiBtYXhpbWl6ZTtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDFweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGdyaWQtYXJlYTogdGV4dDtcclxuICBtYXJnaW46IDAgMjJweDtcclxufVxyXG4iLCIuZnVsbF9jYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyOHB4IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjcwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1NnB4O1xuICBjb2xvcjogdmFyKC0tdWJzLXNlY29uZGFyeS1ncmV5KTtcbn1cbi5mdWxsX2NhcmQgLmhlYWRlcl9kZXRhaWxzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAwMmVtO1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktYmxhY2spO1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbn1cblxuLnRhYmxlX29mX2RldGFpbHMge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbn1cbi50YWJsZV9vZl9kZXRhaWxzIC5oZWFkZXJfdGFibGUge1xuICBoZWlnaHQ6IDM0cHg7XG4gIG1hcmdpbjogNXB4IDAgMnB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS11YnMtcHJpbWFyeS1saWdodC1ncmV5KTtcbn1cbi50YWJsZV9vZl9kZXRhaWxzIC5oZWFkZXJfdGFibGUgdGgge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnRhYmxlX29mX2RldGFpbHMgLmhlYWRlcl90YWJsZSB0aDpudGgtY2hpbGQoNCkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGFibGVfb2ZfZGV0YWlscyAuaGVhZGVyX3RhYmxlIHRoOm50aC1jaGlsZCg1KSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnRhYmxlX29mX2RldGFpbHMgdGQge1xuICBwYWRkaW5nLXRvcDogMjhweDtcbn1cblxuLmRhdGFfdGFibGUge1xuICBjb2xvcjogdmFyKC0tdWJzLXF1YXRlcm5hcnktZGFyay1ncmV5KTtcbn1cbi5kYXRhX3RhYmxlIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnN1bV9vZl9vcmRlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS11YnMtcHJpbWFyeS1saWdodC1ncmV5KTtcbn1cbi5zdW1fb2Zfb3JkZXIgdGQge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zdW1fdG9fcGF5IHRkIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ub3B0aW9uYWxfcm93IHRkIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5kYXRhX3RhYmxlIHRkOm50aC1jaGlsZCg0KSB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuLmRhdGFfdGFibGUgdGQ6bnRoLWNoaWxkKDUpIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zdW1fb2Zfb3JkZXIgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN1bV90b19wYXkgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9wdGlvbmFsX3JvdyB0ZDpudGgtY2hpbGQoMikge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5vcmRlcl9kZXRhaWxzIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbn1cbi5vcmRlcl9kZXRhaWxzIC5yZWNpcGllbnQge1xuICBtYXJnaW46IDMycHggMDtcbn1cbi5vcmRlcl9kZXRhaWxzIC5ib2xkX3RleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5vcmRlcl9kZXRhaWxzIG9sIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uZG93bmxvYWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImFycm93IHRleHRcIiBcIm1heGltaXplIHRleHRcIjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNnB4IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTdweCBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgbWFyZ2luOiAwIDE4cHggMzNweCAwO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XG59XG5cbi5hcnJvdyB7XG4gIGdyaWQtYXJlYTogYXJyb3c7XG59XG5cbi5tYXhpbWl6ZSB7XG4gIGdyaWQtYXJlYTogbWF4aW1pemU7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDFweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG59XG5cbi50ZXh0IHtcbiAgZ3JpZC1hcmVhOiB0ZXh0O1xuICBtYXJnaW46IDAgMjJweDtcbn0iXX0= */"] });
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ubs_user_order_details_ubs_user_order_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ubs-user-order-details/ubs-user-order-details.component */ "./src/app/ubs-user/ubs-user-order-details/ubs-user-order-details.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





function UbsUserOrdersListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "user-orders.order-number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "user-orders.order-status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, "user-orders.payment-amount"));
} }
function UbsUserOrdersListComponent_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UbsUserOrdersListComponent_div_1_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const order_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.changeCard(order_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UbsUserOrdersListComponent_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UbsUserOrdersListComponent_div_1_img_3_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const order_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.changeCard(order_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UbsUserOrdersListComponent_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "user-orders.btn.cancel"));
} }
function UbsUserOrdersListComponent_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "user-orders.btn.pay"));
} }
function UbsUserOrdersListComponent_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "user-orders.btn.order-again"));
} }
function UbsUserOrdersListComponent_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ubs-user-order-details", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("order", order_r2);
} }
function UbsUserOrdersListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UbsUserOrdersListComponent_div_1_img_2_Template, 1, 0, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UbsUserOrdersListComponent_div_1_img_3_Template, 1, 0, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UbsUserOrdersListComponent_div_1_div_11_Template, 4, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UbsUserOrdersListComponent_div_1_div_12_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UbsUserOrdersListComponent_div_1_div_13_Template, 4, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UbsUserOrdersListComponent_div_1_div_14_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r2.extend);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !order_r2.extend);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.orderStatusName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r2.orderDiscountedPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isOrderFormed(order_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isOrderUnpaid(order_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isOrderDone(order_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r2.extend);
} }
class UbsUserOrdersListComponent {
    isOrderFormed(order) {
        return order.orderStatus === 'FORMED';
    }
    isOrderUnpaid(order) {
        return order.orderStatus === 'DONE_UNPAID' || order.orderStatus === 'FORMED';
    }
    isOrderDone(order) {
        return order.orderStatus === 'ON_THE_ROUTE' || order.orderStatus === 'CONFIRMED' || order.orderStatus === 'DONE';
    }
    changeCard(id) {
        this.orders.forEach((order) => {
            if (order.id === id) {
                order.extend = !order.extend;
            }
        });
    }
}
UbsUserOrdersListComponent.ɵfac = function UbsUserOrdersListComponent_Factory(t) { return new (t || UbsUserOrdersListComponent)(); };
UbsUserOrdersListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UbsUserOrdersListComponent, selectors: [["app-ubs-user-orders-list"]], inputs: { orders: "orders" }, decls: 2, vars: 2, consts: [["class", "header_list", 4, "ngIf"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "header_list"], [1, "card"], [1, "empty_card"], ["src", "assets/img/ubs-admin-orders/arrow_down.svg", "alt", "arrow down", 3, "click", 4, "ngIf"], ["src", "assets/img/ubs-admin-orders/arrow_up.svg", "alt", "arrow up", 3, "click", 4, "ngIf"], [1, "order_sum"], [1, "btns_group"], ["class", "btn_grid_cancel", 4, "ngIf"], ["class", "btn_grid_pay", 4, "ngIf"], ["class", "btn_grid_order", 4, "ngIf"], [4, "ngIf"], ["src", "assets/img/ubs-admin-orders/arrow_down.svg", "alt", "arrow down", 3, "click"], ["src", "assets/img/ubs-admin-orders/arrow_up.svg", "alt", "arrow up", 3, "click"], [1, "btn_grid_cancel"], [1, "btn_cancel"], [1, "btn_grid_pay"], [1, "btn_pay"], [1, "btn_grid_order"], [1, "btn_order"], [3, "order"]], template: function UbsUserOrdersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UbsUserOrdersListComponent_div_0_Template, 10, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UbsUserOrdersListComponent_div_1_Template, 15, 9, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orders.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ubs_user_order_details_ubs_user_order_details_component__WEBPACK_IMPORTED_MODULE_2__["UbsUserOrderDetailsComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: [".mat-tab-label-content {\n  font-size: 20px;\n}\n  .mat-tab-labels .mat-tab-label-active .mat-tab-label-content {\n  color: var(--primary-green);\n}\n  .mat-tab-group.mat-primary .mat-ink-bar,   .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: var(--primary-green);\n}\n.header_list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 200px 172px 222px auto;\n  grid-template-rows: 30px;\n  max-width: 862px;\n  font-size: 14px;\n  font-weight: 500;\n  padding-top: 40px;\n  line-height: 20px;\n  border: none;\n  text-align: center;\n}\n.card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 80px auto;\n  background-color: var(--ubs-primary-white);\n  box-shadow: 0 2px 6px rgba(100, 114, 125, 0.15);\n  max-width: 862px;\n  margin-top: 18px;\n}\n.empty_card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 56px 143px 172px 222px 268px;\n  justify-items: center;\n  align-items: center;\n}\n.empty_card[_ngcontent-%COMP%]   .order_sum[_ngcontent-%COMP%] {\n  margin-right: 75px;\n  justify-self: end;\n}\n.empty_card[_ngcontent-%COMP%]   .btns_group[_ngcontent-%COMP%]   .btn_grid_cancel[_ngcontent-%COMP%], .empty_card[_ngcontent-%COMP%]   .btns_group[_ngcontent-%COMP%]   .btn_grid_pay[_ngcontent-%COMP%], .empty_card[_ngcontent-%COMP%]   .btns_group[_ngcontent-%COMP%]   .btn_grid_fake[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 114px;\n  margin: 0 20px 0 0;\n}\n.empty_card[_ngcontent-%COMP%]   .btns_group[_ngcontent-%COMP%]   .btn_grid_cancel[_ngcontent-%COMP%]   .btn_pay[_ngcontent-%COMP%], .empty_card[_ngcontent-%COMP%]   .btns_group[_ngcontent-%COMP%]   .btn_grid_pay[_ngcontent-%COMP%]   .btn_pay[_ngcontent-%COMP%], .empty_card[_ngcontent-%COMP%]   .btns_group[_ngcontent-%COMP%]   .btn_grid_fake[_ngcontent-%COMP%]   .btn_pay[_ngcontent-%COMP%] {\n  height: 36px;\n  width: 114px;\n  border: none;\n  color: var(--ubs-primary-white);\n  padding: 8px 20px 8px 20px;\n  background: var(--ubs-primary-green);\n  border-radius: 4px;\n}\n.empty_card[_ngcontent-%COMP%]   .btns_group[_ngcontent-%COMP%]   .btn_grid_cancel[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%], .empty_card[_ngcontent-%COMP%]   .btns_group[_ngcontent-%COMP%]   .btn_grid_pay[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%], .empty_card[_ngcontent-%COMP%]   .btns_group[_ngcontent-%COMP%]   .btn_grid_fake[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%] {\n  height: 36px;\n  width: 114px;\n  color: var(--ubs-primary-green);\n  background: var(--ubs-primary-white);\n  border: 1px solid var(--ubs-primary-green);\n  border-radius: 4px;\n}\n.empty_card[_ngcontent-%COMP%]   .btns_group[_ngcontent-%COMP%]   .btn_grid_cancel[_ngcontent-%COMP%]   .btn_fake[_ngcontent-%COMP%], .empty_card[_ngcontent-%COMP%]   .btns_group[_ngcontent-%COMP%]   .btn_grid_pay[_ngcontent-%COMP%]   .btn_fake[_ngcontent-%COMP%], .empty_card[_ngcontent-%COMP%]   .btns_group[_ngcontent-%COMP%]   .btn_grid_fake[_ngcontent-%COMP%]   .btn_fake[_ngcontent-%COMP%] {\n  display: none;\n}\n.empty_card[_ngcontent-%COMP%]   .btns_group[_ngcontent-%COMP%]   .btn_grid_order[_ngcontent-%COMP%] {\n  margin: 0 20px 0 64px;\n}\n.empty_card[_ngcontent-%COMP%]   .btns_group[_ngcontent-%COMP%]   .btn_grid_order[_ngcontent-%COMP%]   .btn_order[_ngcontent-%COMP%] {\n  height: 36px;\n  color: var(--ubs-primary-green);\n  border: 1px solid var(--ubs-primary-green);\n  padding: 8px 24px 8px 24px;\n  background: var(--ubs-primary-white);\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWJzLXVzZXIvdWJzLXVzZXItb3JkZXJzLWxpc3QvRDpcXFNvZnRTZXJ2ZV9BY2FkZW15XFxHcmVlbkNpdHlcXGdoLXBhZ2VzXFxHcmVlbkNpdHlDbGllbnQvc3JjXFxhcHBcXHVicy11c2VyXFx1YnMtdXNlci1vcmRlcnMtbGlzdFxcdWJzLXVzZXItb3JkZXJzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Vicy11c2VyL3Vicy11c2VyLW9yZGVycy1saXN0L3Vicy11c2VyLW9yZGVycy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQ0FKO0FESUk7RUFDRSwyQkFBQTtBQ0ZOO0FETUU7O0VBRUUsc0NBQUE7QUNKSjtBRFFBO0VBQ0UsYUFBQTtFQUNBLDZDQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRFFBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsMENBQUE7RUFDQSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNMRjtBRFFBO0VBQ0UsYUFBQTtFQUNBLG1EQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0xGO0FET0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDTEo7QURTSTs7O0VBR0UscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNQTjtBRFNNOzs7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQ0xSO0FEUU07OztFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7QUNKUjtBRE9NOzs7RUFDRSxhQUFBO0FDSFI7QURPSTtFQUNFLHFCQUFBO0FDTE47QURPTTtFQUNFLFlBQUE7RUFDQSwrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC91YnMtdXNlci91YnMtdXNlci1vcmRlcnMtbGlzdC91YnMtdXNlci1vcmRlcnMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgLm1hdC10YWItbGFiZWwtY29udGVudCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubWF0LXRhYi1sYWJlbHMgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuICAgIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIsXHJcbiAgLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGVyX2xpc3Qge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxNzJweCAyMjJweCBhdXRvO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweDtcclxuICBtYXgtd2lkdGg6IDg2MnB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LXdoaXRlKTtcclxuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgxMDAsIDExNCwgMTI1LCAwLjE1KTtcclxuICBtYXgtd2lkdGg6IDg2MnB4O1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbn1cclxuXHJcbi5lbXB0eV9jYXJkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTZweCAxNDNweCAxNzJweCAyMjJweCAyNjhweDtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLm9yZGVyX3N1bSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDc1cHg7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICB9XHJcblxyXG4gIC5idG5zX2dyb3VwIHtcclxuICAgIC5idG5fZ3JpZF9jYW5jZWwsXHJcbiAgICAuYnRuX2dyaWRfcGF5LFxyXG4gICAgLmJ0bl9ncmlkX2Zha2Uge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMTRweDtcclxuICAgICAgbWFyZ2luOiAwIDIwcHggMCAwO1xyXG5cclxuICAgICAgLmJ0bl9wYXkge1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICB3aWR0aDogMTE0cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS13aGl0ZSk7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDIwcHggOHB4IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdWJzLXByaW1hcnktZ3JlZW4pO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ0bl9jYW5jZWwge1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICB3aWR0aDogMTE0cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWdyZWVuKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS11YnMtcHJpbWFyeS13aGl0ZSk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdWJzLXByaW1hcnktZ3JlZW4pO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ0bl9mYWtlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bl9ncmlkX29yZGVyIHtcclxuICAgICAgbWFyZ2luOiAwIDIwcHggMCA2NHB4O1xyXG5cclxuICAgICAgLmJ0bl9vcmRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmVlbik7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdWJzLXByaW1hcnktZ3JlZW4pO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAyNHB4IDhweCAyNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXVicy1wcmltYXJ5LXdoaXRlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWxzIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSAubWF0LXRhYi1sYWJlbC1jb250ZW50IHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xufVxuOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhcixcbjo6bmctZGVlcCAubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xufVxuXG4uaGVhZGVyX2xpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDE3MnB4IDIyMnB4IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweDtcbiAgbWF4LXdpZHRoOiA4NjJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS13aGl0ZSk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDEwMCwgMTE0LCAxMjUsIDAuMTUpO1xuICBtYXgtd2lkdGg6IDg2MnB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuXG4uZW1wdHlfY2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTZweCAxNDNweCAxNzJweCAyMjJweCAyNjhweDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmVtcHR5X2NhcmQgLm9yZGVyX3N1bSB7XG4gIG1hcmdpbi1yaWdodDogNzVweDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG4uZW1wdHlfY2FyZCAuYnRuc19ncm91cCAuYnRuX2dyaWRfY2FuY2VsLFxuLmVtcHR5X2NhcmQgLmJ0bnNfZ3JvdXAgLmJ0bl9ncmlkX3BheSxcbi5lbXB0eV9jYXJkIC5idG5zX2dyb3VwIC5idG5fZ3JpZF9mYWtlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTE0cHg7XG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcbn1cbi5lbXB0eV9jYXJkIC5idG5zX2dyb3VwIC5idG5fZ3JpZF9jYW5jZWwgLmJ0bl9wYXksXG4uZW1wdHlfY2FyZCAuYnRuc19ncm91cCAuYnRuX2dyaWRfcGF5IC5idG5fcGF5LFxuLmVtcHR5X2NhcmQgLmJ0bnNfZ3JvdXAgLmJ0bl9ncmlkX2Zha2UgLmJ0bl9wYXkge1xuICBoZWlnaHQ6IDM2cHg7XG4gIHdpZHRoOiAxMTRweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktd2hpdGUpO1xuICBwYWRkaW5nOiA4cHggMjBweCA4cHggMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdWJzLXByaW1hcnktZ3JlZW4pO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uZW1wdHlfY2FyZCAuYnRuc19ncm91cCAuYnRuX2dyaWRfY2FuY2VsIC5idG5fY2FuY2VsLFxuLmVtcHR5X2NhcmQgLmJ0bnNfZ3JvdXAgLmJ0bl9ncmlkX3BheSAuYnRuX2NhbmNlbCxcbi5lbXB0eV9jYXJkIC5idG5zX2dyb3VwIC5idG5fZ3JpZF9mYWtlIC5idG5fY2FuY2VsIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICB3aWR0aDogMTE0cHg7XG4gIGNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmVlbik7XG4gIGJhY2tncm91bmQ6IHZhcigtLXVicy1wcmltYXJ5LXdoaXRlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdWJzLXByaW1hcnktZ3JlZW4pO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uZW1wdHlfY2FyZCAuYnRuc19ncm91cCAuYnRuX2dyaWRfY2FuY2VsIC5idG5fZmFrZSxcbi5lbXB0eV9jYXJkIC5idG5zX2dyb3VwIC5idG5fZ3JpZF9wYXkgLmJ0bl9mYWtlLFxuLmVtcHR5X2NhcmQgLmJ0bnNfZ3JvdXAgLmJ0bl9ncmlkX2Zha2UgLmJ0bl9mYWtlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5lbXB0eV9jYXJkIC5idG5zX2dyb3VwIC5idG5fZ3JpZF9vcmRlciB7XG4gIG1hcmdpbjogMCAyMHB4IDAgNjRweDtcbn1cbi5lbXB0eV9jYXJkIC5idG5zX2dyb3VwIC5idG5fZ3JpZF9vcmRlciAuYnRuX29yZGVyIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JlZW4pO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11YnMtcHJpbWFyeS1ncmVlbik7XG4gIHBhZGRpbmc6IDhweCAyNHB4IDhweCAyNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS11YnMtcHJpbWFyeS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UbsUserOrdersListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ubs-user-orders-list',
                templateUrl: './ubs-user-orders-list.component.html',
                styleUrls: ['./ubs-user-orders-list.component.scss']
            }]
    }], null, { orders: [{
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _ubs_user_orders_list_ubs_user_orders_list_component__WEBPACK_IMPORTED_MODULE_7__["UbsUserOrdersListComponent"], _shared_spinner_ubs_spinner_ubs_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerUbsComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n  margin-top: 35px;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--ubs-primary-black);\n  font-family: var(--primary-font);\n  background-color: var(--after-primary-light-grey);\n}\n\n.main_header[_ngcontent-%COMP%] {\n  margin: 0 0 51px 44px;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 40px;\n}\n\n.if_empty[_ngcontent-%COMP%] {\n  margin: 16px 0 0 44px;\n}\n\n.if_empty[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 13px;\n  color: var(--ubs-primary-green);\n}\n\n.cards[_ngcontent-%COMP%] {\n  width: 862px;\n}\n\n.cards[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%] {\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWJzLXVzZXIvdWJzLXVzZXItb3JkZXJzL0Q6XFxTb2Z0U2VydmVfQWNhZGVteVxcR3JlZW5DaXR5XFxnaC1wYWdlc1xcR3JlZW5DaXR5Q2xpZW50L3NyY1xcYXBwXFx1YnMtdXNlclxcdWJzLXVzZXItb3JkZXJzXFx1YnMtdXNlci1vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Vicy11c2VyL3Vicy11c2VyLW9yZGVycy91YnMtdXNlci1vcmRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaURBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURDRTtFQUNFLGlCQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURFRTtFQUNFLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3Vicy11c2VyL3Vicy11c2VyLW9yZGVycy91YnMtdXNlci1vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktYmxhY2spO1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFmdGVyLXByaW1hcnktbGlnaHQtZ3JleSk7XHJcbn1cclxuXHJcbi5tYWluX2hlYWRlciB7XHJcbiAgbWFyZ2luOiAwIDAgNTFweCA0NHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmlmX2VtcHR5IHtcclxuICBtYXJnaW46IDE2cHggMCAwIDQ0cHg7XHJcblxyXG4gIGEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JlZW4pO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmRzIHtcclxuICB3aWR0aDogODYycHg7XHJcblxyXG4gIC5lbXB0eSB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi53cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LWJsYWNrKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFmdGVyLXByaW1hcnktbGlnaHQtZ3JleSk7XG59XG5cbi5tYWluX2hlYWRlciB7XG4gIG1hcmdpbjogMCAwIDUxcHggNDRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuXG4uaWZfZW1wdHkge1xuICBtYXJnaW46IDE2cHggMCAwIDQ0cHg7XG59XG4uaWZfZW1wdHkgYSB7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JlZW4pO1xufVxuXG4uY2FyZHMge1xuICB3aWR0aDogODYycHg7XG59XG4uY2FyZHMgLmVtcHR5IHtcbiAgaGVpZ2h0OiA4MHB4O1xufSJdfQ== */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], angular_imask__WEBPACK_IMPORTED_MODULE_9__["IMaskDirective"], _shared_spinner_ubs_spinner_ubs_component__WEBPACK_IMPORTED_MODULE_10__["SpinnerUbsComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: [".ubs_profile-container[_ngcontent-%COMP%] {\n  font-family: var(--primary-font);\n  font-size: 0.9em;\n  max-width: 1200px;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 100px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .ubs_profile-header[_ngcontent-%COMP%] {\n  width: 905px;\n  display: flex;\n  justify-content: space-between;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .ubs_profile-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  padding: 20px;\n  width: 905px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .house[_ngcontent-%COMP%] {\n  display: flex;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .house[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--ubs-secondary-grey);\n}\n.ubs_profile-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid var(--ubs-error-ligh-red);\n}\n.ubs_profile-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 30px 0 30px 30px;\n  font-family: var(--secondary-font);\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .btn-ubs-outline-success[_ngcontent-%COMP%] {\n  color: var(--ubs-button-light-green);\n  border-color: var(--ubs-button-light-green);\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .btn-ubs-outline-success[_ngcontent-%COMP%]:hover {\n  color: var(--ubs-secondary-dark-grey);\n  background-color: var(--ubs-button-light-green);\n  border-color: var(--ubs-button-light-green);\n}\n.ubs_profile-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 30px 0 30px 15px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: black;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 13px 13px 13px 0;\n  color: black;\n  font-size: 16px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .account[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 20px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .account[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .account[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 15px 30px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .submit-btns[_ngcontent-%COMP%] {\n  width: 905px;\n  display: flex;\n  justify-content: flex-end;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: var(--ubs-primary-grey);\n  border: 1px solid var(--ubs-primary-grey);\n  color: var(--ubs-primary-white);\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .ubs_profile-footer[_ngcontent-%COMP%] {\n  width: 905px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .ubs_profile-footer[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n.ubs_profile-container[_ngcontent-%COMP%]   .ubs_profile-footer[_ngcontent-%COMP%]   .footer-btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);\n}\n@media (max-width: 1439px) {\n  .ubs_profile-container[_ngcontent-%COMP%] {\n    max-width: 800px;\n  }\n}\n@media (max-width: 992px) {\n  .ubs_profile-container[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWJzLXVzZXIvdWJzLXVzZXItcHJvZmlsZS1wYWdlL0Q6XFxTb2Z0U2VydmVfQWNhZGVteVxcR3JlZW5DaXR5XFxnaC1wYWdlc1xcR3JlZW5DaXR5Q2xpZW50L3NyY1xcYXBwXFx1YnMtdXNlclxcdWJzLXVzZXItcHJvZmlsZS1wYWdlXFx1YnMtdXNlci1wcm9maWxlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Vicy11c2VyL3Vicy11c2VyLXByb2ZpbGUtcGFnZS91YnMtdXNlci1wcm9maWxlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDQ0o7QURDSTtFQUNFLGlCQUFBO0FDQ047QURHRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7QUNESjtBREdJO0VBQ0UsaUJBQUE7QUNETjtBREtFO0VBQ0UsYUFBQTtBQ0hKO0FES0k7RUFDRSxrQkFBQTtBQ0hOO0FET0U7RUFDRSxTQUFBO0VBQ0EsZ0NBQUE7QUNMSjtBRFFFO0VBQ0UsY0FBQTtBQ05KO0FEU0U7RUFDRSwyQ0FBQTtBQ1BKO0FEVUU7RUFDRSx3QkFBQTtFQUNBLGtDQUFBO0FDUko7QURXRTtFQUNFLG9DQUFBO0VBQ0EsMkNBQUE7QUNUSjtBRFlFO0VBQ0UscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLDJDQUFBO0FDVko7QURhRTtFQUNFLGlCQUFBO0VBQ0Esd0JBQUE7QUNYSjtBRGNFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDWko7QURnQkk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDZE47QURrQkU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ2hCSjtBRGtCSTtFQUNFLFdBQUE7QUNoQk47QURtQkk7RUFDRSxpQkFBQTtBQ2pCTjtBRHFCRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNuQko7QURzQkU7RUFDRSx5Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsK0JBQUE7QUNwQko7QUR1QkU7RUFDRSxZQUFBO0FDckJKO0FEdUJJO0VBQ0UsWUFBQTtBQ3JCTjtBRHdCSTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDJDQUFBO0FDdEJOO0FEMkJBO0VBQ0U7SUFDRSxnQkFBQTtFQ3hCRjtBQUNGO0FEMkJBO0VBQ0U7SUFDRSxnQkFBQTtFQ3pCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdWJzLXVzZXIvdWJzLXVzZXItcHJvZmlsZS1wYWdlL3Vicy11c2VyLXByb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51YnNfcHJvZmlsZS1jb250YWluZXIge1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuXHJcbiAgLnVic19wcm9maWxlLWhlYWRlciB7XHJcbiAgICB3aWR0aDogOTA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIC5oZWFkZXItdGV4dCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmlucHV0LWdyb3VwIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogOTA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5cclxuICAgIGZvcm0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ob3VzZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtc2Vjb25kYXJ5LWdyZXkpO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG5cclxuICBpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdWJzLWVycm9yLWxpZ2gtcmVkKTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDMwcHggMCAzMHB4IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi11YnMtb3V0bGluZS1zdWNjZXNzIHtcclxuICAgIGNvbG9yOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdWJzLWJ1dHRvbi1saWdodC1ncmVlbik7XHJcbiAgfVxyXG5cclxuICAuYnRuLXVicy1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1zZWNvbmRhcnktZGFyay1ncmV5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAzMHB4IDAgMzBweCAxNXB4O1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1ncm91cCB7XHJcbiAgICBwIHtcclxuICAgICAgcGFkZGluZzogMTNweCAxM3B4IDEzcHggMDtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWNjb3VudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDE1cHggMzBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdWJtaXQtYnRucyB7XHJcbiAgICB3aWR0aDogOTA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11YnMtcHJpbWFyeS1ncmV5KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xyXG4gICAgY29sb3I6IHZhcigtLXVicy1wcmltYXJ5LXdoaXRlKTtcclxuICB9XHJcblxyXG4gIC51YnNfcHJvZmlsZS1mb290ZXIge1xyXG4gICAgd2lkdGg6IDkwNXB4O1xyXG5cclxuICAgIC5mb290ZXItdGV4dCB7XHJcbiAgICAgIG1hcmdpbjogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLWJ0bnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQzOXB4KSB7XHJcbiAgLnVic19wcm9maWxlLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLnVic19wcm9maWxlLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIH1cclxufVxyXG4iLCIudWJzX3Byb2ZpbGUtY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG4udWJzX3Byb2ZpbGUtY29udGFpbmVyIC51YnNfcHJvZmlsZS1oZWFkZXIge1xuICB3aWR0aDogOTA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi51YnNfcHJvZmlsZS1jb250YWluZXIgLnVic19wcm9maWxlLWhlYWRlciAuaGVhZGVyLXRleHQge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi51YnNfcHJvZmlsZS1jb250YWluZXIgLmlucHV0LWdyb3VwIHtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDkwNXB4O1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuLnVic19wcm9maWxlLWNvbnRhaW5lciAuaW5wdXQtZ3JvdXAgZm9ybSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLnVic19wcm9maWxlLWNvbnRhaW5lciAuaG91c2Uge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnVic19wcm9maWxlLWNvbnRhaW5lciAuaG91c2UgZGl2IHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuLnVic19wcm9maWxlLWNvbnRhaW5lciBsYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXVicy1zZWNvbmRhcnktZ3JleSk7XG59XG4udWJzX3Byb2ZpbGUtY29udGFpbmVyIGlucHV0IHtcbiAgZm9udC1zaXplOiAxZW07XG59XG4udWJzX3Byb2ZpbGUtY29udGFpbmVyIGlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXVicy1lcnJvci1saWdoLXJlZCk7XG59XG4udWJzX3Byb2ZpbGUtY29udGFpbmVyIGJ1dHRvbiB7XG4gIG1hcmdpbjogMzBweCAwIDMwcHggMzBweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeS1mb250KTtcbn1cbi51YnNfcHJvZmlsZS1jb250YWluZXIgLmJ0bi11YnMtb3V0bGluZS1zdWNjZXNzIHtcbiAgY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xuICBib3JkZXItY29sb3I6IHZhcigtLXVicy1idXR0b24tbGlnaHQtZ3JlZW4pO1xufVxuLnVic19wcm9maWxlLWNvbnRhaW5lciAuYnRuLXVicy1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tdWJzLXNlY29uZGFyeS1kYXJrLWdyZXkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS11YnMtYnV0dG9uLWxpZ2h0LWdyZWVuKTtcbn1cbi51YnNfcHJvZmlsZS1jb250YWluZXIgaDUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAzMHB4IDAgMzBweCAxNXB4O1xufVxuLnVic19wcm9maWxlLWNvbnRhaW5lciBoMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG59XG4udWJzX3Byb2ZpbGUtY29udGFpbmVyIC5mb3JtLWdyb3VwIHAge1xuICBwYWRkaW5nOiAxM3B4IDEzcHggMTNweCAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi51YnNfcHJvZmlsZS1jb250YWluZXIgLmFjY291bnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDIwcHg7XG59XG4udWJzX3Byb2ZpbGUtY29udGFpbmVyIC5hY2NvdW50IGltZyB7XG4gIHdpZHRoOiA1MHB4O1xufVxuLnVic19wcm9maWxlLWNvbnRhaW5lciAuYWNjb3VudCBwIHtcbiAgbWFyZ2luOiAxNXB4IDMwcHg7XG59XG4udWJzX3Byb2ZpbGUtY29udGFpbmVyIC5zdWJtaXQtYnRucyB7XG4gIHdpZHRoOiA5MDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi51YnNfcHJvZmlsZS1jb250YWluZXIgYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWJzLXByaW1hcnktZ3JleSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXVicy1wcmltYXJ5LWdyZXkpO1xuICBjb2xvcjogdmFyKC0tdWJzLXByaW1hcnktd2hpdGUpO1xufVxuLnVic19wcm9maWxlLWNvbnRhaW5lciAudWJzX3Byb2ZpbGUtZm9vdGVyIHtcbiAgd2lkdGg6IDkwNXB4O1xufVxuLnVic19wcm9maWxlLWNvbnRhaW5lciAudWJzX3Byb2ZpbGUtZm9vdGVyIC5mb290ZXItdGV4dCB7XG4gIG1hcmdpbjogMjBweDtcbn1cbi51YnNfcHJvZmlsZS1jb250YWluZXIgLnVic19wcm9maWxlLWZvb3RlciAuZm9vdGVyLWJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDM5cHgpIHtcbiAgLnVic19wcm9maWxlLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC51YnNfcHJvZmlsZS1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cbn0iXX0= */"] });
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