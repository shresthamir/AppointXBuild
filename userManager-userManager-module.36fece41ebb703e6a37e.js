(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userManager-userManager-module"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/pages/userManager/components/userManger/grid.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/pages/userManager/components/userManger/grid.scss ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".show-grid div[class^=col-]{padding:10px;box-sizing:border-box}.show-grid div[class^=col-] div{color:#666;text-align:center;font-size:18px;background-color:rgba(102,102,102,0.3);padding:12px 5px}.grid-h{margin-top:40px;margin-bottom:0}.grid-h:first-child{margin-top:0}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/pages/userManager/components/userManger/smartTables.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/pages/userManager/components/userManger/smartTables.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng2-smart-table-container table.ng2-smart-table{color:#666}.ng2-smart-table-container table.ng2-smart-table th,.ng2-smart-table-container table.ng2-smart-table td{border:1px solid #dcdcdc !important;line-height:35px;vertical-align:middle}.ng2-smart-table-container table.ng2-smart-table input{line-height:1.5 !important}.ng2-smart-table-container table.ng2-smart-table tbody tr:hover{background:rgba(0,0,0,0.03)}.ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link{font-size:14px !important;color:#666;font-weight:500}.ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link.sort{font-weight:500 !important}.ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link.sort::after{border-bottom-color:#666 !important}.ng2-smart-table-container table.ng2-smart-table .ng2-smart-actions{width:70px;text-align:center}.ng2-smart-table-container table.ng2-smart-table .ng2-smart-actions .actions{float:none;text-align:center}.ng2-smart-table-container table.ng2-smart-table a.ng2-smart-action{font-size:14px !important;color:#666;padding:0 5px;display:inline-block}.ng2-smart-table-container table.ng2-smart-table a.ng2-smart-action.ng2-smart-action-add-add{font-size:0px !important}nav.ng2-smart-pagination-nav{display:flex;justify-content:center}\n"

/***/ }),

/***/ "./node_modules/style-loader/index.js!./src/app/pages/userManager/components/userManger/grid.scss":
/*!***********************************************************************************************!*\
  !*** ./node_modules/style-loader!./src/app/pages/userManager/components/userManger/grid.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/raw-loader!../../../../../../node_modules/postcss-loader/lib??embedded!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--10-2!./grid.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/pages/userManager/components/userManger/grid.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./src/app/pages/userManager/components/userManger/smartTables.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/style-loader!./src/app/pages/userManager/components/userManger/smartTables.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/raw-loader!../../../../../../node_modules/postcss-loader/lib??embedded!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--10-2!./smartTables.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/pages/userManager/components/userManger/smartTables.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/app/pages/userManager/components/userManger/adduser.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/userManager/components/userManger/adduser.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <form [formGroup]=\"userForm\" novalidate>\r\n        <div class=\"widgets\">\r\n            <ba-card [title]=\"modeTitile\" baCardClass=\"with-scroll\">\r\n                <ba-card>\r\n                     <div class=\"form-group row\">\r\n                        <label for=\"inputUserId99\" class=\"col-sm-2 form-control-label\">User Id</label>\r\n                        <div class=\"col-sm-5\">\r\n                            <input type=\"text\"  class=\"form-control\" formControlName=\"UserId\" id=\"inputUserId99\" placeholder=\"User Id\" [readOnly]=\"mode == 'edit'\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputName99\" class=\"col-sm-2 form-control-label\">User Name</label>\r\n                        <div class=\"col-sm-5\">\r\n                            <input type=\"text\"  class=\"form-control\" formControlName=\"Name\" id=\"inputName99\" placeholder=\"User Name\">\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"Password99\" class=\"col-sm-2 form-control-label\">Password</label>\r\n                        <div class=\"col-sm-5\">\r\n                            <input type=\"password\" class=\"form-control\" formControlName=\"Password\" id=\"Password99\" placeholder=\"Password\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"branches\" class=\"col-md-2 fontweight\">Outlets</label>\r\n                        <div class=\"col-md-4\">\r\n                            <angular2-multiselect [data]=\"branchList\" [settings]=\"dropdownSettings\" [(ngModel)]=\"selectedBranches\" [ngModelOptions]=\"{standalone: true}\">\r\n                            </angular2-multiselect>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"defaultBranch\" class=\"col-sm-2 form-control-label\">Default Outlet</label>\r\n                        <div class=\"col-sm-5\">\r\n                            <select class=\"form-control\" formControlName=\"defaultBranch\" id=\"defaultBranch\">\r\n                                <option *ngFor = \"let branch of selectedBranches\" value=\"{{branch.branchId}}\">{{branch.branchName}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputmobile\" class=\"col-sm-2 form-control-label\">Role</label>\r\n                        <div class=\"col-sm-5\">\r\n                            <select class=\"form-control\" formControlName=\"Role\" id=\"inputmobile\">\r\n                                <option *ngFor = \"let role of roles\" value=\"{{role}}\">{{role}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputEmail\" class=\"col-sm-2 form-control-label\">Email</label>\r\n                        <div class=\"col-sm-5\">\r\n                            <input type=\"email\" class=\"form-control\" formControlName=\"email\" id=\"inputEmail\" placeholder=\"Email\">\r\n                        </div>\r\n                    </div>\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"mobile3\" class=\"col-sm-2 form-control-label\">Mobile</label>\r\n                        <div class=\"col-sm-5\">\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"mobile\" id=\"mobile3\" placeholder=\"Mobile No.\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"address\" class=\"col-sm-2 form-control-label\">Address</label>\r\n                        <div class=\"col-sm-5\">\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"address\" id=\"address\" placeholder=\"Address\">\r\n                        </div>\r\n                    </div>                    \r\n                </ba-card>\r\n\r\n\r\n            </ba-card>\r\n        </div>\r\n        <div>\r\n\r\n        </div>\r\n        <button type=\"submit\" [disabled]=\"userForm.controls['UserId'].invalid || (mode == 'add' && userForm.controls['Password'].invalid) || userForm.controls['Role'].invalid\"\r\n            class=\"btn btn-primary\" style=\"margin-bottom: 10px;\" (click)=\"onSubmit()\">Save</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" style=\"margin-bottom: 10px;\" (click)=\"back()\">Cancel</button>\r\n\r\n        <div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n            aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-sm\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <button class=\"close\" aria-label=\"Close\" (click)=\"hideChildModal()\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                        <h4 class=\"modal-title\">Information</h4>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        {{DialogMessage}}\r\n                    </div>\r\n                    <!--<div class=\"modal-footer\">\r\n                        <button class=\"btn btn-primary confirm-btn\" (click)=\"hideChildModal()\">Save changes</button>\r\n                        <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=onsubmit()>Save</button>\r\n                    </div>!-->\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal fade\" bsModal #loginModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n            aria-hidden=\"true\">\r\n            <div class=\"modal-dialog \">\r\n                <div class=\"modal-content\">\r\n                    <login (signedIn)=\"hideloginModal()\" toUrl=\"test\"></login>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/userManager/components/userManger/adduser.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/userManager/components/userManger/adduser.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUser", function() { return AddUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var style_loader_grid_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! style-loader!./grid.scss */ "./node_modules/style-loader/index.js!./src/app/pages/userManager/components/userManger/grid.scss");
/* harmony import */ var style_loader_grid_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(style_loader_grid_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _adduser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adduser.service */ "./src/app/pages/userManager/components/userManger/adduser.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _common_repositories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/repositories */ "./src/app/common/repositories/index.ts");








//import {BaCheckbox} from '../../../../theme/components'
var AddUser = /** @class */ (function () {
    //source: LocalDataSource = new LocalDataSource();
    function AddUser(fb, addUserService, router, activatedRoute, service) {
        this.fb = fb;
        this.addUserService = addUserService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.service = service;
        this.DialogMessage = "Saving data please wait ...";
        this.mode = 'add'; //mode of the form add or edit
        this.modeTitile = "Add user";
        this.userMenuList = []; //list data menulist of user
        this.items = []; //converted array of usermenu from main menu
        this.userRightList = []; //list of rights of user or empty {right,description,value,valutype}
        this.userType = "group"; //default user type ie, usergroup or user
        this.branchList = [];
        this.dropdownSettings = {};
        this.selectedBranches = [];
        this.roles = [];
        //getting parameter passed
        this.returnUrl = this.activatedRoute.snapshot.params['returnUrl'] || '';
        this.user = this.activatedRoute.snapshot.params['user'] || '';
        if (this.user && this.user !== '') {
            this.mode = 'edit';
            this.modeTitile = "Editing User";
        }
        else {
            this.mode = 'add';
            this.modeTitile = "Add User";
        }
    }
    AddUser.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getBranchList().subscribe(function (response) {
            _this.branchList = response;
        }, function (err) {
            _this.service.handleWebError(err);
        });
        this.addUserService.getRoleNames().subscribe(function (data) {
            _this.roles = data;
        }, function (error) {
            _this.service.handleWebError(error);
        });
        this.userForm = this.fb.group({
            UserId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            Name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [''],
            Role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: [''],
            mobile: [''],
            branches: [[]],
            defaultBranch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        if (this.mode == "edit") {
            this.addUserService.getUserProfile(this.user)
                .subscribe(function (data) {
                _this.userForm.patchValue({
                    UserId: data.UserId,
                    Name: data.Name,
                    email: data.email,
                    Role: data.Role,
                    address: data.address,
                    mobile: data.mobile,
                    defaultBranch: data.defaultBranch,
                });
                _this.selectedBranches = data.branches;
            });
        }
        this.dropdownSettings = {
            enableCheckAll: true,
            text: 'Select Outlets',
            enableSearchFilter: true,
            labelKey: "branchName",
            primaryKey: "branchId"
        };
    };
    AddUser.prototype.saveData = function ($event) {
        var _this = this;
        try {
            this.addUserService.saveUser($event)
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    _this.DialogMessage = "User saved sucessfully";
                    setTimeout(function () {
                        _this.childModal.hide();
                        _this.router.navigate([_this.returnUrl]);
                    }, 1000);
                }
                else {
                    if (data.result._body == "The ConnectionString property has not been initialized.") {
                        _this.loginModal.show();
                        //this.router.navigate(['/login', this.router.url])
                        return;
                    }
                    //Some other issues need to check
                    _this.DialogMessage = "Error in Saving Data:" + data.result._body;
                    //console.log(data.result._body);
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 4000);
                }
            }, function (Error) {
                try {
                    var t = Error.json();
                    //console.log(t);
                    _this.DialogMessage = t.result + "Please check and try again";
                    //let p = t.json();
                    if (t.result == "The ConnectionString property has not been initialized.") {
                        //this.DialogMessage="erro in saving. " +Error._body;
                        setTimeout(function () {
                            _this.childModal.hide();
                            _this.loginModal.show();
                        }, 3000);
                    }
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 2000);
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
    AddUser.prototype.ngOnChanges = function () {
        //console.log(this.userForm);
    };
    AddUser.prototype.onSubmit = function () {
        var _this = this;
        this.childModal.show();
        this.DialogMessage = "Saving data please wait ...";
        var data = this.prepareToSave();
        if (data) {
            this.saveData(data);
        }
        else {
            this.DialogMessage = "Invalid data. Please check the entry";
            setTimeout(function () {
                _this.childModal.hide();
            }, 3000);
        }
    };
    AddUser.prototype.prepareToSave = function () {
        if (this.userForm.controls['UserId'].status == 'INVALID' ||
            (this.mode == "add" && this.userForm.controls['Password'].status == 'INVALID') ||
            this.userForm.controls['Role'].status == 'INVALID') {
            return null;
        }
        this.userForm.patchValue({ branches: this.selectedBranches });
        if (this.mode == 'edit') {
            return { mode: 'edit', data: this.userForm.value };
        }
        else
            return { mode: 'add', data: this.userForm.value };
        //console.log(JSON.stringify(this.userForm.value.menuRights));
    };
    AddUser.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    AddUser.prototype.hideloginModal = function () {
        this.loginModal.hide();
    };
    AddUser.prototype.back = function () {
        //console.log(this.userForm);
        //this.childModal.show();
        //this.loginModal.show();
        this.router.navigate([this.returnUrl]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDirective"])
    ], AddUser.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDirective"])
    ], AddUser.prototype, "loginModal", void 0);
    AddUser = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-manager',
            template: __webpack_require__(/*! ./adduser.component.html */ "./src/app/pages/userManager/components/userManger/adduser.component.html"),
            styles: [__webpack_require__(/*! ./modals.scss */ "./src/app/pages/userManager/components/userManger/modals.scss")],
            providers: [_adduser_service__WEBPACK_IMPORTED_MODULE_5__["AddUserService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _adduser_service__WEBPACK_IMPORTED_MODULE_5__["AddUserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _common_repositories__WEBPACK_IMPORTED_MODULE_7__["MasterRepo"]])
    ], AddUser);
    return AddUser;
}());



/***/ }),

/***/ "./src/app/pages/userManager/components/userManger/modals.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/userManager/components/userManger/modals.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal{padding-top:300px}.modal .modal-content{color:#7d7d7d}.modal .modal-content .modal-header{border:none}.modal .modal-content .modal-footer{border:none}.modal .modal-content .close{outline:none}.modal-buttons .btn{margin-right:20px}\n"

/***/ }),

/***/ "./src/app/pages/userManager/components/userManger/roles/addRole.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/userManager/components/userManger/roles/addRole.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"widgets\">\r\n        <ba-card [title]=\"modeTitle\" baCardClass=\"with-scroll\">\r\n            <ba-card>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"inputUserId99\" class=\"col-sm-2 form-control-label\">Role</label>\r\n                    <div class=\"col-sm-5\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"inputUserId99\" placeholder=\"Role Name\"\r\n                            [(ngModel)]=\"role\" [readOnly]=\"mode == 'edit'\">\r\n                    </div>\r\n                </div>\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th style=\"width: 250px;\">Form</th>\r\n                            <th style=\"width: 70px;\">Hidden</th>\r\n                            <th style=\"width: 70px;\">Create</th>\r\n                            <th style=\"width: 70px;\">Edit</th>\r\n                            <th style=\"width: 70px;\">Delete</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let menu of menuRights\">\r\n                            <td style=\"width: 250px;text-align: left;\">{{ menu.menuName }}</td>\r\n                            <td style=\"width: 70px;\">\r\n                                <input type=\"checkbox\" [(ngModel)]=\"menu.hidden\"/>\r\n                            </td>\r\n                            <td style=\"width: 70px;\">\r\n                                <input *ngIf=\"menu.allowCreate\" type=\"checkbox\" [(ngModel)]=\"menu.create\" />\r\n                            </td>\r\n                            <td style=\"width: 70px;\">\r\n                                <input *ngIf=\"menu.allowEdit\" type=\"checkbox\" [(ngModel)]=\"menu.edit\" />\r\n                            </td>\r\n                            <td style=\"width: 70px;\">\r\n                                <input *ngIf=\"menu.allowDelete\" type=\"checkbox\" [(ngModel)]=\"menu.delete\" />\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                <button type=\"submit\" [disabled]=\"role==='' || role === undefined || role === null\"\r\n                    class=\"btn btn-primary\" style=\"margin-bottom: 10px;\" (click)=\"onSubmit()\">Save</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" style=\"margin-bottom: 10px;\"\r\n                    (click)=\"back()\">Cancel</button>\r\n            </ba-card>\r\n        </ba-card>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button class=\"close\" aria-label=\"Close\" (click)=\"hideChildModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Information</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                {{DialogMessage}}\r\n            </div>\r\n            <!--<div class=\"modal-footer\">\r\n                        <button class=\"btn btn-primary confirm-btn\" (click)=\"hideChildModal()\">Save changes</button>\r\n                        <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=onsubmit()>Save</button>\r\n                    </div>!-->\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/userManager/components/userManger/roles/addRole.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/userManager/components/userManger/roles/addRole.component.ts ***!
  \************************************************************************************/
/*! exports provided: AddRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRole", function() { return AddRole; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adduser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../adduser.service */ "./src/app/pages/userManager/components/userManger/adduser.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_repositories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../common/repositories */ "./src/app/common/repositories/index.ts");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../pages.menu */ "./src/app/pages/pages.menu.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _common_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../common/services/common.service */ "./src/app/common/services/common.service.ts");








var AddRole = /** @class */ (function () {
    function AddRole(addUserService, router, activatedRoute, service, common) {
        this.addUserService = addUserService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.service = service;
        this.common = common;
        this.modeTitle = "Add Role";
        this.DialogMessage = "Saving data please wait ...";
        this.mode = "add"; //mode of the form add or edit
        this.menuRights = [];
        this.role = this.activatedRoute.snapshot.params["role"] || "";
        if (this.role && this.role !== "") {
            this.mode = "edit";
            this.modeTitle = "Edit Role";
        }
        else {
            this.mode = "add";
            this.modeTitle = "Add Role";
        }
    }
    AddRole.prototype.ngOnInit = function () {
        var _this = this;
        this.common.recursiveForEach(_pages_menu__WEBPACK_IMPORTED_MODULE_5__["PAGES_MENU"], function (item) {
            if (["pages", "treatment-list", "treatment-details", "series", "seriesSales", "disease", "medication", "prescription"].indexOf(item.path) !==
                -1)
                return;
            var menu = item.data && item.data.menu;
            _this.menuRights.push({
                menuId: item.path,
                menuName: menu && menu.title,
                allowCreate: _this.common.coalesce(menu && menu.allowCreate, true),
                allowEdit: _this.common.coalesce(menu && menu.allowEdit, true),
                allowDelete: _this.common.coalesce(menu && menu.allowDelete, true),
                create: _this.common.coalesce(menu && menu.allowCreate, true),
                edit: _this.common.coalesce(menu && menu.allowEdit, true),
                delete: _this.common.coalesce(menu && menu.allowDelete, true),
            });
        });
        if (this.mode === "edit") {
            this.loadUserRights();
        }
    };
    AddRole.prototype.loadUserRights = function () {
        var _this = this;
        this.addUserService.getUserRole(this.role).subscribe(function (response) {
            _this.menuRights.forEach(function (mRight) {
                var userRight = response.menuRights.find(function (menuRight) { return menuRight.menuId === mRight.menuId; });
                if (userRight) {
                    mRight.hidden = userRight.hidden;
                    mRight.create = userRight.create;
                    mRight.edit = userRight.edit;
                    mRight.delete = userRight.delete;
                }
                else {
                    mRight.hidden = true;
                    mRight.create = false;
                    mRight.edit = false;
                    mRight.delete = false;
                }
            });
        }, function (error) {
            _this.service.handleWebError(error);
        });
    };
    AddRole.prototype.back = function () {
        this.router.navigate(["/pages/userManager/roleList"]);
    };
    AddRole.prototype.onSubmit = function () {
        var _this = this;
        this.childModal.show();
        this.DialogMessage = "Saving data please wait ...";
        var data = {
            mode: this.mode,
            data: {
                role: this.role,
                menuRights: this.menuRights.map(function (x) { return ({
                    menuId: x.menuId,
                    menuName: x.menuName,
                    hidden: x.hidden || false,
                    create: x.create,
                    edit: x.edit,
                    delete: x.delete,
                }); }),
            },
        };
        if (data) {
            this.addUserService.saveRole(data).subscribe(function (response) {
                var result = response;
                if (result.status == "ok") {
                    _this.DialogMessage = "Role saved sucessfully.";
                    setTimeout(function () {
                        _this.childModal.hide();
                        _this.router.navigate(["/pages/userManager/roleList"]);
                    }, 1000);
                }
                else {
                    console.log({ response: response, result: result });
                    _this.DialogMessage = "Role could not be saved.";
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 1000);
                }
            }, function (error) {
                _this.service.handleWebError(error);
                _this.childModal.hide();
            });
        }
        else {
            this.DialogMessage = "Invalid data. Please check the entry";
            setTimeout(function () {
                _this.childModal.hide();
            }, 3000);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("childModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDirective"])
    ], AddRole.prototype, "childModal", void 0);
    AddRole = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "role-form",
            template: __webpack_require__(/*! ./addRole.component.html */ "./src/app/pages/userManager/components/userManger/roles/addRole.component.html"),
            styles: [__webpack_require__(/*! ./../modals.scss */ "./src/app/pages/userManager/components/userManger/modals.scss")],
            providers: [_adduser_service__WEBPACK_IMPORTED_MODULE_2__["AddUserService"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_adduser_service__WEBPACK_IMPORTED_MODULE_2__["AddUserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _common_repositories__WEBPACK_IMPORTED_MODULE_4__["MasterRepo"],
            _common_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]])
    ], AddRole);
    return AddRole;
}());



/***/ }),

/***/ "./src/app/pages/userManager/components/userManger/roles/roleList.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/userManager/components/userManger/roles/roleList.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n    <button class=\"btn btn-primary\" style=\"margin-bottom: 10px;\" [disabled] = \"disableAdd\" routerLink=\"/pages/userManager/addRole\" >Add Role</button>\r\n    <div>\r\n      <ba-card title=\"User List\" baCardClass=\"with-scroll\">\r\n        <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (delete)=\"onDeleteConfirm($event)\"></ng2-smart-table>\r\n      </ba-card>\r\n    </div>\r\n    \r\n  \r\n  </div>\r\n    <div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n              aria-hidden=\"true\">\r\n              <div class=\"modal-dialog modal-sm\">\r\n                  <div class=\"modal-content\">\r\n                      <div class=\"modal-header\">\r\n                          <button class=\"close\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n                              <span aria-hidden=\"true\">&times;</span>\r\n                          </button>\r\n                          <h4 class=\"modal-title\">Warning</h4>\r\n                      </div>\r\n                      <div class=\"modal-body\">\r\n                          Are you sure you want to delete this Role?\r\n                      </div>\r\n                      <div class=\"modal-footer\">\r\n                          <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n                          <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=\"deleteModal.hide()\">Cancel</button>\r\n                      </div>!\r\n  \r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n              aria-hidden=\"true\">\r\n              <div class=\"modal-dialog modal-md\">\r\n                  <div class=\"modal-content\">\r\n                      <div class=\"modal-header\">\r\n                          <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n            \r\n          </button>\r\n                          <h4 class=\"modal-title\">Information</h4>\r\n                      </div>\r\n                      \r\n                      <div class=\"modal-body\">\r\n                        <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n                          {{DialogMessage}}\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>"

/***/ }),

/***/ "./src/app/pages/userManager/components/userManger/roles/roleList.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/userManager/components/userManger/roles/roleList.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RoleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleList", function() { return RoleList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! style-loader!./../smartTables.scss */ "./node_modules/style-loader/index.js!./src/app/pages/userManager/components/userManger/smartTables.scss");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _adduser_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../adduser.service */ "./src/app/pages/userManager/components/userManger/adduser.service.ts");
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");

//import {LocalDataSource} from 'ng2-smart-table/ng2-smart-table/lib';








var RoleList = /** @class */ (function () {
    function RoleList(adduserService, router, _authService, service) {
        this.adduserService = adduserService;
        this.router = router;
        this._authService = _authService;
        this.service = service;
        this.DialogMessage = "You are not authorized";
        this.settings = {
            mode: "external",
            edit: null,
            delete: null,
            columns: {
                role: {
                    title: "Role",
                    type: "text",
                },
            },
        };
        this.source = new _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["LocalDataSource"]();
        this.loadUserRoles();
        this.settings.delete = this.menuRight.delete ? {} : null;
        this.settings.edit = this.menuRight.edit ? {} : null;
    }
    Object.defineProperty(RoleList.prototype, "disableAdd", {
        get: function () {
            return !this.menuRight.create;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleList.prototype, "menuRight", {
        get: function () {
            var right = this._authService.getRole.menuRights.find(function (x) { return x.menuId === 'roles'; });
            return right || { edit: true };
        },
        enumerable: true,
        configurable: true
    });
    RoleList.prototype.loadUserRoles = function () {
        var _this = this;
        var data = [];
        this.adduserService.getRoleNames().subscribe(function (res) {
            res
                .map(function (x) { return ({ role: x }); })
                .forEach(function (element) {
                data.push(element);
            });
            _this.source.load(data);
            console.log(data);
        }, function (error) {
            _this.service.handleWebError(error);
        });
    };
    RoleList.prototype.onDeleteConfirm = function (event) {
        try {
            this.selectedData = event.data;
            this.deleteModal.show();
        }
        catch (e) {
            alert(e);
        }
    };
    RoleList.prototype.DeleteEvent = function () {
        var _this = this;
        try {
            var result = [];
            this.deleteModal.hide();
            this.DialogMessage = "Deleting please wait...";
            this.childModal.show();
            var sub = this.adduserService
                .saveRole({ mode: "delete", data: this.selectedData })
                .subscribe(function (response) {
                var result = response;
                if (result.status == "ok") {
                    _this.DialogMessage = "Role deleted sucessfully.";
                    _this.loadUserRoles();
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 1000);
                }
                else {
                    console.log({ response: response, result: result });
                    _this.DialogMessage = "Role could not be saved.";
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 1000);
                }
            }, function (error) {
                _this.service.handleWebError(error);
                _this.childModal.hide();
            });
        }
        catch (e) {
            alert(e);
        }
    };
    RoleList.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    RoleList.prototype.onEditClick = function (event) {
        this.router.navigate([
            "pages/userManager/addRole",
            { role: event.data.role, returnUrl: this.router.url },
        ]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("childModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], RoleList.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("deleteModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], RoleList.prototype, "deleteModal", void 0);
    RoleList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "role-list",
            template: __webpack_require__(/*! ./roleList.component.html */ "./src/app/pages/userManager/components/userManger/roles/roleList.component.html"),
            providers: [_adduser_service__WEBPACK_IMPORTED_MODULE_7__["AddUserService"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_adduser_service__WEBPACK_IMPORTED_MODULE_7__["AddUserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_8__["MasterRepo"]])
    ], RoleList);
    return RoleList;
}());



/***/ }),

/***/ "./src/app/pages/userManager/components/userManger/userList.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/userManager/components/userManger/userList.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n  <button class=\"btn btn-primary\" style=\"margin-bottom: 10px;\" [disabled] = \"disableAdd\" (click)=\"onAddClick();false\" >Add User</button>\r\n  <div>\r\n    <ba-card title=\"User List\" baCardClass=\"with-scroll\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (delete)=\"onDeleteConfirm($event)\"></ng2-smart-table>\r\n    </ba-card>\r\n  </div>\r\n  \r\n\r\n</div>\r\n  <div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n            aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-sm\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <button class=\"close\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                        <h4 class=\"modal-title\">Warning</h4>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        Are U sure you want to delete this user?\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n                        <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=\"deleteModal.hide()\">Cancel</button>\r\n                    </div>!\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n            aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-md\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n          \r\n        </button>\r\n                        <h4 class=\"modal-title\">Information</h4>\r\n                    </div>\r\n                    \r\n                    <div class=\"modal-body\">\r\n                      <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n                        {{DialogMessage}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>"

/***/ }),

/***/ "./src/app/pages/userManager/components/userManger/userList.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/userManager/components/userManger/userList.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserList", function() { return UserList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! style-loader!./smartTables.scss */ "./node_modules/style-loader/index.js!./src/app/pages/userManager/components/userManger/smartTables.scss");
/* harmony import */ var style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(style_loader_smartTables_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _adduser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adduser.service */ "./src/app/pages/userManager/components/userManger/adduser.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

//import {LocalDataSource} from 'ng2-smart-table/ng2-smart-table/lib';








var UserList = /** @class */ (function () {
    function UserList(adduserService, router, _authService) {
        var _this = this;
        this.adduserService = adduserService;
        this.router = router;
        this._authService = _authService;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.settings = {
            mode: 'external',
            edit: null,
            delete: null,
            columns: {
                UserId: {
                    title: 'User Id',
                    type: 'text'
                },
                Name: {
                    title: 'User Name',
                    type: 'text'
                },
                Role: {
                    title: 'Role',
                    type: 'text'
                },
                email: {
                    title: 'Email',
                    type: 'text'
                },
                mobile: {
                    title: 'Mobile',
                    type: 'text'
                },
                address: {
                    title: 'Address',
                    type: 'text'
                }
            }
        };
        this.subcriptions = [];
        this.source = new _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["LocalDataSource"]();
        var data = [];
        this.adduserService.getUserList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (d) { return d || []; }))
            .subscribe(function (res) {
            data.push(res);
            _this.source.load(data);
        }, function (error) {
            _this.router.navigate(["/login", { returnUrl: _this.router.url }]);
            //console.log(error);
        });
        this.settings.delete = this.menuRight.delete ? {} : null;
        this.settings.edit = this.menuRight.edit ? {} : null;
    }
    Object.defineProperty(UserList.prototype, "disableAdd", {
        get: function () {
            return !this.menuRight.create;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserList.prototype, "menuRight", {
        get: function () {
            var right = this._authService.getRole.menuRights.find(function (x) { return x.menuId === 'userlist'; });
            return right || {};
        },
        enumerable: true,
        configurable: true
    });
    UserList.prototype.onAddClick = function (event) {
        this.router.navigate(['/pages/userManager/adduser', { returnUrl: this.router.url }]);
    };
    UserList.prototype.onDeleteConfirm = function (event) {
        try {
            this.selectedData = event.data;
            this.deleteModal.show();
        }
        catch (e) {
            alert(e);
        }
    };
    UserList.prototype.DeleteEvent = function () {
        var _this = this;
        try {
            var result_1 = [];
            this.deleteModal.hide();
            this.DialogMessage = "Deleting please wait...";
            this.childModal.show();
            if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
                var sub = this.adduserService.saveUser({ mode: 'delete', data: this.selectedData })
                    .subscribe(function (data) {
                    if (data.status == 'ok') {
                        _this.adduserService.getUserList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (d) { return d || []; }))
                            .subscribe(function (res) {
                            result_1.push(res);
                            _this.source.load(result_1);
                        });
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
                        alert("Error in Deleting Data:" + data.result._body);
                        _this.DialogMessage = "Error in Deleting Data:" + data.result._body;
                        //console.log(data.result._body);
                        setTimeout(function () {
                            _this.childModal.hide();
                        }, 3000);
                    }
                }, function (error) { alert(error); });
                this.subcriptions.push(sub);
            }
            else {
                this.DialogMessage = "You are not authorize to delete the user";
                this.childModal.show();
            }
        }
        catch (e) {
            alert(e);
        }
    };
    UserList.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    UserList.prototype.onEditClick = function (event) {
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            this.router.navigate(["pages/userManager/adduser", { user: event.data.UserId, returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorize to edit the user";
            this.childModal.show();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], UserList.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], UserList.prototype, "deleteModal", void 0);
    UserList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-list',
            template: __webpack_require__(/*! ./userList.component.html */ "./src/app/pages/userManager/components/userManger/userList.component.html"),
            providers: [_adduser_service__WEBPACK_IMPORTED_MODULE_5__["AddUserService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_adduser_service__WEBPACK_IMPORTED_MODULE_5__["AddUserService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], UserList);
    return UserList;
}());



/***/ }),

/***/ "./src/app/pages/userManager/userManager.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/userManager/userManager.component.ts ***!
  \************************************************************/
/*! exports provided: UserManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManager", function() { return UserManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserManager = /** @class */ (function () {
    function UserManager() {
    }
    UserManager = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-manager',
            template: '<router-outlet></router-outlet>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserManager);
    return UserManager;
}());



/***/ }),

/***/ "./src/app/pages/userManager/userManager.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/userManager/userManager.module.ts ***!
  \*********************************************************/
/*! exports provided: UserManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagerModule", function() { return UserManagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _userManager_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userManager.component */ "./src/app/pages/userManager/userManager.component.ts");
/* harmony import */ var _common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/permission/guard.service */ "./src/app/common/services/permission/guard.service.ts");
/* harmony import */ var _components_userManger_adduser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/userManger/adduser.component */ "./src/app/pages/userManager/components/userManger/adduser.component.ts");
/* harmony import */ var _components_userManger_userList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/userManger/userList.component */ "./src/app/pages/userManager/components/userManger/userList.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _theme_nga_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../theme/nga.module */ "./src/app/theme/nga.module.ts");
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _userManager_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./userManager.routing */ "./src/app/pages/userManager/userManager.routing.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../login/login.module */ "./src/app/pages/login/login.module.ts");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var _components_userManger_roles_roleList_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/userManger/roles/roleList.component */ "./src/app/pages/userManager/components/userManger/roles/roleList.component.ts");
/* harmony import */ var _components_userManger_roles_addRole_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/userManger/roles/addRole.component */ "./src/app/pages/userManager/components/userManger/roles/addRole.component.ts");
















var UserManagerModule = /** @class */ (function () {
    function UserManagerModule() {
    }
    UserManagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _theme_nga_module__WEBPACK_IMPORTED_MODULE_8__["NgaModule"],
                _userManager_routing__WEBPACK_IMPORTED_MODULE_11__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(),
                _login_login_module__WEBPACK_IMPORTED_MODULE_12__["LoginModule"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["AngularMultiSelectModule"]
            ],
            declarations: [
                _components_userManger_adduser_component__WEBPACK_IMPORTED_MODULE_3__["AddUser"], _userManager_component__WEBPACK_IMPORTED_MODULE_1__["UserManager"], _components_userManger_userList_component__WEBPACK_IMPORTED_MODULE_4__["UserList"], _components_userManger_roles_roleList_component__WEBPACK_IMPORTED_MODULE_14__["RoleList"], _components_userManger_roles_addRole_component__WEBPACK_IMPORTED_MODULE_15__["AddRole"]
            ],
            providers: [
                _common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_2__["CanActivateTeam"]
            ]
        })
    ], UserManagerModule);
    return UserManagerModule;
}());



/***/ }),

/***/ "./src/app/pages/userManager/userManager.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/userManager/userManager.routing.ts ***!
  \**********************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _components_userManger_adduser_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/userManger/adduser.component */ "./src/app/pages/userManager/components/userManger/adduser.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userManager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userManager.component */ "./src/app/pages/userManager/userManager.component.ts");
/* harmony import */ var _components_userManger_userList_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/userManger/userList.component */ "./src/app/pages/userManager/components/userManger/userList.component.ts");
/* harmony import */ var _components_userManger_roles_roleList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/userManger/roles/roleList.component */ "./src/app/pages/userManager/components/userManger/roles/roleList.component.ts");
/* harmony import */ var _components_userManger_roles_addRole_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/userManger/roles/addRole.component */ "./src/app/pages/userManager/components/userManger/roles/addRole.component.ts");






var routes = [
    {
        path: '',
        component: _userManager_component__WEBPACK_IMPORTED_MODULE_2__["UserManager"],
        children: [
            { path: 'userlist', component: _components_userManger_userList_component__WEBPACK_IMPORTED_MODULE_3__["UserList"] },
            { path: 'adduser', component: _components_userManger_adduser_component__WEBPACK_IMPORTED_MODULE_0__["AddUser"] },
            { path: 'roles', component: _components_userManger_roles_roleList_component__WEBPACK_IMPORTED_MODULE_4__["RoleList"] },
            { path: 'addRole', component: _components_userManger_roles_addRole_component__WEBPACK_IMPORTED_MODULE_5__["AddRole"] }
        ]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=userManager-userManager-module.36fece41ebb703e6a37e.js.map