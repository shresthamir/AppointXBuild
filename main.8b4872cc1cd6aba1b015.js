(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./login/login.module": [
		"./src/app/pages/login/login.module.ts"
	],
	"./masters/masters.module": [
		"./src/app/pages/masters/masters.module.ts",
		"masters-masters-module~reports-report-module~schedule-schedule-module~userManager-userManager-module",
		"common",
		"masters-masters-module"
	],
	"./register/register.module": [
		"./src/app/pages/register/register.module.ts",
		"register-register-module"
	],
	"./reports/report.module": [
		"./src/app/pages/reports/report.module.ts",
		"masters-masters-module~reports-report-module~schedule-schedule-module~userManager-userManager-module",
		"reports-report-module~schedule-schedule-module",
		"common",
		"reports-report-module"
	],
	"./schedule/schedule.module": [
		"./src/app/pages/schedule/schedule.module.ts",
		"masters-masters-module~reports-report-module~schedule-schedule-module~userManager-userManager-module",
		"reports-report-module~schedule-schedule-module",
		"common",
		"schedule-schedule-module"
	],
	"./userManager/userManager.module": [
		"./src/app/pages/userManager/userManager.module.ts",
		"masters-masters-module~reports-report-module~schedule-schedule-module~userManager-userManager-module",
		"common",
		"userManager-userManager-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ps": "./node_modules/moment/locale/ar-ps.js",
	"./ar-ps.js": "./node_modules/moment/locale/ar-ps.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku-kmr": "./node_modules/moment/locale/ku-kmr.js",
	"./ku-kmr.js": "./node_modules/moment/locale/ku-kmr.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/app.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/app.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}template,[hidden]{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:bold}button,input{overflow:visible}button,select{text-transform:none}button,html [type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px}[type=\"search\"]::-webkit-search-cancel-button,[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.card.card-blur{background:url(\"/assets/img/blur-bg-blurred.jpg\");transition:none;background-attachment:fixed}.card.card-blur .card-header,.card.card-blur .card-footer{background:transparent}.card{color:#666;background-color:#fff;border:0;border-radius:5px;position:relative;margin-bottom:24px;box-shadow:0 5px 5px 0 rgba(0,0,0,0.25)}.card ::-webkit-scrollbar{width:1em;height:1em}.card ::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.6);cursor:pointer}.card ::-webkit-scrollbar-track{background:rgba(255,255,255,0.7)}.card body{scrollbar-face-color:rgba(0,0,0,0.6);scrollbar-track-color:rgba(255,255,255,0.7)}.card.animated{-webkit-animation-duration:0.5s;animation-duration:0.5s}.card.small-card{height:114px}.card.xsmall-card{height:187px}.card.medium-card{height:400px}.card.xmedium-card{height:550px}.card.large-card{height:974px}.card.viewport100{height:calc(100vh - 218px)}.card.with-scroll .card-body{height:calc(100% - 44px);overflow-y:auto}.card>.card-body{padding:15px 22px;height:100%}.card>.card-header{color:#666;border-bottom-left-radius:0;border-bottom-right-radius:0}.card>.card-footer{color:#666}.card-header,.card-footer{color:#666;border-bottom:1px solid rgba(0,0,0,0.12);height:44px;font-size:16px;padding:14px 22px;background-color:#fff}.card-title{font-weight:400;font-size:16px;text-transform:uppercase;opacity:0.9;color:#666}.card-primary>.card-header{background-color:#4db1a7;border-color:#4db1a7}.card-success>.card-header{background-color:#a6c733;border-color:#a6c733}.card-info>.card-header{background-color:#57bdda;border-color:#57bdda}.card-warning>.card-header{background-color:#e5c649;border-color:#e5c649}.card-danger>.card-header{background-color:#ed7878;border-color:#ed7878}.accordion-card.card.card-primary .card-header p,.accordion-card.card.card-primary .card-header div,.accordion-card.card.card-primary .card-header span,.accordion-card.card.card-success .card-header p,.accordion-card.card.card-success .card-header div,.accordion-card.card.card-success .card-header span,.accordion-card.card.card-info .card-header p,.accordion-card.card.card-info .card-header div,.accordion-card.card.card-info .card-header span,.accordion-card.card.card-warning .card-header p,.accordion-card.card.card-warning .card-header div,.accordion-card.card.card-warning .card-header span,.accordion-card.card.card-danger .card-header p,.accordion-card.card.card-danger .card-header div,.accordion-card.card.card-danger .card-header span{color:rgba(255,255,255,0.8)}.card-group .card.accordion-card .card-header{border-bottom:0}.card-group .card .card-header{border-bottom:1px solid #ddd}.p-with-code{line-height:1.5em}.contextual-example-card{height:120px}.footer-card{height:142px}.light-text{font-weight:300}.dropdown-item{line-height:1}.dropdown-menu{font-size:inherit}.tabs-below .nav-tabs,.tabs-right .nav-tabs,.tabs-left .nav-tabs{border-bottom:0}.tabs-right .nav-tabs,.tabs-left .nav-tabs{min-width:100px}.tabs-right .tab-content,.tabs-left .tab-content{width:calc(100% - 100px);overflow-y:auto}.tabs-right .tab-content{margin-right:100px}.tabs-left .tab-content{margin-left:100px}.tab-content>.tab-pane,.pill-content>.pill-pane{display:none}.tab-content>.active,.pill-content>.active{display:block}.tabs-below>.nav-tabs>li{margin-top:-1px;margin-bottom:0}.tabs-left,.tabs-right{height:100%}.tabs-left>.nav-tabs>li,.tabs-right>.nav-tabs>li{float:none;margin-bottom:0}.tabs-left>.nav-tabs>li>a,.tabs-right>.nav-tabs>li>a{min-width:74px;margin-right:0;margin-bottom:3px}.tabs-left>.nav-tabs{float:left;border-bottom-left-radius:5px}.tabs-left>.nav-tabs>li>a{margin-right:-1px}.tabs-right>.nav.nav-tabs{float:right;border-top-left-radius:0;border-bottom-right-radius:5px}.tabs-right>.nav.nav-tabs>li:first-of-type a{border-top-left-radius:0}.nav-tabs>li.with-dropdown>a{padding:0}.nav-tabs>li.with-dropdown .dropdown-toggle{padding:10px 15px;display:inline-block;cursor:pointer}.tab-content{padding:15px 15px 5px 15px;background:transparent;color:#666}.tab-content .tab-pane p{color:#666}.nav.nav-tabs{border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:1px solid transparent;background-color:#63bbb2}.nav.nav-tabs a{color:#fff}.nav.nav-tabs a:hover{color:#fff}.nav.nav-tabs>li>a{margin-right:0;margin-bottom:0;border-radius:0;border:none}.nav.nav-tabs>li>a:hover{border:none;background-color:#63bbb2}.nav.nav-tabs>li.active>a{color:#fff;background-color:#209e91}.nav.nav-tabs>li:first-of-type a{border-top-left-radius:5px}.nav.nav-tabs .dropdown-menu>li>a{color:#7d7d7d}.nav.nav-tabs .dropdown-menu>li>a:hover{color:#7d7d7d}.blur .nav.nav-tabs{background-color:rgba(0,0,0,0.2)}.blur .nav.nav-tabs a{color:#666}.blur .nav.nav-tabs a:hover{color:#666}.blur .nav.nav-tabs>li>a:hover{background-color:rgba(0,0,0,0.2)}.blur .nav.nav-tabs>li.active>a{color:#666;background-color:rgba(0,0,0,0.25)}.nav .open>a,.nav .open>a:hover,.nav .open>a:focus{background-color:transparent}.nav-tabs>li.active>a,.nav-tabs>li.active>a:hover,.nav-tabs>li.active>a:focus{border:none}.accordion-panel .panel-heading{border-radius:3px}.accordion-panel.panel-open .panel-heading{border-bottom-left-radius:0;border-bottom-right-radius:0}.accordion-panel:not(.panel-open) .panel-heading{transition-delay:.3s}.accordion-panel>.panel-heading+.panel-collapse>.panel-body{border-top:none}.accordion-panel .panel-heading{padding:0}.accordion-panel .panel-heading .accordion-toggle{display:inline-block;width:100%;padding:14px 22px}/*!\n * animate.css -http://daneden.me/animate\n * Version - 3.5.1\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2016 Daniel Eden\n */.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated.infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.animated.hinge{-webkit-animation-duration:2s;animation-duration:2s}.animated.flipOutX,.animated.flipOutY,.animated.bounceIn,.animated.bounceOut{-webkit-animation-duration:.75s;animation-duration:.75s}@-webkit-keyframes bounce{from,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(0.755, 0.05, 0.855, 0.06);animation-timing-function:cubic-bezier(0.755, 0.05, 0.855, 0.06);-webkit-transform:translate3d(0, -30px, 0);transform:translate3d(0, -30px, 0)}70%{-webkit-animation-timing-function:cubic-bezier(0.755, 0.05, 0.855, 0.06);animation-timing-function:cubic-bezier(0.755, 0.05, 0.855, 0.06);-webkit-transform:translate3d(0, -15px, 0);transform:translate3d(0, -15px, 0)}90%{-webkit-transform:translate3d(0, -4px, 0);transform:translate3d(0, -4px, 0)}}@keyframes bounce{from,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(0.755, 0.05, 0.855, 0.06);animation-timing-function:cubic-bezier(0.755, 0.05, 0.855, 0.06);-webkit-transform:translate3d(0, -30px, 0);transform:translate3d(0, -30px, 0)}70%{-webkit-animation-timing-function:cubic-bezier(0.755, 0.05, 0.855, 0.06);animation-timing-function:cubic-bezier(0.755, 0.05, 0.855, 0.06);-webkit-transform:translate3d(0, -15px, 0);transform:translate3d(0, -15px, 0)}90%{-webkit-transform:translate3d(0, -4px, 0);transform:translate3d(0, -4px, 0)}}.bounce{-webkit-animation-name:bounce;animation-name:bounce;-webkit-transform-origin:center bottom;transform-origin:center bottom}@-webkit-keyframes flash{from,50%,to{opacity:1}25%,75%{opacity:0}}@keyframes flash{from,50%,to{opacity:1}25%,75%{opacity:0}}.flash{-webkit-animation-name:flash;animation-name:flash}@-webkit-keyframes pulse{from{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}50%{-webkit-transform:scale3d(1.05, 1.05, 1.05);transform:scale3d(1.05, 1.05, 1.05)}to{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}}@keyframes pulse{from{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}50%{-webkit-transform:scale3d(1.05, 1.05, 1.05);transform:scale3d(1.05, 1.05, 1.05)}to{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}}.pulse{-webkit-animation-name:pulse;animation-name:pulse}@-webkit-keyframes rubberBand{from{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}30%{-webkit-transform:scale3d(1.25, 0.75, 1);transform:scale3d(1.25, 0.75, 1)}40%{-webkit-transform:scale3d(0.75, 1.25, 1);transform:scale3d(0.75, 1.25, 1)}50%{-webkit-transform:scale3d(1.15, 0.85, 1);transform:scale3d(1.15, 0.85, 1)}65%{-webkit-transform:scale3d(0.95, 1.05, 1);transform:scale3d(0.95, 1.05, 1)}75%{-webkit-transform:scale3d(1.05, 0.95, 1);transform:scale3d(1.05, 0.95, 1)}to{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}}@keyframes rubberBand{from{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}30%{-webkit-transform:scale3d(1.25, 0.75, 1);transform:scale3d(1.25, 0.75, 1)}40%{-webkit-transform:scale3d(0.75, 1.25, 1);transform:scale3d(0.75, 1.25, 1)}50%{-webkit-transform:scale3d(1.15, 0.85, 1);transform:scale3d(1.15, 0.85, 1)}65%{-webkit-transform:scale3d(0.95, 1.05, 1);transform:scale3d(0.95, 1.05, 1)}75%{-webkit-transform:scale3d(1.05, 0.95, 1);transform:scale3d(1.05, 0.95, 1)}to{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}}.rubberBand{-webkit-animation-name:rubberBand;animation-name:rubberBand}@-webkit-keyframes shake{from,to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px, 0, 0);transform:translate3d(-10px, 0, 0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px, 0, 0);transform:translate3d(10px, 0, 0)}}@keyframes shake{from,to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px, 0, 0);transform:translate3d(-10px, 0, 0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px, 0, 0);transform:translate3d(10px, 0, 0)}}.shake{-webkit-animation-name:shake;animation-name:shake}@-webkit-keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}.headShake{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-name:headShake;animation-name:headShake}@-webkit-keyframes swing{20%{-webkit-transform:rotate3d(0, 0, 1, 15deg);transform:rotate3d(0, 0, 1, 15deg)}40%{-webkit-transform:rotate3d(0, 0, 1, -10deg);transform:rotate3d(0, 0, 1, -10deg)}60%{-webkit-transform:rotate3d(0, 0, 1, 5deg);transform:rotate3d(0, 0, 1, 5deg)}80%{-webkit-transform:rotate3d(0, 0, 1, -5deg);transform:rotate3d(0, 0, 1, -5deg)}to{-webkit-transform:rotate3d(0, 0, 1, 0deg);transform:rotate3d(0, 0, 1, 0deg)}}@keyframes swing{20%{-webkit-transform:rotate3d(0, 0, 1, 15deg);transform:rotate3d(0, 0, 1, 15deg)}40%{-webkit-transform:rotate3d(0, 0, 1, -10deg);transform:rotate3d(0, 0, 1, -10deg)}60%{-webkit-transform:rotate3d(0, 0, 1, 5deg);transform:rotate3d(0, 0, 1, 5deg)}80%{-webkit-transform:rotate3d(0, 0, 1, -5deg);transform:rotate3d(0, 0, 1, -5deg)}to{-webkit-transform:rotate3d(0, 0, 1, 0deg);transform:rotate3d(0, 0, 1, 0deg)}}.swing{-webkit-transform-origin:top center;transform-origin:top center;-webkit-animation-name:swing;animation-name:swing}@-webkit-keyframes tada{from{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}10%,20%{-webkit-transform:scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);transform:scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);transform:scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);transform:scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)}to{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}}@keyframes tada{from{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}10%,20%{-webkit-transform:scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);transform:scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);transform:scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);transform:scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)}to{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}}.tada{-webkit-animation-name:tada;animation-name:tada}@-webkit-keyframes wobble{from{-webkit-transform:none;transform:none}15%{-webkit-transform:translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);transform:translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)}30%{-webkit-transform:translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);transform:translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)}45%{-webkit-transform:translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);transform:translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)}60%{-webkit-transform:translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);transform:translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)}75%{-webkit-transform:translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);transform:translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)}to{-webkit-transform:none;transform:none}}@keyframes wobble{from{-webkit-transform:none;transform:none}15%{-webkit-transform:translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);transform:translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)}30%{-webkit-transform:translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);transform:translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)}45%{-webkit-transform:translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);transform:translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)}60%{-webkit-transform:translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);transform:translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)}75%{-webkit-transform:translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);transform:translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)}to{-webkit-transform:none;transform:none}}.wobble{-webkit-animation-name:wobble;animation-name:wobble}@-webkit-keyframes jello{from,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-0.78125deg) skewY(-0.78125deg);transform:skewX(-0.78125deg) skewY(-0.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-0.1953125deg) skewY(-0.1953125deg);transform:skewX(-0.1953125deg) skewY(-0.1953125deg)}}@keyframes jello{from,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-0.78125deg) skewY(-0.78125deg);transform:skewX(-0.78125deg) skewY(-0.78125deg)}77.7%{-webkit-transform:skewX(0.390625deg) skewY(0.390625deg);transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{-webkit-transform:skewX(-0.1953125deg) skewY(-0.1953125deg);transform:skewX(-0.1953125deg) skewY(-0.1953125deg)}}.jello{-webkit-animation-name:jello;animation-name:jello;-webkit-transform-origin:center;transform-origin:center}@-webkit-keyframes bounceIn{from,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}0%{opacity:0;-webkit-transform:scale3d(0.3, 0.3, 0.3);transform:scale3d(0.3, 0.3, 0.3)}20%{-webkit-transform:scale3d(1.1, 1.1, 1.1);transform:scale3d(1.1, 1.1, 1.1)}40%{-webkit-transform:scale3d(0.9, 0.9, 0.9);transform:scale3d(0.9, 0.9, 0.9)}60%{opacity:1;-webkit-transform:scale3d(1.03, 1.03, 1.03);transform:scale3d(1.03, 1.03, 1.03)}80%{-webkit-transform:scale3d(0.97, 0.97, 0.97);transform:scale3d(0.97, 0.97, 0.97)}to{opacity:1;-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}}@keyframes bounceIn{from,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}0%{opacity:0;-webkit-transform:scale3d(0.3, 0.3, 0.3);transform:scale3d(0.3, 0.3, 0.3)}20%{-webkit-transform:scale3d(1.1, 1.1, 1.1);transform:scale3d(1.1, 1.1, 1.1)}40%{-webkit-transform:scale3d(0.9, 0.9, 0.9);transform:scale3d(0.9, 0.9, 0.9)}60%{opacity:1;-webkit-transform:scale3d(1.03, 1.03, 1.03);transform:scale3d(1.03, 1.03, 1.03)}80%{-webkit-transform:scale3d(0.97, 0.97, 0.97);transform:scale3d(0.97, 0.97, 0.97)}to{opacity:1;-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}}.bounceIn{-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes bounceInDown{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}0%{opacity:0;-webkit-transform:translate3d(0, -3000px, 0);transform:translate3d(0, -3000px, 0)}60%{opacity:1;-webkit-transform:translate3d(0, 25px, 0);transform:translate3d(0, 25px, 0)}75%{-webkit-transform:translate3d(0, -10px, 0);transform:translate3d(0, -10px, 0)}90%{-webkit-transform:translate3d(0, 5px, 0);transform:translate3d(0, 5px, 0)}to{-webkit-transform:none;transform:none}}@keyframes bounceInDown{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}0%{opacity:0;-webkit-transform:translate3d(0, -3000px, 0);transform:translate3d(0, -3000px, 0)}60%{opacity:1;-webkit-transform:translate3d(0, 25px, 0);transform:translate3d(0, 25px, 0)}75%{-webkit-transform:translate3d(0, -10px, 0);transform:translate3d(0, -10px, 0)}90%{-webkit-transform:translate3d(0, 5px, 0);transform:translate3d(0, 5px, 0)}to{-webkit-transform:none;transform:none}}.bounceInDown{-webkit-animation-name:bounceInDown;animation-name:bounceInDown}@-webkit-keyframes bounceInLeft{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}0%{opacity:0;-webkit-transform:translate3d(-3000px, 0, 0);transform:translate3d(-3000px, 0, 0)}60%{opacity:1;-webkit-transform:translate3d(25px, 0, 0);transform:translate3d(25px, 0, 0)}75%{-webkit-transform:translate3d(-10px, 0, 0);transform:translate3d(-10px, 0, 0)}90%{-webkit-transform:translate3d(5px, 0, 0);transform:translate3d(5px, 0, 0)}to{-webkit-transform:none;transform:none}}@keyframes bounceInLeft{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}0%{opacity:0;-webkit-transform:translate3d(-3000px, 0, 0);transform:translate3d(-3000px, 0, 0)}60%{opacity:1;-webkit-transform:translate3d(25px, 0, 0);transform:translate3d(25px, 0, 0)}75%{-webkit-transform:translate3d(-10px, 0, 0);transform:translate3d(-10px, 0, 0)}90%{-webkit-transform:translate3d(5px, 0, 0);transform:translate3d(5px, 0, 0)}to{-webkit-transform:none;transform:none}}.bounceInLeft{-webkit-animation-name:bounceInLeft;animation-name:bounceInLeft}@-webkit-keyframes bounceInRight{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}from{opacity:0;-webkit-transform:translate3d(3000px, 0, 0);transform:translate3d(3000px, 0, 0)}60%{opacity:1;-webkit-transform:translate3d(-25px, 0, 0);transform:translate3d(-25px, 0, 0)}75%{-webkit-transform:translate3d(10px, 0, 0);transform:translate3d(10px, 0, 0)}90%{-webkit-transform:translate3d(-5px, 0, 0);transform:translate3d(-5px, 0, 0)}to{-webkit-transform:none;transform:none}}@keyframes bounceInRight{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}from{opacity:0;-webkit-transform:translate3d(3000px, 0, 0);transform:translate3d(3000px, 0, 0)}60%{opacity:1;-webkit-transform:translate3d(-25px, 0, 0);transform:translate3d(-25px, 0, 0)}75%{-webkit-transform:translate3d(10px, 0, 0);transform:translate3d(10px, 0, 0)}90%{-webkit-transform:translate3d(-5px, 0, 0);transform:translate3d(-5px, 0, 0)}to{-webkit-transform:none;transform:none}}.bounceInRight{-webkit-animation-name:bounceInRight;animation-name:bounceInRight}@-webkit-keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}from{opacity:0;-webkit-transform:translate3d(0, 3000px, 0);transform:translate3d(0, 3000px, 0)}60%{opacity:1;-webkit-transform:translate3d(0, -20px, 0);transform:translate3d(0, -20px, 0)}75%{-webkit-transform:translate3d(0, 10px, 0);transform:translate3d(0, 10px, 0)}90%{-webkit-transform:translate3d(0, -5px, 0);transform:translate3d(0, -5px, 0)}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}from{opacity:0;-webkit-transform:translate3d(0, 3000px, 0);transform:translate3d(0, 3000px, 0)}60%{opacity:1;-webkit-transform:translate3d(0, -20px, 0);transform:translate3d(0, -20px, 0)}75%{-webkit-transform:translate3d(0, 10px, 0);transform:translate3d(0, 10px, 0)}90%{-webkit-transform:translate3d(0, -5px, 0);transform:translate3d(0, -5px, 0)}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}.bounceInUp{-webkit-animation-name:bounceInUp;animation-name:bounceInUp}@-webkit-keyframes bounceOut{20%{-webkit-transform:scale3d(0.9, 0.9, 0.9);transform:scale3d(0.9, 0.9, 0.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1, 1.1, 1.1);transform:scale3d(1.1, 1.1, 1.1)}to{opacity:0;-webkit-transform:scale3d(0.3, 0.3, 0.3);transform:scale3d(0.3, 0.3, 0.3)}}@keyframes bounceOut{20%{-webkit-transform:scale3d(0.9, 0.9, 0.9);transform:scale3d(0.9, 0.9, 0.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1, 1.1, 1.1);transform:scale3d(1.1, 1.1, 1.1)}to{opacity:0;-webkit-transform:scale3d(0.3, 0.3, 0.3);transform:scale3d(0.3, 0.3, 0.3)}}.bounceOut{-webkit-animation-name:bounceOut;animation-name:bounceOut}@-webkit-keyframes bounceOutDown{20%{-webkit-transform:translate3d(0, 10px, 0);transform:translate3d(0, 10px, 0)}40%,45%{opacity:1;-webkit-transform:translate3d(0, -20px, 0);transform:translate3d(0, -20px, 0)}to{opacity:0;-webkit-transform:translate3d(0, 2000px, 0);transform:translate3d(0, 2000px, 0)}}@keyframes bounceOutDown{20%{-webkit-transform:translate3d(0, 10px, 0);transform:translate3d(0, 10px, 0)}40%,45%{opacity:1;-webkit-transform:translate3d(0, -20px, 0);transform:translate3d(0, -20px, 0)}to{opacity:0;-webkit-transform:translate3d(0, 2000px, 0);transform:translate3d(0, 2000px, 0)}}.bounceOutDown{-webkit-animation-name:bounceOutDown;animation-name:bounceOutDown}@-webkit-keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px, 0, 0);transform:translate3d(20px, 0, 0)}to{opacity:0;-webkit-transform:translate3d(-2000px, 0, 0);transform:translate3d(-2000px, 0, 0)}}@keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px, 0, 0);transform:translate3d(20px, 0, 0)}to{opacity:0;-webkit-transform:translate3d(-2000px, 0, 0);transform:translate3d(-2000px, 0, 0)}}.bounceOutLeft{-webkit-animation-name:bounceOutLeft;animation-name:bounceOutLeft}@-webkit-keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px, 0, 0);transform:translate3d(-20px, 0, 0)}to{opacity:0;-webkit-transform:translate3d(2000px, 0, 0);transform:translate3d(2000px, 0, 0)}}@keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px, 0, 0);transform:translate3d(-20px, 0, 0)}to{opacity:0;-webkit-transform:translate3d(2000px, 0, 0);transform:translate3d(2000px, 0, 0)}}.bounceOutRight{-webkit-animation-name:bounceOutRight;animation-name:bounceOutRight}@-webkit-keyframes bounceOutUp{20%{-webkit-transform:translate3d(0, -10px, 0);transform:translate3d(0, -10px, 0)}40%,45%{opacity:1;-webkit-transform:translate3d(0, 20px, 0);transform:translate3d(0, 20px, 0)}to{opacity:0;-webkit-transform:translate3d(0, -2000px, 0);transform:translate3d(0, -2000px, 0)}}@keyframes bounceOutUp{20%{-webkit-transform:translate3d(0, -10px, 0);transform:translate3d(0, -10px, 0)}40%,45%{opacity:1;-webkit-transform:translate3d(0, 20px, 0);transform:translate3d(0, 20px, 0)}to{opacity:0;-webkit-transform:translate3d(0, -2000px, 0);transform:translate3d(0, -2000px, 0)}}.bounceOutUp{-webkit-animation-name:bounceOutUp;animation-name:bounceOutUp}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}@-webkit-keyframes fadeInDown{from{opacity:0;-webkit-transform:translate3d(0, -100%, 0);transform:translate3d(0, -100%, 0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInDown{from{opacity:0;-webkit-transform:translate3d(0, -100%, 0);transform:translate3d(0, -100%, 0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}@-webkit-keyframes fadeInDownBig{from{opacity:0;-webkit-transform:translate3d(0, -2000px, 0);transform:translate3d(0, -2000px, 0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInDownBig{from{opacity:0;-webkit-transform:translate3d(0, -2000px, 0);transform:translate3d(0, -2000px, 0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInDownBig{-webkit-animation-name:fadeInDownBig;animation-name:fadeInDownBig}@-webkit-keyframes fadeInLeft{from{opacity:0;-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInLeft{from{opacity:0;-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInLeft{-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft}@-webkit-keyframes fadeInLeftBig{from{opacity:0;-webkit-transform:translate3d(-2000px, 0, 0);transform:translate3d(-2000px, 0, 0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInLeftBig{from{opacity:0;-webkit-transform:translate3d(-2000px, 0, 0);transform:translate3d(-2000px, 0, 0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInLeftBig{-webkit-animation-name:fadeInLeftBig;animation-name:fadeInLeftBig}@-webkit-keyframes fadeInRight{from{opacity:0;-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInRight{from{opacity:0;-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInRight{-webkit-animation-name:fadeInRight;animation-name:fadeInRight}@-webkit-keyframes fadeInRightBig{from{opacity:0;-webkit-transform:translate3d(2000px, 0, 0);transform:translate3d(2000px, 0, 0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInRightBig{from{opacity:0;-webkit-transform:translate3d(2000px, 0, 0);transform:translate3d(2000px, 0, 0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInRightBig{-webkit-animation-name:fadeInRightBig;animation-name:fadeInRightBig}@-webkit-keyframes fadeInUp{from{opacity:0;-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInUp{from{opacity:0;-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}@-webkit-keyframes fadeInUpBig{from{opacity:0;-webkit-transform:translate3d(0, 2000px, 0);transform:translate3d(0, 2000px, 0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInUpBig{from{opacity:0;-webkit-transform:translate3d(0, 2000px, 0);transform:translate3d(0, 2000px, 0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInUpBig{-webkit-animation-name:fadeInUpBig;animation-name:fadeInUpBig}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@-webkit-keyframes fadeOutDown{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}}@keyframes fadeOutDown{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}}.fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}@-webkit-keyframes fadeOutDownBig{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0, 2000px, 0);transform:translate3d(0, 2000px, 0)}}@keyframes fadeOutDownBig{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0, 2000px, 0);transform:translate3d(0, 2000px, 0)}}.fadeOutDownBig{-webkit-animation-name:fadeOutDownBig;animation-name:fadeOutDownBig}@-webkit-keyframes fadeOutLeft{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}}@keyframes fadeOutLeft{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}}.fadeOutLeft{-webkit-animation-name:fadeOutLeft;animation-name:fadeOutLeft}@-webkit-keyframes fadeOutLeftBig{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px, 0, 0);transform:translate3d(-2000px, 0, 0)}}@keyframes fadeOutLeftBig{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px, 0, 0);transform:translate3d(-2000px, 0, 0)}}.fadeOutLeftBig{-webkit-animation-name:fadeOutLeftBig;animation-name:fadeOutLeftBig}@-webkit-keyframes fadeOutRight{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0)}}@keyframes fadeOutRight{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0)}}.fadeOutRight{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight}@-webkit-keyframes fadeOutRightBig{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px, 0, 0);transform:translate3d(2000px, 0, 0)}}@keyframes fadeOutRightBig{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px, 0, 0);transform:translate3d(2000px, 0, 0)}}.fadeOutRightBig{-webkit-animation-name:fadeOutRightBig;animation-name:fadeOutRightBig}@-webkit-keyframes fadeOutUp{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0, -100%, 0);transform:translate3d(0, -100%, 0)}}@keyframes fadeOutUp{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0, -100%, 0);transform:translate3d(0, -100%, 0)}}.fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}@-webkit-keyframes fadeOutUpBig{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0, -2000px, 0);transform:translate3d(0, -2000px, 0)}}@keyframes fadeOutUpBig{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0, -2000px, 0);transform:translate3d(0, -2000px, 0)}}.fadeOutUpBig{-webkit-animation-name:fadeOutUpBig;animation-name:fadeOutUpBig}@-webkit-keyframes flip{from{-webkit-transform:perspective(400px) rotate3d(0, 1, 0, -360deg);transform:perspective(400px) rotate3d(0, 1, 0, -360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);transform:perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{-webkit-transform:perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);transform:perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(0.95, 0.95, 0.95);transform:perspective(400px) scale3d(0.95, 0.95, 0.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@keyframes flip{from{-webkit-transform:perspective(400px) rotate3d(0, 1, 0, -360deg);transform:perspective(400px) rotate3d(0, 1, 0, -360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);transform:perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{-webkit-transform:perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);transform:perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(0.95, 0.95, 0.95);transform:perspective(400px) scale3d(0.95, 0.95, 0.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}.animated.flip{-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip;animation-name:flip}@-webkit-keyframes flipInX{from{-webkit-transform:perspective(400px) rotate3d(1, 0, 0, 90deg);transform:perspective(400px) rotate3d(1, 0, 0, 90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(1, 0, 0, -20deg);transform:perspective(400px) rotate3d(1, 0, 0, -20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotate3d(1, 0, 0, 10deg);transform:perspective(400px) rotate3d(1, 0, 0, 10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(1, 0, 0, -5deg);transform:perspective(400px) rotate3d(1, 0, 0, -5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInX{from{-webkit-transform:perspective(400px) rotate3d(1, 0, 0, 90deg);transform:perspective(400px) rotate3d(1, 0, 0, 90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(1, 0, 0, -20deg);transform:perspective(400px) rotate3d(1, 0, 0, -20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotate3d(1, 0, 0, 10deg);transform:perspective(400px) rotate3d(1, 0, 0, 10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(1, 0, 0, -5deg);transform:perspective(400px) rotate3d(1, 0, 0, -5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}.flipInX{-webkit-backface-visibility:visible !important;backface-visibility:visible !important;-webkit-animation-name:flipInX;animation-name:flipInX}@-webkit-keyframes flipInY{from{-webkit-transform:perspective(400px) rotate3d(0, 1, 0, 90deg);transform:perspective(400px) rotate3d(0, 1, 0, 90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(0, 1, 0, -20deg);transform:perspective(400px) rotate3d(0, 1, 0, -20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotate3d(0, 1, 0, 10deg);transform:perspective(400px) rotate3d(0, 1, 0, 10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(0, 1, 0, -5deg);transform:perspective(400px) rotate3d(0, 1, 0, -5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInY{from{-webkit-transform:perspective(400px) rotate3d(0, 1, 0, 90deg);transform:perspective(400px) rotate3d(0, 1, 0, 90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(0, 1, 0, -20deg);transform:perspective(400px) rotate3d(0, 1, 0, -20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotate3d(0, 1, 0, 10deg);transform:perspective(400px) rotate3d(0, 1, 0, 10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(0, 1, 0, -5deg);transform:perspective(400px) rotate3d(0, 1, 0, -5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}.flipInY{-webkit-backface-visibility:visible !important;backface-visibility:visible !important;-webkit-animation-name:flipInY;animation-name:flipInY}@-webkit-keyframes flipOutX{from{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(1, 0, 0, -20deg);transform:perspective(400px) rotate3d(1, 0, 0, -20deg);opacity:1}to{-webkit-transform:perspective(400px) rotate3d(1, 0, 0, 90deg);transform:perspective(400px) rotate3d(1, 0, 0, 90deg);opacity:0}}@keyframes flipOutX{from{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(1, 0, 0, -20deg);transform:perspective(400px) rotate3d(1, 0, 0, -20deg);opacity:1}to{-webkit-transform:perspective(400px) rotate3d(1, 0, 0, 90deg);transform:perspective(400px) rotate3d(1, 0, 0, 90deg);opacity:0}}.flipOutX{-webkit-animation-name:flipOutX;animation-name:flipOutX;-webkit-backface-visibility:visible !important;backface-visibility:visible !important}@-webkit-keyframes flipOutY{from{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(0, 1, 0, -15deg);transform:perspective(400px) rotate3d(0, 1, 0, -15deg);opacity:1}to{-webkit-transform:perspective(400px) rotate3d(0, 1, 0, 90deg);transform:perspective(400px) rotate3d(0, 1, 0, 90deg);opacity:0}}@keyframes flipOutY{from{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(0, 1, 0, -15deg);transform:perspective(400px) rotate3d(0, 1, 0, -15deg);opacity:1}to{-webkit-transform:perspective(400px) rotate3d(0, 1, 0, 90deg);transform:perspective(400px) rotate3d(0, 1, 0, 90deg);opacity:0}}.flipOutY{-webkit-backface-visibility:visible !important;backface-visibility:visible !important;-webkit-animation-name:flipOutY;animation-name:flipOutY}@-webkit-keyframes lightSpeedIn{from{-webkit-transform:translate3d(100%, 0, 0) skewX(-30deg);transform:translate3d(100%, 0, 0) skewX(-30deg);opacity:0}60%{-webkit-transform:skewX(20deg);transform:skewX(20deg);opacity:1}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg);opacity:1}to{-webkit-transform:none;transform:none;opacity:1}}@keyframes lightSpeedIn{from{-webkit-transform:translate3d(100%, 0, 0) skewX(-30deg);transform:translate3d(100%, 0, 0) skewX(-30deg);opacity:0}60%{-webkit-transform:skewX(20deg);transform:skewX(20deg);opacity:1}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg);opacity:1}to{-webkit-transform:none;transform:none;opacity:1}}.lightSpeedIn{-webkit-animation-name:lightSpeedIn;animation-name:lightSpeedIn;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@-webkit-keyframes lightSpeedOut{from{opacity:1}to{-webkit-transform:translate3d(100%, 0, 0) skewX(30deg);transform:translate3d(100%, 0, 0) skewX(30deg);opacity:0}}@keyframes lightSpeedOut{from{opacity:1}to{-webkit-transform:translate3d(100%, 0, 0) skewX(30deg);transform:translate3d(100%, 0, 0) skewX(30deg);opacity:0}}.lightSpeedOut{-webkit-animation-name:lightSpeedOut;animation-name:lightSpeedOut;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}@-webkit-keyframes rotateIn{from{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate3d(0, 0, 1, -200deg);transform:rotate3d(0, 0, 1, -200deg);opacity:0}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateIn{from{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate3d(0, 0, 1, -200deg);transform:rotate3d(0, 0, 1, -200deg);opacity:0}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none;opacity:1}}.rotateIn{-webkit-animation-name:rotateIn;animation-name:rotateIn}@-webkit-keyframes rotateInDownLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0, 0, 1, -45deg);transform:rotate3d(0, 0, 1, -45deg);opacity:0}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInDownLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0, 0, 1, -45deg);transform:rotate3d(0, 0, 1, -45deg);opacity:0}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}.rotateInDownLeft{-webkit-animation-name:rotateInDownLeft;animation-name:rotateInDownLeft}@-webkit-keyframes rotateInDownRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0, 0, 1, 45deg);transform:rotate3d(0, 0, 1, 45deg);opacity:0}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInDownRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0, 0, 1, 45deg);transform:rotate3d(0, 0, 1, 45deg);opacity:0}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}.rotateInDownRight{-webkit-animation-name:rotateInDownRight;animation-name:rotateInDownRight}@-webkit-keyframes rotateInUpLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0, 0, 1, 45deg);transform:rotate3d(0, 0, 1, 45deg);opacity:0}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInUpLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0, 0, 1, 45deg);transform:rotate3d(0, 0, 1, 45deg);opacity:0}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}.rotateInUpLeft{-webkit-animation-name:rotateInUpLeft;animation-name:rotateInUpLeft}@-webkit-keyframes rotateInUpRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0, 0, 1, -90deg);transform:rotate3d(0, 0, 1, -90deg);opacity:0}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInUpRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0, 0, 1, -90deg);transform:rotate3d(0, 0, 1, -90deg);opacity:0}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}.rotateInUpRight{-webkit-animation-name:rotateInUpRight;animation-name:rotateInUpRight}@-webkit-keyframes rotateOut{from{-webkit-transform-origin:center;transform-origin:center;opacity:1}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate3d(0, 0, 1, 200deg);transform:rotate3d(0, 0, 1, 200deg);opacity:0}}@keyframes rotateOut{from{-webkit-transform-origin:center;transform-origin:center;opacity:1}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate3d(0, 0, 1, 200deg);transform:rotate3d(0, 0, 1, 200deg);opacity:0}}.rotateOut{-webkit-animation-name:rotateOut;animation-name:rotateOut}@-webkit-keyframes rotateOutDownLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0, 0, 1, 45deg);transform:rotate3d(0, 0, 1, 45deg);opacity:0}}@keyframes rotateOutDownLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0, 0, 1, 45deg);transform:rotate3d(0, 0, 1, 45deg);opacity:0}}.rotateOutDownLeft{-webkit-animation-name:rotateOutDownLeft;animation-name:rotateOutDownLeft}@-webkit-keyframes rotateOutDownRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0, 0, 1, -45deg);transform:rotate3d(0, 0, 1, -45deg);opacity:0}}@keyframes rotateOutDownRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0, 0, 1, -45deg);transform:rotate3d(0, 0, 1, -45deg);opacity:0}}.rotateOutDownRight{-webkit-animation-name:rotateOutDownRight;animation-name:rotateOutDownRight}@-webkit-keyframes rotateOutUpLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0, 0, 1, -45deg);transform:rotate3d(0, 0, 1, -45deg);opacity:0}}@keyframes rotateOutUpLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0, 0, 1, -45deg);transform:rotate3d(0, 0, 1, -45deg);opacity:0}}.rotateOutUpLeft{-webkit-animation-name:rotateOutUpLeft;animation-name:rotateOutUpLeft}@-webkit-keyframes rotateOutUpRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0, 0, 1, 90deg);transform:rotate3d(0, 0, 1, 90deg);opacity:0}}@keyframes rotateOutUpRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0, 0, 1, 90deg);transform:rotate3d(0, 0, 1, 90deg);opacity:0}}.rotateOutUpRight{-webkit-animation-name:rotateOutUpRight;animation-name:rotateOutUpRight}@-webkit-keyframes hinge{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate3d(0, 0, 1, 80deg);transform:rotate3d(0, 0, 1, 80deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}40%,80%{-webkit-transform:rotate3d(0, 0, 1, 60deg);transform:rotate3d(0, 0, 1, 60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}to{-webkit-transform:translate3d(0, 700px, 0);transform:translate3d(0, 700px, 0);opacity:0}}@keyframes hinge{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate3d(0, 0, 1, 80deg);transform:rotate3d(0, 0, 1, 80deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}40%,80%{-webkit-transform:rotate3d(0, 0, 1, 60deg);transform:rotate3d(0, 0, 1, 60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}to{-webkit-transform:translate3d(0, 700px, 0);transform:translate3d(0, 700px, 0);opacity:0}}.hinge{-webkit-animation-name:hinge;animation-name:hinge}@-webkit-keyframes rollIn{from{opacity:0;-webkit-transform:translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);transform:translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes rollIn{from{opacity:0;-webkit-transform:translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);transform:translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)}to{opacity:1;-webkit-transform:none;transform:none}}.rollIn{-webkit-animation-name:rollIn;animation-name:rollIn}@-webkit-keyframes rollOut{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);transform:translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)}}@keyframes rollOut{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);transform:translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)}}.rollOut{-webkit-animation-name:rollOut;animation-name:rollOut}@-webkit-keyframes zoomIn{from{opacity:0;-webkit-transform:scale3d(0.3, 0.3, 0.3);transform:scale3d(0.3, 0.3, 0.3)}50%{opacity:1}}@keyframes zoomIn{from{opacity:0;-webkit-transform:scale3d(0.3, 0.3, 0.3);transform:scale3d(0.3, 0.3, 0.3)}50%{opacity:1}}.zoomIn{-webkit-animation-name:zoomIn;animation-name:zoomIn}@-webkit-keyframes zoomInDown{from{opacity:0;-webkit-transform:scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);transform:scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);-webkit-animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}60%{opacity:1;-webkit-transform:scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);transform:scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);-webkit-animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}@keyframes zoomInDown{from{opacity:0;-webkit-transform:scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);transform:scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);-webkit-animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}60%{opacity:1;-webkit-transform:scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);transform:scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);-webkit-animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}.zoomInDown{-webkit-animation-name:zoomInDown;animation-name:zoomInDown}@-webkit-keyframes zoomInLeft{from{opacity:0;-webkit-transform:scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);transform:scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);-webkit-animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}60%{opacity:1;-webkit-transform:scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);transform:scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);-webkit-animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}@keyframes zoomInLeft{from{opacity:0;-webkit-transform:scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);transform:scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);-webkit-animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}60%{opacity:1;-webkit-transform:scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);transform:scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);-webkit-animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}.zoomInLeft{-webkit-animation-name:zoomInLeft;animation-name:zoomInLeft}@-webkit-keyframes zoomInRight{from{opacity:0;-webkit-transform:scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);transform:scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);-webkit-animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}60%{opacity:1;-webkit-transform:scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);transform:scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);-webkit-animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}@keyframes zoomInRight{from{opacity:0;-webkit-transform:scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);transform:scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);-webkit-animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}60%{opacity:1;-webkit-transform:scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);transform:scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);-webkit-animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}.zoomInRight{-webkit-animation-name:zoomInRight;animation-name:zoomInRight}@-webkit-keyframes zoomInUp{from{opacity:0;-webkit-transform:scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);transform:scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);-webkit-animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}60%{opacity:1;-webkit-transform:scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);transform:scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);-webkit-animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}@keyframes zoomInUp{from{opacity:0;-webkit-transform:scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);transform:scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);-webkit-animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}60%{opacity:1;-webkit-transform:scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);transform:scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);-webkit-animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}.zoomInUp{-webkit-animation-name:zoomInUp;animation-name:zoomInUp}@-webkit-keyframes zoomOut{from{opacity:1}50%{opacity:0;-webkit-transform:scale3d(0.3, 0.3, 0.3);transform:scale3d(0.3, 0.3, 0.3)}to{opacity:0}}@keyframes zoomOut{from{opacity:1}50%{opacity:0;-webkit-transform:scale3d(0.3, 0.3, 0.3);transform:scale3d(0.3, 0.3, 0.3)}to{opacity:0}}.zoomOut{-webkit-animation-name:zoomOut;animation-name:zoomOut}@-webkit-keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);transform:scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);-webkit-animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}to{opacity:0;-webkit-transform:scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);transform:scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}@keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);transform:scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);-webkit-animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}to{opacity:0;-webkit-transform:scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);transform:scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}.zoomOutDown{-webkit-animation-name:zoomOutDown;animation-name:zoomOutDown}@-webkit-keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);transform:scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)}to{opacity:0;-webkit-transform:scale(0.1) translate3d(-2000px, 0, 0);transform:scale(0.1) translate3d(-2000px, 0, 0);-webkit-transform-origin:left center;transform-origin:left center}}@keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);transform:scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)}to{opacity:0;-webkit-transform:scale(0.1) translate3d(-2000px, 0, 0);transform:scale(0.1) translate3d(-2000px, 0, 0);-webkit-transform-origin:left center;transform-origin:left center}}.zoomOutLeft{-webkit-animation-name:zoomOutLeft;animation-name:zoomOutLeft}@-webkit-keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);transform:scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)}to{opacity:0;-webkit-transform:scale(0.1) translate3d(2000px, 0, 0);transform:scale(0.1) translate3d(2000px, 0, 0);-webkit-transform-origin:right center;transform-origin:right center}}@keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);transform:scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)}to{opacity:0;-webkit-transform:scale(0.1) translate3d(2000px, 0, 0);transform:scale(0.1) translate3d(2000px, 0, 0);-webkit-transform-origin:right center;transform-origin:right center}}.zoomOutRight{-webkit-animation-name:zoomOutRight;animation-name:zoomOutRight}@-webkit-keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);transform:scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);-webkit-animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}to{opacity:0;-webkit-transform:scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);transform:scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}@keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);transform:scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);-webkit-animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}to{opacity:0;-webkit-transform:scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);transform:scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}.zoomOutUp{-webkit-animation-name:zoomOutUp;animation-name:zoomOutUp}@-webkit-keyframes slideInDown{from{-webkit-transform:translate3d(0, -100%, 0);transform:translate3d(0, -100%, 0);visibility:visible}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes slideInDown{from{-webkit-transform:translate3d(0, -100%, 0);transform:translate3d(0, -100%, 0);visibility:visible}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}.slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown}@-webkit-keyframes slideInLeft{from{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);visibility:visible}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes slideInLeft{from{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);visibility:visible}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}.slideInLeft{-webkit-animation-name:slideInLeft;animation-name:slideInLeft}@-webkit-keyframes slideInRight{from{-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0);visibility:visible}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes slideInRight{from{-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0);visibility:visible}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}.slideInRight{-webkit-animation-name:slideInRight;animation-name:slideInRight}@-webkit-keyframes slideInUp{from{-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0);visibility:visible}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes slideInUp{from{-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0);visibility:visible}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}.slideInUp{-webkit-animation-name:slideInUp;animation-name:slideInUp}@-webkit-keyframes slideOutDown{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}to{visibility:hidden;-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}}@keyframes slideOutDown{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}to{visibility:hidden;-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}}.slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown}@-webkit-keyframes slideOutLeft{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}to{visibility:hidden;-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}}@keyframes slideOutLeft{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}to{visibility:hidden;-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}}.slideOutLeft{-webkit-animation-name:slideOutLeft;animation-name:slideOutLeft}@-webkit-keyframes slideOutRight{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}to{visibility:hidden;-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0)}}@keyframes slideOutRight{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}to{visibility:hidden;-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0)}}.slideOutRight{-webkit-animation-name:slideOutRight;animation-name:slideOutRight}@-webkit-keyframes slideOutUp{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}to{visibility:hidden;-webkit-transform:translate3d(0, -100%, 0);transform:translate3d(0, -100%, 0)}}@keyframes slideOutUp{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}to{visibility:hidden;-webkit-transform:translate3d(0, -100%, 0);transform:translate3d(0, -100%, 0)}}.slideOutUp{-webkit-animation-name:slideOutUp;animation-name:slideOutUp}h1,h2,h3,h4,h5,h6{font-family:\"Roboto\",sans-serif;width:100%;margin-top:0}h1.color,h2.color,h3.color,h4.color,h5.color,h6.color{color:#e85656}body a{color:#209e91;text-decoration:none !important;transition:color 0.2s ease}body a:hover{color:#1b867b}h1{font-size:32px;margin-bottom:0.5rem}h2{font-size:24px}h3{font-size:20px}h4{font-size:18px}h5{font-size:15px}.typography-document-samples p{margin:0}.typography-document-samples .typography-widget{height:100%}.typography-document-samples .typography-widget .card{height:620px}.typography-document-samples .typography-widget .card-title{text-align:center;width:100%}.typography-document-samples .typography-widget .card.with-scroll .card-body{height:calc(100% - 45px)}.typography-document-samples .typography-widget .card-content{padding:15px 22px 5px 22px}.heading-widget h1,.heading-widget h2,.heading-widget h3,.heading-widget h4,.heading-widget h5,.heading-widget h6{width:100%;font-weight:300;text-align:center}.heading-widget p{line-height:16px;font-weight:400;text-align:center}.more-text-widget{text-align:center;font-size:14px}.more-text-widget p{line-height:17px}.more-text-widget .gray{color:#767676}.more-text-widget .black{color:#585858}.more-text-widget .light-text{font-weight:300}.more-text-widget .regular-text{font-weight:400}.more-text-widget .upper-text{text-transform:uppercase}.more-text-widget .bold-text{font-weight:700}.more-text-widget .small-text{padding:5px 0 0 0}.more-text-widget .small-text p{font-size:9px;font-weight:300;line-height:10px}.color-widget{text-align:center;font-size:14px;font-weight:400}.color-widget p{line-height:17px}.color-widget .section-block{margin:14px 0}.color-widget .yellow-text p{color:#dfb81c}.color-widget .red-text p{color:#e85656}.color-widget .links h3{margin-bottom:10px}.color-widget .links p{margin-bottom:0}.color-widget .links p.hovered a{color:#1b867b}.lists-widget{font-weight:400}.lists-widget .list-header{width:100%;text-align:center}.lists-widget .accent{margin-top:30px;color:#e5c649;line-height:14px;font-size:14px;padding-left:11px;border-left:4px solid #e5c649;margin-left:13px}.lists-widget ul.blur,.lists-widget ol.blur{padding-left:13px;margin-bottom:19px;list-style:none;padding-top:1px}.lists-widget ul.blur li,.lists-widget ol.blur li{margin-top:5px;font-size:14px}.lists-widget ul.blur li ul,.lists-widget ul.blur li ol,.lists-widget ol.blur li ul,.lists-widget ol.blur li ol{padding-left:20px;margin-bottom:0;list-style:none}.lists-widget ul.blur li:before{content:\"• \";color:#e5c649;width:10px;display:inline-block}.lists-widget ol.blur{counter-reset:section}.lists-widget ol.blur li{color:#e5c649;padding-left:0;line-height:14px;position:relative}.lists-widget ol.blur li span{color:#666;display:block}.lists-widget ol.blur li ol{padding-left:0;margin-left:12px}.lists-widget ol.blur li:before{content:counters(section, \".\") \".\";counter-increment:section;width:19px;position:absolute;left:0;top:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.lists-widget ol.blur>li span{padding-left:14px}.lists-widget ol.blur ol{counter-reset:section}.lists-widget ol.blur ol>li:before{width:30px}.lists-widget ol.blur ol>li span{padding-left:27px}.lists-widget ol.blur ol ol>li:before{width:40px}.lists-widget ol.blur ol ol>li span{padding-left:40px}.columns-section{background-color:#fff}p{margin-bottom:12px;font-family:\"Roboto\",sans-serif;font-size:14px}p.small-text{color:#949494;font-size:12px;line-height:16px;margin-bottom:8px}.cols-two{margin-bottom:50px}.cols-two>div{float:left;width:350px;margin-left:40px}.cols-two>div:first-child{margin-left:0}.cols-three{margin-bottom:50px}.cols-three>div{float:left;width:222px;margin-left:40px}.cols-three>div:first-child{margin-left:0}a.learn-more{font-size:14px;font-weight:700;text-decoration:none;line-height:24px}.img-wrapper{margin-bottom:19px;margin-top:5px;overflow:hidden;height:180px}.img-wrapper img{width:100%}.cols-three p{margin-bottom:10px}.banner{position:relative;margin-bottom:20px}.large-banner-wrapper{overflow:hidden;height:400px}.large-banner-wrapper img{height:100%;width:100%;display:block}.banner-text-wrapper{margin-top:-400px;height:400px;text-align:center}.banner-text{padding:85px 90px 60px;display:inline-block;margin:67px auto;background:#fff;min-width:432px;overflow:hidden;background:rgba(0,0,0,0.75)}.banner-text h1{font-weight:700;width:100%;color:#fff;margin-bottom:10px}.banner-text p{font-size:24px;line-height:30px;font-weight:300;color:#209e91;margin-bottom:0px}@media (max-width: 600px){.banner-text{padding:55px 60px 30px;min-width:0}.banner-text h1{font-size:24px}.banner-text p{font-size:16px}}@media (max-width: 400px){.banner-text{min-width:0;width:100%;height:100%;margin:0}}.photo-desc{margin-top:12px;text-align:center}.text-info{width:90%}.text-info p{margin-bottom:10px}.section-block{padding-bottom:12px}.separator{height:1px;background:#dcdcdc;width:100%;margin-bottom:19px;margin-top:16px}.section{padding:0 20px 50px 20px}.card.banner-column-panel{padding:0;margin-bottom:90px}.card.banner-column-panel .card-body{padding:0}@media screen and (min-width: 1620px){.col-xlg-1{width:8.33333333%;flex:0 0 8.33333333%}.col-xlg-2{width:16.66666667%;flex:0 0 16.66666667%}.col-xlg-3{width:25%;flex:0 0 25%}.col-xlg-4{width:33.33333333%;flex:0 0 33.33333333%}.col-xlg-5{width:41.66666667%;flex:0 0 41.66666667%}.col-xlg-6{width:50%;flex:0 0 50%}.col-xlg-7{width:58.33333333%;flex:0 0 58.33333333%}.col-xlg-8{width:66.66666667%;flex:0 0 66.66666667%}.col-xlg-9{width:75%;flex:0 0 75%}.col-xlg-10{width:83.33333333%;flex:0 0 83.33333333%}.col-xlg-11{width:91.66666667%;flex:0 0 91.66666667%}.col-xlg-12{width:100%;flex:0 0 100%}}.btn:focus,.btn:active:focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn.active.focus{outline:none}.btn{border-radius:5px;transition:all 0.1s ease;padding:0.344rem 1rem;font-size:0.9rem}.btn:hover{-webkit-transform:scale(1.2);transform:scale(1.2)}.open>.btn.dropdown-toggle.btn.btn-primary{background:#209e91;border-color:#088679;background-color:#1b867b;border-color:#1b867b}.open>.btn.dropdown-toggle.btn-success{background:#90b900;border-color:#78a100;background-color:#7a9d00;border-color:#7a9d00}.open>.btn.dropdown-toggle.btn-info{background:#2dacd1;border-color:#1594b9;background-color:#2692b2;border-color:#2692b2}.open>.btn.dropdown-toggle.btn-warning{background:#dfb81c;border-color:#c7a004;background-color:#be9c18;border-color:#be9c18}.open>.btn.dropdown-toggle.btn-danger{background:#e85656;border-color:#d03e3e;background-color:#c54949;border-color:#c54949}button.btn.btn-primary{background:#209e91;border-color:#209e91}button.btn.btn-primary.disabled,button.btn.btn-primary[disabled],fieldset[disabled] button.btn.btn-primary,button.btn.btn-primary.disabled:hover,button.btn.btn-primary[disabled]:hover,fieldset[disabled] button.btn.btn-primary:hover,button.btn.btn-primary.disabled:focus,button.btn.btn-primary[disabled]:focus,fieldset[disabled] button.btn.btn-primary:focus,button.btn.btn-primary.disabled.focus,button.btn.btn-primary[disabled].focus,fieldset[disabled] button.btn.btn-primary.focus,button.btn.btn-primary.disabled:active,button.btn.btn-primary[disabled]:active,fieldset[disabled] button.btn.btn-primary:active,button.btn.btn-primary.disabled.active,button.btn.btn-primary[disabled].active,fieldset[disabled] button.btn.btn-primary.active{background:#209e91;border-color:#2caa9d}button.btn.btn-primary.disabled:hover,button.btn.btn-primary[disabled]:hover,fieldset[disabled] button.btn.btn-primary:hover,button.btn.btn-primary.disabled:hover:hover,button.btn.btn-primary[disabled]:hover:hover,fieldset[disabled] button.btn.btn-primary:hover:hover,button.btn.btn-primary.disabled:focus:hover,button.btn.btn-primary[disabled]:focus:hover,fieldset[disabled] button.btn.btn-primary:focus:hover,button.btn.btn-primary.disabled.focus:hover,button.btn.btn-primary[disabled].focus:hover,fieldset[disabled] button.btn.btn-primary.focus:hover,button.btn.btn-primary.disabled:active:hover,button.btn.btn-primary[disabled]:active:hover,fieldset[disabled] button.btn.btn-primary:active:hover,button.btn.btn-primary.disabled.active:hover,button.btn.btn-primary[disabled].active:hover,fieldset[disabled] button.btn.btn-primary.active:hover{-webkit-transform:none;transform:none}button.btn.btn-primary:hover,button.btn.btn-primary:focus,button.btn.btn-primary.focus,button.btn.btn-primary:active,button.btn.btn-primary.active{background:#209e91;border-color:#088679}button.btn.btn-primary:active,button.btn.btn-primary:target{background-color:#1b867b}button.btn.btn-default{border-width:1px;color:#666;background:rgba(0,0,0,0);border-color:#d6d6d6}button.btn.btn-default.disabled,button.btn.btn-default[disabled],fieldset[disabled] button.btn.btn-default,button.btn.btn-default.disabled:hover,button.btn.btn-default[disabled]:hover,fieldset[disabled] button.btn.btn-default:hover,button.btn.btn-default.disabled:focus,button.btn.btn-default[disabled]:focus,fieldset[disabled] button.btn.btn-default:focus,button.btn.btn-default.disabled.focus,button.btn.btn-default[disabled].focus,fieldset[disabled] button.btn.btn-default.focus,button.btn.btn-default.disabled:active,button.btn.btn-default[disabled]:active,fieldset[disabled] button.btn.btn-default:active,button.btn.btn-default.disabled.active,button.btn.btn-default[disabled].active,fieldset[disabled] button.btn.btn-default.active{background:rgba(0,0,0,0);border-color:#e2e2e2}button.btn.btn-default.disabled:hover,button.btn.btn-default[disabled]:hover,fieldset[disabled] button.btn.btn-default:hover,button.btn.btn-default.disabled:hover:hover,button.btn.btn-default[disabled]:hover:hover,fieldset[disabled] button.btn.btn-default:hover:hover,button.btn.btn-default.disabled:focus:hover,button.btn.btn-default[disabled]:focus:hover,fieldset[disabled] button.btn.btn-default:focus:hover,button.btn.btn-default.disabled.focus:hover,button.btn.btn-default[disabled].focus:hover,fieldset[disabled] button.btn.btn-default.focus:hover,button.btn.btn-default.disabled:active:hover,button.btn.btn-default[disabled]:active:hover,fieldset[disabled] button.btn.btn-default:active:hover,button.btn.btn-default.disabled.active:hover,button.btn.btn-default[disabled].active:hover,fieldset[disabled] button.btn.btn-default.active:hover{-webkit-transform:none;transform:none}button.btn.btn-default:hover,button.btn.btn-default:focus,button.btn.btn-default.focus,button.btn.btn-default:active,button.btn.btn-default.active{background:rgba(0,0,0,0);border-color:#bebebe}button.btn.btn-default:active,button.btn.btn-default:target{background-color:rgba(0,0,0,0.2);color:#666}button.btn.btn-success{background:#90b900;border-color:#90b900}button.btn.btn-success.disabled,button.btn.btn-success[disabled],fieldset[disabled] button.btn.btn-success,button.btn.btn-success.disabled:hover,button.btn.btn-success[disabled]:hover,fieldset[disabled] button.btn.btn-success:hover,button.btn.btn-success.disabled:focus,button.btn.btn-success[disabled]:focus,fieldset[disabled] button.btn.btn-success:focus,button.btn.btn-success.disabled.focus,button.btn.btn-success[disabled].focus,fieldset[disabled] button.btn.btn-success.focus,button.btn.btn-success.disabled:active,button.btn.btn-success[disabled]:active,fieldset[disabled] button.btn.btn-success:active,button.btn.btn-success.disabled.active,button.btn.btn-success[disabled].active,fieldset[disabled] button.btn.btn-success.active{background:#90b900;border-color:#9cc50c}button.btn.btn-success.disabled:hover,button.btn.btn-success[disabled]:hover,fieldset[disabled] button.btn.btn-success:hover,button.btn.btn-success.disabled:hover:hover,button.btn.btn-success[disabled]:hover:hover,fieldset[disabled] button.btn.btn-success:hover:hover,button.btn.btn-success.disabled:focus:hover,button.btn.btn-success[disabled]:focus:hover,fieldset[disabled] button.btn.btn-success:focus:hover,button.btn.btn-success.disabled.focus:hover,button.btn.btn-success[disabled].focus:hover,fieldset[disabled] button.btn.btn-success.focus:hover,button.btn.btn-success.disabled:active:hover,button.btn.btn-success[disabled]:active:hover,fieldset[disabled] button.btn.btn-success:active:hover,button.btn.btn-success.disabled.active:hover,button.btn.btn-success[disabled].active:hover,fieldset[disabled] button.btn.btn-success.active:hover{-webkit-transform:none;transform:none}button.btn.btn-success:hover,button.btn.btn-success:focus,button.btn.btn-success.focus,button.btn.btn-success:active,button.btn.btn-success.active{background:#90b900;border-color:#78a100}button.btn.btn-success:active,button.btn.btn-success:target{background-color:#7a9d00}button.btn.btn-info{background:#2dacd1;border-color:#2dacd1}button.btn.btn-info.disabled,button.btn.btn-info[disabled],fieldset[disabled] button.btn.btn-info,button.btn.btn-info.disabled:hover,button.btn.btn-info[disabled]:hover,fieldset[disabled] button.btn.btn-info:hover,button.btn.btn-info.disabled:focus,button.btn.btn-info[disabled]:focus,fieldset[disabled] button.btn.btn-info:focus,button.btn.btn-info.disabled.focus,button.btn.btn-info[disabled].focus,fieldset[disabled] button.btn.btn-info.focus,button.btn.btn-info.disabled:active,button.btn.btn-info[disabled]:active,fieldset[disabled] button.btn.btn-info:active,button.btn.btn-info.disabled.active,button.btn.btn-info[disabled].active,fieldset[disabled] button.btn.btn-info.active{background:#2dacd1;border-color:#39b8dd}button.btn.btn-info.disabled:hover,button.btn.btn-info[disabled]:hover,fieldset[disabled] button.btn.btn-info:hover,button.btn.btn-info.disabled:hover:hover,button.btn.btn-info[disabled]:hover:hover,fieldset[disabled] button.btn.btn-info:hover:hover,button.btn.btn-info.disabled:focus:hover,button.btn.btn-info[disabled]:focus:hover,fieldset[disabled] button.btn.btn-info:focus:hover,button.btn.btn-info.disabled.focus:hover,button.btn.btn-info[disabled].focus:hover,fieldset[disabled] button.btn.btn-info.focus:hover,button.btn.btn-info.disabled:active:hover,button.btn.btn-info[disabled]:active:hover,fieldset[disabled] button.btn.btn-info:active:hover,button.btn.btn-info.disabled.active:hover,button.btn.btn-info[disabled].active:hover,fieldset[disabled] button.btn.btn-info.active:hover{-webkit-transform:none;transform:none}button.btn.btn-info:hover,button.btn.btn-info:focus,button.btn.btn-info.focus,button.btn.btn-info:active,button.btn.btn-info.active{background:#2dacd1;border-color:#1594b9}button.btn.btn-info:active,button.btn.btn-info:target{background-color:#2692b2}button.btn.btn-warning{background:#dfb81c;border-color:#dfb81c}button.btn.btn-warning.disabled,button.btn.btn-warning[disabled],fieldset[disabled] button.btn.btn-warning,button.btn.btn-warning.disabled:hover,button.btn.btn-warning[disabled]:hover,fieldset[disabled] button.btn.btn-warning:hover,button.btn.btn-warning.disabled:focus,button.btn.btn-warning[disabled]:focus,fieldset[disabled] button.btn.btn-warning:focus,button.btn.btn-warning.disabled.focus,button.btn.btn-warning[disabled].focus,fieldset[disabled] button.btn.btn-warning.focus,button.btn.btn-warning.disabled:active,button.btn.btn-warning[disabled]:active,fieldset[disabled] button.btn.btn-warning:active,button.btn.btn-warning.disabled.active,button.btn.btn-warning[disabled].active,fieldset[disabled] button.btn.btn-warning.active{background:#dfb81c;border-color:#ebc428}button.btn.btn-warning.disabled:hover,button.btn.btn-warning[disabled]:hover,fieldset[disabled] button.btn.btn-warning:hover,button.btn.btn-warning.disabled:hover:hover,button.btn.btn-warning[disabled]:hover:hover,fieldset[disabled] button.btn.btn-warning:hover:hover,button.btn.btn-warning.disabled:focus:hover,button.btn.btn-warning[disabled]:focus:hover,fieldset[disabled] button.btn.btn-warning:focus:hover,button.btn.btn-warning.disabled.focus:hover,button.btn.btn-warning[disabled].focus:hover,fieldset[disabled] button.btn.btn-warning.focus:hover,button.btn.btn-warning.disabled:active:hover,button.btn.btn-warning[disabled]:active:hover,fieldset[disabled] button.btn.btn-warning:active:hover,button.btn.btn-warning.disabled.active:hover,button.btn.btn-warning[disabled].active:hover,fieldset[disabled] button.btn.btn-warning.active:hover{-webkit-transform:none;transform:none}button.btn.btn-warning:hover,button.btn.btn-warning:focus,button.btn.btn-warning.focus,button.btn.btn-warning:active,button.btn.btn-warning.active{background:#dfb81c;border-color:#c7a004}button.btn.btn-warning:active,button.btn.btn-warning:target{background-color:#be9c18}button.btn.btn-danger{background:#e85656;border-color:#e85656}button.btn.btn-danger.disabled,button.btn.btn-danger[disabled],fieldset[disabled] button.btn.btn-danger,button.btn.btn-danger.disabled:hover,button.btn.btn-danger[disabled]:hover,fieldset[disabled] button.btn.btn-danger:hover,button.btn.btn-danger.disabled:focus,button.btn.btn-danger[disabled]:focus,fieldset[disabled] button.btn.btn-danger:focus,button.btn.btn-danger.disabled.focus,button.btn.btn-danger[disabled].focus,fieldset[disabled] button.btn.btn-danger.focus,button.btn.btn-danger.disabled:active,button.btn.btn-danger[disabled]:active,fieldset[disabled] button.btn.btn-danger:active,button.btn.btn-danger.disabled.active,button.btn.btn-danger[disabled].active,fieldset[disabled] button.btn.btn-danger.active{background:#e85656;border-color:#f46262}button.btn.btn-danger.disabled:hover,button.btn.btn-danger[disabled]:hover,fieldset[disabled] button.btn.btn-danger:hover,button.btn.btn-danger.disabled:hover:hover,button.btn.btn-danger[disabled]:hover:hover,fieldset[disabled] button.btn.btn-danger:hover:hover,button.btn.btn-danger.disabled:focus:hover,button.btn.btn-danger[disabled]:focus:hover,fieldset[disabled] button.btn.btn-danger:focus:hover,button.btn.btn-danger.disabled.focus:hover,button.btn.btn-danger[disabled].focus:hover,fieldset[disabled] button.btn.btn-danger.focus:hover,button.btn.btn-danger.disabled:active:hover,button.btn.btn-danger[disabled]:active:hover,fieldset[disabled] button.btn.btn-danger:active:hover,button.btn.btn-danger.disabled.active:hover,button.btn.btn-danger[disabled].active:hover,fieldset[disabled] button.btn.btn-danger.active:hover{-webkit-transform:none;transform:none}button.btn.btn-danger:hover,button.btn.btn-danger:focus,button.btn.btn-danger.focus,button.btn.btn-danger:active,button.btn.btn-danger.active{background:#e85656;border-color:#d03e3e}button.btn.btn-danger:active,button.btn.btn-danger:target{background-color:#c54949}button.btn.btn-inverse{background:#949494;border-color:#949494;color:#fff}button.btn.btn-inverse.disabled,button.btn.btn-inverse[disabled],fieldset[disabled] button.btn.btn-inverse,button.btn.btn-inverse.disabled:hover,button.btn.btn-inverse[disabled]:hover,fieldset[disabled] button.btn.btn-inverse:hover,button.btn.btn-inverse.disabled:focus,button.btn.btn-inverse[disabled]:focus,fieldset[disabled] button.btn.btn-inverse:focus,button.btn.btn-inverse.disabled.focus,button.btn.btn-inverse[disabled].focus,fieldset[disabled] button.btn.btn-inverse.focus,button.btn.btn-inverse.disabled:active,button.btn.btn-inverse[disabled]:active,fieldset[disabled] button.btn.btn-inverse:active,button.btn.btn-inverse.disabled.active,button.btn.btn-inverse[disabled].active,fieldset[disabled] button.btn.btn-inverse.active{background:#949494;border-color:#a0a0a0}button.btn.btn-inverse.disabled:hover,button.btn.btn-inverse[disabled]:hover,fieldset[disabled] button.btn.btn-inverse:hover,button.btn.btn-inverse.disabled:hover:hover,button.btn.btn-inverse[disabled]:hover:hover,fieldset[disabled] button.btn.btn-inverse:hover:hover,button.btn.btn-inverse.disabled:focus:hover,button.btn.btn-inverse[disabled]:focus:hover,fieldset[disabled] button.btn.btn-inverse:focus:hover,button.btn.btn-inverse.disabled.focus:hover,button.btn.btn-inverse[disabled].focus:hover,fieldset[disabled] button.btn.btn-inverse.focus:hover,button.btn.btn-inverse.disabled:active:hover,button.btn.btn-inverse[disabled]:active:hover,fieldset[disabled] button.btn.btn-inverse:active:hover,button.btn.btn-inverse.disabled.active:hover,button.btn.btn-inverse[disabled].active:hover,fieldset[disabled] button.btn.btn-inverse.active:hover{-webkit-transform:none;transform:none}button.btn.btn-inverse:hover,button.btn.btn-inverse:focus,button.btn.btn-inverse.focus,button.btn.btn-inverse:active,button.btn.btn-inverse.active{background:#949494;border-color:#7c7c7c}button.btn.btn-inverse:active,button.btn.btn-inverse:target,button.btn.btn-inverse:hover{background-color:#949494;color:#fff}.btn-with-icon i{margin-right:10px}.btn-group :hover,.btn-toolbar :hover{-webkit-transform:none;transform:none}.btn-group button.btn.btn-primary{border-color:#149285}.btn-group button.btn.btn-primary:hover{border-color:#088679}.btn-group button.btn.btn-danger{border-color:#dc4a4a}.btn-group button.btn.btn-danger:hover{border-color:#d03e3e}.btn-group button.btn.btn-info{border-color:#21a0c5}.btn-group button.btn.btn-info:hover{border-color:#1594b9}.btn-group button.btn.btn-success{border-color:#84ad00}.btn-group button.btn.btn-success:hover{border-color:#78a100}.btn-group button.btn.btn-warning{border-color:#d3ac10}.btn-group button.btn.btn-warning:hover{border-color:#c7a004}.btn-group .dropdown-menu{margin-top:0px}.btn-toolbar{display:inline-block}.btn .caret{margin-left:2px}button.progress-button .progress{margin-bottom:0;border-radius:0}button.progress-button:hover{-webkit-transform:none;transform:none}button.progress-button.progress-button-style-shrink.btn.disabled.progress-button-dir-horizontal:hover{-webkit-transform:scaleY(0.3);transform:scaleY(0.3)}button.progress-button.progress-button-style-shrink.btn.disabled.progress-button-dir-vertical:hover{-webkit-transform:scaleX(0.1);transform:scaleX(0.1)}button.progress-button.btn.btn-primary{border-radius:0}button.progress-button.btn.btn-primary .content:after,button.progress-button.btn.btn-primary .content:before{color:#000}button.progress-button.btn.btn-primary.progress-button-style-move-up .content,button.progress-button.btn.btn-primary.progress-button-style-slide-down .content{background-color:#17746a}button.progress-button.btn.btn-primary.progress-button-style-lateral-lines .progress-inner{border-color:#17746a;background:0 0}button.progress-button.btn.btn-primary .progress{background-color:#17746a;box-shadow:0 1px 0 #17746a}button.progress-button.btn.btn-primary .progress-inner{background-color:#0f4943}button.progress-button.btn.btn-primary.progress-button-perspective{background:none}button.progress-button.btn.btn-primary.progress-button-perspective .content{background-color:#209e91}button.progress-button.btn.btn-default{border-radius:0}button.progress-button.btn.btn-default .content:after,button.progress-button.btn.btn-default .content:before{color:#999}button.progress-button.btn.btn-default.progress-button-style-move-up .content,button.progress-button.btn.btn-default.progress-button-style-slide-down .content{background-color:#e6e5e5}button.progress-button.btn.btn-default.progress-button-style-lateral-lines .progress-inner{border-color:#e6e5e5;background:0 0}button.progress-button.btn.btn-default .progress{background-color:#e6e5e5;box-shadow:0 1px 0 #e6e5e5}button.progress-button.btn.btn-default .progress-inner{background-color:#ccc}button.progress-button.btn.btn-default.progress-button-perspective{background:none}button.progress-button.btn.btn-default.progress-button-perspective .content{background-color:#fff}button.progress-button.btn.btn-success{border-radius:0}button.progress-button.btn.btn-success .content:after,button.progress-button.btn.btn-success .content:before{color:#000}button.progress-button.btn.btn-success.progress-button-style-move-up .content,button.progress-button.btn.btn-success.progress-button-style-slide-down .content{background-color:#688600}button.progress-button.btn.btn-success.progress-button-style-lateral-lines .progress-inner{border-color:#688600;background:0 0}button.progress-button.btn.btn-success .progress{background-color:#688600;box-shadow:0 1px 0 #688600}button.progress-button.btn.btn-success .progress-inner{background-color:#415300}button.progress-button.btn.btn-success.progress-button-perspective{background:none}button.progress-button.btn.btn-success.progress-button-perspective .content{background-color:#90b900}button.progress-button.btn.btn-info{border-radius:0}button.progress-button.btn.btn-info .content:after,button.progress-button.btn.btn-info .content:before{color:#092229}button.progress-button.btn.btn-info.progress-button-style-move-up .content,button.progress-button.btn.btn-info.progress-button-style-slide-down .content{background-color:#2489a7}button.progress-button.btn.btn-info.progress-button-style-lateral-lines .progress-inner{border-color:#2489a7;background:0 0}button.progress-button.btn.btn-info .progress{background-color:#2489a7;box-shadow:0 1px 0 #2489a7}button.progress-button.btn.btn-info .progress-inner{background-color:#1b677d}button.progress-button.btn.btn-info.progress-button-perspective{background:none}button.progress-button.btn.btn-info.progress-button-perspective .content{background-color:#2dacd1}button.progress-button.btn.btn-warning{border-radius:0}button.progress-button.btn.btn-warning .content:after,button.progress-button.btn.btn-warning .content:before{color:#2a2205}button.progress-button.btn.btn-warning.progress-button-style-move-up .content,button.progress-button.btn.btn-warning.progress-button-style-slide-down .content{background-color:#b29316}button.progress-button.btn.btn-warning.progress-button-style-lateral-lines .progress-inner{border-color:#b29316;background:0 0}button.progress-button.btn.btn-warning .progress{background-color:#b29316;box-shadow:0 1px 0 #b29316}button.progress-button.btn.btn-warning .progress-inner{background-color:#846d11}button.progress-button.btn.btn-warning.progress-button-perspective{background:none}button.progress-button.btn.btn-warning.progress-button-perspective .content{background-color:#dfb81c}button.progress-button.btn.btn-danger{border-radius:0}button.progress-button.btn.btn-danger .content:after,button.progress-button.btn.btn-danger .content:before{color:#640e0e}button.progress-button.btn.btn-danger.progress-button-style-move-up .content,button.progress-button.btn.btn-danger.progress-button-style-slide-down .content{background-color:#e22929}button.progress-button.btn.btn-danger.progress-button-style-lateral-lines .progress-inner{border-color:#e22929;background:0 0}button.progress-button.btn.btn-danger .progress{background-color:#e22929;box-shadow:0 1px 0 #e22929}button.progress-button.btn.btn-danger .progress-inner{background-color:#be1a1a}button.progress-button.btn.btn-danger.progress-button-perspective{background:none}button.progress-button.btn.btn-danger.progress-button-perspective .content{background-color:#e85656}.btn-raised{box-shadow:0 2px 5px 0 rgba(0,0,0,0.35)}.btn-mm{padding:5px 11px;font-size:13px}.btn-xm{padding:8px 14px;font-size:16px}.btn-group-xs>.btn,.btn-xs{padding:1px 5px;font-size:12px;line-height:1.5}.btn-group-sm>.btn,.btn-sm{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.btn-group-lg>.btn,.btn-lg{padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.dropdown button.btn.btn-default.dropdown-toggle{color:#666;border:1px solid #d6d6d6;background-color:transparent}.dropdown button.btn.btn-default.dropdown-toggle:focus,.dropdown button.btn.btn-default.dropdown-toggle:active{background-color:#fff}.ng2 .dropdown button.btn.btn-default.dropdown-toggle:focus,.ng2 .dropdown button.btn.btn-default.dropdown-toggle:active,.blur .dropdown button.btn.btn-default.dropdown-toggle:focus,.blur .dropdown button.btn.btn-default.dropdown-toggle:active{background-color:transparent}.bootstrap-select .dropdown-toggle:focus{outline:none !important}.bootstrap-select button.btn-default:focus{color:#fff}.bootstrap-select .btn{transition:none}.i-face{display:inline-block;background:url(\"/assets/img/face.svg\") no-repeat center;background-size:contain;vertical-align:middle;width:80px;height:80px}.i-money{display:inline-block;background:url(\"/assets/img/money.svg\") no-repeat center;background-size:contain;vertical-align:middle;width:80px;height:80px}.i-person{display:inline-block;background:url(\"/assets/img/person.svg\") no-repeat center;background-size:contain;vertical-align:middle;width:80px;height:80px}.i-refresh{display:inline-block;background:url(\"/assets/img/refresh.svg\") no-repeat center;background-size:contain;vertical-align:middle;width:80px;height:80px}::-webkit-scrollbar{width:1em;height:1em}::-webkit-scrollbar-thumb{background:#d9d9d9;cursor:pointer}::-webkit-scrollbar-track{background:rgba(0,0,0,0)}body{scrollbar-face-color:#d9d9d9;scrollbar-track-color:rgba(0,0,0,0)}html{position:relative;min-width:320px}html,body{min-height:100%;height:100%;min-width:320px}main{min-height:100%;position:relative;font:14px/16px \"Roboto\",sans-serif;color:#666;background-color:#F0F3F4}main .additional-bg{display:none}@media screen and (forced-colors: active), (forced-colors: none){html{overflow:hidden;height:100%}body{overflow:auto;height:100%}}a{transition:color 0.5s ease;outline:0 !important}.body-bg{display:none}.al-header{display:block;height:49px;margin:0;background-repeat:repeat-x;position:relative;z-index:905;color:#444444}.al-main{margin-left:180px;padding:66px 0 34px 0;min-height:500px;position:relative}.al-footer{height:34px;padding:0 18px 0 200px;width:100%;position:absolute;display:block;bottom:0;font-size:13px;color:#666;transition:padding-left 0.5s ease}.al-footer-main{float:left;margin-left:15px}.al-copy{float:left}.al-footer-right{float:right;margin-right:12px}.al-footer-right i{margin:0 4px;color:#e85656;font-size:12px}.al-footer-right a{margin-left:4px;color:#666}.al-footer-right a:hover{color:#e85656}.al-share{margin:-6px 0 0 12px;padding:0;list-style:none;float:left}.al-share li{list-style:none;float:left;margin-left:16px}.al-share li i{cursor:pointer;transition:all 0.1s ease;color:white;padding:6px;box-sizing:content-box;font-size:16px}.al-share li i:hover{-webkit-transform:scale(1.2);transform:scale(1.2)}.al-share li i.fa-facebook-square{color:#3b5998}.al-share li i.fa-twitter-square{color:#55acee}.al-share li i.fa-google-plus-square{color:#dd4b39}.al-content{padding:8px 32px 8px 40px}@media screen and (max-width: 500px){.al-content{padding:8px 20px}}.vis-hidden{visibility:hidden;position:absolute;top:-9999px;left:-9999px}.icon-up,.icon-down{width:5px;height:13px;display:block}.icon-up{background:url(\"/assets/img/arrow-green-up.svg\") no-repeat 0 0}.icon-down{background:url(\"/assets/img/arrow-red-down.svg\") no-repeat 0 0}.disable-text-selection{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.align-right{text-align:right}.amcharts-chart-div>a{font-size:6px !important}.content-panel{padding-left:22px;padding-top:26px}@media (max-width: 590px){.al-footer-right{float:none;margin-bottom:19px;margin-right:0}.al-footer{height:76px;text-align:center}.al-main{padding-bottom:76px}.al-footer-main{float:none;display:inline-block}}.full-invisible{visibility:hidden !important}.full-invisible *{visibility:hidden !important}.irs-grid-text{color:#666}.text-right{text-align:right}.text-left{text-align:left}.text-center{text-align:center}@font-face{font-family:'socicon';src:url(\"/assets/fonts/socicon.eot\");src:url(\"/assets/fonts/socicon.eot?#iefix\") format(\"embedded-opentype\"),url(\"/assets/fonts/socicon.woff\") format(\"woff\"),url(\"/assets/fonts/socicon.woff2\") format(\"woff2\"),url(\"/assets/fonts/socicon.ttf\") format(\"truetype\"),url(\"/assets/fonts/socicon.svg#sociconregular\") format(\"svg\");font-weight:400;font-style:normal;text-transform:initial}.socicon{font-family:'socicon' !important}.socicon{position:relative;top:1px;display:inline-block;font-family:'socicon';font-style:normal;font-weight:400;line-height:1;-webkit-font-smoothing:antialiased}.socicon:empty{width:1em}.socicon-twitter{background-color:#55acee}.socicon-twitter:before{content:\"a\"}.socicon-facebook{background-color:#3b5998}.socicon-facebook:before{content:\"b\"}.socicon-google{background-color:#dd4b39}.socicon-google:before{content:\"c\"}.socicon-linkedin{background-color:#0177B5}.socicon-linkedin:before{content:\"j\"}.socicon-github{background-color:#6b6b6b}.socicon-github:before{content:\"Q\"}.socicon-stackoverflow{background-color:#2F96E8}.socicon-stackoverflow:before{content:\"(\"}.socicon-dribble{background-color:#F26798}.socicon-dribble:before{content:\"D\"}.socicon-behace{background-color:#0093FA}.socicon-behace:before{content:\"H\"}.table{margin-bottom:0px}.table>thead>tr>th{border-bottom:1px solid #dcdcdc;white-space:nowrap}.table>thead>tr>th:first-child{text-align:center}.table>thead>tr>th:last-child{padding-right:16px}.table>tbody>tr>tr:first-child{padding-top:1px}.table>tbody>tr>td{padding:0px 8px;line-height:35px;border-top:1px solid #dcdcdc}.table>tbody>tr>td:first-child{text-align:center}.table>tbody>tr>td:last-child{padding-right:16px !important}.table-id{text-align:left !important;width:40px}.table-arr{width:5px;padding:10px 8px 8px 0 !important}.table-no-borders{border:none}.table-no-borders td,.table-no-borders th,.table-no-borders tr{border:none !important}.editable-wrap .btn-group.form-control{background-color:transparent}.editable-tr-wrap .editable-wrap{vertical-align:super}.editable-tr-wrap .editable-controls input.editable-input{width:110px}.editable-tr-wrap td{width:20%}.editable-table-button{width:70px}.add-row-editable-table{margin-bottom:10px}.add-row-editable-table+table{margin-bottom:5px}.select-page-size-wrap{width:150px}.table .header-row th{vertical-align:middle;padding:0 8px}tr.editable-row input.form-control{vertical-align:middle}.select-td .editable-select{margin-bottom:1px}@media screen and (max-width: 1199px){.editable-tr-wrap .editable-wrap{vertical-align:middle}}.browser-icons{width:41px}.st-sort-ascent,.st-sort-descent{position:relative}.st-sort-ascent:after,.st-sort-descent:after{width:0;height:0;border-bottom:4px solid #666;border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}.st-sort-descent:after{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);margin-bottom:-2px}.sortable th{cursor:pointer}.sortable th:after{content:'';display:inline-block;width:8px;margin-left:8px}a.email-link{color:#666}a.email-link:hover{color:#e85656}input.search-input{margin-left:-8px;padding-left:8px}.table .pagination{margin:4px 0 -12px 0}.table .pagination a{cursor:pointer}.vertical-scroll{max-height:214px}.pagination>li>a,.pagination>li>span{background:transparent}.pagination>li:first-child>a,.pagination>li:first-child>span{border-top-left-radius:0px;border-bottom-left-radius:0px}.pagination>li:last-child>a,.pagination>li:last-child>span{border-top-right-radius:0px;border-bottom-right-radius:0px}.status-button{width:60px}.table .editable-wrap .editable-controls,.table .editable-wrap .editable-error{vertical-align:sub}.table .editable-wrap .editable-controls .btn,.table .editable-wrap .editable-error .btn{padding:3px 8px}.table .editable-wrap .editable-controls .btn.dropdown-toggle,.table .editable-wrap .editable-error .btn.dropdown-toggle{padding:3px 20px;margin-top:3px}.table .editable-wrap .editable-controls input,.table .editable-wrap .editable-error input{line-height:1px;height:30px}.form-inline button[type=\"submit\"].editable-table-button{margin-left:0}.table>thead>tr>th{border-bottom:none}.table>tbody>tr.no-top-border:first-child>td{border-top:none}.black-muted-bg{background-color:rgba(0,0,0,0.1)}.table-hover>tbody>tr:hover{background-color:rgba(0,0,0,0.1)}.table-bordered,.table-bordered>thead>tr>th,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>tbody>tr>td,.table-bordered>tfoot>tr>td{border:1px solid #dcdcdc}.table-striped>tbody>tr:nth-of-type(odd){background-color:rgba(0,0,0,0.1)}.table>tbody>tr.primary>td{background-color:rgba(32,158,145,0.7);color:#fff;border:none}.table>tbody>tr.primary>td a.email-link{color:#fff}.table>tbody>tr.primary>td a.email-link:hover{color:#e85656}.table>tbody>tr.success>td{background-color:rgba(144,185,0,0.7);color:#fff;border:none}.table>tbody>tr.success>td a.email-link{color:#fff}.table>tbody>tr.success>td a.email-link:hover{color:#e85656}.table>tbody>tr.warning>td{background-color:rgba(223,184,28,0.7);color:#fff;border:none}.table>tbody>tr.warning>td a.email-link{color:#fff}.table>tbody>tr.warning>td a.email-link:hover{color:#e85656}.table>tbody>tr.danger>td{background-color:rgba(232,86,86,0.7);color:#fff;border:none}.table>tbody>tr.danger>td a.email-link{color:#fff}.table>tbody>tr.danger>td a.email-link:hover{color:#e85656}.table>tbody>tr.info>td{background-color:rgba(45,172,209,0.7);color:#fff;border:none}.table>tbody>tr.info>td a.email-link{color:#fff}.table>tbody>tr.info>td a.email-link:hover{color:#e85656}.editable-click,a.editable-click{color:#666;border-bottom:dashed 1px #d6d6d6}th{font-weight:400}.editable-empty{color:#c54949}.table>tbody>tr>th{border:none}.table-striped>tbody>tr>td{border:none}.pagination>li>a,.pagination>li>span{color:#666;border-color:#d6d6d6}.pagination>li:first-of-type>a,.pagination>li:first-of-type>span{border-top-left-radius:5px;border-bottom-left-radius:5px}.pagination>li:last-of-type>a,.pagination>li:last-of-type>span{border-top-right-radius:5px;border-bottom-right-radius:5px}.pagination>.active>a,.pagination>.active>span,.pagination>.active>a:hover,.pagination>.active>span:hover,.pagination>.active>a:focus,.pagination>.active>span:focus{background-color:rgba(0,0,0,0.3) !important;border-color:#d6d6d6 !important}.pagination>li>a:hover,.pagination>li>span:hover,.pagination>li>a:focus,.pagination>li>span:focus{background-color:rgba(0,0,0,0.2);color:#666}.page-item.disabled .page-link,.page-item.disabled .page-link:focus,.page-item.disabled .page-link:hover{background-color:rgba(255,255,255,0.1);color:#666}.editable-buttons .btn-with-icon i{margin-right:0}.table-responsive{margin-top:10px}.label{border-radius:0}.label-primary{background:#209e91}.label-info{background:#63bbb2}.label-success{background:#90b900}.label-warning{background:#dfb81c}.label-danger{background:#e85656}.form-horizontal label{line-height:34px;margin-bottom:0;padding-top:0 !important}.form-group label{margin-bottom:5px;color:#666;font-weight:400;font-size:13px}.form-control{color:#666;border:1px solid #cbcbcb;border-radius:5px;background-color:#fff;box-shadow:none;font-size:14px}.form-control::-webkit-input-placeholder{color:#666;opacity:.7}.form-control:-moz-placeholder{color:#666;opacity:.7}.form-control::-moz-placeholder{color:#666;opacity:.7}.form-control:-ms-input-placeholder{color:#666;opacity:.7}.form-control:focus{color:#666;box-shadow:none;border-color:#4db1a7;background:#fff}select.form-control{padding-left:8px}select.form-control:not([multiple]) option{color:#7d7d7d}select.form-control[multiple] option{color:#666}textarea.form-control{height:96px}.form-inline .form-group input{width:100%}.form-inline .form-group label{margin-right:12px}.form-inline button[type=\"submit\"]{margin-left:12px}.switch-container{display:inline-block}.switch-container.primary .bootstrap-switch.bootstrap-switch-on{border-color:#209e91}.switch-container.success .bootstrap-switch.bootstrap-switch-on{border-color:#90b900}.switch-container.warning .bootstrap-switch.bootstrap-switch-on{border-color:#dfb81c}.switch-container.danger .bootstrap-switch.bootstrap-switch-on{border-color:#e85656}.switch-container.info .bootstrap-switch.bootstrap-switch-on{border-color:#63bbb2}.bootstrap-switch{border-radius:5px;border:1px solid #fff;transition:border-color ease-in-out .7s, box-shadow ease-in-out .7s}.bootstrap-switch:focus{outline:none}.bootstrap-switch.bootstrap-switch-off{border-color:#d6d6d6}.bootstrap-switch.bootstrap-switch-focused{box-shadow:none}.bootstrap-switch.bootstrap-switch-focused.bootstrap-switch-off{border-color:#d6d6d6}.bootstrap-switch .bootstrap-switch-container{border-radius:0}.bootstrap-switch .bootstrap-switch-container:focus{outline:none}.bootstrap-switch .bootstrap-switch-handle-on{border-radius:0}.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-default{background:#fff}.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-success{background:#90b900}.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-primary{background:#209e91}.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-warning{background:#dfb81c}.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-danger{background:#e85656}.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-info{background:#63bbb2}.bootstrap-switch .bootstrap-switch-handle-off{border-radius:0}.bootstrap-switch .bootstrap-switch-label{background:transparent}.bootstrap-switch.bootstrap-switch-animate .bootstrap-switch-container{transition:margin-left .2s}.switches{margin-left:-12px;margin-bottom:-12px}.switches .switch-container{float:left;margin-left:12px;margin-bottom:12px}.input-group{width:100%;margin-bottom:15px}.input-group>span{border-radius:0}.nowrap{white-space:nowrap}.cut-with-dots{overflow:hidden;text-overflow:ellipsis;display:block}label.custom-radio{@padding-right : 0;padding-left:0;margin-bottom:0}label.custom-radio>input{height:0;z-index:-100 !important;opacity:0;position:absolute}label.custom-radio>input:checked+span:before{content:\"\\f00c\";font-weight:300}label.custom-radio>input:disabled+span{color:#ddd;cursor:not-allowed}label.custom-radio>input:disabled+span:before{border-color:#ddd !important;cursor:not-allowed}label.custom-radio>span{position:relative;display:inline-block;margin:0;line-height:16px;font-weight:300;cursor:pointer;padding-left:22px;width:100%}label.custom-radio>span:before{cursor:pointer;font-family:fontAwesome;font-weight:300;font-size:12px;color:#666;content:\"\\a0\";background-color:transparent;border:1px solid #d6d6d6;border-radius:0;display:inline-block;text-align:center;height:16px;line-height:14px;min-width:16px;margin-right:6px;position:relative;top:0;margin-left:-22px;float:left}label.custom-radio>span:hover:before{border-color:#4db1a7}label.custom-radio>input:checked+span:before{content:\"\\f111\"}label.custom-radio>span:before{border-radius:16px;font-size:9px}label.custom-input-primary>span:before{color:#209e91}label.custom-input-primary>span:hover:before{border-color:#209e91}label.custom-input-success>span:before{color:#90b900}label.custom-input-success>span:hover:before{border-color:#90b900}label.custom-input-warning>span:before{color:#dfb81c}label.custom-input-warning>span:hover:before{border-color:#dfb81c}label.custom-input-danger>span:before{color:#e85656}label.custom-input-danger>span:hover:before{border-color:#e85656}.form-horizontal .radio,.form-horizontal .radio-inline{padding-top:0}.input-demo{line-height:25px}.input-group-addon{line-height:inherit}.form-control-feedback{position:absolute;top:0;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center;pointer-events:none}.has-feedback .form-control{padding-right:42.5px}.has-feedback label ~ .form-control-feedback{top:19px;font-size:18px}.bootstrap-select .btn-default:focus{color:#666}.form-control[readonly]{background-color:#fff;border-color:#e2e2e2}.form-control[readonly]::-webkit-input-placeholder{color:#666;opacity:.5}.form-control[readonly]:-moz-placeholder{color:#666;opacity:.5}.form-control[readonly]::-moz-placeholder{color:#666;opacity:.5}.form-control[readonly]:-ms-input-placeholder{color:#666;opacity:.5}.form-control[disabled],fieldset[disabled] .form-control{background-color:#fff;color:#ddd;border-color:#e2e2e2}.form-control[disabled]::-webkit-input-placeholder,fieldset[disabled] .form-control::-webkit-input-placeholder{color:#666;opacity:.5}.form-control[disabled]:-moz-placeholder,fieldset[disabled] .form-control:-moz-placeholder{color:#666;opacity:.5}.form-control[disabled]::-moz-placeholder,fieldset[disabled] .form-control::-moz-placeholder{color:#666;opacity:.5}.form-control[disabled]:-ms-input-placeholder,fieldset[disabled] .form-control:-ms-input-placeholder{color:#666;opacity:.5}.form-control-rounded{border-radius:16px}.help-block{color:#949494;vertical-align:sub}.help-block.error-block{display:none}.has-error .help-block.error-block.basic-block{display:block}.input-group-addon-danger{background:#e85656;color:#fff;border-color:#e85656}.input-group-addon-warning{background:#dfb81c;color:#fff;border-color:#dfb81c}.input-group-addon-success{background:#90b900;color:#fff;border-color:#90b900}.input-group-addon-primary{background:#209e91;color:#fff;border-color:#209e91}.checkbox-demo-row{margin-bottom:12px}.dropdown-menu{border-radius:5px}.dropdown button.btn.btn-default.dropdown-toggle{color:#666}.bootstrap-select.btn-group button.btn.btn-default{background:transparent;color:#666}.bootstrap-select.btn-group button.btn.btn-default:hover{background:#fff;box-shadow:none;outline:0 !important}.bootstrap-select.btn-group button.btn.btn-default:active{background:#fff;box-shadow:none}.bootstrap-select.btn-group.open>.btn.btn-default.dropdown-toggle{background:#fff;box-shadow:none;border-color:#d6d6d6}.bootstrap-select.btn-group.open>.btn{border-radius:5px 5px 0 0}.bootstrap-select.btn-group.open .dropdown-menu.open{border:1px solid #dcdcdc;border-top:none;border-radius:0 0 5px 5px}.bootstrap-select.btn-group.with-search.open .btn-default+.dropdown-menu .bs-searchbox .form-control{background-color:#fff;border:1px solid #cbcbcb}.bootstrap-select.btn-group.with-search.open .btn-default+.dropdown-menu .no-results{color:#7d7d7d}.bootstrap-select.btn-group .notify{color:#7d7d7d}.has-success{position:relative}.has-success .control-label{color:#666}.has-success .form-control{border:1px solid #a6c733}.has-success .form-control:focus{box-shadow:none;border-color:#90b900}.has-success label.custom-checkbox{color:#a6c733}.has-success label.custom-checkbox>span:before{color:#a6c733}.has-success label.custom-checkbox>span:hover:before{border-color:#a6c733}.has-success .form-control-feedback{color:#a6c733}.has-success .input-group-addon{background-color:#a6c733;color:#fff}.has-warning{position:relative}.has-warning .control-label{color:#666}.has-warning .form-control{border:1px solid #e5c649}.has-warning .form-control:focus{box-shadow:none;border-color:#dfb81c}.has-warning label.custom-checkbox{color:#e5c649}.has-warning label.custom-checkbox>span:before{color:#e5c649}.has-warning label.custom-checkbox>span:hover:before{border-color:#e5c649}.has-warning .form-control-feedback{color:#e5c649}.has-warning .input-group-addon{background-color:#e5c649;color:#fff}.has-error{position:relative}.has-error .control-label{color:#666}.has-error .form-control{border:1px solid #ed7878}.has-error .form-control:focus{box-shadow:none;border-color:#e85656}.has-error label.custom-checkbox{color:#ed7878}.has-error label.custom-checkbox>span:before{color:#ed7878}.has-error label.custom-checkbox>span:hover:before{border-color:#ed7878}.has-error .form-control-feedback{color:#ed7878}.has-error .input-group-addon{background-color:#ed7878;color:#fff}.bootstrap-tagsinput{color:#666;background-color:#fff;border:1px solid #cbcbcb;border-radius:5px;box-shadow:none;max-width:100%;font-size:14px;line-height:26px;width:100%}.bootstrap-tagsinput.form-control{display:block;width:100%}.bootstrap-tagsinput .tag{border-radius:3px;font-weight:400;font-size:11px;padding:4px 8px}.bootstrap-tagsinput .tag [data-role=\"remove\"]:hover{box-shadow:none}.bootstrap-tagsinput input{background-color:#fff;border:1px solid #cbcbcb;border-radius:5px;line-height:22px;font-size:11px;min-width:53px}.bootstrap-tagsinput input::-webkit-input-placeholder{color:#666;opacity:.8}.bootstrap-tagsinput input:-moz-placeholder{color:#666;opacity:.8}.bootstrap-tagsinput input::-moz-placeholder{color:#666;opacity:.8}.bootstrap-tagsinput input:-ms-input-placeholder{color:#666;opacity:.8}.progress{background:rgba(0,0,0,0.07)}.progress-bar-primary{background-color:#209e91}.progress-bar-success{background-color:#b1ce4d}.progress-bar-warning{background-color:#dfb81c}.progress-bar-danger{background-color:#e85656}.has-success .input-group-addon{border:none}.input-group>span.addon-left{border-top-left-radius:5px;border-bottom-left-radius:5px}.input-group>span.addon-right{border-top-right-radius:5px;border-bottom-right-radius:5px}.input-group-btn:not(:first-child)>.btn,.input-group-btn:not(:first-child)>.btn-group{margin-left:0}.input-group-btn>.btn{line-height:1.56}.with-primary-addon:focus{border-color:#209e91}.with-warning-addon:focus{border-color:#dfb81c}.with-success-addon:focus{border-color:#90b900}.with-danger-addon:focus{border-color:#e85656}.sub-little-text{font-size:12px}.rating{font-size:20px}rating-inputs span{vertical-align:middle}label.custom-checkbox{padding-right:0;padding-left:0;margin-bottom:0}label.custom-checkbox>input{height:0;z-index:-100 !important;opacity:0;position:absolute}label.custom-checkbox>input:checked+span:before{content:\"\\f00c\";font-weight:300}label.custom-checkbox>input:disabled+span{color:#ddd;cursor:not-allowed}label.custom-checkbox>input:disabled+span:before{border-color:#ddd !important;cursor:not-allowed}label.custom-checkbox>span{position:relative;display:inline-block;margin:0;line-height:16px;font-weight:300;cursor:pointer;padding-left:22px;width:100%}label.custom-checkbox>span:before{cursor:pointer;font-family:fontAwesome;font-weight:300;font-size:12px;color:#666;content:\"\\a0\";background-color:transparent;border:1px solid #d6d6d6;border-radius:0;display:inline-block;text-align:center;height:16px;line-height:14px;min-width:16px;margin-right:6px;position:relative;top:0;margin-left:-22px;float:left}label.custom-checkbox>span:hover:before{border-color:#4db1a7}#tree-view .tree .node-value{color:white}#tree-view .tree .folding.node-expanded::before{color:white}#tree-view .tree .folding.node-collapsed::before{color:white}#tree-view .tree .folding.node-leaf::before{color:white}#tree-view .tree .over-drop-target{border:4px solid ghostwhite}#tree-view .tree .node-value .node-selected::after{background-color:white}#tree-view .tree .node-value:after{background-color:white}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/pages/login/login.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/pages/login/login.scss ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-main{display:flex;align-items:center;height:100%;width:100%;position:absolute}.auth-block{width:540px;margin:0 auto;border-radius:5px;background:rgba(0,0,0,0.55);padding:32px}.auth-block h1{color:#fff;font-weight:300;margin-bottom:28px;text-align:center}.auth-block p{font-size:16px}.auth-block a{text-decoration:none;outline:none;transition:all 0.2s ease;color:#209e91}.auth-block a:hover{color:#1b867b}.auth-block .control-label{padding-top:11px;color:#fff}.auth-block .form-group{margin-bottom:12px}.auth-input{width:300px;margin-bottom:24px}.auth-input input{display:block;width:100%;border:none;font-size:16px;padding:4px 10px;outline:none}a.forgot-pass{display:block;text-align:right;margin-bottom:-20px;float:right;z-index:2;position:relative}.auth-link{display:block;font-size:16px;text-align:center;margin-bottom:33px}.auth-sep{margin-top:36px;margin-bottom:24px;line-height:20px;font-size:16px;text-align:center;display:block;position:relative}.auth-sep>span{display:table-cell;width:30%;white-space:nowrap;padding:0 24px;color:#fff}.auth-sep>span>span{margin-top:-12px;display:block}.auth-sep:before,.auth-sep:after{border-top:solid 1px #fff;content:\"\";height:1px;width:35%;display:table-cell}.al-share-auth{text-align:center}.al-share-auth .al-share{float:none;margin:0;padding:0;display:inline-block}.al-share-auth .al-share li{margin-left:24px}.al-share-auth .al-share li:first-child{margin-left:0}.al-share-auth .al-share li i{font-size:24px}.btn-auth{color:#fff !important}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/components/baAmChart/baAmChart.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/components/baAmChart/baAmChart.scss ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ammapAlert{display:table-cell;vertical-align:middle;text-align:center;font-family:verdana,helvetica,arial,sans-serif;font-size:12px;color:#CC0000}.ammapDescriptionWindow{font-size:11px;font-family:verdana,helvetica,arial,sans-serif;background-color:#FFFFFF;border-style:solid;border-color:#DADADA;border-width:1px;color:#000000;padding:8px;box-sizing:border-box}.ammapDescriptionTitle{font-size:12px;font-weight:bold;font-family:verdana,helvetica,arial,sans-serif;padding-bottom:5px}.ammapObjectList ul{padding-left:20px;list-style:square outside;color:#999999;font-family:verdana,helvetica,arial,sans-serif;font-size:12px}.ammapObjectList ul ul{padding-left:14px}.ammapObjectList a{color:#000000}.ammapObjectList a{color:#000000;text-decoration:none;display:block;padding:2px}.ammapObjectList a:hover{color:#CC0000;text-decoration:none;background:#FFFFFF;cursor:pointer;display:block}.ammapDescriptionText{overflow:auto}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/components/baChartistChart/baChartistChart.scss":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/components/baChartistChart/baChartistChart.scss ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ct-label{fill:rgba(0,0,0,0.4);color:rgba(0,0,0,0.4);font-size:0.75rem;line-height:1}.ct-chart-line .ct-label,.ct-chart-bar .ct-label{display:block;display:flex}.ct-chart-pie .ct-label,.ct-chart-donut .ct-label{dominant-baseline:central}.ct-label.ct-horizontal.ct-start{align-items:flex-end;justify-content:flex-start;text-align:left;text-anchor:start}.ct-label.ct-horizontal.ct-end{align-items:flex-start;justify-content:flex-start;text-align:left;text-anchor:start}.ct-label.ct-vertical.ct-start{align-items:flex-end;justify-content:flex-end;text-align:right;text-anchor:end}.ct-label.ct-vertical.ct-end{align-items:flex-end;justify-content:flex-start;text-align:left;text-anchor:start}.ct-chart-bar .ct-label.ct-horizontal.ct-start{align-items:flex-end;justify-content:center;text-align:center;text-anchor:start}.ct-chart-bar .ct-label.ct-horizontal.ct-end{align-items:flex-start;justify-content:center;text-align:center;text-anchor:start}.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start{align-items:flex-end;justify-content:flex-start;text-align:left;text-anchor:start}.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end{align-items:flex-start;justify-content:flex-start;text-align:left;text-anchor:start}.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start{align-items:center;justify-content:flex-end;text-align:right;text-anchor:end}.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end{align-items:center;justify-content:flex-start;text-align:left;text-anchor:end}.ct-grid{stroke:rgba(0,0,0,0.2);stroke-width:1px;stroke-dasharray:2px}.ct-grid-background{fill:none}.ct-point{stroke-width:10px;stroke-linecap:round}.ct-line{fill:none;stroke-width:4px}.ct-area{stroke:none;fill-opacity:0.1}.ct-bar{fill:none;stroke-width:10px}.ct-slice-donut{fill:none;stroke-width:60px}.ct-series-a .ct-point,.ct-series-a .ct-line,.ct-series-a .ct-bar,.ct-series-a .ct-slice-donut{stroke:#d70206}.ct-series-a .ct-slice-pie,.ct-series-a .ct-area{fill:#d70206}.ct-series-b .ct-point,.ct-series-b .ct-line,.ct-series-b .ct-bar,.ct-series-b .ct-slice-donut{stroke:#f05b4f}.ct-series-b .ct-slice-pie,.ct-series-b .ct-area{fill:#f05b4f}.ct-series-c .ct-point,.ct-series-c .ct-line,.ct-series-c .ct-bar,.ct-series-c .ct-slice-donut{stroke:#f4c63d}.ct-series-c .ct-slice-pie,.ct-series-c .ct-area{fill:#f4c63d}.ct-series-d .ct-point,.ct-series-d .ct-line,.ct-series-d .ct-bar,.ct-series-d .ct-slice-donut{stroke:#d17905}.ct-series-d .ct-slice-pie,.ct-series-d .ct-area{fill:#d17905}.ct-series-e .ct-point,.ct-series-e .ct-line,.ct-series-e .ct-bar,.ct-series-e .ct-slice-donut{stroke:#453d3f}.ct-series-e .ct-slice-pie,.ct-series-e .ct-area{fill:#453d3f}.ct-series-f .ct-point,.ct-series-f .ct-line,.ct-series-f .ct-bar,.ct-series-f .ct-slice-donut{stroke:#59922b}.ct-series-f .ct-slice-pie,.ct-series-f .ct-area{fill:#59922b}.ct-series-g .ct-point,.ct-series-g .ct-line,.ct-series-g .ct-bar,.ct-series-g .ct-slice-donut{stroke:#0544d3}.ct-series-g .ct-slice-pie,.ct-series-g .ct-area{fill:#0544d3}.ct-series-h .ct-point,.ct-series-h .ct-line,.ct-series-h .ct-bar,.ct-series-h .ct-slice-donut{stroke:#6b0392}.ct-series-h .ct-slice-pie,.ct-series-h .ct-area{fill:#6b0392}.ct-series-i .ct-point,.ct-series-i .ct-line,.ct-series-i .ct-bar,.ct-series-i .ct-slice-donut{stroke:#f05b4f}.ct-series-i .ct-slice-pie,.ct-series-i .ct-area{fill:#f05b4f}.ct-series-j .ct-point,.ct-series-j .ct-line,.ct-series-j .ct-bar,.ct-series-j .ct-slice-donut{stroke:#dda458}.ct-series-j .ct-slice-pie,.ct-series-j .ct-area{fill:#dda458}.ct-series-k .ct-point,.ct-series-k .ct-line,.ct-series-k .ct-bar,.ct-series-k .ct-slice-donut{stroke:#eacf7d}.ct-series-k .ct-slice-pie,.ct-series-k .ct-area{fill:#eacf7d}.ct-series-l .ct-point,.ct-series-l .ct-line,.ct-series-l .ct-bar,.ct-series-l .ct-slice-donut{stroke:#86797d}.ct-series-l .ct-slice-pie,.ct-series-l .ct-area{fill:#86797d}.ct-series-m .ct-point,.ct-series-m .ct-line,.ct-series-m .ct-bar,.ct-series-m .ct-slice-donut{stroke:#b2c326}.ct-series-m .ct-slice-pie,.ct-series-m .ct-area{fill:#b2c326}.ct-series-n .ct-point,.ct-series-n .ct-line,.ct-series-n .ct-bar,.ct-series-n .ct-slice-donut{stroke:#6188e2}.ct-series-n .ct-slice-pie,.ct-series-n .ct-area{fill:#6188e2}.ct-series-o .ct-point,.ct-series-o .ct-line,.ct-series-o .ct-bar,.ct-series-o .ct-slice-donut{stroke:#a748ca}.ct-series-o .ct-slice-pie,.ct-series-o .ct-area{fill:#a748ca}.ct-square{display:block;position:relative;width:100%}.ct-square:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:100%}.ct-square:after{content:\"\";display:table;clear:both}.ct-square>svg{display:block;position:absolute;top:0;left:0}.ct-minor-second{display:block;position:relative;width:100%}.ct-minor-second:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:93.75%}.ct-minor-second:after{content:\"\";display:table;clear:both}.ct-minor-second>svg{display:block;position:absolute;top:0;left:0}.ct-major-second{display:block;position:relative;width:100%}.ct-major-second:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:88.8888888889%}.ct-major-second:after{content:\"\";display:table;clear:both}.ct-major-second>svg{display:block;position:absolute;top:0;left:0}.ct-minor-third{display:block;position:relative;width:100%}.ct-minor-third:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:83.3333333333%}.ct-minor-third:after{content:\"\";display:table;clear:both}.ct-minor-third>svg{display:block;position:absolute;top:0;left:0}.ct-major-third{display:block;position:relative;width:100%}.ct-major-third:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:80%}.ct-major-third:after{content:\"\";display:table;clear:both}.ct-major-third>svg{display:block;position:absolute;top:0;left:0}.ct-perfect-fourth{display:block;position:relative;width:100%}.ct-perfect-fourth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:75%}.ct-perfect-fourth:after{content:\"\";display:table;clear:both}.ct-perfect-fourth>svg{display:block;position:absolute;top:0;left:0}.ct-perfect-fifth{display:block;position:relative;width:100%}.ct-perfect-fifth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:66.6666666667%}.ct-perfect-fifth:after{content:\"\";display:table;clear:both}.ct-perfect-fifth>svg{display:block;position:absolute;top:0;left:0}.ct-minor-sixth{display:block;position:relative;width:100%}.ct-minor-sixth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:62.5%}.ct-minor-sixth:after{content:\"\";display:table;clear:both}.ct-minor-sixth>svg{display:block;position:absolute;top:0;left:0}.ct-golden-section{display:block;position:relative;width:100%}.ct-golden-section:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:61.804697157%}.ct-golden-section:after{content:\"\";display:table;clear:both}.ct-golden-section>svg{display:block;position:absolute;top:0;left:0}.ct-major-sixth{display:block;position:relative;width:100%}.ct-major-sixth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:60%}.ct-major-sixth:after{content:\"\";display:table;clear:both}.ct-major-sixth>svg{display:block;position:absolute;top:0;left:0}.ct-minor-seventh{display:block;position:relative;width:100%}.ct-minor-seventh:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:56.25%}.ct-minor-seventh:after{content:\"\";display:table;clear:both}.ct-minor-seventh>svg{display:block;position:absolute;top:0;left:0}.ct-major-seventh{display:block;position:relative;width:100%}.ct-major-seventh:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:53.3333333333%}.ct-major-seventh:after{content:\"\";display:table;clear:both}.ct-major-seventh>svg{display:block;position:absolute;top:0;left:0}.ct-octave{display:block;position:relative;width:100%}.ct-octave:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:50%}.ct-octave:after{content:\"\";display:table;clear:both}.ct-octave>svg{display:block;position:absolute;top:0;left:0}.ct-major-tenth{display:block;position:relative;width:100%}.ct-major-tenth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:40%}.ct-major-tenth:after{content:\"\";display:table;clear:both}.ct-major-tenth>svg{display:block;position:absolute;top:0;left:0}.ct-major-eleventh{display:block;position:relative;width:100%}.ct-major-eleventh:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:37.5%}.ct-major-eleventh:after{content:\"\";display:table;clear:both}.ct-major-eleventh>svg{display:block;position:absolute;top:0;left:0}.ct-major-twelfth{display:block;position:relative;width:100%}.ct-major-twelfth:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:33.3333333333%}.ct-major-twelfth:after{content:\"\";display:table;clear:both}.ct-major-twelfth>svg{display:block;position:absolute;top:0;left:0}.ct-double-octave{display:block;position:relative;width:100%}.ct-double-octave:before{display:block;float:left;content:\"\";width:0;height:0;padding-bottom:25%}.ct-double-octave:after{content:\"\";display:table;clear:both}.ct-double-octave>svg{display:block;position:absolute;top:0;left:0}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/components/baFullCalendar/baFullCalendar.scss":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/components/baFullCalendar/baFullCalendar.scss ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * <%= meta.title %> v<%= meta.version %> Stylesheet\n * Docs & License: <%= meta.homepage %>\n * (c) <%= meta.copyright %>\n */.fc{direction:ltr;text-align:left}.fc-rtl{text-align:right}body .fc{font-size:1em}.fc-unthemed th,.fc-unthemed td,.fc-unthemed thead,.fc-unthemed tbody,.fc-unthemed .fc-divider,.fc-unthemed .fc-row,.fc-unthemed .fc-content,.fc-unthemed .fc-popover{border-color:#ddd}.fc-unthemed .fc-popover{background-color:#fff}.fc-unthemed .fc-divider,.fc-unthemed .fc-popover .fc-header{background:#eee}.fc-unthemed .fc-popover .fc-header .fc-close{color:#666}.fc-unthemed .fc-today{background:#fcf8e3}.fc-highlight{background:#bce8f1;opacity:.3;filter:alpha(opacity=30)}.fc-bgevent{background:#8fdf82;opacity:.3;filter:alpha(opacity=30)}.fc-nonbusiness{background:#d7d7d7}.fc-icon{display:inline-block;height:1em;line-height:1em;font-size:1em;text-align:center;overflow:hidden;font-family:\"Courier New\", Courier, monospace;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fc-icon:after{position:relative}.fc-icon-left-single-arrow:after{content:\"\\02039\";font-weight:bold;font-size:200%;top:-7%}.fc-icon-right-single-arrow:after{content:\"\\0203A\";font-weight:bold;font-size:200%;top:-7%}.fc-icon-left-double-arrow:after{content:\"\\000AB\";font-size:160%;top:-7%}.fc-icon-right-double-arrow:after{content:\"\\000BB\";font-size:160%;top:-7%}.fc-icon-left-triangle:after{content:\"\\25C4\";font-size:125%;top:3%}.fc-icon-right-triangle:after{content:\"\\25BA\";font-size:125%;top:3%}.fc-icon-down-triangle:after{content:\"\\25BC\";font-size:125%;top:2%}.fc-icon-x:after{content:\"\\000D7\";font-size:200%;top:6%}.fc button{box-sizing:border-box;margin:0;height:2.1em;padding:0 .6em;font-size:1em;white-space:nowrap;cursor:pointer}.fc button::-moz-focus-inner{margin:0;padding:0}.fc-state-default{border:1px solid}.fc-state-default.fc-corner-left{border-top-left-radius:4px;border-bottom-left-radius:4px}.fc-state-default.fc-corner-right{border-top-right-radius:4px;border-bottom-right-radius:4px}.fc button .fc-icon{position:relative;top:-0.05em;margin:0 .2em;vertical-align:middle}.fc-state-default{background-color:#f5f5f5;background-image:linear-gradient(to bottom, #fff, #e6e6e6);background-repeat:repeat-x;border-color:#e6e6e6 #e6e6e6 #bfbfbf;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);color:#333;text-shadow:0 1px 1px rgba(255,255,255,0.75);box-shadow:inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05)}.fc-state-hover,.fc-state-down,.fc-state-active,.fc-state-disabled{color:#333333;background-color:#e6e6e6}.fc-state-hover{color:#333333;text-decoration:none;background-position:0 -15px;transition:background-position 0.1s linear}.fc-state-down,.fc-state-active{background-color:#cccccc;background-image:none;box-shadow:inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05)}.fc-state-disabled{cursor:default;background-image:none;opacity:0.65;filter:alpha(opacity=65);box-shadow:none}.fc-button-group{display:inline-block}.fc .fc-button-group>*{float:left;margin:0 0 0 -1px}.fc .fc-button-group>:first-child{margin-left:0}.fc-popover{position:absolute;box-shadow:0 2px 6px rgba(0,0,0,0.15)}.fc-popover .fc-header{padding:2px 4px}.fc-popover .fc-header .fc-title{margin:0 2px}.fc-popover .fc-header .fc-close{cursor:pointer}.fc-ltr .fc-popover .fc-header .fc-title,.fc-rtl .fc-popover .fc-header .fc-close{float:left}.fc-rtl .fc-popover .fc-header .fc-title,.fc-ltr .fc-popover .fc-header .fc-close{float:right}.fc-unthemed .fc-popover{border-width:1px;border-style:solid}.fc-unthemed .fc-popover .fc-header .fc-close{font-size:.9em;margin-top:2px}.fc-popover>.ui-widget-header+.ui-widget-content{border-top:0}.fc-divider{border-style:solid;border-width:1px}hr.fc-divider{height:0;margin:0;padding:0 0 2px;border-width:1px 0}.fc-clear{clear:both}.fc-bg,.fc-bgevent-skeleton,.fc-highlight-skeleton,.fc-helper-skeleton{position:absolute;top:0;left:0;right:0}.fc-bg{bottom:0}.fc-bg table{height:100%}.fc table{width:100%;box-sizing:border-box;table-layout:fixed;border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc th,.fc td{border-style:solid;border-width:1px;padding:0;vertical-align:top}.fc td.fc-today{border-style:double}.fc .fc-row{border-style:solid;border-width:0}.fc-row table{border-left:0 hidden transparent;border-right:0 hidden transparent;border-bottom:0 hidden transparent}.fc-row:first-child table{border-top:0 hidden transparent}.fc-row{position:relative}.fc-row .fc-bg{z-index:1}.fc-row .fc-bgevent-skeleton,.fc-row .fc-highlight-skeleton{bottom:0}.fc-row .fc-bgevent-skeleton table,.fc-row .fc-highlight-skeleton table{height:100%}.fc-row .fc-highlight-skeleton td,.fc-row .fc-bgevent-skeleton td{border-color:transparent}.fc-row .fc-bgevent-skeleton{z-index:2}.fc-row .fc-highlight-skeleton{z-index:3}.fc-row .fc-content-skeleton{position:relative;z-index:4;padding-bottom:2px}.fc-row .fc-helper-skeleton{z-index:5}.fc-row .fc-content-skeleton td,.fc-row .fc-helper-skeleton td{background:none;border-color:transparent;border-bottom:0}.fc-row .fc-content-skeleton tbody td,.fc-row .fc-helper-skeleton tbody td{border-top:0}.fc-scroller{-webkit-overflow-scrolling:touch}.fc-scroller>.fc-day-grid,.fc-scroller>.fc-time-grid{position:relative;width:100%}.fc-event{position:relative;display:block;font-size:.85em;line-height:1.3;border-radius:3px;border:1px solid #3a87ad;background-color:#3a87ad;font-weight:normal}.fc-event,.fc-event:hover,.ui-widget .fc-event{color:#fff;text-decoration:none}.fc-event[href],.fc-event.fc-draggable{cursor:pointer}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc-event .fc-bg{z-index:1;background:#fff;opacity:.25;filter:alpha(opacity=25)}.fc-event .fc-content{position:relative;z-index:2}.fc-event .fc-resizer{position:absolute;z-index:4}.fc-event .fc-resizer{display:none}.fc-event.fc-allow-mouse-resize .fc-resizer,.fc-event.fc-selected .fc-resizer{display:block}.fc-event.fc-selected .fc-resizer:before{content:\"\";position:absolute;z-index:9999;top:50%;left:50%;width:40px;height:40px;margin-left:-20px;margin-top:-20px}.fc-event.fc-selected{z-index:9999 !important;box-shadow:0 2px 5px rgba(0,0,0,0.2)}.fc-event.fc-selected.fc-dragging{box-shadow:0 2px 7px rgba(0,0,0,0.3)}.fc-h-event.fc-selected:before{content:\"\";position:absolute;z-index:3;top:-10px;bottom:-10px;left:0;right:0}.fc-ltr .fc-h-event.fc-not-start,.fc-rtl .fc-h-event.fc-not-end{margin-left:0;border-left-width:0;padding-left:1px;border-top-left-radius:0;border-bottom-left-radius:0}.fc-ltr .fc-h-event.fc-not-end,.fc-rtl .fc-h-event.fc-not-start{margin-right:0;border-right-width:0;padding-right:1px;border-top-right-radius:0;border-bottom-right-radius:0}.fc-ltr .fc-h-event .fc-start-resizer,.fc-rtl .fc-h-event .fc-end-resizer{cursor:w-resize;left:-1px}.fc-ltr .fc-h-event .fc-end-resizer,.fc-rtl .fc-h-event .fc-start-resizer{cursor:e-resize;right:-1px}.fc-h-event.fc-allow-mouse-resize .fc-resizer{width:7px;top:-1px;bottom:-1px}.fc-h-event.fc-selected .fc-resizer{border-radius:4px;border-width:1px;width:6px;height:6px;border-style:solid;border-color:inherit;background:#fff;top:50%;margin-top:-4px}.fc-ltr .fc-h-event.fc-selected .fc-start-resizer,.fc-rtl .fc-h-event.fc-selected .fc-end-resizer{margin-left:-4px}.fc-ltr .fc-h-event.fc-selected .fc-end-resizer,.fc-rtl .fc-h-event.fc-selected .fc-start-resizer{margin-right:-4px}.fc-day-grid-event{margin:1px 2px 0;padding:0 1px}.fc-day-grid-event.fc-selected:after{content:\"\";position:absolute;z-index:1;top:-1px;right:-1px;bottom:-1px;left:-1px;background:#000;opacity:.25;filter:alpha(opacity=25)}.fc-day-grid-event .fc-content{white-space:nowrap;overflow:hidden}.fc-day-grid-event .fc-time{font-weight:bold}.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer,.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer{margin-left:-2px}.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer,.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer{margin-right:-2px}a.fc-more{margin:1px 3px;font-size:.85em;cursor:pointer;text-decoration:none}a.fc-more:hover{text-decoration:underline}.fc-limited{display:none}.fc-day-grid .fc-row{z-index:1}.fc-more-popover{z-index:2;width:220px}.fc-more-popover .fc-event-container{padding:10px}.fc-now-indicator{position:absolute;border:0 solid red}.fc-unselectable{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.fc-toolbar{text-align:center;margin-bottom:1em}.fc-toolbar .fc-left{float:left}.fc-toolbar .fc-right{float:right}.fc-toolbar .fc-center{display:inline-block}.fc .fc-toolbar>*>*{float:left;margin-left:.75em}.fc .fc-toolbar>*>:first-child{margin-left:0}.fc-toolbar h2{margin:0}.fc-toolbar button{position:relative}.fc-toolbar .fc-state-hover,.fc-toolbar .ui-state-hover{z-index:2}.fc-toolbar .fc-state-down{z-index:3}.fc-toolbar .fc-state-active,.fc-toolbar .ui-state-active{z-index:4}.fc-toolbar button:focus{z-index:5}.fc-view-container *,.fc-view-container *:before,.fc-view-container *:after{box-sizing:content-box}.fc-view,.fc-view>table{position:relative;z-index:1}.fc-basicWeek-view .fc-content-skeleton,.fc-basicDay-view .fc-content-skeleton{padding-top:1px;padding-bottom:1em}.fc-basic-view .fc-body .fc-row{min-height:4em}.fc-row.fc-rigid{overflow:hidden}.fc-row.fc-rigid .fc-content-skeleton{position:absolute;top:0;left:0;right:0}.fc-basic-view .fc-week-number,.fc-basic-view .fc-day-number{padding:0 2px}.fc-basic-view td.fc-week-number span,.fc-basic-view td.fc-day-number{padding-top:2px;padding-bottom:2px}.fc-basic-view .fc-week-number{text-align:center}.fc-basic-view .fc-week-number span{display:inline-block;min-width:1.25em}.fc-ltr .fc-basic-view .fc-day-number{text-align:right}.fc-rtl .fc-basic-view .fc-day-number{text-align:left}.fc-day-number.fc-other-month{opacity:0.3;filter:alpha(opacity=30)}.fc-agenda-view .fc-day-grid{position:relative;z-index:2}.fc-agenda-view .fc-day-grid .fc-row{min-height:3em}.fc-agenda-view .fc-day-grid .fc-row .fc-content-skeleton{padding-top:1px;padding-bottom:1em}.fc .fc-axis{vertical-align:middle;padding:0 4px;white-space:nowrap}.fc-ltr .fc-axis{text-align:right}.fc-rtl .fc-axis{text-align:left}.ui-widget td.fc-axis{font-weight:normal}.fc-time-grid-container,.fc-time-grid{position:relative;z-index:1}.fc-time-grid{min-height:100%}.fc-time-grid table{border:0 hidden transparent}.fc-time-grid>.fc-bg{z-index:1}.fc-time-grid .fc-slats,.fc-time-grid>hr{position:relative;z-index:2}.fc-time-grid .fc-content-col{position:relative}.fc-time-grid .fc-content-skeleton{position:absolute;z-index:3;top:0;left:0;right:0}.fc-time-grid .fc-business-container{position:relative;z-index:1}.fc-time-grid .fc-bgevent-container{position:relative;z-index:2}.fc-time-grid .fc-highlight-container{position:relative;z-index:3}.fc-time-grid .fc-event-container{position:relative;z-index:4}.fc-time-grid .fc-now-indicator-line{z-index:5}.fc-time-grid .fc-helper-container{position:relative;z-index:6}.fc-time-grid .fc-slats td{height:1.5em;border-bottom:0}.fc-time-grid .fc-slats .fc-minor td{border-top-style:dotted}.fc-time-grid .fc-slats .ui-widget-content{background:none}.fc-time-grid .fc-highlight-container{position:relative}.fc-time-grid .fc-highlight{position:absolute;left:0;right:0}.fc-ltr .fc-time-grid .fc-event-container{margin:0 2.5% 0 2px}.fc-rtl .fc-time-grid .fc-event-container{margin:0 2px 0 2.5%}.fc-time-grid .fc-event,.fc-time-grid .fc-bgevent{position:absolute;z-index:1}.fc-time-grid .fc-bgevent{left:0;right:0}.fc-v-event.fc-not-start{border-top-width:0;padding-top:1px;border-top-left-radius:0;border-top-right-radius:0}.fc-v-event.fc-not-end{border-bottom-width:0;padding-bottom:1px;border-bottom-left-radius:0;border-bottom-right-radius:0}.fc-time-grid-event{overflow:hidden}.fc-time-grid-event.fc-selected{overflow:visible}.fc-time-grid-event.fc-selected .fc-bg{display:none}.fc-time-grid-event .fc-content{overflow:hidden}.fc-time-grid-event .fc-time,.fc-time-grid-event .fc-title{padding:0 1px}.fc-time-grid-event .fc-time{font-size:.85em;white-space:nowrap}.fc-time-grid-event.fc-short .fc-content{white-space:nowrap}.fc-time-grid-event.fc-short .fc-time,.fc-time-grid-event.fc-short .fc-title{display:inline-block;vertical-align:top}.fc-time-grid-event.fc-short .fc-time span{display:none}.fc-time-grid-event.fc-short .fc-time:before{content:attr(data-start)}.fc-time-grid-event.fc-short .fc-time:after{content:\"\\000A0-\\000A0\"}.fc-time-grid-event.fc-short .fc-title{font-size:.85em;padding:0}.fc-time-grid-event.fc-allow-mouse-resize .fc-resizer{left:0;right:0;bottom:0;height:8px;overflow:hidden;line-height:8px;font-size:11px;font-family:monospace;text-align:center;cursor:s-resize}.fc-time-grid-event.fc-allow-mouse-resize .fc-resizer:after{content:\"=\"}.fc-time-grid-event.fc-selected .fc-resizer{border-radius:5px;border-width:1px;width:8px;height:8px;border-style:solid;border-color:inherit;background:#fff;left:50%;margin-left:-5px;bottom:-5px}.fc-time-grid .fc-now-indicator-line{border-top-width:1px;left:0;right:0}.fc-time-grid .fc-now-indicator-arrow{margin-top:-5px}.fc-ltr .fc-time-grid .fc-now-indicator-arrow{left:0;border-width:5px 0 5px 6px;border-top-color:transparent;border-bottom-color:transparent}.fc-rtl .fc-time-grid .fc-now-indicator-arrow{right:0;border-width:5px 6px 5px 0;border-top-color:transparent;border-bottom-color:transparent}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/components/baMenu/baMenu.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/components/baMenu/baMenu.scss ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/components/baPageTop/baPageTop.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/components/baPageTop/baPageTop.scss ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes pulsate{30%{-webkit-transform:scale(0.1, 0.1);opacity:0.0}35%{opacity:1.0}40%{-webkit-transform:scale(1.2, 1.2);opacity:0.0}}.al-msg-center{float:right;padding:0;list-style:none;margin:13px 47px 0 0}.al-msg-center li{list-style:none;float:left;margin-left:30px}.al-msg-center li:first-child{margin-left:0}.al-msg-center li>a{color:#fff;text-decoration:none;font-size:13px;position:relative}.al-msg-center li>a span{display:inline-block;min-width:10px;padding:2px 4px 2px 4px;color:#fff;vertical-align:baseline;white-space:nowrap;text-align:center;border-radius:13px;text-shadow:none;line-height:11px;background-color:#e85656;position:absolute;top:-5px;right:-14px;font-size:11px}.al-msg-center li>a .notification-ring{border:1px solid #e85656;border-radius:100px;height:40px;width:40px;position:absolute;top:-18px;right:-27px;-webkit-animation:pulsate 8s ease-out;animation:pulsate 8s ease-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;opacity:0.0}.al-msg-center li>a:hover{color:#e85656}.al-msg-center li>a:hover.msg{color:#209e91}.al-msg-center li>a.msg span{background-color:#209e91}.al-msg-center li>a.msg .notification-ring{border-color:#209e91}.al-msg-center li.open>a{color:#e85656}.al-msg-center li.open>a.msg{color:#209e91}@media (max-width: 435px){.al-msg-center{margin-right:20px}.al-msg-center li{margin-left:20px}.al-msg-center li:first-child{margin-left:0}}.msg-block-header{display:inline-block;padding:0;font-size:13px;margin:0 0 0 6px}.top-dropdown-menu{width:316px;left:auto;right:-47px;top:26px}.top-dropdown-menu ::-webkit-scrollbar{width:1em;height:1em}.top-dropdown-menu ::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.5);cursor:pointer}.top-dropdown-menu ::-webkit-scrollbar-track{background:#fff}.top-dropdown-menu body{scrollbar-face-color:rgba(0,0,0,0.5);scrollbar-track-color:#fff}.top-dropdown-menu .header{padding:10px 12px;border-bottom:1px solid #fff;font-size:12px}.top-dropdown-menu .header strong{float:left;color:#7d7d7d}.top-dropdown-menu .header>a{float:right;margin-left:12px;text-decoration:none}.top-dropdown-menu .header>a:hover{color:#7d7d7d}.top-dropdown-menu .msg-list{max-height:296px;overflow:scroll;overflow-x:hidden}.top-dropdown-menu .msg-list>a{border-top:1px solid #fff;padding:10px 12px;display:block;text-decoration:none;color:#7d7d7d;font-size:12px}.top-dropdown-menu .msg-list>a:first-child{border-top:none}.top-dropdown-menu .msg-list>a .img-area{float:left;width:36px}.top-dropdown-menu .msg-list>a .img-area img{width:36px;height:36px}.top-dropdown-menu .msg-list>a .img-area img.photo-msg-item{border-radius:18px}.top-dropdown-menu .msg-list>a .img-area>div{width:36px;height:36px;border-radius:4px;font-size:24px;text-align:center}.top-dropdown-menu .msg-list>a .img-area>div.comments{color:#dfb81c}.top-dropdown-menu .msg-list>a .img-area>div.orders{color:#dfb81c}.top-dropdown-menu .msg-list>a .img-area>div i{width:36px;line-height:36px}.top-dropdown-menu .msg-list>a .msg-area{float:right;width:230px}.top-dropdown-menu .msg-list>a .msg-area div{max-height:34px;overflow:hidden;text-overflow:ellipsis}.top-dropdown-menu .msg-list>a .msg-area span{font-style:italic;text-align:right;display:block;font-size:11px}.top-dropdown-menu .msg-list>a:hover{background:#E2F0FF}.top-dropdown-menu>a{border-top:1px solid #fff;display:block;text-align:center;padding:10px;font-size:12px;text-decoration:none}.top-dropdown-menu>a:hover{color:#7d7d7d}.top-dropdown-menu.profile-dropdown{width:145px;top:55px;right:-25px}.top-dropdown-menu.profile-dropdown a{text-align:left;border:none;text-decoration:none;color:#7d7d7d;padding:4px 16px 4px 20px}.top-dropdown-menu.profile-dropdown a.signout{border-top:1px solid #fff}.top-dropdown-menu.profile-dropdown a i{margin-right:10px}.top-dropdown-menu.profile-dropdown a:hover{background:#f4fcff}.top-dropdown-menu.profile-dropdown i.dropdown-arr{right:25px}.top-dropdown-menu i.dropdown-arr{position:absolute;top:-22px;right:42px;display:block;width:0;height:0;border:11px solid transparent;border-bottom-color:rgba(0,0,0,0.15)}.top-dropdown-menu i.dropdown-arr:after{top:-9px;left:0px;margin-left:-10px;content:\" \";position:absolute;display:block;width:0;height:0;border:10px solid transparent;border-bottom-color:#fff}@media (max-width: 415px){.top-dropdown-menu{right:-81px}.top-dropdown-menu i.dropdown-arr{right:75px}}.page-top{background-color:#1C2B36;position:fixed;z-index:904;box-shadow:2px 0 3px rgba(0,0,0,0.5);height:66px;width:100%;min-width:320px;padding:0 32px 0 40px}.page-top .dropdown-toggle::after{display:none}.blur .page-top.scrolled{background-color:rgba(0,0,0,0.85)}a.al-logo{color:#fff;display:block;font-size:24px;font-family:\"Roboto\",sans-serif;white-space:nowrap;float:left;outline:none !important;line-height:60px}a.al-logo span{color:#209e91}a.al-logo:hover{color:#209e91}.user-profile{float:right;min-width:230px;margin-top:10px;color:white}.al-user-profile{float:right;margin-right:12px;transition:all .15s ease-in-out;padding:0;width:36px;height:36px;border:0;opacity:1;position:relative}.al-user-profile a{display:block}.al-user-profile img{width:45px;height:45px;border-radius:50%}a.refresh-data{color:#fff;font-size:13px;text-decoration:none;font-weight:400;float:right;margin-top:13px;margin-right:26px}a.refresh-data:hover{color:#dfb81c !important}a.collapse-menu-link{font-size:31px;cursor:pointer;display:block;text-decoration:none;line-height:42px;color:#fff;padding:0;float:left;margin:11px 0 0 25px}a.collapse-menu-link:hover{text-decoration:none;color:#dfb81c}.al-skin-dropdown{float:right;margin-top:14px;margin-right:26px}.al-skin-dropdown .tpl-skin-panel{max-height:300px;overflow-y:scroll;overflow-x:hidden}.icon-palette{display:inline-block;width:14px;height:13px;background:url(\"/assets/img/theme/palette.png\");background-size:cover}.search{text-shadow:none;font-size:13px;line-height:25px;transition:all 0.5s ease;white-space:nowrap;overflow:hidden;width:162px;float:left;margin:20px 0 0 30px}.search label{cursor:pointer}.search i{width:16px;display:inline-block;cursor:pointer;padding-left:1px;font-size:16px;margin-right:13px}.search input{color:#fff;background:none;border:none;outline:none;width:120px;padding:0;margin:0 0 0 -3px;height:27px}@media screen and (max-width: 660px){.search{display:none}}@media screen and (max-width: 500px){.page-top{padding:0 20px}}@media (max-width: 435px){.user-profile{min-width:136px}a.refresh-data{margin-right:10px}a.collapse-menu-link{margin-left:10px}.al-skin-dropdown{display:none}}.profile-toggle-link{cursor:pointer}.fa-bell{color:white;transition:color 0.3s, text-shadow 0.3s}.fa-bell.notified{color:red;text-shadow:0 0 5px red, 0 0 10px red;-webkit-animation:vibrate 1s linear infinite;animation:vibrate 1s linear infinite;-webkit-transform-origin:top center;transform-origin:top center}@-webkit-keyframes vibrate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}10%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}20%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}30%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}40%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}50%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes vibrate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}10%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}20%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}30%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}40%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}50%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/components/baSidebar/baSidebar.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/components/baSidebar/baSidebar.scss ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".al-sidebar{width:180px;top:66px;left:0;z-index:1001;display:block;min-height:100%;background-color:#1C2B36;height:100%;position:fixed}.al-sidebar-list{margin:0;overflow:hidden;padding:18px 0 0 0;list-style:none}.al-sidebar-sublist .subitem-submenu-list{padding-left:15px}.subitem-submenu-link .fa{top:7px}.al-sidebar-list-item{display:block;position:relative;float:none;padding:0}.al-sidebar-list-item.selected:not(.with-sub-menu){background-color:#209e91}.al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link{color:#fff}.al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link b{color:#fff}.ba-sidebar-item-expanded>ul.al-sidebar-sublist{display:block !important}.al-sidebar-list-item.ba-sidebar-item-expanded>.al-sidebar-list-link b,.ba-sidebar-sublist-item.ba-sidebar-item-expanded>.al-sidebar-list-link b{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.al-sidebar-list-item.ba-sidebar-item-expanded>.al-sidebar-sublist,.ba-sidebar-sublist-item.ba-sidebar-item-expanded>.al-sidebar-sublist{display:block}a.al-sidebar-list-link{display:block;height:42px;padding-left:18px;text-shadow:none;font-size:13px;text-decoration:none;color:#fff;line-height:42px;white-space:nowrap;overflow:hidden;cursor:pointer}a.al-sidebar-list-link:hover{color:#209e91}a.al-sidebar-list-link:hover b{color:#209e91}a.al-sidebar-list-link i{margin-right:18px;width:16px;display:inline-block}a.al-sidebar-list-link b{display:block;opacity:1;width:14px;height:14px;line-height:14px;text-shadow:none;font-size:18px;position:absolute;right:10px;top:12px;padding:0;text-align:center;color:#fff;transition:-webkit-transform 0.2s linear;transition:transform 0.2s linear;transition:transform 0.2s linear, -webkit-transform 0.2s linear}.slimScrollBar,.slimScrollRail{border-radius:0px !important;width:4px !important;left:176px}.al-sidebar-sublist{padding:0;list-style:none;position:relative;display:none}.al-sidebar-sublist.expanded{display:block}.al-sidebar-sublist>ba-menu-item>li{display:block;float:none;padding:0;border-bottom:none;position:relative}.al-sidebar-sublist>ba-menu-item>li a{display:block;text-shadow:none;font-size:13px;text-decoration:none;color:#fff;padding-left:52px;height:auto;line-height:29px}.al-sidebar-sublist>ba-menu-item>li a:hover{color:#209e91}.al-sidebar-sublist>ba-menu-item>li.selected:not(.with-sub-menu)>a{border:none;background-color:#209e91}.al-sidebar-sublist>ba-menu-item>li.selected:not(.with-sub-menu)>a:hover{color:#fff}.sidebar-hover-elem{width:4px;background:#209e91;position:absolute;top:-150px;left:176px;transition:all 0.5s ease;transition-property:top, height;height:42px;display:block}.sidebar-select-elem{display:block;top:94px}.menu-collapsed .slimScrollBar,.menu-collapsed .slimScrollRail{display:none !important}@media (min-width: 1200px){.menu-collapsed .al-main{margin-left:50px}.menu-collapsed .al-footer{padding-left:83px}}@media (min-width: 501px){.menu-collapsed .al-sidebar{width:52px}.menu-collapsed .al-sidebar .fa-angle-down,.menu-collapsed .al-sidebar .fa-angle-up{opacity:0}.menu-collapsed .al-sidebar .al-sidebar-sublist{position:absolute;top:-1px;left:52px;background:rgba(0,0,0,0.8);width:0;display:block;overflow:hidden;transition:width 0.5s ease}.menu-collapsed .al-sidebar .al-sidebar-sublist.slide-right{width:135px}.menu-collapsed .al-sidebar .al-sidebar-sublist:before{display:none}.menu-collapsed .al-sidebar .al-sidebar-sublist li:before{display:none}.menu-collapsed .al-sidebar .al-sidebar-sublist li a{padding-left:18px;padding-right:18px;min-width:130px;white-space:nowrap}.menu-collapsed .al-sidebar .sidebar-hover-elem,.menu-collapsed .al-sidebar .sidebar-select-elem{left:48px}}@media (max-width: 1200px) and (min-width: 500px){.al-main{margin-left:50px}.al-footer{padding-left:83px}}@media (max-width: 1200px){.al-sidebar{width:180px;background:rgba(0,0,0,0.75);transition:width 0.5s ease}.al-sidebar .fa-angle-down,.al-sidebar .fa-angle-up{opacity:1}.al-sidebar .al-sidebar-sublist{padding:0;list-style:none;position:relative;display:none;top:auto;left:auto;background:none;width:auto;overflow:visible;transition:none}.al-sidebar .al-sidebar-sublist.expanded{display:block}.al-sidebar .al-sidebar-sublist>ba-menu-item>li{display:block;float:none;padding:0;border-bottom:none;position:relative}.al-sidebar .al-sidebar-sublist>ba-menu-item>li a{display:block;text-shadow:none;font-size:13px;text-decoration:none;color:#fff;padding-left:52px;height:auto;line-height:29px}.al-sidebar .al-sidebar-sublist>ba-menu-item>li a:hover{color:#209e91}.al-sidebar .al-sidebar-sublist>ba-menu-item>li.selected:not(.with-sub-menu)>a{border:none;background-color:#209e91}.al-sidebar .al-sidebar-sublist>ba-menu-item>li.selected:not(.with-sub-menu)>a:hover{color:#fff}.al-sidebar .sidebar-hover-elem,.al-sidebar .sidebar-select-elem{left:176px;transition:left 0.5s ease}}@media (max-width: 500px){.menu-collapsed .al-sidebar{width:0}.menu-collapsed .sidebar-hover-elem,.menu-collapsed .sidebar-select-elem{display:none}.al-main{margin-left:0}.al-footer{padding-left:0}}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/initial.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/initial.scss ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}#preloader{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1003;background:#000000}#preloader>div{display:block;position:relative;left:50%;top:50%;width:150px;height:150px;margin:-75px 0 0 -75px;border-radius:50%;border:3px solid transparent;border-top-color:#e85656;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}#preloader>div:before{content:\"\";position:absolute;top:5px;left:5px;right:5px;bottom:5px;border-radius:50%;border:3px solid transparent;border-top-color:#209e91;-webkit-animation:spin 3s linear infinite;animation:spin 3s linear infinite}#preloader>div:after{content:\"\";position:absolute;top:15px;left:15px;right:15px;bottom:15px;border-radius:50%;border:3px solid transparent;border-top-color:#dfb81c;-webkit-animation:spin 1.5s linear infinite;animation:spin 1.5s linear infinite}/*!\n  Ionicons, v2.0.1\n  Created by Ben Sperry for the Ionic Framework, http://ionicons.com/\n  https://twitter.com/benjsperry  https://twitter.com/ionicframework\n  MIT License: https://github.com/driftyco/ionicons\n\n  Android-style icons originally built by Google’s\n  Material Design Icons: https://github.com/google/material-design-icons\n  used under CC BY http://creativecommons.org/licenses/by/4.0/\n  Modified icons to fit ionicon’s grid from original.\n*/@font-face{font-family:\"Ionicons\";src:url('ionicons.19e65b89cee273a249fb.eot?v=2.0.1');src:url('ionicons.19e65b89cee273a249fb.eot?v=2.0.1#iefix') format(\"embedded-opentype\"),url('ionicons.dd4781d1acc57ba4c480.ttf?v=2.0.1') format(\"truetype\"),url('ionicons.2c159d0d05473040b53e.woff?v=2.0.1') format(\"woff\"),url('ionicons.28df6ee7b407fd8a14b4.svg?v=2.0.1#Ionicons') format(\"svg\");font-weight:normal;font-style:normal}.ion,.ionicons,.ion-alert:before,.ion-alert-circled:before,.ion-android-add:before,.ion-android-add-circle:before,.ion-android-alarm-clock:before,.ion-android-alert:before,.ion-android-apps:before,.ion-android-archive:before,.ion-android-arrow-back:before,.ion-android-arrow-down:before,.ion-android-arrow-dropdown:before,.ion-android-arrow-dropdown-circle:before,.ion-android-arrow-dropleft:before,.ion-android-arrow-dropleft-circle:before,.ion-android-arrow-dropright:before,.ion-android-arrow-dropright-circle:before,.ion-android-arrow-dropup:before,.ion-android-arrow-dropup-circle:before,.ion-android-arrow-forward:before,.ion-android-arrow-up:before,.ion-android-attach:before,.ion-android-bar:before,.ion-android-bicycle:before,.ion-android-boat:before,.ion-android-bookmark:before,.ion-android-bulb:before,.ion-android-bus:before,.ion-android-calendar:before,.ion-android-call:before,.ion-android-camera:before,.ion-android-cancel:before,.ion-android-car:before,.ion-android-cart:before,.ion-android-chat:before,.ion-android-checkbox:before,.ion-android-checkbox-blank:before,.ion-android-checkbox-outline:before,.ion-android-checkbox-outline-blank:before,.ion-android-checkmark-circle:before,.ion-android-clipboard:before,.ion-android-close:before,.ion-android-cloud:before,.ion-android-cloud-circle:before,.ion-android-cloud-done:before,.ion-android-cloud-outline:before,.ion-android-color-palette:before,.ion-android-compass:before,.ion-android-contact:before,.ion-android-contacts:before,.ion-android-contract:before,.ion-android-create:before,.ion-android-delete:before,.ion-android-desktop:before,.ion-android-document:before,.ion-android-done:before,.ion-android-done-all:before,.ion-android-download:before,.ion-android-drafts:before,.ion-android-exit:before,.ion-android-expand:before,.ion-android-favorite:before,.ion-android-favorite-outline:before,.ion-android-film:before,.ion-android-folder:before,.ion-android-folder-open:before,.ion-android-funnel:before,.ion-android-globe:before,.ion-android-hand:before,.ion-android-hangout:before,.ion-android-happy:before,.ion-android-home:before,.ion-android-image:before,.ion-android-laptop:before,.ion-android-list:before,.ion-android-locate:before,.ion-android-lock:before,.ion-android-mail:before,.ion-android-map:before,.ion-android-menu:before,.ion-android-microphone:before,.ion-android-microphone-off:before,.ion-android-more-horizontal:before,.ion-android-more-vertical:before,.ion-android-navigate:before,.ion-android-notifications:before,.ion-android-notifications-none:before,.ion-android-notifications-off:before,.ion-android-open:before,.ion-android-options:before,.ion-android-people:before,.ion-android-person:before,.ion-android-person-add:before,.ion-android-phone-landscape:before,.ion-android-phone-portrait:before,.ion-android-pin:before,.ion-android-plane:before,.ion-android-playstore:before,.ion-android-print:before,.ion-android-radio-button-off:before,.ion-android-radio-button-on:before,.ion-android-refresh:before,.ion-android-remove:before,.ion-android-remove-circle:before,.ion-android-restaurant:before,.ion-android-sad:before,.ion-android-search:before,.ion-android-send:before,.ion-android-settings:before,.ion-android-share:before,.ion-android-share-alt:before,.ion-android-star:before,.ion-android-star-half:before,.ion-android-star-outline:before,.ion-android-stopwatch:before,.ion-android-subway:before,.ion-android-sunny:before,.ion-android-sync:before,.ion-android-textsms:before,.ion-android-time:before,.ion-android-train:before,.ion-android-unlock:before,.ion-android-upload:before,.ion-android-volume-down:before,.ion-android-volume-mute:before,.ion-android-volume-off:before,.ion-android-volume-up:before,.ion-android-walk:before,.ion-android-warning:before,.ion-android-watch:before,.ion-android-wifi:before,.ion-aperture:before,.ion-archive:before,.ion-arrow-down-a:before,.ion-arrow-down-b:before,.ion-arrow-down-c:before,.ion-arrow-expand:before,.ion-arrow-graph-down-left:before,.ion-arrow-graph-down-right:before,.ion-arrow-graph-up-left:before,.ion-arrow-graph-up-right:before,.ion-arrow-left-a:before,.ion-arrow-left-b:before,.ion-arrow-left-c:before,.ion-arrow-move:before,.ion-arrow-resize:before,.ion-arrow-return-left:before,.ion-arrow-return-right:before,.ion-arrow-right-a:before,.ion-arrow-right-b:before,.ion-arrow-right-c:before,.ion-arrow-shrink:before,.ion-arrow-swap:before,.ion-arrow-up-a:before,.ion-arrow-up-b:before,.ion-arrow-up-c:before,.ion-asterisk:before,.ion-at:before,.ion-backspace:before,.ion-backspace-outline:before,.ion-bag:before,.ion-battery-charging:before,.ion-battery-empty:before,.ion-battery-full:before,.ion-battery-half:before,.ion-battery-low:before,.ion-beaker:before,.ion-beer:before,.ion-bluetooth:before,.ion-bonfire:before,.ion-bookmark:before,.ion-bowtie:before,.ion-briefcase:before,.ion-bug:before,.ion-calculator:before,.ion-calendar:before,.ion-camera:before,.ion-card:before,.ion-cash:before,.ion-chatbox:before,.ion-chatbox-working:before,.ion-chatboxes:before,.ion-chatbubble:before,.ion-chatbubble-working:before,.ion-chatbubbles:before,.ion-checkmark:before,.ion-checkmark-circled:before,.ion-checkmark-round:before,.ion-chevron-down:before,.ion-chevron-left:before,.ion-chevron-right:before,.ion-chevron-up:before,.ion-clipboard:before,.ion-clock:before,.ion-close:before,.ion-close-circled:before,.ion-close-round:before,.ion-closed-captioning:before,.ion-cloud:before,.ion-code:before,.ion-code-download:before,.ion-code-working:before,.ion-coffee:before,.ion-compass:before,.ion-compose:before,.ion-connection-bars:before,.ion-contrast:before,.ion-crop:before,.ion-cube:before,.ion-disc:before,.ion-document:before,.ion-document-text:before,.ion-drag:before,.ion-earth:before,.ion-easel:before,.ion-edit:before,.ion-egg:before,.ion-eject:before,.ion-email:before,.ion-email-unread:before,.ion-erlenmeyer-flask:before,.ion-erlenmeyer-flask-bubbles:before,.ion-eye:before,.ion-eye-disabled:before,.ion-female:before,.ion-filing:before,.ion-film-marker:before,.ion-fireball:before,.ion-flag:before,.ion-flame:before,.ion-flash:before,.ion-flash-off:before,.ion-folder:before,.ion-fork:before,.ion-fork-repo:before,.ion-forward:before,.ion-funnel:before,.ion-gear-a:before,.ion-gear-b:before,.ion-grid:before,.ion-hammer:before,.ion-happy:before,.ion-happy-outline:before,.ion-headphone:before,.ion-heart:before,.ion-heart-broken:before,.ion-help:before,.ion-help-buoy:before,.ion-help-circled:before,.ion-home:before,.ion-icecream:before,.ion-image:before,.ion-images:before,.ion-information:before,.ion-information-circled:before,.ion-ionic:before,.ion-ios-alarm:before,.ion-ios-alarm-outline:before,.ion-ios-albums:before,.ion-ios-albums-outline:before,.ion-ios-americanfootball:before,.ion-ios-americanfootball-outline:before,.ion-ios-analytics:before,.ion-ios-analytics-outline:before,.ion-ios-arrow-back:before,.ion-ios-arrow-down:before,.ion-ios-arrow-forward:before,.ion-ios-arrow-left:before,.ion-ios-arrow-right:before,.ion-ios-arrow-thin-down:before,.ion-ios-arrow-thin-left:before,.ion-ios-arrow-thin-right:before,.ion-ios-arrow-thin-up:before,.ion-ios-arrow-up:before,.ion-ios-at:before,.ion-ios-at-outline:before,.ion-ios-barcode:before,.ion-ios-barcode-outline:before,.ion-ios-baseball:before,.ion-ios-baseball-outline:before,.ion-ios-basketball:before,.ion-ios-basketball-outline:before,.ion-ios-bell:before,.ion-ios-bell-outline:before,.ion-ios-body:before,.ion-ios-body-outline:before,.ion-ios-bolt:before,.ion-ios-bolt-outline:before,.ion-ios-book:before,.ion-ios-book-outline:before,.ion-ios-bookmarks:before,.ion-ios-bookmarks-outline:before,.ion-ios-box:before,.ion-ios-box-outline:before,.ion-ios-briefcase:before,.ion-ios-briefcase-outline:before,.ion-ios-browsers:before,.ion-ios-browsers-outline:before,.ion-ios-calculator:before,.ion-ios-calculator-outline:before,.ion-ios-calendar:before,.ion-ios-calendar-outline:before,.ion-ios-camera:before,.ion-ios-camera-outline:before,.ion-ios-cart:before,.ion-ios-cart-outline:before,.ion-ios-chatboxes:before,.ion-ios-chatboxes-outline:before,.ion-ios-chatbubble:before,.ion-ios-chatbubble-outline:before,.ion-ios-checkmark:before,.ion-ios-checkmark-empty:before,.ion-ios-checkmark-outline:before,.ion-ios-circle-filled:before,.ion-ios-circle-outline:before,.ion-ios-clock:before,.ion-ios-clock-outline:before,.ion-ios-close:before,.ion-ios-close-empty:before,.ion-ios-close-outline:before,.ion-ios-cloud:before,.ion-ios-cloud-download:before,.ion-ios-cloud-download-outline:before,.ion-ios-cloud-outline:before,.ion-ios-cloud-upload:before,.ion-ios-cloud-upload-outline:before,.ion-ios-cloudy:before,.ion-ios-cloudy-night:before,.ion-ios-cloudy-night-outline:before,.ion-ios-cloudy-outline:before,.ion-ios-cog:before,.ion-ios-cog-outline:before,.ion-ios-color-filter:before,.ion-ios-color-filter-outline:before,.ion-ios-color-wand:before,.ion-ios-color-wand-outline:before,.ion-ios-compose:before,.ion-ios-compose-outline:before,.ion-ios-contact:before,.ion-ios-contact-outline:before,.ion-ios-copy:before,.ion-ios-copy-outline:before,.ion-ios-crop:before,.ion-ios-crop-strong:before,.ion-ios-download:before,.ion-ios-download-outline:before,.ion-ios-drag:before,.ion-ios-email:before,.ion-ios-email-outline:before,.ion-ios-eye:before,.ion-ios-eye-outline:before,.ion-ios-fastforward:before,.ion-ios-fastforward-outline:before,.ion-ios-filing:before,.ion-ios-filing-outline:before,.ion-ios-film:before,.ion-ios-film-outline:before,.ion-ios-flag:before,.ion-ios-flag-outline:before,.ion-ios-flame:before,.ion-ios-flame-outline:before,.ion-ios-flask:before,.ion-ios-flask-outline:before,.ion-ios-flower:before,.ion-ios-flower-outline:before,.ion-ios-folder:before,.ion-ios-folder-outline:before,.ion-ios-football:before,.ion-ios-football-outline:before,.ion-ios-game-controller-a:before,.ion-ios-game-controller-a-outline:before,.ion-ios-game-controller-b:before,.ion-ios-game-controller-b-outline:before,.ion-ios-gear:before,.ion-ios-gear-outline:before,.ion-ios-glasses:before,.ion-ios-glasses-outline:before,.ion-ios-grid-view:before,.ion-ios-grid-view-outline:before,.ion-ios-heart:before,.ion-ios-heart-outline:before,.ion-ios-help:before,.ion-ios-help-empty:before,.ion-ios-help-outline:before,.ion-ios-home:before,.ion-ios-home-outline:before,.ion-ios-infinite:before,.ion-ios-infinite-outline:before,.ion-ios-information:before,.ion-ios-information-empty:before,.ion-ios-information-outline:before,.ion-ios-ionic-outline:before,.ion-ios-keypad:before,.ion-ios-keypad-outline:before,.ion-ios-lightbulb:before,.ion-ios-lightbulb-outline:before,.ion-ios-list:before,.ion-ios-list-outline:before,.ion-ios-location:before,.ion-ios-location-outline:before,.ion-ios-locked:before,.ion-ios-locked-outline:before,.ion-ios-loop:before,.ion-ios-loop-strong:before,.ion-ios-medical:before,.ion-ios-medical-outline:before,.ion-ios-medkit:before,.ion-ios-medkit-outline:before,.ion-ios-mic:before,.ion-ios-mic-off:before,.ion-ios-mic-outline:before,.ion-ios-minus:before,.ion-ios-minus-empty:before,.ion-ios-minus-outline:before,.ion-ios-monitor:before,.ion-ios-monitor-outline:before,.ion-ios-moon:before,.ion-ios-moon-outline:before,.ion-ios-more:before,.ion-ios-more-outline:before,.ion-ios-musical-note:before,.ion-ios-musical-notes:before,.ion-ios-navigate:before,.ion-ios-navigate-outline:before,.ion-ios-nutrition:before,.ion-ios-nutrition-outline:before,.ion-ios-paper:before,.ion-ios-paper-outline:before,.ion-ios-paperplane:before,.ion-ios-paperplane-outline:before,.ion-ios-partlysunny:before,.ion-ios-partlysunny-outline:before,.ion-ios-pause:before,.ion-ios-pause-outline:before,.ion-ios-paw:before,.ion-ios-paw-outline:before,.ion-ios-people:before,.ion-ios-people-outline:before,.ion-ios-person:before,.ion-ios-person-outline:before,.ion-ios-personadd:before,.ion-ios-personadd-outline:before,.ion-ios-photos:before,.ion-ios-photos-outline:before,.ion-ios-pie:before,.ion-ios-pie-outline:before,.ion-ios-pint:before,.ion-ios-pint-outline:before,.ion-ios-play:before,.ion-ios-play-outline:before,.ion-ios-plus:before,.ion-ios-plus-empty:before,.ion-ios-plus-outline:before,.ion-ios-pricetag:before,.ion-ios-pricetag-outline:before,.ion-ios-pricetags:before,.ion-ios-pricetags-outline:before,.ion-ios-printer:before,.ion-ios-printer-outline:before,.ion-ios-pulse:before,.ion-ios-pulse-strong:before,.ion-ios-rainy:before,.ion-ios-rainy-outline:before,.ion-ios-recording:before,.ion-ios-recording-outline:before,.ion-ios-redo:before,.ion-ios-redo-outline:before,.ion-ios-refresh:before,.ion-ios-refresh-empty:before,.ion-ios-refresh-outline:before,.ion-ios-reload:before,.ion-ios-reverse-camera:before,.ion-ios-reverse-camera-outline:before,.ion-ios-rewind:before,.ion-ios-rewind-outline:before,.ion-ios-rose:before,.ion-ios-rose-outline:before,.ion-ios-search:before,.ion-ios-search-strong:before,.ion-ios-settings:before,.ion-ios-settings-strong:before,.ion-ios-shuffle:before,.ion-ios-shuffle-strong:before,.ion-ios-skipbackward:before,.ion-ios-skipbackward-outline:before,.ion-ios-skipforward:before,.ion-ios-skipforward-outline:before,.ion-ios-snowy:before,.ion-ios-speedometer:before,.ion-ios-speedometer-outline:before,.ion-ios-star:before,.ion-ios-star-half:before,.ion-ios-star-outline:before,.ion-ios-stopwatch:before,.ion-ios-stopwatch-outline:before,.ion-ios-sunny:before,.ion-ios-sunny-outline:before,.ion-ios-telephone:before,.ion-ios-telephone-outline:before,.ion-ios-tennisball:before,.ion-ios-tennisball-outline:before,.ion-ios-thunderstorm:before,.ion-ios-thunderstorm-outline:before,.ion-ios-time:before,.ion-ios-time-outline:before,.ion-ios-timer:before,.ion-ios-timer-outline:before,.ion-ios-toggle:before,.ion-ios-toggle-outline:before,.ion-ios-trash:before,.ion-ios-trash-outline:before,.ion-ios-undo:before,.ion-ios-undo-outline:before,.ion-ios-unlocked:before,.ion-ios-unlocked-outline:before,.ion-ios-upload:before,.ion-ios-upload-outline:before,.ion-ios-videocam:before,.ion-ios-videocam-outline:before,.ion-ios-volume-high:before,.ion-ios-volume-low:before,.ion-ios-wineglass:before,.ion-ios-wineglass-outline:before,.ion-ios-world:before,.ion-ios-world-outline:before,.ion-ipad:before,.ion-iphone:before,.ion-ipod:before,.ion-jet:before,.ion-key:before,.ion-knife:before,.ion-laptop:before,.ion-leaf:before,.ion-levels:before,.ion-lightbulb:before,.ion-link:before,.ion-load-a:before,.ion-load-b:before,.ion-load-c:before,.ion-load-d:before,.ion-location:before,.ion-lock-combination:before,.ion-locked:before,.ion-log-in:before,.ion-log-out:before,.ion-loop:before,.ion-magnet:before,.ion-male:before,.ion-man:before,.ion-map:before,.ion-medkit:before,.ion-merge:before,.ion-mic-a:before,.ion-mic-b:before,.ion-mic-c:before,.ion-minus:before,.ion-minus-circled:before,.ion-minus-round:before,.ion-model-s:before,.ion-monitor:before,.ion-more:before,.ion-mouse:before,.ion-music-note:before,.ion-navicon:before,.ion-navicon-round:before,.ion-navigate:before,.ion-network:before,.ion-no-smoking:before,.ion-nuclear:before,.ion-outlet:before,.ion-paintbrush:before,.ion-paintbucket:before,.ion-paper-airplane:before,.ion-paperclip:before,.ion-pause:before,.ion-person:before,.ion-person-add:before,.ion-person-stalker:before,.ion-pie-graph:before,.ion-pin:before,.ion-pinpoint:before,.ion-pizza:before,.ion-plane:before,.ion-planet:before,.ion-play:before,.ion-playstation:before,.ion-plus:before,.ion-plus-circled:before,.ion-plus-round:before,.ion-podium:before,.ion-pound:before,.ion-power:before,.ion-pricetag:before,.ion-pricetags:before,.ion-printer:before,.ion-pull-request:before,.ion-qr-scanner:before,.ion-quote:before,.ion-radio-waves:before,.ion-record:before,.ion-refresh:before,.ion-reply:before,.ion-reply-all:before,.ion-ribbon-a:before,.ion-ribbon-b:before,.ion-sad:before,.ion-sad-outline:before,.ion-scissors:before,.ion-search:before,.ion-settings:before,.ion-share:before,.ion-shuffle:before,.ion-skip-backward:before,.ion-skip-forward:before,.ion-social-android:before,.ion-social-android-outline:before,.ion-social-angular:before,.ion-social-angular-outline:before,.ion-social-apple:before,.ion-social-apple-outline:before,.ion-social-bitcoin:before,.ion-social-bitcoin-outline:before,.ion-social-buffer:before,.ion-social-buffer-outline:before,.ion-social-chrome:before,.ion-social-chrome-outline:before,.ion-social-codepen:before,.ion-social-codepen-outline:before,.ion-social-css3:before,.ion-social-css3-outline:before,.ion-social-designernews:before,.ion-social-designernews-outline:before,.ion-social-dribbble:before,.ion-social-dribbble-outline:before,.ion-social-dropbox:before,.ion-social-dropbox-outline:before,.ion-social-euro:before,.ion-social-euro-outline:before,.ion-social-facebook:before,.ion-social-facebook-outline:before,.ion-social-foursquare:before,.ion-social-foursquare-outline:before,.ion-social-freebsd-devil:before,.ion-social-github:before,.ion-social-github-outline:before,.ion-social-google:before,.ion-social-google-outline:before,.ion-social-googleplus:before,.ion-social-googleplus-outline:before,.ion-social-hackernews:before,.ion-social-hackernews-outline:before,.ion-social-html5:before,.ion-social-html5-outline:before,.ion-social-instagram:before,.ion-social-instagram-outline:before,.ion-social-javascript:before,.ion-social-javascript-outline:before,.ion-social-linkedin:before,.ion-social-linkedin-outline:before,.ion-social-markdown:before,.ion-social-nodejs:before,.ion-social-octocat:before,.ion-social-pinterest:before,.ion-social-pinterest-outline:before,.ion-social-python:before,.ion-social-reddit:before,.ion-social-reddit-outline:before,.ion-social-rss:before,.ion-social-rss-outline:before,.ion-social-sass:before,.ion-social-skype:before,.ion-social-skype-outline:before,.ion-social-snapchat:before,.ion-social-snapchat-outline:before,.ion-social-tumblr:before,.ion-social-tumblr-outline:before,.ion-social-tux:before,.ion-social-twitch:before,.ion-social-twitch-outline:before,.ion-social-twitter:before,.ion-social-twitter-outline:before,.ion-social-usd:before,.ion-social-usd-outline:before,.ion-social-vimeo:before,.ion-social-vimeo-outline:before,.ion-social-whatsapp:before,.ion-social-whatsapp-outline:before,.ion-social-windows:before,.ion-social-windows-outline:before,.ion-social-wordpress:before,.ion-social-wordpress-outline:before,.ion-social-yahoo:before,.ion-social-yahoo-outline:before,.ion-social-yen:before,.ion-social-yen-outline:before,.ion-social-youtube:before,.ion-social-youtube-outline:before,.ion-soup-can:before,.ion-soup-can-outline:before,.ion-speakerphone:before,.ion-speedometer:before,.ion-spoon:before,.ion-star:before,.ion-stats-bars:before,.ion-steam:before,.ion-stop:before,.ion-thermometer:before,.ion-thumbsdown:before,.ion-thumbsup:before,.ion-toggle:before,.ion-toggle-filled:before,.ion-transgender:before,.ion-trash-a:before,.ion-trash-b:before,.ion-trophy:before,.ion-tshirt:before,.ion-tshirt-outline:before,.ion-umbrella:before,.ion-university:before,.ion-unlocked:before,.ion-upload:before,.ion-usb:before,.ion-videocamera:before,.ion-volume-high:before,.ion-volume-low:before,.ion-volume-medium:before,.ion-volume-mute:before,.ion-wand:before,.ion-waterdrop:before,.ion-wifi:before,.ion-wineglass:before,.ion-woman:before,.ion-wrench:before,.ion-xbox:before{display:inline-block;font-family:\"Ionicons\";speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;text-rendering:auto;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ion-alert:before{content:\"\"}.ion-alert-circled:before{content:\"\"}.ion-android-add:before{content:\"\"}.ion-android-add-circle:before{content:\"\"}.ion-android-alarm-clock:before{content:\"\"}.ion-android-alert:before{content:\"\"}.ion-android-apps:before{content:\"\"}.ion-android-archive:before{content:\"\"}.ion-android-arrow-back:before{content:\"\"}.ion-android-arrow-down:before{content:\"\"}.ion-android-arrow-dropdown:before{content:\"\"}.ion-android-arrow-dropdown-circle:before{content:\"\"}.ion-android-arrow-dropleft:before{content:\"\"}.ion-android-arrow-dropleft-circle:before{content:\"\"}.ion-android-arrow-dropright:before{content:\"\"}.ion-android-arrow-dropright-circle:before{content:\"\"}.ion-android-arrow-dropup:before{content:\"\"}.ion-android-arrow-dropup-circle:before{content:\"\"}.ion-android-arrow-forward:before{content:\"\"}.ion-android-arrow-up:before{content:\"\"}.ion-android-attach:before{content:\"\"}.ion-android-bar:before{content:\"\"}.ion-android-bicycle:before{content:\"\"}.ion-android-boat:before{content:\"\"}.ion-android-bookmark:before{content:\"\"}.ion-android-bulb:before{content:\"\"}.ion-android-bus:before{content:\"\"}.ion-android-calendar:before{content:\"\"}.ion-android-call:before{content:\"\"}.ion-android-camera:before{content:\"\"}.ion-android-cancel:before{content:\"\"}.ion-android-car:before{content:\"\"}.ion-android-cart:before{content:\"\"}.ion-android-chat:before{content:\"\"}.ion-android-checkbox:before{content:\"\"}.ion-android-checkbox-blank:before{content:\"\"}.ion-android-checkbox-outline:before{content:\"\"}.ion-android-checkbox-outline-blank:before{content:\"\"}.ion-android-checkmark-circle:before{content:\"\"}.ion-android-clipboard:before{content:\"\"}.ion-android-close:before{content:\"\"}.ion-android-cloud:before{content:\"\"}.ion-android-cloud-circle:before{content:\"\"}.ion-android-cloud-done:before{content:\"\"}.ion-android-cloud-outline:before{content:\"\"}.ion-android-color-palette:before{content:\"\"}.ion-android-compass:before{content:\"\"}.ion-android-contact:before{content:\"\"}.ion-android-contacts:before{content:\"\"}.ion-android-contract:before{content:\"\"}.ion-android-create:before{content:\"\"}.ion-android-delete:before{content:\"\"}.ion-android-desktop:before{content:\"\"}.ion-android-document:before{content:\"\"}.ion-android-done:before{content:\"\"}.ion-android-done-all:before{content:\"\"}.ion-android-download:before{content:\"\"}.ion-android-drafts:before{content:\"\"}.ion-android-exit:before{content:\"\"}.ion-android-expand:before{content:\"\"}.ion-android-favorite:before{content:\"\"}.ion-android-favorite-outline:before{content:\"\"}.ion-android-film:before{content:\"\"}.ion-android-folder:before{content:\"\"}.ion-android-folder-open:before{content:\"\"}.ion-android-funnel:before{content:\"\"}.ion-android-globe:before{content:\"\"}.ion-android-hand:before{content:\"\"}.ion-android-hangout:before{content:\"\"}.ion-android-happy:before{content:\"\"}.ion-android-home:before{content:\"\"}.ion-android-image:before{content:\"\"}.ion-android-laptop:before{content:\"\"}.ion-android-list:before{content:\"\"}.ion-android-locate:before{content:\"\"}.ion-android-lock:before{content:\"\"}.ion-android-mail:before{content:\"\"}.ion-android-map:before{content:\"\"}.ion-android-menu:before{content:\"\"}.ion-android-microphone:before{content:\"\"}.ion-android-microphone-off:before{content:\"\"}.ion-android-more-horizontal:before{content:\"\"}.ion-android-more-vertical:before{content:\"\"}.ion-android-navigate:before{content:\"\"}.ion-android-notifications:before{content:\"\"}.ion-android-notifications-none:before{content:\"\"}.ion-android-notifications-off:before{content:\"\"}.ion-android-open:before{content:\"\"}.ion-android-options:before{content:\"\"}.ion-android-people:before{content:\"\"}.ion-android-person:before{content:\"\"}.ion-android-person-add:before{content:\"\"}.ion-android-phone-landscape:before{content:\"\"}.ion-android-phone-portrait:before{content:\"\"}.ion-android-pin:before{content:\"\"}.ion-android-plane:before{content:\"\"}.ion-android-playstore:before{content:\"\"}.ion-android-print:before{content:\"\"}.ion-android-radio-button-off:before{content:\"\"}.ion-android-radio-button-on:before{content:\"\"}.ion-android-refresh:before{content:\"\"}.ion-android-remove:before{content:\"\"}.ion-android-remove-circle:before{content:\"\"}.ion-android-restaurant:before{content:\"\"}.ion-android-sad:before{content:\"\"}.ion-android-search:before{content:\"\"}.ion-android-send:before{content:\"\"}.ion-android-settings:before{content:\"\"}.ion-android-share:before{content:\"\"}.ion-android-share-alt:before{content:\"\"}.ion-android-star:before{content:\"\"}.ion-android-star-half:before{content:\"\"}.ion-android-star-outline:before{content:\"\"}.ion-android-stopwatch:before{content:\"\"}.ion-android-subway:before{content:\"\"}.ion-android-sunny:before{content:\"\"}.ion-android-sync:before{content:\"\"}.ion-android-textsms:before{content:\"\"}.ion-android-time:before{content:\"\"}.ion-android-train:before{content:\"\"}.ion-android-unlock:before{content:\"\"}.ion-android-upload:before{content:\"\"}.ion-android-volume-down:before{content:\"\"}.ion-android-volume-mute:before{content:\"\"}.ion-android-volume-off:before{content:\"\"}.ion-android-volume-up:before{content:\"\"}.ion-android-walk:before{content:\"\"}.ion-android-warning:before{content:\"\"}.ion-android-watch:before{content:\"\"}.ion-android-wifi:before{content:\"\"}.ion-aperture:before{content:\"\"}.ion-archive:before{content:\"\"}.ion-arrow-down-a:before{content:\"\"}.ion-arrow-down-b:before{content:\"\"}.ion-arrow-down-c:before{content:\"\"}.ion-arrow-expand:before{content:\"\"}.ion-arrow-graph-down-left:before{content:\"\"}.ion-arrow-graph-down-right:before{content:\"\"}.ion-arrow-graph-up-left:before{content:\"\"}.ion-arrow-graph-up-right:before{content:\"\"}.ion-arrow-left-a:before{content:\"\"}.ion-arrow-left-b:before{content:\"\"}.ion-arrow-left-c:before{content:\"\"}.ion-arrow-move:before{content:\"\"}.ion-arrow-resize:before{content:\"\"}.ion-arrow-return-left:before{content:\"\"}.ion-arrow-return-right:before{content:\"\"}.ion-arrow-right-a:before{content:\"\"}.ion-arrow-right-b:before{content:\"\"}.ion-arrow-right-c:before{content:\"\"}.ion-arrow-shrink:before{content:\"\"}.ion-arrow-swap:before{content:\"\"}.ion-arrow-up-a:before{content:\"\"}.ion-arrow-up-b:before{content:\"\"}.ion-arrow-up-c:before{content:\"\"}.ion-asterisk:before{content:\"\"}.ion-at:before{content:\"\"}.ion-backspace:before{content:\"\"}.ion-backspace-outline:before{content:\"\"}.ion-bag:before{content:\"\"}.ion-battery-charging:before{content:\"\"}.ion-battery-empty:before{content:\"\"}.ion-battery-full:before{content:\"\"}.ion-battery-half:before{content:\"\"}.ion-battery-low:before{content:\"\"}.ion-beaker:before{content:\"\"}.ion-beer:before{content:\"\"}.ion-bluetooth:before{content:\"\"}.ion-bonfire:before{content:\"\"}.ion-bookmark:before{content:\"\"}.ion-bowtie:before{content:\"\"}.ion-briefcase:before{content:\"\"}.ion-bug:before{content:\"\"}.ion-calculator:before{content:\"\"}.ion-calendar:before{content:\"\"}.ion-camera:before{content:\"\"}.ion-card:before{content:\"\"}.ion-cash:before{content:\"\"}.ion-chatbox:before{content:\"\"}.ion-chatbox-working:before{content:\"\"}.ion-chatboxes:before{content:\"\"}.ion-chatbubble:before{content:\"\"}.ion-chatbubble-working:before{content:\"\"}.ion-chatbubbles:before{content:\"\"}.ion-checkmark:before{content:\"\"}.ion-checkmark-circled:before{content:\"\"}.ion-checkmark-round:before{content:\"\"}.ion-chevron-down:before{content:\"\"}.ion-chevron-left:before{content:\"\"}.ion-chevron-right:before{content:\"\"}.ion-chevron-up:before{content:\"\"}.ion-clipboard:before{content:\"\"}.ion-clock:before{content:\"\"}.ion-close:before{content:\"\"}.ion-close-circled:before{content:\"\"}.ion-close-round:before{content:\"\"}.ion-closed-captioning:before{content:\"\"}.ion-cloud:before{content:\"\"}.ion-code:before{content:\"\"}.ion-code-download:before{content:\"\"}.ion-code-working:before{content:\"\"}.ion-coffee:before{content:\"\"}.ion-compass:before{content:\"\"}.ion-compose:before{content:\"\"}.ion-connection-bars:before{content:\"\"}.ion-contrast:before{content:\"\"}.ion-crop:before{content:\"\"}.ion-cube:before{content:\"\"}.ion-disc:before{content:\"\"}.ion-document:before{content:\"\"}.ion-document-text:before{content:\"\"}.ion-drag:before{content:\"\"}.ion-earth:before{content:\"\"}.ion-easel:before{content:\"\"}.ion-edit:before{content:\"\"}.ion-egg:before{content:\"\"}.ion-eject:before{content:\"\"}.ion-email:before{content:\"\"}.ion-email-unread:before{content:\"\"}.ion-erlenmeyer-flask:before{content:\"\"}.ion-erlenmeyer-flask-bubbles:before{content:\"\"}.ion-eye:before{content:\"\"}.ion-eye-disabled:before{content:\"\"}.ion-female:before{content:\"\"}.ion-filing:before{content:\"\"}.ion-film-marker:before{content:\"\"}.ion-fireball:before{content:\"\"}.ion-flag:before{content:\"\"}.ion-flame:before{content:\"\"}.ion-flash:before{content:\"\"}.ion-flash-off:before{content:\"\"}.ion-folder:before{content:\"\"}.ion-fork:before{content:\"\"}.ion-fork-repo:before{content:\"\"}.ion-forward:before{content:\"\"}.ion-funnel:before{content:\"\"}.ion-gear-a:before{content:\"\"}.ion-gear-b:before{content:\"\"}.ion-grid:before{content:\"\"}.ion-hammer:before{content:\"\"}.ion-happy:before{content:\"\"}.ion-happy-outline:before{content:\"\"}.ion-headphone:before{content:\"\"}.ion-heart:before{content:\"\"}.ion-heart-broken:before{content:\"\"}.ion-help:before{content:\"\"}.ion-help-buoy:before{content:\"\"}.ion-help-circled:before{content:\"\"}.ion-home:before{content:\"\"}.ion-icecream:before{content:\"\"}.ion-image:before{content:\"\"}.ion-images:before{content:\"\"}.ion-information:before{content:\"\"}.ion-information-circled:before{content:\"\"}.ion-ionic:before{content:\"\"}.ion-ios-alarm:before{content:\"\"}.ion-ios-alarm-outline:before{content:\"\"}.ion-ios-albums:before{content:\"\"}.ion-ios-albums-outline:before{content:\"\"}.ion-ios-americanfootball:before{content:\"\"}.ion-ios-americanfootball-outline:before{content:\"\"}.ion-ios-analytics:before{content:\"\"}.ion-ios-analytics-outline:before{content:\"\"}.ion-ios-arrow-back:before{content:\"\"}.ion-ios-arrow-down:before{content:\"\"}.ion-ios-arrow-forward:before{content:\"\"}.ion-ios-arrow-left:before{content:\"\"}.ion-ios-arrow-right:before{content:\"\"}.ion-ios-arrow-thin-down:before{content:\"\"}.ion-ios-arrow-thin-left:before{content:\"\"}.ion-ios-arrow-thin-right:before{content:\"\"}.ion-ios-arrow-thin-up:before{content:\"\"}.ion-ios-arrow-up:before{content:\"\"}.ion-ios-at:before{content:\"\"}.ion-ios-at-outline:before{content:\"\"}.ion-ios-barcode:before{content:\"\"}.ion-ios-barcode-outline:before{content:\"\"}.ion-ios-baseball:before{content:\"\"}.ion-ios-baseball-outline:before{content:\"\"}.ion-ios-basketball:before{content:\"\"}.ion-ios-basketball-outline:before{content:\"\"}.ion-ios-bell:before{content:\"\"}.ion-ios-bell-outline:before{content:\"\"}.ion-ios-body:before{content:\"\"}.ion-ios-body-outline:before{content:\"\"}.ion-ios-bolt:before{content:\"\"}.ion-ios-bolt-outline:before{content:\"\"}.ion-ios-book:before{content:\"\"}.ion-ios-book-outline:before{content:\"\"}.ion-ios-bookmarks:before{content:\"\"}.ion-ios-bookmarks-outline:before{content:\"\"}.ion-ios-box:before{content:\"\"}.ion-ios-box-outline:before{content:\"\"}.ion-ios-briefcase:before{content:\"\"}.ion-ios-briefcase-outline:before{content:\"\"}.ion-ios-browsers:before{content:\"\"}.ion-ios-browsers-outline:before{content:\"\"}.ion-ios-calculator:before{content:\"\"}.ion-ios-calculator-outline:before{content:\"\"}.ion-ios-calendar:before{content:\"\"}.ion-ios-calendar-outline:before{content:\"\"}.ion-ios-camera:before{content:\"\"}.ion-ios-camera-outline:before{content:\"\"}.ion-ios-cart:before{content:\"\"}.ion-ios-cart-outline:before{content:\"\"}.ion-ios-chatboxes:before{content:\"\"}.ion-ios-chatboxes-outline:before{content:\"\"}.ion-ios-chatbubble:before{content:\"\"}.ion-ios-chatbubble-outline:before{content:\"\"}.ion-ios-checkmark:before{content:\"\"}.ion-ios-checkmark-empty:before{content:\"\"}.ion-ios-checkmark-outline:before{content:\"\"}.ion-ios-circle-filled:before{content:\"\"}.ion-ios-circle-outline:before{content:\"\"}.ion-ios-clock:before{content:\"\"}.ion-ios-clock-outline:before{content:\"\"}.ion-ios-close:before{content:\"\"}.ion-ios-close-empty:before{content:\"\"}.ion-ios-close-outline:before{content:\"\"}.ion-ios-cloud:before{content:\"\"}.ion-ios-cloud-download:before{content:\"\"}.ion-ios-cloud-download-outline:before{content:\"\"}.ion-ios-cloud-outline:before{content:\"\"}.ion-ios-cloud-upload:before{content:\"\"}.ion-ios-cloud-upload-outline:before{content:\"\"}.ion-ios-cloudy:before{content:\"\"}.ion-ios-cloudy-night:before{content:\"\"}.ion-ios-cloudy-night-outline:before{content:\"\"}.ion-ios-cloudy-outline:before{content:\"\"}.ion-ios-cog:before{content:\"\"}.ion-ios-cog-outline:before{content:\"\"}.ion-ios-color-filter:before{content:\"\"}.ion-ios-color-filter-outline:before{content:\"\"}.ion-ios-color-wand:before{content:\"\"}.ion-ios-color-wand-outline:before{content:\"\"}.ion-ios-compose:before{content:\"\"}.ion-ios-compose-outline:before{content:\"\"}.ion-ios-contact:before{content:\"\"}.ion-ios-contact-outline:before{content:\"\"}.ion-ios-copy:before{content:\"\"}.ion-ios-copy-outline:before{content:\"\"}.ion-ios-crop:before{content:\"\"}.ion-ios-crop-strong:before{content:\"\"}.ion-ios-download:before{content:\"\"}.ion-ios-download-outline:before{content:\"\"}.ion-ios-drag:before{content:\"\"}.ion-ios-email:before{content:\"\"}.ion-ios-email-outline:before{content:\"\"}.ion-ios-eye:before{content:\"\"}.ion-ios-eye-outline:before{content:\"\"}.ion-ios-fastforward:before{content:\"\"}.ion-ios-fastforward-outline:before{content:\"\"}.ion-ios-filing:before{content:\"\"}.ion-ios-filing-outline:before{content:\"\"}.ion-ios-film:before{content:\"\"}.ion-ios-film-outline:before{content:\"\"}.ion-ios-flag:before{content:\"\"}.ion-ios-flag-outline:before{content:\"\"}.ion-ios-flame:before{content:\"\"}.ion-ios-flame-outline:before{content:\"\"}.ion-ios-flask:before{content:\"\"}.ion-ios-flask-outline:before{content:\"\"}.ion-ios-flower:before{content:\"\"}.ion-ios-flower-outline:before{content:\"\"}.ion-ios-folder:before{content:\"\"}.ion-ios-folder-outline:before{content:\"\"}.ion-ios-football:before{content:\"\"}.ion-ios-football-outline:before{content:\"\"}.ion-ios-game-controller-a:before{content:\"\"}.ion-ios-game-controller-a-outline:before{content:\"\"}.ion-ios-game-controller-b:before{content:\"\"}.ion-ios-game-controller-b-outline:before{content:\"\"}.ion-ios-gear:before{content:\"\"}.ion-ios-gear-outline:before{content:\"\"}.ion-ios-glasses:before{content:\"\"}.ion-ios-glasses-outline:before{content:\"\"}.ion-ios-grid-view:before{content:\"\"}.ion-ios-grid-view-outline:before{content:\"\"}.ion-ios-heart:before{content:\"\"}.ion-ios-heart-outline:before{content:\"\"}.ion-ios-help:before{content:\"\"}.ion-ios-help-empty:before{content:\"\"}.ion-ios-help-outline:before{content:\"\"}.ion-ios-home:before{content:\"\"}.ion-ios-home-outline:before{content:\"\"}.ion-ios-infinite:before{content:\"\"}.ion-ios-infinite-outline:before{content:\"\"}.ion-ios-information:before{content:\"\"}.ion-ios-information-empty:before{content:\"\"}.ion-ios-information-outline:before{content:\"\"}.ion-ios-ionic-outline:before{content:\"\"}.ion-ios-keypad:before{content:\"\"}.ion-ios-keypad-outline:before{content:\"\"}.ion-ios-lightbulb:before{content:\"\"}.ion-ios-lightbulb-outline:before{content:\"\"}.ion-ios-list:before{content:\"\"}.ion-ios-list-outline:before{content:\"\"}.ion-ios-location:before{content:\"\"}.ion-ios-location-outline:before{content:\"\"}.ion-ios-locked:before{content:\"\"}.ion-ios-locked-outline:before{content:\"\"}.ion-ios-loop:before{content:\"\"}.ion-ios-loop-strong:before{content:\"\"}.ion-ios-medical:before{content:\"\"}.ion-ios-medical-outline:before{content:\"\"}.ion-ios-medkit:before{content:\"\"}.ion-ios-medkit-outline:before{content:\"\"}.ion-ios-mic:before{content:\"\"}.ion-ios-mic-off:before{content:\"\"}.ion-ios-mic-outline:before{content:\"\"}.ion-ios-minus:before{content:\"\"}.ion-ios-minus-empty:before{content:\"\"}.ion-ios-minus-outline:before{content:\"\"}.ion-ios-monitor:before{content:\"\"}.ion-ios-monitor-outline:before{content:\"\"}.ion-ios-moon:before{content:\"\"}.ion-ios-moon-outline:before{content:\"\"}.ion-ios-more:before{content:\"\"}.ion-ios-more-outline:before{content:\"\"}.ion-ios-musical-note:before{content:\"\"}.ion-ios-musical-notes:before{content:\"\"}.ion-ios-navigate:before{content:\"\"}.ion-ios-navigate-outline:before{content:\"\"}.ion-ios-nutrition:before{content:\"\"}.ion-ios-nutrition-outline:before{content:\"\"}.ion-ios-paper:before{content:\"\"}.ion-ios-paper-outline:before{content:\"\"}.ion-ios-paperplane:before{content:\"\"}.ion-ios-paperplane-outline:before{content:\"\"}.ion-ios-partlysunny:before{content:\"\"}.ion-ios-partlysunny-outline:before{content:\"\"}.ion-ios-pause:before{content:\"\"}.ion-ios-pause-outline:before{content:\"\"}.ion-ios-paw:before{content:\"\"}.ion-ios-paw-outline:before{content:\"\"}.ion-ios-people:before{content:\"\"}.ion-ios-people-outline:before{content:\"\"}.ion-ios-person:before{content:\"\"}.ion-ios-person-outline:before{content:\"\"}.ion-ios-personadd:before{content:\"\"}.ion-ios-personadd-outline:before{content:\"\"}.ion-ios-photos:before{content:\"\"}.ion-ios-photos-outline:before{content:\"\"}.ion-ios-pie:before{content:\"\"}.ion-ios-pie-outline:before{content:\"\"}.ion-ios-pint:before{content:\"\"}.ion-ios-pint-outline:before{content:\"\"}.ion-ios-play:before{content:\"\"}.ion-ios-play-outline:before{content:\"\"}.ion-ios-plus:before{content:\"\"}.ion-ios-plus-empty:before{content:\"\"}.ion-ios-plus-outline:before{content:\"\"}.ion-ios-pricetag:before{content:\"\"}.ion-ios-pricetag-outline:before{content:\"\"}.ion-ios-pricetags:before{content:\"\"}.ion-ios-pricetags-outline:before{content:\"\"}.ion-ios-printer:before{content:\"\"}.ion-ios-printer-outline:before{content:\"\"}.ion-ios-pulse:before{content:\"\"}.ion-ios-pulse-strong:before{content:\"\"}.ion-ios-rainy:before{content:\"\"}.ion-ios-rainy-outline:before{content:\"\"}.ion-ios-recording:before{content:\"\"}.ion-ios-recording-outline:before{content:\"\"}.ion-ios-redo:before{content:\"\"}.ion-ios-redo-outline:before{content:\"\"}.ion-ios-refresh:before{content:\"\"}.ion-ios-refresh-empty:before{content:\"\"}.ion-ios-refresh-outline:before{content:\"\"}.ion-ios-reload:before{content:\"\"}.ion-ios-reverse-camera:before{content:\"\"}.ion-ios-reverse-camera-outline:before{content:\"\"}.ion-ios-rewind:before{content:\"\"}.ion-ios-rewind-outline:before{content:\"\"}.ion-ios-rose:before{content:\"\"}.ion-ios-rose-outline:before{content:\"\"}.ion-ios-search:before{content:\"\"}.ion-ios-search-strong:before{content:\"\"}.ion-ios-settings:before{content:\"\"}.ion-ios-settings-strong:before{content:\"\"}.ion-ios-shuffle:before{content:\"\"}.ion-ios-shuffle-strong:before{content:\"\"}.ion-ios-skipbackward:before{content:\"\"}.ion-ios-skipbackward-outline:before{content:\"\"}.ion-ios-skipforward:before{content:\"\"}.ion-ios-skipforward-outline:before{content:\"\"}.ion-ios-snowy:before{content:\"\"}.ion-ios-speedometer:before{content:\"\"}.ion-ios-speedometer-outline:before{content:\"\"}.ion-ios-star:before{content:\"\"}.ion-ios-star-half:before{content:\"\"}.ion-ios-star-outline:before{content:\"\"}.ion-ios-stopwatch:before{content:\"\"}.ion-ios-stopwatch-outline:before{content:\"\"}.ion-ios-sunny:before{content:\"\"}.ion-ios-sunny-outline:before{content:\"\"}.ion-ios-telephone:before{content:\"\"}.ion-ios-telephone-outline:before{content:\"\"}.ion-ios-tennisball:before{content:\"\"}.ion-ios-tennisball-outline:before{content:\"\"}.ion-ios-thunderstorm:before{content:\"\"}.ion-ios-thunderstorm-outline:before{content:\"\"}.ion-ios-time:before{content:\"\"}.ion-ios-time-outline:before{content:\"\"}.ion-ios-timer:before{content:\"\"}.ion-ios-timer-outline:before{content:\"\"}.ion-ios-toggle:before{content:\"\"}.ion-ios-toggle-outline:before{content:\"\"}.ion-ios-trash:before{content:\"\"}.ion-ios-trash-outline:before{content:\"\"}.ion-ios-undo:before{content:\"\"}.ion-ios-undo-outline:before{content:\"\"}.ion-ios-unlocked:before{content:\"\"}.ion-ios-unlocked-outline:before{content:\"\"}.ion-ios-upload:before{content:\"\"}.ion-ios-upload-outline:before{content:\"\"}.ion-ios-videocam:before{content:\"\"}.ion-ios-videocam-outline:before{content:\"\"}.ion-ios-volume-high:before{content:\"\"}.ion-ios-volume-low:before{content:\"\"}.ion-ios-wineglass:before{content:\"\"}.ion-ios-wineglass-outline:before{content:\"\"}.ion-ios-world:before{content:\"\"}.ion-ios-world-outline:before{content:\"\"}.ion-ipad:before{content:\"\"}.ion-iphone:before{content:\"\"}.ion-ipod:before{content:\"\"}.ion-jet:before{content:\"\"}.ion-key:before{content:\"\"}.ion-knife:before{content:\"\"}.ion-laptop:before{content:\"\"}.ion-leaf:before{content:\"\"}.ion-levels:before{content:\"\"}.ion-lightbulb:before{content:\"\"}.ion-link:before{content:\"\"}.ion-load-a:before{content:\"\"}.ion-load-b:before{content:\"\"}.ion-load-c:before{content:\"\"}.ion-load-d:before{content:\"\"}.ion-location:before{content:\"\"}.ion-lock-combination:before{content:\"\"}.ion-locked:before{content:\"\"}.ion-log-in:before{content:\"\"}.ion-log-out:before{content:\"\"}.ion-loop:before{content:\"\"}.ion-magnet:before{content:\"\"}.ion-male:before{content:\"\"}.ion-man:before{content:\"\"}.ion-map:before{content:\"\"}.ion-medkit:before{content:\"\"}.ion-merge:before{content:\"\"}.ion-mic-a:before{content:\"\"}.ion-mic-b:before{content:\"\"}.ion-mic-c:before{content:\"\"}.ion-minus:before{content:\"\"}.ion-minus-circled:before{content:\"\"}.ion-minus-round:before{content:\"\"}.ion-model-s:before{content:\"\"}.ion-monitor:before{content:\"\"}.ion-more:before{content:\"\"}.ion-mouse:before{content:\"\"}.ion-music-note:before{content:\"\"}.ion-navicon:before{content:\"\"}.ion-navicon-round:before{content:\"\"}.ion-navigate:before{content:\"\"}.ion-network:before{content:\"\"}.ion-no-smoking:before{content:\"\"}.ion-nuclear:before{content:\"\"}.ion-outlet:before{content:\"\"}.ion-paintbrush:before{content:\"\"}.ion-paintbucket:before{content:\"\"}.ion-paper-airplane:before{content:\"\"}.ion-paperclip:before{content:\"\"}.ion-pause:before{content:\"\"}.ion-person:before{content:\"\"}.ion-person-add:before{content:\"\"}.ion-person-stalker:before{content:\"\"}.ion-pie-graph:before{content:\"\"}.ion-pin:before{content:\"\"}.ion-pinpoint:before{content:\"\"}.ion-pizza:before{content:\"\"}.ion-plane:before{content:\"\"}.ion-planet:before{content:\"\"}.ion-play:before{content:\"\"}.ion-playstation:before{content:\"\"}.ion-plus:before{content:\"\"}.ion-plus-circled:before{content:\"\"}.ion-plus-round:before{content:\"\"}.ion-podium:before{content:\"\"}.ion-pound:before{content:\"\"}.ion-power:before{content:\"\"}.ion-pricetag:before{content:\"\"}.ion-pricetags:before{content:\"\"}.ion-printer:before{content:\"\"}.ion-pull-request:before{content:\"\"}.ion-qr-scanner:before{content:\"\"}.ion-quote:before{content:\"\"}.ion-radio-waves:before{content:\"\"}.ion-record:before{content:\"\"}.ion-refresh:before{content:\"\"}.ion-reply:before{content:\"\"}.ion-reply-all:before{content:\"\"}.ion-ribbon-a:before{content:\"\"}.ion-ribbon-b:before{content:\"\"}.ion-sad:before{content:\"\"}.ion-sad-outline:before{content:\"\"}.ion-scissors:before{content:\"\"}.ion-search:before{content:\"\"}.ion-settings:before{content:\"\"}.ion-share:before{content:\"\"}.ion-shuffle:before{content:\"\"}.ion-skip-backward:before{content:\"\"}.ion-skip-forward:before{content:\"\"}.ion-social-android:before{content:\"\"}.ion-social-android-outline:before{content:\"\"}.ion-social-angular:before{content:\"\"}.ion-social-angular-outline:before{content:\"\"}.ion-social-apple:before{content:\"\"}.ion-social-apple-outline:before{content:\"\"}.ion-social-bitcoin:before{content:\"\"}.ion-social-bitcoin-outline:before{content:\"\"}.ion-social-buffer:before{content:\"\"}.ion-social-buffer-outline:before{content:\"\"}.ion-social-chrome:before{content:\"\"}.ion-social-chrome-outline:before{content:\"\"}.ion-social-codepen:before{content:\"\"}.ion-social-codepen-outline:before{content:\"\"}.ion-social-css3:before{content:\"\"}.ion-social-css3-outline:before{content:\"\"}.ion-social-designernews:before{content:\"\"}.ion-social-designernews-outline:before{content:\"\"}.ion-social-dribbble:before{content:\"\"}.ion-social-dribbble-outline:before{content:\"\"}.ion-social-dropbox:before{content:\"\"}.ion-social-dropbox-outline:before{content:\"\"}.ion-social-euro:before{content:\"\"}.ion-social-euro-outline:before{content:\"\"}.ion-social-facebook:before{content:\"\"}.ion-social-facebook-outline:before{content:\"\"}.ion-social-foursquare:before{content:\"\"}.ion-social-foursquare-outline:before{content:\"\"}.ion-social-freebsd-devil:before{content:\"\"}.ion-social-github:before{content:\"\"}.ion-social-github-outline:before{content:\"\"}.ion-social-google:before{content:\"\"}.ion-social-google-outline:before{content:\"\"}.ion-social-googleplus:before{content:\"\"}.ion-social-googleplus-outline:before{content:\"\"}.ion-social-hackernews:before{content:\"\"}.ion-social-hackernews-outline:before{content:\"\"}.ion-social-html5:before{content:\"\"}.ion-social-html5-outline:before{content:\"\"}.ion-social-instagram:before{content:\"\"}.ion-social-instagram-outline:before{content:\"\"}.ion-social-javascript:before{content:\"\"}.ion-social-javascript-outline:before{content:\"\"}.ion-social-linkedin:before{content:\"\"}.ion-social-linkedin-outline:before{content:\"\"}.ion-social-markdown:before{content:\"\"}.ion-social-nodejs:before{content:\"\"}.ion-social-octocat:before{content:\"\"}.ion-social-pinterest:before{content:\"\"}.ion-social-pinterest-outline:before{content:\"\"}.ion-social-python:before{content:\"\"}.ion-social-reddit:before{content:\"\"}.ion-social-reddit-outline:before{content:\"\"}.ion-social-rss:before{content:\"\"}.ion-social-rss-outline:before{content:\"\"}.ion-social-sass:before{content:\"\"}.ion-social-skype:before{content:\"\"}.ion-social-skype-outline:before{content:\"\"}.ion-social-snapchat:before{content:\"\"}.ion-social-snapchat-outline:before{content:\"\"}.ion-social-tumblr:before{content:\"\"}.ion-social-tumblr-outline:before{content:\"\"}.ion-social-tux:before{content:\"\"}.ion-social-twitch:before{content:\"\"}.ion-social-twitch-outline:before{content:\"\"}.ion-social-twitter:before{content:\"\"}.ion-social-twitter-outline:before{content:\"\"}.ion-social-usd:before{content:\"\"}.ion-social-usd-outline:before{content:\"\"}.ion-social-vimeo:before{content:\"\"}.ion-social-vimeo-outline:before{content:\"\"}.ion-social-whatsapp:before{content:\"\"}.ion-social-whatsapp-outline:before{content:\"\"}.ion-social-windows:before{content:\"\"}.ion-social-windows-outline:before{content:\"\"}.ion-social-wordpress:before{content:\"\"}.ion-social-wordpress-outline:before{content:\"\"}.ion-social-yahoo:before{content:\"\"}.ion-social-yahoo-outline:before{content:\"\"}.ion-social-yen:before{content:\"\"}.ion-social-yen-outline:before{content:\"\"}.ion-social-youtube:before{content:\"\"}.ion-social-youtube-outline:before{content:\"\"}.ion-soup-can:before{content:\"\"}.ion-soup-can-outline:before{content:\"\"}.ion-speakerphone:before{content:\"\"}.ion-speedometer:before{content:\"\"}.ion-spoon:before{content:\"\"}.ion-star:before{content:\"\"}.ion-stats-bars:before{content:\"\"}.ion-steam:before{content:\"\"}.ion-stop:before{content:\"\"}.ion-thermometer:before{content:\"\"}.ion-thumbsdown:before{content:\"\"}.ion-thumbsup:before{content:\"\"}.ion-toggle:before{content:\"\"}.ion-toggle-filled:before{content:\"\"}.ion-transgender:before{content:\"\"}.ion-trash-a:before{content:\"\"}.ion-trash-b:before{content:\"\"}.ion-trophy:before{content:\"\"}.ion-tshirt:before{content:\"\"}.ion-tshirt-outline:before{content:\"\"}.ion-umbrella:before{content:\"\"}.ion-university:before{content:\"\"}.ion-unlocked:before{content:\"\"}.ion-upload:before{content:\"\"}.ion-usb:before{content:\"\"}.ion-videocamera:before{content:\"\"}.ion-volume-high:before{content:\"\"}.ion-volume-low:before{content:\"\"}.ion-volume-medium:before{content:\"\"}.ion-volume-mute:before{content:\"\"}.ion-wand:before{content:\"\"}.ion-waterdrop:before{content:\"\"}.ion-wifi:before{content:\"\"}.ion-wineglass:before{content:\"\"}.ion-woman:before{content:\"\"}.ion-wrench:before{content:\"\"}.ion-xbox:before{content:\"\"}\n"

/***/ }),

/***/ "./node_modules/style-loader/addStyles.js":
/*!************************************************!*\
  !*** ./node_modules/style-loader/addStyles.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./src/app/app.scss":
/*!******************************************************!*\
  !*** ./node_modules/style-loader!./src/app/app.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/raw-loader!../../node_modules/postcss-loader/lib??embedded!../../node_modules/sass-loader/dist/cjs.js??ref--10-2!./app.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/app.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./src/app/pages/login/login.scss":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader!./src/app/pages/login/login.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/raw-loader!../../../../node_modules/postcss-loader/lib??embedded!../../../../node_modules/sass-loader/dist/cjs.js??ref--10-2!./login.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/pages/login/login.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./src/app/theme/components/baAmChart/baAmChart.scss":
/*!***************************************************************************************!*\
  !*** ./node_modules/style-loader!./src/app/theme/components/baAmChart/baAmChart.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/raw-loader!../../../../../node_modules/postcss-loader/lib??embedded!../../../../../node_modules/sass-loader/dist/cjs.js??ref--10-2!./baAmChart.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/components/baAmChart/baAmChart.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./src/app/theme/components/baChartistChart/baChartistChart.scss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/style-loader!./src/app/theme/components/baChartistChart/baChartistChart.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/raw-loader!../../../../../node_modules/postcss-loader/lib??embedded!../../../../../node_modules/sass-loader/dist/cjs.js??ref--10-2!./baChartistChart.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/components/baChartistChart/baChartistChart.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./src/app/theme/components/baFullCalendar/baFullCalendar.scss":
/*!*************************************************************************************************!*\
  !*** ./node_modules/style-loader!./src/app/theme/components/baFullCalendar/baFullCalendar.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/raw-loader!../../../../../node_modules/postcss-loader/lib??embedded!../../../../../node_modules/sass-loader/dist/cjs.js??ref--10-2!./baFullCalendar.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/components/baFullCalendar/baFullCalendar.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./src/app/theme/components/baMenu/baMenu.scss":
/*!*********************************************************************************!*\
  !*** ./node_modules/style-loader!./src/app/theme/components/baMenu/baMenu.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/raw-loader!../../../../../node_modules/postcss-loader/lib??embedded!../../../../../node_modules/sass-loader/dist/cjs.js??ref--10-2!./baMenu.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/components/baMenu/baMenu.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/style-loader!./src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../../node_modules/raw-loader!../../../../../../../node_modules/postcss-loader/lib??embedded!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--10-2!./baMenuItem.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./src/app/theme/components/baPageTop/baPageTop.scss":
/*!***************************************************************************************!*\
  !*** ./node_modules/style-loader!./src/app/theme/components/baPageTop/baPageTop.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/raw-loader!../../../../../node_modules/postcss-loader/lib??embedded!../../../../../node_modules/sass-loader/dist/cjs.js??ref--10-2!./baPageTop.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/components/baPageTop/baPageTop.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./src/app/theme/components/baSidebar/baSidebar.scss":
/*!***************************************************************************************!*\
  !*** ./node_modules/style-loader!./src/app/theme/components/baSidebar/baSidebar.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/raw-loader!../../../../../node_modules/postcss-loader/lib??embedded!../../../../../node_modules/sass-loader/dist/cjs.js??ref--10-2!./baSidebar.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/components/baSidebar/baSidebar.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./src/app/theme/initial.scss":
/*!****************************************************************!*\
  !*** ./node_modules/style-loader!./src/app/theme/initial.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/raw-loader!../../../node_modules/postcss-loader/lib??embedded!../../../node_modules/sass-loader/dist/cjs.js??ref--10-2!./initial.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./src/app/theme/initial.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global.state */ "./src/app/global.state.ts");
/* harmony import */ var _theme_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme/services */ "./src/app/theme/services/index.ts");
/* harmony import */ var _theme_theme_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme/theme.config */ "./src/app/theme/theme.config.ts");
/* harmony import */ var _theme_theme_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme/theme.constants */ "./src/app/theme/theme.constants.ts");
/* harmony import */ var style_loader_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! style-loader!./app.scss */ "./node_modules/style-loader/index.js!./src/app/app.scss");
/* harmony import */ var style_loader_app_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(style_loader_app_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var style_loader_theme_initial_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! style-loader!./theme/initial.scss */ "./node_modules/style-loader/index.js!./src/app/theme/initial.scss");
/* harmony import */ var style_loader_theme_initial_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(style_loader_theme_initial_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_services_disable_date_picker_disable_date_picker_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/services/disable-date-picker/disable-date-picker.service */ "./src/app/common/services/disable-date-picker/disable-date-picker.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");











/*
 * App Component
 * Top Level Component
 */
var AppComponent = /** @class */ (function () {
    function AppComponent(_state, zone, appService, _imageLoader, _spinner, viewContainerRef, themeConfig, http, disableDateService) {
        var _this = this;
        this._state = _state;
        this.zone = zone;
        this.appService = appService;
        this._imageLoader = _imageLoader;
        this._spinner = _spinner;
        this.viewContainerRef = viewContainerRef;
        this.themeConfig = themeConfig;
        this.http = http;
        this.disableDateService = disableDateService;
        this.isMenuCollapsed = false;
        this.eventSource = null;
        this.reconnectInterval = 5000; // 5 seconds
        themeConfig.config();
        this._loadImages();
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
        this.http.get("assets/label-dictionary.json")
            .subscribe(function (data) {
            _this._state.setGlobalSetting("label-dictionary", data);
            sessionStorage.setItem("label-dictionary", JSON.stringify(data));
        });
        //Uncomment following line to disable all logs
        //console.log = function() {}
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAppConfig().then(function () {
            _this.listenToAppointmentNotifications(); // only after config is ready
        });
    };
    AppComponent.prototype.loadAppConfig = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get("assets/appConfig.json")
                .subscribe(function (data) {
                _this._state.setGlobalSetting("apiUrl", [data.apiUrl]);
                _this._state.setGlobalSetting("contentUrl", [data.contentUrl]);
                resolve();
            }, function (error) {
                // fallback URL
                _this._state.setGlobalSetting("apiUrl", [
                    "http://localhost:1782/api",
                ]);
                resolve();
            });
        });
    };
    AppComponent.prototype.listenToAppointmentNotifications = function () {
        var _this = this;
        if (this.eventSource) {
            this.eventSource.close();
        }
        var url = this._state.getGlobalSetting("apiUrl")[0] + "/Events/AppointmentNotification";
        this.eventSource = new EventSource(url);
        //use eventsource and ngzone for SSE
        this.eventSource.onmessage = function (event) {
            _this.zone.run(function () {
                var data = JSON.parse(event.data);
                _this.appService.publishNotification(data);
            });
        };
        this.eventSource.onerror = function (error) {
            console.error("SSE Error:", error);
            _this.eventSource.close();
            _this.eventSource = null;
            if (_this.reconnectTimeout)
                clearTimeout(_this.reconnectTimeout);
            _this.reconnectTimeout = setTimeout(function () {
                console.warn("Reconnecting to SSE...");
                _this.listenToAppointmentNotifications();
            }, _this.reconnectInterval);
        };
    };
    AppComponent.prototype.stopAppointmentNotifications = function () {
        if (this.eventSource) {
            this.eventSource.close();
            this.eventSource = null;
        }
        if (this.reconnectTimeout) {
            clearTimeout(this.reconnectTimeout);
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.eventSource) {
            this.eventSource.close();
            this.stopAppointmentNotifications();
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // hide spinner once all loaders are completed
        _theme_services__WEBPACK_IMPORTED_MODULE_3__["BaThemePreloader"].load().then(function (values) {
            _this._spinner.hide();
        });
    };
    AppComponent.prototype._loadImages = function () {
        // register some loaders
        _theme_services__WEBPACK_IMPORTED_MODULE_3__["BaThemePreloader"].registerLoader(this._imageLoader.load(_theme_theme_constants__WEBPACK_IMPORTED_MODULE_5__["layoutPaths"].images.root + 'sky-bg.jpg'));
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app',
            template: "\n    <main [ngClass]=\"{'menu-collapsed': isMenuCollapsed}\" baThemeRun>\n      <div class=\"additional-bg\"></div>\n      <router-outlet></router-outlet>\n    </main>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_state__WEBPACK_IMPORTED_MODULE_2__["GlobalState"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _app_service__WEBPACK_IMPORTED_MODULE_9__["AppState"],
            _theme_services__WEBPACK_IMPORTED_MODULE_3__["BaImageLoaderService"],
            _theme_services__WEBPACK_IMPORTED_MODULE_3__["BaThemeSpinner"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _theme_theme_config__WEBPACK_IMPORTED_MODULE_4__["BaThemeConfig"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
            _common_services_disable_date_picker_disable_date_picker_service__WEBPACK_IMPORTED_MODULE_8__["DisableDateService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _global_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global.state */ "./src/app/global.state.ts");
/* harmony import */ var _theme_nga_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme/nga.module */ "./src/app/theme/nga.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _common_repositories__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/repositories */ "./src/app/common/repositories/index.ts");
/* harmony import */ var _common_services_permission__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/services/permission */ "./src/app/common/services/permission/index.ts");
/* harmony import */ var _pages_login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/login */ "./src/app/pages/login/index.ts");
/* harmony import */ var _app_common_services_disable_date_picker_disable_date_picker_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/common/services/disable-date-picker/disable-date-picker.service */ "./src/app/common/services/disable-date-picker/disable-date-picker.service.ts");
/* harmony import */ var _theme_pipes_label_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./theme/pipes/label.pipe */ "./src/app/theme/pipes/label.pipe.ts");
/* harmony import */ var _common_services_common_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/services/common.service */ "./src/app/common/services/common.service.ts");
/* harmony import */ var _common_services_time_format_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./common/services/time-format.service */ "./src/app/common/services/time-format.service.ts");
/* harmony import */ var _common_services_cache_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common/services/cache.service */ "./src/app/common/services/cache.service.ts");
/* harmony import */ var _common_services_httpInterceptor_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./common/services/httpInterceptor.service */ "./src/app/common/services/httpInterceptor.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





/*
 * Platform and Environment providers/directives/pipes
 */

// App is our top level component





//services










// Application wide providers
var APP_PROVIDERS = [
    _app_service__WEBPACK_IMPORTED_MODULE_7__["AppState"],
    _global_state__WEBPACK_IMPORTED_MODULE_8__["GlobalState"], _common_services_permission__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _common_services_permission__WEBPACK_IMPORTED_MODULE_12__["CacheService"], _common_repositories__WEBPACK_IMPORTED_MODULE_11__["MasterRepo"], _common_services_cache_service__WEBPACK_IMPORTED_MODULE_18__["TTLCacheService"],
    _common_services_permission__WEBPACK_IMPORTED_MODULE_12__["CanActivateTeam"], _pages_login__WEBPACK_IMPORTED_MODULE_13__["LoginService"], _common_services_common_service__WEBPACK_IMPORTED_MODULE_16__["CommonService"], _common_services_time_format_service__WEBPACK_IMPORTED_MODULE_17__["TimeFormatService"],
    _theme_pipes_label_pipe__WEBPACK_IMPORTED_MODULE_15__["LabelPipe"]
];
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            entryComponents: [],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _theme_nga_module__WEBPACK_IMPORTED_MODULE_9__["NgaModule"].forRoot(),
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_10__["PagesModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"]
            ],
            providers: [
                APP_PROVIDERS,
                _app_common_services_disable_date_picker_disable_date_picker_service__WEBPACK_IMPORTED_MODULE_14__["DisableDateService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HTTP_INTERCEPTORS"], useClass: _common_services_httpInterceptor_service__WEBPACK_IMPORTED_MODULE_19__["HttpInterceptorService"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages/schedule/mastersche' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true });


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppState", function() { return AppState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AppState = /** @class */ (function () {
    function AppState() {
        this._state = {};
        this.notificationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.notification$ = this.notificationSubject.asObservable();
    }
    AppState.prototype.publishNotification = function (data) {
        this.notificationSubject.next(data);
    };
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    AppState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppState);
    return AppState;
}());



/***/ }),

/***/ "./src/app/common/repositories/index.ts":
/*!**********************************************!*\
  !*** ./src/app/common/repositories/index.ts ***!
  \**********************************************/
/*! exports provided: MasterRepo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _masterRepo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./masterRepo.service */ "./src/app/common/repositories/masterRepo.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MasterRepo", function() { return _masterRepo_service__WEBPACK_IMPORTED_MODULE_0__["MasterRepo"]; });




/***/ }),

/***/ "./src/app/common/repositories/masterRepo.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/repositories/masterRepo.service.ts ***!
  \***********************************************************/
/*! exports provided: MasterRepo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterRepo", function() { return MasterRepo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_permission_authService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _global_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global.state */ "./src/app/global.state.ts");
/* harmony import */ var _services_cache_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/cache.service */ "./src/app/common/services/cache.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var MasterRepo = /** @class */ (function () {
    //constructor 
    function MasterRepo(http, authService, cache, state) {
        //console.log({ authservice: authService });
        // this._employeeList = [{ EMPLOYEEID: 1, ADDRESS: 'Thimi', DESIGNATION: 'NotMention', NAME: 'Sujeep', TELNO: '11111111', OFFDAY: ['monday', 'thursday'], MOBILE: '9999', FLGAVAILABLE: 0 },
        // { EMPLOYEEID: 2, ADDRESS: 'Thimi2', DESIGNATION: 'NotMention2', NAME: 'Sujeep2', TELNO: '11111111', OFFDAY: [], MOBILE: '999999', FLGAVAILABLE: 0 }]
        this.http = http;
        this.authService = authService;
        this.cache = cache;
        this.state = state;
        this._employeeList = [];
        this._followupList = [];
        this._treatmentList = [];
        this._customerList = [];
        this._prescriptionList = [];
        this._roomList = [];
        this._serviceList = [];
        this._seriesList = [];
        this._seriesSalesList = [];
        this._diseaseList = [];
        this._medicationList = [];
        this._holidayList = [];
        this.empListHttp$ = this.http.get(this.apiUrl + '/getEmployeeList', this.getRequestOption());
        this.cusListHttp$ = this.http.get(this.apiUrl + '/getCustomerList', this.getRequestOption());
        this.roomListHttp$ = this.http.get(this.apiUrl + '/getRoomList', this.getRequestOption());
        this.serListHttp$ = this.http.get(this.apiUrl + '/getServiceList', this.getRequestOption());
        this.presListHttp$ = this.http.get(this.apiUrl + '/getPrescriptionList', this.getRequestOption());
    }
    MasterRepo.prototype.getRole = function () {
        //console.log(localStorage.getItem('USER_PROFILE'));
        //console.log(sessionStorage.getItem('USER_PROFILE'));
        return sessionStorage.getItem('USER_PROFILE');
    };
    Object.defineProperty(MasterRepo.prototype, "contentUrl", {
        get: function () {
            var url = this.state.getGlobalSetting("contentUrl");
            var contentUrl = "";
            if (!!url && url.length > 0) {
                contentUrl = url[0];
            }
            ;
            //console.log({ contentUrl: contentUrl })
            return contentUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterRepo.prototype, "apiUrl", {
        get: function () {
            var url = this.state.getGlobalSetting("apiUrl");
            var apiUrl = "";
            if (!!url && url.length > 0) {
                apiUrl = url[0];
            }
            ;
            //console.log({ apiUrl: apiUrl })
            return apiUrl;
        },
        enumerable: true,
        configurable: true
    });
    MasterRepo.prototype.getRequestOption = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({ 'Content-type': 'application/json', 'Authorization': this.authService.getAuth().token });
        //console.log({ headers: headers });
        return { headers: headers };
    };
    MasterRepo.prototype.getEmployeeList = function (refresh) {
        if (refresh === void 0) { refresh = false; }
        return this.http.get(this.apiUrl + '/getEmployeeList', this.getRequestOption());
    };
    MasterRepo.prototype.getEmployeeRoster = function (branchId, date) {
        return this.http.get(this.apiUrl + ("/getEmployeeRoster?branchId=" + branchId + "&date=" + date), this.getRequestOption());
    };
    MasterRepo.prototype.getCustomerList = function (refresh) {
        if (refresh === void 0) { refresh = false; }
        return this.http.get(this.apiUrl + '/getCustomerList', this.getRequestOption());
    };
    MasterRepo.prototype.getPagedCustomerList = function (pageNo, rowCount, name, mobile) {
        var nameFilter = "";
        var mobileFilter = "";
        if (name && name.length > 0)
            nameFilter = "&NAME_Like=" + encodeURIComponent(name);
        if (mobile && mobile.length > 0)
            mobileFilter = "&MOBILE_Like=" + encodeURIComponent(mobile);
        return this.http.get(this.apiUrl + "/getCustomerListPaged?currentPage=" + pageNo + "&maxResultCount=" + rowCount + nameFilter + mobileFilter, this.getRequestOption());
    };
    MasterRepo.prototype.getPrescriptionList = function (refresh) {
        if (refresh === void 0) { refresh = false; }
        return this.http.get(this.apiUrl + '/getPrescriptionList', this.getRequestOption());
    };
    MasterRepo.prototype.getRoomList = function (refresh) {
        if (refresh === void 0) { refresh = false; }
        return this.http.get(this.apiUrl + '/getRoomList?includeInactive=true', this.getRequestOption());
    };
    MasterRepo.prototype.getServiceList = function (refresh) {
        if (refresh === void 0) { refresh = false; }
        return this.http.get(this.apiUrl + '/getServiceList', this.getRequestOption());
    };
    MasterRepo.prototype.getEmployeeServices = function (id) {
        return this.http.get(this.apiUrl + ("/getEmployeeService?EMPLOYEEID=" + id), this.getRequestOption());
    };
    MasterRepo.prototype.getRoomServices = function (id) {
        return this.http.get(this.apiUrl + ("/getRoomService?ROOMID=" + id), this.getRequestOption());
    };
    MasterRepo.prototype.getServiceListNew = function () {
        return this.http.get(this.apiUrl + '/getServiceList', this.getRequestOption());
    };
    MasterRepo.prototype.getfollowupList = function (refresh) {
        if (refresh === void 0) { refresh = false; }
        return this.http.get(this.apiUrl + '/getFollowupList', this.getRequestOption());
    };
    MasterRepo.prototype.getSeriesList = function (refresh) {
        if (refresh === void 0) { refresh = false; }
        return this.http.get(this.apiUrl + '/getSeriesList', this.getRequestOption());
    };
    MasterRepo.prototype.getSeriesSalesList = function (refresh) {
        if (refresh === void 0) { refresh = false; }
        return this.http.get(this.apiUrl + '/getSeriesSalesList', this.getRequestOption());
    };
    MasterRepo.prototype.getItemList = function (refresh) {
        if (refresh === void 0) { refresh = false; }
        return this.http.get(this.apiUrl + '/getProduct', this.getRequestOption());
    };
    MasterRepo.prototype.getSeriesItemList = function (refresh) {
        if (refresh === void 0) { refresh = false; }
        return this.http.get(this.apiUrl + '/getSeriesItemList', this.getRequestOption());
    };
    MasterRepo.prototype.getFollowUpList = function (TreatmentDate) {
        return this.http.get(this.apiUrl + '/getFollowUpList', this.getRequestOption());
    };
    MasterRepo.prototype.getTreatmentListDetails = function (date) {
        return this.http.get(this.apiUrl + '/getTreatmentListDetails?date=' + date, this.getRequestOption());
    };
    MasterRepo.prototype.getTreatmentList = function (refresh) {
        if (refresh === void 0) { refresh = false; }
        return this.http.get(this.apiUrl + '/getTreatmentList', this.getRequestOption());
    };
    MasterRepo.prototype.getDiseaseList = function (refresh) {
        if (refresh === void 0) { refresh = false; }
        return this.http.get(this.apiUrl + '/GetDiseaseList', this.getRequestOption());
    };
    MasterRepo.prototype.getHolidayList = function (refresh) {
        if (refresh === void 0) { refresh = false; }
        return this.http.get(this.apiUrl + '/GetHolidayList', this.getRequestOption());
    };
    MasterRepo.prototype.getServices = function (branchId) {
        var _this = this;
        var cacheKey = "service_" + branchId;
        var cached = this.cache.get(cacheKey);
        if (cached) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cached);
        }
        return this.http.get(this.apiUrl + ("/GetServiceList?branchId=" + branchId), this.getRequestOption())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (res) {
            _this.cache.set(cacheKey, res, 10); // TTL: 10 minutes
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(res);
        }));
    };
    MasterRepo.prototype.getBranchList = function () {
        return this.http.get(this.apiUrl + "/getOutlet", this.getRequestOption());
    };
    MasterRepo.prototype.getEmployees = function () {
        return this.http.get(this.apiUrl + "/getEmployees", this.getRequestOption());
    };
    MasterRepo.prototype.getEmployeeListNew = function (branchId) {
        var _this = this;
        var cacheKey = "employees_" + branchId;
        var cached = this.cache.get(cacheKey);
        if (cached) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cached);
        }
        return this.http.get(this.apiUrl + ("/getEmployeeList?branchId=" + branchId), this.getRequestOption())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (res) {
            _this.cache.set(cacheKey, res, 10); // TTL: 10 minutes
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(res);
        }));
    };
    MasterRepo.prototype.getRoomListNew = function (branchId) {
        var _this = this;
        var cacheKey = "room_" + branchId;
        var cached = this.cache.get(cacheKey);
        if (cached) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cached);
        }
        return this.http.get(this.apiUrl + ("/getRoomList?branchId=" + branchId), this.getRequestOption())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (res) {
            _this.cache.set(cacheKey, res, 10); // TTL: 10 minutes
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(res);
        }));
    };
    MasterRepo.prototype.getAvailableEmployees = function (branchId, serviceId, appDate, appTime) {
        var body = { branchId: branchId, serviceId: serviceId, appDate: appDate, appTime: appTime };
        return this.http.post(this.apiUrl + "/getAvailableEmployee", body, this.getRequestOption());
    };
    MasterRepo.prototype.getAvailableRooms = function (branchId, serviceId, appDate, appTime) {
        var body = { branchId: branchId, serviceId: serviceId, appDate: appDate, appTime: appTime };
        return this.http.post(this.apiUrl + "/getAvailableRooms", body, this.getRequestOption());
    };
    MasterRepo.prototype.getRooms = function () {
        return this.http.get(this.apiUrl + "/getRooms", this.getRequestOption());
    };
    MasterRepo.prototype.getTimeSlotForAppointment = function (model) {
        return this.http.post(this.apiUrl + '/getTimeSlotForAppointment', model, this.getRequestOption());
    };
    MasterRepo.prototype.GetAppointmentForCheckIn = function (model) {
        return this.http.post(this.apiUrl + '/GetAppointmentForCheckIn', model, this.getRequestOption());
    };
    MasterRepo.prototype.GetAppointmetRequests = function (branchId) {
        return this.http.post(this.apiUrl + "/AppointmentRequest/get", branchId, this.getRequestOption());
    };
    MasterRepo.prototype.GetAppointmetDetail = function (cartId) {
        return this.http.get(this.apiUrl + ("/AppointmentRequest/detail?cartId=" + cartId), this.getRequestOption());
    };
    MasterRepo.prototype.ApproveAppointment = function (cartId, scheduleId) {
        var body = { cartId: cartId, scheduleId: scheduleId };
        return this.http.post(this.apiUrl + "/AppointmentRequest/approve", body, this.getRequestOption());
    };
    MasterRepo.prototype.RejectAppointment = function (cartId, remarks) {
        var body = { cartId: cartId, remarks: remarks };
        return this.http.post(this.apiUrl + "/AppointmentRequest/reject", body, this.getRequestOption());
    };
    MasterRepo.prototype.GetAllCheckIns = function (branchId) {
        return this.http.post(this.apiUrl + "/GetCheckIns", branchId, this.getRequestOption());
    };
    MasterRepo.prototype.getTreatmentHistory = function (cusid) {
        return this.http.get(this.apiUrl + '/getPatientTreatmentHistory?id=' + cusid + '&currentPage=1&maxResultCount=10', this.getRequestOption());
    };
    MasterRepo.prototype.sendTreatmentEmai = function (model) {
        return this.http.post(this.apiUrl + '/sendTreatmentEmail', model, this.getRequestOption()).subscribe(function (res) { return console.log(res); });
        //  return this.http.post(this.apiUrl + '/api/sendTreatmentEmai', model, this.getRequestOption());
    };
    MasterRepo.prototype.getMedicationList = function (refresh) {
        if (refresh === void 0) { refresh = false; }
        return this.http.get(this.apiUrl + '/GetMedicationList', this.getRequestOption());
    };
    MasterRepo.prototype.getCustomerById = function (cusid) {
        return this.http.get(this.apiUrl + '/getCustomer?id=' + cusid, this.getRequestOption());
    };
    MasterRepo.prototype.getFormPreferences = function (id) {
        return this.http.get(this.apiUrl + '/getFormPreference/' + id, this.getRequestOption());
    };
    MasterRepo.prototype.refreshEmployeeList = function () {
        var _this = this;
        var elist = [];
        this.http.get(this.apiUrl + '/getEmployeeList', this.getRequestOption())
            .subscribe(function (data) { elist.push(data); }, function (Error) { return console.log(Error); }, function () { _this._employeeList = elist; });
    };
    MasterRepo.prototype.refreshPrescriptionList = function () {
        var _this = this;
        var prescriptionList = [];
        this.presListHttp$.subscribe(function (data) { prescriptionList.push(data); }, function (Error) { return console.log(Error); }, function () { _this._prescriptionList = prescriptionList; });
    };
    MasterRepo.prototype.refreshCustomerList = function () {
        var _this = this;
        var clist = [];
        this.cusListHttp$.subscribe(function (data) { clist.push(data); }, function (Error) { return console.log(Error); }, function () { _this._customerList = clist; });
    };
    MasterRepo.prototype.refreshRoomList = function () {
        var _this = this;
        var rlist = [];
        this.roomListHttp$.subscribe(function (data) { rlist.push(data); }, function (Error) { return console.log(Error); }, function () { _this._roomList = rlist; });
    };
    MasterRepo.prototype.refreshServiceList = function () {
        var _this = this;
        var slist = [];
        this.serListHttp$.subscribe(function (data) { slist.push(data); }, function (Error) { return console.log(Error); }, function () { _this._serviceList = slist; });
    };
    MasterRepo.prototype.checkUserValid = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this.http.get(_this.apiUrl + '/checkLogin', _this.getRequestOption())
                .subscribe(function (data) {
                _this.state.setGlobalSetting('LoggedIn', ["true"]);
                observer.next(true);
                observer.complete();
            }, function (Error) {
                observer.next(false);
                observer.complete();
            }, function () {
                observer.complete();
            });
        });
    };
    MasterRepo.prototype.postmaster = function (mode, dataToSave, postUrl) {
        var _this = this;
        var res = { status: "error", result: "" };
        var returnSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        var opt = this.getRequestOption();
        var hd = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        var op = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
        var bodyData = { mode: mode, data: dataToSave };
        //console.log(bodyData);
        this.http.post(this.apiUrl + postUrl, bodyData, this.getRequestOption())
            .subscribe(function (retData) {
            if (retData.status == "ok") {
                res.status = "ok";
                res.result = retData.result;
                returnSubject.next(res);
                returnSubject.unsubscribe();
            }
            else {
                res.status = "error1";
                res.result = retData.result;
                //console.log(res);
                returnSubject.next(res);
                returnSubject.unsubscribe();
            }
        }, function (error) {
            res.status = "error2";
            res.result = _this.handleWebError(error);
            //console.log(res);
            returnSubject.next(res);
            returnSubject.unsubscribe();
        });
        return returnSubject;
    };
    MasterRepo.prototype.postMasterAsync = function (mode, dataToSave, postUrl) {
        var res = { status: "error", result: "" };
        var opt = this.getRequestOption();
        var hd = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        var op = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
        var bodyData = { mode: mode, data: dataToSave };
        //console.log(bodyData);
        return this.http.post(this.apiUrl + postUrl, bodyData, this.getRequestOption()).toPromise();
    };
    MasterRepo.prototype.postform = function (mode, dataToSave, postUrl, files) {
        var res = { status: "error", result: "" };
        var formdata = new FormData();
        formdata.append("data", JSON.stringify(dataToSave));
        if (files != null) {
            for (var i = 0; i < files.length; i++) {
                formdata.append(files[i].name, files[i]);
            }
        }
        console.log(formdata, "formdata");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({ 'Authorization': this.authService.getAuth().token });
        var returnSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.http.post(this.apiUrl + postUrl, formdata, { headers: headers })
            .subscribe(function (retData) {
            if (retData.status == "ok") {
                res.status = "ok";
                res.result = retData.result;
                returnSubject.next(res);
                returnSubject.unsubscribe();
            }
            else {
                res.status = "error1";
                res.result = retData.result;
                console.log(res);
                returnSubject.next(res);
                returnSubject.unsubscribe();
            }
        }, function (error) {
            res.status = "error2", res.result = error;
            console.log(res);
            returnSubject.next(res);
            returnSubject.unsubscribe();
        });
        return returnSubject;
    };
    MasterRepo.prototype.getTableSetting = function () {
        return { StartingTime: "9AM", ClosingTime: "8PM", MinuteCellWidth: 25 };
    };
    MasterRepo.prototype.TimeScheduleHeader = function (startingTime, closingTime) {
        var hourHeaderList = [];
        var noOfTimeHeaderInHour = 0;
        var totalNoOfMinCell = 0;
        var minList = [];
        var st = parseInt(startingTime.slice(0, -2));
        var stp = startingTime.slice(-2);
        var ct = parseInt(closingTime.slice(0, -2));
        var ctp = closingTime.slice(-2);
        if (ctp.toUpperCase() == "PM") {
            ct = ct + 12;
        }
        if (stp.toUpperCase() == "PM") {
            st = st + 12;
        }
        var starttime = st;
        var ap = stp.toUpperCase();
        for (var h = st; h < ct; h++) {
            var pred = "AM";
            if (h >= 12) {
                pred = "PM";
            }
            hourHeaderList.push((h > 12 ? (h - 12) : h) + pred);
        }
        noOfTimeHeaderInHour = ct - st;
        totalNoOfMinCell = noOfTimeHeaderInHour * 4;
        for (var j = 1; j <= noOfTimeHeaderInHour; j++) {
            if (starttime >= 12) {
                ap = "PM";
            }
            for (var i = 0; i < 4; i++) {
                minList.push({ min: i * 15, booked: 0, startTime: starttime, minPart: i + 1, ampm: ap });
            }
            if (starttime == 12) {
                starttime = 0;
                ap = "PM";
            }
            starttime++;
        }
        return { hourHeaderList: hourHeaderList, minList: minList };
    };
    MasterRepo.prototype.setBookedInCell = function (initialCellList, starttime, endtime, duration, room, service, customer, minuteCellWidth) {
        var e_1, _a;
        var s = starttime.slice(0, -5);
        var ampm = starttime.slice(-2);
        var onlyMin = parseInt(starttime.slice(-4).slice(0, -2));
        var noOfBLock = Math.ceil(duration / 15);
        console.log({ noOfBLock: noOfBLock });
        var isBooked = 0;
        var skip = 0;
        try {
            for (var initialCellList_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](initialCellList), initialCellList_1_1 = initialCellList_1.next(); !initialCellList_1_1.done; initialCellList_1_1 = initialCellList_1.next()) {
                var t = initialCellList_1_1.value;
                //console.log({Tstarttime:t.startTime, Tampm :t.ampm, starttime:s, ampm:ampm.toUpperCase(), onlyMin:onlyMin, minPart:t.minPart});
                if (t.startTime == s && t.ampm == ampm.toUpperCase()) {
                    if (onlyMin == 0 && t.minPart == 1) {
                        t.booked = 1;
                        isBooked = 1;
                        t.colspan = noOfBLock;
                        skip = 1;
                        t.width = minuteCellWidth * noOfBLock + 'px';
                        t.room = room;
                        t.service = service;
                        t.customer = customer;
                    }
                    else if (onlyMin <= 15 && onlyMin > 0 && t.minPart == 2) {
                        t.booked = 1;
                        isBooked = 1;
                        t.colspan = noOfBLock;
                        skip = 1;
                        t.width = minuteCellWidth * noOfBLock + 'px';
                        t.room = room;
                        t.service = service;
                        t.customer = customer;
                    }
                    else if (onlyMin <= 30 && onlyMin > 15 && t.minPart == 3) {
                        t.booked = 1;
                        isBooked = 1;
                        t.colspan = noOfBLock;
                        skip = 1;
                        t.width = minuteCellWidth * noOfBLock + 'px';
                        t.room = room;
                        t.service = service;
                        t.customer = customer;
                    }
                    else if (onlyMin <= 45 && onlyMin > 30 && t.minPart == 4) {
                        t.booked = 1;
                        isBooked = 1;
                        t.colspan = noOfBLock;
                        skip = 1;
                        t.width = minuteCellWidth * noOfBLock + 'px';
                        t.room = room;
                        t.service = service;
                        t.customer = customer;
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (initialCellList_1_1 && !initialCellList_1_1.done && (_a = initialCellList_1.return)) _a.call(initialCellList_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return initialCellList;
    };
    MasterRepo.prototype.saveDate = function (date) {
        var new_date = date;
        this.selected_Date = new_date;
        console.log('after date', date, typeof date);
    };
    MasterRepo.prototype.getDate = function () {
        console.log(this.selected_Date);
        return this.selected_Date;
    };
    MasterRepo.prototype.getSmsCredit = function () {
        return this.http.get(this.apiUrl + '/getSmsCredit', this.getRequestOption());
    };
    MasterRepo.prototype.toBSDate = function (date) {
        if (typeof date !== "string") {
            var adDate = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString().padStart(2, '0') + "-" + date.getDate().toString().padStart(2, '0');
            return this.toBSDate(adDate);
        }
        else {
            var nepFunction = __webpack_require__(/*! ../../../assets/nepali-date-picker/nepali.datepicker.v3.5.min.js */ "./src/assets/nepali-date-picker/nepali.datepicker.v3.5.min.js");
            var bsDate = nepFunction.ad2bs(date);
            return bsDate.year + '-' + bsDate.month.toString().padStart(2, '0') + '-' + bsDate.day.toString().padStart(2, '0');
        }
    };
    MasterRepo.prototype.toADDate = function (bsDate) {
        var nepFunction = __webpack_require__(/*! ../../../assets/nepali-date-picker/nepali.datepicker.v3.5.min.js */ "./src/assets/nepali-date-picker/nepali.datepicker.v3.5.min.js");
        var adDate = nepFunction.bs2ad(bsDate);
        return adDate.year + '-' + adDate.month.toString().padStart(2, '0') + '-' + adDate.day.toString().padStart(2, '0');
    };
    MasterRepo.prototype.handleWebError = function (error) {
        if (error.status === 404) {
            return error.statusText;
        }
        else if (error._body) {
            var eResponse = JSON.parse(error._body);
            if (eResponse && eResponse.result) {
                return eResponse.result;
            }
        }
        return JSON.stringify(error);
    };
    MasterRepo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _services_permission_authService_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_cache_service__WEBPACK_IMPORTED_MODULE_6__["TTLCacheService"], _global_state__WEBPACK_IMPORTED_MODULE_5__["GlobalState"]])
    ], MasterRepo);
    return MasterRepo;
}());



/***/ }),

/***/ "./src/app/common/services/cache.service.ts":
/*!**************************************************!*\
  !*** ./src/app/common/services/cache.service.ts ***!
  \**************************************************/
/*! exports provided: TTLCacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTLCacheService", function() { return TTLCacheService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");



var TTLCacheService = /** @class */ (function () {
    function TTLCacheService(appState) {
        this.appState = appState;
        this.appState.notification$.subscribe(function (data) {
            if (data.nType === 1 && data.Data.action === 'clear-cache') {
                for (var i = localStorage.length - 1; i >= 0; i--) {
                    var key = localStorage.key(i);
                    if (key && key.startsWith(data.Data.key)) {
                        localStorage.removeItem(key);
                    }
                }
            }
        });
    }
    TTLCacheService.prototype.set = function (key, data, ttlMinutes) {
        var expires = new Date().getTime() + ttlMinutes * 60 * 1000;
        var payload = { data: data, expires: expires };
        localStorage.setItem(key, JSON.stringify(payload));
    };
    TTLCacheService.prototype.get = function (key) {
        var cached = localStorage.getItem(key);
        if (!cached)
            return null;
        var parsed = JSON.parse(cached);
        var now = new Date().getTime();
        if (parsed.expires < now) {
            localStorage.removeItem(key); // expired
            return null;
        }
        return parsed.data;
    };
    TTLCacheService.prototype.clear = function (key) {
        localStorage.removeItem(key);
    };
    TTLCacheService.prototype.clearAll = function () {
        localStorage.clear();
    };
    TTLCacheService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppState"]])
    ], TTLCacheService);
    return TTLCacheService;
}());



/***/ }),

/***/ "./src/app/common/services/common.service.ts":
/*!***************************************************!*\
  !*** ./src/app/common/services/common.service.ts ***!
  \***************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var CommonService = /** @class */ (function () {
    function CommonService() {
    }
    CommonService.prototype.setFormPreference = function (form, fields) {
        var _this = this;
        fields.forEach(function (field) {
            if (field.hidden)
                form.removeControl(field.fieldName);
            if (field.required)
                _this.addValidation(form, field.fieldName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        });
    };
    CommonService.prototype.addValidation = function (form, controlName, validations) {
        var control = form.get(controlName);
        if (control) {
            control.setValidators(validations); // Set the new validators
            control.updateValueAndValidity(); // Refresh the validation state
        }
    };
    CommonService.prototype.getFormValue = function (form, fieldName) {
        if (form.contains(fieldName))
            return form.get(fieldName).value;
    };
    CommonService.prototype.recursiveForEach = function (array, callback) {
        var _this = this;
        array.forEach(function (item) {
            callback(item);
            if (Array.isArray(item)) {
                _this.recursiveForEach(item, callback);
            }
            else if (Array.isArray(item.children)) {
                _this.recursiveForEach(item.children, callback);
            }
        });
    };
    CommonService.prototype.coalesce = function (value, defaultValue) {
        return value != null ? value : defaultValue;
    };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/common/services/disable-date-picker/disable-date-picker.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/common/services/disable-date-picker/disable-date-picker.service.ts ***!
  \************************************************************************************/
/*! exports provided: DisableDateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisableDateService", function() { return DisableDateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repositories */ "./src/app/common/repositories/index.ts");



;
var DisableDateService = /** @class */ (function () {
    function DisableDateService(masterRepo) {
        this.masterRepo = masterRepo;
        this.disableDate = [];
        this.holidayResponse = [];
    }
    DisableDateService.prototype.setDisableDates = function () {
        return this.disableDate;
    };
    DisableDateService.prototype.getDisableDates = function () {
        //console.log("GET DISABLE DATES");
        var _this = this;
        this.masterRepo.getHolidayList().subscribe(function (res) {
            _this.holidayResponse.push(res);
        }, function (err) { return console.log(err); }, function () {
            var e_1, _a;
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.holidayResponse), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var x = _c.value;
                    //console.log(x);
                    _this.disableDate.push({ fromDate: x.BEGINDATE, toDate: x.ENDDATE });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            //console.log("DISABLE DATES", this.disableDate);
            return _this.disableDate;
        });
    };
    DisableDateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_repositories__WEBPACK_IMPORTED_MODULE_2__["MasterRepo"]])
    ], DisableDateService);
    return DisableDateService;
}());



/***/ }),

/***/ "./src/app/common/services/httpInterceptor.service.ts":
/*!************************************************************!*\
  !*** ./src/app/common/services/httpInterceptor.service.ts ***!
  \************************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _global_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global.state */ "./src/app/global.state.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _permission__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./permission */ "./src/app/common/services/permission/index.ts");








var HttpInterceptorService = /** @class */ (function () {
    function HttpInterceptorService(router, http, gblstate, cache) {
        this.router = router;
        this.http = http;
        this.gblstate = gblstate;
        this.cache = cache;
        this.isRefreshing$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    HttpInterceptorService.prototype.intercept = function (request, next) {
        var _this = this;
        var token = this.cache.get('TOKEN');
        if (token && token !== "undefined") {
            request = this.addAuthHeader(request, token);
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            console.log(error);
            if (error && error.error && error.error.message)
                alert(error.error.message);
            else if (error && error.error && error.error.result)
                alert(error.error.result);
            if (error.url && error.url.endsWith('/refreshToken')) {
                _this.router.navigate(['/login']);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]({ body: {}, status: 0 }));
            }
            if (error.status === 401 || error.status === 403 || error.status === 419) {
                if (!error.url.endsWith('/jwt'))
                    return _this.handle401(request, next);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(function () { return error; });
        }));
    };
    HttpInterceptorService.prototype.handle401 = function (request, next) {
        var _this = this;
        /**
         * If we're not refreshing a token, refresh it
         * and retry the original request.
         */
        if (!this.isRefreshing$.getValue()) {
            this.isRefreshing$.next(true);
            var arr = this.gblstate.getGlobalSetting("apiUrl");
            var option = { withCredentials: true };
            return this.http.post(arr[0] + '/refreshToken', {}, option)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (token) {
                _this.cache.set('TOKEN', token.token);
                _this.isRefreshing$.next(false);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
                var token = _a.token;
                console.log({ "switchMap": token });
                return next.handle(_this.addAuthHeader(request, token));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
                _this.isRefreshing$.next(false);
                //this.authService.onError();
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err);
            }));
        }
        /**
         * If we're already refreshing a token, wait
         * until we get the new one and perform the
         * request with the new Access Token.
         */
        return this.isRefreshing$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (is) { return !is; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return next.handle(_this.addAuthHeader(request));
        }));
    };
    HttpInterceptorService.prototype.addAuthHeader = function (request, token) {
        if (!token)
            token = this.cache.get('TOKEN') || "";
        return request.clone({
            setHeaders: {
                Authorization: token,
                'Content-Type': 'application/json',
            }
        });
    };
    HttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _global_state__WEBPACK_IMPORTED_MODULE_3__["GlobalState"], _permission__WEBPACK_IMPORTED_MODULE_7__["CacheService"]])
    ], HttpInterceptorService);
    return HttpInterceptorService;
}());



/***/ }),

/***/ "./src/app/common/services/permission/authService.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/common/services/permission/authService.service.ts ***!
  \*******************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cacheService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cacheService.service */ "./src/app/common/services/permission/cacheService.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AuthService = /** @class */ (function () {
    function AuthService(cacheService) {
        this.cacheService = cacheService;
        this.cache_constant = {};
        this._subscriptions = [];
        this.canActive = false;
    }
    AuthService.prototype.ngOnInit = function () {
    };
    AuthService.prototype.isAuthorized = function (routeInstruction) {
        var profile = this.getUserProfile();
        return this.isAuthenticated(profile);
    };
    AuthService.prototype.removeAuth = function () {
        this.cacheService.removeAll();
    };
    AuthService.prototype.isAuthenticated = function (profile) {
        return !!profile;
    };
    AuthService.prototype.setAuth = function (auth) {
        this.cacheService.set('USER_PROFILE', auth.profile);
        this.cacheService.set('TOKEN', auth.token);
        this.cacheService.set('setting', auth.setting);
        this.cacheService.set('role', auth.role);
        console.log("Token", this.cacheService.get('TOKEN'));
        //this.setting.appSetting.setSetting(auth.setting);
    };
    AuthService.prototype.getAuth = function () {
        var auth = {
            profile: this.cacheService.get('USER_PROFILE'),
            token: this.cacheService.get('TOKEN'),
        };
        //console.log({gettoken:auth.token});
        return auth;
    };
    Object.defineProperty(AuthService.prototype, "getRole", {
        get: function () {
            return this.cacheService.get('role');
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getUserProfile = function () {
        if (!this.cacheService.exist('USER_PROFILE')) {
            return null;
        }
        var userProfile = this.cacheService.get('USER_PROFILE');
        return userProfile;
    };
    AuthService.prototype.checkUserRight = function (right) {
        var user_profile = this.getUserProfile();
        var user_rights;
        var result;
        if (user_profile) {
            user_rights = user_profile.userRights;
            if (user_rights) {
                result = user_rights[right];
            }
        }
        return result;
    };
    AuthService.prototype.checkMenuRight = function (menu, right) {
        var user_profile = this.getUserProfile();
        var menu_rights = [];
        var result = false;
        if (user_profile) {
            menu_rights = user_profile.menuRights;
            if (menu_rights) {
                for (var m in menu_rights) {
                    if (menu_rights[m].menu == menu) {
                        for (var r in menu_rights[m].right) {
                            if (menu_rights[m].right[r] == right) {
                                this.canActive = result;
                                result = true;
                            }
                        }
                    }
                }
            }
        }
        return result;
    };
    AuthService.prototype.getSetting = function () {
        if (!this.cacheService.exist('setting')) {
            return undefined;
        }
        var setting = this.cacheService.get('setting');
        return setting;
    };
    AuthService.prototype.getRequestOption = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-type': 'application/json', 'Authorization': this.getAuth().token });
        console.log({ headers: headers });
        return { headers: headers };
    };
    AuthService.prototype.ngOnDestroy = function () {
        this._subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cacheService_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/common/services/permission/cacheService.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/common/services/permission/cacheService.service.ts ***!
  \********************************************************************/
/*! exports provided: CACHE_CONSTANT, CacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CACHE_CONSTANT", function() { return CACHE_CONSTANT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheService", function() { return CacheService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CACHE_CONSTANT = /** @class */ (function () {
    function CACHE_CONSTANT() {
    }
    return CACHE_CONSTANT;
}());

;
var CacheService = /** @class */ (function () {
    function CacheService() {
    }
    CacheService.prototype.remove = function (key) {
        window.sessionStorage.removeItem(key);
    };
    CacheService.prototype.removeAll = function () {
        window.sessionStorage.clear();
    };
    CacheService.prototype.exist = function (key) {
        return window.sessionStorage.getItem(key) != null;
    };
    CacheService.prototype.get = function (key) {
        if (!this.exist(key)) {
            return null;
        }
        var data = window.sessionStorage.getItem(key);
        try {
            return JSON.parse(data);
        }
        catch (e) {
            return null;
        }
    };
    CacheService.prototype.set = function (key, data) {
        window.sessionStorage.setItem(key, JSON.stringify(data));
    };
    CacheService.prototype.checkUserRight = function (right) {
        var user_profile = window.sessionStorage.getItem('USER_PROFILE');
        var user_rights;
        var result;
        if (user_profile) {
            user_rights = user_profile.userRights;
            if (user_rights) {
                result = user_rights[right];
            }
        }
        return result;
    };
    CacheService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CacheService);
    return CacheService;
}());



/***/ }),

/***/ "./src/app/common/services/permission/guard.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/services/permission/guard.service.ts ***!
  \*************************************************************/
/*! exports provided: CanActivateTeam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateTeam", function() { return CanActivateTeam; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global.state */ "./src/app/global.state.ts");
/* harmony import */ var _repositories_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../repositories/index */ "./src/app/common/repositories/index.ts");






var CanActivateTeam = /** @class */ (function () {
    function CanActivateTeam(gblstate, _authService, router, masterService) {
        this.gblstate = gblstate;
        this._authService = _authService;
        this.router = router;
        this.masterService = masterService;
        this.viewPermission = [];
        this.viewPermission = gblstate.getGlobalSetting("View-Permission") || [];
    }
    CanActivateTeam.prototype.menuRight = function (menuId) {
        var role = this._authService.getRole;
        if (role && role.menuRights)
            return role.menuRights.find(function (x) { return x.menuId === menuId; });
        else
            return null;
    };
    CanActivateTeam.prototype.canActivate = function (route, state) {
        var _this = this;
        //return true;    
        var LoggedIn = this._authService.getAuth();
        var role = this.menuRight(route.routeConfig.path);
        if (!(LoggedIn && LoggedIn.profile)) {
            this.router.navigate(['login']);
            return false;
        }
        else if (role && role.hidden) {
            return false;
        }
        else {
            var sub = this.masterService.checkUserValid().subscribe(function (res) {
                if (res == false) {
                    console.log({ checkLogin1: false });
                    _this.router.navigate(['login']);
                    return false;
                }
            });
        }
        return true;
    };
    CanActivateTeam = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_state__WEBPACK_IMPORTED_MODULE_4__["GlobalState"], _authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _repositories_index__WEBPACK_IMPORTED_MODULE_5__["MasterRepo"]])
    ], CanActivateTeam);
    return CanActivateTeam;
}());



/***/ }),

/***/ "./src/app/common/services/permission/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/services/permission/index.ts ***!
  \*****************************************************/
/*! exports provided: CanActivateTeam, SessionStorage, AuthService, CACHE_CONSTANT, CacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guard.service */ "./src/app/common/services/permission/guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanActivateTeam", function() { return _guard_service__WEBPACK_IMPORTED_MODULE_0__["CanActivateTeam"]; });

/* harmony import */ var _sessionStorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sessionStorage.service */ "./src/app/common/services/permission/sessionStorage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionStorage", function() { return _sessionStorage_service__WEBPACK_IMPORTED_MODULE_1__["SessionStorage"]; });

/* harmony import */ var _authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]; });

/* harmony import */ var _cacheService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cacheService.service */ "./src/app/common/services/permission/cacheService.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CACHE_CONSTANT", function() { return _cacheService_service__WEBPACK_IMPORTED_MODULE_3__["CACHE_CONSTANT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheService", function() { return _cacheService_service__WEBPACK_IMPORTED_MODULE_3__["CacheService"]; });







/***/ }),

/***/ "./src/app/common/services/permission/sessionStorage.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/common/services/permission/sessionStorage.service.ts ***!
  \**********************************************************************/
/*! exports provided: SessionStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStorage", function() { return SessionStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SessionStorage = /** @class */ (function () {
    function SessionStorage() {
    }
    SessionStorage.prototype.exist = function (key) {
        return window.sessionStorage.getItem(key) != null;
    };
    SessionStorage.prototype.remove = function (key) {
        window.sessionStorage.removeItem(key);
    };
    SessionStorage.prototype.set = function (key, data) {
        window.sessionStorage.setItem(key, JSON.stringify(data));
    };
    SessionStorage.prototype.get = function (key) {
        if (!this.exist(key)) {
            return null;
        }
        var data = window.sessionStorage.getItem(key);
        return JSON.parse(data);
    };
    SessionStorage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SessionStorage);
    return SessionStorage;
}());



/***/ }),

/***/ "./src/app/common/services/time-format.service.ts":
/*!********************************************************!*\
  !*** ./src/app/common/services/time-format.service.ts ***!
  \********************************************************/
/*! exports provided: TimeFormatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFormatService", function() { return TimeFormatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimeFormatService = /** @class */ (function () {
    function TimeFormatService() {
    }
    // Convert time to 12-hour format
    TimeFormatService.prototype.to12HourFormat = function (time) {
        var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](time.split(':').map(Number), 2), hours = _a[0], minutes = _a[1];
        var period = hours >= 12 ? 'PM' : 'AM';
        var adjustedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
        return this.padZero(adjustedHours) + ":" + this.padZero(minutes) + " " + period;
    };
    // Convert time to 24-hour format
    TimeFormatService.prototype.to24HourFormat = function (time12) {
        var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](time12.trim().toUpperCase().split(' '), 2), time = _a[0], modifier = _a[1];
        var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](time.split(':').map(function (str) { return parseInt(str, 10); }), 2), hour = _b[0], minute = _b[1];
        if (modifier === 'PM' && hour < 12)
            hour += 12;
        if (modifier === 'AM' && hour === 12)
            hour = 0;
        return hour.toString().padStart(2, '0') + ":" + minute.toString().padStart(2, '0');
    };
    // Helper method to pad single-digit numbers with a leading zero
    TimeFormatService.prototype.padZero = function (num) {
        return num < 10 ? "0" + num : "" + num;
    };
    TimeFormatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TimeFormatService);
    return TimeFormatService;
}());



/***/ }),

/***/ "./src/app/global.state.ts":
/*!*********************************!*\
  !*** ./src/app/global.state.ts ***!
  \*********************************/
/*! exports provided: GlobalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalState", function() { return GlobalState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var GlobalState = /** @class */ (function () {
    function GlobalState() {
        var _this = this;
        this._data = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._dataStream$ = this._data.asObservable();
        //sag
        this._globalSettings = new Map();
        this._subscriptions = new Map();
        this._dataStream$.subscribe(function (data) { return _this._onEvent(data); });
    }
    GlobalState.prototype.notifyDataChanged = function (event, value) {
        var current = this._data[event];
        if (current !== value) {
            this._data[event] = value;
            this._data.next({
                event: event,
                data: this._data[event]
            });
        }
    };
    GlobalState.prototype.subscribe = function (event, callback) {
        var subscribers = this._subscriptions.get(event) || [];
        subscribers.push(callback);
        this._subscriptions.set(event, subscribers);
    };
    GlobalState.prototype._onEvent = function (data) {
        var subscribers = this._subscriptions.get(data['event']) || [];
        subscribers.forEach(function (callback) {
            callback.call(null, data['data']);
        });
    };
    GlobalState.prototype.setGlobalSetting = function (key, items) {
        this._globalSettings.set(key, items);
    };
    GlobalState.prototype.getGlobalSetting = function (key) {
        return this._globalSettings.get(key);
    };
    GlobalState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GlobalState);
    return GlobalState;
}());



/***/ }),

/***/ "./src/app/pages/login/index.ts":
/*!**************************************!*\
  !*** ./src/app/pages/login/index.ts ***!
  \**************************************/
/*! exports provided: Login, LoginService, LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["Login"]; });

/* harmony import */ var _loginService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginService.service */ "./src/app/pages/login/loginService.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return _loginService_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]; });

/* harmony import */ var _login_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.module */ "./src/app/pages/login/login.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return _login_module__WEBPACK_IMPORTED_MODULE_2__["LoginModule"]; });






/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var style_loader_login_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-loader!./login.scss */ "./node_modules/style-loader/index.js!./src/app/pages/login/login.scss");
/* harmony import */ var style_loader_login_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(style_loader_login_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loginService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loginService.service */ "./src/app/pages/login/loginService.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");







//import {getmac} from 'getmac';
var Login = /** @class */ (function () {
    function Login(fb, route, router, loginService) {
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.signedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._toUrl = '';
        this.submitted = false;
        this.form = fb.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }
    Object.defineProperty(Login.prototype, "toUrl", {
        set: function (value) {
            this._toUrl = value;
            //console.log(value);
        },
        enumerable: true,
        configurable: true
    });
    Login.prototype.ngOnInit = function () {
        //console.log("login");
        var logout = this.route.snapshot.params['logout'];
        //console.log(logout);
        this.returnUrl = this.route.snapshot.params['returnUrl'] || '/';
        //console.log({retUrl1:this.returnUrl});
        if (logout) {
            //console.log("log out");
            //this.onLogOut();
        }
        //console.log(this.returnUrl);
    };
    Login.prototype.onSubmit = function (values) {
        var _this = this;
        this.submitted = true;
        //console.log({valid:this.form.valid,url:this.returnUrl});
        if (this.form.valid) {
            //console.log(this.email.value,this.password.value);
            this.loginService.login(this.email.value, this.password.value)
                .subscribe(function (data) {
                //console.log(this.returnUrl + "/pages/dashboard");
                if (_this._toUrl != '') {
                    _this.signedIn.emit("logged In");
                }
                else {
                    _this.router.navigate([_this.returnUrl]);
                }
            });
        }
    };
    Login.prototype.onLogOut = function () {
        this.loginService.logout();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('signedIn'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Login.prototype, "signedIn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('toUrl'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], Login.prototype, "toUrl", null);
    Login = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.html */ "./src/app/pages/login/login.html"),
            providers: [_angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _loginService_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], Login);
    return Login;
}());



/***/ }),

/***/ "./src/app/pages/login/login.html":
/*!****************************************!*\
  !*** ./src/app/pages/login/login.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-main\">\r\n  <div class=\"auth-block\">\r\n    <h1>Sign in to IMS AppointX </h1>    \r\n\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\">\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (email.touched), 'has-success': (email.touched)}\">\r\n        <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">User Id</label>\r\n\r\n        <div class=\"col-sm-10\">\r\n          <input [formControl]=\"email\" type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!password.valid && password.touched), 'has-success': (password.valid && password.touched)}\">\r\n        <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\r\n\r\n        <div class=\"col-sm-10\">\r\n          <input [formControl]=\"password\" type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"offset-sm-2 col-sm-10\">\r\n          <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-default btn-auth\">Sign in</button>          \r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _theme_nga_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/nga.module */ "./src/app/theme/nga.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _login_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.routing */ "./src/app/pages/login/login.routing.ts");







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _theme_nga_module__WEBPACK_IMPORTED_MODULE_4__["NgaModule"],
                _login_routing__WEBPACK_IMPORTED_MODULE_6__["routing"]
            ],
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_5__["Login"]
            ],
            exports: [_login_component__WEBPACK_IMPORTED_MODULE_5__["Login"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/login/login.routing.ts ***!
  \**********************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");


// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_1__["Login"]
    },
    {
        path: '/:id',
        component: _login_component__WEBPACK_IMPORTED_MODULE_1__["Login"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/login/loginService.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/loginService.service.ts ***!
  \*****************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_permission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/permission */ "./src/app/common/services/permission/index.ts");
/* harmony import */ var _global_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global.state */ "./src/app/global.state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var LoginService = /** @class */ (function () {
    function LoginService(http, gblstate, authSerice, router) {
        this.http = http;
        this.gblstate = gblstate;
        this.authSerice = authSerice;
        this.router = router;
        this._subscriptions = [];
    }
    LoginService.prototype.ngOnInit = function () {
    };
    LoginService.prototype.mockLogin = function (username, password) {
    };
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        var arr = this.gblstate.getGlobalSetting("apiUrl");
        if (arr) {
            this.apiUrl = arr[0];
        }
        //console.log(this.apiUrl);
        //console.log({ username: username, password: password });
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ 'content-type': 'application/json' });
        var option = { headers: headers };
        return this.http.post(this.apiUrl + '/jwt', { UserId: username, Password: password }, option)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (user) {
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.authSerice.setAuth(user);
                //console.log(user);
                _this.gblstate.setGlobalSetting("LoggedIn", [true]);
                //console.log(this.gblstate.getGlobalSetting("LoggedIn"))
                _this.gblstate.setGlobalSetting("View-Permission", ['Divisions', 'smartTables', 'addDivision']);
                //console.log(this.gblstate.getGlobalSetting("View-Permission"))
            }
        }));
    };
    LoginService.prototype.refreshToken = function () {
        var option = { withCredentials: true };
        return this.http.post(this.apiUrl + '/refreshToken', {}, option);
    };
    LoginService.prototype.logout = function () {
        var _this = this;
        // remove user from local storage to log user out
        var arr = this.gblstate.getGlobalSetting("apiUrl");
        if (arr) {
            this.apiUrl = arr[0];
        }
        var reqOptions = this.authSerice.getRequestOption();
        var sub = this.http.get(this.apiUrl + "/logout", reqOptions)
            .subscribe(function (res) {
            if (res.status == 'ok') {
                _this.router.navigate(['/']);
            }
        }, function (error) { alert(error); });
        this._subscriptions.push(sub);
        this.authSerice.removeAuth();
        window.sessionStorage.removeItem('currentUser');
        this.gblstate.notifyDataChanged("LoggedIn", false);
        this.gblstate.setGlobalSetting("LoggedIn", [false]);
        this.gblstate.setGlobalSetting("View-Permission", []);
        //this.cacheService.remove('currentUser');
    };
    LoginService.prototype.ngOnDestroy = function () {
        this._subscriptions.forEach(function (sub) { sub.unsubscribe(); });
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _global_state__WEBPACK_IMPORTED_MODULE_3__["GlobalState"], _common_services_permission__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: Pages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pages", function() { return Pages; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./src/app/theme/index.ts");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.menu */ "./src/app/pages/pages.menu.ts");
/* harmony import */ var _common_services_permission__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/services/permission */ "./src/app/common/services/permission/index.ts");
/* harmony import */ var _common_repositories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/repositories */ "./src/app/common/repositories/index.ts");
/* harmony import */ var _common_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/services/common.service */ "./src/app/common/services/common.service.ts");







var Pages = /** @class */ (function () {
    function Pages(_menuService, _authService, masterService, common) {
        this._menuService = _menuService;
        this._authService = _authService;
        this.masterService = masterService;
        this.common = common;
    }
    Pages.prototype.ngOnInit = function () {
        var _this = this;
        this.common.recursiveForEach(_pages_menu__WEBPACK_IMPORTED_MODULE_3__["PAGES_MENU"], function (item) {
            if (item.data && item.data.menu) {
                var menuRight = _this._authService.getRole.menuRights.find(function (x) { return x.menuId === item.path; });
                if (menuRight)
                    item.data.menu.hidden = menuRight.hidden;
                else
                    item.data.menu.hidden = true;
            }
        });
        this._menuService.updateMenuByRoutes(_pages_menu__WEBPACK_IMPORTED_MODULE_3__["PAGES_MENU"]);
        var date = new Date();
        this.currentYear = date.getFullYear();
    };
    Pages = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pages',
            template: "\n    <ba-sidebar></ba-sidebar>\n    <ba-page-top></ba-page-top>\n    <div class=\"al-main\">\n      <div class=\"al-content\">\n        <ba-content-top></ba-content-top>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    <footer class=\"al-footer clearfix\">\n      <div class=\"al-footer-right\">Created with <i class=\"ion-heart\"></i></div>\n      <div class=\"al-footer-main clearfix\">\n        <div class=\"al-copy\">&copy; <a href=\"http://www.imssoftware.com.np/\" target=\"_blank\">IMS Software Pvt. Ltd.</a> {{currentYear}}</div>\n        <ul class=\"al-share clearfix\">\n          <li><a  href=\"https://www.facebook.com/imssoftwarenepal\"  target=\"_blank\"><i class=\"socicon socicon-facebook\"></i></a></li>\n\n        </ul>\n      </div>\n    </footer>\n    <ba-back-top position=\"200\"></ba-back-top>\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme__WEBPACK_IMPORTED_MODULE_2__["BaMenuService"], _common_services_permission__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _common_repositories__WEBPACK_IMPORTED_MODULE_5__["MasterRepo"], _common_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], Pages);
    return Pages;
}());



/***/ }),

/***/ "./src/app/pages/pages.menu.ts":
/*!*************************************!*\
  !*** ./src/app/pages/pages.menu.ts ***!
  \*************************************/
/*! exports provided: PAGES_MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGES_MENU", function() { return PAGES_MENU; });
var PAGES_MENU = [
    {
        path: 'pages',
        children: [
            // {
            //   path: 'dashboard',
            //   data: {
            //     menu: {
            //       title: 'Dashboard',re
            //       icon: 'ion-android-home',
            //       selected: false,
            //       expanded: false,
            //       order: 0
            //     }
            //   }
            // },
            {
                path: 'schedule',
                data: {
                    menu: {
                        title: 'Schedule',
                        icon: 'ion-android-home',
                        selected: false,
                        expanded: false,
                        order: 1,
                        allowCreate: false, allowEdit: false, allowDelete: false
                    }
                },
                children: [
                    { path: 'mastersche', data: { menu: { title: 'Appointments', hidden: true } } },
                    { path: 'checkIn', data: { menu: { title: 'Check - In' } } },
                    { path: 'check-in-list', data: { menu: { title: 'Check Out' } } },
                    { path: 'treatment-list', data: { menu: { title: 'Treatment Entry' } } },
                    { path: 'treatment-details', data: { menu: { title: 'Treatment Details' } } },
                    { path: 'appointment-requests', data: { menu: { title: "Appointment Requests" } } }
                ]
                //{ path: 'followup', data: { menu: { title: 'Followup Appointment' } } }]
            },
            {
                path: 'masters',
                data: {
                    menu: {
                        title: 'Masters',
                        icon: 'ion-edit',
                        selected: false,
                        expanded: false,
                        order: 2,
                        allowCreate: false, allowEdit: false, allowDelete: false
                    }
                },
                children: [
                    { path: 'emp', data: { menu: { title: 'Employee' } } },
                    { path: 'cus', data: { menu: { title: 'Customer' } } },
                    { path: 'room', data: { menu: { title: 'Room' } } },
                    { path: 'ser', data: { menu: { title: 'Service' } } },
                    { path: 'series', data: { menu: { title: 'Series' } } },
                    { path: 'seriesSales', data: { menu: { title: 'Series Sales' } } },
                    { path: 'disease', data: { menu: { title: 'Disease' } } },
                    { path: 'medication', data: { menu: { title: 'Medication' } } },
                    { path: 'prescription', data: { menu: { title: 'Prescription' } } },
                    { path: 'holiday', data: { menu: { title: 'Holiday Entry' } } }
                ]
            }, {
                path: 'userManager',
                data: {
                    menu: {
                        title: 'User Manager',
                        icon: 'ion-android-people',
                        selected: false,
                        expanded: false,
                        order: 5,
                        allowCreate: false, allowEdit: false, allowDelete: false
                    }
                },
                children: [
                    { path: 'userlist', data: { menu: { title: 'User List' } } },
                    { path: 'roles', data: { menu: { title: 'Roles' } } }
                ]
            },
            {
                path: 'report',
                data: {
                    menu: {
                        title: 'Reports',
                        icon: 'ion-ios-list-outline',
                        selected: false,
                        expanded: false,
                        order: 6,
                        allowCreate: false, allowEdit: false, allowDelete: false
                    }
                },
                children: [
                    { path: 'cusReport', data: { menu: { title: 'Customer Report', allowCreate: false, allowEdit: false, allowDelete: false } } },
                    { path: 'empReport', data: { menu: { title: 'Employee Report', allowCreate: false, allowEdit: false, allowDelete: false } } },
                    { path: 'roomReport', data: { menu: { title: 'Room Report', allowCreate: false, allowEdit: false, allowDelete: false } } },
                    { path: 'serviceReport', data: { menu: { title: 'Service Report', allowCreate: false, allowEdit: false, allowDelete: false } } },
                    { path: 'seriesReport', data: { menu: { title: 'Series Report', allowCreate: false, allowEdit: false, allowDelete: false } } },
                    { path: 'followupRecords', data: { menu: { title: 'Follow Up Report', allowCreate: false, allowEdit: false, allowDelete: false } } },
                    { path: 'messageReport', data: { menu: { title: 'Message Report', allowCreate: false, allowEdit: false, allowDelete: false } } },
                    { path: 'activityReport', data: { menu: { title: 'Activity Log', allowCreate: false, allowEdit: false, allowDelete: false } } },
                    { path: 'empRoster', data: { menu: { title: 'Employee Roster', allowCreate: false, allowEdit: false, allowDelete: false } } }
                ]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.routing */ "./src/app/pages/pages.routing.ts");
/* harmony import */ var _theme_nga_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/nga.module */ "./src/app/theme/nga.module.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm5/ngx-export-as.js");







var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _theme_nga_module__WEBPACK_IMPORTED_MODULE_4__["NgaModule"], _pages_routing__WEBPACK_IMPORTED_MODULE_3__["routing"], ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsModule"]],
            declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_5__["Pages"]]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routing.ts":
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");


// noinspection TypeScriptValidateTypes
// export function loadChildren(path) { return System.import(path); };
var routes = [
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule'
    },
    {
        path: 'pages',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_1__["Pages"],
        children: [
            //{ path: '', redirectTo: 'schedule/treatment-list', pathMatch: 'full' },
            { path: '', redirectTo: 'schedule/mastersche', pathMatch: 'full' },
            // { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', canActivate:[CanActivateTeam] },
            { path: 'schedule', loadChildren: './schedule/schedule.module#ScheduleModule' },
            {
                path: 'masters', loadChildren: './masters/masters.module#MastersModule'
            },
            {
                path: 'userManager', loadChildren: './userManager/userManager.module#UserManagerModule'
            },
            {
                path: 'report', loadChildren: './reports/report.module#ReportsModule'
            },
        ]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/theme/components/baAmChart/baAmChart.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/baAmChart/baAmChart.component.ts ***!
  \*******************************************************************/
/*! exports provided: BaAmChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaAmChart", function() { return BaAmChart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/services */ "./src/app/theme/services/index.ts");
/* harmony import */ var amcharts3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amcharts3 */ "./node_modules/amcharts3/amcharts/amcharts.js");
/* harmony import */ var amcharts3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(amcharts3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var amcharts3_amcharts_plugins_responsive_responsive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! amcharts3/amcharts/plugins/responsive/responsive.js */ "./node_modules/amcharts3/amcharts/plugins/responsive/responsive.js");
/* harmony import */ var amcharts3_amcharts_plugins_responsive_responsive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_plugins_responsive_responsive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var amcharts3_amcharts_serial_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! amcharts3/amcharts/serial.js */ "./node_modules/amcharts3/amcharts/serial.js");
/* harmony import */ var amcharts3_amcharts_serial_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_serial_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ammap3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ammap3 */ "./node_modules/ammap3/ammap/ammap.js");
/* harmony import */ var ammap3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ammap3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ammap3_ammap_maps_js_worldLow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ammap3/ammap/maps/js/worldLow */ "./node_modules/ammap3/ammap/maps/js/worldLow.js");
/* harmony import */ var ammap3_ammap_maps_js_worldLow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ammap3_ammap_maps_js_worldLow__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _baAmChartTheme_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./baAmChartTheme.service */ "./src/app/theme/components/baAmChart/baAmChartTheme.service.ts");
/* harmony import */ var style_loader_baAmChart_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! style-loader!./baAmChart.scss */ "./node_modules/style-loader/index.js!./src/app/theme/components/baAmChart/baAmChart.scss");
/* harmony import */ var style_loader_baAmChart_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(style_loader_baAmChart_scss__WEBPACK_IMPORTED_MODULE_9__);










var BaAmChart = /** @class */ (function () {
    function BaAmChart(_baAmChartThemeService) {
        this._baAmChartThemeService = _baAmChartThemeService;
        this.onChartReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._loadChartsLib();
    }
    BaAmChart.prototype.ngOnInit = function () {
        AmCharts.themes.blur = this._baAmChartThemeService.getTheme();
    };
    BaAmChart.prototype.ngAfterViewInit = function () {
        var chart = AmCharts.makeChart(this._selector.nativeElement, this.baAmChartConfiguration);
        this.onChartReady.emit(chart);
    };
    BaAmChart.prototype._loadChartsLib = function () {
        _theme_services__WEBPACK_IMPORTED_MODULE_2__["BaThemePreloader"].registerLoader(new Promise(function (resolve, reject) {
            var amChartsReadyMsg = 'AmCharts ready';
            if (AmCharts.isReady) {
                resolve(amChartsReadyMsg);
            }
            else {
                AmCharts.ready(function () {
                    resolve(amChartsReadyMsg);
                });
            }
        }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BaAmChart.prototype, "baAmChartConfiguration", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BaAmChart.prototype, "baAmChartClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BaAmChart.prototype, "onChartReady", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baAmChart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BaAmChart.prototype, "_selector", void 0);
    BaAmChart = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ba-am-chart',
            template: __webpack_require__(/*! ./baAmChart.html */ "./src/app/theme/components/baAmChart/baAmChart.html"),
            providers: [_baAmChartTheme_service__WEBPACK_IMPORTED_MODULE_8__["BaAmChartThemeService"]],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_baAmChartTheme_service__WEBPACK_IMPORTED_MODULE_8__["BaAmChartThemeService"]])
    ], BaAmChart);
    return BaAmChart;
}());



/***/ }),

/***/ "./src/app/theme/components/baAmChart/baAmChart.html":
/*!***********************************************************!*\
  !*** ./src/app/theme/components/baAmChart/baAmChart.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #baAmChart class=\"ba-am-chart {{baAmChartClass || ''}}\"></div>\r\n"

/***/ }),

/***/ "./src/app/theme/components/baAmChart/baAmChartTheme.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/components/baAmChart/baAmChartTheme.service.ts ***!
  \**********************************************************************/
/*! exports provided: BaAmChartThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaAmChartThemeService", function() { return BaAmChartThemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme */ "./src/app/theme/index.ts");



var BaAmChartThemeService = /** @class */ (function () {
    function BaAmChartThemeService(_baConfig) {
        this._baConfig = _baConfig;
    }
    BaAmChartThemeService.prototype.getTheme = function () {
        var layoutColors = this._baConfig.get().colors;
        return {
            themeName: "blur",
            AmChart: {
                color: layoutColors.defaultText,
                backgroundColor: "#FFFFFF"
            },
            AmCoordinateChart: {
                colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight, layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark]
            },
            AmStockChart: {
                colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight, layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark]
            },
            AmSlicedChart: {
                colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight, layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark],
                labelTickColor: "#FFFFFF",
                labelTickAlpha: 0.3
            },
            AmRectangularChart: {
                zoomOutButtonColor: '#FFFFFF',
                zoomOutButtonRollOverAlpha: 0.15,
                zoomOutButtonImage: "lens.png"
            },
            AxisBase: {
                axisColor: "#FFFFFF",
                axisAlpha: 0.3,
                gridAlpha: 0.1,
                gridColor: "#FFFFFF"
            },
            ChartScrollbar: {
                backgroundColor: "#FFFFFF",
                backgroundAlpha: 0.12,
                graphFillAlpha: 0.5,
                graphLineAlpha: 0,
                selectedBackgroundColor: "#FFFFFF",
                selectedBackgroundAlpha: 0.4,
                gridAlpha: 0.15
            },
            ChartCursor: {
                cursorColor: layoutColors.primary,
                color: "#FFFFFF",
                cursorAlpha: 0.5
            },
            AmLegend: {
                color: "#FFFFFF"
            },
            AmGraph: {
                lineAlpha: 0.9
            },
            GaugeArrow: {
                color: "#FFFFFF",
                alpha: 0.8,
                nailAlpha: 0,
                innerRadius: "40%",
                nailRadius: 15,
                startWidth: 15,
                borderAlpha: 0.8,
                nailBorderAlpha: 0
            },
            GaugeAxis: {
                tickColor: "#FFFFFF",
                tickAlpha: 1,
                tickLength: 15,
                minorTickLength: 8,
                axisThickness: 3,
                axisColor: '#FFFFFF',
                axisAlpha: 1,
                bandAlpha: 0.8
            },
            TrendLine: {
                lineColor: layoutColors.danger,
                lineAlpha: 0.8
            },
            // ammap
            AreasSettings: {
                alpha: 0.8,
                color: layoutColors.info,
                colorSolid: layoutColors.primaryDark,
                unlistedAreasAlpha: 0.4,
                unlistedAreasColor: "#FFFFFF",
                outlineColor: "#FFFFFF",
                outlineAlpha: 0.5,
                outlineThickness: 0.5,
                rollOverColor: layoutColors.primary,
                rollOverOutlineColor: "#FFFFFF",
                selectedOutlineColor: "#FFFFFF",
                selectedColor: "#f15135",
                unlistedAreasOutlineColor: "#FFFFFF",
                unlistedAreasOutlineAlpha: 0.5
            },
            LinesSettings: {
                color: "#FFFFFF",
                alpha: 0.8
            },
            ImagesSettings: {
                alpha: 0.8,
                labelColor: "#FFFFFF",
                color: "#FFFFFF",
                labelRollOverColor: layoutColors.primaryDark
            },
            ZoomControl: {
                buttonFillAlpha: 0.8,
                buttonIconColor: layoutColors.default,
                buttonRollOverColor: layoutColors.danger,
                buttonFillColor: layoutColors.primaryDark,
                buttonBorderColor: layoutColors.primaryDark,
                buttonBorderAlpha: 0,
                buttonCornerRadius: 0,
                gridColor: "#FFFFFF",
                gridBackgroundColor: "#FFFFFF",
                buttonIconAlpha: 0.6,
                gridAlpha: 0.6,
                buttonSize: 20
            },
            SmallMap: {
                mapColor: "#000000",
                rectangleColor: layoutColors.danger,
                backgroundColor: "#FFFFFF",
                backgroundAlpha: 0.7,
                borderThickness: 1,
                borderAlpha: 0.8
            },
            // the defaults below are set using CSS syntax, you can use any existing css property
            // if you don't use Stock chart, you can delete lines below
            PeriodSelector: {
                color: "#FFFFFF"
            },
            PeriodButton: {
                color: "#FFFFFF",
                background: "transparent",
                opacity: 0.7,
                border: "1px solid rgba(0, 0, 0, .3)",
                MozBorderRadius: "5px",
                borderRadius: "5px",
                margin: "1px",
                outline: "none",
                boxSizing: "border-box"
            },
            PeriodButtonSelected: {
                color: "#FFFFFF",
                backgroundColor: "#b9cdf5",
                border: "1px solid rgba(0, 0, 0, .3)",
                MozBorderRadius: "5px",
                borderRadius: "5px",
                margin: "1px",
                outline: "none",
                opacity: 1,
                boxSizing: "border-box"
            },
            PeriodInputField: {
                color: "#FFFFFF",
                background: "transparent",
                border: "1px solid rgba(0, 0, 0, .3)",
                outline: "none"
            },
            DataSetSelector: {
                color: "#FFFFFF",
                selectedBackgroundColor: "#b9cdf5",
                rollOverBackgroundColor: "#a8b0e4"
            },
            DataSetCompareList: {
                color: "#FFFFFF",
                lineHeight: "100%",
                boxSizing: "initial",
                webkitBoxSizing: "initial",
                border: "1px solid rgba(0, 0, 0, .3)"
            },
            DataSetSelect: {
                border: "1px solid rgba(0, 0, 0, .3)",
                outline: "none"
            }
        };
    };
    BaAmChartThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme__WEBPACK_IMPORTED_MODULE_2__["BaThemeConfigProvider"]])
    ], BaAmChartThemeService);
    return BaAmChartThemeService;
}());



/***/ }),

/***/ "./src/app/theme/components/baAmChart/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/components/baAmChart/index.ts ***!
  \*****************************************************/
/*! exports provided: BaAmChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baAmChart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baAmChart.component */ "./src/app/theme/components/baAmChart/baAmChart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaAmChart", function() { return _baAmChart_component__WEBPACK_IMPORTED_MODULE_0__["BaAmChart"]; });




/***/ }),

/***/ "./src/app/theme/components/baBackTop/baBackTop.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/baBackTop/baBackTop.component.ts ***!
  \*******************************************************************/
/*! exports provided: BaBackTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaBackTop", function() { return BaBackTop; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BaBackTop = /** @class */ (function () {
    function BaBackTop() {
        this.position = 400;
        this.showSpeed = 500;
        this.moveSpeed = 1000;
    }
    BaBackTop.prototype.ngAfterViewInit = function () {
        this._onWindowScroll();
    };
    BaBackTop.prototype._onClick = function () {
        jQuery('html, body').animate({ scrollTop: 0 }, { duration: this.moveSpeed });
        return false;
    };
    BaBackTop.prototype._onWindowScroll = function () {
        var el = this._selector.nativeElement;
        window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], BaBackTop.prototype, "position", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], BaBackTop.prototype, "showSpeed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], BaBackTop.prototype, "moveSpeed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baBackTop'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BaBackTop.prototype, "_selector", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Boolean)
    ], BaBackTop.prototype, "_onClick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], BaBackTop.prototype, "_onWindowScroll", null);
    BaBackTop = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ba-back-top',
            styles: [__webpack_require__(/*! ./baBackTop.scss */ "./src/app/theme/components/baBackTop/baBackTop.scss")],
            template: "\n    <i #baBackTop class=\"fa fa-angle-up back-top ba-back-top\" title=\"Back to Top\"></i>\n  "
        })
    ], BaBackTop);
    return BaBackTop;
}());



/***/ }),

/***/ "./src/app/theme/components/baBackTop/baBackTop.scss":
/*!***********************************************************!*\
  !*** ./src/app/theme/components/baBackTop/baBackTop.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ba-back-top{position:fixed;width:52px;height:52px;cursor:pointer;z-index:9999;display:none;text-decoration:none;right:40px;bottom:40px !important;font-size:45px;text-align:center;opacity:0.4;color:#209e91;background-color:rgba(0,0,0,0.75);border-radius:50%;line-height:46px}.ba-back-top:hover{opacity:0.8}\n"

/***/ }),

/***/ "./src/app/theme/components/baBackTop/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/components/baBackTop/index.ts ***!
  \*****************************************************/
/*! exports provided: BaBackTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baBackTop_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baBackTop.component */ "./src/app/theme/components/baBackTop/baBackTop.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaBackTop", function() { return _baBackTop_component__WEBPACK_IMPORTED_MODULE_0__["BaBackTop"]; });




/***/ }),

/***/ "./src/app/theme/components/baCard/baCard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/components/baCard/baCard.component.ts ***!
  \*************************************************************/
/*! exports provided: BaCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaCard", function() { return BaCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BaCard = /** @class */ (function () {
    function BaCard() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BaCard.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BaCard.prototype, "baCardClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BaCard.prototype, "cardType", void 0);
    BaCard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ba-card',
            template: __webpack_require__(/*! ./baCard.html */ "./src/app/theme/components/baCard/baCard.html"),
        })
    ], BaCard);
    return BaCard;
}());



/***/ }),

/***/ "./src/app/theme/components/baCard/baCard.html":
/*!*****************************************************!*\
  !*** ./src/app/theme/components/baCard/baCard.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div baCardBlur class=\"animated fadeIn card {{cardType}} {{baCardClass || ''}}\" zoom-in>\r\n    <div *ngIf=\"title\" class=\"card-header clearfix\">\r\n        <h3 class=\"card-title\">{{title}}</h3>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/components/baCard/baCardBlur.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/baCard/baCardBlur.directive.ts ***!
  \*****************************************************************/
/*! exports provided: BaCardBlur */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaCardBlur", function() { return BaCardBlur; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme */ "./src/app/theme/index.ts");
/* harmony import */ var _baCardBlurHelper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baCardBlurHelper.service */ "./src/app/theme/components/baCard/baCardBlurHelper.service.ts");




var BaCardBlur = /** @class */ (function () {
    function BaCardBlur(_baConfig, _baCardBlurHelper, _el) {
        this._baConfig = _baConfig;
        this._baCardBlurHelper = _baCardBlurHelper;
        this._el = _el;
        this.isEnabled = false;
        if (this._isEnabled()) {
            this._baCardBlurHelper.init();
            this._getBodyImageSizesOnBgLoad();
            this._recalculateCardStylesOnBgLoad();
            this.isEnabled = true;
        }
    }
    BaCardBlur.prototype._onWindowResize = function () {
        if (this._isEnabled()) {
            this._bodyBgSize = this._baCardBlurHelper.getBodyBgImageSizes();
            this._recalculateCardStyle();
        }
    };
    BaCardBlur.prototype._getBodyImageSizesOnBgLoad = function () {
        var _this = this;
        this._baCardBlurHelper.bodyBgLoad().subscribe(function () {
            _this._bodyBgSize = _this._baCardBlurHelper.getBodyBgImageSizes();
        });
    };
    BaCardBlur.prototype._recalculateCardStylesOnBgLoad = function () {
        var _this = this;
        this._baCardBlurHelper.bodyBgLoad().subscribe(function (event) {
            setTimeout(_this._recalculateCardStyle.bind(_this));
        });
    };
    BaCardBlur.prototype._recalculateCardStyle = function () {
        if (!this._bodyBgSize) {
            return;
        }
        this._el.nativeElement.style.backgroundSize = Math.round(this._bodyBgSize.width) + 'px ' + Math.round(this._bodyBgSize.height) + 'px';
        this._el.nativeElement.style.backgroundPosition = Math.floor(this._bodyBgSize.positionX) + 'px ' + Math.floor(this._bodyBgSize.positionY) + 'px';
    };
    BaCardBlur.prototype._isEnabled = function () {
        return this._baConfig.get().theme.name == 'blur';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.card-blur'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], BaCardBlur.prototype, "isEnabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], BaCardBlur.prototype, "_onWindowResize", null);
    BaCardBlur = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[baCardBlur]',
            providers: [_baCardBlurHelper_service__WEBPACK_IMPORTED_MODULE_3__["BaCardBlurHelper"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme__WEBPACK_IMPORTED_MODULE_2__["BaThemeConfigProvider"], _baCardBlurHelper_service__WEBPACK_IMPORTED_MODULE_3__["BaCardBlurHelper"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], BaCardBlur);
    return BaCardBlur;
}());



/***/ }),

/***/ "./src/app/theme/components/baCard/baCardBlurHelper.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/baCard/baCardBlurHelper.service.ts ***!
  \*********************************************************************/
/*! exports provided: BaCardBlurHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaCardBlurHelper", function() { return BaCardBlurHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var BaCardBlurHelper = /** @class */ (function () {
    function BaCardBlurHelper() {
    }
    BaCardBlurHelper.prototype.init = function () {
        this._genBgImage();
        this._genImageLoadSubject();
    };
    BaCardBlurHelper.prototype.bodyBgLoad = function () {
        return this.imageLoadSubject;
    };
    BaCardBlurHelper.prototype.getBodyBgImageSizes = function () {
        var elemW = document.documentElement.clientWidth;
        var elemH = document.documentElement.clientHeight;
        if (elemW <= 640)
            return;
        var imgRatio = (this.image.height / this.image.width); // original img ratio
        var containerRatio = (elemH / elemW); // container ratio
        var finalHeight, finalWidth;
        if (containerRatio > imgRatio) {
            finalHeight = elemH;
            finalWidth = (elemH / imgRatio);
        }
        else {
            finalWidth = elemW;
            finalHeight = (elemW * imgRatio);
        }
        return { width: finalWidth, height: finalHeight, positionX: (elemW - finalWidth) / 2, positionY: (elemH - finalHeight) / 2 };
    };
    BaCardBlurHelper.prototype._genBgImage = function () {
        this.image = new Image();
        var computedStyle = getComputedStyle(document.body.querySelector('main'), ':before');
        this.image.src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
    };
    BaCardBlurHelper.prototype._genImageLoadSubject = function () {
        var _this = this;
        this.imageLoadSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.image.onerror = function (err) {
            _this.imageLoadSubject.complete();
        };
        this.image.onload = function () {
            _this.imageLoadSubject.next(null);
            _this.imageLoadSubject.complete();
        };
    };
    BaCardBlurHelper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BaCardBlurHelper);
    return BaCardBlurHelper;
}());



/***/ }),

/***/ "./src/app/theme/components/baCard/index.ts":
/*!**************************************************!*\
  !*** ./src/app/theme/components/baCard/index.ts ***!
  \**************************************************/
/*! exports provided: BaCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baCard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baCard.component */ "./src/app/theme/components/baCard/baCard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaCard", function() { return _baCard_component__WEBPACK_IMPORTED_MODULE_0__["BaCard"]; });




/***/ }),

/***/ "./src/app/theme/components/baChartistChart/baChartistChart.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/components/baChartistChart/baChartistChart.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BaChartistChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaChartistChart", function() { return BaChartistChart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var style_loader_baChartistChart_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-loader!./baChartistChart.scss */ "./node_modules/style-loader/index.js!./src/app/theme/components/baChartistChart/baChartistChart.scss");
/* harmony import */ var style_loader_baChartistChart_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(style_loader_baChartistChart_scss__WEBPACK_IMPORTED_MODULE_3__);




var BaChartistChart = /** @class */ (function () {
    function BaChartistChart() {
        this.onChartReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BaChartistChart.prototype.ngAfterViewInit = function () {
        this.chart = new chartist__WEBPACK_IMPORTED_MODULE_2__[this.baChartistChartType](this._selector.nativeElement, this.baChartistChartData, this.baChartistChartOptions, this.baChartistChartResponsive);
        this.onChartReady.emit(this.chart);
    };
    BaChartistChart.prototype.ngOnChanges = function (changes) {
        if (this.chart) {
            this.chart.update(this.baChartistChartData, this.baChartistChartOptions);
        }
    };
    BaChartistChart.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.detach();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BaChartistChart.prototype, "baChartistChartType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BaChartistChart.prototype, "baChartistChartData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BaChartistChart.prototype, "baChartistChartOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BaChartistChart.prototype, "baChartistChartResponsive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BaChartistChart.prototype, "baChartistChartClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BaChartistChart.prototype, "onChartReady", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baChartistChart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BaChartistChart.prototype, "_selector", void 0);
    BaChartistChart = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ba-chartist-chart',
            template: __webpack_require__(/*! ./baChartistChart.html */ "./src/app/theme/components/baChartistChart/baChartistChart.html"),
            providers: [],
        })
    ], BaChartistChart);
    return BaChartistChart;
}());



/***/ }),

/***/ "./src/app/theme/components/baChartistChart/baChartistChart.html":
/*!***********************************************************************!*\
  !*** ./src/app/theme/components/baChartistChart/baChartistChart.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #baChartistChart class=\"ba-chartist-chart {{baChartistChartClass || ''}}\"></div>\r\n"

/***/ }),

/***/ "./src/app/theme/components/baChartistChart/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/components/baChartistChart/index.ts ***!
  \***********************************************************/
/*! exports provided: BaChartistChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baChartistChart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baChartistChart.component */ "./src/app/theme/components/baChartistChart/baChartistChart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaChartistChart", function() { return _baChartistChart_component__WEBPACK_IMPORTED_MODULE_0__["BaChartistChart"]; });




/***/ }),

/***/ "./src/app/theme/components/baCheckbox/baCheckbox.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/baCheckbox/baCheckbox.component.ts ***!
  \*********************************************************************/
/*! exports provided: BaCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaCheckbox", function() { return BaCheckbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var BaCheckbox = /** @class */ (function () {
    function BaCheckbox(state) {
        this.model = state;
        state.valueAccessor = this;
    }
    BaCheckbox.prototype.onChange = function (value) { };
    BaCheckbox.prototype.onTouch = function (value) { };
    BaCheckbox.prototype.writeValue = function (state) {
        this.state = state;
    };
    BaCheckbox.prototype.registerOnChange = function (fn) {
        this.onChange = function (state) {
            this.writeValue(state);
            this.model.viewToModelUpdate(state);
        };
    };
    BaCheckbox.prototype.registerOnTouched = function (fn) { this.onTouch = fn; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], BaCheckbox.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BaCheckbox.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BaCheckbox.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BaCheckbox.prototype, "baCheckboxClass", void 0);
    BaCheckbox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ba-checkbox[ngModel]',
            styles: [__webpack_require__(/*! ./baCheckbox.scss */ "./src/app/theme/components/baCheckbox/baCheckbox.scss")],
            template: __webpack_require__(/*! ./baCheckbox.html */ "./src/app/theme/components/baCheckbox/baCheckbox.html"),
            providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]])
    ], BaCheckbox);
    return BaCheckbox;
}());



/***/ }),

/***/ "./src/app/theme/components/baCheckbox/baCheckbox.html":
/*!*************************************************************!*\
  !*** ./src/app/theme/components/baCheckbox/baCheckbox.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"{{baCheckboxClass}}\">\r\n  <label class=\"checkbox-inline custom-checkbox nowrap\">\r\n    <input type=\"checkbox\" [checked]=state\r\n           (change)=\"onChange($event.target.checked)\"\r\n           [disabled]=\"disabled\" [value]=\"value\">\r\n    <span>{{label}}</span>\r\n  </label>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/components/baCheckbox/baCheckbox.scss":
/*!*************************************************************!*\
  !*** ./src/app/theme/components/baCheckbox/baCheckbox.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".has-success{position:relative}.has-success .control-label{color:#666}.has-success .form-control{border:1px solid #a6c733}.has-success .form-control:focus{box-shadow:none;border-color:#90b900}.has-success label.custom-checkbox{color:#a6c733}.has-success label.custom-checkbox>span:before{color:#a6c733}.has-success label.custom-checkbox>span:hover:before{border-color:#a6c733}.has-success .form-control-feedback{color:#a6c733}.has-success .input-group-addon{background-color:#a6c733;color:#fff}.has-warning{position:relative}.has-warning .control-label{color:#666}.has-warning .form-control{border:1px solid #e5c649}.has-warning .form-control:focus{box-shadow:none;border-color:#dfb81c}.has-warning label.custom-checkbox{color:#e5c649}.has-warning label.custom-checkbox>span:before{color:#e5c649}.has-warning label.custom-checkbox>span:hover:before{border-color:#e5c649}.has-warning .form-control-feedback{color:#e5c649}.has-warning .input-group-addon{background-color:#e5c649;color:#fff}.has-error{position:relative}.has-error .control-label{color:#666}.has-error .form-control{border:1px solid #ed7878}.has-error .form-control:focus{box-shadow:none;border-color:#e85656}.has-error label.custom-checkbox{color:#ed7878}.has-error label.custom-checkbox>span:before{color:#ed7878}.has-error label.custom-checkbox>span:hover:before{border-color:#ed7878}.has-error .form-control-feedback{color:#ed7878}.has-error .input-group-addon{background-color:#ed7878;color:#fff}label.custom-checkbox{margin-bottom:12px}label.custom-checkbox>span{display:block;margin-right:10px}\n"

/***/ }),

/***/ "./src/app/theme/components/baCheckbox/index.ts":
/*!******************************************************!*\
  !*** ./src/app/theme/components/baCheckbox/index.ts ***!
  \******************************************************/
/*! exports provided: BaCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baCheckbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baCheckbox.component */ "./src/app/theme/components/baCheckbox/baCheckbox.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaCheckbox", function() { return _baCheckbox_component__WEBPACK_IMPORTED_MODULE_0__["BaCheckbox"]; });




/***/ }),

/***/ "./src/app/theme/components/baContentTop/baContentTop.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/components/baContentTop/baContentTop.component.ts ***!
  \*************************************************************************/
/*! exports provided: BaContentTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaContentTop", function() { return BaContentTop; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global.state */ "./src/app/global.state.ts");



var BaContentTop = /** @class */ (function () {
    function BaContentTop(_state) {
        var _this = this;
        this._state = _state;
        this.activePageTitle = '';
        this._state.subscribe('menu.activeLink', function (activeLink) {
            if (activeLink) {
                _this.activePageTitle = activeLink.title;
            }
        });
    }
    BaContentTop = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ba-content-top',
            styles: [__webpack_require__(/*! ./baContentTop.scss */ "./src/app/theme/components/baContentTop/baContentTop.scss")],
            template: __webpack_require__(/*! ./baContentTop.html */ "./src/app/theme/components/baContentTop/baContentTop.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_state__WEBPACK_IMPORTED_MODULE_2__["GlobalState"]])
    ], BaContentTop);
    return BaContentTop;
}());



/***/ }),

/***/ "./src/app/theme/components/baContentTop/baContentTop.html":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/baContentTop/baContentTop.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-top clearfix\">\r\n  <h1 class=\"al-title\">{{ activePageTitle }}</h1>\r\n\r\n  <ul class=\"breadcrumb al-breadcrumb\">\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/pages/dashboard\">Home</a></li>\r\n    <li class=\"breadcrumb-item active\">{{ activePageTitle }}</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/components/baContentTop/baContentTop.scss":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/baContentTop/baContentTop.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-top{padding-top:13px;padding-bottom:27px}h1.al-title{font-weight:700;color:#666;float:left;width:auto;margin:0;padding:0;font-size:24px;text-transform:uppercase;opacity:0.9}.al-breadcrumb{background:none;color:#666;padding:0;margin:0;float:right;padding-top:11px}.al-breadcrumb li{font-size:18px;font-weight:400}.al-breadcrumb li a{color:#63bbb2}.al-breadcrumb li.breadcrumb-item.active{color:#666}.al-look{float:right;margin-right:10px;padding-top:10px}.al-look>a{font-size:19px}\n"

/***/ }),

/***/ "./src/app/theme/components/baContentTop/index.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/components/baContentTop/index.ts ***!
  \********************************************************/
/*! exports provided: BaContentTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baContentTop_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baContentTop.component */ "./src/app/theme/components/baContentTop/baContentTop.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaContentTop", function() { return _baContentTop_component__WEBPACK_IMPORTED_MODULE_0__["BaContentTop"]; });




/***/ }),

/***/ "./src/app/theme/components/baFullCalendar/baFullCalendar.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/components/baFullCalendar/baFullCalendar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BaFullCalendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaFullCalendar", function() { return BaFullCalendar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var fullcalendar_dist_fullcalendar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fullcalendar/dist/fullcalendar.js */ "./node_modules/fullcalendar/dist/fullcalendar.js");
/* harmony import */ var fullcalendar_dist_fullcalendar_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fullcalendar_dist_fullcalendar_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var style_loader_baFullCalendar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-loader!./baFullCalendar.scss */ "./node_modules/style-loader/index.js!./src/app/theme/components/baFullCalendar/baFullCalendar.scss");
/* harmony import */ var style_loader_baFullCalendar_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(style_loader_baFullCalendar_scss__WEBPACK_IMPORTED_MODULE_3__);




var BaFullCalendar = /** @class */ (function () {
    function BaFullCalendar() {
        this.onCalendarReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BaFullCalendar.prototype.ngAfterViewInit = function () {
        var calendar = jQuery(this._selector.nativeElement).fullCalendar(this.baFullCalendarConfiguration);
        this.onCalendarReady.emit(calendar);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BaFullCalendar.prototype, "baFullCalendarConfiguration", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BaFullCalendar.prototype, "baFullCalendarClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BaFullCalendar.prototype, "onCalendarReady", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baFullCalendar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BaFullCalendar.prototype, "_selector", void 0);
    BaFullCalendar = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ba-full-calendar',
            template: __webpack_require__(/*! ./baFullCalendar.html */ "./src/app/theme/components/baFullCalendar/baFullCalendar.html"),
        })
    ], BaFullCalendar);
    return BaFullCalendar;
}());



/***/ }),

/***/ "./src/app/theme/components/baFullCalendar/baFullCalendar.html":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/baFullCalendar/baFullCalendar.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #baFullCalendar class=\"ba-full-calendar {{baFullCalendarClass || ''}}\"></div>\r\n"

/***/ }),

/***/ "./src/app/theme/components/baFullCalendar/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/theme/components/baFullCalendar/index.ts ***!
  \**********************************************************/
/*! exports provided: BaFullCalendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baFullCalendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baFullCalendar.component */ "./src/app/theme/components/baFullCalendar/baFullCalendar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaFullCalendar", function() { return _baFullCalendar_component__WEBPACK_IMPORTED_MODULE_0__["BaFullCalendar"]; });




/***/ }),

/***/ "./src/app/theme/components/baMenu/baMenu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/components/baMenu/baMenu.component.ts ***!
  \*************************************************************/
/*! exports provided: BaMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaMenu", function() { return BaMenu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/theme/services/index.ts");
/* harmony import */ var _global_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global.state */ "./src/app/global.state.ts");
/* harmony import */ var style_loader_baMenu_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! style-loader!./baMenu.scss */ "./node_modules/style-loader/index.js!./src/app/theme/components/baMenu/baMenu.scss");
/* harmony import */ var style_loader_baMenu_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(style_loader_baMenu_scss__WEBPACK_IMPORTED_MODULE_5__);






var BaMenu = /** @class */ (function () {
    function BaMenu(_router, _service, _state) {
        this._router = _router;
        this._service = _service;
        this._state = _state;
        this.sidebarCollapsed = false;
        this.expandMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.outOfArea = -200;
    }
    BaMenu.prototype.updateMenu = function (newMenuItems) {
        this.menuItems = newMenuItems;
        this.selectMenuAndNotify();
    };
    BaMenu.prototype.selectMenuAndNotify = function () {
        if (this.menuItems) {
            this.menuItems = this._service.selectMenuItem(this.menuItems);
            this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
        }
    };
    BaMenu.prototype.ngOnInit = function () {
        var _this = this;
        this._onRouteChange = this._router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (_this.menuItems) {
                    _this.selectMenuAndNotify();
                }
                else {
                    // on page load we have to wait as event is fired before menu elements are prepared
                    setTimeout(function () { return _this.selectMenuAndNotify(); });
                }
            }
        });
        this._menuItemsSub = this._service.menuItems.subscribe(this.updateMenu.bind(this));
    };
    BaMenu.prototype.ngOnDestroy = function () {
        this._onRouteChange.unsubscribe();
        this._menuItemsSub.unsubscribe();
    };
    BaMenu.prototype.hoverItem = function ($event) {
        this.showHoverElem = true;
        this.hoverElemHeight = $event.currentTarget.clientHeight;
        // TODO: get rid of magic 66 constant
        this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
    };
    BaMenu.prototype.toggleSubMenu = function ($event) {
        var submenu = jQuery($event.currentTarget).next();
        if (this.sidebarCollapsed) {
            this.expandMenu.emit(null);
            if (!$event.item.expanded) {
                $event.item.expanded = true;
            }
        }
        else {
            $event.item.expanded = !$event.item.expanded;
            submenu.slideToggle();
        }
        return false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], BaMenu.prototype, "sidebarCollapsed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], BaMenu.prototype, "menuHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BaMenu.prototype, "expandMenu", void 0);
    BaMenu = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ba-menu',
            template: __webpack_require__(/*! ./baMenu.html */ "./src/app/theme/components/baMenu/baMenu.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["BaMenuService"], _global_state__WEBPACK_IMPORTED_MODULE_4__["GlobalState"]])
    ], BaMenu);
    return BaMenu;
}());



/***/ }),

/***/ "./src/app/theme/components/baMenu/baMenu.html":
/*!*****************************************************!*\
  !*** ./src/app/theme/components/baMenu/baMenu.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"al-sidebar\" (mouseleave)=\"hoverElemTop=outOfArea\" sidebarResize>\r\n  <ul id=\"al-sidebar-list\" class=\"al-sidebar-list\" baSlimScroll [baSlimScrollOptions]=\"{height: menuHeight}\">\r\n    <ba-menu-item\r\n      [menuItem]=\"item\"\r\n      (itemHover)=\"hoverItem($event)\"\r\n      (toggleSubMenu)=\"toggleSubMenu($event)\"\r\n      *ngFor=\"let item of menuItems\"></ba-menu-item>\r\n  </ul>\r\n  <div class=\"sidebar-hover-elem\" [ngStyle]=\"{top: hoverElemTop + 'px', height: hoverElemHeight + 'px'}\"\r\n       [ngClass]=\"{'show-hover-elem': showHoverElem }\"></div>\r\n</aside>\r\n"

/***/ }),

/***/ "./src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BaMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaMenuItem", function() { return BaMenuItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var style_loader_baMenuItem_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-loader!./baMenuItem.scss */ "./node_modules/style-loader/index.js!./src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.scss");
/* harmony import */ var style_loader_baMenuItem_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(style_loader_baMenuItem_scss__WEBPACK_IMPORTED_MODULE_2__);



var BaMenuItem = /** @class */ (function () {
    function BaMenuItem() {
        this.child = false;
        this.itemHover = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.toggleSubMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BaMenuItem.prototype.onHoverItem = function ($event, item) {
        this.itemHover.emit($event);
    };
    BaMenuItem.prototype.onToggleSubMenu = function ($event, item) {
        $event.item = item;
        this.toggleSubMenu.emit($event);
        return false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BaMenuItem.prototype, "menuItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], BaMenuItem.prototype, "child", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BaMenuItem.prototype, "itemHover", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BaMenuItem.prototype, "toggleSubMenu", void 0);
    BaMenuItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ba-menu-item',
            template: __webpack_require__(/*! ./baMenuItem.html */ "./src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.html")
        })
    ], BaMenuItem);
    return BaMenuItem;
}());



/***/ }),

/***/ "./src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.html":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li *ngIf=\"!menuItem.hidden\" [title]=\"menuItem.title\" [ngClass]=\"{'al-sidebar-list-item': !child, 'ba-sidebar-sublist-item': child, 'selected': menuItem.selected && !menuItem.expanded, 'with-sub-menu': menuItem.children, 'ba-sidebar-item-expanded': menuItem.expanded}\">\r\n\r\n  <a *ngIf=\"!menuItem.children && !menuItem.url && !menuItem.hidden\" (mouseenter)=\"onHoverItem($event, menuItem)\" [routerLink]=\"menuItem.route.paths\" class=\"al-sidebar-list-link\">\r\n    <i *ngIf=\"menuItem.icon\" class=\"{{ menuItem.icon }}\"></i><span>{{ menuItem.title }}</span>\r\n  </a>\r\n\r\n  <a *ngIf=\"!menuItem.children && menuItem.url  && !menuItem.hidden\" (mouseenter)=\"onHoverItem($event, menuItem)\" [href]=\"menuItem.url\" [target]=\"menuItem.target\" class=\"al-sidebar-list-link\">\r\n    <i *ngIf=\"menuItem.icon\" class=\"{{ menuItem.icon }}\"></i><span>{{ menuItem.title }}</span>\r\n  </a>\r\n\r\n  <a *ngIf=\"menuItem.children  && !menuItem.hidden\" (mouseenter)=\"onHoverItem($event, menuItem)\" href (click)=\"onToggleSubMenu($event, menuItem)\" class=\"al-sidebar-list-link\">\r\n    <i *ngIf=\"menuItem.icon\" class=\"{{ menuItem.icon }}\"></i><span>{{ menuItem.title }}</span>\r\n    <b class=\"fa fa-angle-down\" [ngClass]=\"{'fa-angle-up': menuItem.expanded}\"></b>\r\n  </a>\r\n\r\n  <ul *ngIf=\"menuItem.children  && !menuItem.hidden\" class=\"al-sidebar-sublist\" [ngClass]=\"{'slide-right': menuItem.slideRight}\">\r\n    <ba-menu-item [menuItem]=\"subItem\"\r\n                  [child]=\"true\"\r\n                  (itemHover)=\"onHoverItem($event)\"\r\n                  (toggleSubMenu)=\"onToggleSubMenu($event, subItem)\"\r\n                  *ngFor=\"let subItem of menuItem.children\"></ba-menu-item>\r\n  </ul>\r\n\r\n</li>\r\n"

/***/ }),

/***/ "./src/app/theme/components/baMenu/components/baMenuItem/index.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/components/baMenu/components/baMenuItem/index.ts ***!
  \************************************************************************/
/*! exports provided: BaMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baMenuItem_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baMenuItem.component */ "./src/app/theme/components/baMenu/components/baMenuItem/baMenuItem.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaMenuItem", function() { return _baMenuItem_component__WEBPACK_IMPORTED_MODULE_0__["BaMenuItem"]; });




/***/ }),

/***/ "./src/app/theme/components/baMenu/index.ts":
/*!**************************************************!*\
  !*** ./src/app/theme/components/baMenu/index.ts ***!
  \**************************************************/
/*! exports provided: BaMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baMenu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baMenu.component */ "./src/app/theme/components/baMenu/baMenu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaMenu", function() { return _baMenu_component__WEBPACK_IMPORTED_MODULE_0__["BaMenu"]; });




/***/ }),

/***/ "./src/app/theme/components/baMsgCenter/baMsgCenter.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/components/baMsgCenter/baMsgCenter.component.ts ***!
  \***********************************************************************/
/*! exports provided: BaMsgCenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaMsgCenter", function() { return BaMsgCenter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _baMsgCenter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baMsgCenter.service */ "./src/app/theme/components/baMsgCenter/baMsgCenter.service.ts");



var BaMsgCenter = /** @class */ (function () {
    function BaMsgCenter() {
    }
    BaMsgCenter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ba-msg-center',
            providers: [_baMsgCenter_service__WEBPACK_IMPORTED_MODULE_2__["BaMsgCenterService"]],
            styles: [__webpack_require__(/*! ./baMsgCenter.scss */ "./src/app/theme/components/baMsgCenter/baMsgCenter.scss")],
            template: __webpack_require__(/*! ./baMsgCenter.html */ "./src/app/theme/components/baMsgCenter/baMsgCenter.html")
        })
    ], BaMsgCenter);
    return BaMsgCenter;
}());



/***/ }),

/***/ "./src/app/theme/components/baMsgCenter/baMsgCenter.html":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/baMsgCenter/baMsgCenter.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ul class=\"al-msg-center clearfix\">\r\n  <li class=\"dropdown\">\r\n    <a href class=\"dropdown-toggle\" id=\"msg-dd1\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n      <i class=\"fa fa-bell-o\"></i><span>5</span>\r\n\r\n      <div class=\"notification-ring\"></div>\r\n    </a>\r\n\r\n    <div class=\"top-dropdown-menu dropdown-menu\" aria-labelledby=\"msg-dd1\">\r\n      <i class=\"dropdown-arr\"></i>\r\n\r\n      <div class=\"header clearfix\">\r\n        <strong>Notifications</strong>\r\n        <a href>Mark All as Read</a>\r\n        <a href>Settings</a>\r\n      </div>\r\n      <div class=\"msg-list\">\r\n        <a *ngFor=\"let msg of notifications\" href class=\"clearfix\">\r\n          <div class=\"img-area\"><img [ngClass]=\"{'photo-msg-item': !msg.image}\"\r\n                                     src=\"{{ ( msg.image ||  (msg.name | baProfilePicture)) }}\"></div>\r\n          <div class=\"msg-area\">\r\n            <div>{{ msg.text }}</div>\r\n            <span>{{ msg.time }}</span>\r\n          </div>\r\n        </a>\r\n      </div>\r\n      <a href>See all notifications</a>\r\n    </div>\r\n  </li>\r\n  <li class=\"dropdown\">\r\n    <a href class=\"msg dropdown-toggle\" id=\"msg-dd2\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n      <i class=\"fa fa-envelope-o\"></i><span>5</span>\r\n      <div class=\"notification-ring\"></div>\r\n    </a>\r\n    <div class=\"top-dropdown-menu dropdown-menu\" aria-labelledby=\"msg-dd2\">\r\n      <i class=\"dropdown-arr\"></i>\r\n      <div class=\"header clearfix\">\r\n        <strong>Messages</strong>\r\n        <a href>Mark All as Read</a>\r\n        <a href>Settings</a>\r\n      </div>\r\n      <div class=\"msg-list\">\r\n        <a *ngFor=\"let msg of messages\" href class=\"clearfix\">\r\n          <div class=\"img-area\"><img [ngClass]=\"{'photo-msg-item': !msg.image}\"\r\n                                     src=\"{{ ( msg.image ||  (msg.name | baProfilePicture)) }}\"></div>\r\n          <div class=\"msg-area\">\r\n            <div>{{ msg.text }}</div>\r\n            <span>{{ msg.time }}</span>\r\n          </div>\r\n        </a>\r\n      </div>\r\n      <a href>See all messages</a>\r\n    </div>\r\n  </li>\r\n</ul> -->\r\n"

/***/ }),

/***/ "./src/app/theme/components/baMsgCenter/baMsgCenter.scss":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/baMsgCenter/baMsgCenter.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes pulsate{30%{-webkit-transform:scale(0.1, 0.1);opacity:0.0}35%{opacity:1.0}40%{-webkit-transform:scale(1.2, 1.2);opacity:0.0}}.al-msg-center{float:right;padding:0;list-style:none;margin:13px 47px 0 0}.al-msg-center li{list-style:none;float:left;margin-left:30px}.al-msg-center li:first-child{margin-left:0}.al-msg-center li>a{color:#fff;text-decoration:none;font-size:13px;position:relative}.al-msg-center li>a span{display:inline-block;min-width:10px;padding:2px 4px 2px 4px;color:#fff;vertical-align:baseline;white-space:nowrap;text-align:center;border-radius:13px;text-shadow:none;line-height:11px;background-color:#e85656;position:absolute;top:-5px;right:-14px;font-size:11px}.al-msg-center li>a .notification-ring{border:1px solid #e85656;border-radius:100px;height:40px;width:40px;position:absolute;top:-18px;right:-27px;-webkit-animation:pulsate 8s ease-out;animation:pulsate 8s ease-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;opacity:0.0}.al-msg-center li>a:hover{color:#e85656}.al-msg-center li>a:hover.msg{color:#209e91}.al-msg-center li>a.msg span{background-color:#209e91}.al-msg-center li>a.msg .notification-ring{border-color:#209e91}.al-msg-center li.open>a{color:#e85656}.al-msg-center li.open>a.msg{color:#209e91}@media (max-width: 435px){.al-msg-center{margin-right:20px}.al-msg-center li{margin-left:20px}.al-msg-center li:first-child{margin-left:0}}.msg-block-header{display:inline-block;padding:0;font-size:13px;margin:0 0 0 6px}.top-dropdown-menu{width:316px;left:auto;right:-47px;top:26px}.top-dropdown-menu ::-webkit-scrollbar{width:1em;height:1em}.top-dropdown-menu ::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.5);cursor:pointer}.top-dropdown-menu ::-webkit-scrollbar-track{background:#fff}.top-dropdown-menu body{scrollbar-face-color:rgba(0,0,0,0.5);scrollbar-track-color:#fff}.top-dropdown-menu .header{padding:10px 12px;border-bottom:1px solid #fff;font-size:12px}.top-dropdown-menu .header strong{float:left;color:#7d7d7d}.top-dropdown-menu .header>a{float:right;margin-left:12px;text-decoration:none}.top-dropdown-menu .header>a:hover{color:#7d7d7d}.top-dropdown-menu .msg-list{max-height:296px;overflow:scroll;overflow-x:hidden}.top-dropdown-menu .msg-list>a{border-top:1px solid #fff;padding:10px 12px;display:block;text-decoration:none;color:#7d7d7d;font-size:12px}.top-dropdown-menu .msg-list>a:first-child{border-top:none}.top-dropdown-menu .msg-list>a .img-area{float:left;width:36px}.top-dropdown-menu .msg-list>a .img-area img{width:36px;height:36px}.top-dropdown-menu .msg-list>a .img-area img.photo-msg-item{border-radius:18px}.top-dropdown-menu .msg-list>a .img-area>div{width:36px;height:36px;border-radius:4px;font-size:24px;text-align:center}.top-dropdown-menu .msg-list>a .img-area>div.comments{color:#dfb81c}.top-dropdown-menu .msg-list>a .img-area>div.orders{color:#dfb81c}.top-dropdown-menu .msg-list>a .img-area>div i{width:36px;line-height:36px}.top-dropdown-menu .msg-list>a .msg-area{float:right;width:230px}.top-dropdown-menu .msg-list>a .msg-area div{max-height:34px;overflow:hidden;text-overflow:ellipsis}.top-dropdown-menu .msg-list>a .msg-area span{font-style:italic;text-align:right;display:block;font-size:11px}.top-dropdown-menu .msg-list>a:hover{background:#E2F0FF}.top-dropdown-menu>a{border-top:1px solid #fff;display:block;text-align:center;padding:10px;font-size:12px;text-decoration:none}.top-dropdown-menu>a:hover{color:#7d7d7d}.top-dropdown-menu.profile-dropdown{width:145px;top:55px;right:-25px}.top-dropdown-menu.profile-dropdown a{text-align:left;border:none;text-decoration:none;color:#7d7d7d;padding:4px 16px 4px 20px}.top-dropdown-menu.profile-dropdown a.signout{border-top:1px solid #fff}.top-dropdown-menu.profile-dropdown a i{margin-right:10px}.top-dropdown-menu.profile-dropdown a:hover{background:#f4fcff}.top-dropdown-menu.profile-dropdown i.dropdown-arr{right:25px}.top-dropdown-menu i.dropdown-arr{position:absolute;top:-22px;right:42px;display:block;width:0;height:0;border:11px solid transparent;border-bottom-color:rgba(0,0,0,0.15)}.top-dropdown-menu i.dropdown-arr:after{top:-9px;left:0px;margin-left:-10px;content:\" \";position:absolute;display:block;width:0;height:0;border:10px solid transparent;border-bottom-color:#fff}@media (max-width: 415px){.top-dropdown-menu{right:-81px}.top-dropdown-menu i.dropdown-arr{right:75px}}\n"

/***/ }),

/***/ "./src/app/theme/components/baMsgCenter/baMsgCenter.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/baMsgCenter/baMsgCenter.service.ts ***!
  \*********************************************************************/
/*! exports provided: BaMsgCenterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaMsgCenterService", function() { return BaMsgCenterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BaMsgCenterService = /** @class */ (function () {
    function BaMsgCenterService() {
        this._notifications = [
            {
                name: 'Vlad',
                text: 'Vlad posted a new article.',
                time: '1 min ago'
            },
            {
                name: 'Kostya',
                text: 'Kostya changed his contact information.',
                time: '2 hrs ago'
            },
            {
                image: 'assets/img/shopping-cart.svg',
                text: 'New orders received.',
                time: '5 hrs ago'
            },
            {
                name: 'Andrey',
                text: 'Andrey replied to your comment.',
                time: '1 day ago'
            },
            {
                name: 'Nasta',
                text: 'Today is Nasta\'s birthday.',
                time: '2 days ago'
            },
            {
                image: 'assets/img/comments.svg',
                text: 'New comments on your post.',
                time: '3 days ago'
            },
            {
                name: 'Kostya',
                text: 'Kostya invited you to join the event.',
                time: '1 week ago'
            }
        ];
        this._messages = [
            {
                name: 'Nasta',
                text: 'After you get up and running, you can place Font Awesome icons just about...',
                time: '1 min ago'
            },
            {
                name: 'Vlad',
                text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
                time: '2 hrs ago'
            },
            {
                name: 'Kostya',
                text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
                time: '10 hrs ago'
            },
            {
                name: 'Andrey',
                text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
                time: '1 day ago'
            },
            {
                name: 'Nasta',
                text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
                time: '1 day ago'
            },
            {
                name: 'Kostya',
                text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
                time: '2 days ago'
            },
            {
                name: 'Vlad',
                text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
                time: '1 week ago'
            }
        ];
    }
    BaMsgCenterService.prototype.getMessages = function () {
        return this._messages;
    };
    BaMsgCenterService.prototype.getNotifications = function () {
        return this._notifications;
    };
    BaMsgCenterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BaMsgCenterService);
    return BaMsgCenterService;
}());



/***/ }),

/***/ "./src/app/theme/components/baMsgCenter/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/components/baMsgCenter/index.ts ***!
  \*******************************************************/
/*! exports provided: BaMsgCenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baMsgCenter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baMsgCenter.component */ "./src/app/theme/components/baMsgCenter/baMsgCenter.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaMsgCenter", function() { return _baMsgCenter_component__WEBPACK_IMPORTED_MODULE_0__["BaMsgCenter"]; });




/***/ }),

/***/ "./src/app/theme/components/baMultiCheckbox/baMultiCheckbox.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/components/baMultiCheckbox/baMultiCheckbox.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BaMultiCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaMultiCheckbox", function() { return BaMultiCheckbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var BaMultiCheckbox = /** @class */ (function () {
    function BaMultiCheckbox(state) {
        this.model = state;
        state.valueAccessor = this;
    }
    BaMultiCheckbox.prototype.getProp = function (item, propName) {
        var prop = this.propertiesMapping[propName];
        if (!prop) {
            return item[propName];
        }
        else if (typeof prop === 'function') {
            return prop(item);
        }
        return item[prop];
    };
    BaMultiCheckbox.prototype.onChange = function (value) { };
    BaMultiCheckbox.prototype.onTouch = function (value) { };
    BaMultiCheckbox.prototype.writeValue = function (state) {
        this.state = state;
    };
    BaMultiCheckbox.prototype.registerOnChange = function (fn) {
        this.onChange = function (state) {
            this.writeValue(state);
            this.model.viewToModelUpdate(state);
        };
    };
    BaMultiCheckbox.prototype.registerOnTouched = function (fn) { this.onTouch = fn; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BaMultiCheckbox.prototype, "baMultiCheckboxClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BaMultiCheckbox.prototype, "propertiesMapping", void 0);
    BaMultiCheckbox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ba-multi-checkbox[ngModel]',
            template: __webpack_require__(/*! ./baMultiCheckbox.html */ "./src/app/theme/components/baMultiCheckbox/baMultiCheckbox.html"),
            providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]])
    ], BaMultiCheckbox);
    return BaMultiCheckbox;
}());



/***/ }),

/***/ "./src/app/theme/components/baMultiCheckbox/baMultiCheckbox.html":
/*!***********************************************************************!*\
  !*** ./src/app/theme/components/baMultiCheckbox/baMultiCheckbox.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"{{baMultiCheckboxClass}}\">\r\n  <ba-checkbox *ngFor=\"let item of state\"\r\n               [(ngModel)]=\"item[propertiesMapping.model]\"\r\n               [baCheckboxClass]=\"getProp(item, 'baCheckboxClass')\"\r\n               [label]=\"getProp(item, 'label')\"\r\n               [disabled]=\"getProp(item, 'disabled')\"\r\n               [value]=\"getProp(item, 'value')\"\r\n               id=\"{{getProp(item, 'id')}}\">\r\n  </ba-checkbox>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/components/baMultiCheckbox/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/theme/components/baMultiCheckbox/index.ts ***!
  \***********************************************************/
/*! exports provided: BaMultiCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baMultiCheckbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baMultiCheckbox.component */ "./src/app/theme/components/baMultiCheckbox/baMultiCheckbox.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaMultiCheckbox", function() { return _baMultiCheckbox_component__WEBPACK_IMPORTED_MODULE_0__["BaMultiCheckbox"]; });




/***/ }),

/***/ "./src/app/theme/components/baPageTop/baPageTop.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/baPageTop/baPageTop.component.ts ***!
  \*******************************************************************/
/*! exports provided: BaPageTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaPageTop", function() { return BaPageTop; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global.state */ "./src/app/global.state.ts");
/* harmony import */ var style_loader_baPageTop_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-loader!./baPageTop.scss */ "./node_modules/style-loader/index.js!./src/app/theme/components/baPageTop/baPageTop.scss");
/* harmony import */ var style_loader_baPageTop_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(style_loader_baPageTop_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_repositories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/repositories */ "./src/app/common/repositories/index.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_common_services_cache_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/services/cache.service */ "./src/app/common/services/cache.service.ts");









var BaPageTop = /** @class */ (function () {
    function BaPageTop(_state, _authService, appService, router, cache, service) {
        var _this = this;
        this._state = _state;
        this._authService = _authService;
        this.appService = appService;
        this.router = router;
        this.cache = cache;
        this.service = service;
        this.hasNewNotification = false;
        this.isScrolled = false;
        this.isMenuCollapsed = false;
        var setting = _authService.getSetting();
        this.EnableTreatment = setting.EnableTreatment;
        this.EnableAppointment = setting.EnableAppointment;
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
        if (_authService.getUserProfile()) {
            this.user = _authService.getUserProfile().UserId;
        }
        this.getSmsCredit();
    }
    BaPageTop.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.notification$.subscribe(function (data) {
            if (data.nType == 0) {
                _this.hasNewNotification = true;
                _this.playNotificationSound();
            }
        });
    };
    BaPageTop.prototype.playNotificationSound = function () {
        if (this.notificationAudio && this.notificationAudio.nativeElement) {
            this.notificationAudio.nativeElement.play().catch(function (err) { return console.warn('Audio play failed:', err); });
        }
    };
    BaPageTop.prototype.clearNotification = function () {
        this.hasNewNotification = false;
    };
    BaPageTop.prototype.getSmsCredit = function () {
        var _this = this;
        this.service.getSmsCredit().subscribe(function (data) {
            if (data.result)
                _this.smsCredits = data.result.credits_available;
        }, function (err) { return console.log(err); });
    };
    BaPageTop.prototype.toggleMenu = function () {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
        return false;
    };
    BaPageTop.prototype.LogoutClick = function () {
        var _this = this;
        setTimeout(function () {
            _this._authService.removeAuth();
            _this.cache.clearAll();
        }, 1000);
        this.router.navigate(['/login']);
    };
    BaPageTop.prototype.scrolledChanged = function (isScrolled) {
        this.isScrolled = isScrolled;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('notificationAudio'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BaPageTop.prototype, "notificationAudio", void 0);
    BaPageTop = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ba-page-top',
            template: __webpack_require__(/*! ./baPageTop.html */ "./src/app/theme/components/baPageTop/baPageTop.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_state__WEBPACK_IMPORTED_MODULE_2__["GlobalState"],
            _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _app_service__WEBPACK_IMPORTED_MODULE_7__["AppState"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_common_services_cache_service__WEBPACK_IMPORTED_MODULE_8__["TTLCacheService"],
            _common_repositories__WEBPACK_IMPORTED_MODULE_6__["MasterRepo"]])
    ], BaPageTop);
    return BaPageTop;
}());



/***/ }),

/***/ "./src/app/theme/components/baPageTop/baPageTop.html":
/*!***********************************************************!*\
  !*** ./src/app/theme/components/baPageTop/baPageTop.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-top clearfix\" baScrollPosition maxHeight=\"50\" (scrollChange)=\"scrolledChanged($event)\"\r\n  [ngClass]=\"{scrolled: isScrolled}\">\r\n  <a *ngIf=\"EnableTreatment && !EnableAppointment\" routerLink=\"/pages/schedule/treatment-list\"\r\n    class=\"al-logo clearfix\"><span>IMS</span>-AppointX</a>\r\n  <a *ngIf=\"EnableAppointment\" routerLink=\"/pages/schedule/mastersche\"\r\n    class=\"al-logo clearfix\"><span>IMS</span>-AppointX</a>\r\n  <a href (click)=\"toggleMenu()\" class=\"collapse-menu-link ion-navicon\"></a>\r\n\r\n  <div class=\"search\">\r\n    <i class=\"ion-ios-search-strong\" ng-click=\"startSearch()\"></i>\r\n    <input id=\"searchInput\" type=\"text\" placeholder=\"Search for...\">\r\n  </div>\r\n\r\n  <div class=\"user-profile clearfix\">\r\n    <a class=\"userLink\">User :{{user}}<br>SMS Credits : {{smsCredits}}</a>\r\n\r\n    <div style=\"vertical-align: middle;\" class=\"btn-group\" dropdown>\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"LogoutClick()\">\r\n        Logout\r\n      </button>\r\n      <ul class=\"dropdown-menu\" dropdownMenu>\r\n        <li class=\"dropdown-item\"><a href=\"#\">Action</a></li>\r\n        <li class=\"dropdown-item\"><a href=\"#\">Another action</a></li>\r\n        <li class=\"dropdown-item\"><a href=\"#\">Something else here</a></li>\r\n        <li class=\"dropdown-divider\"></li>\r\n        <li class=\"dropdown-item\"><a href=\"#\">Separated link</a></li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div style=\"float: right;margin-left: 10px;margin-top: 2px\">\r\n      <a  class=\"notification notification-sticky\">\r\n        <span><i class=\"fa fa-bell\"\r\n          [ngClass]=\"{ 'notified': hasNewNotification }\"\r\n          (click)=\"clearNotification()\">\r\n       </i>\r\n       </span>\r\n        </a>\r\n    </div>\r\n   \r\n    <audio #notificationAudio src=\"assets/sounds/notification-sound.mp3\"></audio>\r\n\r\n    <!--<div class=\"dropdown al-user-profile\">\r\n      <a class=\"profile-toggle-link dropdown-toggle\" id=\"user-profile-dd\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n        <img src=\"{{ ( 'Nasta' | baProfilePicture ) }}\">\r\n      </a>\r\n      <ul class=\"dropdown-menu top-dropdown-menu profile-dropdown\" aria-labelledby=\"user-profile-dd\">\r\n        <li class=\"dropdown-item\"><i class=\"dropdown-arr\"></i></li>\r\n        <li class=\"dropdown-item\"><a href><i class=\"fa fa-user\"></i>Profile</a></li>\r\n        <li class=\"dropdown-item\"><a href><i class=\"fa fa-cog\"></i>Settings</a></li>\r\n        <li class=\"dropdown-item\"><a href class=\"signout\"><i class=\"fa fa-power-off\"></i>Sign out</a></li>\r\n      </ul>\r\n    </div>!-->\r\n    <ba-msg-center></ba-msg-center>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/theme/components/baPageTop/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/components/baPageTop/index.ts ***!
  \*****************************************************/
/*! exports provided: BaPageTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baPageTop_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baPageTop.component */ "./src/app/theme/components/baPageTop/baPageTop.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaPageTop", function() { return _baPageTop_component__WEBPACK_IMPORTED_MODULE_0__["BaPageTop"]; });




/***/ }),

/***/ "./src/app/theme/components/baSidebar/baSidebar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/baSidebar/baSidebar.component.ts ***!
  \*******************************************************************/
/*! exports provided: BaSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaSidebar", function() { return BaSidebar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../global.state */ "./src/app/global.state.ts");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../theme */ "./src/app/theme/index.ts");
/* harmony import */ var style_loader_baSidebar_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! style-loader!./baSidebar.scss */ "./node_modules/style-loader/index.js!./src/app/theme/components/baSidebar/baSidebar.scss");
/* harmony import */ var style_loader_baSidebar_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(style_loader_baSidebar_scss__WEBPACK_IMPORTED_MODULE_4__);





var BaSidebar = /** @class */ (function () {
    function BaSidebar(_elementRef, _state) {
        var _this = this;
        this._elementRef = _elementRef;
        this._state = _state;
        this.isMenuCollapsed = false;
        this.isMenuShouldCollapsed = false;
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
    BaSidebar.prototype.ngOnInit = function () {
        if (this._shouldMenuCollapse()) {
            this.menuCollapse();
        }
    };
    BaSidebar.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.updateSidebarHeight(); });
    };
    BaSidebar.prototype.onWindowResize = function () {
        var isMenuShouldCollapsed = this._shouldMenuCollapse();
        if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
            this.menuCollapseStateChange(isMenuShouldCollapsed);
        }
        this.isMenuShouldCollapsed = isMenuShouldCollapsed;
        this.updateSidebarHeight();
    };
    BaSidebar.prototype.menuExpand = function () {
        this.menuCollapseStateChange(false);
    };
    BaSidebar.prototype.menuCollapse = function () {
        this.menuCollapseStateChange(true);
    };
    BaSidebar.prototype.menuCollapseStateChange = function (isCollapsed) {
        this.isMenuCollapsed = isCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    };
    BaSidebar.prototype.updateSidebarHeight = function () {
        // TODO: get rid of magic 84 constant
        this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
    };
    BaSidebar.prototype._shouldMenuCollapse = function () {
        return window.innerWidth <= _theme__WEBPACK_IMPORTED_MODULE_3__["layoutSizes"].resWidthCollapseSidebar;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], BaSidebar.prototype, "onWindowResize", null);
    BaSidebar = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ba-sidebar',
            template: __webpack_require__(/*! ./baSidebar.html */ "./src/app/theme/components/baSidebar/baSidebar.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _global_state__WEBPACK_IMPORTED_MODULE_2__["GlobalState"]])
    ], BaSidebar);
    return BaSidebar;
}());



/***/ }),

/***/ "./src/app/theme/components/baSidebar/baSidebar.html":
/*!***********************************************************!*\
  !*** ./src/app/theme/components/baSidebar/baSidebar.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"al-sidebar\" sidebarResize>\r\n  <ba-menu [menuHeight]=\"menuHeight\"\r\n           [sidebarCollapsed]=\"isMenuCollapsed\"\r\n           (expandMenu)=\"menuExpand()\"></ba-menu>\r\n</aside>\r\n"

/***/ }),

/***/ "./src/app/theme/components/baSidebar/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/components/baSidebar/index.ts ***!
  \*****************************************************/
/*! exports provided: BaSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baSidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baSidebar.component */ "./src/app/theme/components/baSidebar/baSidebar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaSidebar", function() { return _baSidebar_component__WEBPACK_IMPORTED_MODULE_0__["BaSidebar"]; });




/***/ }),

/***/ "./src/app/theme/components/index.ts":
/*!*******************************************!*\
  !*** ./src/app/theme/components/index.ts ***!
  \*******************************************/
/*! exports provided: BaPageTop, BaMsgCenter, BaSidebar, BaMenuItem, BaMenu, BaContentTop, BaCard, BaAmChart, BaChartistChart, BaBackTop, BaFullCalendar, BaCheckbox, BaMultiCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baPageTop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baPageTop */ "./src/app/theme/components/baPageTop/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaPageTop", function() { return _baPageTop__WEBPACK_IMPORTED_MODULE_0__["BaPageTop"]; });

/* harmony import */ var _baMsgCenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baMsgCenter */ "./src/app/theme/components/baMsgCenter/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaMsgCenter", function() { return _baMsgCenter__WEBPACK_IMPORTED_MODULE_1__["BaMsgCenter"]; });

/* harmony import */ var _baSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baSidebar */ "./src/app/theme/components/baSidebar/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaSidebar", function() { return _baSidebar__WEBPACK_IMPORTED_MODULE_2__["BaSidebar"]; });

/* harmony import */ var _baMenu_components_baMenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baMenu/components/baMenuItem */ "./src/app/theme/components/baMenu/components/baMenuItem/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaMenuItem", function() { return _baMenu_components_baMenuItem__WEBPACK_IMPORTED_MODULE_3__["BaMenuItem"]; });

/* harmony import */ var _baMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./baMenu */ "./src/app/theme/components/baMenu/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaMenu", function() { return _baMenu__WEBPACK_IMPORTED_MODULE_4__["BaMenu"]; });

/* harmony import */ var _baContentTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./baContentTop */ "./src/app/theme/components/baContentTop/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaContentTop", function() { return _baContentTop__WEBPACK_IMPORTED_MODULE_5__["BaContentTop"]; });

/* harmony import */ var _baCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./baCard */ "./src/app/theme/components/baCard/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaCard", function() { return _baCard__WEBPACK_IMPORTED_MODULE_6__["BaCard"]; });

/* harmony import */ var _baAmChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./baAmChart */ "./src/app/theme/components/baAmChart/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaAmChart", function() { return _baAmChart__WEBPACK_IMPORTED_MODULE_7__["BaAmChart"]; });

/* harmony import */ var _baChartistChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./baChartistChart */ "./src/app/theme/components/baChartistChart/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaChartistChart", function() { return _baChartistChart__WEBPACK_IMPORTED_MODULE_8__["BaChartistChart"]; });

/* harmony import */ var _baBackTop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./baBackTop */ "./src/app/theme/components/baBackTop/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaBackTop", function() { return _baBackTop__WEBPACK_IMPORTED_MODULE_9__["BaBackTop"]; });

/* harmony import */ var _baFullCalendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./baFullCalendar */ "./src/app/theme/components/baFullCalendar/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaFullCalendar", function() { return _baFullCalendar__WEBPACK_IMPORTED_MODULE_10__["BaFullCalendar"]; });

/* harmony import */ var _baCheckbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./baCheckbox */ "./src/app/theme/components/baCheckbox/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaCheckbox", function() { return _baCheckbox__WEBPACK_IMPORTED_MODULE_11__["BaCheckbox"]; });

/* harmony import */ var _baMultiCheckbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./baMultiCheckbox */ "./src/app/theme/components/baMultiCheckbox/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaMultiCheckbox", function() { return _baMultiCheckbox__WEBPACK_IMPORTED_MODULE_12__["BaMultiCheckbox"]; });
















/***/ }),

/***/ "./src/app/theme/directives/baScrollPosition/baScrollPosition.directive.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/directives/baScrollPosition/baScrollPosition.directive.ts ***!
  \*********************************************************************************/
/*! exports provided: BaScrollPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaScrollPosition", function() { return BaScrollPosition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BaScrollPosition = /** @class */ (function () {
    function BaScrollPosition() {
        this.scrollChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BaScrollPosition.prototype.ngOnInit = function () {
        this.onWindowScroll();
    };
    BaScrollPosition.prototype.onWindowScroll = function () {
        var isScrolled = window.scrollY > this.maxHeight;
        if (isScrolled !== this._isScrolled) {
            this._isScrolled = isScrolled;
            this.scrollChange.emit(isScrolled);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], BaScrollPosition.prototype, "maxHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BaScrollPosition.prototype, "scrollChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], BaScrollPosition.prototype, "onWindowScroll", null);
    BaScrollPosition = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[baScrollPosition]'
        })
    ], BaScrollPosition);
    return BaScrollPosition;
}());



/***/ }),

/***/ "./src/app/theme/directives/baScrollPosition/index.ts":
/*!************************************************************!*\
  !*** ./src/app/theme/directives/baScrollPosition/index.ts ***!
  \************************************************************/
/*! exports provided: BaScrollPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baScrollPosition_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baScrollPosition.directive */ "./src/app/theme/directives/baScrollPosition/baScrollPosition.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaScrollPosition", function() { return _baScrollPosition_directive__WEBPACK_IMPORTED_MODULE_0__["BaScrollPosition"]; });




/***/ }),

/***/ "./src/app/theme/directives/baSlimScroll/baSlimScroll.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/directives/baSlimScroll/baSlimScroll.directive.ts ***!
  \*************************************************************************/
/*! exports provided: BaSlimScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaSlimScroll", function() { return BaSlimScroll; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery_slimscroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-slimscroll */ "./node_modules/jquery-slimscroll/jquery.slimscroll.js");
/* harmony import */ var jquery_slimscroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_slimscroll__WEBPACK_IMPORTED_MODULE_2__);



var BaSlimScroll = /** @class */ (function () {
    function BaSlimScroll(_elementRef) {
        this._elementRef = _elementRef;
    }
    BaSlimScroll.prototype.ngOnChanges = function (changes) {
        this._scroll();
    };
    BaSlimScroll.prototype._scroll = function () {
        this._destroy();
        this._init();
    };
    BaSlimScroll.prototype._init = function () {
        jQuery(this._elementRef.nativeElement).slimScroll(this.baSlimScrollOptions);
    };
    BaSlimScroll.prototype._destroy = function () {
        jQuery(this._elementRef.nativeElement).slimScroll({ destroy: true });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BaSlimScroll.prototype, "baSlimScrollOptions", void 0);
    BaSlimScroll = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[baSlimScroll]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], BaSlimScroll);
    return BaSlimScroll;
}());



/***/ }),

/***/ "./src/app/theme/directives/baSlimScroll/index.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/directives/baSlimScroll/index.ts ***!
  \********************************************************/
/*! exports provided: BaSlimScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baSlimScroll_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baSlimScroll.directive */ "./src/app/theme/directives/baSlimScroll/baSlimScroll.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaSlimScroll", function() { return _baSlimScroll_directive__WEBPACK_IMPORTED_MODULE_0__["BaSlimScroll"]; });




/***/ }),

/***/ "./src/app/theme/directives/baThemeRun/baThemeRun.directive.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/directives/baThemeRun/baThemeRun.directive.ts ***!
  \*********************************************************************/
/*! exports provided: BaThemeRun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaThemeRun", function() { return BaThemeRun; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme */ "./src/app/theme/index.ts");



var BaThemeRun = /** @class */ (function () {
    function BaThemeRun(_baConfig) {
        this._baConfig = _baConfig;
        this._classes = [];
    }
    BaThemeRun.prototype.ngOnInit = function () {
        this._assignTheme();
        this._assignMobile();
    };
    BaThemeRun.prototype._assignTheme = function () {
        this._addClass(this._baConfig.get().theme.name);
    };
    BaThemeRun.prototype._assignMobile = function () {
        if (Object(_theme__WEBPACK_IMPORTED_MODULE_2__["isMobile"])()) {
            this._addClass('mobile');
        }
    };
    BaThemeRun.prototype._addClass = function (cls) {
        this._classes.push(cls);
        this.classesString = this._classes.join(' ');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BaThemeRun.prototype, "classesString", void 0);
    BaThemeRun = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[baThemeRun]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme__WEBPACK_IMPORTED_MODULE_2__["BaThemeConfigProvider"]])
    ], BaThemeRun);
    return BaThemeRun;
}());



/***/ }),

/***/ "./src/app/theme/directives/baThemeRun/index.ts":
/*!******************************************************!*\
  !*** ./src/app/theme/directives/baThemeRun/index.ts ***!
  \******************************************************/
/*! exports provided: BaThemeRun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baThemeRun_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baThemeRun.directive */ "./src/app/theme/directives/baThemeRun/baThemeRun.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaThemeRun", function() { return _baThemeRun_directive__WEBPACK_IMPORTED_MODULE_0__["BaThemeRun"]; });




/***/ }),

/***/ "./src/app/theme/directives/index.ts":
/*!*******************************************!*\
  !*** ./src/app/theme/directives/index.ts ***!
  \*******************************************/
/*! exports provided: BaScrollPosition, BaThemeRun, BaSlimScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baScrollPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baScrollPosition */ "./src/app/theme/directives/baScrollPosition/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaScrollPosition", function() { return _baScrollPosition__WEBPACK_IMPORTED_MODULE_0__["BaScrollPosition"]; });

/* harmony import */ var _baThemeRun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baThemeRun */ "./src/app/theme/directives/baThemeRun/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaThemeRun", function() { return _baThemeRun__WEBPACK_IMPORTED_MODULE_1__["BaThemeRun"]; });

/* harmony import */ var _baSlimScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baSlimScroll */ "./src/app/theme/directives/baSlimScroll/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaSlimScroll", function() { return _baSlimScroll__WEBPACK_IMPORTED_MODULE_2__["BaSlimScroll"]; });






/***/ }),

/***/ "./src/app/theme/index.ts":
/*!********************************!*\
  !*** ./src/app/theme/index.ts ***!
  \********************************/
/*! exports provided: BaMenuService, IMAGES_ROOT, layoutSizes, layoutPaths, colorHelper, isMobile, BaThemeConfigProvider, BaThemeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/app/theme/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaMenuService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["BaMenuService"]; });

/* harmony import */ var _theme_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.constants */ "./src/app/theme/theme.constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IMAGES_ROOT", function() { return _theme_constants__WEBPACK_IMPORTED_MODULE_1__["IMAGES_ROOT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "layoutSizes", function() { return _theme_constants__WEBPACK_IMPORTED_MODULE_1__["layoutSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "layoutPaths", function() { return _theme_constants__WEBPACK_IMPORTED_MODULE_1__["layoutPaths"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorHelper", function() { return _theme_constants__WEBPACK_IMPORTED_MODULE_1__["colorHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return _theme_constants__WEBPACK_IMPORTED_MODULE_1__["isMobile"]; });

/* harmony import */ var _theme_configProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme.configProvider */ "./src/app/theme/theme.configProvider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaThemeConfigProvider", function() { return _theme_configProvider__WEBPACK_IMPORTED_MODULE_2__["BaThemeConfigProvider"]; });

/* harmony import */ var _theme_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme.config */ "./src/app/theme/theme.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaThemeConfig", function() { return _theme_config__WEBPACK_IMPORTED_MODULE_3__["BaThemeConfig"]; });







/***/ }),

/***/ "./src/app/theme/nga.module.ts":
/*!*************************************!*\
  !*** ./src/app/theme/nga.module.ts ***!
  \*************************************/
/*! exports provided: NgaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgaModule", function() { return NgaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme.config */ "./src/app/theme/theme.config.ts");
/* harmony import */ var _theme_configProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme.configProvider */ "./src/app/theme/theme.configProvider.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./src/app/theme/components/index.ts");
/* harmony import */ var _components_baCard_baCardBlur_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/baCard/baCardBlur.directive */ "./src/app/theme/components/baCard/baCardBlur.directive.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives */ "./src/app/theme/directives/index.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes */ "./src/app/theme/pipes/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services */ "./src/app/theme/services/index.ts");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./validators */ "./src/app/theme/validators/index.ts");
/* harmony import */ var _pipes_label_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/label.pipe */ "./src/app/theme/pipes/label.pipe.ts");














var NGA_COMPONENTS = [
    _components__WEBPACK_IMPORTED_MODULE_7__["BaAmChart"],
    _components__WEBPACK_IMPORTED_MODULE_7__["BaBackTop"],
    _components__WEBPACK_IMPORTED_MODULE_7__["BaCard"],
    _components__WEBPACK_IMPORTED_MODULE_7__["BaChartistChart"],
    _components__WEBPACK_IMPORTED_MODULE_7__["BaCheckbox"],
    _components__WEBPACK_IMPORTED_MODULE_7__["BaContentTop"],
    _components__WEBPACK_IMPORTED_MODULE_7__["BaFullCalendar"],
    _components__WEBPACK_IMPORTED_MODULE_7__["BaMenuItem"],
    _components__WEBPACK_IMPORTED_MODULE_7__["BaMenu"],
    _components__WEBPACK_IMPORTED_MODULE_7__["BaMsgCenter"],
    _components__WEBPACK_IMPORTED_MODULE_7__["BaMultiCheckbox"],
    _components__WEBPACK_IMPORTED_MODULE_7__["BaPageTop"],
    _components__WEBPACK_IMPORTED_MODULE_7__["BaSidebar"]
];
var NGA_DIRECTIVES = [
    _directives__WEBPACK_IMPORTED_MODULE_9__["BaScrollPosition"],
    _directives__WEBPACK_IMPORTED_MODULE_9__["BaSlimScroll"],
    _directives__WEBPACK_IMPORTED_MODULE_9__["BaThemeRun"],
    _components_baCard_baCardBlur_directive__WEBPACK_IMPORTED_MODULE_8__["BaCardBlur"]
];
var NGA_PIPES = [
    _pipes__WEBPACK_IMPORTED_MODULE_10__["BaAppPicturePipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_10__["BaKameleonPicturePipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_10__["BaProfilePicturePipe"],
    _pipes_label_pipe__WEBPACK_IMPORTED_MODULE_13__["LabelPipe"]
];
var NGA_SERVICES = [
    _services__WEBPACK_IMPORTED_MODULE_11__["BaImageLoaderService"],
    _services__WEBPACK_IMPORTED_MODULE_11__["BaThemePreloader"],
    _services__WEBPACK_IMPORTED_MODULE_11__["BaThemeSpinner"],
    _services__WEBPACK_IMPORTED_MODULE_11__["BaMenuService"]
];
var NGA_VALIDATORS = [
    _validators__WEBPACK_IMPORTED_MODULE_12__["EmailValidator"],
    _validators__WEBPACK_IMPORTED_MODULE_12__["EqualPasswordsValidator"],
    _validators__WEBPACK_IMPORTED_MODULE_12__["EditPasswordValidator"]
];
var NgaModule = /** @class */ (function () {
    function NgaModule() {
    }
    NgaModule_1 = NgaModule;
    NgaModule.forRoot = function () {
        return {
            ngModule: NgaModule_1,
            providers: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([
                _theme_configProvider__WEBPACK_IMPORTED_MODULE_6__["BaThemeConfigProvider"],
                _theme_config__WEBPACK_IMPORTED_MODULE_5__["BaThemeConfig"]
            ], NGA_VALIDATORS, NGA_SERVICES),
        };
    };
    var NgaModule_1;
    NgaModule = NgaModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](NGA_PIPES, NGA_DIRECTIVES, NGA_COMPONENTS),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            exports: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](NGA_PIPES, NGA_DIRECTIVES, NGA_COMPONENTS)
        })
    ], NgaModule);
    return NgaModule;
}());



/***/ }),

/***/ "./src/app/theme/pipes/baAppPicture/baAppPicture.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/pipes/baAppPicture/baAppPicture.pipe.ts ***!
  \***************************************************************/
/*! exports provided: BaAppPicturePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaAppPicturePipe", function() { return BaAppPicturePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme */ "./src/app/theme/index.ts");



var BaAppPicturePipe = /** @class */ (function () {
    function BaAppPicturePipe() {
    }
    BaAppPicturePipe.prototype.transform = function (input) {
        return _theme__WEBPACK_IMPORTED_MODULE_2__["layoutPaths"].images.root + input;
    };
    BaAppPicturePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'baAppPicture' })
    ], BaAppPicturePipe);
    return BaAppPicturePipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/baAppPicture/index.ts":
/*!***************************************************!*\
  !*** ./src/app/theme/pipes/baAppPicture/index.ts ***!
  \***************************************************/
/*! exports provided: BaAppPicturePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baAppPicture_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baAppPicture.pipe */ "./src/app/theme/pipes/baAppPicture/baAppPicture.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaAppPicturePipe", function() { return _baAppPicture_pipe__WEBPACK_IMPORTED_MODULE_0__["BaAppPicturePipe"]; });




/***/ }),

/***/ "./src/app/theme/pipes/baKameleonPicture/baKameleonPicture.pipe.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/pipes/baKameleonPicture/baKameleonPicture.pipe.ts ***!
  \*************************************************************************/
/*! exports provided: BaKameleonPicturePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaKameleonPicturePipe", function() { return BaKameleonPicturePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme */ "./src/app/theme/index.ts");



var BaKameleonPicturePipe = /** @class */ (function () {
    function BaKameleonPicturePipe() {
    }
    BaKameleonPicturePipe.prototype.transform = function (input) {
        return _theme__WEBPACK_IMPORTED_MODULE_2__["layoutPaths"].images.root + 'theme/icon/kameleon/' + input + '.svg';
    };
    BaKameleonPicturePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'baKameleonPicture' })
    ], BaKameleonPicturePipe);
    return BaKameleonPicturePipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/baKameleonPicture/index.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/pipes/baKameleonPicture/index.ts ***!
  \********************************************************/
/*! exports provided: BaKameleonPicturePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baKameleonPicture_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baKameleonPicture.pipe */ "./src/app/theme/pipes/baKameleonPicture/baKameleonPicture.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaKameleonPicturePipe", function() { return _baKameleonPicture_pipe__WEBPACK_IMPORTED_MODULE_0__["BaKameleonPicturePipe"]; });




/***/ }),

/***/ "./src/app/theme/pipes/baProfilePicture/baProfilePicture.pipe.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/pipes/baProfilePicture/baProfilePicture.pipe.ts ***!
  \***********************************************************************/
/*! exports provided: BaProfilePicturePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaProfilePicturePipe", function() { return BaProfilePicturePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme */ "./src/app/theme/index.ts");



var BaProfilePicturePipe = /** @class */ (function () {
    function BaProfilePicturePipe() {
    }
    BaProfilePicturePipe.prototype.transform = function (input, ext) {
        if (ext === void 0) { ext = 'png'; }
        return _theme__WEBPACK_IMPORTED_MODULE_2__["layoutPaths"].images.profile + input + '.' + ext;
    };
    BaProfilePicturePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'baProfilePicture' })
    ], BaProfilePicturePipe);
    return BaProfilePicturePipe;
}());



/***/ }),

/***/ "./src/app/theme/pipes/baProfilePicture/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/pipes/baProfilePicture/index.ts ***!
  \*******************************************************/
/*! exports provided: BaProfilePicturePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baProfilePicture_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baProfilePicture.pipe */ "./src/app/theme/pipes/baProfilePicture/baProfilePicture.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaProfilePicturePipe", function() { return _baProfilePicture_pipe__WEBPACK_IMPORTED_MODULE_0__["BaProfilePicturePipe"]; });




/***/ }),

/***/ "./src/app/theme/pipes/index.ts":
/*!**************************************!*\
  !*** ./src/app/theme/pipes/index.ts ***!
  \**************************************/
/*! exports provided: BaProfilePicturePipe, BaAppPicturePipe, BaKameleonPicturePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baProfilePicture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baProfilePicture */ "./src/app/theme/pipes/baProfilePicture/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaProfilePicturePipe", function() { return _baProfilePicture__WEBPACK_IMPORTED_MODULE_0__["BaProfilePicturePipe"]; });

/* harmony import */ var _baAppPicture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baAppPicture */ "./src/app/theme/pipes/baAppPicture/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaAppPicturePipe", function() { return _baAppPicture__WEBPACK_IMPORTED_MODULE_1__["BaAppPicturePipe"]; });

/* harmony import */ var _baKameleonPicture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baKameleonPicture */ "./src/app/theme/pipes/baKameleonPicture/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaKameleonPicturePipe", function() { return _baKameleonPicture__WEBPACK_IMPORTED_MODULE_2__["BaKameleonPicturePipe"]; });






/***/ }),

/***/ "./src/app/theme/pipes/label.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/theme/pipes/label.pipe.ts ***!
  \*******************************************/
/*! exports provided: LabelPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelPipe", function() { return LabelPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global.state */ "./src/app/global.state.ts");



var LabelPipe = /** @class */ (function () {
    function LabelPipe(state) {
        this.state = state;
    }
    LabelPipe.prototype.transform = function (input, params) {
        var data = this.state.getGlobalSetting("label-dictionary");
        if (!data)
            data = JSON.parse(sessionStorage.getItem("label-dictionary"));
        return data.filter(function (item) { return item.key === input; })[0].value;
    };
    LabelPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'labelPipe' }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_state__WEBPACK_IMPORTED_MODULE_2__["GlobalState"]])
    ], LabelPipe);
    return LabelPipe;
}());



/***/ }),

/***/ "./src/app/theme/services/baImageLoader/baImageLoader.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/services/baImageLoader/baImageLoader.service.ts ***!
  \***********************************************************************/
/*! exports provided: BaImageLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaImageLoaderService", function() { return BaImageLoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BaImageLoaderService = /** @class */ (function () {
    function BaImageLoaderService() {
    }
    BaImageLoaderService.prototype.load = function (src) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.src = src;
            img.onload = function () {
                resolve('Image with src ' + src + ' loaded successfully.');
            };
        });
    };
    BaImageLoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BaImageLoaderService);
    return BaImageLoaderService;
}());



/***/ }),

/***/ "./src/app/theme/services/baImageLoader/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/services/baImageLoader/index.ts ***!
  \*******************************************************/
/*! exports provided: BaImageLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baImageLoader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baImageLoader.service */ "./src/app/theme/services/baImageLoader/baImageLoader.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaImageLoaderService", function() { return _baImageLoader_service__WEBPACK_IMPORTED_MODULE_0__["BaImageLoaderService"]; });




/***/ }),

/***/ "./src/app/theme/services/baMenu/baMenu.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/services/baMenu/baMenu.service.ts ***!
  \*********************************************************/
/*! exports provided: BaMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaMenuService", function() { return BaMenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/services/permission/authService.service */ "./src/app/common/services/permission/authService.service.ts");






var BaMenuService = /** @class */ (function () {
    function BaMenuService(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
        this.menuItems = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this._currentMenuItem = {};
        this.setting = _authService.getSetting();
    }
    /**
     * Updates the routes in the menu
     *
     * @param {Routes} routes Type compatible with app.menu.ts
     */
    BaMenuService.prototype.updateMenuByRoutes = function (routes) {
        var convertedRoutes = this.convertRoutesToMenus(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(routes));
        this.menuItems.next(convertedRoutes);
    };
    BaMenuService.prototype.convertRoutesToMenus = function (routes) {
        var items = this._convertArrayToItems(routes);
        return this._skipEmpty(items);
    };
    BaMenuService.prototype.getCurrentItem = function () {
        return this._currentMenuItem;
    };
    BaMenuService.prototype.selectMenuItem = function (menuItems) {
        var _this = this;
        var items = [];
        menuItems.forEach(function (item) {
            _this._selectItem(item);
            if (item.selected) {
                _this._currentMenuItem = item;
            }
            if (item.children && item.children.length > 0) {
                item.children = _this.selectMenuItem(item.children);
            }
            items.push(item);
        });
        return items;
    };
    BaMenuService.prototype._skipEmpty = function (items) {
        var menu = [];
        items.forEach(function (item) {
            var menuItem;
            if (item.skip) {
                if (item.children && item.children.length > 0) {
                    menuItem = item.children;
                }
            }
            else {
                menuItem = item;
            }
            if (menuItem) {
                menu.push(menuItem);
            }
        });
        return [].concat.apply([], menu);
    };
    BaMenuService.prototype._convertArrayToItems = function (routes, parent) {
        var _this = this;
        var items = [];
        routes.forEach(function (route) {
            items.push(_this._convertObjectToItem(route, parent));
        });
        return items;
    };
    BaMenuService.prototype._convertObjectToItem = function (object, parent) {
        var item = {};
        if (object.data && object.data.menu) {
            // this is a menu object
            item = object.data.menu;
            item.route = object;
            delete item.route.data.menu;
        }
        else {
            item.route = object;
            item.skip = true;
        }
        // we have to collect all paths to correctly build the url then
        if (Array.isArray(item.route.path)) {
            item.route.paths = item.route.path;
        }
        else {
            item.route.paths = parent && parent.route && parent.route.paths ? parent.route.paths.slice(0) : ['/'];
            if (!!item.route.path)
                item.route.paths.push(item.route.path);
        }
        if (object.children && object.children.length > 0) {
            item.children = this._convertArrayToItems(object.children, item);
        }
        var prepared = this._prepareItem(item);
        // if current item is selected or expanded - then parent is expanded too
        if ((prepared.selected || prepared.expanded) && parent) {
            parent.expanded = true;
        }
        var treatmentMenus = ["Treatment Entry", "Treatment Details", "Disease", "Medication", "Prescription", "Follow Up Report"];
        if (treatmentMenus.indexOf(prepared.title) != -1) {
            prepared.hidden = !this.setting.EnableTreatment;
        }
        var seriesMenus = ["Series", "Series Sales", "Series Report"];
        if (seriesMenus.indexOf(prepared.title) != -1) {
            prepared.hidden = !this.setting.EnableSeries;
        }
        if (prepared.title == "Appointments") {
            prepared.hidden = !this.setting.EnableAppointment || prepared.hidden;
        }
        return prepared;
    };
    BaMenuService.prototype._prepareItem = function (object) {
        if (!object.skip) {
            object.target = object.target || '';
            object.pathMatch = object.pathMatch || 'full';
            return this._selectItem(object);
        }
        return object;
    };
    BaMenuService.prototype._selectItem = function (object) {
        object.selected = this._router.isActive(this._router.createUrlTree(object.route.paths), object.pathMatch === 'full');
        return object;
    };
    BaMenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _common_services_permission_authService_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], BaMenuService);
    return BaMenuService;
}());



/***/ }),

/***/ "./src/app/theme/services/baMenu/index.ts":
/*!************************************************!*\
  !*** ./src/app/theme/services/baMenu/index.ts ***!
  \************************************************/
/*! exports provided: BaMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baMenu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baMenu.service */ "./src/app/theme/services/baMenu/baMenu.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaMenuService", function() { return _baMenu_service__WEBPACK_IMPORTED_MODULE_0__["BaMenuService"]; });




/***/ }),

/***/ "./src/app/theme/services/baThemePreloader/baThemePreloader.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/services/baThemePreloader/baThemePreloader.service.ts ***!
  \*****************************************************************************/
/*! exports provided: BaThemePreloader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaThemePreloader", function() { return BaThemePreloader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BaThemePreloader = /** @class */ (function () {
    function BaThemePreloader() {
    }
    BaThemePreloader_1 = BaThemePreloader;
    BaThemePreloader.registerLoader = function (method) {
        BaThemePreloader_1._loaders.push(method);
    };
    BaThemePreloader.clear = function () {
        BaThemePreloader_1._loaders = [];
    };
    BaThemePreloader.load = function () {
        return new Promise(function (resolve, reject) {
            BaThemePreloader_1._executeAll(resolve);
        });
    };
    BaThemePreloader._executeAll = function (done) {
        setTimeout(function () {
            Promise.all(BaThemePreloader_1._loaders).then(function (values) {
                done.call(null, values);
            }).catch(function (error) {
                console.error(error);
            });
        });
    };
    var BaThemePreloader_1;
    BaThemePreloader._loaders = [];
    BaThemePreloader = BaThemePreloader_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BaThemePreloader);
    return BaThemePreloader;
}());



/***/ }),

/***/ "./src/app/theme/services/baThemePreloader/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/theme/services/baThemePreloader/index.ts ***!
  \**********************************************************/
/*! exports provided: BaThemePreloader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baThemePreloader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baThemePreloader.service */ "./src/app/theme/services/baThemePreloader/baThemePreloader.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaThemePreloader", function() { return _baThemePreloader_service__WEBPACK_IMPORTED_MODULE_0__["BaThemePreloader"]; });




/***/ }),

/***/ "./src/app/theme/services/baThemeSpinner/baThemeSpinner.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/services/baThemeSpinner/baThemeSpinner.service.ts ***!
  \*************************************************************************/
/*! exports provided: BaThemeSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaThemeSpinner", function() { return BaThemeSpinner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BaThemeSpinner = /** @class */ (function () {
    function BaThemeSpinner() {
        this._selector = 'preloader';
        this._element = document.getElementById(this._selector);
    }
    BaThemeSpinner.prototype.show = function () {
        this._element.style['display'] = 'block';
    };
    BaThemeSpinner.prototype.hide = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        setTimeout(function () {
            _this._element.style['display'] = 'none';
        }, delay);
    };
    BaThemeSpinner = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BaThemeSpinner);
    return BaThemeSpinner;
}());



/***/ }),

/***/ "./src/app/theme/services/baThemeSpinner/index.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/services/baThemeSpinner/index.ts ***!
  \********************************************************/
/*! exports provided: BaThemeSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baThemeSpinner_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baThemeSpinner.service */ "./src/app/theme/services/baThemeSpinner/baThemeSpinner.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaThemeSpinner", function() { return _baThemeSpinner_service__WEBPACK_IMPORTED_MODULE_0__["BaThemeSpinner"]; });




/***/ }),

/***/ "./src/app/theme/services/index.ts":
/*!*****************************************!*\
  !*** ./src/app/theme/services/index.ts ***!
  \*****************************************/
/*! exports provided: BaImageLoaderService, BaMenuService, BaThemePreloader, BaThemeSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baImageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baImageLoader */ "./src/app/theme/services/baImageLoader/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaImageLoaderService", function() { return _baImageLoader__WEBPACK_IMPORTED_MODULE_0__["BaImageLoaderService"]; });

/* harmony import */ var _baMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baMenu */ "./src/app/theme/services/baMenu/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaMenuService", function() { return _baMenu__WEBPACK_IMPORTED_MODULE_1__["BaMenuService"]; });

/* harmony import */ var _baThemePreloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baThemePreloader */ "./src/app/theme/services/baThemePreloader/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaThemePreloader", function() { return _baThemePreloader__WEBPACK_IMPORTED_MODULE_2__["BaThemePreloader"]; });

/* harmony import */ var _baThemeSpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baThemeSpinner */ "./src/app/theme/services/baThemeSpinner/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaThemeSpinner", function() { return _baThemeSpinner__WEBPACK_IMPORTED_MODULE_3__["BaThemeSpinner"]; });







/***/ }),

/***/ "./src/app/theme/theme.config.ts":
/*!***************************************!*\
  !*** ./src/app/theme/theme.config.ts ***!
  \***************************************/
/*! exports provided: BaThemeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaThemeConfig", function() { return BaThemeConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_configProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme.configProvider */ "./src/app/theme/theme.configProvider.ts");
/* harmony import */ var _theme_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme.constants */ "./src/app/theme/theme.constants.ts");




var BaThemeConfig = /** @class */ (function () {
    function BaThemeConfig(_baConfig) {
        this._baConfig = _baConfig;
    }
    BaThemeConfig.prototype.config = function () {
        this._baConfig.changeTheme({ name: 'mint' });
        var colorScheme = {
            primary: '#209e91',
            info: '#2dacd1',
            success: '#90b900',
            warning: '#dfb81c',
            danger: '#e85656',
        };
        this._baConfig.changeColors({
            default: '#4e4e55',
            defaultText: '#e2e2e2',
            border: '#dddddd',
            borderDark: '#aaaaaa',
            primary: colorScheme.primary,
            info: colorScheme.info,
            success: colorScheme.success,
            warning: colorScheme.warning,
            danger: colorScheme.danger,
            primaryLight: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].tint(colorScheme.primary, 30),
            infoLight: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].tint(colorScheme.info, 30),
            successLight: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].tint(colorScheme.success, 30),
            warningLight: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].tint(colorScheme.warning, 30),
            dangerLight: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].tint(colorScheme.danger, 30),
            primaryDark: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].shade(colorScheme.primary, 15),
            infoDark: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].shade(colorScheme.info, 15),
            successDark: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].shade(colorScheme.success, 15),
            warningDark: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].shade(colorScheme.warning, 15),
            dangerDark: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].shade(colorScheme.danger, 15),
            dashboard: {
                blueStone: '#005562',
                surfieGreen: '#0e8174',
                silverTree: '#6eba8c',
                gossip: '#b9f2a1',
                white: '#10c4b5',
            },
            custom: {
                dashboardPieChart: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].hexToRgbA('#aaaaaa', 0.8),
                dashboardLineChart: '#6eba8c',
            },
        });
    };
    BaThemeConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_theme_configProvider__WEBPACK_IMPORTED_MODULE_2__["BaThemeConfigProvider"]])
    ], BaThemeConfig);
    return BaThemeConfig;
}());



/***/ }),

/***/ "./src/app/theme/theme.configProvider.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/theme.configProvider.ts ***!
  \***********************************************/
/*! exports provided: BaThemeConfigProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaThemeConfigProvider", function() { return BaThemeConfigProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme.constants */ "./src/app/theme/theme.constants.ts");




var BaThemeConfigProvider = /** @class */ (function () {
    function BaThemeConfigProvider() {
        this.basic = {
            default: '#ffabff',
            defaultText: '#ffffff',
            border: '#dddddd',
            borderDark: '#aaaaaa',
        };
        // main functional color scheme
        this.colorScheme = {
            primary: '#ffabff',
            info: '#40daf1',
            success: '#8bd22f',
            warning: '#e7ba08',
            danger: '#f95372',
        };
        // dashboard colors for charts
        this.dashboardColors = {
            blueStone: '#40daf1',
            surfieGreen: '#00abff',
            silverTree: '#1b70ef',
            gossip: '#3c4eb9',
            white: '#ffffff',
        };
        this.conf = {
            theme: {
                name: 'ng2',
            },
            colors: {
                default: this.basic.default,
                defaultText: this.basic.defaultText,
                border: this.basic.border,
                borderDark: this.basic.borderDark,
                primary: this.colorScheme.primary,
                info: this.colorScheme.info,
                success: this.colorScheme.success,
                warning: this.colorScheme.warning,
                danger: this.colorScheme.danger,
                primaryLight: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].tint(this.colorScheme.primary, 30),
                infoLight: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].tint(this.colorScheme.info, 30),
                successLight: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].tint(this.colorScheme.success, 30),
                warningLight: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].tint(this.colorScheme.warning, 30),
                dangerLight: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].tint(this.colorScheme.danger, 30),
                primaryDark: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].shade(this.colorScheme.primary, 15),
                infoDark: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].shade(this.colorScheme.info, 15),
                successDark: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].shade(this.colorScheme.success, 15),
                warningDark: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].shade(this.colorScheme.warning, 15),
                dangerDark: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].shade(this.colorScheme.danger, 15),
                dashboard: {
                    blueStone: this.dashboardColors.blueStone,
                    surfieGreen: this.dashboardColors.surfieGreen,
                    silverTree: this.dashboardColors.silverTree,
                    gossip: this.dashboardColors.gossip,
                    white: this.dashboardColors.white,
                },
                custom: {
                    dashboardPieChart: _theme_constants__WEBPACK_IMPORTED_MODULE_3__["colorHelper"].hexToRgbA(this.basic.defaultText, 0.8),
                    dashboardLineChart: this.basic.defaultText,
                }
            }
        };
    }
    BaThemeConfigProvider.prototype.get = function () {
        return this.conf;
    };
    BaThemeConfigProvider.prototype.changeTheme = function (theme) {
        Object(lodash__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.get().theme, theme);
    };
    BaThemeConfigProvider.prototype.changeColors = function (colors) {
        Object(lodash__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.get().colors, colors);
    };
    BaThemeConfigProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BaThemeConfigProvider);
    return BaThemeConfigProvider;
}());



/***/ }),

/***/ "./src/app/theme/theme.constants.ts":
/*!******************************************!*\
  !*** ./src/app/theme/theme.constants.ts ***!
  \******************************************/
/*! exports provided: IMAGES_ROOT, layoutSizes, layoutPaths, colorHelper, isMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGES_ROOT", function() { return IMAGES_ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutSizes", function() { return layoutSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutPaths", function() { return layoutPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorHelper", function() { return colorHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
var IMAGES_ROOT = 'assets/img/';
var layoutSizes = {
    resWidthCollapseSidebar: 1200,
    resWidthHideSidebar: 500
};
var layoutPaths = {
    images: {
        root: IMAGES_ROOT,
        profile: IMAGES_ROOT + 'app/profile/',
        amMap: 'assets/img/theme/vendor/ammap/',
        amChart: 'assets/img/theme/vendor/amcharts/dist/amcharts/images/'
    }
};
var colorHelper = /** @class */ (function () {
    function colorHelper() {
    }
    colorHelper.shade = function (color, weight) {
        return colorHelper.mix('#000000', color, weight);
    };
    colorHelper.tint = function (color, weight) {
        return colorHelper.mix('#ffffff', color, weight);
    };
    colorHelper.hexToRgbA = function (hex, alpha) {
        var c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length == 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
        }
        throw new Error('Bad Hex');
    };
    colorHelper.mix = function (color1, color2, weight) {
        var d2h = function (d) { return d.toString(16); };
        var h2d = function (h) { return parseInt(h, 16); };
        var result = "#";
        for (var i = 1; i < 7; i += 2) {
            var color1Part = h2d(color1.substr(i, 2));
            var color2Part = h2d(color2.substr(i, 2));
            var resultPart = d2h(Math.floor(color2Part + (color1Part - color2Part) * (weight / 100.0)));
            result += ('0' + resultPart).slice(-2);
        }
        return result;
    };
    return colorHelper;
}());

var isMobile = function () { return (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase()); };


/***/ }),

/***/ "./src/app/theme/validators/editPassword.validator.ts":
/*!************************************************************!*\
  !*** ./src/app/theme/validators/editPassword.validator.ts ***!
  \************************************************************/
/*! exports provided: EditPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPasswordValidator", function() { return EditPasswordValidator; });
var EditPasswordValidator = /** @class */ (function () {
    function EditPasswordValidator() {
    }
    EditPasswordValidator.validate = function (edit) {
        return function (c) {
            if (edit == 'add') {
                if (c.value == "") {
                    return { editPasswordValidate: { valid: false } };
                }
                if (c.value.length < 5) {
                    return { editPasswordValidate: { valid: false } };
                }
                return null;
            }
            return null;
        };
    };
    return EditPasswordValidator;
}());



/***/ }),

/***/ "./src/app/theme/validators/email.validator.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/validators/email.validator.ts ***!
  \*****************************************************/
/*! exports provided: EmailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.validate = function (c) {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
    return EmailValidator;
}());



/***/ }),

/***/ "./src/app/theme/validators/equalPasswords.validator.ts":
/*!**************************************************************!*\
  !*** ./src/app/theme/validators/equalPasswords.validator.ts ***!
  \**************************************************************/
/*! exports provided: EqualPasswordsValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualPasswordsValidator", function() { return EqualPasswordsValidator; });
var EqualPasswordsValidator = /** @class */ (function () {
    function EqualPasswordsValidator() {
    }
    EqualPasswordsValidator.validate = function (firstField, secondField) {
        return function (c) {
            return (c.controls && c.controls[firstField].value == c.controls[secondField].value) ? null : {
                passwordsEqual: {
                    valid: false
                }
            };
        };
    };
    return EqualPasswordsValidator;
}());



/***/ }),

/***/ "./src/app/theme/validators/index.ts":
/*!*******************************************!*\
  !*** ./src/app/theme/validators/index.ts ***!
  \*******************************************/
/*! exports provided: EmailValidator, EqualPasswordsValidator, EditPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _email_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.validator */ "./src/app/theme/validators/email.validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return _email_validator__WEBPACK_IMPORTED_MODULE_0__["EmailValidator"]; });

/* harmony import */ var _equalPasswords_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equalPasswords.validator */ "./src/app/theme/validators/equalPasswords.validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EqualPasswordsValidator", function() { return _equalPasswords_validator__WEBPACK_IMPORTED_MODULE_1__["EqualPasswordsValidator"]; });

/* harmony import */ var _editPassword_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editPassword.validator */ "./src/app/theme/validators/editPassword.validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditPasswordValidator", function() { return _editPassword_validator__WEBPACK_IMPORTED_MODULE_2__["EditPasswordValidator"]; });






/***/ }),

/***/ "./src/assets/nepali-date-picker/nepali.datepicker.v3.5.min.js":
/*!*********************************************************************!*\
  !*** ./src/assets/nepali-date-picker/nepali.datepicker.v3.5.min.js ***!
  \*********************************************************************/
/*! exports provided: bs2ad, ad2bs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bs2ad", function() { return bs2ad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ad2bs", function() { return ad2bs; });
var NepaliFunctions=function(){"use strict";function e(){function e(){return p}function t(){return f}function n(e){var t=0;return e.forEach(function(e){t+=e}),t}function a(e,t){var n=Date.UTC(e.year,e.month-1,e.day),r=Date.UTC(t.year,t.month-1,t.day);return Math.abs((r-n)/864e5)}function o(e,t){var r=0,a=0;for(a=e.year;a<=t.year;a+=1)r+=n(c[a]);for(a=0;a<e.month;a+=1)r-=c[e.year][a];for(r+=c[e.year][11],a=t.month-1;a<12;a+=1)r-=c[t.year][a];return r-=e.day+1,r+=t.day-1}function i(e,t){var n=new Date(r(e,"MM/DD/YYYY"));return n.setDate(n.getDate()+t),{year:n.getFullYear(),month:n.getMonth()+1,day:n.getDate()}}function u(e,t){for(e.day+=t;e.day>c[e.year][e.month-1];)e.day-=c[e.year][e.month-1],e.month+=1,e.month>12&&(e.month=1,e.year+=1);return{year:e.year,month:e.month,day:e.day}}function d(e){var t=o(m,e);return i(h,t)}function l(e){var t=a(h,e);return u(m,t)}function s(e,t){return c[e][t-1]}var c=[],m={year:2e3,month:9,day:17},h={year:1944,month:1,day:1};c[1970]=[31,31,32,31,31,31,30,29,30,29,30,30],c[1971]=[31,31,32,31,32,30,30,29,30,29,30,30],c[1972]=[31,32,31,32,31,30,30,30,29,29,30,31],c[1973]=[30,32,31,32,31,30,30,30,29,30,29,31],c[1974]=[31,31,32,31,31,31,30,29,30,29,30,30],c[1975]=[31,31,32,32,31,30,30,29,30,29,30,30],c[1976]=[31,32,31,32,31,30,30,30,29,29,30,31],c[1977]=[30,32,31,32,31,31,29,30,29,30,29,31],c[1978]=[31,31,32,31,31,31,30,29,30,29,30,30],c[1979]=[31,31,32,32,31,30,30,29,30,29,30,30],c[1980]=[31,32,31,32,31,30,30,30,29,29,30,31],c[1981]=[31,31,31,32,31,31,29,30,30,29,30,30],c[1982]=[31,31,32,31,31,31,30,29,30,29,30,30],c[1983]=[31,31,32,32,31,30,30,29,30,29,30,30],c[1984]=[31,32,31,32,31,30,30,30,29,29,30,31],c[1985]=[31,31,31,32,31,31,29,30,30,29,30,30],c[1986]=[31,31,32,31,31,31,30,29,30,29,30,30],c[1987]=[31,32,31,32,31,30,30,29,30,29,30,30],c[1988]=[31,32,31,32,31,30,30,30,29,29,30,31],c[1989]=[31,31,31,32,31,31,30,29,30,29,30,30],c[1990]=[31,31,32,31,31,31,30,29,30,29,30,30],c[1991]=[31,32,31,32,31,30,30,30,29,29,30,30],c[1992]=[31,32,31,32,31,30,30,30,29,30,29,31],c[1993]=[31,31,31,32,31,31,30,29,30,29,30,30],c[1994]=[31,31,32,31,31,31,30,29,30,29,30,30],c[1995]=[31,32,31,32,31,30,30,30,29,29,30,30],c[1996]=[31,32,31,32,31,30,30,30,29,30,29,31],c[1997]=[31,31,32,31,31,31,30,29,30,29,30,30],c[1998]=[31,31,32,31,31,31,30,29,30,29,30,30],c[1999]=[31,32,31,32,31,30,30,30,29,29,30,31],c[2e3]=[30,32,31,32,31,30,30,30,29,30,29,31],c[2001]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2002]=[31,31,32,32,31,30,30,29,30,29,30,30],c[2003]=[31,32,31,32,31,30,30,30,29,29,30,31],c[2004]=[30,32,31,32,31,30,30,30,29,30,29,31],c[2005]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2006]=[31,31,32,32,31,30,30,29,30,29,30,30],c[2007]=[31,32,31,32,31,30,30,30,29,29,30,31],c[2008]=[31,31,31,32,31,31,29,30,30,29,29,31],c[2009]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2010]=[31,31,32,32,31,30,30,29,30,29,30,30],c[2011]=[31,32,31,32,31,30,30,30,29,29,30,31],c[2012]=[31,31,31,32,31,31,29,30,30,29,30,30],c[2013]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2014]=[31,31,32,32,31,30,30,29,30,29,30,30],c[2015]=[31,32,31,32,31,30,30,30,29,29,30,31],c[2016]=[31,31,31,32,31,31,29,30,30,29,30,30],c[2017]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2018]=[31,32,31,32,31,30,30,29,30,29,30,30],c[2019]=[31,32,31,32,31,30,30,30,29,30,29,31],c[2020]=[31,31,31,32,31,31,30,29,30,29,30,30],c[2021]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2022]=[31,32,31,32,31,30,30,30,29,29,30,30],c[2023]=[31,32,31,32,31,30,30,30,29,30,29,31],c[2024]=[31,31,31,32,31,31,30,29,30,29,30,30],c[2025]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2026]=[31,32,31,32,31,30,30,30,29,29,30,31],c[2027]=[30,32,31,32,31,30,30,30,29,30,29,31],c[2028]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2029]=[31,31,32,31,32,30,30,29,30,29,30,30],c[2030]=[31,32,31,32,31,30,30,30,29,29,30,31],c[2031]=[30,32,31,32,31,30,30,30,29,30,29,31],c[2032]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2033]=[31,31,32,32,31,30,30,29,30,29,30,30],c[2034]=[31,32,31,32,31,30,30,30,29,29,30,31],c[2035]=[30,32,31,32,31,31,29,30,30,29,29,31],c[2036]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2037]=[31,31,32,32,31,30,30,29,30,29,30,30],c[2038]=[31,32,31,32,31,30,30,30,29,29,30,31],c[2039]=[31,31,31,32,31,31,29,30,30,29,30,30],c[2040]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2041]=[31,31,32,32,31,30,30,29,30,29,30,30],c[2042]=[31,32,31,32,31,30,30,30,29,29,30,31],c[2043]=[31,31,31,32,31,31,29,30,30,29,30,30],c[2044]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2045]=[31,32,31,32,31,30,30,29,30,29,30,30],c[2046]=[31,32,31,32,31,30,30,30,29,29,30,31],c[2047]=[31,31,31,32,31,31,30,29,30,29,30,30],c[2048]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2049]=[31,32,31,32,31,30,30,30,29,29,30,30],c[2050]=[31,32,31,32,31,30,30,30,29,30,29,31],c[2051]=[31,31,31,32,31,31,30,29,30,29,30,30],c[2052]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2053]=[31,32,31,32,31,30,30,30,29,29,30,30],c[2054]=[31,32,31,32,31,30,30,30,29,30,29,31],c[2055]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2056]=[31,31,32,31,32,30,30,29,30,29,30,30],c[2057]=[31,32,31,32,31,30,30,30,29,29,30,31],c[2058]=[30,32,31,32,31,30,30,30,29,30,29,31],c[2059]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2060]=[31,31,32,32,31,30,30,29,30,29,30,30],c[2061]=[31,32,31,32,31,30,30,30,29,29,30,31],c[2062]=[30,32,31,32,31,31,29,30,29,30,29,31],c[2063]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2064]=[31,31,32,32,31,30,30,29,30,29,30,30],c[2065]=[31,32,31,32,31,30,30,30,29,29,30,31],c[2066]=[31,31,31,32,31,31,29,30,30,29,29,31],c[2067]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2068]=[31,31,32,32,31,30,30,29,30,29,30,30],c[2069]=[31,32,31,32,31,30,30,30,29,29,30,31],c[2070]=[31,31,31,32,31,31,29,30,30,29,30,30],c[2071]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2072]=[31,32,31,32,31,30,30,29,30,29,30,30],c[2073]=[31,32,31,32,31,30,30,30,29,29,30,31],c[2074]=[31,31,31,32,31,31,30,29,30,29,30,30],c[2075]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2076]=[31,32,31,32,31,30,30,30,29,29,30,30],c[2077]=[31,32,31,32,31,30,30,30,29,30,29,31],c[2078]=[31,31,31,32,31,31,30,29,30,29,30,30],c[2079]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2080]=[31,32,31,32,31,30,30,30,29,29,30,30],c[2081]=[31,32,31,32,31,30,30,30,29,30,29,31],c[2082]=[31,31,32,31,31,31,30,29,30,29,30,30],c[2083]=[31,31,32,31,31,30,30,30,29,30,30,30],c[2084]=[31,31,32,31,31,30,30,30,29,30,30,30],c[2085]=[31,32,31,32,30,31,30,30,29,30,30,30],c[2086]=[30,32,31,32,31,30,30,30,29,30,30,30],c[2087]=[31,31,32,31,31,31,30,30,29,30,30,30],c[2088]=[30,31,32,32,30,31,30,30,29,30,30,30],c[2089]=[30,32,31,32,31,30,30,30,29,30,30,30],c[2090]=[30,32,31,32,31,30,30,30,29,30,30,30],c[2091]=[31,31,32,31,31,31,30,30,29,30,30,30],c[2092]=[30,31,32,32,31,30,30,30,29,30,30,30],c[2093]=[30,32,31,32,31,30,30,30,29,30,30,30],c[2094]=[31,31,32,31,31,30,30,30,29,30,30,30],c[2095]=[31,31,32,31,31,31,30,29,30,30,30,30],c[2096]=[30,31,32,32,31,30,30,29,30,29,30,30],c[2097]=[31,32,31,32,31,30,30,30,29,30,30,30],c[2098]=[31,31,32,31,31,31,29,30,29,30,29,31],c[2099]=[31,31,32,31,31,31,30,29,29,30,30,30];var p={year:1970,month:1,day:1},f={year:2099,month:12,day:30};return{minDate:e,maxDate:t,countAdDays:a,countBsDays:o,addBsDays:u,addAdDays:i,bs2ad:d,ad2bs:l,getDaysInMonth:s}}function t(e){function t(e){var t={},n=[],r=[];e.forEach(function(e,t){var n=parseInt(e),a={index:t,value:n,year:!1,month:!1,day:!1};n>0&&n>999?a.year=!0:n>0&&n>12?a.day=!0:n>0&&n<=12&&(a.month=!0,a.day=!0),r.push(a)});var a=r.filter(function(e){return 1==e.year})[0];if(a){t.year=a.value,n[a.index]="YYYY";var o=r.filter(function(e){return 1==e.day}),i=r.filter(function(e){return 1==e.month});1==i.length?(t.month=i[0].value,n[i[0].index]="MM",1==o.length?(t.day=o[0].value,n[o[0].index]="DD"):(o=o.find(function(e){return!e.month}),t.day=o.value,n[o.index]="DD")):2==i.length&&0==o.length?(t.month=i[0].value,t.day=i[1].value,n[i[0].index]="MM",n[i[1].index]="DD"):2==i.length&&2==o.length&&(t.month=o[0].value,t.day=o[1].value,n[o[0].index]="MM",n[o[1].index]="DD")}if(t&&NaN==t.year||null==t.year||NaN==t.month||null==t.month||NaN==t.day||null==t.day)t=null,n=null;else{var u=L(t.year,t.month);t.day>u&&(t=null,n=null)}return{parsedDate:t,parsedFormat:n}}var n=e.indexOf("/")>-1,r=e.indexOf("-")>-1,a=null;if(n){var o=e.split("/");3==o.length&&(a=t(o),a.parsedFormat=a.parsedFormat.join("/"))}else if(r){var i=e.split("-");3==i.length&&(a=t(i),a.parsedFormat=a.parsedFormat.join("-"))}return a}function n(e,t){var n=[],r={year:null,month:null,day:null};switch(t){case"MM/DD/YYYY":n=e.split("/"),3==n.length&&(r={year:Number(n[2]),month:Number(n[0]),day:Number(n[1])});break;case"MM-DD-YYYY":n=e.split("-"),3==n.length&&(r={year:Number(n[2]),month:Number(n[0]),day:Number(n[1])});break;case"YYYY-MM-DD":n=e.split("-"),3==n.length&&(r={year:Number(n[0]),month:Number(n[1]),day:Number(n[2])});break;case"YYYY/MM/DD":n=e.split("/"),3==n.length&&(r={year:Number(n[0]),month:Number(n[1]),day:Number(n[2])});break;case"DD-MM-YYYY":n=e.split("-"),3==n.length&&(r={year:Number(n[2]),month:Number(n[1]),day:Number(n[0])});break;case"DD/MM/YYYY":n=e.split("/"),3==n.length&&(r={year:Number(n[2]),month:Number(n[1]),day:Number(n[0])})}return(r&&NaN==r.year||null==r.year||NaN==r.month||null==r.month||NaN==r.day||null==r.day)&&(r=null),r}function r(e,t){function n(e){return e=Number(e),e<10?"0"+e:e}var r="";switch(t=t&&J.indexOf(t)>-1?t:"YYYY-MM-DD"){case"MM/DD/YYYY":r=n(e.month)+"/"+n(e.day)+"/"+e.year;break;case"MM-DD-YYYY":r=n(e.month)+"-"+n(e.day)+"-"+e.year;break;case"YYYY-MM-DD":r=e.year+"-"+n(e.month)+"-"+n(e.day);break;case"YYYY/MM/DD":r=e.year+"/"+n(e.month)+"/"+n(e.day);break;case"DD-MM-YYYY":r=n(e.day)+"-"+n(e.month)+"-"+e.year;break;case"DD/MM/YYYY":r=n(e.day)+"/"+n(e.month)+"/"+e.year}return r}function a(t){return(new e).ad2bs(t)}function o(t){return(new e).bs2ad(t)}function i(t){var n=new e,r=n.minDate(),a=n.maxDate();if(t.year<r.year||t.year>a.year||t.month<r.month||t.month>a.month||t.day<r.day||t.day>a.day)return!1;var o=L(t.year,t.month);return t.month>0&&t.month<=12&&t.day>0&&t.day<=o}function u(){var e=new Date;e.setHours(e.getHours()+5),e.setMinutes(e.getMinutes()+45);var t=(e.toDateString(),e.getUTCDate()),n=e.getUTCMonth()+1;return{year:e.getUTCFullYear(),month:n,day:t}}function d(){var e=u();return Number(e.year)}function l(){var e=u();return Number(e.month)}function s(){var e=u();return Number(e.day)}function c(){return a(u())}function m(){var e=c();return Number(e.year)}function h(){var e=c();return Number(e.month)}function p(){var e=c();return Number(e.day)}function f(){return["January","February","March","April","May","June","July","August","September","October","November","December"]}function y(e){return e=Number(e),isNaN(e)||e<0||e>11?null:f()[e]}function v(){return["Baisakh","Jestha","Ashar","Shrawan","Bhadra","Ashoj","Kartik","Mangsir","Poush","Magh","Falgun","Chaitra"]}function g(e){return e=Number(e),isNaN(e)||e<0||e>11?null:v()[e]}function b(){return["बैशाख","जेठ","अषाढ","श्रावण","भाद्र","आश्विन","कार्तिक","मङ्सिर","पौष","माघ","फाल्गुन","चैत्र"]}function D(e){return e=Number(e),isNaN(e)||e<0||e>11?null:b()[e]}function N(){return["आइतवार","सोमवार","मङ्गलवार","बुधवार","बिहिवार","शुक्रवार","शनिवार"]}function A(e){return e=Number(e),isNaN(e)||e<0||e>6?null:N()[Number(e)]}function M(){return["आ","सो","मं","बु","बि","शु","श"]}function Y(){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}function B(){return["S","M","T","W","T","F","S"]}function C(e){return e=Number(e),isNaN(e)||e<0||e>6?null:Y()[Number(e)]}function E(e,t){var n=[],r="";return t?(n=b(),r=k(e.day)+" "+n[e.month-1]+" "+k(e.year)):(n=v(),r=e.day+" "+n[e.month-1]+" "+e.year),r}function F(e){return e.day+" "+NepaliFunctions.GetAdMonth(e.month-1)+" "+e.year}function T(e){var t=NepaliFunctions.BS2AD(e);return t=new Date(t.year,t.month-1,t.day),C(t.getDay())}function S(e){var t=NepaliFunctions.BS2AD(e);return t=new Date(t.year,t.month-1,t.day),A(t.getDay())}function I(e){return e=new Date(e.year,e.month-1,e.day),C(e.getDay())}function x(t,n){var r=new e,a=r.bs2ad(t);return a=new Date(a.year,a.month-1,a.day),a.setDate(a.getDate()+n),a={year:a.getFullYear(),month:a.getMonth()+1,day:a.getDate()},r.ad2bs(a)}function G(t,n){return(new e).countAdDays(t,n)}function w(t,n){if(!i(t)||!i(n))return!1;var r=new e;return t=r.bs2ad(t),n=r.bs2ad(n),r.countAdDays(t,n)}function O(e,t){return new Date(e,t,0).getDate()}function L(t,n){var r=new e,a=r.minDate(),o=r.maxDate();return(t<a.year||t>o.year)&&(n<a.month||n>a.month)?0:r.getDaysInMonth(t,n)}function k(e){e=e.toString();var t="",n=0;for(n=0;n<e.length;n+=1)t+=function(e){switch(e){case"0":return"०";case"1":return"१";case"2":return"२";case"3":return"३";case"4":return"४";case"5":return"५";case"6":return"६";case"7":return"७";case"8":return"८";case"9":return"९";default:return e}}(e[n]);return t}function j(e){e=e.toString();for(var t="",n=0;n<e.length;)t+=function(e){switch(e){case"०":return 0;case"१":return 1;case"२":return 2;case"३":return 3;case"४":return 4;case"५":return 5;case"६":return 6;case"७":return 7;case"८":return 8;case"९":return 9;default:return e}}(e[n]),n++;return t}function P(e){return e<10?"0"+Number(e):e}function U(e,t){function n(e){var t={0:"",1:"One",2:"Two",3:"Three",4:"Four",5:"Five",6:"Six",7:"Seven",8:"Eight",9:"Nine",10:"Ten",11:"Eleven",12:"Twelve",13:"Thirteen",14:"Fourteen",15:"Fifteen",16:"Sixteen",17:"Seventeen",18:"Eighteen",19:"Nineteen",20:"Twenty",30:"Thirty",40:"Forty",50:"Fifty",60:"Sixty",70:"Seventy",80:"Eighty",90:"Ninety"};e=Number(e);var n=e.toString();return e<20?t[e]:t[10*n[0]]+" "+t[n[1]]}if(e=e||0,isNaN(e)||Math.floor(e).toString().length>13)return null;var r="",a=0,o=e.toString();if(o.indexOf(".")>-1){var i=o.split(".");a=Number(i[1])}var u=Math.floor(e%100),d=null;e.toString().length>2&&(d=e.toString().substring(e.toString().length-3,e.toString().length-2));var l=Math.floor(e%1e5);l=l.toString(),l=l.substring(0,l.length-3);var s=Math.floor(e%1e7);s=s.toString(),s=s.substring(0,s.length-5);var c=Math.floor(e%1e9);c=c.toString(),c=c.substring(0,c.length-7);var m=Math.floor(e%1e11);m=m.toString(),m=m.substring(0,m.length-9);var h=Math.floor(e%1e13);for(h=h.toString(),h=h.substring(0,h.length-11),h>0&&(r+=n(h)+" Kharab"),m>0&&(r+=" "+n(m)+" Arab"),c>0&&(r+=" "+n(c)+" Crore"),s>0&&(r+=" "+n(s)+" Lakh"),l>0&&(r+=" "+n(l)+" Thousand"),d>0&&(r+=" "+n(d)+" Hundred"),u>0&&(r+=" "+n(u)),""!=r.trim()&&t&&(r+=" Rupees"),a>0&&t&&(r+=" and "+n(a)+" Paisa");r.indexOf("  ")>-1;)r=r.replace("  "," ");return r.trim()}function H(e,t){if(e=e||0,isNaN(e)||Math.floor(e).toString().length>13)return null;var n=["सुन्य","एक","दुई","तीन","चार","पाँच","छ","सात","आठ","नौ","दस","एघार","बाह्र","तेह्र","चौध","पन्ध्र","सोह्र","सत्र","अठाह्र","उन्नाइस","बीस","एकाइस","बाइस","तेइस","चौबीस","पचीस","छब्बीस","सत्ताइस","अठ्ठाइस","उनन्तीस","तीस","एकतीस","बतीस","तेतीस","चौतीस","पैतीस","छतीस","सरतीस","अरतीस","उननचालीस","चालीस","एकचालीस","बयालिस","तीरचालीस","चौवालिस","पैंतालिस","छयालिस","सरचालीस","अरचालीस","उननचास","पचास","एकाउन्न","बाउन्न","त्रिपन्न","चौवन्न","पच्पन्न","छपन्न","सन्ताउन्न","अन्ठाउँन्न","उनान्न्साठी ","साठी","एकसाठी","बासाठी","तीरसाठी","चौंसाठी","पैसाठी","छैसठी","सत्सठ्ठी","अर्सठ्ठी","उनन्सत्तरी","सतरी","एकहत्तर","बहत्तर","त्रिहत्तर","चौहत्तर","पचहत्तर","छहत्तर","सत्हत्तर","अठ्हत्तर","उनास्सी","अस्सी","एकासी","बयासी","त्रीयासी","चौरासी","पचासी","छयासी","सतासी","अठासी","उनान्नब्बे","नब्बे","एकान्नब्बे","बयान्नब्बे","त्रियान्नब्बे","चौरान्नब्बे","पंचान्नब्बे","छयान्नब्बे","सन्तान्‍नब्बे","अन्ठान्नब्बे","उनान्सय"],r="",a=0,o="";if(e=e.toString(),-1!=e.indexOf(".")){var i=e.split(".");e=i[0],a=i[1];var u=a.substring(0,2).toString();1==u.length&&(u=u.toString()+"0"),o=n[parseInt(u)].toString()+" पैसा"}if(e.length>13)return void alert("Number greater than kharab not supported");var d=Math.floor(e%100),l="";e.toString().length>2&&(l=e.toString().substring(e.toString().length-3,e.toString().length-2));var s=Math.floor(e%1e5);s=s.toString(),s=s.substring(0,s.length-3);var c=Math.floor(e%1e7);c=c.toString(),c=c.substring(0,c.length-5);var m=Math.floor(e%1e9);m=m.toString(),m=m.substring(0,m.length-7);var h=Math.floor(e%1e11);h=h.toString(),h=h.substring(0,h.length-9);var p=Math.floor(e%1e13);return p=p.toString(),p=p.substring(0,p.length-11),p>0&&(r+=n[p]+" खरब"),h>0&&(r+=" "+n[h]+" अरब"),m>0&&(r+=" "+n[m]+" करोड"),c>0&&(r+=" "+n[c]+" लाख"),s>0&&(r+=" "+n[s]+" हजार"),l>0&&(r+=" "+n[l]+" सय"),d>0&&(r+=" "+n[d]),""!=r.trim()&&t&&(r+=" रुपैंया"),a>0&&t&&(r+=(""!=r.trim()?" ":"")+o),r.trim()}function R(e,t){if(i(e)&&i(t)){e=this.BS2AD(e),t=this.BS2AD(t);var n=new Date(e.year,e.month-1,e.day),r=new Date(t.year,t.month-1,t.day);return n.getTime()>r.getTime()}return 1e4*e.year+100*e.month+e.day>1e4*t.year+100*t.month+t.day}var J=["MM-DD-YYYY","MM/DD/YYYY","YYYY-MM-DD","YYYY/MM/DD","DD-MM-YYYY","DD/MM/YYYY"];return{ParseDate:t,ValidateBsDate:i,CompareBsDates:R,ConvertToDateObject:n,ConvertDateFormat:r,AD2BS:a,BS2AD:o,GetCurrentAdDate:u,GetCurrentAdYear:d,GetCurrentAdMonth:l,GetCurrentAdDay:s,GetCurrentBsDate:c,GetCurrentBsYear:m,GetCurrentBsMonth:h,GetCurrentBsDay:p,GetAdMonths:f,GetAdMonth:y,GetBsMonths:v,GetBsMonth:g,GetBsDaysUnicode:N,GetBsDaysUnicodeShort:M,GetBsDayUnicode:A,GetAdDays:Y,GetAdDaysShort:B,GetAdDay:C,GetBsMonthsInUnicode:b,GetBsMonthInUnicode:D,GetDaysInAdMonth:O,GetDaysInBsMonth:L,AdDatesDiff:G,BsDatesDiff:w,BsAddDays:x,GetBsFullDate:E,GetAdFullDate:F,GetAdFullDay:I,GetBsFullDay:T,GetBsFullDayInUnicode:S,ConvertToUnicode:k,ConvertToNumber:j,Get2DigitNo:P,NumberToWords:U,NumberToWordsUnicode:H}}();!function(){function e(e,t){var n=e,r=t+1;return r>12&&(n+=1,r=1),{year:n,month:r}}function t(e,t){var n=e,r=t-1;return r<1&&(n-=1,r=12),{year:n,month:r}}function n(){B=!0}function r(){B=!1}function a(e){var t=document.getElementById("ndp-nepali-box");t&&t.remove(),Y=!1}function o(e){var t={};if(Y)a("showNdpCalendarBox");else{var n=document.getElementById(e);A(e),t=b(e),E=e;var r=n.value;t.unicodeDate&&(r=NepaliFunctions.ConvertToNumber(r));var o="";r?o=NepaliFunctions.ConvertToDateObject(r,t.dateFormat):(o=NepaliFunctions.GetCurrentBsDate(),t.disableAfter&&NepaliFunctions.CompareBsDates(o,t.disableAfter)&&(o=t.disableAfter));var u=null;null==o?(o=NepaliFunctions.GetCurrentBsDate(),u=""):u=NepaliFunctions.ConvertDateFormat(o,"YYYY-MM-DD");i(o.year,o.month,u),d(n),Y=!0}}function i(n,r,a){var o=document.getElementById("ndp-nepali-box"),d=b(null),l="english"==d.language,s=o.getElementsByTagName("table")[0].getElementsByTagName("tbody");s.length>0&&s[0].parentNode.removeChild(s[0]);var c=d.ndpYearCount||0,m=document.getElementById("currentMonth");m.innerHTML="";var h=document.createElement("SPAN");h.innerHTML=" ";var p=document.createElement("SPAN");p.innerHTML=l?NepaliFunctions.GetBsMonth(r-1):NepaliFunctions.GetBsMonthInUnicode(r-1);var v=document.createElement("SPAN");v.innerHTML=l?n:NepaliFunctions.ConvertToUnicode(n),d.ndpMonth&&d.ndpYear?(m.appendChild(f(r,n,a)),m.appendChild(y(r,n,c,a))):d.ndpMonth?(m.appendChild(f(r,n,a)),m.appendChild(h),m.appendChild(v)):d.ndpYear?(m.appendChild(p),m.appendChild(h),m.appendChild(y(r,n,c,a))):(m.appendChild(p),m.appendChild(h),m.appendChild(v));var g=e(n,r),D=t(n,r),N=g.year,A=g.month,M=D.year,Y=D.month,B=document.getElementById("ndp-header"),C=document.getElementById("prev");C&&C.parentNode.removeChild(C);var E=document.getElementById("next");E&&E.parentNode.removeChild(E);var F=!0;d.disableBefore&&NepaliFunctions.CompareBsDates(d.disableBefore,{year:M,month:Y,day:NepaliFunctions.GetDaysInBsMonth(M,Y)})&&(F=!1);var T=document.createElement("SPAN");T.setAttribute("class","ndc-chevron ndc-left");var S=document.createElement("A");S.setAttribute("id","prev"),S.setAttribute("title","Previous Month"),S.setAttribute("class",F?"ndp-prev":"ndp-prev ndp-disabled"),S.setAttribute("href","javascript:void(0)"),S.appendChild(T),F&&S.addEventListener("click",function(){i(M,Y,a)});var I=!0;d.disableAfter&&NepaliFunctions.CompareBsDates({year:N,month:A,day:1},d.disableAfter)&&(I=!1);var x=document.createElement("SPAN");x.setAttribute("class","ndc-chevron ndc-right");var G=document.createElement("A");G.setAttribute("id","next"),G.setAttribute("title","Next Month"),G.setAttribute("class",I?"ndp-next":"ndp-next ndp-disabled"),G.setAttribute("href","javascript:void(0)"),G.appendChild(x),I&&G.addEventListener("click",function(){i(N,A,a)}),B.appendChild(S),B.appendChild(G),o.getElementsByTagName("table")[0].insertAdjacentElement("beforeend",u(n,r,a))}function u(e,t,n){var r,a,o,i=b(null),u="english"==i.language;if(n){var d=NepaliFunctions.ConvertToDateObject(n,"YYYY-MM-DD");r=d.year,a=d.month,o=d.day}var l=NepaliFunctions.GetCurrentBsDate(),s=l.year,c=l.month,m=l.day,h=NepaliFunctions.GetDaysInBsMonth(e,t),f={year:e,month:t,day:1},y=NepaliFunctions.BS2AD(f),v=y.year,g=y.month,D=y.day,N=new Date(v,g-1,D),A=N.getDay(),M=0,Y=0,B=A+h,C="",E="",F=0;"object"!=typeof i.disableBefore&&i.disableBefore&&i.dateFormat&&(i.disableBefore=NepaliFunctions.ConvertToDateObject(i.disableBefore,i.dateFormat)),"object"!=typeof i.disableAfter&&i.disableAfter&&i.dateFormat&&(i.disableAfter=NepaliFunctions.ConvertToDateObject(i.disableAfter,i.dateFormat)),!i.disableBefore&&Number.isInteger(i.disableDaysBefore)&&parseInt(i.disableDaysBefore)>=0&&(i.disableBefore=NepaliFunctions.BsAddDays(NepaliFunctions.GetCurrentBsDate(),-1*parseInt(i.disableDaysBefore))),!i.disableAfter&&Number.isInteger(i.disableDaysAfter)&&parseInt(i.disableDaysAfter)>=0&&(i.disableAfter=NepaliFunctions.BsAddDays(NepaliFunctions.GetCurrentBsDate(),parseInt(i.disableDaysAfter)));for(var T=document.createElement("TBODY"),S=document.createElement("TR"),I=document.createElement("TD"),x=document.createElement("A");Y<B;){if(M=Y,M%7==0&&(S=document.createElement("TR")),F=M-A+1,E=e.toString()+"-"+NepaliFunctions.Get2DigitNo(t)+"-"+NepaliFunctions.Get2DigitNo(F),C="",C=e===r&&t===a&&F===o?"ndp-selected":e===s&&t===c&&F===m?"ndp-current":"ndp-date",M<A)I=document.createElement("TD"),S.appendChild(I);else{if(I=document.createElement("TD"),I.setAttribute("class",C),i.disableAfter&&NepaliFunctions.CompareBsDates(NepaliFunctions.ConvertToDateObject(E,"YYYY-MM-DD"),i.disableAfter)||i.disableBefore&&NepaliFunctions.CompareBsDates(i.disableBefore,NepaliFunctions.ConvertToDateObject(E,"YYYY-MM-DD")))x=document.createElement("A"),x.setAttribute("class","ndp-disabled"),x.setAttribute("href","javascript:void(0)"),x.setAttribute("title",E),x.innerHTML=u?F:NepaliFunctions.ConvertToUnicode(F),I.appendChild(x);else{var G=NepaliFunctions.ConvertToDateObject(E,"YYYY-MM-DD"),w=NepaliFunctions.ConvertDateFormat(G,i.dateFormat);x=document.createElement("A"),x.setAttribute("href","javascript:void(0)"),x.setAttribute("title",E),x.setAttribute("data-value",w),x.innerHTML=u?F:NepaliFunctions.ConvertToUnicode(F),x.addEventListener("click",function(){p(this)}),I.appendChild(x)}S.appendChild(I)}M%7==6&&(T.appendChild(S),S=document.createElement("TR")),Y+=1}return S.children.length>0&&T.appendChild(S),T}function d(e){var t=l(e),n=m(t),r=h(e,t),a=document.getElementById("ndp-nepali-box"),o=a.offsetHeight,i=t.y+e.offsetHeight;r<o&&r<n&&(i=i-o-e.offsetHeight),a.style.top=i+"px",a.style.left=t.x+"px"}function l(e){var t=0,n=0;return t+=s(e),n+=c(e),{x:t,y:n}}function s(e){for(var t=0;e;)t+=e.offsetLeft,e=e.offsetParent;return t+=document.firstChild.offsetLeft||0}function c(e){for(var t=0;e;)t+=e.offsetTop,e=e.offsetParent;return t+=document.firstChild.offsetTop||0}function m(e){var t=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop;return e.y-t}function h(e,t){var n=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop;return window.innerHeight-t.y-e.offsetHeight+n}function p(e){var t=e.getAttribute("data-value"),n=b(),r=NepaliFunctions.ConvertToDateObject(t,n.dateFormat);n.ndpEnglishInput&&(document.getElementById(n.ndpEnglishInput).value=NepaliFunctions.ConvertDateFormat(NepaliFunctions.BS2AD(r),n.dateFormat)),document.getElementById(E).value=n.unicodeDate?NepaliFunctions.ConvertToUnicode(t):t,n.onChange&&n.onChange({bs:t,ad:NepaliFunctions.ConvertDateFormat(NepaliFunctions.BS2AD(r),n.dateFormat),object:r}),a("setSelectedDay")}function f(e,t,n){var r=b(),a="english"==r.language,o=1,i=12;r.disableBefore&&r.disableBefore.year==t&&(o=r.disableBefore.month),r.disableAfter&&r.disableAfter.year==t&&(i=r.disableAfter.month);var u=a?NepaliFunctions.GetBsMonths():NepaliFunctions.GetBsMonthsInUnicode(),d=document.createElement("SELECT");return d.setAttribute("id","ndp-month-select"),u.forEach(function(t,n){if(n>=o-1&&n<=i-1){var r=document.createElement("OPTION");r.setAttribute("value",n+1),r.innerHTML=t,n+1==e&&r.setAttribute("selected","selected"),d.appendChild(r)}}),d.addEventListener("change",function(){v(t,n)}),d}function y(e,t,n,r){var a=b(),o="english"==a.language,i=1970,u=2099;a.disableBefore&&a.disableBefore.year>i&&(i=a.disableBefore.year),a.disableAfter&&a.disableAfter.year<u&&(u=a.disableAfter.year);var d=document.createElement("SELECT");d.setAttribute("id","ndp-year-select");for(var l=Math.round(n/2)>0&&parseInt(t)-Math.round(n/2)>=i?parseInt(t)-Math.round(n/2):i,s=Math.round(n/2)>0&&parseInt(t)+Math.round(n/2)<=u?parseInt(t)+Math.round(n/2):u;l<=s;){var c=document.createElement("OPTION");c.setAttribute("value",l),c.innerHTML=o?l:NepaliFunctions.ConvertToUnicode(l),t==l&&c.setAttribute("selected","selected"),d.appendChild(c),l+=1}return d.addEventListener("change",function(){g(e,r)}),d}function v(e,t){e=b().ndpYear?parseInt(document.getElementById("ndp-year-select").value):e,i(e,parseInt(document.getElementById("ndp-month-select").value),t)}function g(e,t){var n=b(),r=document.getElementById("ndp-year-select"),a=document.getElementById("ndp-month-select"),o=parseInt(r.value);e=n.ndpMonth?parseInt(a.value):e;var u=n.disableDaysBefore,d=n.disableDaysAfter;u&&u.year==o&&e<=u.month&&(e=u.month),d&&d.year==o&&e>=d.month&&(e=d.month),i(o,e,t)}function b(e){var t={};if(e||(e=E),e){var n=C[e],r=n.dateFormat||"YYYY-MM-DD",a=n.disableBefore?NepaliFunctions.ConvertToDateObject(n.disableBefore,r):{year:1970,month:1,day:1},o=n.disableAfter?NepaliFunctions.ConvertToDateObject(n.disableAfter,r):{year:2099,month:12,day:30},i=n.disableDaysBefore||(0==n.disableDaysBefore?0:null),u=n.disableDaysAfter||(0==n.disableDaysAfter?0:null);Number.isInteger(i)&&i>=0&&(a=NepaliFunctions.BsAddDays(NepaliFunctions.GetCurrentBsDate(),-1*i)),Number.isInteger(u)&&u>=0&&(o=NepaliFunctions.BsAddDays(NepaliFunctions.GetCurrentBsDate(),u)),n&&(t={ndpTriggerButton:n.ndpTriggerButton||null,ndpTriggerButtonClass:n.ndpTriggerButtonClass||null,ndpTriggerButtonText:n.ndpTriggerButtonText||null,ndpEnglishInput:n.ndpEnglishInput||null,ndpYearCount:n.ndpYearCount||null,ndpYear:n.ndpYear||null,ndpMonth:n.ndpMonth||null,disableDaysBefore:i,disableDaysAfter:u,disableBefore:a,disableAfter:o,dateFormat:r,onChange:n.onChange||null,unicodeDate:n.unicodeDate||null,readOnlyInput:n.readOnlyInput||!1,container:n.container||"body",language:n.language||"nepali"})}return t}function D(){var e=document.activeElement,t=e.getAttribute("id");a("ndpInputOnFocus"),o(t)}function N(){var e=window.event||arguments.callee.caller.arguments[0];27==e.which&&(a("ndpKeyDown-Esc"),e.stopPropagation())}function A(e){if(!document.getElementById("ndp-nepali-box")){var t=b(e);document.querySelector(t.container).insertAdjacentElement("beforeend",M(t));var a=document.getElementById("ndp-nepali-box");a.addEventListener("mouseenter",n),a.addEventListener("mouseleave",r)}}function M(e){var t="english"==e.language,n=document.createElement("DIV");n.setAttribute("id","ndp-nepali-box"),n.setAttribute("tabindex","-1"),n.setAttribute("class","ndp-corner-all"),n.addEventListener("keydown",N);var r=document.createElement("DIV");r.setAttribute("id","ndp-header"),r.setAttribute("class","ndp-corner-all ndp-header");var a=document.createElement("SPAN");a.setAttribute("id","currentMonth"),r.appendChild(a);var o=document.createElement("DIV");o.setAttribute("id","currentMonth");var i=document.createElement("TABLE");o.setAttribute("id","ndp-table");var u=document.createElement("TR");u.setAttribute("class","ndp-days"),(t?NepaliFunctions.GetAdDaysShort():NepaliFunctions.GetBsDaysUnicodeShort()).forEach(function(e){var t=document.createElement("TH");t.innerHTML=e,u.appendChild(t)});var d=document.createElement("THEAD");d.appendChild(u);var l=document.createElement("TBODY");return i.appendChild(d),i.appendChild(l),o.appendChild(i),n.appendChild(r),n.appendChild(o),n}var Y=!1,B=!1,C=[],E=null;Object.prototype.nepaliDatePicker=function(e){function t(e){e.classList.remove("ndp-nepali-calendar"),e.removeAttribute("ndp-calendar-data"),e.removeAttribute("readonly"),e.removeEventListener("focus",D),e.removeEventListener("mouseenter",n),e.removeEventListener("mouseleave",r),e.removeEventListener("keydown",N);var t=e.getAttribute("id");delete C[t];var a=e.nextSibling;a&&"BUTTON"==a.tagName&&"ndp-click-trigger"==a.getAttribute("id")&&a.parentNode.removeChild(a)}function i(e,t){var n=e.getAttribute("id");if(C[n]=t,C[n].raw=u(t),e.value){var r=NepaliFunctions.ParseDate(e.value);r&&r.parsedFormat&&(t.dateFormat=t.dateFormat?t.dateFormat:r.parsedFormat)}}function u(e){if(null==e||"object"!=typeof e)return e;var t=e.constructor();for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function d(e,t){for(var n=!1;e;){e.getAttribute("id")==t&&(n=!0,e=null),e=e?e.offsetParent:null}return n}function l(){var e=document.getElementById(E),t=document.activeElement,n=e==t,r=d(t,"ndp-nepali-box"),o="ndp-click-trigger"==t.getAttribute("id"),i="ndp-month-select"==t.getAttribute("id")||"ndp-year-select"==t.getAttribute("id");("BODY"==t.tagName||r||o)&&(n=!0),Y&&(!B&&!i||B&&!n)&&a("ndpInputOnBlur")}function s(e,t){var n=e.getAttribute("id");if(null==n){var r=btoa((new Date).toISOString()+Math.random());e.setAttribute("id",r)}if(e.classList.add("ndp-nepali-calendar"),i(e,t),t.ndpTriggerButton||e.addEventListener("focus",D),e.addEventListener("blur",l),e.setAttribute("autocomplete","off"),e.addEventListener("keydown",N),t.readOnlyInput&&e.setAttribute("readonly","readonly"),t.ndpTriggerButton){var a=t.ndpTriggerButtonClass&&""!==t.ndpTriggerButtonClass?t.ndpTriggerButtonClass:"",o=t.ndpTriggerButtonText&&""!==t.ndpTriggerButtonText?t.ndpTriggerButtonText:"Pick Date",u=document.createElement("BUTTON");u.setAttribute("id","ndp-click-trigger"),u.setAttribute("class",a),u.addEventListener("click",function(){h(n)}),u.addEventListener("blur",c),u.innerHTML=o,e.insertAdjacentElement("afterend",u)}}function c(){l()}function m(){var e=document.getElementById("ndp-nepali-box");return e&&parseInt(e.style.top)>0}function h(e){v||(v=!0,m()?a("toggleCalendar"):o(e),v=!1)}var p=this;if("remove"!=e){if(e=void 0===e?{}:e,p.length&&p.length>0)for(var f=0;f<p.length;f++)s(p[f],e);else s(p,e);var y=document.querySelectorAll(".ndp-nepali-calendar");if(y.length>0)for(var f=0;f<y.length;f++)y[f].addEventListener("mouseenter",n),y[f].addEventListener("mouseleave",r);window.addEventListener("mouseup",function(){if(m()){"ndp-click-trigger"==document.activeElement.getAttribute("id")||l()}});var v=!1}else if(p.length&&p.length>0)for(var f=0;f<p.length;f++)t(p[f]);else t(p)},Object.defineProperty(Object.prototype,"nepaliDatePicker",{enumerable:!1,value:nepaliDatePicker})}();
const bs2ad = (date, format) =>{
    if(!format)
        format = "YYYY-MM-DD";
    var d = NepaliFunctions.ConvertToDateObject(date, format);
    return NepaliFunctions.BS2AD(d);
} 
const ad2bs =(date, format) => {
    if(!format)
        format = "YYYY-MM-DD";
    var d = NepaliFunctions.ConvertToDateObject(date, format);
    return NepaliFunctions.AD2BS(d);
}

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/*
 * Angular bootstraping
 */

/*
 * App Module
 * our top level module that holds all of our components
 */

/*
 * Bootstrap our Angular app with a top level NgModule
 */
console.log('gg');
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])
    .then(function () { return console.log('Angular bootstrapped'); })
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Minor Projects\AppointX\AppointXUpgrade\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.8b4872cc1cd6aba1b015.js.map