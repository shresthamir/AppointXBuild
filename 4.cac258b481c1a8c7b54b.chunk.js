webpackJsonp([4],{

/***/ 1148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", (function() { return RegisterModule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_component__ = __webpack_require__(1298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_routing__ = __webpack_require__(1334);






let RegisterModule = class RegisterModule {
};
RegisterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_5__register_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* Register */]
        ]
    })
], RegisterModule);



/***/ }),

/***/ 1298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Register; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_validators__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_style_loader_register_scss__ = __webpack_require__(1394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_style_loader_register_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_style_loader_register_scss__);




let Register = class Register {
    constructor(fb) {
        this.submitted = false;
        this.form = fb.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(4)])],
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__theme_validators__["a" /* EmailValidator */].validate])],
            'passwords': fb.group({
                'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(4)])],
                'repeatPassword': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(4)])]
            }, { validator: __WEBPACK_IMPORTED_MODULE_2__theme_validators__["b" /* EqualPasswordsValidator */].validate('password', 'repeatPassword') })
        });
        this.name = this.form.controls['name'];
        this.email = this.form.controls['email'];
        this.passwords = this.form.controls['passwords'];
        this.password = this.passwords.controls['password'];
        this.repeatPassword = this.passwords.controls['repeatPassword'];
    }
    onSubmit(values) {
        this.submitted = true;
        if (this.form.valid) {
            // your code goes here
            // console.log(values);
        }
    }
};
Register = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'register',
        template: __webpack_require__(1365),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
], Register);



/***/ }),

/***/ 1334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_component__ = __webpack_require__(1298);


// noinspection TypeScriptValidateTypes
const routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__register_component__["a" /* Register */]
    }
];
const routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
/* harmony export (immutable) */ __webpack_exports__["a"] = routing;



/***/ }),

/***/ 1342:
/***/ (function(module, exports) {

module.exports = ".auth-main{display:flex;align-items:center;height:100%;width:100%;position:absolute}.auth-block{width:540px;margin:0 auto;border-radius:5px;background:rgba(0,0,0,0.55);padding:32px}.auth-block h1{color:#fff;font-weight:300;margin-bottom:28px;text-align:center}.auth-block p{font-size:16px}.auth-block a{text-decoration:none;outline:none;transition:all 0.2s ease;color:#209e91}.auth-block a:hover{color:#1b867b}.auth-block .control-label{padding-top:11px;color:#fff}.auth-block .form-group{margin-bottom:12px}.auth-input{width:300px;margin-bottom:24px}.auth-input input{display:block;width:100%;border:none;font-size:16px;padding:4px 10px;outline:none}a.forgot-pass{display:block;text-align:right;margin-bottom:-20px;float:right;z-index:2;position:relative}.auth-link{display:block;font-size:16px;text-align:center;margin-bottom:33px}.auth-sep{margin-top:36px;margin-bottom:24px;line-height:20px;font-size:16px;text-align:center;display:block;position:relative}.auth-sep>span{display:table-cell;width:30%;white-space:nowrap;padding:0 24px;color:#fff}.auth-sep>span>span{margin-top:-12px;display:block}.auth-sep:before,.auth-sep:after{border-top:solid 1px #fff;content:\"\";height:1px;width:35%;display:table-cell}.al-share-auth{text-align:center}.al-share-auth .al-share{float:none;margin:0;padding:0;display:inline-block}.al-share-auth .al-share li{margin-left:24px}.al-share-auth .al-share li:first-child{margin-left:0}.al-share-auth .al-share li i{font-size:24px}.btn-auth{color:#fff !important}\n"

/***/ }),

/***/ 1365:
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-main\">\r\n  <div class=\"auth-block\">\r\n    <h1>Sign up to ng2-admin</h1>\r\n    <a routerLink=\"/login\" class=\"auth-link\">Already have an ng2-admin account? Sign in!</a>\r\n\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\">\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!name.valid && name.touched), 'has-success': (name.valid && name.touched)}\">\r\n        <label for=\"inputName3\" class=\"col-sm-2 control-label\">Name</label>\r\n\r\n        <div class=\"col-sm-10\">\r\n          <input [formControl]=\"name\" type=\"text\" class=\"form-control\" id=\"inputName3\" placeholder=\"Full Name\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!email.valid && email.touched), 'has-success': (email.valid && email.touched)}\">\r\n        <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\r\n\r\n        <div class=\"col-sm-10\">\r\n          <input [formControl]=\"email\" type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!password.valid && password.touched), 'has-success': (password.valid && password.touched)}\">\r\n        <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\r\n\r\n        <div class=\"col-sm-10\">\r\n          <input [formControl]=\"password\" type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!repeatPassword.valid && repeatPassword.touched), 'has-success': (repeatPassword.valid && repeatPassword.touched)}\">\r\n        <label for=\"inputPassword4\" class=\"col-sm-2 control-label\">Repeat</label>\r\n\r\n        <div class=\"col-sm-10\">\r\n          <input [formControl]=\"repeatPassword\" type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Repeat\">\r\n          <span *ngIf=\"!passwords.valid && (password.touched || repeatPassword.touched)\" class=\"help-block sub-little-text\">Passwords don't match.</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"offset-sm-2 col-sm-10\">\r\n          <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-default btn-auth\">Sign up</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n    <div class=\"auth-sep\"><span><span>or Sign up with one click</span></span></div>\r\n\r\n    <div class=\"al-share-auth\">\r\n      <ul class=\"al-share clearfix\">\r\n        <li><i class=\"socicon socicon-facebook\" title=\"Share on Facebook\"></i></li>\r\n        <li><i class=\"socicon socicon-twitter\" title=\"Share on Twitter\"></i></li>\r\n        <li><i class=\"socicon socicon-google\" title=\"Share on Google Plus\"></i></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 1394:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1342);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(29)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/raw-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./register.scss", (function() {
			var newContent = require("!!../../../../node_modules/raw-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./register.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		}));
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose((function() { update(); }));
}

/***/ })

});