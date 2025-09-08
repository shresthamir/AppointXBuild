(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-report-module"],{

/***/ "./src/app/pages/reports/components/EmployeeRoster/employeeRoster.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/reports/components/EmployeeRoster/employeeRoster.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n   <div class=\"row\">\r\n      <div class=\"col-xs-6 col-sm-4 col-md-4  col-xl-2 col-xxl-1\">\r\n        <nepali-date-picker name=\"nepaliDateFrom\" [id]=\"'nepaliDatefrom'\"\r\n            (change)=\"changeEntryDate($event.detail.value,'BS')\" [label]=\"'yyyy-mm-dd'\"\r\n            [(ngModel)]=\"this.bsDate\" >\r\n        </nepali-date-picker>\r\n      </div>\r\n      <div class=\"col-xs-6 col-sm-4 col-md-4  col-xl-2 col-xxl-1\">\r\n          <input type=\"date\" class=\"date-input form-control\" [(ngModel)]=\"this.date\"\r\n              (change)=\"changeEntryDate($event.target.value,'AD')\" style=\"max-width:150px; height: 35px;\">\r\n      </div>\r\n      <div class=\"col-md-12  col-xl-3 col-xxl-5\" style=\"display: flex;\">\r\n        <select class=\"form-control\" id=\"outlet\" (change)=\"loadData()\" [(ngModel)] = \"selectedBranch\">\r\n            <option *ngFor = \"let branch of userBranches\" value=\"{{branch.branchId}}\">{{branch.branchName}}</option>\r\n        </select>        \r\n        <!-- <angular2-multiselect style=\"width: 100%;\" [data]=\"userBranches\" [settings]=\"branchSetting\" [(ngModel)]=\"selectedBranch\" (ngModelChange)=\"loadData()\">\r\n        </angular2-multiselect> -->\r\n      </div>\r\n  </div>\r\n  <div>\r\n    <ba-card title=\"Employees\" baCardClass=\"with-scroll\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (delete)=\"onDeleteConfirm($event)\"\r\n        (view)=\"onViewClick($event)\"></ng2-smart-table>\r\n    </ba-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/reports/components/EmployeeRoster/employeeRoster.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/reports/components/EmployeeRoster/employeeRoster.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EmployeeRosterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRosterComponent", function() { return EmployeeRosterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




//import 'style-loader!../smartTables.scss';


var EmployeeRosterComponent = /** @class */ (function () {
    function EmployeeRosterComponent(service, _authService, router) {
        this.service = service;
        this._authService = _authService;
        this.router = router;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.userBranches = [];
        this.branchSetting = {
            enableCheckAll: true,
            text: 'Select Outlets',
            enableSearchFilter: true,
            labelKey: "branchName",
            primaryKey: "branchId",
            badgeShowLimit: 2
        };
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
                isAvailable: {
                    title: 'Is Available',
                    type: 'bool'
                },
                remarks: {
                    title: 'Reason',
                    type: 'string'
                }
            }
        };
        this.subcriptions = [];
        this.source = new _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["LocalDataSource"]();
        this.userBranches = this._authService.getUserProfile().branches;
        this.selectedBranch = this._authService.getUserProfile().defaultBranch;
        var date = new Date();
        this.date = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString().padStart(2, '0') + "-" + date.getDate().toString().padStart(2, '0');
        this.changeEntryDate(this.date, "AD");
    }
    Object.defineProperty(EmployeeRosterComponent.prototype, "disableAdd", {
        get: function () {
            return !this.menuRight.create;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeRosterComponent.prototype, "menuRight", {
        get: function () {
            return this._authService.getRole.menuRights.find(function (x) { return x.menuId === 'emp'; });
        },
        enumerable: true,
        configurable: true
    });
    EmployeeRosterComponent.prototype.onViewClick = function (event) {
        this.router.navigate(["/pages/masters/emp/detail-emp", { mode: "view", returnUrl: this.router.url, id: event.data.EMPLOYEEID }]);
    };
    EmployeeRosterComponent.prototype.onEditClick = function (event) {
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            this.router.navigate(["/pages/masters/emp/detail-emp", { mode: "edit", returnUrl: this.router.url, id: event.data.EMPLOYEEID }]);
        }
        else {
            this.DialogMessage = "You are not authorized to edit employee.";
            //this.childModal.show();
        }
    };
    EmployeeRosterComponent.prototype.changeEntryDate = function (value, format) {
        if (!value)
            return;
        if (format == "AD") {
            this.bsDate = this.service.toBSDate(value);
            this.loadData();
        }
        else if (format == "BS") {
            this.date = this.service.toADDate(value);
            this.loadData();
        }
    };
    EmployeeRosterComponent.prototype.loadData = function () {
        var _this = this;
        if (!this.date || !this.selectedBranch)
            return;
        var elist = [];
        this.service.getEmployeeRoster(this.selectedBranch, this.date).subscribe(function (data) {
            var employees = data;
            elist.push.apply(elist, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](employees));
        }, function (Error) { return console.log(Error); }, function () {
            _this.service._employeeList = elist;
            _this.source.load(elist);
        });
    };
    EmployeeRosterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'employee-roster',
            template: __webpack_require__(/*! ./employeeRoster.component.html */ "./src/app/pages/reports/components/EmployeeRoster/employeeRoster.component.html"),
            providers: [],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_4__["MasterRepo"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], EmployeeRosterComponent);
    return EmployeeRosterComponent;
}());



/***/ }),

/***/ "./src/app/pages/reports/components/activityReport.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/reports/components/activityReport.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-bottom: 20px;\">\r\n    <div class=\"form-group row col-12\">\r\n        <div class=\"row col-sm-5 col-md-3 col-lg-2\">\r\n            <label for=\"date1\">From Date: </label>\r\n            <input type=\"date\" class=\"form-control\" id=\"date1\" [(ngModel)]=\"reportObj.Date1\">\r\n        </div>\r\n\r\n        <div class=\"row col-sm-5 col-md-3 col-lg-2 ml-sm-1\">\r\n            <label for=\"date2\">To Date: </label>\r\n            <input type=\"date\" class=\"form-control\" id=\"date2\" [(ngModel)]=\"reportObj.Date2\">\r\n        </div>\r\n\r\n        <div class=\"row col-sm-5 col-md-3 col-lg-2 ml-md-1\">\r\n            <label for=\"user\">User: </label>\r\n            <select class=\"form-control\" name=\"user\" id=\"user\" [(ngModel)]=\"reportObj.user\">\r\n                <option *ngFor=\"let em of userList\" [ngValue]=\"em\">{{em.UserId}}</option>\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"row col-sm-5 col-md-3 col-lg-2 ml-sm-1\">\r\n            <label for=\"form\">Form: </label>\r\n            <select class=\"form-control\" name=\"form\" id=\"form\" [(ngModel)]=\"reportObj.form\">\r\n                <option *ngFor=\"let em of formList\" [ngValue]=\"em\">{{em}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-right: 10px;\" (click)=\"loadReportEvent()\"\r\n        [disabled]=\"!reportObj.Date1\">Load</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"onClickClear()\">Clear</button>\r\n</div>\r\n\r\n<Table id=\"BlueHeaderResizableTable\" style=\"width:100%\">\r\n    <div style=\"width:100%;max-height:400px\" style=\"overflow:auto;scrollbar-3dlight-color:#FFFFFF;scrollbar-arrow-color:#000000;scrollbar-base-color:#FF9999;scrollbar-darkshadow-color:#000000;scrollbar-face-color:#000000;scrollbar-highlight-color:#000000;\r\nscrollbar-shadow-color:#0033CC\">\r\n        <tbody style=\"width: 100%;display: table;\">\r\n            <tr style=\"height:30px;width:100%\">\r\n                <th style=\"width:5%\">Date</th>\r\n                <th style=\"width:5%\">Time</th>\r\n                <th style=\"width:10%\">Form</th>\r\n                <th style=\"width:10%\">Activity</th>\r\n                <th style=\"width:10%\">Document Id</th>\r\n                <th style=\"width:10%\">User</th>\r\n            </tr>\r\n\r\n            <tr style=\"height: 28px;\" *ngFor=\"let r of reportList; let i=index\">\r\n                <td style=\"width: 10%;\">{{r.date}}</td>\r\n                <td style=\"width: 10%;\">{{r.time}}</td>\r\n                <td style=\"width: 20%;\">{{r.formName}}</td>\r\n                <td style=\"width: 20%;\">{{r.activity}}</td>\r\n                <td style=\"width: 20%;\">{{r.documentId}}</td>\r\n                <td style=\"width: 20%;\">{{r.user}}</td>\r\n                <td style=\"width:60px\">\r\n                    <button class=\"fa fa-eye\" *ngIf=\"detailVisible(r)\" (click)=\"viewLogDetail(r)\"></button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n\r\n    </div>\r\n</Table>\r\n\r\n<ba-modal #childModal title=\"Information\" size=\"sm\">\r\n    {{ DialogMessage }}\r\n    \r\n    \r\n</ba-modal>\r\n\r\n<ba-modal #loginModal title=\"Login\" size=\"sm\">\r\n    <login (signedIn)=\"loginModal.hide()\" toUrl=\"test\"></login>\r\n    \r\n</ba-modal>\r\n\r\n<schedulePreview #schedulePreview></schedulePreview>\r\n<treatmentPreview #treatmentPreview></treatmentPreview>\r\n<editDetailPreview #editDetailPreview></editDetailPreview>"

/***/ }),

/***/ "./src/app/pages/reports/components/activityReport.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/reports/components/activityReport.component.ts ***!
  \**********************************************************************/
/*! exports provided: ActivityReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityReport", function() { return ActivityReport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _userManager_components_userManger_adduser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../userManager/components/userManger/adduser.service */ "./src/app/pages/userManager/components/userManger/adduser.service.ts");
/* harmony import */ var _previews_EditDetailPreview_editDetailPreview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./previews/EditDetailPreview/editDetailPreview.component */ "./src/app/pages/reports/components/previews/EditDetailPreview/editDetailPreview.component.ts");
/* harmony import */ var _previews_schedulePreview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./previews/schedulePreview.component */ "./src/app/pages/reports/components/previews/schedulePreview.component.ts");
/* harmony import */ var _previews_treatmentPreview_treatmentPreview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./previews/treatmentPreview/treatmentPreview.component */ "./src/app/pages/reports/components/previews/treatmentPreview/treatmentPreview.component.ts");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./report.service */ "./src/app/pages/reports/components/report.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







// import { Router } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { MasterRepo } from '../../../common/repositories/masterRepo.service';
// import { AuthService } from '../../../common/services/permission/authService.service';


// import { Followup } from '../../../common/interfaces/master.interface';
var ActivityReport = /** @class */ (function () {
    function ActivityReport(reportService, userService) {
        var _this = this;
        this.reportService = reportService;
        this.userService = userService;
        this.DialogMessage = '';
        this.reportObj = {};
        this.reportList = [];
        this.userList = [];
        this.formList = [];
        this.userService.getUserList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (d) { return d || []; }))
            .subscribe(function (data) {
            _this.userList.push(data);
        }, function (Error) { return console.log(Error); }, function () {
            console.log(Error);
        });
        this.reportService.getForms()
            .subscribe(function (data) {
            console.log(data);
            _this.formList = data;
        }, function (Error) { return console.log(Error); }, function () {
            console.log(Error);
        });
        this.reportObj = {
            Date1: new Date().toISOString().slice(0, 10),
            Date2: new Date().toISOString().slice(0, 10)
        };
        //console.log({reportObj_ctor : this.reportObj});
    }
    ActivityReport.prototype.onClickClear = function () { };
    ActivityReport.prototype.loadReportEvent = function () {
        var _this = this;
        this.DialogMessage = "Activty Log Loading.... Please Wait...";
        this.childModal.show();
        //console.log("LOAD REPORT EVENT");
        try {
            var rparam = { rName: 'activityLog', rParam: this.reportObj };
            this.reportService.getReport(rparam, '/GetReport')
                .subscribe(function (data) {
                _this.reportList = data;
                //console.log("REPORT LIST LOAD REPORT", this.reportList, typeof(this.reportList[1].DATE));
                _this.DialogMessage = "Activity Log Loaded sucessfully...";
                setTimeout(function () {
                    _this.childModal.hide();
                }, 1000);
            }, function (Error) {
                try {
                    var t = Error.json();
                    //console.log(t);
                    _this.DialogMessage = t.result + "Please check and try again";
                    //let p = t.json();
                    if (t.result == "Authorization Failed") {
                        //this.DialogMessage="erro in saving. " +Error._body;
                        setTimeout(function () {
                            _this.childModal.hide();
                            _this.loginModal.show();
                        }, 3000);
                    }
                    else {
                        _this.DialogMessage = "Error in Loading Data:" + t.result;
                    }
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 5000);
                }
                catch (e) {
                    _this.DialogMessage = e;
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            });
        }
        catch (ex) {
            alert(ex);
            this.DialogMessage = ex;
            setTimeout(function () {
                _this.childModal.hide();
            }, 3000);
        }
    };
    ActivityReport.prototype.detailVisible = function (log) {
        if (log.activity.toLowerCase() == "delete") {
            switch (log.formName.toLowerCase()) {
                case "appointment":
                case "treatment master":
                    return true;
                default:
                    return false;
            }
        }
        else if (log.activity.toLowerCase() == "edit") {
            return true;
        }
        return false;
    };
    ActivityReport.prototype.viewLogDetail = function (log) {
        console.log(log.formName.toLowerCase());
        if (log.activity.toLowerCase() == "delete") {
            switch (log.formName.toLowerCase()) {
                case "appointment":
                    this.childSchedulePreview.logId = log.logId;
                    this.childSchedulePreview.showDialog();
                    break;
                case "treatment master":
                    this.childTreatmentPreview.logId = log.logId;
                    this.childTreatmentPreview.showDialog();
                    break;
            }
        }
        else if (log.activity.toLowerCase() == "edit") {
            this.childEditDetail.logId = log.logId;
            this.childEditDetail.showDialog();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('schedulePreview'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _previews_schedulePreview_component__WEBPACK_IMPORTED_MODULE_5__["SchedulePreview"])
    ], ActivityReport.prototype, "childSchedulePreview", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('treatmentPreview'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _previews_treatmentPreview_treatmentPreview_component__WEBPACK_IMPORTED_MODULE_6__["TreatmentPreview"])
    ], ActivityReport.prototype, "childTreatmentPreview", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editDetailPreview'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _previews_EditDetailPreview_editDetailPreview_component__WEBPACK_IMPORTED_MODULE_4__["EditDetailPreview"])
    ], ActivityReport.prototype, "childEditDetail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], ActivityReport.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], ActivityReport.prototype, "loginModal", void 0);
    ActivityReport = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'activity',
            template: __webpack_require__(/*! ./activityReport.component.html */ "./src/app/pages/reports/components/activityReport.component.html"),
            providers: [_report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"], _userManager_components_userManger_adduser_service__WEBPACK_IMPORTED_MODULE_3__["AddUserService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"], _userManager_components_userManger_adduser_service__WEBPACK_IMPORTED_MODULE_3__["AddUserService"]])
    ], ActivityReport);
    return ActivityReport;
}());



/***/ }),

/***/ "./src/app/pages/reports/components/customerReport.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/reports/components/customerReport.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xlg-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <ba-card title=\"Report Parameters\">\r\n            <div>\r\n                <div class=\"form-group row\">\r\n\r\n                    <label for=\"customerselect\" style=\"float:left;width:10%\">Customer :</label>\r\n                    <select style=\"float:left;width:80%;height:28px;padding:0\" [(ngModel)]=\"reportObj.CUSID\" class=\"form-control\" name=\"customerselect\" id=\"customerselect\"> \r\n        <option *ngFor=\"let c of CustomerList\" [ngValue]=\"c.CUSID\">{{c.NAME}}</option>\r\n      </select>\r\n\r\n\r\n                </div>\r\n                <div class=\"form-group row\">\r\n\r\n                    <label for=\"date1\" style=\"float:left;width:10%\">From :</label>\r\n                    <input type=\"date\" style=\"float:left;width:30%;height:28px;padding:2px\" class=\"form-control\" id=\"date1\" [(ngModel)]=\"reportObj.Date1\">\r\n                     <label for=\"date2\" style=\"float:left;width:10%;margin-left:20px\">To :</label>\r\n                    <input type=\"date\" class=\"form-control\" id=\"date2\" [(ngModel)]=\"reportObj.Date2\" style=\"float:left;width:30%;height:28px;padding:2px\">\r\n\r\n                </div>\r\n                \r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"loadReportEvent()\" [disabled]=\"reportObj.Date1==null || reportObj.Date2==null || reportObj.CUSID==null\">Load</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Clear</button>\r\n        </ba-card>\r\n    </div>\r\n</div>\r\n<Table id=\"BlueHeaderResizableTable\" style=\"width:100%\">\r\n    <div style=\"width:100%;max-height:400px\" style=\"overflow:auto;scrollbar-3dlight-color:#FFFFFF;scrollbar-arrow-color:#000000;scrollbar-base-color:#FF9999;scrollbar-darkshadow-color:#000000;scrollbar-face-color:#000000;scrollbar-highlight-color:#000000;\r\nscrollbar-shadow-color:#0033CC\">\r\n        <tbody style=\"width: 100%;display: table;\">\r\n            <tr style=\"height:30px;width:100%\">\r\n                <th style=\"width:5%\">SNo</th>\r\n                <th style=\"width:10%\">Date</th>\r\n                <th style=\"width:10%\">User</th>\r\n                <th style=\"width:15%\">Service</th>\r\n                <th style=\"width:10%\">Room</th>\r\n                <th style=\"width:15%\">Therapist</th>\r\n                <th style=\"width:5%\">Cus. Pref.</th>\r\n                <th style=\"width:10%\">StartTime</th>\r\n                <th style=\"width:10%\">FinishedTime</th>\r\n                <th style=\"width:10%\">Rate</th>\r\n            </tr>\r\n        \r\n    \r\n            <tr *ngFor=\"let ir of reportList;let i=index\" style=\"height:28px\">\r\n                <td style=\"width:5%\">{{i+1}}</td>\r\n                <td style=\"width:10%\">{{ir.DATE}}</td>\r\n                <td style=\"width:10%\">{{ir.USER}}</td>\r\n                <td style=\"width:15%\">{{ir.SERVICE}}</td>\r\n                <td style=\"width:10%\">{{ir.ROOM}}</td>\r\n                <td style=\"width:15%\">{{ir.EMPLOYEE}}</td>\r\n                <td style=\"width:5%\">{{ir.EMPLOYEE_PREFERED}}</td>\r\n                <td style=\"width:10%\">{{ir.STARTTIME}}</td>\r\n                <td style=\"width:10%\">{{ir.ENDTIME}}</td>\r\n                <td style=\"width:10%\">{{ir.RATE}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </div>\r\n</Table>\r\n\r\n<ba-modal #childModal title=\"Information\" size=\"sm\">\r\n    {{DialogMessage}}\r\n    \r\n    \r\n</ba-modal>\r\n\r\n<ba-modal #loginModal title=\"Login\" size=\"sm\">\r\n    <login (signedIn)=\"loginModal.hide()\" toUrl=\"test\"></login>\r\n    \r\n</ba-modal>"

/***/ }),

/***/ "./src/app/pages/reports/components/customerReport.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/reports/components/customerReport.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomerReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerReport", function() { return CustomerReport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report.service */ "./src/app/pages/reports/components/report.service.ts");







var CustomerReport = /** @class */ (function () {
    function CustomerReport(masterService, _authService, router, reportService) {
        this.masterService = masterService;
        this._authService = _authService;
        this.router = router;
        this.reportService = reportService;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.subcriptions = [];
        this.reportList = [];
        this.reportObj = {};
        this.CustomerList = [];
    }
    CustomerReport.prototype.ngOnInit = function () {
        var _this = this;
        if (this.masterService._customerList.length > 0) {
            this.CustomerList = this.masterService._customerList;
        }
        else {
            this.masterService.getCustomerList().subscribe(function (data) {
                _this.CustomerList = data;
                _this.masterService._customerList = _this.CustomerList;
            }, function (Error) { return console.log(Error); });
        }
    };
    CustomerReport.prototype.onCancel = function () {
        this.reportObj = {};
        this.reportList = [];
    };
    CustomerReport.prototype.loadReportEvent = function () {
        var _this = this;
        this.DialogMessage = "Customer Report Loading.... Please Wait...";
        this.childModal.show();
        try {
            var rparam = { rName: 'customerReport', rParam: this.reportObj };
            this.reportService.getReport(rparam, '/GetReport')
                .subscribe(function (data) {
                data.forEach(function (element) {
                    element.DATE = element.DATE.toString().substring(0, 10);
                });
                _this.reportList = data;
                _this.DialogMessage = "Customer Report Loaded sucessfully...";
                setTimeout(function () {
                    _this.childModal.hide();
                }, 1000);
            }, function (Error) {
                try {
                    var t = Error.json();
                    //console.log(t);
                    _this.DialogMessage = t.result + "Please check and try again";
                    //let p = t.json();
                    if (t.result == "Authorization Failed") {
                        //this.DialogMessage="erro in saving. " +Error._body;
                        setTimeout(function () {
                            _this.childModal.hide();
                            _this.loginModal.show();
                        }, 3000);
                    }
                    else {
                        _this.DialogMessage = "Error in Loading Data:" + t.result;
                    }
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 5000);
                }
                catch (e) {
                    _this.DialogMessage = e;
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            });
        }
        catch (ex) {
            alert(ex);
            this.DialogMessage = ex;
            setTimeout(function () {
                _this.childModal.hide();
            }, 3000);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], CustomerReport.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], CustomerReport.prototype, "loginModal", void 0);
    CustomerReport = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'CR',
            template: __webpack_require__(/*! ./customerReport.component.html */ "./src/app/pages/reports/components/customerReport.component.html"),
            providers: [_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_4__["MasterRepo"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]])
    ], CustomerReport);
    return CustomerReport;
}());



/***/ }),

/***/ "./src/app/pages/reports/components/employeeReport.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/reports/components/employeeReport.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xlg-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <ba-card title=\"Report Parameters\">\r\n            <div>\r\n                <div class=\"form-group row\">\r\n\r\n                    <label for=\"employeeselect\" style=\"float:left;width:10%\">Employee :</label>\r\n                    <select style=\"float:left;width:80%;height:28px;padding:0\" [(ngModel)]=\"reportObj.EMPLOYEEID\"\r\n                        class=\"form-control\" id=\"employeeselect\">\r\n                        <option *ngFor=\"let c of EmployeeList\" [ngValue]=\"c.EMPLOYEEID\">{{c.NAME}}</option>\r\n                    </select>\r\n\r\n\r\n                </div>\r\n                <div class=\"form-group row\">\r\n\r\n                    <label for=\"date1\" style=\"float:left;width:10%\">From :</label>\r\n                    <input type=\"date\" style=\"float:left;width:30%;height:28px;padding:2px\" class=\"form-control\"\r\n                        id=\"date1\" [(ngModel)]=\"reportObj.Date1\">\r\n                    <label for=\"date2\" style=\"float:left;width:10%;margin-left:20px\">To :</label>\r\n                    <input type=\"date\" class=\"form-control\" id=\"date2\" [(ngModel)]=\"reportObj.Date2\"\r\n                        style=\"float:left;width:30%;height:28px;padding:2px\">\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"loadReportEvent()\"\r\n                [disabled]=\"reportObj.Date1==null || reportObj.Date2==null || reportObj.EMPLOYEEID==null\">Load</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Clear</button>\r\n        </ba-card>\r\n    </div>\r\n</div>\r\n<Table id=\"BlueHeaderResizableTable\" style=\"width:100%\">\r\n    <div style=\"width:100%;max-height:400px\" style=\"overflow:auto;scrollbar-3dlight-color:#FFFFFF;scrollbar-arrow-color:#000000;scrollbar-base-color:#FF9999;scrollbar-darkshadow-color:#000000;scrollbar-face-color:#000000;scrollbar-highlight-color:#000000;\r\nscrollbar-shadow-color:#0033CC\">\r\n        <tbody style=\"width: 100%;display: table;\">\r\n            <tr style=\"height:30px;width:100%\">\r\n                <th style=\"width:5%\">SNo</th>\r\n                <th style=\"width:10%\">Date</th>\r\n                <th style=\"width:10%\">User</th>\r\n                <th style=\"width:15%\">Service</th>\r\n                <th style=\"width:10%\">Room</th>\r\n                <th style=\"width:15%\">Customer</th>\r\n                <th style=\"width:5%\">Cus. Pref.</th>\r\n                <th style=\"width:10%\">StartTime</th>\r\n                <th style=\"width:10%\">FinishedTime</th>\r\n                <th style=\"width:10%\">Rate</th>\r\n            </tr>\r\n\r\n\r\n            <tr *ngFor=\"let ir of reportList;let i=index\" style=\"height:28px\">\r\n                <td style=\"width:5%\">{{i+1}}</td>\r\n                <td style=\"width:10%\">{{ir.DATE}}</td>\r\n                <td style=\"width:10%\">{{ir.USER}}</td>\r\n                <td style=\"width:15%\">{{ir.SERVICE}}</td>\r\n                <td style=\"width:10%\">{{ir.ROOM}}</td>\r\n                <td style=\"width:15%\">{{ir.CUSTOMER}}</td>\r\n                <td style=\"width:5%\">{{ir.EMPLOYEE_PREFERED}}</td>\r\n                <td style=\"width:10%\">{{ir.STARTTIME}}</td>\r\n                <td style=\"width:10%\">{{ir.ENDTIME}}</td>\r\n                <td style=\"width:10%\">{{ir.RATE}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </div>\r\n</Table>\r\n\r\n<ba-modal #childModal title=\"Information\" size=\"sm\">\r\n    {{DialogMessage}}\r\n    \r\n    \r\n</ba-modal>\r\n\r\n<ba-modal #loginModal title=\"Login\" size=\"sm\">\r\n    <login (signedIn)=\"loginModal.hide()\" toUrl=\"test\"></login>\r\n    \r\n</ba-modal>"

/***/ }),

/***/ "./src/app/pages/reports/components/employeeReport.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/reports/components/employeeReport.component.ts ***!
  \**********************************************************************/
/*! exports provided: EmployeeReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeReport", function() { return EmployeeReport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report.service */ "./src/app/pages/reports/components/report.service.ts");







var EmployeeReport = /** @class */ (function () {
    function EmployeeReport(masterService, _authService, router, reportService) {
        this.masterService = masterService;
        this._authService = _authService;
        this.router = router;
        this.reportService = reportService;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.reportList = [];
        this.reportObj = {};
        this.EmployeeList = [];
    }
    EmployeeReport.prototype.ngOnInit = function () {
        var _this = this;
        if (this.masterService._employeeList.length > 0) {
            this.EmployeeList = this.masterService._employeeList;
        }
        else {
            this.masterService.getEmployeeList(true).subscribe(function (data) {
                var employees = data;
                _this.EmployeeList = employees;
                _this.masterService._employeeList = _this.EmployeeList;
            }, function (Error) { return console.log(Error); });
        }
    };
    EmployeeReport.prototype.onCancel = function () {
        this.reportObj = {};
        this.reportList = [];
    };
    EmployeeReport.prototype.loadReportEvent = function () {
        var _this = this;
        this.DialogMessage = "Employee Report Loading.... Please Wait...";
        this.childModal.show();
        try {
            var rparam = { rName: 'employeeReport', rParam: this.reportObj };
            this.reportService.getReport(rparam, '/GetReport')
                .subscribe(function (data) {
                data.forEach(function (element) {
                    element.DATE = element.DATE.toString().substring(0, 10);
                });
                _this.reportList = data;
                _this.DialogMessage = "Employee Report Loaded sucessfully...";
                setTimeout(function () {
                    _this.childModal.hide();
                }, 1000);
            }, function (Error) {
                try {
                    var t = Error.json();
                    //console.log(t);
                    _this.DialogMessage = t.result + "Please check and try again";
                    //let p = t.json();
                    if (t.result == "Authorization Failed") {
                        //this.DialogMessage="erro in saving. " +Error._body;
                        setTimeout(function () {
                            _this.childModal.hide();
                            _this.loginModal.show();
                        }, 3000);
                    }
                    else {
                        _this.DialogMessage = "Error in Loading Data:" + t.result;
                    }
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 5000);
                }
                catch (e) {
                    _this.DialogMessage = e;
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            });
        }
        catch (ex) {
            alert(ex);
            this.DialogMessage = ex;
            setTimeout(function () {
                _this.childModal.hide();
            }, 3000);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], EmployeeReport.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], EmployeeReport.prototype, "loginModal", void 0);
    EmployeeReport = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ER',
            template: __webpack_require__(/*! ./employeeReport.component.html */ "./src/app/pages/reports/components/employeeReport.component.html"),
            providers: [_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_4__["MasterRepo"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]])
    ], EmployeeReport);
    return EmployeeReport;
}());



/***/ }),

/***/ "./src/app/pages/reports/components/followupReport.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/reports/components/followupReport.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-bottom: 20px;\">\r\n    <div class=\"form-group row\">\r\n\r\n        <label for=\"date1\" style=\"float:left;width:10%\">From :</label>\r\n        <input type=\"date\" style=\"float:left;width:30%;height:28px;padding:2px\" class=\"form-control\" id=\"date1\"\r\n            [(ngModel)]=\"reportObj.Date1\">\r\n\r\n\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"loadReportEvent()\">Load</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Clear</button>\r\n</div>\r\n<Table id=\"BlueHeaderResizableTable\" style=\"width:100%\">\r\n    <div style=\"width:100%;max-height:400px\" style=\"overflow:auto;scrollbar-3dlight-color:#FFFFFF;scrollbar-arrow-color:#000000;scrollbar-base-color:#FF9999;scrollbar-darkshadow-color:#000000;scrollbar-face-color:#000000;scrollbar-highlight-color:#000000;\r\nscrollbar-shadow-color:#0033CC\">\r\n   \r\n       <tr style=\"height:30px;width:100%\">\r\n           <th style=\"width:5%\">SNo</th>\r\n           <th style=\"width:10%\">Customer Name</th>\r\n           <th style=\"width:10%\">Customer Mobile</th>\r\n           <th style=\"width:10%\">Entry Date</th>\r\n           <th style=\"width:10%\">Follow up(In Days)</th>\r\n           <th style=\"width:10%\">FollowUp Date</th>\r\n           <!-- <th style=\"width:10%\">Patient ID</th>\r\n           <th style=\"width:10%\">Customer Name</th>\r\n           <th style=\"width:10%\">Follow up</th> -->\r\n       </tr>\r\n   \r\n  \r\n       <tr *ngFor=\"let ir of reportList;let i=index\" style=\"height:28px\">\r\n           <td style=\"width:5%\">{{i+1}}</td>\r\n           <td style=\"width:10%\">{{ir.Customer}}</td>\r\n           <td style=\"width:10%\">{{ir.Mobile}}</td>\r\n           <td style=\"width:10%\">{{ir.EntryDate}}</td>\r\n           <td style=\"width:10%\">{{ir.FollowUp}}</td>\r\n           <td style=\"width:10%\">{{ir.FollowUpDate}}</td>\r\n       </tr>\r\n\r\n   </div>\r\n</Table>\r\n\r\n<ba-modal #childModal title=\"Information\" size=\"sm\">\r\n    {{DialogMessage}}\r\n    \r\n    \r\n</ba-modal>\r\n\r\n<ba-modal #loginModal title=\"Login\" size=\"sm\">\r\n    <login (signedIn)=\"loginModal.hide()\" toUrl=\"test\"></login>\r\n    \r\n</ba-modal>"

/***/ }),

/***/ "./src/app/pages/reports/components/followupReport.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/reports/components/followupReport.component.ts ***!
  \**********************************************************************/
/*! exports provided: FollowupReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowupReport", function() { return FollowupReport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report.service */ "./src/app/pages/reports/components/report.service.ts");







var FollowupReport = /** @class */ (function () {
    function FollowupReport(masterService, _authService, router, reportService) {
        this.masterService = masterService;
        this._authService = _authService;
        this.router = router;
        this.reportService = reportService;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.reportList = [];
        this.reportObj = {};
        this.FollowupList = [];
    }
    FollowupReport.prototype.ngOnInit = function () {
        //  if (this.masterService._followupList.length > 0) 
        //  { this.FollowupList = this.masterService._followupList; }
        //     else {
        //         this.masterService.getFollowUpList().subscribe((data) => {
        //             this.FollowupList.push(<Followup>data);
        //         },
        //             Error => console.log(Error),
        //             () => {
        //                 this.masterService._followupList = this.FollowupList;
        //             });
        //     }
    };
    FollowupReport.prototype.onCancel = function () {
        this.reportObj = {};
        this.reportList = [];
    };
    FollowupReport.prototype.loadReportEvent = function () {
        var _this = this;
        this.DialogMessage = "Follow Up Report Loading.... Please Wait...";
        this.childModal.show();
        try {
            var rparam = { rName: 'followupreport', rParam: this.reportObj };
            this.reportService.getReport(rparam, '/GetReport')
                .subscribe(function (data) {
                data.forEach(function (element) {
                    element.EntryDate = element.EntryDate.toString().substring(0, 10);
                    element.FollowUpDate = element.FollowUpDate.toString().substring(0, 10);
                });
                _this.reportList = data;
                _this.DialogMessage = "FOLLOWUP Report Loaded sucessfully...";
                setTimeout(function () {
                    _this.childModal.hide();
                }, 1000);
            }, function (Error) {
                try {
                    var t = Error.json();
                    console.log(t);
                    _this.DialogMessage = t.result + "Please check and try again";
                    //let p = t.json();
                    if (t.result == "Authorization Failed") {
                        //this.DialogMessage="erro in saving. " +Error._body;
                        setTimeout(function () {
                            _this.childModal.hide();
                            _this.loginModal.show();
                        }, 3000);
                    }
                    else {
                        _this.DialogMessage = "Error in Loading Data:" + t.result;
                    }
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 5000);
                }
                catch (e) {
                    _this.DialogMessage = e;
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            });
        }
        catch (ex) {
            alert(ex);
            this.DialogMessage = ex;
            setTimeout(function () {
                _this.childModal.hide();
            }, 3000);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], FollowupReport.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], FollowupReport.prototype, "loginModal", void 0);
    FollowupReport = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'followup',
            template: __webpack_require__(/*! ./followupReport.component.html */ "./src/app/pages/reports/components/followupReport.component.html"),
            providers: [_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_4__["MasterRepo"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]])
    ], FollowupReport);
    return FollowupReport;
}());



/***/ }),

/***/ "./src/app/pages/reports/components/messageReport.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/reports/components/messageReport.component.ts ***!
  \*********************************************************************/
/*! exports provided: MessageReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageReport", function() { return MessageReport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report.service */ "./src/app/pages/reports/components/report.service.ts");







var MessageReport = /** @class */ (function () {
    function MessageReport(masterService, _authService, router, reportService) {
        this.masterService = masterService;
        this._authService = _authService;
        this.router = router;
        this.reportService = reportService;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.subcriptions = [];
        this.reportList = [];
        this.reportObj = {};
        this.FollowupList = [];
    }
    MessageReport.prototype.ngOnInit = function () {
        //  if (this.masterService._followupList.length > 0) 
        //  { this.FollowupList = this.masterService._followupList; }
        //     else {
        //         this.masterService.getFollowUpList().subscribe((data) => {
        //             this.FollowupList.push(<Followup>data);
        //         },
        //             Error => console.log(Error),
        //             () => {
        //                 this.masterService._followupList = this.FollowupList;
        //             });
        //     }
    };
    MessageReport.prototype.onCancel = function () {
        this.reportObj = {};
        this.reportList = [];
    };
    MessageReport.prototype.loadReportEvent = function () {
        var _this = this;
        this.DialogMessage = "Message Report Loading.... Please Wait...";
        this.childModal.show();
        try {
            var rparam = { rName: 'messageReport', rParam: this.reportObj };
            this.reportService.getReport(rparam, '/GetReport')
                .subscribe(function (data) {
                data.forEach(function (element) {
                    element.DATE = element && element.DATE ? (element.DATE).substring(0, 10) : '';
                });
                _this.reportList = data;
                console.log(_this.reportList, "reporttt");
                _this.DialogMessage = "Message Report Loaded sucessfully...";
                setTimeout(function () {
                    _this.childModal.hide();
                }, 1000);
            }, function (Error) {
                try {
                    var t = Error.json();
                    //console.log(t);
                    _this.DialogMessage = t.result + "Please check and try again";
                    //let p = t.json();
                    if (t.result == "Authorization Failed") {
                        //this.DialogMessage="erro in saving. " +Error._body;
                        setTimeout(function () {
                            _this.childModal.hide();
                            _this.loginModal.show();
                        }, 3000);
                    }
                    else {
                        _this.DialogMessage = "Error in Loading Data:" + t.result;
                    }
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 5000);
                }
                catch (e) {
                    _this.DialogMessage = e;
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            });
        }
        catch (ex) {
            alert(ex);
            this.DialogMessage = ex;
            setTimeout(function () {
                _this.childModal.hide();
            }, 3000);
        }
    };
    MessageReport.prototype.selectedFromDate = function (event) {
        this.from = event.target.value;
    };
    MessageReport.prototype.selectedToDate = function (event) {
        this.to = event.target.value;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], MessageReport.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], MessageReport.prototype, "loginModal", void 0);
    MessageReport = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'messageReport',
            template: __webpack_require__(/*! ./messageReport.html */ "./src/app/pages/reports/components/messageReport.html"),
            providers: [_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_4__["MasterRepo"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]])
    ], MessageReport);
    return MessageReport;
}());



/***/ }),

/***/ "./src/app/pages/reports/components/messageReport.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/reports/components/messageReport.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n    <div class=\"form-group row\">\r\n\r\n           \r\n\r\n                <label for=\"date1\" style=\"float:left;width:10%\">From :</label>\r\n                <input type=\"date\" style=\"float:left;width:30%;height:28px;padding:2px\" class=\"form-control\" id=\"date1\" [(ngModel)]=\"reportObj.Date1\">\r\n                 <label for=\"date2\" style=\"float:left;width:10%;margin-left:20px\">To :</label>\r\n                <input type=\"date\" class=\"form-control\" id=\"date2\" [(ngModel)]=\"reportObj.Date2\" style=\"float:left;width:30%;height:28px;padding:2px\">\r\n\r\n            \r\n        </div>\r\n<button type=\"submit\" class=\"btn btn-primary\" (click)=\"loadReportEvent()\" [disabled]=\"!reportObj.Date1 || !reportObj.Date2\">Load</button>\r\n<button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Clear</button>\r\n</div>\r\n<Table id=\"BlueHeaderResizableTable\" style=\"width:100%; margin-top:10px;\">\r\n    <div style=\"width:100%;max-height:400px\" style=\"overflow:auto;scrollbar-3dlight-color:#FFFFFF;scrollbar-arrow-color:#000000;scrollbar-base-color:#FF9999;scrollbar-darkshadow-color:#000000;scrollbar-face-color:#000000;scrollbar-highlight-color:#000000;\r\nscrollbar-shadow-color:#0033CC\">\r\n<tbody style=\"width: 100%;display: table;\">\r\n\r\n   <tr style=\"height:30px;width:100%\">\r\n       <th style=\"width:5%\">SNo</th>\r\n      \r\n       <th style=\"width:10%\">Customer Name</th>\r\n       <th style=\"width:10%\">Mobile</th>\r\n       <th style=\"width:10%\">Date</th>\r\n       <th style=\"width:10%\">Status</th>\r\n       <th style=\"width:10%\">Message</th>\r\n\r\n   </tr>\r\n\r\n\r\n   <tr *ngFor=\"let ir of reportList;let i=index\" style=\"height:28px\">\r\n       <td style=\"width:5%\">{{i+1}}</td>\r\n       <td style=\"width:10%\">{{ir.customerName}}</td>\r\n       <td style=\"width:10%\">{{ir.mobile}}</td>\r\n       <td style=\"width:10%\">{{ir.date}}</td>\r\n       <td style=\"width:10%\">{{ir.status}}</td>\r\n       <td style=\"width:10%\">{{ir.messageSend}}</td>\r\n\r\n   </tr>\r\n   </tbody>\r\n\r\n</div>\r\n</Table>\r\n\r\n<ba-modal #childModal title=\"Information\" size=\"sm\">\r\n{{DialogMessage}}\r\n \r\n \r\n</ba-modal>\r\n\r\n<ba-modal #loginModal title=\"Login\" size=\"sm\">\r\n<login (signedIn)=\"loginModal.hide()\" toUrl=\"test\"></login>\r\n \r\n</ba-modal>"

/***/ }),

/***/ "./src/app/pages/reports/components/previews/EditDetailPreview/editDetailPreview.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/reports/components/previews/EditDetailPreview/editDetailPreview.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: EditDetailPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDetailPreview", function() { return EditDetailPreview; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../report.service */ "./src/app/pages/reports/components/report.service.ts");





var EditDetailPreview = /** @class */ (function () {
    function EditDetailPreview(router, reportService) {
        this.router = router;
        this.reportService = reportService;
        this.logId = 0;
        this.log = {};
    }
    EditDetailPreview.prototype.ngOnInit = function () {
        this.log = {};
    };
    EditDetailPreview.prototype.showDialog = function () {
        var _this = this;
        this.reportService.getLogDetail(this.logId).subscribe(function (response) {
            _this.log = response;
            console.log(_this.log);
            setTimeout(function () {
                _this.childeditDetailPreviewModal.show();
            }, 100);
        }, function (Error) {
            try {
                var t = Error.json();
                //console.log(t);
                if (t.result == "Authorization Failed") {
                    _this.router.navigate(['/login', _this.router.url]);
                }
                else {
                    alert("Error in Loading Data:" + t.result);
                }
            }
            catch (e) {
                alert(e);
            }
        });
    };
    EditDetailPreview.prototype.labelClickEvent = function (id) {
        this.router.navigate(['/pages/schedule/scheInput', { mode: "edit", id: id, returnUrl: this.router.url }]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editDetailPreview'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], EditDetailPreview.prototype, "childeditDetailPreviewModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], EditDetailPreview.prototype, "logId", void 0);
    EditDetailPreview = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'editDetailPreview',
            styles: [__webpack_require__(/*! ../../../../schedule/schedule.scss */ "./src/app/pages/schedule/schedule.scss")],
            template: __webpack_require__(/*! ./editDetailPreview.html */ "./src/app/pages/reports/components/previews/EditDetailPreview/editDetailPreview.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]])
    ], EditDetailPreview);
    return EditDetailPreview;
}());



/***/ }),

/***/ "./src/app/pages/reports/components/previews/EditDetailPreview/editDetailPreview.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/reports/components/previews/EditDetailPreview/editDetailPreview.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" bsModal #editDetailPreview=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button class=\"close\" aria-label=\"Close\" (click)=\"editDetailPreview.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Log Details:</h4>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                    <table id=\"tblLogDetail\">\r\n                        <tr>\r\n                            <td>Log Id</td>\r\n                            <td>: {{log.logId}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Date</td>\r\n                            <td>: {{log.date}}</td>\r\n                            <td>Time</td>\r\n                            <td>: {{log.time}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Form Name</td>\r\n                            <td>: {{log.formName}}</td>\r\n                            <td>User</td>\r\n                            <td>: {{log.user}}</td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n\r\n                <table class=\"table table-bordered table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Field Name</th>\r\n                            <th>Previous Value</th>\r\n                            <th>New Value</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let t of log.audits\">\r\n                            <td>{{t.fieldName}}</td>\r\n                            <td>{{t.oldValue}}</td>\r\n                            <td>{{t.newValue}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n\r\n                <div class=\"modal-footer\">\r\n                    <button class=\"btn btn-primary confirm-btn\" type=\"button\"\r\n                        (click)=\"editDetailPreview.hide()\">Close</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/pages/reports/components/previews/schedulePreview.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/reports/components/previews/schedulePreview.component.ts ***!
  \********************************************************************************/
/*! exports provided: SchedulePreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePreview", function() { return SchedulePreview; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../report.service */ "./src/app/pages/reports/components/report.service.ts");





var SchedulePreview = /** @class */ (function () {
    function SchedulePreview(router, reportService) {
        this.router = router;
        this.reportService = reportService;
        this.logId = 0;
        this.schedule = {};
        this.schedule.customer = {};
    }
    SchedulePreview.prototype.ngOnInit = function () {
        this.schedule = {};
        this.schedule.customer = {};
    };
    SchedulePreview.prototype.showDialog = function () {
        var _this = this;
        this.reportService.getLogDetail(this.logId).subscribe(function (response) {
            _this.schedule = response.model;
            console.log({ response: _this.schedule });
            setTimeout(function () {
                _this.childschedulePreviewModal.show();
            }, 100);
        }, function (Error) {
            try {
                var t = Error.json();
                //console.log(t);
                if (t.result == "Authorization Failed") {
                    _this.router.navigate(['/login', _this.router.url]);
                }
                else {
                    alert("Error in Loading Data:" + t.result);
                }
            }
            catch (e) {
                alert(e);
            }
        });
    };
    SchedulePreview.prototype.labelClickEvent = function (id) {
        this.router.navigate(['/pages/schedule/scheInput', { mode: "edit", id: id, returnUrl: this.router.url }]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('schedulePreview'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], SchedulePreview.prototype, "childschedulePreviewModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SchedulePreview.prototype, "logId", void 0);
    SchedulePreview = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'schedulePreview',
            template: __webpack_require__(/*! ./schedulePreview.html */ "./src/app/pages/reports/components/previews/schedulePreview.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]])
    ], SchedulePreview);
    return SchedulePreview;
}());



/***/ }),

/***/ "./src/app/pages/reports/components/previews/schedulePreview.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/reports/components/previews/schedulePreview.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" bsModal #schedulePreview=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button class=\"close\" aria-label=\"Close\" (click)=\"CustomerSchedule.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">{{'customer' | labelPipe}} Schedule:</h4>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\" id=\"customerSchedule\">\r\n                    <div class=\"col-5 col-sm-7 col-md-7\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\">Patient Name</span>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"schedule.customer.name\" readonly\r\n                                aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-5 col-sm-5 col-md-5\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\">Mobile No</span>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"schedule.customer.mobile\" readonly>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-5 col-sm-7 col-md-7\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\">Address</span>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"schedule.customer.address\" readonly\r\n                                aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-5 col-sm-5 col-md-5\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\">Patient Id</span>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"schedule.customer.patient_id\" readonly\r\n                                aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <table class=\"table table-bordered table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Sn.</th>\r\n                            <th>Date</th>\r\n                            <th>Time</th>\r\n                            <th>Employee</th>\r\n                            <th>Service</th>\r\n                            <th>Room</th>\r\n                            <th></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let t of schedule.multipleServiceList\">\r\n                            <td>1</td>\r\n                            <td>{{schedule.date}}</td>\r\n                            <td>{{t.startTime}}</td>\r\n                            <td>{{t.employee.name}}</td>\r\n                            <td>{{t.service.description}}</td>\r\n                            <td>{{t.room.description}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n                <div class=\"modal-footer\">\r\n                    <button class=\"btn btn-primary confirm-btn\" type=\"button\"\r\n                        (click)=\"schedulePreview.hide()\">Close</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/pages/reports/components/previews/treatmentPreview/treatmentPreview.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/reports/components/previews/treatmentPreview/treatmentPreview.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: TreatmentPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentPreview", function() { return TreatmentPreview; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../report.service */ "./src/app/pages/reports/components/report.service.ts");
/* harmony import */ var _common_repositories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../common/repositories */ "./src/app/common/repositories/index.ts");






var TreatmentPreview = /** @class */ (function () {
    function TreatmentPreview(router, reportService, masterService) {
        this.router = router;
        this.reportService = reportService;
        this.masterService = masterService;
        this.logId = 0;
        this.treatment = {};
        this.treatment.customer = {};
        this.treatment.healer = {};
        this.contentUrl = masterService.contentUrl;
    }
    TreatmentPreview.prototype.ngOnInit = function () {
        this.treatment = {};
        this.treatment.patient = {};
        this.treatment.healer = {};
    };
    TreatmentPreview.prototype.showDialog = function () {
        var _this = this;
        this.reportService.getLogDetail(this.logId).subscribe(function (response) {
            _this.treatment = response.model;
            document.getElementById("patientComplaint").innerHTML = _this.treatment.patientComplaint;
            document.getElementById("treatmentNotes").innerHTML = _this.treatment.treatmentNotes;
            setTimeout(function () {
                _this.childTreatmentPreviewModal.show();
            }, 100);
        }, function (Error) {
            try {
                var t = Error.json();
                //console.log(t);
                if (t.result == "Authorization Failed") {
                    _this.router.navigate(['/login', _this.router.url]);
                }
                else {
                    alert("Error in Loading Data:" + t.result);
                }
            }
            catch (e) {
                alert(e);
            }
        });
    };
    TreatmentPreview.prototype.labelClickEvent = function (id) {
        this.router.navigate(['/pages/schedule/scheInput', { mode: "edit", id: id, returnUrl: this.router.url }]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('treatmentPreview'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], TreatmentPreview.prototype, "childTreatmentPreviewModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TreatmentPreview.prototype, "logId", void 0);
    TreatmentPreview = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'treatmentPreview',
            styles: [__webpack_require__(/*! ../../../../schedule/schedule.scss */ "./src/app/pages/schedule/schedule.scss")],
            template: __webpack_require__(/*! ./treatmentPreview.html */ "./src/app/pages/reports/components/previews/treatmentPreview/treatmentPreview.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"], _common_repositories__WEBPACK_IMPORTED_MODULE_5__["MasterRepo"]])
    ], TreatmentPreview);
    return TreatmentPreview;
}());



/***/ }),

/***/ "./src/app/pages/reports/components/previews/treatmentPreview/treatmentPreview.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/reports/components/previews/treatmentPreview/treatmentPreview.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" bsModal #treatmentPreview=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button class=\"close\" aria-label=\"Close\" (click)=\"treatmentPreview.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Treatment Details:</h4>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                    <table id=\"tblPatientInfo\">\r\n                        <tr>\r\n                            <td>Patient Name</td>\r\n                            <td>: {{treatment.patient.name}}</td>\r\n                            <td>Mobile No</td>\r\n                            <td>: {{treatment.patient.mobile}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Address</td>\r\n                            <td>: {{treatment.patient.address}}</td>\r\n                            <td>Patient Id</td>\r\n                            <td>: {{treatment.patient.patient_id}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Age</td>\r\n                            <td>: {{treatment.patient.age}}</td>\r\n                            <td>Gender</td>\r\n                            <td>: {{treatment.patient.gender}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Staff</td>\r\n                            <td>: {{treatment.healer.name}}</td>\r\n                            <td>Weight</td>\r\n                            <td>: {{treatment.patient.patient_weight}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Membership</td>\r\n                            <td>: {{treatment.patient.membership}}</td>\r\n                            <td>Email</td>\r\n                            <td style=\"width: 35%;\">: {{treatment.patient.email}}</td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-xl-6\">\r\n                        <ba-card title=\"Patient Complaint\">\r\n                            <div id=\"patientComplaint\"></div>\r\n                        </ba-card>\r\n                    </div>\r\n                    <div class=\"col-xl-6\">\r\n                        <ba-card title=\"Treatment Notes\">\r\n                            <div id=\"treatmentNotes\">\r\n                            </div>\r\n                        </ba-card>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-xl-6\">\r\n                        <ba-card title=\"Disease & Medication\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"diseases\">Diseases: </label>\r\n                                <ol style=\"width: 300px\">\r\n                                    <li style=\"display: flex;\" *ngFor=\"let e of treatment.diseases;let i=index\">{{e}}\r\n                                    </li>\r\n                                </ol>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label for=\"medication\">Medication: </label>\r\n                                <ol style=\"width: 300px\">\r\n                                    <li style=\"display: flex;\" *ngFor=\"let e of treatment.medications;let i=index\">{{e}}\r\n                                    </li>\r\n                                </ol>\r\n                            </div>\r\n                        </ba-card>\r\n                    </div>\r\n\r\n                    <div class=\"col-xl-6\">\r\n                        <ba-card title=\"Prescriptions & Followup\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"prescription\">Prescriptions:</label>\r\n                                <ol style=\"width: 300px\">\r\n                                    <li style=\"display: flex;\" *ngFor=\"let e of treatment.prescriptions;let i=index\">\r\n                                        {{e}}</li>\r\n                                </ol>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\" style=\"display: inline-block; vertical-align: top;\">\r\n                                <label for=\"followup\">Followup Period : {{treatment.followUpPeriod}}</label>\r\n                            </div>\r\n                        </ba-card>\r\n                    </div>\r\n                </div>\r\n\r\n                <ba-card title=\"Session Documents\">\r\n                    <div style=\"display: flex; margin-bottom: 10px; overflow: scroll; \">\r\n                        <li *ngFor=\"let f of treatment.treatmentDocuments\" style=\"margin-right: 5px;\">\r\n\r\n                            <ng-container *ngIf=\"!f.endsWith('pdf')\">\r\n                                <a target=\"_blank\" href=\"{{contentUrl + f}}\">\r\n                                    <img height=\"120px\" width=\"120px\" style=\"object-fit: contain;\"\r\n                                        src=\"{{contentUrl + f}}\" (click)=\"previewImage($event)\" />\r\n                                </a>\r\n                            </ng-container>\r\n\r\n                            <a *ngIf=\"f.endsWith('pdf')\" target=\"_blank\" href=\"{{contentUrl + f}}\">\r\n                                <img height=\"50px\"\r\n                                    src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png\" />\r\n                            </a>\r\n                        </li>\r\n                    </div>\r\n                </ba-card>\r\n\r\n                <ba-card title=\"NOTES & REMARKS\">\r\n                    <textarea class=\"form-control\" disabled>{{treatment.remarks}}</textarea>\r\n                </ba-card>\r\n\r\n\r\n                <div class=\"modal-footer\">\r\n                    <button class=\"btn btn-primary confirm-btn\" type=\"button\"\r\n                        (click)=\"treatmentPreview.hide()\">Close</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/reports/components/report.service.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/reports/components/report.service.ts ***!
  \************************************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _global_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global.state */ "./src/app/global.state.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ReportService = /** @class */ (function () {
    function ReportService(http, authService, gblState) {
        this.http = http;
        this.authService = authService;
        this.gblState = gblState;
        var url = this.gblState.getGlobalSetting("apiUrl");
        if (!!url && url.length > 0)
            this.apiUrl = url[0];
    }
    ReportService.prototype.getReport = function (data, url) {
        return this.http.post(this.apiUrl + url, data, this.authService.getRequestOption());
    };
    ReportService.prototype.getForms = function () {
        return this.http.get(this.apiUrl + "/getForms", this.authService.getRequestOption());
    };
    ReportService.prototype.getLogDetail = function (logId) {
        return this.http.get(this.apiUrl + "/GetLogDetail?logId=" + logId, this.authService.getRequestOption());
    };
    ReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _global_state__WEBPACK_IMPORTED_MODULE_3__["GlobalState"]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "./src/app/pages/reports/components/roomReport.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/reports/components/roomReport.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xlg-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <ba-card title=\"Report Parameters\">\r\n            <div>\r\n                <div class=\"form-group row\">\r\n\r\n                    <label for=\"roomselect\" style=\"float:left;width:10%\">Room :</label>\r\n                    <select style=\"float:left;width:80%;height:28px;padding:0\" [(ngModel)]=\"reportObj.ROOMID\" class=\"form-control\"  id=\"roomselect\"> \r\n        <option *ngFor=\"let c of RoomList\" [ngValue]=\"c.ROOMID\">{{c.DESCRIPTION}}({{c.ROOMNO}})</option>\r\n      </select>\r\n\r\n\r\n                </div>\r\n                <div class=\"form-group row\">\r\n\r\n                    <label for=\"date1\" style=\"float:left;width:10%\">From :</label>\r\n                    <input type=\"date\" style=\"float:left;width:30%;height:28px;padding:2px\" class=\"form-control\" id=\"date1\" [(ngModel)]=\"reportObj.Date1\">\r\n                     <label for=\"date2\" style=\"float:left;width:10%;margin-left:20px\">To :</label>\r\n                    <input type=\"date\" class=\"form-control\" id=\"date2\" [(ngModel)]=\"reportObj.Date2\" style=\"float:left;width:30%;height:28px;padding:2px\">\r\n\r\n                </div>\r\n                \r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"loadReportEvent()\" [disabled]=\"reportObj.Date1==null || reportObj.Date2==null || reportObj.ROOMID==null\">Load</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Clear</button>\r\n        </ba-card>\r\n    </div>\r\n</div>\r\n<Table id=\"BlueHeaderResizableTable\" style=\"width:100%\">\r\n    <div  style=\"width:100%;max-height:400px;overflow:auto;scrollbar-3dlight-color:#FFFFFF;scrollbar-arrow-color:#000000;scrollbar-base-color:#FF9999;scrollbar-darkshadow-color:#000000;scrollbar-face-color:#000000;scrollbar-highlight-color:#000000;\r\nscrollbar-shadow-color:#0033CC\">\r\n        <tbody style=\"width: 100%;display: table;\">\r\n            <tr style=\"height:30px;width:100%\">\r\n                <th style=\"width:5%\">SNo</th>\r\n                <th style=\"width:10%\">Date</th>\r\n                <th style=\"width:10%\">User</th>\r\n                <th style=\"width:15%\">Service</th>\r\n                <th style=\"width:10%\">Employee</th>\r\n                <th style=\"width:15%\">Customer</th>\r\n                <th style=\"width:5%\">Cus. Pref.</th>\r\n                <th style=\"width:10%\">StartTime</th>\r\n                <th style=\"width:10%\">FinishedTime</th>\r\n                <th style=\"width:10%\">Rate</th>\r\n            </tr>\r\n    \r\n    \r\n            <tr *ngFor=\"let ir of reportList;let i=index\" style=\"height:28px\">\r\n                <td style=\"width:5%\">{{i+1}}</td>\r\n                <td style=\"width:10%\">{{ir.DATE}}</td>\r\n                <td style=\"width:10%\">{{ir.USER}}</td>\r\n                <td style=\"width:15%\">{{ir.SERVICE}}</td>\r\n                <td style=\"width:10%\">{{ir.EMPLOYEE}}</td>\r\n                <td style=\"width:15%\">{{ir.CUSTOMER}}</td>\r\n                <td style=\"width:5%\">{{ir.EMPLOYEE_PREFERED}}</td>\r\n                <td style=\"width:10%\">{{ir.STARTTIME}}</td>\r\n                <td style=\"width:10%\">{{ir.ENDTIME}}</td>\r\n                <td style=\"width:10%\">{{ir.RATE}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </div>\r\n</Table>\r\n\r\n<ba-modal #childModal title=\"Information\" size=\"sm\">\r\n    {{DialogMessage}}\r\n    \r\n    \r\n</ba-modal>\r\n\r\n<ba-modal #loginModal title=\"Login\" size=\"sm\">\r\n    <login (signedIn)=\"loginModal.hide()\" toUrl=\"test\"></login>\r\n    \r\n</ba-modal>"

/***/ }),

/***/ "./src/app/pages/reports/components/roomReport.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/reports/components/roomReport.component.ts ***!
  \******************************************************************/
/*! exports provided: RoomReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomReport", function() { return RoomReport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report.service */ "./src/app/pages/reports/components/report.service.ts");







var RoomReport = /** @class */ (function () {
    function RoomReport(masterService, _authService, router, reportService) {
        this.masterService = masterService;
        this._authService = _authService;
        this.router = router;
        this.reportService = reportService;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.subcriptions = [];
        this.reportList = [];
        this.reportObj = {};
        this.RoomList = [];
    }
    RoomReport.prototype.ngOnInit = function () {
        var _this = this;
        if (this.masterService._roomList.length > 0) {
            this.RoomList = this.masterService._roomList;
        }
        else {
            this.masterService.getRoomList().subscribe(function (data) {
                _this.RoomList = data;
                _this.masterService._roomList = _this.RoomList;
            }, function (Error) { return console.log(Error); });
        }
    };
    RoomReport.prototype.onCancel = function () {
        this.reportObj = {};
        this.reportList = [];
    };
    RoomReport.prototype.loadReportEvent = function () {
        var _this = this;
        this.DialogMessage = "Room Report Loading.... Please Wait...";
        this.childModal.show();
        try {
            var rparam = { rName: 'roomReport', rParam: this.reportObj };
            this.reportService.getReport(rparam, '/GetReport')
                .subscribe(function (data) {
                data.forEach(function (element) {
                    element.DATE = element.DATE.toString().substring(0, 10);
                });
                _this.reportList = data;
                _this.DialogMessage = "Room Report Loaded sucessfully...";
                setTimeout(function () {
                    _this.childModal.hide();
                }, 1000);
            }, function (Error) {
                try {
                    var t = Error.json();
                    //console.log(t);
                    _this.DialogMessage = t.result + "Please check and try again";
                    //let p = t.json();
                    if (t.result == "Authorization Failed") {
                        //this.DialogMessage="erro in saving. " +Error._body;
                        setTimeout(function () {
                            _this.childModal.hide();
                            _this.loginModal.show();
                        }, 3000);
                    }
                    else {
                        _this.DialogMessage = "Error in Loading Data:" + t.result;
                    }
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 5000);
                }
                catch (e) {
                    _this.DialogMessage = e;
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            });
        }
        catch (ex) {
            alert(ex);
            this.DialogMessage = ex;
            setTimeout(function () {
                _this.childModal.hide();
            }, 3000);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], RoomReport.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], RoomReport.prototype, "loginModal", void 0);
    RoomReport = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'RR',
            template: __webpack_require__(/*! ./roomReport.component.html */ "./src/app/pages/reports/components/roomReport.component.html"),
            providers: [_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_4__["MasterRepo"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]])
    ], RoomReport);
    return RoomReport;
}());



/***/ }),

/***/ "./src/app/pages/reports/components/seriesReport.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/reports/components/seriesReport.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xlg-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12\" style=\"width:100%\">\r\n        <ba-card title=\"Report Parameters\">\r\n            <div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"customerselect\" style=\"float:left;width:10%\">Customer :</label>\r\n                    <select style=\"float:left;width:80%;height:28px;padding:0\" [(ngModel)]=\"reportObj.CUSID\" class=\"form-control\" name=\"customerselect\" id=\"customerselect\"> \r\n                        <option *ngFor=\"let c of CustomerList\" [ngValue]=\"c.CUSID\">{{c.NAME}}</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"seriesselect\" style=\"float:left;width:10%\">Series :</label>\r\n                    <select style=\"float:left;width:80%;height:28px;padding:0\" [(ngModel)]=\"reportObj.MappingCode\" class=\"form-control\" name=\"seriesselect\" id=\"seriesselect\"> \r\n                        <option *ngFor=\"let c of SeriesList\" [ngValue]=\"c.MappingCode\">{{c.SeriesName}}</option>\r\n                    </select>\r\n                </div>\r\n                \r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"loadReportEvent()\" [disabled]=\"reportObj.MappingCode == null || reportObj.CUSID==null\">Load</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Clear</button>\r\n        </ba-card>\r\n    </div>\r\n</div>\r\n<Table id=\"BlueHeaderResizableTable\" style=\"width:100%\">\r\n     <div style=\"width:100%;max-height:400px\" style=\"overflow:auto;scrollbar-3dlight-color:#FFFFFF;scrollbar-arrow-color:#000000;scrollbar-base-color:#FF9999;scrollbar-darkshadow-color:#000000;scrollbar-face-color:#000000;scrollbar-highlight-color:#000000;\r\nscrollbar-shadow-color:#0033CC\">\r\n    \r\n        <tr style=\"height:30px;width:100%\">\r\n            <th style=\"width:5%\">SNo</th>\r\n            <th style=\"width:10%\">Date</th>\r\n            <th style=\"width:15%\">Service</th>\r\n            <th style=\"width:10%\">Room</th>\r\n            <th style=\"width:15%\">Operator</th>\r\n            <th style=\"width:10%\">StartTime</th>\r\n            <th style=\"width:10%\">FinishedTime</th>\r\n        </tr>\r\n    \r\n   \r\n        <tr *ngFor=\"let ir of reportList;let i=index\" style=\"height:28px\">\r\n            <td style=\"width:5%\">{{i+1}}</td>\r\n            <td style=\"width:10%\">{{ir.DATE}}</td>\r\n            <td style=\"width:15%\">{{ir.Service}}</td>\r\n            <td style=\"width:10%\">{{ir.Room}}</td>\r\n            <td style=\"width:15%\">{{ir.Operator}}</td>\r\n            <td style=\"width:10%\">{{ir.StartTime}}</td>\r\n            <td style=\"width:10%\">{{ir.EndTime}}</td>\r\n        </tr>\r\n    </div>\r\n</Table>\r\n\r\n<ba-modal #childModal title=\"Information\" size=\"sm\">\r\n    {{DialogMessage}}\r\n    \r\n    \r\n</ba-modal>\r\n\r\n<ba-modal #loginModal title=\"Login\" size=\"sm\">\r\n    <login (signedIn)=\"loginModal.hide()\" toUrl=\"test\"></login>\r\n    \r\n</ba-modal>"

/***/ }),

/***/ "./src/app/pages/reports/components/seriesReport.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/reports/components/seriesReport.component.ts ***!
  \********************************************************************/
/*! exports provided: SeriesReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesReport", function() { return SeriesReport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report.service */ "./src/app/pages/reports/components/report.service.ts");







var SeriesReport = /** @class */ (function () {
    function SeriesReport(masterService, _authService, router, reportService) {
        this.masterService = masterService;
        this._authService = _authService;
        this.router = router;
        this.reportService = reportService;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.subcriptions = [];
        this.reportList = [];
        this.reportObj = {};
        this.CustomerList = [];
        this.SeriesList = [];
    }
    SeriesReport.prototype.ngOnInit = function () {
        var _this = this;
        if (this.masterService._customerList.length > 0) {
            this.CustomerList = this.masterService._customerList;
        }
        else {
            this.masterService.getCustomerList().subscribe(function (data) {
                _this.CustomerList.push(data);
            }, function (Error) { return console.log(Error); }, function () {
                _this.masterService._customerList = _this.CustomerList;
            });
        }
        if (this.masterService._seriesList.length > 0) {
            this.SeriesList = this.masterService._seriesList;
        }
        else {
            this.masterService.getSeriesList().subscribe(function (data) {
                _this.SeriesList.push(data);
            }, function (Error) { return console.log(Error); }, function () {
                _this.masterService._seriesList = _this.SeriesList;
            });
        }
    };
    SeriesReport.prototype.onCancel = function () {
        this.reportObj = {};
        this.reportList = [];
    };
    SeriesReport.prototype.loadReportEvent = function () {
        var _this = this;
        this.DialogMessage = "Series Report Loading.... Please Wait...";
        this.childModal.show();
        try {
            var rparam = { rName: 'seriesReport', rParam: this.reportObj };
            this.reportService.getReport(rparam, '/GetReport')
                .subscribe(function (data) {
                data.forEach(function (element) {
                    element.DATE = element.DATE.toString().substring(0, 10);
                });
                _this.reportList = data;
                _this.DialogMessage = "Series Report Loaded sucessfully...";
                setTimeout(function () {
                    _this.childModal.hide();
                }, 1000);
            }, function (Error) {
                try {
                    var t = Error.json();
                    //console.log(t);
                    _this.DialogMessage = t.result + "Please check and try again";
                    //let p = t.json();
                    if (t.result == "Authorization Failed") {
                        //this.DialogMessage="erro in saving. " +Error._body;
                        setTimeout(function () {
                            _this.childModal.hide();
                            _this.loginModal.show();
                        }, 3000);
                    }
                    else {
                        _this.DialogMessage = "Error in Loading Data:" + t.result;
                    }
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 5000);
                }
                catch (e) {
                    _this.DialogMessage = e;
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            });
        }
        catch (ex) {
            alert(ex);
            this.DialogMessage = ex;
            setTimeout(function () {
                _this.childModal.hide();
            }, 3000);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], SeriesReport.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], SeriesReport.prototype, "loginModal", void 0);
    SeriesReport = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'seriesReport',
            template: __webpack_require__(/*! ./seriesReport.component.html */ "./src/app/pages/reports/components/seriesReport.component.html"),
            providers: [_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_4__["MasterRepo"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]])
    ], SeriesReport);
    return SeriesReport;
}());



/***/ }),

/***/ "./src/app/pages/reports/components/serviceReport.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/reports/components/serviceReport.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xlg-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <ba-card title=\"Report Parameters\">\r\n            <div>\r\n                <div class=\"form-group row\">\r\n\r\n                    <label for=\"roomselect\" style=\"float:left;width:10%\">Service :</label>\r\n                    <select style=\"float:left;width:80%;height:28px;padding:0\" [(ngModel)]=\"reportObj.SERVICEID\" class=\"form-control\"  id=\"roomselect\"> \r\n        <option *ngFor=\"let c of ServiceList\" [ngValue]=\"c.SERVICEID\">{{c.DESCRIPTION}}</option>\r\n      </select>\r\n\r\n\r\n                </div>\r\n                <div class=\"form-group row\">\r\n\r\n                    <label for=\"date1\" style=\"float:left;width:10%\">From :</label>\r\n                    <input type=\"date\" style=\"float:left;width:30%;height:28px;padding:2px\" class=\"form-control\" id=\"date1\" [(ngModel)]=\"reportObj.Date1\">\r\n                     <label for=\"date2\" style=\"float:left;width:10%;margin-left:20px\">To :</label>\r\n                    <input type=\"date\" class=\"form-control\" id=\"date2\" [(ngModel)]=\"reportObj.Date2\" style=\"float:left;width:30%;height:28px;padding:2px\">\r\n\r\n                </div>\r\n                \r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"loadReportEvent()\" [disabled]=\"reportObj.Date1==null || reportObj.Date2==null || reportObj.SERVICEID==null\">Load</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Clear</button>\r\n        </ba-card>\r\n    </div>\r\n</div>\r\n<Table id=\"BlueHeaderResizableTable\" style=\"width:100%\">\r\n    <div  style=\"width:100%;max-height:400px;overflow:auto;scrollbar-3dlight-color:#FFFFFF;scrollbar-arrow-color:#000000;scrollbar-base-color:#FF9999;scrollbar-darkshadow-color:#000000;scrollbar-face-color:#000000;scrollbar-highlight-color:#000000;\r\nscrollbar-shadow-color:#0033CC\">\r\n        <tbody style=\"width: 100%;display: table;\">\r\n            <tr style=\"height:30px;width:100%\">\r\n                <th style=\"width:5%\">SNo</th>\r\n                <th style=\"width:8%\">Date</th>\r\n                <th style=\"width:8%\">User</th>\r\n                <th style=\"width:15%\">Room</th>\r\n                <th style=\"width:15%\">Therapist</th>\r\n                <th style=\"width:15%\">Customer</th>\r\n                <th style=\"width:7%\">Cus. Pref.</th>\r\n                <th style=\"width:9%\">StartTime</th>\r\n                <th style=\"width:9%\">FinishedTime</th>\r\n                <th style=\"width:9%\">Rate</th>\r\n            </tr>\r\n    \r\n    \r\n            <tr *ngFor=\"let ir of reportList;let i=index\" style=\"height:28px\">\r\n                <td style=\"width:5%\">{{i+1}}</td>\r\n                <td style=\"width:8%\">{{ir.DATE}}</td>\r\n                <td style=\"width:8%\">{{ir.USER}}</td>\r\n                <td style=\"width:15%\">{{ir.ROOM}}</td>\r\n                <td style=\"width:15%\">{{ir.EMPLOYEE}}</td>\r\n                <td style=\"width:15%\">{{ir.CUSTOMER}}</td>\r\n                <td style=\"width:7%\">{{ir.EMPLOYEE_PREFERED}}</td>\r\n                <td style=\"width:9%\">{{ir.STARTTIME}}</td>\r\n                <td style=\"width:9%\">{{ir.ENDTIME}}</td>\r\n                <td style=\"width:9%\">{{ir.RATE}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </div>\r\n</Table>\r\n\r\n<ba-modal #childModal title=\"Information\" size=\"sm\">\r\n    {{DialogMessage}}\r\n    \r\n    \r\n</ba-modal>\r\n\r\n<ba-modal #loginModal title=\"Login\" size=\"sm\">\r\n    <login (signedIn)=\"loginModal.hide()\" toUrl=\"test\"></login>\r\n    \r\n</ba-modal>"

/***/ }),

/***/ "./src/app/pages/reports/components/serviceReport.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/reports/components/serviceReport.component.ts ***!
  \*********************************************************************/
/*! exports provided: ServiceReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceReport", function() { return ServiceReport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report.service */ "./src/app/pages/reports/components/report.service.ts");







var ServiceReport = /** @class */ (function () {
    function ServiceReport(masterService, _authService, router, reportService) {
        this.masterService = masterService;
        this._authService = _authService;
        this.router = router;
        this.reportService = reportService;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.subcriptions = [];
        this.reportList = [];
        this.reportObj = {};
        this.ServiceList = [];
    }
    ServiceReport.prototype.ngOnInit = function () {
        var _this = this;
        if (this.masterService._serviceList.length > 0) {
            this.ServiceList = this.masterService._serviceList;
        }
        else {
            this.masterService.getServiceList().subscribe(function (data) {
                _this.ServiceList = data;
                _this.masterService._serviceList = _this.ServiceList;
            }, function (Error) { return console.log(Error); });
        }
    };
    ServiceReport.prototype.onCancel = function () {
        this.reportObj = {};
        this.reportList = [];
    };
    ServiceReport.prototype.loadReportEvent = function () {
        var _this = this;
        this.DialogMessage = "Service Report Loading.... Please Wait...";
        this.childModal.show();
        try {
            var rparam = { rName: 'serviceReport', rParam: this.reportObj };
            this.reportService.getReport(rparam, '/GetReport')
                .subscribe(function (data) {
                data.forEach(function (element) {
                    element.DATE = element.DATE.toString().substring(0, 10);
                });
                _this.reportList = data;
                _this.DialogMessage = "Service Report Loaded sucessfully...";
                setTimeout(function () {
                    _this.childModal.hide();
                }, 1000);
            }, function (Error) {
                try {
                    var t = Error.json();
                    //console.log(t);
                    _this.DialogMessage = t.result + "Please check and try again";
                    //let p = t.json();
                    if (t.result == "Authorization Failed") {
                        //this.DialogMessage="erro in saving. " +Error._body;
                        setTimeout(function () {
                            _this.childModal.hide();
                            _this.loginModal.show();
                        }, 3000);
                    }
                    else {
                        _this.DialogMessage = "Error in Loading Data:" + t.result;
                    }
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 5000);
                }
                catch (e) {
                    _this.DialogMessage = e;
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            });
        }
        catch (ex) {
            alert(ex);
            this.DialogMessage = ex;
            setTimeout(function () {
                _this.childModal.hide();
            }, 3000);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], ServiceReport.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_2__["BaModalComponent"])
    ], ServiceReport.prototype, "loginModal", void 0);
    ServiceReport = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'SR',
            template: __webpack_require__(/*! ./serviceReport.component.html */ "./src/app/pages/reports/components/serviceReport.component.html"),
            providers: [_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_4__["MasterRepo"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]])
    ], ServiceReport);
    return ServiceReport;
}());



/***/ }),

/***/ "./src/app/pages/reports/report.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/reports/report.component.ts ***!
  \***************************************************/
/*! exports provided: Reports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reports", function() { return Reports; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Reports = /** @class */ (function () {
    function Reports() {
    }
    ;
    Reports = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'reports',
            template: '<router-outlet></router-outlet>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Reports);
    return Reports;
}());



/***/ }),

/***/ "./src/app/pages/reports/report.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/reports/report.module.ts ***!
  \************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_messageReport_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/messageReport.component */ "./src/app/pages/reports/components/messageReport.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _report_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report.routing */ "./src/app/pages/reports/report.routing.ts");
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./report.component */ "./src/app/pages/reports/report.component.ts");
/* harmony import */ var _common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/services/permission/guard.service */ "./src/app/common/services/permission/guard.service.ts");
/* harmony import */ var _components_report_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/report.service */ "./src/app/pages/reports/components/report.service.ts");
/* harmony import */ var _theme_nga_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../theme/nga.module */ "./src/app/theme/nga.module.ts");
/* harmony import */ var _components_customerReport_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/customerReport.component */ "./src/app/pages/reports/components/customerReport.component.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../login/login.module */ "./src/app/pages/login/login.module.ts");
/* harmony import */ var _components_roomReport_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/roomReport.component */ "./src/app/pages/reports/components/roomReport.component.ts");
/* harmony import */ var _components_employeeReport_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/employeeReport.component */ "./src/app/pages/reports/components/employeeReport.component.ts");
/* harmony import */ var _components_serviceReport_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/serviceReport.component */ "./src/app/pages/reports/components/serviceReport.component.ts");
/* harmony import */ var _components_seriesReport_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/seriesReport.component */ "./src/app/pages/reports/components/seriesReport.component.ts");
/* harmony import */ var _components_followupReport_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/followupReport.component */ "./src/app/pages/reports/components/followupReport.component.ts");
/* harmony import */ var _components_activityReport_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/activityReport.component */ "./src/app/pages/reports/components/activityReport.component.ts");
/* harmony import */ var _components_previews_schedulePreview_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/previews/schedulePreview.component */ "./src/app/pages/reports/components/previews/schedulePreview.component.ts");
/* harmony import */ var _components_previews_treatmentPreview_treatmentPreview_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/previews/treatmentPreview/treatmentPreview.component */ "./src/app/pages/reports/components/previews/treatmentPreview/treatmentPreview.component.ts");
/* harmony import */ var _components_previews_EditDetailPreview_editDetailPreview_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/previews/EditDetailPreview/editDetailPreview.component */ "./src/app/pages/reports/components/previews/EditDetailPreview/editDetailPreview.component.ts");
/* harmony import */ var _components_EmployeeRoster_employeeRoster_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/EmployeeRoster/employeeRoster.component */ "./src/app/pages/reports/components/EmployeeRoster/employeeRoster.component.ts");
/* harmony import */ var src_app_ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var src_app_common_nepali_date_picker_nepali_date_picker_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/common/nepali-date-picker/nepali-date-picker.module */ "./src/app/common/nepali-date-picker/nepali-date-picker.module.ts");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/index.js");


























var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _theme_nga_module__WEBPACK_IMPORTED_MODULE_10__["NgaModule"],
                src_app_ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_23__["Ng2SmartTableModule"],
                src_app_common_nepali_date_picker_nepali_date_picker_module__WEBPACK_IMPORTED_MODULE_24__["NepaliDateModule"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_25__["AngularMultiSelectModule"],
                _report_routing__WEBPACK_IMPORTED_MODULE_6__["routing"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                _login_login_module__WEBPACK_IMPORTED_MODULE_12__["LoginModule"]
            ],
            declarations: [
                _report_component__WEBPACK_IMPORTED_MODULE_7__["Reports"],
                _components_customerReport_component__WEBPACK_IMPORTED_MODULE_11__["CustomerReport"],
                _components_roomReport_component__WEBPACK_IMPORTED_MODULE_13__["RoomReport"],
                _components_employeeReport_component__WEBPACK_IMPORTED_MODULE_14__["EmployeeReport"],
                _components_serviceReport_component__WEBPACK_IMPORTED_MODULE_15__["ServiceReport"],
                _components_seriesReport_component__WEBPACK_IMPORTED_MODULE_16__["SeriesReport"],
                _components_followupReport_component__WEBPACK_IMPORTED_MODULE_17__["FollowupReport"],
                _components_messageReport_component__WEBPACK_IMPORTED_MODULE_1__["MessageReport"],
                _components_activityReport_component__WEBPACK_IMPORTED_MODULE_18__["ActivityReport"],
                _components_previews_schedulePreview_component__WEBPACK_IMPORTED_MODULE_19__["SchedulePreview"],
                _components_previews_treatmentPreview_treatmentPreview_component__WEBPACK_IMPORTED_MODULE_20__["TreatmentPreview"],
                _components_previews_EditDetailPreview_editDetailPreview_component__WEBPACK_IMPORTED_MODULE_21__["EditDetailPreview"],
                _components_EmployeeRoster_employeeRoster_component__WEBPACK_IMPORTED_MODULE_22__["EmployeeRosterComponent"],
            ],
            providers: [
                _common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["CanActivateTeam"], _components_report_service__WEBPACK_IMPORTED_MODULE_9__["ReportService"]
            ]
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ }),

/***/ "./src/app/pages/reports/report.routing.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/reports/report.routing.ts ***!
  \*************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _components_messageReport_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/messageReport.component */ "./src/app/pages/reports/components/messageReport.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report.component */ "./src/app/pages/reports/report.component.ts");
/* harmony import */ var _common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/permission/guard.service */ "./src/app/common/services/permission/guard.service.ts");
/* harmony import */ var _components_customerReport_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/customerReport.component */ "./src/app/pages/reports/components/customerReport.component.ts");
/* harmony import */ var _components_employeeReport_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/employeeReport.component */ "./src/app/pages/reports/components/employeeReport.component.ts");
/* harmony import */ var _components_roomReport_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/roomReport.component */ "./src/app/pages/reports/components/roomReport.component.ts");
/* harmony import */ var _components_serviceReport_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/serviceReport.component */ "./src/app/pages/reports/components/serviceReport.component.ts");
/* harmony import */ var _components_seriesReport_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/seriesReport.component */ "./src/app/pages/reports/components/seriesReport.component.ts");
/* harmony import */ var _components_followupReport_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/followupReport.component */ "./src/app/pages/reports/components/followupReport.component.ts");
/* harmony import */ var _components_activityReport_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .//components/activityReport.component */ "./src/app/pages/reports/components/activityReport.component.ts");
/* harmony import */ var _components_EmployeeRoster_employeeRoster_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/EmployeeRoster/employeeRoster.component */ "./src/app/pages/reports/components/EmployeeRoster/employeeRoster.component.ts");












var routes = [
    {
        path: '',
        component: _report_component__WEBPACK_IMPORTED_MODULE_2__["Reports"],
        children: [
            { path: 'cusReport', component: _components_customerReport_component__WEBPACK_IMPORTED_MODULE_4__["CustomerReport"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["CanActivateTeam"]] },
            { path: 'empReport', component: _components_employeeReport_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeReport"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["CanActivateTeam"]] },
            { path: 'roomReport', component: _components_roomReport_component__WEBPACK_IMPORTED_MODULE_6__["RoomReport"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["CanActivateTeam"]] },
            { path: 'serviceReport', component: _components_serviceReport_component__WEBPACK_IMPORTED_MODULE_7__["ServiceReport"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["CanActivateTeam"]] },
            { path: 'seriesReport', component: _components_seriesReport_component__WEBPACK_IMPORTED_MODULE_8__["SeriesReport"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["CanActivateTeam"]] },
            { path: 'patientRecords', component: _components_seriesReport_component__WEBPACK_IMPORTED_MODULE_8__["SeriesReport"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["CanActivateTeam"]] },
            { path: 'followupRecords', component: _components_followupReport_component__WEBPACK_IMPORTED_MODULE_9__["FollowupReport"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["CanActivateTeam"]] },
            { path: 'messageReport', component: _components_messageReport_component__WEBPACK_IMPORTED_MODULE_0__["MessageReport"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["CanActivateTeam"]] },
            { path: 'activityReport', component: _components_activityReport_component__WEBPACK_IMPORTED_MODULE_10__["ActivityReport"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["CanActivateTeam"]] },
            { path: 'empRoster', component: _components_EmployeeRoster_employeeRoster_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeRosterComponent"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["CanActivateTeam"]] }
        ]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=reports-report-module.60d380f05e7481d4846f.js.map