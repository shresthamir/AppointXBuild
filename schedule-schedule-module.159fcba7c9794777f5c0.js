(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schedule-schedule-module"],{

/***/ "./node_modules/ng2-ckeditor/lib/ckeditor.component.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-ckeditor/lib/ckeditor.component.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Imports
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/**
 * CKEditor component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
 */
var CKEditorComponent = (function () {
    /**
     * Constructor
     */
    function CKEditorComponent(zone) {
        this.change = new core_1.EventEmitter();
        this.ready = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
        this.focus = new core_1.EventEmitter();
        this._value = '';
        this.zone = zone;
    }
    Object.defineProperty(CKEditorComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * On component destroy
     */
    CKEditorComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.instance) {
            setTimeout(function () {
                _this.instance.removeAllListeners();
                _this.instance.destroy();
                _this.instance = null;
            });
        }
    };
    /**
     * On component view init
     */
    CKEditorComponent.prototype.ngAfterViewInit = function () {
        // Configuration
        this.ckeditorInit(this.config || {});
    };
    /**
     * Value update process
     */
    CKEditorComponent.prototype.updateValue = function (value) {
        var _this = this;
        this.zone.run(function () {
            _this.value = value;
            _this.onChange(value);
            _this.onTouched();
            _this.change.emit(value);
        });
    };
    /**
     * CKEditor init
     */
    CKEditorComponent.prototype.ckeditorInit = function (config) {
        var _this = this;
        if (!CKEDITOR) {
            console.error('Please include CKEditor in your page');
            return;
        }
        // CKEditor replace textarea
        this.instance = CKEDITOR.replace(this.host.nativeElement, config);
        // Set initial value
        this.instance.setData(this.value);
        // listen for instanceReady event
        this.instance.on('instanceReady', function (evt) {
            // send the evt to the EventEmitter
            _this.ready.emit(evt);
        });
        // CKEditor change event
        this.instance.on('change', function () {
            _this.onTouched();
            var value = _this.instance.getData();
            // Debounce update
            if (_this.debounce) {
                if (_this.debounceTimeout)
                    clearTimeout(_this.debounceTimeout);
                _this.debounceTimeout = setTimeout(function () {
                    _this.updateValue(value);
                    _this.debounceTimeout = null;
                }, parseInt(_this.debounce));
            }
            else {
                _this.updateValue(value);
            }
        });
        // CKEditor blur event
        this.instance.on('blur', function (evt) {
            _this.blur.emit(evt);
        });
        // CKEditor focus event
        this.instance.on('focus', function (evt) {
            _this.focus.emit(evt);
        });
    };
    /**
     * Implements ControlValueAccessor
     */
    CKEditorComponent.prototype.writeValue = function (value) {
        this._value = value;
        if (this.instance)
            this.instance.setData(value);
    };
    CKEditorComponent.prototype.onChange = function (_) { };
    CKEditorComponent.prototype.onTouched = function () { };
    CKEditorComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    CKEditorComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    CKEditorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ckeditor',
                    providers: [
                        {
                            provide: forms_1.NG_VALUE_ACCESSOR,
                            useExisting: core_1.forwardRef(function () { return CKEditorComponent; }),
                            multi: true
                        }
                    ],
                    template: "<textarea #host></textarea>",
                },] },
    ];
    /** @nocollapse */
    CKEditorComponent.ctorParameters = [
        { type: core_1.NgZone, },
    ];
    CKEditorComponent.propDecorators = {
        'config': [{ type: core_1.Input },],
        'debounce': [{ type: core_1.Input },],
        'change': [{ type: core_1.Output },],
        'ready': [{ type: core_1.Output },],
        'blur': [{ type: core_1.Output },],
        'focus': [{ type: core_1.Output },],
        'host': [{ type: core_1.ViewChild, args: ['host',] },],
        'value': [{ type: core_1.Input },],
    };
    return CKEditorComponent;
}());
exports.CKEditorComponent = CKEditorComponent;
//# sourceMappingURL=ckeditor.component.js.map

/***/ }),

/***/ "./node_modules/ng2-ckeditor/lib/ckeditor.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/ng2-ckeditor/lib/ckeditor.module.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var ckeditor_component_1 = __webpack_require__(/*! ./ckeditor.component */ "./node_modules/ng2-ckeditor/lib/ckeditor.component.js");
/**
 * CKEditorModule
 */
var CKEditorModule = (function () {
    function CKEditorModule() {
    }
    CKEditorModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        ckeditor_component_1.CKEditorComponent,
                    ],
                    exports: [
                        ckeditor_component_1.CKEditorComponent,
                    ]
                },] },
    ];
    /** @nocollapse */
    CKEditorModule.ctorParameters = [];
    return CKEditorModule;
}());
exports.CKEditorModule = CKEditorModule;
//# sourceMappingURL=ckeditor.module.js.map

/***/ }),

/***/ "./node_modules/ng2-ckeditor/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/ng2-ckeditor/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ckeditor_module_1 = __webpack_require__(/*! ./ckeditor.module */ "./node_modules/ng2-ckeditor/lib/ckeditor.module.js");
exports.CKEditorModule = ckeditor_module_1.CKEditorModule;
var ckeditor_component_1 = __webpack_require__(/*! ./ckeditor.component */ "./node_modules/ng2-ckeditor/lib/ckeditor.component.js");
exports.CKEditorComponent = ckeditor_component_1.CKEditorComponent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/style-loader/index.js!./src/app/pages/schedule/schedule.scss":
/*!**************************************************************************!*\
  !*** ./node_modules/style-loader!./src/app/pages/schedule/schedule.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/raw-loader!../../../../node_modules/postcss-loader/lib??embedded!../../../../node_modules/sass-loader/dist/cjs.js??ref--10-2!./schedule.scss */ "./src/app/pages/schedule/schedule.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./src/app/common/services/branch-setting.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/services/branch-setting.service.ts ***!
  \***********************************************************/
/*! exports provided: BranchSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchSettingService", function() { return BranchSettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BranchSettingService = /** @class */ (function () {
    function BranchSettingService() {
    }
    BranchSettingService.prototype.getBranchSettings = function () {
        return {
            enableCheckAll: true,
            text: 'Select Outlets',
            enableSearchFilter: true,
            labelKey: 'branchName',
            primaryKey: 'branchId',
            badgeShowLimit: 2
        };
    };
    BranchSettingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BranchSettingService);
    return BranchSettingService;
}());



/***/ }),

/***/ "./src/app/pages/schedule/components/AppointmentRequest/RequestList.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/schedule/components/AppointmentRequest/RequestList.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n   <div class=\"row\">\r\n    <div class=\"col-12 col-md-6 col-lg-4\">\r\n      <angular2-multiselect style=\"width: 100%;\" [data]=\"userBranches\" [settings]=\"branchSetting\"\r\n        [(ngModel)]=\"selectedBranch\" (ngModelChange)=\"branchChanged()\" aria-label=\"Select branches\">\r\n      </angular2-multiselect>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <ba-card title=\"Requests List\"  baCardClass=\"with-scroll\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\"></ng2-smart-table>\r\n    </ba-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>          \r\n        </button>\r\n        <h4 class=\"modal-title\">Information</h4>\r\n      </div>\r\n\r\n      <div class=\"modal-body\">\r\n        <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n        {{DialogMessage}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Once you delete the Treatment you can't recover it back. Are U sure you want to delete this Treatment?\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n        <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=\"deleteModal.hide()\">Cancel</button>\r\n      </div>!\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/schedule/components/AppointmentRequest/RequestList.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/schedule/components/AppointmentRequest/RequestList.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AppointmentRequestList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentRequestList", function() { return AppointmentRequestList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var style_loader_masters_components_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! style-loader!../../../masters/components/smartTables.scss */ "./node_modules/style-loader/index.js!./src/app/pages/masters/components/smartTables.scss");
/* harmony import */ var style_loader_masters_components_smartTables_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(style_loader_masters_components_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../global.state */ "./src/app/global.state.ts");
/* harmony import */ var _theme_pipes_label_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../theme/pipes/label.pipe */ "./src/app/theme/pipes/label.pipe.ts");
/* harmony import */ var _common_services_branch_setting_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/services/branch-setting.service */ "./src/app/common/services/branch-setting.service.ts");











var AppointmentRequestList = /** @class */ (function () {
    function AppointmentRequestList(service, _authService, router, state, labelPipe, branchSettingService) {
        var _this = this;
        this.service = service;
        this._authService = _authService;
        this.router = router;
        this.state = state;
        this.labelPipe = labelPipe;
        this.branchSettingService = branchSettingService;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.userBranches = [];
        this.selectedBranch = [];
        this.settings = {
            mode: 'external',
            delete: null,
            view: null,
            columns: {
                customerName: {
                    title: this.state.getGlobalSetting("label-dictionary").filter(function (item) { return item.key === 'customer'; })[0].value,
                    type: 'string',
                },
                customerMobile: {
                    title: "Mobile No",
                    type: 'string'
                },
                appointmentDate: {
                    title: "Appointment On",
                    type: 'string'
                },
                serviceCount: {
                    title: "No. of Service",
                    type: 'string'
                },
                updatedAt: {
                    title: "Requested On",
                    type: 'string'
                }
            }
        };
        this.subcriptions = [];
        this.source = new _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["LocalDataSource"]();
        this.branchSetting = this.branchSettingService.getBranchSettings();
        this.userBranches = this._authService.getUserProfile().branches;
        this.selectedBranch.push(this.userBranches.find(function (x) { return x.branchId == _this._authService.getUserProfile().defaultBranch; }));
        this.branchChanged();
    }
    AppointmentRequestList.prototype.onEditClick = function (event) {
        this.router.navigate(["/pages/schedule/request-detail", { cartId: event.data.cartId, mode: "edit", returnUrl: this.router.url }]);
    };
    AppointmentRequestList.prototype.branchChanged = function () {
        var _this = this;
        var Clist = [];
        this.service.GetAppointmetRequests(this.selectedBranch.map(function (x) { return x.branchId; }))
            .subscribe(function (data) {
            Clist.push.apply(Clist, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data));
        }, function (Error) { return console.log(Error); }, function () {
            //console.log(Clist, "CLIST NG2")
            _this.source.load(Clist);
            console.log(_this.source);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], AppointmentRequestList.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], AppointmentRequestList.prototype, "deleteModal", void 0);
    AppointmentRequestList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'appointment-request-list',
            template: __webpack_require__(/*! ./RequestList.component.html */ "./src/app/pages/schedule/components/AppointmentRequest/RequestList.component.html"),
            providers: [],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"],
            _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _global_state__WEBPACK_IMPORTED_MODULE_8__["GlobalState"],
            _theme_pipes_label_pipe__WEBPACK_IMPORTED_MODULE_9__["LabelPipe"],
            _common_services_branch_setting_service__WEBPACK_IMPORTED_MODULE_10__["BranchSettingService"]])
    ], AppointmentRequestList);
    return AppointmentRequestList;
}());



/***/ }),

/***/ "./src/app/pages/schedule/components/AppointmentRequest/requestDetail.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/schedule/components/AppointmentRequest/requestDetail.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <ba-card>\r\n      <div style=\"height: 100%;\">\r\n        <fieldset style=\" border: none;padding: 0; margin: 0;\" [disabled]=\"disableScheduleInput\">\r\n          <div class=\"form-group\">\r\n            \r\n            <div class=\"row\">\r\n              <div class=\"form-group col-sm-12  col-md-3  col-lg-2 col-xxl-1\">\r\n                <label for=\"miti\">Miti</label>\r\n\r\n                <input type=\"text\" class=\"form-control disabledFont\" id=\"miti\" \r\n                  disabled [(ngModel)]=\"appRequest.miti\">\r\n              </div>\r\n              <div class=\"form-group col-sm-12  col-md-3  col-lg-2 col-xxl-1\">\r\n                <label for=\"date\">Date</label>\r\n                <span class=\"input-like\">{{appRequest.appointmentDate | date:'dd MMM yyyy'}}</span>\r\n              </div>\r\n\r\n              <div class=\"form-group col-sm-12  col-md-6 col-lg-4 col-xxl-3\">\r\n                <label for=\"outlet\">Outlet</label>\r\n                <input type=\"text\" class=\"form-control  disabledFont\" id=\"date\" \r\n                  disabled [(ngModel)]=\"appRequest.outlet.branchName\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"form-group\">\r\n            <table id=\"tblPatientInfo\">\r\n                <tr>\r\n                    <td>{{'customer' | labelPipe}} Name</td>\r\n                    <td>: {{appRequest.Customer.NAME}}</td>\r\n                    <td>Mobile No</td>\r\n                    <td>: {{appRequest.Customer.MOBILE}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Address</td>\r\n                    <td>: {{appRequest.Customer.ADDRESS}}</td>\r\n                    <td>{{'customer' | labelPipe}} Id</td>\r\n                    <td>: {{appRequest.Customer.PATIENT_ID}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Age</td>\r\n                    <td>: {{appRequest.Customer.Age}}</td>\r\n                    <td>Gender</td>\r\n                    <td>: {{appRequest.Customer.GENDER}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Membership</td>\r\n                    <td>: {{appRequest.Customer.Membership}}</td>\r\n                    <td>Email</td>\r\n                    <td style=\"width: 35%;\">: {{appRequest.Customer.EMAIL}}</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        </fieldset>\r\n      </div>          \r\n    </ba-card>\r\n      <ba-card title=\"Appointments\">\r\n        <div class=\"table-responsive mb-3\" style=\"height: 500px;\">\r\n          <table class=\"table align-items-center table-flush\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th scope=\"col\" style=\"width: 50px;\">S.No.</th>\r\n                <th scope=\"col\" style=\"width: 40%;\">Service</th>\r\n                <th scope=\"col\" style=\"width: 80px;\">PAX</th>\r\n                <th scope=\"col\" style=\"width: 20%;\">Appointment Time</th>\r\n                <th scope=\"col\" style=\"width: 20%;\">Therapist</th>\r\n                <th scope=\"col\" style=\"width: 20%;\">Room</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <ng-container *ngIf=\"appRequest.items && appRequest.items.length > 0\">\r\n                <tr\r\n                  *ngFor=\"let app of appRequest.items;let i=index;\">\r\n                  <td scope=\"row\">{{i+1}}</td>  \r\n                  <td class=\"text-capitalize\">{{app.serviceName}}</td>\r\n                  <td class=\"text-capitalize\">{{app.quantity}}</td>\r\n                  <td class=\"text-capitalize\">\r\n                    <div class=\"row\">\r\n                      <!-- Display selected time if not editing -->\r\n                      <span *ngIf=\"!app.editTime\" style=\"width: 90%; display: inline-block !important;\">{{ app.displayTime }}</span>\r\n                    \r\n                      <!-- Time selection UI -->\r\n                      <div *ngIf=\"app.editTime\" style=\"width: 90%; display: inline-block !important;\">\r\n                        <!-- Dropdown for pre-calculated available time blocks -->\r\n                        <select class=\"form-control\" [(ngModel)]=\"app.selectedTimeBlock\" (change)=\"onTimeBlockChange(app)\">\r\n                          <option *ngFor=\"let block of app.freeBlocks\" [ngValue]=\"block\">\r\n                            {{ block.Start }} - {{ block.End }}\r\n                          </option>\r\n                          <option value=\"custom\">Other...</option>\r\n                        </select>\r\n                    \r\n                        <!-- Manual time input, only shown if 'Other...' is selected -->\r\n                        <input *ngIf=\"app.selectedTimeBlock === 'custom'\" type=\"time\" class=\"form-control mt-1\"\r\n                               [(ngModel)]=\"app.appointmentTime\" />\r\n                      </div>\r\n                    \r\n                      <!-- Edit icon -->\r\n                      <i class=\"fa fa-pencil\" *ngIf=\"!app.editTime\" (click)=\"editTime(app)\"></i>\r\n                    \r\n                      <!-- Confirm icon -->\r\n                      <i class=\"fa fa-check\" *ngIf=\"app.editTime\" (click)=\"confirmTime(app)\"></i>\r\n                    </div>\r\n                  </td>\r\n                  <td class=\"text-capitalize\">\r\n                    <angular2-multiselect [data]=\"app.employeeList\" [settings]=\"app.empSetting\" [(ngModel)]=\"app.employee\">\r\n                    </angular2-multiselect>\r\n                  </td>\r\n                  <td class=\"text-capitalize\">                    \r\n                    <angular2-multiselect [data]=\"app.roomList\" [settings]=\"app.roomSetting\" [(ngModel)]=\"app.room\">\r\n                    </angular2-multiselect>\r\n                  </td>                  \r\n                </tr>\r\n              </ng-container>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </ba-card>   \r\n          \r\n            \r\n          \r\n        \r\n\r\n    <div *ngIf=\"showCancelConfirmation\" style=\"position: fixed; top: 18rem; left: 50%; transform: translateX(-50%); width: 500px; z-index: 1000; background: white; border: 1px solid #ccc; border-radius: 8px; padding: 20px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);\">\r\n      <h4 style=\"margin-bottom: 15px;\">Cancel Booking</h4>\r\n      <div class=\"form-group\">\r\n        <label for=\"cancelRemarks\">Remarks</label>\r\n        <textarea class=\"form-control\" id=\"cancelRemarks\" rows=\"4\" [(ngModel)]=\"cancelRemarks\" placeholder=\"Enter reason for cancellation\"></textarea>\r\n      </div>\r\n      <div class=\"mt-2 text-right\">\r\n        <button type=\"button\" class=\"btn btn-primary mr-2\" (click)=\"confirmCancel()\">Submit</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeCancelPopup()\">Close</button>\r\n      </div>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary mr-2\" (click)=\"SaveClickEvent()\">Approved</button>\r\n    <button type=\"button\" class=\"btn btn-danger mr-2\" (click)=\"onCancelBooking()\">Cancel Booking</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"DeleteConformation()\"\r\n      *ngIf=\"mode=='edit' && disableScheduleInput==false && scheduleInput.billableSchedule!=1\">Delete</button>\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onCancel()\">Back</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n\r\n        </button>\r\n        <h4 class=\"modal-title\">Information</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{DialogMessage}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/schedule/components/AppointmentRequest/requestDetail.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/schedule/components/AppointmentRequest/requestDetail.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AppointmentRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentRequest", function() { return AppointmentRequest; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _scheduleInput_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scheduleInput.service */ "./src/app/pages/schedule/scheduleInput.service.ts");
/* harmony import */ var style_loader_schedule_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! style-loader!../../schedule.scss */ "./node_modules/style-loader/index.js!./src/app/pages/schedule/schedule.scss");
/* harmony import */ var style_loader_schedule_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(style_loader_schedule_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _common_services_permission__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/services/permission */ "./src/app/common/services/permission/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_services_time_format_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/services/time-format.service */ "./src/app/common/services/time-format.service.ts");










var AppointmentRequest = /** @class */ (function () {
    function AppointmentRequest(router, masterService, scheduleService, activatedRoute, _authService, datePipe, timeFormatService) {
        this.router = router;
        this.masterService = masterService;
        this.scheduleService = scheduleService;
        this.activatedRoute = activatedRoute;
        this._authService = _authService;
        this.datePipe = datePipe;
        this.timeFormatService = timeFormatService;
        this.appRequest = {};
        this.DialogMessage = "Saving data please wait ...";
        this.mode = "";
        this.modeTitle = "";
        this.user = {};
        this.serviceList = [];
        this.roomList = [];
        this.cancelRemarks = '';
        this.employeeList = [];
        this.showCancelConfirmation = false;
        this.formatDates = [];
        this.userBranches = [];
        var today = new Date().toDateString();
        this.appRequest.outlet = {};
        this.appRequest.Customer = {};
        var setting = this._authService.getSetting();
        if (!!this.activatedRoute.snapshot.params["returnUrl"]) {
            this.returnUrl = this.activatedRoute.snapshot.params["returnUrl"];
        }
        else
            this.returnUrl = "/pages/schedule/mastersche";
        if (!!this.activatedRoute.snapshot.params["mode"]) {
            this.mode = this.activatedRoute.snapshot.params["mode"];
        }
    }
    Object.defineProperty(AppointmentRequest.prototype, "branchId", {
        get: function () {
            try {
                return this.appRequest.outlet.branchId;
            }
            catch (e) {
                console.error(e);
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    AppointmentRequest.prototype.getServices = function (branchId) {
        var _this = this;
        this.masterService.getServices(branchId).subscribe(function (services) {
            _this.serviceList = services;
            _this.appRequest.items.forEach(function (element) {
                element.service = _this.serviceList.filter(function (x) { return x.SERVICEID == element.serviceId; })[0] || {};
                element.empSetting = {
                    enableCheckAll: true,
                    text: 'Select Employees',
                    enableSearchFilter: true,
                    labelKey: "NAME",
                    primaryKey: "EMPLOYEEID",
                    limitSelection: element.quantity * element.service.noOfEmployees
                };
            });
        });
    };
    AppointmentRequest.prototype.ngAfterViewInit = function () {
    };
    AppointmentRequest.prototype.ngOnInit = function () {
        this.roomList = [];
        this.employeeList = [];
        var cartId = this.activatedRoute.snapshot.params['cartId'];
        this.getRequestDetail(cartId);
        var user = this._authService.getUserProfile();
        this.userBranches = user.branches;
    };
    AppointmentRequest.prototype.getRequestDetail = function (cartId) {
        var _this = this;
        this.masterService.GetAppointmetDetail(encodeURIComponent(cartId)).subscribe(function (data) {
            _this.appRequest = data;
            var formattedDate = _this.datePipe.transform(data.appointmentDate, "yyyy-MM-dd");
            console.log(formattedDate);
            _this.appRequest.miti = _this.masterService.toBSDate(formattedDate);
            _this.appRequest.items.forEach(function (element) {
                element.roomSetting = {
                    enableCheckAll: true,
                    text: 'Select Rooms',
                    enableSearchFilter: true,
                    labelKey: "ROOMNO",
                    primaryKey: "ROOMID",
                    limitSelection: element.quantity
                };
                _this.getEmployees(_this.branchId, _this.appRequest.appointmentDate, element);
                _this.getRooms(_this.branchId, _this.appRequest.appointmentDate, element);
            });
            _this.getServices(_this.branchId);
        }, function (error) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.showMessage;
                        return [4 /*yield*/, error.json()];
                    case 1:
                        _a.apply(this, [(_b.sent()).result, 3000]);
                        this.router.navigate([this.returnUrl]);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AppointmentRequest.prototype.getEmployees = function (branchId, appDate, service) {
        service.employeeList = [];
        this.masterService
            .getAvailableEmployees(branchId, service.serviceId, appDate, service.appointmentTime)
            .subscribe(function (response) {
            var _a;
            (_a = service.employeeList).push.apply(_a, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](response));
        });
    };
    AppointmentRequest.prototype.onCancelBooking = function () {
        this.showCancelConfirmation = true;
        this.cancelRemarks = '';
    };
    AppointmentRequest.prototype.closeCancelPopup = function () {
        this.showCancelConfirmation = false;
        this.cancelRemarks = '';
    };
    AppointmentRequest.prototype.confirmCancel = function () {
        if (!this.cancelRemarks.trim()) {
            this.showMessage('Please provide a reason for cancellation...');
            return;
        }
        this.showMessage("Canceling Appointment Request please wait.", -1);
        this.cancelAppointment();
    };
    AppointmentRequest.prototype.cancelAppointment = function () {
        var _this = this;
        this.masterService.RejectAppointment(this.appRequest.cartId, this.cancelRemarks).subscribe(function (response) {
            if (response.status === 'ok') {
                _this.showMessage("Request Cancelled Successfully.", 2000);
                setTimeout(function () {
                    _this.router.navigate([_this.returnUrl]);
                }, 1000);
            }
            else {
                _this.showMessage(response.result, 3000);
            }
        }, function (error) {
            alert(error);
        });
        this.showCancelConfirmation = false;
        this.cancelRemarks = '';
    };
    AppointmentRequest.prototype.getRooms = function (branchId, appDate, service) {
        service.roomList = [];
        this.masterService
            .getAvailableRooms(branchId, service.serviceId, appDate, service.appointmentTime)
            .subscribe(function (response) {
            var _a;
            (_a = service.roomList).push.apply(_a, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](response));
        });
    };
    AppointmentRequest.prototype.SaveClickEvent = function () {
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        this.onsubmit();
    };
    AppointmentRequest.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    AppointmentRequest.prototype.onsubmit = function () {
        var _this = this;
        try {
            var a = this.appRequest.items.map(function (item, index) { return Array(item.quantity)
                .fill(null)
                .map(function (_, i) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { index: i })); }); })
                .reduce(function (acc, curr) { return acc.concat(curr); }, []);
            var appointmentServices = a
                .map(function (s, index) {
                return {
                    EMPLOYEE: s.employee[s.index] || s.employee[0],
                    ROOM: s.room[s.index] || s.room[0],
                    SERVICE: s.service,
                    SNO: index,
                    PAX: s.quantity,
                    STARTTIME: s.appointmentTime,
                };
            });
            var body = {
                CUSTOMER: this.appRequest.Customer,
                branch: this.appRequest.outlet,
                DATE: this.appRequest.appointmentDate,
                GUID: this.appRequest.cartId,
                STATUS: 0,
                multipleServiceList: appointmentServices
            };
            this.masterService
                .postmaster("add", body, "/saveSchedule")
                .subscribe(function (data) {
                if (data.status == "ok") {
                    _this.masterService.ApproveAppointment(_this.appRequest.cartId, data.result).subscribe(function (appResponse) {
                        if (appResponse.status == "ok") {
                            _this.showMessage("Data Saved Successfully.", 1000);
                            _this.router.navigate([_this.returnUrl]);
                        }
                        else {
                            _this.showMessage(data.result);
                        }
                    }, function (error) { return alert(error); });
                }
                else {
                    _this.showMessage(data.result);
                }
            }, function (error) {
                alert(error);
            });
        }
        catch (e) {
            alert(e);
        }
    };
    AppointmentRequest.prototype.onCancel = function () {
        this.router.navigate([this.returnUrl]);
    };
    AppointmentRequest.prototype.showMessage = function (message, closeAfter) {
        var _this = this;
        if (closeAfter === void 0) { closeAfter = 3000; }
        this.DialogMessage = message;
        if (!this.childModal.isShown)
            this.childModal.show();
        if (closeAfter >= 0) {
            setTimeout(function () {
                _this.childModal.hide();
            }, closeAfter);
        }
    };
    AppointmentRequest.prototype.editTime = function (app) {
        this.scheduleService.getTimeSlotForService(this.appRequest.outlet.branchId, app.serviceId, this.appRequest.appointmentDate).subscribe(function (response) {
            if (response.status == "ok") {
                app.freeBlocks = response.result.map(function (x) { return x; });
                console.log('freeBlocks', app.freeBlocks);
            }
        });
        app.editTime = true;
    };
    AppointmentRequest.prototype.onTimeBlockChange = function (app) {
        if (app.selectedTimeBlock && typeof app.selectedTimeBlock === 'object' && 'empList' in app.selectedTimeBlock && 'roomList' in app.selectedTimeBlock) {
            var tBlock = app.selectedTimeBlock;
            app.employeeList = tBlock.empList;
            app.roomList = tBlock.roomList;
            app.displayTime = tBlock.Start;
            app.appointmentTime = this.timeFormatService.to24HourFormat(app.displayTime);
            app.editTime = false;
        }
    };
    AppointmentRequest.prototype.confirmTime = function (app) {
        if (app.selectedTimeBlock === "custom") {
            app.displayTime = this.timeFormatService.to12HourFormat(app.appointmentTime);
            this.getEmployees(this.branchId, this.appRequest.appointmentDate, app);
            this.getRooms(this.branchId, this.appRequest.appointmentDate, app);
        }
        app.editTime = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("childModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], AppointmentRequest.prototype, "childModal", void 0);
    AppointmentRequest = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "requestDetail",
            styles: [__webpack_require__(/*! ../../schedule.scss */ "./src/app/pages/schedule/schedule.scss")],
            template: __webpack_require__(/*! ./requestDetail.component.html */ "./src/app/pages/schedule/components/AppointmentRequest/requestDetail.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"],
            _scheduleInput_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleInputService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _common_services_permission__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _common_services_time_format_service__WEBPACK_IMPORTED_MODULE_9__["TimeFormatService"]])
    ], AppointmentRequest);
    return AppointmentRequest;
}());



/***/ }),

/***/ "./src/app/pages/schedule/components/CheckIn/checkIn.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/schedule/components/CheckIn/checkIn.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <ba-card>\r\n      <div style=\"height: 100%;\">\r\n        <fieldset style=\" border: none;padding: 0; margin: 0;\">\r\n          <div class=\"form-group\">\r\n            \r\n            <div class=\"row\">\r\n              <div class=\"form-group col-sm-12  col-md-3  col-lg-2 col-xxl-1\">\r\n                <label for=\"miti\">Miti</label>\r\n                <input type=\"text\" class=\"form-control disabledFont\" id=\"miti\" \r\n                  disabled [(ngModel)]=\"checkIn.miti\">\r\n              </div>\r\n              <div class=\"form-group col-sm-12  col-md-3  col-lg-2 col-xxl-1\">\r\n                <label for=\"date\">Date</label>\r\n                <input type=\"text\" class=\"form-control  disabledFont\" id=\"date\" \r\n                  disabled [(ngModel)]=\"checkIn.date\">\r\n              </div>\r\n\r\n              <div class=\"form-group col-sm-12  col-md-6 col-lg-4 col-xxl-3\">\r\n                <label for=\"outlet\">Outlet</label>\r\n                <select class=\"form-control\" id=\"outlet\" [(ngModel)] = \"checkIn.branch\"\r\n                (ngModelChange)=\"getServices(checkIn.branch.branchId);GetAppointmentForCheckIn();\">\r\n                    <option *ngFor = \"let branch of userBranches\" [ngValue]=\"branch\">{{branch.branchName}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"form-group\" *ngIf=\"!enableCustomerSelect\">\r\n            <table id=\"tblPatientInfo\">\r\n              <tr>\r\n                <td>{{'customer' | labelPipe}} Name</td>\r\n                <td>: {{checkIn.CUSTOMER?.NAME}}</td>\r\n                <td>Mobile No</td>\r\n                <td>: {{checkIn.CUSTOMER?.MOBILE}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Address</td>\r\n                <td>: {{checkIn.CUSTOMER?.ADDRESS}}</td>\r\n                <td>{{'customer' | labelPipe}} Id</td>\r\n                <td>: {{checkIn.CUSTOMER?.PATIENT_ID}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Check In</td>\r\n                <td>: {{checkIn.checkInTime}}</td>\r\n                <td>Entry User</td>\r\n                <td>: {{checkIn.UserId}}</td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n\r\n          <customer-select (customerChanged)=\"customerChanged($event)\"\r\n            *ngIf=\"enableCustomerSelect\">\r\n          </customer-select>\r\n        </fieldset>\r\n      </div>          \r\n    </ba-card>\r\n      <ba-card title=\"Appointments\">\r\n        <div class=\"table-responsive mb-3\">\r\n          <table class=\"table align-items-center table-flush\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th scope=\"col\"></th>\r\n                <th scope=\"col\">S.No.</th>\r\n                <th scope=\"col\">Service</th>\r\n                <th scope=\"col\">Therapist</th>\r\n                <th scope=\"col\">Room</th>\r\n                <th scope=\"col\">Start Time</th>\r\n                <th scope=\"col\">End Time</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <ng-container *ngIf=\"appointments && appointments.length > 0\">\r\n                <tr\r\n                  *ngFor=\"let app of appointments;let i=index;\">\r\n                  <td scope=\"row\">{{i+1}}</td>\r\n                  <td><input type=\"checkbox\" [(ngModel)]=\"app.isChecked\"></td>     \r\n                  <td class=\"text-capitalize\">{{app.service.name}}</td>\r\n                  <td class=\"text-capitalize\">{{app.employee.name}}</td>\r\n                  <td class=\"text-capitalize\">{{app.room.name}}</td>\r\n                  <td class=\"text-capitalize\">{{app.startTime}}</td>\r\n                  <td class=\"text-capitalize\">{{app.endTime}}</td>                                \r\n                </tr>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"userList && (userList | searchData: filter).length === 0\">\r\n                <tr>\r\n                  <td colspan=\"8\">\r\n                    <div class=\"font-weight-bold\">User List is unavailable.</div>\r\n                  </td>\r\n                </tr>\r\n              </ng-container>\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </ba-card>\r\n\r\n      <ba-card title=\"Other Services\">\r\n        <div class=\"table-responsive mb-3\" style=\"height: 500px;\">\r\n          <table class=\"table align-items-center table-flush\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th scope=\"col\" style=\"width: 60px;\">S.No.</th>\r\n                <th scope=\"col\" style=\"width: 40%;\">Service</th>\r\n                <th scope=\"col\" style=\"width: 30%;\">Therapist</th>\r\n                <th scope=\"col\" style=\"width: 30%;\">Room</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <ng-container *ngIf=\"addOnServices && addOnServices.length > 0\">\r\n                <tr\r\n                  *ngFor=\"let addOnService of addOnServices;let i=index;\">\r\n                  <th scope=\"row\">{{i+1}}</th>\r\n                    <td class=\"text-capitalize\">\r\n                      <angular2-multiselect [data]=\"ServiceList\" [settings]=\"serviceSetting\" (ngModelChange)=\"serviceChangeEvent($event, i)\" [(ngModel)]=\"addOnService._\">\r\n                      </angular2-multiselect>\r\n                      <!-- <select class=\"form-control\" name=\"serviceselect\" id=\"serviceselect\" [(ngModel)]=\"addOnService.service\"\r\n                        (ngModelChange)=\"serviceChangeEvent(addOnService, i)\">\r\n                        <option *ngFor=\"let s of ServiceList\" [ngValue]=\"s\">{{s.DESCRIPTION}}</option>\r\n                      </select> -->\r\n                    </td>\r\n                    <td class=\"text-capitalize\">\r\n                      <select class=\"form-control\" name=\"employeeselect\" id=\"employeeselect\"\r\n                      [(ngModel)]=\"addOnService.employee\">\r\n                      <option *ngFor=\"let em of addOnService.employeeList\" [ngValue]=\"em\">{{em.NAME}}</option>\r\n                    </select>\r\n                    </td>\r\n                    <td class=\"text-capitalize\">\r\n                      <select class=\"form-control\" name=\"roomselect\" id=\"roomselect\" [(ngModel)]=\"addOnService.room\">\r\n                        <option *ngFor=\"let r of addOnService.roomList\" [ngValue]=\"r\">{{r.ROOMNO}}({{r.DESCRIPTION}})</option>\r\n                      </select>\r\n                    </td>\r\n                </tr>\r\n              </ng-container>\r\n              <ng-container>\r\n                <div class=\"col-12 col-md-2 control-buttons text-right\" style=\"margin-top: 5px;\">\r\n                  <img src=\"/assets/icon/add.svg\" alt=\"\" (click)=\"addNewRow()\">\r\n                </div>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"userList && (userList | searchData: filter).length === 0\">\r\n                <tr>\r\n                  <td colspan=\"8\">\r\n                    <div class=\"font-weight-bold\">User List is unavailable.</div>\r\n                  </td>\r\n                </tr>\r\n              </ng-container>\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </ba-card>\r\n          \r\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"SaveClickEvent()\"\r\n          [disabled]=\"(appointments.length==0 && addOnServices.length == 0) || checkIn.CUSTOMER==null\">Submit</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Back</button>\r\n      </div>\r\n    \r\n  \r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n\r\n        </button>\r\n        <h4 class=\"modal-title\">Information</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{DialogMessage}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/schedule/components/CheckIn/checkIn.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/schedule/components/CheckIn/checkIn.component.ts ***!
  \************************************************************************/
/*! exports provided: CheckIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckIn", function() { return CheckIn; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var style_loader_schedule_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! style-loader!../../schedule.scss */ "./node_modules/style-loader/index.js!./src/app/pages/schedule/schedule.scss");
/* harmony import */ var style_loader_schedule_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(style_loader_schedule_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _common_services_permission__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/services/permission */ "./src/app/common/services/permission/index.ts");
/* harmony import */ var _common_services_disable_date_picker_disable_date_picker_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/services/disable-date-picker/disable-date-picker.service */ "./src/app/common/services/disable-date-picker/disable-date-picker.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _kot_print_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./kot-print.component */ "./src/app/pages/schedule/components/CheckIn/kot-print.component.ts");










var CheckIn = /** @class */ (function () {
    function CheckIn(router, masterService, elementRef, activatedRoute, _authService, disableDateService, masterRepo, datePipe, printKot) {
        var _this = this;
        this.router = router;
        this.masterService = masterService;
        this.elementRef = elementRef;
        this.activatedRoute = activatedRoute;
        this._authService = _authService;
        this.disableDateService = disableDateService;
        this.masterRepo = masterRepo;
        this.datePipe = datePipe;
        this.printKot = printKot;
        //Check-In
        this.checkIn = {};
        //Check-In
        this.DialogMessage = "Saving data please wait ...";
        this.mode = "";
        this.customerId = "";
        this.modeTitle = "";
        this.subcriptions = [];
        this.user = {};
        this.SNO = 0;
        this.ServiceList = [];
        this.roomList = [];
        this.employeeList = [];
        this.bookedEmployee = {};
        this.formatDates = [];
        this.userBranches = [];
        this.addOnServices = [];
        this.appointments = [];
        this.serviceSetting = {};
        var today = new Date().toDateString();
        var dayjs = __webpack_require__(/*! ../../../../../assets/js/dayjs.min.js */ "./src/assets/js/dayjs.min.js");
        var formattedDate = dayjs(today).format("YYYY-MM-DD");
        this.checkIn.date = formattedDate;
        this.checkIn.miti = this.masterService.toBSDate(this.checkIn.date);
        var setting = this._authService.getSetting();
        if (!!this.activatedRoute.snapshot.params["returnUrl"]) {
            this.returnUrl = this.activatedRoute.snapshot.params["returnUrl"];
        }
        else
            this.returnUrl = "/pages/schedule/mastersche";
        if (!!this.activatedRoute.snapshot.params['customerId']) {
            this.customerId = this.activatedRoute.snapshot.params['customerId'];
        }
        this.router.events.subscribe(function (val) {
            var data = {
                GUID: _this.checkIn.GUID,
                SNO: 0,
            };
        });
        this.serviceSetting = {
            enableFilterSelectAll: false,
            text: "Select Service",
            enableSearchFilter: true,
            labelKey: "DESCRIPTION",
            primaryKey: "SERVICEID",
            singleSelection: true,
            showCheckbox: false,
        };
    }
    Object.defineProperty(CheckIn.prototype, "enableCustomerSelect", {
        get: function () {
            return this.customerId ? false : true;
        },
        enumerable: true,
        configurable: true
    });
    CheckIn.prototype.ngAfterViewInit = function () {
    };
    CheckIn.prototype.ngOnInit = function () {
        var _this = this;
        this.roomList = [];
        this.employeeList = [];
        this.ServiceList = [];
        var user = this._authService.getUserProfile();
        this.userBranches = user.branches;
        if (this.userBranches) {
            this.checkIn.branch = this.userBranches.find(function (x) { return x.branchId === user.defaultBranch; });
        }
        this.getServices(user.defaultBranch);
        if (!!this.customerId) {
            this.masterRepo.getCustomerById(this.customerId).subscribe(function (customer) {
                console.log(customer);
                _this.checkIn.CUSTOMER = customer;
                _this.GetAppointmentForCheckIn();
            });
        }
    };
    CheckIn.prototype.getServices = function (branchId) {
        var _this = this;
        this.masterService.getServices(branchId).subscribe(function (services) {
            _this.ServiceList = services;
        });
    };
    CheckIn.prototype.getEmployees = function (branchId, service, index) {
        var _this = this;
        this.masterService
            .getEmployeeListNew(branchId)
            .subscribe(function (branchEmp) {
            var serviceEmp = service.employees;
            _this.addOnServices[index].employeeList = branchEmp.filter(function (bEmp) {
                return serviceEmp.some(function (emp) { return bEmp.EMPLOYEEID == emp.id; });
            });
        });
    };
    CheckIn.prototype.getRooms = function (branchId, service, index) {
        var _this = this;
        this.masterService.getRoomListNew(branchId).subscribe(function (branchRoom) {
            var serviceRoom = service.rooms;
            _this.addOnServices[index].roomList = branchRoom.filter(function (bRoom) {
                return serviceRoom.some(function (room) { return bRoom.ROOMID == room.id; });
            });
        });
    };
    CheckIn.prototype.SaveClickEvent = function () {
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        this.onsubmit();
    };
    CheckIn.prototype.onsubmit = function () {
        var _this = this;
        try {
            var abc = [];
            abc = this.addOnServices.map(function (x) { return ({
                service: { id: x.service.SERVICEID, name: x.service.DESCRIPTION },
                room: x.room ? { id: x.room.ROOMID, name: x.room.ROOMNO } : null,
                employee: x.employee
                    ? { id: x.employee.EMPLOYEEID, name: x.employee.NAME }
                    : null,
            }); });
            this.checkIn.Services = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.appointments.filter(function (x) { return x.isChecked; }), abc);
            var sub = this.masterService
                .postmaster(this.mode, this.checkIn, "/saveCheckIn")
                .subscribe(function (data) {
                if (data.status == "ok") {
                    //Displaying dialog message for save with timer of 1 secs
                    _this.DialogMessage = "Data Saved Successfully";
                    _this.print();
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
            }, function (error) {
                alert(error);
            });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    CheckIn.prototype.onCancel = function () {
        this.router.navigate([this.returnUrl]);
    };
    CheckIn.prototype.customerChanged = function (e) {
        this.checkIn.CUSTOMER = e;
        this.GetAppointmentForCheckIn();
    };
    CheckIn.prototype.GetAppointmentForCheckIn = function () {
        var _this = this;
        if (!this.checkIn.CUSTOMER)
            return;
        var model = {
            CUSID: this.checkIn.CUSTOMER.CUSID,
            outletId: this.checkIn.branch.branchId,
            FDate: this.checkIn.date,
        };
        this.masterService.GetAppointmentForCheckIn(model).subscribe(function (response) {
            _this.appointments = response.result;
            if (response.status == "edit") {
                _this.mode = "edit";
                _this.checkIn.checkInId = response.RefNo;
                _this.appointments.forEach(function (appointment) { return appointment.isChecked = true; });
            }
        }, function (error) {
            var response = JSON.parse(error._body);
            _this.DialogMessage = response.result;
            _this.childModal.show();
            setTimeout(function () {
                _this.checkIn.CUSTOMER = null;
                _this.childModal.hide();
            }, 3000);
        });
    };
    CheckIn.prototype.addNewRow = function () {
        this.addOnServices.push({});
    };
    CheckIn.prototype.serviceChangeEvent = function (e, index) {
        this.addOnServices[index].service = e[0];
        var branchId = this.checkIn.branch.branchId;
        this.getEmployees(branchId, e[0], index);
        this.getRooms(branchId, e[0], index);
    };
    CheckIn.prototype.print = function () {
        var _this = this;
        console.log(this.checkIn);
        setTimeout(function () {
            _this.printKot.printKOT(_this.checkIn.CUSTOMER, _this.checkIn.Services);
        }, 1500);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("childEmployeeModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], CheckIn.prototype, "childEmployeeModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("childModal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], CheckIn.prototype, "childModal", void 0);
    CheckIn = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "checkIn",
            styles: [__webpack_require__(/*! ../../schedule.scss */ "./src/app/pages/schedule/schedule.scss")],
            template: __webpack_require__(/*! ./checkIn.component.html */ "./src/app/pages/schedule/components/CheckIn/checkIn.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_5__["MasterRepo"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _common_services_permission__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _common_services_disable_date_picker_disable_date_picker_service__WEBPACK_IMPORTED_MODULE_7__["DisableDateService"],
            _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_5__["MasterRepo"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _kot_print_component__WEBPACK_IMPORTED_MODULE_9__["KOTPrintComponent"]])
    ], CheckIn);
    return CheckIn;
}());



/***/ }),

/***/ "./src/app/pages/schedule/components/CheckIn/kot-print.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/schedule/components/CheckIn/kot-print.component.ts ***!
  \**************************************************************************/
/*! exports provided: KOTPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KOTPrintComponent", function() { return KOTPrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_pipes_label_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/pipes/label.pipe */ "./src/app/theme/pipes/label.pipe.ts");



var KOTPrintComponent = /** @class */ (function () {
    function KOTPrintComponent(labelPipe) {
        this.labelPipe = labelPipe;
        this.today = new Date();
        this.date = this.today.getFullYear() +
            "-" +
            (this.today.getMonth() + 1) +
            "-" +
            this.today.getDate();
        this.time = this.today.getHours() +
            ":" +
            this.today.getMinutes() +
            ":" +
            this.today.getSeconds();
        this.dateTime = this.date + " " + this.time;
    }
    KOTPrintComponent.prototype.printKOT = function (customer, services) {
        var _this = this;
        console.log("@@printTop");
        var popupWin;
        var tableData = "";
        services.forEach(function (service) {
            tableData += "<table style='font-size: 11px;font-family: Arial, Helvetica, sans-serif;\n              border-collapse: collapse;border-top: none;border-bottom: none;'>";
            var head = _this.head(customer, service.service.name, service.employee.name, service.room.id.toString(), service.startTime);
            tableData += head + "</table>";
        });
        popupWin = window.open("", "_blank", "top=0,left=0,height=50%,width=50%");
        if (popupWin.outerWidth < screen.availWidth ||
            popupWin.outerHeight < screen.availHeight) {
            popupWin.moveTo(0, 0);
            popupWin.resizeTo(screen.availWidth, screen.availHeight);
        }
        popupWin.document.write("<html> <head><title></title>\n          <style>\n          @media print\n          {\n            @page {\n                size: 80mm auto; /* Width x Height */\n                margin: 3mm; /* Adjust margins */\n             }\n            table { \n                page-break-after:always;\n                font-family:Arial,sans-serif;\n            }\n                \n          } \n          </style></head>\n      <body style='width: 300px;heignt:500px;' onload=\"window.print();window.close()\">\n      " + tableData + "\n      </body>\n      </html>");
        popupWin.document.close();
    };
    KOTPrintComponent.prototype.head = function (customer, service, employee, room, serviceTime) {
        var header = "";
        var customerLabel = this.labelPipe.transform("customer");
        var employeeLabel = this.labelPipe.transform("employee");
        //Reset arrayIndex for multiple calls
        header =
            header +
                ("\n        <div class=\"row\">\n            <h4 style=\"font-family: Arial, Helvetica, sans-serif;text-align:center\">Service Order Ticket</h4>\n        </div>\n        <div class=\"row\">\n            <p>Date: " + this.date + "</p>\n        </div>\n        <div class=\"row\">\n            <p>" + customerLabel + ": " + customer.NAME + "</p>\n        </div>\n        <div class=\"row\">\n            <p>Mobile : " + customer.MOBILE + "</p>\n        </div>\n        <div class=\"row\">\n            <p>Service : " + service + "</p>\n        </div>\n        <div class=\"row\">\n            <p>Time : " + serviceTime + "</p>\n        </div>\n         <div class=\"row\">\n            <p>Time : " + room + "</p>\n        </div>\n        <div class=\"row\">\n            <p>" + employeeLabel + " : " + employee + "</p>\n        </div>\n        <hr>\n        <style>\n            p{\n                font-size: 11px;\n                font-family: Arial, Helvetica, sans-serif;\n            }\n        </style>\n  ");
        return header;
    };
    KOTPrintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "kot-print",
            template: "<div id=\"print\"></div>",
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme_pipes_label_pipe__WEBPACK_IMPORTED_MODULE_2__["LabelPipe"]])
    ], KOTPrintComponent);
    return KOTPrintComponent;
}());



/***/ }),

/***/ "./src/app/pages/schedule/components/CheckOut/CheckInList.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/schedule/components/CheckOut/CheckInList.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-md-6 col-lg-4\">\r\n      <angular2-multiselect style=\"width: 100%;\" [data]=\"userBranches\" [settings]=\"branchSetting\"\r\n        [(ngModel)]=\"selectedBranch\" (ngModelChange)=\"branchChanged()\" aria-label=\"Select branches\">\r\n      </angular2-multiselect>\r\n    </div>\r\n  </div>\r\n  <div>\r\n  <div>\r\n    <ba-card title=\"Check - In List\" baCardClass=\"with-scroll\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\"></ng2-smart-table>\r\n    </ba-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>          \r\n        </button>\r\n        <h4 class=\"modal-title\">Information</h4>\r\n      </div>\r\n\r\n      <div class=\"modal-body\">\r\n        <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n        {{DialogMessage}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/schedule/components/CheckOut/CheckInList.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/schedule/components/CheckOut/CheckInList.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CheckInList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckInList", function() { return CheckInList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var style_loader_masters_components_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! style-loader!../../../masters/components/smartTables.scss */ "./node_modules/style-loader/index.js!./src/app/pages/masters/components/smartTables.scss");
/* harmony import */ var style_loader_masters_components_smartTables_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(style_loader_masters_components_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../global.state */ "./src/app/global.state.ts");
/* harmony import */ var _theme_pipes_label_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../theme/pipes/label.pipe */ "./src/app/theme/pipes/label.pipe.ts");
/* harmony import */ var _common_services_branch_setting_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/services/branch-setting.service */ "./src/app/common/services/branch-setting.service.ts");











var CheckInList = /** @class */ (function () {
    function CheckInList(service, _authService, router, state, labelPipe, branchSettingService) {
        var _this = this;
        this.service = service;
        this._authService = _authService;
        this.router = router;
        this.state = state;
        this.labelPipe = labelPipe;
        this.branchSettingService = branchSettingService;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.userBranches = [];
        this.selectedBranch = [];
        this.settings = {
            mode: 'external',
            delete: null,
            view: null,
            columns: {
                CUSTOMER: {
                    title: this.state.getGlobalSetting("label-dictionary").filter(function (item) { return item.key === 'customer'; })[0].value,
                    type: 'string',
                    valuePrepareFunction: function (CUSTOMER) {
                        return CUSTOMER.NAME;
                    },
                    filterFunction: function (Patient, search) {
                        if (search.length > 0) {
                            return Patient.NAME.toLowerCase().match(search.toLowerCase());
                        }
                        else {
                            return Patient.NAME;
                        }
                    }
                },
                time: {
                    title: "Checked-In On",
                    type: 'string'
                },
                userId: {
                    title: "Checked-In By",
                    type: 'string'
                }
            }
        };
        this.subcriptions = [];
        this.source = new _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["LocalDataSource"]();
        this.branchSetting = this.branchSettingService.getBranchSettings();
        this.userBranches = this._authService.getUserProfile().branches;
        this.selectedBranch.push(this.userBranches.find(function (x) { return x.branchId == _this._authService.getUserProfile().defaultBranch; }));
        this.branchChanged();
    }
    CheckInList.prototype.branchChanged = function () {
        var _this = this;
        var Clist = [];
        this.service.GetAllCheckIns(this.selectedBranch.map(function (x) { return x.branchId; }))
            .subscribe(function (data) {
            Clist.push.apply(Clist, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data));
        }, function (Error) { return console.log(Error); }, function () {
            //console.log(Clist, "CLIST NG2")
            _this.source.load(Clist);
            console.log(_this.source);
        });
    };
    CheckInList.prototype.onEditClick = function (event) {
        this.router.navigate(["/pages/schedule/checkOut", { id: event.data.checkInId, mode: "edit", returnUrl: this.router.url }]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], CheckInList.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], CheckInList.prototype, "deleteModal", void 0);
    CheckInList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'check-in-list',
            template: __webpack_require__(/*! ./CheckInList.component.html */ "./src/app/pages/schedule/components/CheckOut/CheckInList.component.html"),
            providers: [],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"],
            _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _global_state__WEBPACK_IMPORTED_MODULE_8__["GlobalState"],
            _theme_pipes_label_pipe__WEBPACK_IMPORTED_MODULE_9__["LabelPipe"],
            _common_services_branch_setting_service__WEBPACK_IMPORTED_MODULE_10__["BranchSettingService"]])
    ], CheckInList);
    return CheckInList;
}());



/***/ }),

/***/ "./src/app/pages/schedule/components/CheckOut/CheckOut.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/schedule/components/CheckOut/CheckOut.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div>\r\n        <ba-card title=\"{{'customer' | labelPipe}} Information\">\r\n            <div>\r\n                <div class=\"form-group\" *ngIf=\"IntegrateTreatmentWithAppointment || mode != 'add'\">\r\n                    <table id=\"tblPatientInfo\">\r\n                        <tr>\r\n                            <td>{{'customer' | labelPipe}} Name</td>\r\n                            <td>: {{model.CUSTOMER.NAME}}</td>\r\n                            <td>Mobile No</td>\r\n                            <td>: {{model.CUSTOMER.MOBILE}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Address</td>\r\n                            <td>: {{model.CUSTOMER.ADDRESS}}</td>\r\n                            <td>{{'customer' | labelPipe}} Id</td>\r\n                            <td>: {{model.CUSTOMER.PATIENT_ID}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Age</td>\r\n                            <td>: {{model.CUSTOMER.Age}}</td>\r\n                            <td>Gender</td>\r\n                            <td>: {{model.CUSTOMER.GENDER}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Membership</td>\r\n                            <td>: {{model.CUSTOMER.Membership}}</td>\r\n                            <td>Email</td>\r\n                            <td style=\"width: 35%;\">: {{model.CUSTOMER.EMAIL}}</td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <div *ngIf=\"!IntegrateTreatmentWithAppointment && mode == 'add'\">\r\n                    <customer-select (customerChanged)=\"customerChanged($event)\"\r\n                        (historyChange)=\"historyChange($event)\">\r\n                    </customer-select>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"employeeselect\" style=\"font-weight: 600;\">Staff</label>\r\n                        <div>\r\n                            <select class=\"form-control\" style=\"width: 200px;\" name=\"employeeselect\" id=\"employeeselect\"\r\n                                [(ngModel)]=\"model.Healer\">\r\n                                <option *ngFor=\"let em of employeeList\" [ngValue]=\"em\">{{em.NAME}}</option>\r\n                            </select>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ba-card>\r\n\r\n        <ba-card title=\"Service Details\">\r\n            <div class=\"table-responsive mb-3\">\r\n              <table class=\"table align-items-center table-flush\">\r\n                <thead class=\"thead-light\">\r\n                  <tr>\r\n                    <th scope=\"col\">S.No.</th>\r\n                    <th scope=\"col\">Service</th>\r\n                    <th scope=\"col\">Quanity</th>\r\n                    <th scope=\"col\">Rate</th>\r\n                    <th scope=\"col\">Amount</th>\r\n                    <th scope=\"col\">Discount</th>\r\n                    <th scope=\"col\">Vat</th>\r\n                    <th scope=\"col\">Gross Amount</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <ng-container *ngIf=\"model.Services && model.Services.length > 0\">\r\n                    <tr\r\n                      *ngFor=\"let app of model.Services;let i=index;\">\r\n                      <td scope=\"row\">{{i+1}}</td>\r\n                      <td class=\"text-capitalize\">{{app.service.name}}</td>\r\n                      <td class=\"text-capitalize\">{{app.quantity}}</td>\r\n                      <td class=\"text-capitalize\">{{app.rate | number: '1.2-2'}}</td>\r\n                      <td class=\"text-capitalize\">{{app.amount  | number: '1.2-2'}}</td>\r\n                      <td class=\"text-capitalize\">{{app.discount  | number: '1.2-2'}}</td>                                \r\n                      <td class=\"text-capitalize\">{{app.vat  | number: '1.2-2'}}</td>                                \r\n                      <td class=\"text-capitalize\">{{app.netAmount  | number: '1.2-2'}}</td>       \r\n                    </tr>\r\n                  </ng-container>\r\n    \r\n                  <ng-container *ngIf=\"userList && (userList | searchData: filter).length === 0\">\r\n                    <tr>\r\n                      <td colspan=\"8\">\r\n                        <div class=\"font-weight-bold\">User List is unavailable.</div>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-container>\r\n    \r\n                </tbody>\r\n                <tfoot class=\"tfoot-light\">\r\n                    <tr>\r\n                        <th scope=\"col\"></th>\r\n                        <th scope=\"col\">Totals</th>\r\n                        <th scope=\"col\">{{model.totalQty}}</th>\r\n                        <th scope=\"col\"></th>\r\n                        <th scope=\"col\">{{model.totAmnt | number: '1.2-2'}}</th>\r\n                        <th scope=\"col\">{{model.discount | number: '1.2-2'}}</th>\r\n                        <th scope=\"col\">{{model.vat | number: '1.2-2'}}</th>\r\n                        <th scope=\"col\">{{model.netAmnt | number: '1.2-2'}}</th>\r\n                      </tr>\r\n                </tfoot>\r\n              </table>\r\n            </div>\r\n          </ba-card>\r\n\r\n        \r\n\r\n        \r\n        \r\n\r\n        \r\n\r\n        <ba-card>\r\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"SaveClickEvent()\">Submit</button>\r\n            <!--<button type=\"button\" class=\"btn btn-danger\" (click)=\"DeleteConformation()\" *ngIf=\"mode=='edit'\">Delete\r\n            </button>\r\n            <button type=\"submit\" class=\"btn btn-primary\" *ngIf=\"mode!='add'\" (click)=\"printTreatmentEntry(model, true)\">Print</button>\r\n        -->\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Back</button>\r\n        </ba-card>\r\n\r\n       \r\n    </div>\r\n\r\n    <!-- END FORM -->\r\n\r\n    <div bsModal #childPreviewModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button class=\"close\" aria-label=\"Close\" (click)=\"childPreviewModal.hide()\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Treatment Documents</h4>\r\n                </div>\r\n                <button id=\"button\" class=\"btn btn-primary confirm-btn\" (click)=\"nextImage($event)\">Next</button>\r\n                <div id=\"container\" style=\"text-align: center;\">\r\n                    <img width=\"600px\" height=\"600px\" style=\"object-fit: contain;\" [src]=\"selectedImage\" id=\"image\"\r\n                        (click)=\"onImageClick($event)\" />\r\n                </div>\r\n\r\n                <div class=\"modal-footer\" style=\"text-align: center;\">\r\n                    <img *ngFor=\"let e of uploadFilesUrl\" height=\"80px\" width=\"80px\" style=\"object-fit: contain;\"\r\n                        src=\"{{e}}\" (click)=\"changeImage($event)\" />\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-sm\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Information</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    {{DialogMessage}}\r\n                </div>\r\n                <!--<div class=\"modal-footer\">\r\n                      <button class=\"btn btn-primary confirm-btn\" (click)=\"hideChildModal()\">Save changes</button>\r\n                      <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=onsubmit()>Save</button>\r\n                  </div>!-->\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-sm\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button class=\"close\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Warning</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    Once you delete the schedule you can't recover it back. Are U sure you want to delete this\r\n                    Schedule?\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n                    <button class=\"btn btn-primary confirm-btn\" type=\"button\"\r\n                        (click)=\"deleteModal.hide()\">Cancel</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/pages/schedule/components/CheckOut/CheckOut.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/schedule/components/CheckOut/CheckOut.component.ts ***!
  \**************************************************************************/
/*! exports provided: CheckOutEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutEntry", function() { return CheckOutEntry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var style_loader_schedule_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! style-loader!../../schedule.scss */ "./node_modules/style-loader/index.js!./src/app/pages/schedule/schedule.scss");
/* harmony import */ var style_loader_schedule_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(style_loader_schedule_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _common_services_permission__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/services/permission */ "./src/app/common/services/permission/index.ts");
/* harmony import */ var _CustomerSelect_customerSelect_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CustomerSelect/customerSelect.component */ "./src/app/pages/schedule/components/CustomerSelect/customerSelect.component.ts");








var CheckOutEntry = /** @class */ (function () {
    function CheckOutEntry(router, masterService, activatedRoute, _authService) {
        this.router = router;
        this.masterService = masterService;
        this.activatedRoute = activatedRoute;
        this._authService = _authService;
        this.DialogMessage = "Saving data please wait ...";
        this.mode = "";
        this.modeTitle = '';
        this.subcriptions = [];
        this.user = {};
        this.SNO = 0;
        this.model = {
            CUSTOMER: {},
            checkOutServices: []
        };
        var setting = this._authService.getSetting();
        if (!!this.activatedRoute.snapshot.params['returnUrl']) {
            this.returnUrl = this.activatedRoute.snapshot.params['returnUrl'];
        }
        if (!!this.activatedRoute.snapshot.params['mode']) {
            this.mode = this.activatedRoute.snapshot.params['mode'];
        }
    }
    CheckOutEntry.prototype.ngOnInit = function () {
        var _this = this;
        var sid = this.activatedRoute.snapshot.params['id'];
        if (this.mode != 'add') {
            this.masterService.postmaster(this.mode, { checkInId: sid }, "/GetDataForCheckOut").subscribe(function (data) {
                if (data.status == 'ok') {
                    if (data.result != null) {
                        _this.model = data.result;
                        _this.model.totalQty = _this.model.Services.reduce(function (a, b) { return a + b.quantity; }, 0);
                        _this.model.totAmnt = _this.model.Services.reduce(function (a, b) { return a + b.amount; }, 0);
                        _this.model.discount = _this.model.Services.reduce(function (a, b) { return a + b.discount; }, 0);
                        _this.model.vat = _this.model.Services.reduce(function (a, b) { return a + b.vat; }, 0);
                        _this.model.netAmnt = _this.model.Services.reduce(function (a, b) { return a + b.netAmount; }, 0);
                        _this.model.remarks = data.result.remarks;
                    }
                }
                else {
                    _this.DialogMessage = data.result;
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            }, function (error) { alert(error); });
        }
    };
    CheckOutEntry.prototype.SaveClickEvent = function () {
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        this.onsubmit();
    };
    CheckOutEntry.prototype.saveChildModal = function (replacementEmp) {
        this.DialogMessage = "Updating Data please wait...";
        this.childModal.show();
    };
    CheckOutEntry.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    CheckOutEntry.prototype.onsubmit = function () {
        var _this = this;
        try {
            var sub = this.masterService.postmaster('add', this.model, "/saveCheckOut")
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
    CheckOutEntry.prototype.onCancel = function () {
        var new_date = this.masterService.getDate();
        this.masterService.saveDate(new_date);
        this.router.navigate([this.returnUrl]);
    };
    CheckOutEntry.prototype.DeleteConformation = function () {
        this.deleteModal.show();
    };
    CheckOutEntry.prototype.DeleteEvent = function () {
        var _this = this;
        this.deleteModal.hide();
        this.DialogMessage = "Deleting this schedule please wait...";
        this.childModal.show();
        var sub = this.masterService.postmaster('delete', this.model, "/DeleteSchedule")
            .subscribe(function (data) {
            //console.log(data);
            if (data.status == 'ok') {
                _this.DialogMessage = "Delete Successfull...";
                _this.childModal.hide();
                _this.router.navigate([_this.returnUrl]);
            }
            else {
                _this.DialogMessage = data.result;
                setTimeout(function () {
                    _this.childModal.hide();
                }, 3000);
            }
        }, function (error) { alert(error); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childPreviewModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], CheckOutEntry.prototype, "childPreviewModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], CheckOutEntry.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], CheckOutEntry.prototype, "deleteModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_CustomerSelect_customerSelect_component__WEBPACK_IMPORTED_MODULE_7__["CustomerSelect"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _CustomerSelect_customerSelect_component__WEBPACK_IMPORTED_MODULE_7__["CustomerSelect"])
    ], CheckOutEntry.prototype, "CustomerSelect", void 0);
    CheckOutEntry = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'check-out',
            styles: [__webpack_require__(/*! ../../schedule.scss */ "./src/app/pages/schedule/schedule.scss")],
            template: __webpack_require__(/*! ./CheckOut.component.html */ "./src/app/pages/schedule/components/CheckOut/CheckOut.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_5__["MasterRepo"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _common_services_permission__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], CheckOutEntry);
    return CheckOutEntry;
}());



/***/ }),

/***/ "./src/app/pages/schedule/components/CustomerSelect/CustomerSelect.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/schedule/components/CustomerSelect/CustomerSelect.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style type=\"text/css\">\r\n  input{\r\n    margin-bottom: 2px;\r\n  }\r\n</style>\r\n<div class=\"form-group\">\r\n  <label for=\"customerEntry\" style=\"font-weight:600; font-size: 14px;cursor: pointer;\"\r\n    (click)=\"redirectToPatient()\">{{'customer' | labelPipe}}</label>\r\n  <button type=\"submit\" class=\"btn \" style=\"margin-left:20px;\" (click)=\"onAddNewCustomer()\">New</button>\r\n  <div class=\"row\" *ngIf=\"!CustomerEntryVisible\">\r\n    <div class=\"col-sm-12  col-md-3  col-lg-2 col-xxl-1\">\r\n      <input [(ngModel)]=\"barcode\" style=\"color:black\" type=\"text\" class=\"form-control \" name=\"cusBarcode\"\r\n        id=\"cusBarcode\" [readOnly]=\"mode=='edit'?true:false\" (input)=\"onBarcodeChange($event.target.value)\"\r\n        placeholder=\"Barcode\">\r\n    </div>\r\n\r\n    <div class=\"col-sm-12  col-md-3  col-lg-2 col-xxl-1\">\r\n      <input type=\"text\" (change)=\"mobileChange($event)\" id=\"customerSelectMobile\" list=\"mobileList\" (keyup)=\"mobile_keyup($event)\" [(ngModel)]=\"MobileInput\" class=\"form-control\" autocomplete=\"off\"       \r\n        placeholder=\"Mobile No\">\r\n\r\n      <div style=\"position: absolute; background-color: white; \">\r\n        <datalist *ngIf=\"CustomerList && CustomerList.length>0\" id=\"mobileList\">\r\n          <option *ngFor=\"let r of CustomerList\" [value]=\"r.MOBILE\">\r\n            {{r.NAME}} </option>\r\n        </datalist>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"col-sm-12  col-md-6  col-lg-4 col-xxl-3\">\r\n      <input type=\"text\" (change)=\"customerChange($event)\"  id=\"customerSelect\" list=\"customerList\" (keyup)=\"customer_keyup($event)\" [(ngModel)]=\"CustomerInput\" class=\"form-control\" autocomplete=\"off\"\r\n        placeholder=\"{{'customer' | labelPipe}} Name\">\r\n\r\n      <div style=\"position: absolute; background-color: white; \">\r\n        <datalist *ngIf=\"CustomerList && CustomerList.length>0\" id=\"customerList\" >\r\n          <option *ngFor=\"let r of CustomerList\" [value]=\"r.NAME\">\r\n            {{r.NAME}} </option>\r\n        </datalist>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\"  *ngIf=\"!CustomerEntryVisible\">\r\n    <table id=\"tblPatientInfo\" style=\"margin-left: 15px; margin-top: 10px;\">\r\n      <tr>\r\n          <td>Membership</td>\r\n          <td>: {{SelectedCustomer.Membership}}</td>\r\n          <td>Issued Date</td>\r\n          <td style=\"width: 35%;\">: {{SelectedCustomer.REGDATE | date:'dd MMM yyyy'}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Balance</td>\r\n        <td>: {{SelectedCustomer.balance}}</td>\r\n        <td>Expiry Date</td>\r\n        <td style=\"width: 35%;\">: {{SelectedCustomer.EXPDATE | date:'dd MMM yyyy'}}</td>\r\n    </tr>\r\n    </table>\r\n  </div>\r\n  \r\n</div>\r\n<div *ngIf=\"CustomerEntryVisible\" class=\"form-group\">\r\n  <fieldset style=\"  border: 1px solid #dcdcdc; padding:10px; margin: 0;\">\r\n    <form id=formId class=\"form-horizontal\" [formGroup]=\"customerForm\" (ngSubmit)=\"saveCustomer()\">\r\n      <div class=\"form-group row \" *ngIf=\"customerForm.contains('NAME')\">\r\n        <label for=\"name\" class=\"col-sm-2 form-control-label \">{{'customer' | labelPipe}} Name</label>\r\n        <div class=\"col-sm-6 \">\r\n          <input style=\"color:black\" type=\"text \" class=\"form-control \" name=\"name\" id=\"name\" formControlName=\"NAME\"\r\n            placeholder=\"Name \">\r\n          <div\r\n            *ngIf=\"customerForm.controls['NAME'].invalid && (isSubmitting || customerForm.controls['NAME'].dirty || customerForm.controls['NAME'].touched)\"\r\n            class=\"invalid-feedback d-block\">\r\n            <small *ngIf=\"customerForm.controls['NAME'].errors.required\">{{'customer' | labelPipe}} Name is required.</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row \" *ngIf=\"customerForm.contains('ADDRESS')\">\r\n        <label for=\"address\" class=\"col-sm-2 form-control-label \">Address</label>\r\n        <div class=\"col-sm-6 \">\r\n          <input style=\"color:black\" type=\"text \" class=\"form-control \" name=\"address\"\r\n            id=\"address\" placeholder=\"Address\" formControlName=\"ADDRESS\">\r\n          <div\r\n            *ngIf=\"customerForm.controls['ADDRESS'].invalid && (isSubmitting || customerForm.controls['ADDRESS'].dirty || customerForm.controls['ADDRESS'].touched)\"\r\n            class=\"invalid-feedback d-block\">\r\n            <small *ngIf=\"customerForm.controls['ADDRESS'].errors.required\">Address is required.</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\" *ngIf=\"customerForm.contains('Membership')\">\r\n        <label for=\"Membership\" class=\"col-sm-2 form-control-label\">Membership</label>\r\n        <div class=\"col-sm-6 \">\r\n          <select class=\"form-control\" placeholder=\"Select Membership\" formControlName=\"Membership\">\r\n            <option value=\"Gold\">Gold</option>\r\n            <option value=\"Silver\">Silver</option>\r\n            <option value=\"Platinum\">Platinum</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row \" *ngIf=\"customerForm.contains('MOBILE')\">\r\n        <label for=\"mobile\" class=\"col-sm-2 form-control-label \">Mobile</label>\r\n        <div class=\"col-sm-6 \">\r\n          <input style=\"color:black\" type=\"number\" (input)=\"onMobileChange($event)\" formControlName=\"MOBILE\"\r\n            class=\"form-control \" name=\"mobile\" id=\"mobile\" placeholder=\"Mobile No\">\r\n            <div\r\n                *ngIf=\"customerForm.controls['MOBILE'].invalid && (isSubmitting || customerForm.controls['MOBILE'].dirty || customerForm.controls['MOBILE'].touched)\"\r\n                class=\"invalid-feedback d-block\">\r\n                <small *ngIf=\"customerForm.controls['MOBILE'].errors.required\">Mobile is required.</small>\r\n            </div>\r\n        </div>\r\n      </div>   \r\n      <div class=\"form-group row\" *ngIf=\"customerForm.contains('DOB')\">\r\n        <label for=\"DOB\" class=\"col-sm-2 form-control-label\">DOB</label>\r\n        <div class=\"col-sm-6 \">\r\n          <input  (change)=\"changeDOB($event)\" style=\"color:black\" type=\"date\"\r\n            class=\"form-control \" name=\"DOB\" id=\"DOB\" placeholder=\"Date of Birth \" formControlName=\"DOB\">\r\n          <div\r\n            *ngIf=\"customerForm.controls['DOB'].invalid && (isSubmitting || customerForm.controls['DOB'].dirty || customerForm.controls['DOB'].touched)\"\r\n            class=\"invalid-feedback d-block\">\r\n            <small *ngIf=\"customerForm.controls['DOB'].errors.required\">Date of Birth is required.</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\" *ngIf=\"customerForm.contains('AGE')\">\r\n        <label for=\"gender\" class=\"col-sm-2 form-control-label\">Age</label>\r\n        <div class=\"col-sm-6 \">\r\n          <input style=\"color:black\" type=\"text \" class=\"form-control \" name=\"age\" id=\"age\"\r\n            placeholder=\"Age \" formControlName=\"AGE\">\r\n          <div\r\n            *ngIf=\"customerForm.controls['AGE'].invalid && (isSubmitting || customerForm.controls['AGE'].dirty || customerForm.controls['AGE'].touched)\"\r\n            class=\"invalid-feedback d-block\">\r\n            <small *ngIf=\"customerForm.controls['AGE'].errors.required\">Age is required.</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" *ngIf=\"customerForm.contains('GENDER')\">\r\n        <label for=\"gender\" class=\"col-sm-2 form-control-label\">Gender</label>\r\n        <div class=\"col-sm-6 \">\r\n          <select class=\"form-control\" [(ngModel)]=\"gender\" placeholder=\"Select Gender\" formControlName=\"GENDER\">\r\n            <option value=\"Male\">Male</option>\r\n            <option value=\"Female\">Female</option>\r\n            <option value=\"Others\">Others</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      \r\n      <div class=\"form-group row \" *ngIf=\"customerForm.contains('EMAIL')\">\r\n        <label for=\"email\" class=\"col-sm-2 form-control-label \">Email</label>\r\n        <div class=\"col-sm-6 \">\r\n          <input style=\"color:black\" type=\"email\" class=\"form-control \" name=\"email\"\r\n            id=\"email\" placeholder=\"Email Address\" formControlName=\"EMAIL\">\r\n          <div\r\n            *ngIf=\"customerForm.controls['EMAIL'].invalid && (isSubmitting || customerForm.controls['EMAIL'].dirty || customerForm.controls['EMAIL'].touched)\"\r\n            class=\"invalid-feedback d-block\">\r\n            <small *ngIf=\"customerForm.controls['EMAIL'].errors.required\">Email Address is required.</small>\r\n            <small *ngIf=\"customerForm.controls['EMAIL'].errors.pattern\">Invalid Email Address.</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      \r\n\r\n      <div class=\"form-group row \" *ngIf=\"customerForm.contains('PATIENT_ID')\">\r\n        <label for=\"patientid\" class=\"col-sm-2 form-control-label \">{{'customer' | labelPipe}} ID</label>\r\n        <div class=\"col-sm-6 \">\r\n          <input style=\"color:black\" type=\"text \" class=\"form-control \"\r\n            name=\"patientid\" id=\"patientid\" placeholder=\"{{'customer' | labelPipe}} ID\" formControlName=\"PATIENT_ID\">\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"form-group row \" *ngIf=\"customerForm.contains('Patient_Weight')\">\r\n        <label for=\"address\" class=\"col-sm-2 form-control-label \">{{'customer' | labelPipe}} Weight</label>\r\n        <div class=\"col-sm-6 \">\r\n          <input  style=\"color:black\" type=\"text \" class=\"form-control \" name=\"patientid\"\r\n            id=\"patientid\" placeholder=\"{{'customer' | labelPipe}} Weight\" formControlName=\"Patient_Weight\">\r\n        </div>\r\n        \r\n\r\n      </div>\r\n      <div class=\"form-group row \">\r\n        <button type=\"submit\" [disabled]=\"false\" class=\"btn btn-primary\" \r\n          style=\"margin-top:3px;margin-left: 10px;\">Save\r\n          {{'customer' | labelPipe}}</button>\r\n      </div>\r\n    </form>\r\n  </fieldset>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n\r\n        </button>\r\n        <h4 class=\"modal-title\">Information</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{DialogMessage}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/schedule/components/CustomerSelect/customerSelect.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/schedule/components/CustomerSelect/customerSelect.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CustomerSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerSelect", function() { return CustomerSelect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _common_services_permission__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/services/permission */ "./src/app/common/services/permission/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/services/common.service */ "./src/app/common/services/common.service.ts");








var CustomerSelect = /** @class */ (function () {
    function CustomerSelect(router, masterService, _authService, fb, common) {
        this.router = router;
        this.masterService = masterService;
        this._authService = _authService;
        this.fb = fb;
        this.common = common;
        this.DialogMessage = "Saving data please wait ...";
        this.subcriptions = [];
        this.CustomerList = [];
        this.mobileNo = "";
        this.name = "";
        this.SelectedCustomer = {};
        this.customerChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mobileChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ncw = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.historyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.timeout = null;
        this.isSubmitting = false;
        var setting = this._authService.getSetting();
        this.EnableCustomerEntryInAppointment = setting.EnableCustomerEntryInAppointment;
    }
    CustomerSelect.prototype.ngOnInit = function () {
        var _this = this;
        this.CustomerList = [];
        this.customerForm = this.fb.group({
            CUSID: [''],
            NAME: [""],
            ADDRESS: [''],
            TELNO: [''],
            MOBILE: [''],
            IMOBILE: [''],
            PANNO: [''],
            EMAIL: [''],
            DOB: [''],
            Age: [''],
            PATIENT_ID: [''],
            Patient_Weight: [''],
            MSTATUS: [''],
            GENDER: [''],
            OCCUPATION: [''],
            EMERGENCYCONTACTNAME: [''],
            EMERGENCYCONTACTNO: [''],
            REGDATE: [''],
            BARCODE: [''],
            Membership: ['']
        });
        this.masterService.getFormPreferences("CustomerEntryCompact").subscribe(function (result) {
            _this.common.setFormPreference(_this.customerForm, result.fields);
        });
    };
    CustomerSelect.prototype.getCustomerList = function (name, mobile) {
        var _this = this;
        var pageNumer = 1;
        var rowCount = 10;
        var totalPages = 1;
        this.CustomerList = [];
        this.masterService.getPagedCustomerList(pageNumer, rowCount, name, mobile).subscribe(function (data) {
            var _a;
            var customers = data.result;
            (_a = _this.CustomerList).push.apply(_a, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](customers));
        }, function (Error) {
            _this.masterService.handleWebError(Error);
        }, function () {
            _this.masterService._customerList = _this.CustomerList;
        });
    };
    CustomerSelect.prototype.customer_keyup = function (event) {
        if (!event.keyCode)
            return;
        clearTimeout(this.timeout);
        var $this = this;
        this.timeout = setTimeout(function () {
            $this.getCustomerList(event.target.value, null);
        }, 500);
    };
    CustomerSelect.prototype.mobile_keyup = function (event) {
        if (!event.keyCode)
            return;
        clearTimeout(this.timeout);
        var $this = this;
        this.timeout = setTimeout(function () {
            $this.getCustomerList(null, event.target.value);
        }, 500);
    };
    CustomerSelect.prototype.customerChange = function (event) {
        var customer = this.CustomerList.filter(function (x) { return event.target.value == x.NAME; })[0];
        if (customer) {
            this.MobileInput = customer.MOBILE;
            this.SelectedCustomer = customer;
            this.customerChanged.emit(customer);
        }
    };
    CustomerSelect.prototype.mobileChange = function (event) {
        var customer = this.CustomerList.filter(function (x) { return event.target.value == x.MOBILE; })[0];
        if (customer) {
            this.CustomerInput = customer.NAME;
            this.SelectedCustomer = customer;
            this.customerChanged.emit(customer);
        }
    };
    CustomerSelect.prototype.onAddNewCustomer = function () {
        if (this.EnableCustomerEntryInAppointment) {
            this.CustomerEntryVisible = true;
        }
        else {
            this.router.navigate(['/pages/masters/cus/detail-cus', { mode: "add", returnUrl: "/pages/schedule/scheInput" }]);
        }
    };
    CustomerSelect.prototype.redirectToPatient = function () {
        if (this.CustomerEntryVisible) {
            this.CustomerEntryVisible = false;
        }
    };
    CustomerSelect.prototype.saveCustomer = function () {
        var _this = this;
        try {
            if (!this.customerForm.valid) {
                this.isSubmitting = true;
                return;
            }
            this.DialogMessage = "Saving Data please wait...";
            this.childModal.show();
            var cus_1 = this.customerForm.value;
            //console.log("CUSTOMER DETAILS", cus);
            var sub = this.masterService.postmaster("add", cus_1, "/saveCustomer")
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    //Displaying dialog message for save with timer of 1 secs
                    _this.DialogMessage = "Data Saved Successfully";
                    _this.masterService.refreshCustomerList();
                    _this.ncw.emit(_this.common.getFormValue(_this.customerForm, "Patient_Weight"));
                    cus_1.CUSID = data.result.cusid;
                    _this.customerChanged.emit(cus_1);
                    var __this_1 = _this;
                    _this.CustomerInput = data.result.name;
                    _this.MobileInput = data.result.mobile;
                    setTimeout(function () {
                        __this_1.childModal.hide();
                        __this_1.CustomerEntryVisible = false;
                        __this_1.mobileNo = _this.common.getFormValue(_this.customerForm, "MOBILE");
                        __this_1.SelectedCustomer = __this_1.SelectedCustomer;
                        __this_1.CustomerList = __this_1.masterService._customerList;
                        __this_1.onSearchChange(__this_1.mobileNo);
                        _this.isSubmitting = false;
                    }, 1000);
                }
                else {
                    _this.DialogMessage = data.result;
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                }
            }, function (error) {
                alert(error);
            });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    CustomerSelect.prototype.changeDOB = function (event) {
        var dob = event.target.value;
        var birthDate = new Date(dob);
        //console.log("NEW CUSTOMER DOB", this.newcustomerDOB);
        var timeDiff = Math.abs(Date.now() - birthDate.getTime());
        var age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
        //console.log('AGE',age)
        this.customerForm.get("AGE").setValue(age);
    };
    CustomerSelect.prototype.onMobileChange = function (e) {
        if (e.target.value.length >= 10) {
            e.target.value = e.target.value.substring(0, 10);
        }
    };
    CustomerSelect.prototype.onSearchChange = function (searchValue) {
        var cus = this.CustomerList.find(function (x) { return x.MOBILE == searchValue; });
        //console.log("cus",cus);
        if (cus != null) {
            this.SelectedCustomer = cus;
            this.mobileNo = cus.MOBILE;
            this.customerChanged.emit(cus);
        }
        //console.log(this.SelectedCustomer)
    };
    CustomerSelect.prototype.onBarcodeChange = function (searchValue) {
        var cus = this.CustomerList.find(function (x) { return x.BARCODE == searchValue; });
        //console.log("barcode",cus);
        if (cus != null) {
            this.SelectedCustomer = cus;
            this.customerChanged.emit(cus);
        }
    };
    CustomerSelect.prototype.selectedCustomerChanged = function (e) {
        this.customerChanged.emit(this.SelectedCustomer);
        this.mobileNo = this.SelectedCustomer.MOBILE;
    };
    CustomerSelect.prototype.selectCustomer = function (event) {
        //console.log('EVENT', event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], CustomerSelect.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomerSelect.prototype, "customerChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomerSelect.prototype, "mobileChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomerSelect.prototype, "ncw", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomerSelect.prototype, "historyChange", void 0);
    CustomerSelect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'customer-select',
            styles: [__webpack_require__(/*! ../../schedule.scss */ "./src/app/pages/schedule/schedule.scss")],
            template: __webpack_require__(/*! ./CustomerSelect.html */ "./src/app/pages/schedule/components/CustomerSelect/CustomerSelect.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_4__["MasterRepo"], _common_services_permission__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _common_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]])
    ], CustomerSelect);
    return CustomerSelect;
}());



/***/ }),

/***/ "./src/app/pages/schedule/components/CustomerSelect/customerSelect.pipe.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/schedule/components/CustomerSelect/customerSelect.pipe.ts ***!
  \*********************************************************************************/
/*! exports provided: CustomerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPipe", function() { return CustomerPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerPipe = /** @class */ (function () {
    function CustomerPipe() {
    }
    CustomerPipe.prototype.transform = function (data, query) {
        if (data) {
            if (query.length) {
                return data.filter(function (item) {
                    var searchedQuery = query.replace(/[^A-Z0-9]/ig, '').toLowerCase();
                    var comId = (item.NAME) ? (item.NAME).replace(/[^A-Z0-9]/ig, '').toLowerCase() : '';
                    if (comId.indexOf(searchedQuery) !== -1) {
                        return item;
                    }
                });
            }
            else {
                return data;
            }
        }
    };
    CustomerPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'searchData', pure: false })
    ], CustomerPipe);
    return CustomerPipe;
}());



/***/ }),

/***/ "./src/app/pages/schedule/components/CustomerSelect/mobileSelect.pipe.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/schedule/components/CustomerSelect/mobileSelect.pipe.ts ***!
  \*******************************************************************************/
/*! exports provided: MobilePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobilePipe", function() { return MobilePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MobilePipe = /** @class */ (function () {
    function MobilePipe() {
    }
    MobilePipe.prototype.transform = function (data, query) {
        if (data) {
            if (query.length) {
                return data.filter(function (item) {
                    var searchedQuery = query.replace(/[^0-9]/ig, '').toLowerCase();
                    var comId = (item.MOBILE) ? (item.MOBILE).replace(/[^0-9]/ig, '').toLowerCase() : '';
                    if (comId.indexOf(searchedQuery) !== -1) {
                        return item;
                    }
                });
            }
            else {
                return data;
            }
        }
    };
    MobilePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'searchMobile', pure: false })
    ], MobilePipe);
    return MobilePipe;
}());



/***/ }),

/***/ "./src/app/pages/schedule/components/FollowUp/followup.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/schedule/components/FollowUp/followup.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n    <div class=\"row\">\r\n      <input type=\"date\" name=\"date\" id=\"date\" value=\"{{ScheduleDate}}\"\r\n            (change)=\"OnDateChangeEvent($event.target.value)\" />\r\n    </div>\r\n    <div class=\"row\">\r\n      <ba-card title=\"Customers\" baCardClass=\"with-scroll\">\r\n        <ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\r\n      </ba-card>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/pages/schedule/components/FollowUp/followup.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/schedule/components/FollowUp/followup.component.ts ***!
  \**************************************************************************/
/*! exports provided: FollowUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowUp", function() { return FollowUp; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var style_loader_masters_components_smartTables_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! style-loader!../../../masters/components/smartTables.scss */ "./node_modules/style-loader/index.js!./src/app/pages/masters/components/smartTables.scss");
/* harmony import */ var style_loader_masters_components_smartTables_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(style_loader_masters_components_smartTables_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var FollowUp = /** @class */ (function () {
    function FollowUp(service, _authService, router) {
        this.service = service;
        this._authService = _authService;
        this.router = router;
        this.settings = {
            columns: {
                PatientName: {
                    title: 'Patient',
                    type: 'string',
                    editable: false
                },
                Mobile: {
                    title: 'Mobile',
                    type: 'string',
                    editable: false
                },
                Staff: {
                    title: 'Staff',
                    type: 'string'
                },
                TreatmentDate: {
                    title: 'Treatment Date',
                    type: 'date',
                    editable: false
                },
                FollowupDate: {
                    title: 'Follow-Up Date',
                    type: 'string'
                },
                Time: {
                    title: 'Time',
                    type: 'string'
                },
            }
        };
        this.data = [];
        this.subcriptions = [];
        this.source = new _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["LocalDataSource"]();
        this.source.load(this.data);
    }
    FollowUp.prototype.OnDateChangeEvent = function (v) {
        var _this = this;
        this.data = [];
        this.service.getFollowUpList(v).subscribe(function (data) {
            _this.data.push(data);
        }, function (Error) { return console.log(Error); }, function () {
            //console.log(this.data)
            _this.source.load(_this.data);
        });
    };
    FollowUp.prototype.ngOnInit = function () {
        this.OnDateChangeEvent(new Date());
    };
    FollowUp = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'followup',
            template: __webpack_require__(/*! ./followup.component.html */ "./src/app/pages/schedule/components/FollowUp/followup.component.html"),
            providers: [],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_5__["MasterRepo"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], FollowUp);
    return FollowUp;
}());



/***/ }),

/***/ "./src/app/pages/schedule/components/ScheduleInput/TimelineContextMenu/timelineContextMenu.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/schedule/components/ScheduleInput/TimelineContextMenu/timelineContextMenu.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".context-menu {\r\n  position: fixed;\r\n  z-index: 1000;\r\n  background: white;\r\n  border: 1px solid #ccc;\r\n  list-style: none;\r\n  padding: 5px 0;\r\n  margin: 0;\r\n  width: 150px;\r\n  box-shadow: 0 2px 5px rgba(0,0,0,0.2);\r\n}\r\n\r\n.context-menu li {\r\n  padding: 8px 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n.context-menu li:hover {\r\n  background-color: #f0f0f0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/schedule/components/ScheduleInput/TimelineContextMenu/timelineContextMenu.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/schedule/components/ScheduleInput/TimelineContextMenu/timelineContextMenu.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul\r\n  *ngIf=\"contextMenuVisible\"\r\n  [style.left.px]=\"menuLeft\"\r\n  [style.top.px]=\"menuTop\"\r\n  class=\"context-menu\"\r\n  (click)=\"hideContextMenu()\"\r\n>\r\n  <li (click)=\"onMenuAction('Edit')\"><i class=\"fa fa-pencil\"></i> Edit</li>\r\n  <li (click)=\"onMenuAction('Check-In')\" *ngIf=\"canCheckIn\"><i class=\"fa fa-sign-in\"></i> Check-In</li>\r\n  <li (click)=\"onMenuAction('Check-Out')\" *ngIf=\"model.status == 1\"><i class=\"fa fa-sign-out\"></i> Check-Out</li>\r\n</ul>"

/***/ }),

/***/ "./src/app/pages/schedule/components/ScheduleInput/TimelineContextMenu/timelineContextMenu.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/schedule/components/ScheduleInput/TimelineContextMenu/timelineContextMenu.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: TimelineContextMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineContextMenuComponent", function() { return TimelineContextMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");



var TimelineContextMenuComponent = /** @class */ (function () {
    function TimelineContextMenuComponent(authService) {
        this.authService = authService;
        this.onAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contextMenuVisible = false;
        this.menuLeft = 0;
        this.menuTop = 0;
    }
    Object.defineProperty(TimelineContextMenuComponent.prototype, "canCheckIn", {
        get: function () {
            var date = new Date();
            var appDate = new Date(this.model.startDate);
            var dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            var appDateOnly = new Date(appDate.getFullYear(), appDate.getMonth(), appDate.getDate());
            var AllowCheckInBefore = this.authService.getSetting().AllowCheckInBefore;
            return dateOnly.getTime() == appDateOnly.getTime() && (appDate.getTime() - (AllowCheckInBefore * 60 * 1000)) < new Date().getTime();
        },
        enumerable: true,
        configurable: true
    });
    TimelineContextMenuComponent.prototype.showContextMenu = function (event, model) {
        event.preventDefault();
        this.contextMenuVisible = true;
        this.menuLeft = event.clientX;
        this.menuTop = event.clientY;
        this.model = model;
        console.log(event);
    };
    TimelineContextMenuComponent.prototype.onMenuAction = function (action) {
        console.log('Selected action:', action);
        this.hideContextMenu();
        this.onAction.emit({ action: action, model: this.model });
    };
    TimelineContextMenuComponent.prototype.hideContextMenu = function () {
        this.contextMenuVisible = false;
    };
    TimelineContextMenuComponent.prototype.onDocumentClick = function () {
        this.hideContextMenu();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimelineContextMenuComponent.prototype, "onAction", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TimelineContextMenuComponent.prototype, "onDocumentClick", null);
    TimelineContextMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'timeline-context-menu',
            template: __webpack_require__(/*! ./timelineContextMenu.component.html */ "./src/app/pages/schedule/components/ScheduleInput/TimelineContextMenu/timelineContextMenu.component.html"),
            styles: [__webpack_require__(/*! ./timelineContextMenu.component.css */ "./src/app/pages/schedule/components/ScheduleInput/TimelineContextMenu/timelineContextMenu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TimelineContextMenuComponent);
    return TimelineContextMenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/schedule/components/ScheduleInput/masterSchedule.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/schedule/components/ScheduleInput/masterSchedule.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MasterSchedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterSchedule", function() { return MasterSchedule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _scheduleInput_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scheduleInput.service */ "./src/app/pages/schedule/scheduleInput.service.ts");
/* harmony import */ var style_loader_schedule_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! style-loader!../../schedule.scss */ "./node_modules/style-loader/index.js!./src/app/pages/schedule/schedule.scss");
/* harmony import */ var style_loader_schedule_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(style_loader_schedule_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm5/ngx-export-as.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ScheduleSearch_customer_all_schedule_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ScheduleSearch/customer-all-schedule.component */ "./src/app/pages/schedule/components/ScheduleSearch/customer-all-schedule.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _TimelineContextMenu_timelineContextMenu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TimelineContextMenu/timelineContextMenu.component */ "./src/app/pages/schedule/components/ScheduleInput/TimelineContextMenu/timelineContextMenu.component.ts");
/* harmony import */ var _common_services_branch_setting_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../common/services/branch-setting.service */ "./src/app/common/services/branch-setting.service.ts");














var MasterSchedule = /** @class */ (function () {
    function MasterSchedule(_authService, exportAsService, router, scheduleService, masterRepo, datePipe, appService, branchSettingService) {
        var _this = this;
        this._authService = _authService;
        this.exportAsService = exportAsService;
        this.router = router;
        this.scheduleService = scheduleService;
        this.masterRepo = masterRepo;
        this.datePipe = datePipe;
        this.appService = appService;
        this.branchSettingService = branchSettingService;
        // @ViewChild("scheduler") scheduler: DayPilot.Angular.Scheduler;
        this.DialogMessage = "You are not authorized";
        this.minList = [];
        this.employeeList = [];
        this.startingTime = "12AM";
        this.closingTime = "12AM";
        this.noOfTimeHeaderInHour = 1;
        this.minuteCellWidth = 25;
        this.totalNoOfMinCell = 4;
        this.hourHeaderList = [];
        this.mList = [];
        this.ScheduleDate = new Date("2017-09-13");
        this.et = {};
        this.rt = {};
        this.roomList = [];
        this.DisplayRoomTimeLine = true;
        this.TimeLineBlock = 15;
        this.SectionPerHour = 4;
        this.DefaultTimeLineScroll = 2000;
        this.userBranches = [];
        this.selectedBranch = [];
        this.contextMenuVisible = false;
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'employeeSchedule'
        };
        this.branchSetting = this.branchSettingService.getBranchSettings();
        var setting = _authService.getSetting();
        this.DisplayRoomTimeLine = setting.DisplayRoomTimeLine;
        this.TimeLineBlock = setting.TimeLineBlock;
        this.minuteCellWidth = setting.TimeLineBlockWidth;
        this.IntegrateTreatmentWithAppointment = setting.IntegrateTreatmentWithAppointment;
        this.SectionPerHour = 60 / this.TimeLineBlock;
        this.DefaultTimeLineScroll = setting.DefaultTimeLineScroll;
        var st = parseInt(this.startingTime.slice(0, -2));
        var stp = this.startingTime.slice(-2);
        var ct = parseInt(this.closingTime.slice(0, -2));
        var ctp = this.closingTime.slice(-2);
        if (ctp.toUpperCase() == "PM") {
            ct = ct + 12;
        }
        if (stp.toUpperCase() == "PM") {
            st = st + 12;
        }
        if (st == 12 && stp.toUpperCase() == "AM") {
            st = 0;
        }
        if (ct == 12 && ctp.toUpperCase() == "AM") {
            ct = 24;
        }
        var starttime = st;
        var ap = stp.toUpperCase();
        for (var h = st; h < ct; h++) {
            var pred = "AM";
            if (h >= 12) {
                pred = "PM";
            }
            h;
            this.hourHeaderList.push((h > 12 ? (h - 12) : h == 0 ? 12 : h) + pred);
        }
        this.noOfTimeHeaderInHour = ct - st;
        this.totalNoOfMinCell = this.noOfTimeHeaderInHour * this.SectionPerHour;
        for (var j = 1; j <= this.noOfTimeHeaderInHour; j++) {
            if (starttime >= 12) {
                ap = "PM";
            }
            for (var i = 0; i < this.SectionPerHour; i++) {
                this.minList.push({ min: i * this.TimeLineBlock, booked: 0, startTime: starttime, minPart: i + 1, ampm: ap, colspan: 1 });
            }
            if (starttime == 12) {
                starttime = 0;
                ap = "PM";
            }
            starttime++;
        }
        this.userBranches = this._authService.getUserProfile().branches;
        this.selectedBranch.push(this.userBranches.find(function (x) { return x.branchId == _this._authService.getUserProfile().defaultBranch; }));
    }
    MasterSchedule.prototype.changeEntryDate = function (value, format) {
        if (format == "AD") {
            this.ScheduleDateBS = this.masterRepo.toBSDate(value);
            this.OnDateChangeEvent(value);
        }
        else if (format == "BS") {
            this.ScheduleDateAD = this.masterRepo.toADDate(value);
            this.OnDateChangeEvent(this.ScheduleDateAD);
        }
    };
    MasterSchedule.prototype.OnDateChangeEvent = function (v) {
        var _this = this;
        this.searchCustomer = '';
        this.ScheduleDate = v;
        this.employeeList = [];
        this.roomList = [];
        this.et = {};
        this.rt = {};
        this.scheduleService.getEmployeeSchedule({ FDate: v, branches: this.selectedBranch.map(function (x) { return x.branchId; }) }).subscribe(function (data) {
            if (data && data.length > 0) {
                _this.et = data[0];
                _this.emptimeTableMaker();
            }
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
        /*
        this.scheduleService.getRoomSchedule({ FDate: v , branchId : this.selectedBranch}).subscribe(data => {
          console.log(data, "room data");
          this.rt = data[0];
          //console.log("room",this.rt);
          //console.log("rt.DATE",this.rt.DATE)
    
          var rtNewDate = new Date(this.rt.DATE);
    
          this.rtFormat = this.datePipe.transform(rtNewDate, "yyyy-MM-dd");
          
          this.rtFormatNepali = this.masterRepo.toBSDate(this.rtFormat);
    
    
          this.roomtimeTableMaker();
          for (let r of this.rt.ROOMS) {
            let bt = r.BOOKEDTIMES;
            //console.log("before",r)
            r.BOOKEDTIMES = bt.sort((x, y) => new Date(x.STARTDATETIME).getTime() - new Date(y.STARTDATETIME).getTime())
    
            //console.log("after",r);
          }
    
        });
        */
        $('div#tblSchedule').scrollLeft(this.DefaultTimeLineScroll);
    };
    MasterSchedule.prototype.ngOnInit = function () {
        var _this = this;
        var date = new Date();
        this.ScheduleDateAD = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString().padStart(2, '0') + "-" + date.getDate().toString().padStart(2, '0');
        this.changeEntryDate(this.ScheduleDateAD, 'AD');
        this.appService.notification$.subscribe(function (data) {
            _this.OnDateChangeEvent(new Date());
        });
    };
    MasterSchedule.prototype.customerSearchChange = function (event) {
        this.childCustomerSchedule.showDialog();
    };
    MasterSchedule.prototype.roomCellClick = function (m) {
        //console.log(m);
    };
    MasterSchedule.prototype.ngAfterViewInit = function () {
        //$(' <script type="text/javascript" src="../../assets/js/jquery-ui.js"></script>').appendTo(document.body);
        $(" <script> (function() { var elem = document.createElement('input'); elem.setAttribute('type', 'date');if ( elem.type === 'text' ) {$('#date').datepicker(); }})();</script>").appendTo(document.body);
        $('div#tblSchedule').scrollLeft(this.DefaultTimeLineScroll);
    };
    MasterSchedule.prototype.roomtimeTableMaker = function () {
        var e_1, _a, e_2, _b;
        this.roomList = [];
        try {
            for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.rt.ROOMS), _d = _c.next(); !_d.done; _d = _c.next()) {
                var e = _d.value;
                this.mList = JSON.parse(JSON.stringify(this.minList));
                try {
                    for (var _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](e.BOOKEDTIMES), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var b = _f.value;
                        //console.log(b);
                        this.setBookedInCell(this.mList, b.STARTDATETIME, b.STARTTIME, b.ENDTIME, b.TIMEDURATION_IN_MIN, b.EMPLOYEE, b.SERVICE, b.customerId, b.CUSTOMER, b.SCHEDULEID, b.STATUS, b.checkInId);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                this.removeCellToSplice();
                this.roomList.push({ ID: e.ROOMID, NAME: e.ROOMNO, minList: this.mList });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MasterSchedule.prototype.emptimeTableMaker = function () {
        var e_3, _a, e_4, _b;
        var groupedMap = new Map();
        this.employeeList = [];
        try {
            for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.et.EMPLOYEES), _d = _c.next(); !_d.done; _d = _c.next()) {
                var e = _d.value;
                this.mList = JSON.parse(JSON.stringify(this.minList));
                try {
                    for (var _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](e.BOOKEDTIMES), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var b = _f.value;
                        this.setBookedInCell(this.mList, b.STARTDATETIME, b.STARTTIME, b.ENDTIME, b.TIMEDURATION_IN_MIN, b.ROOM, b.SERVICE, b.customerId, b.CUSTOMER, b.SCHEDULEID, b.STATUS, b.checkInId);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                this.removeCellToSplice();
                var empObj = {
                    ID: e.EMPLOYEEID,
                    NAME: e.EMPLOYEENAME,
                    minList: this.mList,
                };
                var branchName = e.branch.branchName;
                if (!groupedMap.has(branchName)) {
                    groupedMap.set(branchName, []);
                }
                groupedMap.get(branchName).push(empObj);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.employeeList = Array.from(groupedMap.entries()).map(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), branch = _b[0], employees = _b[1];
            return ({
                branch: branch,
                employees: employees
            });
        });
    };
    MasterSchedule.prototype.removeCellToSplice = function () {
        var i = this.mList.findIndex(function (x) { return x.cellToSplice == 1; });
        if (i > -1) {
            this.mList.splice(i, 1);
            this.removeCellToSplice();
        }
    };
    MasterSchedule.prototype.setBookedInCell = function (initialCellList, startDate, starttime, endtime, duration, room, service, customerId, customer, sid, status, checkInId) {
        var e_5, _a;
        var s = starttime.slice(0, -5);
        var ampm = starttime.slice(-2);
        var onlyMin = parseInt(starttime.slice(-4).slice(0, -2));
        //console.log({ sid: sid, Tstarttime: starttime, Tampm: ampm, starttime: s, ampm: ampm.toUpperCase(), onlyMin: onlyMin });
        if (ampm === "00")
            ampm = "AM";
        var noOfBLock = Math.ceil(duration / this.TimeLineBlock);
        //console.log({ noOfBLock: noOfBLock });
        var isBooked = 0;
        var skip = 0;
        try {
            for (var initialCellList_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](initialCellList), initialCellList_1_1 = initialCellList_1.next(); !initialCellList_1_1.done; initialCellList_1_1 = initialCellList_1.next()) {
                var t = initialCellList_1_1.value;
                //console.log({ sid:sid, Tstarttime: t.startTime, Tampm: t.ampm, starttime: s, ampm: ampm.toUpperCase(), onlyMin: onlyMin, minPart: t.minPart });
                if (t.startTime == s && t.ampm == ampm.toUpperCase()) {
                    if (Math.floor(onlyMin / this.TimeLineBlock) == t.minPart - 1) {
                        t.booked = 1;
                        isBooked = 1;
                        skip = 1;
                        if (t.colspan < noOfBLock) {
                            t.colspan = noOfBLock;
                        }
                        t.width = this.minuteCellWidth * noOfBLock + 'px';
                        if (t.appointments == null) {
                            t.appointments = [];
                        }
                        t.appointments.push({ room: room, service: service, customerId: customerId, customer: customer, startDate: startDate, time: starttime, sid: sid, status: status, checkInId: checkInId });
                    }
                }
                if (isBooked == 1 && noOfBLock > 0) {
                    if (skip == 1) {
                        skip = 0;
                    }
                    else {
                        t.booked = 1;
                        t.cellToSplice = 1;
                    }
                    noOfBLock = noOfBLock - 1;
                    if (noOfBLock == 0) {
                        isBooked = 0;
                    }
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (initialCellList_1_1 && !initialCellList_1_1.done && (_a = initialCellList_1.return)) _a.call(initialCellList_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return initialCellList;
    };
    MasterSchedule.prototype.onAddClick = function () {
        this.router.navigate(['/pages/schedule/scheInput', { mode: "add", returnUrl: this.router.url }]);
    };
    MasterSchedule.prototype.labelClickEvent = function (id) {
        this.router.navigate(['/pages/schedule/scheInput', { mode: "edit", id: id, returnUrl: this.router.url }]);
    };
    MasterSchedule.prototype.treatmentClickEvent = function (id) {
        this.router.navigate(['/pages/schedule/treatment', { mode: "", id: id, returnUrl: this.router.url }]);
    };
    MasterSchedule.prototype.showDetails = function () {
        this.childScheduleForMailModal.show();
    };
    MasterSchedule.prototype.sendEmail = function () {
        var Content = "\n          <html>              \n              <body >" + this.el.nativeElement.outerHTML + "\n              </body>\n          </html>";
        //console.log(Content);
        this.masterRepo.postmaster(this.ScheduleDate, Content, '/SendEmail').subscribe(function (data) {
            //console.log(data);
        });
        this.childScheduleForMailModal.hide();
    };
    MasterSchedule.prototype.downloadToPdf = function () {
        var pdf = new jsPDF();
        var options = {
            pagesplit: true,
            background: '#fff',
        };
        pdf.addHTML(document.getElementById("employeeSchedule"), 10, 10, options, function () {
            pdf.save("EmpSchedule.pdf");
        });
        // pdf.text(document.getElementById("employeeSchedule")
        // );
        // pdf.save("test.pdf")
        this.childScheduleForMailModal.hide();
    };
    MasterSchedule.prototype.downloadPDF = function () {
        this.exportAsService.save(this.exportAsConfig, 'EmpSchedule').subscribe(function () { });
    };
    MasterSchedule.prototype.getAppointmentBackground = function (ap) {
        switch (ap.status) {
            default:
                return "#4286f4";
            case 1:
                return "yellow";
            case 2:
                return "#9ef315";
            case 3:
                return "#d3d4d0";
            case 4:
                return "grey";
        }
    };
    MasterSchedule.prototype.getAppointmentTextColor = function (ap) {
        switch (ap.status) {
            default:
                return "white";
            case 1:
                return "black";
            case 2:
                return "black";
            case 3:
                return "black";
        }
    };
    MasterSchedule.prototype.showContextMenu = function (e, m) {
        this.contextMenu.showContextMenu(e, m);
    };
    MasterSchedule.prototype.onMenuAction = function (data) {
        var action = data.action;
        var model = data.model;
        console.log('Selected action:', action);
        console.log('Model :', model);
        this.contextMenu.hideContextMenu();
        // Handle the action based on the selected menu item
        switch (action) {
            case 'Edit':
                this.labelClickEvent(model.sid);
                break;
            case 'Check-In':
                this.router.navigate(["/pages/schedule/checkIn", { customerId: model.customerId, returnUrl: this.router.url }]);
                break;
            case 'Check-Out':
                this.router.navigate(["/pages/schedule/checkOut", { id: model.checkInId, mode: "edit", returnUrl: this.router.url }]);
                break;
            default:
                console.warn('Unknown action:', action);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ScheduleForMail'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], MasterSchedule.prototype, "childScheduleForMailModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('customerSchedule'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ScheduleSearch_customer_all_schedule_component__WEBPACK_IMPORTED_MODULE_10__["CustomerAllSchedule"])
    ], MasterSchedule.prototype, "childCustomerSchedule", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contextMenu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _TimelineContextMenu_timelineContextMenu_component__WEBPACK_IMPORTED_MODULE_12__["TimelineContextMenuComponent"])
    ], MasterSchedule.prototype, "contextMenu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('employeeEmailSchedule'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MasterSchedule.prototype, "el", void 0);
    MasterSchedule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'masterschedule',
            styles: [__webpack_require__(/*! ../../schedule.scss */ "./src/app/pages/schedule/schedule.scss")],
            template: __webpack_require__(/*! ./masterSchedule.html */ "./src/app/pages/schedule/components/ScheduleInput/masterSchedule.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_8__["ExportAsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _scheduleInput_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleInputService"],
            _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"],
            _app_service__WEBPACK_IMPORTED_MODULE_11__["AppState"],
            _common_services_branch_setting_service__WEBPACK_IMPORTED_MODULE_13__["BranchSettingService"]])
    ], MasterSchedule);
    return MasterSchedule;
}());



/***/ }),

/***/ "./src/app/pages/schedule/components/ScheduleInput/masterSchedule.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/schedule/components/ScheduleInput/masterSchedule.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"row\" style=\"width: 100%;\">\r\n        <div class=\"col-sm-4 col-md-4 col-xl-2 col-xxl-1\">\r\n            <button class=\"btn btn-primary\" style=\"margin-bottom: 5px;\" (click)=\"onAddClick()\">New\r\n                Appointment</button>\r\n        </div>\r\n        <div class=\"col-xs-6 col-sm-4 col-md-4  col-xl-2 col-xxl-1\">\r\n            <nepali-date-picker name=\"nepaliDateFrom\" [id]=\"'nepaliDatefrom'\"\r\n                (change)=\"changeEntryDate($event.detail.value,'BS')\" [label]=\"'yyyy-mm-dd'\"\r\n                [(ngModel)]=\"this.ScheduleDateBS\" >\r\n            </nepali-date-picker>\r\n        </div>\r\n        <div class=\"col-xs-6 col-sm-4 col-md-4  col-xl-2 col-xxl-1\">\r\n            <input type=\"date\" class=\"date-input form-control\" [(ngModel)]=\"this.ScheduleDateAD\"\r\n                (change)=\"changeEntryDate($event.target.value,'AD')\" style=\"max-width:150px; height: 35px;\">\r\n        </div>\r\n        <div class=\"col-md-12  col-xl-3 col-xxl-5\" style=\"display: flex;\">\r\n            <angular2-multiselect style=\"width: 100%;\" [data]=\"userBranches\" [settings]=\"branchSetting\" [(ngModel)]=\"selectedBranch\" (ngModelChange)=\"changeEntryDate(ScheduleDateAD,'AD')\">\r\n            </angular2-multiselect>\r\n        </div>\r\n        <div class=\"col-xs-6 col-sm-4 col-md-3  col-xl-2 col-xxl-1\">\r\n            <input #inputBox type=\"number\" name=\"searchCustomer\" id=\"searchCustomer\"\r\n                style=\"max-width: 150px;height:35px;align-self:self-start;\" [(ngModel)]=\"searchCustomer\"\r\n                (keydown.enter)=\"customerSearchChange($event)\" placeholder=\"Search Mobile\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"col-xs-6 col-sm-4 col-md-3  col-xl-1\">\r\n            <button class=\"btn btn-primary\" style=\"margin-bottom: 5px;\" (click)=\"showDetails()\">Details</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"dayWiseSchedule\">\r\n        <div style=\"height: 30px; line-height: 30px;  vertical-align: middle;  \">\r\n            {{ScheduleDate |date:'EEEE, MMMM d, y'}}\r\n        </div>\r\n\r\n        <div class=\"row\" id=\"tblSchedule\" style=\"min-height: 380px\">\r\n            <table style=\"height:fit-content;\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"headcol\"\r\n                            style=\"border: 1px solid #dcdcdc;font-size: 17px;font-weight:400;text-shadow: 0px 1px 2px;width:110px;height: 41px; text-align: center; line-height: 40px;margin-top: -1px;\">\r\n                            Employee\r\n                        </th>\r\n                        <th *ngFor=\"let h of hourHeaderList\" [attr.colspan]=\"SectionPerHour\"\r\n                            style=\" border: 1px solid #dcdcdc;height: 30px\">{{h}}</th>\r\n                    </tr>\r\n                    <tr style=\"height: 10px;\">\r\n                        <th></th>\r\n                        <th [style.max-width]=\"minuteCellWidth+'px'\" [style.min-width]=\"minuteCellWidth+'px'\"\r\n                            style=\"border: 1px solid #dcdcdc;\" *ngFor=\"let m of minList\">\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <ng-container *ngFor=\"let group of employeeList\">\r\n                    <tr style=\"height: 30px;\">\r\n                        <td class=\"branchHeader\" colspan=\"99\">\r\n                            {{group.branch}}\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let e of group.employees \" style=\"border: 1px solid #dcdcdc;\">\r\n                        <td class=\"headcol\"\r\n                            style=\"border: 1px solid #dcdcdc;font-size:11px;font-weight:bold; width:110px; vertical-align: middle; height: 57px; margin-top: -1px;\">\r\n                            {{e.NAME}}\r\n                        </td>\r\n                        <td id=\"tdDataCont\" (click)=\"roomCellClick(e)\" *ngFor=\"let a of e.minList\"\r\n                            [attr.colspan]=\"a.colspan\" [style.max-width]=\"minuteCellWidth+'px'\"\r\n                            [style.min-width]=\"minuteCellWidth+'px'\">\r\n                            <div *ngFor=\"let m of a.appointments\" class=\"emptooltip\" (contextmenu)=\"showContextMenu($event, m)\">\r\n                                <div class=\"timeline\" [style.background] = \"getAppointmentBackground(m)\" \r\n                                [style.color]=\"getAppointmentTextColor(m)\" (click)=\"labelClickEvent(m.sid)\">\r\n                                    {{m.customer}}<br>{{m.service}}<br>{{m.room}}\r\n                                </div>\r\n                                <span *ngIf=\"IntegrateTreatmentWithAppointment\" class=\"tooltiptext\">\r\n                                    <table id=\"tooltipTable\">\r\n                                        <tr>\r\n                                            <td style=\"width: 100px\">\r\n                                                Patient</td>\r\n                                            <td style=\"font-weight: 600; width: 150px;\">\r\n                                                : {{m.customer}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td style=\"width: 100px\">\r\n                                                Service</td>\r\n                                            <td style=\"font-weight: 600; width: 150px;\">\r\n                                                : {{m.service}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td style=\"width: 100px\">\r\n                                                Time</td>\r\n                                            <td style=\"font-weight: 600; width: 150px;\">\r\n                                                : {{m.time}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td colspan=\"2\">\r\n                                                <button class=\"btn btn-primary\" style=\"width:100%\"\r\n                                                    (click)=\"treatmentClickEvent(m.sid)\">Treatment</button>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </table>\r\n                                </span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    </ng-container>\r\n                    \r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\" style=\"margin-top:50px;\" *ngIf=\"DisplayRoomTimeLine\">\r\n        <table id=\"dayWiseSchedule\">\r\n            <tr>\r\n                <td rowspan=\"3\"\r\n                    style=\"color: black;font-size: 17px;font-weight: bold;text-shadow: 0px 1px 2px;width:100px\">\r\n                    Rooms Schedule</td>\r\n                <td [attr.colspan]=\"totalNoOfMinCell\">{{ScheduleDate | date:'EEEE, MMMM d, y'}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td [attr.rowspan]=\"roomList.length+3\">\r\n                    <div id=\"tblSchedule\" style=\"width:1000px; overflow:scroll\">\r\n                        <table>\r\n                            <thead>\r\n                                <tr>\r\n                                    <th *ngFor=\"let h of hourHeaderList\" [attr.colspan]=\"SectionPerHour\"\r\n                                        style=\" border: 1px solid #dcdcdc; \">{{h}}</th>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th [style.max-width]=\"minuteCellWidth+'px'\"\r\n                                        [style.min-width]=\"minuteCellWidth+'px'\" style=\"border: 1px solid #dcdcdc;\"\r\n                                        *ngFor=\"let m of minList\"></th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let e of roomList\" style=\"border: 1px solid #dcdcdc;\">\r\n                                    <td [attr.colspan]=\"totalNoOfMinCell\">\r\n                                <tr>\r\n                                    <td id=\"tdDataCont\" (click)=\"roomCellClick(e)\" *ngFor=\"let m of e.minList\"\r\n                                        [attr.colspan]=\"m.colspan\" [style.max-width]=\"m.width\"\r\n                                        [style.min-width]=\"m.width\">\r\n                                        <label class=\"timeline\" *ngIf=\"m.booked==1\"\r\n                                            (click)=\"labelClickEvent(m.sid)\">{{m.room}}<br>{{m.service}}<br>{{m.customer}}</label>\r\n\r\n                                    </td>\r\n                                </tr>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    </td>\r\n    </tr>\r\n    <tr></tr>\r\n    <tr *ngFor=\"let e of roomList\" style=\"border: 1px solid #dcdcdc;\">\r\n        <td style=\"font-size:11px;font-weight:bold; height:52px\">{{e.ID}}({{e.NAME}})</td>\r\n    </tr>\r\n    <tr style=\"height:7px\">\r\n        <td>\r\n            <div style=\"height:5px\"></div>\r\n        </td>\r\n    </tr>\r\n    </table>\r\n</div>\r\n\r\n<!--<daypilot-scheduler [config]=\"config\" [events]=\"events\"  #scheduler></daypilot-scheduler>-->\r\n<!--<table>\r\n        <tr style=\"display: block; float: left;\">\r\n          <td rowspan=\"4\" colspan=\"4\" *ngFor=\"let h of hourHeaderList\" style=\" border: 1px solid #dcdcdc;display: block;height:100px\">{{h}}</td>\r\n        </tr>\r\n        <tr style=\"display: block; float: left;\">\r\n          <td *ngFor=\"let m of minList\" style=\" border: 1px solid #dcdcdc;display: block;height:25px;width:25px\"></td>\r\n        </tr>\r\n        <tr *ngFor=\"let e of employeeList\" style=\"display: block; float: left;\">\r\n\r\n          <td [attr.colspan]=\"totalNoOfMinCell\" style=\"display: block;\">\r\n            <tr style=\"display: block; float: left;margin-top:-2px\">\r\n              <td style=\"display: block;width:50px;height:25px\"  id=\"tdDataCont\" *ngFor=\"let m of e.minList\"  [style.max-height]=\"m.width\" [style.min-height]=\"m.width\"\r\n                (click)=\"CellClick(m)\">\r\n                <div ><label style=\"width:50px;background:brown\"  [style.height]=\"m.width\" *ngIf=\"m.booked==1\">{{m.room}}<br>{{m.service}}<br>{{m.customer}}</label></div>\r\n              </td>\r\n            </tr>\r\n          </td>\r\n        </tr>\r\n          <tr *ngFor=\"let e of roomList\" style=\"display: block; float: left;\">\r\n               <td [attr.colspan]=\"totalNoOfMinCell\" style=\"display: block;\">\r\n                    <tr style=\"display: block; float: left;margin-top:-2px\">\r\n                        <td style=\"display: block;width:50px;height:25px\" id=\"tdDataCont\" *ngFor=\"let m of e.minList\"  [style.max-height]=\"m.width\" [style.min-height]=\"m.width\">\r\n                            <div><label style=\"width:50px;background:brown\" *ngIf=\"m.booked==1\" [style.height]=\"m.width\">{{m.room}}{{m.service}}{{m.customer}}</label></div>\r\n                        </td>\r\n                    </tr>\r\n                </td>\r\n            </tr>\r\n\r\n      </table>-->\r\n\r\n\r\n</div>\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n\r\n                </button>\r\n                <h4 class=\"modal-title\">Information</h4>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n                <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n                {{DialogMessage}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" bsModal #scheduleInputModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\"\r\n    role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-md\">\r\n        <div #employeeEmailSchedule class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button class=\"close\" aria-label=\"Close\" (click)=\"scheduleInputModal.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n\r\n                </button>\r\n                <h4 class=\"modal-title\">Schedule:</h4>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"time\">Time</label>\r\n                    <!--<input type=\"input\" class=\"form-control\" id=\"time\" [(ngModel)]=\"scheduleInput.startTime\">-->\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #ScheduleForMail=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button class=\"close\" aria-label=\"Close\" (click)=\"ScheduleForMail.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n\r\n                </button>\r\n                <h4 class=\"modal-title\">Employee Schedule:</h4>\r\n            </div>\r\n\r\n            <div class=\"modal-body\" style=\"overflow: scroll;\">\r\n                <div class=\"row\" id=\"employeeSchedule\"\r\n                    style=\" background: white;margin-left:20px;padding-right: 5px;width:750px; height: 400px;\">\r\n                    <label style=\"width:100%;font-weight: bold;font-size: 16px;text-decoration: underline;\">Date :\r\n                        {{rtFormat}} AD, {{rtFormatNepali}} BS </label>\r\n\r\n                    <div *ngIf=\"!(rt && rt.ROOMS ) || rt.ROOMS.length === 0\">\r\n                        <h1 style=\"margin-left:100px; margin-top:50px;\"> NO SCHEDULE</h1>\r\n                    </div>                    \r\n                    <div *ngFor=\"let r of rt.ROOMS\" style=\"margin-bottom:25px\" class=\"row\">\r\n                        <label\r\n                            style=\"width:100%;font-weight: bold;font-size: 14px;text-decoration: underline;\">{{r.ROOMNO}}</label><br>\r\n                        <div style=\"width:10%;float:left;font-weight: bold;font-size: 12px;text-decoration: underline;\">\r\n                            Time </div>\r\n                        <div style=\"width:12%;float:left;font-weight: bold;font-size: 12px;text-decoration: underline;\">\r\n                            Service</div>\r\n                        <div style=\"width:12%;float:left;font-weight: bold;font-size: 12px;text-decoration: underline;\">\r\n                            Customer</div>\r\n                        <div style=\"width:11%;float:left;font-weight: bold;font-size: 12px;text-decoration: underline;\">\r\n                            Mobile</div>\r\n                        <div style=\"width:15%;float:left;font-weight: bold;font-size: 12px;text-decoration: underline;\">\r\n                            Employee</div>\r\n\r\n                        <div style=\"width:8%;float:left;font-weight: bold;font-size: 12px;text-decoration: underline;\">\r\n                            Fee</div>\r\n                        <div *ngFor=\"let t of r.BOOKEDTIMES\">\r\n                            <div style=\"clear:left\">\r\n                                <span style=\"width:10%;float:left;font-size: 12px;\">\r\n                                    {{t.STARTTIME}} &nbsp;&nbsp;</span>\r\n                                <span style=\"width:12%;float:left;font-size: 12px;\">{{t.SERVICE}}</span>\r\n                                <span style=\"width:12%;float:left;font-size: 12px;\">{{t.CUSTOMER}}</span>\r\n                                <span style=\"width:11%;float:left;font-size: 12px;\">{{t.MOBILE}}</span>\r\n                                <span style=\"width:15%;float:left;font-size: 12px;\">{{t.EMPLOYEE}}</span>\r\n                                <span *ngIf=\"t.TYPE!=null\"\r\n                                    style=\"width:8%;float:left;font-size: 12px;\">{{t.TYPE}}</span>\r\n                                <span *ngIf=\"t.TYPE==null\" style=\"width:8%;float:left;font-size: 12px;\">&nbsp;</span>\r\n                                <!-- <span\r\n                                    style=\"width:10%;float:left;font-size: 12px;color:blue;cursor: pointer; margin-left: 5px\"\r\n                                    (click)=\"labelClickEvent(t.SCHEDULEID)\">Details</span> -->\r\n                                <span class=\"target-light fa fa-ellipsis-h\"\r\n                                    style=\"width:10%;float:left;font-size: 12px;color:blue;cursor: pointer; margin-left: 5px\"\r\n                                    (click)=\"labelClickEvent(t.SCHEDULEID)\"></span>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-primary confirm-btn\" (click)=\"sendEmail()\">Send Mail</button>\r\n                <button class=\"btn btn-primary confirm-btn\" (click)=\"downloadPDF()\">Download PDF</button>\r\n                <button class=\"btn btn-primary confirm-btn\" type=\"button\"\r\n                    (click)=\"ScheduleForMail.hide()\">Cancel</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<customer-all-schedule [mobile]=\"searchCustomer\" [date]=\"ScheduleDate\" #customerSchedule></customer-all-schedule>\r\n\r\n<timeline-context-menu #contextMenu (onAction)=\"onMenuAction($event)\"></timeline-context-menu>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/schedule/components/ScheduleInput/schedule.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/schedule/components/ScheduleInput/schedule.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <ba-card title=\"Schedule Input\">\r\n      <div style=\"height: 100%;\">\r\n        <fieldset style=\" border: none;padding: 0; margin: 0;\" [disabled]=\"disableScheduleInput\">\r\n          <div class=\"form-group\" *ngIf=\"IntegrateTreatmentWithAppointment || mode != 'add'\">\r\n            <table id=\"tblPatientInfo\">\r\n              <tr>\r\n                <td>{{'customer' | labelPipe}} Name</td>\r\n                <td>: {{scheduleInput.CUSTOMER?.NAME}}</td>\r\n                <td>Mobile No</td>\r\n                <td>: {{scheduleInput.CUSTOMER?.MOBILE}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Address</td>\r\n                <td>: {{scheduleInput.CUSTOMER?.ADDRESS}}</td>\r\n                <td>{{'customer' | labelPipe}} Id</td>\r\n                <td>: {{scheduleInput.CUSTOMER?.PATIENT_ID}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Check In</td>\r\n                <td>: {{scheduleInput.checkInTime}}</td>\r\n                <td>Entry User</td>\r\n                <td>: {{scheduleInput.UserId}}</td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n          <customer-select (customerChanged)=\"customerChanged($event)\"\r\n            *ngIf=\"!IntegrateTreatmentWithAppointment && mode == 'add'\"></customer-select>\r\n\r\n          <div class=\"form-group\">\r\n            \r\n            <div class=\"row\">\r\n              <div class=\"form-group col-sm-12  col-md-3  col-lg-2 col-xxl-1\">\r\n                <label for=\"miti\">Miti</label>\r\n                <nepali-date-picker name=\"nepaliDateFrom\" [id]=\"'nepaliDatefrom'\"\r\n                  (change)=\"changeEntryDate($event.detail.value, 'BS')\" [label]=\"'yyyy-mm-dd'\"\r\n                  [(ngModel)]=\"ScheduleDateBS\">\r\n                </nepali-date-picker>\r\n              </div>\r\n              <div class=\"form-group col-sm-12  col-md-3  col-lg-2 col-xxl-1\">\r\n                <label for=\"date\">Date</label>\r\n                <input type=\"date\" class=\"form-control\" id=\"date\" \r\n                  [disabled]=\"multipleServiceList.length>0 || mode=='edit'\" [(ngModel)]=\"scheduleInput.DATE\"\r\n                  (change)=\"changeEntryDate($event.target.value, 'AD')\">\r\n              </div>\r\n\r\n              <div class=\"form-group col-sm-12  col-md-6 col-lg-4 col-xxl-3\">\r\n                <label for=\"outlet\">Outlet</label>\r\n                <select class=\"form-control\" id=\"outlet\" [(ngModel)] = \"scheduleInput.branch\"\r\n                (ngModelChange)=\"getServices(scheduleInput.branch.branchId)\">\r\n                    <option *ngFor = \"let branch of userBranches\" [ngValue]=\"branch\">{{branch.branchName}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n            \r\n          <div class=\"row\" *ngIf=\"mode=='edit' && !enableCheckIn\">\r\n            <div class=\"form-group col-md-4 col-xl-3\">\r\n              <label for=\"Status\">Status</label>\r\n              <select class=\"form-control\" name=\"Status\" id=\"Status\" [(ngModel)]=\"scheduleInput.STATUS\">\r\n                <option *ngFor=\"let s of statusList\" [ngValue]=\"s.status\">{{s.description}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\" border: 1px solid #dcdcdc;padding:10px;\" class=\"col-12 col-xxl-6\">\r\n            <fieldset style=\" border: none;padding: 0; margin: 0;\"\r\n              [disabled]=\"scheduleInput.DATE == null || scheduleInput.DATE == ''\">\r\n              <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                  <label for=\"sserviceselect\">Service</label>\r\n                  <angular2-multiselect [data]=\"ServiceList\" [settings]=\"serviceSetting\" (ngModelChange)=\"serviceChangeEvent($event)\" [(ngModel)]=\"selectedService\">\r\n                  </angular2-multiselect>\r\n                </div>\r\n                <div class=\"form-group col-md-2 col-lg-1\">\r\n                  <label for=\"pax\">Pax</label>\r\n                    <input  class=\"form-control\" name=\"pax\" id=\"pax\" (change)=\"paxChanged($event.target.value, multipleServiceObj.SERVICE.noOfEmployees)\" [(ngModel)]=\"multipleServiceObj.PAX\"/>\r\n                </div>\r\n                <div class=\"form-group col-lg-5 col-md-4\">\r\n                  <label for=\"employeeselect\" style=\"margin-left:10px\">Staff</label>\r\n                  <label style=\"width: 160px;font-size: 13px;margin-left:10px\">\r\n                    <input type=\"checkbox\" style=\"vertical-align: middle\"\r\n                      (change)=\"$event.target.checked?(multipleServiceObj.EMPLOYEE_BOOKED_BYCUSTOMER=1):(multipleServiceObj.EMPLOYEE_BOOKED_BYCUSTOMER=0)\"\r\n                      [checked]=\"multipleServiceObj.EMPLOYEE_BOOKED_BYCUSTOMER==1\"\r\n                      [disabled]=\"mode == 'edit' && multipleServiceObj.EMPLOYEE_BOOKED_BYCUSTOMER==1 && user.Role == 'user' && multipleServiceObj.SNO > 0\">\r\n                    Is Booked By {{'customer' | labelPipe}}\r\n                  </label>\r\n\r\n                  <angular2-multiselect [data]=\"employeeList\" [settings]=\"empSetting\" [(ngModel)]=\"multipleServiceObj.EMPLOYEE\">\r\n                  </angular2-multiselect>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                  <label for=\"roomselect\">Room</label>\r\n                  <angular2-multiselect [data]=\"roomList\" [settings]=\"roomSetting\" [(ngModel)]=\"multipleServiceObj.ROOM\">\r\n                  </angular2-multiselect>\r\n                </div>\r\n\r\n                <div class=\"form-group col-12 col-md-6\">\r\n                  <label for=\"roomselect\">Fee</label>\r\n                  <select class=\"form-control\" name=\"typeselect\" id=\"typeselect\" [(ngModel)]=\"multipleServiceObj.TYPE\"\r\n                    (ngModelChange)=\"TypeChange(multipleServiceObj.TYPE)\">\r\n                    <option Value=\"NotPaid\">NotPaid </option>\r\n                    <option Value=\"Paid\">Paid</option>\r\n                    <option Value=\"Free\">Free</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\" style=\"margin: 20px;\">\r\n                <button type=\"button\" *ngFor=\"let time of appTimeSlots\"\r\n                    class=\"btn btn-primary\" (click)=\"selectAppointmentTime(time)\" style=\"margin-right: 10px;\">{{time.time}}</button>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"form-group col-12 col-md-10 col-sm-10 col-xs-8\">\r\n                  <label for=\"time\">Time</label>\r\n                  <!--<input type=\"input\" class=\"form-control\" id=\"time\" [(ngModel)]=\"scheduleInput.startTime\">-->\r\n                  <div class=\"demo row\">\r\n                    <div class=\"col-12 col-md-5 col-sm-4 col-xs-3\">\r\n                      <input type=\"time\" class=\"form-control\" style=\"width: 150px;\"\r\n                        (change)=\"starttimeChange($event.target.value)\" [(ngModel)]=\"StartTime\" />\r\n                    </div>\r\n                    <div class=\"col-12 col-md-1 col-sm-1  col-xs-1\">\r\n                      <label style=\"margin: 10px;\">To</label>\r\n                    </div>\r\n                    <div class=\"col-12 col-md-5 col-sm-4  col-xs-3\">\r\n                      <input type=\"time\" class=\"form-control\" style=\"width: 150px;\" disabled [(ngModel)]=\"EndTime\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12 col-md-2 col-sm-2 col-xs-2\">\r\n                  <button type=\"button\"\r\n                    [disabled]=\"multipleServiceObj==null|| multipleServiceObj.SERVICE==null || multipleServiceObj.EMPLOYEE==null || multipleServiceObj.ROOM==null || scheduleInput.billableSchedule==1\"\r\n                    class=\"btn btn-primary\" (click)=\"AddClickEvent()\" style=\"margin-top:20px;\">Add</button>\r\n                </div>\r\n              </div>\r\n\r\n              <Table id=\"BlueHeaderResizableTable\" style=\"width:100%;max-height:300px\">\r\n                <thead>\r\n                  <tr>\r\n                    <th style=\"width:30px\">SN.</th>\r\n                    <th style=\"width:35%\">Service</th>\r\n                    <th style=\"width:35%\">Therapist</th>\r\n                    <th style=\"width:20%\">Room</th>\r\n                    <th style=\"width:10%\">Time</th>\r\n                    <th style=\"width:60px\"></th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody class=\"tabelRowWithAutoScroll\">\r\n                  <tr *ngFor=\"let ir of multipleServiceList;let i=index\" style=\"height:28px;font-size:small\">\r\n                    <td style=\"width:30px\">{{i+1}}</td>\r\n                    <td style=\"width:35%\">{{ir.SERVICE.DESCRIPTION}}</td>\r\n                    <td style=\"width:35%\">{{ir.EMPLOYEE.NAME}}</td>\r\n                    <td style=\"width:20%\">{{ir.ROOM.ROOMNO}}</td>\r\n                    <td style=\"width:10%\">{{ir.STARTTIME}}</td>\r\n                    <td>\r\n                      <button class=\"glyphicon glyphicon-edit\" (click)=\"editSchedule(i)\"\r\n                        [disabled]=\"scheduleInput.billableSchedule==1\"></button>\r\n                      <button class=\"glyphicon glyphicon-remove\" (click)=\"removeSchedule(ir.serviceGuid)\" style=\"float: right;\"\r\n                        [disabled]=\"(mode == 'edit' && ir.EMPLOYEE_BOOKED_BYCUSTOMER==1 && user.Role == 'user') || scheduleInput.billableSchedule==1\"></button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </Table>\r\n            </fieldset>\r\n          </div>\r\n        </fieldset>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\"\r\n          *ngIf=\"false && mode=='edit' && canBeBillable() && scheduleInput.billableSchedule!=1\" (click)=\"ProceedBill()\">\r\n          Proceed To Bill\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\"\r\n          *ngIf=\"mode=='edit' && canBeBillable() && scheduleInput.billableSchedule==1\" (click)=\"CancelBill()\">\r\n          Cancel Bill\r\n        </button>\r\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"SaveClickEvent()\"\r\n          [disabled]=\"multipleServiceList.length==0 || scheduleInput.CUSTOMER==null || scheduleInput.DATE==null ||disableScheduleInput || scheduleInput.billableSchedule==1\">Submit</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"DeleteConformation()\"\r\n          *ngIf=\"mode=='edit'&& disableScheduleInput==false && scheduleInput.billableSchedule!=1\">Delete</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Back</button>\r\n      </div>\r\n    </ba-card>\r\n  </div>\r\n</div>\r\n\r\n<div bsModal #childEmployeeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"childEmployeeModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <h4 class=\"modal-title\">Replace Therapist</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <label for=\"employeeselectForEdit\">Available Therapist</label>\r\n        <select class=\"form-control\" name=\"employeeselectForEdit\" id=\"employeeselectForEdit\"\r\n          [(ngModel)]=\"ReplacedEmployee\">\r\n          <option *ngFor=\"let em of replacementEmployeeList\" [ngValue]=\"em\">{{em.NAME}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary confirm-btn\" (click)=\"saveChildModal(ReplacedEmployee)\">Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n\r\n        </button>\r\n        <h4 class=\"modal-title\">Information</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{DialogMessage}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Once you delete the schedule you can't recover it back. Are U sure you want to delete this Schedule?\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n        <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=\"deleteModal.hide()\">Cancel</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/schedule/components/ScheduleInput/scheduleInput.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/schedule/components/ScheduleInput/scheduleInput.component.ts ***!
  \************************************************************************************/
/*! exports provided: ScheduleInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleInput", function() { return ScheduleInput; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _scheduleInput_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scheduleInput.service */ "./src/app/pages/schedule/scheduleInput.service.ts");
/* harmony import */ var style_loader_schedule_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! style-loader!../../schedule.scss */ "./node_modules/style-loader/index.js!./src/app/pages/schedule/schedule.scss");
/* harmony import */ var style_loader_schedule_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(style_loader_schedule_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _common_services_permission__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/services/permission */ "./src/app/common/services/permission/index.ts");
/* harmony import */ var _common_services_disable_date_picker_disable_date_picker_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/services/disable-date-picker/disable-date-picker.service */ "./src/app/common/services/disable-date-picker/disable-date-picker.service.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");











var ScheduleInput = /** @class */ (function () {
    function ScheduleInput(_scheduleInputService, router, masterService, elementRef, activatedRoute, _authService, disableDateService, masterRepo, datePipe) {
        this._scheduleInputService = _scheduleInputService;
        this.router = router;
        this.masterService = masterService;
        this.elementRef = elementRef;
        this.activatedRoute = activatedRoute;
        this._authService = _authService;
        this.disableDateService = disableDateService;
        this.masterRepo = masterRepo;
        this.datePipe = datePipe;
        this.DialogMessage = "Saving data please wait ...";
        this.mode = "";
        this.modeTitle = '';
        this.subcriptions = [];
        this.scheduleInput = {};
        this.employeeBookedTimes = {};
        this.roomBookedDetails = {};
        this.user = {};
        this.SNO = 0;
        this.CustomerList = [];
        this.ServiceList = [];
        this.roomList = [];
        this.employeeList = [];
        this.replacementEmployeeList = [];
        this.bookedEmployee = {};
        this.multipleServiceList = [];
        this.multipleServiceObj = {};
        this.disableScheduleInput = false;
        this.enableCheckIn = true;
        this.statusList = [];
        this.disabledDates = [];
        this.formatDates = [];
        this.userBranches = [];
        this.appTimeSlots = [];
        this.empSetting = {};
        this.serviceSetting = {};
        this.roomSetting = {};
        var setting = this._authService.getSetting();
        this.IntegrateTreatmentWithAppointment = setting.IntegrateTreatmentWithAppointment;
        if (!!this.activatedRoute.snapshot.params['returnUrl']) {
            this.returnUrl = this.activatedRoute.snapshot.params['returnUrl'];
        }
        if (!!this.activatedRoute.snapshot.params['mode']) {
            this.mode = this.activatedRoute.snapshot.params['mode'];
        }
        this.empSetting = {
            enableCheckAll: true,
            text: 'Select Employees',
            enableSearchFilter: true,
            labelKey: "NAME",
            primaryKey: "EMPLOYEEID",
            disabled: true
        };
        this.roomSetting = {
            enableCheckAll: true,
            text: 'Select Rooms',
            enableSearchFilter: true,
            labelKey: "ROOMNO",
            primaryKey: "ROOMID",
            disabled: true
        };
        this.serviceSetting = {
            enableFilterSelectAll: false,
            text: 'Select Service',
            enableSearchFilter: true,
            labelKey: "DESCRIPTION",
            primaryKey: "SERVICEID",
            singleSelection: true,
            showCheckbox: false,
            disabled: true
        };
        this.multipleServiceObj.PAX = 1;
        this.paxChanged(1, 1);
    }
    ScheduleInput.prototype.ngAfterViewInit = function () {
    };
    ScheduleInput.prototype.ngOnInit = function () {
        var _this = this;
        this.roomList = [];
        this.CustomerList = [];
        this.employeeList = [];
        this.ServiceList = [];
        var user = this._authService.getUserProfile();
        this.userBranches = user.branches;
        if (this.userBranches)
            this.scheduleInput.branch = this.userBranches.find(function (x) { return x.branchId === user.defaultBranch; });
        this.getServices(user.defaultBranch);
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
        this.user = this._scheduleInputService.getUser();
        if (this.mode == "edit") {
            var sid = this.activatedRoute.snapshot.params['id'];
            this.masterService.postmaster(this.mode, { sid: sid }, "/loadScheduleById").subscribe(function (data) {
                if (data.status == 'ok') {
                    _this.scheduleInput = data.result;
                    _this.scheduleInput.branch = _this.userBranches.find(function (x) { return x.branchId === _this.scheduleInput.branch.branchId; });
                    _this.scheduleInput.DATE = _this.scheduleInput.DATE.toString().substring(0, 10);
                    _this.multipleServiceList = _this.scheduleInput.multipleServiceList;
                    _this.getStatusList();
                    if (_this.scheduleInput.billableSchedule == 1) {
                        _this.disableScheduleInput = true;
                    }
                    else {
                        _this.disableScheduleInput = false;
                    }
                    //  this.DialogMessage = "Data Loaded Successfully."
                    setTimeout(function () {
                        //    this.childModal.hide();
                    }, 1000);
                }
                else {
                    _this.showMessage(data.result);
                }
            }, function (error) { alert(error); });
        }
        else {
            this._scheduleInputService.getGUID().subscribe(function (respose) {
                _this.scheduleInput.GUID = respose.guid;
            });
        }
    };
    ScheduleInput.prototype.ngOnDestroy = function () {
        this.subcriptions.forEach(function (sub) { return sub.unsubscribe(); });
        this.subcriptions = [];
        this.removeSchedule(null, false);
    };
    ScheduleInput.prototype.clearEmpRoom = function () {
        this.employeeList = [];
        this.roomList = [];
        this.multipleServiceObj.ROOM = undefined;
        this.multipleServiceObj.EMPLOYEE = undefined;
    };
    ScheduleInput.prototype.getServices = function (branchId) {
        var _this = this;
        this.masterService.getServices(branchId)
            .subscribe(function (services) {
            _this.ServiceList = services;
            _this.clearEmpRoom();
        });
    };
    ScheduleInput.prototype.getEmployees = function (branchId, service, sEmp) {
        var _this = this;
        if (sEmp === void 0) { sEmp = null; }
        this.masterService.getEmployeeListNew(branchId)
            .subscribe(function (response) {
            var branchEmp = response;
            var serviceEmp = service.employees;
            _this.employeeList = branchEmp.filter(function (bEmp) { return serviceEmp.some(function (emp) { return bEmp.EMPLOYEEID == emp.id; }); });
            if (sEmp) {
                _this.multipleServiceObj.EMPLOYEE = _this.employeeList.filter(function (x) { return sEmp.some(function (emp) { return x.EMPLOYEEID == emp; }); });
            }
        });
    };
    ScheduleInput.prototype.getRooms = function (branchId, service, sRoom) {
        var _this = this;
        if (sRoom === void 0) { sRoom = null; }
        this.masterService.getRoomListNew(branchId)
            .subscribe(function (response) {
            var branchRoom = response;
            var serviceRoom = service.rooms;
            _this.roomList = branchRoom.filter(function (bRoom) { return serviceRoom.some(function (room) { return bRoom.ROOMID == room.id; }); });
            if (sRoom) {
                _this.multipleServiceObj.ROOM = _this.roomList.filter(function (x) { return sRoom.some(function (room) { return x.ROOMID == room; }); });
            }
        });
    };
    ScheduleInput.prototype.changeEntryDate = function (value, format) {
        if (format == "AD") {
            this.ScheduleDateBS = this.masterService.toBSDate(value);
        }
        else if (format == "BS") {
            this.scheduleInput.DATE = this.masterService.toADDate(value);
        }
        this.checkHoliday(this.scheduleInput.DATE, 0, "00:00", "00:00");
        this.enableServiceDetail();
    };
    ScheduleInput.prototype.SaveClickEvent = function () {
        this.scheduleInput.multipleServiceList = this.multipleServiceList;
        this.showMessage("Saving Data please wait.", -1);
        this.onsubmit();
    };
    ScheduleInput.prototype.starttimeChange = function (value) {
        if (value == null || value == "")
            return;
        var timeComponent = value.split(':');
        if (timeComponent) {
            var hour = parseInt(timeComponent[0]);
            var min = parseInt(timeComponent[1].substring(0, 2));
            if (timeComponent[1].toLowerCase().endsWith("pm") && hour < 12)
                hour += 12;
            var ampm = "am";
            if (timeComponent[1].length > 2)
                ampm = timeComponent[1].substring(3, 2);
            if (ampm.toLowerCase() == "pm" && hour < 12)
                hour = hour + 12;
            this.SetStartTime(hour, min);
            console.log(this.multipleServiceObj);
            if (this.multipleServiceObj.SERVICE != null) {
                //  calculate end time as service duration            
                min = min + this.multipleServiceObj.SERVICE.TIMEDURATION_MIN;
                while (min >= 60) {
                    hour = hour + 1;
                    min = min - 60;
                }
                this.SetEndTime(hour, min);
            }
            else {
                this.SetEndTime(0, 0);
            }
        }
    };
    ScheduleInput.prototype.SetStartTime = function (hour, min) {
        this.StartTime = hour.toString().padStart(2, '0') + ":" + min.toString().padStart(2, '0');
        this.multipleServiceObj.STARTTIME = this.GetTimeString(hour, min);
    };
    ScheduleInput.prototype.SetEndTime = function (hour, min) {
        this.EndTime = hour.toString().padStart(2, '0') + ":" + min.toString().padStart(2, '0');
        this.multipleServiceObj.ENDTIME = this.GetTimeString(hour, min);
    };
    ScheduleInput.prototype.GetTimeString = function (hour, min) {
        var ampm = " AM";
        if (hour >= 12) {
            if (hour > 12)
                hour = hour - 12;
            ampm = " PM";
        }
        return hour.toString().padStart(2, '0') + ":" + min.toString().padStart(2, '0') + ampm;
    };
    ScheduleInput.prototype.TypeChange = function (value) {
        console.log("type", value);
        this.multipleServiceObj.TYPE = value;
    };
    ScheduleInput.prototype.EmployeeChange = function (emp) {
        this.getTimeSlotForAppointment();
    };
    ScheduleInput.prototype.RoomChange = function (room) {
        this.getTimeSlotForAppointment();
    };
    ScheduleInput.prototype.bookedEmployeeClickEvent = function (value) {
        if (value.EMPLOYEE_BOOKED_BYCUSTOMER == 1)
            return;
        this.bookedEmployee = value;
        this.replacementEmployeeList = [];
        this.childEmployeeModal.show();
    };
    ScheduleInput.prototype.saveChildModal = function (replacementEmp) {
        var _this = this;
        this.childEmployeeModal.hide();
        this.showMessage("Updating Data please wait.", -1);
        try {
            var sub = this.masterService.postmaster("addEdit", { replacementEmployee: replacementEmp, ToBeReplacedEmployee: this.bookedEmployee }, "/postReplacementEmployee")
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    _this.showMessage("Data Exchanges Successfully", 1000);
                }
                else {
                    _this.showMessage(data.result);
                }
            }, function (error) { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    ScheduleInput.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    ScheduleInput.prototype.onsubmit = function () {
        var _this = this;
        try {
            var body = this.scheduleInput;
            body.multipleServiceList.forEach(function (element) {
                element.SERVICE.rooms = [];
                element.SERVICE.employees = [];
                element.SERVICE.branches = [];
            });
            var sub = this.masterService.postmaster(this.mode, this.scheduleInput, "/saveSchedule")
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    _this.showMessage("Data Saved Successfully.", 1000);
                    _this.router.navigate([_this.returnUrl]);
                }
                else {
                    _this.showMessage(data.result);
                }
            }, function (error) { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    ScheduleInput.prototype.onCancel = function () {
        this.router.navigate([this.returnUrl]);
    };
    ScheduleInput.prototype.AddClickEvent = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var serviceGuid, isEmpAvailable, noOfService, i, emp, room, data, result, i, emp, room, isAddOn, e_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        serviceGuid = Object(uuid__WEBPACK_IMPORTED_MODULE_9__["v4"])();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        isEmpAvailable = true;
                        this.multipleServiceObj.EMPLOYEE.forEach(function (element) {
                            if (element.OFFDAY.find(function (x) { return x == _this.getWeekDay(new Date(_this.scheduleInput.DATE)); }))
                                isEmpAvailable = false;
                        });
                        if (!isEmpAvailable) {
                            if (this.user.Role == "admin") {
                                if (!confirm('One or more Employee will not be available on selected date. Do you want to add anyway?'))
                                    return [2 /*return*/];
                            }
                            else {
                                this.showMessage('One or more Employee will not be available on selected date.');
                                return [2 /*return*/];
                            }
                        }
                        if (this.StartTime === undefined) {
                            this.showMessage('Please set Appointment Time first');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.checkHoliday(this.scheduleInput.DATE, this.multipleServiceObj.EMPLOYEE[0].EMPLOYEEID, this.multipleServiceObj.STARTTIME, this.multipleServiceObj.ENDTIME)];
                    case 2:
                        if (!(_a.sent()))
                            return [2 /*return*/];
                        this.showMessage("Validting Data please wait.", -1);
                        noOfService = this.multipleServiceObj.PAX * this.multipleServiceObj.SERVICE.noOfEmployees;
                        i = 0;
                        _a.label = 3;
                    case 3:
                        if (!(i < noOfService)) return [3 /*break*/, 6];
                        emp = this.multipleServiceObj.EMPLOYEE[i] || this.multipleServiceObj.EMPLOYEE[0];
                        room = this.multipleServiceObj.ROOM[i] || this.multipleServiceObj.ROOM[0];
                        data = {
                            Date: this.scheduleInput.DATE,
                            Service: this.multipleServiceObj.SERVICE,
                            CustomerId: this.scheduleInput.CUSTOMER.CUSID,
                            EmployeeId: emp.EMPLOYEEID,
                            RoomId: room.ROOMID,
                            STARTTIME: this.multipleServiceObj.STARTTIME,
                            ENDTIME: this.multipleServiceObj.ENDTIME,
                            StartTime: this.StartTime,
                            EndTime: this.EndTime,
                            GUID: this.scheduleInput.GUID,
                            SNO: this.SNO + 1,
                            ScheduleId: this.scheduleInput.ScheduleId,
                            serviceGuid: serviceGuid
                        };
                        return [4 /*yield*/, this.masterService.postMasterAsync('validate', data, "/ValidateSchedule")];
                    case 4:
                        result = _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 3];
                    case 6:
                        for (i = 0; i < noOfService; i++) {
                            emp = this.multipleServiceObj.EMPLOYEE[i] || this.multipleServiceObj.EMPLOYEE[0];
                            room = this.multipleServiceObj.ROOM[i] || this.multipleServiceObj.ROOM[0];
                            isAddOn = i % this.multipleServiceObj.SERVICE.noOfEmployees != 0;
                            this.multipleServiceList.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.multipleServiceObj, { SNO: ++this.SNO, EMPLOYEE: emp, ROOM: room, isAddOn: isAddOn, serviceGuid: serviceGuid }));
                        }
                        setTimeout(function () {
                            _this.selectedService = [];
                            _this.multipleServiceObj = { PAX: 1 };
                            _this.paxChanged(1, 1);
                            _this.SetStartTime(0, 0);
                            _this.SetEndTime(0, 0);
                            _this.childModal.hide();
                        }, 1000);
                        return [3 /*break*/, 8];
                    case 7:
                        e_1 = _a.sent();
                        console.log("Validate Appointment Error :", e_1);
                        this.hideChildModal();
                        this.removeSchedule(serviceGuid, false);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    ScheduleInput.prototype.onSearchChange = function (searchValue) {
        var cus = this.CustomerList.find(function (x) { return x.MOBILE == searchValue; });
        if (cus != null)
            this.scheduleInput.CUSTOMER = cus;
    };
    ScheduleInput.prototype.onBarcodeChange = function (searchValue) {
        var cus = this.CustomerList.find(function (x) { return x.BARCODE == searchValue; });
        if (cus != null)
            this.scheduleInput.CUSTOMER = cus;
    };
    ScheduleInput.prototype.editSchedule = function (index) {
        try {
            console.log(this.multipleServiceList[index]);
            var selectedSchedule_1 = this.multipleServiceList[index];
            this.selectedService = [selectedSchedule_1.SERVICE];
            this.multipleServiceObj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.multipleServiceObj, { SERVICE: this.ServiceList.find(function (x) { return x.SERVICEID == selectedSchedule_1.SERVICE.SERVICEID; }), SNO: selectedSchedule_1.SNO, CUSTOMERID: selectedSchedule_1.CUSTOMERID, STARTTIME: selectedSchedule_1.STARTTIME, ENDTIME: selectedSchedule_1.ENDTIME, EMPLOYEE_BOOKED_BYCUSTOMER: selectedSchedule_1.EMPLOYEE_BOOKED_BYCUSTOMER, RATE: selectedSchedule_1.RATE, TYPE: selectedSchedule_1.TYPE, PAX: selectedSchedule_1.PAX });
            var empList = this.multipleServiceList
                .filter(function (x) { return x.guid == selectedSchedule_1.guid; })
                .map(function (x) { return x.EMPLOYEE.EMPLOYEEID; });
            console.log("empList", empList);
            this.paxChanged(this.multipleServiceObj.PAX, this.multipleServiceObj.SERVICE.noOfEmployees);
            this.getEmployees(this.scheduleInput.branch.branchId, this.multipleServiceObj.SERVICE, empList);
            this.getRooms(this.scheduleInput.branch.branchId, this.multipleServiceObj.SERVICE, [selectedSchedule_1.ROOM.ROOMID]);
            this.starttimeChange(selectedSchedule_1.STARTTIME);
            this.removeSchedule(selectedSchedule_1.serviceGuid, false);
            this.enableServiceDetail();
        }
        catch (e) {
            alert(e);
        }
    };
    ScheduleInput.prototype.removeSchedule = function (serviceGuid, showMessage) {
        var _this = this;
        if (showMessage === void 0) { showMessage = true; }
        var data = {
            GUID: this.scheduleInput.GUID,
            serviceGuid: serviceGuid
        };
        if (showMessage)
            this.showMessage("Removing Appointment please wait.", -1);
        var sub = this.masterService.postmaster('remove_row', data, "/DeleteTempSchedule")
            .subscribe(function (data) {
            //console.log(data);
            if (data.status == 'ok') {
                _this.multipleServiceList = _this.multipleServiceList.filter(function (x) { return x.serviceGuid != serviceGuid; });
                if (showMessage)
                    _this.showMessage("Success", 1000);
            }
            else {
                if (showMessage)
                    _this.showMessage(data.result);
            }
        });
    };
    ScheduleInput.prototype.getWeekDay = function (date) {
        switch (date.getDay()) {
            case 0:
                return "sunday";
            case 1:
                return "monday";
            case 2:
                return "tuesday";
            case 3:
                return "wednesday";
            case 4:
                return "thursday";
            case 5:
                return "friday";
            case 6:
                return "saturday";
            default:
                return "saturday";
        }
    };
    ScheduleInput.prototype.serviceChangeEvent = function (e) {
        if (!this.scheduleInput.CUSTOMER)
            return;
        this.multipleServiceObj.SERVICE = e[0];
        this.multipleServiceObj.RATE = this.multipleServiceObj.SERVICE.RATE;
        this.clearEmpRoom();
        this.getEmployees(this.scheduleInput.branch.branchId, this.multipleServiceObj.SERVICE);
        this.getRooms(this.scheduleInput.branch.branchId, this.multipleServiceObj.SERVICE);
        this.getTimeSlotForAppointment();
        this.paxChanged(this.multipleServiceObj.PAX, e[0].noOfEmployees);
    };
    ScheduleInput.prototype.canBeBillable = function () {
        return (new Date() >= new Date(this.scheduleInput.DATE) && this._authService.getSetting().IntegratePos);
    };
    ScheduleInput.prototype.ProceedBill = function () {
        this.scheduleInput.billableSchedule = 1;
        this.SaveClickEvent();
    };
    ScheduleInput.prototype.CancelBill = function () {
        var _this = this;
        this.scheduleInput.multipleServiceList = this.multipleServiceList;
        this.showMessage("Saving Data please wait.", -1);
        try {
            var sub = this.masterService.postmaster(this.mode, this.scheduleInput, "/cancelBill")
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    _this.showMessage("Data Saved Successfully", 1000);
                }
                else {
                    _this.showMessage(data.result);
                }
            }, function (error) { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    };
    ScheduleInput.prototype.DeleteConformation = function () {
        this.deleteModal.show();
    };
    ScheduleInput.prototype.DeleteEvent = function () {
        var _this = this;
        this.deleteModal.hide();
        this.showMessage("Deleting this schedule please wait.", -1);
        var sub = this.masterService.postmaster('delete', this.scheduleInput, "/DeleteSchedule")
            .subscribe(function (data) {
            //console.log(data);
            if (data.status == 'ok') {
                _this.showMessage("Delete Successfull.", 1000);
                _this.router.navigate([_this.returnUrl]);
            }
            else {
                _this.showMessage(data.result);
            }
        }, function (error) { alert(error); });
    };
    ScheduleInput.prototype.customerChanged = function (e) {
        this.scheduleInput.CUSTOMER = e;
    };
    ScheduleInput.prototype.checkHoliday = function (date, employee, startTime, endTime) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var roleRes, roleJSON, res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        roleRes = this.masterService.getRole();
                        roleJSON = JSON.parse(roleRes);
                        return [4 /*yield*/, this._scheduleInputService.checkHoliday({ date: date, employee: employee, startTime: startTime, endTime: endTime }).toPromise()];
                    case 1:
                        res = _a.sent();
                        if (res.status == "ok" && res.result == true) {
                            if (roleJSON.Role == "admin") {
                                if (confirm("Staff is not available for selected Date/Time. Do you still want to add appointment?")) {
                                    this.scheduleInput.OverrideHoliday = true;
                                    return [2 /*return*/, true];
                                }
                                else
                                    return [2 /*return*/, false];
                            }
                            else {
                                this.showMessage("Staff is not available for selected Date/Time.", -1);
                                return [2 /*return*/, false];
                            }
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    ScheduleInput.prototype.getStatusList = function () {
        this.statusList = [];
        console.log(this.scheduleInput.STATUS);
        switch (this.scheduleInput.STATUS) {
            case 0:
                this.statusList.push({ status: 1, description: "Patient Arrived" });
                break;
            case 1:
                this.statusList.push({ status: 0, description: "Initial" });
                this.statusList.push({ status: 2, description: "Patient In Session" });
                break;
            case 2:
                this.statusList.push({ status: 0, description: "Initial" });
                this.statusList.push({ status: 1, description: "Patient Arrived" });
                this.statusList.push({ status: 3, description: "Session Completed" });
                break;
            case 3:
                this.statusList.push({ status: 0, description: "Initial" });
                this.statusList.push({ status: 1, description: "Patient Arrived" });
                this.statusList.push({ status: 2, description: "Patient In Session" });
                break;
        }
    };
    ScheduleInput.prototype.getTimeSlotForAppointment = function () {
        var _this = this;
        var model = {
            customerId: this.scheduleInput.CUSTOMER.CUSID,
            outletId: this.scheduleInput.branch.branchId,
            serviceId: this.multipleServiceObj.SERVICE.SERVICEID,
            appointmentDate: this.scheduleInput.DATE,
            employeeId: 0,
            roomId: 0
        };
        if (this.multipleServiceObj.EMPLOYEE)
            model.employeeId = this.multipleServiceObj.EMPLOYEE.EMPLOYEEID;
        if (this.multipleServiceObj.ROOM)
            model.roomId = this.multipleServiceObj.ROOM.ROOMID;
        console.log(model);
        this.masterService.getTimeSlotForAppointment(model)
            .subscribe(function (response) {
            _this.appTimeSlots = response.result;
        });
    };
    ScheduleInput.prototype.selectAppointmentTime = function (time) {
        this.starttimeChange(time.time);
        if (!this.multipleServiceObj.EMPLOYEE)
            this.multipleServiceObj.EMPLOYEE = this.employeeList.filter(function (x) { return x.EMPLOYEEID == time.employeeId; });
        if (!this.multipleServiceObj.ROOM)
            this.multipleServiceObj.ROOM = this.roomList.filter(function (x) { return x.ROOMID == time.roomId; });
    };
    ScheduleInput.prototype.paxChanged = function (pax, noOfEmpRequred) {
        var totalEmp = noOfEmpRequred * pax;
        this.empSetting = Object.assign({}, this.empSetting, { limitSelection: totalEmp });
        this.roomSetting = Object.assign({}, this.roomSetting, { limitSelection: pax });
    };
    ScheduleInput.prototype.showMessage = function (message, closeAfter) {
        var _this = this;
        if (closeAfter === void 0) { closeAfter = 3000; }
        this.DialogMessage = message;
        if (!this.childModal.isShown)
            this.childModal.show();
        if (closeAfter >= 0) {
            setTimeout(function () {
                _this.childModal.hide();
            }, closeAfter);
        }
    };
    ScheduleInput.prototype.enableServiceDetail = function () {
        this.serviceSetting = Object.assign({}, this.serviceSetting, { disabled: false });
        this.empSetting = Object.assign({}, this.empSetting, { disabled: false });
        this.roomSetting = Object.assign({}, this.roomSetting, { disabled: false });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childEmployeeModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ScheduleInput.prototype, "childEmployeeModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ScheduleInput.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ScheduleInput.prototype, "deleteModal", void 0);
    ScheduleInput = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'schedule',
            styles: [__webpack_require__(/*! ../../schedule.scss */ "./src/app/pages/schedule/schedule.scss")],
            template: __webpack_require__(/*! ./schedule.html */ "./src/app/pages/schedule/components/ScheduleInput/schedule.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scheduleInput_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleInputService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _common_services_permission__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _common_services_disable_date_picker_disable_date_picker_service__WEBPACK_IMPORTED_MODULE_8__["DisableDateService"],
            _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]])
    ], ScheduleInput);
    return ScheduleInput;
}());



/***/ }),

/***/ "./src/app/pages/schedule/components/ScheduleSearch/customer-all-schedule.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/schedule/components/ScheduleSearch/customer-all-schedule.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CustomerAllSchedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAllSchedule", function() { return CustomerAllSchedule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _scheduleInput_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scheduleInput.service */ "./src/app/pages/schedule/scheduleInput.service.ts");





var CustomerAllSchedule = /** @class */ (function () {
    function CustomerAllSchedule(router, scheduleService) {
        this.router = router;
        this.scheduleService = scheduleService;
        this.mobile = "";
        this.schedules = [];
        this.Customer = {};
        this.ShowAll = false;
        this.schedules = [];
    }
    CustomerAllSchedule.prototype.ngOnInit = function () {
        this.schedules = [];
    };
    CustomerAllSchedule.prototype.showDialog = function () {
        var _this = this;
        this.Customer = {};
        this.schedules = [];
        this.ShowAll = false;
        this.scheduleService.getCustomerSchedule({ FDate: this.date, CUSTOMER: this.mobile }).subscribe(function (response) {
            if (response.customer != null) {
                _this.schedules = response.schedule;
                _this.Customer.NAME = response.customer.name;
                _this.Customer.MOBILE = response.customer.mobile;
            }
            setTimeout(function () {
                _this.childCustomerScheduleModal.show();
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
    CustomerAllSchedule.prototype.labelClickEvent = function (id) {
        this.router.navigate(['/pages/schedule/scheInput', { mode: "edit", id: id, returnUrl: this.router.url }]);
    };
    CustomerAllSchedule.prototype.CheckAllChanged = function (e) {
        var _this = this;
        this.scheduleService.getCustomerSchedule({ FDate: (e ? new Date(2000, 1, 1) : this.date), CUSTOMER: this.mobile }).subscribe(function (response) {
            if (response.customer != null) {
                _this.schedules = response.schedule;
                _this.Customer.NAME = response.customer.name;
                _this.Customer.MOBILE = response.customer.mobile;
                console.log(_this.Customer);
            }
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('CustomerSchedule'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], CustomerAllSchedule.prototype, "childCustomerScheduleModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CustomerAllSchedule.prototype, "mobile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date)
    ], CustomerAllSchedule.prototype, "date", void 0);
    CustomerAllSchedule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'customer-all-schedule',
            styles: [__webpack_require__(/*! ../../schedule.scss */ "./src/app/pages/schedule/schedule.scss")],
            template: __webpack_require__(/*! ./customer-all-schedule.html */ "./src/app/pages/schedule/components/ScheduleSearch/customer-all-schedule.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _scheduleInput_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleInputService"]])
    ], CustomerAllSchedule);
    return CustomerAllSchedule;
}());



/***/ }),

/***/ "./src/app/pages/schedule/components/ScheduleSearch/customer-all-schedule.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/schedule/components/ScheduleSearch/customer-all-schedule.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" bsModal #CustomerSchedule=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button class=\"close\" aria-label=\"Close\" (click)=\"CustomerSchedule.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Patient Schedule:</h4>\r\n                \r\n                <label class=\"switch\" style=\"float: right; margin-left: 5px;\">\r\n                    <input type=\"checkbox\" [(ngModel)]=\"ShowAll\" (change)=\"CheckAllChanged($event.target.checked)\">\r\n                    <span class=\"slider round\"></span>\r\n                </label>\r\n                <label style=\"float: right;line-height: 20px;\">Show All</label>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\" id=\"customerSchedule\">\r\n                    <div class=\"col-5 col-sm-7 col-md-7\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\">Patient Name</span>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Customer.NAME\" readonly\r\n                                aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-5 col-sm-5 col-md-5\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\">Mobile No</span>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Customer.MOBILE\" readonly\r\n                                aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <table class=\"table table-bordered table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Sn.</th>\r\n                            <th>Date</th>\r\n                            <th>Time</th>\r\n                            <th>Employee</th>\r\n                            <th>Service</th>\r\n                            <th>Room</th>\r\n                            <th></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let t of schedules\">\r\n                            <td>1</td>\r\n                            <td>{{t.strDate}}</td>\r\n                            <td>{{t.STARTTIME}}</td>\r\n                            <td>{{t.EMPLOYEE}}</td>\r\n                            <td>{{t.SERVICE}}</td>\r\n                            <td>{{t.ROOMNO}}</td>\r\n                            <td> <span style=\"color:blue;cursor: pointer; margin-left: 5px\"\r\n                                    (click)=\"labelClickEvent(t._id)\">Details</span></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n                <div class=\"modal-footer\">\r\n                    <button class=\"btn btn-primary confirm-btn\" type=\"button\"\r\n                        (click)=\"CustomerSchedule.hide()\">Close</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/pages/schedule/components/TreatmentEntry/Treatment.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/schedule/components/TreatmentEntry/Treatment.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TreatmentEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentEntry", function() { return TreatmentEntry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _scheduleInput_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scheduleInput.service */ "./src/app/pages/schedule/scheduleInput.service.ts");
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var style_loader_schedule_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! style-loader!../../schedule.scss */ "./node_modules/style-loader/index.js!./src/app/pages/schedule/schedule.scss");
/* harmony import */ var style_loader_schedule_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(style_loader_schedule_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _common_services_permission__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/services/permission */ "./src/app/common/services/permission/index.ts");
/* harmony import */ var _CustomerSelect_customerSelect_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../CustomerSelect/customerSelect.component */ "./src/app/pages/schedule/components/CustomerSelect/customerSelect.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");











var TreatmentEntry = /** @class */ (function () {
    function TreatmentEntry(_scheduleInputService, router, masterService, elementRef, activatedRoute, _authService, http) {
        this._scheduleInputService = _scheduleInputService;
        this.router = router;
        this.masterService = masterService;
        this.elementRef = elementRef;
        this.activatedRoute = activatedRoute;
        this._authService = _authService;
        this.http = http;
        this.DialogMessage = "Saving data please wait ...";
        this.mode = "";
        this.modeTitle = '';
        this.subcriptions = [];
        this.user = {};
        this.SNO = 0;
        this.prescriptionList = [];
        this.diseaseList = [];
        this.medicationList = [];
        this._prescriptionList = [];
        this.uploadFilesUrl = [];
        this.employeeList = [];
        this.selectedImage = "";
        this.model = {
            Patient: {},
            Healer: {},
            PatientComplaint: "",
            TreatmentNotes: "",
            Prescriptions: [],
            Medications: [],
            Diseases: [],
            EveningPrescriptions: [],
            TreatmentDocuments: [],
            FollowUpPeriod: 0,
            remarks: ""
        };
        this.settings = {
            mode: 'external',
            actions: {
                delete: false,
                edit: false
            },
            view: {
                viewButtonContent: '<i class="fa  fa-eye"></i>'
            },
            pager: {
                display: true,
                perPage: 5
            },
            columns: {
                DATE: {
                    title: 'Date',
                    type: 'string',
                    valuePrepareFunction: function (data) {
                        return data.substring(0, 10);
                    }
                    // valuePrepareFunction: (Patient) => {
                    //   return Patient.NAME;
                    // },
                    // filterFunction: (Patient, search: string) => {
                    //   if(search.length > 0){
                    //     return Patient.NAME.toLowerCase().match(search.toLowerCase());
                    //   }
                    //   else{
                    //     return Patient.NAME;
                    //   }
                    // }
                },
                Healer: {
                    title: 'Staff',
                    type: 'string',
                    valuePrepareFunction: function (data) {
                        return data.NAME;
                    }
                    // filterFunction: (Patient, search: string) => {
                    //   if(search.length > 0){
                    //     return Patient.NAME.toLowerCase().match(search.toLowerCase());
                    //   }
                    //   else{
                    //     return Patient.NAME;
                    //   }
                    // }
                },
            }
        };
        this.ckPatientComplaintConfig = {
            width: '100%',
            height: 200,
            allowedContent: false,
            forcePasteAsPlainText: true,
            font_names: 'Arial;Times New Roman;Verdana',
            toolbarGroups: [
                { name: 'document', groups: ['mode', 'document', 'doctools'] },
                { name: 'clipboard', groups: ['clipboard', 'undo'] },
                { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
                { name: 'forms', groups: ['forms'] },
                '/',
                { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
                { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
                { name: 'links', groups: ['links'] },
                { name: 'insert', groups: ['insert'] },
                '/',
                { name: 'styles', groups: ['styles'] },
                { name: 'colors', groups: ['colors'] },
                { name: 'tools', groups: ['tools'] },
                { name: 'others', groups: ['others'] },
                { name: 'about', groups: ['about'] }
            ],
            removeButtons: 'Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,Outdent,Indent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Language,Unlink,Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Maximize,ShowBlocks,About'
        };
        this.ckNotesRemarksConfig = {
            width: '100%',
            height: 150,
            allowedContent: false,
            forcePasteAsPlainText: true,
            font_names: 'Arial;Times New Roman;Verdana',
            toolbarGroups: [
                { name: 'document', groups: ['mode', 'document', 'doctools'] },
                { name: 'clipboard', groups: ['clipboard', 'undo'] },
                { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
                { name: 'forms', groups: ['forms'] },
                '/',
                { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
                { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
                { name: 'links', groups: ['links'] },
                { name: 'insert', groups: ['insert'] },
                '/',
                { name: 'styles', groups: ['styles'] },
                { name: 'colors', groups: ['colors'] },
                { name: 'tools', groups: ['tools'] },
                { name: 'others', groups: ['others'] },
                { name: 'about', groups: ['about'] }
            ],
            removeButtons: 'Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,Outdent,Indent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Language,Unlink,Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Maximize,ShowBlocks,About'
        };
        this.ckTreatmentNoteConfig = {
            width: '100%',
            height: 200,
            allowedContent: false,
            forcePasteAsPlainText: true,
            font_names: 'Arial;Times New Roman;Verdana',
            toolbarGroups: [
                { name: 'document', groups: ['mode', 'document', 'doctools'] },
                { name: 'clipboard', groups: ['clipboard', 'undo'] },
                { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
                { name: 'forms', groups: ['forms'] },
                '/',
                { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
                { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
                { name: 'links', groups: ['links'] },
                { name: 'insert', groups: ['insert'] },
                '/',
                { name: 'styles', groups: ['styles'] },
                { name: 'colors', groups: ['colors'] },
                { name: 'tools', groups: ['tools'] },
                { name: 'others', groups: ['others'] },
                { name: 'about', groups: ['about'] }
            ],
            removeButtons: 'Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,Outdent,Indent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Language,Unlink,Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Maximize,ShowBlocks,About'
        };
        this.rotationAmount = 0;
        var setting = _authService.getSetting();
        this.IntegrateTreatmentWithAppointment = setting.IntegrateTreatmentWithAppointment;
        if (!!this.activatedRoute.snapshot.params['returnUrl']) {
            this.returnUrl = this.activatedRoute.snapshot.params['returnUrl'];
        }
        if (!!this.activatedRoute.snapshot.params['mode']) {
            this.mode = this.activatedRoute.snapshot.params['mode'];
        }
        //this.model.DATE = new Date();
    }
    ;
    TreatmentEntry.prototype.editList = function (event) {
        //console.log(event, "ADDING?!?!?!");
        var modelHistory;
        modelHistory = event.data;
        modelHistory.remarks = event.data.remarks;
        modelHistory.Healer = event.data.Healer;
        modelHistory.PatientComplaint = event.data.PatientComplaint;
        modelHistory.TreatmentNotes = event.data.TreatmentNotes;
        this.printTreatmentEntry(modelHistory, false);
        //console.log("THIS.MODEL", this.model)
    };
    TreatmentEntry.prototype.ngOnInit = function () {
        var _this = this;
        //this.model.User = this._scheduleInputService.getUser();
        var sid = this.activatedRoute.snapshot.params['id'];
        //console.log({ beforeTreatment: this.mode });
        if (this.mode != 'add') {
            this.masterService.postmaster(this.mode, { sid: sid }, "/loadTreatmentByScheduleId").subscribe(function (data) {
                //console.log(data);
                if (data.status == 'ok') {
                    if (data.result != null) {
                        _this.model = data.result;
                        _this.model.remarks = data.result.remarks;
                    }
                }
                else {
                    //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                    if (data.result._body == "The ConnectionString property has not been initialized.") {
                        _this.router.navigate(['/login', _this.router.url]);
                        return;
                    }
                    //Some other issues need to check
                    //   this.DialogMessage = "Error in Updaing Data:" + data.result._body;
                    //console.log(data.result._body);
                    setTimeout(function () {
                        //     this.childModal.hide();
                    }, 3000);
                }
            }, function (error) { alert(error); });
        }
        this.contentUrl = this.masterService.contentUrl;
        setTimeout(function () {
            _this.historyChange(_this.model.Patient.CUSID);
            _this.PatientComplaint = _this.model.PatientComplaint;
            _this.TreatmentNotes = _this.model.TreatmentNotes;
            _this.remarks = _this.model.remarks;
            //console.log("MODEL", this.model)
            //console.log('TREATMENT DOCUMENTS', this.model.TreatmentDocuments);
            _this.model.TreatmentDocuments.forEach(function (x) {
                x = _this.masterService.contentUrl + x;
                //console.log('CONTENT URL AND DOCUMENTS', this.masterService.contentUrl, x   )
                _this.uploadFilesUrl.push(x);
                //console.log("uploadFilesUrl ngOnInit", this.uploadFilesUrl);
            });
            if (_this.model.Patient.NAME == null && _this.IntegrateTreatmentWithAppointment) {
                _this.masterService.postmaster(_this.mode, { sid: sid }, "/loadScheduleById").subscribe(function (data) {
                    if (data.status == 'ok') {
                        //console.log(data);
                        var schedule = data.result;
                        _this.model.Patient = schedule.CUSTOMER;
                        _this.model.Healer = schedule.multipleServiceList[0].EMPLOYEE;
                        _this.model.ScheduleId = sid;
                        _this.model.DATE = schedule.DATE;
                        _this.mode = "add";
                    }
                    else {
                        //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                        if (data.result._body == "The ConnectionString property has not been initialized.") {
                            _this.router.navigate(['/login', _this.router.url]);
                            return;
                        }
                        //Some other issues need to check
                        //   this.DialogMessage = "Error in Updaing Data:" + data.result._body;
                        //console.log(data.result._body);
                        setTimeout(function () {
                            //     this.childModal.hide();
                        }, 3000);
                    }
                }, function (error) { alert(error); });
            }
        }, 1000);
        if (this.masterService._medicationList.length > 0) {
            this.medicationList = this.masterService._medicationList;
        }
        else {
            this.masterService.getMedicationList().subscribe(function (data) {
                _this.medicationList.push(data);
            }, function (Error) { return console.log(Error); }, function () {
                _this.masterService._medicationList = _this.medicationList;
            });
        }
        if (this.masterService._diseaseList.length > 0) {
            this.diseaseList = this.masterService._diseaseList;
        }
        else {
            this.masterService.getDiseaseList().subscribe(function (data) {
                _this.diseaseList.push(data);
            }, function (Error) { return console.log(Error); }, function () {
                _this.masterService._diseaseList = _this.diseaseList;
            });
        }
        if (this.masterService._employeeList.length > 0) {
            this.employeeList = this.masterService._employeeList;
        }
        else {
            this.masterService.getEmployeeList().subscribe(function (data) {
                _this.employeeList.push(data);
            }, function (Error) { return console.log(Error); }, function () {
                _this.masterService._employeeList = _this.employeeList;
            });
        }
        if (this.masterService._prescriptionList.length > 0) {
            this.prescriptionList = this.masterService._prescriptionList;
        }
        else {
            this.masterService.getPrescriptionList().subscribe(function (data) {
                _this.prescriptionList.push(data);
            }, function (Error) { return console.log(Error); }, function () {
                _this.masterService._prescriptionList = _this.prescriptionList;
            });
        }
        if (this.masterService._prescriptionList.length > 0) {
            this.prescriptionList = this.masterService._prescriptionList;
        }
        else {
            this.masterService.getPrescriptionList().subscribe(function (data) {
                _this.prescriptionList.push(data);
            }, function (error) { return console.log(error); }, function () {
                _this.masterService._prescriptionList = _this.prescriptionList;
            });
        }
    };
    TreatmentEntry.prototype.onImageClick = function ($direction) {
        this.rotationAmount = this.rotationAmount + 90;
        document.getElementById('image').style.transform = "rotate(" + this.rotationAmount + "deg)";
    };
    TreatmentEntry.prototype.SaveClickEvent = function () {
        // // // this.scheduleInput.multipleServiceList = this.multipleServiceList;
        // // // console.log(this.scheduleInput);
        if (this.disease && this.disease !== "") {
            this.DialogMessage = "Please add pending Disease";
            this.childModal.show();
            return;
        }
        if (this.medication && this.medication !== "") {
            this.DialogMessage = "Please add pending Medication";
            this.childModal.show();
            return;
        }
        if (this.prescription && this.prescription !== "") {
            this.DialogMessage = "Please add pending Morning Prescription";
            this.childModal.show();
            return;
        }
        if (this.eveningPrescription && this.eveningPrescription !== "") {
            this.DialogMessage = "Please add pending Evening Prescription";
            this.childModal.show();
            return;
        }
        if (!this.model.Healer || !this.model.Healer.NAME || this.model.Healer.NAME === "") {
            this.DialogMessage = "Staff is not selected. Please select a staff and try again";
            this.childModal.show();
            return;
        }
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        this.onsubmit();
    };
    TreatmentEntry.prototype.saveChildModal = function (replacementEmp) {
        this.DialogMessage = "Updating Data please wait...";
        this.childModal.show();
    };
    TreatmentEntry.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    TreatmentEntry.prototype.sendEmail = function (model) {
        if (confirm("Do you want to send Email?")) {
            //console.log("CONFIRM SEND EMAIL")
            this.masterService.sendTreatmentEmai(model);
        }
        else {
            //console.log("DONT SEND EMAIL")
        }
    };
    TreatmentEntry.prototype.onsubmit = function () {
        var _this = this;
        try {
            this.model.PatientComplaint = this.PatientComplaint;
            this.model.TreatmentNotes = this.TreatmentNotes;
            this.model.remarks;
            // this.model.Diseases = this.dList;
            // this.model.Medications = this.mList;
            //console.log(this.masterService._customerList, "customer list")
            if (this.mode == 'add') {
                this.model.Patient.NAME = this.CustomerSelect.CustomerInput;
                this.model.Patient.MOBILE = this.CustomerSelect.MobileInput;
            }
            //console.log(this.model, 'SAVE MODEL');
            var sub = this.masterService.postform(this.mode, this.model, "/saveTreatment", this.uploadFiles)
                .subscribe(function (data) {
                if (data.status == 'ok') {
                    //console.log("data status ok ----", data.status, "------", data)
                    //Displaying dialog message for save with timer of 1 secs
                    _this.DialogMessage = "Data Saved Successfully";
                    setTimeout(function () {
                        _this.childModal.hide();
                        _this.sendEmail(_this.model);
                        _this.router.navigate([_this.returnUrl]);
                    }, 1000);
                    //console.log("this.model", this.model);
                    _this.printTreatmentEntry(_this.model, true);
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
    TreatmentEntry.prototype.onCancel = function () {
        var new_date = this.masterService.getDate();
        this.masterService.saveDate(new_date);
        this.router.navigate([this.returnUrl]);
    };
    TreatmentEntry.prototype.pcChange = function () {
        // alert("editor changed");
        // console.log("editor changed");
        //this.model.PatientComplaint = rate;
    };
    TreatmentEntry.prototype.canBeBillable = function () {
        return (new Date() >= new Date(this.model.DATE));
    };
    TreatmentEntry.prototype.ProceedBill = function () {
        alert(this.model.PatientComplaint);
        //this.scheduleInput.billableSchedule = 1;
        //this.SaveClickEvent();
    };
    TreatmentEntry.prototype.DeleteConformation = function () {
        this.deleteModal.show();
    };
    TreatmentEntry.prototype.DeleteEvent = function () {
        var _this = this;
        this.deleteModal.hide();
        this.DialogMessage = "Deleting this schedule please wait...";
        this.childModal.show();
        var sub = this.masterService.postmaster('delete', this.model, "/DeleteSchedule")
            .subscribe(function (data) {
            //console.log(data);
            if (data.status == 'ok') {
                _this.DialogMessage = "Delete Successfull...";
                _this.childModal.hide();
                _this.router.navigate([_this.returnUrl]);
            }
            else {
                //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                if (data.result._body == "Authorization Failed") {
                    _this.router.navigate(['/login', _this.router.url]);
                    return;
                }
                //Some other issues need to check
                //console.log(data.result._body);
                _this.childModal.hide();
            }
        }, function (error) { alert(error); });
    };
    TreatmentEntry.prototype.addDisease = function (e) {
        var _this = this;
        if (e.target.value !== "") {
            if (e.key == "Enter") {
                if (this.model.Diseases == null) {
                    this.model.Diseases = [];
                }
                if (!this.model.Diseases.find(function (x) { return x == e.target.value; })) {
                    this.model.Diseases.push(e.target.value);
                    var disease = this.diseaseList.filter(function (x) { return x.DESCRIPTION == e.target.value; })[0];
                    if (disease) {
                        if (disease.Medications)
                            disease.Medications.forEach(function (item) {
                                if (!_this.model.Medications.find(function (x) { return x.DESCRIPTION == item.DESCRIPTION; }))
                                    _this.model.Medications.push(item);
                            });
                        if (disease.Prescriptions)
                            disease.Prescriptions.forEach(function (item) {
                                if (!_this.model.Prescriptions.find(function (x) { return x.DESCA == item.DESCA; }))
                                    _this.model.Prescriptions.push(item);
                            });
                        if (disease.eveningPrescriptions)
                            disease.eveningPrescriptions.forEach(function (item) {
                                if (!_this.model.EveningPrescriptions.find(function (x) { return x.DESCA == item.DESCA; }))
                                    _this.model.EveningPrescriptions.push(item);
                            });
                    }
                }
                e.target.value = "";
                this.disease = "";
            }
        }
    };
    TreatmentEntry.prototype.addMedication = function (e) {
        if (e.target.value !== "") {
            if (this.model.Medications == null) {
                this.model.Medications = [];
            }
            if (!this.model.Medications.find(function (x) { return x.DESCRIPTION == e.target.value; }))
                this.model.Medications.push(this.medicationList.find(function (x) { return x.DESCRIPTION == e.target.value; }));
            e.target.value = "";
            this.medication = "";
        }
    };
    TreatmentEntry.prototype.addPrescription = function (e, Prescriptions) {
        if (e.target.value !== "") {
            if (Prescriptions == null) {
                Prescriptions = [];
            }
            if (!Prescriptions.find(function (x) { return x.DESCA == e.target.value; })) {
                var pcptn = JSON.stringify(this.prescriptionList.find(function (x) { return x.DESCA == e.target.value; }));
                Prescriptions.push(JSON.parse(pcptn));
            }
            e.target.value = "";
            if (e.target.id == "morningPrescription")
                this.prescription = "";
            else
                this.eveningPrescription = "";
        }
    };
    TreatmentEntry.prototype.onFileChanged = function (e) {
        var _this = this;
        if (this.model.TreatmentDocuments == null) {
            this.model.TreatmentDocuments = [];
        }
        if (this.uploadFiles == null) {
            this.uploadFiles = [];
        }
        var length = e.target.files.length;
        //console.log( e, e.target.value )
        for (var i = 0; i < e.target.files.length; i++) {
            //console.log('TARGET FILES ', e.target.files[i]);
            this.uploadFiles.push(e.target.files[i]);
            //this.model.TreatmentDocuments.push(e.target.value);    
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[i]);
            reader.onload = function (_event) {
                var img = reader.result;
                _this.uploadFilesUrl.push(img);
            };
        }
        //console.log(this.uploadFiles, this.uploadFilesUrl);
    };
    TreatmentEntry.prototype.previewImage = function (e) {
        this.selectedImage = e.target.src;
        this.childPreviewModal.show();
    };
    TreatmentEntry.prototype.changeImage = function (e) {
        this.selectedImage = e.target.src;
    };
    TreatmentEntry.prototype.nextImage = function (e) {
        var index = this.uploadFilesUrl.indexOf(this.selectedImage);
        //console.log("Inde",index)
        this.selectedImage = this.uploadFilesUrl[index + 1];
        //console.log("selectedImage", this.selectedImage)
    };
    TreatmentEntry.prototype.deleteImage = function (e) {
        //console.log("DeleteImage",e);
        var index = this.model.TreatmentDocuments.indexOf(e);
        if (index !== -1) {
            this.model.TreatmentDocuments.splice(index, 1);
        }
        //console.log("Docs",this.model.TreatmentDocuments);    
    };
    TreatmentEntry.prototype.historyChange = function (event) {
        this.historySource = new _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["ServerDataSource"](this.http, {
            endPoint: this.masterService.apiUrl + '/getPatientTreatmentHistory?id=' + event,
            dataKey: 'data.result',
            pagerPageKey: 'currentPage',
            pagerLimitKey: 'maxResultCount',
            totalKey: 'data.total',
        });
    };
    TreatmentEntry.prototype.customerChanged = function (e) {
        //console.log('new event', e);
        // this.employeeList.push(e);
        this.model.Patient = e;
    };
    TreatmentEntry.prototype.customerWeight = function (event) {
        this.newCurrentWeight = event;
    };
    TreatmentEntry.prototype.headTable = function () {
        var thead = "";
        thead = thead + "THEAD <thead> <th style=\"height:10px; padding-top:50px;\" > fuck you </th> WORK ASSHOLE </thead> ";
        return thead;
    };
    TreatmentEntry.prototype.printTreatmentEntry = function (data, print) {
        //console.log("printTreatmentEntry Function");
        var popupWin;
        var tableData = "<table style='width: 100%;font-size: 12px;\n            border-collapse: collapse;border-top: none;border: none;min-height:500px'>";
        var body = this.body(data);
        var prescriptions = this.prescriptions(data);
        var medications = this.medications(data);
        var diseases = this.diseases(data);
        tableData = tableData + "<tbody>" + body + diseases + medications + prescriptions + this.cautions(data) + this.footer() + "\n        </tbody>" + "</table>";
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.write("\n        <html> \n            <head>\n                <title>Skin Care - Treatment History</title>\n                <style type=\"text/css\">\n                    td{ padding:2px; }\n                    " + (print ? "@page{\n                        margin-top:50mm\n                    }" : "") + "\n                </style>\n            </head>\n            <body " + (print ? "onload=\"window.print();window.close();\"" : "") + (">\n                " + tableData + "\n                <div style=\"position: fixed;height: 50px;bottom: 0;\"></div>\n            </body>\n          </html>"));
        if (print)
            popupWin.document.close();
    };
    TreatmentEntry.prototype.body = function (data) {
        var tbody = "";
        tbody = tbody + ("\n\n        <tr>\n            <td colspan='5' style='font-size:14px;'><b>Patient Details</b></td>\n        </tr>\n        <tr>\n            <td colspan='1' style='font-size:12px;'><div style=\"width:120px\">Patient ID</div></td>\n            <td colspan='1' style='font-size:12px;'><b>:&nbsp;" + (data && data.Patient && data.Patient.CUSID) + "</b></td>     \n        </tr>\n        <tr>\n            <td colspan='1' style='font-size:12px;'>Patient Name</td>\n            <td colspan='1' style='font-size:12px; Width:40%;'><b>:&nbsp;" + (data && data.Patient && data.Patient.NAME) + "</b></td>\n            <td colspan='1' style='width:20%'></td>\n            <td colspan='1' style='font-size:12px;width:100px;'>Mobile No</td>\n            <td colspan='1' style='font-size:12px;; Width:40%;'><b>:&nbsp;" + (data && data.Patient && data.Patient.MOBILE) + "</b></td>        \n        </tr>   \n        <tr>\n            <td colspan='1' style='font-size:12px;'>Address</td>\n            <td colspan='1' style='font-size:12px;'><b>:&nbsp;" + (data && data.Patient && data.Patient.ADDRESS) + "</b></td>\n            <td colspan='1' style='width:20%'></td>\n            <td colspan='1' style='font-size:12px;'>Patient Age</td>\n            <td colspan='1' style='font-size:12px;'><b>:&nbsp;" + (data && data.Patient && data.Patient.Age ? data.Patient.Age : "") + "</b></td>    \n        </tr>\n        <tr>\n            <td colspan='1' style='font-size:12px;'>Staff</td>\n            <td colspan='1' style='font-size:12px;'><b>:&nbsp;" + (data && data.Healer && data.Healer.NAME) + "</b></td>\n            <td colspan='1' style='width:20%'></td>\n            <td colspan='1' style='font-size:12px;'>Weight</td>\n            <td colspan='1' style='font-size:12px;'><b>:&nbsp;" + (data && data.Patient && data.Patient.Patient_Weight ? data.Patient.Patient_Weight : "") + "</b></td>\n        </tr>\n        <tr>\n            <td colspan='5'><div style=\"height:10px\"></div</td>\n        </tr>\n  \n        <tr>\n            <td colspan='3' style='font-size:14px;padding-top:10px;'><b>Patient Complaint</b></td>\n            <td colspan='2' style='font-size:14px;padding-top:10px;'><b>Treatment Notes</b></td>\n        </tr>\n        <tr>\n            <td colspan='3' style='font-size:12px;vertical-align: top;text-indent: 20px;'>" + (data && data.Patient && data.PatientComplaint) + "</td>\n            <td colspan='2' style='font-size:12px;vertical-align: top;text-indent: 20px;'>" + (data && data.Patient && data.TreatmentNotes) + "</td>\n        </tr>\n        <tr>\n            <td colspan='5'><div style=\"height:10px\"></div</td>\n        </tr>   \n   \n   ");
        return tbody;
    };
    TreatmentEntry.prototype.diseases = function (data) {
        var row = "";
        //console.log("data.Diseases", data.Diseases);
        if (data.Diseases == null) {
            data.Diseases = [];
        }
        if (data.Diseases.length > 0) {
            row = row + "\n            <tr style=\"margin-top: 20px\" >\n                <td colspan='5' style='font-size:14px;padding-top:10px;'><b>Diagnosis</b></td>\n            </tr>\n            ";
            for (var i = 0; i < data.Diseases.length; i++) {
                row = row + ("\n            <tr>\n                <td colspan='5' style=\"text-indent:10px\">" + (i + 1) + ". " + data.Diseases[i] + "</td>\n            <tr>\n            ");
            }
        }
        return row;
    };
    TreatmentEntry.prototype.medications = function (data) {
        var row = "";
        //console.log("data.Medications", data.Medications);
        if (data.Medications == null) {
            data.Medications = [];
        }
        if (data.Medications.length > 0) {
            row = row + "\n            <tr style=\"margin-top: 10px\" >\n                <td colspan='5' style='font-size:14px;padding-top:10px;'><b>Medications </b></td>\n            </tr>\n            ";
            for (var i = 0; i < data.Medications.length; i++) {
                row = row + ("\n            <tr>\n                <td colspan='5' style=\"text-indent:10px\">" + (i + 1) + ". " + data.Medications[i].DESCRIPTION + "</td>\n            <tr>\n            <tr>\n                <td colspan='5' style=\"text-indent:30px\"><i>" + (data.Medications[i].REMARKS ? data.Medications[i].REMARKS : "") + "</i></td>\n            <tr>\n            ");
            }
        }
        return row;
    };
    TreatmentEntry.prototype.prescriptions = function (data) {
        var row = "";
        row = row + ("        \n            <tr>\n                <td colspan='2' style='vertical-align:top;border-style:solid;border-width:thin;'>\n                    <table >\n                        <tr>\n                            <td colspan='5' style='font-size:14px;padding-top:10px;'><b>Morning Routine </b></td>\n                        </tr>\n                        " + this.getPrescriptionForPrint(data.Prescriptions) + "\n                    </table>\n                </td>\n                <td></td>\n                <td colspan='2' style='vertical-align:top;border-style:solid;border-width:thin;'>\n                    <table>\n                        <tr>\n                            <td colspan='5' style='font-size:14px;padding-top:10px;'><b>Evening Routine </b></td>\n                        </tr>\n                        " + this.getPrescriptionForPrint(data.EveningPrescriptions) + "\n                    </table>\n                </td>\n            </tr>\n            ");
        return row;
    };
    TreatmentEntry.prototype.getPrescriptionForPrint = function (data) {
        var row = "";
        var hasCautions;
        if (data == null) {
            data = [];
        }
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                row = row + ("\n            <tr>\n                <td colspan='5' style='text-indent:10px'>" + (i + 1) + ". " + data[i].DESCA + "</td>\n            <tr>\n            <tr>\n                <td colspan='5' style='text-indent:30px'><i>" + (data[i].directives ? data[i].directives : "") + "</i></td>\n            <tr>\n            ");
            }
        }
        return row;
    };
    TreatmentEntry.prototype.cautions = function (data) {
        var row = "";
        var rn = 1;
        var cns = [];
        row = row + "\n            <tr>\n            <td colspan='2' style='font-size:14px;padding-top:10px;'><b>Cautions </b></td>\n            </tr>\n            ";
        if (data.Prescriptions) {
            var _loop_1 = function (i) {
                if (data.Prescriptions[i].cautions && data.Prescriptions[i].cautions !== "" && !cns.find(function (x) { return x === data.Prescriptions[i].DESCA; })) {
                    row = row + ("\n                    <tr>\n                        <td colspan='5' style='text-indent:10px'>" + ++rn + ". " + data.Prescriptions[i].DESCA + " : " + (data.Prescriptions[i].cautions ? data.Prescriptions[i].cautions : "") + "</td>\n                    <tr>\n                    ");
                    cns.push(data.Prescriptions[i].DESCA);
                }
            };
            for (var i = 0; i < data.Prescriptions.length; i++) {
                _loop_1(i);
            }
        }
        if (data.EveningPrescriptions) {
            var _loop_2 = function (i) {
                if (data.EveningPrescriptions[i].cautions && data.EveningPrescriptions[i].cautions !== "" && !cns.find(function (x) { return x === data.EveningPrescriptions[i].DESCA; })) {
                    row = row + ("\n                    <tr>\n                        <td colspan='5' style='text-indent:10px'>" + ++rn + ". " + data.EveningPrescriptions[i].DESCA + " : " + (data.EveningPrescriptions[i].cautions ? data.EveningPrescriptions[i].cautions : "") + "</td>\n                    <tr>\n                    ");
                    cns.push(data.EveningPrescriptions[i].DESCA);
                }
            };
            for (var i = 0; i < data.EveningPrescriptions.length; i++) {
                _loop_2(i);
            }
        }
        return row;
    };
    TreatmentEntry.prototype.footer = function () {
        return "\n            <tr>\n                <td colspan='5' style='font-size:14px;padding-top:10px;'><b>Notes </b></td>\n            </tr>\n            <tr>\n                <td colspan='5' style='text-indent:10px'>Follow up after 3 months</td>\n            <tr>\n            <tr>\n                <td colspan='5' style='text-indent:10px'>Consultation charge is valid till one month of your previous consultation date.</td>\n            <tr>\n            <tr>\n                <td colspan='5' style='text-indent:10px'>Contact 1 month prior for follow up appointment.</td>\n            <tr>";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childPreviewModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], TreatmentEntry.prototype, "childPreviewModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], TreatmentEntry.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], TreatmentEntry.prototype, "deleteModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_CustomerSelect_customerSelect_component__WEBPACK_IMPORTED_MODULE_9__["CustomerSelect"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _CustomerSelect_customerSelect_component__WEBPACK_IMPORTED_MODULE_9__["CustomerSelect"])
    ], TreatmentEntry.prototype, "CustomerSelect", void 0);
    TreatmentEntry = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'treatment',
            styles: [__webpack_require__(/*! ../../schedule.scss */ "./src/app/pages/schedule/schedule.scss")],
            template: __webpack_require__(/*! ./Treatment.html */ "./src/app/pages/schedule/components/TreatmentEntry/Treatment.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scheduleInput_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleInputService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_7__["MasterRepo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _common_services_permission__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]])
    ], TreatmentEntry);
    return TreatmentEntry;
}());



/***/ }),

/***/ "./src/app/pages/schedule/components/TreatmentEntry/Treatment.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/schedule/components/TreatmentEntry/Treatment.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xlg-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12\" style=\"width:100%;\">\r\n        <ba-card title=\"Patient Information\">\r\n            <div>\r\n                <div class=\"form-group\" *ngIf=\"IntegrateTreatmentWithAppointment || mode != 'add'\">\r\n                    <table id=\"tblPatientInfo\">\r\n                        <tr>\r\n                            <td>Patient Name</td>\r\n                            <td>: {{model.Patient.NAME}}</td>\r\n                            <td>Mobile No</td>\r\n                            <td>: {{model.Patient.MOBILE}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Address</td>\r\n                            <td>: {{model.Patient.ADDRESS}}</td>\r\n                            <td>Patient Id</td>\r\n                            <td>: {{model.Patient.PATIENT_ID}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Age</td>\r\n                            <td>: {{model.Patient.Age}}</td>\r\n                            <td>Gender</td>\r\n                            <td>: {{model.Patient.GENDER}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Staff</td>\r\n                            <td>: {{model.Healer.NAME}}</td>\r\n                            <td>Weight</td>\r\n                            <td>: {{model.Patient.Patient_Weight}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Membership</td>\r\n                            <td>: {{model.Patient.Membership}}</td>\r\n                            <td>Email</td>\r\n                            <td style=\"width: 35%;\">: {{model.Patient.EMAIL}}</td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <div *ngIf=\"!IntegrateTreatmentWithAppointment && mode == 'add'\">\r\n                    <customer-select (customerChanged)=\"customerChanged($event)\" (ncw)=\"customerWeight($event)\"\r\n                        (historyChange)=\"historyChange($event)\">\r\n                    </customer-select>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"employeeselect\" style=\"font-weight: 600;\">Staff</label>\r\n                        <div>\r\n                            <select class=\"form-control\" style=\"width: 200px;\" name=\"employeeselect\" id=\"employeeselect\"\r\n                                [(ngModel)]=\"model.Healer\">\r\n                                <option *ngFor=\"let em of employeeList\" [ngValue]=\"em\">{{em.NAME}}</option>\r\n                            </select>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ba-card>\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-6\">\r\n                <ba-card title=\"Patient Complaint\">\r\n                    <ckeditor [config]=\"ckPatientComplaintConfig\" [(ngModel)]=\"PatientComplaint\">\r\n                        {{model.PatientComplaint}}\r\n                    </ckeditor>\r\n                </ba-card>\r\n            </div>\r\n            <div class=\"col-xl-6\">\r\n                <ba-card title=\"Treatment Notes\">\r\n                    <ckeditor [(ngModel)]=\"TreatmentNotes\" [config]=\"ckTreatmentNoteConfig\">{{model.TreatmentNotes}}\r\n                    </ckeditor>\r\n                </ba-card>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-6\">\r\n                <ba-card title=\"Disease & Medication\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"diseases\">Diseases: </label>\r\n\r\n                        <ol style=\"width: 300px\">\r\n\r\n                            <li style=\"display: flex;\" *ngFor=\"let e of model.Diseases;let i=index\">{{e}} <i\r\n                                    (click)=\"model.Diseases.splice($event.target.id,1)\" id=\"{{i}}\" style=\"margin-left: auto;\" class=\"fa fa-times\"\r\n                                    aria-hidden=\"true\"></i> </li>\r\n                            <input type=\"text\" class=\"form-control\" list=\"diseasesCode\" [(ngModel)]=\"disease\"\r\n                                placeholder=\"Enter Disease\" (keyup.enter)=\"addDisease($event)\" />\r\n                            <small>Please press \"Enter\" to add Disease</small>\r\n\r\n                            <datalist id=\"diseasesCode\">\r\n                                <option *ngFor=\"let d of diseaseList\" [value]=\"d.DESCRIPTION\">{{d.DESCRIPTION}}\r\n                                </option>\r\n                            </datalist>\r\n\r\n                        </ol>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"medication\">Medication: </label>\r\n\r\n                        <ol style=\"width: 300px\">\r\n\r\n                            <input type=\"text\" class=\"form-control\" list=\"medicationsCode\" [(ngModel)]=\"medication\"\r\n                                placeholder=\"Enter Medication\" (keyup.enter)=\"addMedication($event)\" />\r\n                            <small>Please press \"Enter\" to add Medication</small>\r\n\r\n                            <datalist id=\"medicationsCode\">\r\n                                <option *ngFor=\"let d of medicationList\" [value]=\"d.DESCRIPTION\">{{d.DESCRIPTION}}\r\n                                </option>\r\n                            </datalist>\r\n                            <div *ngFor=\"let e of model.Medications;let i=index\">\r\n                                <h5 style=\"display: flex;\">\r\n                                    {{e.DESCRIPTION}} <i (click)=\"model.Medications.splice($event.target.id,1)\" id=\"{{i}}\" style=\"margin-left: auto;\"\r\n                                        class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n\r\n                                </h5>\r\n                                <p *ngIf=\"!e.RemarksEditable\" style=\"margin-left:20px; display: flex;\">{{e.REMARKS}}<i\r\n                                        (click)=\"e.RemarksEditable=true\" id=\"{{i}}\" style=\"margin-left: auto;\"\r\n                                        class=\"fa fa-pencil\" aria-hidden=\"true\"></i></p>\r\n                                <input type=\"text\" class=\"form-control\" *ngIf=\"e.RemarksEditable\" [(ngModel)]=\"e.REMARKS\" (keyup.enter)=\"e.RemarksEditable=false\" />\r\n                            </div>\r\n                        </ol>\r\n                    </div>\r\n                </ba-card>\r\n            </div>\r\n\r\n            <div class=\"col-xl-6\">\r\n                <ba-card title=\"Prescriptions\">\r\n                    <!-- Fix this code later : Amir May 30 2022 -->\r\n                    <div class=\"form-group\">\r\n                        <label for=\"prescription\">Morning Prescriptions:</label>\r\n\r\n                        <ol style=\"width: 300px\">\r\n                            <input id=\"morningPrescription\" type=\"text\" class=\"form-control\" list=\"codes\" [(ngModel)]=\"prescription\"\r\n                                placeholder=\"Enter Prescriptions\" (keyup.enter)=\"addPrescription($event, model.Prescriptions)\" />\r\n                            <small>Please press \"Enter\" to add Prescription</small>\r\n                            <datalist id=\"codes\">\r\n                                <option *ngFor=\"let p of prescriptionList\" [value]=\"p.DESCA\">{{p.DESCA}}\r\n                                </option>\r\n                            </datalist>\r\n\r\n                            <div *ngFor=\"let e of model.Prescriptions;let i=index\">\r\n                                <h5 style=\"display: flex;\">\r\n                                    {{e.DESCA}} <i (click)=\"model.Prescriptions.splice($event.target.id, 1)\" id=\"{{i}}\" style=\"margin-left: auto;\"\r\n                                        class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n\r\n                                </h5>\r\n                                <p *ngIf=\"!e.DirectiveEditable\" style=\"margin-left:20px; display: flex;\">{{e.directives}}<i\r\n                                        (click)=\"e.DirectiveEditable=true\" id=\"{{i}}\" style=\"margin-left: auto;\"\r\n                                        class=\"fa fa-pencil\" aria-hidden=\"true\"></i></p>\r\n                                <input type=\"text\" class=\"form-control\" *ngIf=\"e.DirectiveEditable\" [(ngModel)]=\"e.directives\" (keyup.enter)=\"e.DirectiveEditable=false\" />\r\n                            </div>\r\n                        </ol>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"prescription\">Evening Prescriptions:</label>\r\n\r\n                        <ol style=\"width: 300px\">\r\n                            <input id=\"eveningPrescription\" type=\"text\" class=\"form-control\" list=\"codes\" [(ngModel)]=\"eveningPrescription\"\r\n                                placeholder=\"Enter Prescriptions\" (keyup.enter)=\"addPrescription($event, model.EveningPrescriptions)\" />\r\n                            <small>Please press \"Enter\" to add Prescription</small>\r\n                           \r\n\r\n                            <div *ngFor=\"let e of model.EveningPrescriptions;let i=index\">\r\n                                <h5 style=\"display: flex;\">\r\n                                    {{e.DESCA}} <i (click)=\"model.EveningPrescriptions.splice($event.target.id, 1)\" id=\"{{i}}\" style=\"margin-left: auto;\"\r\n                                        class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                                </h5>\r\n                                <p *ngIf=\"!e.DirectiveEditable\" style=\"margin-left:20px; display: flex;\">{{e.directives}}<i\r\n                                        (click)=\"e.DirectiveEditable=true\" id=\"{{i}}\" style=\"margin-left: auto;\"\r\n                                        class=\"fa fa-pencil\" aria-hidden=\"true\"></i></p>\r\n                                <input type=\"text\" class=\"form-control\" *ngIf=\"e.DirectiveEditable\" [(ngModel)]=\"e.directives\" (keyup.enter)=\"e.DirectiveEditable=false\" />\r\n                            </div>\r\n                        </ol>\r\n                    </div>                    \r\n                    \r\n                </ba-card>\r\n            </div>\r\n        </div>\r\n        <ba-card title=\"Followup & Session Documents\">\r\n            <div class=\"form-group\" style=\"display: inline-block; vertical-align: top;\">\r\n                <label for=\"followup\">Followup Period</label>\r\n                <input class=\"form-control\" type=\"number\" [(ngModel)]=\"model.FollowUpPeriod\" />\r\n            </div>\r\n            <div style=\"display: flex; margin-bottom: 10px; overflow: scroll; \">\r\n                <li *ngFor=\"let f of model.TreatmentDocuments\" style=\"margin-right: 5px;\">\r\n\r\n                    <button type=\"button \" class=\"btn btn-danger close-pdf\" (click)=\"deleteImage(f)\">x</button>\r\n\r\n                    <ng-container *ngIf=\"!f.endsWith('pdf')\">\r\n                        <img height=\"80px\" width=\"80px\" style=\"object-fit: contain;\" src=\"{{contentUrl + f}}\"\r\n                            (click)=\"previewImage($event)\" />\r\n                    </ng-container>\r\n\r\n                    <a *ngIf=\"f.endsWith('pdf')\" target=\"_blank\" href=\"{{contentUrl + f}}\">\r\n                        <img height=\"50px\"\r\n                            src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png\" />\r\n                    </a>\r\n\r\n                </li>\r\n            </div>\r\n            <!-- <img *ngFor=\"let e of uploadFilesUrl\" height=\"80px\" width=\"80px\" src=\"{{e}}\"\r\n            (click)=\"previewImage($event)\" /> -->\r\n            <input type=\"file\" (change)=\"onFileChanged($event)\" multiple=\"multiple\" />\r\n            <!-- // <button type=\"button \" class=\"btn btn-danger\" (click)=\"removeDocument(e)\">X</button>\r\n        </ba-card>\r\n        <ba-card title=\"NOTES & REMARKS\">\r\n            <textarea class=\"form-control\" [(ngModel)]=\"model.remarks\">{{model.remarks}}</textarea>\r\n\r\n       // <button type=\"button \" class=\"btn btn-danger\" (click)=\"removeDocument(e)\">X</button> -->\r\n        </ba-card>\r\n\r\n        <ba-card title=\"NOTES & REMARKS\">\r\n            <textarea class=\"form-control\" [(ngModel)]=\"model.remarks\">{{model.remarks}}</textarea>\r\n        </ba-card>\r\n\r\n        <ba-card>\r\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"SaveClickEvent()\">Submit</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"DeleteConformation()\" *ngIf=\"mode=='edit'\">Delete\r\n            </button>\r\n            <button type=\"submit\" class=\"btn btn-primary\" *ngIf=\"mode!='add'\" (click)=\"printTreatmentEntry(model, true)\">Print</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Back</button>\r\n        </ba-card>\r\n\r\n        <!-- PATIENT HISTORY -->\r\n        <ba-card title=\"Patient Treatment History\">\r\n            <ng2-smart-table [settings]=\"settings\" [(source)]=\"historySource\" (view)=\"editList($event)\">\r\n            </ng2-smart-table>\r\n        </ba-card>\r\n    </div>\r\n\r\n    <!-- END FORM -->\r\n\r\n    <div bsModal #childPreviewModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button class=\"close\" aria-label=\"Close\" (click)=\"childPreviewModal.hide()\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Treatment Documents</h4>\r\n                </div>\r\n                <button id=\"button\" class=\"btn btn-primary confirm-btn\" (click)=\"nextImage($event)\">Next</button>\r\n                <div id=\"container\" style=\"text-align: center;\">\r\n                    <img width=\"600px\" height=\"600px\" style=\"object-fit: contain;\" [src]=\"selectedImage\" id=\"image\"\r\n                        (click)=\"onImageClick($event)\" />\r\n                </div>\r\n\r\n                <div class=\"modal-footer\" style=\"text-align: center;\">\r\n                    <img *ngFor=\"let e of uploadFilesUrl\" height=\"80px\" width=\"80px\" style=\"object-fit: contain;\"\r\n                        src=\"{{e}}\" (click)=\"changeImage($event)\" />\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-sm\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Information</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    {{DialogMessage}}\r\n                </div>\r\n                <!--<div class=\"modal-footer\">\r\n                      <button class=\"btn btn-primary confirm-btn\" (click)=\"hideChildModal()\">Save changes</button>\r\n                      <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=onsubmit()>Save</button>\r\n                  </div>!-->\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-sm\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button class=\"close\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Warning</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    Once you delete the schedule you can't recover it back. Are U sure you want to delete this\r\n                    Schedule?\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n                    <button class=\"btn btn-primary confirm-btn\" type=\"button\"\r\n                        (click)=\"deleteModal.hide()\">Cancel</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/pages/schedule/components/TreatmentEntry/TreatmentDetails.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/schedule/components/TreatmentEntry/TreatmentDetails.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n    <div class=\"row\">\r\n      <!-- <button class=\"btn btn-primary\" style=\"margin-bottom: 10px;margin-left:18px\" (click)=\"onAddClick()\">New Treatment Entry</button> -->\r\n      <!-- <input type=\"date\" name=\"date\" id=\"date\" \r\n      (change)=\"OnDateChangeEvent($event.target.value)\" /> -->\r\n    </div>\r\n    <div>\r\n      <ba-card title=\"Treatment Details\" baCardClass=\"with-scroll\">\r\n        <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (delete)=\"onDeleteConfirm($event)\"\r\n          (view)=\"onViewClick($event)\"></ng2-smart-table>\r\n      </ba-card>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-md\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n            \r\n          </button>\r\n          <h4 class=\"modal-title\">Information</h4>\r\n        </div>\r\n  \r\n        <div class=\"modal-body\">\r\n          <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n          {{DialogMessage}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button class=\"close\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n                              <span aria-hidden=\"true\">&times;</span>\r\n                          </button>\r\n          <h4 class=\"modal-title\">Warning</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          Once you delete the Treatment you can't recover it back. Are U sure you want to delete this Treatment?\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n          <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=\"deleteModal.hide()\">Cancel</button>\r\n        </div>!\r\n  \r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/pages/schedule/components/TreatmentEntry/TreatmentDetails.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/schedule/components/TreatmentEntry/TreatmentDetails.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TreatmentDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentDetails", function() { return TreatmentDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var style_loader_masters_components_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! style-loader!../../../masters/components/smartTables.scss */ "./node_modules/style-loader/index.js!./src/app/pages/masters/components/smartTables.scss");
/* harmony import */ var style_loader_masters_components_smartTables_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(style_loader_masters_components_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _theme_pipes_label_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../theme/pipes/label.pipe */ "./src/app/theme/pipes/label.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");











var TreatmentDetails = /** @class */ (function () {
    function TreatmentDetails(service, _authService, router, labelPipe, http) {
        this.service = service;
        this._authService = _authService;
        this.router = router;
        this.labelPipe = labelPipe;
        this.http = http;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.settings = {
            mode: 'external',
            columns: {
                Patient: {
                    title: 'Patient',
                    type: 'string',
                },
                Healer: {
                    title: 'Staff',
                    type: 'string',
                },
                Mobile: {
                    title: 'Mobile',
                    type: 'string',
                },
                DATE: {
                    title: 'Date',
                    type: 'string'
                },
                Miti: {
                    title: 'Miti',
                    type: 'string'
                },
                hasDocument: {
                    title: 'Has Attachment',
                    type: 'text',
                    class: 'centeredColumn'
                }
            }
        };
        this.subcriptions = [];
        this.source = new _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["ServerDataSource"](http, {
            endPoint: this.service.apiUrl + '/getTreatmentList',
            dataKey: 'data.result',
            pagerPageKey: 'currentPage',
            pagerLimitKey: 'maxResultCount',
            totalKey: 'data.total',
        });
    }
    TreatmentDetails.prototype.setMode = function () {
        // this.divService.create();
        //this.settings.mode='inline';
        //console.log(this.settings.mode);
    };
    TreatmentDetails.prototype.onAddClick = function () {
        if (this._authService.getUserProfile()) {
            this.router.navigate(['/pages/schedule/treatment', { mode: "add", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to add " + this.labelPipe.transform('customer') + ".";
            this.childModal.show();
        }
    };
    TreatmentDetails.prototype.onDeleteConfirm = function (event) {
        this.selectedRow = event;
        this.deleteModal.show();
    };
    TreatmentDetails.prototype.DeleteEvent = function () {
        var _this = this;
        this.deleteModal.hide();
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            try {
                this.DialogMessage = "Deleting please wait...";
                this.childModal.show();
                //console.log("delete",this.selectedRow.data);
                var sub = this.service.postmaster("delete", { DocumentId: this.selectedRow.data.DocumentId }, "/deleteTreatment")
                    .subscribe(function (data) {
                    //console.log("sub",sub);
                    // if (data.status == 'ok') {
                    //console.log("data", data);
                    //Displaying dialog message for save with timer of 1 secs
                    if (data.status == "ok") {
                        _this.DialogMessage = "Data Deleted Successfully";
                        if (_this.service._customerList.length > 0) {
                            _this.service._customerList.splice(_this.service._customerList.indexOf(_this.selectedRow.data), 1);
                            _this.source.load(_this.service._customerList);
                        }
                    }
                    else {
                        var error = Object(jquery__WEBPACK_IMPORTED_MODULE_8__["parseJSON"])(data.result._body);
                        _this.DialogMessage = error.result;
                    }
                    setTimeout(function () {
                        _this.childModal.hide();
                    }, 3000);
                    // }
                    // else {
                    //   //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                    //   if (data.result._body == "The ConnectionString property has not been initialized.") {
                    //     this.router.navigate(['/login', this.router.url]);
                    //     return;
                    //   }
                    //   //Some other issues need to check
                    //   this.DialogMessage = "Error in Deleting Data:" + data.result._body;
                    //   console.log(data.result._body);
                    //   setTimeout(() => {
                    //     this.childModal.hide();
                    //   }, 3000)
                    // }
                }, function (error) { alert(error); });
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
    TreatmentDetails.prototype.onViewClick = function (event) {
        this.router.navigate(["/pages/schedule/treatment", { id: event.data.DocumentId, mode: "view", returnUrl: this.router.url }]);
    };
    TreatmentDetails.prototype.onEditClick = function (event) {
        this.router.navigate(["/pages/schedule/treatment", { id: event.data.DocumentId, mode: "edit", returnUrl: this.router.url }]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], TreatmentDetails.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], TreatmentDetails.prototype, "deleteModal", void 0);
    TreatmentDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'treatment-details',
            template: __webpack_require__(/*! ./TreatmentDetails.component.html */ "./src/app/pages/schedule/components/TreatmentEntry/TreatmentDetails.component.html"),
            styles: [__webpack_require__(/*! ../../schedule.scss */ "./src/app/pages/schedule/schedule.scss")],
            providers: [],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _theme_pipes_label_pipe__WEBPACK_IMPORTED_MODULE_9__["LabelPipe"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]])
    ], TreatmentDetails);
    return TreatmentDetails;
}());



/***/ }),

/***/ "./src/app/pages/schedule/components/TreatmentEntry/TreatmentList.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/schedule/components/TreatmentEntry/TreatmentList.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n  <div class=\"row\">\r\n    <button class=\"btn btn-primary\" style=\"margin-bottom: 10px;margin-left:18px\" (click)=\"onAddClick()\">New Treatment Entry</button>\r\n    <input type=\"date\" name=\"date\" id=\"date\" \r\n    (change)=\"OnDateChangeEvent($event.target.value)\" />\r\n  </div>\r\n  <div>\r\n    <ba-card title=\"Treatments\" baCardClass=\"with-scroll\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (delete)=\"onDeleteConfirm($event)\"\r\n        (view)=\"onViewClick($event)\"></ng2-smart-table>\r\n    </ba-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>          \r\n        </button>\r\n        <h4 class=\"modal-title\">Information</h4>\r\n      </div>\r\n\r\n      <div class=\"modal-body\">\r\n        <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n        {{DialogMessage}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Once you delete the Treatment you can't recover it back. Are U sure you want to delete this Treatment?\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n        <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=\"deleteModal.hide()\">Cancel</button>\r\n      </div>!\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/schedule/components/TreatmentEntry/TreatmentList.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/schedule/components/TreatmentEntry/TreatmentList.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TreatmentList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentList", function() { return TreatmentList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var style_loader_masters_components_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! style-loader!../../../masters/components/smartTables.scss */ "./node_modules/style-loader/index.js!./src/app/pages/masters/components/smartTables.scss");
/* harmony import */ var style_loader_masters_components_smartTables_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(style_loader_masters_components_smartTables_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/repositories/masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _theme_pipes_label_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../theme/pipes/label.pipe */ "./src/app/theme/pipes/label.pipe.ts");










var TreatmentList = /** @class */ (function () {
    function TreatmentList(service, _authService, router, labelPipe) {
        var _this = this;
        this.service = service;
        this._authService = _authService;
        this.router = router;
        this.labelPipe = labelPipe;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.settings = {
            mode: 'external',
            edit: {
                editButtonContent: '<i class="fa  fa-pencil"></i>'
            },
            view: {
                viewButtonContent: '<i class="fa  fa-eye"></i>'
            },
            delete: {
                deleteButtonContent: '<i class="ion-trash-a"></i>',
                confirmDelete: true
            },
            columns: {
                Patient: {
                    title: 'Patient',
                    type: 'string',
                    valuePrepareFunction: function (Patient) {
                        return Patient.NAME;
                    },
                    filterFunction: function (Patient, search) {
                        if (search.length > 0) {
                            return Patient.NAME.toLowerCase().match(search.toLowerCase());
                        }
                        else {
                            return Patient.NAME;
                        }
                    }
                },
                Healer: {
                    title: 'Staff',
                    type: 'string',
                    valuePrepareFunction: function (Patient) {
                        return Patient.NAME;
                    },
                    filterFunction: function (Patient, search) {
                        if (search.length > 0) {
                            return Patient.NAME.toLowerCase().match(search.toLowerCase());
                        }
                        else {
                            return Patient.NAME;
                        }
                    }
                },
                Mobile: {
                    title: 'Mobile',
                    type: 'string',
                },
            }
        };
        this.subcriptions = [];
        this.source = new _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["LocalDataSource"]();
        var Clist = [];
        if (this.service.selected_Date != null) {
            //console.log('VALIDATED');
            // var date = new DatePipe("en-US").transform(Date.now(), "MM/dd/yyyy");
            //console.log(this.service.selected_Date, typeof this.service.selected_Date);
            var date = this.service.getDate();
            //console.log('saveDate',date,typeof date)
            this.service.getTreatmentListDetails(encodeURIComponent(date)).subscribe(function (data) {
                Clist.push(data);
            }, function (Error) { return console.log(Error); }, function () {
                //console.log(Clist, "CLIST NG2")
                _this.service._treatmentList = Clist;
                _this.source.load(Clist);
            });
        }
        else {
            var date = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]("en-US").transform(Date.now(), "MM/dd/yyyy");
            this.service.getTreatmentListDetails(encodeURIComponent(date)).subscribe(function (data) {
                Clist.push(data);
            }, function (Error) { return console.log(Error); }, function () {
                _this.service._treatmentList = Clist;
                _this.source.load(Clist);
            });
        }
    }
    TreatmentList.prototype.onAddClick = function () {
        if (this._authService.getUserProfile()) {
            this.router.navigate(['/pages/schedule/treatment', { mode: "add", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to add " + this.labelPipe.transform('customer') + ".";
            this.childModal.show();
        }
    };
    TreatmentList.prototype.onDeleteConfirm = function (event) {
        this.selectedRow = event;
        this.deleteModal.show();
    };
    TreatmentList.prototype.DeleteEvent = function () {
        var _this = this;
        this.deleteModal.hide();
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            try {
                this.DialogMessage = "Deleting please wait...";
                this.childModal.show();
                var sub = this.service.postmaster("delete", this.selectedRow.data, "/deleteTreatment")
                    .subscribe(function (data) {
                    // if (data.status == 'ok') {
                    //console.log("data", data);
                    //Displaying dialog message for save with timer of 1 secs
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
                    }, 3000);
                    // }
                    // else {
                    //   //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                    //   if (data.result._body == "The ConnectionString property has not been initialized.") {
                    //     this.router.navigate(['/login', this.router.url]);
                    //     return;
                    //   }
                    //   //Some other issues need to check
                    //   this.DialogMessage = "Error in Deleting Data:" + data.result._body;
                    //   console.log(data.result._body);
                    //   setTimeout(() => {
                    //     this.childModal.hide();
                    //   }, 3000)
                    // }
                }, function (error) { alert(error); });
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
    TreatmentList.prototype.onViewClick = function (event) {
        this.router.navigate(["/pages/schedule/treatment", { id: event.data.DocumentId, mode: "view", returnUrl: this.router.url }]);
    };
    TreatmentList.prototype.onEditClick = function (event) {
        this.router.navigate(["/pages/schedule/treatment", { id: event.data.DocumentId, mode: "edit", returnUrl: this.router.url }]);
    };
    TreatmentList.prototype.OnDateChangeEvent = function (v) {
        var _this = this;
        var Clist = [];
        //console.log('Before v:',v,typeof v);
        // var date = new DatePipe("en-US").transform(v, "MM/dd/yyyy"); 
        //console.log('After v:',v,typeof v);
        // this.service.saveDate(date);
        var date = v;
        //console.log('before date:',date,typeof date)
        this.service.saveDate(date);
        this.service.getTreatmentListDetails(encodeURIComponent(date)).subscribe(function (data) {
            Clist.push(data);
        }, function (Error) { return console.log(Error); }, function () {
            _this.service._treatmentList = Clist;
            _this.source.load(Clist);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], TreatmentList.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], TreatmentList.prototype, "deleteModal", void 0);
    TreatmentList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'treatment-list',
            template: __webpack_require__(/*! ./TreatmentList.component.html */ "./src/app/pages/schedule/components/TreatmentEntry/TreatmentList.component.html"),
            providers: [],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_repositories_masterRepo_service__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _theme_pipes_label_pipe__WEBPACK_IMPORTED_MODULE_9__["LabelPipe"]])
    ], TreatmentList);
    return TreatmentList;
}());



/***/ }),

/***/ "./src/app/pages/schedule/schedule.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/schedule/schedule.component.ts ***!
  \******************************************************/
/*! exports provided: Schedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schedule", function() { return Schedule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Schedule = /** @class */ (function () {
    function Schedule() {
    }
    ;
    Schedule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'schedule',
            template: '<router-outlet></router-outlet>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Schedule);
    return Schedule;
}());



/***/ }),

/***/ "./src/app/pages/schedule/schedule.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/schedule/schedule.module.ts ***!
  \***************************************************/
/*! exports provided: ScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleModule", function() { return ScheduleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _theme_nga_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/nga.module */ "./src/app/theme/nga.module.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _schedule_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule.component */ "./src/app/pages/schedule/schedule.component.ts");
/* harmony import */ var _schedule_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schedule.routing */ "./src/app/pages/schedule/schedule.routing.ts");
/* harmony import */ var _components_ScheduleInput_masterSchedule_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ScheduleInput/masterSchedule.component */ "./src/app/pages/schedule/components/ScheduleInput/masterSchedule.component.ts");
/* harmony import */ var _scheduleInput_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scheduleInput.service */ "./src/app/pages/schedule/scheduleInput.service.ts");
/* harmony import */ var _common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/services/permission/guard.service */ "./src/app/common/services/permission/guard.service.ts");
/* harmony import */ var _components_ScheduleInput_scheduleInput_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ScheduleInput/scheduleInput.component */ "./src/app/pages/schedule/components/ScheduleInput/scheduleInput.component.ts");
/* harmony import */ var _components_TreatmentEntry_Treatment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/TreatmentEntry/Treatment.component */ "./src/app/pages/schedule/components/TreatmentEntry/Treatment.component.ts");
/* harmony import */ var _components_FollowUp_followup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/FollowUp/followup.component */ "./src/app/pages/schedule/components/FollowUp/followup.component.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/index.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ng2-smart-table/ng2-smart-table */ "./src/app/ng2-smart-table/ng2-smart-table.ts");
/* harmony import */ var _components_CustomerSelect_customerSelect_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/CustomerSelect/customerSelect.component */ "./src/app/pages/schedule/components/CustomerSelect/customerSelect.component.ts");
/* harmony import */ var _components_TreatmentEntry_TreatmentList_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/TreatmentEntry/TreatmentList.component */ "./src/app/pages/schedule/components/TreatmentEntry/TreatmentList.component.ts");
/* harmony import */ var _components_TreatmentEntry_TreatmentDetails_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/TreatmentEntry/TreatmentDetails.component */ "./src/app/pages/schedule/components/TreatmentEntry/TreatmentDetails.component.ts");
/* harmony import */ var _components_CustomerSelect_customerSelect_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/CustomerSelect/customerSelect.pipe */ "./src/app/pages/schedule/components/CustomerSelect/customerSelect.pipe.ts");
/* harmony import */ var _components_CustomerSelect_mobileSelect_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/CustomerSelect/mobileSelect.pipe */ "./src/app/pages/schedule/components/CustomerSelect/mobileSelect.pipe.ts");
/* harmony import */ var _common_nepali_date_picker_nepali_date_picker_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../common/nepali-date-picker/nepali-date-picker.module */ "./src/app/common/nepali-date-picker/nepali-date-picker.module.ts");
/* harmony import */ var _components_ScheduleSearch_customer_all_schedule_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/ScheduleSearch/customer-all-schedule.component */ "./src/app/pages/schedule/components/ScheduleSearch/customer-all-schedule.component.ts");
/* harmony import */ var _components_CheckIn_checkIn_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/CheckIn/checkIn.component */ "./src/app/pages/schedule/components/CheckIn/checkIn.component.ts");
/* harmony import */ var _components_CheckOut_CheckInList_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/CheckOut/CheckInList.component */ "./src/app/pages/schedule/components/CheckOut/CheckInList.component.ts");
/* harmony import */ var _components_CheckOut_CheckOut_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/CheckOut/CheckOut.component */ "./src/app/pages/schedule/components/CheckOut/CheckOut.component.ts");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var _components_AppointmentRequest_RequestList_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/AppointmentRequest/RequestList.component */ "./src/app/pages/schedule/components/AppointmentRequest/RequestList.component.ts");
/* harmony import */ var _components_AppointmentRequest_requestDetail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/AppointmentRequest/requestDetail.component */ "./src/app/pages/schedule/components/AppointmentRequest/requestDetail.component.ts");
/* harmony import */ var _components_CheckIn_kot_print_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/CheckIn/kot-print.component */ "./src/app/pages/schedule/components/CheckIn/kot-print.component.ts");
/* harmony import */ var _components_ScheduleInput_TimelineContextMenu_timelineContextMenu_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/ScheduleInput/TimelineContextMenu/timelineContextMenu.component */ "./src/app/pages/schedule/components/ScheduleInput/TimelineContextMenu/timelineContextMenu.component.ts");































//import {DayPilot} from "daypilot-pro-angular";
var ScheduleModule = /** @class */ (function () {
    function ScheduleModule() {
    }
    ScheduleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _theme_nga_module__WEBPACK_IMPORTED_MODULE_4__["NgaModule"],
                _schedule_routing__WEBPACK_IMPORTED_MODULE_7__["routing"],
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_14__["CKEditorModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                _ng2_smart_table_ng2_smart_table__WEBPACK_IMPORTED_MODULE_15__["Ng2SmartTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _common_nepali_date_picker_nepali_date_picker_module__WEBPACK_IMPORTED_MODULE_21__["NepaliDateModule"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_26__["AngularMultiSelectModule"]
            ],
            declarations: [
                //   DayPilot.Angular.Scheduler,
                //  DayPilot.Angular.Modal,
                //  DayPilot.Angular.Navigator,
                _schedule_component__WEBPACK_IMPORTED_MODULE_6__["Schedule"], _components_ScheduleInput_masterSchedule_component__WEBPACK_IMPORTED_MODULE_8__["MasterSchedule"], _components_ScheduleInput_scheduleInput_component__WEBPACK_IMPORTED_MODULE_11__["ScheduleInput"],
                _components_TreatmentEntry_Treatment_component__WEBPACK_IMPORTED_MODULE_12__["TreatmentEntry"], _components_FollowUp_followup_component__WEBPACK_IMPORTED_MODULE_13__["FollowUp"], _components_CustomerSelect_customerSelect_component__WEBPACK_IMPORTED_MODULE_16__["CustomerSelect"], _components_TreatmentEntry_TreatmentList_component__WEBPACK_IMPORTED_MODULE_17__["TreatmentList"], _components_TreatmentEntry_TreatmentDetails_component__WEBPACK_IMPORTED_MODULE_18__["TreatmentDetails"],
                _components_CustomerSelect_customerSelect_pipe__WEBPACK_IMPORTED_MODULE_19__["CustomerPipe"], _components_CustomerSelect_mobileSelect_pipe__WEBPACK_IMPORTED_MODULE_20__["MobilePipe"], _components_ScheduleSearch_customer_all_schedule_component__WEBPACK_IMPORTED_MODULE_22__["CustomerAllSchedule"],
                _components_CheckIn_checkIn_component__WEBPACK_IMPORTED_MODULE_23__["CheckIn"], _components_CheckOut_CheckInList_component__WEBPACK_IMPORTED_MODULE_24__["CheckInList"], _components_CheckOut_CheckOut_component__WEBPACK_IMPORTED_MODULE_25__["CheckOutEntry"], _components_AppointmentRequest_RequestList_component__WEBPACK_IMPORTED_MODULE_27__["AppointmentRequestList"], _components_AppointmentRequest_requestDetail_component__WEBPACK_IMPORTED_MODULE_28__["AppointmentRequest"],
                _components_CheckIn_kot_print_component__WEBPACK_IMPORTED_MODULE_29__["KOTPrintComponent"], _components_ScheduleInput_TimelineContextMenu_timelineContextMenu_component__WEBPACK_IMPORTED_MODULE_30__["TimelineContextMenuComponent"]
            ],
            providers: [
                _scheduleInput_service__WEBPACK_IMPORTED_MODULE_9__["ScheduleInputService"], _common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_10__["CanActivateTeam"], _components_CheckIn_kot_print_component__WEBPACK_IMPORTED_MODULE_29__["KOTPrintComponent"]
            ],
        })
    ], ScheduleModule);
    return ScheduleModule;
}());



/***/ }),

/***/ "./src/app/pages/schedule/schedule.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/schedule/schedule.routing.ts ***!
  \****************************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/services/permission/guard.service */ "./src/app/common/services/permission/guard.service.ts");
/* harmony import */ var _schedule_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule.component */ "./src/app/pages/schedule/schedule.component.ts");
/* harmony import */ var _components_ScheduleInput_masterSchedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ScheduleInput/masterSchedule.component */ "./src/app/pages/schedule/components/ScheduleInput/masterSchedule.component.ts");
/* harmony import */ var _components_ScheduleInput_scheduleInput_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ScheduleInput/scheduleInput.component */ "./src/app/pages/schedule/components/ScheduleInput/scheduleInput.component.ts");
/* harmony import */ var _components_TreatmentEntry_Treatment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TreatmentEntry/Treatment.component */ "./src/app/pages/schedule/components/TreatmentEntry/Treatment.component.ts");
/* harmony import */ var _components_FollowUp_followup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/FollowUp/followup.component */ "./src/app/pages/schedule/components/FollowUp/followup.component.ts");
/* harmony import */ var _components_TreatmentEntry_TreatmentList_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/TreatmentEntry/TreatmentList.component */ "./src/app/pages/schedule/components/TreatmentEntry/TreatmentList.component.ts");
/* harmony import */ var _components_TreatmentEntry_TreatmentDetails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/TreatmentEntry/TreatmentDetails.component */ "./src/app/pages/schedule/components/TreatmentEntry/TreatmentDetails.component.ts");
/* harmony import */ var _components_CheckIn_checkIn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/CheckIn/checkIn.component */ "./src/app/pages/schedule/components/CheckIn/checkIn.component.ts");
/* harmony import */ var _components_CheckOut_CheckInList_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/CheckOut/CheckInList.component */ "./src/app/pages/schedule/components/CheckOut/CheckInList.component.ts");
/* harmony import */ var _components_CheckOut_CheckOut_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/CheckOut/CheckOut.component */ "./src/app/pages/schedule/components/CheckOut/CheckOut.component.ts");
/* harmony import */ var _components_AppointmentRequest_RequestList_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/AppointmentRequest/RequestList.component */ "./src/app/pages/schedule/components/AppointmentRequest/RequestList.component.ts");
/* harmony import */ var _components_AppointmentRequest_requestDetail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/AppointmentRequest/requestDetail.component */ "./src/app/pages/schedule/components/AppointmentRequest/requestDetail.component.ts");














// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: _schedule_component__WEBPACK_IMPORTED_MODULE_2__["Schedule"],
        children: [
            { path: 'mastersche', component: _components_ScheduleInput_masterSchedule_component__WEBPACK_IMPORTED_MODULE_3__["MasterSchedule"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_1__["CanActivateTeam"]] },
            { path: 'scheInput', component: _components_ScheduleInput_scheduleInput_component__WEBPACK_IMPORTED_MODULE_4__["ScheduleInput"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_1__["CanActivateTeam"]] },
            { path: 'checkIn', component: _components_CheckIn_checkIn_component__WEBPACK_IMPORTED_MODULE_9__["CheckIn"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_1__["CanActivateTeam"]] },
            { path: 'check-in-list', component: _components_CheckOut_CheckInList_component__WEBPACK_IMPORTED_MODULE_10__["CheckInList"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_1__["CanActivateTeam"]] },
            { path: 'checkOut', component: _components_CheckOut_CheckOut_component__WEBPACK_IMPORTED_MODULE_11__["CheckOutEntry"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_1__["CanActivateTeam"]] },
            { path: 'treatment', component: _components_TreatmentEntry_Treatment_component__WEBPACK_IMPORTED_MODULE_5__["TreatmentEntry"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_1__["CanActivateTeam"]] },
            { path: 'followup', component: _components_FollowUp_followup_component__WEBPACK_IMPORTED_MODULE_6__["FollowUp"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_1__["CanActivateTeam"]] },
            { path: 'treatment-list', component: _components_TreatmentEntry_TreatmentList_component__WEBPACK_IMPORTED_MODULE_7__["TreatmentList"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_1__["CanActivateTeam"]] },
            { path: 'treatment-details', component: _components_TreatmentEntry_TreatmentDetails_component__WEBPACK_IMPORTED_MODULE_8__["TreatmentDetails"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_1__["CanActivateTeam"]] },
            { path: 'appointment-requests', component: _components_AppointmentRequest_RequestList_component__WEBPACK_IMPORTED_MODULE_12__["AppointmentRequestList"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_1__["CanActivateTeam"]] },
            { path: 'request-detail', component: _components_AppointmentRequest_requestDetail_component__WEBPACK_IMPORTED_MODULE_13__["AppointmentRequest"], canActivate: [_common_services_permission_guard_service__WEBPACK_IMPORTED_MODULE_1__["CanActivateTeam"]] }
            // { path: 'schedule/scheInput', component: Schedule },
        ]
    },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/schedule/scheduleInput.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/schedule/scheduleInput.service.ts ***!
  \*********************************************************/
/*! exports provided: ScheduleInputService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleInputService", function() { return ScheduleInputService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _global_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global.state */ "./src/app/global.state.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var ScheduleInputService = /** @class */ (function () {
    function ScheduleInputService(http, authService, state) {
        this.http = http;
        this.authService = authService;
        this.state = state;
        this._scheduleList = [{}];
    }
    Object.defineProperty(ScheduleInputService.prototype, "apiUrl", {
        get: function () {
            var url = this.state.getGlobalSetting("apiUrl");
            var apiUrl = "";
            if (!!url && url.length > 0) {
                apiUrl = url[0];
            }
            ;
            return apiUrl;
        },
        enumerable: true,
        configurable: true
    });
    ScheduleInputService.prototype.getRequestOption = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-type': 'application/json', 'Authorization': this.authService.getAuth().token });
        return { headers: headers };
    };
    ScheduleInputService.prototype.getUser = function () {
        return this.authService.getUserProfile();
    };
    ScheduleInputService.prototype.getEmployeeSchedule = function (param) {
        var returnSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.http.post(this.apiUrl + '/getEmpScheduleList', param, this.getRequestOption())
            .subscribe(function (data) {
            returnSubject.next(data);
            returnSubject.unsubscribe();
        });
        return returnSubject;
    };
    ScheduleInputService.prototype.getRoomSchedule = function (param) {
        var returnSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.http.post(this.apiUrl + '/getRoomScheduleList', param, this.getRequestOption())
            .subscribe(function (data) {
            returnSubject.next(data);
            returnSubject.unsubscribe();
        });
        return returnSubject;
    };
    ScheduleInputService.prototype.getCustomerSchedule = function (param) {
        return this.http.post(this.apiUrl + '/GetCustomerSchedule', param, this.getRequestOption());
    };
    ScheduleInputService.prototype.getGUID = function () {
        return this.http.get(this.apiUrl + '/getGuid', this.getRequestOption());
    };
    ScheduleInputService.prototype.checkHoliday = function (param) {
        return this.http.post(this.apiUrl + '/checkHoliday', param, this.getRequestOption());
    };
    ScheduleInputService.prototype.getTimeSlotForService = function (outletId, serviceId, appointmentDate) {
        var param = {
            outletId: outletId,
            serviceId: serviceId,
            appointmentDate: appointmentDate
        };
        return this.http.post(this.apiUrl + '/getTimeSlotForService', param, this.getRequestOption());
    };
    ScheduleInputService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _global_state__WEBPACK_IMPORTED_MODULE_3__["GlobalState"]])
    ], ScheduleInputService);
    return ScheduleInputService;
}());



/***/ }),

/***/ "./src/assets/js/dayjs.min.js":
/*!************************************!*\
  !*** ./src/assets/js/dayjs.min.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));

/***/ })

}]);
//# sourceMappingURL=schedule-schedule-module.159fcba7c9794777f5c0.js.map