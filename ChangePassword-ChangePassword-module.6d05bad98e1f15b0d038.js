(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChangePassword-ChangePassword-module"],{

/***/ "./src/app/common/services/validation.services.ts":
/*!********************************************************!*\
  !*** ./src/app/common/services/validation.services.ts ***!
  \********************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidationService = /** @class */ (function () {
    function ValidationService() {
        this.passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    }
    ValidationService.prototype.patternValidator = function () {
        var _this = this;
        return function (control) {
            if (!control.value)
                return null;
            return _this.passwordPattern.test(control.value)
                ? null
                : { invalidPassword: true };
        };
    };
    ValidationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/pages/ChangePassword/ChangePassword.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/ChangePassword/ChangePassword.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"w-100 my-50\" style=\"background-color: #808080;\">\r\n  <div class=\"container-fluid min-vh-100 d-flex align-items-center justify-content-center\" style=\"background: #e5e5e5;\">\r\n    <div class=\"card shadow border-0 p-4\" style=\"max-width: 400px; width: 100%; background-color: #FFFFFF;\">\r\n      <form [formGroup]=\"changePasswordForm\" (ngSubmit)=\"onSubmit($event)\">\r\n        <h2 class=\"card-title text-center my-4 text-primary\">Change Password</h2>\r\n        <div class=\"form-group mb-3 position-relative\">\r\n          <label for=\"oldPassword\" class=\"form-label\">Old Password:</label>\r\n          <input [type]=\"showOldPassword ? 'text' : 'password'\" class=\"form-control\" id=\"oldPassword\"\r\n            placeholder=\"Old password\" formControlName=\"oldPassword\">\r\n          <i class=\"fa\" [ngClass]=\"showOldPassword ? 'fa-eye-slash' : 'fa-eye'\" (click)=\"toggleOldPassword()\"\r\n            style=\"position:absolute; top:38px; right:10px; cursor:pointer;\"></i>\r\n          <small class=\"form-text text-danger text-left msgtext\"\r\n            *ngIf=\"changePasswordForm.controls.oldPassword.invalid && changePasswordForm.controls.oldPassword.touched && changePasswordForm.controls.oldPassword.errors?.required\">\r\n            Old password is required\r\n          </small>\r\n        </div>\r\n\r\n        <div class=\"form-group mb-3 position-relative\">\r\n          <label for=\"newPassword\" class=\"form-label\">New Password:</label>\r\n          <input [type]=\"showNewPassword ? 'text' : 'password'\" class=\"form-control\" id=\"newPassword\"\r\n            placeholder=\"New password\" formControlName=\"newPassword\">\r\n          <i class=\"fa\" [ngClass]=\"showNewPassword ? 'fa-eye-slash' : 'fa-eye'\" (click)=\"toggleNewPassword()\"\r\n            style=\"position:absolute; top:38px; right:10px; cursor:pointer;\"></i>\r\n          <div class=\"inputFieldWrapper\">\r\n            <small class=\"form-text text-danger text-left msgtext\"\r\n              *ngIf=\"changePasswordForm.controls.newPassword.invalid && changePasswordForm.controls.newPassword.touched\">\r\n              {{getPasswordError()}}\r\n            </small>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group mb-4 position-relative\">\r\n          <label for=\"newPasswordConfirm\" class=\"form-label\">Confirm Password:</label>\r\n          <input [type]=\"showConfirmPassword ? 'text' : 'password'\" class=\"form-control\" id=\"newPasswordConfirm\"\r\n            placeholder=\"Confirm new password\" formControlName=\"newPasswordConfirm\">\r\n          <i class=\"fa\" [ngClass]=\"showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'\" (click)=\"toggleConfirmPassword()\"\r\n            style=\"position:absolute; top:38px; right:10px; cursor:pointer;\"></i>\r\n          <div class=\"inputFieldWrapper\">\r\n            <small class=\"form-text text-danger text-left msgtext\"\r\n              *ngIf=\"changePasswordForm.controls.newPasswordConfirm.invalid && changePasswordForm.controls.newPasswordConfirm.touched\">\r\n              {{getConfirmPasswordError()}}\r\n            </small>\r\n          </div>\r\n        </div>\r\n        <div class=\"d-flex justify-content-between mb-3 \">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Back</button>\r\n          <button type=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <ba-modal #childModal title=\"Information\" size=\"sm\">\r\n    {{DialogMessage}}\r\n  </ba-modal>\r\n\r\n  <div class=\"overlay\" *ngIf=\"popup\">\r\n    <div class=\"popup\">\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-sm-12 text-center\">\r\n          <label>{{message}}</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-sm-12 text-center\">\r\n          <button class=\"btn btn-warning\" (click)=\"popup=false\">Ok</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>"

/***/ }),

/***/ "./src/app/pages/ChangePassword/ChangePassword.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/ChangePassword/ChangePassword.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group .btn-outline-secondary{border-left:0;border-color:#ced4da}.input-group .btn-outline-secondary:hover{background-color:#f8f9fa}.input-group .form-control{border-right:0}.inputFieldWrapper{margin-top:0.25rem}.msgtext{font-size:0.875rem}input::-ms-reveal,input::-ms-clear{display:none}\n"

/***/ }),

/***/ "./src/app/pages/ChangePassword/ChangePassword.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/ChangePassword/ChangePassword.component.ts ***!
  \******************************************************************/
/*! exports provided: ChangePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePassword", function() { return ChangePassword; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _common_services_validation_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/services/validation.services */ "./src/app/common/services/validation.services.ts");
/* harmony import */ var _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme/components/baModal/baModal.component */ "./src/app/theme/components/baModal/baModal.component.ts");







var ChangePassword = /** @class */ (function () {
    function ChangePassword(fb, route, router, authService, validationService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.validationService = validationService;
        this.DialogMessage = null;
        this.showOldPassword = false;
        this.showNewPassword = false;
        this.showConfirmPassword = false;
        this.changePasswordForm = this.fb.group({
            oldPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            newPassword: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(32),
                    this.validationService.patternValidator()
                ]],
            newPasswordConfirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ChangePassword.prototype.ngOnInit = function () {
        var _this = this;
        this.changePasswordForm.statusChanges.subscribe(function (status) {
            console.log('Form status:', status);
            console.log('Form errors:', _this.changePasswordForm.errors);
            console.log('newPassword errors:', _this.f['newPassword'].errors);
            console.log('newPasswordConfirm errors:', _this.f['newPasswordConfirm'].errors);
        });
    };
    Object.defineProperty(ChangePassword.prototype, "f", {
        get: function () {
            return this.changePasswordForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ChangePassword.prototype.toggleOldPassword = function () {
        this.showOldPassword = !this.showOldPassword;
    };
    ChangePassword.prototype.toggleNewPassword = function () {
        this.showNewPassword = !this.showNewPassword;
    };
    ChangePassword.prototype.toggleConfirmPassword = function () {
        this.showConfirmPassword = !this.showConfirmPassword;
    };
    ChangePassword.prototype.showMessage = function (message, closeAfter) {
        var _this = this;
        if (closeAfter === void 0) { closeAfter = 3000; }
        this.DialogMessage = message;
        if (!this.childModal.isShown) {
            this.childModal.show();
        }
        if (closeAfter >= 0) {
            setTimeout(function () {
                _this.childModal.hide();
                _this.DialogMessage = null;
            }, closeAfter);
        }
    };
    ChangePassword.prototype.onSubmit = function () {
        var _this = this;
        if (this.changePasswordForm.invalid) {
            this.showMessage('Please fill in all required fields.');
            return;
        }
        var oldPassword = this.f['oldPassword'].value;
        var newPassword = this.f['newPassword'].value;
        var newPasswordConfirm = this.f['newPasswordConfirm'].value;
        if (newPassword !== newPasswordConfirm) {
            this.f['newPasswordConfirm'].setErrors({ passwordMismatch: true });
            this.showMessage('Passwords do not match.');
            return;
        }
        if (oldPassword === newPassword) {
            this.f['newPassword'].setErrors({ samePassword: true });
            this.showMessage('New password cannot be the same as the old password.');
            return;
        }
        this.DialogMessage = null;
        this.authService.changePassword(oldPassword, newPassword)
            .subscribe({
            next: function (data) {
                console.log('API response:', data);
                if (data.status === 'ok') {
                    _this.showMessage('Password changed successfully!');
                    setTimeout(function () {
                        _this.router.navigate(['/login']);
                    }, 4000);
                }
                else {
                    _this.showMessage('Failed to change password. Invalid response from server.');
                }
            },
            error: function (error) {
                _this.showMessage('Failed to change password. Please try again.');
                console.error('Password change error:', error);
            }
        });
    };
    ChangePassword.prototype.goBack = function () {
        this.router.navigate(['/dashboard']);
    };
    Object.defineProperty(ChangePassword.prototype, "passwordControl", {
        get: function () {
            return this.f['newPassword'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePassword.prototype, "confirmPasswordControl", {
        get: function () {
            return this.f['newPasswordConfirm'];
        },
        enumerable: true,
        configurable: true
    });
    ChangePassword.prototype.getPasswordError = function () {
        var control = this.passwordControl;
        if (control.hasError('required'))
            return 'Please enter a valid password';
        if (control.hasError('minlength'))
            return 'Minimum password length is 8 characters';
        if (control.hasError('maxlength'))
            return 'Maximum password length is 32 characters';
        if (control.hasError('invalidPassword')) {
            return 'Password must contain at least 8 characters, including lowercase, uppercase, and numeric characters';
        }
        if (control.hasError('samePassword')) {
            return 'New password must not match the old password';
        }
        return '';
    };
    ChangePassword.prototype.getConfirmPasswordError = function () {
        var control = this.confirmPasswordControl;
        if (control.hasError('required'))
            return 'Please confirm the password';
        if (control.hasError('passwordMismatch'))
            return 'Passwords do not match';
        return '';
    };
    ChangePassword.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_components_baModal_baModal_component__WEBPACK_IMPORTED_MODULE_6__["BaModalComponent"])
    ], ChangePassword.prototype, "childModal", void 0);
    ChangePassword = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password-modal',
            template: __webpack_require__(/*! ./ChangePassword.component.html */ "./src/app/pages/ChangePassword/ChangePassword.component.html"),
            styles: [__webpack_require__(/*! ./ChangePassword.component.scss */ "./src/app/pages/ChangePassword/ChangePassword.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _common_services_validation_services__WEBPACK_IMPORTED_MODULE_5__["ValidationService"]])
    ], ChangePassword);
    return ChangePassword;
}());



/***/ }),

/***/ "./src/app/pages/ChangePassword/ChangePassword.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/ChangePassword/ChangePassword.module.ts ***!
  \***************************************************************/
/*! exports provided: ChangePasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModule", function() { return ChangePasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _theme_nga_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/nga.module */ "./src/app/theme/nga.module.ts");
/* harmony import */ var _ChangePassword_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChangePassword.component */ "./src/app/pages/ChangePassword/ChangePassword.component.ts");
/* harmony import */ var _ChangePassword_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChangePassword.routing */ "./src/app/pages/ChangePassword/ChangePassword.routing.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");








var ChangePasswordModule = /** @class */ (function () {
    function ChangePasswordModule() {
    }
    ChangePasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
                _ChangePassword_routing__WEBPACK_IMPORTED_MODULE_6__["routing"],
                _theme_nga_module__WEBPACK_IMPORTED_MODULE_4__["NgaModule"]
            ],
            declarations: [
                _ChangePassword_component__WEBPACK_IMPORTED_MODULE_5__["ChangePassword"]
            ],
            exports: [_ChangePassword_component__WEBPACK_IMPORTED_MODULE_5__["ChangePassword"]]
        })
    ], ChangePasswordModule);
    return ChangePasswordModule;
}());



/***/ }),

/***/ "./src/app/pages/ChangePassword/ChangePassword.routing.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/ChangePassword/ChangePassword.routing.ts ***!
  \****************************************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ChangePassword_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangePassword.component */ "./src/app/pages/ChangePassword/ChangePassword.component.ts");


var routes = [
    {
        path: '',
        component: _ChangePassword_component__WEBPACK_IMPORTED_MODULE_1__["ChangePassword"]
    },
    {
        path: ':id',
        component: _ChangePassword_component__WEBPACK_IMPORTED_MODULE_1__["ChangePassword"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=ChangePassword-ChangePassword-module.6d05bad98e1f15b0d038.js.map