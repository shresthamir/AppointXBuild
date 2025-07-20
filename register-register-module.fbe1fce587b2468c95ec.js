(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/pages/register/register.scss":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/pages/register/register.scss ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-main{display:flex;align-items:center;height:100%;width:100%;position:absolute}.auth-block{width:540px;margin:0 auto;border-radius:5px;background:rgba(0,0,0,0.55);padding:32px}.auth-block h1{color:#fff;font-weight:300;margin-bottom:28px;text-align:center}.auth-block p{font-size:16px}.auth-block a{text-decoration:none;outline:none;transition:all 0.2s ease;color:#209e91}.auth-block a:hover{color:#1b867b}.auth-block .control-label{padding-top:11px;color:#fff}.auth-block .form-group{margin-bottom:12px}.auth-input{width:300px;margin-bottom:24px}.auth-input input{display:block;width:100%;border:none;font-size:16px;padding:4px 10px;outline:none}a.forgot-pass{display:block;text-align:right;margin-bottom:-20px;float:right;z-index:2;position:relative}.auth-link{display:block;font-size:16px;text-align:center;margin-bottom:33px}.auth-sep{margin-top:36px;margin-bottom:24px;line-height:20px;font-size:16px;text-align:center;display:block;position:relative}.auth-sep>span{display:table-cell;width:30%;white-space:nowrap;padding:0 24px;color:#fff}.auth-sep>span>span{margin-top:-12px;display:block}.auth-sep:before,.auth-sep:after{border-top:solid 1px #fff;content:\"\";height:1px;width:35%;display:table-cell}.al-share-auth{text-align:center}.al-share-auth .al-share{float:none;margin:0;padding:0;display:inline-block}.al-share-auth .al-share li{margin-left:24px}.al-share-auth .al-share li:first-child{margin-left:0}.al-share-auth .al-share li i{font-size:24px}.btn-auth{color:#fff !important}\n"

/***/ }),

/***/ "./node_modules/style-loader/index.js!./src/app/pages/register/register.scss":
/*!**************************************************************************!*\
  !*** ./node_modules/style-loader!./src/app/pages/register/register.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/raw-loader!../../../../node_modules/postcss-loader/lib??embedded!../../../../node_modules/sass-loader/dist/cjs.js??ref--10-2!./register.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/pages/register/register.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _theme_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/validators */ "./src/app/theme/validators/index.ts");
/* harmony import */ var style_loader_register_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! style-loader!./register.scss */ "./node_modules/style-loader/index.js!./src/app/pages/register/register.scss");
/* harmony import */ var style_loader_register_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(style_loader_register_scss__WEBPACK_IMPORTED_MODULE_4__);





var Register = /** @class */ (function () {
    function Register(fb) {
        this.submitted = false;
        this.form = fb.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _theme_validators__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"].validate])],
            'passwords': fb.group({
                'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])],
                'repeatPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])]
            }, { validator: _theme_validators__WEBPACK_IMPORTED_MODULE_3__["EqualPasswordsValidator"].validate('password', 'repeatPassword') })
        });
        this.name = this.form.controls['name'];
        this.email = this.form.controls['email'];
        this.passwords = this.form.controls['passwords'];
        this.password = this.passwords.controls['password'];
        this.repeatPassword = this.passwords.controls['repeatPassword'];
    }
    Register.prototype.onSubmit = function (values) {
        this.submitted = true;
        if (this.form.valid) {
            // your code goes here
            // console.log(values);
        }
    };
    Register = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'register',
            template: __webpack_require__(/*! ./register.html */ "./src/app/pages/register/register.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], Register);
    return Register;
}());



/***/ }),

/***/ "./src/app/pages/register/register.html":
/*!**********************************************!*\
  !*** ./src/app/pages/register/register.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-main\">\r\n  <div class=\"auth-block\">\r\n    <h1>Sign up to ng2-admin</h1>\r\n    <a routerLink=\"/login\" class=\"auth-link\">Already have an ng2-admin account? Sign in!</a>\r\n\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\">\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!name.valid && name.touched), 'has-success': (name.valid && name.touched)}\">\r\n        <label for=\"inputName3\" class=\"col-sm-2 control-label\">Name</label>\r\n\r\n        <div class=\"col-sm-10\">\r\n          <input [formControl]=\"name\" type=\"text\" class=\"form-control\" id=\"inputName3\" placeholder=\"Full Name\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!email.valid && email.touched), 'has-success': (email.valid && email.touched)}\">\r\n        <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\r\n\r\n        <div class=\"col-sm-10\">\r\n          <input [formControl]=\"email\" type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!password.valid && password.touched), 'has-success': (password.valid && password.touched)}\">\r\n        <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\r\n\r\n        <div class=\"col-sm-10\">\r\n          <input [formControl]=\"password\" type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!repeatPassword.valid && repeatPassword.touched), 'has-success': (repeatPassword.valid && repeatPassword.touched)}\">\r\n        <label for=\"inputPassword4\" class=\"col-sm-2 control-label\">Repeat</label>\r\n\r\n        <div class=\"col-sm-10\">\r\n          <input [formControl]=\"repeatPassword\" type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Repeat\">\r\n          <span *ngIf=\"!passwords.valid && (password.touched || repeatPassword.touched)\" class=\"help-block sub-little-text\">Passwords don't match.</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"offset-sm-2 col-sm-10\">\r\n          <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-default btn-auth\">Sign up</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n    <div class=\"auth-sep\"><span><span>or Sign up with one click</span></span></div>\r\n\r\n    <div class=\"al-share-auth\">\r\n      <ul class=\"al-share clearfix\">\r\n        <li><i class=\"socicon socicon-facebook\" title=\"Share on Facebook\"></i></li>\r\n        <li><i class=\"socicon socicon-twitter\" title=\"Share on Twitter\"></i></li>\r\n        <li><i class=\"socicon socicon-google\" title=\"Share on Google Plus\"></i></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _theme_nga_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/nga.module */ "./src/app/theme/nga.module.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _register_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.routing */ "./src/app/pages/register/register.routing.ts");







var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _theme_nga_module__WEBPACK_IMPORTED_MODULE_4__["NgaModule"],
                _register_routing__WEBPACK_IMPORTED_MODULE_6__["routing"]
            ],
            declarations: [
                _register_component__WEBPACK_IMPORTED_MODULE_5__["Register"]
            ]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/register/register.routing.ts ***!
  \****************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component */ "./src/app/pages/register/register.component.ts");


// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: _register_component__WEBPACK_IMPORTED_MODULE_1__["Register"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=register-register-module.fbe1fce587b2468c95ec.js.map