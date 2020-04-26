function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./src/app/add/add.component.ts":
  /*!**************************************!*\
    !*** ./src/app/add/add.component.ts ***!
    \**************************************/

  /*! exports provided: AddComponent */

  /***/
  function srcAppAddAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddComponent", function () {
      return AddComponent;
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


    var _objectConsolidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./objectConsolidator */
    "./src/app/add/objectConsolidator.ts");
    /* harmony import */


    var _result_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./result/result.component */
    "./src/app/add/result/result.component.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _google_sheet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../google-sheet.service */
    "./src/app/google-sheet.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

    function AddComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function AddComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddComponent_ng_template_3_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out Shop Details");
      }
    }

    function AddComponent_ng_template_3_mat_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var shop_r41 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", shop_r41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", shop_r41, " ");
      }
    }

    function AddComponent_ng_template_3_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out Customer Details");
      }
    }

    function AddComponent_ng_template_3_ng_template_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Fill out Item Details");
      }
    }

    function AddComponent_ng_template_3_mat_accordion_31_mat_expansion_panel_1_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quantity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Rate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", product_r43.value.quantity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", product_r43.value.rate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Remark: ", product_r43.value.remark, "");
      }
    }

    function AddComponent_ng_template_3_mat_accordion_31_mat_expansion_panel_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddComponent_ng_template_3_mat_accordion_31_mat_expansion_panel_1_ng_template_4_Template, 11, 3, "ng-template", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r43 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r43.value.item, " ");
      }
    }

    function AddComponent_ng_template_3_mat_accordion_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddComponent_ng_template_3_mat_accordion_31_mat_expansion_panel_1_Template, 5, 1, "mat-expansion-panel", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r34.productFormGroup.get("addedItems")["controls"]);
      }
    }

    function AddComponent_ng_template_3_mat_option_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var itemOption_r47 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", itemOption_r47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", itemOption_r47, "");
      }
    }

    function AddComponent_ng_template_3_mat_option_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r48 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r48, "");
      }
    }

    function AddComponent_ng_template_3_ng_template_82_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Done");
      }
    }

    function AddComponent_ng_template_3_mat_grid_list_91_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r49 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r49.value.item, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Qualtity: ", product_r49.value.quantity, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Rate: ", product_r49.value.rate, " ");
      }
    }

    function AddComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-vertical-stepper", 5, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-step", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddComponent_ng_template_3_ng_template_3_Template, 1, 0, "ng-template", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Shop");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddComponent_ng_template_3_mat_option_14_Template, 2, 2, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-step", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddComponent_ng_template_3_ng_template_17_Template, 1, 0, "ng-template", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-step", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "form", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AddComponent_ng_template_3_ng_template_29_Template, 1, 0, "ng-template", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AddComponent_ng_template_3_mat_accordion_31_Template, 2, 1, "mat-accordion", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-autocomplete", null, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AddComponent_ng_template_3_mat_option_42_Template, 2, 2, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_ng_template_3_Template_button_click_45_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.onDecrement(0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Quantity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_ng_template_3_Template_button_click_51_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.onIncrement(0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_ng_template_3_Template_button_click_55_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r53.onDecrementMinusTen(0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Rate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_ng_template_3_Template_button_click_63_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r54.onInclementPlusTen(0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Remark");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-autocomplete", null, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, AddComponent_ng_template_3_mat_option_75_Template, 2, 2, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_ng_template_3_Template_button_click_77_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r55.addProducts();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-icon", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "add_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, AddComponent_ng_template_3_ng_template_82_Template, 1, 0, "ng-template", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h2", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Preview");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h3", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Items");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, AddComponent_ng_template_3_mat_grid_list_91_Template, 8, 3, "mat-grid-list", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_ng_template_3_Template_button_click_93_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r56.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r28.shopFormGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r28.shopFormGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 18, ctx_r28.shopFormGroup.value.date, "mediumDate"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r28.shops);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r28.customerFormGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r28.customerFormGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r28.productFormGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r28.productFormGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.isitemPreviewEnabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r28.item);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 21, ctx_r28.filteredOptions));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r28.shouldDisableDecrement(0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r28.shouldDisableDecrement(0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r28.remarkOptions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Shop: ", ctx_r28.shopFormGroup.value.shopName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r28.productFormGroup.get("addedItems")["controls"]);
      }
    }

    var AddComponent = /*#__PURE__*/function () {
      function AddComponent(_formBuilder, dialog, googleSheetService) {
        _classCallCheck(this, AddComponent);

        this._formBuilder = _formBuilder;
        this.dialog = dialog;
        this.googleSheetService = googleSheetService;
        this.itemControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.shops = ['Veloor', 'Velappaya', 'MgKavu'];
        this.itemOptions = [];
        this.remarkOptions = [];
        this.updateSuccess = false;
        this.isUpdated = false;
        this.notReady = true;
        this.responseHasError = false;
      }

      _createClass(AddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.isitemPreviewEnabled = false;
          this.customerFormGroup = this._formBuilder.group({
            name: [''],
            phoneNumber: ['']
          });
          this.productFormGroup = this._formBuilder.group({
            addedItems: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([])
          });
          this.item = this._formBuilder.group({
            item: [''],
            quantity: [1],
            rate: [],
            remark: ['']
          });
          this.shopFormGroup = this._formBuilder.group({
            shopName: [],
            date: [Date.now()]
          });
          this.googleSheetService.getPricing().subscribe(function (result) {
            console.log(JSON.stringify(JSON.parse(JSON.stringify(result)).remarks));

            var _iterator = _createForOfIteratorHelper(JSON.parse(JSON.stringify(result)).remarks),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var remark = _step.value;
                console.log(remark);

                _this.remarkOptions.push(remark);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            console.log(JSON.stringify(_this.remarkOptions));
            _this.filteredRemarkOptions = _this.item.get("remark").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
              return _this._filterRemark(value);
            }));
          });
          this.googleSheetService.getPricing().subscribe(function (result) {
            var _iterator2 = _createForOfIteratorHelper(JSON.parse(JSON.stringify(result)).pricing),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var entry = _step2.value;

                _this.itemOptions.push(entry.key);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            _this.filteredOptions = _this.item.get("item").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
              return _this._filterItem(value);
            }));
            _this.notReady = false;
          });
          this.itemNameSubscription = this.item.get("item").valueChanges.subscribe(function (val) {
            _this.googleSheetService.getPricing().subscribe(function (result) {
              _this.priceList = JSON.parse(JSON.stringify(result)).pricing;
              var priceObject = JSON.parse(JSON.stringify(result)).pricing.find(function (config) {
                return config.key == val;
              });

              if (priceObject) {
                _this.item.get("rate").setValue(Number(priceObject.value));
              }
            });
          });
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          var _this2 = this;

          if (this.priceList) {
            this.itemNameSubscription = this.item.get("item").valueChanges.subscribe(function (val) {
              var priceObject = JSON.parse(JSON.stringify(_this2.priceList)).find(function (config) {
                return config.key == val;
              });

              if (priceObject) {
                _this2.item.get("rate").setValue(Number(priceObject.value));
              }
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          this.isUpdated = true;
          var shop = {
            date: this.shopFormGroup.value.date,
            shopName: this.shopFormGroup.value.shopName
          };
          var customer = {
            name: this.customerFormGroup.value.name,
            phoneNumber: this.customerFormGroup.value.phoneNumber
          };
          var items = [];
          var products = this.productFormGroup.get('addedItems')['controls'];

          var _iterator3 = _createForOfIteratorHelper(products),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var product = _step3.value;
              var item = {
                name: product.value.item,
                quantity: product.value.quantity,
                rate: product.value.rate,
                remark: product.value.remark
              };
              items.push(item);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          var sheet = Object(_objectConsolidator__WEBPACK_IMPORTED_MODULE_2__["sheetUpdator"])(shop, customer, items);
          this.googleSheetService.updateSheet(sheet).subscribe(function (response) {
            _this3.isUpdated = false;
            var invoiceNumber = response.updatedData.values[0];

            if (response.updatedRows == items.length) {
              _this3.updateSuccess = true;
            } else {
              _this3.responseHasError = true;
            }

            var dialogRef = _this3.dialog.open(_result_result_component__WEBPACK_IMPORTED_MODULE_3__["ResultComponent"], {
              width: '250px',
              data: {
                updatedValues: response.updatedData.values[0]
              }
            });

            dialogRef.afterClosed().subscribe(function (result) {
              _this3.customerFormGroup.reset();

              _this3.shopFormGroup.reset();

              _this3.item.reset();

              _this3.productFormGroup = _this3._formBuilder.group({
                addedItems: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([])
              });
              _this3.isitemPreviewEnabled = false;
            });
          });
        }
      }, {
        key: "addProducts",
        value: function addProducts() {
          var _this4 = this;

          var items = this.productFormGroup.get('addedItems');
          if (this.item.value.item !== '' && this.item.value.quantity > 0 && this.item.value.rate > 0) items.push(this.item);
          this.isitemPreviewEnabled = true;
          this.item = this._formBuilder.group({
            item: [''],
            quantity: [1],
            rate: [50],
            remark: ['']
          });
          this.filteredOptions = this.item.get("item").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
            return _this4._filterItem(value);
          }));
          this.filteredRemarkOptions = this.item.get("remark").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
            return _this4._filterRemark(value);
          }));
        }
      }, {
        key: "onIncrement",
        value: function onIncrement(index) {
          //const items = <FormArray>this.productFormGroup.get('items');
          var value = Number(this.item.value.quantity) + 1;
          this.item.patchValue({
            quantity: value
          });
        }
      }, {
        key: "onDecrement",
        value: function onDecrement(index) {
          //const items = <FormArray>this.productFormGroup.get('items');
          var value = Number(this.item.value.quantity) - 1;
          this.item.patchValue({
            quantity: value
          });
        }
      }, {
        key: "onDecrementMinusFive",
        value: function onDecrementMinusFive(index) {
          //const items = <FormArray>this.productFormGroup.get('items');
          var value = Number(this.item.value.rate) - 5;
          this.item.patchValue({
            rate: value
          });
        }
      }, {
        key: "onDecrementMinusTen",
        value: function onDecrementMinusTen(index) {
          //const items = <FormArray>this.productFormGroup.get('items');
          var value = Number(this.item.value.rate) - 10;
          this.item.patchValue({
            rate: value
          });
        }
      }, {
        key: "onInclementPlusFive",
        value: function onInclementPlusFive(index) {
          //const items = <FormArray>this.productFormGroup.get('items');
          var value = Number(this.item.value.rate) + 5;
          this.item.patchValue({
            rate: value
          });
        }
      }, {
        key: "onInclementPlusTen",
        value: function onInclementPlusTen(index) {
          //const items = <FormArray>this.productFormGroup.get('items');
          var value = Number(this.item.value.rate) + 10;
          this.item.patchValue({
            rate: value
          });
        }
      }, {
        key: "shouldDisableDecrement",
        value: function shouldDisableDecrement(index) {
          //const items = <FormArray>this.productFormGroup.get('items');
          if (Number(this.item.value.quantity) <= 0) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "_filterItem",
        value: function _filterItem(value) {
          var filterValue = value.toLowerCase();
          return this.itemOptions.filter(function (option) {
            return option.toLowerCase().includes(filterValue);
          });
        }
      }, {
        key: "_filterRemark",
        value: function _filterRemark(value) {
          console.log('rem: ' + value);
          var filterValue = value.toLowerCase();
          return this.remarkOptions.filter(function (option) {
            return option.toLowerCase().includes(filterValue);
          });
        }
      }]);

      return AddComponent;
    }();

    AddComponent.ɵfac = function AddComponent_Factory(t) {
      return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_sheet_service__WEBPACK_IMPORTED_MODULE_6__["GoogleSheetService"]));
    };

    AddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddComponent,
      selectors: [["app-add"]],
      decls: 5,
      vars: 3,
      consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["showSpinner", ""], ["showForm", ""], [1, "spinner-wrapper"], ["mode", "indeterminate", "diameter", "70"], ["linear", "true"], ["stepper", ""], [3, "stepControl"], ["matStepLabel", ""], [3, "formGroup"], [1, "mat-h3"], [1, "shop"], ["formControlName", "shopName", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "customer-data"], ["matInput", "", "placeholder", "John Snow", "formControlName", "name", "required", ""], ["matInput", "", "placeholder", "919495345789", "formControlName", "phoneNumber", "required", ""], [1, "content-product", 3, "formGroup"], [1, "item-preview"], [4, "ngIf"], [1, "product-container"], [1, "field-group"], [1, "item"], ["ngClass", "item"], ["matInput", "", "type", "text", "placeholder", "Shirt", "formControlName", "item", "required", "", 3, "matAutocomplete"], ["auto", "matAutocomplete"], ["mat-button", "", "mat-icon-button", "", "matPrefix", "", "aria-label", "Remove", "color", "red", 3, "disabled", "click"], ["matInput", "", "type", "number", "formControlName", "quantity", "required", ""], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", "aria-label", "Add", "color", "green", 3, "click"], [1, "rate"], [1, "incr"], ["matInput", "", "type", "number", "formControlName", "rate", "required", ""], [1, "field-group-remark"], ["matInput", "", "type", "text", "placeholder", "sjdfhjk", "formControlName", "remark", 3, "matAutocomplete"], [1, "addProduct"], ["mat-button", "", 3, "click"], [1, "add-icon"], [2, "text-align", "center"], ["mat-subheader", ""], ["cols", "3", "rowHeight", "2:1", 4, "ngFor", "ngForOf"], [1, "next"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "click"], [3, "value"], [4, "ngFor", "ngForOf"], ["matExpansionPanelContent", ""], [1, "items-details"], ["matInput", "", "readonly", "", 3, "value"], ["cols", "3", "rowHeight", "2:1"]],
      template: function AddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddComponent_div_0_Template, 1, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddComponent_ng_template_3_Template, 95, 23, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUpdated || ctx.notReady)("ngIfThen", _r25)("ngIfElse", _r27);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinner"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocomplete"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatPrefix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListSubheaderCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanelContent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridTile"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDivider"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: [".content-product[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.shop[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-size: 15px;\n}\n\n.shop[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  font-size: 15px;\n  text-align: left;\n  width: 10%;\n}\n\n.customer-data[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-right: 60px;\n  text-align: left;\n  width: 20%;\n}\n\n.field-group[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-right: 60px;\n  text-align: left;\n  width: 20%;\n}\n\n.field-group[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.field-group[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-right: 60px;\n  text-align: center;\n  width: 40%;\n}\n\n.mat-button[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 20%;\n}\n\n.mat-raised-button[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 20%;\n}\n\n.incr[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n\n.addProduct[_ngcontent-%COMP%] {\n  padding-right: 370px;\n}\n\n.addProduct[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  float: none;\n  height: 70px;\n}\n\n.back[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.content-product[_ngcontent-%COMP%]   .product-container[_ngcontent-%COMP%]   .field-group-remark[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  width: 70%;\n  text-align: left;\n}\n\n.next[_ngcontent-%COMP%] {\n  padding-right: 200px;\n  margin-bottom: 30px;\n}\n\n.item-preview[_ngcontent-%COMP%] {\n  width: 70%;\n  margin-bottom: 30px;\n}\n\n.item-preview[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%] {\n  background-color: #9fa8da;\n}\n\n.add-icon[_ngcontent-%COMP%] {\n  color: green;\n  font-size: 50px;\n  height: auto;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.spinner-wrapper[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.item-preview[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n@media screen and (min-width: 320px) and (max-width: 412px) {\n  .mat-button[_ngcontent-%COMP%] {\n    margin-right: 10%;\n  }\n\n  .mat-raised-button[_ngcontent-%COMP%] {\n    margin-right: 10%;\n  }\n\n  .items-details[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n\n  .content-product[_ngcontent-%COMP%]   .product-container[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    margin-right: 5px;\n    width: 90%;\n    font-size: 20px;\n  }\n\n  .content-product[_ngcontent-%COMP%]   .product-container[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    width: 90%;\n    font-size: 20px;\n  }\n\n  .content-product[_ngcontent-%COMP%]   .product-container[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   input.mat-input-element[_ngcontent-%COMP%] {\n    margin-top: -0.0625em;\n  }\n\n  .content-product[_ngcontent-%COMP%]   .product-container[_ngcontent-%COMP%]   .field-group-remark[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .shop[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    font-size: 15px;\n    width: 40%;\n  }\n\n  .customer-data[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n    font-size: 15px;\n    text-align: left;\n    width: 70%;\n  }\n\n  .next[_ngcontent-%COMP%] {\n    padding-right: 0px;\n  }\n\n  .addProduct[_ngcontent-%COMP%] {\n    padding-right: 60px;\n  }\n\n  .item-preview[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaWRoaW5EZXYvcHJvamVjdC9sYXVuZHJ5ZXhwZXJ0L2NsaWVudC9zcmMvYXBwL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDS0o7O0FERkE7RUFDSSxrQkFBQTtBQ0tKOztBREhBO0VBQ0ksZ0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ09KOztBREpBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDT0o7O0FETEE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNRSjs7QUROQTtFQUNJLGdCQUFBO0FDU0o7O0FEUEE7RUFDSSxvQkFBQTtBQ1VKOztBRFJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNXSjs7QURUQTtFQUNJLFdBQUE7QUNZSjs7QURWQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDYUo7O0FEWEE7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0FDY0o7O0FEWkE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUNlSjs7QURiQTtFQUNJLHlCQUFBO0FDZ0JKOztBRGRBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDaUJKOztBRGZBO0VBQ0ksa0JBQUE7QUNrQko7O0FEaEJBO0VBQ0ksOEJBQUE7QUNtQko7O0FEakJBOztFQUVJLGFBQUE7QUNvQko7O0FEakJBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ29CSjs7QURsQkE7RUFDSSxpQkFBQTtBQ3FCSjs7QURuQkE7RUFDSTtJQUNJLGlCQUFBO0VDc0JOOztFRHBCRTtJQUNJLGlCQUFBO0VDdUJOOztFRHBCRTtJQUNJLFVBQUE7RUN1Qk47O0VEckJFO0lBQ0ksaUJBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtFQ3dCTjs7RUR0QkU7SUFDSSxnQkFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0VDeUJOOztFRHZCRTtJQUNJLHFCQUFBO0VDMEJOOztFRHhCRTtJQUNJLFVBQUE7RUMyQk47O0VEekJFO0lBQ0ksZUFBQTtJQUNBLFVBQUE7RUM0Qk47O0VEMUJFO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtFQzZCTjs7RUQzQkU7SUFDSSxrQkFBQTtFQzhCTjs7RUQ1QkU7SUFDSSxtQkFBQTtFQytCTjs7RUQ3QkU7SUFDSSxXQUFBO0lBQ0EsbUJBQUE7RUNnQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkZC9hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1wcm9kdWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zaG9wIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLnNob3AgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMTAlO1xufVxuLmN1c3RvbWVyLWRhdGEgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDIwJTtcbn1cbi5maWVsZC1ncm91cCAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMjAlO1xufVxuXG4uZmllbGQtZ3JvdXAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmllbGQtZ3JvdXAgLml0ZW0gLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNDAlO1xufVxuXG4ubWF0LWJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMjAlO1xufVxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMCU7XG59XG4uaW5jciB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5hZGRQcm9kdWN0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNzBweDtcbn1cbi5hZGRQcm9kdWN0IC5tYXQtYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgaGVpZ2h0OiA3MHB4O1xufVxuLmJhY2sgLm1hdC1idXR0b24ge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLmNvbnRlbnQtcHJvZHVjdCAucHJvZHVjdC1jb250YWluZXIgLmZpZWxkLWdyb3VwLXJlbWFyayAubWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB3aWR0aDogNzAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubmV4dCB7XG4gICAgcGFkZGluZy1yaWdodDogMjAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTozMHB4O1xufVxuLml0ZW0tcHJldmlldyB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLml0ZW0tcHJldmlldyAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlmYThkYTtcbn1cbi5hZGQtaWNvbiB7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICAgIGZsZXgtYmFzaXM6IDA7XG59XG5cbi5zcGlubmVyLXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuLml0ZW0tcHJldmlldyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQxMnB4KSB7XG4gICAgLm1hdC1idXR0b24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICB9XG4gICAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgfVxuXG4gICAgLml0ZW1zLWRldGFpbHMgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICB9XG4gICAgLmNvbnRlbnQtcHJvZHVjdCAucHJvZHVjdC1jb250YWluZXIgLmZpZWxkLWdyb3VwIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5jb250ZW50LXByb2R1Y3QgLnByb2R1Y3QtY29udGFpbmVyIC5maWVsZC1ncm91cCAubWF0LWZvcm0tZmllbGQgLm1hdC1pY29uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAuY29udGVudC1wcm9kdWN0IC5wcm9kdWN0LWNvbnRhaW5lciAuZmllbGQtZ3JvdXAgLm1hdC1mb3JtLWZpZWxkIGlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTAuMDYyNWVtO1xuICAgIH1cbiAgICAuY29udGVudC1wcm9kdWN0IC5wcm9kdWN0LWNvbnRhaW5lciAuZmllbGQtZ3JvdXAtcmVtYXJrIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxuICAgIC5zaG9wIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICB9XG4gICAgLmN1c3RvbWVyLWRhdGEgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgIH1cbiAgICAubmV4dCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICB9XG4gICAgLmFkZFByb2R1Y3Qge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICAgIH1cbiAgICAuaXRlbS1wcmV2aWV3IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxufVxuIiwiLmNvbnRlbnQtcHJvZHVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2hvcCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uc2hvcCAubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMCU7XG59XG5cbi5jdXN0b21lci1kYXRhIC5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMjAlO1xufVxuXG4uZmllbGQtZ3JvdXAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5maWVsZC1ncm91cCAubWF0LWZvcm0tZmllbGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5maWVsZC1ncm91cCAuaXRlbSAubWF0LWZvcm0tZmllbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNDAlO1xufVxuXG4ubWF0LWJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XG59XG5cbi5pbmNyIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmFkZFByb2R1Y3Qge1xuICBwYWRkaW5nLXJpZ2h0OiAzNzBweDtcbn1cblxuLmFkZFByb2R1Y3QgLm1hdC1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbG9hdDogbm9uZTtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uYmFjayAubWF0LWJ1dHRvbiB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY29udGVudC1wcm9kdWN0IC5wcm9kdWN0LWNvbnRhaW5lciAuZmllbGQtZ3JvdXAtcmVtYXJrIC5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDcwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm5leHQge1xuICBwYWRkaW5nLXJpZ2h0OiAyMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLml0ZW0tcHJldmlldyB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5pdGVtLXByZXZpZXcgLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZhOGRhO1xufVxuXG4uYWRkLWljb24ge1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBmbGV4LWJhc2lzOiAwO1xufVxuXG4uc3Bpbm5lci13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaXRlbS1wcmV2aWV3IHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDEycHgpIHtcbiAgLm1hdC1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICB9XG5cbiAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgfVxuXG4gIC5pdGVtcy1kZXRhaWxzIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuXG4gIC5jb250ZW50LXByb2R1Y3QgLnByb2R1Y3QtY29udGFpbmVyIC5maWVsZC1ncm91cCAubWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLmNvbnRlbnQtcHJvZHVjdCAucHJvZHVjdC1jb250YWluZXIgLmZpZWxkLWdyb3VwIC5tYXQtZm9ybS1maWVsZCAubWF0LWljb24ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAuY29udGVudC1wcm9kdWN0IC5wcm9kdWN0LWNvbnRhaW5lciAuZmllbGQtZ3JvdXAgLm1hdC1mb3JtLWZpZWxkIGlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBtYXJnaW4tdG9wOiAtMC4wNjI1ZW07XG4gIH1cblxuICAuY29udGVudC1wcm9kdWN0IC5wcm9kdWN0LWNvbnRhaW5lciAuZmllbGQtZ3JvdXAtcmVtYXJrIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIC5zaG9wIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cblxuICAuY3VzdG9tZXItZGF0YSAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cblxuICAubmV4dCB7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG5cbiAgLmFkZFByb2R1Y3Qge1xuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG4gIH1cblxuICAuaXRlbS1wcmV2aWV3IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add',
          templateUrl: './add.component.html',
          styleUrls: ['./add.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }, {
          type: _google_sheet_service__WEBPACK_IMPORTED_MODULE_6__["GoogleSheetService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/add/objectConsolidator.ts":
  /*!*******************************************!*\
    !*** ./src/app/add/objectConsolidator.ts ***!
    \*******************************************/

  /*! exports provided: sheetUpdator */

  /***/
  function srcAppAddObjectConsolidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sheetUpdator", function () {
      return sheetUpdator;
    });

    function sheetUpdator(shop, customer, items) {
      var details = [];

      for (var i in items) {
        var row = [];

        if (Number(i) == 0) {
          row.push(shop.invoice, customer.name, new Date(shop.date).toLocaleDateString("en-US"), items[Number(i)].name, items[Number(i)].quantity, null, null, 'Accepted', customer.phoneNumber, null, items[Number(i)].rate, items[Number(i)].remark);
        } else {
          row.push(null, null, null, items[Number(i)].name, items[Number(i)].quantity, null, null, 'Accepted', null, null, items[Number(i)].rate, items[Number(i)].remark);
        }

        details.push(row);
      }

      var sheet = {
        store: shop.shopName,
        values: details
      };
      return sheet;
    }
    /***/

  },

  /***/
  "./src/app/add/result/result.component.ts":
  /*!************************************************!*\
    !*** ./src/app/add/result/result.component.ts ***!
    \************************************************/

  /*! exports provided: ResultComponent */

  /***/
  function srcAppAddResultResultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultComponent", function () {
      return ResultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");

    var ResultComponent = /*#__PURE__*/function () {
      function ResultComponent(dialogRef, data) {
        _classCallCheck(this, ResultComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(ResultComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return ResultComponent;
    }();

    ResultComponent.ɵfac = function ResultComponent_Factory(t) {
      return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResultComponent,
      selectors: [["app-result"]],
      decls: 14,
      vars: 3,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "ok", "cdkFocusInitial", "", 3, "cdkCopyToClipboard"]],
      template: function ResultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Accepted");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Click ok, invoice number is copied");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Customer: ", ctx.data.updatedValues[1], "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Invoice No: ", ctx.data.updatedValues[0], "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkCopyToClipboard", ctx.data.updatedValues[0]);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["CdkCopyToClipboard"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-result',
          templateUrl: './result.component.html',
          styleUrls: ['./result.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
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
    /* harmony import */


    var _get_status_get_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./get-status/get-status.component */
    "./src/app/get-status/get-status.component.ts");
    /* harmony import */


    var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add/add.component */
    "./src/app/add/add.component.ts");

    var routes = [{
      path: 'search',
      component: _get_status_get_status_component__WEBPACK_IMPORTED_MODULE_2__["GetStatusComponent"]
    }, {
      path: 'add',
      component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"]
    }, {
      path: '',
      redirectTo: '/search',
      pathMatch: 'full'
    }];

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


    var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./banner/banner.component */
    "./src/app/banner/banner.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'The Laundry Expert';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".status-margin[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaWRoaW5EZXYvcHJvamVjdC9sYXVuZHJ5ZXhwZXJ0L2NsaWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0dXMtbWFyZ2luIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfSIsIi5zdGF0dXMtbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */"]
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
      }], null, null);
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


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _get_status_get_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./get-status/get-status.component */
    "./src/app/get-status/get-status.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _banner_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./banner/banner.component */
    "./src/app/banner/banner.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _add_add_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./add/add.component */
    "./src/app/add/add.component.ts");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _add_result_result_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./add/result/result.component */
    "./src/app/add/result/result.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["LayoutModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__["MatStepperModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocompleteModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_32__["ClipboardModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _get_status_get_status_component__WEBPACK_IMPORTED_MODULE_8__["GetStatusComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_10__["BannerComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_26__["AddComponent"], _add_result_result_component__WEBPACK_IMPORTED_MODULE_30__["ResultComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["LayoutModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__["MatStepperModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocompleteModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_32__["ClipboardModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _get_status_get_status_component__WEBPACK_IMPORTED_MODULE_8__["GetStatusComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_10__["BannerComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_26__["AddComponent"], _add_result_result_component__WEBPACK_IMPORTED_MODULE_30__["ResultComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["LayoutModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__["MatStepperModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocompleteModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_32__["ClipboardModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/banner/banner.component.ts":
  /*!********************************************!*\
    !*** ./src/app/banner/banner.component.ts ***!
    \********************************************/

  /*! exports provided: BannerComponent */

  /***/
  function srcAppBannerBannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannerComponent", function () {
      return BannerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function BannerComponent_a_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerComponent_a_5_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var link_r58 = ctx.$implicit;

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r59.activeLink = link_r58;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r58 = ctx.$implicit;

        var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx_r57.activeLink == link_r58)("routerLink", link_r58.path);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r58.label, " ");
      }
    }

    var BannerComponent = /*#__PURE__*/function () {
      function BannerComponent() {
        _classCallCheck(this, BannerComponent);

        this.links = [{
          'label': 'Search',
          'path': './search'
        }, {
          'label': 'Add',
          'path': './add'
        }];
        this.activeLink = this.links[0];
      }

      _createClass(BannerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BannerComponent;
    }();

    BannerComponent.ɵfac = function BannerComponent_Factory(t) {
      return new (t || BannerComponent)();
    };

    BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BannerComponent,
      selectors: [["app-banner"]],
      decls: 7,
      vars: 1,
      consts: [["color", "primary"], ["width", "40", "alt", "Logo", "src", "../../assets/laundryIcon.jpg"], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", 3, "active", "routerLink", "click", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", 3, "active", "routerLink", "click"]],
      template: function BannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The Laundry Expert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BannerComponent_a_5_Template, 2, 3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabNav"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabLink"]],
      styles: [".toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  color: white;\n  font-weight: 600;\n}\n\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaWRoaW5EZXYvcHJvamVjdC9sYXVuZHJ5ZXhwZXJ0L2NsaWVudC9zcmMvYXBwL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50b29sYmFyIGltZyB7XG4gIG1hcmdpbjogMCAxNnB4O1xufSIsIi50b29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRvb2xiYXIgaW1nIHtcbiAgbWFyZ2luOiAwIDE2cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-banner',
          templateUrl: './banner.component.html',
          styleUrls: ['./banner.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/get-status/get-status.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/get-status/get-status.component.ts ***!
    \****************************************************/

  /*! exports provided: GetStatusComponent */

  /***/
  function srcAppGetStatusGetStatusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetStatusComponent", function () {
      return GetStatusComponent;
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


    var _google_sheet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../google-sheet.service */
    "./src/app/google-sheet.service.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

    function GetStatusComponent_div_16_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone no/ Bill number is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GetStatusComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GetStatusComponent_div_16_div_1_Template, 2, 0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.id.errors.required);
      }
    }

    function GetStatusComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function GetStatusComponent_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GetStatusComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function GetStatusComponent_ng_template_24_mat_expansion_panel_1_mat_list_21_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function GetStatusComponent_ng_template_24_mat_expansion_panel_1_mat_list_21_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.damagedPieces);
      }
    }

    function GetStatusComponent_ng_template_24_mat_expansion_panel_1_mat_list_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GetStatusComponent_ng_template_24_mat_expansion_panel_1_mat_list_21_div_10_Template, 1, 0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GetStatusComponent_ng_template_24_mat_expansion_panel_1_mat_list_21_ng_template_11_Template, 2, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r13 = ctx.$implicit;

        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r13.iconClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.iconName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.totalPieces);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.finishedPieces);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.damagedPieces)("ngIfThen", _r15);
      }
    }

    function GetStatusComponent_ng_template_24_mat_expansion_panel_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function GetStatusComponent_ng_template_24_mat_expansion_panel_1_Template_mat_expansion_panel_opened_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.panelOpenState = true;
        })("closed", function GetStatusComponent_ng_template_24_mat_expansion_panel_1_Template_mat_expansion_panel_closed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r20.panelOpenState = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-panel-description", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Items : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, GetStatusComponent_ng_template_24_mat_expansion_panel_1_mat_list_21_Template, 14, 7, "mat-list", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-action-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Send to WhatsApp");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r11.iconClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r11.iconName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r11.billNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 10, data_r11.date, "mediumDate"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name : ", data_r11.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Phone number : ", data_r11.phoneNumber, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Due Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 13, data_r11.dueDate, "mediumDate"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", data_r11.total, " Rupees");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r11.items);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", data_r11.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function GetStatusComponent_ng_template_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GetStatusComponent_ng_template_24_mat_expansion_panel_1_Template, 25, 16, "mat-expansion-panel", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.dataSource);
      }
    }

    function GetStatusComponent_ng_template_26_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function GetStatusComponent_ng_template_26_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "No Results found");
      }
    }

    function GetStatusComponent_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GetStatusComponent_ng_template_26_div_0_Template, 1, 0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GetStatusComponent_ng_template_26_ng_template_1_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isResultNotFound)("ngIfThen", _r22);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "has-error": a0
      };
    };

    var GetStatusComponent = /*#__PURE__*/function () {
      function GetStatusComponent(googleSheetService, breakpointObserver) {
        var _this5 = this;

        _classCallCheck(this, GetStatusComponent);

        this.googleSheetService = googleSheetService;
        this.submitted = false;
        this.panelOpenState = false;
        this.contentClass = 'web-status-margin';
        this.clickMessage = '';
        this.showResult = false;
        this.showSpinner = false;
        this.isResultNotFound = false;
        this.displayedColumns = ['phoneNumber', 'name', 'billNumber', 'status', 'remark'];
        this.customerData = this.createFormGroup();
        breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].HandsetPortrait]).subscribe(function (result) {
          if (result.matches) {
            _this5.contentClass = 'mobile-status-margin';
          }
        });
      }

      _createClass(GetStatusComponent, [{
        key: "createFormGroup",
        value: function createFormGroup() {
          return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            selectedStore: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Veloor')
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource = [];
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.dataSource = [];

          if (this.customerData.invalid) {
            return;
          } else {
            this.showSpinner = true;
            this.isResultNotFound = false;
            this.showResult = false;
            this.getSheets(this.customerData.value.id, this.customerData.value.selectedStore);
            this.submitted = true;
          }
        }
      }, {
        key: "getSheets",
        value: function getSheets(phoneNumber, selectedStore) {
          var _this6 = this;

          var elements = [];
          this.googleSheetService.getSheet(phoneNumber, selectedStore).subscribe(function (data) {
            data.forEach(function (it) {
              var iconName = '';
              var iconClass = '';
              var items = [];
              var ready = false;
              var pending = false;
              var error = false;
              var state;

              var _iterator4 = _createForOfIteratorHelper(it.items),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var itemRes = _step4.value;
                  var item = {
                    name: itemRes.name,
                    totalPieces: itemRes.totalPieces,
                    finishedPieces: itemRes.finishedPieces,
                    damagedPieces: itemRes.damagedPieces
                  };

                  if (itemRes.status == 'Ready' || itemRes.status == 'Ready ') {
                    item.iconName = 'check_circle';
                    item.iconClass = 'done-icon';
                    state = 'ready for delivery';
                    ready = true;
                  } else if (itemRes.status == 'Pending ') {
                    item.iconName = 'warning';
                    item.iconClass = 'inprogress-icon';
                    state = 'in process';
                    pending = true;
                  } else if (itemRes.status == 'Ready+return') {
                    item.iconName = 'check_circle';
                    item.iconClass = 'delivered-icon';
                    pending = true;
                    state = 'ready for delivery';
                  } else {
                    item.iconName = 'error';
                    item.iconClass = 'error-icon';
                    error = true;
                    state = 'in process';
                  }

                  items.push(item);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              if (ready == true && pending !== true && error !== true) {
                iconName = 'check_circle';
                iconClass = 'done-icon';
              } else if (pending == true && error !== true) {
                iconName = 'warning';
                iconClass = 'inprogress-icon';
              } else {
                iconName = 'error';
                iconClass = 'error-icon';
                state = 'in process';
              }

              var link = "https://wa.me/".concat(it.phoneNumber, "?text=*THE LAUNDRY EXPERT*\n          %0AHi ").concat(it.name, ", \n          %0AYour material is _").concat(state, "_.\n          %0A_Looking forward to working with you again soon._ Thank you for choosing us.\n          %0AThe Laundry Expert \uD83D\uDE00");
              var element = {
                name: it.name,
                billNumber: it.billNumber,
                date: it.date,
                dueDate: it.dueDate,
                phoneNumber: it.phoneNumber,
                total: it.total,
                link: link,
                iconName: iconName,
                iconClass: iconClass,
                items: items
              };
              elements.push(element);
            });

            if (elements.length > 0) {
              _this6.showResult = true;
              _this6.submitted = false;
            } else {
              _this6.isResultNotFound = true;
              _this6.submitted = false;
            }

            _this6.showSpinner = false;
            _this6.dataSource = elements;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.customerData.controls;
        }
      }]);

      return GetStatusComponent;
    }();

    GetStatusComponent.ɵfac = function GetStatusComponent_Factory(t) {
      return new (t || GetStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_sheet_service__WEBPACK_IMPORTED_MODULE_2__["GoogleSheetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]));
    };

    GetStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GetStatusComponent,
      selectors: [["app-get-status"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_google_sheet_service__WEBPACK_IMPORTED_MODULE_2__["GoogleSheetService"]])],
      decls: 28,
      vars: 13,
      consts: [[3, "ngClass"], ["ngClass", "form-field-custom", 3, "formGroup", "ngSubmit"], ["aria-label", "Select a store", "formControlName", "selectedStore"], ["value", "Veloor", 3, "checked"], ["value", "Velappaya"], ["value", "Mulamkunnathkavu"], ["matInput", "", "placeholder", "9789821252", "formControlName", "id", "value", "919789821252/VA1000"], ["class", "help-block", 4, "ngIf"], ["mat-icon-button", "", "color", "primary", "type", "submit", 3, "disabled"], [4, "ngIf", "ngIfThen"], ["show", ""], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [1, "help-block"], [4, "ngIf"], [1, "spinner-wrapper"], ["mode", "indeterminate", "diameter", "30"], [1, "accordion-extend"], [3, "opened", "closed", 4, "ngFor", "ngForOf"], [3, "opened", "closed"], ["ngClass", "card-header"], ["ngClass", "card-header-date"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "target", "_blank", "color", "primary", 3, "href"], ["ngClass", "item-details"], ["ngClass", "circle-total"], ["ngClass", "circle-done"], ["ngClass", "circle-damaged"]],
      template: function GetStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Find Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GetStatusComponent_Template_form_ngSubmit_3_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-button-toggle-group", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-button-toggle", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Veloor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-button-toggle", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Velappaya");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-button-toggle", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "MgKavu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Phone number/ Bill Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GetStatusComponent_div_16_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GetStatusComponent_div_20_Template, 1, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, GetStatusComponent_ng_template_21_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, GetStatusComponent_div_23_Template, 1, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, GetStatusComponent_ng_template_24_Template, 2, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, GetStatusComponent_ng_template_26_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.contentClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.customerData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.submitted && ctx.f.id.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.id.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.customerData.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSpinner)("ngIfThen", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showResult)("ngIfThen", _r5)("ngIfElse", _r7);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinner"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionPanelActionRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 100px;\n  max-width: 150px;\n  width: 100%;\n}\n\n.input-width[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.web-status-margin[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.mobile-status-margin[_ngcontent-%COMP%] {\n  margin-left: 2%;\n  margin-right: 2%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.custom-list-item[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\n.inprogress-icon[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n.error-icon[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.done-icon[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.delivered-icon[_ngcontent-%COMP%] {\n  color: #2323df;\n}\n\n.total-icon[_ngcontent-%COMP%] {\n  color: #3a6ad1;\n}\n\n.title-info[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.accordion-extend[_ngcontent-%COMP%] {\n  -webkit-margin-after: 0.5px;\n          margin-block-end: 0.5px;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding-left: 5px;\n  padding-top: 2px;\n}\n\n.card-header-date[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: bold;\n}\n\n.circle-total[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  font-size: 15px;\n  color: #fff;\n  text-align: center;\n  background: blue;\n  margin-left: 10px;\n}\n\n.circle-damaged[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  font-size: 15px;\n  color: #fff;\n  text-align: center;\n  background: red;\n  margin-left: 10px;\n}\n\n.circle-done[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  font-size: 15px;\n  color: #fff;\n  text-align: center;\n  background: green;\n  margin-left: 10px;\n}\n\n.item-details[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.example-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.example-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: blue;\n  color: white;\n}\n\n.tile-spec[_ngcontent-%COMP%] {\n  right: 10;\n}\n\n.mat-figure[_ngcontent-%COMP%] {\n  right: 10 !important;\n}\n\n.mat-badge-medium.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  top: -3px;\n}\n\n.spinner-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaWRoaW5EZXYvcHJvamVjdC9sYXVuZHJ5ZXhwZXJ0L2NsaWVudC9zcmMvYXBwL2dldC1zdGF0dXMvZ2V0LXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2V0LXN0YXR1cy9nZXQtc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBRUEsaUJBQUE7QUNBRjs7QURFQTtFQUNFLGVBQUE7RUFFQSxnQkFBQTtBQ0FGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7QUNFRjs7QURBQTtFQUNFLFVBQUE7QUNHRjs7QUREQTtFQUNFLFlBQUE7QUNJRjs7QURGQTtFQUNFLGNBQUE7QUNLRjs7QURIQTtFQUNFLGNBQUE7QUNNRjs7QURKQTtFQUNFLFdBQUE7QUNPRjs7QURMQTtFQUNFLFVBQUE7QUNRRjs7QUROQTtFQUNFLDJCQUFBO1VBQUEsdUJBQUE7QUNTRjs7QURQQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDVUY7O0FEUkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNXRjs7QURUQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1lGOztBRFZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNhRjs7QURYQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ2NGOztBRFpBO0VBQ0UsVUFBQTtBQ2VGOztBRGJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ2dCRjs7QURiQTtFQUNFLFdBQUE7QUNnQkY7O0FEYkE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUNnQkY7O0FEZEE7RUFDRSxTQUFBO0FDaUJGOztBRGZBO0VBQ0Usb0JBQUE7QUNrQkY7O0FEaEJBO0VBQ0UsU0FBQTtBQ21CRjs7QURqQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ29CRiIsImZpbGUiOiJzcmMvYXBwL2dldC1zdGF0dXMvZ2V0LXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmlucHV0LXdpZHRoIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLndlYi1zdGF0dXMtbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAvLyBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG4ubW9iaWxlLXN0YXR1cy1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogMiU7XG4vLyAgbWFyZ2luLXRvcDogMjUlO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xufVxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jdXN0b20tbGlzdC1pdGVtIC5tYXQtbGlzdC1pdGVtIHtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uaW5wcm9ncmVzcy1pY29uIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cbi5lcnJvci1pY29uIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5kb25lLWljb24ge1xuICBjb2xvcjogZ3JlZW47XG59XG4uZGVsaXZlcmVkLWljb24ge1xuICBjb2xvcjogIzIzMjNkZjtcbn1cbi50b3RhbC1pY29uIHtcbiAgY29sb3I6ICMzYTZhZDE7XG59XG4udGl0bGUtaW5mbyB7XG4gIGNvbG9yOiBibHVlO1xufVxuLnRhYmxlIHtcbiAgd2lkdGg6IDMwJTtcbn1cbi5hY2NvcmRpb24tZXh0ZW5kIHtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMC41cHg7XG59XG4uY2FyZC1oZWFkZXIge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuLmNhcmQtaGVhZGVyLWRhdGUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNpcmNsZS10b3RhbCB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBibHVlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5jaXJjbGUtZGFtYWdlZCB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmNpcmNsZS1kb25lIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5pdGVtLWRldGFpbHMge1xuICB3aWR0aDogNDAlO1xufVxuLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnRpbGUtc3BlYyB7XG4gIHJpZ2h0OiAxMDtcbn1cbi5tYXQtZmlndXJlIHtcbiAgcmlnaHQ6IDEwICFpbXBvcnRhbnQ7XG59XG4ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgdG9wOiAtM3B4O1xufVxuLnNwaW5uZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSIsIi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmlucHV0LXdpZHRoIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLndlYi1zdGF0dXMtbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5cbi5tb2JpbGUtc3RhdHVzLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmN1c3RvbS1saXN0LWl0ZW0gLm1hdC1saXN0LWl0ZW0ge1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5pbnByb2dyZXNzLWljb24ge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uZXJyb3ItaWNvbiB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5kb25lLWljb24ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5kZWxpdmVyZWQtaWNvbiB7XG4gIGNvbG9yOiAjMjMyM2RmO1xufVxuXG4udG90YWwtaWNvbiB7XG4gIGNvbG9yOiAjM2E2YWQxO1xufVxuXG4udGl0bGUtaW5mbyB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4udGFibGUge1xuICB3aWR0aDogMzAlO1xufVxuXG4uYWNjb3JkaW9uLWV4dGVuZCB7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAuNXB4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuXG4uY2FyZC1oZWFkZXItZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jaXJjbGUtdG90YWwge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogYmx1ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5jaXJjbGUtZGFtYWdlZCB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY2lyY2xlLWRvbmUge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uaXRlbS1kZXRhaWxzIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGlsZS1zcGVjIHtcbiAgcmlnaHQ6IDEwO1xufVxuXG4ubWF0LWZpZ3VyZSB7XG4gIHJpZ2h0OiAxMCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgdG9wOiAtM3B4O1xufVxuXG4uc3Bpbm5lci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-get-status',
          templateUrl: './get-status.component.html',
          providers: [_google_sheet_service__WEBPACK_IMPORTED_MODULE_2__["GoogleSheetService"]],
          styleUrls: ['./get-status.component.scss']
        }]
      }], function () {
        return [{
          type: _google_sheet_service__WEBPACK_IMPORTED_MODULE_2__["GoogleSheetService"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/google-sheet.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/google-sheet.service.ts ***!
    \*****************************************/

  /*! exports provided: GoogleSheetService */

  /***/
  function srcAppGoogleSheetServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleSheetService", function () {
      return GoogleSheetService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _phoneNumber_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./phoneNumber-validator */
    "./src/app/phoneNumber-validator.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var GoogleSheetService = /*#__PURE__*/function () {
      function GoogleSheetService(http) {
        _classCallCheck(this, GoogleSheetService);

        this.http = http;
      }

      _createClass(GoogleSheetService, [{
        key: "getSheet",
        value: function getSheet(id, selectedStore) {
          var isphoneNumber = Object(_phoneNumber_validator__WEBPACK_IMPORTED_MODULE_2__["phoneNumberValidator"])(id);
          var searchBy = 'billNumber';
          if (isphoneNumber) searchBy = 'phoneNumber';
          var res = this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].googlesheetApi, "/customer?id=").concat(id, "&selectedStore=").concat(selectedStore, "&searchBy=").concat(searchBy));
          return res;
        }
      }, {
        key: "updateSheet",
        value: function updateSheet(sheet) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          var res = this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].googlesheetApi, "/update"), sheet, httpOptions);
          return res;
        }
      }, {
        key: "getPricing",
        value: function getPricing() {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].business));
        }
      }]);

      return GoogleSheetService;
    }();

    GoogleSheetService.ɵfac = function GoogleSheetService_Factory(t) {
      return new (t || GoogleSheetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    GoogleSheetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GoogleSheetService,
      factory: GoogleSheetService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleSheetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/phoneNumber-validator.ts":
  /*!******************************************!*\
    !*** ./src/app/phoneNumber-validator.ts ***!
    \******************************************/

  /*! exports provided: phoneNumberValidator */

  /***/
  function srcAppPhoneNumberValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "phoneNumberValidator", function () {
      return phoneNumberValidator;
    });

    function phoneNumberValidator(phoneNumber) {
      var valid = /^\d+$/.test(phoneNumber);
      return valid && phoneNumber.length >= 10 && phoneNumber.length < 11 ? true : false;
    }
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
      production: false,
      googlesheetApi: 'http://localhost:3000/googlesheet',
      business: 'http://localhost:3000/business'
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
    /*! /Users/NidhinDev/project/laundryexpert/client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map