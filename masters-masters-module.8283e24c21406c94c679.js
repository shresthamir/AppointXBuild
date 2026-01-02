(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-masters-module"],{

/***/ "./src/app/common/nepali-date-picker/nepali-date-picker.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/common/nepali-date-picker/nepali-date-picker.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group mitipicker\" style=\"height: 30px, i !important;\">\n\n  <input type=\"text\" class=\"form-control\" [formControl]=\"dateControl\" placeholder=\"{{label}}\"\n    id=\"{{id}}Picker\" (mouseover)=\"$event.preventDefault()\" (keydown)=\"$event.preventDefault()\" [disabled]=\"disabled\">\n  <span class=\"input-group-addon\" style=\"padding-top:5px\">\n    <i class=\"fa fa-calendar\" aria-hidden=\"true\" id=\"{{id}}\" [style.cursor]=\"disabled ? 'not-allowed' : 'pointer'\" [style.opacity]=\"disabled ? '0.5' : '1'\"></i>\n  </span>\n</div>"

/***/ }),

/***/ "./src/app/common/nepali-date-picker/nepali-date-picker.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/common/nepali-date-picker/nepali-date-picker.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mitipicker{max-width:200px}.input-group-addon{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.25;color:#55595c;text-align:center;background-color:#eceeef;border:1px solid rgba(0,0,0,0.15);border-top-right-radius:0.25em;border-bottom-right-radius:0.25em}\n"

/***/ }),

/***/ "./src/app/common/nepali-date-picker/nepali-date-picker.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/common/nepali-date-picker/nepali-date-picker.component.ts ***!
  \***************************************************************************/
/*! exports provided: NepaliDatePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NepaliDatePickerComponent", function() { return NepaliDatePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../repositories */ "./src/app/common/repositories/index.ts");
/* harmony import */ var _services_disable_date_picker_disable_date_picker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/disable-date-picker/disable-date-picker.service */ "./src/app/common/services/disable-date-picker/disable-date-picker.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






// import { disableDate } from '../services/disable-date-picker/disableDate.model';

// declare var nepalidFormat
var NepaliDatePickerComponent = /** @class */ (function () {
    function NepaliDatePickerComponent(elementRef, disableDateService, masterRepo, datePipe, masterService) {
        var _this = this;
        this.elementRef = elementRef;
        this.disableDateService = disableDateService;
        this.masterRepo = masterRepo;
        this.datePipe = datePipe;
        this.masterService = masterService;
        // public nepalidFormat: any[] = [];
        this.onChange = function () { };
        this.onTouch = function () { };
        this.disableBefore = "";
        this.id = "";
        this.label = "";
        this.disabled = false;
        this.disableDates = [];
        this.formatDates = [];
        this.dateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.writeValue = function (obj) {
            _this.dateControl.setValue(obj);
        };
        this.registerOnChange = function (_fn) {
            _this.onChange = _fn;
        };
        this.registerOnTouched = function (_fn) {
            _this.onTouch = _fn;
        };
        this.propagateChange = function (value) {
            _this.onChange(value);
            _this.onTouch(value);
            _this.elementRef.nativeElement.dispatchEvent(new CustomEvent("change", { detail: { value: value }, bubbles: true }));
        };
    }
    NepaliDatePickerComponent_1 = NepaliDatePickerComponent;
    NepaliDatePickerComponent.prototype.changeToDate = function (value, format) {
        this.toDateBS = this.masterService.toBSDate(value);
        return this.toDateBS;
    };
    NepaliDatePickerComponent.prototype.ngOnInit = function () {
        this.isNullOrEmpty(this.id);
        this.updateDisabledState();
    };
    NepaliDatePickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes['disabled']) {
            this.updateDisabledState();
        }
    };
    NepaliDatePickerComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        jQuery(document).ready(function () {
            jQuery(document).on("click", "#" + self.id, function () {
                document.getElementById(self.id + "Picker").focus();
            });
        });
        jQuery(document).ready(function () {
            jQuery(document).on("focus", "#" + self.id + "Picker", function () {
                jQuery("#" + self.id + "Picker").nepaliDatePicker({
                    onChange: function () {
                        self.dateControl.setValue(jQuery("#" + self.id + "Picker").val());
                        self.propagateChange(self.dateControl.value);
                    },
                });
            });
        });
    };
    NepaliDatePickerComponent.prototype.updateDisabledState = function () {
        if (this.disabled) {
            this.dateControl.disable();
        }
        else {
            this.dateControl.enable();
        }
    };
    NepaliDatePickerComponent.prototype.isNullOrEmpty = function (val) {
        if (typeof val !== "string") {
            throw Error("Invalid Type for Id");
        }
        if (val == "" || val == null || val == undefined) {
            throw Error("Invalid Id");
        }
    };
    var NepaliDatePickerComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NepaliDatePickerComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NepaliDatePickerComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NepaliDatePickerComponent.prototype, "disabled", void 0);
    NepaliDatePickerComponent = NepaliDatePickerComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "nepali-date-picker",
            template: __webpack_require__(/*! ./nepali-date-picker.component.html */ "./src/app/common/nepali-date-picker/nepali-date-picker.component.html"),
            styles: [__webpack_require__(/*! ./nepali-date-picker.component.scss */ "./src/app/common/nepali-date-picker/nepali-date-picker.component.scss")],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NepaliDatePickerComponent_1; }),
                    multi: true,
                },
            ],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _services_disable_date_picker_disable_date_picker_service__WEBPACK_IMPORTED_MODULE_4__["DisableDateService"],
            _repositories__WEBPACK_IMPORTED_MODULE_3__["MasterRepo"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _repositories__WEBPACK_IMPORTED_MODULE_3__["MasterRepo"]])
    ], NepaliDatePickerComponent);
    return NepaliDatePickerComponent;
}());



/***/ }),

/***/ "./src/app/common/nepali-date-picker/nepali-date-picker.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/common/nepali-date-picker/nepali-date-picker.module.ts ***!
  \************************************************************************/
/*! exports provided: NepaliDateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NepaliDateModule", function() { return NepaliDateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nepali_date_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nepali-date-picker.component */ "./src/app/common/nepali-date-picker/nepali-date-picker.component.ts");




var NepaliDateModule = /** @class */ (function () {
    function NepaliDateModule() {
    }
    NepaliDateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_nepali_date_picker_component__WEBPACK_IMPORTED_MODULE_3__["NepaliDatePickerComponent"]],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            exports: [_nepali_date_picker_component__WEBPACK_IMPORTED_MODULE_3__["NepaliDatePickerComponent"]]
        })
    ], NepaliDateModule);
    return NepaliDateModule;
}());



/***/ }),

/***/ "./src/app/pages/masters/components/Customer/AddCustomer.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/masters/components/Customer/AddCustomer.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <form id=formId class=\"form-horizontal\" [formGroup]=\"form\">\r\n        <ba-card [title]=\"modeTitle\">\r\n            <fieldset [disabled]=\"disableForm\" style=\" border: none;padding: 0; margin: 0;\">\r\n                <div class=\"form-group row \" *ngIf=\"form.contains('NAME')\">\r\n                    <label for=\"name\" class=\"col-sm-2 form-control-label \">Name</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [style.background-color]=\"disabled()\" style=\"color:black\" type=\"text \"\r\n                            class=\"form-control \" name=\"name\" id=\"name\" formControlName=\"NAME\" placeholder=\"Name \">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \" *ngIf=\"form.contains('ADDRESS')\">\r\n                    <label for=\"address\" class=\"col-sm-2 form-control-label \">Address</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            type=\"text \" class=\"form-control \" name=\"address\" id=\"address\" formControlName=\"ADDRESS\"\r\n                            placeholder=\"Address \">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \" *ngIf=\"form.contains('TELNO')\">\r\n                    <label for=\"telno\" class=\"col-sm-2 form-control-label \">Tel No</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" type=\"number\"\r\n                            [style.background-color]=\"disabled()\" class=\"form-control \" name=\"telno\" id=\"telno\"\r\n                            formControlName=\"TELNO\" placeholder=\"Telephone No\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \" *ngIf=\"form.contains('MOBILE')\">\r\n                    <label for=\"mobile\" class=\"col-sm-2 form-control-label \">Mobile</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" type=\"number\"\r\n                            (input)=\"onMobileChange($event)\" [style.background-color]=\"disabled()\" class=\"form-control \"\r\n                            name=\"mobile\" id=\"mobile\" formControlName=\"MOBILE\" placeholder=\"Mobile No\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \" *ngIf=\"form.contains('IMOBILE')\">\r\n                    <label for=\"mobile\" class=\"col-sm-2 form-control-label \">International Mobile</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" type=\"number\"\r\n                            [style.background-color]=\"disabled()\" class=\"form-control \"\r\n                            name=\"mobile\" id=\"mobile\" formControlName=\"IMOBILE\" placeholder=\"Mobile No\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \" *ngIf=\"form.contains('PANNO')\">\r\n                    <label for=\"mobile\" class=\"col-sm-2 form-control-label \">PAN No</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" type=\"number\"\r\n                            (input)=\"onPanChange($event)\" [style.background-color]=\"disabled()\" class=\"form-control \"\r\n                            name=\"panno\" id=\"panno\" formControlName=\"PANNO\" placeholder=\"PAN No\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \" *ngIf=\"form.contains('EMAIL')\">\r\n                    <label for=\"email\" class=\"col-sm-2 form-control-label \" >Email</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            type=\"text \" class=\"form-control \" name=\"email\" id=\"email\" formControlName=\"EMAIL\"\r\n                            placeholder=\"Email\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \" *ngIf=\"form.contains('BARCODE')\">\r\n                    <label for=\"barcode\" class=\"col-sm-2 form-control-label \">Barcode</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            type=\"text \" class=\"form-control \" name=\"barcode\" id=\"barcode\" formControlName=\"BARCODE\"\r\n                            placeholder=\"Barcode\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \" *ngIf=\"form.contains('Membership')\">\r\n                    <label for=\"Membership\" class=\"col-sm-2 form-control-label \">Membership</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <select class=\"form-control\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            name=\"Membership\" id=\"Membership\" formControlName=\"Membership\">\r\n                            <option value=\"Gold\">Gold</option>\r\n                            <option value=\"Silver\">Silver</option>\r\n                            <option value=\"Platinum\">Platinum</option>\r\n                        </select>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \" *ngIf=\"form.contains('DOB')\">\r\n                    <label for=\"dob\" class=\"col-sm-2 form-control-label \">DOB</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            type=\"date\" class=\"form-control \" name=\"dob\" id=\"dob\" formControlName=\"DOB\"\r\n                            placeholder=\"Date Of Birth\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \" *ngIf=\"form.contains('Age')\">\r\n                    <label for=\"Age\" class=\"col-sm-2 form-control-label \">Age</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            type=\"number\" class=\"form-control \" name=\"Age\" id=\"Age\" formControlName=\"Age\"\r\n                            placeholder=\"Age\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \" *ngIf=\"form.contains('Patient_Weight')\">\r\n                    <label for=\"Weight\" class=\"col-sm-2 form-control-label \">Weight</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            type=\"number\" class=\"form-control \" name=\"Weight\" id=\"Weight\"\r\n                            formControlName=\"Patient_Weight\" placeholder=\"Weight\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \" *ngIf=\"form.contains('MSTATUS')\">\r\n                    <label for=\"mstatus\" class=\"col-sm-2 form-control-label \">M.Status</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <select class=\"form-control\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            name=\"mstatus\" id=\"mstatus\" formControlName=\"MSTATUS\">\r\n                            <option value=\"single\">Single</option>\r\n                            <option value=\"married\">Married</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \" *ngIf=\"form.contains('GENDER')\">\r\n                    <label for=\"gender\" class=\"col-sm-2 form-control-label \">Gender</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <select class=\"form-control\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            name=\"gender\" id=\"gender\" formControlName=\"GENDER\">\r\n                            <option value=\"male\">Male</option>\r\n                            <option value=\"female\">Female</option>\r\n                            <option value=\"other\">Other</option>\r\n                        </select>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \" *ngIf=\"form.contains('OCCUPATION')\">\r\n                    <label for=\"occupation\" class=\"col-sm-2 form-control-label \">Occupation</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            type=\"text \" class=\"form-control \" name=\"occupation\" id=\"occupation\"\r\n                            formControlName=\"OCCUPATION\" placeholder=\"Occupation\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \" *ngIf=\"form.contains('ORGANIZATION')\">\r\n                    <label for=\"organization\" class=\"col-sm-2 form-control-label \">Organization</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            type=\"text \" class=\"form-control \" name=\"organization\" id=\"organization\"\r\n                            formControlName=\"ORGANIZATION\" placeholder=\"Organization\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \" *ngIf=\"form.contains('EMERGENCYCONTACTNAME')\">\r\n                    <label for=\"econtactname\" class=\"col-sm-2 form-control-label \">Emg. Contact Name</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            type=\"text \" class=\"form-control \" name=\"econtactname\" id=\"econtactname\"\r\n                            formControlName=\"EMERGENCYCONTACTNAME\" placeholder=\"Emergency Contact Name\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \" *ngIf=\"form.contains('EMERGENCYCONTACTNO')\">\r\n                    <label for=\"econtactno\" class=\"col-sm-2 form-control-label \">Emg. Contact No</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            type=\"text \" class=\"form-control \" name=\"econtactno\" id=\"econtactno\"\r\n                            formControlName=\"EMERGENCYCONTACTNO\" placeholder=\"Emergency Contact Number\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \" *ngIf=\"form.contains('RELATION')\">\r\n                    <label for=\"relation\" class=\"col-sm-2 form-control-label \">Relation</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            type=\"text \" class=\"form-control \" name=\"Relation\" id=\"Relation\"\r\n                            formControlName=\"RELATION\" placeholder=\"Relation\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \" *ngIf=\"form.contains('MedicalHistory')\">\r\n                    <label for=\"medicalHistory\" class=\"col-sm-2 form-control-label \">Medical History</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <textarea [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            type=\"text \" class=\"form-control \" name=\"medicalHistory\" id=\"medicalHistory\"\r\n                            formControlName=\"MedicalHistory\" placeholder=\"Enter medical history if any\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \" *ngIf=\"form.contains('REGDATE')\">\r\n                    <label for=\"regdate\" class=\"col-sm-2 form-control-label \">Register Date</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            type=\"date\" class=\"form-control \" name=\"regdate\" id=\"regdate\" formControlName=\"REGDATE\"\r\n                            placeholder=\"Register Date\">\r\n                    </div>\r\n                </div>\r\n            </fieldset>\r\n        </ba-card>\r\n        <div style=\"padding-bottom: 10px; margin-top: -8px;\">\r\n            <button [disabled]=\"disableForm\" *ngIf=\"mode=='add' || mode=='edit'\" (click)=\"onSave()\"\r\n                style=\"margin-right: 4px;\" class=\"btn btn-primary \" [disabled]=\"!form.valid\">Save</button>\r\n            <button type=\"button \" class=\"btn btn-danger\" (click)=\"onCancel()\">Back</button>\r\n        </div>\r\n        <ba-modal #childModal title=\"Information\" size=\"sm\">\r\n            {{DialogMessage}}\r\n        </ba-modal>\r\n    </form>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/masters/components/Customer/AddCustomer.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/masters/components/Customer/AddCustomer.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddCustomer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomer", function() { return AddCustomer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_repositories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/repositories */ "./src/app/common/repositories/index.ts");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _common_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/services/common.service */ "./src/app/common/services/common.service.ts");








var AddCustomer = /** @class */ (function () {
    function AddCustomer(_authService, router, activatedRoute, fb, masterRepo, common) {
        this._authService = _authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.masterRepo = masterRepo;
        this.common = common;
        this.DialogMessage = "Saving data please wait ...";
        this.mode = "add";
        this.viewMode = false;
        this.modeTitle = '';
        this.customer = {};
        this.initialTextReadOnly = false;
        this.disableForm = false;
        this.rategroup = [];
        this.subcriptions = [];
        if (!!this.activatedRoute.snapshot.params['returnUrl']) {
            this.returnUrl = this.activatedRoute.snapshot.params['returnUrl'];
        }
        if (!!this.activatedRoute.snapshot.params['mode']) {
            this.mode = this.activatedRoute.snapshot.params['mode'];
        }
        if (_authService.getUserProfile() && _authService.getUserProfile().Role == "admin") {
            this.disableForm = false;
        }
        else {
            this.disableForm = true;
        }
        if (this.mode == "view") {
            this.disableForm = true;
        }
    }
    AddCustomer.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.form = this.fb.group({
            CUSID: [''],
            NAME: [''],
            ADDRESS: [''],
            TELNO: [''],
            MOBILE: [''],
            IMOBILE: [''],
            PANNO: [''],
            EMAIL: [''],
            DOB: [''],
            Age: [''],
            Patient_Weight: [''],
            MSTATUS: [''],
            GENDER: [''],
            OCCUPATION: [''],
            ORGANIZATION: [''],
            EMERGENCYCONTACTNAME: [''],
            EMERGENCYCONTACTNO: [''],
            RELATION: [''],
            REGDATE: [''],
            BARCODE: [''],
            Membership: [''],
            MedicalHistory: ['']
        });
        if ((this.mode == "edit") || (this.mode == "view")) {
            console.log("ENTERING VIEW MODE");
            if (!!this.activatedRoute.snapshot.params['id']) {
                var id = this.activatedRoute.snapshot.params['id'];
                var loadedValue_1; // = this.masterRepo._customerList.filter(r => r.CUSID == id)[0];
                this.masterRepo.getCustomerById(id).subscribe(function (data) {
                    loadedValue_1 = data;
                    console.log("LOADED VALUES", loadedValue_1);
                    if (loadedValue_1) {
                        console.log(loadedValue_1.NAME);
                        if ((loadedValue_1.Membership == null) || loadedValue_1.Membership == undefined) {
                            loadedValue_1.Membership = "";
                        }
                        _this.form.patchValue({
                            CUSID: loadedValue_1.CUSID,
                            NAME: loadedValue_1.NAME,
                            ADDRESS: loadedValue_1.ADDRESS,
                            TELNO: loadedValue_1.TELNO,
                            MOBILE: loadedValue_1.MOBILE,
                            PANNO: loadedValue_1.PANNO,
                            EMAIL: loadedValue_1.EMAIL,
                            BARCODE: loadedValue_1.BARCODE,
                            Membership: loadedValue_1.Membership,
                            DOB: loadedValue_1.DOB == null ? loadedValue_1.DOB : loadedValue_1.DOB.toString().substring(0, 10),
                            Age: loadedValue_1.Age,
                            Patient_Weight: loadedValue_1.Patient_Weight,
                            MSTATUS: loadedValue_1.MSTATUS,
                            GENDER: (loadedValue_1.GENDER ? loadedValue_1.GENDER : "Female").toLocaleLowerCase(),
                            OCCUPATION: loadedValue_1.OCCUPATION,
                            ORGANIZATION: loadedValue_1.ORGANIZATION,
                            EMERGENCYCONTACTNAME: loadedValue_1.EMERGENCYCONTACTNAME,
                            EMERGENCYCONTACTNO: loadedValue_1.EMERGENCYCONTACTNO,
                            RELATION: loadedValue_1.RELATION,
                            MedicalHistory: loadedValue_1.MedicalHistory,
                            REGDATE: loadedValue_1.REGDATE == null ? loadedValue_1.REGDATE : loadedValue_1.REGDATE.toString().substring(0, 10)
                        });
                    }
                });
            }
        }
        this.masterRepo.getFormPreferences("CustomerEntry").subscribe(function (result) {
            if (result && result.fields) {
                _this.common.setFormPreference(_this.form, result.fields);
            }
        });
    };
    AddCustomer.prototype.disabled = function () {
        if (this.viewMode == true) {
            return "#EBEBE4";
        }
        else {
            return "";
        }
    };
    AddCustomer.prototype.changeToArray = function (data) {
        //console.log(data);
        if (data) {
            var retData = [];
            retData.concat([], data);
            return retData;
        }
        return [];
    };
    AddCustomer.prototype.onSave = function () {
        var _this = this;
        var cus = this.form.value;
        //console.log(cus, "NEW CUSTOMER", this.form.value);
        if (cus.NAME == null || cus.NAME == "") {
            this.DialogMessage = "Customer Name is compulsory.";
            this.childModal.show();
            setTimeout(function () {
                _this.childModal.hide();
            }, 3000);
            return;
        }
        // if(cus.DOB == null || cus.DOB == "" ){
        //     this.DialogMessage = "Patient DOB is compulsory.";
        //     this.childModal.show();
        //     setTimeout(() => {
        //         this.childModal.hide();
        //     }, 3000);
        //     return
        // }
        // if(cus.Age == null || cus.Age == "" ){
        //     this.DialogMessage = "Patient Age is compulsory.";
        //     this.childModal.show();
        //     setTimeout(() => {
        //         this.childModal.hide();
        //     }, 3000);
        //     return
        // }
        // if(cus.Patient_Weight == null || cus.Patient_Weight == "" ){
        //     this.DialogMessage = "Patient Weight is compulsory.";
        //     this.childModal.show();
        //     setTimeout(() => {
        //         this.childModal.hide();
        //     }, 3000);
        //     return
        // }
        if (cus.PANNO != null && cus.PANNO != "") {
            if (cus.PANNO.toString().length != 9 || isNaN(Number(cus.PANNO))) {
                this.DialogMessage = "Invalid Pan No.";
                this.childModal.show();
                setTimeout(function () {
                    _this.childModal.hide();
                }, 3000);
                return;
            }
        }
        if (cus.MOBILE == null || cus.MOBILE == "") {
            this.DialogMessage = "Mobile Number is compulsory.";
            this.childModal.show();
            setTimeout(function () {
                _this.childModal.hide();
            }, 3000);
            return;
        }
        else if (cus.MOBILE.toString().length != 10 || isNaN(Number(cus.MOBILE))) {
            this.DialogMessage = "Invalid Mobile No.";
            this.childModal.show();
            setTimeout(function () {
                _this.childModal.hide();
            }, 3000);
            return;
        }
        //validate before Saving
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        //console.log("BEFORE SUBMITTING", cus )
        this.onsubmit();
    };
    AddCustomer.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    AddCustomer.prototype.onsubmit = function () {
        var _this = this;
        try {
            //console.log("INITIALIZE SUBMISSION")
            var cus_1 = this.form.value;
            var sub = this.masterRepo.postmaster(this.mode, cus_1, "/saveCustomer")
                .subscribe(function (data) {
                //console.log(data, "DATA RESPONSE SAVE CUSTOMER", cus, "CUSTOMER");
                if (data.status == 'ok') {
                    //Displaying dialog message for save with timer of 1 secs
                    _this.DialogMessage = "Data Saved Successfully";
                    _this.masterRepo.refreshCustomerList();
                    setTimeout(function () {
                        _this.childModal.hide();
                        if (_this.returnUrl == "/pages/schedule/scheInput") {
                            _this.router.navigate([_this.returnUrl, { mode: "add", MOBILE: cus_1.MOBILE, returnUrl: "/pages/schedule/mastersche" }]);
                        }
                        else {
                            _this.router.navigate([_this.returnUrl]);
                        }
                    }, 1000);
                }
                else {
                    _this.DialogMessage = data.result;
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            }, function (error) { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    AddCustomer.prototype.onCancel = function () {
        //console.log(this.returnUrl)
        this.router.navigate([this.returnUrl]);
    };
    AddCustomer.prototype.ngOnDestroy = function () {
        //if(this.subitSubscription)
        //  this.subitSubscription.unsubscribe();
        this.subcriptions.forEach(function (subs) {
            subs.unsubscribe();
        });
    };
    AddCustomer.prototype.onMobileChange = function (e) {
        if (e.target.value.length >= 10) {
            e.target.value = e.target.value.substring(0, 10);
        }
    };
    AddCustomer.prototype.onBarcodeChange = function (e) {
        if (e.target.value.length == 9) {
            e.target.value = e.target.value.substring(0, 9);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], AddCustomer.prototype, "childModal", void 0);
    AddCustomer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'addCustomer',
            template: __webpack_require__(/*! ./AddCustomer.component.html */ "./src/app/pages/masters/components/Customer/AddCustomer.component.html"),
            providers: [],
            styles: ["\n        input{\n            color: black;\n        }\n    "],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _common_repositories__WEBPACK_IMPORTED_MODULE_5__["MasterRepo"], _common_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]])
    ], AddCustomer);
    return AddCustomer;
}());



/***/ }),

/***/ "./src/app/pages/masters/components/Customer/CustomerList.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/masters/components/Customer/CustomerList.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n  <div class=\"row\">\r\n    <button class=\"btn btn-primary\" style=\"margin-bottom: 10px;margin-left:18px\" [disabled] = \"disableAdd\" (click)=\"onAddClick()\">Add {{'customer' | labelPipe}}</button>\r\n  </div>\r\n  <div>\r\n    <ba-card title=\"{{'customer' | labelPipe}} List\" baCardClass=\"with-scroll\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (delete)=\"onDeleteConfirm($event)\"\r\n        (view)=\"onViewClick($event)\"></ng2-smart-table>\r\n    </ba-card>\r\n  </div>\r\n</div>\r\n\r\n<ba-modal #childModal title=\"Information\" size=\"md\">\r\n  <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n  {{DialogMessage}}\r\n</ba-modal>\r\n<ba-modal #deleteModal title=\"Warning\" size=\"sm\">\r\n  <div class=\"modal-body\">\r\n    Once you delete the {{'customer' | labelPipe}} you can't recover it back. Are U sure you want to delete this {{'customer' | labelPipe}}?\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n    <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=\"deleteModal.hide()\">Cancel</button>\r\n  </div>\r\n</ba-modal>"

/***/ }),

/***/ "./src/app/pages/masters/components/Customer/CustomerList.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/masters/components/Customer/CustomerList.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CustomerList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerList", function() { return CustomerList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! style-loader!../smartTables.scss */ "./node_modules/style-loader/index.js!./src/app/pages/masters/components/smartTables.scss");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_pipes_label_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../theme/pipes/label.pipe */ "./src/app/theme/pipes/label.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");










var CustomerList = /** @class */ (function () {
    function CustomerList(service, _authService, router, lable_pipe, http) {
        this.service = service;
        this._authService = _authService;
        this.router = router;
        this.lable_pipe = lable_pipe;
        this.http = http;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.deleteSetting = {
            deleteButtonContent: '<i class="ion-trash-a"></i>',
            confirmDelete: true,
        };
        this.settings = {
            mode: "external",
            delete: this.deleteSetting,
            edit: null,
            columns: {
                NAME: {
                    title: "Name",
                    type: "string",
                },
                MOBILE: {
                    title: "Mobile",
                    type: "string",
                },
                EMERGENCYCONTACTNAME: {
                    title: "Emg. Name",
                    type: "string",
                },
                EMERGENCYCONTACTNO: {
                    title: "Emg. Number",
                    type: "string",
                },
            },
        };
        this.subcriptions = [];
        this.settings.delete = null;
        this.source = new _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["ServerDataSource"](http, {
            endPoint: this.service.apiUrl + '/getCustomerListPaged',
            dataKey: 'data.result',
            pagerPageKey: 'currentPage',
            pagerLimitKey: 'maxResultCount',
            totalKey: 'data.total',
        });
        this.settings.delete = this.menuRight.delete ? this.deleteSetting : null;
        this.settings.edit = this.menuRight.edit ? {} : null;
    }
    Object.defineProperty(CustomerList.prototype, "disableAdd", {
        get: function () {
            return !this.menuRight.create;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerList.prototype, "menuRight", {
        get: function () {
            return this._authService.getRole.menuRights.find(function (x) { return x.menuId === "cus"; });
        },
        enumerable: true,
        configurable: true
    });
    CustomerList.prototype.setMode = function () {
        // this.divService.create();
        //this.settings.mode='inline';
        //console.log(this.settings.mode);
    };
    CustomerList.prototype.onAddClick = function () {
        this.router.navigate(['/pages/masters/cus/detail-cus', { mode: "add", returnUrl: this.router.url }]);
    };
    CustomerList.prototype.onDeleteConfirm = function (event) {
        this.selectedRow = event;
        this.deleteModal.show();
    };
    CustomerList.prototype.DeleteEvent = function () {
        var _this = this;
        this.deleteModal.hide();
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            try {
                this.DialogMessage = "Deleting please wait...";
                this.childModal.show();
                var sub = this.service.postmaster("delete", this.selectedRow.data, "/saveCustomer")
                    .subscribe(function (data) {
                    if (data.status == "ok") {
                        _this.DialogMessage = "Data Deleted Successfully";
                        if (_this.service._customerList.length > 0) {
                            _this.service._customerList.splice(_this.service._customerList.indexOf(_this.selectedRow.data), 1);
                            _this.source.load(_this.service._customerList);
                        }
                    }
                    else {
                        _this.DialogMessage = "An appointment has already been booked for this customer and cannot be deleted.";
                    }
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 4000);
                }, function (error) {
                    alert(error);
                });
                this.subcriptions.push(sub);
            }
            catch (e) {
                alert(e);
            }
        }
        else {
            this.DialogMessage = "You are not authorize to delete the customer";
            this.childModal.show();
        }
    };
    CustomerList.prototype.onViewClick = function (event) {
        this.router.navigate(["/pages/masters/cus/detail-cus", { id: event.data.CUSID, mode: "view", returnUrl: this.router.url }]);
    };
    CustomerList.prototype.onEditClick = function (event) {
        this.router.navigate(["/pages/masters/cus/detail-cus", { id: event.data.CUSID, mode: "edit", returnUrl: this.router.url }]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_3__["BaModalComponent"])
    ], CustomerList.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_3__["BaModalComponent"])
    ], CustomerList.prototype, "deleteModal", void 0);
    CustomerList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cuslist',
            template: __webpack_require__(/*! ./CustomerList.component.html */ "./src/app/pages/masters/components/Customer/CustomerList.component.html"),
            providers: [],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _theme_pipes_label_pipe__WEBPACK_IMPORTED_MODULE_8__["LabelPipe"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]])
    ], CustomerList);
    return CustomerList;
}());



/***/ }),

/***/ "./src/app/pages/masters/components/Disease/AddDisease.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/masters/components/Disease/AddDisease.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <ba-card [title]=\"modeTitle\">\r\n        <div class=\"form-group row \">\r\n            <label for=\"description\" class=\"col-sm-2 form-control-label \">Disease Name</label>\r\n            <div class=\"col-sm-9 col-md-5 col-xl-4\">\r\n                <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                    type=\"text \" class=\"form-control \" name=\"description\" id=\"description\" [(ngModel)]=\"disease.DESCRIPTION\"\r\n                    placeholder=\"Disease Description\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n            <label for=\"medication\" class=\"col-sm-2 form-control-label \">Medication: </label>\r\n            <div class=\"col-sm-9 col-md-4 col-xl-3\">\r\n                <ol style=\"padding-inline-start: 0px;\">\r\n                    <li *ngFor=\"let e of disease.Medications;let i=index\">{{e.DESCRIPTION}}\r\n                        <i (click)=\"disease.Medications.splice($event.target.id,1)\" id=\"{{i}}\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                    </li>\r\n                    <input type=\"text\" class=\"form-control\" list=\"medicationsCode\" [(ngModel)]=\"medication\"\r\n                        placeholder=\"Enter Medication\" (keyup.enter)=\"addMedications($event)\" />\r\n                    <small>Please press \"Enter\" to add Medications</small>\r\n\r\n                    <datalist id=\"medicationsCode\">\r\n                        <option *ngFor=\"let d of medicationList\" [value]=\"d.DESCRIPTION\">{{d.DESCRIPTION}}\r\n                        </option>\r\n                    </datalist>\r\n                </ol>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group row\">\r\n            <label for=\"prescription\" class=\"col-sm-2 form-control-label \">Morning Routines:</label>\r\n            <div class=\"col-sm-9 col-md-4 col-xl-3\">\r\n                <ol style=\"padding-inline-start: 0px;\">\r\n                    <li *ngFor=\"let e of disease.Prescriptions;let i=index\">\r\n                        {{e.DESCA}}  <i (click)=\"disease.Prescriptions.splice($event.target.id, 1)\" id=\"{{i}}\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                    </li>\r\n\r\n                    <input type=\"text\" class=\"form-control\" list=\"codes\" [(ngModel)]=\"prescription\" name=\"prescription\"\r\n                        id=\"morningPrescription\" placeholder=\"Enter Prescriptions\" (keyup.enter)=\"addPrescription($event, disease.Prescriptions)\" />\r\n                    <small>Please press \"Enter\" to add Prescriptions</small>\r\n\r\n                    <datalist id=\"codes\">\r\n                        <option *ngFor=\"let p of prescriptionList\" [value]=\"p.DESCA\">{{p.DESCA}}\r\n                        </option>\r\n                    </datalist>\r\n                </ol>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n            <label for=\"eveningPrescription\" class=\"col-sm-2 form-control-label \">Evening Routines:</label>\r\n            <div class=\"col-sm-9 col-md-4 col-xl-3\">\r\n                <ol style=\"padding-inline-start: 0px;\">\r\n                    <li *ngFor=\"let e of disease.eveningPrescriptions;let i=index\">\r\n                        {{e.DESCA}}  <i (click)=\"disease.eveningPrescriptions.splice($event.target.id, 1)\" id=\"{{i}}\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                    </li>\r\n\r\n                    <input type=\"text\" class=\"form-control\" list=\"codes\" [(ngModel)]=\"eveningPrescription\" name=\"eveningPrescription\"\r\n                        id=\"eveningPrescription\" placeholder=\"Enter Prescriptions\" (keyup.enter)=\"addPrescription($event, disease.eveningPrescriptions)\" />\r\n                    <small>Please press \"Enter\" to add Prescriptions</small>\r\n                </ol>\r\n            </div>\r\n        </div>\r\n\r\n    </ba-card>\r\n    <div style=\"padding-bottom: 10px; margin-top: -8px;\">\r\n        <button *ngIf=\"mode=='add' || mode=='edit'\" (click)=\"onSave()\" style=\"margin-right: 4px;\"\r\n            class=\"btn btn-primary \" >Save</button>\r\n        <button type=\"button \" class=\"btn btn-danger\" (click)=\"onCancel()\">Back</button>\r\n    </div>\r\n    <ba-modal #childModal title=\"Information\" size=\"sm\">\r\n        {{DialogMessage}}\r\n    </ba-modal>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/masters/components/Disease/AddDisease.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/masters/components/Disease/AddDisease.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddDisease */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDisease", function() { return AddDisease; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_global_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app/global.state */ "./src/app/global.state.ts");
/* harmony import */ var _common_repositories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories */ "./src/app/common/repositories/index.ts");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");








var AddDisease = /** @class */ (function () {
    function AddDisease(_authService, router, activatedRoute, fb, masterRepo, state) {
        this._authService = _authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.masterRepo = masterRepo;
        this.state = state;
        this.DialogMessage = "Saving data please wait ...";
        this.mode = "add";
        this.viewMode = false;
        this.modeTitle = '';
        this.disease = {
            DISEASEID: "",
            DESCRIPTION: "",
            Prescriptions: [],
            Medications: [],
            eveningPrescriptions: []
        };
        this.initialTextReadOnly = false;
        this.prescriptionList = [];
        this.medicationList = [];
        this.rategroup = [];
        this.subcriptions = [];
        if (!!this.activatedRoute.snapshot.params['returnUrl']) {
            this.returnUrl = this.activatedRoute.snapshot.params['returnUrl'];
        }
        if (!!this.activatedRoute.snapshot.params['mode']) {
            this.mode = this.activatedRoute.snapshot.params['mode'];
        }
    }
    AddDisease.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        if (this.mode == "edit") {
            if (!!this.activatedRoute.snapshot.params['id']) {
                var id_1 = this.activatedRoute.snapshot.params['id'];
                var loadedValue = this.masterRepo._diseaseList.filter(function (r) { return r.DISEASEID == id_1; })[0];
                if (loadedValue != null) {
                    this.disease = loadedValue;
                }
            }
        }
        if (this.masterRepo._medicationList.length > 0) {
            this.medicationList = this.masterRepo._medicationList;
        }
        else {
            this.masterRepo.getMedicationList().subscribe(function (data) {
                _this.medicationList = data;
            }, function (Error) { return console.log(Error); }, function () {
                _this.masterRepo._medicationList = _this.medicationList;
            });
        }
        if (this.masterRepo._prescriptionList.length > 0) {
            this.prescriptionList = this.masterRepo._prescriptionList;
        }
        else {
            this.masterRepo.getPrescriptionList().subscribe(function (data) {
                _this.prescriptionList = data;
            }, function (Error) { return console.log(Error); }, function () {
                _this.masterRepo._prescriptionList = _this.prescriptionList;
            });
        }
    };
    AddDisease.prototype.disabled = function () {
        if (this.viewMode == true) {
            return "#EBEBE4";
        }
        else {
            return "";
        }
    };
    AddDisease.prototype.onSave = function () {
        if (this.medication && this.medication !== "") {
            this.addMedications({ target: { value: this.medication } });
            this.medication = "";
        }
        if (this.prescription && this.prescription !== "") {
            this.addPrescription({ target: { value: this.prescription }, key: "Enter" }, this.disease.Prescriptions, false);
            this.prescription = "";
        }
        if (this.eveningPrescription && this.eveningPrescription !== "") {
            this.addPrescription({ target: { value: this.eveningPrescription }, key: "Enter" }, this.disease.eveningPrescriptions, true);
            this.eveningPrescription = "";
        }
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        this.onsubmit();
    };
    AddDisease.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    AddDisease.prototype.onsubmit = function () {
        var _this = this;
        try {
            var disease = this.disease;
            var sub = this.masterRepo.postmaster(this.mode, disease, "/SaveDisease")
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    //Displaying dialog message for save with timer of 1 secs
                    _this.DialogMessage = "Data Saved Successfully";
                    setTimeout(function () {
                        _this.childModal.hide();
                        _this.router.navigate([_this.returnUrl]);
                    }, 1000);
                }
                else {
                    _this.DialogMessage = data.result;
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            }, function (error) { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    AddDisease.prototype.onCancel = function () {
        //console.log(this.returnUrl)
        this.router.navigate([this.returnUrl]);
    };
    AddDisease.prototype.ngOnDestroy = function () {
        //if(this.subitSubscription)
        //  this.subitSubscription.unsubscribe();
        this.subcriptions.forEach(function (subs) {
            subs.unsubscribe();
        });
    };
    AddDisease.prototype.addMedications = function (e) {
        if (e.target.value !== "") {
            if (this.disease.Medications == null) {
                this.disease.Medications = [];
            }
            if (!this.disease.Medications.find(function (x) { return x.DESCRIPTION == e.target.value; }))
                this.disease.Medications.push(this.medicationList.find(function (x) { return x.DESCRIPTION == e.target.value; }));
            e.target.value = "";
            this.medication = "";
        }
    };
    AddDisease.prototype.addPrescription = function (e, Prescriptions, isEvening) {
        if (isEvening === void 0) { isEvening = false; }
        if (e.target.value !== "" && e.key === "Enter") {
            if (Prescriptions == null) {
                Prescriptions = [];
            }
            if (!Prescriptions.find(function (x) { return x.DESCA == e.target.value; })) {
                var pcptn = JSON.stringify(this.prescriptionList.find(function (x) { return x.DESCA == e.target.value; }));
                Prescriptions.push(JSON.parse(pcptn));
            }
            e.target.value = "";
            if (isEvening) {
                this.eveningPrescription = "";
            }
            else {
                this.prescription = "";
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], AddDisease.prototype, "childModal", void 0);
    AddDisease = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'addDisease',
            template: __webpack_require__(/*! ./AddDisease.component.html */ "./src/app/pages/masters/components/Disease/AddDisease.component.html"),
            providers: [],
            styles: ["\n        input{\n            color: black;\n        }\n    "],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _common_repositories__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"], _app_global_state__WEBPACK_IMPORTED_MODULE_5__["GlobalState"]])
    ], AddDisease);
    return AddDisease;
}());



/***/ }),

/***/ "./src/app/pages/masters/components/Disease/DiseaseList.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/masters/components/Disease/DiseaseList.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets container-fluid\">\r\n  <div class=\"d-flex justify-content-start mb-3\">\r\n    <button class=\"btn btn-primary\" style=\"margin-left: 18px;\" (click)=\"onAddClick()\">Add Disease</button>\r\n  </div>\r\n  <div>\r\n    <ba-card title=\"Diseases\" baCardClass=\"with-scroll w-100\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (delete)=\"onDeleteConfirm($event)\"></ng2-smart-table>\r\n    </ba-card>\r\n  </div>\r\n</div>\r\n  \r\n  <ba-modal #childModal title=\"Information\" size=\"md\">\r\n      <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n        {{DialogMessage}}\r\n  </ba-modal>\r\n  <ba-modal #deleteModal title=\"Warning\" size=\"sm\">\r\n    <div class=\"modal-body\">\r\n      Once you delete the Disease you can't recover it back. Are U sure you want to delete this Disease?\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n      <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=\"deleteModal.hide()\">Cancel</button>\r\n    </div>\r\n  </ba-modal>"

/***/ }),

/***/ "./src/app/pages/masters/components/Disease/DiseaseList.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/masters/components/Disease/DiseaseList.component.ts ***!
  \***************************************************************************/
/*! exports provided: DiseaseList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseaseList", function() { return DiseaseList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! style-loader!../smartTables.scss */ "./node_modules/style-loader/index.js!./src/app/pages/masters/components/smartTables.scss");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var DiseaseList = /** @class */ (function () {
    function DiseaseList(service, _authService, router) {
        var _this = this;
        this.service = service;
        this._authService = _authService;
        this.router = router;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.settings = {
            mode: 'external',
            columns: {
                //   ROOMNO: {
                //     title: 'Room No.',
                //     type: 'string'
                //   },
                DESCRIPTION: {
                    title: 'Disease Description',
                    type: 'string'
                }
            }
        };
        this.subcriptions = [];
        this.source = new _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["LocalDataSource"]();
        this.service.getDiseaseList().subscribe(function (data) {
            _this.source.load(data);
            _this.service._diseaseList = data;
        }, function (error) {
            console.error('Error fetching disease list:', error);
        }, function () {
            console.log('Disease list fetched successfully');
        });
    }
    DiseaseList.prototype.setMode = function () {
        // this.divService.create();
        //this.settings.mode='inline';
        //console.log(this.settings.mode);
    };
    DiseaseList.prototype.onAddClick = function () {
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            this.router.navigate(['/pages/masters/disease/detail-disease', { mode: "add", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to add Room.";
            this.childModal.show();
        }
    };
    DiseaseList.prototype.onDeleteConfirm = function (event) {
        this.selectedRow = event;
        this.deleteModal.show();
    };
    DiseaseList.prototype.DeleteEvent = function () {
        var _this = this;
        this.deleteModal.hide();
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            try {
                this.DialogMessage = "Deleting please wait...";
                this.childModal.show();
                var sub = this.service.postmaster("delete", this.selectedRow.data, "/SaveDisease")
                    .subscribe(function (data) {
                    if (data.status == 'ok') {
                        //Displaying dialog message for save with timer of 1 secs
                        if (_this.service._diseaseList.length > 0) {
                            _this.service._diseaseList.splice(_this.service._diseaseList.indexOf(_this.selectedRow.data), 1);
                            _this.source.load(_this.service._diseaseList);
                        }
                        _this.DialogMessage = "Data Deleted Successfully";
                        setTimeout(function () {
                            _this.childModal.hide();
                        }, 1000);
                    }
                    else {
                        _this.DialogMessage = data.result;
                        setTimeout(function () {
                            _this.childModal.hide();
                        }, 3000);
                    }
                }, function (error) { alert(error); });
                this.subcriptions.push(sub);
            }
            catch (e) {
                alert(e);
            }
        }
        else {
            this.DialogMessage = "You are not authorized to delete  disease.";
            this.childModal.show();
        }
    };
    DiseaseList.prototype.onEditClick = function (event) {
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            //console.log("edit",event.data);
            this.router.navigate(["/pages/masters/disease/detail-disease", { id: event.data.DISEASEID, mode: "edit", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to edit disease.";
            this.childModal.show();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_3__["BaModalComponent"])
    ], DiseaseList.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_3__["BaModalComponent"])
    ], DiseaseList.prototype, "deleteModal", void 0);
    DiseaseList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'diseaselist',
            template: __webpack_require__(/*! ./DiseaseList.component.html */ "./src/app/pages/masters/components/Disease/DiseaseList.component.html"),
            providers: [],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], DiseaseList);
    return DiseaseList;
}());



/***/ }),

/***/ "./src/app/pages/masters/components/Employee/AddEmployee.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/masters/components/Employee/AddEmployee.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <form id=formId class=\"form-horizontal\" [formGroup]=\"form\">\r\n        <ba-card [title]=\"modeTitle\">\r\n            <fieldset [disabled]=\"disableForm\" style=\" border: none;padding: 0; margin: 0;\">\r\n                <div class=\"form-group row \">\r\n                    <label for=\"name\" class=\"col-sm-2 form-control-label \">Name</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [style.background-color]=\"disabled()\" style=\"color:black\" type=\"text \"\r\n                            class=\"form-control \" name=\"name\" id=\"name\" formControlName=\"NAME\" placeholder=\"Name \">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \">\r\n                    <label for=\"address\" class=\"col-sm-2 form-control-label \">Address</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            type=\"text \" class=\"form-control \" name=\"address\" id=\"address\" formControlName=\"ADDRESS\"\r\n                            placeholder=\"Address \">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \">\r\n                    <label for=\"telno\" class=\"col-sm-2 form-control-label \">Tel No</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            type=\"text \" class=\"form-control \" name=\"telno\" id=\"telno\" formControlName=\"TELNO\"\r\n                            placeholder=\"Telephone No\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \">\r\n                    <label for=\"mobile\" class=\"col-sm-2 form-control-label \">Mobile</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            type=\"text \" class=\"form-control \" name=\"mobile\" id=\"mobile\" formControlName=\"MOBILE\"\r\n                            placeholder=\"Mobile No\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \">\r\n                    <label for=\"designation\" class=\"col-sm-2 form-control-label \">Designation</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            type=\"text \" class=\"form-control \" name=\"designation\" id=\"designation\"\r\n                            formControlName=\"DESIGNATION\" placeholder=\"Designation\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \">\r\n                    <label for=\"EMERGENCYCONTACTNAME\" class=\"col-sm-2 form-control-label \">Emergency Contact\r\n                        Person</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            type=\"text \" class=\"form-control \" name=\"emergencycontactname\" id=\"emergencycontactname\"\r\n                            formControlName=\"EMERGENCYCONTACTNAME\" placeholder=\"Emergency Contact Person\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \">\r\n                    <label for=\"EMERGENCYCONTACTNO\" class=\"col-sm-2 form-control-label \">Phone No</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                            type=\"text \" class=\"form-control \" name=\"emergencycontactno\" id=\"emergencycontactno\"\r\n                            formControlName=\"EMERGENCYCONTACTNO\" placeholder=\"Contact No\">\r\n                    </div>\r\n                </div>              \r\n                <div class=\"form-group row\">\r\n                    <label for=\"branch\" class=\"col-sm-2 form-control-label\">Outlet</label>\r\n                    <div class=\"col-sm-5\">\r\n                        <select class=\"form-control\" formControlName=\"branch\" id=\"branch\">\r\n                            <option *ngFor = \"let branch of branches\" [ngValue]=\"branch\">{{branch.branchName}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \">\r\n                    <label for=\"offday\" class=\"col-sm-2 form-control-label \">Off Day</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <fieldset>\r\n                            <div>\r\n                                <label style=\"width: 150px;font-size: 13px;height: 20px\" *ngFor=\"let d of Days\"><input\r\n                                        type=\"checkbox\" style=\"vertical-align: middle\"\r\n                                        (change)=\"$event.target.checked?(d.checked=true):(d.checked=false)\"\r\n                                        [checked]=\"d.checked\">{{d.day}}</label>\r\n                            </div>\r\n                        </fieldset>\r\n                        <!--<input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\" type=\"text \" class=\"form-control \" name=\"offday\" id=\"offday\" formControlName=\"OFFDAY\" placeholder=\"Off Day\">-->\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row \">\r\n                    <label for=\"inactive\" class=\"col-sm-2 form-control-label \">Status</label>\r\n                    <div class=\"col-sm-6 \">\r\n                        <select class=\"form-control\" name=\"inactive\" id=\"inactive\" formControlName=\"Inactive\">\r\n                            <option value=\"false\">Active</option>\r\n                            <option value=\"true\">Inactive</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\" *ngIf=\"_authService.getSetting().MapEmpRoomToService\">\r\n                    <label for=\"services\" class=\"col-md-2 fontweight\">Services</label>\r\n                    <div class=\"col-md-4\">\r\n                        <angular2-multiselect [data]=\"serviceList\" [settings]=\"serviceSetting\" formControlName=\"services\">\r\n                        </angular2-multiselect>\r\n                    </div>\r\n                </div>\r\n                <!--<div class=\"form-group row\">\r\n                <label for=\"rategroup \" class=\"col-sm-2 form-control-label \">RateGroup</label>\r\n                <div class=\"col-sm-6 \">\r\n                    <select class=\"form-control\" style=\"color:black\" [style.background-color]=\"disabled()\" name=\"rategroup\" id=\"rategroup\" formControlName=\"RATEGROUPID\">E\r\n                    <option *ngFor=\"let item of rategroup;\" value=\"item.RID \" >{{item.DESCRIPTION}}</option>\r\n                    \r\n                </select>\r\n                </div>\r\n            </div>-->\r\n            </fieldset>\r\n        </ba-card>\r\n        <div style=\"padding-bottom: 10px; margin-top: -8px;\">\r\n            <button *ngIf=\"mode=='add' || mode=='edit'\" (click)=\"onSave()\" style=\"margin-right: 4px;\"\r\n                class=\"btn btn-primary \" [disabled]=\"!form.valid\">Save</button>\r\n            <button type=\"button \" class=\"btn btn-danger\" (click)=\"onCancel()\">Back</button>\r\n        </div>\r\n        <ba-modal #childModal title=\"Information\" size=\"sm\">\r\n            {{DialogMessage}}\r\n        </ba-modal>\r\n    </form>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/masters/components/Employee/AddEmployee.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/masters/components/Employee/AddEmployee.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddEmployee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployee", function() { return AddEmployee; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_global_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app/global.state */ "./src/app/global.state.ts");
/* harmony import */ var _common_repositories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories */ "./src/app/common/repositories/index.ts");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");








var AddEmployee = /** @class */ (function () {
    function AddEmployee(_authService, router, activatedRoute, fb, masterRepo, state) {
        this._authService = _authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.masterRepo = masterRepo;
        this.state = state;
        this.DialogMessage = "Saving data please wait ...";
        this.mode = "";
        this.modeTitle = '';
        this.branches = [];
        this.subcriptions = [];
        this.employeeObj = { OFFDAY: [] };
        this.Days = [{ day: 'sunday', checked: false },
            { day: 'monday', checked: false },
            { day: 'tuesday', checked: false },
            { day: 'wednesday', checked: false },
            { day: 'thursday', checked: false },
            { day: 'friday', checked: false },
            { day: 'saturday', checked: false }];
        this.serviceList = [];
        this.serviceSetting = {};
        this.disableForm = false;
        if (!!this.activatedRoute.snapshot.params['returnUrl']) {
            this.returnUrl = this.activatedRoute.snapshot.params['returnUrl'];
        }
        if (!!this.activatedRoute.snapshot.params['mode']) {
            this.mode = this.activatedRoute.snapshot.params['mode'];
        }
        if (_authService.getUserProfile() && _authService.getUserProfile().Role == "admin") {
            this.disableForm = false;
        }
        else {
            this.disableForm = true;
        }
        if (this.mode == "view") {
            this.disableForm = true;
        }
    }
    AddEmployee.prototype.ngOnInit = function () {
        var _this = this;
        var e_1, _a;
        var self = this;
        this.form = this.fb.group({
            EMPLOYEEID: [''],
            NAME: [''],
            ADDRESS: [''],
            TELNO: [''],
            MOBILE: [''],
            DESIGNATION: [''],
            OFFDAY: [''],
            EMERGENCYCONTACTNAME: [''],
            EMERGENCYCONTACTNO: [''],
            Inactive: [''],
            branch: [{}],
            services: [[]]
        });
        if (this.mode == 'edit') {
            if (!!this.activatedRoute.snapshot.params['id']) {
                var id_1 = this.activatedRoute.snapshot.params['id'];
                this.employeeObj = this.masterRepo._employeeList.filter(function (r) { return r.EMPLOYEEID == id_1; })[0];
                if (this.employeeObj != null) {
                    this.form.patchValue({
                        EMPLOYEEID: this.employeeObj.EMPLOYEEID,
                        NAME: this.employeeObj.NAME,
                        ADDRESS: this.employeeObj.ADDRESS,
                        TELNO: this.employeeObj.TELNO,
                        MOBILE: this.employeeObj.MOBILE,
                        DESIGNATION: this.employeeObj.DESIGNATION,
                        OFFDAY: this.employeeObj.OFFDAY,
                        EMERGENCYCONTACTNAME: this.employeeObj.EMERGENCYCONTACTNAME,
                        EMERGENCYCONTACTNO: this.employeeObj.EMERGENCYCONTACTNO,
                        Inactive: this.employeeObj.Inactive
                    });
                    try {
                        for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.Days), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var d = _c.value;
                            d.checked = this.employeeObj.OFFDAY.indexOf(d.day) > -1;
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
            }
        }
        this.masterRepo.getBranchList().subscribe(function (response) {
            _this.branches = response;
            if (_this.mode == "edit") {
                if (_this.employeeObj && _this.employeeObj.branch) {
                    var branch = _this.branches.find(function (x) { return x.branchId == _this.employeeObj.branch.branchId; });
                    _this.form.patchValue({ branch: branch });
                }
            }
        }, function (err) {
            console.log(err);
            _this.masterRepo.handleWebError(err);
        });
        this.masterRepo.getServiceListNew().subscribe(function (response) {
            _this.serviceList = response.map(function (x) { return ({ id: x.SERVICEID, name: x.DESCRIPTION }); });
            if (_this.mode == "edit") {
                _this.masterRepo.getEmployeeServices(_this.employeeObj.EMPLOYEEID).subscribe(function (empService) {
                    _this.form.patchValue({ services: empService });
                });
            }
        });
        this.serviceSetting = {
            enableCheckAll: true,
            text: 'Select Services',
            enableSearchFilter: true,
            labelKey: "name",
            primaryKey: "id"
        };
    };
    AddEmployee.prototype.disabled = function () {
        if (this.mode == 'view') {
            return "#EBEBE4";
        }
        else {
            return "";
        }
    };
    AddEmployee.prototype.changeToArray = function (data) {
        //console.log(data);
        if (data) {
            var retData = [];
            retData.concat([], data);
            return retData;
        }
        return [];
    };
    AddEmployee.prototype.onSave = function () {
        //validate before Saving
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        this.onsubmit();
    };
    AddEmployee.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    AddEmployee.prototype.onsubmit = function () {
        var _this = this;
        var e_2, _a;
        try {
            var offDays = [];
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.Days), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var d = _c.value;
                    if (d.checked) {
                        offDays.push(d.day);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this.form.controls['OFFDAY'].setValue(offDays);
            var formValue = this.form.value;
            formValue.services = formValue.services.map(function (x) { return x.id; });
            var emp = formValue;
            //console.log("saved list");
            //console.log(emp);
            var sub = this.masterRepo.postmaster(this.mode, emp, "/SaveEmployee")
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    //Displaying dialog message for save with timer of 1 secs
                    _this.DialogMessage = "Data Saved Successfully";
                    setTimeout(function () {
                        _this.childModal.hide();
                        _this.router.navigate([_this.returnUrl]);
                    }, 1000);
                }
                else {
                    _this.DialogMessage = data.result;
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            }, function (error) { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    AddEmployee.prototype.onCancel = function () {
        this.router.navigate([this.returnUrl]);
    };
    AddEmployee.prototype.ngOnDestroy = function () {
        //if(this.subitSubscription)
        //  this.subitSubscription.unsubscribe();
        this.subcriptions.forEach(function (subs) {
            subs.unsubscribe();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], AddEmployee.prototype, "childModal", void 0);
    AddEmployee = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'addEmployee',
            template: __webpack_require__(/*! ./AddEmployee.component.html */ "./src/app/pages/masters/components/Employee/AddEmployee.component.html"),
            providers: [],
            styles: ["\n        input{\n            color: black;\n        }\n    "],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _common_repositories__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"], _app_global_state__WEBPACK_IMPORTED_MODULE_5__["GlobalState"]])
    ], AddEmployee);
    return AddEmployee;
}());



/***/ }),

/***/ "./src/app/pages/masters/components/Employee/EmployeeList.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/masters/components/Employee/EmployeeList.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n  <div class=\"row\">\r\n    <button class=\"btn btn-primary\" style=\"margin-bottom: 10px;margin-left:18px\" [disabled]=\"disableAdd\" (click)=\"onAddClick()\">Add Employee</button>\r\n  </div>\r\n  <div>\r\n    <ba-card title=\"Employees\" baCardClass=\"with-scroll\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (delete)=\"onDeleteConfirm($event)\"\r\n        (view)=\"onViewClick($event)\"></ng2-smart-table>\r\n    </ba-card>\r\n  </div>\r\n</div>\r\n\r\n<ba-modal #childModal title=\"Information\" size=\"md\">\r\n  <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n  {{DialogMessage}}\r\n</ba-modal>\r\n<ba-modal #deleteModal title=\"Warning\" size=\"sm\">\r\n  <div class=\"modal-body\">\r\n    Once you delete the Employee you can't recover it back. Are you sure you want to delete this Employee?\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n    <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=\"deleteModal.hide()\">Cancel</button>\r\n  </div>\r\n</ba-modal>"

/***/ }),

/***/ "./src/app/pages/masters/components/Employee/EmployeeList.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/masters/components/Employee/EmployeeList.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EmployeeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeList", function() { return EmployeeList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! style-loader!../smartTables.scss */ "./node_modules/style-loader/index.js!./src/app/pages/masters/components/smartTables.scss");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var EmployeeList = /** @class */ (function () {
    function EmployeeList(service, _authService, router) {
        var _this = this;
        this.service = service;
        this._authService = _authService;
        this.router = router;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.settings = {
            mode: 'external',
            delete: null,
            edit: null,
            columns: {
                NAME: {
                    title: 'Name',
                    type: 'string'
                },
                ADDRESS: {
                    title: 'Address',
                    type: 'string'
                },
                TELNO: {
                    title: 'Tel No.',
                    type: 'string'
                },
                DESIGNATION: {
                    title: 'Designation',
                    type: 'string'
                },
                OFFDAY: {
                    title: 'Off Day',
                    type: 'string'
                },
            }
        };
        this.subcriptions = [];
        this.source = new _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["LocalDataSource"]();
        var elist = [];
        this.service.getEmployeeList(true).subscribe(function (data) {
            var employees = data;
            elist.push.apply(elist, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](employees));
        }, function (Error) { return console.log(Error); }, function () {
            _this.service._employeeList = elist;
            _this.source.load(elist);
        });
        this.settings.delete = this.menuRight.delete ? {} : null;
        this.settings.edit = this.menuRight.edit ? {} : null;
    }
    Object.defineProperty(EmployeeList.prototype, "disableAdd", {
        get: function () {
            return !this.menuRight.create;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeList.prototype, "menuRight", {
        get: function () {
            return this._authService.getRole.menuRights.find(function (x) { return x.menuId === 'emp'; });
        },
        enumerable: true,
        configurable: true
    });
    EmployeeList.prototype.onAddClick = function () {
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            this.router.navigate(['/pages/masters/emp/detail-emp', { mode: "add", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to add Employee.";
            this.childModal.show();
        }
    };
    EmployeeList.prototype.onDeleteConfirm = function (event) {
        this.selectedRow = event;
        this.deleteModal.show();
    };
    EmployeeList.prototype.DeleteEvent = function () {
        var _this = this;
        this.deleteModal.hide();
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            try {
                this.DialogMessage = "Deleting please wait...";
                this.childModal.show();
                var sub = this.service.postmaster("delete", this.selectedRow.data, "/SaveEmployee")
                    .subscribe(function (data) {
                    if (data.status == 'ok') {
                        if (_this.service._employeeList.length > 0) {
                            _this.service._employeeList.splice(_this.service._employeeList.indexOf(_this.selectedRow.data), 1);
                            _this.source.load(_this.service._employeeList);
                        }
                        //Displaying dialog message for save with timer of 1 secs
                        _this.DialogMessage = "Data Deleted Successfully";
                        setTimeout(function () {
                            _this.childModal.hide();
                        }, 1000);
                    }
                    else {
                        _this.DialogMessage = data.result;
                        setTimeout(function () {
                            _this.childModal.hide();
                        }, 3000);
                    }
                }, function (error) { alert(error); });
                this.subcriptions.push(sub);
            }
            catch (e) {
                alert(e);
            }
        }
        else {
            this.DialogMessage = "You are not authorized to delete the Employee..";
            this.childModal.show();
        }
    };
    EmployeeList.prototype.onViewClick = function (event) {
        this.router.navigate(["/pages/masters/emp/detail-emp", { mode: "view", returnUrl: this.router.url, id: event.data.EMPLOYEEID }]);
    };
    EmployeeList.prototype.onEditClick = function (event) {
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            this.router.navigate(["/pages/masters/emp/detail-emp", { mode: "edit", returnUrl: this.router.url, id: event.data.EMPLOYEEID }]);
        }
        else {
            this.DialogMessage = "You are not authorized to edit employee.";
            this.childModal.show();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_3__["BaModalComponent"])
    ], EmployeeList.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmployeeList.prototype, "deleteModal", void 0);
    EmployeeList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'employeelist',
            template: __webpack_require__(/*! ./EmployeeList.component.html */ "./src/app/pages/masters/components/Employee/EmployeeList.component.html"),
            providers: [],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], EmployeeList);
    return EmployeeList;
}());



/***/ }),

/***/ "./src/app/pages/masters/components/HolidayEntry/addHoliday.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/masters/components/HolidayEntry/addHoliday.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <form id=formId class=\"form-horizontal\">\r\n        <ba-card [title]=\"modeTitle\">\r\n\r\n            <div class=\"form-group row \">\r\n                <div class=\"col-2 col-lg-2 col-sm-4\">\r\n                    <label for=\"holidayName\" class=\"form-control-label \">Holiday Name:</label>\r\n                </div>\r\n                <div class=\"col-4 col-lg-4 col-md-6 col-sm-8 \">\r\n                    <input required type=\"text \" class=\"form-control \" name=\"holidayName\" id=\"holidayName\"\r\n                        [(ngModel)]=\"holidayName\" placeholder=\"Holiday Name\">\r\n                </div>\r\n                <div class=\"col-4 col-lg-4 col-md-6 col-sm-6\">\r\n                    <input type=\"checkbox\" name=\"days\" [(ngModel)]=\"IsMultipleDays\" style=\"vertical-align:middle;\"\r\n                        id=\"days\">\r\n                    <label for=\"days\">Multiple Days</label>\r\n\r\n                    <input type=\"checkbox\" name=\"timeWise\" [(ngModel)]=\"IsTimeWise\" style=\"vertical-align:middle;\"\r\n                        id=\"timeWise\">\r\n                    <label for=\"timeWise\">Time Wise</label>\r\n\r\n                    <input type=\"checkbox\" name=\"empWise\" [(ngModel)]=\"IsEmpWise\" (change)=\"onEmpWiseChange()\" style=\"vertical-align:middle;\"\r\n                        id=\"empWise\">\r\n                    <label for=\"empWise\">Staff Wise</label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\" *ngIf=\"!IsMultipleDays\">\r\n\r\n                <div class=\"col-2 col-lg-2 col-sm-4\">\r\n                    <label class=\"form-control-label\" for=\"nepaliDateFrom\"> On Date: </label>\r\n                </div>\r\n\r\n                <div class=\"col-2 col-lg-2 col-sm-4\">\r\n                    <nepali-date-picker name=\"nepaliDateOn\" [id]=\"'nepaliDateon'\"\r\n                        (change)=\"changeOnDate($event.detail.value,'BS')\" [label]=\"'yyyy-mm-dd'\"\r\n                        [(ngModel)]=\"this.ScheduleDateBS\">\r\n                    </nepali-date-picker>\r\n                </div>\r\n                <div class=\"col-2 col-lg-2 col-sm-4\">\r\n                    <input type=\"date\" (change)=\"changeOnDate($event.target.value,'AD')\" class=\"date-input form-control\"\r\n                        name=\"onDate\" [(ngModel)]=\"this.ScheduleDateAD\" style=\"width: 150px;\"\r\n                        placeholder=\"Year Start Date\">\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group row\" *ngIf=\"IsMultipleDays\">\r\n\r\n                <div class=\"col-2 col-lg-2 col-sm-4\">\r\n                    <label for=\"nepaliDateFrom\" class=\"form-control-label\">From Date: </label>\r\n                </div>\r\n\r\n                <div class=\"col-2 col-lg-2 col-sm-4\">\r\n                    <nepali-date-picker name=\"nepaliDateFrom\" [id]=\"'nepaliDatefrom'\"\r\n                        (change)=\"changeFromDate($event.detail.value,'BS')\" [label]=\"'yyyy-mm-dd'\"\r\n                        [(ngModel)]=\"this.fromDateBS\">\r\n                    </nepali-date-picker>\r\n                </div>\r\n\r\n                <div class=\"col-2 col-lg-2 col-sm-4\">\r\n                    <input type=\"date\" (change)=\"changeFromDate($event.target.value,'AD')\"\r\n                        class=\"date-input form-control\" name=\"fromDate\" style=\"width: 150px;\" [(ngModel)]=\"fromDate\"\r\n                        placeholder=\"Year Start Date\">\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row\" *ngIf=\"IsMultipleDays\">\r\n\r\n                <div class=\"col-2 col-lg-2 col-sm-4\">\r\n                    <label for=\"nepaliDateTo\" class=\"form-control-label\"> To Date: </label>\r\n                </div>\r\n\r\n                <div class=\"col-2 col-lg-2 col-sm-4\">\r\n                    <nepali-date-picker name=\"nepaliDateTo\" [id]=\"'nepaliDateto'\"\r\n                        (change)=\"changeToDate($event.detail.value,'BS')\" [label]=\"'yyyy-mm-dd'\" disableDaysAfter=\"9\"\r\n                        [(ngModel)]=\"this.toDateBS\">\r\n                    </nepali-date-picker>\r\n                </div>\r\n\r\n                <div class=\"col-2 col-lg-2 col-sm-4\">\r\n                    <input type=\"date\" class=\"date-input form-control\" name=\"toDate\"\r\n                        (change)=\"changeToDate($event.target.value, 'AD')\" style=\"width: 150px;\" [(ngModel)]=\"toDate\"\r\n                        placeholder=\"Year Start Date\">\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group row\" *ngIf=\"IsTimeWise\">\r\n                <div class=\"col-2 col-lg-2 col-sm-6\">\r\n                    <label for=\"time\" class=\"form-control-label\">Time Period</label>\r\n                </div>\r\n\r\n                <div class=\"col-2 col-lg-2 col-sm-6\">\r\n                    <input name=\"time\" type=\"time\" class=\"form-control\" style=\"width: 150px;\" [(ngModel)]=\"StartTime\" />\r\n                </div>\r\n                <div class=\"col-2 col-lg-2 col-sm-6\">\r\n                    <input name=\"toTime\" type=\"time\" class=\"form-control\" style=\"width: 150px;\" [(ngModel)]=\"EndTime\" />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\" *ngIf=\"IsEmpWise\">\r\n                <div class=\"col-2 col-lg-2 col-sm-6\">\r\n                    <label for=\"employee\" class=\"form-control-label\">Staff</label>\r\n                </div>\r\n\r\n                <div class=\"col-2 col-lg-2 col-sm-12\">\r\n                    <select class=\"form-control\" name=\"employee\" multiple multiselect-search=\"true\"\r\n                    [(ngModel)]=\"selectedEmployees\">\r\n                    <option *ngFor=\"let em of employeeList\" [ngValue]=\"em\">{{em.NAME}}</option>\r\n                  </select>\r\n                </div>\r\n            </div>\r\n\r\n        </ba-card>\r\n\r\n        <button *ngIf=\"mode=='add' || mode=='edit'\" (click)=\"onSave()\" class=\"btn btn-primary \">Save</button>\r\n        <button type=\"button \" class=\"btn btn-danger\" (click)=\"onCancel()\">Back</button>\r\n    </form>\r\n</div>\r\n\r\n\r\n<ba-modal #childModal title=\"Information\" size=\"sm\">\r\n    {{DialogMessage}}\r\n</ba-modal>"

/***/ }),

/***/ "./src/app/pages/masters/components/HolidayEntry/addHoliday.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/masters/components/HolidayEntry/addHoliday.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddHolidayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHolidayComponent", function() { return AddHolidayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _common_repositories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/repositories */ "./src/app/common/repositories/index.ts");
/* harmony import */ var _common_services_disable_date_picker_disable_date_picker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/services/disable-date-picker/disable-date-picker.service */ "./src/app/common/services/disable-date-picker/disable-date-picker.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var AddHolidayComponent = /** @class */ (function () {
    function AddHolidayComponent(activatedRoute, router, masterRepo, disableDateService, datePipe) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.masterRepo = masterRepo;
        this.disableDateService = disableDateService;
        this.datePipe = datePipe;
        this.DialogMessage = "Saving data please wait ...";
        this.employeeList = [];
        this.selectedEmployees = [];
        this.modeTitle = "";
        this.IsMultipleDays = false;
        this.IsTimeWise = false;
        this.IsEmpWise = false;
        this.mode = "add";
        this.holiday = {};
        this.valid = true;
        this.adisable = new Date('2077-12-09');
        this.subscription = [];
        this.options = {
            disableDaysAfter: 3,
            disableDaysBefore: 3
        };
        if (!!this.activatedRoute.snapshot.params['returnUrl']) {
            this.returnUrl = this.activatedRoute.snapshot.params['returnUrl'];
        }
        if (!!this.activatedRoute.snapshot.params['mode']) {
            this.mode = this.activatedRoute.snapshot.params['mode'];
        }
    }
    AddHolidayComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log('MODE',this.mode)
        if (this.masterRepo._employeeList.length > 0) {
            this.employeeList = this.masterRepo._employeeList;
        }
        else {
            this.masterRepo.getEmployeeList().subscribe(function (data) {
                _this.employeeList = data;
            }, function (Error) { return console.log(Error); }, function () {
                _this.masterRepo._employeeList = _this.employeeList;
            });
        }
        if (this.mode == "edit") {
            if (!!this.activatedRoute.snapshot.params['id']) {
                var id_1 = this.activatedRoute.snapshot.params['id'];
                var loadedValue_1 = this.masterRepo._holidayList.filter(function (r) { return r.HOLIDAYID == id_1; })[0];
                //console.log('LOADED VALUE', loadedValue)
                if (loadedValue_1 != null) {
                    this.holiday.HOLIDAYID = loadedValue_1.HOLIDAYID;
                    this.holidayName = loadedValue_1.DESCRIPTION;
                    //console.log('LOADED VALUE',loadedValue)
                    if (loadedValue_1.BEGINDATE == loadedValue_1.ENDDATE) {
                        this.IsMultipleDays = false;
                        this.ScheduleDateAD = this.datePipe.transform(loadedValue_1.BEGINDATE, 'yyyy-MM-dd').toString();
                        this.changeOnDate(this.ScheduleDateAD, 'AD');
                    }
                    else {
                        this.IsMultipleDays = true;
                        // this.fromDate = loadedValue.BEGINDATE.toString();
                        // this.toDate = loadedValue.ENDDATE.toString();
                        this.fromDate = this.datePipe.transform(loadedValue_1.BEGINDATE, 'yyyy-MM-dd').toString();
                        this.toDate = this.datePipe.transform(loadedValue_1.ENDDATE, 'yyyy-MM-dd');
                        this.changeFromDate(this.fromDate, 'AD');
                        this.changeToDate(this.toDate, 'AD');
                    }
                    if (loadedValue_1.StartTime && loadedValue_1.EndTime) {
                        this.IsTimeWise = true;
                        this.StartTime = loadedValue_1.StartTime;
                        this.EndTime = loadedValue_1.EndTime;
                    }
                    if (loadedValue_1.EmployeeList) {
                        this.IsEmpWise = true;
                        this.selectedEmployees = this.employeeList.filter(function (x) { return loadedValue_1.EmployeeList.some(function (y) { return y === x.EMPLOYEEID; }); });
                    }
                    // this.form.setValue({ MEDICATIONID: id, DESCRIPTION: loadedValue.DESCRIPTION });
                }
            }
        }
        this.onEmpWiseChange();
    };
    AddHolidayComponent.prototype.onSave = function () {
        this.DialogMessage = "Saving data please wait ...";
        this.childModal.show();
        this.onSubmit();
    };
    AddHolidayComponent.prototype.changeOnDate = function (value, format) {
        if (format == "AD") {
            this.ScheduleDateBS = this.masterRepo.toBSDate(value);
        }
        else if (format == "BS") {
            this.ScheduleDateAD = this.masterRepo.toADDate(value);
        }
    };
    AddHolidayComponent.prototype.changeFromDate = function (value, format) {
        if (format == "AD") {
            this.fromDateBS = this.masterRepo.toBSDate(value);
        }
        else if (format == "BS") {
            this.fromDate = this.masterRepo.toADDate(value);
        }
    };
    AddHolidayComponent.prototype.changeToDate = function (value, format) {
        if (format == "AD") {
            this.toDateBS = this.masterRepo.toBSDate(value);
        }
        else if (format == "BS") {
            this.toDate = this.masterRepo.toADDate(value);
        }
    };
    AddHolidayComponent.prototype.onSubmit = function () {
        var _this = this;
        try {
            this.holiday.DESCRIPTION = this.holidayName;
            if (!this.IsMultipleDays) {
                var newOnDate = new Date(this.ScheduleDateAD);
                this.holiday.BEGINDATE = newOnDate;
            }
            else {
                var newFromDate = new Date(this.fromDate);
                var newToDate = new Date(this.toDate);
                this.holiday.BEGINDATE = newFromDate;
                this.holiday.ENDDATE = newToDate;
            }
            //console.log('HOLIDAY MODEL AND DATA',this.holiday, this.onDate, this.toDate, this.fromDate);
            if (!this.IsMultipleDays) {
                var newEndDate = new Date(this.ScheduleDateAD);
                this.holiday.ENDDATE = newEndDate;
                //console.log('SINGLE')
                if (this.ScheduleDateAD == undefined || this.ScheduleDateAD == null) {
                    this.valid = false;
                    //console.log("VALIDITY SINGLE", this.valid);
                }
            }
            else if (this.IsMultipleDays) {
                //console.log('MULTIPLE')
                if (this.toDate == undefined || this.fromDate == undefined) {
                    this.valid = false;
                    //console.log("VALIDITY MULTI", this.valid);
                }
            }
            else {
                this.valid = false;
                //console.log("VALIDITY ELSE", this.valid);
            }
            if (this.holidayName == null || this.holidayName == undefined || this.holidayName == "") {
                this.valid = false;
                //console.log("VALIDITY NAME", this.valid);
            }
            if (this.IsTimeWise) {
                if (this.validateTime()) {
                    this.holiday.StartTime = this.StartTime;
                    this.holiday.EndTime = this.EndTime;
                }
                else {
                    return;
                }
            }
            if (this.IsEmpWise) {
                this.holiday.EmployeeList = this.selectedEmployees.map(function (x) { return x.EMPLOYEEID; });
            }
            //console.log(this.holiday);
            if (this.valid == true) {
                //if (false) {
                var sub_1 = this.masterRepo.postmaster(this.mode, this.holiday, "/SaveHoliday")
                    .subscribe(function (data) {
                    if (data.status == 'ok') {
                        //Displaying dialog message for save with timer of 1 secs
                        _this.DialogMessage = "Data Saved Successfully";
                        setTimeout(function () {
                            _this.childModal.hide();
                            _this.router.navigate([_this.returnUrl]);
                        }, 1000);
                    }
                    else {
                        _this.DialogMessage = data.result;
                        setTimeout(function () {
                            _this.childModal.hide();
                        }, 3000);
                    }
                }, function (error) { alert(error); });
                (function () {
                    //SEND TO NEPALIDATE PICKER FOR DISABLE
                    _this.disableDateService.getDisableDates();
                    _this.subscription.push(sub_1);
                });
            }
            else {
                this.DialogMessage = "Form is Invalid";
                this.childModal.show();
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    AddHolidayComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    AddHolidayComponent.prototype.onCancel = function () {
        this.router.navigate([this.returnUrl]);
    };
    AddHolidayComponent.prototype.validateTime = function () {
        if (!(this.StartTime && this.EndTime)) {
            this.DialogMessage = "Please select the time";
            this.childModal.show();
            return false;
        }
        else if (this.StartTime > this.EndTime) {
            this.DialogMessage = "End time is earlier than Start Time";
            this.childModal.show();
            return false;
        }
        return true;
    };
    AddHolidayComponent.prototype.onEmpWiseChange = function () {
        setTimeout(function () {
            MultiselectDropdown(null);
        }, 1);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_3__["BaModalComponent"])
    ], AddHolidayComponent.prototype, "childModal", void 0);
    AddHolidayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-holiday',
            template: __webpack_require__(/*! ./addHoliday.component.html */ "./src/app/pages/masters/components/HolidayEntry/addHoliday.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _common_repositories__WEBPACK_IMPORTED_MODULE_4__["MasterRepo"],
            _common_services_disable_date_picker_disable_date_picker_service__WEBPACK_IMPORTED_MODULE_5__["DisableDateService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
    ], AddHolidayComponent);
    return AddHolidayComponent;
}());



/***/ }),

/***/ "./src/app/pages/masters/components/HolidayEntry/holidayEntry.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/masters/components/HolidayEntry/holidayEntry.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n    <div class=\"row\">\r\n      <button class=\"btn btn-primary\" style=\"margin-bottom: 10px;margin-left:18px\" [disabled]=\"disableAdd \" (click)=\"onAddClick()\" >Add Holiday</button>\r\n    </div>\r\n\r\n    <div>\r\n        <ba-card title=\"holiday\" baCardClass=\"with-scroll\">\r\n            <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (delete)=\"onDeleteConfirm($event)\" ></ng2-smart-table>\r\n        </ba-card>\r\n    </div>\r\n</div>\r\n\r\n<ba-modal #childModal title=\"Information\" size=\"md\">\r\n  <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n    {{DialogMessage}}\r\n</ba-modal>\r\n\r\n<ba-modal #deleteModal title=\"Warning\" size=\"sm\">\r\n  <div class=\"modal-body\">\r\n    Once you delete the Holiday you can't recover it back. Are U sure you want to delete this Holiday?\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\" >Yes</button>\r\n    <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=\"deleteModal.hide()\">Cancel</button>\r\n  </div>\r\n</ba-modal>"

/***/ }),

/***/ "./src/app/pages/masters/components/HolidayEntry/holidayEntry.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/masters/components/HolidayEntry/holidayEntry.component.ts ***!
  \*********************************************************************************/
/*! exports provided: HolidayEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayEntryComponent", function() { return HolidayEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var _common_repositories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories */ "./src/app/common/repositories/index.ts");
/* harmony import */ var _common_services_permission__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/services/permission */ "./src/app/common/services/permission/index.ts");









var HolidayEntryComponent = /** @class */ (function () {
    function HolidayEntryComponent(_authService, router, service, datePipe) {
        var _this = this;
        this._authService = _authService;
        this.router = router;
        this.service = service;
        this.datePipe = datePipe;
        this.DialogMessage = "You are not authorized";
        this.subcriptions = [];
        this.settings = {
            mode: 'external',
            edit: null,
            delete: null,
            columns: {
                DESCRIPTION: {
                    title: 'Holiday Description',
                    type: 'string'
                },
                BEGINDATE: {
                    title: 'From/On Date',
                    valuePrepareFunction: function (date) {
                        var raw = new Date(date);
                        var formatted = _this.datePipe.transform(raw, 'dd MMM yyyy');
                        return formatted;
                    },
                    type: 'date'
                },
                ENDDATE: {
                    title: 'To Date',
                    valuePrepareFunction: function (date) {
                        var raw = new Date(date);
                        var formatted = _this.datePipe.transform(raw, 'dd MMM yyyy');
                        return formatted;
                    },
                    type: 'date'
                }
            }
        };
        var Hlist = [];
        this.service.getHolidayList().subscribe(function (data) {
            var holidays = data;
            Hlist.push.apply(Hlist, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](holidays));
        }, function (Error) { return console.log(Error); }, function () {
            _this.service._holidayList = Hlist;
            _this.source = new _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["LocalDataSource"](Hlist);
        });
        this.settings.delete = this.menuRight.delete ? {} : null;
        this.settings.edit = this.menuRight.edit ? {} : null;
    }
    Object.defineProperty(HolidayEntryComponent.prototype, "disableAdd", {
        get: function () {
            return !this.menuRight.create;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HolidayEntryComponent.prototype, "menuRight", {
        get: function () {
            return this._authService.getRole.menuRights.find(function (x) { return x.menuId === 'holiday'; });
        },
        enumerable: true,
        configurable: true
    });
    HolidayEntryComponent.prototype.onAddClick = function () {
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            this.router.navigate(['/pages/masters/holiday/detail-holiday', { mode: "add", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to add Holiday.";
            this.childModal.show();
        }
    };
    HolidayEntryComponent.prototype.onEditClick = function (event) {
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            //console.log("ID OF HOLIDAY", event.data.HOLIDAYID)
            this.router.navigate(["/pages/masters/holiday/detail-holiday", { id: event.data.HOLIDAYID, mode: "edit", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to edit room.";
            this.childModal.show();
        }
    };
    HolidayEntryComponent.prototype.onDeleteConfirm = function (event) {
        this.selectedRow = event;
        this.deleteModal.show();
    };
    HolidayEntryComponent.prototype.DeleteEvent = function () {
        var _this = this;
        this.deleteModal.hide();
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            try {
                this.DialogMessage = "Deleting please wait...";
                this.childModal.show();
                var sub = this.service.postmaster("delete", this.selectedRow.data, "/SaveHoliday")
                    .subscribe(function (data) {
                    if (data.status == 'ok') {
                        //Displaying dialog message for save with timer of 1 secs
                        if (_this.service._holidayList.length > 0) {
                            _this.service._holidayList.splice(_this.service._holidayList.indexOf(_this.selectedRow.data), 1);
                            _this.source.load(_this.service._holidayList);
                        }
                        _this.DialogMessage = "Data Deleted Successfully";
                        setTimeout(function () {
                            _this.childModal.hide();
                        }, 1000);
                    }
                    else {
                        _this.DialogMessage = data.result;
                        setTimeout(function () {
                            _this.childModal.hide();
                        }, 3000);
                    }
                }, function (error) { alert(error); });
                this.subcriptions.push(sub);
            }
            catch (e) {
                alert(e);
            }
        }
        else {
            this.DialogMessage = "You are not authorized to delete  room.";
            this.childModal.show();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_4__["BaModalComponent"])
    ], HolidayEntryComponent.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('deleteModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_4__["BaModalComponent"])
    ], HolidayEntryComponent.prototype, "deleteModal", void 0);
    HolidayEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'holiday-entry',
            template: __webpack_require__(/*! ./holidayEntry.component.html */ "./src/app/pages/masters/components/HolidayEntry/holidayEntry.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_permission__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _common_repositories__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
    ], HolidayEntryComponent);
    return HolidayEntryComponent;
}());



/***/ }),

/***/ "./src/app/pages/masters/components/Medication/AddMedication.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/masters/components/Medication/AddMedication.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <form id=formId class=\"form-horizontal\" [formGroup]=\"form\">\r\n        <ba-card [title]=\"modeTitle\">\r\n            <div class=\"form-group row \">\r\n                <label for=\"description\" class=\"col-sm-2 form-control-label \">Description</label>\r\n                <div class=\"col-sm-6 \">\r\n                    <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\" type=\"text \" class=\"form-control \" name=\"description\" id=\"description\" formControlName=\"DESCRIPTION\" placeholder=\"Medication Description\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row \">\r\n                <label for=\"remarks\" class=\"col-sm-2 form-control-label \">Special Notes</label>\r\n                <div class=\"col-sm-6 \">\r\n                    <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\" type=\"text \" class=\"form-control \" name=\"remarks\" id=\"remarks\" formControlName=\"REMARKS\" placeholder=\"Special Notes\">\r\n                </div>\r\n            </div>\r\n        </ba-card>\r\n        <div style=\"padding-bottom: 10px; margin-top: -8px;\">\r\n            <button *ngIf=\"mode=='add' || mode=='edit'\" (click)=\"onSave()\" style=\"margin-right: 4px;\" class=\"btn btn-primary \" [disabled]=\"!form.valid\">Save</button>\r\n            <button type=\"button \" class=\"btn btn-danger\" (click)=\"onCancel()\">Back</button>\r\n        </div>\r\n        <ba-modal #childModal title=\"Information\" size=\"sm\">\r\n            {{DialogMessage}}\r\n        </ba-modal>\r\n    </form>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/masters/components/Medication/AddMedication.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/masters/components/Medication/AddMedication.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddMedication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMedication", function() { return AddMedication; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../global.state */ "./src/app/global.state.ts");
/* harmony import */ var _common_repositories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories */ "./src/app/common/repositories/index.ts");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");








var AddMedication = /** @class */ (function () {
    function AddMedication(_authService, router, activatedRoute, fb, masterRepo, state) {
        this._authService = _authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.masterRepo = masterRepo;
        this.state = state;
        this.DialogMessage = "Saving data please wait ...";
        this.mode = "add";
        this.viewMode = false;
        this.modeTitle = '';
        this.medication = {};
        this.initialTextReadOnly = false;
        this.model = {
            //MEDICATIONID: '',
            DESCRIPTION: '',
            REMARKS: ''
        };
        this.rategroup = [];
        this.subcriptions = [];
        if (!!this.activatedRoute.snapshot.params['returnUrl']) {
            this.returnUrl = this.activatedRoute.snapshot.params['returnUrl'];
        }
        if (!!this.activatedRoute.snapshot.params['mode']) {
            this.mode = this.activatedRoute.snapshot.params['mode'];
        }
    }
    AddMedication.prototype.ngOnInit = function () {
        var self = this;
        this.form = this.fb.group({
            MEDICATIONID: [''],
            DESCRIPTION: [''],
            REMARKS: ['']
        });
        if (this.mode == "edit") {
            if (!!this.activatedRoute.snapshot.params['id']) {
                var id_1 = this.activatedRoute.snapshot.params['id'];
                var loadedValue = this.masterRepo._medicationList.filter(function (r) { return r.MEDICATIONID == id_1; })[0];
                if (loadedValue != null) {
                    this.form.setValue({ MEDICATIONID: id_1, DESCRIPTION: loadedValue.DESCRIPTION, REMARKS: loadedValue.REMARKS });
                }
            }
        }
    };
    AddMedication.prototype.disabled = function () {
        if (this.viewMode == true) {
            return "#EBEBE4";
        }
        else {
            return "";
        }
    };
    AddMedication.prototype.changeToArray = function (data) {
        //console.log(data);
        if (data) {
            var retData = [];
            retData.concat([], data);
            return retData;
        }
        return [];
    };
    AddMedication.prototype.onSave = function () {
        //validate before Saving
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        this.onsubmit();
    };
    AddMedication.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    AddMedication.prototype.onsubmit = function () {
        var _this = this;
        try {
            var medication = this.form.value;
            //console.log(medication);
            var sub = this.masterRepo.postmaster(this.mode, medication, "/SaveMedication")
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    //Displaying dialog message for save with timer of 1 secs
                    _this.DialogMessage = "Data Saved Successfully";
                    setTimeout(function () {
                        _this.childModal.hide();
                        _this.router.navigate([_this.returnUrl]);
                    }, 1000);
                }
                else {
                    _this.DialogMessage = data.result;
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            }, function (error) { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    AddMedication.prototype.onCancel = function () {
        //console.log(this.returnUrl)
        this.router.navigate([this.returnUrl]);
    };
    AddMedication.prototype.ngOnDestroy = function () {
        //if(this.subitSubscription)
        //  this.subitSubscription.unsubscribe();
        this.subcriptions.forEach(function (subs) {
            subs.unsubscribe();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], AddMedication.prototype, "childModal", void 0);
    AddMedication = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'addMedication',
            template: __webpack_require__(/*! ./AddMedication.component.html */ "./src/app/pages/masters/components/Medication/AddMedication.component.html"),
            providers: [],
            styles: ["\n        input{\n            color: black;\n        }\n    "],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _common_repositories__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"], _global_state__WEBPACK_IMPORTED_MODULE_5__["GlobalState"]])
    ], AddMedication);
    return AddMedication;
}());



/***/ }),

/***/ "./src/app/pages/masters/components/Medication/MedicationList.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/masters/components/Medication/MedicationList.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n  <div class=\"row\">\r\n    <button class=\"btn btn-primary\" style=\"margin-bottom: 10px;margin-left:18px\" (click)=\"onAddClick()\" >Add Medication</button>\r\n  </div>\r\n  <div>\r\n    <ba-card title=\"Medications\" baCardClass=\"with-scroll w-100\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (delete)=\"onDeleteConfirm($event)\"></ng2-smart-table>\r\n    </ba-card>\r\n  </div>\r\n</div>\r\n\r\n<ba-modal #childModal title=\"Information\" size=\"md\">\r\n  <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n    {{DialogMessage}}\r\n</ba-modal>\r\n<ba-modal #deleteModal title=\"Warning\" size=\"sm\">\r\n  <div class=\"modal-body\">\r\n    Once you delete the Medication you can't recover it back. Are U sure you want to delete this Medication?\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n    <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=\"deleteModal.hide()\">Cancel</button>\r\n  </div>\r\n</ba-modal>"

/***/ }),

/***/ "./src/app/pages/masters/components/Medication/MedicationList.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/masters/components/Medication/MedicationList.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MedicationList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationList", function() { return MedicationList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! style-loader!../smartTables.scss */ "./node_modules/style-loader/index.js!./src/app/pages/masters/components/smartTables.scss");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var MedicationList = /** @class */ (function () {
    function MedicationList(service, _authService, router) {
        var _this = this;
        this.service = service;
        this._authService = _authService;
        this.router = router;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.settings = {
            mode: 'external',
            columns: {
                // ROOMNO: {
                //   title: 'Room No.',
                //   type: 'string'
                // },
                DESCRIPTION: {
                    title: 'Medication Description',
                    type: 'string'
                }
            }
        };
        this.subcriptions = [];
        var Mlist = [];
        this.service.getMedicationList().subscribe(function (data) {
            Mlist = data;
            console.log("data", Mlist);
        }, function (Error) { return console.log(Error); }, function () {
            _this.service._medicationList = Mlist;
            console.log(Mlist);
            // this.source.load(Mlist);
            _this.source = new _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["LocalDataSource"](Mlist);
        });
    }
    MedicationList.prototype.onAddClick = function () {
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            this.router.navigate(['/pages/masters/medication/detail-medication', { mode: "add", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to add Medication.";
            this.childModal.show();
        }
    };
    MedicationList.prototype.onDeleteConfirm = function (event) {
        this.selectedRow = event;
        this.deleteModal.show();
    };
    MedicationList.prototype.DeleteEvent = function () {
        var _this = this;
        this.deleteModal.hide();
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            try {
                this.DialogMessage = "Deleting please wait...";
                this.childModal.show();
                var sub = this.service.postmaster("delete", this.selectedRow.data, "/SaveMedication")
                    .subscribe(function (data) {
                    if (data.status == 'ok') {
                        //Displaying dialog message for save with timer of 1 secs
                        if (_this.service._medicationList.length > 0) {
                            _this.service._medicationList.splice(_this.service._medicationList.indexOf(_this.selectedRow.data), 1);
                            _this.source.load(_this.service._medicationList);
                        }
                        _this.DialogMessage = "Data Deleted Successfully";
                        setTimeout(function () {
                            _this.childModal.hide();
                        }, 1000);
                    }
                    else {
                        _this.DialogMessage = data.result;
                        setTimeout(function () {
                            _this.childModal.hide();
                        }, 3000);
                    }
                }, function (error) { alert(error); });
                this.subcriptions.push(sub);
            }
            catch (e) {
                alert(e);
            }
        }
        else {
            this.DialogMessage = "You are not authorized to delete  room.";
            this.childModal.show();
        }
    };
    MedicationList.prototype.onEditClick = function (event) {
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            this.router.navigate(["/pages/masters/medication/detail-medication", { id: event.data.MEDICATIONID, mode: "edit", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to edit room.";
            this.childModal.show();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], MedicationList.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], MedicationList.prototype, "deleteModal", void 0);
    MedicationList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'medicationlist',
            template: __webpack_require__(/*! ./MedicationList.component.html */ "./src/app/pages/masters/components/Medication/MedicationList.component.html"),
            providers: [],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], MedicationList);
    return MedicationList;
}());



/***/ }),

/***/ "./src/app/pages/masters/components/Prescription/AddPrescription.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/masters/components/Prescription/AddPrescription.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <form id=formId class=\"form-horizontal\" [formGroup]=\"form\">\r\n        <ba-card [title]=\"modeTitle\">\r\n            <div class=\"form-group row \">\r\n                <label for=\"prescription\" class=\"col-sm-2 form-control-label \">Prescription</label>\r\n                <div class=\"col-sm-6 \">\r\n                    <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                        type=\"text \" class=\"form-control \" name=\"prescription\" id=\"prescription\"\r\n                        formControlName=\"DESCA\" placeholder=\"Prescription\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row \">\r\n                <label for=\"directives\" class=\"col-sm-2 form-control-label \">Directives</label>\r\n                <div class=\"col-sm-6 \">\r\n                    <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                        type=\"text \" class=\"form-control \" name=\"directives\" id=\"directives\" formControlName=\"directives\"\r\n                        placeholder=\"Directives\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row \">\r\n                <label for=\"cautions\" class=\"col-sm-2 form-control-label \">Cautions</label>\r\n                <div class=\"col-sm-6 \">\r\n                    <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\"\r\n                        type=\"text \" class=\"form-control \" name=\"cautions\" id=\"cautions\" formControlName=\"cautions\"\r\n                        placeholder=\"Cautions\">\r\n                </div>\r\n            </div>\r\n        </ba-card>\r\n        <div style=\"padding-bottom: 10px; margin-top: -8px;\">\r\n            <button *ngIf=\"mode=='add' || mode=='edit'\" (click)=\"onSave()\" style=\"margin-right: 4px;\"\r\n                class=\"btn btn-primary \" [disabled]=\"!form.valid\">Save</button>\r\n            <button type=\"button \" class=\"btn btn-danger\" (click)=\"onCancel()\">Back</button>\r\n        </div>\r\n        <ba-modal #childModal title=\"Information\" size=\"sm\">\r\n            {{DialogMessage}}\r\n        </ba-modal>\r\n    </form>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/masters/components/Prescription/AddPrescription.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/masters/components/Prescription/AddPrescription.component.ts ***!
  \************************************************************************************/
/*! exports provided: AddPrescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPrescription", function() { return AddPrescription; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../global.state */ "./src/app/global.state.ts");
/* harmony import */ var _common_repositories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories */ "./src/app/common/repositories/index.ts");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");








var AddPrescription = /** @class */ (function () {
    function AddPrescription(_authService, router, activatedRoute, fb, masterRepo, state) {
        this._authService = _authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.masterRepo = masterRepo;
        this.state = state;
        this.DialogMessage = "Saving data please wait ...";
        this.mode = "add";
        this.viewMode = false;
        this.modeTitle = '';
        this.prescription = {};
        this.initialTextReadOnly = false;
        this.model = {
            //MEDICATIONID: '',
            DESCA: '',
            directives: '',
            cautions: ''
        };
        this.subcriptions = [];
        if (!!this.activatedRoute.snapshot.params['returnUrl']) {
            this.returnUrl = this.activatedRoute.snapshot.params['returnUrl'];
        }
        if (!!this.activatedRoute.snapshot.params['mode']) {
            this.mode = this.activatedRoute.snapshot.params['mode'];
        }
    }
    AddPrescription.prototype.ngOnInit = function () {
        var self = this;
        this.form = this.fb.group({
            id: [''],
            DESCA: [''],
            directives: [''],
            cautions: ['']
        });
        if (this.mode == "edit") {
            if (!!this.activatedRoute.snapshot.params['id']) {
                var id_1 = this.activatedRoute.snapshot.params['id'];
                var loadedValue = this.masterRepo._prescriptionList.filter(function (r) { return r.id == id_1; })[0];
                if (loadedValue != null) {
                    this.form.setValue({
                        id: id_1,
                        DESCA: loadedValue.DESCA,
                        directives: loadedValue.directives,
                        cautions: loadedValue.cautions
                    });
                }
            }
        }
    };
    AddPrescription.prototype.disabled = function () {
        if (this.viewMode == true) {
            return "#EBEBE4";
        }
        else {
            return "";
        }
    };
    AddPrescription.prototype.changeToArray = function (data) {
        //console.log(data);
        if (data) {
            var retData = [];
            retData.concat([], data);
            return retData;
        }
        return [];
    };
    AddPrescription.prototype.onSave = function () {
        //validate before Saving
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        this.onsubmit();
    };
    AddPrescription.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    AddPrescription.prototype.onsubmit = function () {
        var _this = this;
        try {
            var prescription = this.form.value;
            //console.log(medication);
            var sub = this.masterRepo.postmaster(this.mode, prescription, "/SavePrescription")
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    //Displaying dialog message for save with timer of 1 secs
                    _this.DialogMessage = "Data Saved Successfully";
                    setTimeout(function () {
                        _this.childModal.hide();
                        _this.router.navigate([_this.returnUrl]);
                    }, 1000);
                }
                else {
                    _this.DialogMessage = data.result;
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            }, function (error) { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    AddPrescription.prototype.onCancel = function () {
        //console.log(this.returnUrl)
        this.router.navigate([this.returnUrl]);
    };
    AddPrescription.prototype.ngOnDestroy = function () {
        //if(this.subitSubscription)
        //  this.subitSubscription.unsubscribe();
        this.subcriptions.forEach(function (subs) {
            subs.unsubscribe();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], AddPrescription.prototype, "childModal", void 0);
    AddPrescription = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'addPrescription',
            template: __webpack_require__(/*! ./AddPrescription.component.html */ "./src/app/pages/masters/components/Prescription/AddPrescription.component.html"),
            providers: [],
            styles: ["\n        input{\n            color: black;\n        }\n    "],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _common_repositories__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"], _global_state__WEBPACK_IMPORTED_MODULE_5__["GlobalState"]])
    ], AddPrescription);
    return AddPrescription;
}());



/***/ }),

/***/ "./src/app/pages/masters/components/Prescription/PrescriptionList.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/masters/components/Prescription/PrescriptionList.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n  <div class=\"row\">\r\n    <button class=\"btn btn-primary\" style=\"margin-bottom: 10px;margin-left:18px\" (click)=\"onAddClick()\" >Add Prescription</button>\r\n  </div>\r\n  <div>\r\n    <ba-card title=\"Prescriptions\" baCardClass=\"with-scroll w-100\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (delete)=\"onDeleteConfirm($event)\" ></ng2-smart-table>\r\n    </ba-card>\r\n  </div>\r\n</div>\r\n\r\n<ba-modal #childModal title=\"Information\" size=\"md\">\r\n  <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n    {{DialogMessage}}\r\n</ba-modal>\r\n<ba-modal #deleteModal title=\"Warning\" size=\"sm\">\r\n  <div class=\"modal-body\">\r\n    Once you delete the Prescription you can't recover it back. Are U sure you want to delete this Prescription?\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n    <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=\"deleteModal.hide()\">Cancel</button>\r\n  </div>\r\n</ba-modal>"

/***/ }),

/***/ "./src/app/pages/masters/components/Prescription/PrescriptionList.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/masters/components/Prescription/PrescriptionList.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PrescriptionList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriptionList", function() { return PrescriptionList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! style-loader!../smartTables.scss */ "./node_modules/style-loader/index.js!./src/app/pages/masters/components/smartTables.scss");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var PrescriptionList = /** @class */ (function () {
    function PrescriptionList(service, _authService, router) {
        var _this = this;
        this.service = service;
        this._authService = _authService;
        this.router = router;
        this.DialogMessage = "You are not authorized";
        this.settings = {
            mode: 'external',
            columns: {
                // ROOMNO: {
                //   title: 'Room No.',
                //   type: 'string'
                // },
                DESCA: {
                    title: 'Prescription',
                    type: 'string'
                }
            }
        };
        this.subcriptions = [];
        var Plist = [];
        this.service.getPrescriptionList().subscribe(function (data) {
            Plist = data;
        }, function (Error) { return console.log(Error); }, function () {
            _this.service._prescriptionList = Plist;
            console.log(Plist);
            // this.source.load(Mlist);
            _this.source = new _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["LocalDataSource"](Plist);
        });
    }
    PrescriptionList.prototype.onAddClick = function () {
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            this.router.navigate(['/pages/masters/prescription/detail-prescription', { mode: "add", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to add Prescription.";
            this.childModal.show();
        }
    };
    PrescriptionList.prototype.onDeleteConfirm = function (event) {
        this.selectedRow = event;
        this.deleteModal.show();
    };
    PrescriptionList.prototype.DeleteEvent = function () {
        var _this = this;
        this.deleteModal.hide();
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            try {
                this.DialogMessage = "Deleting please wait...";
                this.childModal.show();
                var sub = this.service.postmaster("delete", this.selectedRow.data, "/SavePrescription")
                    .subscribe(function (data) {
                    if (data.status == 'ok') {
                        //Displaying dialog message for save with timer of 1 secs
                        if (_this.service._prescriptionList.length > 0) {
                            _this.service._prescriptionList.splice(_this.service._prescriptionList.indexOf(_this.selectedRow.data), 1);
                            _this.source.load(_this.service._prescriptionList);
                        }
                        _this.DialogMessage = "Data Deleted Successfully";
                        setTimeout(function () {
                            _this.childModal.hide();
                        }, 1000);
                    }
                    else {
                        _this.DialogMessage = data.result;
                        setTimeout(function () {
                            _this.childModal.hide();
                        }, 3000);
                    }
                }, function (error) { alert(error); });
                this.subcriptions.push(sub);
            }
            catch (e) {
                alert(e);
            }
        }
        else {
            this.DialogMessage = "You are not authorized to delete  room.";
            this.childModal.show();
        }
    };
    PrescriptionList.prototype.onEditClick = function (event) {
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            this.router.navigate(["/pages/masters/prescription/detail-prescription", { id: event.data.id, mode: "edit", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to edit Prescription.";
            this.childModal.show();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], PrescriptionList.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], PrescriptionList.prototype, "deleteModal", void 0);
    PrescriptionList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'prescriptionlist',
            template: __webpack_require__(/*! ./PrescriptionList.component.html */ "./src/app/pages/masters/components/Prescription/PrescriptionList.component.html"),
            providers: [],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], PrescriptionList);
    return PrescriptionList;
}());



/***/ }),

/***/ "./src/app/pages/masters/components/Rooms/AddRoom.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/masters/components/Rooms/AddRoom.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <form id=formId class=\"form-horizontal\" [formGroup]=\"form\">\r\n        <ba-card [title]=\"modeTitle\">\r\n\r\n            <div class=\"form-group row \">\r\n                <label for=\"roomno\" class=\"col-sm-2 form-control-label \">Room No</label>\r\n                <div class=\"col-sm-6 \">\r\n                    <input [style.background-color]=\"disabled()\" style=\"color:black\" type=\"text \" class=\"form-control \" name=\"roomno\" id=\"roomno\" formControlName=\"ROOMNO\" [readOnly]=\"viewMode\"\r\n                        placeholder=\"Room number\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row \">\r\n                <label for=\"description\" class=\"col-sm-2 form-control-label \">Description</label>\r\n                <div class=\"col-sm-6 \">\r\n                    <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\" type=\"text \" class=\"form-control \" name=\"description\" id=\"description\" formControlName=\"DESCRIPTION\" placeholder=\"Room Description\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row \">\r\n                <label for=\"capacity\" class=\"col-sm-2 form-control-label \">Capacity</label>\r\n                <div class=\"col-sm-6 \">\r\n                    <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\" type=\"text \" class=\"form-control \" name=\"capacity\" id=\"capacity\" formControlName=\"CAPACITY\" placeholder=\"Room Capacity\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"branch\" class=\"col-sm-2 form-control-label\">Outlet</label>\r\n                <div class=\"col-sm-5\">\r\n                    <select class=\"form-control\" formControlName=\"branch\" id=\"branch\">\r\n                        <option *ngFor = \"let branch of branches\" [ngValue]=\"branch\">{{branch.branchName}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n             <div *ngIf=\"mode=='edit'\" class=\"form-group row \">\r\n                <label for=\"capacity\" class=\"col-sm-2 form-control-label \">Active</label>\r\n                <input [readOnly]=\"viewMode == true\" type=\"checkbox\"  [style.background-color]=\"disabled()\" class=\"form-control status\" name=\"isActive\" id=\"isActive\" formControlName=\"IsActive\">\r\n                <div class=\"col-sm-6 \">\r\n                    <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\" type=\"text \" class=\"form-control \" name=\"statusRemarks\" id=\"statusRemarks\" formControlName=\"StatusRemarks\" placeholder=\"Status Remarks\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\" *ngIf=\"_authService.getSetting().MapEmpRoomToService\">\r\n                <label for=\"services\" class=\"col-md-2 fontweight\">Services</label>\r\n                <div class=\"col-md-4\">\r\n                    <angular2-multiselect [data]=\"serviceList\" [settings]=\"serviceSetting\" formControlName=\"services\">\r\n                    </angular2-multiselect>\r\n                </div>\r\n            </div>        \r\n        </ba-card>\r\n        <div style=\"padding-bottom: 10px; margin-top: -8px;\">\r\n            <button *ngIf=\"mode=='add' || mode=='edit'\" (click)=\"onSave()\" style=\"margin-right: 4px;\" class=\"btn btn-primary \" [disabled]=\"!form.valid\">Save</button>\r\n            <button type=\"button \" class=\"btn btn-danger\" (click)=\"onCancel()\">Back</button>\r\n        </div>\r\n        <ba-modal #childModal title=\"Information\" size=\"sm\">\r\n            {{DialogMessage}}\r\n        </ba-modal>\r\n    </form>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/masters/components/Rooms/AddRoom.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/masters/components/Rooms/AddRoom.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddRoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRoom", function() { return AddRoom; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_global_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app/global.state */ "./src/app/global.state.ts");
/* harmony import */ var _common_repositories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories */ "./src/app/common/repositories/index.ts");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");








var AddRoom = /** @class */ (function () {
    function AddRoom(_authService, router, activatedRoute, fb, masterRepo, state) {
        this._authService = _authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.masterRepo = masterRepo;
        this.state = state;
        this.DialogMessage = "Saving data please wait ...";
        this.mode = "add";
        this.viewMode = false;
        this.modeTitle = '';
        this.room = {};
        this.initialTextReadOnly = false;
        this.branches = [];
        this.rategroup = [];
        this.subcriptions = [];
        this.serviceList = [];
        this.serviceSetting = {};
        if (!!this.activatedRoute.snapshot.params['returnUrl']) {
            this.returnUrl = this.activatedRoute.snapshot.params['returnUrl'];
        }
        if (!!this.activatedRoute.snapshot.params['mode']) {
            this.mode = this.activatedRoute.snapshot.params['mode'];
        }
    }
    AddRoom.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            ROOMID: [0],
            ROOMNO: [''],
            DESCRIPTION: [''],
            CAPACITY: [0],
            branch: [{}],
            IsActive: [true],
            StatusRemarks: [''],
            services: [[]]
        });
        this.masterRepo.getBranchList().subscribe(function (response) {
            _this.branches = response;
            if (_this.mode == "edit") {
                if (!!_this.activatedRoute.snapshot.params['id']) {
                    var id_1 = _this.activatedRoute.snapshot.params['id'];
                    var loadedValue_1 = _this.masterRepo._roomList.filter(function (r) { return r.ROOMID == id_1; })[0];
                    if (loadedValue_1 != null) {
                        var branch = {};
                        if (loadedValue_1.branch)
                            branch = _this.branches.find(function (x) { return x.branchId == loadedValue_1.branch.branchId; });
                        _this.form.patchValue({
                            ROOMID: loadedValue_1.ROOMID,
                            ROOMNO: loadedValue_1.ROOMNO,
                            DESCRIPTION: loadedValue_1.DESCRIPTION,
                            CAPACITY: loadedValue_1.CAPACITY,
                            IsActive: loadedValue_1.IsActive,
                            StatusRemarks: loadedValue_1.StatusRemarks,
                            branch: branch
                        });
                        _this.room = loadedValue_1;
                    }
                }
            }
        }, function (err) {
            _this.masterRepo.handleWebError(err);
        });
        this.masterRepo.getServiceListNew().subscribe(function (response) {
            _this.serviceList = response.map(function (x) { return ({ id: x.SERVICEID, name: x.DESCRIPTION }); });
            if (_this.mode == "edit") {
                _this.masterRepo.getRoomServices(_this.room.ROOMID).subscribe(function (empService) {
                    _this.form.patchValue({ services: empService });
                });
            }
        });
        this.serviceSetting = {
            enableCheckAll: true,
            text: 'Select Services',
            enableSearchFilter: true,
            labelKey: "name",
            primaryKey: "id"
        };
    };
    AddRoom.prototype.disabled = function () {
        if (this.viewMode == true) {
            return "#EBEBE4";
        }
        else {
            return "";
        }
    };
    AddRoom.prototype.changeToArray = function (data) {
        //console.log(data);
        if (data) {
            var retData = [];
            retData.concat([], data);
            return retData;
        }
        return [];
    };
    AddRoom.prototype.onSave = function () {
        //validate before Saving
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        this.onsubmit();
    };
    AddRoom.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    AddRoom.prototype.onsubmit = function () {
        var _this = this;
        try {
            console.log('Room', this.form.value);
            var formValue = this.form.value;
            formValue.services = formValue.services.map(function (x) { return x.id; });
            var room = formValue;
            //console.log(room);
            var sub = this.masterRepo.postmaster(this.mode, room, "/saveRoom")
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    //Displaying dialog message for save with timer of 1 secs
                    _this.DialogMessage = "Data Saved Successfully";
                    setTimeout(function () {
                        _this.childModal.hide();
                        _this.router.navigate([_this.returnUrl]);
                    }, 1000);
                }
                else {
                    _this.DialogMessage = data.result;
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            }, function (error) { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    AddRoom.prototype.onCancel = function () {
        //console.log(this.returnUrl)
        this.router.navigate([this.returnUrl]);
    };
    AddRoom.prototype.ngOnDestroy = function () {
        //if(this.subitSubscription)
        //  this.subitSubscription.unsubscribe();
        this.subcriptions.forEach(function (subs) {
            subs.unsubscribe();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], AddRoom.prototype, "childModal", void 0);
    AddRoom = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'addRoom',
            template: __webpack_require__(/*! ./AddRoom.component.html */ "./src/app/pages/masters/components/Rooms/AddRoom.component.html"),
            providers: [],
            styles: ["\n        input{\n            color: black;\n        }\n        .status{ \n            color: black;\n            float: left;\n            width: 20px;\n            margin-left: 15px;\n            margin-top: 12px;\n        }\n    "],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _common_repositories__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"], _app_global_state__WEBPACK_IMPORTED_MODULE_5__["GlobalState"]])
    ], AddRoom);
    return AddRoom;
}());



/***/ }),

/***/ "./src/app/pages/masters/components/Rooms/RoomList.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/masters/components/Rooms/RoomList.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n  <div class=\"row\">\r\n    <button class=\"btn btn-primary\" style=\"margin-bottom: 10px;margin-left:18px\" [disabled]=\"disableAdd\" (click)=\"onAddClick()\" >Add Room</button>\r\n  </div>\r\n  <div>\r\n    <ba-card title=\"Rooms\" baCardClass=\"with-scroll\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (delete)=\"onDeleteConfirm($event)\" ></ng2-smart-table>\r\n    </ba-card>\r\n  </div>\r\n</div>\r\n\r\n<ba-modal #childModal title=\"Information\" size=\"md\">\r\n  <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n    {{DialogMessage}}\r\n</ba-modal>\r\n<ba-modal #deleteModal title=\"Warning\" size=\"sm\">\r\n  <div class=\"modal-body\">\r\n    Once you delete the Room you can't recover it back. Are U sure you want to delete this Room?\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n    <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=\"deleteModal.hide()\">Cancel</button>\r\n  </div>\r\n</ba-modal>"

/***/ }),

/***/ "./src/app/pages/masters/components/Rooms/RoomList.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/masters/components/Rooms/RoomList.component.ts ***!
  \**********************************************************************/
/*! exports provided: RoomList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomList", function() { return RoomList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! style-loader!../smartTables.scss */ "./node_modules/style-loader/index.js!./src/app/pages/masters/components/smartTables.scss");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var RoomList = /** @class */ (function () {
    function RoomList(service, _authService, router) {
        var _this = this;
        this.service = service;
        this._authService = _authService;
        this.router = router;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.settings = {
            mode: 'external',
            delete: null,
            edit: null,
            columns: {
                ROOMNO: {
                    title: 'Room No.',
                    type: 'string'
                },
                DESCRIPTION: {
                    title: 'Room Description',
                    type: 'string'
                },
                CAPACITY: {
                    title: 'Capacity',
                    type: 'number'
                },
                branch: {
                    title: 'Outlet',
                    valuePrepareFunction: function (cell, row) {
                        return (row && row.branch && row.branch.branchName) || '-';
                    }
                },
                IsActive: {
                    title: 'Is Active',
                    type: 'boolean',
                },
                StatusRemarks: {
                    title: 'Status Remarks',
                    type: 'string'
                },
            }
        };
        this.subcriptions = [];
        this.source = new _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["LocalDataSource"]();
        var Rlist = [];
        this.service.getRoomList().subscribe(function (data) {
            var rooms = data;
            Rlist.push.apply(Rlist, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](rooms));
        }, function (Error) { return console.log(Error); }, function () {
            _this.service._roomList = Rlist;
            _this.source.load(Rlist);
        });
        this.settings.delete = this.menuRight.delete ? {} : null;
        this.settings.edit = this.menuRight.edit ? {} : null;
    }
    Object.defineProperty(RoomList.prototype, "disableAdd", {
        get: function () {
            return !this.menuRight.create;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoomList.prototype, "menuRight", {
        get: function () {
            return this._authService.getRole.menuRights.find(function (x) { return x.menuId === 'room'; });
        },
        enumerable: true,
        configurable: true
    });
    RoomList.prototype.onAddClick = function () {
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            this.router.navigate(['/pages/masters/room/detail-room', { mode: "add", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to add Room.";
            this.childModal.show();
        }
    };
    RoomList.prototype.onDeleteConfirm = function (event) {
        this.selectedRow = event;
        this.deleteModal.show();
    };
    RoomList.prototype.DeleteEvent = function () {
        var _this = this;
        this.deleteModal.hide();
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            try {
                this.DialogMessage = "Deleting please wait...";
                this.childModal.show();
                var sub = this.service.postmaster("delete", this.selectedRow.data, "/saveRoom")
                    .subscribe(function (data) {
                    if (data.status == 'ok') {
                        //Displaying dialog message for save with timer of 1 secs
                        if (_this.service._roomList.length > 0) {
                            _this.service._roomList.splice(_this.service._roomList.indexOf(_this.selectedRow.data), 1);
                            _this.source.load(_this.service._roomList);
                        }
                        _this.DialogMessage = "Data Deleted Successfully";
                        setTimeout(function () {
                            _this.childModal.hide();
                        }, 1000);
                    }
                    else {
                        _this.DialogMessage = data.result;
                        setTimeout(function () {
                            _this.childModal.hide();
                        }, 3000);
                    }
                }, function (error) { alert(error); });
                this.subcriptions.push(sub);
            }
            catch (e) {
                alert(e);
            }
        }
        else {
            this.DialogMessage = "You are not authorized to delete  room.";
            this.childModal.show();
        }
    };
    RoomList.prototype.onEditClick = function (event) {
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            this.router.navigate(["/pages/masters/room/detail-room", { id: event.data.ROOMID, mode: "edit", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to edit room.";
            this.childModal.show();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_3__["BaModalComponent"])
    ], RoomList.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoomList.prototype, "deleteModal", void 0);
    RoomList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'roomlist',
            template: __webpack_require__(/*! ./RoomList.component.html */ "./src/app/pages/masters/components/Rooms/RoomList.component.html"),
            providers: [],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], RoomList);
    return RoomList;
}());



/***/ }),

/***/ "./src/app/pages/masters/components/Series/AddSeries.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/masters/components/Series/AddSeries.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <form id=formId class=\"form-horizontal\" [formGroup]=\"form\">\r\n        <ba-card [title]=\"modeTitle\">            \r\n            <div class=\"form-group row \">\r\n                <label for=\"serviceid\" class=\"col-sm-2 form-control-label \">Series Name</label>\r\n                <div class=\"col-sm-6 \">\r\n                    <select formControlName = \"MappingCode\" class=\"form-control\" name=\"mappingCode\" id=\"mappingCode\"> \r\n                        <option *ngFor=\"let c of ItemList\" [value]=\"c.MCODE\">{{c.DESCA}}</option>\r\n                    </select>  \r\n                </div>                 \r\n            </div>\r\n            <div class=\"form-group row \">\r\n                <label for=\"serviceid\" class=\"col-sm-2 form-control-label \">Service</label>\r\n                <div class=\"col-sm-6 \">\r\n                    <select formControlName = \"ServiceId\" class=\"form-control\" name=\"serviceId\" id=\"serviceId\"> \r\n                        <option *ngFor=\"let c of ServiceList\" [value]=\"c.SERVICEID\">{{c.DESCRIPTION}}</option>\r\n                    </select>  \r\n                </div>                 \r\n            </div>\r\n            <div class=\"form-group row \">\r\n                <label for=\"servicecount\" class=\"col-sm-2 form-control-label \">No. of Service</label>\r\n                <div class=\"col-sm-6 \">\r\n                    <input [readOnly]=\"viewMode == true\" style=\"color:black;width:30%;float:left\" [style.background-color]=\"disabled()\" type=\"number\"\r\n                        class=\"form-control \" name=\"servicecount\" id=\"servicecount\" formControlName=\"ServiceCount\" >                 \r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row \">\r\n                <label for=\"validity\" class=\"col-sm-2 form-control-label \">Validity Period [Days]</label>\r\n                <div class=\"col-sm-6 \">\r\n                    <input [readOnly]=\"viewMode == true\" style=\"color:black;width:30%;float:left\" [style.background-color]=\"disabled()\" type=\"number\"\r\n                        class=\"form-control \" name=\"validity\" id=\"validity\" formControlName=\"ValidityPeriod\" placeholder=\"Days\" >                 \r\n                </div>\r\n            </div>\r\n\r\n        </ba-card>\r\n        <div style=\"padding-bottom: 10px; margin-top: -8px;\">\r\n            <button *ngIf=\"mode=='add' || mode=='edit'\" (click)=\"onSave()\" style=\"margin-right: 4px;\" class=\"btn btn-primary \" [disabled]=\"!form.valid\">Save</button>\r\n            <button type=\"button \" class=\"btn btn-danger\" (click)=\"onCancel()\">Back</button>\r\n        </div>\r\n        <ba-modal #childModal title=\"Information\" size=\"sm\">\r\n            {{DialogMessage}}\r\n        </ba-modal>\r\n    </form>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/masters/components/Series/AddSeries.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/masters/components/Series/AddSeries.component.ts ***!
  \************************************************************************/
/*! exports provided: AddSeries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSeries", function() { return AddSeries; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_global_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app/global.state */ "./src/app/global.state.ts");
/* harmony import */ var _common_repositories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories */ "./src/app/common/repositories/index.ts");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");








var AddSeries = /** @class */ (function () {
    function AddSeries(_authService, router, activatedRoute, fb, masterRepo, state) {
        this._authService = _authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.masterRepo = masterRepo;
        this.state = state;
        this.DialogMessage = "Saving data please wait ...";
        this.mode = "add";
        this.viewMode = false;
        this.modeTitle = '';
        this.series = {};
        this.initialTextReadOnly = false;
        this.Item = {};
        this.service = {};
        this.rategroup = [];
        this.subcriptions = [];
        if (!!this.activatedRoute.snapshot.params['returnUrl']) {
            this.returnUrl = this.activatedRoute.snapshot.params['returnUrl'];
        }
        if (!!this.activatedRoute.snapshot.params['mode']) {
            this.mode = this.activatedRoute.snapshot.params['mode'];
        }
    }
    AddSeries.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.form = this.fb.group({
            MappingCode: [''],
            ServiceCount: [''],
            ValidityPeriod: [''],
            ServiceId: ['']
        });
        if (this.mode == "edit") {
            if (!!this.activatedRoute.snapshot.params['id']) {
                var id_1 = this.activatedRoute.snapshot.params['id'];
                var loadedValue = this.masterRepo._seriesList.filter(function (r) { return r.MappingCode == id_1; })[0];
                if (loadedValue != null) {
                    this.form.setValue({
                        MappingCode: loadedValue.MappingCode,
                        ServiceCount: loadedValue.ServiceCount,
                        ValidityPeriod: loadedValue.ValidityPeriod,
                        ServiceId: loadedValue.ServiceId,
                    });
                }
            }
        }
        var _iList = [];
        this.masterRepo.getSeriesItemList().subscribe(function (data) {
            _iList.push(data);
        }, function (Error) { return console.log(Error); }, function () {
            //console.log({itemlist: _iList});
            _this.ItemList = _iList;
        });
        var _serviceList = [];
        this.masterRepo.getServiceList().subscribe(function (data) {
            _serviceList.push(data);
        }, function (Error) { return console.log(Error); }, function () {
            //console.log({servicelist: _serviceList});
            _this.ServiceList = _serviceList;
        });
    };
    AddSeries.prototype.disabled = function () {
        if (this.viewMode == true) {
            return "#EBEBE4";
        }
        else {
            return "";
        }
    };
    AddSeries.prototype.changeToArray = function (data) {
        //console.log(data);
        if (data) {
            var retData = [];
            retData.concat([], data);
            return retData;
        }
        return [];
    };
    AddSeries.prototype.onSave = function () {
        //validate before Saving
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        this.onsubmit();
    };
    AddSeries.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    AddSeries.prototype.onsubmit = function () {
        var _this = this;
        try {
            var ser_1 = this.form.value;
            ser_1.ServiceName = this.ServiceList.find(function (x) { return x.SERVICEID == ser_1.ServiceId; }).DESCRIPTION;
            ser_1.SeriesName = this.ItemList.find(function (x) { return x.MCODE == ser_1.MappingCode; }).DESCA;
            //console.log(this.service.DESCRIPTION);
            var sub = this.masterRepo.postmaster(this.mode, ser_1, "/saveSeries")
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    //Displaying dialog message for save with timer of 1 secs
                    _this.DialogMessage = "Data Saved Successfully";
                    setTimeout(function () {
                        _this.childModal.hide();
                        _this.router.navigate([_this.returnUrl]);
                    }, 1000);
                }
                else {
                    _this.DialogMessage = data.result;
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            }, function (error) { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    AddSeries.prototype.onCancel = function () {
        //console.log(this.returnUrl)
        this.router.navigate([this.returnUrl]);
    };
    AddSeries.prototype.ngOnDestroy = function () {
        //if(this.subitSubscription)
        //  this.subitSubscription.unsubscribe();
        this.subcriptions.forEach(function (subs) {
            subs.unsubscribe();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], AddSeries.prototype, "childModal", void 0);
    AddSeries = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'addSeries',
            template: __webpack_require__(/*! ./AddSeries.component.html */ "./src/app/pages/masters/components/Series/AddSeries.component.html"),
            providers: [],
            styles: ["\n        input{\n            color: black;\n        }\n    "],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _common_repositories__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"], _app_global_state__WEBPACK_IMPORTED_MODULE_5__["GlobalState"]])
    ], AddSeries);
    return AddSeries;
}());



/***/ }),

/***/ "./src/app/pages/masters/components/Series/SeriesList.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/masters/components/Series/SeriesList.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n  <div class=\"row\">\r\n    <button class=\"btn btn-primary\" style=\"margin-bottom: 10px;margin-left:18px\" (click)=\"onAddClick()\" >Add Series</button>\r\n  </div>\r\n  <div class=\"row\">\r\n    <ba-card title=\"Series\" baCardClass=\"with-scroll\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (delete)=\"onDeleteConfirm($event)\" (view)=\"onViewClick($event)\"></ng2-smart-table>\r\n    </ba-card>\r\n  </div>\r\n</div>\r\n\r\n<ba-modal #childModal title=\"Information\" size=\"md\">\r\n  <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n    {{DialogMessage}}\r\n</ba-modal>\r\n<ba-modal #deleteModal title=\"Warning\" size=\"sm\">\r\n  <div class=\"modal-body\">\r\n    Once you delete the Series you can't recover it back. Are U sure you want to delete this Service?\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n    <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=\"deleteModal.hide()\">Cancel</button>\r\n  </div>\r\n</ba-modal>"

/***/ }),

/***/ "./src/app/pages/masters/components/Series/SeriesList.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/masters/components/Series/SeriesList.component.ts ***!
  \*************************************************************************/
/*! exports provided: SeriesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesList", function() { return SeriesList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! style-loader!../smartTables.scss */ "./node_modules/style-loader/index.js!./src/app/pages/masters/components/smartTables.scss");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var SeriesList = /** @class */ (function () {
    function SeriesList(series, _authService, router) {
        var _this = this;
        this.series = series;
        this._authService = _authService;
        this.router = router;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.settings = {
            mode: 'external',
            columns: {
                SeriesName: {
                    title: 'Description',
                    type: 'string'
                },
                ServiceName: {
                    title: 'Service',
                    type: 'string'
                },
                ServiceCount: {
                    title: 'Count',
                    type: 'string'
                }
            }
        };
        this.subcriptions = [];
        this.source = new _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["LocalDataSource"]();
        var Slist = [];
        this.series.getSeriesList().subscribe(function (data) {
            Slist.push(data);
        }, function (Error) { return console.log(Error); }, function () {
            _this.series._seriesList = Slist;
            _this.source.load(Slist);
        });
    }
    SeriesList.prototype.setMode = function () {
        // this.divService.create();
        //this.settings.mode='inline';
        //console.log(this.settings.mode);
    };
    SeriesList.prototype.onAddClick = function () {
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            this.router.navigate(['/pages/masters/series/detail-series', { mode: "add", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to add series.";
            this.childModal.show();
        }
    };
    SeriesList.prototype.onDeleteConfirm = function (event) {
        this.selectedRow = event;
        this.deleteModal.show();
    };
    SeriesList.prototype.DeleteEvent = function () {
        var _this = this;
        this.deleteModal.hide();
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            try {
                this.DialogMessage = "Deleting please wait...";
                this.childModal.show();
                var sub = this.series.postmaster("delete", this.selectedRow.data, "/saveSeries")
                    .subscribe(function (data) {
                    if (data.status == 'ok') {
                        if (_this.series._seriesList.length > 0) {
                            _this.series._seriesList.splice(_this.series._seriesList.indexOf(_this.selectedRow.data), 1);
                            _this.source.load(_this.series._seriesList);
                        }
                        //Displaying dialog message for save with timer of 1 secs
                        _this.DialogMessage = "Data Deleted Successfully";
                        setTimeout(function () {
                            _this.childModal.hide();
                        }, 1000);
                    }
                    else {
                        //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                        if (data.result._body == "The ConnectionString property has not been initialized.") {
                            _this.router.navigate(['/login', _this.router.url]);
                            return;
                        }
                        //Some other issues need to check
                        _this.DialogMessage = "Error in Deleting Data:" + data.result._body;
                        //console.log(data.result._body);
                        setTimeout(function () {
                            _this.childModal.hide();
                        }, 3000);
                    }
                }, function (error) { alert(error); });
                this.subcriptions.push(sub);
            }
            catch (e) {
                alert(e);
            }
        }
        else {
            this.DialogMessage = "You are not authorized to edit Series.";
            this.childModal.show();
        }
    };
    // onViewClick(event): void {
    //   if (this._authService.checkMenuRight("divisions", "view") == true) {
    //     this.router.navigate(["pages/masters/divisions/add-division", { initial: event.data.INITIAL, mode: "view", returnUrl: this.router.url }]);
    //   } else {
    //     this.DialogMessage = "You are not authorized to view division."
    //     this.childModal.show();
    //   }
    // }
    SeriesList.prototype.onEditClick = function (event) {
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            this.router.navigate(["/pages/masters/series/detail-series", { id: event.data.MappingCode, mode: "edit", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to edit Service.";
            this.childModal.show();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_3__["BaModalComponent"])
    ], SeriesList.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SeriesList.prototype, "deleteModal", void 0);
    SeriesList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'serieslist',
            template: __webpack_require__(/*! ./SeriesList.component.html */ "./src/app/pages/masters/components/Series/SeriesList.component.html"),
            providers: [],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], SeriesList);
    return SeriesList;
}());



/***/ }),

/***/ "./src/app/pages/masters/components/SeriesSales/AddSeriesSales.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/masters/components/SeriesSales/AddSeriesSales.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <ba-card [title]=\"modeTitle\">\r\n        <div class=\"form-group row \">\r\n            <label for=\"customerid\" class=\"col-sm-2 form-control-label \">Customer</label>\r\n            <div class=\"col-sm-6 \">\r\n                <select [(ngModel)]=\"seriesSale.customer\" class=\"form-control\" name=\"customerselect\"\r\n                    id=\"customerselect\">\r\n                    <option *ngFor=\"let c of CustomerList\" [ngValue]=\"c\">{{c.NAME}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row \">\r\n            <label for=\"serviceid\" class=\"col-sm-2 form-control-label \">Series</label>\r\n            <div class=\"col-sm-6 \">\r\n                <select [(ngModel)]=\"seriesSale.series\" class=\"form-control\" name=\"seriesselect\" id=\"seriesselect\">\r\n                    <option *ngFor=\"let c of SeriesList\" [ngValue]=\"c\">{{c.SeriesName}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row \">\r\n            <label for=\"employeeid\" class=\"col-sm-2 form-control-label \">Operator</label>\r\n            <div class=\"col-sm-6 \">\r\n                <select [(ngModel)]=\"seriesSale.employee\" class=\"form-control\" name=\"employeeselect\"\r\n                    id=\"employeeselect\">\r\n                    <option *ngFor=\"let c of EmployeeList\" [ngValue]=\"c\">{{c.NAME}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row \">\r\n            <label for=\"salesmanid\" class=\"col-sm-2 form-control-label \">Sales Man</label>\r\n            <div class=\"col-sm-6 \">\r\n                <select [(ngModel)]=\"seriesSale.salesman\" class=\"form-control\" name=\"salesmanselect\"\r\n                    id=\"salesmanselect\">\r\n                    <option *ngFor=\"let c of EmployeeList\" [ngValue]=\"c\">{{c.NAME}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n    </ba-card>\r\n    <div style=\"padding-bottom: 10px; margin-top: -8px;\">\r\n        <button *ngIf=\"mode=='add'\" (click)=\"onSave()\" style=\"margin-right: 4px;\" class=\"btn btn-primary \">Save</button>\r\n        <button type=\"button\" class=\"btn btn-primary\"\r\n            *ngIf=\"mode=='edit'\" (click)=\"CancelBill()\">Cancel Bill</button>\r\n        <button type=\"button \" class=\"btn btn-danger\" (click)=\"onCancel()\">Back</button>\r\n    </div>\r\n    <ba-modal #childModal title=\"Information\" size=\"sm\">\r\n        {{DialogMessage}}\r\n    </ba-modal>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/masters/components/SeriesSales/AddSeriesSales.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/masters/components/SeriesSales/AddSeriesSales.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddSeriesSales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSeriesSales", function() { return AddSeriesSales; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_global_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app/global.state */ "./src/app/global.state.ts");
/* harmony import */ var _common_repositories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories */ "./src/app/common/repositories/index.ts");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");








var AddSeriesSales = /** @class */ (function () {
    function AddSeriesSales(_authService, router, activatedRoute, fb, masterRepo, state) {
        this._authService = _authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.masterRepo = masterRepo;
        this.state = state;
        this.DialogMessage = "Saving data please wait ...";
        this.mode = "add";
        this.viewMode = false;
        this.modeTitle = '';
        this.series = {};
        this.initialTextReadOnly = false;
        this.seriesSale = {};
        this.rategroup = [];
        this.subcriptions = [];
        if (!!this.activatedRoute.snapshot.params['returnUrl']) {
            this.returnUrl = this.activatedRoute.snapshot.params['returnUrl'];
        }
        if (!!this.activatedRoute.snapshot.params['mode']) {
            this.mode = this.activatedRoute.snapshot.params['mode'];
        }
    }
    AddSeriesSales.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        var _iList = [];
        this.masterRepo.getSeriesList().subscribe(function (data) {
            _iList.push(data);
        }, function (Error) { return console.log(Error); }, function () {
            //console.log({ itemlist: _iList });
            _this.SeriesList = _iList;
        });
        var _cusList = [];
        this.masterRepo.getCustomerList().subscribe(function (data) {
            _cusList.push(data);
        }, function (Error) { return console.log(Error); }, function () {
            //console.log({ cuslist: _cusList });
            _this.CustomerList = _cusList;
            if (_this.mode == "edit") {
                if (!!_this.activatedRoute.snapshot.params['id']) {
                    var id_1 = _this.activatedRoute.snapshot.params['id'];
                    var loadedValue_1 = _this.masterRepo._seriesSalesList.filter(function (r) { return r.TranId == id_1; })[0];
                    _this.seriesSale.TranId = loadedValue_1.TranId;
                    _this.seriesSale.series = _this.SeriesList.filter(function (x) { return x.ServiceId == loadedValue_1.series.ServiceId; })[0];
                    _this.seriesSale.customer = _this.CustomerList.filter(function (x) { return x.CUSID == loadedValue_1.customer.CUSID; })[0];
                    _this.seriesSale.employee = _this.EmployeeList.filter(function (x) { return x.EMPLOYEEID == loadedValue_1.employee.EMPLOYEEID; })[0];
                    _this.seriesSale.salesman = _this.EmployeeList.filter(function (x) { return x.EMPLOYEEID == loadedValue_1.salesman.EMPLOYEEID; })[0];
                }
            }
        });
        var _empList = [];
        this.masterRepo.getEmployeeList().subscribe(function (data) {
            _empList.push(data);
        }, function (Error) { return console.log(Error); }, function () {
            //console.log({ emplist: _empList });
            _this.EmployeeList = _empList;
        });
    };
    AddSeriesSales.prototype.disabled = function () {
        if (this.viewMode == true) {
            return "#EBEBE4";
        }
        else {
            return "";
        }
    };
    AddSeriesSales.prototype.changeToArray = function (data) {
        //console.log(data);
        if (data) {
            var retData = [];
            retData.concat([], data);
            return retData;
        }
        return [];
    };
    AddSeriesSales.prototype.onSave = function () {
        //validate before Saving
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        this.onsubmit();
    };
    AddSeriesSales.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    AddSeriesSales.prototype.onsubmit = function () {
        var _this = this;
        try {
            var sub = this.masterRepo.postmaster(this.mode, this.seriesSale, "/saveSeriesSale")
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    //Displaying dialog message for save with timer of 1 secs
                    _this.DialogMessage = "Data Saved Successfully";
                    setTimeout(function () {
                        _this.childModal.hide();
                        _this.router.navigate([_this.returnUrl]);
                    }, 1000);
                }
                else {
                    //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                    if (data.result._body == "The ConnectionString property has not been initialized.") {
                        _this.router.navigate(['/login', _this.router.url]);
                        return;
                    }
                    //Some other issues need to check
                    _this.DialogMessage = "Error in Saving Data:" + data.result._body;
                    //console.log(data.result._body);
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            }, function (error) { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    AddSeriesSales.prototype.onCancel = function () {
        //console.log(this.returnUrl)
        this.router.navigate([this.returnUrl]);
    };
    AddSeriesSales.prototype.ngOnDestroy = function () {
        //if(this.subitSubscription)
        //  this.subitSubscription.unsubscribe();
        this.subcriptions.forEach(function (subs) {
            subs.unsubscribe();
        });
    };
    AddSeriesSales.prototype.CancelBill = function () {
        var _this = this;
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        try {
            var sub = this.masterRepo.postmaster(this.mode, this.seriesSale, "/CancelSeriesSale")
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    //Displaying dialog message for save with timer of 1 secs
                    _this.DialogMessage = "Data Saved Successfully";
                    setTimeout(function () {
                        _this.childModal.hide();
                        _this.router.navigate([_this.returnUrl]);
                    }, 1000);
                }
                else {
                    //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                    if (data.result._body == "The ConnectionString property has not been initialized.") {
                        _this.router.navigate(['/login', _this.router.url]);
                        return;
                    }
                    //Some other issues need to check
                    _this.DialogMessage = "Error in Saving Data:" + data.result._body;
                    //console.log(data.result._body);
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            }, function (error) { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], AddSeriesSales.prototype, "childModal", void 0);
    AddSeriesSales = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'addSeriesSales',
            template: __webpack_require__(/*! ./AddSeriesSales.component.html */ "./src/app/pages/masters/components/SeriesSales/AddSeriesSales.component.html"),
            providers: [],
            styles: ["\n        input{\n            color: black;\n        }\n    "],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _common_repositories__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"], _app_global_state__WEBPACK_IMPORTED_MODULE_5__["GlobalState"]])
    ], AddSeriesSales);
    return AddSeriesSales;
}());



/***/ }),

/***/ "./src/app/pages/masters/components/SeriesSales/SeriesSalesList.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/masters/components/SeriesSales/SeriesSalesList.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n  <div class=\"row\">\r\n    <button class=\"btn btn-primary\" style=\"margin-bottom: 10px;margin-left:18px\" (click)=\"onAddClick()\" >New Series Sales</button>\r\n  </div>\r\n  <div class=\"row\">\r\n    <ba-card title=\"Series\" baCardClass=\"with-scroll\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (delete)=\"onDeleteConfirm($event)\" (view)=\"onViewClick($event)\"></ng2-smart-table>\r\n    </ba-card>\r\n  </div>\r\n</div>\r\n\r\n<ba-modal #childModal title=\"Information\" size=\"md\">\r\n  <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n    {{DialogMessage}}\r\n</ba-modal>\r\n<ba-modal #deleteModal title=\"Warning\" size=\"sm\">\r\n  <div class=\"modal-body\">\r\n    Once you delete the Series you can't recover it back. Are U sure you want to delete this Service?\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n    <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=\"deleteModal.hide()\">Cancel</button>\r\n  </div>\r\n</ba-modal>"

/***/ }),

/***/ "./src/app/pages/masters/components/SeriesSales/SeriesSalesList.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/masters/components/SeriesSales/SeriesSalesList.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SeriesSalesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesSalesList", function() { return SeriesSalesList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! style-loader!../smartTables.scss */ "./node_modules/style-loader/index.js!./src/app/pages/masters/components/smartTables.scss");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var SeriesSalesList = /** @class */ (function () {
    function SeriesSalesList(series, _authService, router) {
        var _this = this;
        this.series = series;
        this._authService = _authService;
        this.router = router;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.settings = {
            mode: 'external',
            columns: {
                SeriesName: {
                    title: 'Series',
                    type: 'string'
                },
                CustomerName: {
                    title: 'Customer',
                    type: 'string'
                },
                ServiceName: {
                    title: 'Service',
                    type: 'string'
                }
            }
        };
        this.subcriptions = [];
        this.source = new _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["LocalDataSource"]();
        var Slist = [];
        var SList1 = [];
        this.series.getSeriesSalesList().subscribe(function (data) {
            var ss = data;
            var tt = {
                TranId: ss.TranId,
                ServiceName: ss.series.ServiceName,
                SeriesName: ss.series.ServiceName,
                CustomerName: ss.customer.NAME
            };
            Slist.push(tt);
            SList1.push(ss);
        }, function (Error) { return console.log(Error); }, function () {
            _this.series._seriesSalesList = SList1;
            _this.source.load(Slist);
        });
    }
    SeriesSalesList.prototype.setMode = function () {
        // this.divService.create();
        //this.settings.mode='inline';
        //console.log(this.settings.mode);
    };
    SeriesSalesList.prototype.onAddClick = function () {
        if (this._authService.getUserProfile()) {
            this.router.navigate(['/pages/masters/seriesSales/detail-seriesSales', { mode: "add", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to add series.";
            this.childModal.show();
        }
    };
    SeriesSalesList.prototype.onDeleteConfirm = function (event) {
        this.selectedRow = event;
        this.deleteModal.show();
    };
    SeriesSalesList.prototype.DeleteEvent = function () {
        var _this = this;
        this.deleteModal.hide();
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            try {
                this.DialogMessage = "Deleting please wait...";
                this.childModal.show();
                var sub = this.series.postmaster("delete", this.selectedRow.data, "/saveSeries")
                    .subscribe(function (data) {
                    if (data.status == 'ok') {
                        if (_this.series._seriesList.length > 0) {
                            _this.series._seriesList.splice(_this.series._seriesList.indexOf(_this.selectedRow.data), 1);
                            _this.source.load(_this.series._seriesList);
                        }
                        //Displaying dialog message for save with timer of 1 secs
                        _this.DialogMessage = "Data Deleted Successfully";
                        setTimeout(function () {
                            _this.childModal.hide();
                        }, 1000);
                    }
                    else {
                        //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                        if (data.result._body == "The ConnectionString property has not been initialized.") {
                            _this.router.navigate(['/login', _this.router.url]);
                            return;
                        }
                        //Some other issues need to check
                        _this.DialogMessage = "Error in Deleting Data:" + data.result._body;
                        //console.log(data.result._body);
                        setTimeout(function () {
                            _this.childModal.hide();
                        }, 3000);
                    }
                }, function (error) { alert(error); });
                this.subcriptions.push(sub);
            }
            catch (e) {
                alert(e);
            }
        }
        else {
            this.DialogMessage = "You are not authorized to edit Series.";
            this.childModal.show();
        }
    };
    // onViewClick(event): void {
    //   if (this._authService.checkMenuRight("divisions", "view") == true) {
    //     this.router.navigate(["pages/masters/divisions/add-division", { initial: event.data.INITIAL, mode: "view", returnUrl: this.router.url }]);
    //   } else {
    //     this.DialogMessage = "You are not authorized to view division."
    //     this.childModal.show();
    //   }
    // }
    SeriesSalesList.prototype.onEditClick = function (event) {
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            this.router.navigate(["/pages/masters/seriesSales/detail-seriesSales", { id: event.data.TranId, mode: "edit", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to edit Series Sale.";
            this.childModal.show();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_3__["BaModalComponent"])
    ], SeriesSalesList.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SeriesSalesList.prototype, "deleteModal", void 0);
    SeriesSalesList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'seriessaleslist',
            template: __webpack_require__(/*! ./SeriesSalesList.component.html */ "./src/app/pages/masters/components/SeriesSales/SeriesSalesList.component.html"),
            providers: [],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], SeriesSalesList);
    return SeriesSalesList;
}());



/***/ }),

/***/ "./src/app/pages/masters/components/Services/AddService.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/masters/components/Services/AddService.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <form id=formId class=\"form-horizontal\" [formGroup]=\"form\">\r\n        <ba-card [title]=\"modeTitle\">\r\n\r\n            \r\n            <div class=\"form-group row \" *ngIf=\"!ShowPosItem || mode == 'edit'\">\r\n                <label for=\"description\" class=\"col-sm-2 form-control-label \">Description</label>\r\n                <div class=\"col-sm-6 \">\r\n                    <input [readOnly]=\"viewMode == true || ShowPosItem\" style=\"color:black\" [style.background-color]=\"disabled()\" type=\"text \" class=\"form-control \"\r\n                        name=\"description\" id=\"description\" formControlName=\"DESCRIPTION\" placeholder=\"Service Description\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row \"  *ngIf=\"ShowPosItem && mode == 'add'\">\r\n                <label for=\"serviceid\" class=\"col-sm-2 form-control-label \">Description</label>\r\n                <div class=\"col-sm-6 \">\r\n                    <angular2-multiselect [data]=\"ItemList\" [settings]=\"serviceSetting\" formControlName=\"MapItem\" (onSelect)=\"serviceChangeEvent($event)\">\r\n                    </angular2-multiselect>\r\n                    <!--\r\n                        <select formControlName = \"MappingCode\" class=\"form-control\" name=\"mappingCode\" id=\"mappingCode\"> \r\n                            <option *ngFor=\"let c of ItemList\" [value]=\"c.Id\">{{c.ItemName}}</option>\r\n                        </select>  \r\n                    -->\r\n                </div>                 \r\n            </div>\r\n            <div class=\"form-group row \">\r\n                <label for=\"timeduration\" class=\"col-sm-2 form-control-label \">Time Duration(minute)</label>\r\n                <div class=\"col-sm-6\">                    \r\n                    <input [readOnly]=\"viewMode == true\" style=\"color:black;width:30%;float:left\" [style.background-color]=\"disabled()\" type=\"number\"\r\n                        class=\"form-control \" name=\"timeduration\" id=\"timeduration\" formControlName=\"TIMEDURATION_MIN\" placeholder=\"Minute\">\r\n                </div>                    \r\n            </div>\r\n            <div class=\"form-group row \">\r\n                <label for=\"noOfEmployees\" class=\"col-sm-2 form-control-label \">{{'employees' | labelPipe}} #</label>\r\n                <div class=\"col-sm-6\">\r\n                    <input [readOnly]=\"viewMode == true\" style=\"color:black;width:30%;float:left\" [style.background-color]=\"disabled()\" type=\"number\"\r\n                        class=\"form-control \" name=\"noOfEmployees\" id=\"noOfEmployees\" formControlName=\"noOfEmployees\" placeholder=\"No of {{'employees' | labelPipe}} required.\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"branches\" class=\"col-md-2 fontweight\">Outlets</label>\r\n                <div class=\"col-md-4\">\r\n                    <angular2-multiselect [data]=\"branchList\" [settings]=\"branchSetting\" formControlName=\"branches\">\r\n                    </angular2-multiselect>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\" *ngIf=\"_authService.getSetting().MapEmpRoomToService\">\r\n                <label for=\"employees\" class=\"col-md-2 fontweight\">{{'employees' | labelPipe}}</label>\r\n                <div class=\"col-md-4\">\r\n                    <angular2-multiselect [data]=\"empList\" [settings]=\"empSetting\" formControlName=\"employees\">\r\n                    </angular2-multiselect>\r\n                </div>\r\n            </div>\r\n           <div class=\"form-group row\" *ngIf=\"_authService.getSetting().MapEmpRoomToService\">\r\n                <label for=\"rooms\" class=\"col-md-2 fontweight\">Rooms</label>\r\n                <div class=\"col-md-4\">\r\n                    <angular2-multiselect [data]=\"roomList\" [settings]=\"roomSetting\" formControlName=\"rooms\">\r\n                    </angular2-multiselect>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"form-group row \">\r\n                <label for=\"rate\" class=\"col-sm-2 form-control-label \">Rate</label>\r\n                <div class=\"col-sm-6 \">\r\n                    <input [readOnly]=\"viewMode == true\" style=\"color:black\" [style.background-color]=\"disabled()\" type=\"number\" class=\"form-control \"\r\n                        name=\"rate\" id=\"rate\" formControlName=\"RATE\" placeholder=\"Rate\">\r\n                </div>\r\n            </div> -->\r\n            <div class=\"form-group row \">\r\n                <label style=\"width: 350px;font-size: 13px;height: 20px\" *ngIf=\"form.contains('SkipTimeValidation')\" >\r\n                    <input type=\"checkbox\" style=\"vertical-align: middle\" formControlName=\"SkipTimeValidation\">\r\n                    Allow Overlapping Schedule for Employee\r\n                </label>\r\n                <label style=\"width: 350px;font-size: 13px;height: 20px\" *ngIf=\"form.contains('SkipTimeValidationSS')\">\r\n                    <input type=\"checkbox\" style=\"vertical-align: middle\" formControlName=\"SkipTimeValidationSS\">\r\n                    Allow Overlapping Schedule for Employee(Same Service)\r\n                </label>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label style=\"width: 350px;font-size: 13px;height: 20px\" *ngIf=\"form.contains('SkipTimeValidationRoom')\">\r\n                    <input type=\"checkbox\" style=\"vertical-align: middle\"  formControlName=\"SkipTimeValidationRoom\">\r\n                    Allow Overlapping Schedule for Room\r\n                </label>\r\n                <label style=\"width: 350px;font-size: 13px;height: 20px\" *ngIf=\"form.contains('SkipTimeValidationRoomSS')\">\r\n                    <input type=\"checkbox\" style=\"vertical-align: middle\" formControlName=\"SkipTimeValidationRoomSS\">\r\n                    Allow Overlapping Schedule for Room(Same Service)\r\n                </label>\r\n            </div>\r\n            <div class=\"form-group row \">\r\n                <label style=\"width: 350px;font-size: 13px;height: 20px\" *ngIf=\"form.contains('SkipTimeValidationCustomer')\">\r\n                    <input type=\"checkbox\" style=\"vertical-align: middle\" formControlName=\"SkipTimeValidationCustomer\">\r\n                    Allow Overlapping Schedule for {{'customer' | labelPipe}}\r\n                </label>\r\n                <label style=\"width: 350px;font-size: 13px;height: 20px\" *ngIf=\"form.contains('appointmentNotRequired')\">\r\n                    <input type=\"checkbox\" style=\"vertical-align: middle\" formControlName=\"appointmentNotRequired\">\r\n                    Allow Check-In without Appointment.\r\n                </label>\r\n            </div>\r\n\r\n        </ba-card>\r\n        <div style=\"padding-bottom: 10px; margin-top: -8px;\">\r\n            <button *ngIf=\"mode=='add' || mode=='edit'\" (click)=\"onSave()\" style=\"margin-right: 4px;\" class=\"btn btn-primary \" [disabled]=\"!form.valid\">Save</button>\r\n            <button type=\"button \" class=\"btn btn-danger\" (click)=\"onCancel()\">Back</button>\r\n        </div>\r\n        <ba-modal #childModal title=\"Information\" size=\"sm\">\r\n            {{DialogMessage}}\r\n        </ba-modal>\r\n    </form>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/masters/components/Services/AddService.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/masters/components/Services/AddService.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddService", function() { return AddService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_repositories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/repositories */ "./src/app/common/repositories/index.ts");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _common_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/services/common.service */ "./src/app/common/services/common.service.ts");








var AddService = /** @class */ (function () {
    function AddService(_authService, router, activatedRoute, fb, masterRepo, common) {
        this._authService = _authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.masterRepo = masterRepo;
        this.common = common;
        this.DialogMessage = "Saving data please wait ...";
        this.mode = "add";
        this.viewMode = false;
        this.modeTitle = '';
        this.service = {};
        this.initialTextReadOnly = false;
        this.ShowPosItem = true;
        this.rategroup = [];
        this.subcriptions = [];
        this.branchList = [];
        this.empList = [];
        this.roomList = [];
        this.serviceSetting = {};
        this.branchSetting = {};
        this.empSetting = {};
        this.roomSetting = {};
        if (!!this.activatedRoute.snapshot.params['returnUrl']) {
            this.returnUrl = this.activatedRoute.snapshot.params['returnUrl'];
        }
        if (!!this.activatedRoute.snapshot.params['mode']) {
            this.mode = this.activatedRoute.snapshot.params['mode'];
        }
        this.ShowPosItem = _authService.getSetting().IntegratePos;
    }
    AddService.prototype.ngOnInit = function () {
        var _this = this;
        this.ItemList = [];
        this.masterRepo.getBranchList().subscribe(function (response) {
            _this.branchList = response;
        }, function (err) {
            _this.masterRepo.handleWebError(err);
        });
        this.form = this.fb.group({
            DESCRIPTION: [''],
            MappingCode: [''],
            MapItem: [''],
            SkipTimeValidation: [''],
            SkipTimeValidationSS: [''],
            SkipTimeValidationRoom: [''],
            SkipTimeValidationRoomSS: [''],
            SkipTimeValidationCustomer: [''],
            appointmentNotRequired: [''],
            // TIMEDURATION_HRS: ['',Validators.compose([Validators.maxLength(2)])],
            TIMEDURATION_MIN: [''],
            noOfEmployees: [''],
            RATE: [''],
            SERVICEID: [''],
            branches: [[]],
            employees: [[]],
            rooms: [[]]
        });
        if (this.mode == "edit") {
            if (!!this.activatedRoute.snapshot.params['id']) {
                var id_1 = this.activatedRoute.snapshot.params['id'];
                var loadedValue = this.masterRepo._serviceList.filter(function (r) { return r.SERVICEID == id_1; })[0];
                if (loadedValue != null) {
                    this.form.patchValue({
                        SERVICEID: loadedValue.SERVICEID,
                        MappingCode: loadedValue.MappingCode,
                        DESCRIPTION: loadedValue.DESCRIPTION,
                        TIMEDURATION_MIN: loadedValue.TIMEDURATION_MIN,
                        noOfEmployees: loadedValue.noOfEmployees,
                        RATE: loadedValue.RATE,
                        SkipTimeValidation: loadedValue.SkipTimeValidation,
                        SkipTimeValidationSS: loadedValue.SkipTimeValidationSS,
                        SkipTimeValidationRoom: loadedValue.SkipTimeValidationRoom,
                        SkipTimeValidationRoomSS: loadedValue.SkipTimeValidationRoomSS,
                        SkipTimeValidationCustomer: loadedValue.SkipTimeValidationCustomer,
                        appointmentNotRequired: loadedValue.appointmentNotRequired,
                        employees: loadedValue.employees,
                        branches: loadedValue.branches,
                        rooms: loadedValue.rooms
                    });
                }
            }
        }
        this.masterRepo.getEmployees().subscribe(function (response) {
            _this.empList = response;
        });
        this.masterRepo.getRooms().subscribe(function (response) {
            _this.roomList = response;
        });
        this.masterRepo.getItemList().subscribe(function (data) {
            _this.ItemList = data.sort(function (a, b) {
                var nameA = (a.ItemName || '').toLowerCase().trim();
                var nameB = (b.ItemName || '').toLowerCase().trim();
                return nameA.localeCompare(nameB);
            });
        }, function (Error) { return _this.masterRepo.handleWebError(Error); });
        this.masterRepo.getFormPreferences("Service").subscribe(function (result) {
            _this.common.setFormPreference(_this.form, result.fields);
        });
        this.branchSetting = {
            enableCheckAll: true,
            text: 'Select Outlets',
            enableSearchFilter: true,
            labelKey: "branchName",
            primaryKey: "branchId"
        };
        this.empSetting = {
            enableCheckAll: true,
            text: 'Select Employees',
            enableSearchFilter: true,
            labelKey: "name",
            primaryKey: "id"
        };
        this.roomSetting = {
            enableCheckAll: true,
            text: 'Select Rooms',
            enableSearchFilter: true,
            labelKey: "name",
            primaryKey: "id"
        };
        this.serviceSetting = {
            enableFilterSelectAll: false,
            text: 'Select a Service',
            enableSearchFilter: true,
            labelKey: "ItemName",
            primaryKey: "Id",
            singleSelection: true,
            showCheckbox: false,
        };
    };
    AddService.prototype.disabled = function () {
        if (this.viewMode == true) {
            return "#EBEBE4";
        }
        else {
            return "";
        }
    };
    AddService.prototype.changeToArray = function (data) {
        //console.log(data);
        if (data) {
            var retData = [];
            retData.concat([], data);
            return retData;
        }
        return [];
    };
    AddService.prototype.onSave = function () {
        //validate before Saving
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        this.onsubmit();
    };
    AddService.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    AddService.prototype.onsubmit = function () {
        var _this = this;
        try {
            var ser = this.form.value;
            var sub = this.masterRepo.postmaster(this.mode, ser, "/saveService")
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    //Displaying dialog message for save with timer of 1 secs
                    _this.DialogMessage = "Data Saved Successfully";
                    setTimeout(function () {
                        _this.childModal.hide();
                        _this.router.navigate([_this.returnUrl]);
                    }, 1000);
                }
                else {
                    _this.DialogMessage = data.result;
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            }, function (error) { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    AddService.prototype.onCancel = function () {
        //console.log(this.returnUrl)
        this.router.navigate([this.returnUrl]);
    };
    AddService.prototype.ngOnDestroy = function () {
        //if(this.subitSubscription)
        //  this.subitSubscription.unsubscribe();
        this.subcriptions.forEach(function (subs) {
            subs.unsubscribe();
        });
    };
    AddService.prototype.serviceChangeEvent = function (e) {
        debugger;
        this.form.get('DESCRIPTION').setValue(e.ItemName, { emitEvent: false });
        this.form.get('MappingCode').setValue(e.Id, { emitEvent: false });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], AddService.prototype, "childModal", void 0);
    AddService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'addService',
            template: __webpack_require__(/*! ./AddService.component.html */ "./src/app/pages/masters/components/Services/AddService.component.html"),
            providers: [],
            styles: ["\n        input{\n            color: black;\n        }\n    "],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _common_repositories__WEBPACK_IMPORTED_MODULE_5__["MasterRepo"], _common_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]])
    ], AddService);
    return AddService;
}());



/***/ }),

/***/ "./src/app/pages/masters/components/Services/ServiceList.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/masters/components/Services/ServiceList.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n  <div class=\"row\">\r\n    <button class=\"btn btn-primary\" style=\"margin-bottom: 10px;margin-left:18px\" [disabled]=\"disableAdd \" (click)=\"onAddClick()\" >Add Service</button>\r\n  </div>\r\n  <div>\r\n    <ba-card title=\"Services\" baCardClass=\"with-scroll\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (delete)=\"onDeleteConfirm($event)\" (view)=\"onViewClick($event)\"></ng2-smart-table>\r\n    </ba-card>\r\n  </div>\r\n</div>\r\n\r\n<ba-modal #childModal title=\"Information\" size=\"sm\">\r\n  <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n  {{DialogMessage}}\r\n  \r\n  \r\n</ba-modal>\r\n\r\n<ba-modal #deleteModal title=\"Warning\" size=\"sm\">\r\n  <div>\r\n    Once you delete the Serivce you can't recover it back. Are U sure you want to delete this Service?\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n    <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=\"deleteModal.hide()\">Cancel</button>\r\n  </div>\r\n  \r\n</ba-modal>"

/***/ }),

/***/ "./src/app/pages/masters/components/Services/ServiceList.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/masters/components/Services/ServiceList.component.ts ***!
  \****************************************************************************/
/*! exports provided: ServiceList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceList", function() { return ServiceList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! style-loader!../smartTables.scss */ "./node_modules/style-loader/index.js!./src/app/pages/masters/components/smartTables.scss");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var ServiceList = /** @class */ (function () {
    function ServiceList(service, _authService, router) {
        var _this = this;
        this.service = service;
        this._authService = _authService;
        this.router = router;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.settings = {
            mode: 'external',
            edit: null,
            delete: null,
            columns: {
                DESCRIPTION: {
                    title: 'Description',
                    type: 'string'
                },
                TIMEDURATION_MIN: {
                    title: 'Time Duration(min)',
                    type: 'string'
                },
                RATE: {
                    title: 'Rate',
                    type: 'string'
                }
            }
        };
        this.subcriptions = [];
        this.source = new _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["LocalDataSource"]();
        var Slist = [];
        this.service.getServiceList().subscribe(function (data) {
            var services = data;
            Slist.push.apply(Slist, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](services));
        }, function (Error) { return console.log(Error); }, function () {
            _this.service._serviceList = Slist;
            _this.source.load(Slist);
        });
        this.settings.delete = this.menuRight.delete ? {} : null;
        this.settings.edit = this.menuRight.edit ? {} : null;
    }
    Object.defineProperty(ServiceList.prototype, "disableAdd", {
        get: function () {
            return !this.menuRight.create;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceList.prototype, "menuRight", {
        get: function () {
            return this._authService.getRole.menuRights.find(function (x) { return x.menuId === 'ser'; });
        },
        enumerable: true,
        configurable: true
    });
    ServiceList.prototype.onAddClick = function () {
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            this.router.navigate(['/pages/masters/ser/detail-ser', { mode: "add", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to add service.";
            this.childModal.show();
        }
    };
    ServiceList.prototype.onDeleteConfirm = function (event) {
        this.selectedRow = event;
        this.deleteModal.show();
    };
    ServiceList.prototype.DeleteEvent = function () {
        var _this = this;
        this.deleteModal.hide();
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            try {
                this.DialogMessage = "Deleting please wait...";
                this.childModal.show();
                var sub = this.service.postmaster("delete", this.selectedRow.data, "/saveService")
                    .subscribe(function (data) {
                    if (data.status == 'ok') {
                        if (_this.service._serviceList.length > 0) {
                            _this.service._serviceList.splice(_this.service._serviceList.indexOf(_this.selectedRow.data), 1);
                            _this.source.load(_this.service._serviceList);
                        }
                        //Displaying dialog message for save with timer of 1 secs
                        _this.DialogMessage = "Data Deleted Successfully";
                        setTimeout(function () {
                            _this.childModal.hide();
                        }, 1000);
                    }
                    else {
                        _this.DialogMessage = data.result;
                        setTimeout(function () {
                            _this.childModal.hide();
                        }, 3000);
                    }
                }, function (error) { alert(error); });
                this.subcriptions.push(sub);
            }
            catch (e) {
                alert(e);
            }
        }
        else {
            this.DialogMessage = "You are not authorized to edit Service.";
            this.childModal.show();
        }
    };
    // onViewClick(event): void {
    //   if (this._authService.checkMenuRight("divisions", "view") == true) {
    //     this.router.navigate(["pages/masters/divisions/add-division", { initial: event.data.INITIAL, mode: "view", returnUrl: this.router.url }]);
    //   } else {
    //     this.DialogMessage = "You are not authorized to view division."
    //     this.childModal.show();
    //   }
    // }
    ServiceList.prototype.onEditClick = function (event) {
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            this.router.navigate(["/pages/masters/ser/detail-ser", { id: event.data.SERVICEID, mode: "edit", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to edit Service.";
            this.childModal.show();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_3__["BaModalComponent"])
    ], ServiceList.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_3__["BaModalComponent"])
    ], ServiceList.prototype, "deleteModal", void 0);
    ServiceList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'serlist',
            template: __webpack_require__(/*! ./ServiceList.component.html */ "./src/app/pages/masters/components/Services/ServiceList.component.html"),
            providers: [],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], ServiceList);
    return ServiceList;
}());



/***/ }),

/***/ "./src/app/pages/masters/masters.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/masters/masters.component.ts ***!
  \****************************************************/
/*! exports provided: Masters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Masters", function() { return Masters; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Masters = /** @class */ (function () {
    function Masters() {
    }
    ;
    Masters = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'masters',
            template: '<router-outlet></router-outlet>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Masters);
    return Masters;
}());



/***/ }),

/***/ "./src/app/pages/masters/masters.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/masters/masters.module.ts ***!
  \*************************************************/
/*! exports provided: MastersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastersModule", function() { return MastersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _theme_nga_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/nga.module */ "./src/app/theme/nga.module.ts");
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _masters_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./masters.routing */ "./src/app/pages/masters/masters.routing.ts");
/* harmony import */ var _masters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./masters.component */ "./src/app/pages/masters/masters.component.ts");
/* harmony import */ var _common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/services/permission/guard.service */ "./src/app/common/services/permission/guard.service.ts");
/* harmony import */ var _components_Employee_EmployeeList_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Employee/EmployeeList.component */ "./src/app/pages/masters/components/Employee/EmployeeList.component.ts");
/* harmony import */ var _components_Customer_CustomerList_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Customer/CustomerList.component */ "./src/app/pages/masters/components/Customer/CustomerList.component.ts");
/* harmony import */ var _components_Customer_AddCustomer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Customer/AddCustomer.component */ "./src/app/pages/masters/components/Customer/AddCustomer.component.ts");
/* harmony import */ var _components_Rooms_RoomList_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Rooms/RoomList.component */ "./src/app/pages/masters/components/Rooms/RoomList.component.ts");
/* harmony import */ var _components_Rooms_AddRoom_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/Rooms/AddRoom.component */ "./src/app/pages/masters/components/Rooms/AddRoom.component.ts");
/* harmony import */ var _components_Services_ServiceList_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/Services/ServiceList.component */ "./src/app/pages/masters/components/Services/ServiceList.component.ts");
/* harmony import */ var _components_Services_AddService_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Services/AddService.component */ "./src/app/pages/masters/components/Services/AddService.component.ts");
/* harmony import */ var _components_Employee_AddEmployee_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/Employee/AddEmployee.component */ "./src/app/pages/masters/components/Employee/AddEmployee.component.ts");
/* harmony import */ var _components_Series_SeriesList_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/Series/SeriesList.component */ "./src/app/pages/masters/components/Series/SeriesList.component.ts");
/* harmony import */ var _components_Series_AddSeries_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/Series/AddSeries.component */ "./src/app/pages/masters/components/Series/AddSeries.component.ts");
/* harmony import */ var _components_SeriesSales_AddSeriesSales_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/SeriesSales/AddSeriesSales.component */ "./src/app/pages/masters/components/SeriesSales/AddSeriesSales.component.ts");
/* harmony import */ var _components_SeriesSales_SeriesSalesList_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/SeriesSales/SeriesSalesList.component */ "./src/app/pages/masters/components/SeriesSales/SeriesSalesList.component.ts");
/* harmony import */ var _components_Medication_MedicationList_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/Medication/MedicationList.component */ "./src/app/pages/masters/components/Medication/MedicationList.component.ts");
/* harmony import */ var _components_Disease_DiseaseList_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/Disease/DiseaseList.component */ "./src/app/pages/masters/components/Disease/DiseaseList.component.ts");
/* harmony import */ var _components_Disease_AddDisease_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/Disease/AddDisease.component */ "./src/app/pages/masters/components/Disease/AddDisease.component.ts");
/* harmony import */ var _components_Medication_AddMedication_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/Medication/AddMedication.component */ "./src/app/pages/masters/components/Medication/AddMedication.component.ts");
/* harmony import */ var _components_HolidayEntry_holidayEntry_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/HolidayEntry/holidayEntry.component */ "./src/app/pages/masters/components/HolidayEntry/holidayEntry.component.ts");
/* harmony import */ var _components_HolidayEntry_addHoliday_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/HolidayEntry/addHoliday.component */ "./src/app/pages/masters/components/HolidayEntry/addHoliday.component.ts");
/* harmony import */ var _common_nepali_date_picker_nepali_date_picker_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../common/nepali-date-picker/nepali-date-picker.module */ "./src/app/common/nepali-date-picker/nepali-date-picker.module.ts");
/* harmony import */ var _components_Prescription_PrescriptionList_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/Prescription/PrescriptionList.component */ "./src/app/pages/masters/components/Prescription/PrescriptionList.component.ts");
/* harmony import */ var _components_Prescription_AddPrescription_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/Prescription/AddPrescription.component */ "./src/app/pages/masters/components/Prescription/AddPrescription.component.ts");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/index.js");





//import { Ng2SmartTableModule } from '../../node_modules/ng2-smart-table/src/ng2-smart-table.module';


//import {TreeModule} from 'angular2-tree-component';

























var MastersModule = /** @class */ (function () {
    function MastersModule() {
    }
    MastersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                //TreeModule,
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _theme_nga_module__WEBPACK_IMPORTED_MODULE_4__["NgaModule"],
                _masters_routing__WEBPACK_IMPORTED_MODULE_7__["routing"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"],
                _common_nepali_date_picker_nepali_date_picker_module__WEBPACK_IMPORTED_MODULE_28__["NepaliDateModule"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_31__["AngularMultiSelectModule"]
            ],
            declarations: [
                _components_Employee_EmployeeList_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeList"],
                _masters_component__WEBPACK_IMPORTED_MODULE_8__["Masters"],
                _components_Employee_AddEmployee_component__WEBPACK_IMPORTED_MODULE_17__["AddEmployee"],
                _components_Rooms_RoomList_component__WEBPACK_IMPORTED_MODULE_13__["RoomList"],
                _components_Customer_CustomerList_component__WEBPACK_IMPORTED_MODULE_11__["CustomerList"],
                _components_Services_ServiceList_component__WEBPACK_IMPORTED_MODULE_15__["ServiceList"],
                _components_Series_SeriesList_component__WEBPACK_IMPORTED_MODULE_18__["SeriesList"],
                _components_Customer_AddCustomer_component__WEBPACK_IMPORTED_MODULE_12__["AddCustomer"],
                _components_Rooms_AddRoom_component__WEBPACK_IMPORTED_MODULE_14__["AddRoom"],
                _components_Services_AddService_component__WEBPACK_IMPORTED_MODULE_16__["AddService"],
                _components_Series_AddSeries_component__WEBPACK_IMPORTED_MODULE_19__["AddSeries"],
                _components_SeriesSales_SeriesSalesList_component__WEBPACK_IMPORTED_MODULE_21__["SeriesSalesList"],
                _components_SeriesSales_AddSeriesSales_component__WEBPACK_IMPORTED_MODULE_20__["AddSeriesSales"],
                _components_Medication_MedicationList_component__WEBPACK_IMPORTED_MODULE_22__["MedicationList"],
                _components_Prescription_PrescriptionList_component__WEBPACK_IMPORTED_MODULE_29__["PrescriptionList"],
                _components_Medication_AddMedication_component__WEBPACK_IMPORTED_MODULE_25__["AddMedication"],
                _components_Prescription_AddPrescription_component__WEBPACK_IMPORTED_MODULE_30__["AddPrescription"],
                _components_Disease_DiseaseList_component__WEBPACK_IMPORTED_MODULE_23__["DiseaseList"],
                _components_Disease_AddDisease_component__WEBPACK_IMPORTED_MODULE_24__["AddDisease"],
                _components_HolidayEntry_holidayEntry_component__WEBPACK_IMPORTED_MODULE_26__["HolidayEntryComponent"],
                _components_HolidayEntry_addHoliday_component__WEBPACK_IMPORTED_MODULE_27__["AddHolidayComponent"]
            ],
            providers: [
                _common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_9__["CanActivateTeam"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], MastersModule);
    return MastersModule;
}());



/***/ }),

/***/ "./src/app/pages/masters/masters.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/masters/masters.routing.ts ***!
  \**************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _masters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./masters.component */ "./src/app/pages/masters/masters.component.ts");
/* harmony import */ var _common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/permission/guard.service */ "./src/app/common/services/permission/guard.service.ts");
/* harmony import */ var _components_Employee_EmployeeList_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Employee/EmployeeList.component */ "./src/app/pages/masters/components/Employee/EmployeeList.component.ts");
/* harmony import */ var _components_Employee_AddEmployee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Employee/AddEmployee.component */ "./src/app/pages/masters/components/Employee/AddEmployee.component.ts");
/* harmony import */ var _components_Customer_CustomerList_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Customer/CustomerList.component */ "./src/app/pages/masters/components/Customer/CustomerList.component.ts");
/* harmony import */ var _components_Customer_AddCustomer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Customer/AddCustomer.component */ "./src/app/pages/masters/components/Customer/AddCustomer.component.ts");
/* harmony import */ var _components_Rooms_RoomList_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Rooms/RoomList.component */ "./src/app/pages/masters/components/Rooms/RoomList.component.ts");
/* harmony import */ var _components_Rooms_AddRoom_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Rooms/AddRoom.component */ "./src/app/pages/masters/components/Rooms/AddRoom.component.ts");
/* harmony import */ var _components_Services_ServiceList_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Services/ServiceList.component */ "./src/app/pages/masters/components/Services/ServiceList.component.ts");
/* harmony import */ var _components_Services_AddService_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Services/AddService.component */ "./src/app/pages/masters/components/Services/AddService.component.ts");
/* harmony import */ var _components_Series_SeriesList_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Series/SeriesList.component */ "./src/app/pages/masters/components/Series/SeriesList.component.ts");
/* harmony import */ var _components_Series_AddSeries_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Series/AddSeries.component */ "./src/app/pages/masters/components/Series/AddSeries.component.ts");
/* harmony import */ var _components_SeriesSales_AddSeriesSales_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/SeriesSales/AddSeriesSales.component */ "./src/app/pages/masters/components/SeriesSales/AddSeriesSales.component.ts");
/* harmony import */ var _components_SeriesSales_SeriesSalesList_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/SeriesSales/SeriesSalesList.component */ "./src/app/pages/masters/components/SeriesSales/SeriesSalesList.component.ts");
/* harmony import */ var _components_Disease_AddDisease_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/Disease/AddDisease.component */ "./src/app/pages/masters/components/Disease/AddDisease.component.ts");
/* harmony import */ var _components_Disease_DiseaseList_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Disease/DiseaseList.component */ "./src/app/pages/masters/components/Disease/DiseaseList.component.ts");
/* harmony import */ var _components_Medication_AddMedication_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/Medication/AddMedication.component */ "./src/app/pages/masters/components/Medication/AddMedication.component.ts");
/* harmony import */ var _components_Medication_MedicationList_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/Medication/MedicationList.component */ "./src/app/pages/masters/components/Medication/MedicationList.component.ts");
/* harmony import */ var _components_HolidayEntry_holidayEntry_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/HolidayEntry/holidayEntry.component */ "./src/app/pages/masters/components/HolidayEntry/holidayEntry.component.ts");
/* harmony import */ var _components_HolidayEntry_addHoliday_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/HolidayEntry/addHoliday.component */ "./src/app/pages/masters/components/HolidayEntry/addHoliday.component.ts");
/* harmony import */ var _components_Prescription_PrescriptionList_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/Prescription/PrescriptionList.component */ "./src/app/pages/masters/components/Prescription/PrescriptionList.component.ts");
/* harmony import */ var _components_Prescription_AddPrescription_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/Prescription/AddPrescription.component */ "./src/app/pages/masters/components/Prescription/AddPrescription.component.ts");























var routes = [
    {
        path: '',
        component: _masters_component__WEBPACK_IMPORTED_MODULE_1__["Masters"],
        children: [
            { path: 'emp', component: _components_Employee_EmployeeList_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeList"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateTeam"]] },
            { path: 'cus', component: _components_Customer_CustomerList_component__WEBPACK_IMPORTED_MODULE_5__["CustomerList"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateTeam"]] },
            { path: 'room', component: _components_Rooms_RoomList_component__WEBPACK_IMPORTED_MODULE_7__["RoomList"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateTeam"]] },
            { path: 'ser', component: _components_Services_ServiceList_component__WEBPACK_IMPORTED_MODULE_9__["ServiceList"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateTeam"]] },
            { path: 'series', component: _components_Series_SeriesList_component__WEBPACK_IMPORTED_MODULE_11__["SeriesList"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateTeam"]] },
            { path: 'seriesSales', component: _components_SeriesSales_SeriesSalesList_component__WEBPACK_IMPORTED_MODULE_14__["SeriesSalesList"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateTeam"]] },
            { path: 'emp/detail-emp', component: _components_Employee_AddEmployee_component__WEBPACK_IMPORTED_MODULE_4__["AddEmployee"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateTeam"]] },
            { path: 'room/detail-room', component: _components_Rooms_AddRoom_component__WEBPACK_IMPORTED_MODULE_8__["AddRoom"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateTeam"]] },
            { path: 'cus/detail-cus', component: _components_Customer_AddCustomer_component__WEBPACK_IMPORTED_MODULE_6__["AddCustomer"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateTeam"]] },
            { path: 'ser/detail-ser', component: _components_Services_AddService_component__WEBPACK_IMPORTED_MODULE_10__["AddService"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateTeam"]] },
            { path: 'series/detail-series', component: _components_Series_AddSeries_component__WEBPACK_IMPORTED_MODULE_12__["AddSeries"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateTeam"]] },
            { path: 'seriesSales/detail-seriesSales', component: _components_SeriesSales_AddSeriesSales_component__WEBPACK_IMPORTED_MODULE_13__["AddSeriesSales"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateTeam"]] },
            { path: 'disease/detail-disease', component: _components_Disease_AddDisease_component__WEBPACK_IMPORTED_MODULE_15__["AddDisease"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateTeam"]] },
            { path: 'disease', component: _components_Disease_DiseaseList_component__WEBPACK_IMPORTED_MODULE_16__["DiseaseList"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateTeam"]] },
            { path: 'medication/detail-medication', component: _components_Medication_AddMedication_component__WEBPACK_IMPORTED_MODULE_17__["AddMedication"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateTeam"]] },
            { path: 'medication', component: _components_Medication_MedicationList_component__WEBPACK_IMPORTED_MODULE_18__["MedicationList"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateTeam"]] },
            { path: 'prescription/detail-prescription', component: _components_Prescription_AddPrescription_component__WEBPACK_IMPORTED_MODULE_22__["AddPrescription"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateTeam"]] },
            { path: 'prescription', component: _components_Prescription_PrescriptionList_component__WEBPACK_IMPORTED_MODULE_21__["PrescriptionList"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateTeam"]] },
            { path: 'holiday', component: _components_HolidayEntry_holidayEntry_component__WEBPACK_IMPORTED_MODULE_19__["HolidayEntryComponent"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateTeam"]] },
            { path: 'holiday/detail-holiday', component: _components_HolidayEntry_addHoliday_component__WEBPACK_IMPORTED_MODULE_20__["AddHolidayComponent"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateTeam"]] },
        ]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=masters-masters-module.8283e24c21406c94c679.js.map