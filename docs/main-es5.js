function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_sadhana_1_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./models/sadhana.1.db */
    "./src/app/models/sadhana.1.db.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _directives_stepper_scroll_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./directives/stepper-scroll.directive */
    "./src/app/directives/stepper-scroll.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _directives_textarea_resize_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./directives/textarea-resize.directive */
    "./src/app/directives/textarea-resize.directive.ts");

    var _c0 = ["stepper"];
    var _c1 = ["tempoElement"];

    function AppComponent_mat_step_17_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var task_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r6.title);
      }
    }

    function AppComponent_mat_step_17_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r6.repetition);
      }
    }

    function AppComponent_mat_step_17_textarea_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r6.description);
      }
    }

    function AppComponent_mat_step_17_img_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
      }

      if (rf & 2) {
        var task_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/img/", task_r6.imgSrc, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AppComponent_mat_step_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-step", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_mat_step_17_ng_template_1_Template, 1, 1, "ng-template", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_mat_step_17_p_2_Template, 2, 1, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_mat_step_17_textarea_3_Template, 2, 1, "textarea", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_mat_step_17_img_5_Template, 1, 1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("completed", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r6.repetition);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r6.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r6.imgSrc);
      }
    }

    function AppComponent_button_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_22_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.toggleCountDown(120);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("color", ctx_r3.countDownTimer ? "primary" : "accent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.getFormattedCountDown(120), " ");
      }
    }

    function AppComponent_button_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_23_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.toggleCountDown(180);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("color", ctx_r4.countDownTimer ? "primary" : "accent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.getFormattedCountDown(180), " ");
      }
    }

    function AppComponent_button_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_24_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.toggleCountDown(300);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("color", ctx_r5.countDownTimer ? "primary" : "accent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.getFormattedCountDown(300), " ");
      }
    }

    var FREQUENCY = 1000;

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.sadhana = _models_sadhana_1_db__WEBPACK_IMPORTED_MODULE_1__["SADHANA"];
        this.sequenceIndex = 0;
        this.countDownNumber = 180;
        this.countDownLimit = 180;
      }

      _createClass(AppComponent, [{
        key: "sequence",
        get: function get() {
          return this.sadhana.sequences[this.sequenceIndex];
        }
      }, {
        key: "nextSequence",
        value: function nextSequence() {
          if (this.sequenceIndex + 1 !== this.sadhana.sequences.length) {
            this.sequenceIndex++;
            this.stepper.selectedIndex = 0;
          }
        }
      }, {
        key: "previousSequence",
        value: function previousSequence() {
          if (this.sequenceIndex !== 0) {
            this.sequenceIndex--;
            this.stepper.selectedIndex = 0;
          }
        }
      }, {
        key: "getProgress",
        value: function getProgress() {
          var stepIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          return Math.round((stepIndex + 1) / this.sequence.tasks.length * 100);
        }
      }, {
        key: "toggleTempo",
        value: function toggleTempo() {
          var _this = this;

          if (this.tempo) {
            clearInterval(this.tempo);
            this.tempo = null;
          } else {
            this.tempo = setInterval(function () {
              _this.beep();
            }, FREQUENCY);
          }
        }
      }, {
        key: "toggleCountDown",
        value: function toggleCountDown() {
          var _this2 = this;

          var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 180;
          this.countDownLimit = limit;
          this.countDownNumber = this.countDownLimit;

          if (this.countDownTimer) {
            clearInterval(this.countDownTimer);
            this.countDownTimer = null;
          } else {
            this.countDownTimer = setInterval(function () {
              _this2.countDownNumber--;

              if (!_this2.countDownNumber) {
                _this2.toggleCountDown();

                _this2.beep();
              }
            }, FREQUENCY);
          }
        }
      }, {
        key: "getFormattedCountDown",
        value: function getFormattedCountDown(limit) {
          var clock = this.countDownTimer ? this.countDownNumber : limit;
          var mins = Math.floor(clock / 60);
          var secs = clock % 60;
          return AppComponent.formatTimePart(mins) + ':' + AppComponent.formatTimePart(secs);
        }
      }, {
        key: "beep",
        value: function beep() {
          this.tempoElementRef.nativeElement.play();
        }
      }], [{
        key: "formatTimePart",
        value: function formatTimePart(value) {
          return (value >= 10 ? '' : '0') + value;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tempoElementRef = _t.first);
        }
      },
      decls: 30,
      vars: 10,
      consts: [[1, "page-content"], ["src", "assets/sound/cell-phone-beep.mp3"], ["tempoElement", ""], [1, "main-title"], [1, "step-control"], ["mat-mini-fab", "", "color", "primary", 3, "disabled", "click"], ["mode", "determinate", 3, "value"], [3, "appStepperScroll"], ["stepper", ""], [3, "completed", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "color", "click"], ["mat-raised-button", "", 3, "color", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "completed"], ["matStepLabel", ""], ["class", "repetition", 4, "ngIf"], ["appAutoResize", "", 4, "ngIf"], [1, "image-container"], [3, "src", 4, "ngIf"], [1, "repetition"], ["appAutoResize", ""], [3, "src"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "audio", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

            return _r1.previous();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "navigate_before");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

            return _r1.next();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_20_listener() {
            return ctx.toggleTempo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Tempo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppComponent_button_22_Template, 2, 2, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_button_23_Template, 2, 2, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AppComponent_button_24_Template, 2, 2, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_26_listener() {
            return ctx.previousSequence();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_28_listener() {
            return ctx.nextSequence();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

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
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatVerticalStepper"], _directives_stepper_scroll_directive__WEBPACK_IMPORTED_MODULE_6__["StepperScroll"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepLabel"], _directives_textarea_resize_directive__WEBPACK_IMPORTED_MODULE_8__["TextareaResize"]],
      styles: ["header[_ngcontent-%COMP%] {\n  background: #000000;\n}\nheader[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0 0 0 20px;\n}\nfooter[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 2px;\n  background: #000000;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.step-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.step-control[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  margin: 4px;\n  padding: 0 6px;\n  min-width: auto;\n}\ntextarea[_ngcontent-%COMP%] {\n  margin: 0px;\n  width: 100%;\n  background: no-repeat;\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  border: none;\n  color: #bdbdbd;\n  resize: none;\n}\ntextarea[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border: none;\n}\n.repetition[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 500;\n  padding: 0;\n  margin: 0;\n}\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: calc(95vw - 60px);\n  border: 1px solid #888;\n  padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXERldmVsb3BtZW50XFx5b2dhLXRpbWVyMi9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUNDTjtBRElBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNERjtBREdFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDREo7QURLQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx3REFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0ZGO0FES0E7RUFDRSx3QkFBQTtFQUNBLFlBQUE7QUNGRjtBREtBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNGRjtBRE1FO0VBQ0UsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuXHJcbiAgLm1haW4tdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDAgMCAwIDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206IDJweDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGVwLWNvbnRyb2wge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLm1hdC1idXR0b24tYmFzZSB7XHJcbiAgICBtYXJnaW46IDRweDtcclxuICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdDtcclxuICBmb250OiA0MDAgMTJweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI2JkYmRiZDtcclxuICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbnRleHRhcmVhOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ucmVwZXRpdGlvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIge1xyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoOTV2dyAtIDYwcHgpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICB9XHJcbn1cclxuIiwiaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cbmhlYWRlciAubWFpbi10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmhlYWRlciAubWFpbi10aXRsZSBoMyB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cblxuZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAycHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN0ZXAtY29udHJvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnN0ZXAtY29udHJvbCAubWF0LWJ1dHRvbi1iYXNlIHtcbiAgbWFyZ2luOiA0cHg7XG4gIHBhZGRpbmc6IDAgNnB4O1xuICBtaW4td2lkdGg6IGF1dG87XG59XG5cbnRleHRhcmVhIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQ7XG4gIGZvbnQ6IDQwMCAxMnB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNiZGJkYmQ7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxudGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnJlcGV0aXRpb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICBtYXgtd2lkdGg6IGNhbGMoOTV2dyAtIDYwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICBwYWRkaW5nOiAzcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, {
        stepper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['stepper']
        }],
        tempoElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['tempoElement', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _directives_textarea_resize_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./directives/textarea-resize.directive */
    "./src/app/directives/textarea-resize.directive.ts");
    /* harmony import */


    var _directives_stepper_scroll_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./directives/stepper-scroll.directive */
    "./src/app/directives/stepper-scroll.directive.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _directives_textarea_resize_directive__WEBPACK_IMPORTED_MODULE_11__["TextareaResize"], _directives_stepper_scroll_directive__WEBPACK_IMPORTED_MODULE_12__["StepperScroll"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _directives_textarea_resize_directive__WEBPACK_IMPORTED_MODULE_11__["TextareaResize"], _directives_stepper_scroll_directive__WEBPACK_IMPORTED_MODULE_12__["StepperScroll"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/directives/stepper-scroll.directive.ts":
  /*!********************************************************!*\
    !*** ./src/app/directives/stepper-scroll.directive.ts ***!
    \********************************************************/

  /*! exports provided: StepperScroll */

  /***/
  function srcAppDirectivesStepperScrollDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepperScroll", function () {
      return StepperScroll;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StepperScroll =
    /*#__PURE__*/
    function () {
      function StepperScroll() {
        _classCallCheck(this, StepperScroll);
      }

      _createClass(StepperScroll, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.appStepperScroll) {
            setTimeout(function () {
              var label = document.querySelector("#cdk-step-label-0-".concat(changes.appStepperScroll.currentValue));

              if (label) {
                label.scrollIntoView({
                  block: 'start',
                  inline: 'start',
                  behavior: 'smooth'
                });
              }
            }, 150);
          }
        }
      }]);

      return StepperScroll;
    }();

    StepperScroll.ɵfac = function StepperScroll_Factory(t) {
      return new (t || StepperScroll)();
    };

    StepperScroll.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: StepperScroll,
      selectors: [["", "appStepperScroll", ""]],
      inputs: {
        appStepperScroll: "appStepperScroll"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepperScroll, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appStepperScroll]'
        }]
      }], null, {
        appStepperScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/directives/textarea-resize.directive.ts":
  /*!*********************************************************!*\
    !*** ./src/app/directives/textarea-resize.directive.ts ***!
    \*********************************************************/

  /*! exports provided: TextareaResize */

  /***/
  function srcAppDirectivesTextareaResizeDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextareaResize", function () {
      return TextareaResize;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TextareaResize = function TextareaResize(element) {
      var _this3 = this;

      _classCallCheck(this, TextareaResize);

      this.element = element;
      setTimeout(function () {
        _this3.element.nativeElement.style.height = _this3.element.nativeElement.scrollHeight + 'px';
      }, 10);
    };

    TextareaResize.ɵfac = function TextareaResize_Factory(t) {
      return new (t || TextareaResize)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    TextareaResize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TextareaResize,
      selectors: [["", "appAutoResize", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextareaResize, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appAutoResize]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/sadhana.1.db.ts":
  /*!****************************************!*\
    !*** ./src/app/models/sadhana.1.db.ts ***!
    \****************************************/

  /*! exports provided: SADHANA */

  /***/
  function srcAppModelsSadhana1DbTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SADHANA", function () {
      return SADHANA;
    });

    var ASANA = {
      title: 'Ászanák',
      tasks: [{
        title: 'Szupta Urdvahasztászana',
        description: "Sav\xE1szan\xE1ban \xE9rzetfigyel\xE9s, majd karemel\xE9s, ny\xFAjt\xF3z\xE1s a Szupta Urdvahaszt\xE1szana helyzetbe.\n\nFigyeld a derekad talajra nyom\xE1s\xE1ra, l\xE1bfejeket h\xFAzd pip\xE1ba \xE9s a sarokb\xF3l ny\xFAjtsd a l\xE1bakat. Emeld ki a mellkasod, de vidd le a h\xE1tadat a talajra. Tenyerek egym\xE1s fel\xE9 n\xE9znek. 10 l\xE9gz\xE9sig tartani, k\xF6zben folyamatosan korrig\xE1lni a tart\xE1st.",
        repetition: '10 légzésig',
        imgSrc: 'szupta_urdvahasztaszana.jpg'
      }, {
        title: 'Szupta Pavanamuktászana (fekvő széloldó póz)',
        description: "Fekv\u0151 alaphelyzetb\u0151l hajl\xEDtsd a jobb t\xE9rdet, h\xFAzd a combot a mellkashoz kil\xE9gz\xE9sre. Az ujjakat a l\xE1bsz\xE1ron kulcsold \xF6ssze. K\xF6zel\xEDtsd a homlokod a t\xE9rdedhez. A bal l\xE1b maradjon ny\xFAjtva. Bel\xE9gz\xE9s mik\xF6zben a l\xE1bat visszaengeded. V\xE9gezd el ellent\xE9tes l\xE1bbal is a gyakorlatot.",
        repetition: '5-5x',
        imgSrc: 'szupta_pavanamuktaszana.jpg'
      }, {
        title: 'Szupta Udarakarshanászana (fekvő helyzetű hasnyújtás)',
        description: "Alaphelyzet. A t\xE9rdeket hajl\xEDtva helyezd a talpakat a talajra. A gyakorlat alatt a t\xE9rded \xE9s a l\xE1bfejed tartsd \xF6sszez\xE1rva. Az ujjakat kulcsold \xF6ssze a tark\xF3d alatt. Kil\xE9gz\xE9sre engedd le a t\xE9rdeket jobbra, k\xF6zel\xEDtsd a talajhoz, egyidej\u0171leg ford\xEDtsd a fejed balra. V\xE9ghelyzetben tartsd kint a leveg\u0151t. A fejed \xE9s a l\xE1bad vidd k\xF6z\xE9phelyzetre bel\xE9gz\xE9sre. V\xE9gezd el ellent\xE9tes ir\xE1nyba is a gyakorlatot. ",
        repetition: '5-5x',
        imgSrc: 'szupta_udarakarsanaszana.jpg'
      }, {
        title: 'Naukászana (csónak póz)',
        description: "Alaphelyzet. Bel\xE9gz\xE9sre egyszerre emeld a l\xE1bakat, karokat, t\xF6rzset \xE9s a fejet a talajr\xF3l. A v\xE1llak \xE9s a l\xE1bak legfeljebb 15 cm-re emelkedjenek fel. Tartsd ki a v\xE9ghelyzetet. L\xE9legezz ki \xE9s egyszerre laz\xEDtsd el az eg\xE9sz testet. ",
        repetition: '5x',
        imgSrc: 'naukaszana.jpg'
      }, {
        title: 'Csakki csalanászana (malomkörzés)',
        description: "Kil\xE9gz\xE9s alatt oldalt f\xE9lk\xF6rben el\u0151re, bel\xE9gz\xE9s alatt a m\xE1sik oldalon visszafel\xE9 k\xF6rz\xFCnk. Figyelj a k\xF6ld\xF6kt\xE1j\xE9k (Manipura) \xE9rzeteire. Ez a gyakorlat energiablokk old\xF3, a manipura csakra blokkj\xE1t oldja \xE9s egyben fokozza a vitalit\xE1st.",
        repetition: '5-5x',
        imgSrc: 'csakki_csalanaszana.jpg'
      }, {
        title: 'Pascsimóttánászana (hátsó nyújtó póz)',
        description: "Pr\xF3b\xE1ld er\u0151ltet\xE9s mentesen v\xE9gezni, ha reggel m\xE9g nehezen megy, akkor haszn\xE1lj hevedert, vagy tedd a fejed a sz\xE9kre \xE9s tal\xE1bb 20 l\xE9gz\xE9sig maradj benne. Ez elcsendes\xEDti az elm\xE9t, cs\xF6kkenti a t\xFCzet. Figyelj a nyugdot l\xE9gz\xE9sre \xE9s vidd a figyelmedet egyre jobban befel\xE9 a l\xE9gz\xE9sr\u0151l egy\xE9b bels\u0151 \xE9rzetekre. ",
        repetition: '20 légzésig',
        imgSrc: 'pascsimottanaszana.jpg'
      }, {
        title: 'Maricsjászana',
        description: "\xDCl\u0151 csavar\xE1s, ny\xFAjtott l\xE1bas \xFCl\u0151 helyzetb\u0151l indulsz, majd egyik l\xE1badat behajl\xEDtod \xE9s a m\xE1sik l\xE1b t\xE9rde mell\xE9 teszed a l\xE1bfejet, megfogod a t\xE9rdet ellenkez\u0151 k\xE9zzel \xE9s kil\xE9gz\xE9s alatt fordulsz h\xE1tra. Figyelj a gerinc ny\xFAjt\xE1s\xE1ra minden bel\xE9gz\xE9s alatt, majd minden kil\xE9gz\xE9s alatt kicsit m\xE9g pr\xF3b\xE1lj csavarodni. Ne er\u0151ltesd. ",
        repetition: '10-10 légzésig',
        imgSrc: 'maricsjaszana.jpg'
      }, {
        title: 'Khatu Pranam',
        repetition: '1-1 kör mindkét oldalra',
        imgSrc: 'jme.jpg'
      }, {
        title: 'Adho Mukha Svanászana (kutyapóz)',
        description: "10 l\xE9gz\xE9sig tartani, majd el\u0151re l\xE9psz az egyik l\xE1bbal \xE9s fel\xE1llsz \xE1ll\xF3 helyzetbe. Vidd a s\xFAlypontot a l\xE1bak fel\xE9, sarkakat ny\xFAjtsd a talaj fel\xE9, amivel fokozod a l\xE1bak ny\xFAjt\xE1s\xE1t.",
        repetition: '10 légzésig',
        imgSrc: 'adho_mukha_svanaszana.jpg'
      }, {
        title: 'Tirjaka Tadászana (hajladozó pálmafa póz)',
        description: "Kil\xE9gz\xE9s alatt oldalra, majd bel\xE9gz\xE9sre vissza k\xF6z\xE9pre, majd kil\xE9gz\xE9s alatt a m\xE1sik oldalra \xE9s bel\xE9gz\xE9sre vissza.",
        repetition: '5x',
        imgSrc: 'tirjaka_tadaszana.jpg'
      }, {
        title: 'Utkatászana (széktartás)',
        description: "A l\xE1bak teljesen \xF6ssze vannak z\xE1rva, cs\xEDp\u0151t billentsd, farokcsontot h\xFAzd magad al\xE1, majd ny\xFAjtsd a h\xE1tadat, karokat felfel\xE9. A t\xE9rdek finom \xF6sszenyom\xE1s\xE1val tudod tartani k\xF6nnyebben a p\xF3zt. Sarkadat k\xF6nyvre teheted.",
        repetition: '5-10 légzésig',
        imgSrc: 'utkataszana.jpg'
      }, {
        title: 'Trikónászana (háromszög póz)',
        description: "Figyelem\xF6sszpontos\xEDt\xE1s a talp \xE9s talaj k\xF6z\xF6tti \xE9rintkez\xE9sen a h\xE1ts\xF3 l\xE1bn\xE1l (k\xFCls\u0151 talp\xE9l, sarok). H\xE1ts\xF3 l\xE1bat falhoz is nyomhatod.",
        repetition: '2x dinamikusan, majd 10 légzésig mindkét oldalra',
        imgSrc: 'trikonaszana.jpg'
      }, {
        title: 'Virabhadrászana (Hősi póz 2.)',
        description: "Figyelem\xF6sszpontos\xEDt\xE1s a talp \xE9s talaj k\xF6z\xF6tti \xE9rintkez\xE9sen a h\xE1ts\xF3 l\xE1bn\xE1l (k\xFCls\u0151 talp\xE9l, sarok). H\xE1ts\xF3 l\xE1bat falhoz is nyomhatod.",
        repetition: '2x dinamikusan, majd 10 légzésig mindkét oldalra',
        imgSrc: 'virabhadraszana.jpg'
      }, {
        title: 'Bhudzsangászana (kobra póz)',
        description: "Kezek a mellkas mellett. Csak addig emelkedj, hogy az alhas a talajon maradjon.",
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
      }]
    };
    var PRANAYAMA_PREPARATION = {
      title: 'Pránajáma előkészítés',
      tasks: [{
        title: 'Szúrja namszkár krija',
        description: "1. Z\xE1rt \xE1ll\xE1sban, karjaink kiny\xFAjtva \xE9s tenyereink oldalr\xF3l a combunkat \xE9rintik. Bel\xE9legz\xE9ssel l\u0151re ford\xEDtjuk a tenyereinket, kil\xE9gz\xE9ssel tenyereink ism\xE9t a combunkat \xE9rintik. \n\n2. Bel\xE9legz\xE9s\xFCnk els\u0151 fel\xE9ben tenyereinket el\u0151re ford\xEDtjuk \xE9s a m\xE1sodik fele alatt \xEDvben Namaszk\xE1r mudr\xE1ba \xF6sszeillesztj\xFCk. Kil\xE9gz\xE9s els\u0151 resz\xE9ben leeresztj\xFCk karjainkat, tenyerek el\u0151re n\xE9znek, m\xE1sodik fel\xE9ben ism\xE9t \xE9rintik a combunkat. \n\n3. Bel\xE9gz\xE9s\xFCnk els\u0151 harmad\xE1ban tenyereinket el\u0151re ford\xEDtjuk \xE9s hasi l\xE9gz\u0151mozg\xE1ssal l\xE9legz\xFCnk be, m\xE1sodik harmad\xE1ban Namaszk\xE1r mudra \xE9s mellkasi l\xE9gz\xE9s, harmadik harmadn\xE1l karokat fej\xFCnk f\xF6l\xE9 emelj\xFCk \xE9s \xF6sszeillesztj\xFCk a tenyereinket, kulcsonti l\xE9gz\xE9ssel l\xE9legz\xFCnk. \n\n4. A bel\xE9gz\xE9s azonos az el\u0151z\u0151 gyakorlattal. Kil\xE9gz\xE9sn\xE9l h\xE1trahajlunk \xE9s egy harmad\xE1t a leveg\u0151nek kil\xE9legezz\xFCk. A kil\xE9gz\xE9s m\xE1sodik harmad\xE1ban kit\xE1rjuk a karjainkat \xE9s a harmadik harmadban leeresztj\xFCk a karjainkat a kindul\xF3 helyzetbe.",
        repetition: '4 kör minden fázisból '
      }, {
        title: 'Uddijána bandha',
        description: "\xC1ll egyenesen, terpeszd sz\xE9t a l\xE1bad cs\xEDp\u0151 sz\xE9less\xE9gben. Hajolj el\u0151re, helyezd a kezeket a combokra vagy a t\xE9rdekre. L\xE9legezz ki teljesen \xE9s tartsd kint a leveg\u0151t. \nH\xFAzd sz\xE9t a mellkasod mintha bel\xE9legezn\xE9l (v\xE1llakat kiss\xE9 h\xE1tra), de ne engedj leveg\u0151t be\xE1ramolni a l\xE9gutakba. H\xFAzd \xF6ssze a hangr\xE9st, \xEDgy a hasad be fog h\xFAz\xF3dni \xE9s azt fogod \xE9rezni, hogy a has a fels\u0151 r\xE9sz\xE9t beh\xFAzod a bord\xE1k fel\xE9. \nTartsd meg a teljes beh\xFAz\xE1st 5-20 m\xE1sodpercig a kapacit\xE1sod szerint. Azut\xE1n t\xE9rj vissza.\nLaz\xEDtsd el a hasad, l\xE9legezz be \xE9s egyenesedj fel. \nMindig \xFCres hassal gyakorold. ",
        repetition: '3x'
      }, {
        title: 'Agniszára krija',
        description: "Alaphelyzet mint az Uddij\xE1na bandh\xE1n\xE1l. An\xE9lk\xFCl, hogy bel\xE9legezn\xE9l nyomd ki a hasad, mintha egy l\xE9gg\xF6mb\xF6t f\xFAjn\xE1l fel, tartsd meg 2 m\xE1sodpercig, majd \xFAjra h\xFAzd be a hasad, tartsd meg 2 m\xE1sodpercig. Ism\xE9teld ezt 10-15x, majd l\xE9legezz be.",
        repetition: '10-15 ismétlés 3x'
      }, {
        title: 'Szimha mudra (Szimhászana)',
        description: "\xDClj vadzsr\xE1szan\xE1ban (sarok\xFCl\xE9sben). Emeld fel a \xFCl\u0151csontokat kiss\xE9 \xE9s keresztezd a l\xE1bfejeket bok\xE1ban, hogy a jobb l\xE1bfej a bal f\xF6l\xE9 ker\xFClj\xF6n, mint egy oll\xF3. Majd \xFClj vissza a sarkakra, \xE9s a kezeket az azonos t\xE9rden nyugtasd sz\xE9tterpesztett ujjakkal.\nL\xE9legezz be.\nNy\xFAjtsd ki teljesen a nyelvedet sz\xE1jon \xE1t hangosan kil\xE9legezve, a tekinteted a homlokod k\xF6zep\xE9re ir\xE1ny\xEDtsd, lapock\xE1kat h\xFAzd \xF6ssze, a mellkasod nyisd.\nMiut\xE1n teljesen kil\xE9legezt\xE9l, h\xFAzd vissza a nyelvet, csukd be a sz\xE1d \xE9s laz\xEDts el minden fesz\xFClts\xE9get a testben, a korokban. ",
        repetition: '3-5x'
      }, {
        title: 'Dzsíhva bandha (nyelvzár)',
        description: "A nyelv hegy\xE9t vidd a fels\u0151 fogsorhoz \xE9s sz\xEDvd fel a nyelv k\xF6zep\xE9t a sz\xE1jpadl\xE1shoz. Ek\xF6zben a nyakizmok er\u0151sen megfesz\xFClnek. \nCsettint\xE9shez k\xE9sz\xFClve a csettint\u0151 hang el\u0151tt meg\xE1ll\xEDtjuk a nyelvet a nyelvf\xE9ket teljsen felh\xFAzva. \nAmikor kezd\u0151k\xE9nt gyakoroljuk, akkor nyugodtan csettinthet\xFCnk a nyelv\xFCnkkel. ",
        repetition: '5x'
      }, {
        title: 'Brahma mudra',
        description: "\xDCllj k\xE9nyelmes medit\xE1ci\xF3s \xFCl\xE9sben, kezeidet tedd teny\xE9rrel felfel\xE9 a t\xE9rdekre, vagy combokra. Laz\xEDtsd a v\xE1llaidat \xE9s a karjaidat. Fejed egyenes. Tudatos\xEDtsd a l\xE9gz\xE9sedet. Egy percig v\xE9gezz nyugodt, egyenletes, lass\xFA ki- \xE9s bel\xE9gz\xE9st.Csendes\xEDtsd el az elm\xE9d, vidd a figyelmed befel\xE9.\nMegtartva a nyugodt, egyenletes, folyamatos l\xE9gz\xE9sed, t\xF6bb l\xE9gz\xE9s alatt ford\xEDtsd el balra a fejed, mik\xF6zben a nyitott szemeddel is er\u0151sen balra n\xE9zel. Annyira ford\xEDtsd a fejed, amennyire csak tudod. Ugyanilyen temp\xF3ban \xE9s tudatoss\xE1gban ford\xEDtsd vissza a fejed k\xF6z\xE9phelyzetbe (szemek tov\xE1bbra is balra n\xE9znek). \nUgyanezt ism\xE9teld meg jobbra, a szemeidet is jobboldalra ir\xE1ny\xEDtva. \nMajd k\xF6z\xE9phelyzetbe visszat\xE9rve n\xE9zz az orrod hegy\xE9re (naszikagra dristhi) \xE9s emeld a fejedet h\xE1tra folyamatosan ny\xFAjtva tartva a nyakat. \nMajd a mozg\xE1s fels\u0151 v\xE9gpontj\xE1n a szemeidet \xE1ll\xEDtsd \xE1t a homlokk\xF6z\xE9ppontra (br\xFAmadja dristhi) \xE9s \xEDgy hajtsd le a fejet folyamatosan ny\xFAjtva tartva a nyakat \xFAgy, hogy az \xE1llat a mellkasi g\xF6d\xF6rh\xF6z \xE9rjen. \nEkkor csukd be a szemed, laz\xEDtsd el \xE9s \xFAgy hozd vissza a kiindul\xF3 helyzetbe. ",
        repetition: '3x'
      }, {
        title: 'Kapálabháti krija (hiperventillációs légzés)',
        description: "\xDClj\xFCnk egy k\xE9nyelmes medit\xE1ci\xF3s \xFCl\xE9sben, k\xE9ztart\xE1s lehet a csin vagy gj\xE1na mudra. Hunyjuk be a szem\xFCnket \xE9s laz\xEDtsuk el az eg\xE9sz testet. \nL\xE9legezz\xFCnk be m\xE9lyen, t\xE1g\xEDtva a hasat, majd l\xE9legezz\xFCnk ki a hasizmok er\u0151teljes \xF6sszeh\xFAz\xE1s\xE1val, gyors ber\xE1nt\xE1s\xE1val. Ekkor gyorsan ki\xE1ramlik a leveg\u0151. Olyan, mintha egy gyerty\xE1t akarn\xE1nk elf\xFAjni az orrunkon kereszt\xFCl. \nNe er\u0151ltess\xFCk. A k\xF6vetkez\u0151 bel\xE9gz\xE9s \xFAgy t\xF6rt\xE9nik, hogy passz\xEDvan hagyjuk a hasizmokat t\xE1gulni. \nAz utols\xF3 gyors kil\xE9gz\xE9s ut\xE1n tartsuk kint a leveg\u0151t \xE9s v\xE9gezz\xFCnk l\xE9legzetvisszatart\xE1st. Amikor l\xE9gszomj keletkezik, l\xE9legezz\xFCnk be. \nFontos, hogy a l\xE9gz\xE9s a hasb\xF3l t\xF6rt\xE9njen, ne a mellkasb\xF3l. ",
        repetition: '3x'
      }]
    };
    var PRANAYAMA = {
      title: 'Pránajáma',
      tasks: [{
        title: 'Uddzsáji pránajáma',
        description: "...",
        repetition: '1:2 arányban 20x'
      }, {
        title: 'Brahmarí pránajáma (zümmögő méh lélegzés)',
        description: "K\xE9nyelmes bel\xE9gz\xE9s ut\xE1n hossz\xFA j\xF3les\u0151 kil\xE9gz\xE9s, am\xEDg a leveg\u0151d tart az \"M\" hangot \xE9nelekve egy hangon. Megszoktatja veled a l\xE1gy finom kil\xE9gz\xE9st.",
        repetition: '20x'
      }]
    };
    var SADHANA = {
      created: new Date('2021.02.19'),
      sequences: [ASANA, PRANAYAMA_PREPARATION, PRANAYAMA]
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Development\yoga-timer2\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map