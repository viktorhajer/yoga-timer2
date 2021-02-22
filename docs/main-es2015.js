(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_sadhana_1_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/sadhana.1.db */ "./src/app/models/sadhana.1.db.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _directives_stepper_scroll_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/stepper-scroll.directive */ "./src/app/directives/stepper-scroll.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_textarea_resize_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/textarea-resize.directive */ "./src/app/directives/textarea-resize.directive.ts");










const _c0 = ["stepper"];
const _c1 = ["tempoElement"];
function AppComponent_mat_step_17_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const task_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r6.title);
} }
function AppComponent_mat_step_17_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r6.repetition);
} }
function AppComponent_mat_step_17_textarea_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r6.description);
} }
function AppComponent_mat_step_17_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const task_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/img/", task_r6.imgSrc, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AppComponent_mat_step_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-step", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_mat_step_17_ng_template_1_Template, 1, 1, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_mat_step_17_p_2_Template, 2, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_mat_step_17_textarea_3_Template, 2, 1, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_mat_step_17_img_5_Template, 1, 1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("completed", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r6.repetition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r6.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r6.imgSrc);
} }
function AppComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.toggleCountDown(120); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("color", ctx_r3.countDownTimer ? "primary" : "accent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.getFormattedCountDown(120), " ");
} }
function AppComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.toggleCountDown(180); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("color", ctx_r4.countDownTimer ? "primary" : "accent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.getFormattedCountDown(180), " ");
} }
function AppComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.toggleCountDown(300); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("color", ctx_r5.countDownTimer ? "primary" : "accent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.getFormattedCountDown(300), " ");
} }
const FREQUENCY = 1000;
class AppComponent {
    constructor() {
        this.sadhana = _models_sadhana_1_db__WEBPACK_IMPORTED_MODULE_1__["SADHANA"];
        this.sequenceIndex = 0;
        this.countDownNumber = 180;
        this.countDownLimit = 180;
    }
    static formatTimePart(value) {
        return (value >= 10 ? '' : '0') + value;
    }
    get sequence() {
        return this.sadhana.sequences[this.sequenceIndex];
    }
    nextSequence() {
        if ((this.sequenceIndex + 1) !== this.sadhana.sequences.length) {
            this.sequenceIndex++;
            this.stepper.selectedIndex = 0;
        }
    }
    previousSequence() {
        if (this.sequenceIndex !== 0) {
            this.sequenceIndex--;
            this.stepper.selectedIndex = 0;
        }
    }
    getProgress(stepIndex = 0) {
        return Math.round((stepIndex + 1) / this.sequence.tasks.length * 100);
    }
    toggleTempo() {
        if (this.tempo) {
            clearInterval(this.tempo);
            this.tempo = null;
        }
        else {
            this.tempo = setInterval(() => {
                this.beep();
            }, FREQUENCY);
        }
    }
    toggleCountDown(limit = 180) {
        this.countDownLimit = limit;
        this.countDownNumber = this.countDownLimit;
        if (this.countDownTimer) {
            clearInterval(this.countDownTimer);
            this.countDownTimer = null;
        }
        else {
            this.countDownTimer = setInterval(() => {
                this.countDownNumber--;
                if (!this.countDownNumber) {
                    this.toggleCountDown();
                    this.beep();
                }
            }, FREQUENCY);
        }
    }
    getFormattedCountDown(limit) {
        const clock = this.countDownTimer ? this.countDownNumber : limit;
        const mins = Math.floor(clock / 60);
        const secs = clock % 60;
        return AppComponent.formatTimePart(mins) + ':' + AppComponent.formatTimePart(secs);
    }
    beep() {
        this.tempoElementRef.nativeElement.play();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tempoElementRef = _t.first);
    } }, decls: 30, vars: 10, consts: [[1, "page-content"], ["src", "assets/sound/cell-phone-beep.mp3"], ["tempoElement", ""], [1, "main-title"], [1, "step-control"], ["mat-mini-fab", "", "color", "primary", 3, "disabled", "click"], ["mode", "determinate", 3, "value"], [3, "appStepperScroll"], ["stepper", ""], [3, "completed", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "color", "click"], ["mat-raised-button", "", 3, "color", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "completed"], ["matStepLabel", ""], ["class", "repetition", 4, "ngIf"], ["appAutoResize", "", 4, "ngIf"], [1, "image-container"], [3, "src", 4, "ngIf"], [1, "repetition"], ["appAutoResize", ""], [3, "src"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "audio", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return _r1.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "navigate_before");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return _r1.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "navigate_next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-progress-bar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-vertical-stepper", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_mat_step_17_Template, 6, 4, "mat-step", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_20_listener() { return ctx.toggleTempo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Tempo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppComponent_button_22_Template, 2, 2, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_button_23_Template, 2, 2, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AppComponent_button_24_Template, 2, 2, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_26_listener() { return ctx.previousSequence(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_28_listener() { return ctx.nextSequence(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sequence.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.selectedIndex === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.selectedIndex === ctx.sequence.tasks.length - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.getProgress(_r1.selectedIndex));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appStepperScroll", _r1.selectedIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sequence.tasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("color", ctx.tempo ? "primary" : "accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.countDownTimer || ctx.countDownLimit === 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.countDownTimer || ctx.countDownLimit === 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.countDownTimer || ctx.countDownLimit === 300);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatVerticalStepper"], _directives_stepper_scroll_directive__WEBPACK_IMPORTED_MODULE_6__["StepperScroll"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepLabel"], _directives_textarea_resize_directive__WEBPACK_IMPORTED_MODULE_8__["TextareaResize"]], styles: ["header[_ngcontent-%COMP%] {\n  background: #000000;\n}\nheader[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0 0 0 20px;\n}\nfooter[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100vw;\n  bottom: 0;\n  background: #000000;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.step-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.step-control[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  margin: 4px;\n  padding: 0 6px;\n  min-width: auto;\n}\ntextarea[_ngcontent-%COMP%] {\n  margin: 0px;\n  width: 100%;\n  background: no-repeat;\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  border: none;\n  color: #bdbdbd;\n  resize: none;\n}\ntextarea[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border: none;\n}\n.repetition[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 500;\n  padding: 0;\n  margin: 0;\n}\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: calc(95vw - 60px);\n  border: 1px solid #888;\n  padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXERldmVsb3BtZW50XFx5b2dhLXRpbWVyMi9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUNDTjtBRElBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNERjtBREdFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDREo7QURLQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx3REFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0ZGO0FES0E7RUFDRSx3QkFBQTtFQUNBLFlBQUE7QUNGRjtBREtBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNGRjtBRE1FO0VBQ0UsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG5cbiAgLm1haW4tdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBoMyB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwIDAgMCAyMHB4O1xuICAgIH1cbiAgfVxufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdGVwLWNvbnRyb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAubWF0LWJ1dHRvbi1iYXNlIHtcbiAgICBtYXJnaW46IDRweDtcbiAgICBwYWRkaW5nOiAwIDZweDtcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gIH1cbn1cblxudGV4dGFyZWEge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdDtcbiAgZm9udDogNDAwIDEycHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2JkYmRiZDtcbiAgcmVzaXplOiBub25lO1xufVxuXG50ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ucmVwZXRpdGlvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IGNhbGMoOTV2dyAtIDYwcHgpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgcGFkZGluZzogM3B4O1xuICB9XG59XG4iLCJoZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuaGVhZGVyIC5tYWluLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaGVhZGVyIC5tYWluLXRpdGxlIGgzIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdGVwLWNvbnRyb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zdGVwLWNvbnRyb2wgLm1hdC1idXR0b24tYmFzZSB7XG4gIG1hcmdpbjogNHB4O1xuICBwYWRkaW5nOiAwIDZweDtcbiAgbWluLXdpZHRoOiBhdXRvO1xufVxuXG50ZXh0YXJlYSB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0O1xuICBmb250OiA0MDAgMTJweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjYmRiZGJkO1xuICByZXNpemU6IG5vbmU7XG59XG5cbnRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5yZXBldGl0aW9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiBjYWxjKDk1dncgLSA2MHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgcGFkZGluZzogM3B4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stepper']
        }], tempoElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['tempoElement', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _directives_textarea_resize_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/textarea-resize.directive */ "./src/app/directives/textarea-resize.directive.ts");
/* harmony import */ var _directives_stepper_scroll_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/stepper-scroll.directive */ "./src/app/directives/stepper-scroll.directive.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _directives_textarea_resize_directive__WEBPACK_IMPORTED_MODULE_11__["TextareaResize"], _directives_stepper_scroll_directive__WEBPACK_IMPORTED_MODULE_12__["StepperScroll"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _directives_textarea_resize_directive__WEBPACK_IMPORTED_MODULE_11__["TextareaResize"], _directives_stepper_scroll_directive__WEBPACK_IMPORTED_MODULE_12__["StepperScroll"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/directives/stepper-scroll.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/directives/stepper-scroll.directive.ts ***!
  \********************************************************/
/*! exports provided: StepperScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperScroll", function() { return StepperScroll; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StepperScroll {
    ngOnChanges(changes) {
        if (changes.appStepperScroll) {
            setTimeout(() => {
                const label = document.querySelector(`#cdk-step-label-0-${changes.appStepperScroll.currentValue}`);
                if (label) {
                    label.scrollIntoView({ block: 'start', inline: 'start', behavior: 'smooth' });
                }
            }, 150);
        }
    }
}
StepperScroll.ɵfac = function StepperScroll_Factory(t) { return new (t || StepperScroll)(); };
StepperScroll.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: StepperScroll, selectors: [["", "appStepperScroll", ""]], inputs: { appStepperScroll: "appStepperScroll" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepperScroll, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appStepperScroll]'
            }]
    }], null, { appStepperScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/directives/textarea-resize.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/textarea-resize.directive.ts ***!
  \*********************************************************/
/*! exports provided: TextareaResize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaResize", function() { return TextareaResize; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TextareaResize {
    constructor(element) {
        this.element = element;
        setTimeout(() => {
            this.element.nativeElement.style.height = (this.element.nativeElement.scrollHeight) + 'px';
        }, 10);
    }
}
TextareaResize.ɵfac = function TextareaResize_Factory(t) { return new (t || TextareaResize)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
TextareaResize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TextareaResize, selectors: [["", "appAutoResize", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextareaResize, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAutoResize]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/sadhana.1.db.ts":
/*!****************************************!*\
  !*** ./src/app/models/sadhana.1.db.ts ***!
  \****************************************/
/*! exports provided: SADHANA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SADHANA", function() { return SADHANA; });
const ASANA = {
    title: 'Ászanák',
    tasks: [
        {
            title: 'Szupta Urdvahasztászana',
            description: `Savászanában érzetfigyelés, majd karemelés, nyújtózás a Szupta Urdvahasztászana helyzetbe.\n\nFigyeld a derekad talajra nyomására, lábfejeket húzd pipába és a sarokból nyújtsd a lábakat. Emeld ki a mellkasod, de vidd le a hátadat a talajra. Tenyerek egymás felé néznek. 10 légzésig tartani, közben folyamatosan korrigálni a tartást.`,
            repetition: '10 légzésig',
            imgSrc: 'szupta_urdvahasztaszana.jpg'
        }, {
            title: 'Szupta Pavanamuktászana (fekvő széloldó póz)',
            description: `Fekvő alaphelyzetből hajlítsd a jobb térdet, húzd a combot a mellkashoz kilégzésre. Az ujjakat a lábszáron kulcsold össze. Közelítsd a homlokod a térdedhez. A bal láb maradjon nyújtva. Belégzés miközben a lábat visszaengeded. Végezd el ellentétes lábbal is a gyakorlatot.`,
            repetition: '5-5x',
            imgSrc: 'szupta_pavanamuktaszana.jpg'
        }, {
            title: 'Szupta Udarakarshanászana (fekvő helyzetű hasnyújtás)',
            description: `Alaphelyzet. A térdeket hajlítva helyezd a talpakat a talajra. A gyakorlat alatt a térded és a lábfejed tartsd összezárva. Az ujjakat kulcsold össze a tarkód alatt. Kilégzésre engedd le a térdeket jobbra, közelítsd a talajhoz, egyidejűleg fordítsd a fejed balra. Véghelyzetben tartsd kint a levegőt. A fejed és a lábad vidd középhelyzetre belégzésre. Végezd el ellentétes irányba is a gyakorlatot. `,
            repetition: '5-5x',
            imgSrc: 'szupta_udarakarsanaszana.jpg'
        }, {
            title: 'Naukászana (csónak póz)',
            description: `Alaphelyzet. Belégzésre egyszerre emeld a lábakat, karokat, törzset és a fejet a talajról. A vállak és a lábak legfeljebb 15 cm-re emelkedjenek fel. Tartsd ki a véghelyzetet. Lélegezz ki és egyszerre lazítsd el az egész testet. `,
            repetition: '5x',
            imgSrc: 'naukaszana.jpg'
        }, {
            title: 'Csakki csalanászana (malomkörzés)',
            description: `Kilégzés alatt oldalt félkörben előre, belégzés alatt a másik oldalon visszafelé körzünk. Figyelj a köldöktájék (Manipura) érzeteire. Ez a gyakorlat energiablokk oldó, a manipura csakra blokkját oldja és egyben fokozza a vitalitást.`,
            repetition: '5-5x',
            imgSrc: 'csakki_csalanaszana.jpg'
        }, {
            title: 'Pascsimóttánászana (hátsó nyújtó póz)',
            description: `Próbáld erőltetés mentesen végezni, ha reggel még nehezen megy, akkor használj hevedert, vagy tedd a fejed a székre és talább 20 légzésig maradj benne. Ez elcsendesíti az elmét, csökkenti a tüzet. Figyelj a nyugdot légzésre és vidd a figyelmedet egyre jobban befelé a légzésről egyéb belső érzetekre. `,
            repetition: '20 légzésig',
            imgSrc: 'pascsimottanaszana.jpg'
        }, {
            title: 'Maricsjászana',
            description: `Ülő csavarás, nyújtott lábas ülő helyzetből indulsz, majd egyik lábadat behajlítod és a másik láb térde mellé teszed a lábfejet, megfogod a térdet ellenkező kézzel és kilégzés alatt fordulsz hátra. Figyelj a gerinc nyújtására minden belégzés alatt, majd minden kilégzés alatt kicsit még próbálj csavarodni. Ne erőltesd. `,
            repetition: '10-10 légzésig',
            imgSrc: 'maricsjaszana.jpg'
        }, {
            title: 'Khatu Pranam',
            repetition: '1-1 kör mindkét oldalra',
            imgSrc: 'jme.jpg'
        }, {
            title: 'Adho Mukha Svanászana (kutyapóz)',
            description: `10 légzésig tartani, majd előre lépsz az egyik lábbal és felállsz álló helyzetbe. Vidd a súlypontot a lábak felé, sarkakat nyújtsd a talaj felé, amivel fokozod a lábak nyújtását.`,
            repetition: '10 légzésig',
            imgSrc: 'adho_mukha_svanaszana.jpg'
        }, {
            title: 'Tirjaka Tadászana (hajladozó pálmafa póz)',
            description: `Kilégzés alatt oldalra, majd belégzésre vissza középre, majd kilégzés alatt a másik oldalra és belégzésre vissza.`,
            repetition: '5x',
            imgSrc: 'tirjaka_tadaszana.jpg'
        }, {
            title: 'Utkatászana (széktartás)',
            description: `A lábak teljesen össze vannak zárva, csípőt billentsd, farokcsontot húzd magad alá, majd nyújtsd a hátadat, karokat felfelé. A térdek finom összenyomásával tudod tartani könnyebben a pózt. Sarkadat könyvre teheted.`,
            repetition: '5-10 légzésig',
            imgSrc: 'utkataszana.jpg'
        }, {
            title: 'Trikónászana (háromszög póz)',
            description: `Figyelemösszpontosítás a talp és talaj közötti érintkezésen a hátsó lábnál (külső talpél, sarok). Hátsó lábat falhoz is nyomhatod.`,
            repetition: '2x dinamikusan, majd 10 légzésig mindkét oldalra',
            imgSrc: 'trikonaszana.jpg'
        }, {
            title: 'Virabhadrászana (Hősi póz 2.)',
            description: `Figyelemösszpontosítás a talp és talaj közötti érintkezésen a hátsó lábnál (külső talpél, sarok). Hátsó lábat falhoz is nyomhatod.`,
            repetition: '2x dinamikusan, majd 10 légzésig mindkét oldalra',
            imgSrc: 'virabhadraszana.jpg'
        }, {
            title: 'Bhudzsangászana (kobra póz)',
            description: `Kezek a mellkas mellett. Csak addig emelkedj, hogy az alhas a talajon maradjon.`,
            repetition: '3x dinamikusan, majd 10 légzésig mindkét oldalra',
            imgSrc: 'bhudzsangaszana.jpg'
        }, {
            title: 'Viparíta Karaní Ászana (félgyertya)',
            repetition: '2-5 percig',
            imgSrc: 'viparita_karani_aszana.jpg'
        }, {
            title: 'Savászana, relaxáció',
            repetition: '5 percig',
            imgSrc: 'savaszana.jpg'
        }
    ]
};
const PRANAYAMA_PREPARATION = {
    title: 'Pránajáma előkészítés',
    tasks: [
        {
            title: 'Szúrja namszkár krija',
            description: `1. Zárt állásban, karjaink kinyújtva és tenyereink oldalról a combunkat érintik. Belélegzéssel lőre fordítjuk a tenyereinket, kilégzéssel tenyereink ismét a combunkat érintik. \n\n2. Belélegzésünk első felében tenyereinket előre fordítjuk és a második fele alatt ívben Namaszkár mudrába összeillesztjük. Kilégzés első reszében leeresztjük karjainkat, tenyerek előre néznek, második felében ismét érintik a combunkat. \n\n3. Belégzésünk első harmadában tenyereinket előre fordítjuk és hasi légzőmozgással lélegzünk be, második harmadában Namaszkár mudra és mellkasi légzés, harmadik harmadnál karokat fejünk fölé emeljük és összeillesztjük a tenyereinket, kulcsonti légzéssel lélegzünk. \n\n4. A belégzés azonos az előző gyakorlattal. Kilégzésnél hátrahajlunk és egy harmadát a levegőnek kilélegezzük. A kilégzés második harmadában kitárjuk a karjainkat és a harmadik harmadban leeresztjük a karjainkat a kinduló helyzetbe.`,
            repetition: '4 kör minden fázisból '
        }, {
            title: 'Uddijána bandha',
            description: `Áll egyenesen, terpeszd szét a lábad csípő szélességben. Hajolj előre, helyezd a kezeket a combokra vagy a térdekre. Lélegezz ki teljesen és tartsd kint a levegőt. \nHúzd szét a mellkasod mintha belélegeznél (vállakat kissé hátra), de ne engedj levegőt beáramolni a légutakba. Húzd össze a hangrést, így a hasad be fog húzódni és azt fogod érezni, hogy a has a felső részét behúzod a bordák felé. \nTartsd meg a teljes behúzást 5-20 másodpercig a kapacitásod szerint. Azután térj vissza.\nLazítsd el a hasad, lélegezz be és egyenesedj fel. \nMindig üres hassal gyakorold. `,
            repetition: '3x'
        }, {
            title: 'Agniszára krija',
            description: `Alaphelyzet mint az Uddijána bandhánál. Anélkül, hogy belélegeznél nyomd ki a hasad, mintha egy léggömböt fújnál fel, tartsd meg 2 másodpercig, majd újra húzd be a hasad, tartsd meg 2 másodpercig. Ismételd ezt 10-15x, majd lélegezz be.`,
            repetition: '10-15 ismétlés 3x'
        }, {
            title: 'Szimha mudra (Szimhászana)',
            description: `Ülj vadzsrászanában (sarokülésben). Emeld fel a ülőcsontokat kissé és keresztezd a lábfejeket bokában, hogy a jobb lábfej a bal fölé kerüljön, mint egy olló. Majd ülj vissza a sarkakra, és a kezeket az azonos térden nyugtasd szétterpesztett ujjakkal.\nLélegezz be.\nNyújtsd ki teljesen a nyelvedet szájon át hangosan kilélegezve, a tekinteted a homlokod közepére irányítsd, lapockákat húzd össze, a mellkasod nyisd.\nMiután teljesen kilélegeztél, húzd vissza a nyelvet, csukd be a szád és lazíts el minden feszültséget a testben, a korokban. `,
            repetition: '3-5x'
        }, {
            title: 'Dzsíhva bandha (nyelvzár)',
            description: `A nyelv hegyét vidd a felső fogsorhoz és szívd fel a nyelv közepét a szájpadláshoz. Eközben a nyakizmok erősen megfeszülnek. \nCsettintéshez készülve a csettintő hang előtt megállítjuk a nyelvet a nyelvféket teljsen felhúzva. \nAmikor kezdőként gyakoroljuk, akkor nyugodtan csettinthetünk a nyelvünkkel. `,
            repetition: '5x'
        }, {
            title: 'Brahma mudra',
            description: `Üllj kényelmes meditációs ülésben, kezeidet tedd tenyérrel felfelé a térdekre, vagy combokra. Lazítsd a vállaidat és a karjaidat. Fejed egyenes. Tudatosítsd a légzésedet. Egy percig végezz nyugodt, egyenletes, lassú ki- és belégzést.Csendesítsd el az elméd, vidd a figyelmed befelé.\nMegtartva a nyugodt, egyenletes, folyamatos légzésed, több légzés alatt fordítsd el balra a fejed, miközben a nyitott szemeddel is erősen balra nézel. Annyira fordítsd a fejed, amennyire csak tudod. Ugyanilyen tempóban és tudatosságban fordítsd vissza a fejed középhelyzetbe (szemek továbbra is balra néznek). \nUgyanezt ismételd meg jobbra, a szemeidet is jobboldalra irányítva. \nMajd középhelyzetbe visszatérve nézz az orrod hegyére (naszikagra dristhi) és emeld a fejedet hátra folyamatosan nyújtva tartva a nyakat. \nMajd a mozgás felső végpontján a szemeidet állítsd át a homlokközéppontra (brúmadja dristhi) és így hajtsd le a fejet folyamatosan nyújtva tartva a nyakat úgy, hogy az állat a mellkasi gödörhöz érjen. \nEkkor csukd be a szemed, lazítsd el és úgy hozd vissza a kiinduló helyzetbe. `,
            repetition: '3x'
        }, {
            title: 'Kapálabháti krija (hiperventillációs légzés)',
            description: `Üljünk egy kényelmes meditációs ülésben, kéztartás lehet a csin vagy gjána mudra. Hunyjuk be a szemünket és lazítsuk el az egész testet. \nLélegezzünk be mélyen, tágítva a hasat, majd lélegezzünk ki a hasizmok erőteljes összehúzásával, gyors berántásával. Ekkor gyorsan kiáramlik a levegő. Olyan, mintha egy gyertyát akarnánk elfújni az orrunkon keresztül. \nNe erőltessük. A következő belégzés úgy történik, hogy passzívan hagyjuk a hasizmokat tágulni. \nAz utolsó gyors kilégzés után tartsuk kint a levegőt és végezzünk lélegzetvisszatartást. Amikor légszomj keletkezik, lélegezzünk be. \nFontos, hogy a légzés a hasból történjen, ne a mellkasból. `,
            repetition: '3x'
        }
    ]
};
const PRANAYAMA = {
    title: 'Pránajáma',
    tasks: [
        {
            title: 'Uddzsáji pránajáma',
            description: `...`,
            repetition: '1:2 arányban 20x'
        }, {
            title: 'Brahmarí pránajáma (zümmögő méh lélegzés)',
            description: `Kényelmes belégzés után hosszú jóleső kilégzés, amíg a levegőd tart az "M" hangot énelekve egy hangon. Megszoktatja veled a lágy finom kilégzést.`,
            repetition: '20x'
        }
    ]
};
const SADHANA = {
    created: new Date('2021.02.19'),
    sequences: [ASANA, PRANAYAMA_PREPARATION, PRANAYAMA]
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Development\yoga-timer2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map