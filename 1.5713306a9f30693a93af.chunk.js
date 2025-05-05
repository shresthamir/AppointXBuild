webpackJsonp([1],{

/***/ 1376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleModule", (function() { return ScheduleModule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(1378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schedule_component__ = __webpack_require__(1549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schedule_routing__ = __webpack_require__(1563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ScheduleInput_masterSchedule_component__ = __webpack_require__(1543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__scheduleInput_service__ = __webpack_require__(1492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_services_permission_guard_service__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ScheduleInput_scheduleInput_component__ = __webpack_require__(1544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_TreatmentEntry_Treatment_component__ = __webpack_require__(1546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_FollowUp_followup_component__ = __webpack_require__(1542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_ckeditor__ = __webpack_require__(1566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_smart_table__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_smart_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_smart_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_CustomerSelect_customerSelect_component__ = __webpack_require__(1499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_TreatmentEntry_TreatmentList_component__ = __webpack_require__(1548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_TreatmentEntry_TreatmentDetails_component__ = __webpack_require__(1547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_CustomerSelect_customerSelect_pipe__ = __webpack_require__(1561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_CustomerSelect_mobileSelect_pipe__ = __webpack_require__(1562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__common_nepali_date_picker_nepali_date_picker_module__ = __webpack_require__(1498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_ScheduleSearch_customer_all_schedule_component__ = __webpack_require__(1545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_CheckIn_checkIn_component__ = __webpack_require__(1539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_CheckOut_CheckInList_component__ = __webpack_require__(1540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_CheckOut_CheckOut_component__ = __webpack_require__(1541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular2_multiselect_dropdown__ = __webpack_require__(1495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_AppointmentRequest_RequestList_component__ = __webpack_require__(1537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_AppointmentRequest_requestDetail_component__ = __webpack_require__(1538);




























//import {DayPilot} from "daypilot-pro-angular";
let ScheduleModule = class ScheduleModule {
};
ScheduleModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_6__schedule_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_ckeditor__["CKEditorModule"],
            __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14_ng2_smart_table__["Ng2SmartTableModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_20__common_nepali_date_picker_nepali_date_picker_module__["a" /* NepaliDateModule */],
            __WEBPACK_IMPORTED_MODULE_25_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */]
        ],
        declarations: [
            //   DayPilot.Angular.Scheduler,
            //  DayPilot.Angular.Modal,
            //  DayPilot.Angular.Navigator,
            __WEBPACK_IMPORTED_MODULE_5__schedule_component__["a" /* Schedule */], __WEBPACK_IMPORTED_MODULE_7__components_ScheduleInput_masterSchedule_component__["a" /* MasterSchedule */], __WEBPACK_IMPORTED_MODULE_10__components_ScheduleInput_scheduleInput_component__["a" /* ScheduleInput */],
            __WEBPACK_IMPORTED_MODULE_11__components_TreatmentEntry_Treatment_component__["a" /* TreatmentEntry */], __WEBPACK_IMPORTED_MODULE_12__components_FollowUp_followup_component__["a" /* FollowUp */], __WEBPACK_IMPORTED_MODULE_15__components_CustomerSelect_customerSelect_component__["a" /* CustomerSelect */], __WEBPACK_IMPORTED_MODULE_16__components_TreatmentEntry_TreatmentList_component__["a" /* TreatmentList */], __WEBPACK_IMPORTED_MODULE_17__components_TreatmentEntry_TreatmentDetails_component__["a" /* TreatmentDetails */],
            __WEBPACK_IMPORTED_MODULE_18__components_CustomerSelect_customerSelect_pipe__["a" /* CustomerPipe */], __WEBPACK_IMPORTED_MODULE_19__components_CustomerSelect_mobileSelect_pipe__["a" /* MobilePipe */], __WEBPACK_IMPORTED_MODULE_21__components_ScheduleSearch_customer_all_schedule_component__["a" /* CustomerAllSchedule */],
            __WEBPACK_IMPORTED_MODULE_22__components_CheckIn_checkIn_component__["a" /* CheckIn */], __WEBPACK_IMPORTED_MODULE_23__components_CheckOut_CheckInList_component__["a" /* CheckInList */], __WEBPACK_IMPORTED_MODULE_24__components_CheckOut_CheckOut_component__["a" /* CheckOutEntry */], __WEBPACK_IMPORTED_MODULE_26__components_AppointmentRequest_RequestList_component__["a" /* AppointmentRequestList */], __WEBPACK_IMPORTED_MODULE_27__components_AppointmentRequest_requestDetail_component__["a" /* AppointmentRequest */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__scheduleInput_service__["a" /* ScheduleInputService */], __WEBPACK_IMPORTED_MODULE_9__common_services_permission_guard_service__["a" /* CanActivateTeam */]
        ],
    }), 
    __metadata('design:paramtypes', [])
], ScheduleModule);


/***/ }),

/***/ 1378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BsRootModule */
/* unused harmony export Ng2BootstrapModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_accordion_module__ = __webpack_require__(1415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_alert_module__ = __webpack_require__(1417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buttons_buttons_module__ = __webpack_require__(1420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carousel_carousel_module__ = __webpack_require__(1421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__collapse_collapse_module__ = __webpack_require__(1393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_module__ = __webpack_require__(1429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_module__ = __webpack_require__(1435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__ = __webpack_require__(1438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_module__ = __webpack_require__(1441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__progressbar_progressbar_module__ = __webpack_require__(1447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rating_rating_module__ = __webpack_require__(1449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sortable__ = __webpack_require__(1450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tabs_tabs_module__ = __webpack_require__(1454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__timepicker_timepicker_module__ = __webpack_require__(1456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_module__ = __webpack_require__(1458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__typeahead_typeahead_module__ = __webpack_require__(1462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__popover_popover_module__ = __webpack_require__(1443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__accordion__ = __webpack_require__(1470);
/* unused harmony reexport AccordionComponent */
/* unused harmony reexport AccordionConfig */
/* unused harmony reexport AccordionModule */
/* unused harmony reexport AccordionPanelComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__alert__ = __webpack_require__(1471);
/* unused harmony reexport AlertComponent */
/* unused harmony reexport AlertConfig */
/* unused harmony reexport AlertModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__buttons__ = __webpack_require__(1472);
/* unused harmony reexport ButtonCheckboxDirective */
/* unused harmony reexport ButtonRadioDirective */
/* unused harmony reexport ButtonsModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__carousel__ = __webpack_require__(1473);
/* unused harmony reexport CarouselComponent */
/* unused harmony reexport CarouselConfig */
/* unused harmony reexport CarouselModule */
/* unused harmony reexport SlideComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__collapse__ = __webpack_require__(1474);
/* unused harmony reexport CollapseDirective */
/* unused harmony reexport CollapseModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__datepicker__ = __webpack_require__(1475);
/* unused harmony reexport DateFormatter */
/* unused harmony reexport DatePickerComponent */
/* unused harmony reexport DatepickerConfig */
/* unused harmony reexport DatepickerModule */
/* unused harmony reexport DayPickerComponent */
/* unused harmony reexport MonthPickerComponent */
/* unused harmony reexport YearPickerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__modal__ = __webpack_require__(1477);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_24__modal__["a"]; }));
/* unused harmony reexport ModalBackdropOptions */
/* unused harmony reexport ModalBackdropComponent */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_24__modal__["b"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dropdown__ = __webpack_require__(1476);
/* unused harmony reexport DropdownConfig */
/* unused harmony reexport DropdownDirective */
/* unused harmony reexport DropdownMenuDirective */
/* unused harmony reexport DropdownModule */
/* unused harmony reexport DropdownToggleDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pagination__ = __webpack_require__(1478);
/* unused harmony reexport PagerComponent */
/* unused harmony reexport PaginationComponent */
/* unused harmony reexport PaginationConfig */
/* unused harmony reexport PaginationModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__progressbar__ = __webpack_require__(1481);
/* unused harmony reexport BarComponent */
/* unused harmony reexport ProgressbarComponent */
/* unused harmony reexport ProgressbarConfig */
/* unused harmony reexport ProgressbarModule */
/* unused harmony reexport ProgressDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__rating__ = __webpack_require__(1482);
/* unused harmony reexport RatingComponent */
/* unused harmony reexport RatingModule */
/* unused harmony reexport DraggableItemService */
/* unused harmony reexport SortableComponent */
/* unused harmony reexport SortableModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__tabs__ = __webpack_require__(1484);
/* unused harmony reexport NgTranscludeDirective */
/* unused harmony reexport TabDirective */
/* unused harmony reexport TabHeadingDirective */
/* unused harmony reexport TabsetComponent */
/* unused harmony reexport TabsetConfig */
/* unused harmony reexport TabsModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__timepicker__ = __webpack_require__(1485);
/* unused harmony reexport TimepickerComponent */
/* unused harmony reexport TimepickerConfig */
/* unused harmony reexport TimepickerModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__tooltip__ = __webpack_require__(1486);
/* unused harmony reexport TooltipConfig */
/* unused harmony reexport TooltipContainerComponent */
/* unused harmony reexport TooltipDirective */
/* unused harmony reexport TooltipModule */
/* unused harmony reexport TooltipOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__typeahead__ = __webpack_require__(1488);
/* unused harmony reexport TypeaheadOptions */
/* unused harmony reexport TypeaheadContainerComponent */
/* unused harmony reexport TypeaheadDirective */
/* unused harmony reexport TypeaheadMatch */
/* unused harmony reexport TypeaheadModule */
/* unused harmony reexport TypeaheadUtils */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__popover__ = __webpack_require__(1479);
/* unused harmony reexport PopoverConfig */
/* unused harmony reexport PopoverContainerComponent */
/* unused harmony reexport PopoverDirective */
/* unused harmony reexport PopoverModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__utils__ = __webpack_require__(1463);
/* unused harmony reexport OnChange */
/* unused harmony reexport LinkedList */
/* unused harmony reexport isBs3 */
/* unused harmony reexport Trigger */
/* unused harmony reexport Utils */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__component_loader__ = __webpack_require__(1380);
/* unused harmony reexport ComponentLoader */
/* unused harmony reexport ComponentLoaderFactory */
/* unused harmony reexport ContentRef */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__positioning__ = __webpack_require__(1381);
/* unused harmony reexport Positioning */
/* unused harmony reexport PositioningService */
/* unused harmony reexport positionElements */






































var MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__accordion_accordion_module__["a" /* AccordionModule */], __WEBPACK_IMPORTED_MODULE_2__alert_alert_module__["a" /* AlertModule */], __WEBPACK_IMPORTED_MODULE_3__buttons_buttons_module__["a" /* ButtonsModule */],
    __WEBPACK_IMPORTED_MODULE_4__carousel_carousel_module__["a" /* CarouselModule */], __WEBPACK_IMPORTED_MODULE_5__collapse_collapse_module__["a" /* CollapseModule */], __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_module__["a" /* DatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_module__["a" /* DropdownModule */], __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__["a" /* ModalModule */], __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_module__["a" /* PaginationModule */],
    __WEBPACK_IMPORTED_MODULE_10__progressbar_progressbar_module__["a" /* ProgressbarModule */], __WEBPACK_IMPORTED_MODULE_17__popover_popover_module__["a" /* PopoverModule */], __WEBPACK_IMPORTED_MODULE_11__rating_rating_module__["a" /* RatingModule */],
    __WEBPACK_IMPORTED_MODULE_13__tabs_tabs_module__["a" /* TabsModule */], __WEBPACK_IMPORTED_MODULE_14__timepicker_timepicker_module__["a" /* TimepickerModule */], __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_module__["a" /* TooltipModule */],
    __WEBPACK_IMPORTED_MODULE_16__typeahead_typeahead_module__["a" /* TypeaheadModule */]
];
var BsRootModule = (function () {
    function BsRootModule() {
    }
    BsRootModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_1__accordion_accordion_module__["a" /* AccordionModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_2__alert_alert_module__["a" /* AlertModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_3__buttons_buttons_module__["a" /* ButtonsModule */].forRoot(),
                        __WEBPACK_IMPORTED_MODULE_4__carousel_carousel_module__["a" /* CarouselModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_5__collapse_collapse_module__["a" /* CollapseModule */].forRoot(),
                        __WEBPACK_IMPORTED_MODULE_6__datepicker_datepicker_module__["a" /* DatepickerModule */].forRoot(),
                        __WEBPACK_IMPORTED_MODULE_7__dropdown_dropdown_module__["a" /* DropdownModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_8__modal_modal_module__["a" /* ModalModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_module__["a" /* PaginationModule */].forRoot(),
                        __WEBPACK_IMPORTED_MODULE_10__progressbar_progressbar_module__["a" /* ProgressbarModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_17__popover_popover_module__["a" /* PopoverModule */].forRoot(),
                        __WEBPACK_IMPORTED_MODULE_11__rating_rating_module__["a" /* RatingModule */].forRoot(),
                        __WEBPACK_IMPORTED_MODULE_13__tabs_tabs_module__["a" /* TabsModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_14__timepicker_timepicker_module__["a" /* TimepickerModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_module__["a" /* TooltipModule */].forRoot(),
                        __WEBPACK_IMPORTED_MODULE_16__typeahead_typeahead_module__["a" /* TypeaheadModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_12__sortable__["a" /* SortableModule */].forRoot()
                    ],
                    exports: MODULES
                },] },
    ];
    /** @nocollapse */
    BsRootModule.ctorParameters = function () { return []; };
    return BsRootModule;
}());
var Ng2BootstrapModule = (function () {
    function Ng2BootstrapModule() {
    }
    Ng2BootstrapModule.forRoot = function () {
        return { ngModule: BsRootModule };
    };
    Ng2BootstrapModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ exports: MODULES },] },
    ];
    /** @nocollapse */
    Ng2BootstrapModule.ctorParameters = function () { return []; };
    return Ng2BootstrapModule;
}());
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isBs3;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__(1387);

function isBs3() {
    return __WEBPACK_IMPORTED_MODULE_0__facade_browser__["a" /* window */].__theme !== 'bs4';
}
//# sourceMappingURL=ng2-bootstrap-config.js.map

/***/ }),

/***/ 1380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_loader_class__ = __webpack_require__(1424);
/* unused harmony reexport ComponentLoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_factory__ = __webpack_require__(1425);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_1__component_loader_factory__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_ref_class__ = __webpack_require__(1426);
/* unused harmony reexport ContentRef */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_positioning__ = __webpack_require__(1444);
/* unused harmony reexport positionElements */
/* unused harmony reexport Positioning */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__positioning_service__ = __webpack_require__(1480);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_1__positioning_service__["a"]; }));


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return DatePickerInnerComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_formatter__ = __webpack_require__(1427);


// const MIN_DATE:Date = void 0;
// const MAX_DATE:Date = void 0;
// const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/*
 const KEYS = {
 13: 'enter',
 32: 'space',
 33: 'pageup',
 34: 'pagedown',
 35: 'end',
 36: 'home',
 37: 'left',
 38: 'up',
 39: 'right',
 40: 'down'
 };
 */
var DatePickerInnerComponent = (function () {
    function DatePickerInnerComponent() {
        this.selectionDone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](undefined);
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](false);
        this.stepDay = {};
        this.stepMonth = {};
        this.stepYear = {};
        this.modes = ['day', 'month', 'year'];
        this.dateFormatter = new __WEBPACK_IMPORTED_MODULE_1__date_formatter__["a" /* DateFormatter */]();
    }
    Object.defineProperty(DatePickerInnerComponent.prototype, "activeDate", {
        get: function () {
            return this._activeDate;
        },
        set: function (value) {
            this._activeDate = value;
        },
        enumerable: true,
        configurable: true
    });
    // todo: add formatter value to Date object
    DatePickerInnerComponent.prototype.ngOnInit = function () {
        // todo: use date for unique value
        this.uniqueId = 'datepicker-' + '-' + Math.floor(Math.random() * 10000);
        if (this.initDate) {
            this.activeDate = this.initDate;
            this.selectedDate = new Date(this.activeDate.valueOf());
            this.update.emit(this.activeDate);
        }
        else if (this.activeDate === undefined) {
            this.activeDate = new Date();
        }
    };
    // this.refreshView should be called here to reflect the changes on the fly
    // tslint:disable-next-line:no-unused-variable
    DatePickerInnerComponent.prototype.ngOnChanges = function (changes) {
        this.refreshView();
    };
    DatePickerInnerComponent.prototype.setCompareHandler = function (handler, type) {
        if (type === 'day') {
            this.compareHandlerDay = handler;
        }
        if (type === 'month') {
            this.compareHandlerMonth = handler;
        }
        if (type === 'year') {
            this.compareHandlerYear = handler;
        }
    };
    DatePickerInnerComponent.prototype.compare = function (date1, date2) {
        if (date1 === undefined || date2 === undefined) {
            return undefined;
        }
        if (this.datepickerMode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1, date2);
        }
        if (this.datepickerMode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1, date2);
        }
        if (this.datepickerMode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1, date2);
        }
        return void 0;
    };
    DatePickerInnerComponent.prototype.setRefreshViewHandler = function (handler, type) {
        if (type === 'day') {
            this.refreshViewHandlerDay = handler;
        }
        if (type === 'month') {
            this.refreshViewHandlerMonth = handler;
        }
        if (type === 'year') {
            this.refreshViewHandlerYear = handler;
        }
    };
    DatePickerInnerComponent.prototype.refreshView = function () {
        if (this.datepickerMode === 'day' && this.refreshViewHandlerDay) {
            this.refreshViewHandlerDay();
        }
        if (this.datepickerMode === 'month' && this.refreshViewHandlerMonth) {
            this.refreshViewHandlerMonth();
        }
        if (this.datepickerMode === 'year' && this.refreshViewHandlerYear) {
            this.refreshViewHandlerYear();
        }
    };
    DatePickerInnerComponent.prototype.dateFilter = function (date, format) {
        return this.dateFormatter.format(date, format);
    };
    DatePickerInnerComponent.prototype.isActive = function (dateObject) {
        if (this.compare(dateObject.date, this.activeDate) === 0) {
            this.activeDateId = dateObject.uid;
            return true;
        }
        return false;
    };
    DatePickerInnerComponent.prototype.createDateObject = function (date, format) {
        var dateObject = {};
        dateObject.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        dateObject.label = this.dateFilter(date, format);
        dateObject.selected = this.compare(date, this.selectedDate) === 0;
        dateObject.disabled = this.isDisabled(date);
        dateObject.current = this.compare(date, new Date()) === 0;
        dateObject.customClass = this.getCustomClassForDate(dateObject.date);
        return dateObject;
    };
    DatePickerInnerComponent.prototype.split = function (arr, size) {
        var arrays = [];
        while (arr.length > 0) {
            arrays.push(arr.splice(0, size));
        }
        return arrays;
    };
    // Fix a hard-reproducible bug with timezones
    // The bug depends on OS, browser, current timezone and current date
    // i.e.
    // var date = new Date(2014, 0, 1);
    // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
    // date.getHours()); can result in "2013 11 31 23" because of the bug.
    DatePickerInnerComponent.prototype.fixTimeZone = function (date) {
        var hours = date.getHours();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours === 23 ? hours + 2 : 0);
    };
    DatePickerInnerComponent.prototype.select = function (date, isManual) {
        if (isManual === void 0) { isManual = true; }
        if (this.datepickerMode === this.minMode) {
            if (!this.activeDate) {
                this.activeDate = new Date(0, 0, 0, 0, 0, 0, 0);
            }
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            if (isManual) {
                this.selectionDone.emit(this.activeDate);
            }
        }
        else {
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) - 1];
        }
        this.selectedDate = new Date(this.activeDate.valueOf());
        this.update.emit(this.activeDate);
        this.refreshView();
    };
    DatePickerInnerComponent.prototype.move = function (direction) {
        var expectedStep;
        if (this.datepickerMode === 'day') {
            expectedStep = this.stepDay;
        }
        if (this.datepickerMode === 'month') {
            expectedStep = this.stepMonth;
        }
        if (this.datepickerMode === 'year') {
            expectedStep = this.stepYear;
        }
        if (expectedStep) {
            var year = this.activeDate.getFullYear() + direction * (expectedStep.years || 0);
            var month = this.activeDate.getMonth() + direction * (expectedStep.months || 0);
            this.activeDate = new Date(year, month, 1);
            this.refreshView();
        }
    };
    DatePickerInnerComponent.prototype.toggleMode = function (direction) {
        direction = direction || 1;
        if ((this.datepickerMode === this.maxMode && direction === 1) ||
            (this.datepickerMode === this.minMode && direction === -1)) {
            return;
        }
        this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) + direction];
        this.refreshView();
    };
    DatePickerInnerComponent.prototype.getCustomClassForDate = function (date) {
        var _this = this;
        if (!this.customClass) {
            return '';
        }
        // todo: build a hash of custom classes, it will work faster
        var customClassObject = this.customClass
            .find((function (customClass) {
            return customClass.date.valueOf() === date.valueOf() &&
                customClass.mode === _this.datepickerMode;
        }), this);
        return customClassObject === undefined ? '' : customClassObject.clazz;
    };
    DatePickerInnerComponent.prototype.compareDateDisabled = function (date1Disabled, date2) {
        if (date1Disabled === undefined || date2 === undefined) {
            return undefined;
        }
        if (date1Disabled.mode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1Disabled.date, date2);
        }
        return undefined;
    };
    DatePickerInnerComponent.prototype.isDisabled = function (date) {
        var _this = this;
        var isDateDisabled = false;
        if (this.dateDisabled) {
            this.dateDisabled.forEach((function (disabledDate) {
                if (_this.compareDateDisabled(disabledDate, date) === 0) {
                    isDateDisabled = true;
                }
            }));
        }
        return (isDateDisabled || (this.minDate && this.compare(date, this.minDate) < 0) ||
            (this.maxDate && this.compare(date, this.maxDate) > 0));
    };
    DatePickerInnerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'datepicker-inner',
                    template: "\n    <div *ngIf=\"datepickerMode\" class=\"well well-sm bg-faded p-a card\" role=\"application\" ><!--&lt;!&ndash;ng-keydown=\"keydown($event)\"&ndash;&gt;-->\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    DatePickerInnerComponent.ctorParameters = function () { return []; };
    DatePickerInnerComponent.propDecorators = {
        'datepickerMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'startingDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'yearRange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'minMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'showWeeks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatMonth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatYear': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatDayHeader': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatDayTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatMonthTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onlyCurrentMonth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'shortcutPropagation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'monthColLimit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'yearColLimit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dateDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'initDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'selectionDone': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'update': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'activeDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return DatePickerInnerComponent;
}());
//# sourceMappingURL=datepicker-inner.component.js.map

/***/ }),

/***/ 1383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return DropdownDirective; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__ = __webpack_require__(1379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_service__ = __webpack_require__(1396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdown_config__ = __webpack_require__(1395);




/**
 * Mark dropdown content with this directive
 */
var DropdownDirective = (function () {
    function DropdownDirective(el, ref, config) {
        /** fired when dropdown toggles, $event:boolean equals dropdown isOpen state */
        this.onToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](false);
        /** fired when isOpen value changes */
        this.isOpenChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](false);
        this.addClass = true;
        // @Query('dropdownMenu', {descendants: false})
        // dropdownMenuList:QueryList<ElementRef>) {
        this.el = el;
        this._changeDetector = ref;
        Object.assign(this, config);
        // todo: bind to route change event
    }
    Object.defineProperty(DropdownDirective.prototype, "isOpen", {
        /** if `true` dropdown will be opened */
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            this._isOpen = !!value;
            // todo: implement after porting position
            // if (this.appendToBody && this.menuEl) {
            //
            // }
            // todo: $animate open<->close transitions, as soon as ng2Animate will be
            // ready
            if (this.isOpen) {
                this.focusToggleElement();
                __WEBPACK_IMPORTED_MODULE_2__dropdown_service__["a" /* dropdownService */].open(this);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2__dropdown_service__["a" /* dropdownService */].close(this);
                this.selectedOption = void 0;
            }
            this.onToggle.emit(this.isOpen);
            this.isOpenChange.emit(this.isOpen);
            this._changeDetector.markForCheck();
            // todo: implement call to setIsOpen if set and function
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownDirective.prototype, "isBs3", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    DropdownDirective.prototype.ngOnInit = function () {
        if (this.isOpen) {
        }
    };
    DropdownDirective.prototype.ngOnDestroy = function () {
        if (this.appendToBody && this.menuEl) {
            this.menuEl.nativeElement.remove();
        }
    };
    Object.defineProperty(DropdownDirective.prototype, "dropDownMenu", {
        set: function (dropdownMenu) {
            // init drop down menu
            this.menuEl = dropdownMenu.el;
            if (this.appendToBody) {
                window.document.body.appendChild(this.menuEl.nativeElement);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownDirective.prototype, "dropDownToggle", {
        set: function (dropdownToggle) {
            // init toggle element
            this.toggleEl = dropdownToggle.el;
        },
        enumerable: true,
        configurable: true
    });
    DropdownDirective.prototype.show = function () {
        this.isOpen = true;
    };
    DropdownDirective.prototype.hide = function () {
        this.isOpen = false;
    };
    DropdownDirective.prototype.toggle = function (open) {
        return this.isOpen = arguments.length ? !!open : !this.isOpen;
    };
    DropdownDirective.prototype.focusDropdownEntry = function (keyCode) {
        // If append to body is used.
        var hostEl = this.menuEl ?
            this.menuEl.nativeElement :
            this.el.nativeElement.getElementsByTagName('ul')[0];
        if (!hostEl) {
            // todo: throw exception?
            return;
        }
        var elems = hostEl.getElementsByTagName('a');
        if (!elems || !elems.length) {
            // todo: throw exception?
            return;
        }
        // todo: use parseInt to detect isNumber?
        // todo: or implement selectedOption as a get\set pair with parseInt on set
        switch (keyCode) {
            case (40):
                if (typeof this.selectedOption !== 'number') {
                    this.selectedOption = 0;
                    break;
                }
                if (this.selectedOption === elems.length - 1) {
                    break;
                }
                this.selectedOption++;
                break;
            case (38):
                if (typeof this.selectedOption !== 'number') {
                    return;
                }
                if (this.selectedOption === 0) {
                    // todo: return?
                    break;
                }
                this.selectedOption--;
                break;
            default:
                break;
        }
        elems[this.selectedOption].focus();
    };
    DropdownDirective.prototype.focusToggleElement = function () {
        if (this.toggleEl) {
            this.toggleEl.nativeElement.focus();
        }
    };
    DropdownDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[dropdown]',
                    exportAs: 'bs-dropdown',
                    //tslint:disable-next-line
                    host: { '[class.show]': 'isOpen && !isBs3' }
                },] },
    ];
    /** @nocollapse */
    DropdownDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_3__dropdown_config__["a" /* DropdownConfig */], },
    ]; };
    DropdownDirective.propDecorators = {
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.open',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.active',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'autoClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'keyboardNav': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'appendToBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onToggle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'isOpenChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'addClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.dropdown',] },],
    };
    return DropdownDirective;
}());
//# sourceMappingURL=dropdown.directive.js.map

/***/ }),

/***/ 1384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return PaginationConfig; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

/** Provides default values for Pagination and pager components */
var PaginationConfig = (function () {
    function PaginationConfig() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
    PaginationConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PaginationConfig.ctorParameters = function () { return []; };
    return PaginationConfig;
}());
//# sourceMappingURL=pagination.config.js.map

/***/ }),

/***/ 1385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return PopoverConfig; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
var PopoverConfig = (function () {
    function PopoverConfig() {
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
    }
    PopoverConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PopoverConfig.ctorParameters = function () { return []; };
    return PopoverConfig;
}());
//# sourceMappingURL=popover.config.js.map

/***/ }),

/***/ 1386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TooltipConfig; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

/** Default values provider for tooltip */
var TooltipConfig = (function () {
    function TooltipConfig() {
        /** tooltip placement, supported positions: 'top', 'bottom', 'left', 'right' */
        this.placement = 'top';
        /** array of event names which triggers tooltip opening */
        this.triggers = 'hover focus';
    }
    TooltipConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    TooltipConfig.ctorParameters = function () { return []; };
    return TooltipConfig;
}());
//# sourceMappingURL=tooltip.config.js.map

/***/ }),

/***/ 1387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return win; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return document; }));
/* unused harmony export location */
/* unused harmony export gc */
/* unused harmony export performance */
/* unused harmony export Event */
/* unused harmony export MouseEvent */
/* unused harmony export KeyboardEvent */
/* unused harmony export EventTarget */
/* unused harmony export History */
/* unused harmony export Location */
/* unused harmony export EventListener */
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var win = typeof window !== 'undefined' && window || {};

var document = win.document;
var location = win.location;
var gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
var performance = win['performance'] ? win['performance'] : null;
var Event = win['Event'];
var MouseEvent = win['MouseEvent'];
var KeyboardEvent = win['KeyboardEvent'];
var EventTarget = win['EventTarget'];
var History = win['History'];
var Location = win['Location'];
var EventListener = win['EventListener'];
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ 1388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return AccordionComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_config__ = __webpack_require__(1389);


/** Displays collapsible content panels for presenting information in a limited amount of space. */
var AccordionComponent = (function () {
    function AccordionComponent(config) {
        this.groups = [];
        Object.assign(this, config);
    }
    AccordionComponent.prototype.closeOtherPanels = function (openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach((function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        }));
    };
    AccordionComponent.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    AccordionComponent.prototype.removeGroup = function (group) {
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    AccordionComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'accordion',
                    template: "<ng-content></ng-content>",
                    // tslint:disable-next-line
                    host: {
                        '[class.panel-group]': 'true',
                        '[attr.aria-multiselectable]': 'closeOthers',
                        role: 'tablist'
                    }
                },] },
    ];
    /** @nocollapse */
    AccordionComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__accordion_config__["a" /* AccordionConfig */], },
    ]; };
    AccordionComponent.propDecorators = {
        'closeOthers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return AccordionComponent;
}());
//# sourceMappingURL=accordion.component.js.map

/***/ }),

/***/ 1389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return AccordionConfig; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

/**
 * Configuration service, provides default values for the AccordionComponent.
 */
var AccordionConfig = (function () {
    function AccordionConfig() {
        /** Whether the other panels should be closed when a panel is opened */
        this.closeOthers = false;
    }
    AccordionConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    AccordionConfig.ctorParameters = function () { return []; };
    return AccordionConfig;
}());
//# sourceMappingURL=accordion.config.js.map

/***/ }),

/***/ 1390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return AlertConfig; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var AlertConfig = (function () {
    function AlertConfig() {
        /** default alert type */
        this.type = 'warning';
        /** is alerts are dismissible by default */
        this.dismissible = false;
        /** default time before alert will dismiss */
        this.dismissOnTimeout = undefined;
    }
    AlertConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    AlertConfig.ctorParameters = function () { return []; };
    return AlertConfig;
}());
//# sourceMappingURL=alert.config.js.map

/***/ }),

/***/ 1391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Direction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return CarouselComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_config__ = __webpack_require__(1392);
// todo: add animation



var Direction;
(function (Direction) {
    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
    Direction[Direction["NEXT"] = 1] = "NEXT";
    Direction[Direction["PREV"] = 2] = "PREV";
})(Direction || (Direction = {}));
/**
 * Base element to create carousel
 */
var CarouselComponent = (function () {
    function CarouselComponent(config) {
        /** Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property */
        this.activeSlideChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](false);
        this._slides = new __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* LinkedList */]();
        this.destroyed = false;
        Object.assign(this, config);
    }
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        get: function () {
            return this._currentActiveSlide;
        },
        /** Index of currently displayed slide(started for 0) */
        set: function (index) {
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle automatically.
         */
        get: function () {
            return this._interval;
        },
        set: function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        get: function () {
            return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    CarouselComponent.prototype.ngOnDestroy = function () {
        this.destroyed = true;
    };
    /**
     * Adds new slide. If this slide is first in collection - set it as active and starts auto changing
     * @param slide
     */
    CarouselComponent.prototype.addSlide = function (slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    };
    /**
     * Removes specified slide. If this slide is active - will roll to another slide
     * @param slide
     */
    CarouselComponent.prototype.removeSlide = function (slide) {
        var _this = this;
        var remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            var nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is FALSE or to previous, if noWrap is TRUE
                // in case, if this slide in middle of collection, index of next slide is same to removed
                nextSlideIndex_1 = !this.isLast(remIndex) ? remIndex :
                    this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout((function () {
                _this._select(nextSlideIndex_1);
            }), 0);
        }
        else {
            this._slides.remove(remIndex);
            var currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout((function () {
                // after removing, need to actualize index of current active slide
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }), 0);
        }
    };
    /**
     * Rolling to next slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    CarouselComponent.prototype.nextSlide = function (force) {
        if (force === void 0) { force = false; }
        this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
    };
    /**
     * Rolling to previous slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    CarouselComponent.prototype.previousSlide = function (force) {
        if (force === void 0) { force = false; }
        this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
    };
    /**
     * Rolling to specified slide
     * @param index: {number} index of slide, which must be shown
     */
    CarouselComponent.prototype.selectSlide = function (index) {
        this.activeSlide = index;
    };
    /**
     * Starts a auto changing of slides
     */
    CarouselComponent.prototype.play = function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * Stops a auto changing of slides
     */
    CarouselComponent.prototype.pause = function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * Finds and returns index of currently displayed slide
     * @returns {number}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = function () {
        return this._slides.findIndex((function (slide) { return slide.active; }));
    };
    /**
     * Defines, whether the specified index is last in collection
     * @param index
     * @returns {boolean}
     */
    CarouselComponent.prototype.isLast = function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * Defines next slide index, depending of direction
     * @param direction: Direction(UNKNOWN|PREV|NEXT)
     * @param force: {boolean} if TRUE - will ignore noWrap flag, else will return undefined if next slide require wrapping
     * @returns {any}
     */
    CarouselComponent.prototype.findNextSlideIndex = function (direction, force) {
        var nextSlideIndex = 0;
        if (!force && (this.isLast(this.activeSlide) && direction !== Direction.PREV && this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled and need to going forward - select current slide, as a next
                nextSlideIndex = (!this.isLast(this._currentActiveSlide)) ? this._currentActiveSlide + 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled and need to going backward - select current slide, as a next
                nextSlideIndex = (this._currentActiveSlide > 0) ? this._currentActiveSlide - 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    };
    /**
     * Sets a slide, which specified through index, as active
     * @param index
     * @private
     */
    CarouselComponent.prototype._select = function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        var currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        var nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    };
    /**
     * Starts loop of auto changing of slides
     */
    CarouselComponent.prototype.restartTimer = function () {
        var _this = this;
        this.resetTimer();
        var interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = setInterval((function () {
                var nInterval = +_this.interval;
                if (_this.isPlaying && !isNaN(_this.interval) && nInterval > 0 && _this.slides.length) {
                    _this.nextSlide();
                }
                else {
                    _this.pause();
                }
            }), interval);
        }
    };
    /**
     * Stops loop of auto changing of slides
     */
    CarouselComponent.prototype.resetTimer = function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    };
    CarouselComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'carousel',
                    template: "\n    <div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel slide\">\n      <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1\">\n         <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li>\n      </ol>\n      <div class=\"carousel-inner\"><ng-content></ng-content></div>\n      <a class=\"left carousel-control carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\">\n        <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"right carousel-control carousel-control-next\" (click)=\"nextSlide()\"  [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1\">\n        <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__carousel_config__["a" /* CarouselConfig */], },
    ]; };
    CarouselComponent.propDecorators = {
        'noWrap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'noPause': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'activeSlideChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'activeSlide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'interval': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CarouselComponent;
}());
//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ 1392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return CarouselConfig; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var CarouselConfig = (function () {
    function CarouselConfig() {
        /** Default interval of auto changing of slides */
        this.interval = 5000;
        /** Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /** Is slides can wrap from the last to the first slide */
        this.noWrap = false;
    }
    CarouselConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    CarouselConfig.ctorParameters = function () { return []; };
    return CarouselConfig;
}());
//# sourceMappingURL=carousel.config.js.map

/***/ }),

/***/ 1393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return CollapseModule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse_directive__ = __webpack_require__(1423);


var CollapseModule = (function () {
    function CollapseModule() {
    }
    CollapseModule.forRoot = function () {
        return { ngModule: CollapseModule, providers: [] };
    };
    CollapseModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__collapse_directive__["a" /* CollapseDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__collapse_directive__["a" /* CollapseDirective */]]
                },] },
    ];
    /** @nocollapse */
    CollapseModule.ctorParameters = function () { return []; };
    return CollapseModule;
}());
//# sourceMappingURL=collapse.module.js.map

/***/ }),

/***/ 1394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return DatepickerConfig; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var DatepickerConfig = (function () {
    function DatepickerConfig() {
        this.datepickerMode = 'day';
        this.startingDay = 0;
        this.yearRange = 20;
        this.minMode = 'day';
        this.maxMode = 'year';
        this.showWeeks = true;
        this.formatDay = 'DD';
        this.formatMonth = 'MMMM';
        this.formatYear = 'YYYY';
        this.formatDayHeader = 'dd';
        this.formatDayTitle = 'MMMM YYYY';
        this.formatMonthTitle = 'YYYY';
        this.onlyCurrentMonth = false;
        this.monthColLimit = 3;
        this.yearColLimit = 5;
        this.shortcutPropagation = false;
    }
    DatepickerConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    DatepickerConfig.ctorParameters = function () { return []; };
    return DatepickerConfig;
}());
//# sourceMappingURL=datepicker.config.js.map

/***/ }),

/***/ 1395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return DropdownConfig; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dropdown_service__ = __webpack_require__(1396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);


/** Default dropdown configuration */
var DropdownConfig = (function () {
    function DropdownConfig() {
        /** default dropdown auto closing behavior */
        this.autoClose = __WEBPACK_IMPORTED_MODULE_0__dropdown_service__["b" /* NONINPUT */];
        /** is keyboard navigation enabled by default */
        this.keyboardNav = false;
    }
    DropdownConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    DropdownConfig.ctorParameters = function () { return []; };
    return DropdownConfig;
}());
//# sourceMappingURL=dropdown.config.js.map

/***/ }),

/***/ 1396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export ALWAYS */
/* unused harmony export DISABLED */
/* unused harmony export OUTSIDECLICK */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return NONINPUT; }));
/* unused harmony export DropdownService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return dropdownService; }));
var ALWAYS = 'always';
var DISABLED = 'disabled';
var OUTSIDECLICK = 'outsideClick';
var NONINPUT = 'nonInput';
/* tslint:disable-next-line */
var KeyboardEvent = global.KeyboardEvent;
/* tslint:disable-next-line */
var MouseEvent = global.MouseEvent;
var DropdownService = (function () {
    function DropdownService() {
        this.closeDropdownBind = this.closeDropdown.bind(this);
        this.keybindFilterBind = this.keybindFilter.bind(this);
    }
    DropdownService.prototype.open = function (dropdownScope) {
        if (!this.openScope) {
            window.document.addEventListener('click', this.closeDropdownBind, true);
            window.document.addEventListener('keydown', this.keybindFilterBind);
        }
        if (this.openScope && this.openScope !== dropdownScope) {
            this.openScope.isOpen = false;
        }
        this.openScope = dropdownScope;
    };
    DropdownService.prototype.close = function (dropdownScope) {
        if (this.openScope !== dropdownScope) {
            return;
        }
        this.openScope = void 0;
        window.document.removeEventListener('click', this.closeDropdownBind, true);
        window.document.removeEventListener('keydown', this.keybindFilterBind);
    };
    DropdownService.prototype.closeDropdown = function (event) {
        if (!this.openScope) {
            return;
        }
        if (event && this.openScope.autoClose === DISABLED) {
            return;
        }
        if (event && this.openScope.toggleEl &&
            this.openScope.toggleEl.nativeElement.contains(event.target)) {
            return;
        }
        if (event && this.openScope.autoClose === NONINPUT &&
            this.openScope.menuEl &&
            /input|textarea/i.test(event.target.tagName) &&
            this.openScope.menuEl.nativeElement.contains(event.target)) {
            return;
        }
        if (event && this.openScope.autoClose === OUTSIDECLICK &&
            this.openScope.menuEl &&
            this.openScope.menuEl.nativeElement.contains(event.target)) {
            return;
        }
        this.openScope.isOpen = false;
    };
    DropdownService.prototype.keybindFilter = function (event) {
        if (event.which === 27) {
            this.openScope.focusToggleElement();
            this.closeDropdown(void 0);
            return;
        }
        if (this.openScope.keyboardNav && this.openScope.isOpen &&
            (event.which === 38 || event.which === 40)) {
            event.preventDefault();
            event.stopPropagation();
            this.openScope.focusDropdownEntry(event.which);
        }
    };
    return DropdownService;
}());
var dropdownService = new DropdownService();
//# sourceMappingURL=dropdown.service.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(48)))

/***/ }),

/***/ 1397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ModalBackdropOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ModalBackdropComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_options_class__ = __webpack_require__(1436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__ = __webpack_require__(1379);



var ModalBackdropOptions = (function () {
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());
/** This component will be added as background layout for modals if enabled */
var ModalBackdropComponent = (function () {
    function ModalBackdropComponent(element, renderer) {
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: function () {
            return this._isAnimated;
        },
        set: function (value) {
            this._isAnimated = value;
            this.renderer.setElementClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* ClassName */].FADE, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        set: function (value) {
            this._isShown = value;
            this.renderer.setElementClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* ClassName */].IN, value);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])()) {
                this.renderer.setElementClass(this.element.nativeElement, "" + __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* ClassName */].SHOW, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ModalBackdropComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-modal-backdrop',
                    template: '',
                    // tslint:disable-next-line
                    host: { 'class': __WEBPACK_IMPORTED_MODULE_1__modal_options_class__["a" /* ClassName */].BACKDROP }
                },] },
    ];
    /** @nocollapse */
    ModalBackdropComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    ]; };
    return ModalBackdropComponent;
}());
//# sourceMappingURL=modal-backdrop.component.js.map

/***/ }),

/***/ 1398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return PopoverContainerComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_config__ = __webpack_require__(1385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__ = __webpack_require__(1379);



var PopoverContainerComponent = (function () {
    function PopoverContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    PopoverContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'popover-container',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"popover in popover-" + placement + " " + placement',
                        '[class.show]': '!isBs3',
                        role: 'tooltip',
                        style: 'display:block;'
                    },
                    template: "\n<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title\" *ngIf=\"title\">{{title}}</h3><div class=\"popover-content\"><ng-content></ng-content></div>\n    "
                },] },
    ];
    /** @nocollapse */
    PopoverContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__popover_config__["a" /* PopoverConfig */], },
    ]; };
    PopoverContainerComponent.propDecorators = {
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return PopoverContainerComponent;
}());
//# sourceMappingURL=popover-container.component.js.map

/***/ }),

/***/ 1399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ProgressDirective; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

// todo: progress element conflict with bootstrap.css
// todo: need hack: replace host element with div
var ProgressDirective = (function () {
    function ProgressDirective() {
        this.addClass = true;
        this.bars = [];
        this._max = 100;
    }
    Object.defineProperty(ProgressDirective.prototype, "max", {
        /** maximum total value of progress element */
        get: function () {
            return this._max;
        },
        set: function (v) {
            this._max = v;
            this.bars.forEach((function (bar) {
                bar.recalculatePercentage();
            }));
        },
        enumerable: true,
        configurable: true
    });
    ProgressDirective.prototype.addBar = function (bar) {
        if (!this.animate) {
            bar.transition = 'none';
        }
        this.bars.push(bar);
    };
    ProgressDirective.prototype.removeBar = function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
    ProgressDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'bs-progress, [progress]' },] },
    ];
    /** @nocollapse */
    ProgressDirective.ctorParameters = function () { return []; };
    ProgressDirective.propDecorators = {
        'animate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.max',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'addClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.progress',] },],
    };
    return ProgressDirective;
}());
//# sourceMappingURL=progress.directive.js.map

/***/ }),

/***/ 1400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ProgressbarConfig; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var ProgressbarConfig = (function () {
    function ProgressbarConfig() {
        /** if `true` changing value of progress bar will be animated (note: not supported by Bootstrap 4) */
        this.animate = true;
        /** maximum total value of progress element */
        this.max = 100;
    }
    ProgressbarConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    ProgressbarConfig.ctorParameters = function () { return []; };
    return ProgressbarConfig;
}());
//# sourceMappingURL=progressbar.config.js.map

/***/ }),

/***/ 1401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return DraggableItemService; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);


var DraggableItemService = (function () {
    function DraggableItemService() {
        this.onCapture = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    DraggableItemService.prototype.dragStart = function (item) {
        this.draggableItem = item;
    };
    DraggableItemService.prototype.getItem = function () {
        return this.draggableItem;
    };
    DraggableItemService.prototype.captureItem = function (overZoneIndex, newIndex) {
        if (this.draggableItem.overZoneIndex !== overZoneIndex) {
            this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
            this.draggableItem.overZoneIndex = overZoneIndex;
            this.onCapture.next(this.draggableItem);
            this.draggableItem = Object.assign({}, this.draggableItem, { overZoneIndex: overZoneIndex, i: newIndex });
        }
        return this.draggableItem;
    };
    DraggableItemService.prototype.onCaptureItem = function () {
        return this.onCapture;
    };
    DraggableItemService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    DraggableItemService.ctorParameters = function () { return []; };
    return DraggableItemService;
}());
//# sourceMappingURL=draggable-item.service.js.map

/***/ }),

/***/ 1402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TabDirective; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabset_component__ = __webpack_require__(1403);


var TabDirective = (function () {
    function TabDirective(tabset) {
        /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
        this.deselect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired before tab will be removed */
        this.removed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addClass = true;
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    Object.defineProperty(TabDirective.prototype, "active", {
        /** tab active state toggle */
        get: function () {
            return this._active;
        },
        set: function (active) {
            var _this = this;
            if (this.disabled && active || !active) {
                if (!active) {
                    this._active = active;
                }
                this.deselect.emit(this);
                return;
            }
            this._active = active;
            this.select.emit(this);
            this.tabset.tabs.forEach((function (tab) {
                if (tab !== _this) {
                    tab.active = false;
                }
            }));
        },
        enumerable: true,
        configurable: true
    });
    TabDirective.prototype.ngOnInit = function () {
        this.removable = this.removable;
    };
    TabDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'tab, [tab]' },] },
    ];
    /** @nocollapse */
    TabDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__tabset_component__["a" /* TabsetComponent */], },
    ]; };
    TabDirective.propDecorators = {
        'heading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'removable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'active': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.active',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'select': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'deselect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'removed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'addClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.tab-pane',] },],
    };
    return TabDirective;
}());
//# sourceMappingURL=tab.directive.js.map

/***/ }),

/***/ 1403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TabsetComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabset_config__ = __webpack_require__(1404);


// todo: add active event to tab
// todo: fix? mixing static and dynamic tabs position tabs in order of creation
var TabsetComponent = (function () {
    function TabsetComponent(config) {
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        Object.assign(this, config);
    }
    Object.defineProperty(TabsetComponent.prototype, "vertical", {
        /** if true tabs will be placed vertically */
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "justified", {
        /** if true tabs fill the container and have a consistent width */
        get: function () {
            return this._justified;
        },
        set: function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "type", {
        /** navigation context class: 'tabs' or 'pills' */
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    TabsetComponent.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
    };
    TabsetComponent.prototype.addTab = function (tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && tab.active !== false;
    };
    TabsetComponent.prototype.removeTab = function (tab) {
        var index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (tab.active && this.hasAvailableTabs(index)) {
            var newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        tab.removed.emit(tab);
        this.tabs.splice(index, 1);
    };
    TabsetComponent.prototype.getClosestTabIndex = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var step = 1; step <= tabsLength; step += 1) {
            var prevIndex = index - step;
            var nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    TabsetComponent.prototype.hasAvailableTabs = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    TabsetComponent.prototype.setClassMap = function () {
        this.classMap = (_a = {
                'nav-stacked': this.vertical,
                'nav-justified': this.justified
            },
            _a["nav-" + this.type] = true,
            _a
        );
        var _a;
    };
    TabsetComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'tabset',
                    template: "\n    <ul class=\"nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\">\n        <li *ngFor=\"let tabz of tabs\" class=\"nav-item {{tabz.customClass}}\"\n          [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\n          <a href=\"javascript:void(0);\" class=\"nav-link\"\n            [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n            (click)=\"tabz.active = true\">\n            <span [ngTransclude]=\"tabz.headingRef\">{{tabz.heading}}</span>\n            <span *ngIf=\"tabz.removable\">\n              <span (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"glyphicon glyphicon-remove-circle\"></span>\n            </span>\n          </a>\n        </li>\n    </ul>\n    <div class=\"tab-content\">\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    TabsetComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__tabset_config__["a" /* TabsetConfig */], },
    ]; };
    TabsetComponent.propDecorators = {
        'vertical': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'justified': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'clazz': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.tab-container',] },],
    };
    return TabsetComponent;
}());
//# sourceMappingURL=tabset.component.js.map

/***/ }),

/***/ 1404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TabsetConfig; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var TabsetConfig = (function () {
    function TabsetConfig() {
        /** provides default navigation context class: 'tabs' or 'pills' */
        this.type = 'tabs';
    }
    TabsetConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    TabsetConfig.ctorParameters = function () { return []; };
    return TabsetConfig;
}());
//# sourceMappingURL=tabset.config.js.map

/***/ }),

/***/ 1405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TimepickerConfig; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

/** Provides default configuration values for timepicker */
var TimepickerConfig = (function () {
    function TimepickerConfig() {
        /** hours change step */
        this.hourStep = 1;
        /** hours change step */
        this.minuteStep = 5;
        /** if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM */
        this.showMeridian = true;
        /** meridian labels based on locale */
        this.meridians = ['AM', 'PM'];
        /** if true hours and minutes fields will be readonly */
        this.readonlyInput = false;
        /** if true scroll inside hours and minutes inputs will change time */
        this.mousewheel = true;
        /** if true up/down arrowkeys inside hours and minutes inputs will change time */
        this.arrowkeys = true;
        /** if true spinner arrows above and below the inputs will be shown */
        this.showSpinners = true;
        /** minimum time user can select */
        this.min = void 0;
        /** maximum time user can select */
        this.max = void 0;
    }
    TimepickerConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    TimepickerConfig.ctorParameters = function () { return []; };
    return TimepickerConfig;
}());
//# sourceMappingURL=timepicker.config.js.map

/***/ }),

/***/ 1406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TooltipContainerComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_config__ = __webpack_require__(1386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__ = __webpack_require__(1379);



var TooltipContainerComponent = (function () {
    function TooltipContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    TooltipContainerComponent.prototype.ngAfterViewInit = function () {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap['tooltip-' + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.popupClass) {
            this.classMap[this.popupClass] = true;
        }
    };
    TooltipContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-tooltip-container',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"tooltip in tooltip-" + placement + " " + placement',
                        '[class.show]': '!isBs3',
                        role: 'tooltip'
                    },
                    template: "\n    <div class=\"tooltip-arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    "
                },] },
    ];
    /** @nocollapse */
    TooltipContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__tooltip_config__["a" /* TooltipConfig */], },
    ]; };
    return TooltipContainerComponent;
}());
//# sourceMappingURL=tooltip-container.component.js.map

/***/ }),

/***/ 1407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TypeaheadContainerComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__ = __webpack_require__(1379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeahead_utils__ = __webpack_require__(1408);



var TypeaheadContainerComponent = (function () {
    function TypeaheadContainerComponent(element) {
        this.isFocused = false;
        this._matches = [];
        this.element = element;
    }
    Object.defineProperty(TypeaheadContainerComponent.prototype, "isBs4", {
        get: function () {
            return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "matches", {
        get: function () {
            return this._matches;
        },
        set: function (value) {
            this._matches = value;
            if (this._matches.length > 0) {
                this._active = this._matches[0];
                if (this._active.isHeader()) {
                    this.nextActiveMatch();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "optionsListTemplate", {
        get: function () {
            return this.parent ? this.parent.optionsListTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "itemTemplate", {
        get: function () {
            return this.parent ? this.parent.typeaheadItemTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    TypeaheadContainerComponent.prototype.selectActiveMatch = function () {
        this.selectMatch(this._active);
    };
    TypeaheadContainerComponent.prototype.prevActiveMatch = function () {
        var index = this.matches.indexOf(this._active);
        this._active = this.matches[index - 1 < 0
            ? this.matches.length - 1
            : index - 1];
        if (this._active.isHeader()) {
            this.prevActiveMatch();
        }
    };
    TypeaheadContainerComponent.prototype.nextActiveMatch = function () {
        var index = this.matches.indexOf(this._active);
        this._active = this.matches[index + 1 > this.matches.length - 1
            ? 0
            : index + 1];
        if (this._active.isHeader()) {
            this.nextActiveMatch();
        }
    };
    TypeaheadContainerComponent.prototype.selectActive = function (value) {
        this.isFocused = true;
        this._active = value;
    };
    TypeaheadContainerComponent.prototype.hightlight = function (match, query) {
        var itemStr = match.value;
        var itemStrHelper = (this.parent && this.parent.typeaheadLatinize
            ? __WEBPACK_IMPORTED_MODULE_2__typeahead_utils__["a" /* TypeaheadUtils */].latinize(itemStr)
            : itemStr).toLowerCase();
        var startIdx;
        var tokenLen;
        // Replaces the capture string with the same string inside of a "strong" tag
        if (typeof query === 'object') {
            var queryLen = query.length;
            for (var i = 0; i < queryLen; i += 1) {
                // query[i] is already latinized and lower case
                startIdx = itemStrHelper.indexOf(query[i]);
                tokenLen = query[i].length;
                if (startIdx >= 0 && tokenLen > 0) {
                    itemStr = itemStr.substring(0, startIdx) + '<strong>' + itemStr.substring(startIdx, startIdx + tokenLen) + '</strong>' + itemStr.substring(startIdx + tokenLen);
                    itemStrHelper = itemStrHelper.substring(0, startIdx) + '        ' + ' '.repeat(tokenLen) + '         ' + itemStrHelper.substring(startIdx + tokenLen);
                }
            }
        }
        else if (query) {
            // query is already latinized and lower case
            startIdx = itemStrHelper.indexOf(query);
            tokenLen = query.length;
            if (startIdx >= 0 && tokenLen > 0) {
                itemStr = itemStr.substring(0, startIdx) + '<strong>' + itemStr.substring(startIdx, startIdx + tokenLen) + '</strong>' + itemStr.substring(startIdx + tokenLen);
            }
        }
        return itemStr;
    };
    TypeaheadContainerComponent.prototype.focusLost = function () {
        this.isFocused = false;
    };
    TypeaheadContainerComponent.prototype.isActive = function (value) {
        return this._active === value;
    };
    TypeaheadContainerComponent.prototype.selectMatch = function (value, e) {
        var _this = this;
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.parent.changeModel(value);
        setTimeout((function () {
            return _this.parent.typeaheadOnSelect.emit(value);
        }), 0);
        return false;
    };
    TypeaheadContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'typeahead-container',
                    // tslint:disable-next-line
                    template: "\n<!-- inject options list template -->\n<template [ngTemplateOutlet]=\"optionsListTemplate || isBs4 ? bs4Template : bs3Template\"\n  [ngOutletContext]=\"{matches:matches, itemTemplate:itemTemplate, query:query}\"></template>\n\n<!-- default options item template -->\n<template #bsItemTemplate let-match=\"match\" let-query=\"query\"><span [innerHtml]=\"hightlight(match, query)\"></span></template>\n\n<!-- Bootstrap 3 options list template -->\n<template #bs3Template>\n<ul class=\"dropdown-menu\">\n  <template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n    <li *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{match}}</li>\n    <li *ngIf=\"!match.isHeader()\" [class.active]=\"isActive(match)\" (mouseenter)=\"selectActive(match)\">\n      <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\">\n        <template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\" \n          [ngOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></template>\n      </a>\n    </li>\n  </template>\n</ul>\n</template>\n\n<!-- Bootstrap 4 options list template -->\n<template #bs4Template >\n<template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n   <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{match}}</h6>\n   <template [ngIf]=\"!match.isHeader()\">\n      <button\n        class=\"dropdown-item\"\n        (click)=\"selectMatch(match, $event)\"\n        (mouseenter)=\"selectActive(match)\"\n        [class.active]=\"isActive(match)\">\n          <template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\" \n            [ngOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></template>\n      </button>\n  </template>\n</template>\n</template>\n",
                    // tslint:disable
                    host: {
                        'class': 'dropdown open',
                        '[class.dropdown-menu]': 'isBs4',
                        style: 'position: absolute;display: block;'
                    },
                    // tslint: enable
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    TypeaheadContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    TypeaheadContainerComponent.propDecorators = {
        'focusLost': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseleave',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['blur',] },],
    };
    return TypeaheadContainerComponent;
}());
//# sourceMappingURL=typeahead-container.component.js.map

/***/ }),

/***/ 1408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TypeaheadUtils; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__latin_map__ = __webpack_require__(1459);

var TypeaheadUtils = (function () {
    function TypeaheadUtils() {
    }
    TypeaheadUtils.latinize = function (str) {
        if (!str) {
            return '';
        }
        return str.replace(/[^A-Za-z0-9\[\] ]/g, (function (a) {
            return TypeaheadUtils.latinMap[a] || a;
        }));
    };
    TypeaheadUtils.escapeRegexp = function (queryToEscape) {
        // Regex: capture the whole query string and replace it with the string
        // that will be used to match the results, for example if the capture is
        // 'a' the result will be \a
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    };
    /* tslint:disable */
    TypeaheadUtils.tokenize = function (str, wordRegexDelimiters, phraseRegexDelimiters) {
        if (wordRegexDelimiters === void 0) { wordRegexDelimiters = ' '; }
        if (phraseRegexDelimiters === void 0) { phraseRegexDelimiters = ''; }
        /* tslint:enable */
        var regexStr = '(?:[' + phraseRegexDelimiters + '])([^' + phraseRegexDelimiters + ']+)(?:[' + phraseRegexDelimiters + '])|([^' + wordRegexDelimiters + ']+)';
        var preTokenized = str.split(new RegExp(regexStr, 'g'));
        var result = [];
        var preTokenizedLength = preTokenized.length;
        var token;
        var replacePhraseDelimiters = new RegExp('[' + phraseRegexDelimiters + ']+', 'g');
        for (var i = 0; i < preTokenizedLength; i += 1) {
            token = preTokenized[i];
            if (token && token.length && token !== wordRegexDelimiters) {
                result.push(token.replace(replacePhraseDelimiters, ''));
            }
        }
        return result;
    };
    TypeaheadUtils.getValueFromObject = function (object, option) {
        if (!option || typeof object !== 'object') {
            return object.toString();
        }
        if (option.endsWith('()')) {
            var functionName = option.slice(0, option.length - 2);
            return object[functionName]().toString();
        }
        var properties = option.replace(/\[(\w+)\]/g, '.$1')
            .replace(/^\./, '');
        var propertiesArray = properties.split('.');
        for (var _i = 0, propertiesArray_1 = propertiesArray; _i < propertiesArray_1.length; _i++) {
            var property = propertiesArray_1[_i];
            if (property in object) {
                object = object[property];
            }
        }
        return object.toString();
    };
    TypeaheadUtils.latinMap = __WEBPACK_IMPORTED_MODULE_0__latin_map__["a" /* latinMap */];
    return TypeaheadUtils;
}());
//# sourceMappingURL=typeahead-utils.js.map

/***/ }),

/***/ 1409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = OnChange;
/*tslint:disable:no-invalid-this */
function OnChange(defaultValue) {
    var sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        var _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            get: function () { return this[_key]; },
            set: function (value) {
                var prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ 1410:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1501);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(38)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/raw-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./smartTables.scss", (function() {
			var newContent = require("!!../../../../../node_modules/raw-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./smartTables.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		}));
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose((function() { update(); }));
}

/***/ }),

/***/ 1411:
/***/ (function(module, exports) {

module.exports = "select{max-height:35px}input{max-height:35px}.time-slot label{padding:10px 20px;color:#FFF;cursor:pointer;background:darkred;border-radius:5px;transition:0.3s ease all;font-size:small}.time-slot label:hover{transform:scale(1.3)}.employeeRow{border-bottom:1px solid rgba(0,0,0,0.12);box-shadow:0 1px 0 0 rgba(255,255,255,0.12)}#tblSchedule{overflow-x:scroll;margin-left:135px;margin-right:5px;overflow-y:visible;padding:0}table,tr{border-collapse:collapse}table#dayWiseSchedule tr{height:30px}table#dayWiseSchedule td{width:30px}table#dayWiseSchedule{width:-moz-available;color:black;background:white;text-align:center;box-shadow:0px 10px 10px #888888;height:100%}.dayWiseSchedule{color:black;background:white;text-align:center;box-shadow:0px 10px 10px #888888}.headcol{position:absolute;width:5em;left:50px;top:auto}table#tblPatientInfo{text-align:left}table#tblPatientInfo tr{height:25px}table#tblPatientInfo td:nth-child(1){width:100px}table#tblPatientInfo td:nth-child(2){width:350px;font-weight:600}table#tblPatientInfo td:nth-child(3){width:100px}table#tblPatientInfo td:nth-child(4){width:150px;font-weight:600}.verticalTimeTableLabel label{display:block;overflow:hidden;background-color:#98D6EB;width:100px;margin:0px;border:1px solid darkblue;background:#4286f4;color:white;font-size:11px}.tabelRowWithAutoScroll div{overflow:auto;scrollbar-3dlight-color:#FFFFFF;scrollbar-arrow-color:#000000;scrollbar-base-color:#FF9999;scrollbar-darkshadow-color:#000000;scrollbar-face-color:#000000;scrollbar-highlight-color:#000000;scrollbar-shadow-color:#0033CC}.timeline{display:inline-block;position:relative;overflow:hidden;background-color:#98D6EB;height:50px;margin:0px;border:1px solid darkblue;background:#4286f4;color:white;font-size:10px;width:100%;border-radius:5px}.emptooltip{position:relative;flex:1}.tooltiptext{display:none;width:200px;border:1px solid #4286f4;background:white;padding:5px 0;border-radius:6px;font-family:calibri;padding:2px;position:absolute;z-index:100;top:40px;left:40px}table#tooltipTable{text-align:left;border-collapse:collapse}table#tooltipTable tr{height:20px}.emptooltip:hover span.tooltiptext{display:block}.close-pdf{position:absolute;height:5px;width:5px;padding:0px;left:107px}.d-none{display:none !important}.d-inline{display:inline !important}.d-inline-block{display:inline-block !important}.d-block{display:block !important}.d-table{display:table !important}.d-table-row{display:table-row !important}.d-table-cell{display:table-cell !important}.d-flex{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}.d-inline-flex{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important}@media (min-width: 576px){.d-sm-none{display:none !important}.d-sm-inline{display:inline !important}.d-sm-inline-block{display:inline-block !important}.d-sm-block{display:block !important}.d-sm-table{display:table !important}.d-sm-table-row{display:table-row !important}.d-sm-table-cell{display:table-cell !important}.d-sm-flex{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}.d-sm-inline-flex{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important}}@media (min-width: 768px){.d-md-none{display:none !important}.d-md-inline{display:inline !important}.d-md-inline-block{display:inline-block !important}.d-md-block{display:block !important}.d-md-table{display:table !important}.d-md-table-row{display:table-row !important}.d-md-table-cell{display:table-cell !important}.d-md-flex{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}.d-md-inline-flex{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important}}@media (min-width: 992px){.d-lg-none{display:none !important}.d-lg-inline{display:inline !important}.d-lg-inline-block{display:inline-block !important}.d-lg-block{display:block !important}.d-lg-table{display:table !important}.d-lg-table-row{display:table-row !important}.d-lg-table-cell{display:table-cell !important}.d-lg-flex{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}.d-lg-inline-flex{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important}}@media (min-width: 1200px){.d-xl-none{display:none !important}.d-xl-inline{display:inline !important}.d-xl-inline-block{display:inline-block !important}.d-xl-block{display:block !important}.d-xl-table{display:table !important}.d-xl-table-row{display:table-row !important}.d-xl-table-cell{display:table-cell !important}.d-xl-flex{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}.d-xl-inline-flex{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important}}@media (min-width: 1800px){.col-xxl-1{float:left;width:10%}.col-xxl-3{float:left;width:30%}.col-xxl-4{float:left;width:40%}.col-xxl-6{float:left;width:60%}}@media (min-width: 2160px){.col-xxxl-1{float:left;width:8.3333%}.col-xxxl-4{float:left;width:33.3333%}.col-xxxl-6{float:left;width:50%}}.switch{position:relative;display:inline-block;width:42px;height:20px}.switch input{opacity:0;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s}.slider:before{position:absolute;content:\"\";height:14px;width:14px;left:4px;bottom:3px;background-color:white;-webkit-transition:.4s;transition:.4s}input:checked+.slider{background-color:#2196F3}input:focus+.slider{box-shadow:0 0 1px #2196F3}input:checked+.slider:before{-webkit-transform:translateX(20px);-ms-transform:translateX(20px);transform:translateX(20px)}.slider.round{border-radius:26px}.slider.round:before{border-radius:50%}.centeredColumn{text-align:center}.disabledFont{color:#666666 !important}.table{width:100%;margin-bottom:1rem;background-color:transparent}.table td,.table th{padding:1rem;vertical-align:top;border-top:1px solid #e9ecef}.table thead th{vertical-align:bottom;border-bottom:2px solid #e9ecef}.table tbody+tbody{border-top:2px solid #e9ecef}.table .table{background-color:#f8f9fe}.table-sm td,.table-sm th{padding:0.5rem}.table-bordered,.table-bordered td,.table-bordered th{border:1px solid #e9ecef}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,0.05)}.table-hover tbody tr:hover{background-color:#f6f9fc}.table-primary,.table-primary>td,.table-primary>th{background-color:#d2d8f7}.table-hover .table-primary:hover,.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#bcc5f3}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#fdfefe}.table-hover .table-secondary:hover,.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#ecf6f6}.table-success,.table-success>td,.table-success>th{background-color:#c4f1de}.table-hover .table-success:hover,.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#afecd2}.table-info,.table-info>td,.table-info>th{background-color:#bcf1fb}.table-hover .table-info:hover,.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#a4ecfa}.table-warning,.table-warning>td,.table-warning>th{background-color:#fed3ca}.table-hover .table-warning:hover,.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#febeb1}.table-danger,.table-danger>td,.table-danger>th{background-color:#fcc7d1}.table-hover .table-danger:hover,.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#fbafbd}.table-light,.table-light>td,.table-light>th{background-color:#e8eaed}.table-hover .table-light:hover,.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#dadde2}.table-dark,.table-dark>td,.table-dark>th{background-color:#c1c2c3}.table-hover .table-dark:hover,.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b4b5b6}.table-default,.table-default>td,.table-default>th{background-color:#bec4cd}.table-hover .table-default:hover,.table-hover .table-default:hover>td,.table-hover .table-default:hover>th{background-color:#b0b7c2}.table-white,.table-white>td,.table-white>th{background-color:#fff}.table-hover .table-white:hover,.table-hover .table-white:hover>td,.table-hover .table-white:hover>th{background-color:#f2f2f2}.table-neutral,.table-neutral>td,.table-neutral>th{background-color:#fff}.table-hover .table-neutral:hover,.table-hover .table-neutral:hover>td,.table-hover .table-neutral:hover>th{background-color:#f2f2f2}.table-darker,.table-darker>td,.table-darker>th{background-color:#b8b8b8}.table-hover .table-darker:hover,.table-hover .table-darker:hover>td,.table-hover .table-darker:hover>th{background-color:#ababab}.table-active,.table-active>td,.table-active>th{background-color:#f6f9fc}.table-hover .table-active:hover,.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:#e3ecf6}.table .thead-dark th{color:#f8f9fe;background-color:#172b4d;border-color:#1f3a68}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table .tfoot-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#f8f9fe;background-color:#172b4d}.table-dark td,.table-dark th,.table-dark thead th{border-color:#1f3a68}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,0.05)}.table-dark.table-hover tbody tr:hover{background-color:rgba(255,255,255,0.075)}@media (max-width: 575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-sm>.table-bordered{border:0}}@media (max-width: 767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-md>.table-bordered{border:0}}@media (max-width: 991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-lg>.table-bordered{border:0}}@media (max-width: 1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive>.table-bordered{border:0}.invalid-feedback{float:inline-start;display:none;width:100%;margin-top:0.25rem;font-size:80%;color:#fb6340}.d-block{display:block !important}.c-btn.disabled{background:none !important}.input-like{display:block;padding:6px 12px;border:1px solid #ccc;border-radius:4px;background-color:#fff;font-family:inherit;font-size:14px;line-height:1.5;color:#495057}.input-like.disabled{background-color:#e9ecef;color:#6c757d;cursor:not-allowed}\n"

/***/ }),

/***/ 1413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Item; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return Badge; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", (function() { return Search; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", (function() { return TemplateRenderer; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var Item = /** @class */ (function () {
    function Item() {
    }
    Item.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'c-item',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    Item.ctorParameters = function () { return []; };
    Item.propDecorators = {
        'template': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"],] },],
    };
    return Item;
}());

var Badge = /** @class */ (function () {
    function Badge() {
    }
    Badge.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'c-badge',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    Badge.ctorParameters = function () { return []; };
    Badge.propDecorators = {
        'template': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"],] },],
    };
    return Badge;
}());

var Search = /** @class */ (function () {
    function Search() {
    }
    Search.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'c-search',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    Search.ctorParameters = function () { return []; };
    Search.propDecorators = {
        'template': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"],] },],
    };
    return Search;
}());

var TemplateRenderer = /** @class */ (function () {
    function TemplateRenderer(viewContainer) {
        this.viewContainer = viewContainer;
    }
    TemplateRenderer.prototype.ngOnInit = function () {
        this.view = this.viewContainer.createEmbeddedView(this.data.template, {
            '\$implicit': this.data,
            'item': this.item
        });
    };
    TemplateRenderer.prototype.ngOnDestroy = function () {
        this.view.destroy();
    };
    TemplateRenderer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'c-templateRenderer',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    TemplateRenderer.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    ]; };
    TemplateRenderer.propDecorators = {
        'data': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'item': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return TemplateRenderer;
}());

//# sourceMappingURL=menu-item.js.map

/***/ }),

/***/ 1414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return AccordionPanelComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__ = __webpack_require__(1379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_component__ = __webpack_require__(1388);



/*
 * ### Accordion heading

 Instead of using `heading` attribute on the `accordion-group`, you can use an `accordion-heading` attribute on `any` element inside of a group that will be used as group's header template.

 * */
var AccordionPanelComponent = (function () {
    function AccordionPanelComponent(accordion) {
        this.accordion = accordion;
    }
    Object.defineProperty(AccordionPanelComponent.prototype, "isOpen", {
        // Questionable, maybe .panel-open should be on child div.panel element?
        /** Is accordion group open or closed */
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            this._isOpen = value;
            if (value) {
                this.accordion.closeOtherPanels(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionPanelComponent.prototype, "isBs3", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    AccordionPanelComponent.prototype.ngOnInit = function () {
        this.panelClass = this.panelClass || 'panel-default';
        this.accordion.addGroup(this);
    };
    AccordionPanelComponent.prototype.ngOnDestroy = function () {
        this.accordion.removeGroup(this);
    };
    AccordionPanelComponent.prototype.toggleOpen = function (event) {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    };
    AccordionPanelComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'accordion-group, accordion-panel',
                    template: "\n<div class=\"panel card\" [ngClass]=\"panelClass\">\n  <div class=\"panel-heading card-header\" role=\"tab\" (click)=\"toggleOpen($event)\">\n    <div class=\"panel-title card-title\">\n      <div role=\"button\" class=\"accordion-toggle\" [attr.aria-expanded]=\"isOpen\">\n        <div *ngIf=\"heading\"[ngClass]=\"{'text-muted': isDisabled}\">{{heading}}</div>\n        <ng-content select=\"[accordion-heading]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\">\n    <div class=\"panel-body card-block\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n  "
                },] },
    ];
    /** @nocollapse */
    AccordionPanelComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__accordion_component__["a" /* AccordionComponent */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_2__accordion_component__["a" /* AccordionComponent */],] },] },
    ]; };
    AccordionPanelComponent.propDecorators = {
        'heading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'panelClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.panel-open',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return AccordionPanelComponent;
}());
//# sourceMappingURL=accordion-group.component.js.map

/***/ }),

/***/ 1415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return AccordionModule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collapse_collapse_module__ = __webpack_require__(1393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_group_component__ = __webpack_require__(1414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accordion_component__ = __webpack_require__(1388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accordion_config__ = __webpack_require__(1389);






var AccordionModule = (function () {
    function AccordionModule() {
    }
    AccordionModule.forRoot = function () { return { ngModule: AccordionModule, providers: [__WEBPACK_IMPORTED_MODULE_5__accordion_config__["a" /* AccordionConfig */]] }; };
    AccordionModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__collapse_collapse_module__["a" /* CollapseModule */]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_4__accordion_component__["a" /* AccordionComponent */], __WEBPACK_IMPORTED_MODULE_3__accordion_group_component__["a" /* AccordionPanelComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_4__accordion_component__["a" /* AccordionComponent */], __WEBPACK_IMPORTED_MODULE_3__accordion_group_component__["a" /* AccordionPanelComponent */]]
                },] },
    ];
    /** @nocollapse */
    AccordionModule.ctorParameters = function () { return []; };
    return AccordionModule;
}());
//# sourceMappingURL=accordion.module.js.map

/***/ }),

/***/ 1416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return AlertComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_config__ = __webpack_require__(1390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_decorators__ = __webpack_require__(1409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = (function () {
    function AlertComponent(_config) {
        var _this = this;
        /** Alert type. Provides one of four bootstrap supported contextual classes: `success`, `info`, `warning` and `danger` */
        this.type = 'warning';
        /** If set, displays an inline "Close" button */
        this.dismissible = false;
        /** This event fires immediately after close instance method is called, $event is an instance of Alert component. */
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event fires when alert closed, $event is an instance of Alert component */
        this.onClosed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isClosed = false;
        this.classes = '';
        this.dismissibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe((function (dismissible) {
            _this.classes = _this.dismissible ? 'alert-dismissible' : '';
        }));
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout((function () { return _this.close(); }), parseInt(this.dismissOnTimeout, 10));
        }
    };
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     */
    AlertComponent.prototype.close = function () {
        if (this.isClosed) {
            return;
        }
        this.onClose.emit(this);
        this.isClosed = true;
        this.onClosed.emit(this);
    };
    AlertComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'alert,ngx-alert',
                    template: "\n<template [ngIf]=\"!isClosed\">\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\n    <template [ngIf]=\"dismissible\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n    </template>\n    <ng-content></ng-content>\n  </div>\n</template>\n  "
                },] },
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__alert_config__["a" /* AlertConfig */], },
    ]; };
    AlertComponent.propDecorators = {
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dismissible': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dismissOnTimeout': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onClosed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_decorators__["a" /* OnChange */])(), 
        __metadata('design:type', Boolean)
    ], AlertComponent.prototype, "dismissible", void 0);
    return AlertComponent;
}());
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ 1417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return AlertModule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_component__ = __webpack_require__(1416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_config__ = __webpack_require__(1390);




var AlertModule = (function () {
    function AlertModule() {
    }
    AlertModule.forRoot = function () {
        return { ngModule: AlertModule, providers: [__WEBPACK_IMPORTED_MODULE_3__alert_config__["a" /* AlertConfig */]] };
    };
    AlertModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__alert_component__["a" /* AlertComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__alert_component__["a" /* AlertComponent */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_2__alert_component__["a" /* AlertComponent */]]
                },] },
    ];
    /** @nocollapse */
    AlertModule.ctorParameters = function () { return []; };
    return AlertModule;
}());
//# sourceMappingURL=alert.module.js.map

/***/ }),

/***/ 1418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CHECKBOX_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ButtonCheckboxDirective; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);


// TODO: config: activeClass - Class to apply to the checked buttons
var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])((function () { return ButtonCheckboxDirective; })),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
var ButtonCheckboxDirective = (function () {
    function ButtonCheckboxDirective() {
        /** Truthy value, will be set to ngModel */
        this.btnCheckboxTrue = true;
        /** Falsy value, will be set to ngModel */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    // view -> model
    ButtonCheckboxDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    ButtonCheckboxDirective.prototype.ngOnInit = function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        get: function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        get: function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    ButtonCheckboxDirective.prototype.toggle = function (state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    // ControlValueAccessor
    // model -> view
    ButtonCheckboxDirective.prototype.writeValue = function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    ButtonCheckboxDirective.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    ButtonCheckboxDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonCheckboxDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ButtonCheckboxDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[btnCheckbox]', providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR] },] },
    ];
    /** @nocollapse */
    ButtonCheckboxDirective.ctorParameters = function () { return []; };
    ButtonCheckboxDirective.propDecorators = {
        'btnCheckboxTrue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'btnCheckboxFalse': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'state': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.active',] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
    };
    return ButtonCheckboxDirective;
}());
//# sourceMappingURL=button-checkbox.directive.js.map

/***/ }),

/***/ 1419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RADIO_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ButtonRadioDirective; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);


var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])((function () { return ButtonRadioDirective; })),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioDirective = (function () {
    function ButtonRadioDirective(el) {
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.el = el;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        get: function () {
            return this.btnRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    ButtonRadioDirective.prototype.onClick = function () {
        if (this.el.nativeElement.attributes.disabled) {
            return;
        }
        if (this.uncheckable && this.btnRadio === this.value) {
            this.value = undefined;
        }
        else {
            this.value = this.btnRadio;
        }
        this.onTouched();
        this.onChange(this.value);
    };
    ButtonRadioDirective.prototype.ngOnInit = function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    ButtonRadioDirective.prototype.onBlur = function () {
        this.onTouched();
    };
    // ControlValueAccessor
    // model -> view
    ButtonRadioDirective.prototype.writeValue = function (value) {
        this.value = value;
    };
    ButtonRadioDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonRadioDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ButtonRadioDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[btnRadio]', providers: [RADIO_CONTROL_VALUE_ACCESSOR] },] },
    ];
    /** @nocollapse */
    ButtonRadioDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    ButtonRadioDirective.propDecorators = {
        'btnRadio': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'uncheckable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.active',] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
    };
    return ButtonRadioDirective;
}());
//# sourceMappingURL=button-radio.directive.js.map

/***/ }),

/***/ 1420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ButtonsModule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_checkbox_directive__ = __webpack_require__(1418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_radio_directive__ = __webpack_require__(1419);



var ButtonsModule = (function () {
    function ButtonsModule() {
    }
    ButtonsModule.forRoot = function () {
        return { ngModule: ButtonsModule, providers: [] };
    };
    ButtonsModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__button_checkbox_directive__["a" /* ButtonCheckboxDirective */], __WEBPACK_IMPORTED_MODULE_2__button_radio_directive__["a" /* ButtonRadioDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__button_checkbox_directive__["a" /* ButtonCheckboxDirective */], __WEBPACK_IMPORTED_MODULE_2__button_radio_directive__["a" /* ButtonRadioDirective */]]
                },] },
    ];
    /** @nocollapse */
    ButtonsModule.ctorParameters = function () { return []; };
    return ButtonsModule;
}());
//# sourceMappingURL=buttons.module.js.map

/***/ }),

/***/ 1421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return CarouselModule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_component__ = __webpack_require__(1391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slide_component__ = __webpack_require__(1422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carousel_config__ = __webpack_require__(1392);





var CarouselModule = (function () {
    function CarouselModule() {
    }
    CarouselModule.forRoot = function () {
        return { ngModule: CarouselModule, providers: [] };
    };
    CarouselModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_3__slide_component__["a" /* SlideComponent */], __WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_3__slide_component__["a" /* SlideComponent */], __WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */]],
                    providers: [__WEBPACK_IMPORTED_MODULE_4__carousel_config__["a" /* CarouselConfig */]]
                },] },
    ];
    /** @nocollapse */
    CarouselModule.ctorParameters = function () { return []; };
    return CarouselModule;
}());
//# sourceMappingURL=carousel.module.js.map

/***/ }),

/***/ 1422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return SlideComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_component__ = __webpack_require__(1391);


var SlideComponent = (function () {
    function SlideComponent(carousel) {
        /** Wraps element by appropriate CSS classes */
        this.addClass = true;
        this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    SlideComponent.prototype.ngOnInit = function () {
        this.carousel.addSlide(this);
    };
    /** Fires changes in container collection after removing of this slide instance */
    SlideComponent.prototype.ngOnDestroy = function () {
        this.carousel.removeSlide(this);
    };
    SlideComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'slide',
                    template: "\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__carousel_component__["a" /* CarouselComponent */], },
    ]; };
    SlideComponent.propDecorators = {
        'active': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.active',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'addClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.item',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.carousel-item',] },],
    };
    return SlideComponent;
}());
//# sourceMappingURL=slide.component.js.map

/***/ }),

/***/ 1423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return CollapseDirective; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var CollapseDirective = (function () {
    function CollapseDirective(_el, _renderer) {
        /** This event fires as soon as content collapses */
        this.collapsed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event fires as soon as content becomes visible */
        this.expanded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // shown
        this.isExpanded = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
        this._el = _el;
        this._renderer = _renderer;
    }
    Object.defineProperty(CollapseDirective.prototype, "collapse", {
        get: function () {
            return this.isExpanded;
        },
        /** A flag indicating visibility of content (shown or hidden) */
        set: function (value) {
            this.isExpanded = value;
            this.toggle();
        },
        enumerable: true,
        configurable: true
    });
    /** allows to manually toggle content visibility */
    CollapseDirective.prototype.toggle = function () {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    /** allows to manually hide content */
    CollapseDirective.prototype.hide = function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapse = true;
        this.isCollapsing = false;
        this.display = 'none';
        this.collapsed.emit(this);
    };
    /** allows to manually show collapsed content */
    CollapseDirective.prototype.show = function () {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.display = 'block';
        // this.height = 'auto';
        this.isCollapse = true;
        this.isCollapsing = false;
        this._renderer.setElementStyle(this._el.nativeElement, 'overflow', 'visible');
        this._renderer.setElementStyle(this._el.nativeElement, 'height', 'auto');
        this.expanded.emit(this);
    };
    CollapseDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[collapse]',
                    exportAs: 'bs-collapse',
                    /* tslint:disable-next-line */
                    host: { '[class.collapse]': 'true' } /*,
                    animations: [
                      trigger('active', [
                        state('void', style({height: 0})),
                        state('closed', style({height: 0})),
                        state('open', style({height: '*'})),
                        transition('void => closed', [animate(0)]),
                        transition('closed => open', [animate('350ms ease-out')]),
                        transition('open => closed', [animate('350ms ease-out')])
                      ])
                    ]*/
                },] },
    ];
    /** @nocollapse */
    CollapseDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    ]; };
    CollapseDirective.propDecorators = {
        'collapsed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'expanded': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'display': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['style.display',] },],
        'isExpanded': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.in',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.show',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.aria-expanded',] },],
        'isCollapsed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.aria-hidden',] },],
        'isCollapse': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.collapse',] },],
        'isCollapsing': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.collapsing',] },],
        'collapse': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CollapseDirective;
}());
//# sourceMappingURL=collapse.directive.js.map

/***/ }),

/***/ 1424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ComponentLoader; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_ref_class__ = __webpack_require__(1426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_triggers__ = __webpack_require__(1491);



var ComponentLoader = (function () {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * @internal
     * @param _viewContainerRef
     * @param _elementRef
     * @param _injector
     * @param _renderer
     * @param _componentFactoryResolver
     * @param _ngZone
     * @param _posService
     */
    // tslint:disable-next-line
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _posService) {
        this.onBeforeShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onBeforeHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._providers = [];
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._posService = _posService;
        this._viewContainerRef = _viewContainerRef;
        this._componentFactoryResolver = _componentFactoryResolver;
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        get: function () {
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ComponentLoader.prototype.attach = function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    // todo: add behaviour: to target element, `body`, custom element
    ComponentLoader.prototype.to = function (container) {
        this.container = container || this.container;
        return this;
    };
    ComponentLoader.prototype.position = function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = opts.target || this._elementRef;
        return this;
    };
    ComponentLoader.prototype.provide = function (provider) {
        this._providers.push(provider);
        return this;
    };
    ComponentLoader.prototype.show = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content);
            var injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolveAndCreate(this._providers, this._injector);
            this._componentRef = this._viewContainerRef
                .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container === 'body' && typeof document !== 'undefined') {
                document.querySelector(this.container)
                    .appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            this._componentRef.changeDetectorRef.markForCheck();
            this.onShown.emit(this._componentRef.instance);
        }
        return this._componentRef;
    };
    ComponentLoader.prototype.hide = function () {
        if (this._componentRef) {
            this.onBeforeHide.emit(this._componentRef.instance);
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._componentRef.hostView));
            this._componentRef = null;
            if (this._contentRef.viewRef) {
                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
                this._contentRef = null;
            }
            this._componentRef = null;
            this.onHidden.emit();
        }
        return this;
    };
    ComponentLoader.prototype.toggle = function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    ComponentLoader.prototype.dispose = function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    ComponentLoader.prototype.listen = function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        listenOpts.target = listenOpts.target || this._elementRef;
        listenOpts.show = listenOpts.show || (function () { return _this.show(); });
        listenOpts.hide = listenOpts.hide || (function () { return _this.hide(); });
        listenOpts.toggle = listenOpts.toggle || (function () { return _this.isShown
            ? listenOpts.hide()
            : listenOpts.show(); });
        this._unregisterListenersFn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_triggers__["a" /* listenToTriggers */])(this._renderer, listenOpts.target.nativeElement, this.triggers, listenOpts.show, listenOpts.hide, listenOpts.toggle);
        return this;
    };
    ComponentLoader.prototype._subscribePositioning = function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone
            .onStable.subscribe((function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        }));
    };
    ComponentLoader.prototype._unsubscribePositioning = function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    ComponentLoader.prototype._getContentRef = function (content) {
        if (!content) {
            return new __WEBPACK_IMPORTED_MODULE_1__content_ref_class__["a" /* ContentRef */]([]);
        }
        if (content instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) {
            var viewRef = this._viewContainerRef
                .createEmbeddedView(content);
            return new __WEBPACK_IMPORTED_MODULE_1__content_ref_class__["a" /* ContentRef */]([viewRef.rootNodes], viewRef);
        }
        return new __WEBPACK_IMPORTED_MODULE_1__content_ref_class__["a" /* ContentRef */]([[this._renderer.createText(null, "" + content)]]);
    };
    return ComponentLoader;
}());
//# sourceMappingURL=component-loader.class.js.map

/***/ }),

/***/ 1425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ComponentLoaderFactory; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_class__ = __webpack_require__(1424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__positioning__ = __webpack_require__(1381);



var ComponentLoaderFactory = (function () {
    function ComponentLoaderFactory(componentFactoryResolver, ngZone, injector, posService) {
        this._ngZone = ngZone;
        this._injector = injector;
        this._posService = posService;
        this._componentFactoryResolver = componentFactoryResolver;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer
     * @returns {ComponentLoader}
     */
    ComponentLoaderFactory.prototype.createLoader = function (_elementRef, _viewContainerRef, _renderer) {
        return new __WEBPACK_IMPORTED_MODULE_1__component_loader_class__["a" /* ComponentLoader */](_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._posService);
    };
    ComponentLoaderFactory.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    ComponentLoaderFactory.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__positioning__["a" /* PositioningService */], },
    ]; };
    return ComponentLoaderFactory;
}());
//# sourceMappingURL=component-loader.factory.js.map

/***/ }),

/***/ 1426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ContentRef; }));
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var ContentRef = (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());
//# sourceMappingURL=content-ref.class.js.map

/***/ }),

/***/ 1427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return DateFormatter; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var DateFormatter = (function () {
    function DateFormatter() {
    }
    DateFormatter.prototype.format = function (date, format) {
        return __WEBPACK_IMPORTED_MODULE_0_moment__(date.getTime()).format(format);
    };
    return DateFormatter;
}());
//# sourceMappingURL=date-formatter.js.map

/***/ }),

/***/ 1428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DATEPICKER_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return DatePickerComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker_inner_component__ = __webpack_require__(1382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datepicker_config__ = __webpack_require__(1394);




var DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])((function () { return DatePickerComponent; })),
    multi: true
};
/* tslint:disable:component-selector-name component-selector-type */
/* tslint:enable:component-selector-name component-selector-type */
var DatePickerComponent = (function () {
    function DatePickerComponent(config) {
        /** sets datepicker mode, supports: `day`, `month`, `year` */
        this.datepickerMode = 'day';
        /** if false week numbers will be hidden */
        this.showWeeks = true;
        this.selectionDone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](undefined);
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this._now = new Date();
        this.config = config;
        this.configureOptions();
    }
    Object.defineProperty(DatePickerComponent.prototype, "activeDate", {
        /** currently active date */
        get: function () {
            return this._activeDate || this._now;
        },
        set: function (value) {
            this._activeDate = value;
        },
        enumerable: true,
        configurable: true
    });
    DatePickerComponent.prototype.configureOptions = function () {
        Object.assign(this, this.config);
    };
    DatePickerComponent.prototype.onUpdate = function (event) {
        this.onChange(event);
    };
    DatePickerComponent.prototype.onSelectionDone = function (event) {
        this.selectionDone.emit(event);
    };
    // todo: support null value
    DatePickerComponent.prototype.writeValue = function (value) {
        if (this._datePicker.compare(value, this._activeDate) === 0) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value;
            this._datePicker.select(value, false);
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    DatePickerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'datepicker',
                    template: "\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      [monthColLimit]=\"monthColLimit\"\n                      [yearColLimit]=\"yearColLimit\"\n                      (selectionDone)=\"onSelectionDone($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",
                    providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    DatePickerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__datepicker_config__["a" /* DatepickerConfig */], },
    ]; };
    DatePickerComponent.propDecorators = {
        'datepickerMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'initDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'minDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'minMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxMode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'showWeeks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatMonth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatYear': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatDayHeader': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatDayTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'formatMonthTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'startingDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'yearRange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onlyCurrentMonth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'shortcutPropagation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'monthColLimit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'yearColLimit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'customClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dateDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'activeDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'selectionDone': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        '_datePicker': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: [__WEBPACK_IMPORTED_MODULE_2__datepicker_inner_component__["a" /* DatePickerInnerComponent */],] },],
    };
    return DatePickerComponent;
}());
//# sourceMappingURL=datepicker.component.js.map

/***/ }),

/***/ 1429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return DatepickerModule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datepicker_inner_component__ = __webpack_require__(1382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datepicker_component__ = __webpack_require__(1428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__daypicker_component__ = __webpack_require__(1430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__monthpicker_component__ = __webpack_require__(1431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__yearpicker_component__ = __webpack_require__(1432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__datepicker_config__ = __webpack_require__(1394);









var DatepickerModule = (function () {
    function DatepickerModule() {
    }
    DatepickerModule.forRoot = function () {
        return { ngModule: DatepickerModule, providers: [__WEBPACK_IMPORTED_MODULE_8__datepicker_config__["a" /* DatepickerConfig */]] };
    };
    DatepickerModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_4__datepicker_component__["a" /* DatePickerComponent */], __WEBPACK_IMPORTED_MODULE_3__datepicker_inner_component__["a" /* DatePickerInnerComponent */], __WEBPACK_IMPORTED_MODULE_5__daypicker_component__["a" /* DayPickerComponent */],
                        __WEBPACK_IMPORTED_MODULE_6__monthpicker_component__["a" /* MonthPickerComponent */], __WEBPACK_IMPORTED_MODULE_7__yearpicker_component__["a" /* YearPickerComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_4__datepicker_component__["a" /* DatePickerComponent */], __WEBPACK_IMPORTED_MODULE_3__datepicker_inner_component__["a" /* DatePickerInnerComponent */], __WEBPACK_IMPORTED_MODULE_5__daypicker_component__["a" /* DayPickerComponent */],
                        __WEBPACK_IMPORTED_MODULE_6__monthpicker_component__["a" /* MonthPickerComponent */], __WEBPACK_IMPORTED_MODULE_7__yearpicker_component__["a" /* YearPickerComponent */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_4__datepicker_component__["a" /* DatePickerComponent */]]
                },] },
    ];
    /** @nocollapse */
    DatepickerModule.ctorParameters = function () { return []; };
    return DatepickerModule;
}());
//# sourceMappingURL=datepicker.module.js.map

/***/ }),

/***/ 1430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return DayPickerComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__ = __webpack_require__(1379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker_inner_component__ = __webpack_require__(1382);



// write an interface for template options
var TEMPLATE_OPTIONS = {
    'bs4': {
        ARROW_LEFT: '&lt;',
        ARROW_RIGHT: '&gt;'
    },
    'bs3': {
        ARROW_LEFT: "\n    <i class=\"glyphicon glyphicon-chevron-left\"></i>\n    ",
        ARROW_RIGHT: "\n    <i class=\"glyphicon glyphicon-chevron-right\"></i>\n    "
    }
};
var DayPickerComponent = (function () {
    function DayPickerComponent(datePicker) {
        this.labels = [];
        this.rows = [];
        this.weekNumbers = [];
        this.CURRENT_THEME_TEMPLATE = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__["a" /* isBs3 */])()
            ? TEMPLATE_OPTIONS.bs3
            : TEMPLATE_OPTIONS.bs4;
        this.datePicker = datePicker;
    }
    Object.defineProperty(DayPickerComponent.prototype, "isBs4", {
        get: function () {
            return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    /*protected getDaysInMonth(year:number, month:number) {
     return ((month === 1) && (year % 4 === 0) &&
     ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
     }*/
    DayPickerComponent.prototype.ngOnInit = function () {
        var self = this;
        this.datePicker.stepDay = { months: 1 };
        this.datePicker.setRefreshViewHandler((function () {
            var year = this.activeDate.getFullYear();
            var month = this.activeDate.getMonth();
            var firstDayOfMonth = new Date(year, month, 1);
            var difference = this.startingDay - firstDayOfMonth.getDay();
            var numDisplayedFromPreviousMonth = (difference > 0)
                ? 7 - difference
                : -difference;
            var firstDate = new Date(firstDayOfMonth.getTime());
            if (numDisplayedFromPreviousMonth > 0) {
                firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
            }
            // 42 is the number of days on a six-week calendar
            var _days = self.getDates(firstDate, 42);
            var days = [];
            for (var i = 0; i < 42; i++) {
                var _dateObject = this.createDateObject(_days[i], this.formatDay);
                _dateObject.secondary = _days[i].getMonth() !== month;
                _dateObject.uid = this.uniqueId + '-' + i;
                days[i] = _dateObject;
            }
            self.labels = [];
            for (var j = 0; j < 7; j++) {
                self.labels[j] = {};
                self.labels[j].abbr = this.dateFilter(days[j].date, this.formatDayHeader);
                self.labels[j].full = this.dateFilter(days[j].date, 'EEEE');
            }
            self.title = this.dateFilter(this.activeDate, this.formatDayTitle);
            self.rows = this.split(days, 7);
            if (this.showWeeks) {
                self.weekNumbers = [];
                var thursdayIndex = (4 + 7 - this.startingDay) % 7;
                var numWeeks = self.rows.length;
                for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
                    self.weekNumbers.push(self.getISO8601WeekNumber(self.rows[curWeek][thursdayIndex].date));
                }
            }
        }), 'day');
        this.datePicker.setCompareHandler((function (date1, date2) {
            var d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
            var d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
            return d1.getTime() - d2.getTime();
        }), 'day');
        this.datePicker.refreshView();
    };
    DayPickerComponent.prototype.getDates = function (startDate, n) {
        var dates = new Array(n);
        var current = new Date(startDate.getTime());
        var i = 0;
        var date;
        while (i < n) {
            date = new Date(current.getTime());
            date = this.datePicker.fixTimeZone(date);
            dates[i++] = date;
            current = new Date(current.getFullYear(), current.getMonth(), current.getDate() + 1);
        }
        return dates;
    };
    DayPickerComponent.prototype.getISO8601WeekNumber = function (date) {
        var checkDate = new Date(date.getTime());
        // Thursday
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        var time = checkDate.getTime();
        // Compare with Jan 1
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
    };
    // todo: key events implementation
    DayPickerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'daypicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode==='day'\" role=\"grid\" [attr.aria-labelledby]=\"datePicker.uniqueId+'-title'\" aria-activedescendant=\"activeDateId\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" \n                class=\"btn btn-default btn-secondary btn-sm pull-left\" \n                (click)=\"datePicker.move(-1)\" \n                tabindex=\"-1\"\n                [innerHTML]=\"CURRENT_THEME_TEMPLATE.ARROW_LEFT\">\n        </button>\n      </th>\n      <th [attr.colspan]=\"5 + (datePicker.showWeeks ? 1 : 0)\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-secondary btn-sm\"\n                (click)=\"datePicker.toggleMode()\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{title}}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" \n                class=\"btn btn-default btn-secondary btn-sm pull-right\" \n                (click)=\"datePicker.move(1)\" \n                tabindex=\"-1\"\n                [innerHTML]=\"CURRENT_THEME_TEMPLATE.ARROW_RIGHT\">\n        </button>\n      </th>\n    </tr>\n    <tr>\n      <th *ngIf=\"datePicker.showWeeks\"></th>\n      <th *ngFor=\"let labelz of labels\" class=\"text-center\">\n        <small aria-label=\"labelz.full\"><b>{{labelz.abbr}}</b></small>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <template ngFor [ngForOf]=\"rows\" let-rowz=\"$implicit\" let-index=\"index\">\n      <tr *ngIf=\"!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)\">\n        <td *ngIf=\"datePicker.showWeeks\" class=\"h6\" class=\"text-center\">\n          <em>{{ weekNumbers[index] }}</em>\n        </td>\n        <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [id]=\"dtz.uid\">\n          <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-sm {{dtz.customClass}}\"\n                  *ngIf=\"!(datePicker.onlyCurrentMonth && dtz.secondary)\"\n                  [ngClass]=\"{'btn-secondary': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz), 'btn-default': !isBs4}\"\n                  [disabled]=\"dtz.disabled\"\n                  (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n            <span [ngClass]=\"{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBs4 && dtz.current}\">{{dtz.label}}</span>\n          </button>\n        </td>\n      </tr>\n    </template>\n  </tbody>\n</table>\n  "
                },] },
    ];
    /** @nocollapse */
    DayPickerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__datepicker_inner_component__["a" /* DatePickerInnerComponent */], },
    ]; };
    return DayPickerComponent;
}());
//# sourceMappingURL=daypicker.component.js.map

/***/ }),

/***/ 1431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return MonthPickerComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__ = __webpack_require__(1379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker_inner_component__ = __webpack_require__(1382);



var MonthPickerComponent = (function () {
    function MonthPickerComponent(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(MonthPickerComponent.prototype, "isBs4", {
        get: function () {
            return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    MonthPickerComponent.prototype.ngOnInit = function () {
        var self = this;
        this.datePicker.stepMonth = { years: 1 };
        this.datePicker.setRefreshViewHandler((function () {
            var months = new Array(12);
            var year = this.activeDate.getFullYear();
            var date;
            for (var i = 0; i < 12; i++) {
                date = new Date(year, i, 1);
                date = this.fixTimeZone(date);
                months[i] = this.createDateObject(date, this.formatMonth);
                months[i].uid = this.uniqueId + '-' + i;
            }
            self.title = this.dateFilter(this.activeDate, this.formatMonthTitle);
            self.rows = this.split(months, self.datePicker.monthColLimit);
        }), 'month');
        this.datePicker.setCompareHandler((function (date1, date2) {
            var d1 = new Date(date1.getFullYear(), date1.getMonth());
            var d2 = new Date(date2.getFullYear(), date2.getMonth());
            return d1.getTime() - d2.getTime();
        }), 'month');
        this.datePicker.refreshView();
    };
    // todo: key events implementation
    MonthPickerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'monthpicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode==='month'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\n          <i class=\"glyphicon glyphicon-chevron-left\"></i>\n        </button></th>\n      <th [attr.colspan]=\"((datePicker.monthColLimit - 2) <= 0) ? 1 : datePicker.monthColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode()\"\n                [disabled]=\"datePicker.datepickerMode === maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{title}}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\n          <i class=\"glyphicon glyphicon-chevron-right\"></i>\n        </button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" id=\"{{dtz.uid}}\" [ngClass]=\"dtz.customClass\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{dtz.label}}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  "
                },] },
    ];
    /** @nocollapse */
    MonthPickerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__datepicker_inner_component__["a" /* DatePickerInnerComponent */], },
    ]; };
    return MonthPickerComponent;
}());
//# sourceMappingURL=monthpicker.component.js.map

/***/ }),

/***/ 1432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return YearPickerComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__ = __webpack_require__(1379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker_inner_component__ = __webpack_require__(1382);



var YearPickerComponent = (function () {
    function YearPickerComponent(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(YearPickerComponent.prototype, "isBs4", {
        get: function () {
            return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    YearPickerComponent.prototype.ngOnInit = function () {
        var self = this;
        this.datePicker.stepYear = { years: this.datePicker.yearRange };
        this.datePicker.setRefreshViewHandler((function () {
            var years = new Array(this.yearRange);
            var date;
            var start = self.getStartingYear(this.activeDate.getFullYear());
            for (var i = 0; i < this.yearRange; i++) {
                date = new Date(start + i, 0, 1);
                date = this.fixTimeZone(date);
                years[i] = this.createDateObject(date, this.formatYear);
                years[i].uid = this.uniqueId + '-' + i;
            }
            self.title = [years[0].label,
                years[this.yearRange - 1].label].join(' - ');
            self.rows = this.split(years, self.datePicker.yearColLimit);
        }), 'year');
        this.datePicker.setCompareHandler((function (date1, date2) {
            return date1.getFullYear() - date2.getFullYear();
        }), 'year');
        this.datePicker.refreshView();
    };
    YearPickerComponent.prototype.getStartingYear = function (year) {
        // todo: parseInt
        return ((year - 1) / this.datePicker.yearRange) * this.datePicker.yearRange + 1;
    };
    YearPickerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'yearpicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode==='year'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\n          <i class=\"glyphicon glyphicon-chevron-left\"></i>\n        </button>\n      </th>\n      <th [attr.colspan]=\"((datePicker.yearColLimit - 2) <= 0) ? 1 : datePicker.yearColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\" role=\"heading\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode()\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{title}}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\n          <i class=\"glyphicon glyphicon-chevron-right\"></i>\n        </button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{dtz.label}}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  "
                },] },
    ];
    /** @nocollapse */
    YearPickerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__datepicker_inner_component__["a" /* DatePickerInnerComponent */], },
    ]; };
    return YearPickerComponent;
}());
//# sourceMappingURL=yearpicker.component.js.map

/***/ }),

/***/ 1433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return DropdownMenuDirective; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_directive__ = __webpack_require__(1383);


var DropdownMenuDirective = (function () {
    /* tslint:enable:no-unused-variable */
    function DropdownMenuDirective(dropdown, el) {
        /* tslint:disable:no-unused-variable */
        this.addClass = true;
        this.dropdown = dropdown;
        this.el = el;
    }
    DropdownMenuDirective.prototype.ngOnInit = function () {
        this.dropdown.dropDownMenu = this;
    };
    DropdownMenuDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[dropdownMenu]',
                    exportAs: 'bs-dropdown-menu'
                },] },
    ];
    /** @nocollapse */
    DropdownMenuDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__dropdown_directive__["a" /* DropdownDirective */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    DropdownMenuDirective.propDecorators = {
        'addClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.dropdown-menu',] },],
    };
    return DropdownMenuDirective;
}());
//# sourceMappingURL=dropdown-menu.directive.js.map

/***/ }),

/***/ 1434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return DropdownToggleDirective; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_directive__ = __webpack_require__(1383);


/* tslint:disable-next-line */
var MouseEvent = global.MouseEvent;
/** Mark element which can toggle dropdown visibility with this directive */
var DropdownToggleDirective = (function () {
    function DropdownToggleDirective(dropdown, el) {
        /** if true dropdown toggle will be disabled */
        this.isDisabled = false;
        /** if true the dropdown-toggle class will be added to the element */
        this.addToggleClass = true;
        this.addClass = true;
        this.dropdown = dropdown;
        this.el = el;
    }
    DropdownToggleDirective.prototype.ngOnInit = function () {
        this.dropdown.dropDownToggle = this;
    };
    Object.defineProperty(DropdownToggleDirective.prototype, "isOpen", {
        get: function () {
            return this.dropdown.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    DropdownToggleDirective.prototype.toggleDropdown = function (event) {
        event.stopPropagation();
        if (!this.isDisabled) {
            this.dropdown.toggle();
        }
        return false;
    };
    DropdownToggleDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[dropdownToggle]',
                    exportAs: 'bs-dropdown-toggle'
                },] },
    ];
    /** @nocollapse */
    DropdownToggleDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__dropdown_directive__["a" /* DropdownDirective */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    DropdownToggleDirective.propDecorators = {
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.disabled',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'addToggleClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class.dropdown-toggle',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'addClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.aria-haspopup',] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.aria-expanded',] },],
        'toggleDropdown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click', ['$event'],] },],
    };
    return DropdownToggleDirective;
}());
//# sourceMappingURL=dropdown-toggle.directive.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(48)))

/***/ }),

/***/ 1435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return DropdownModule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_menu_directive__ = __webpack_require__(1433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_toggle_directive__ = __webpack_require__(1434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdown_directive__ = __webpack_require__(1383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdown_config__ = __webpack_require__(1395);





var DropdownModule = (function () {
    function DropdownModule() {
    }
    DropdownModule.forRoot = function () {
        return { ngModule: DropdownModule, providers: [__WEBPACK_IMPORTED_MODULE_4__dropdown_config__["a" /* DropdownConfig */]] };
    };
    DropdownModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_3__dropdown_directive__["a" /* DropdownDirective */], __WEBPACK_IMPORTED_MODULE_1__dropdown_menu_directive__["a" /* DropdownMenuDirective */], __WEBPACK_IMPORTED_MODULE_2__dropdown_toggle_directive__["a" /* DropdownToggleDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_3__dropdown_directive__["a" /* DropdownDirective */], __WEBPACK_IMPORTED_MODULE_1__dropdown_menu_directive__["a" /* DropdownMenuDirective */], __WEBPACK_IMPORTED_MODULE_2__dropdown_toggle_directive__["a" /* DropdownToggleDirective */]]
                },] },
    ];
    /** @nocollapse */
    DropdownModule.ctorParameters = function () { return []; };
    return DropdownModule;
}());
//# sourceMappingURL=dropdown.module.js.map

/***/ }),

/***/ 1436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return modalConfigDefaults; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ClassName; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", (function() { return Selector; }));
var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true,
    ignoreBackdropClick: false
};
var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    SHOW: 'show' // bs4
};
var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
//# sourceMappingURL=modal-options.class.js.map

/***/ }),

/***/ 1437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ModalDirective; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__ = __webpack_require__(1387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__ = __webpack_require__(1379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__ = __webpack_require__(1465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_backdrop_component__ = __webpack_require__(1397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_options_class__ = __webpack_require__(1436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_loader_component_loader_factory__ = __webpack_require__(1425);
/* tslint:disable:max-file-line-count */
// todo: should we support enforce focus in?
// todo: in original bs there are was a way to prevent modal from showing
// todo: original modal had resize events








var TRANSITION_DURATION = 300;
var BACKDROP_TRANSITION_DURATION = 150;
/** Mark any code with directive to show it's content in modal */
var ModalDirective = (function () {
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        /** This event fires immediately when the `show` instance method is called. */
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete) */
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event is fired immediately when the hide instance method has been called. */
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete). */
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // seems like an Options
        this.isAnimated = true;
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this._element = _element;
        this._renderer = _renderer;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        get: function () {
            return this._config;
        },
        /** allows to set modal configuration via element property */
        set: function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    ModalDirective.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
        }
        this.hide(event);
    };
    // todo: consider preventing default and stopping propagation
    ModalDirective.prototype.onEsc = function () {
        if (this.config.keyboard) {
            this.hide();
        }
    };
    ModalDirective.prototype.ngOnDestroy = function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    ModalDirective.prototype.ngAfterViewInit = function () {
        this._config = this._config || this.getConfig();
    };
    /* Public methods */
    /** Allows to manually toggle modal visibility */
    ModalDirective.prototype.toggle = function () {
        return this._isShown ? this.hide() : this.show();
    };
    /** Allows to manually open modal */
    ModalDirective.prototype.show = function () {
        var _this = this;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body) {
            this._renderer.setElementClass(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* ClassName */].OPEN, true);
        }
        this.showBackdrop((function () {
            _this.showElement();
        }));
    };
    /** Allows to manually close modal */
    ModalDirective.prototype.hide = function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.setElementClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* ClassName */].IN, false);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])()) {
            this._renderer.setElementClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* ClassName */].SHOW, false);
        }
        // this._addClassIn = false;
        if (this.isAnimated) {
            this.timerHideModal = setTimeout((function () { return _this.hideModal(); }), TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /** Private methods @internal */
    ModalDirective.prototype.getConfig = function (config) {
        return Object.assign({}, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["b" /* modalConfigDefaults */], config);
    };
    /**
     *  Show dialog
     *  @internal
     */
    ModalDirective.prototype.showElement = function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            (this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE)) {
            // don't move modals dom position
            if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body) {
                __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setElementAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setElementStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setElementProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this.isAnimated) {
            __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["a" /* Utils */].reflow(this._element.nativeElement);
        }
        // this._addClassIn = true;
        this._renderer.setElementClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* ClassName */].IN, true);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])()) {
            this._renderer.setElementClass(this._element.nativeElement, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* ClassName */].SHOW, true);
        }
        var transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        if (this.isAnimated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /** @internal */
    ModalDirective.prototype.hideModal = function () {
        var _this = this;
        this._renderer.setElementAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setElementStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop((function () {
            if (__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */] && __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body) {
                _this._renderer.setElementClass(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body, __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* ClassName */].OPEN, false);
            }
            _this.resetAdjustments();
            _this.resetScrollbar();
            _this.onHidden.emit(_this);
        }));
    };
    // todo: original show was calling a callback when done, but we can use promise
    /** @internal */
    ModalDirective.prototype.showBackdrop = function (callback) {
        var _this = this;
        if (this._isShown && this.config.backdrop && (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(__WEBPACK_IMPORTED_MODULE_4__modal_backdrop_component__["a" /* ModalBackdropComponent */])
                .to('body')
                .show({ isAnimated: false });
            this.backdrop = this._backdrop._componentRef;
            if (this.isAnimated) {
                this.backdrop.instance.isAnimated = this.isAnimated;
                __WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["a" /* Utils */].reflow(this.backdrop.instance.element.nativeElement);
            }
            this.backdrop.instance.isShown = true;
            if (!callback) {
                return;
            }
            if (!this.isAnimated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            var callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    /** @internal */
    ModalDirective.prototype.removeBackdrop = function () {
        this._backdrop.hide();
    };
    /** Events tricks */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    /** @internal */
    ModalDirective.prototype.resetAdjustments = function () {
        this._renderer.setElementStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setElementStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /** Scroll bar tricks */
    /** @internal */
    ModalDirective.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body.clientWidth < __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["a" /* window */].innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    ModalDirective.prototype.setScrollbar = function () {
        if (!__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */]) {
            return;
        }
        var fixedEl = __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].querySelector(__WEBPACK_IMPORTED_MODULE_5__modal_options_class__["c" /* Selector */].FIXED_CONTENT);
        if (!fixedEl) {
            return;
        }
        var bodyPadding = parseInt(__WEBPACK_IMPORTED_MODULE_3__utils_utils_class__["a" /* Utils */].getStyles(fixedEl).paddingRight || 0, 10);
        this.originalBodyPadding = parseInt(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body.style.paddingRight || 0, 10);
        if (this.isBodyOverflowing) {
            __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body.style.paddingRight = (bodyPadding + this.scrollbarWidth) + "px";
        }
    };
    ModalDirective.prototype.resetScrollbar = function () {
        __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body.style.paddingRight = this.originalBodyPadding;
    };
    // thx d.walsh
    ModalDirective.prototype.getScrollbarWidth = function () {
        var scrollDiv = this._renderer.createElement(__WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body, 'div', void 0);
        scrollDiv.className = __WEBPACK_IMPORTED_MODULE_5__modal_options_class__["a" /* ClassName */].SCROLLBAR_MEASURER;
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        __WEBPACK_IMPORTED_MODULE_1__utils_facade_browser__["b" /* document */].body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    ModalDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsModal]',
                    exportAs: 'bs-modal'
                },] },
    ];
    /** @nocollapse */
    ModalDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_6__component_loader_component_loader_factory__["a" /* ComponentLoaderFactory */], },
    ]; };
    ModalDirective.propDecorators = {
        'config': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onShow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click', ['$event'],] },],
        'onEsc': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keydown.esc',] },],
    };
    return ModalDirective;
}());
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ 1438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ModalModule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__ = __webpack_require__(1397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_component__ = __webpack_require__(1437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__positioning__ = __webpack_require__(1381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_loader__ = __webpack_require__(1380);





var ModalModule = (function () {
    function ModalModule() {
    }
    ModalModule.forRoot = function () {
        return { ngModule: ModalModule, providers: [__WEBPACK_IMPORTED_MODULE_4__component_loader__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_3__positioning__["a" /* PositioningService */]] };
    };
    ModalModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__["a" /* ModalBackdropComponent */], __WEBPACK_IMPORTED_MODULE_2__modal_component__["a" /* ModalDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__["a" /* ModalBackdropComponent */], __WEBPACK_IMPORTED_MODULE_2__modal_component__["a" /* ModalDirective */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_1__modal_backdrop_component__["a" /* ModalBackdropComponent */]]
                },] },
    ];
    /** @nocollapse */
    ModalModule.ctorParameters = function () { return []; };
    return ModalModule;
}());
//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ 1439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PAGER_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return PagerComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_config__ = __webpack_require__(1384);



var PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])((function () { return PagerComponent; })),
    multi: true
};
var PAGER_TEMPLATE = "\n    <ul class=\"pager\">\n      <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\" [ngClass]=\"{'pull-right': align}\" class=\"{{ pageBtnClass }}\">\n        <a href (click)=\"selectPage(page - 1, $event)\">{{getText('previous')}}</a>\n      </li>\n      <li [class.disabled]=\"noNext()\" [class.next]=\"align\" [ngClass]=\"{'pull-right': align}\" class=\"{{ pageBtnClass }}\">\n        <a href (click)=\"selectPage(page + 1, $event)\">{{getText('next')}}</a>\n      </li>\n  </ul>\n";
var PagerComponent = (function () {
    function PagerComponent(renderer, elementRef, paginationConfig) {
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to object with current page index and number of items per page */
        this.pageChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.renderer = renderer;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
    }
    Object.defineProperty(PagerComponent.prototype, "itemsPerPage", {
        /** maximum number of items per page. If value less than 1 will display all items on one page */
        get: function () {
            return this._itemsPerPage;
        },
        set: function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalItems", {
        /** total number of items in all pages */
        get: function () {
            return this._totalItems;
        },
        set: function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            var _previous = this._page;
            this._page = (value > this.totalPages) ? this.totalPages : (value || 1);
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    PagerComponent.prototype.configureOptions = function (config) {
        this.config = Object.assign({}, config);
    };
    PagerComponent.prototype.ngOnInit = function () {
        this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        // watch for maxSize
        this.maxSize = typeof this.maxSize !== 'undefined'
            ? this.maxSize
            : this.config.maxSize;
        this.rotate = typeof this.rotate !== 'undefined'
            ? this.rotate
            : this.config.rotate;
        this.boundaryLinks = typeof this.boundaryLinks !== 'undefined'
            ? this.boundaryLinks
            : this.config.boundaryLinks;
        this.directionLinks = typeof this.directionLinks !== 'undefined'
            ? this.directionLinks
            : this.config.directionLinks;
        this.pageBtnClass = typeof this.pageBtnClass !== 'undefined'
            ? this.pageBtnClass
            : this.config.pageBtnClass;
        // base class
        this.itemsPerPage = typeof this.itemsPerPage !== 'undefined'
            ? this.itemsPerPage
            : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    PagerComponent.prototype.writeValue = function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    PagerComponent.prototype.getText = function (key) {
        return this[key + 'Text'] || this.config[key + 'Text'];
    };
    PagerComponent.prototype.noPrevious = function () {
        return this.page === 1;
    };
    PagerComponent.prototype.noNext = function () {
        return this.page === this.totalPages;
    };
    PagerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PagerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PagerComponent.prototype.selectPage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    PagerComponent.prototype.makePage = function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    PagerComponent.prototype.getPages = function (currentPage, totalPages) {
        var pages = [];
        // Default page limits
        var startPage = 1;
        var endPage = totalPages;
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage = ((Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize) + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    PagerComponent.prototype.calculateTotalPages = function () {
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PagerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'pager',
                    template: PAGER_TEMPLATE,
                    providers: [PAGER_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    PagerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__pagination_config__["a" /* PaginationConfig */], },
    ]; };
    PagerComponent.propDecorators = {
        'align': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'boundaryLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'firstText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'previousText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'nextText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'lastText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'rotate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageBtnClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'numPages': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'pageChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'itemsPerPage': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'totalItems': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return PagerComponent;
}());
//# sourceMappingURL=pager.component.js.map

/***/ }),

/***/ 1440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PAGINATION_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return PaginationComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_config__ = __webpack_require__(1384);



var PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])((function () { return PaginationComponent; })),
    multi: true
};
var PAGINATION_TEMPLATE = "\n  <ul class=\"pagination\" [ngClass]=\"classMap\">\n    <li class=\"pagination-first page-item\"\n        *ngIf=\"boundaryLinks\"\n        [class.disabled]=\"noPrevious()||disabled\">\n      <a class=\"page-link\" href (click)=\"selectPage(1, $event)\" [innerHTML]=\"getText('first')\"></a>\n    </li>\n\n    <li class=\"pagination-prev page-item\"\n        *ngIf=\"directionLinks\"\n        [class.disabled]=\"noPrevious()||disabled\">\n      <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\" [innerHTML]=\"getText('previous')\"></a>\n      </li>\n\n    <li *ngFor=\"let pg of pages\"\n        [class.active]=\"pg.active\"\n        [class.disabled]=\"disabled&&!pg.active\"\n        class=\"pagination-page page-item\">\n      <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\" [innerHTML]=\"pg.text\"></a>\n    </li>\n\n    <li class=\"pagination-next page-item\"\n        *ngIf=\"directionLinks\"\n        [class.disabled]=\"noNext()||disabled\">\n      <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\" [innerHTML]=\"getText('next')\"></a></li>\n\n    <li class=\"pagination-last page-item\"\n        *ngIf=\"boundaryLinks\"\n        [class.disabled]=\"noNext()||disabled\">\n      <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\" [innerHTML]=\"getText('last')\"></a></li>\n  </ul>\n  ";
var PaginationComponent = (function () {
    function PaginationComponent(renderer, elementRef, paginationConfig) {
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to object with current page index and number of items per page */
        this.pageChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.renderer = renderer;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
        }
    }
    Object.defineProperty(PaginationComponent.prototype, "itemsPerPage", {
        /** maximum number of items per page. If value less than 1 will display all items on one page */
        get: function () {
            return this._itemsPerPage;
        },
        set: function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        /** total number of items in all pages */
        get: function () {
            return this._totalItems;
        },
        set: function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            var _previous = this._page;
            this._page = (value > this.totalPages) ? this.totalPages : (value || 1);
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.configureOptions = function (config) {
        this.config = Object.assign({}, config);
    };
    PaginationComponent.prototype.ngOnInit = function () {
        this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        // watch for maxSize
        this.maxSize = typeof this.maxSize !== 'undefined'
            ? this.maxSize
            : this.config.maxSize;
        this.rotate = typeof this.rotate !== 'undefined'
            ? this.rotate
            : this.config.rotate;
        this.boundaryLinks = typeof this.boundaryLinks !== 'undefined'
            ? this.boundaryLinks
            : this.config.boundaryLinks;
        this.directionLinks = typeof this.directionLinks !== 'undefined'
            ? this.directionLinks
            : this.config.directionLinks;
        this.pageBtnClass = typeof this.pageBtnClass !== 'undefined'
            ? this.pageBtnClass
            : this.config.pageBtnClass;
        // base class
        this.itemsPerPage = typeof this.itemsPerPage !== 'undefined'
            ? this.itemsPerPage
            : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    PaginationComponent.prototype.writeValue = function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    PaginationComponent.prototype.getText = function (key) {
        return this[key + 'Text'] || this.config[key + 'Text'];
    };
    PaginationComponent.prototype.noPrevious = function () {
        return this.page === 1;
    };
    PaginationComponent.prototype.noNext = function () {
        return this.page === this.totalPages;
    };
    PaginationComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PaginationComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PaginationComponent.prototype.selectPage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    PaginationComponent.prototype.makePage = function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    PaginationComponent.prototype.getPages = function (currentPage, totalPages) {
        var pages = [];
        // Default page limits
        var startPage = 1;
        var endPage = totalPages;
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage = ((Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize) + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    PaginationComponent.prototype.calculateTotalPages = function () {
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PaginationComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'pagination',
                    template: PAGINATION_TEMPLATE,
                    providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__pagination_config__["a" /* PaginationConfig */], },
    ]; };
    PaginationComponent.propDecorators = {
        'align': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'boundaryLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'firstText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'previousText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'nextText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'lastText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'rotate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageBtnClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'numPages': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'pageChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'itemsPerPage': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'totalItems': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return PaginationComponent;
}());
//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ 1441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return PaginationModule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_config__ = __webpack_require__(1384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pager_component__ = __webpack_require__(1439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagination_component__ = __webpack_require__(1440);





var PaginationModule = (function () {
    function PaginationModule() {
    }
    PaginationModule.forRoot = function () {
        return { ngModule: PaginationModule, providers: [__WEBPACK_IMPORTED_MODULE_2__pagination_config__["a" /* PaginationConfig */]] };
    };
    PaginationModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_3__pager_component__["a" /* PagerComponent */], __WEBPACK_IMPORTED_MODULE_4__pagination_component__["a" /* PaginationComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_3__pager_component__["a" /* PagerComponent */], __WEBPACK_IMPORTED_MODULE_4__pagination_component__["a" /* PaginationComponent */]]
                },] },
    ];
    /** @nocollapse */
    PaginationModule.ctorParameters = function () { return []; };
    return PaginationModule;
}());
//# sourceMappingURL=pagination.module.js.map

/***/ }),

/***/ 1442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return PopoverDirective; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_config__ = __webpack_require__(1385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_loader__ = __webpack_require__(1380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_container_component__ = __webpack_require__(1398);




/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var PopoverDirective = (function () {
    function PopoverDirective(_elementRef, _renderer, _viewContainerRef, _config, cis) {
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_1__popover_config__["a" /* PopoverConfig */], useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
    }
    Object.defineProperty(PopoverDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: function () { return this._popover.isShown; },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.show = function () {
        if (this._popover.isShown) {
            return;
        }
        this._popover
            .attach(__WEBPACK_IMPORTED_MODULE_3__popover_container_component__["a" /* PopoverContainerComponent */])
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.popover,
            placement: this.placement,
            title: this.popoverTitle
        });
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.hide = function () {
        if (this.isOpen) {
            this._popover.hide();
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    PopoverDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._popover.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
    };
    PopoverDirective.prototype.ngOnDestroy = function () {
        this._popover.dispose();
    };
    PopoverDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[popover]', exportAs: 'bs-popover' },] },
    ];
    /** @nocollapse */
    PopoverDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__popover_config__["a" /* PopoverConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__component_loader__["a" /* ComponentLoaderFactory */], },
    ]; };
    PopoverDirective.propDecorators = {
        'popover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'popoverTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return PopoverDirective;
}());
//# sourceMappingURL=popover.directive.js.map

/***/ }),

/***/ 1443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return PopoverModule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_loader__ = __webpack_require__(1380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__positioning__ = __webpack_require__(1381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_config__ = __webpack_require__(1385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popover_directive__ = __webpack_require__(1442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popover_container_component__ = __webpack_require__(1398);







var PopoverModule = (function () {
    function PopoverModule() {
    }
    PopoverModule.forRoot = function () {
        return {
            ngModule: PopoverModule,
            providers: [__WEBPACK_IMPORTED_MODULE_4__popover_config__["a" /* PopoverConfig */], __WEBPACK_IMPORTED_MODULE_2__component_loader__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_3__positioning__["a" /* PositioningService */]]
        };
    };
    PopoverModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_5__popover_directive__["a" /* PopoverDirective */], __WEBPACK_IMPORTED_MODULE_6__popover_container_component__["a" /* PopoverContainerComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_5__popover_directive__["a" /* PopoverDirective */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_6__popover_container_component__["a" /* PopoverContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    PopoverModule.ctorParameters = function () { return []; };
    return PopoverModule;
}());
//# sourceMappingURL=popover.module.js.map

/***/ }),

/***/ 1444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Positioning */
/* harmony export (immutable) */ __webpack_exports__["a"] = positionElements;
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
// tslint:disable
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        var shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split(' ')[0] || 'top';
        var placementSecondary = placement.split(' ')[1] || 'center';
        var targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    Positioning.prototype.getStyle = function (element, prop) { return window.getComputedStyle(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    return Positioning;
}());
var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
//# sourceMappingURL=ng-positioning.js.map

/***/ }),

/***/ 1445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return BarComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_directive__ = __webpack_require__(1399);


// todo: number pipe
// todo: use query from progress?
var BarComponent = (function () {
    function BarComponent(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    Object.defineProperty(BarComponent.prototype, "value", {
        /** current value of progress bar */
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (!v && v !== 0) {
                return;
            }
            this._value = v;
            this.recalculatePercentage();
        },
        enumerable: true,
        configurable: true
    });
    BarComponent.prototype.ngOnInit = function () {
        this.progress.addBar(this);
    };
    BarComponent.prototype.ngOnDestroy = function () {
        this.progress.removeBar(this);
    };
    BarComponent.prototype.recalculatePercentage = function () {
        this.percent = +(100 * this.value / this.progress.max).toFixed(2);
        var totalPercentage = this.progress.bars.reduce((function (total, bar) {
            return total + bar.percent;
        }), 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    };
    BarComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bar',
                    template: "\n  <div class=\"progress-bar\"\n    style=\"min-width: 0;\"\n    role=\"progressbar\"\n    [ngClass]=\"type && 'progress-bar-' + type\"\n    [ngStyle]=\"{width: (percent < 100 ? percent : 100) + '%', transition: transition}\"\n    aria-valuemin=\"0\"\n    [attr.aria-valuenow]=\"value\"\n    [attr.aria-valuetext]=\"percent.toFixed(0) + '%'\"\n    [attr.aria-valuemax]=\"max\"><ng-content></ng-content></div>\n"
                },] },
    ];
    /** @nocollapse */
    BarComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__progress_directive__["a" /* ProgressDirective */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
    ]; };
    BarComponent.propDecorators = {
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return BarComponent;
}());
//# sourceMappingURL=bar.component.js.map

/***/ }),

/***/ 1446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ProgressbarComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progressbar_config__ = __webpack_require__(1400);


var ProgressbarComponent = (function () {
    function ProgressbarComponent(config) {
        Object.assign(this, config);
    }
    ProgressbarComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'progressbar',
                    template: "\n    <div progress [animate]=\"animate\" [max]=\"max\">\n      <bar [type]=\"type\" [value]=\"value\">\n          <ng-content></ng-content>\n      </bar>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    ProgressbarComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__progressbar_config__["a" /* ProgressbarConfig */], },
    ]; };
    ProgressbarComponent.propDecorators = {
        'animate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return ProgressbarComponent;
}());
//# sourceMappingURL=progressbar.component.js.map

/***/ }),

/***/ 1447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ProgressbarModule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bar_component__ = __webpack_require__(1445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_directive__ = __webpack_require__(1399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progressbar_component__ = __webpack_require__(1446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progressbar_config__ = __webpack_require__(1400);






var ProgressbarModule = (function () {
    function ProgressbarModule() {
    }
    ProgressbarModule.forRoot = function () {
        return { ngModule: ProgressbarModule, providers: [__WEBPACK_IMPORTED_MODULE_5__progressbar_config__["a" /* ProgressbarConfig */]] };
    };
    ProgressbarModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_3__progress_directive__["a" /* ProgressDirective */], __WEBPACK_IMPORTED_MODULE_2__bar_component__["a" /* BarComponent */], __WEBPACK_IMPORTED_MODULE_4__progressbar_component__["a" /* ProgressbarComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_3__progress_directive__["a" /* ProgressDirective */], __WEBPACK_IMPORTED_MODULE_2__bar_component__["a" /* BarComponent */], __WEBPACK_IMPORTED_MODULE_4__progressbar_component__["a" /* ProgressbarComponent */]]
                },] },
    ];
    /** @nocollapse */
    ProgressbarModule.ctorParameters = function () { return []; };
    return ProgressbarModule;
}());
//# sourceMappingURL=progressbar.module.js.map

/***/ }),

/***/ 1448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export RATING_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return RatingComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);


/* tslint:disable-next-line */
var KeyboardEvent = global.KeyboardEvent;
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])((function () { return RatingComponent; })),
    multi: true
};
var RatingComponent = (function () {
    function RatingComponent() {
        /** number of icons */
        this.max = 5;
        /** fired when icon selected, $event:number equals to selected rating */
        this.onHover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired when icon selected, $event:number equals to previous rating value */
        this.onLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    RatingComponent.prototype.onKeydown = function (event) {
        if ([37, 38, 39, 40].indexOf(event.which) === -1) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        var sign = event.which === 38 || event.which === 39 ? 1 : -1;
        this.rate(this.value + sign);
    };
    RatingComponent.prototype.ngOnInit = function () {
        this.max = typeof this.max !== 'undefined' ? this.max : 5;
        this.readonly = this.readonly === true;
        this.stateOn = typeof this.stateOn !== 'undefined'
            ? this.stateOn
            : 'glyphicon-star';
        this.stateOff = typeof this.stateOff !== 'undefined'
            ? this.stateOff
            : 'glyphicon-star-empty';
        this.titles = typeof this.titles !== 'undefined' && this.titles.length > 0
            ? this.titles
            : ['one', 'two', 'three', 'four', 'five'];
        this.range = this.buildTemplateObjects(this.ratingStates, this.max);
    };
    // model -> view
    RatingComponent.prototype.writeValue = function (value) {
        if (value % 1 !== value) {
            this.value = Math.round(value);
            this.preValue = value;
            return;
        }
        this.preValue = value;
        this.value = value;
    };
    RatingComponent.prototype.enter = function (value) {
        if (!this.readonly) {
            this.value = value;
            this.onHover.emit(value);
        }
    };
    RatingComponent.prototype.reset = function () {
        this.value = this.preValue;
        this.onLeave.emit(this.value);
    };
    RatingComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RatingComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    RatingComponent.prototype.rate = function (value) {
        if (!this.readonly && value >= 0 && value <= this.range.length) {
            this.writeValue(value);
            this.onChange(value);
        }
    };
    RatingComponent.prototype.buildTemplateObjects = function (ratingStates, max) {
        ratingStates = ratingStates || [];
        var count = ratingStates.length || max;
        var result = [];
        for (var i = 0; i < count; i++) {
            result.push(Object.assign({
                index: i,
                stateOn: this.stateOn,
                stateOff: this.stateOff,
                title: this.titles[i] || i + 1
            }, ratingStates[i] || {}));
        }
        return result;
    };
    RatingComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'rating',
                    template: "\n    <span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"range.length\" [attr.aria-valuenow]=\"value\">\n      <template ngFor let-r [ngForOf]=\"range\" let-index=\"index\">\n        <span class=\"sr-only\">({{ index < value ? '*' : ' ' }})</span>\n        <i (mouseenter)=\"enter(index + 1)\" (click)=\"rate(index + 1)\" class=\"glyphicon\" [ngClass]=\"index < value ? r.stateOn : r.stateOff\" [title]=\"r.title\" ></i>\n      </template>\n    </span>\n  ",
                    providers: [RATING_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    RatingComponent.ctorParameters = function () { return []; };
    RatingComponent.propDecorators = {
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'stateOn': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'stateOff': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'readonly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'titles': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'ratingStates': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onHover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onLeave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onKeydown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keydown', ['$event'],] },],
    };
    return RatingComponent;
}());
//# sourceMappingURL=rating.component.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(48)))

/***/ }),

/***/ 1449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return RatingModule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rating_component__ = __webpack_require__(1448);



var RatingModule = (function () {
    function RatingModule() {
    }
    RatingModule.forRoot = function () {
        return {
            ngModule: RatingModule,
            providers: []
        };
    };
    RatingModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__rating_component__["a" /* RatingComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__rating_component__["a" /* RatingComponent */]]
                },] },
    ];
    /** @nocollapse */
    RatingModule.ctorParameters = function () { return []; };
    return RatingModule;
}());
//# sourceMappingURL=rating.module.js.map

/***/ }),

/***/ 1450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sortable_module__ = __webpack_require__(1483);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__sortable_module__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sortable_component__ = __webpack_require__(1451);
/* unused harmony reexport SortableComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__draggable_item_service__ = __webpack_require__(1401);
/* unused harmony reexport DraggableItemService */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return SortableComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__draggable_item_service__ = __webpack_require__(1401);



/* tslint:disable */
/* tslint:enable */
var SortableComponent = (function () {
    function SortableComponent(transfer) {
        var _this = this;
        /** class name for items wrapper */
        this.wrapperClass = '';
        /** style object for items wrapper */
        this.wrapperStyle = {};
        /** class name for item */
        this.itemClass = '';
        /** style object for item */
        this.itemStyle = {};
        /** class name for active item */
        this.itemActiveClass = '';
        /** style object for active item */
        this.itemActiveStyle = {};
        /** class name for placeholder */
        this.placeholderClass = '';
        /** style object for placeholder */
        this.placeholderStyle = {};
        /** placeholder item which will be shown if collection is empty */
        this.placeholderItem = '';
        /** fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
         *  Returns new items collection as a payload.
         */
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showPlaceholder = false;
        this.activeItem = -1;
        this.onTouched = Function.prototype;
        this.onChanged = Function.prototype;
        this.transfer = transfer;
        this.currentZoneIndex = SortableComponent.globalZoneIndex++;
        this.transfer.onCaptureItem()
            .subscribe((function (item) { return _this.onDrop(item); }));
    }
    Object.defineProperty(SortableComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
            var out = this.items.map((function (x) { return x.initData; }));
            this.onChanged(out);
            this.onChange.emit(out);
        },
        enumerable: true,
        configurable: true
    });
    SortableComponent.prototype.onItemDragstart = function (event, item, i) {
        this.initDragstartEvent(event);
        this.onTouched();
        this.transfer.dragStart({
            event: event,
            item: item,
            i: i,
            initialIndex: i,
            lastZoneIndex: this.currentZoneIndex,
            overZoneIndex: this.currentZoneIndex
        });
    };
    SortableComponent.prototype.onItemDragover = function (event, i) {
        if (!this.transfer.getItem()) {
            return;
        }
        event.preventDefault();
        var dragItem = this.transfer.captureItem(this.currentZoneIndex, this.items.length);
        var newArray = [];
        if (!this.items.length) {
            newArray = [dragItem.item];
        }
        else if (dragItem.i > i) {
            newArray = this.items.slice(0, i).concat([
                dragItem.item
            ], this.items.slice(i, dragItem.i), this.items.slice(dragItem.i + 1));
        }
        else {
            newArray = this.items.slice(0, dragItem.i).concat(this.items.slice(dragItem.i + 1, i + 1), [
                dragItem.item
            ], this.items.slice(i + 1));
        }
        this.items = newArray;
        dragItem.i = i;
        this.activeItem = i;
        this.updatePlaceholderState();
    };
    SortableComponent.prototype.cancelEvent = function (event) {
        if (!this.transfer.getItem() || !event) {
            return;
        }
        event.preventDefault();
    };
    SortableComponent.prototype.onDrop = function (item) {
        if (item &&
            item.overZoneIndex !== this.currentZoneIndex &&
            item.lastZoneIndex === this.currentZoneIndex) {
            this.items = this.items.filter((function (x, i) { return i !== item.i; }));
            this.updatePlaceholderState();
        }
        this.resetActiveItem(undefined);
    };
    SortableComponent.prototype.resetActiveItem = function (event) {
        this.cancelEvent(event);
        this.activeItem = -1;
    };
    SortableComponent.prototype.registerOnChange = function (callback) {
        this.onChanged = callback;
    };
    SortableComponent.prototype.registerOnTouched = function (callback) {
        this.onTouched = callback;
    };
    SortableComponent.prototype.writeValue = function (value) {
        var _this = this;
        if (value) {
            this.items = value.map((function (x, i) { return ({
                id: i,
                initData: x,
                value: _this.fieldName ? x[_this.fieldName] : x
            }); }));
        }
        else {
            this.items = [];
        }
        this.updatePlaceholderState();
    };
    SortableComponent.prototype.updatePlaceholderState = function () {
        this.showPlaceholder = !this._items.length;
    };
    SortableComponent.prototype.getItemStyle = function (isActive) {
        return isActive
            ? Object.assign({}, this.itemStyle, this.itemActiveStyle)
            : this.itemStyle;
    };
    SortableComponent.prototype.initDragstartEvent = function (event) {
        // it is necessary for mozilla
        // data type should be 'Text' instead of 'text/plain' to keep compatibility
        // with IE
        event.dataTransfer.setData('Text', 'placeholder');
    };
    SortableComponent.globalZoneIndex = 0;
    SortableComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-sortable',
                    exportAs: 'bs-sortable',
                    template: "\n<div\n    [ngClass]=\"wrapperClass\"\n    [ngStyle]=\"wrapperStyle\"\n    [ngStyle]=\"wrapperStyle\"\n    (dragover)=\"cancelEvent($event)\"\n    (dragenter)=\"cancelEvent($event)\"\n    (drop)=\"resetActiveItem($event)\"\n    (mouseleave)=\"resetActiveItem($event)\">\n  <div\n        *ngIf=\"showPlaceholder\"\n        [ngClass]=\"placeholderClass\"\n        [ngStyle]=\"placeholderStyle\"\n        (dragover)=\"onItemDragover($event, 0)\"\n        (dragenter)=\"cancelEvent($event)\"\n    >{{placeholderItem}}</div>\n    <div\n        *ngFor=\"let item of items; let i=index;\"\n        [ngClass]=\"[ itemClass, i === activeItem ? itemActiveClass : '' ]\"\n        [ngStyle]=\"getItemStyle(i === activeItem)\"\n        draggable=\"true\"\n        (dragstart)=\"onItemDragstart($event, item, i)\"\n        (dragend)=\"resetActiveItem($event)\"\n        (dragover)=\"onItemDragover($event, i)\"\n        (dragenter)=\"cancelEvent($event)\"\n    ><template [ngTemplateOutlet]=\"itemTemplate || defItemTemplate\"\n  [ngOutletContext]=\"{item:item, index: i}\"></template></div>\n</div>\n\n<template #defItemTemplate let-item=\"item\">{{item.value}}</template>  \n",
                    providers: [{
                            provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
                            useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])((function () { return SortableComponent; })),
                            multi: true
                        }],
                },] },
    ];
    /** @nocollapse */
    SortableComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__draggable_item_service__["a" /* DraggableItemService */], },
    ]; };
    SortableComponent.propDecorators = {
        'fieldName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'wrapperClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'wrapperStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'itemClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'itemStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'itemActiveClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'itemActiveStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'placeholderClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'placeholderStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'placeholderItem': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'itemTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return SortableComponent;
}());
//# sourceMappingURL=sortable.component.js.map

/***/ }),

/***/ 1452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return NgTranscludeDirective; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var NgTranscludeDirective = (function () {
    function NgTranscludeDirective(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
        get: function () {
            return this._ngTransclude;
        },
        set: function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgTranscludeDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[ngTransclude]'
                },] },
    ];
    /** @nocollapse */
    NgTranscludeDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    ]; };
    NgTranscludeDirective.propDecorators = {
        'ngTransclude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return NgTranscludeDirective;
}());
//# sourceMappingURL=ng-transclude.directive.js.map

/***/ }),

/***/ 1453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TabHeadingDirective; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_directive__ = __webpack_require__(1402);


/** Should be used to mark <template> element as a template for tab heading */
var TabHeadingDirective = (function () {
    function TabHeadingDirective(templateRef, tab) {
        tab.headingRef = templateRef;
    }
    TabHeadingDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[tabHeading]' },] },
    ];
    /** @nocollapse */
    TabHeadingDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__tab_directive__["a" /* TabDirective */], },
    ]; };
    return TabHeadingDirective;
}());
//# sourceMappingURL=tab-heading.directive.js.map

/***/ }),

/***/ 1454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TabsModule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_transclude_directive__ = __webpack_require__(1452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_heading_directive__ = __webpack_require__(1453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tab_directive__ = __webpack_require__(1402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabset_component__ = __webpack_require__(1403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabset_config__ = __webpack_require__(1404);







var TabsModule = (function () {
    function TabsModule() {
    }
    TabsModule.forRoot = function () {
        return {
            ngModule: TabsModule,
            providers: [__WEBPACK_IMPORTED_MODULE_6__tabset_config__["a" /* TabsetConfig */]]
        };
    };
    TabsModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__ng_transclude_directive__["a" /* NgTranscludeDirective */], __WEBPACK_IMPORTED_MODULE_4__tab_directive__["a" /* TabDirective */], __WEBPACK_IMPORTED_MODULE_5__tabset_component__["a" /* TabsetComponent */], __WEBPACK_IMPORTED_MODULE_3__tab_heading_directive__["a" /* TabHeadingDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_4__tab_directive__["a" /* TabDirective */], __WEBPACK_IMPORTED_MODULE_5__tabset_component__["a" /* TabsetComponent */], __WEBPACK_IMPORTED_MODULE_3__tab_heading_directive__["a" /* TabHeadingDirective */], __WEBPACK_IMPORTED_MODULE_2__ng_transclude_directive__["a" /* NgTranscludeDirective */]]
                },] },
    ];
    /** @nocollapse */
    TabsModule.ctorParameters = function () { return []; };
    return TabsModule;
}());
//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 1455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TIMEPICKER_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TimepickerComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timepicker_config__ = __webpack_require__(1405);



var TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])((function () { return TimepickerComponent; })),
    multi: true
};
// todo: refactor directive has to many functions! (extract to stateless helper)
// todo: use moment js?
// todo: implement `time` validator
// todo: replace increment/decrement blockers with getters, or extract
// todo: unify work with selected
function isDefined(value) {
    return typeof value !== 'undefined';
}
function addMinutes(date, minutes) {
    var dt = new Date(date.getTime() + minutes * 60000);
    var newDate = new Date(date);
    newDate.setHours(dt.getHours(), dt.getMinutes());
    return newDate;
}
var TimepickerComponent = (function () {
    function TimepickerComponent(_config) {
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        // result value
        this._selected = new Date();
        this.config = _config;
        Object.assign(this, _config);
    }
    Object.defineProperty(TimepickerComponent.prototype, "showMeridian", {
        /** if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM */
        get: function () {
            return this._showMeridian;
        },
        set: function (value) {
            this._showMeridian = value;
            // || !this.$error.time
            // if (true) {
            this.updateTemplate();
            return;
            // }
            // Evaluate from template
            /*let hours = this.getHoursFromTemplate();
             let minutes = this.getMinutesFromTemplate();
             if (isDefined(hours) && isDefined(minutes)) {
             this.selected.setHours(hours);
             this.refresh();
             }*/
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimepickerComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (v) {
            if (v) {
                this._selected = v;
                this.updateTemplate();
                this.onChange(this.selected);
            }
        },
        enumerable: true,
        configurable: true
    });
    // todo: add formatter value to Date object
    TimepickerComponent.prototype.ngOnInit = function () {
        // todo: take in account $locale.DATETIME_FORMATS.AMPMS;
        if (this.mousewheel) {
        }
        if (this.arrowkeys) {
        }
        // this.setupInputEvents();
    };
    TimepickerComponent.prototype.writeValue = function (v) {
        if (v === this.selected) {
            return;
        }
        if (v && v instanceof Date) {
            this.selected = v;
            return;
        }
        this.selected = v ? new Date(v) : void 0;
    };
    TimepickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TimepickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    TimepickerComponent.prototype.setDisabledState = function (isDisabled) {
        this.readonlyInput = isDisabled;
    };
    TimepickerComponent.prototype.updateHours = function () {
        if (this.readonlyInput) {
            return;
        }
        var hours = this.getHoursFromTemplate();
        var minutes = this.getMinutesFromTemplate();
        this.invalidHours = !isDefined(hours);
        this.invalidMinutes = !isDefined(minutes);
        if (this.invalidHours || this.invalidMinutes) {
            // TODO: needed a validation functionality.
            return;
        }
        this.selected.setHours(hours);
        this.invalidHours = (this.selected < this.min || this.selected > this.max);
        if (this.invalidHours) {
            // todo: validation?
            // invalidate(true);
            return;
        }
        else {
            this.refresh();
        }
    };
    TimepickerComponent.prototype.hoursOnBlur = function () {
        if (this.readonlyInput) {
            return;
        }
        // todo: binded with validation
        if (!this.invalidHours && parseInt(this.hours, 10) < 10) {
            this.hours = this.pad(this.hours);
        }
    };
    TimepickerComponent.prototype.updateMinutes = function () {
        if (this.readonlyInput) {
            return;
        }
        var minutes = this.getMinutesFromTemplate();
        var hours = this.getHoursFromTemplate();
        this.invalidMinutes = !isDefined(minutes);
        this.invalidHours = !isDefined(hours);
        if (this.invalidMinutes || this.invalidHours) {
            // TODO: needed a validation functionality.
            return;
        }
        this.selected.setMinutes(minutes);
        this.invalidMinutes = (this.selected < this.min || this.selected > this.max);
        if (this.invalidMinutes) {
            // todo: validation
            // invalidate(undefined, true);
            return;
        }
        else {
            this.refresh();
        }
    };
    TimepickerComponent.prototype.minutesOnBlur = function () {
        if (this.readonlyInput) {
            return;
        }
        if (!this.invalidMinutes && parseInt(this.minutes, 10) < 10) {
            this.minutes = this.pad(this.minutes);
        }
    };
    TimepickerComponent.prototype.incrementHours = function () {
        if (!this.noIncrementHours()) {
            this.addMinutesToSelected(this.hourStep * 60);
        }
    };
    TimepickerComponent.prototype.decrementHours = function () {
        if (!this.noDecrementHours()) {
            this.addMinutesToSelected(-this.hourStep * 60);
        }
    };
    TimepickerComponent.prototype.incrementMinutes = function () {
        if (!this.noIncrementMinutes()) {
            this.addMinutesToSelected(this.minuteStep);
        }
    };
    TimepickerComponent.prototype.decrementMinutes = function () {
        if (!this.noDecrementMinutes()) {
            this.addMinutesToSelected(-this.minuteStep);
        }
    };
    TimepickerComponent.prototype.noIncrementHours = function () {
        var incrementedSelected = addMinutes(this.selected, this.hourStep * 60);
        return incrementedSelected > this.max ||
            (incrementedSelected < this.selected && incrementedSelected < this.min);
    };
    TimepickerComponent.prototype.noDecrementHours = function () {
        var decrementedSelected = addMinutes(this.selected, -this.hourStep * 60);
        return decrementedSelected < this.min ||
            (decrementedSelected > this.selected && decrementedSelected > this.max);
    };
    TimepickerComponent.prototype.noIncrementMinutes = function () {
        var incrementedSelected = addMinutes(this.selected, this.minuteStep);
        return incrementedSelected > this.max ||
            (incrementedSelected < this.selected && incrementedSelected < this.min);
    };
    TimepickerComponent.prototype.noDecrementMinutes = function () {
        var decrementedSelected = addMinutes(this.selected, -this.minuteStep);
        return decrementedSelected < this.min ||
            (decrementedSelected > this.selected && decrementedSelected > this.max);
    };
    TimepickerComponent.prototype.toggleMeridian = function () {
        if (!this.noToggleMeridian()) {
            var sign = this.selected.getHours() < 12 ? 1 : -1;
            this.addMinutesToSelected(12 * 60 * sign);
        }
    };
    TimepickerComponent.prototype.noToggleMeridian = function () {
        if (this.readonlyInput) {
            return true;
        }
        if (this.selected.getHours() < 13) {
            return addMinutes(this.selected, 12 * 60) > this.max;
        }
        else {
            return addMinutes(this.selected, -12 * 60) < this.min;
        }
    };
    TimepickerComponent.prototype.refresh = function () {
        // this.makeValid();
        this.updateTemplate();
        this.onChange(this.selected);
    };
    TimepickerComponent.prototype.updateTemplate = function () {
        var hours = this.selected.getHours();
        var minutes = this.selected.getMinutes();
        if (this.showMeridian) {
            // Convert 24 to 12 hour system
            hours = (hours === 0 || hours === 12) ? 12 : hours % 12;
        }
        // this.hours = keyboardChange === 'h' ? hours : this.pad(hours);
        // if (keyboardChange !== 'm') {
        //  this.minutes = this.pad(minutes);
        // }
        this.hours = this.pad(hours);
        this.minutes = this.pad(minutes);
        if (!this.meridians) {
            this.meridians = this.config.meridians;
        }
        this.meridian = this.selected.getHours() < 12
            ? this.meridians[0]
            : this.meridians[1];
    };
    TimepickerComponent.prototype.getHoursFromTemplate = function () {
        var hours = parseInt(this.hours, 10);
        var valid = this.showMeridian
            ? (hours > 0 && hours < 13)
            : (hours >= 0 && hours < 24);
        if (!valid) {
            return void 0;
        }
        if (this.showMeridian) {
            if (hours === 12) {
                hours = 0;
            }
            if (this.meridian === this.meridians[1]) {
                hours = hours + 12;
            }
        }
        return hours;
    };
    TimepickerComponent.prototype.getMinutesFromTemplate = function () {
        var minutes = parseInt(this.minutes, 10);
        return (minutes >= 0 && minutes < 60) ? minutes : undefined;
    };
    TimepickerComponent.prototype.pad = function (value) {
        return (isDefined(value) && value.toString().length < 2)
            ? '0' + value
            : value.toString();
    };
    TimepickerComponent.prototype.addMinutesToSelected = function (minutes) {
        this.selected = addMinutes(this.selected, minutes);
        this.refresh();
    };
    TimepickerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'timepicker',
                    template: "\n    <table>\n      <tbody>\n        <tr class=\"text-center\" [ngClass]=\"{hidden: !showSpinners || readonlyInput}\">\n          <td><a (click)=\"incrementHours()\" [ngClass]=\"{disabled: noIncrementHours()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n          <td>&nbsp;</td>\n          <td><a (click)=\"incrementMinutes()\" [ngClass]=\"{disabled: noIncrementMinutes()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n          <td [ngClass]=\"{hidden: !showMeridian}\" *ngIf=\"showMeridian\"></td>\n        </tr>\n        <tr>\n          <td class=\"form-group\" [ngClass]=\"{'has-error': invalidHours}\">\n            <input style=\"width:50px;\" type=\"text\" [(ngModel)]=\"hours\" (change)=\"updateHours()\" class=\"form-control text-center\" [readonly]=\"readonlyInput\" (blur)=\"hoursOnBlur()\" maxlength=\"2\">\n          </td>\n          <td>:</td>\n          <td class=\"form-group\" [ngClass]=\"{'has-error': invalidMinutes}\">\n            <input style=\"width:50px;\" type=\"text\" [(ngModel)]=\"minutes\" (change)=\"updateMinutes()\" class=\"form-control text-center\" [readonly]=\"readonlyInput\" (blur)=\"minutesOnBlur()\" maxlength=\"2\">\n          </td>\n          <td [ngClass]=\"{hidden: !showMeridian}\" *ngIf=\"showMeridian\"><button type=\"button\" [ngClass]=\"{disabled: noToggleMeridian() || readonlyInput}\" class=\"btn btn-default text-center\" (click)=\"toggleMeridian()\">{{meridian}}</button></td>\n        </tr>\n        <tr class=\"text-center\" [ngClass]=\"{hidden: !showSpinners || readonlyInput}\">\n          <td><a (click)=\"decrementHours()\" [ngClass]=\"{disabled: noDecrementHours()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n          <td>&nbsp;</td>\n          <td><a (click)=\"decrementMinutes()\" [ngClass]=\"{disabled: noDecrementMinutes()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n          <td [ngClass]=\"{hidden: !showMeridian}\" *ngIf=\"showMeridian\"></td>\n        </tr>\n      </tbody>\n    </table>\n  ",
                    providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    TimepickerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__timepicker_config__["a" /* TimepickerConfig */], },
    ]; };
    TimepickerComponent.propDecorators = {
        'hourStep': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'minuteStep': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'readonlyInput': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'mousewheel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'arrowkeys': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'showSpinners': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'min': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'meridians': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'showMeridian': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return TimepickerComponent;
}());
//# sourceMappingURL=timepicker.component.js.map

/***/ }),

/***/ 1456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TimepickerModule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timepicker_component__ = __webpack_require__(1455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timepicker_config__ = __webpack_require__(1405);





var TimepickerModule = (function () {
    function TimepickerModule() {
    }
    TimepickerModule.forRoot = function () {
        return {
            ngModule: TimepickerModule,
            providers: [__WEBPACK_IMPORTED_MODULE_4__timepicker_config__["a" /* TimepickerConfig */]]
        };
    };
    TimepickerModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_3__timepicker_component__["a" /* TimepickerComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_3__timepicker_component__["a" /* TimepickerComponent */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]]
                },] },
    ];
    /** @nocollapse */
    TimepickerModule.ctorParameters = function () { return []; };
    return TimepickerModule;
}());
//# sourceMappingURL=timepicker.module.js.map

/***/ }),

/***/ 1457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TooltipDirective; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_container_component__ = __webpack_require__(1406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_config__ = __webpack_require__(1386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_loader__ = __webpack_require__(1380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_decorators__ = __webpack_require__(1409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TooltipDirective = (function () {
    // tslint:disable-next-line
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config) {
        /** Fired when tooltip content changes */
        this.tooltipChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** @deprecated - removed, will be added to configuration */
        this._animation = true;
        /** @deprecated */
        this._delay = 0;
        /** @deprecated */
        this._fadeDuration = 150;
        /** @deprecated */
        this.tooltipStateChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._tooltip = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_2__tooltip_config__["a" /* TooltipConfig */], useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the tooltip is currently being shown
         */
        get: function () { return this._tooltip.isShown; },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "htmlContent", {
        /* tslint:disable */
        /** @deprecated - please use `tooltip` instead */
        set: function (value) {
            console.warn('tooltipHtml was deprecated, please use `tooltip` instead');
            this.tooltip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_placement", {
        /** @deprecated - please use `placement` instead */
        set: function (value) {
            console.warn('tooltipPlacement was deprecated, please use `placement` instead');
            this.placement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_isOpen", {
        get: function () {
            console.warn('tooltipIsOpen was deprecated, please use `isOpen` instead');
            return this.isOpen;
        },
        /** @deprecated - please use `isOpen` instead*/
        set: function (value) {
            console.warn('tooltipIsOpen was deprecated, please use `isOpen` instead');
            this.isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_enable", {
        get: function () {
            console.warn('tooltipEnable was deprecated, please use `isDisabled` instead');
            return this.isDisabled === true;
        },
        /** @deprecated - please use `isDisabled` instead */
        set: function (value) {
            console.warn('tooltipEnable was deprecated, please use `isDisabled` instead');
            this.isDisabled = value === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_appendToBody", {
        get: function () {
            console.warn('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            return this.container === 'body';
        },
        /** @deprecated - please use `container="body"` instead */
        set: function (value) {
            console.warn('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            this.container = value ? 'body' : this.container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_popupClass", {
        /** @deprecated - will replaced with customClass */
        set: function (value) {
            console.warn('tooltipClass deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipContext", {
        /** @deprecated - removed */
        set: function (value) {
            console.warn('tooltipContext deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipTrigger", {
        /** @deprecated -  please use `triggers` instead */
        get: function () {
            console.warn('tooltipTrigger was deprecated, please use `triggers` instead');
            return this.triggers;
        },
        set: function (value) {
            console.warn('tooltipTrigger was deprecated, please use `triggers` instead');
            this.triggers = (value || '').toString();
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    TooltipDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.tooltipChange.subscribe((function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        }));
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.tooltip) {
            return;
        }
        var showTooltip = function () { return _this._tooltip
            .attach(__WEBPACK_IMPORTED_MODULE_1__tooltip_container_component__["a" /* TooltipContainerComponent */])
            .to(_this.container)
            .position({ attachment: _this.placement })
            .show({
            content: _this.tooltip,
            placement: _this.placement
        }); };
        if (this._delay) {
            this._delayTimeoutId = setTimeout((function () { showTooltip(); }), this._delay);
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.hide = function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout((function () {
            _this._tooltip.hide();
        }), this._fadeDuration);
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        this._tooltip.dispose();
    };
    TooltipDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[tooltip], [tooltipHtml]',
                    exportAs: 'bs-tooltip'
                },] },
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_3__component_loader__["a" /* ComponentLoaderFactory */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__tooltip_config__["a" /* TooltipConfig */], },
    ]; };
    TooltipDirective.propDecorators = {
        'tooltip': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'htmlContent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipHtml',] },],
        '_placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipPlacement',] },],
        '_isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipIsOpen',] },],
        '_enable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipEnable',] },],
        '_appendToBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipAppendToBody',] },],
        '_animation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipAnimation',] },],
        '_popupClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipClass',] },],
        '_tooltipContext': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipContext',] },],
        '_delay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipPopupDelay',] },],
        '_fadeDuration': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipFadeDuration',] },],
        '_tooltipTrigger': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipTrigger',] },],
        'tooltipStateChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_decorators__["a" /* OnChange */])(), 
        __metadata('design:type', Object)
    ], TooltipDirective.prototype, "tooltip", void 0);
    return TooltipDirective;
}());
//# sourceMappingURL=tooltip.directive.js.map

/***/ }),

/***/ 1458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TooltipModule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_container_component__ = __webpack_require__(1406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_directive__ = __webpack_require__(1457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tooltip_config__ = __webpack_require__(1386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_loader__ = __webpack_require__(1380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__positioning__ = __webpack_require__(1381);







var TooltipModule = (function () {
    function TooltipModule() {
    }
    TooltipModule.forRoot = function () {
        return {
            ngModule: TooltipModule,
            providers: [__WEBPACK_IMPORTED_MODULE_4__tooltip_config__["a" /* TooltipConfig */], __WEBPACK_IMPORTED_MODULE_5__component_loader__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_6__positioning__["a" /* PositioningService */]]
        };
    };
    ;
    TooltipModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_3__tooltip_directive__["a" /* TooltipDirective */], __WEBPACK_IMPORTED_MODULE_2__tooltip_container_component__["a" /* TooltipContainerComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_3__tooltip_directive__["a" /* TooltipDirective */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_2__tooltip_container_component__["a" /* TooltipContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    TooltipModule.ctorParameters = function () { return []; };
    return TooltipModule;
}());
//# sourceMappingURL=tooltip.module.js.map

/***/ }),

/***/ 1459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return latinMap; }));
/* tslint:disable:max-file-line-count */
var latinMap = {
    'Á': 'A',
    'Ă': 'A',
    'Ắ': 'A',
    'Ặ': 'A',
    'Ằ': 'A',
    'Ẳ': 'A',
    'Ẵ': 'A',
    'Ǎ': 'A',
    'Â': 'A',
    'Ấ': 'A',
    'Ậ': 'A',
    'Ầ': 'A',
    'Ẩ': 'A',
    'Ẫ': 'A',
    'Ä': 'A',
    'Ǟ': 'A',
    'Ȧ': 'A',
    'Ǡ': 'A',
    'Ạ': 'A',
    'Ȁ': 'A',
    'À': 'A',
    'Ả': 'A',
    'Ȃ': 'A',
    'Ā': 'A',
    'Ą': 'A',
    'Å': 'A',
    'Ǻ': 'A',
    'Ḁ': 'A',
    'Ⱥ': 'A',
    'Ã': 'A',
    'Ꜳ': 'AA',
    'Æ': 'AE',
    'Ǽ': 'AE',
    'Ǣ': 'AE',
    'Ꜵ': 'AO',
    'Ꜷ': 'AU',
    'Ꜹ': 'AV',
    'Ꜻ': 'AV',
    'Ꜽ': 'AY',
    'Ḃ': 'B',
    'Ḅ': 'B',
    'Ɓ': 'B',
    'Ḇ': 'B',
    'Ƀ': 'B',
    'Ƃ': 'B',
    'Ć': 'C',
    'Č': 'C',
    'Ç': 'C',
    'Ḉ': 'C',
    'Ĉ': 'C',
    'Ċ': 'C',
    'Ƈ': 'C',
    'Ȼ': 'C',
    'Ď': 'D',
    'Ḑ': 'D',
    'Ḓ': 'D',
    'Ḋ': 'D',
    'Ḍ': 'D',
    'Ɗ': 'D',
    'Ḏ': 'D',
    'ǲ': 'D',
    'ǅ': 'D',
    'Đ': 'D',
    'Ƌ': 'D',
    'Ǳ': 'DZ',
    'Ǆ': 'DZ',
    'É': 'E',
    'Ĕ': 'E',
    'Ě': 'E',
    'Ȩ': 'E',
    'Ḝ': 'E',
    'Ê': 'E',
    'Ế': 'E',
    'Ệ': 'E',
    'Ề': 'E',
    'Ể': 'E',
    'Ễ': 'E',
    'Ḙ': 'E',
    'Ë': 'E',
    'Ė': 'E',
    'Ẹ': 'E',
    'Ȅ': 'E',
    'È': 'E',
    'Ẻ': 'E',
    'Ȇ': 'E',
    'Ē': 'E',
    'Ḗ': 'E',
    'Ḕ': 'E',
    'Ę': 'E',
    'Ɇ': 'E',
    'Ẽ': 'E',
    'Ḛ': 'E',
    'Ꝫ': 'ET',
    'Ḟ': 'F',
    'Ƒ': 'F',
    'Ǵ': 'G',
    'Ğ': 'G',
    'Ǧ': 'G',
    'Ģ': 'G',
    'Ĝ': 'G',
    'Ġ': 'G',
    'Ɠ': 'G',
    'Ḡ': 'G',
    'Ǥ': 'G',
    'Ḫ': 'H',
    'Ȟ': 'H',
    'Ḩ': 'H',
    'Ĥ': 'H',
    'Ⱨ': 'H',
    'Ḧ': 'H',
    'Ḣ': 'H',
    'Ḥ': 'H',
    'Ħ': 'H',
    'Í': 'I',
    'Ĭ': 'I',
    'Ǐ': 'I',
    'Î': 'I',
    'Ï': 'I',
    'Ḯ': 'I',
    'İ': 'I',
    'Ị': 'I',
    'Ȉ': 'I',
    'Ì': 'I',
    'Ỉ': 'I',
    'Ȋ': 'I',
    'Ī': 'I',
    'Į': 'I',
    'Ɨ': 'I',
    'Ĩ': 'I',
    'Ḭ': 'I',
    'Ꝺ': 'D',
    'Ꝼ': 'F',
    'Ᵹ': 'G',
    'Ꞃ': 'R',
    'Ꞅ': 'S',
    'Ꞇ': 'T',
    'Ꝭ': 'IS',
    'Ĵ': 'J',
    'Ɉ': 'J',
    'Ḱ': 'K',
    'Ǩ': 'K',
    'Ķ': 'K',
    'Ⱪ': 'K',
    'Ꝃ': 'K',
    'Ḳ': 'K',
    'Ƙ': 'K',
    'Ḵ': 'K',
    'Ꝁ': 'K',
    'Ꝅ': 'K',
    'Ĺ': 'L',
    'Ƚ': 'L',
    'Ľ': 'L',
    'Ļ': 'L',
    'Ḽ': 'L',
    'Ḷ': 'L',
    'Ḹ': 'L',
    'Ⱡ': 'L',
    'Ꝉ': 'L',
    'Ḻ': 'L',
    'Ŀ': 'L',
    'Ɫ': 'L',
    'ǈ': 'L',
    'Ł': 'L',
    'Ǉ': 'LJ',
    'Ḿ': 'M',
    'Ṁ': 'M',
    'Ṃ': 'M',
    'Ɱ': 'M',
    'Ń': 'N',
    'Ň': 'N',
    'Ņ': 'N',
    'Ṋ': 'N',
    'Ṅ': 'N',
    'Ṇ': 'N',
    'Ǹ': 'N',
    'Ɲ': 'N',
    'Ṉ': 'N',
    'Ƞ': 'N',
    'ǋ': 'N',
    'Ñ': 'N',
    'Ǌ': 'NJ',
    'Ó': 'O',
    'Ŏ': 'O',
    'Ǒ': 'O',
    'Ô': 'O',
    'Ố': 'O',
    'Ộ': 'O',
    'Ồ': 'O',
    'Ổ': 'O',
    'Ỗ': 'O',
    'Ö': 'O',
    'Ȫ': 'O',
    'Ȯ': 'O',
    'Ȱ': 'O',
    'Ọ': 'O',
    'Ő': 'O',
    'Ȍ': 'O',
    'Ò': 'O',
    'Ỏ': 'O',
    'Ơ': 'O',
    'Ớ': 'O',
    'Ợ': 'O',
    'Ờ': 'O',
    'Ở': 'O',
    'Ỡ': 'O',
    'Ȏ': 'O',
    'Ꝋ': 'O',
    'Ꝍ': 'O',
    'Ō': 'O',
    'Ṓ': 'O',
    'Ṑ': 'O',
    'Ɵ': 'O',
    'Ǫ': 'O',
    'Ǭ': 'O',
    'Ø': 'O',
    'Ǿ': 'O',
    'Õ': 'O',
    'Ṍ': 'O',
    'Ṏ': 'O',
    'Ȭ': 'O',
    'Ƣ': 'OI',
    'Ꝏ': 'OO',
    'Ɛ': 'E',
    'Ɔ': 'O',
    'Ȣ': 'OU',
    'Ṕ': 'P',
    'Ṗ': 'P',
    'Ꝓ': 'P',
    'Ƥ': 'P',
    'Ꝕ': 'P',
    'Ᵽ': 'P',
    'Ꝑ': 'P',
    'Ꝙ': 'Q',
    'Ꝗ': 'Q',
    'Ŕ': 'R',
    'Ř': 'R',
    'Ŗ': 'R',
    'Ṙ': 'R',
    'Ṛ': 'R',
    'Ṝ': 'R',
    'Ȑ': 'R',
    'Ȓ': 'R',
    'Ṟ': 'R',
    'Ɍ': 'R',
    'Ɽ': 'R',
    'Ꜿ': 'C',
    'Ǝ': 'E',
    'Ś': 'S',
    'Ṥ': 'S',
    'Š': 'S',
    'Ṧ': 'S',
    'Ş': 'S',
    'Ŝ': 'S',
    'Ș': 'S',
    'Ṡ': 'S',
    'Ṣ': 'S',
    'Ṩ': 'S',
    'Ť': 'T',
    'Ţ': 'T',
    'Ṱ': 'T',
    'Ț': 'T',
    'Ⱦ': 'T',
    'Ṫ': 'T',
    'Ṭ': 'T',
    'Ƭ': 'T',
    'Ṯ': 'T',
    'Ʈ': 'T',
    'Ŧ': 'T',
    'Ɐ': 'A',
    'Ꞁ': 'L',
    'Ɯ': 'M',
    'Ʌ': 'V',
    'Ꜩ': 'TZ',
    'Ú': 'U',
    'Ŭ': 'U',
    'Ǔ': 'U',
    'Û': 'U',
    'Ṷ': 'U',
    'Ü': 'U',
    'Ǘ': 'U',
    'Ǚ': 'U',
    'Ǜ': 'U',
    'Ǖ': 'U',
    'Ṳ': 'U',
    'Ụ': 'U',
    'Ű': 'U',
    'Ȕ': 'U',
    'Ù': 'U',
    'Ủ': 'U',
    'Ư': 'U',
    'Ứ': 'U',
    'Ự': 'U',
    'Ừ': 'U',
    'Ử': 'U',
    'Ữ': 'U',
    'Ȗ': 'U',
    'Ū': 'U',
    'Ṻ': 'U',
    'Ų': 'U',
    'Ů': 'U',
    'Ũ': 'U',
    'Ṹ': 'U',
    'Ṵ': 'U',
    'Ꝟ': 'V',
    'Ṿ': 'V',
    'Ʋ': 'V',
    'Ṽ': 'V',
    'Ꝡ': 'VY',
    'Ẃ': 'W',
    'Ŵ': 'W',
    'Ẅ': 'W',
    'Ẇ': 'W',
    'Ẉ': 'W',
    'Ẁ': 'W',
    'Ⱳ': 'W',
    'Ẍ': 'X',
    'Ẋ': 'X',
    'Ý': 'Y',
    'Ŷ': 'Y',
    'Ÿ': 'Y',
    'Ẏ': 'Y',
    'Ỵ': 'Y',
    'Ỳ': 'Y',
    'Ƴ': 'Y',
    'Ỷ': 'Y',
    'Ỿ': 'Y',
    'Ȳ': 'Y',
    'Ɏ': 'Y',
    'Ỹ': 'Y',
    'Ź': 'Z',
    'Ž': 'Z',
    'Ẑ': 'Z',
    'Ⱬ': 'Z',
    'Ż': 'Z',
    'Ẓ': 'Z',
    'Ȥ': 'Z',
    'Ẕ': 'Z',
    'Ƶ': 'Z',
    'Ĳ': 'IJ',
    'Œ': 'OE',
    'ᴀ': 'A',
    'ᴁ': 'AE',
    'ʙ': 'B',
    'ᴃ': 'B',
    'ᴄ': 'C',
    'ᴅ': 'D',
    'ᴇ': 'E',
    'ꜰ': 'F',
    'ɢ': 'G',
    'ʛ': 'G',
    'ʜ': 'H',
    'ɪ': 'I',
    'ʁ': 'R',
    'ᴊ': 'J',
    'ᴋ': 'K',
    'ʟ': 'L',
    'ᴌ': 'L',
    'ᴍ': 'M',
    'ɴ': 'N',
    'ᴏ': 'O',
    'ɶ': 'OE',
    'ᴐ': 'O',
    'ᴕ': 'OU',
    'ᴘ': 'P',
    'ʀ': 'R',
    'ᴎ': 'N',
    'ᴙ': 'R',
    'ꜱ': 'S',
    'ᴛ': 'T',
    'ⱻ': 'E',
    'ᴚ': 'R',
    'ᴜ': 'U',
    'ᴠ': 'V',
    'ᴡ': 'W',
    'ʏ': 'Y',
    'ᴢ': 'Z',
    'á': 'a',
    'ă': 'a',
    'ắ': 'a',
    'ặ': 'a',
    'ằ': 'a',
    'ẳ': 'a',
    'ẵ': 'a',
    'ǎ': 'a',
    'â': 'a',
    'ấ': 'a',
    'ậ': 'a',
    'ầ': 'a',
    'ẩ': 'a',
    'ẫ': 'a',
    'ä': 'a',
    'ǟ': 'a',
    'ȧ': 'a',
    'ǡ': 'a',
    'ạ': 'a',
    'ȁ': 'a',
    'à': 'a',
    'ả': 'a',
    'ȃ': 'a',
    'ā': 'a',
    'ą': 'a',
    'ᶏ': 'a',
    'ẚ': 'a',
    'å': 'a',
    'ǻ': 'a',
    'ḁ': 'a',
    'ⱥ': 'a',
    'ã': 'a',
    'ꜳ': 'aa',
    'æ': 'ae',
    'ǽ': 'ae',
    'ǣ': 'ae',
    'ꜵ': 'ao',
    'ꜷ': 'au',
    'ꜹ': 'av',
    'ꜻ': 'av',
    'ꜽ': 'ay',
    'ḃ': 'b',
    'ḅ': 'b',
    'ɓ': 'b',
    'ḇ': 'b',
    'ᵬ': 'b',
    'ᶀ': 'b',
    'ƀ': 'b',
    'ƃ': 'b',
    'ɵ': 'o',
    'ć': 'c',
    'č': 'c',
    'ç': 'c',
    'ḉ': 'c',
    'ĉ': 'c',
    'ɕ': 'c',
    'ċ': 'c',
    'ƈ': 'c',
    'ȼ': 'c',
    'ď': 'd',
    'ḑ': 'd',
    'ḓ': 'd',
    'ȡ': 'd',
    'ḋ': 'd',
    'ḍ': 'd',
    'ɗ': 'd',
    'ᶑ': 'd',
    'ḏ': 'd',
    'ᵭ': 'd',
    'ᶁ': 'd',
    'đ': 'd',
    'ɖ': 'd',
    'ƌ': 'd',
    'ı': 'i',
    'ȷ': 'j',
    'ɟ': 'j',
    'ʄ': 'j',
    'ǳ': 'dz',
    'ǆ': 'dz',
    'é': 'e',
    'ĕ': 'e',
    'ě': 'e',
    'ȩ': 'e',
    'ḝ': 'e',
    'ê': 'e',
    'ế': 'e',
    'ệ': 'e',
    'ề': 'e',
    'ể': 'e',
    'ễ': 'e',
    'ḙ': 'e',
    'ë': 'e',
    'ė': 'e',
    'ẹ': 'e',
    'ȅ': 'e',
    'è': 'e',
    'ẻ': 'e',
    'ȇ': 'e',
    'ē': 'e',
    'ḗ': 'e',
    'ḕ': 'e',
    'ⱸ': 'e',
    'ę': 'e',
    'ᶒ': 'e',
    'ɇ': 'e',
    'ẽ': 'e',
    'ḛ': 'e',
    'ꝫ': 'et',
    'ḟ': 'f',
    'ƒ': 'f',
    'ᵮ': 'f',
    'ᶂ': 'f',
    'ǵ': 'g',
    'ğ': 'g',
    'ǧ': 'g',
    'ģ': 'g',
    'ĝ': 'g',
    'ġ': 'g',
    'ɠ': 'g',
    'ḡ': 'g',
    'ᶃ': 'g',
    'ǥ': 'g',
    'ḫ': 'h',
    'ȟ': 'h',
    'ḩ': 'h',
    'ĥ': 'h',
    'ⱨ': 'h',
    'ḧ': 'h',
    'ḣ': 'h',
    'ḥ': 'h',
    'ɦ': 'h',
    'ẖ': 'h',
    'ħ': 'h',
    'ƕ': 'hv',
    'í': 'i',
    'ĭ': 'i',
    'ǐ': 'i',
    'î': 'i',
    'ï': 'i',
    'ḯ': 'i',
    'ị': 'i',
    'ȉ': 'i',
    'ì': 'i',
    'ỉ': 'i',
    'ȋ': 'i',
    'ī': 'i',
    'į': 'i',
    'ᶖ': 'i',
    'ɨ': 'i',
    'ĩ': 'i',
    'ḭ': 'i',
    'ꝺ': 'd',
    'ꝼ': 'f',
    'ᵹ': 'g',
    'ꞃ': 'r',
    'ꞅ': 's',
    'ꞇ': 't',
    'ꝭ': 'is',
    'ǰ': 'j',
    'ĵ': 'j',
    'ʝ': 'j',
    'ɉ': 'j',
    'ḱ': 'k',
    'ǩ': 'k',
    'ķ': 'k',
    'ⱪ': 'k',
    'ꝃ': 'k',
    'ḳ': 'k',
    'ƙ': 'k',
    'ḵ': 'k',
    'ᶄ': 'k',
    'ꝁ': 'k',
    'ꝅ': 'k',
    'ĺ': 'l',
    'ƚ': 'l',
    'ɬ': 'l',
    'ľ': 'l',
    'ļ': 'l',
    'ḽ': 'l',
    'ȴ': 'l',
    'ḷ': 'l',
    'ḹ': 'l',
    'ⱡ': 'l',
    'ꝉ': 'l',
    'ḻ': 'l',
    'ŀ': 'l',
    'ɫ': 'l',
    'ᶅ': 'l',
    'ɭ': 'l',
    'ł': 'l',
    'ǉ': 'lj',
    'ſ': 's',
    'ẜ': 's',
    'ẛ': 's',
    'ẝ': 's',
    'ḿ': 'm',
    'ṁ': 'm',
    'ṃ': 'm',
    'ɱ': 'm',
    'ᵯ': 'm',
    'ᶆ': 'm',
    'ń': 'n',
    'ň': 'n',
    'ņ': 'n',
    'ṋ': 'n',
    'ȵ': 'n',
    'ṅ': 'n',
    'ṇ': 'n',
    'ǹ': 'n',
    'ɲ': 'n',
    'ṉ': 'n',
    'ƞ': 'n',
    'ᵰ': 'n',
    'ᶇ': 'n',
    'ɳ': 'n',
    'ñ': 'n',
    'ǌ': 'nj',
    'ó': 'o',
    'ŏ': 'o',
    'ǒ': 'o',
    'ô': 'o',
    'ố': 'o',
    'ộ': 'o',
    'ồ': 'o',
    'ổ': 'o',
    'ỗ': 'o',
    'ö': 'o',
    'ȫ': 'o',
    'ȯ': 'o',
    'ȱ': 'o',
    'ọ': 'o',
    'ő': 'o',
    'ȍ': 'o',
    'ò': 'o',
    'ỏ': 'o',
    'ơ': 'o',
    'ớ': 'o',
    'ợ': 'o',
    'ờ': 'o',
    'ở': 'o',
    'ỡ': 'o',
    'ȏ': 'o',
    'ꝋ': 'o',
    'ꝍ': 'o',
    'ⱺ': 'o',
    'ō': 'o',
    'ṓ': 'o',
    'ṑ': 'o',
    'ǫ': 'o',
    'ǭ': 'o',
    'ø': 'o',
    'ǿ': 'o',
    'õ': 'o',
    'ṍ': 'o',
    'ṏ': 'o',
    'ȭ': 'o',
    'ƣ': 'oi',
    'ꝏ': 'oo',
    'ɛ': 'e',
    'ᶓ': 'e',
    'ɔ': 'o',
    'ᶗ': 'o',
    'ȣ': 'ou',
    'ṕ': 'p',
    'ṗ': 'p',
    'ꝓ': 'p',
    'ƥ': 'p',
    'ᵱ': 'p',
    'ᶈ': 'p',
    'ꝕ': 'p',
    'ᵽ': 'p',
    'ꝑ': 'p',
    'ꝙ': 'q',
    'ʠ': 'q',
    'ɋ': 'q',
    'ꝗ': 'q',
    'ŕ': 'r',
    'ř': 'r',
    'ŗ': 'r',
    'ṙ': 'r',
    'ṛ': 'r',
    'ṝ': 'r',
    'ȑ': 'r',
    'ɾ': 'r',
    'ᵳ': 'r',
    'ȓ': 'r',
    'ṟ': 'r',
    'ɼ': 'r',
    'ᵲ': 'r',
    'ᶉ': 'r',
    'ɍ': 'r',
    'ɽ': 'r',
    'ↄ': 'c',
    'ꜿ': 'c',
    'ɘ': 'e',
    'ɿ': 'r',
    'ś': 's',
    'ṥ': 's',
    'š': 's',
    'ṧ': 's',
    'ş': 's',
    'ŝ': 's',
    'ș': 's',
    'ṡ': 's',
    'ṣ': 's',
    'ṩ': 's',
    'ʂ': 's',
    'ᵴ': 's',
    'ᶊ': 's',
    'ȿ': 's',
    'ɡ': 'g',
    'ᴑ': 'o',
    'ᴓ': 'o',
    'ᴝ': 'u',
    'ť': 't',
    'ţ': 't',
    'ṱ': 't',
    'ț': 't',
    'ȶ': 't',
    'ẗ': 't',
    'ⱦ': 't',
    'ṫ': 't',
    'ṭ': 't',
    'ƭ': 't',
    'ṯ': 't',
    'ᵵ': 't',
    'ƫ': 't',
    'ʈ': 't',
    'ŧ': 't',
    'ᵺ': 'th',
    'ɐ': 'a',
    'ᴂ': 'ae',
    'ǝ': 'e',
    'ᵷ': 'g',
    'ɥ': 'h',
    'ʮ': 'h',
    'ʯ': 'h',
    'ᴉ': 'i',
    'ʞ': 'k',
    'ꞁ': 'l',
    'ɯ': 'm',
    'ɰ': 'm',
    'ᴔ': 'oe',
    'ɹ': 'r',
    'ɻ': 'r',
    'ɺ': 'r',
    'ⱹ': 'r',
    'ʇ': 't',
    'ʌ': 'v',
    'ʍ': 'w',
    'ʎ': 'y',
    'ꜩ': 'tz',
    'ú': 'u',
    'ŭ': 'u',
    'ǔ': 'u',
    'û': 'u',
    'ṷ': 'u',
    'ü': 'u',
    'ǘ': 'u',
    'ǚ': 'u',
    'ǜ': 'u',
    'ǖ': 'u',
    'ṳ': 'u',
    'ụ': 'u',
    'ű': 'u',
    'ȕ': 'u',
    'ù': 'u',
    'ủ': 'u',
    'ư': 'u',
    'ứ': 'u',
    'ự': 'u',
    'ừ': 'u',
    'ử': 'u',
    'ữ': 'u',
    'ȗ': 'u',
    'ū': 'u',
    'ṻ': 'u',
    'ų': 'u',
    'ᶙ': 'u',
    'ů': 'u',
    'ũ': 'u',
    'ṹ': 'u',
    'ṵ': 'u',
    'ᵫ': 'ue',
    'ꝸ': 'um',
    'ⱴ': 'v',
    'ꝟ': 'v',
    'ṿ': 'v',
    'ʋ': 'v',
    'ᶌ': 'v',
    'ⱱ': 'v',
    'ṽ': 'v',
    'ꝡ': 'vy',
    'ẃ': 'w',
    'ŵ': 'w',
    'ẅ': 'w',
    'ẇ': 'w',
    'ẉ': 'w',
    'ẁ': 'w',
    'ⱳ': 'w',
    'ẘ': 'w',
    'ẍ': 'x',
    'ẋ': 'x',
    'ᶍ': 'x',
    'ý': 'y',
    'ŷ': 'y',
    'ÿ': 'y',
    'ẏ': 'y',
    'ỵ': 'y',
    'ỳ': 'y',
    'ƴ': 'y',
    'ỷ': 'y',
    'ỿ': 'y',
    'ȳ': 'y',
    'ẙ': 'y',
    'ɏ': 'y',
    'ỹ': 'y',
    'ź': 'z',
    'ž': 'z',
    'ẑ': 'z',
    'ʑ': 'z',
    'ⱬ': 'z',
    'ż': 'z',
    'ẓ': 'z',
    'ȥ': 'z',
    'ẕ': 'z',
    'ᵶ': 'z',
    'ᶎ': 'z',
    'ʐ': 'z',
    'ƶ': 'z',
    'ɀ': 'z',
    'ﬀ': 'ff',
    'ﬃ': 'ffi',
    'ﬄ': 'ffl',
    'ﬁ': 'fi',
    'ﬂ': 'fl',
    'ĳ': 'ij',
    'œ': 'oe',
    'ﬆ': 'st',
    'ₐ': 'a',
    'ₑ': 'e',
    'ᵢ': 'i',
    'ⱼ': 'j',
    'ₒ': 'o',
    'ᵣ': 'r',
    'ᵤ': 'u',
    'ᵥ': 'v',
    'ₓ': 'x'
};
//# sourceMappingURL=latin-map.js.map

/***/ }),

/***/ 1460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TypeaheadMatch; }));
var TypeaheadMatch = (function () {
    function TypeaheadMatch(item, value, header) {
        if (value === void 0) { value = item; }
        if (header === void 0) { header = false; }
        this.item = item;
        this.value = value;
        this.header = header;
    }
    TypeaheadMatch.prototype.isHeader = function () {
        return this.header;
    };
    TypeaheadMatch.prototype.toString = function () {
        return this.value;
    };
    return TypeaheadMatch;
}());
//# sourceMappingURL=typeahead-match.class.js.map

/***/ }),

/***/ 1461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TypeaheadDirective; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__ = __webpack_require__(1407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__ = __webpack_require__(1408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toArray__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__typeahead_match_class__ = __webpack_require__(1460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_loader__ = __webpack_require__(1380);













/* tslint:disable-next-line */
var KeyboardEvent = global.KeyboardEvent;
var TypeaheadDirective = (function () {
    function TypeaheadDirective(control, viewContainerRef, element, renderer, cis) {
        /** minimal no of characters that needs to be entered before typeahead kicks-in. When set to 0, typeahead shows on focus with full list of options (limited as normal by typeaheadOptionsLimit) */
        this.typeaheadMinLength = void 0;
        /** should be used only in case of typeahead attribute is array. If true - loading of options will be async, otherwise - sync. true make sense if options array is large. */
        this.typeaheadAsync = void 0;
        /** match latin symbols. If true the word súper would match super and vice versa. */
        this.typeaheadLatinize = true;
        /** break words with spaces. If true the text "exact phrase" here match would match with match exact phrase here but not with phrase here exact match (kind of "google style"). */
        this.typeaheadSingleWords = true;
        /** should be used only in case typeaheadSingleWords attribute is true. Sets the word delimiter to break words. Defaults to space. */
        this.typeaheadWordDelimiters = ' ';
        /** should be used only in case typeaheadSingleWords attribute is true. Sets the word delimiter to match exact phrase. Defaults to simple and double quotes. */
        this.typeaheadPhraseDelimiters = '\'"';
        /** fired when 'busy' state of this component was changed, fired on async mode only, returns boolean */
        this.typeaheadLoading = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired on every key event and returns true in case of matches are not detected */
        this.typeaheadNoResults = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired when option was selected, return object with data of this option */
        this.typeaheadOnSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isTypeaheadOptionsListActive = false;
        this.keyUpEventEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.placement = 'bottom-left';
        this.element = element;
        this.ngControl = control;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this._typeahead = cis
            .createLoader(element, viewContainerRef, renderer);
    }
    TypeaheadDirective.prototype.onChange = function (e) {
        if (this._container) {
            // esc
            if (e.keyCode === 27) {
                this.hide();
                return;
            }
            // up
            if (e.keyCode === 38) {
                this._container.prevActiveMatch();
                return;
            }
            // down
            if (e.keyCode === 40) {
                this._container.nextActiveMatch();
                return;
            }
            // enter
            if (e.keyCode === 13) {
                this._container.selectActiveMatch();
                return;
            }
        }
        // For `<input>`s, use the `value` property. For others that don't have a
        // `value` (such as `<span contenteditable="true">`, use `innerText`.
        var value = e.target.value !== undefined
            ? e.target.value
            : e.target.innerText;
        if (value.trim().length >= this.typeaheadMinLength) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(e.target.value);
        }
        else {
            this.typeaheadLoading.emit(false);
            this.typeaheadNoResults.emit(false);
            this.hide();
        }
    };
    TypeaheadDirective.prototype.onFocus = function () {
        if (this.typeaheadMinLength === 0) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit('');
        }
    };
    TypeaheadDirective.prototype.onBlur = function () {
        if (this._container && !this._container.isFocused) {
            this.hide();
        }
    };
    TypeaheadDirective.prototype.onKeydown = function (e) {
        // no container - no problems
        if (!this._container) {
            return;
        }
        // if items is visible - prevent form submition
        if (e.keyCode === 13) {
            e.preventDefault();
            return;
        }
        // if tab default browser behavior will select next input field, and
        // therefore we should close the items list
        if (e.keyCode === 9) {
            this.hide();
            return;
        }
    };
    TypeaheadDirective.prototype.ngOnInit = function () {
        this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
        this.typeaheadMinLength = this.typeaheadMinLength === void 0
            ? 1
            : this.typeaheadMinLength;
        this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
        // async should be false in case of array
        if (this.typeaheadAsync === undefined && !(this.typeahead instanceof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"])) {
            this.typeaheadAsync = false;
        }
        if (this.typeahead instanceof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]) {
            this.typeaheadAsync = true;
        }
        if (this.typeaheadAsync) {
            this.asyncActions();
        }
        else {
            this.syncActions();
        }
    };
    TypeaheadDirective.prototype.changeModel = function (match) {
        var valueStr = match.value;
        this.ngControl.viewToModelUpdate(valueStr);
        this.ngControl.control.setValue(valueStr);
        this.hide();
    };
    Object.defineProperty(TypeaheadDirective.prototype, "matches", {
        get: function () {
            return this._matches;
        },
        enumerable: true,
        configurable: true
    });
    TypeaheadDirective.prototype.show = function () {
        this._typeahead
            .attach(__WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__["a" /* TypeaheadContainerComponent */])
            .to(this.container)
            .position({ attachment: 'bottom left' })
            .show({
            typeaheadRef: this,
            placement: this.placement,
            animation: false
        });
        this._container = this._typeahead.instance;
        this._container.parent = this;
        // This improves the speed as it won't have to be done for each list item
        var normalizedQuery = (this.typeaheadLatinize
            ? __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].latinize(this.ngControl.control.value)
            : this.ngControl.control.value).toString()
            .toLowerCase();
        this._container.query = this.typeaheadSingleWords
            ? __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        this._container.matches = this._matches;
        this.element.nativeElement.focus();
    };
    TypeaheadDirective.prototype.hide = function () {
        if (this._typeahead.isShown) {
            this._typeahead.hide();
            this._container = null;
        }
    };
    TypeaheadDirective.prototype.ngOnDestroy = function () {
        this._typeahead.dispose();
    };
    TypeaheadDirective.prototype.asyncActions = function () {
        var _this = this;
        this.keyUpEventEmitter
            .debounceTime(this.typeaheadWaitMs)
            .mergeMap((function () { return _this.typeahead; }))
            .subscribe((function (matches) {
            _this.finalizeAsyncCall(matches);
        }), (function (err) {
            console.error(err);
        }));
    };
    TypeaheadDirective.prototype.syncActions = function () {
        var _this = this;
        this.keyUpEventEmitter
            .debounceTime(this.typeaheadWaitMs)
            .mergeMap((function (value) {
            var normalizedQuery = _this.normalizeQuery(value);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].from(_this.typeahead)
                .filter((function (option) {
                return option && _this.testMatch(_this.normalizeOption(option), normalizedQuery);
            }))
                .toArray();
        }))
            .subscribe((function (matches) {
            _this.finalizeAsyncCall(matches);
        }), (function (err) {
            console.error(err);
        }));
    };
    TypeaheadDirective.prototype.normalizeOption = function (option) {
        var optionValue = __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].getValueFromObject(option, this.typeaheadOptionField);
        var normalizedOption = this.typeaheadLatinize
            ? __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].latinize(optionValue)
            : optionValue;
        return normalizedOption.toLowerCase();
    };
    TypeaheadDirective.prototype.normalizeQuery = function (value) {
        // If singleWords, break model here to not be doing extra work on each
        // iteration
        var normalizedQuery = (this.typeaheadLatinize ? __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].latinize(value) : value)
            .toString()
            .toLowerCase();
        normalizedQuery = this.typeaheadSingleWords
            ?
                __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            :
                normalizedQuery;
        return normalizedQuery;
    };
    TypeaheadDirective.prototype.testMatch = function (match, test) {
        var spaceLength;
        if (typeof test === 'object') {
            spaceLength = test.length;
            for (var i = 0; i < spaceLength; i += 1) {
                if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                    return false;
                }
            }
            return true;
        }
        else {
            return match.indexOf(test) >= 0;
        }
    };
    TypeaheadDirective.prototype.finalizeAsyncCall = function (matches) {
        this.prepareMatches(matches);
        this.typeaheadLoading.emit(false);
        this.typeaheadNoResults.emit(!this.hasMatches());
        if (!this.hasMatches()) {
            this.hide();
            return;
        }
        if (this._container) {
            // This improves the speed as it won't have to be done for each list item
            var normalizedQuery = (this.typeaheadLatinize
                ? __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].latinize(this.ngControl.control.value)
                : this.ngControl.control.value).toString()
                .toLowerCase();
            this._container.query = this.typeaheadSingleWords
                ? __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                : normalizedQuery;
            this._container.matches = this._matches;
        }
        else {
            this.show();
        }
    };
    TypeaheadDirective.prototype.prepareMatches = function (options) {
        var _this = this;
        var limited = options.slice(0, this.typeaheadOptionsLimit);
        if (this.typeaheadGroupField) {
            var matches_1 = [];
            // extract all group names
            var groups = limited
                .map((function (option) { return __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].getValueFromObject(option, _this.typeaheadGroupField); }))
                .filter((function (v, i, a) { return a.indexOf(v) === i; }));
            groups.forEach((function (group) {
                // add group header to array of matches
                matches_1.push(new __WEBPACK_IMPORTED_MODULE_11__typeahead_match_class__["a" /* TypeaheadMatch */](group, group, true));
                // add each item of group to array of matches
                matches_1 = matches_1.concat(limited
                    .filter((function (option) { return __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].getValueFromObject(option, _this.typeaheadGroupField) === group; }))
                    .map((function (option) { return new __WEBPACK_IMPORTED_MODULE_11__typeahead_match_class__["a" /* TypeaheadMatch */](option, __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].getValueFromObject(option, _this.typeaheadOptionField)); })));
            }));
            this._matches = matches_1;
        }
        else {
            this._matches = limited.map((function (option) { return new __WEBPACK_IMPORTED_MODULE_11__typeahead_match_class__["a" /* TypeaheadMatch */](option, __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* TypeaheadUtils */].getValueFromObject(option, _this.typeaheadOptionField)); }));
        }
    };
    TypeaheadDirective.prototype.hasMatches = function () {
        return this._matches.length > 0;
    };
    TypeaheadDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[typeahead]' },] },
    ];
    /** @nocollapse */
    TypeaheadDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgControl"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_12__component_loader__["a" /* ComponentLoaderFactory */], },
    ]; };
    TypeaheadDirective.propDecorators = {
        'typeahead': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadMinLength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadWaitMs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadOptionsLimit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadOptionField': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadGroupField': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadAsync': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadLatinize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadSingleWords': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadWordDelimiters': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadPhraseDelimiters': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadItemTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'optionsListTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadLoading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'typeaheadNoResults': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'typeaheadOnSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keyup', ['$event'],] },],
        'onFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['focus',] },],
        'onBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['blur',] },],
        'onKeydown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keydown', ['$event'],] },],
    };
    return TypeaheadDirective;
}());
//# sourceMappingURL=typeahead.directive.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(48)))

/***/ }),

/***/ 1462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TypeaheadModule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__ = __webpack_require__(1407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typeahead_directive__ = __webpack_require__(1461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_loader__ = __webpack_require__(1380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__positioning__ = __webpack_require__(1381);






var TypeaheadModule = (function () {
    function TypeaheadModule() {
    }
    TypeaheadModule.forRoot = function () {
        return {
            ngModule: TypeaheadModule,
            providers: [__WEBPACK_IMPORTED_MODULE_4__component_loader__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_5__positioning__["a" /* PositioningService */]]
        };
    };
    ;
    TypeaheadModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__["a" /* TypeaheadContainerComponent */], __WEBPACK_IMPORTED_MODULE_3__typeahead_directive__["a" /* TypeaheadDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__["a" /* TypeaheadContainerComponent */], __WEBPACK_IMPORTED_MODULE_3__typeahead_directive__["a" /* TypeaheadDirective */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__["a" /* TypeaheadContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    TypeaheadModule.ctorParameters = function () { return []; };
    return TypeaheadModule;
}());
//# sourceMappingURL=typeahead.module.js.map

/***/ }),

/***/ 1463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decorators__ = __webpack_require__(1409);
/* unused harmony reexport OnChange */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linked_list_class__ = __webpack_require__(1490);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_1__linked_list_class__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng2_bootstrap_config__ = __webpack_require__(1379);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_2__ng2_bootstrap_config__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trigger_class__ = __webpack_require__(1464);
/* unused harmony reexport Trigger */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_class__ = __webpack_require__(1465);
/* unused harmony reexport Utils */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Trigger; }));
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());
//# sourceMappingURL=trigger.class.js.map

/***/ }),

/***/ 1465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Utils; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__(1387);

var Utils = (function () {
    function Utils() {
    }
    Utils.reflow = function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    Utils.getStyles = function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = __WEBPACK_IMPORTED_MODULE_0__facade_browser__["a" /* window */];
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());
//# sourceMappingURL=utils.class.js.map

/***/ }),

/***/ 1466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ClickOutsideDirective; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return ScrollDirective; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", (function() { return styleDirective; }));
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", (function() { return setPosition; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ClickOutsideDirective.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    };
    ClickOutsideDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[clickOutside]'
                },] },
    ];
    /** @nocollapse */
    ClickOutsideDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    ClickOutsideDirective.propDecorators = {
        'clickOutside': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['document:click', ['$event', '$event.target'],] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['document:touchstart', ['$event', '$event.target'],] },],
    };
    return ClickOutsideDirective;
}());

var ScrollDirective = /** @class */ (function () {
    function ScrollDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.scroll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ScrollDirective.prototype.onClick = function (event, targetElement) {
        this.scroll.emit(event);
    };
    ScrollDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[scroll]'
                },] },
    ];
    /** @nocollapse */
    ScrollDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    ScrollDirective.propDecorators = {
        'scroll': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['scroll', ['$event'],] },],
    };
    return ScrollDirective;
}());

var styleDirective = /** @class */ (function () {
    function styleDirective(el) {
        this.el = el;
    }
    styleDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.style.top = this.styleVal;
    };
    styleDirective.prototype.ngOnChanges = function () {
        this.el.nativeElement.style.top = this.styleVal;
    };
    styleDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[styleProp]'
                },] },
    ];
    /** @nocollapse */
    styleDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    styleDirective.propDecorators = {
        'styleVal': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['styleProp',] },],
    };
    return styleDirective;
}());

var setPosition = /** @class */ (function () {
    function setPosition(el) {
        this.el = el;
    }
    setPosition.prototype.ngOnInit = function () {
        if (this.height) {
            this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
        }
    };
    setPosition.prototype.ngOnChanges = function () {
        if (this.height) {
            this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
        }
    };
    setPosition.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[setPosition]'
                },] },
    ];
    /** @nocollapse */
    setPosition.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    setPosition.propDecorators = {
        'height': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['setPosition',] },],
    };
    return setPosition;
}());

//# sourceMappingURL=clickOutside.js.map

/***/ }),

/***/ 1467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ListFilterPipe; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multiselect_service__ = __webpack_require__(1469);


var ListFilterPipe = /** @class */ (function () {
    function ListFilterPipe(ds) {
        this.ds = ds;
        this.filteredList = [];
    }
    ListFilterPipe.prototype.transform = function (items, filter, searchBy) {
        var _this = this;
        if (!items || !filter) {
            this.ds.setData(items);
            return items;
        }
        this.filteredList = items.filter((function (item) { return _this.applyFilter(item, filter, searchBy); }));
        this.ds.setData(this.filteredList);
        return this.filteredList;
    };
    ListFilterPipe.prototype.applyFilter = function (item, filter, searchBy) {
        var found = false;
        if (searchBy.length > 0) {
            for (var t = 0; t < searchBy.length; t++) {
                if (filter && item[searchBy[t]] && item[searchBy[t]] != "") {
                    if (item[searchBy[t]].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                        found = true;
                    }
                }
            }
        }
        else {
            for (var prop in item) {
                if (filter && item[prop]) {
                    if (item[prop].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                        found = true;
                    }
                }
            }
        }
        return found;
    };
    ListFilterPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                    name: 'listFilter',
                    pure: true
                },] },
    ];
    /** @nocollapse */
    ListFilterPipe.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__multiselect_service__["a" /* DataService */], },
    ]; };
    return ListFilterPipe;
}());

//# sourceMappingURL=list-filter.js.map

/***/ }),

/***/ 1468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DROPDOWN_CONTROL_VALUE_ACCESSOR */
/* unused harmony export DROPDOWN_CONTROL_VALIDATION */
/* unused harmony export AngularMultiSelect */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return AngularMultiSelectModule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__multiselect_model__ = __webpack_require__(1496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clickOutside__ = __webpack_require__(1466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_filter__ = __webpack_require__(1467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_item__ = __webpack_require__(1413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__multiselect_service__ = __webpack_require__(1469);








var DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])((function () { return AngularMultiSelect; })),
    multi: true
};
var DROPDOWN_CONTROL_VALIDATION = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])((function () { return AngularMultiSelect; })),
    multi: true,
};
var noop = function () {
};
var AngularMultiSelect = /** @class */ (function () {
    function AngularMultiSelect(_elementRef, cdr, ds) {
        this._elementRef = _elementRef;
        this.cdr = cdr;
        this.ds = ds;
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDeSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onSelectAll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDeSelectAll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onOpen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isActive = false;
        this.isSelectAll = false;
        this.isFilterSelectAll = false;
        this.isInfiniteFilterSelectAll = false;
        this.chunkIndex = [];
        this.cachedItems = [];
        this.itemHeight = 41.6;
        this.filterLength = 0;
        this.infiniteFilterLength = 0;
        this.defaultSettings = {
            singleSelection: false,
            text: 'Select',
            enableCheckAll: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            filterSelectAllText: 'Select all filtered results',
            filterUnSelectAllText: 'UnSelect all filtered results',
            enableSearchFilter: false,
            searchBy: [],
            maxHeight: 300,
            badgeShowLimit: 999999999999,
            classes: '',
            disabled: false,
            searchPlaceholderText: 'Search',
            showCheckbox: true,
            noDataLabel: 'No Data Available',
            searchAutofocus: true,
            lazyLoading: false,
            labelKey: 'itemName',
            primaryKey: 'id',
            position: 'bottom',
            enableFilterSelectAll: true
        };
        this.filteredList = [];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    AngularMultiSelect.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.data);
        this.settings = Object.assign(this.defaultSettings, this.settings);
        if (this.settings.groupBy) {
            this.groupedData = this.transformData(this.data, this.settings.groupBy);
        }
        this.totalRows = (this.data && this.data.length);
        this.cachedItems = this.data;
        this.screenItemsLen = Math.ceil(this.settings.maxHeight / this.itemHeight);
        this.cachedItemsLen = this.screenItemsLen * 3;
        this.totalHeight = this.itemHeight * this.totalRows;
        this.maxBuffer = this.screenItemsLen * this.itemHeight;
        this.lastScrolled = 0;
        this.renderChunk(0, this.cachedItemsLen / 2);
        if (this.settings.position == 'top') {
            setTimeout((function () {
                _this.selectedListHeight = { val: 0 };
                _this.selectedListHeight.val = _this.selectedListElem.nativeElement.clientHeight;
            }));
        }
        this.subscription = this.ds.getData().subscribe((function (data) {
            _this.filterLength = data.length;
            _this.onFilterChange(data);
        }));
    };
    AngularMultiSelect.prototype.ngOnChanges = function (changes) {
        if (changes.data && !changes.data.firstChange) {
            if (this.settings.groupBy) {
                this.groupedData = this.transformData(this.data, this.settings.groupBy);
                if (this.data.length == 0) {
                    this.selectedItems = [];
                }
            }
        }
        if (changes.settings && !changes.settings.firstChange) {
            this.settings = Object.assign(this.defaultSettings, this.settings);
        }
    };
    AngularMultiSelect.prototype.ngDoCheck = function () {
        if (this.selectedItems) {
            if (this.selectedItems.length == 0 || this.data.length == 0 || this.selectedItems.length < this.data.length) {
                this.isSelectAll = false;
            }
        }
    };
    AngularMultiSelect.prototype.ngAfterViewInit = function () {
        if (this.settings.lazyLoading) {
            this._elementRef.nativeElement.getElementsByClassName("lazyContainer")[0].addEventListener('scroll', this.onScroll.bind(this));
        }
    };
    AngularMultiSelect.prototype.ngAfterViewChecked = function () {
        if (this.selectedListElem.nativeElement.clientHeight && this.settings.position == 'top' && this.selectedListHeight) {
            this.selectedListHeight.val = this.selectedListElem.nativeElement.clientHeight;
            this.cdr.detectChanges();
        }
    };
    AngularMultiSelect.prototype.onItemClick = function (item, index, evt) {
        if (this.settings.disabled) {
            return false;
        }
        var found = this.isSelected(item);
        var limit = this.selectedItems.length < this.settings.limitSelection ? true : false;
        if (!found) {
            if (this.settings.limitSelection) {
                if (limit) {
                    this.addSelected(item);
                    this.onSelect.emit(item);
                }
            }
            else {
                this.addSelected(item);
                this.onSelect.emit(item);
            }
        }
        else {
            this.removeSelected(item);
            this.onDeSelect.emit(item);
        }
        if (this.isSelectAll || this.data.length > this.selectedItems.length) {
            this.isSelectAll = false;
        }
        if (this.data.length == this.selectedItems.length) {
            this.isSelectAll = true;
        }
    };
    AngularMultiSelect.prototype.validate = function (c) {
        return null;
    };
    AngularMultiSelect.prototype.writeValue = function (value) {
        if (value !== undefined && value !== null) {
            if (this.settings.singleSelection) {
                try {
                    if (value.length > 1) {
                        this.selectedItems = [value[0]];
                        throw new __WEBPACK_IMPORTED_MODULE_3__multiselect_model__["a" /* MyException */](404, { "msg": "Single Selection Mode, Selected Items cannot have more than one item." });
                    }
                    else {
                        this.selectedItems = value;
                    }
                }
                catch (e) {
                    console.error(e.body.msg);
                }
            }
            else {
                if (this.settings.limitSelection) {
                    this.selectedItems = value.slice(0, this.settings.limitSelection);
                }
                else {
                    this.selectedItems = value;
                }
                if (this.selectedItems.length === this.data.length && this.data.length > 0) {
                    this.isSelectAll = true;
                }
            }
        }
        else {
            this.selectedItems = [];
        }
    };
    //From ControlValueAccessor interface
    AngularMultiSelect.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    AngularMultiSelect.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    AngularMultiSelect.prototype.trackByFn = function (index, item) {
        return item[this.settings.primaryKey];
    };
    AngularMultiSelect.prototype.isSelected = function (clickedItem) {
        var _this = this;
        var found = false;
        this.selectedItems && this.selectedItems.forEach((function (item) {
            if (clickedItem[_this.settings.primaryKey] === item[_this.settings.primaryKey]) {
                found = true;
            }
        }));
        return found;
    };
    AngularMultiSelect.prototype.addSelected = function (item) {
        if (this.settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
            this.closeDropdown();
        }
        else
            this.selectedItems.push(item);
        this.onChangeCallback(this.selectedItems);
        this.onTouchedCallback(this.selectedItems);
    };
    AngularMultiSelect.prototype.removeSelected = function (clickedItem) {
        var _this = this;
        this.selectedItems && this.selectedItems.forEach((function (item) {
            if (clickedItem[_this.settings.primaryKey] === item[_this.settings.primaryKey]) {
                _this.selectedItems.splice(_this.selectedItems.indexOf(item), 1);
            }
        }));
        this.onChangeCallback(this.selectedItems);
        this.onTouchedCallback(this.selectedItems);
    };
    AngularMultiSelect.prototype.toggleDropdown = function (evt) {
        var _this = this;
        if (this.settings.disabled) {
            return false;
        }
        this.isActive = !this.isActive;
        if (this.isActive && this.searchInput) {
            if (this.settings.searchAutofocus && this.settings.enableSearchFilter && !this.searchTempl) {
                setTimeout((function () {
                    _this.searchInput.nativeElement.focus();
                }), 0);
            }
            this.onOpen.emit(true);
        }
        else {
            this.onClose.emit(false);
        }
        evt.preventDefault();
    };
    AngularMultiSelect.prototype.closeDropdown = function () {
        if (this.searchInput && this.settings.lazyLoading) {
            this.searchInput.nativeElement.value = "";
            this.data = [];
            this.data = this.cachedItems;
            this.totalHeight = this.itemHeight * this.data.length;
            this.totalRows = this.data.length;
            this.updateView(this.scrollTop);
        }
        if (this.searchInput) {
            this.searchInput.nativeElement.value = "";
        }
        this.filter = "";
        this.isActive = false;
        this.onClose.emit(false);
    };
    AngularMultiSelect.prototype.toggleSelectAll = function () {
        console.log(this.ds.getData());
        console.log(this.filter);
        if (!this.isSelectAll) {
            this.selectedItems = [];
            this.selectedItems = this.data.slice();
            this.isSelectAll = true;
            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);
            this.onSelectAll.emit(this.selectedItems);
        }
        else {
            this.selectedItems = [];
            this.isSelectAll = false;
            this.onChangeCallback(this.selectedItems);
            this.onTouchedCallback(this.selectedItems);
            this.onDeSelectAll.emit(this.selectedItems);
        }
    };
    AngularMultiSelect.prototype.toggleFilterSelectAll = function () {
        var _this = this;
        if (!this.isFilterSelectAll) {
            this.ds.getFilteredData().forEach((function (item) {
                if (!_this.isSelected(item)) {
                    _this.addSelected(item);
                }
            }));
            this.isFilterSelectAll = true;
        }
        else {
            this.ds.getFilteredData().forEach((function (item) {
                if (_this.isSelected(item)) {
                    _this.removeSelected(item);
                }
            }));
            this.isFilterSelectAll = false;
        }
    };
    AngularMultiSelect.prototype.toggleInfiniteFilterSelectAll = function () {
        var _this = this;
        if (!this.isInfiniteFilterSelectAll) {
            this.data.forEach((function (item) {
                if (!_this.isSelected(item)) {
                    _this.addSelected(item);
                }
            }));
            this.isInfiniteFilterSelectAll = true;
        }
        else {
            this.data.forEach((function (item) {
                if (_this.isSelected(item)) {
                    _this.removeSelected(item);
                }
            }));
            this.isInfiniteFilterSelectAll = false;
        }
    };
    AngularMultiSelect.prototype.clearSearch = function () {
        this.filter = "";
        this.isFilterSelectAll = false;
    };
    AngularMultiSelect.prototype.onFilterChange = function (data) {
        var _this = this;
        if (this.filter && this.filter == "" || data.length == 0) {
            this.isFilterSelectAll = false;
        }
        var cnt = 0;
        data.forEach((function (item) {
            if (_this.isSelected(item)) {
                cnt++;
            }
        }));
        if (cnt > 0 && this.filterLength == cnt) {
            this.isFilterSelectAll = true;
        }
        else if (cnt > 0 && this.filterLength != cnt) {
            this.isFilterSelectAll = false;
        }
        this.cdr.detectChanges();
    };
    AngularMultiSelect.prototype.transformData = function (arr, field) {
        var groupedObj = arr.reduce((function (prev, cur) {
            if (!prev[cur[field]]) {
                prev[cur[field]] = [cur];
            }
            else {
                prev[cur[field]].push(cur);
            }
            return prev;
        }), {});
        var tempArr = [];
        Object.keys(groupedObj).map((function (x) {
            tempArr.push({ key: x, value: groupedObj[x] });
        }));
        return tempArr;
    };
    AngularMultiSelect.prototype.renderChunk = function (fromPos, howMany) {
        this.chunkArray = [];
        this.chunkIndex = [];
        var finalItem = fromPos + howMany;
        if (finalItem > this.totalRows)
            finalItem = this.totalRows;
        for (var i = fromPos; i < finalItem; i++) {
            this.chunkIndex.push((i * this.itemHeight) + 'px');
            this.chunkArray.push(this.data[i]);
        }
    };
    AngularMultiSelect.prototype.onScroll = function (e) {
        this.scrollTop = e.target.scrollTop;
        this.updateView(this.scrollTop);
    };
    AngularMultiSelect.prototype.updateView = function (scrollTop) {
        var scrollPos = scrollTop ? scrollTop : 0;
        var first = (scrollPos / this.itemHeight) - this.screenItemsLen;
        var firstTemp = "" + first;
        first = parseInt(firstTemp) < 0 ? 0 : parseInt(firstTemp);
        this.renderChunk(first, this.cachedItemsLen);
        this.lastRepaintY = scrollPos;
    };
    AngularMultiSelect.prototype.filterInfiniteList = function (evt) {
        var filteredElems = [];
        this.data = this.cachedItems.slice();
        if (evt.target.value.toString() != '') {
            this.data.filter((function (el) {
                for (var prop in el) {
                    if (el[prop].toString().toLowerCase().indexOf(evt.target.value.toString().toLowerCase()) >= 0) {
                        filteredElems.push(el);
                        break;
                    }
                }
            }));
            //this.cachedItems = this.data;
            this.totalHeight = this.itemHeight * filteredElems.length;
            this.totalRows = filteredElems.length;
            this.data = [];
            this.data = filteredElems;
            this.infiniteFilterLength = this.data.length;
            this.updateView(this.scrollTop);
        }
        else if (evt.target.value.toString() == '' && this.cachedItems.length > 0) {
            this.data = [];
            this.data = this.cachedItems;
            this.totalHeight = this.itemHeight * this.data.length;
            this.totalRows = this.data.length;
            this.infiniteFilterLength = 0;
            this.updateView(this.scrollTop);
        }
    };
    AngularMultiSelect.prototype.resetInfiniteSearch = function () {
        this.filter = "";
        this.isInfiniteFilterSelectAll = false;
        this.data = [];
        this.data = this.cachedItems;
        this.totalHeight = this.itemHeight * this.data.length;
        this.totalRows = this.data.length;
        this.infiniteFilterLength = 0;
        this.updateView(this.scrollTop);
    };
    AngularMultiSelect.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AngularMultiSelect.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'angular2-multiselect',
                    template: "\n      <div class=\"cuppa-dropdown\" (clickOutside)=\"closeDropdown()\">\n          <div class=\"selected-list\" #selectedList>\n              <div class=\"c-btn form-control\" (click)=\"toggleDropdown($event)\" [ngClass]=\"{'disabled': settings.disabled}\" [attr.tabindex]=\"0\">\n                  <span *ngIf=\"selectedItems?.length == 0\">{{settings.text}}</span>\n                  <span *ngIf=\"settings.singleSelection && !badgeTempl\">\n                      <span *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);\">\n                          {{item[settings.labelKey]}}\n                      </span>\n                  </span>\n                  <span class=\"c-list\" *ngIf=\"selectedItems?.length > 0 && settings.singleSelection && badgeTempl \">\n                      <div class=\"c-token\" *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);let k = index\">\n                      <span *ngIf=\"!badgeTempl\" class=\"c-label\">{{item[settings.labelKey]}}</span>\n                  <span *ngIf=\"badgeTempl\" class=\"c-label\">\n                                  <c-templateRenderer [data]=\"badgeTempl\" [item]=\"item\"></c-templateRenderer>\n                              </span>\n                  <span class=\"c-remove\" (click)=\"onItemClick(item,k,$event)\">\n                                  <svg width=\"100%\" height=\"100%\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n              viewBox=\"0 0 47.971 47.971\" style=\"enable-background:new 0 0 47.971 47.971;\" xml:space=\"preserve\">\n          <g>\n              <path d=\"M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\n                  c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\n                  C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\n                  s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z\"/>\n          </g>\n          </svg>\n\n                              </span>\n\n\n\n              </div>\n              </span>\n              <div class=\"c-list\" *ngIf=\"selectedItems?.length > 0 && !settings.singleSelection\">\n                  <div class=\"c-token\" *ngFor=\"let item of selectedItems;trackBy: trackByFn.bind(this);let k = index\" [hidden]=\"k > settings.badgeShowLimit-1\">\n                      <span *ngIf=\"!badgeTempl\" class=\"c-label\">{{item[settings.labelKey]}}</span>\n                      <span *ngIf=\"badgeTempl\" class=\"c-label\">\n                                  <c-templateRenderer [data]=\"badgeTempl\" [item]=\"item\"></c-templateRenderer>\n                              </span>\n                      <span class=\"c-remove\" (click)=\"onItemClick(item,k,$event)\">\n                                  <svg width=\"100%\" height=\"100%\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n              viewBox=\"0 0 47.971 47.971\" style=\"enable-background:new 0 0 47.971 47.971;\" xml:space=\"preserve\">\n          <g>\n              <path d=\"M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\n                  c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\n                  C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\n                  s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z\"/>\n          </g>\n          </svg>\n\n                              </span>\n                  </div>\n              </div>\n              <span class=\"countplaceholder\" *ngIf=\"selectedItems?.length > settings.badgeShowLimit\">+{{selectedItems?.length - settings.badgeShowLimit }}</span>\n              <!--            <span class=\"fa\" [ngClass]=\"{'c-angle-down': !isActive,'fa-angle-up':isActive}\"></span>\n      --><span *ngIf=\"!isActive\" class=\"c-angle-down\">\n                      <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n      \t width=\"100%\" height=\"100%\" viewBox=\"0 0 612 612\" style=\"enable-background:new 0 0 612 612;\" xml:space=\"preserve\">\n      <g>\n      \t<g id=\"_x31_0_34_\">\n      \t\t<g>\n      \t\t\t<path d=\"M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782\n      \t\t\t\tc-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296\n      \t\t\t\tc6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z\"/>\n      \t\t</g>\n      \t</g>\n      </g>\n      </svg>\n\n                  </span>\n              <span *ngIf=\"isActive\" class=\"c-angle-up\">\n                      <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n      \t width=\"100%\" height=\"100%\" viewBox=\"0 0 612 612\" style=\"enable-background:new 0 0 612 612;\" xml:space=\"preserve\">\n      <g>\n      \t<g id=\"_x39__30_\">\n      \t\t<g>\n      \t\t\t<path d=\"M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27\n      \t\t\t\tL7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832\n      \t\t\t\tc9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z\"/>\n      \t\t</g>\n      \t</g>\n      </g>\n\n      </svg>\n\n                  </span>\n          </div>\n      </div>\n      <div [setPosition]=\"selectedListHeight?.val\" class=\"dropdown-list\" [ngClass]=\"{'dropdown-list-top': settings.position == 'top'}\"\n          [hidden]=\"!isActive\">\n          <div [ngClass]=\"{'arrow-up': settings.position == 'bottom', 'arrow-down': settings.position == 'top'}\" class=\"arrow-2\"></div>\n          <div [ngClass]=\"{'arrow-up': settings.position == 'bottom', 'arrow-down': settings.position == 'top'}\"></div>\n          <div class=\"list-area\">\n              <div class=\"pure-checkbox select-all\" *ngIf=\"settings.enableCheckAll && !settings.singleSelection && !settings.limitSelection && data?.length > 0\"\n                  (click)=\"toggleSelectAll()\">\n                  <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\"\n                  />\n                  <label>\n                      <span [hidden]=\"isSelectAll\">{{settings.selectAllText}}</span>\n                      <span [hidden]=\"!isSelectAll\">{{settings.unSelectAllText}}</span>\n                  </label>\n              </div>\n              <div class=\"list-filter\" *ngIf=\"settings.enableSearchFilter\">\n                  <span class=\"c-search\">\n                          <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n      \t width=\"100%\" height=\"100%\" viewBox=\"0 0 615.52 615.52\" style=\"enable-background:new 0 0 615.52 615.52;\"\n      \t xml:space=\"preserve\">\n      <g>\n      \t<g>\n      \t\t<g id=\"Search__x28_and_thou_shall_find_x29_\">\n      \t\t\t<g>\n      \t\t\t\t<path d=\"M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0\n      \t\t\t\t\tC104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777\n      \t\t\t\t\tl184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291\n      \t\t\t\t\tC617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174\n      \t\t\t\t\tc-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88\n      \t\t\t\t\ts152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z\"/>\n      \t\t\t</g>\n      \t\t</g>\n      \t</g>\n      </g>\n\n      </svg>\n                      </span>\n                  <span *ngIf=\"!settings.lazyLoading\" [hidden]=\"filter == undefined || filter?.length == 0\" class=\"c-clear\" (click)=\"clearSearch()\">\n      <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n      \t viewBox=\"0 0 51.976 51.976\" style=\"enable-background:new 0 0 51.976 51.976;\" xml:space=\"preserve\">\n      <g>\n      \t<path d=\"M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0\n      \t\tC54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778\n      \t\tc-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828\n      \t\tc0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828\n      \t\tl-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z\"/>\n      </g>\n      </svg>\n                      </span>\n                  <span *ngIf=\"settings.lazyLoading\" [hidden]=\"filter == undefined || filter?.length == 0\" class=\"c-clear\" (click)=\"resetInfiniteSearch()\">\n      <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n      \t viewBox=\"0 0 51.976 51.976\" style=\"enable-background:new 0 0 51.976 51.976;\" xml:space=\"preserve\">\n      <g>\n      \t<path d=\"M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0\n      \t\tC54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778\n      \t\tc-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828\n      \t\tc0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828\n      \t\tl-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z\"/>\n      </g>\n      </svg>\n                      </span>\n\n                  <input class=\"c-input\" *ngIf=\"!settings.lazyLoading && !searchTempl\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                      [(ngModel)]=\"filter\">\n                  <input class=\"c-input\" *ngIf=\"settings.lazyLoading && !searchTempl\" #searchInput type=\"text\" [placeholder]=\"settings.searchPlaceholderText\"\n                      [(ngModel)]=\"filter\" (keyup)=\"filterInfiniteList($event)\">\n                  <c-templateRenderer *ngIf=\"searchTempl\" [data]=\"searchTempl\" [item]=\"item\"></c-templateRenderer>\n              </div>\n              <div class=\"filter-select-all\" *ngIf=\"!settings.lazyLoading && settings.enableFilterSelectAll\">\n                  <div class=\"pure-checkbox select-all\" *ngIf=\"filter?.length > 0 && filterLength > 0\" (click)=\"toggleFilterSelectAll()\">\n                      <input type=\"checkbox\" [checked]=\"isFilterSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\" />\n                      <label>\n                      <span [hidden]=\"isFilterSelectAll\">{{settings.filterSelectAllText}}</span>\n                      <span [hidden]=\"!isFilterSelectAll\">{{settings.filterUnSelectAllText}}</span>\n                  </label>\n                  </div>\n                  <label *ngIf=\"filterLength == 0\" [hidden]=\"filter == undefined || filter?.length == 0\">{{settings.noDataLabel}}</label>\n              </div>\n              <div class=\"filter-select-all\" *ngIf=\"settings.lazyLoading && settings.enableFilterSelectAll\">\n                  <div class=\"pure-checkbox select-all\" *ngIf=\"filter?.length > 0 && infiniteFilterLength > 0\" (click)=\"toggleInfiniteFilterSelectAll()\">\n                      <input type=\"checkbox\" [checked]=\"isInfiniteFilterSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\"\n                      />\n                      <label>\n                      <span [hidden]=\"isInfiniteFilterSelectAll\">{{settings.filterSelectAllText}}</span>\n                      <span [hidden]=\"!isInfiniteFilterSelectAll\">{{settings.filterUnSelectAllText}}</span>\n                  </label>\n                  </div>\n              </div>\n              <ul *ngIf=\"!settings.groupBy\" [style.maxHeight]=\"settings.maxHeight+'px'\" class=\"lazyContainer\">\n                  <span *ngIf=\"itemTempl\">\n                  <li *ngFor=\"let item of data | listFilter: filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\">\n                  <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\n                  <label></label>\n                  <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n              </li>\n              </span>\n                  <span *ngIf=\"!itemTempl && !settings.lazyLoading\">\n              <li *ngFor=\"let item of data | listFilter:filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\">\n                  <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\n                  <label>{{item[settings.labelKey]}}</label>\n              </li>\n              </span>\n                  <span *ngIf=\"!itemTempl && settings.lazyLoading\">\n                  <div [ngStyle]=\"{'height':totalHeight+'px'}\" style=\"position: relative;\">\n\n            \n              <li *ngFor=\"let item of chunkArray ; let i = index;\" (click)=\"onItemClick(item,i,$event)\" style=\"position: absolute;width: 100%;\" class=\"pure-checkbox\" [styleProp]=\"chunkIndex[i]\">\n                  <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\n                  <label>{{item[settings.labelKey]}}</label>\n              </li>\n              </div>\n              </span>\n              </ul>\n              <div *ngIf=\"settings.groupBy\" [style.maxHeight]=\"settings.maxHeight+'px'\" style=\"overflow: auto;\">\n                  <ul *ngFor=\"let obj of groupedData ; let i = index;\" class=\"list-grp\">\n                      <h4 *ngIf=\"(obj.value | listFilter:filter : settings.searchBy )?.length > 0\">{{obj.key}}</h4>\n                      <span *ngIf=\"itemTempl\">\n              <li *ngFor=\"let item of obj.value | listFilter:filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\">\n                  <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\n                  <label></label>\n                  <c-templateRenderer [data]=\"itemTempl\" [item]=\"item\"></c-templateRenderer>\n              </li>\n              </span>\n                      <span *ngIf=\"!itemTempl\">\n              <li *ngFor=\"let item of obj.value | listFilter:filter : settings.searchBy; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\">\n                  <input *ngIf=\"settings.showCheckbox\" type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\n                  <label>{{item[settings.labelKey]}}</label>\n              </li>\n              </span>\n                  </ul>\n              </div>\n              <h5 class=\"list-message\" *ngIf=\"data?.length == 0\">{{settings.noDataLabel}}</h5>\n          </div>\n      </div>\n      </div>\n    ",
                    host: { '[class]': 'defaultSettings.classes' },
                    styles: ["\n      .cuppa-dropdown{position:relative}.c-btn{display:inline-block;background:#fff;border:1px solid #ccc;border-radius:3px;font-size:14px;color:#333}.c-btn.disabled{background:#ccc}.selected-list .c-list{float:left;padding:0px;margin:0px;width:calc(100% - 20px)}.selected-list .c-list .c-token{list-style:none;padding:2px 8px;background:#0079FE;color:#fff;border-radius:2px;margin-right:4px;margin-top:2px;float:left;position:relative;padding-right:25px}.selected-list .c-list .c-token .c-label{display:block;float:left}.selected-list .c-list .c-token .c-remove{position:absolute;right:8px;top:50%;transform:translateY(-50%);width:10px}.selected-list .c-list .c-token .c-remove svg{fill:#fff}.selected-list .fa-angle-down,.selected-list .fa-angle-up{font-size:15pt;position:absolute;right:10px;top:50%;transform:translateY(-50%)}.selected-list .c-angle-down,.selected-list .c-angle-up{width:15px;height:15px;position:absolute;right:10px;top:50%;transform:translateY(-50%);pointer-events:none}.selected-list .c-angle-down svg,.selected-list .c-angle-up svg{fill:#333}.selected-list .countplaceholder{position:absolute;right:30px;top:50%;transform:translateY(-50%)}.selected-list .c-btn{width:100%;padding:10px;cursor:pointer;display:flex;position:relative}.selected-list .c-btn .c-icon{position:absolute;right:5px;top:50%;transform:translateY(-50%)}.dropdown-list{position:absolute;padding-top:14px;width:100%;z-index:9999}.dropdown-list ul{padding:0px;list-style:none;overflow:auto;margin:0px}.dropdown-list ul li{padding:10px 10px;cursor:pointer;text-align:left}.dropdown-list ul li:first-child{padding-top:10px}.dropdown-list ul li:last-child{padding-bottom:10px}.dropdown-list ul li:hover{background:#f5f5f5}.dropdown-list ::-webkit-scrollbar{width:8px}.dropdown-list ::-webkit-scrollbar-thumb{background:#cccccc;border-radius:5px}.dropdown-list ::-webkit-scrollbar-track{background:#f2f2f2}.arrow-up,.arrow-down{width:0;height:0;border-left:13px solid transparent;border-right:13px solid transparent;border-bottom:15px solid #fff;margin-left:15px;position:absolute;top:0}.arrow-down{bottom:-14px;top:unset;transform:rotate(180deg)}.arrow-2{border-bottom:15px solid #ccc;top:-1px}.arrow-down.arrow-2{top:unset;bottom:-16px}.list-area{border:1px solid #ccc;border-radius:3px;background:#fff;margin:0px;box-shadow:0px 1px 5px #959595}.select-all{padding:10px;border-bottom:1px solid #ccc;text-align:left}.list-filter{border-bottom:1px solid #ccc;position:relative;padding-left:35px;height:35px}.list-filter input{border:0px;width:100%;height:100%;padding:0px}.list-filter input:focus{outline:none}.list-filter .c-search{position:absolute;top:9px;left:10px;width:15px;height:15px}.list-filter .c-search svg{fill:#888}.list-filter .c-clear{position:absolute;top:10px;right:10px;width:15px;height:15px}.list-filter .c-clear svg{fill:#888}.pure-checkbox input[type=\"checkbox\"]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.pure-checkbox input[type=\"checkbox\"]:focus+label:before,.pure-checkbox input[type=\"checkbox\"]:hover+label:before{border-color:#0079FE;background-color:#f2f2f2}.pure-checkbox input[type=\"checkbox\"]:active+label:before{transition-duration:0s}.pure-checkbox input[type=\"checkbox\"]+label{position:relative;padding-left:2em;vertical-align:middle;user-select:none;cursor:pointer;margin:0px;color:#000;font-weight:300}.pure-checkbox input[type=\"checkbox\"]+label:before{box-sizing:content-box;content:'';color:#0079FE;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #0079FE;text-align:center;transition:all 0.4s ease}.pure-checkbox input[type=\"checkbox\"]+label:after{box-sizing:content-box;content:'';background-color:#0079FE;position:absolute;top:50%;left:4px;width:10px;height:10px;margin-top:-5px;transform:scale(0);transform-origin:50%;transition:transform 200ms ease-out}.pure-checkbox input[type=\"checkbox\"]:disabled+label:before{border-color:#cccccc}.pure-checkbox input[type=\"checkbox\"]:disabled:focus+label:before .pure-checkbox input[type=\"checkbox\"]:disabled:hover+label:before{background-color:inherit}.pure-checkbox input[type=\"checkbox\"]:disabled:checked+label:before{background-color:#cccccc}.pure-checkbox input[type=\"checkbox\"]+label:after{background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#ffffff;border-width:0 0 3px 3px;border-image:none;transform:rotate(-45deg) scale(0)}.pure-checkbox input[type=\"checkbox\"]:checked+label:after{content:'';transform:rotate(-45deg) scale(1);transition:transform 200ms ease-out}.pure-checkbox input[type=\"radio\"]:checked+label:before{background-color:white}.pure-checkbox input[type=\"radio\"]:checked+label:after{transform:scale(1)}.pure-checkbox input[type=\"radio\"]+label:before{border-radius:50%}.pure-checkbox input[type=\"checkbox\"]:checked+label:before{background:#0079FE}.pure-checkbox input[type=\"checkbox\"]:checked+label:after{transform:rotate(-45deg) scale(1)}.list-message{text-align:center;margin:0px;padding:15px 0px;font-size:initial}.list-grp{padding:0 15px !important}.list-grp h4{text-transform:capitalize;margin:15px 0px 0px 0px;font-size:14px;font-weight:700}.list-grp>li{padding-left:15px !important}\n    "],
                    providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR, DROPDOWN_CONTROL_VALIDATION],
                },] },
    ];
    /** @nocollapse */
    AngularMultiSelect.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_7__multiselect_service__["a" /* DataService */], },
    ]; };
    AngularMultiSelect.propDecorators = {
        'data': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'settings': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['onSelect',] },],
        'onDeSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['onDeSelect',] },],
        'onSelectAll': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['onSelectAll',] },],
        'onDeSelectAll': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['onDeSelectAll',] },],
        'onOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['onOpen',] },],
        'onClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['onClose',] },],
        'itemTempl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [__WEBPACK_IMPORTED_MODULE_6__menu_item__["a" /* Item */],] },],
        'badgeTempl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [__WEBPACK_IMPORTED_MODULE_6__menu_item__["b" /* Badge */],] },],
        'searchTempl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [__WEBPACK_IMPORTED_MODULE_6__menu_item__["c" /* Search */],] },],
        'searchInput': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['searchInput',] },],
        'selectedListElem': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['selectedList',] },],
    };
    return AngularMultiSelect;
}());

var AngularMultiSelectModule = /** @class */ (function () {
    function AngularMultiSelectModule() {
    }
    AngularMultiSelectModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]],
                    declarations: [AngularMultiSelect, __WEBPACK_IMPORTED_MODULE_4__clickOutside__["a" /* ClickOutsideDirective */], __WEBPACK_IMPORTED_MODULE_4__clickOutside__["b" /* ScrollDirective */], __WEBPACK_IMPORTED_MODULE_4__clickOutside__["c" /* styleDirective */], __WEBPACK_IMPORTED_MODULE_5__list_filter__["a" /* ListFilterPipe */], __WEBPACK_IMPORTED_MODULE_6__menu_item__["a" /* Item */], __WEBPACK_IMPORTED_MODULE_6__menu_item__["d" /* TemplateRenderer */], __WEBPACK_IMPORTED_MODULE_6__menu_item__["b" /* Badge */], __WEBPACK_IMPORTED_MODULE_6__menu_item__["c" /* Search */], __WEBPACK_IMPORTED_MODULE_4__clickOutside__["d" /* setPosition */]],
                    exports: [AngularMultiSelect, __WEBPACK_IMPORTED_MODULE_4__clickOutside__["a" /* ClickOutsideDirective */], __WEBPACK_IMPORTED_MODULE_4__clickOutside__["b" /* ScrollDirective */], __WEBPACK_IMPORTED_MODULE_4__clickOutside__["c" /* styleDirective */], __WEBPACK_IMPORTED_MODULE_5__list_filter__["a" /* ListFilterPipe */], __WEBPACK_IMPORTED_MODULE_6__menu_item__["a" /* Item */], __WEBPACK_IMPORTED_MODULE_6__menu_item__["d" /* TemplateRenderer */], __WEBPACK_IMPORTED_MODULE_6__menu_item__["b" /* Badge */], __WEBPACK_IMPORTED_MODULE_6__menu_item__["c" /* Search */], __WEBPACK_IMPORTED_MODULE_4__clickOutside__["d" /* setPosition */]],
                    providers: [__WEBPACK_IMPORTED_MODULE_7__multiselect_service__["a" /* DataService */]]
                },] },
    ];
    /** @nocollapse */
    AngularMultiSelectModule.ctorParameters = function () { return []; };
    return AngularMultiSelectModule;
}());

//# sourceMappingURL=multiselect.component.js.map

/***/ }),

/***/ 1469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return DataService; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);


var DataService = /** @class */ (function () {
    function DataService() {
        this.filteredData = [];
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    DataService.prototype.setData = function (data) {
        this.filteredData = data;
        this.subject.next(data);
    };
    DataService.prototype.getData = function () {
        return this.subject.asObservable();
    };
    DataService.prototype.getFilteredData = function () {
        if (this.filteredData && this.filteredData.length > 0) {
            return this.filteredData;
        }
        else {
            return [];
        }
    };
    DataService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    DataService.ctorParameters = function () { return []; };
    return DataService;
}());

//# sourceMappingURL=multiselect.service.js.map

/***/ }),

/***/ 1470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordion_group_component__ = __webpack_require__(1414);
/* unused harmony reexport AccordionPanelComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_component__ = __webpack_require__(1388);
/* unused harmony reexport AccordionComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_module__ = __webpack_require__(1415);
/* unused harmony reexport AccordionModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_config__ = __webpack_require__(1389);
/* unused harmony reexport AccordionConfig */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_component__ = __webpack_require__(1416);
/* unused harmony reexport AlertComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_module__ = __webpack_require__(1417);
/* unused harmony reexport AlertModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_config__ = __webpack_require__(1390);
/* unused harmony reexport AlertConfig */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_checkbox_directive__ = __webpack_require__(1418);
/* unused harmony reexport ButtonCheckboxDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_radio_directive__ = __webpack_require__(1419);
/* unused harmony reexport ButtonRadioDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttons_module__ = __webpack_require__(1420);
/* unused harmony reexport ButtonsModule */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel_component__ = __webpack_require__(1391);
/* unused harmony reexport CarouselComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_module__ = __webpack_require__(1421);
/* unused harmony reexport CarouselModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_component__ = __webpack_require__(1422);
/* unused harmony reexport SlideComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_config__ = __webpack_require__(1392);
/* unused harmony reexport CarouselConfig */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collapse_directive__ = __webpack_require__(1423);
/* unused harmony reexport CollapseDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapse_module__ = __webpack_require__(1393);
/* unused harmony reexport CollapseModule */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__datepicker_component__ = __webpack_require__(1428);
/* unused harmony reexport DatePickerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datepicker_module__ = __webpack_require__(1429);
/* unused harmony reexport DatepickerModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__daypicker_component__ = __webpack_require__(1430);
/* unused harmony reexport DayPickerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__monthpicker_component__ = __webpack_require__(1431);
/* unused harmony reexport MonthPickerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__yearpicker_component__ = __webpack_require__(1432);
/* unused harmony reexport YearPickerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__date_formatter__ = __webpack_require__(1427);
/* unused harmony reexport DateFormatter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datepicker_config__ = __webpack_require__(1394);
/* unused harmony reexport DatepickerConfig */
/*
 todo: general:
 1. Popup
 2. Keyboard support
 3. custom-class attribute support
 4. date-disabled attribute support
 5. template-url attribute support
 */







//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dropdown_menu_directive__ = __webpack_require__(1433);
/* unused harmony reexport DropdownMenuDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_toggle_directive__ = __webpack_require__(1434);
/* unused harmony reexport DropdownToggleDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_directive__ = __webpack_require__(1383);
/* unused harmony reexport DropdownDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdown_service__ = __webpack_require__(1396);
/* unused harmony reexport DropdownService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdown_module__ = __webpack_require__(1435);
/* unused harmony reexport DropdownModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdown_config__ = __webpack_require__(1395);
/* unused harmony reexport DropdownConfig */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_backdrop_component__ = __webpack_require__(1397);
/* unused harmony reexport ModalBackdropComponent */
/* unused harmony reexport ModalBackdropOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_component__ = __webpack_require__(1437);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_1__modal_component__["a"]; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_module__ = __webpack_require__(1438);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", (function() { return __WEBPACK_IMPORTED_MODULE_2__modal_module__["a"]; }));



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pager_component__ = __webpack_require__(1439);
/* unused harmony reexport PagerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pagination_component__ = __webpack_require__(1440);
/* unused harmony reexport PaginationComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_module__ = __webpack_require__(1441);
/* unused harmony reexport PaginationModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagination_config__ = __webpack_require__(1384);
/* unused harmony reexport PaginationConfig */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popover_directive__ = __webpack_require__(1442);
/* unused harmony reexport PopoverDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_module__ = __webpack_require__(1443);
/* unused harmony reexport PopoverModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_config__ = __webpack_require__(1385);
/* unused harmony reexport PopoverConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_container_component__ = __webpack_require__(1398);
/* unused harmony reexport PopoverContainerComponent */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return PositioningService; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_positioning__ = __webpack_require__(1444);


var PositioningService = (function () {
    function PositioningService() {
    }
    PositioningService.prototype.position = function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ng_positioning__["a" /* positionElements */])(this._getHtmlElement(target), this._getHtmlElement(element), attachment, appendToBody);
    };
    PositioningService.prototype._getHtmlElement = function (element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return document.querySelector(element);
        }
        if (element instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) {
            return element.nativeElement;
        }
        return element;
    };
    PositioningService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PositioningService.ctorParameters = function () { return []; };
    return PositioningService;
}());
//# sourceMappingURL=positioning.service.js.map

/***/ }),

/***/ 1481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bar_component__ = __webpack_require__(1445);
/* unused harmony reexport BarComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_directive__ = __webpack_require__(1399);
/* unused harmony reexport ProgressDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progressbar_component__ = __webpack_require__(1446);
/* unused harmony reexport ProgressbarComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progressbar_module__ = __webpack_require__(1447);
/* unused harmony reexport ProgressbarModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progressbar_config__ = __webpack_require__(1400);
/* unused harmony reexport ProgressbarConfig */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rating_component__ = __webpack_require__(1448);
/* unused harmony reexport RatingComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rating_module__ = __webpack_require__(1449);
/* unused harmony reexport RatingModule */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return SortableModule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sortable_component__ = __webpack_require__(1451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__draggable_item_service__ = __webpack_require__(1401);




var SortableModule = (function () {
    function SortableModule() {
    }
    SortableModule.forRoot = function () {
        return { ngModule: SortableModule, providers: [__WEBPACK_IMPORTED_MODULE_3__draggable_item_service__["a" /* DraggableItemService */]] };
    };
    SortableModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__sortable_component__["a" /* SortableComponent */]],
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__sortable_component__["a" /* SortableComponent */]]
                },] },
    ];
    /** @nocollapse */
    SortableModule.ctorParameters = function () { return []; };
    return SortableModule;
}());
//# sourceMappingURL=sortable.module.js.map

/***/ }),

/***/ 1484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_transclude_directive__ = __webpack_require__(1452);
/* unused harmony reexport NgTranscludeDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_directive__ = __webpack_require__(1402);
/* unused harmony reexport TabDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_heading_directive__ = __webpack_require__(1453);
/* unused harmony reexport TabHeadingDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabset_component__ = __webpack_require__(1403);
/* unused harmony reexport TabsetComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabset_config__ = __webpack_require__(1404);
/* unused harmony reexport TabsetConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_module__ = __webpack_require__(1454);
/* unused harmony reexport TabsModule */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timepicker_config__ = __webpack_require__(1405);
/* unused harmony reexport TimepickerConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timepicker_component__ = __webpack_require__(1455);
/* unused harmony reexport TimepickerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timepicker_module__ = __webpack_require__(1456);
/* unused harmony reexport TimepickerModule */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tooltip_container_component__ = __webpack_require__(1406);
/* unused harmony reexport TooltipContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_directive__ = __webpack_require__(1457);
/* unused harmony reexport TooltipDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_module__ = __webpack_require__(1458);
/* unused harmony reexport TooltipModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_config__ = __webpack_require__(1386);
/* unused harmony reexport TooltipConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tooltip_options_class__ = __webpack_require__(1487);
/* unused harmony reexport TooltipOptions */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TooltipOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

/** @deprecated */
var TooltipOptions = (function () {
    function TooltipOptions(options) {
        Object.assign(this, options);
    }
    TooltipOptions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    TooltipOptions.ctorParameters = function () { return [
        { type: Object, },
    ]; };
    return TooltipOptions;
}());
//# sourceMappingURL=tooltip-options.class.js.map

/***/ }),

/***/ 1488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__latin_map__ = __webpack_require__(1459);
/* unused harmony reexport latinMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__typeahead_options_class__ = __webpack_require__(1489);
/* unused harmony reexport TypeaheadOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeahead_match_class__ = __webpack_require__(1460);
/* unused harmony reexport TypeaheadMatch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__ = __webpack_require__(1408);
/* unused harmony reexport TypeaheadUtils */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__typeahead_container_component__ = __webpack_require__(1407);
/* unused harmony reexport TypeaheadContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__typeahead_directive__ = __webpack_require__(1461);
/* unused harmony reexport TypeaheadDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__typeahead_module__ = __webpack_require__(1462);
/* unused harmony reexport TypeaheadModule */







//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TypeaheadOptions */
var TypeaheadOptions = (function () {
    function TypeaheadOptions(options) {
        Object.assign(this, options);
    }
    return TypeaheadOptions;
}());
//# sourceMappingURL=typeahead-options.class.js.map

/***/ }),

/***/ 1490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return LinkedList; }));
var LinkedList = (function () {
    function LinkedList() {
        this.length = 0;
        this.asArray = [];
    }
    LinkedList.prototype.getNode = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    };
    LinkedList.prototype.createInternalArrayRepresentation = function () {
        var outArray = [];
        var current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    };
    LinkedList.prototype.get = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    };
    LinkedList.prototype.add = function (value, position) {
        if (position === void 0) { position = this.length; }
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        var node = {
            value: value,
            next: undefined,
            previous: undefined
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                var currentPreviousNode = this.getNode(position - 1);
                var currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.remove = function (position) {
        if (position === void 0) { position = 0; }
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            var removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.set = function (position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    };
    LinkedList.prototype.toArray = function () {
        return this.asArray;
    };
    LinkedList.prototype.findAll = function (fn) {
        var current = this.head;
        var result = [];
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index: index, value: current.value });
            }
            current = current.next;
        }
        return result;
    };
    // Array methods overriding start
    LinkedList.prototype.push = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        args.forEach((function (arg) {
            _this.add(arg);
        }));
        return this.length;
    };
    LinkedList.prototype.pop = function () {
        if (this.length === 0) {
            return undefined;
        }
        var last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    };
    LinkedList.prototype.unshift = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        args.reverse();
        args.forEach((function (arg) {
            _this.add(arg, 0);
        }));
        return this.length;
    };
    LinkedList.prototype.shift = function () {
        if (this.length === 0) {
            return undefined;
        }
        var lastItem = this.head.value;
        this.remove();
        return lastItem;
    };
    LinkedList.prototype.forEach = function (fn) {
        var current = this.head;
        for (var index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    };
    LinkedList.prototype.indexOf = function (value) {
        var current = this.head;
        var position = 0;
        for (var index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    };
    LinkedList.prototype.some = function (fn) {
        var current = this.head;
        var result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.every = function (fn) {
        var current = this.head;
        var result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.toString = function () {
        return '[Linked List]';
    };
    LinkedList.prototype.find = function (fn) {
        var current = this.head;
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    };
    LinkedList.prototype.findIndex = function (fn) {
        var current = this.head;
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    };
    return LinkedList;
}());
//# sourceMappingURL=linked-list.class.js.map

/***/ }),

/***/ 1491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parseTriggers */
/* harmony export (immutable) */ __webpack_exports__["a"] = listenToTriggers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trigger_class__ = __webpack_require__(1464);

var DEFAULT_ALIASES = {
    hover: ['mouseenter', 'mouseleave'],
    focus: ['focusin', 'focusout']
};
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var parsedTriggers = trimmedTriggers.split(/\s+/)
        .map((function (trigger) { return trigger.split(':'); }))
        .map((function (triggerPair) {
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new __WEBPACK_IMPORTED_MODULE_0__trigger_class__["a" /* Trigger */](alias[0], alias[1]);
    }));
    var manualTriggers = parsedTriggers
        .filter((function (triggerPair) { return triggerPair.isManual(); }));
    if (manualTriggers.length > 1) {
        throw 'Triggers parse error: only one manual trigger is allowed';
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
    }
    return parsedTriggers;
}
function listenToTriggers(renderer, target, triggers, showFn, hideFn, toggleFn) {
    var parsedTriggers = parseTriggers(triggers);
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    parsedTriggers.forEach((function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
    }));
    return function () { listeners.forEach((function (unsubscribeFn) { return unsubscribeFn(); })); };
}
//# sourceMappingURL=triggers.js.map

/***/ }),

/***/ 1492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ScheduleInputService; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_permission_authService_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_subject__ = __webpack_require__(1619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_state__ = __webpack_require__(49);





let ScheduleInputService = class ScheduleInputService {
    constructor(http, authService, state) {
        this.http = http;
        this.authService = authService;
        this.state = state;
        this._scheduleList = [{}];
    }
    get apiUrl() {
        let url = this.state.getGlobalSetting("apiUrl");
        let apiUrl = "";
        if (!!url && url.length > 0) {
            apiUrl = url[0];
        }
        ;
        return apiUrl;
    }
    getRequestOption() {
        let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-type': 'application/json', 'Authorization': this.authService.getAuth().token });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
    }
    getUser() {
        return this.authService.getUserProfile();
    }
    getEmployeeSchedule(param) {
        let returnSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_subject__["Subject"]();
        this.http.post(this.apiUrl + '/getEmpScheduleList', param, this.getRequestOption())
            .flatMap(res => res.json())
            .subscribe((data) => {
            returnSubject.next(data);
            returnSubject.unsubscribe();
        }, Error => console.log(Error), () => {
        });
        return returnSubject;
    }
    getRoomSchedule(param) {
        let returnSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_subject__["Subject"]();
        this.http.post(this.apiUrl + '/getRoomScheduleList', param, this.getRequestOption())
            .flatMap(res => res.json())
            .subscribe((data) => {
            returnSubject.next(data);
            returnSubject.unsubscribe();
        }, Error => console.log(Error), () => {
        });
        //console.log("Api Response",returnSubject);
        return returnSubject;
    }
    getCustomerSchedule(param) {
        return this.http.post(this.apiUrl + '/GetCustomerSchedule', param, this.getRequestOption());
    }
    getGUID() {
        return this.http.get(this.apiUrl + '/getGuid', this.getRequestOption());
    }
    checkHoliday(param) {
        return this.http.post(this.apiUrl + '/checkHoliday', param, this.getRequestOption());
    }
    getTimeSlotForService(outletId, serviceId, appointmentDate) {
        let param = {
            outletId: outletId,
            serviceId: serviceId,
            appointmentDate: appointmentDate
        };
        return this.http.post(this.apiUrl + '/getTimeSlotForService', param, this.getRequestOption())
            .map((res) => res.json());
    }
};
ScheduleInputService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
    __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */], __WEBPACK_IMPORTED_MODULE_2__common_services_permission_authService_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__global_state__["a" /* GlobalState */]])
], ScheduleInputService);


/***/ }),

/***/ 1494:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1411);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(38)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/raw-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./schedule.scss", (function() {
			var newContent = require("!!../../../../node_modules/raw-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./schedule.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		}));
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose((function() { update(); }));
}

/***/ }),

/***/ 1495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__multiselect_component__ = __webpack_require__(1468);
/* unused harmony reexport AngularMultiSelect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clickOutside__ = __webpack_require__(1466);
/* unused harmony reexport ClickOutsideDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_filter__ = __webpack_require__(1467);
/* unused harmony reexport ListFilterPipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_item__ = __webpack_require__(1413);
/* unused harmony reexport Item */
/* unused harmony reexport TemplateRenderer */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return __WEBPACK_IMPORTED_MODULE_0__multiselect_component__["a"]; }));






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return MyException; }));
var MyException = /** @class */ (function () {
    function MyException(status, body) {
        this.status = status;
        this.body = body;
    }
    return MyException;
}());

//# sourceMappingURL=multiselect.model.js.map

/***/ }),

/***/ 1497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return NepaliDatePickerComponent; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repositories__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_disable_date_picker_disable_date_picker_service__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(41);






// declare var nepalidFormat
let NepaliDatePickerComponent_1 = class NepaliDatePickerComponent {
    constructor(elementRef, disableDateService, masterRepo, datePipe, masterService) {
        this.elementRef = elementRef;
        this.disableDateService = disableDateService;
        this.masterRepo = masterRepo;
        this.datePipe = datePipe;
        this.masterService = masterService;
        // public nepalidFormat: any[] = [];
        this.onChange = () => { };
        this.onTouch = () => { };
        this.disableBefore = "";
        this.id = "";
        this.label = "";
        this.disableDates = [];
        this.formatDates = [];
        this.dateControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        this.writeValue = (obj) => {
            this.dateControl.setValue(obj);
        };
        this.registerOnChange = (_fn) => {
            this.onChange = _fn;
        };
        this.registerOnTouched = (_fn) => {
            this.onTouch = _fn;
        };
        this.propagateChange = (value) => {
            this.onChange(value);
            this.onTouch(value);
            this.elementRef.nativeElement.dispatchEvent(new CustomEvent("change", { detail: { value: value }, bubbles: true }));
        };
    }
    changeToDate(value, format) {
        this.toDateBS = this.masterService.toBSDate(value);
        return this.toDateBS;
    }
    ngOnInit() {
        this.isNullOrEmpty(this.id);
    }
    ngAfterViewInit() {
        var self = this;
        jQuery(document).ready((function () {
            jQuery(document).on("click", `#${self.id}`, (function () {
                document.getElementById(`${self.id}Picker`).focus();
            }));
        }));
        jQuery(document).ready((function () {
            jQuery(document).on("focus", `#${self.id}Picker`, (function () {
                jQuery(`#${self.id}Picker`).nepaliDatePicker({
                    onChange: function () {
                        self.dateControl.setValue(jQuery(`#${self.id}Picker`).val());
                        self.propagateChange(self.dateControl.value);
                    },
                });
            }));
        }));
    }
    isNullOrEmpty(val) {
        if (typeof val !== "string") {
            throw Error("Invalid Type for Id");
        }
        if (val == "" || val == null || val == undefined) {
            throw Error("Invalid Id");
        }
    }
};
let NepaliDatePickerComponent = NepaliDatePickerComponent_1;
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
    __metadata('design:type', String)
], NepaliDatePickerComponent.prototype, "id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
    __metadata('design:type', String)
], NepaliDatePickerComponent.prototype, "label", void 0);
NepaliDatePickerComponent = NepaliDatePickerComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "nepali-date-picker",
        template: __webpack_require__(1502),
        styles: [__webpack_require__(1500)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["DatePipe"],
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(() => NepaliDatePickerComponent),
                multi: true,
            },
        ],
    }), 
    __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__services_disable_date_picker_disable_date_picker_service__["a" /* DisableDateService */], __WEBPACK_IMPORTED_MODULE_2__repositories__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_2__repositories__["a" /* MasterRepo */]])
], NepaliDatePickerComponent);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(13)))

/***/ }),

/***/ 1498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return NepaliDateModule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nepali_date_picker_component__ = __webpack_require__(1497);



let NepaliDateModule = class NepaliDateModule {
};
NepaliDateModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__nepali_date_picker_component__["a" /* NepaliDatePickerComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["ReactiveFormsModule"]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__nepali_date_picker_component__["a" /* NepaliDatePickerComponent */]]
    }), 
    __metadata('design:paramtypes', [])
], NepaliDateModule);


/***/ }),

/***/ 1499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return CustomerSelect; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__ = __webpack_require__(1378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_repositories_masterRepo_service__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_permission__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_src_facade_async__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_services_common_service__ = __webpack_require__(329);








let CustomerSelect = class CustomerSelect {
    constructor(router, masterService, _authService, fb, common) {
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
        this.customerChanged = new __WEBPACK_IMPORTED_MODULE_5__angular_common_src_facade_async__["a" /* EventEmitter */]();
        this.mobileChanged = new __WEBPACK_IMPORTED_MODULE_5__angular_common_src_facade_async__["a" /* EventEmitter */]();
        this.ncw = new __WEBPACK_IMPORTED_MODULE_5__angular_common_src_facade_async__["a" /* EventEmitter */]();
        this.historyChange = new __WEBPACK_IMPORTED_MODULE_5__angular_common_src_facade_async__["a" /* EventEmitter */]();
        this.timeout = null;
        this.isSubmitting = false;
        var setting = this._authService.getSetting();
        this.EnableCustomerEntryInAppointment = setting.EnableCustomerEntryInAppointment;
    }
    ngOnInit() {
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
        this.masterService.getFormPreferences("CustomerEntryCompact").subscribe((data) => {
            var result = data.json();
            this.common.setFormPreference(this.customerForm, result.fields);
        });
    }
    getCustomerList(name, mobile) {
        var pageNumer = 1;
        var rowCount = 10;
        var totalPages = 1;
        this.CustomerList = [];
        this.masterService.getPagedCustomerList(pageNumer, rowCount, name, mobile).subscribe((data) => {
            this.CustomerList.push(data);
        }, (Error) => {
            this.masterService.handleWebError(Error);
        }, () => {
            this.masterService._customerList = this.CustomerList;
        });
    }
    customer_keyup(event) {
        if (!event.keyCode)
            return;
        clearTimeout(this.timeout);
        var $this = this;
        this.timeout = setTimeout((function () {
            $this.getCustomerList(event.target.value, null);
        }), 500);
    }
    mobile_keyup(event) {
        if (!event.keyCode)
            return;
        clearTimeout(this.timeout);
        var $this = this;
        this.timeout = setTimeout((function () {
            $this.getCustomerList(null, event.target.value);
        }), 500);
    }
    customerChange(event) {
        var customer = this.CustomerList.filter(x => event.target.value == x.NAME)[0];
        if (customer) {
            this.MobileInput = customer.MOBILE;
            this.SelectedCustomer = customer;
            this.customerChanged.emit(customer);
        }
    }
    mobileChange(event) {
        var customer = this.CustomerList.filter(x => event.target.value == x.MOBILE)[0];
        if (customer) {
            this.CustomerInput = customer.NAME;
            this.SelectedCustomer = customer;
            this.customerChanged.emit(customer);
        }
    }
    onAddNewCustomer() {
        if (this.EnableCustomerEntryInAppointment) {
            this.CustomerEntryVisible = true;
        }
        else {
            this.router.navigate(['/pages/masters/cus/detail-cus', { mode: "add", returnUrl: "/pages/schedule/scheInput" }]);
        }
    }
    redirectToPatient() {
        if (this.CustomerEntryVisible) {
            this.CustomerEntryVisible = false;
        }
    }
    saveCustomer() {
        try {
            if (!this.customerForm.valid) {
                this.isSubmitting = true;
                return;
            }
            this.DialogMessage = "Saving Data please wait...";
            this.childModal.show();
            let cus = this.customerForm.value;
            //console.log("CUSTOMER DETAILS", cus);
            let sub = this.masterService.postmaster("add", cus, "/saveCustomer")
                .subscribe(data => {
                if (data.status == 'ok') {
                    //Displaying dialog message for save with timer of 1 secs
                    this.DialogMessage = "Data Saved Successfully";
                    this.masterService.refreshCustomerList();
                    this.ncw.emit(this.common.getFormValue(this.customerForm, "Patient_Weight"));
                    cus.CUSID = data.result.cusid;
                    this.customerChanged.emit(cus);
                    const __this = this;
                    this.CustomerInput = data.result.name;
                    this.MobileInput = data.result.mobile;
                    setTimeout(() => {
                        __this.childModal.hide();
                        __this.CustomerEntryVisible = false;
                        __this.mobileNo = this.common.getFormValue(this.customerForm, "MOBILE");
                        __this.SelectedCustomer = __this.SelectedCustomer;
                        __this.CustomerList = __this.masterService._customerList;
                        __this.onSearchChange(__this.mobileNo);
                        this.isSubmitting = false;
                    }, 1000);
                }
                else {
                    this.DialogMessage = data.result;
                    setTimeout(() => {
                        this.childModal.hide();
                    }, 3000);
                }
            }, (error) => {
                alert(error);
            });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    }
    changeDOB(event) {
        var dob = event.target.value;
        let birthDate = new Date(dob);
        //console.log("NEW CUSTOMER DOB", this.newcustomerDOB);
        let timeDiff = Math.abs(Date.now() - birthDate.getTime());
        let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
        //console.log('AGE',age)
        this.customerForm.get("AGE").setValue(age);
    }
    onMobileChange(e) {
        if (e.target.value.length >= 10) {
            e.target.value = e.target.value.substring(0, 10);
        }
    }
    onSearchChange(searchValue) {
        var cus = this.CustomerList.find(x => x.MOBILE == searchValue);
        //console.log("cus",cus);
        if (cus != null) {
            this.SelectedCustomer = cus;
            this.mobileNo = cus.MOBILE;
            this.customerChanged.emit(cus);
        }
        //console.log(this.SelectedCustomer)
    }
    onBarcodeChange(searchValue) {
        var cus = this.CustomerList.find(x => x.BARCODE == searchValue);
        //console.log("barcode",cus);
        if (cus != null) {
            this.SelectedCustomer = cus;
            this.customerChanged.emit(cus);
        }
    }
    selectedCustomerChanged(e) {
        this.customerChanged.emit(this.SelectedCustomer);
        this.mobileNo = this.SelectedCustomer.MOBILE;
    }
    selectCustomer(event) {
        //console.log('EVENT', event);
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["b" /* ModalDirective */])
], CustomerSelect.prototype, "childModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
    __metadata('design:type', Object)
], CustomerSelect.prototype, "customerChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
    __metadata('design:type', Object)
], CustomerSelect.prototype, "mobileChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
    __metadata('design:type', Object)
], CustomerSelect.prototype, "ncw", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
    __metadata('design:type', Object)
], CustomerSelect.prototype, "historyChange", void 0);
CustomerSelect = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'customer-select',
        styles: [__webpack_require__(1411)],
        template: __webpack_require__(1607)
    }), 
    __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_4__common_services_permission__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_7__common_services_common_service__["a" /* CommonService */]])
], CustomerSelect);


/***/ }),

/***/ 1500:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1501:
/***/ (function(module, exports) {

module.exports = ".ng2-smart-table-container table.ng2-smart-table{color:#666}.ng2-smart-table-container table.ng2-smart-table th,.ng2-smart-table-container table.ng2-smart-table td{border:1px solid #dcdcdc !important;line-height:35px;vertical-align:middle}.ng2-smart-table-container table.ng2-smart-table input{line-height:1.5 !important}.ng2-smart-table-container table.ng2-smart-table tbody tr:hover{background:rgba(0,0,0,0.03)}.ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link{font-size:14px !important;color:#666;font-weight:500}.ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link.sort{font-weight:500 !important}.ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link.sort::after{border-bottom-color:#666 !important}.ng2-smart-table-container table.ng2-smart-table .ng2-smart-actions{width:70px;text-align:center}.ng2-smart-table-container table.ng2-smart-table .ng2-smart-actions .actions{float:none;text-align:center}.ng2-smart-table-container table.ng2-smart-table a.ng2-smart-action{font-size:14px !important;color:#666;padding:0 5px;display:inline-block}.ng2-smart-table-container table.ng2-smart-table a.ng2-smart-action.ng2-smart-action-add-add{font-size:0px !important}nav.ng2-smart-pagination-nav{display:flex;justify-content:center}\n"

/***/ }),

/***/ 1502:
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\" style=\"height: 30px, i !important;\">\r\n\r\n  <input type=\"text\" class=\"form-control\" [formControl]=\"dateControl\" placeholder=\"{{label}}\"\r\n    id=\"{{id}}Picker\" (mouseover)=\"$event.preventDefault()\" (keydown)=\"$event.preventDefault()\">\r\n  <span class=\"input-group-addon\" style=\"padding-top:5px\">\r\n    <i class=\"fa fa-calendar\" aria-hidden=\"true\" id=\"{{id}}\" style=\"cursor: pointer;\"></i>\r\n  </span>\r\n</div>"

/***/ }),

/***/ 1537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return AppointmentRequestList; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__ = __webpack_require__(1378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_style_loader_masters_components_smartTables_scss__ = __webpack_require__(1410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_style_loader_masters_components_smartTables_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_style_loader_masters_components_smartTables_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_repositories_masterRepo_service__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_state__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__theme_pipes_label_pipe__ = __webpack_require__(328);









let AppointmentRequestList = class AppointmentRequestList {
    constructor(service, _authService, router, state, labelPipe) {
        this.service = service;
        this._authService = _authService;
        this.router = router;
        this.state = state;
        this.labelPipe = labelPipe;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.userBranches = [];
        this.settings = {
            mode: 'external',
            delete: null,
            view: null,
            columns: {
                customerName: {
                    title: this.state.getGlobalSetting("label-dictionary").filter(item => item.key === 'customer')[0].value,
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
        this.source = new __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__["LocalDataSource"]();
        this.userBranches = this._authService.getUserProfile().branches;
        this.selectedBranch = this._authService.getUserProfile().defaultBranch;
        this.branchChanged();
    }
    onEditClick(event) {
        console.log(event);
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            this.router.navigate(["/pages/schedule/request-detail", { cartId: event.data.cartId, mode: "edit", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to edit Customer.";
            this.childModal.show();
        }
    }
    branchChanged() {
        let Clist = [];
        this.service
            .GetAppointmetRequests(encodeURIComponent(this.selectedBranch))
            .subscribe((data) => {
            Clist.push(data);
        }, (Error) => console.log(Error), () => {
            //console.log(Clist, "CLIST NG2")
            this.source.load(Clist);
            console.log(this.source);
        });
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__["b" /* ModalDirective */])
], AppointmentRequestList.prototype, "childModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('deleteModal'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__["b" /* ModalDirective */])
], AppointmentRequestList.prototype, "deleteModal", void 0);
AppointmentRequestList = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'appointment-request-list',
        template: __webpack_require__(1602),
        providers: [],
    }), 
    __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_5__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_7__global_state__["a" /* GlobalState */], __WEBPACK_IMPORTED_MODULE_8__theme_pipes_label_pipe__["a" /* LabelPipe */]])
], AppointmentRequestList);


/***/ }),

/***/ 1538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return AppointmentRequest; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__ = __webpack_require__(1378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scheduleInput_service__ = __webpack_require__(1492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_style_loader_schedule_scss__ = __webpack_require__(1494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_style_loader_schedule_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_style_loader_schedule_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_repositories_masterRepo_service__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_services_permission__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_services_time_format_service__ = __webpack_require__(644);









let AppointmentRequest = class AppointmentRequest {
    constructor(router, masterService, scheduleService, activatedRoute, _authService, datePipe, timeFormatService) {
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
        this.employeeList = [];
        this.formatDates = [];
        this.userBranches = [];
        this.empSetting = {};
        let today = new Date().toDateString();
        this.appRequest.outlet = {};
        this.appRequest.Customer = {};
        const setting = this._authService.getSetting();
        if (!!this.activatedRoute.snapshot.params["returnUrl"]) {
            this.returnUrl = this.activatedRoute.snapshot.params["returnUrl"];
        }
        else
            this.returnUrl = "/pages/schedule/mastersche";
        if (!!this.activatedRoute.snapshot.params["mode"]) {
            this.mode = this.activatedRoute.snapshot.params["mode"];
        }
        this.empSetting = {
            enableCheckAll: true,
            text: 'Select Employees',
            enableSearchFilter: true,
            labelKey: "NAME",
            primaryKey: "EMPLOYEEID",
            disabled: false,
            disabledField: 'Inactive',
        };
    }
    get branchId() {
        try {
            return this.appRequest.outlet.branchId;
        }
        catch (e) {
            console.error(e);
            return null;
        }
    }
    getServices(branchId) {
        this.masterService.getServices(branchId).subscribe(services => {
            this.serviceList = services;
            this.appRequest.items.forEach(element => {
                element.service = this.serviceList.filter(x => x.SERVICEID == element.serviceId)[0] || {};
            });
        });
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.roomList = [];
        this.employeeList = [];
        let cartId = this.activatedRoute.snapshot.params['cartId'];
        this.getRequestDetail(cartId);
        let user = this._authService.getUserProfile();
        this.userBranches = user.branches;
    }
    getRequestDetail(cartId) {
        this.masterService.GetAppointmetDetail(encodeURIComponent(cartId)).subscribe(data => {
            this.appRequest = data;
            const formattedDate = this.datePipe.transform(data.appointmentDate, "yyyy-MM-dd");
            console.log(formattedDate);
            this.appRequest.miti = this.masterService.toBSDate(formattedDate);
            this.appRequest.items.forEach(element => {
                this.getEmployees(this.branchId, this.appRequest.appointmentDate, element);
                this.getRooms(this.branchId, this.appRequest.appointmentDate, element);
            });
            this.getServices(this.branchId);
        }, (error) => __awaiter(this, void 0, void 0, (function* () {
            this.showMessage((yield error.json()).result, 3000);
            this.router.navigate([this.returnUrl]);
        })));
    }
    getEmployees(branchId, appDate, service) {
        service.employeeList = [];
        this.masterService
            .getAvailableEmployees(branchId, service.serviceId, appDate, service.appointmentTime)
            .subscribe((response) => {
            service.employeeList.push(response);
        });
    }
    getRooms(branchId, appDate, service) {
        service.roomList = [];
        this.masterService
            .getAvailableRooms(branchId, service.serviceId, appDate, service.appointmentTime)
            .subscribe((response) => {
            service.roomList.push(response);
        });
    }
    SaveClickEvent() {
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        this.onsubmit();
    }
    hideChildModal() {
        this.childModal.hide();
    }
    onsubmit() {
        try {
            let body = {
                CUSTOMER: this.appRequest.Customer,
                branch: this.appRequest.outlet,
                DATE: this.appRequest.appointmentDate,
                GUID: this.appRequest.cartId,
                STATUS: 4,
                multipleServiceList: this.appRequest.items.map((s, index) => ({
                    EMPLOYEE: s.employee,
                    ROOM: s.room,
                    SERVICE: s.service,
                    SNO: index,
                    PAX: 1,
                    STARTTIME: s.appointmentTime,
                }))
            };
            this.masterService
                .postmaster("add", body, "/saveSchedule")
                .subscribe((data) => {
                if (data.status == "ok") {
                    this.masterService.ApproveAppointment(this.appRequest.cartId, data.result).subscribe(appResponse => {
                        if (appResponse.status == "ok") {
                            this.showMessage("Data Saved Successfully.", 1000);
                            this.router.navigate([this.returnUrl]);
                        }
                        else {
                            this.showMessage(data.result);
                        }
                    }, error => alert(error));
                }
                else {
                    this.showMessage(data.result);
                }
            }, (error) => {
                alert(error);
            });
        }
        catch (e) {
            alert(e);
        }
    }
    onCancel() {
        this.router.navigate([this.returnUrl]);
    }
    showMessage(message, closeAfter = 3000) {
        this.DialogMessage = message;
        if (!this.childModal.isShown)
            this.childModal.show();
        if (closeAfter >= 0) {
            setTimeout(() => {
                this.childModal.hide();
            }, closeAfter);
        }
    }
    editTime(app) {
        this.scheduleService.getTimeSlotForService(this.appRequest.outlet.branchId, app.serviceId, this.appRequest.appointmentDate).subscribe((response) => {
            if (response.status == "ok") {
                app.freeBlocks = response.result.map((x) => x);
            }
        });
        app.editTime = true;
    }
    onTimeBlockChange(app) {
        if (app.selectedTimeBlock && typeof app.selectedTimeBlock === 'object' && 'empList' in app.selectedTimeBlock && 'roomList' in app.selectedTimeBlock) {
            app.employeeList = app.selectedTimeBlock.empList;
            app.roomList = app.selectedTimeBlock.roomList;
            app.displayTime = app.selectedTimeBlock.Start;
            app.appointmentTime = this.timeFormatService.to24HourFormat(app.displayTime);
            app.editTime = false;
        }
    }
    confirmTime(app) {
        if (app.selectedTimeBlock === "custom") {
            app.displayTime = this.timeFormatService.to12HourFormat(app.appointmentTime);
            this.getEmployees(this.branchId, this.appRequest.appointmentDate, app);
            this.getRooms(this.branchId, this.appRequest.appointmentDate, app);
        }
        app.editTime = false;
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("childModal"), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["b" /* ModalDirective */])
], AppointmentRequest.prototype, "childModal", void 0);
AppointmentRequest = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "requestDetail",
        styles: [__webpack_require__(1411)],
        template: __webpack_require__(1603),
        providers: [__WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"]],
    }), 
    __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_3__scheduleInput_service__["a" /* ScheduleInputService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_6__common_services_permission__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_8__common_services_time_format_service__["a" /* TimeFormatService */]])
], AppointmentRequest);


/***/ }),

/***/ 1539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return CheckIn; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__ = __webpack_require__(1378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_style_loader_schedule_scss__ = __webpack_require__(1494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_style_loader_schedule_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_style_loader_schedule_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_permission__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_services_disable_date_picker_disable_date_picker_service__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(41);








let CheckIn = class CheckIn {
    constructor(router, masterService, elementRef, activatedRoute, _authService, disableDateService, masterRepo, datePipe) {
        this.router = router;
        this.masterService = masterService;
        this.elementRef = elementRef;
        this.activatedRoute = activatedRoute;
        this._authService = _authService;
        this.disableDateService = disableDateService;
        this.masterRepo = masterRepo;
        this.datePipe = datePipe;
        //Check-In
        this.checkIn = {};
        //Check-In
        this.DialogMessage = "Saving data please wait ...";
        this.mode = "";
        this.modeTitle = "";
        this.subcriptions = [];
        this.user = {};
        this.SNO = 0;
        this.CustomerList = [];
        this.ServiceList = [];
        this.roomList = [];
        this.employeeList = [];
        this.bookedEmployee = {};
        this.formatDates = [];
        this.userBranches = [];
        this.addOnServices = [];
        this.appointments = [];
        this.serviceSetting = {};
        let today = new Date().toDateString();
        var dayjs = __webpack_require__(1622);
        const formattedDate = dayjs(today).format("YYYY-MM-DD");
        this.checkIn.date = formattedDate;
        this.checkIn.miti = this.masterService.toBSDate(this.checkIn.date);
        const setting = this._authService.getSetting();
        if (!!this.activatedRoute.snapshot.params["returnUrl"]) {
            this.returnUrl = this.activatedRoute.snapshot.params["returnUrl"];
        }
        else
            this.returnUrl = "/pages/schedule/mastersche";
        if (!!this.activatedRoute.snapshot.params["mode"]) {
            this.mode = this.activatedRoute.snapshot.params["mode"];
        }
        this.router.events.subscribe((val) => {
            let data = {
                GUID: this.checkIn.GUID,
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
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.roomList = [];
        this.CustomerList = [];
        this.employeeList = [];
        this.ServiceList = [];
        let user = this._authService.getUserProfile();
        this.userBranches = user.branches;
        if (this.userBranches) {
            this.checkIn.branch = this.userBranches.find((x) => x.branchId === user.defaultBranch);
        }
        this.getServices(user.defaultBranch);
        if (this.masterService._customerList.length > 0) {
            this.CustomerList = this.masterService._customerList;
        }
        else {
            this.masterService.getCustomerList().subscribe((data) => {
                this.CustomerList.push(data);
            }, (Error) => console.log(Error), () => {
                this.masterService._customerList = this.CustomerList;
            });
        }
    }
    getServices(branchId) {
        this.masterService.getServices(branchId).subscribe(services => {
            this.ServiceList = services;
        });
    }
    getEmployees(branchId, service, index) {
        this.masterService
            .getEmployeeListNew(branchId)
            .subscribe(branchEmp => {
            let serviceEmp = service.employees;
            this.addOnServices[index].employeeList = branchEmp.filter((bEmp) => serviceEmp.some((emp) => bEmp.EMPLOYEEID == emp.id));
        });
    }
    getRooms(branchId, service, index) {
        this.masterService.getRoomListNew(branchId).subscribe(branchRoom => {
            let serviceRoom = service.rooms;
            this.addOnServices[index].roomList = branchRoom.filter((bRoom) => serviceRoom.some((room) => bRoom.ROOMNO == room.id));
        });
    }
    SaveClickEvent() {
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        this.onsubmit();
    }
    saveChildModal(replacementEmp) {
        this.childEmployeeModal.hide();
        this.DialogMessage = "Updating Data please wait...";
        this.childModal.show();
        try {
            let sub = this.masterService
                .postmaster("addEdit", {
                replacementEmployee: replacementEmp,
                ToBeReplacedEmployee: this.bookedEmployee,
            }, "/postReplacementEmployee")
                .subscribe((data) => {
                if (data.status == "ok") {
                    //Displaying dialog message for save with timer of 1 secs
                    this.DialogMessage = "Data Exchanges Successfully";
                    setTimeout(() => {
                        this.childModal.hide();
                    }, 1000);
                }
                else {
                    this.DialogMessage = data.result;
                    setTimeout(() => {
                        this.childModal.hide();
                    }, 3000);
                }
            }, (error) => {
                alert(error);
            });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    }
    hideChildModal() {
        this.childModal.hide();
    }
    onsubmit() {
        try {
            let abc = [];
            abc = this.addOnServices.map((x) => ({
                service: { id: x.service.SERVICEID, name: x.service.DESCRIPTION },
                room: x.room ? { id: x.room.ROOMNO, name: x.room.DESCRIPTION } : null,
                employee: x.employee
                    ? { id: x.employee.EMPLOYEEID, name: x.employee.NAME }
                    : null,
            }));
            this.checkIn.Services = [...this.appointments, ...abc];
            let sub = this.masterService
                .postmaster(this.mode, this.checkIn, "/saveCheckIn")
                .subscribe((data) => {
                if (data.status == "ok") {
                    //Displaying dialog message for save with timer of 1 secs
                    this.DialogMessage = "Data Saved Successfully";
                    setTimeout(() => {
                        this.childModal.hide();
                        this.router.navigate([this.returnUrl]);
                    }, 1000);
                }
                else {
                    this.DialogMessage = data.result;
                    setTimeout(() => {
                        this.childModal.hide();
                    }, 3000);
                }
            }, (error) => {
                alert(error);
            });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    }
    onCancel() {
        this.router.navigate([this.returnUrl]);
    }
    customerChanged(e) {
        this.checkIn.CUSTOMER = e;
        this.GetAppointmentForCheckIn();
    }
    GetAppointmentForCheckIn() {
        if (!this.checkIn.CUSTOMER)
            return;
        let model = {
            CUSID: this.checkIn.CUSTOMER.CUSID,
            outletId: this.checkIn.branch.branchId,
            FDate: this.checkIn.date,
        };
        this.masterService.GetAppointmentForCheckIn(model).subscribe((response) => {
            this.appointments = response.json().result;
        }, (error) => {
            let response = JSON.parse(error._body);
            this.DialogMessage = response.result;
            this.childModal.show();
            setTimeout(() => {
                this.checkIn.CUSTOMER = null;
                this.childModal.hide();
            }, 3000);
        });
    }
    addNewRow() {
        this.addOnServices.push({});
    }
    serviceChangeEvent(e, index) {
        this.addOnServices[index].service = e[0];
        let branchId = this.checkIn.branch.branchId;
        this.getEmployees(branchId, e[0], index);
        this.getRooms(branchId, e[0], index);
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("childEmployeeModal"), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["b" /* ModalDirective */])
], CheckIn.prototype, "childEmployeeModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("childModal"), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["b" /* ModalDirective */])
], CheckIn.prototype, "childModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("deleteModal"), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["b" /* ModalDirective */])
], CheckIn.prototype, "deleteModal", void 0);
CheckIn = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "checkIn",
        styles: [__webpack_require__(1411)],
        template: __webpack_require__(1604),
        providers: [__WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"]],
    }), 
    __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__common_services_permission__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__common_services_disable_date_picker_disable_date_picker_service__["a" /* DisableDateService */], __WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"]])
], CheckIn);


/***/ }),

/***/ 1540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return CheckInList; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__ = __webpack_require__(1378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_style_loader_masters_components_smartTables_scss__ = __webpack_require__(1410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_style_loader_masters_components_smartTables_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_style_loader_masters_components_smartTables_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_repositories_masterRepo_service__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_state__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__theme_pipes_label_pipe__ = __webpack_require__(328);









let CheckInList = class CheckInList {
    constructor(service, _authService, router, state, labelPipe) {
        this.service = service;
        this._authService = _authService;
        this.router = router;
        this.state = state;
        this.labelPipe = labelPipe;
        this.query = '';
        this.DialogMessage = "You are not authorized";
        this.settings = {
            mode: 'external',
            delete: null,
            view: null,
            columns: {
                CUSTOMER: {
                    title: this.state.getGlobalSetting("label-dictionary").filter(item => item.key === 'customer')[0].value,
                    type: 'string',
                    valuePrepareFunction: (CUSTOMER) => {
                        return CUSTOMER.NAME;
                    },
                    filterFunction: (Patient, search) => {
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
        this.source = new __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__["LocalDataSource"]();
        let Clist = [];
        let user = this._authService.getUserProfile();
        this.service
            .GetAllCheckIns(encodeURIComponent(user.defaultBranch))
            .subscribe((data) => {
            Clist.push(data);
        }, (Error) => console.log(Error), () => {
            //console.log(Clist, "CLIST NG2")
            this.source.load(Clist);
            console.log(this.source);
        });
    }
    onEditClick(event) {
        console.log(event);
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            this.router.navigate(["/pages/schedule/checkOut", { id: event.data.checkInId, mode: "edit", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to edit Customer.";
            this.childModal.show();
        }
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__["b" /* ModalDirective */])
], CheckInList.prototype, "childModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('deleteModal'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__["b" /* ModalDirective */])
], CheckInList.prototype, "deleteModal", void 0);
CheckInList = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'check-in-list',
        template: __webpack_require__(1605),
        providers: [],
    }), 
    __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_5__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_7__global_state__["a" /* GlobalState */], __WEBPACK_IMPORTED_MODULE_8__theme_pipes_label_pipe__["a" /* LabelPipe */]])
], CheckInList);


/***/ }),

/***/ 1541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return CheckOutEntry; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__ = __webpack_require__(1378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_style_loader_schedule_scss__ = __webpack_require__(1494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_style_loader_schedule_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_style_loader_schedule_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_permission__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CustomerSelect_customerSelect_component__ = __webpack_require__(1499);







let CheckOutEntry = class CheckOutEntry {
    constructor(router, masterService, activatedRoute, _authService) {
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
    ngOnInit() {
        let sid = this.activatedRoute.snapshot.params['id'];
        if (this.mode != 'add') {
            this.masterService.postmaster(this.mode, { checkInId: sid }, "/GetDataForCheckOut").subscribe(data => {
                if (data.status == 'ok') {
                    if (data.result != null) {
                        this.model = data.result;
                        this.model.totalQty = this.model.checkOutServices.reduce((a, b) => a + b.quantity, 0);
                        this.model.totAmnt = this.model.checkOutServices.reduce((a, b) => a + b.amount, 0);
                        this.model.discount = this.model.checkOutServices.reduce((a, b) => a + b.discount, 0);
                        this.model.vat = this.model.checkOutServices.reduce((a, b) => a + b.vat, 0);
                        this.model.netAmnt = this.model.checkOutServices.reduce((a, b) => a + b.netAmount, 0);
                        this.model.remarks = data.result.remarks;
                    }
                }
                else {
                    this.DialogMessage = data.result;
                    setTimeout(() => {
                        this.childModal.hide();
                    }, 3000);
                }
            }, error => { alert(error); });
        }
    }
    SaveClickEvent() {
        this.DialogMessage = "Saving Data please wait...";
        this.childModal.show();
        this.onsubmit();
    }
    saveChildModal(replacementEmp) {
        this.DialogMessage = "Updating Data please wait...";
        this.childModal.show();
    }
    hideChildModal() {
        this.childModal.hide();
    }
    onsubmit() {
        try {
            let sub = this.masterService.postmaster('add', this.model, "/saveCheckOut")
                .subscribe(data => {
                if (data.status == 'ok') {
                    //Displaying dialog message for save with timer of 1 secs
                    this.DialogMessage = "Data Saved Successfully";
                    setTimeout(() => {
                        this.childModal.hide();
                        this.router.navigate([this.returnUrl]);
                    }, 1000);
                }
                else {
                    this.DialogMessage = data.result;
                    setTimeout(() => {
                        this.childModal.hide();
                    }, 3000);
                }
            }, error => { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    }
    onCancel() {
        let new_date = this.masterService.getDate();
        this.masterService.saveDate(new_date);
        this.router.navigate([this.returnUrl]);
    }
    DeleteConformation() {
        this.deleteModal.show();
    }
    DeleteEvent() {
        this.deleteModal.hide();
        this.DialogMessage = "Deleting this schedule please wait...";
        this.childModal.show();
        let sub = this.masterService.postmaster('delete', this.model, "/DeleteSchedule")
            .subscribe(data => {
            //console.log(data);
            if (data.status == 'ok') {
                this.DialogMessage = "Delete Successfull...";
                this.childModal.hide();
                this.router.navigate([this.returnUrl]);
            }
            else {
                this.DialogMessage = data.result;
                setTimeout(() => {
                    this.childModal.hide();
                }, 3000);
            }
        }, error => { alert(error); });
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childPreviewModal'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["b" /* ModalDirective */])
], CheckOutEntry.prototype, "childPreviewModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["b" /* ModalDirective */])
], CheckOutEntry.prototype, "childModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('deleteModal'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["b" /* ModalDirective */])
], CheckOutEntry.prototype, "deleteModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__CustomerSelect_customerSelect_component__["a" /* CustomerSelect */]), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_6__CustomerSelect_customerSelect_component__["a" /* CustomerSelect */])
], CheckOutEntry.prototype, "CustomerSelect", void 0);
CheckOutEntry = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'check-out',
        styles: [__webpack_require__(1411)],
        template: __webpack_require__(1606),
    }), 
    __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__common_services_permission__["a" /* AuthService */]])
], CheckOutEntry);


/***/ }),

/***/ 1542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return FollowUp; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_style_loader_masters_components_smartTables_scss__ = __webpack_require__(1410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_style_loader_masters_components_smartTables_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_style_loader_masters_components_smartTables_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forms_components_inputs_components_datepicker_datepicker_component__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forms_components_inputs_components_timepicker_timepicker_component__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__forms_components_inputs_components_employee_selector_employee_selector_component__ = __webpack_require__(646);









let FollowUp = class FollowUp {
    constructor(service, _authService, router) {
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
                    type: 'string',
                    editor: {
                        type: 'custom',
                        component: __WEBPACK_IMPORTED_MODULE_8__forms_components_inputs_components_employee_selector_employee_selector_component__["a" /* EmployeeSelector */]
                    }
                },
                TreatmentDate: {
                    title: 'Treatment Date',
                    type: 'date',
                    editable: false
                },
                FollowupDate: {
                    title: 'Follow-Up Date',
                    type: 'string',
                    editor: {
                        type: 'custom',
                        component: __WEBPACK_IMPORTED_MODULE_6__forms_components_inputs_components_datepicker_datepicker_component__["a" /* DatePicker */]
                    }
                },
                Time: {
                    title: 'Time',
                    type: 'string',
                    editor: {
                        type: 'custom',
                        component: __WEBPACK_IMPORTED_MODULE_7__forms_components_inputs_components_timepicker_timepicker_component__["a" /* TimePicker */]
                    }
                },
            }
        };
        this.data = [];
        this.subcriptions = [];
        this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["LocalDataSource"]();
        this.source.load(this.data);
    }
    OnDateChangeEvent(v) {
        this.data = [];
        this.service.getFollowUpList(v).subscribe((data) => {
            this.data.push(data);
        }, Error => console.log(Error), () => {
            //console.log(this.data)
            this.source.load(this.data);
        });
    }
    ngOnInit() {
        this.OnDateChangeEvent(new Date());
    }
};
FollowUp = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'followup',
        template: __webpack_require__(1608),
        providers: [],
    }), 
    __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_4__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
], FollowUp);


/***/ }),

/***/ 1543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return MasterSchedule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__ = __webpack_require__(1378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scheduleInput_service__ = __webpack_require__(1492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_style_loader_schedule_scss__ = __webpack_require__(1494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_style_loader_schedule_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_style_loader_schedule_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_repositories_masterRepo_service__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_services_permission_authService_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_export_as__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ScheduleSearch_customer_all_schedule_component__ = __webpack_require__(1545);










let MasterSchedule = class MasterSchedule {
    constructor(_authService, exportAsService, router, scheduleService, masterRepo, datePipe) {
        this._authService = _authService;
        this.exportAsService = exportAsService;
        this.router = router;
        this.scheduleService = scheduleService;
        this.masterRepo = masterRepo;
        this.datePipe = datePipe;
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
        this.exportAsConfig = {
            type: 'pdf',
            elementIdOrContent: 'employeeSchedule'
        };
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
        let starttime = st;
        let ap = stp.toUpperCase();
        for (let h = st; h < ct; h++) {
            let pred = "AM";
            if (h >= 12) {
                pred = "PM";
            }
            h;
            this.hourHeaderList.push((h > 12 ? (h - 12) : h == 0 ? 12 : h) + pred);
        }
        this.noOfTimeHeaderInHour = ct - st;
        this.totalNoOfMinCell = this.noOfTimeHeaderInHour * this.SectionPerHour;
        for (let j = 1; j <= this.noOfTimeHeaderInHour; j++) {
            if (starttime >= 12) {
                ap = "PM";
            }
            for (let i = 0; i < this.SectionPerHour; i++) {
                this.minList.push({ min: i * this.TimeLineBlock, booked: 0, startTime: starttime, minPart: i + 1, ampm: ap, colspan: 1 });
            }
            if (starttime == 12) {
                starttime = 0;
                ap = "PM";
            }
            starttime++;
        }
        this.userBranches = this._authService.getUserProfile().branches;
        this.selectedBranch = this._authService.getUserProfile().defaultBranch;
    }
    changeEntryDate(value, format) {
        if (format == "AD") {
            this.ScheduleDateBS = this.masterRepo.toBSDate(value);
            this.OnDateChangeEvent(value);
        }
        else if (format == "BS") {
            this.ScheduleDateAD = this.masterRepo.toADDate(value);
            this.OnDateChangeEvent(this.ScheduleDateAD);
        }
    }
    OnDateChangeEvent(v) {
        this.searchCustomer = '';
        this.ScheduleDate = v;
        this.employeeList = [];
        this.roomList = [];
        this.et = [];
        this.rt = [];
        this.scheduleService.getEmployeeSchedule({ FDate: v, branchId: this.selectedBranch }).subscribe(data => {
            this.et = data;
            //console.log("et value", this.et);
            this.emptimeTableMaker();
        }, Error => {
            try {
                let t = Error.json();
                //console.log(t);
                if (t.result == "Authorization Failed") {
                    this.router.navigate(['/login', this.router.url]);
                }
                else {
                    alert("Error in Loading Data:" + t.result);
                }
            }
            catch (e) {
                alert(e);
            }
        });
        this.scheduleService.getRoomSchedule({ FDate: v, branchId: this.selectedBranch }).subscribe(data => {
            this.rt = data;
            //console.log("room",this.rt);
            //console.log("rt.DATE",this.rt.DATE)
            var rtNewDate = new Date(this.rt.DATE);
            this.rtFormat = this.datePipe.transform(rtNewDate, "yyyy-MM-dd");
            this.rtFormatNepali = this.masterRepo.toBSDate(this.rtFormat);
            this.roomtimeTableMaker();
            for (let r of this.rt.ROOMS) {
                let bt = r.BOOKEDTIMES;
                //console.log("before",r)
                r.BOOKEDTIMES = bt.sort((x, y) => new Date(x.STARTDATETIME).getTime() - new Date(y.STARTDATETIME).getTime());
            }
        });
        $('div#tblSchedule').scrollLeft(this.DefaultTimeLineScroll);
    }
    ngOnInit() {
        let date = new Date();
        this.ScheduleDateAD = `${date.getFullYear().toString()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
        this.changeEntryDate(this.ScheduleDateAD, 'AD');
    }
    customerSearchChange(event) {
        this.childCustomerSchedule.showDialog();
    }
    roomCellClick(m) {
        //console.log(m);
    }
    ngAfterViewInit() {
        //$(' <script type="text/javascript" src="../../assets/js/jquery-ui.js"></script>').appendTo(document.body);
        $(" <script> (function() { var elem = document.createElement('input'); elem.setAttribute('type', 'date');if ( elem.type === 'text' ) {$('#date').datepicker(); }})();</script>").appendTo(document.body);
        $('div#tblSchedule').scrollLeft(this.DefaultTimeLineScroll);
    }
    roomtimeTableMaker() {
        this.roomList = [];
        for (let e of this.rt.ROOMS) {
            this.mList = JSON.parse(JSON.stringify(this.minList));
            for (let b of e.BOOKEDTIMES) {
                //console.log(b);
                this.setBookedInCell(this.mList, b.STARTTIME, b.ENDTIME, b.TIMEDURATION_IN_MIN, b.EMPLOYEE, b.SERVICE, b.CUSTOMER, b.SCHEDULEID, b.STATUS);
            }
            this.removeCellToSplice();
            this.roomList.push({ ID: e.ROOMNO, NAME: e.DESCRIPTION, minList: this.mList });
        }
    }
    emptimeTableMaker() {
        this.employeeList = [];
        for (let e of this.et.EMPLOYEES) {
            this.mList = JSON.parse(JSON.stringify(this.minList));
            for (let b of e.BOOKEDTIMES) {
                this.setBookedInCell(this.mList, b.STARTTIME, b.ENDTIME, b.TIMEDURATION_IN_MIN, b.ROOM, b.SERVICE, b.CUSTOMER, b.SCHEDULEID, b.STATUS);
            }
            this.removeCellToSplice();
            //console.log({ mlist: this.mList });
            this.employeeList.push({ ID: e.EMPLOYEEID, NAME: e.EMPLOYEENAME, minList: this.mList });
        }
    }
    removeCellToSplice() {
        var i = this.mList.findIndex(x => x.cellToSplice == 1);
        if (i > -1) {
            this.mList.splice(i, 1);
            this.removeCellToSplice();
        }
    }
    setBookedInCell(initialCellList, starttime, endtime, duration, room, service, customer, sid, status) {
        var s = starttime.slice(0, -5);
        var ampm = starttime.slice(-2);
        var onlyMin = parseInt(starttime.slice(-4).slice(0, -2));
        //console.log({ sid: sid, Tstarttime: starttime, Tampm: ampm, starttime: s, ampm: ampm.toUpperCase(), onlyMin: onlyMin });
        if (ampm === "00")
            ampm = "AM";
        var noOfBLock = Math.ceil(duration / this.TimeLineBlock);
        //console.log({ noOfBLock: noOfBLock });
        let isBooked = 0;
        let skip = 0;
        for (let t of initialCellList) {
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
                    t.appointments.push({ room: room, service: service, customer: customer, time: starttime, sid: sid, status: status });
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
        return initialCellList;
    }
    onAddClick() {
        this.router.navigate(['/pages/schedule/scheInput', { mode: "add", returnUrl: this.router.url }]);
    }
    labelClickEvent(id) {
        this.router.navigate(['/pages/schedule/scheInput', { mode: "edit", id: id, returnUrl: this.router.url }]);
    }
    treatmentClickEvent(id) {
        this.router.navigate(['/pages/schedule/treatment', { mode: "", id: id, returnUrl: this.router.url }]);
    }
    showDetails() {
        this.childScheduleForMailModal.show();
    }
    sendEmail() {
        let Content = `
          <html>              
              <body >${this.el.nativeElement.outerHTML}
              </body>
          </html>`;
        //console.log(Content);
        this.masterRepo.postmaster(this.ScheduleDate, Content, '/SendEmail').subscribe((data) => {
            //console.log(data);
        });
        this.childScheduleForMailModal.hide();
    }
    downloadToPdf() {
        let pdf = new jsPDF();
        let options = {
            pagesplit: true,
            background: '#fff',
        };
        pdf.addHTML(document.getElementById("employeeSchedule"), 10, 10, options, () => {
            pdf.save("EmpSchedule.pdf");
        });
        // pdf.text(document.getElementById("employeeSchedule")
        // );
        // pdf.save("test.pdf")
        this.childScheduleForMailModal.hide();
    }
    downloadPDF() {
        this.exportAsService.save(this.exportAsConfig, 'EmpSchedule').subscribe(() => { });
    }
    getAppointmentBackground(ap) {
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
    }
    getAppointmentTextColor(ap) {
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
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ScheduleForMail'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["b" /* ModalDirective */])
], MasterSchedule.prototype, "childScheduleForMailModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('customerSchedule'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_9__ScheduleSearch_customer_all_schedule_component__["a" /* CustomerAllSchedule */])
], MasterSchedule.prototype, "childCustomerSchedule", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('employeeEmailSchedule'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], MasterSchedule.prototype, "el", void 0);
MasterSchedule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'masterschedule',
        styles: [__webpack_require__(1411)],
        template: __webpack_require__(1609),
        providers: [__WEBPACK_IMPORTED_MODULE_8__angular_common__["DatePipe"]],
    }), 
    __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_6__common_services_permission_authService_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7_ngx_export_as__["b" /* ExportAsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__scheduleInput_service__["a" /* ScheduleInputService */], __WEBPACK_IMPORTED_MODULE_5__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_8__angular_common__["DatePipe"]])
], MasterSchedule);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(13)))

/***/ }),

/***/ 1544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return ScheduleInput; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__ = __webpack_require__(1378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scheduleInput_service__ = __webpack_require__(1492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_style_loader_schedule_scss__ = __webpack_require__(1494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_style_loader_schedule_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_style_loader_schedule_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_repositories_masterRepo_service__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_services_permission__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_services_disable_date_picker_disable_date_picker_service__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(41);









let ScheduleInput = class ScheduleInput {
    constructor(_scheduleInputService, router, masterService, elementRef, activatedRoute, _authService, disableDateService, masterRepo, datePipe) {
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
        this.multipleServiceObj = { PAX: 1 };
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
        const setting = this._authService.getSetting();
        this.IntegrateTreatmentWithAppointment = setting.IntegrateTreatmentWithAppointment;
        if (!!this.activatedRoute.snapshot.params['returnUrl']) {
            this.returnUrl = this.activatedRoute.snapshot.params['returnUrl'];
        }
        if (!!this.activatedRoute.snapshot.params['mode']) {
            this.mode = this.activatedRoute.snapshot.params['mode'];
        }
        this.router.events.subscribe((val) => {
            let data = {
                GUID: this.scheduleInput.GUID,
                SNO: 0
            };
            //this.masterService.postmaster('remove_row', data, "/DeleteTempSchedule")
        });
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
            labelKey: "DESCRIPTION",
            primaryKey: "ROOMNO",
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
        this.paxChanged(1);
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.roomList = [];
        this.CustomerList = [];
        this.employeeList = [];
        this.ServiceList = [];
        let user = this._authService.getUserProfile();
        this.userBranches = user.branches;
        if (this.userBranches)
            this.scheduleInput.branch = this.userBranches.find(x => x.branchId === user.defaultBranch);
        this.getServices(user.defaultBranch);
        if (this.masterService._customerList.length > 0) {
            this.CustomerList = this.masterService._customerList;
        }
        else {
            this.masterService.getCustomerList().subscribe((data) => {
                this.CustomerList.push(data);
            }, Error => console.log(Error), () => {
                this.masterService._customerList = this.CustomerList;
            });
        }
        this.user = this._scheduleInputService.getUser();
        if (this.mode == "edit") {
            let sid = this.activatedRoute.snapshot.params['id'];
            this.masterService.postmaster(this.mode, { sid: sid }, "/loadScheduleById").subscribe(data => {
                if (data.status == 'ok') {
                    this.scheduleInput = data.result;
                    this.scheduleInput.branch = this.userBranches.find(x => x.branchId === this.scheduleInput.branch.branchId);
                    this.scheduleInput.DATE = this.scheduleInput.DATE.toString().substring(0, 10);
                    this.multipleServiceList = this.scheduleInput.multipleServiceList;
                    this.getStatusList();
                    if (this.scheduleInput.billableSchedule == 1) {
                        this.disableScheduleInput = true;
                    }
                    else {
                        this.disableScheduleInput = false;
                    }
                    //  this.DialogMessage = "Data Loaded Successfully."
                    setTimeout(() => {
                        //    this.childModal.hide();
                    }, 1000);
                }
                else {
                    this.showMessage(data.result);
                }
            }, error => { alert(error); });
        }
        else {
            this._scheduleInputService.getGUID().subscribe(respose => {
                this.scheduleInput.GUID = respose.text();
            });
        }
    }
    clearEmpRoom() {
        this.employeeList = [];
        this.roomList = [];
        this.multipleServiceObj.ROOM = undefined;
        this.multipleServiceObj.EMPLOYEE = undefined;
    }
    getServices(branchId) {
        this.masterService.getServices(branchId)
            .subscribe(services => {
            this.ServiceList = services;
            this.clearEmpRoom();
        });
    }
    getEmployees(branchId, service, sEmp = null) {
        this.masterService.getEmployeeListNew(branchId)
            .subscribe(response => {
            let branchEmp = response;
            let serviceEmp = service.employees;
            this.employeeList = branchEmp.filter(bEmp => serviceEmp.some(emp => bEmp.EMPLOYEEID == emp.id));
            if (sEmp) {
                this.multipleServiceObj.EMPLOYEE = this.employeeList.filter(x => sEmp.some(emp => x.EMPLOYEEID == emp));
            }
        });
    }
    getRooms(branchId, service, sRoom = null) {
        this.masterService.getRoomListNew(branchId)
            .subscribe(response => {
            let branchRoom = response;
            let serviceRoom = service.rooms;
            this.roomList = branchRoom.filter(bRoom => serviceRoom.some(room => bRoom.ROOMNO == room.id));
            if (sRoom) {
                this.multipleServiceObj.ROOM = this.roomList.filter(x => sRoom.some(room => x.ROOMNO == room));
            }
        });
    }
    changeEntryDate(value, format) {
        if (format == "AD") {
            this.ScheduleDateBS = this.masterService.toBSDate(value);
        }
        else if (format == "BS") {
            this.scheduleInput.DATE = this.masterService.toADDate(value);
        }
        this.checkHoliday(this.scheduleInput.DATE, 0, "00:00", "00:00");
        this.enableServiceDetail();
    }
    SaveClickEvent() {
        this.scheduleInput.multipleServiceList = this.multipleServiceList;
        this.showMessage("Saving Data please wait.", -1);
        this.onsubmit();
    }
    starttimeChange(value) {
        if (value == null || value == "")
            return;
        let timeComponent = value.split(':');
        if (timeComponent) {
            let hour = parseInt(timeComponent[0]);
            let min = parseInt(timeComponent[1].substring(0, 2));
            if (timeComponent[1].toLowerCase().endsWith("pm") && hour < 12)
                hour += 12;
            let ampm = "am";
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
    }
    SetStartTime(hour, min) {
        this.StartTime = hour.toString().padStart(2, '0') + ":" + min.toString().padStart(2, '0');
        this.multipleServiceObj.STARTTIME = this.GetTimeString(hour, min);
    }
    SetEndTime(hour, min) {
        this.EndTime = hour.toString().padStart(2, '0') + ":" + min.toString().padStart(2, '0');
        this.multipleServiceObj.ENDTIME = this.GetTimeString(hour, min);
    }
    GetTimeString(hour, min) {
        var ampm = " AM";
        if (hour >= 12) {
            if (hour > 12)
                hour = hour - 12;
            ampm = " PM";
        }
        return hour.toString().padStart(2, '0') + ":" + min.toString().padStart(2, '0') + ampm;
    }
    TypeChange(value) {
        console.log("type", value);
        this.multipleServiceObj.TYPE = value;
    }
    EmployeeChange(emp) {
        this.getTimeSlotForAppointment();
    }
    RoomChange(room) {
        this.getTimeSlotForAppointment();
    }
    bookedEmployeeClickEvent(value) {
        if (value.EMPLOYEE_BOOKED_BYCUSTOMER == 1)
            return;
        this.bookedEmployee = value;
        this.replacementEmployeeList = [];
        this.childEmployeeModal.show();
    }
    saveChildModal(replacementEmp) {
        this.childEmployeeModal.hide();
        this.showMessage("Updating Data please wait.", -1);
        try {
            let sub = this.masterService.postmaster("addEdit", { replacementEmployee: replacementEmp, ToBeReplacedEmployee: this.bookedEmployee }, "/postReplacementEmployee")
                .subscribe(data => {
                if (data.status == 'ok') {
                    this.showMessage("Data Exchanges Successfully", 1000);
                }
                else {
                    this.showMessage(data.result);
                }
            }, error => { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    }
    hideChildModal() {
        this.childModal.hide();
    }
    onsubmit() {
        try {
            //console.log("finaldata",this.scheduleInput);
            let sub = this.masterService.postmaster(this.mode, this.scheduleInput, "/saveSchedule")
                .subscribe(data => {
                if (data.status == 'ok') {
                    this.showMessage("Data Saved Successfully.", 1000);
                    this.router.navigate([this.returnUrl]);
                }
                else {
                    this.showMessage(data.result);
                }
            }, error => { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    }
    onCancel() {
        this.router.navigate([this.returnUrl]);
    }
    AddClickEvent() {
        return __awaiter(this, void 0, void 0, (function* () {
            try {
                var isEmpAvailable = true;
                this.multipleServiceObj.EMPLOYEE.forEach(element => {
                    if (element.OFFDAY.find(x => x == this.getWeekDay(new Date(this.scheduleInput.DATE))))
                        isEmpAvailable = false;
                });
                if (!isEmpAvailable) {
                    if (this.user.Role == "admin") {
                        if (!confirm('One or more Employee will not be available on selected date. Do you want to add anyway?'))
                            return;
                    }
                    else {
                        this.showMessage('One or more Employee will not be available on selected date.');
                        return;
                    }
                }
                if (this.StartTime === undefined) {
                    this.showMessage('Please set Appointment Time first');
                    return;
                }
                if (!(yield this.checkHoliday(this.scheduleInput.DATE, this.multipleServiceObj.EMPLOYEE.EMPLOYEEID, this.multipleServiceObj.STARTTIME, this.multipleServiceObj.ENDTIME)))
                    return;
                this.showMessage("Validting Data please wait.", -1);
                this.multipleServiceObj.EMPLOYEE.forEach(emp => {
                    this.multipleServiceObj.ROOM.forEach((room) => __awaiter(this, void 0, void 0, (function* () {
                        let data = {
                            Date: this.scheduleInput.DATE,
                            Service: this.multipleServiceObj.SERVICE,
                            CustomerId: this.scheduleInput.CUSTOMER.CUSID,
                            EmployeeId: emp.EMPLOYEEID,
                            RoomNo: room.ROOMNO,
                            STARTTIME: this.multipleServiceObj.STARTTIME,
                            ENDTIME: this.multipleServiceObj.ENDTIME,
                            StartTime: this.StartTime,
                            EndTime: this.EndTime,
                            GUID: this.scheduleInput.GUID,
                            SNO: this.SNO + 1,
                            ScheduleId: this.scheduleInput.ScheduleId
                        };
                        let sub = yield this.masterService.postMasterAsync('validate', data, "/ValidateSchedule")
                            .catch(error => {
                            this.showMessage(this.masterRepo.handleWebError(error));
                        });
                        if (sub) {
                            var result = sub.json();
                            if (result.status != "ok") {
                                this.showMessage(result.result || result.message);
                            }
                        }
                    })));
                });
                this.multipleServiceObj.EMPLOYEE.forEach(emp => {
                    this.multipleServiceObj.ROOM.forEach(room => {
                        this.multipleServiceList.push(Object.assign({}, this.multipleServiceObj, { SNO: ++this.SNO, EMPLOYEE: emp, ROOM: room }));
                    });
                });
                setTimeout(() => {
                    this.selectedService = [];
                    this.multipleServiceObj = { PAX: 1 };
                    this.paxChanged(1);
                    this.SetStartTime(0, 0);
                    this.SetEndTime(0, 0);
                    this.childModal.hide();
                }, 1000);
            }
            catch (e) {
                alert(e);
            }
        }));
    }
    onSearchChange(searchValue) {
        var cus = this.CustomerList.find(x => x.MOBILE == searchValue);
        if (cus != null)
            this.scheduleInput.CUSTOMER = cus;
    }
    onBarcodeChange(searchValue) {
        var cus = this.CustomerList.find(x => x.BARCODE == searchValue);
        if (cus != null)
            this.scheduleInput.CUSTOMER = cus;
    }
    editSchedule(index) {
        try {
            console.log(this.multipleServiceList[index]);
            let selectedSchedule = this.multipleServiceList[index];
            let data = {
                GUID: this.scheduleInput.GUID,
                SNO: this.multipleServiceObj.SNO
            };
            this.selectedService = [selectedSchedule.SERVICE];
            this.multipleServiceObj = {
                SERVICE: this.ServiceList.find(x => x.SERVICEID == selectedSchedule.SERVICE.SERVICEID),
                SNO: selectedSchedule.SNO,
                CUSTOMERID: selectedSchedule.CUSTOMERID,
                STARTTIME: selectedSchedule.STARTTIME,
                ENDTIME: selectedSchedule.ENDTIME,
                EMPLOYEE_BOOKED_BYCUSTOMER: selectedSchedule.EMPLOYEE_BOOKED_BYCUSTOMER,
                RATE: selectedSchedule.RATE,
                TYPE: selectedSchedule.TYPE
            };
            this.getEmployees(this.scheduleInput.branch.branchId, this.multipleServiceObj.SERVICE, [selectedSchedule.EMPLOYEE.EMPLOYEEID]);
            this.getRooms(this.scheduleInput.branch.branchId, this.multipleServiceObj.SERVICE, [selectedSchedule.ROOM.ROOMNO]);
            this.starttimeChange(selectedSchedule.STARTTIME);
            let sub = this.masterService.postmaster('remove_row', data, "/DeleteTempSchedule")
                .subscribe(data => {
                //console.log(data);
                if (data.status == 'ok') {
                    this.multipleServiceList.splice(index, 1);
                }
                else {
                    this.showMessage(data.result);
                }
            }, error => { alert(error); });
            this.enableServiceDetail();
        }
        catch (e) {
            alert(e);
        }
    }
    removeSchedule(index) {
        try {
            let data = {
                GUID: this.scheduleInput.GUID,
                SNO: this.multipleServiceList[index].SNO
            };
            this.showMessage("Removing Schedule please wait.", -1);
            let sub = this.masterService.postmaster('remove_row', data, "/DeleteTempSchedule")
                .subscribe(data => {
                //console.log(data);
                if (data.status == 'ok') {
                    this.multipleServiceList.splice(index, 1);
                    this.showMessage("Success", 1000);
                }
                else {
                    this.showMessage(data.result);
                }
            }, error => { alert(error); });
        }
        catch (e) {
            alert(e);
        }
    }
    getWeekDay(date) {
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
    }
    serviceChangeEvent(e) {
        if (!this.scheduleInput.CUSTOMER)
            return;
        this.multipleServiceObj.SERVICE = e[0];
        this.multipleServiceObj.RATE = this.multipleServiceObj.SERVICE.RATE;
        this.clearEmpRoom();
        this.getEmployees(this.scheduleInput.branch.branchId, this.multipleServiceObj.SERVICE);
        this.getRooms(this.scheduleInput.branch.branchId, this.multipleServiceObj.SERVICE);
        this.getTimeSlotForAppointment();
    }
    canBeBillable() {
        return (new Date() >= new Date(this.scheduleInput.DATE) && this._authService.getSetting().IntegratePos);
    }
    ProceedBill() {
        this.scheduleInput.billableSchedule = 1;
        this.SaveClickEvent();
    }
    CancelBill() {
        this.scheduleInput.multipleServiceList = this.multipleServiceList;
        this.showMessage("Saving Data please wait.", -1);
        try {
            let sub = this.masterService.postmaster(this.mode, this.scheduleInput, "/cancelBill")
                .subscribe(data => {
                if (data.status == 'ok') {
                    this.showMessage("Data Saved Successfully", 1000);
                }
                else {
                    this.showMessage(data.result);
                }
            }, error => { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    }
    DeleteConformation() {
        this.deleteModal.show();
    }
    DeleteEvent() {
        this.deleteModal.hide();
        this.showMessage("Deleting this schedule please wait.", -1);
        let sub = this.masterService.postmaster('delete', this.scheduleInput, "/DeleteSchedule")
            .subscribe(data => {
            //console.log(data);
            if (data.status == 'ok') {
                this.showMessage("Delete Successfull.", 1000);
                this.router.navigate([this.returnUrl]);
            }
            else {
                this.showMessage(data.result);
            }
        }, error => { alert(error); });
    }
    customerChanged(e) {
        this.scheduleInput.CUSTOMER = e;
    }
    checkHoliday(date, employee, startTime, endTime) {
        return __awaiter(this, void 0, void 0, (function* () {
            var roleRes = this.masterService.getRole();
            var roleJSON = JSON.parse(roleRes);
            var response = yield this._scheduleInputService.checkHoliday({ date, employee, startTime, endTime }).toPromise();
            var res = response.json();
            if (res.status == "ok" && res.result == true) {
                if (roleJSON.Role == "admin") {
                    if (confirm("Staff is not available for selected Date/Time. Do you still want to add appointment?")) {
                        this.scheduleInput.OverrideHoliday = true;
                        return true;
                    }
                    else
                        return false;
                }
                else {
                    this.showMessage("Staff is not available for selected Date/Time.", -1);
                    return false;
                }
            }
            return true;
        }));
    }
    getStatusList() {
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
    }
    getTimeSlotForAppointment() {
        let model = {
            customerId: this.scheduleInput.CUSTOMER.CUSID,
            outletId: this.scheduleInput.branch.branchId,
            serviceId: this.multipleServiceObj.SERVICE.SERVICEID,
            appointmentDate: this.scheduleInput.DATE,
            employeeId: 0,
            roomNo: ""
        };
        if (this.multipleServiceObj.EMPLOYEE)
            model.employeeId = this.multipleServiceObj.EMPLOYEE.EMPLOYEEID;
        if (this.multipleServiceObj.ROOM)
            model.roomNo = this.multipleServiceObj.ROOM.ROOMNO;
        console.log(model);
        this.masterService.getTimeSlotForAppointment(model)
            .subscribe((response) => {
            this.appTimeSlots = response.json().result;
        });
    }
    selectAppointmentTime(time) {
        this.starttimeChange(time.time);
        if (!this.multipleServiceObj.EMPLOYEE)
            this.multipleServiceObj.EMPLOYEE = this.employeeList.find(x => x.EMPLOYEEID == time.employeeId);
        if (!this.multipleServiceObj.ROOM)
            this.multipleServiceObj.ROOM = this.roomList.find(x => x.ROOMNO == time.roomNo);
    }
    paxChanged(pax) {
        this.empSetting = Object.assign({}, this.empSetting, { limitSelection: pax });
        this.roomSetting = Object.assign({}, this.roomSetting, { limitSelection: pax });
    }
    showMessage(message, closeAfter = 3000) {
        this.DialogMessage = message;
        if (!this.childModal.isShown)
            this.childModal.show();
        if (closeAfter >= 0) {
            setTimeout(() => {
                this.childModal.hide();
            }, closeAfter);
        }
    }
    enableServiceDetail() {
        this.serviceSetting = Object.assign({}, this.serviceSetting, { disabled: false });
        this.empSetting = Object.assign({}, this.empSetting, { disabled: false });
        this.roomSetting = Object.assign({}, this.roomSetting, { disabled: false });
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childEmployeeModal'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["b" /* ModalDirective */])
], ScheduleInput.prototype, "childEmployeeModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["b" /* ModalDirective */])
], ScheduleInput.prototype, "childModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('deleteModal'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["b" /* ModalDirective */])
], ScheduleInput.prototype, "deleteModal", void 0);
ScheduleInput = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'schedule',
        styles: [__webpack_require__(1411)],
        template: __webpack_require__(1610),
        providers: [__WEBPACK_IMPORTED_MODULE_8__angular_common__["DatePipe"]]
    }), 
    __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_3__scheduleInput_service__["a" /* ScheduleInputService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_6__common_services_permission__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7__common_services_disable_date_picker_disable_date_picker_service__["a" /* DisableDateService */], __WEBPACK_IMPORTED_MODULE_5__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_8__angular_common__["DatePipe"]])
], ScheduleInput);


/***/ }),

/***/ 1545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return CustomerAllSchedule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__ = __webpack_require__(1378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scheduleInput_service__ = __webpack_require__(1492);




let CustomerAllSchedule = class CustomerAllSchedule {
    constructor(router, scheduleService) {
        this.router = router;
        this.scheduleService = scheduleService;
        this.mobile = "";
        this.schedules = [];
        this.Customer = {};
        this.ShowAll = false;
        this.schedules = [];
    }
    ngOnInit() {
        this.schedules = [];
    }
    showDialog() {
        this.Customer = {};
        this.schedules = [];
        this.ShowAll = false;
        this.scheduleService.getCustomerSchedule({ FDate: this.date, CUSTOMER: this.mobile }).subscribe(res => {
            var response = res.json();
            if (response.customer != null) {
                this.schedules = response.schedule;
                this.Customer.NAME = response.customer.name;
                this.Customer.MOBILE = response.customer.mobile;
            }
            setTimeout(() => {
                this.childCustomerScheduleModal.show();
            }, 100);
        }, Error => {
            try {
                let t = Error.json();
                //console.log(t);
                if (t.result == "Authorization Failed") {
                    this.router.navigate(['/login', this.router.url]);
                }
                else {
                    alert("Error in Loading Data:" + t.result);
                }
            }
            catch (e) {
                alert(e);
            }
        });
    }
    labelClickEvent(id) {
        this.router.navigate(['/pages/schedule/scheInput', { mode: "edit", id: id, returnUrl: this.router.url }]);
    }
    CheckAllChanged(e) {
        this.scheduleService.getCustomerSchedule({ FDate: (e ? new Date(2000, 1, 1) : this.date), CUSTOMER: this.mobile }).subscribe(res => {
            var response = res.json();
            if (response.customer != null) {
                this.schedules = response.schedule;
                this.Customer.NAME = response.customer.name;
                this.Customer.MOBILE = response.customer.mobile;
                console.log(this.Customer);
            }
        }, Error => {
            try {
                let t = Error.json();
                //console.log(t);
                if (t.result == "Authorization Failed") {
                    this.router.navigate(['/login', this.router.url]);
                }
                else {
                    alert("Error in Loading Data:" + t.result);
                }
            }
            catch (e) {
                alert(e);
            }
        });
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('CustomerSchedule'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["b" /* ModalDirective */])
], CustomerAllSchedule.prototype, "childCustomerScheduleModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
    __metadata('design:type', String)
], CustomerAllSchedule.prototype, "mobile", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
    __metadata('design:type', Date)
], CustomerAllSchedule.prototype, "date", void 0);
CustomerAllSchedule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'customer-all-schedule',
        styles: [__webpack_require__(1411)],
        template: __webpack_require__(1611)
    }), 
    __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__scheduleInput_service__["a" /* ScheduleInputService */]])
], CustomerAllSchedule);


/***/ }),

/***/ 1546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TreatmentEntry; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__ = __webpack_require__(1378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scheduleInput_service__ = __webpack_require__(1492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_smart_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_style_loader_schedule_scss__ = __webpack_require__(1494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_style_loader_schedule_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_style_loader_schedule_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_repositories_masterRepo_service__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_services_permission__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CustomerSelect_customerSelect_component__ = __webpack_require__(1499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(42);










let TreatmentEntry = class TreatmentEntry {
    constructor(_scheduleInputService, router, masterService, elementRef, activatedRoute, _authService, http) {
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
                    valuePrepareFunction: (data) => {
                        return data.substring(0, 10);
                    }
                },
                Healer: {
                    title: 'Staff',
                    type: 'string',
                    valuePrepareFunction: (data) => {
                        return data.NAME;
                    }
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
    editList(event) {
        //console.log(event, "ADDING?!?!?!");
        var modelHistory;
        modelHistory = event.data;
        modelHistory.remarks = event.data.remarks;
        modelHistory.Healer = event.data.Healer;
        modelHistory.PatientComplaint = event.data.PatientComplaint;
        modelHistory.TreatmentNotes = event.data.TreatmentNotes;
        this.printTreatmentEntry(modelHistory, false);
        //console.log("THIS.MODEL", this.model)
    }
    ngOnInit() {
        //this.model.User = this._scheduleInputService.getUser();
        let sid = this.activatedRoute.snapshot.params['id'];
        //console.log({ beforeTreatment: this.mode });
        if (this.mode != 'add') {
            this.masterService.postmaster(this.mode, { sid: sid }, "/loadTreatmentByScheduleId").subscribe(data => {
                //console.log(data);
                if (data.status == 'ok') {
                    if (data.result != null) {
                        this.model = data.result;
                        this.model.remarks = data.result.remarks;
                    }
                }
                else {
                    //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                    if (data.result._body == "The ConnectionString property has not been initialized.") {
                        this.router.navigate(['/login', this.router.url]);
                        return;
                    }
                    //Some other issues need to check
                    //   this.DialogMessage = "Error in Updaing Data:" + data.result._body;
                    //console.log(data.result._body);
                    setTimeout(() => {
                        //     this.childModal.hide();
                    }, 3000);
                }
            }, error => { alert(error); });
        }
        this.contentUrl = this.masterService.contentUrl;
        setTimeout(() => {
            this.historyChange(this.model.Patient.CUSID);
            this.PatientComplaint = this.model.PatientComplaint;
            this.TreatmentNotes = this.model.TreatmentNotes;
            this.remarks = this.model.remarks;
            //console.log("MODEL", this.model)
            //console.log('TREATMENT DOCUMENTS', this.model.TreatmentDocuments);
            this.model.TreatmentDocuments.forEach(x => {
                x = this.masterService.contentUrl + x;
                //console.log('CONTENT URL AND DOCUMENTS', this.masterService.contentUrl, x   )
                this.uploadFilesUrl.push(x);
                //console.log("uploadFilesUrl ngOnInit", this.uploadFilesUrl);
            });
            if (this.model.Patient.NAME == null && this.IntegrateTreatmentWithAppointment) {
                this.masterService.postmaster(this.mode, { sid: sid }, "/loadScheduleById").subscribe(data => {
                    if (data.status == 'ok') {
                        //console.log(data);
                        var schedule = data.result;
                        this.model.Patient = schedule.CUSTOMER;
                        this.model.Healer = schedule.multipleServiceList[0].EMPLOYEE;
                        this.model.ScheduleId = sid;
                        this.model.DATE = schedule.DATE;
                        this.mode = "add";
                    }
                    else {
                        //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                        if (data.result._body == "The ConnectionString property has not been initialized.") {
                            this.router.navigate(['/login', this.router.url]);
                            return;
                        }
                        //Some other issues need to check
                        //   this.DialogMessage = "Error in Updaing Data:" + data.result._body;
                        //console.log(data.result._body);
                        setTimeout(() => {
                            //     this.childModal.hide();
                        }, 3000);
                    }
                }, error => { alert(error); });
            }
        }, 1000);
        if (this.masterService._medicationList.length > 0) {
            this.medicationList = this.masterService._medicationList;
        }
        else {
            this.masterService.getMedicationList().subscribe((data) => {
                this.medicationList.push(data);
            }, Error => console.log(Error), () => {
                this.masterService._medicationList = this.medicationList;
            });
        }
        if (this.masterService._diseaseList.length > 0) {
            this.diseaseList = this.masterService._diseaseList;
        }
        else {
            this.masterService.getDiseaseList().subscribe((data) => {
                this.diseaseList.push(data);
            }, Error => console.log(Error), () => {
                this.masterService._diseaseList = this.diseaseList;
            });
        }
        if (this.masterService._employeeList.length > 0) {
            this.employeeList = this.masterService._employeeList;
        }
        else {
            this.masterService.getEmployeeList().subscribe((data) => {
                this.employeeList.push(data);
            }, Error => console.log(Error), () => {
                this.masterService._employeeList = this.employeeList;
            });
        }
        if (this.masterService._prescriptionList.length > 0) {
            this.prescriptionList = this.masterService._prescriptionList;
        }
        else {
            this.masterService.getPrescriptionList().subscribe((data) => {
                this.prescriptionList.push(data);
            }, Error => console.log(Error), () => {
                this.masterService._prescriptionList = this.prescriptionList;
            });
        }
        if (this.masterService._prescriptionList.length > 0) {
            this.prescriptionList = this.masterService._prescriptionList;
        }
        else {
            this.masterService.getPrescriptionList().subscribe((data) => {
                this.prescriptionList.push(data);
            }, error => console.log(error), () => {
                this.masterService._prescriptionList = this.prescriptionList;
            });
        }
    }
    onImageClick($direction) {
        this.rotationAmount = this.rotationAmount + 90;
        document.getElementById('image').style.transform = `rotate(${this.rotationAmount}deg)`;
    }
    SaveClickEvent() {
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
    }
    saveChildModal(replacementEmp) {
        this.DialogMessage = "Updating Data please wait...";
        this.childModal.show();
    }
    hideChildModal() {
        this.childModal.hide();
    }
    sendEmail(model) {
        if (confirm("Do you want to send Email?")) {
            //console.log("CONFIRM SEND EMAIL")
            this.masterService.sendTreatmentEmai(model);
        }
        else {
        }
    }
    onsubmit() {
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
            let sub = this.masterService.postform(this.mode, this.model, "/saveTreatment", this.uploadFiles)
                .subscribe(data => {
                if (data.status == 'ok') {
                    //console.log("data status ok ----", data.status, "------", data)
                    //Displaying dialog message for save with timer of 1 secs
                    this.DialogMessage = "Data Saved Successfully";
                    setTimeout(() => {
                        this.childModal.hide();
                        this.sendEmail(this.model);
                        this.router.navigate([this.returnUrl]);
                    }, 1000);
                    //console.log("this.model", this.model);
                    this.printTreatmentEntry(this.model, true);
                }
                else {
                    //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                    if (data.result._body == "The ConnectionString property has not been initialized.") {
                        this.router.navigate(['/login', this.router.url]);
                        return;
                    }
                    //Some other issues need to check
                    this.DialogMessage = "Error in Saving Data:" + data.result._body;
                    //console.log(data.result._body);
                    setTimeout(() => {
                        this.childModal.hide();
                    }, 3000);
                }
            }, error => { alert(error); });
            this.subcriptions.push(sub);
        }
        catch (e) {
            alert(e);
        }
    }
    onCancel() {
        let new_date = this.masterService.getDate();
        this.masterService.saveDate(new_date);
        this.router.navigate([this.returnUrl]);
    }
    pcChange() {
        // alert("editor changed");
        // console.log("editor changed");
        //this.model.PatientComplaint = rate;
    }
    canBeBillable() {
        return (new Date() >= new Date(this.model.DATE));
    }
    ProceedBill() {
        alert(this.model.PatientComplaint);
        //this.scheduleInput.billableSchedule = 1;
        //this.SaveClickEvent();
    }
    DeleteConformation() {
        this.deleteModal.show();
    }
    DeleteEvent() {
        this.deleteModal.hide();
        this.DialogMessage = "Deleting this schedule please wait...";
        this.childModal.show();
        let sub = this.masterService.postmaster('delete', this.model, "/DeleteSchedule")
            .subscribe(data => {
            //console.log(data);
            if (data.status == 'ok') {
                this.DialogMessage = "Delete Successfull...";
                this.childModal.hide();
                this.router.navigate([this.returnUrl]);
            }
            else {
                //the ConnectionString in the server is not initialized means the the token 's user is not int the list of database user so it could't make connectionstring. Re authorization is requierd
                if (data.result._body == "Authorization Failed") {
                    this.router.navigate(['/login', this.router.url]);
                    return;
                }
                //Some other issues need to check
                //console.log(data.result._body);
                this.childModal.hide();
            }
        }, error => { alert(error); });
    }
    addDisease(e) {
        if (e.target.value !== "") {
            if (e.key == "Enter") {
                if (this.model.Diseases == null) {
                    this.model.Diseases = [];
                }
                if (!this.model.Diseases.find(x => x == e.target.value)) {
                    this.model.Diseases.push(e.target.value);
                    let disease = this.diseaseList.filter(x => x.DESCRIPTION == e.target.value)[0];
                    if (disease) {
                        if (disease.Medications)
                            disease.Medications.forEach(item => {
                                if (!this.model.Medications.find(x => x.DESCRIPTION == item.DESCRIPTION))
                                    this.model.Medications.push(item);
                            });
                        if (disease.Prescriptions)
                            disease.Prescriptions.forEach(item => {
                                if (!this.model.Prescriptions.find(x => x.DESCA == item.DESCA))
                                    this.model.Prescriptions.push(item);
                            });
                        if (disease.eveningPrescriptions)
                            disease.eveningPrescriptions.forEach(item => {
                                if (!this.model.EveningPrescriptions.find(x => x.DESCA == item.DESCA))
                                    this.model.EveningPrescriptions.push(item);
                            });
                    }
                }
                e.target.value = "";
                this.disease = "";
            }
        }
    }
    addMedication(e) {
        if (e.target.value !== "") {
            if (this.model.Medications == null) {
                this.model.Medications = [];
            }
            if (!this.model.Medications.find(x => x.DESCRIPTION == e.target.value))
                this.model.Medications.push(this.medicationList.find(x => x.DESCRIPTION == e.target.value));
            e.target.value = "";
            this.medication = "";
        }
    }
    addPrescription(e, Prescriptions) {
        if (e.target.value !== "") {
            if (Prescriptions == null) {
                Prescriptions = [];
            }
            if (!Prescriptions.find(x => x.DESCA == e.target.value)) {
                var pcptn = JSON.stringify(this.prescriptionList.find(x => x.DESCA == e.target.value));
                Prescriptions.push(JSON.parse(pcptn));
            }
            e.target.value = "";
            if (e.target.id == "morningPrescription")
                this.prescription = "";
            else
                this.eveningPrescription = "";
        }
    }
    onFileChanged(e) {
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
            reader.onload = (_event) => {
                var img = reader.result;
                this.uploadFilesUrl.push(img);
            };
        }
        //console.log(this.uploadFiles, this.uploadFilesUrl);
    }
    previewImage(e) {
        this.selectedImage = e.target.src;
        this.childPreviewModal.show();
    }
    changeImage(e) {
        this.selectedImage = e.target.src;
    }
    nextImage(e) {
        var index = this.uploadFilesUrl.indexOf(this.selectedImage);
        //console.log("Inde",index)
        this.selectedImage = this.uploadFilesUrl[index + 1];
        //console.log("selectedImage", this.selectedImage)
    }
    deleteImage(e) {
        //console.log("DeleteImage",e);
        const index = this.model.TreatmentDocuments.indexOf(e);
        if (index !== -1) {
            this.model.TreatmentDocuments.splice(index, 1);
        }
        //console.log("Docs",this.model.TreatmentDocuments);    
    }
    historyChange(event) {
        const connection = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["e" /* XHRBackend */](new __WEBPACK_IMPORTED_MODULE_9__angular_http__["f" /* BrowserXhr */](), new __WEBPACK_IMPORTED_MODULE_9__angular_http__["g" /* ResponseOptions */](), new __WEBPACK_IMPORTED_MODULE_9__angular_http__["h" /* CookieXSRFStrategy */]());
        this.http = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Http */](connection, this.masterService.getRequestOption());
        this.historySource = new __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table__["ServerDataSource"](this.http, {
            endPoint: this.masterService.apiUrl + '/getPatientTreatmentHistory?id=' + event,
            dataKey: 'data.result',
            pagerPageKey: 'currentPage',
            pagerLimitKey: 'maxResultCount',
            totalKey: 'data.total',
        });
    }
    customerChanged(e) {
        //console.log('new event', e);
        // this.employeeList.push(e);
        this.model.Patient = e;
    }
    customerWeight(event) {
        this.newCurrentWeight = event;
    }
    headTable() {
        let thead = "";
        thead = thead + `THEAD <thead> <th style="height:10px; padding-top:50px;" > fuck you </th> WORK ASSHOLE </thead> `;
        return thead;
    }
    printTreatmentEntry(data, print) {
        //console.log("printTreatmentEntry Function");
        let popupWin;
        let tableData = `<table style='width: 100%;font-size: 12px;
            border-collapse: collapse;border-top: none;border: none;min-height:500px'>`;
        let body = this.body(data);
        let prescriptions = this.prescriptions(data);
        let medications = this.medications(data);
        let diseases = this.diseases(data);
        tableData = tableData + `<tbody>` + body + diseases + medications + prescriptions + this.cautions(data) + this.footer() + `
        </tbody>` + `</table>`;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.write(`
        <html> 
            <head>
                <title>Skin Care - Treatment History</title>
                <style type="text/css">
                    td{ padding:2px; }
                    ` + (print ? `@page{
                        margin-top:50mm
                    }` : ``) + `
                </style>
            </head>
            <body ` + (print ? `onload="window.print();window.close();"` : ``) + `>
                ${tableData}
                <div style="position: fixed;height: 50px;bottom: 0;"></div>
            </body>
          </html>`);
        if (print)
            popupWin.document.close();
    }
    body(data) {
        let tbody = "";
        tbody = tbody + `

        <tr>
            <td colspan='5' style='font-size:14px;'><b>Patient Details</b></td>
        </tr>
        <tr>
            <td colspan='1' style='font-size:12px;'><div style="width:120px">Patient ID</div></td>
            <td colspan='1' style='font-size:12px;'><b>:&nbsp;${data && data.Patient && data.Patient.CUSID}</b></td>     
        </tr>
        <tr>
            <td colspan='1' style='font-size:12px;'>Patient Name</td>
            <td colspan='1' style='font-size:12px; Width:40%;'><b>:&nbsp;${data && data.Patient && data.Patient.NAME}</b></td>
            <td colspan='1' style='width:20%'></td>
            <td colspan='1' style='font-size:12px;width:100px;'>Mobile No</td>
            <td colspan='1' style='font-size:12px;; Width:40%;'><b>:&nbsp;${data && data.Patient && data.Patient.MOBILE}</b></td>        
        </tr>   
        <tr>
            <td colspan='1' style='font-size:12px;'>Address</td>
            <td colspan='1' style='font-size:12px;'><b>:&nbsp;${data && data.Patient && data.Patient.ADDRESS}</b></td>
            <td colspan='1' style='width:20%'></td>
            <td colspan='1' style='font-size:12px;'>Patient Age</td>
            <td colspan='1' style='font-size:12px;'><b>:&nbsp;${data && data.Patient && data.Patient.Age ? data.Patient.Age : ""}</b></td>    
        </tr>
        <tr>
            <td colspan='1' style='font-size:12px;'>Staff</td>
            <td colspan='1' style='font-size:12px;'><b>:&nbsp;${data && data.Healer && data.Healer.NAME}</b></td>
            <td colspan='1' style='width:20%'></td>
            <td colspan='1' style='font-size:12px;'>Weight</td>
            <td colspan='1' style='font-size:12px;'><b>:&nbsp;${data && data.Patient && data.Patient.Patient_Weight ? data.Patient.Patient_Weight : ""}</b></td>
        </tr>
        <tr>
            <td colspan='5'><div style="height:10px"></div</td>
        </tr>
  
        <tr>
            <td colspan='3' style='font-size:14px;padding-top:10px;'><b>Patient Complaint</b></td>
            <td colspan='2' style='font-size:14px;padding-top:10px;'><b>Treatment Notes</b></td>
        </tr>
        <tr>
            <td colspan='3' style='font-size:12px;vertical-align: top;text-indent: 20px;'>${data && data.Patient && data.PatientComplaint}</td>
            <td colspan='2' style='font-size:12px;vertical-align: top;text-indent: 20px;'>${data && data.Patient && data.TreatmentNotes}</td>
        </tr>
        <tr>
            <td colspan='5'><div style="height:10px"></div</td>
        </tr>   
   
   `;
        return tbody;
    }
    diseases(data) {
        var row = "";
        //console.log("data.Diseases", data.Diseases);
        if (data.Diseases == null) {
            data.Diseases = [];
        }
        if (data.Diseases.length > 0) {
            row = row + `
            <tr style="margin-top: 20px" >
                <td colspan='5' style='font-size:14px;padding-top:10px;'><b>Diagnosis</b></td>
            </tr>
            `;
            for (let i = 0; i < data.Diseases.length; i++) {
                row = row + `
            <tr>
                <td colspan='5' style="text-indent:10px">${i + 1}. ${data.Diseases[i]}</td>
            <tr>
            `;
            }
        }
        return row;
    }
    medications(data) {
        var row = "";
        //console.log("data.Medications", data.Medications);
        if (data.Medications == null) {
            data.Medications = [];
        }
        if (data.Medications.length > 0) {
            row = row + `
            <tr style="margin-top: 10px" >
                <td colspan='5' style='font-size:14px;padding-top:10px;'><b>Medications </b></td>
            </tr>
            `;
            for (let i = 0; i < data.Medications.length; i++) {
                row = row + `
            <tr>
                <td colspan='5' style="text-indent:10px">${i + 1}. ${data.Medications[i].DESCRIPTION}</td>
            <tr>
            <tr>
                <td colspan='5' style="text-indent:30px"><i>${data.Medications[i].REMARKS ? data.Medications[i].REMARKS : ""}</i></td>
            <tr>
            `;
            }
        }
        return row;
    }
    prescriptions(data) {
        var row = "";
        row = row + `        
            <tr>
                <td colspan='2' style='vertical-align:top;border-style:solid;border-width:thin;'>
                    <table >
                        <tr>
                            <td colspan='5' style='font-size:14px;padding-top:10px;'><b>Morning Routine </b></td>
                        </tr>
                        ${this.getPrescriptionForPrint(data.Prescriptions)}
                    </table>
                </td>
                <td></td>
                <td colspan='2' style='vertical-align:top;border-style:solid;border-width:thin;'>
                    <table>
                        <tr>
                            <td colspan='5' style='font-size:14px;padding-top:10px;'><b>Evening Routine </b></td>
                        </tr>
                        ${this.getPrescriptionForPrint(data.EveningPrescriptions)}
                    </table>
                </td>
            </tr>
            `;
        return row;
    }
    getPrescriptionForPrint(data) {
        var row = "";
        var hasCautions;
        if (data == null) {
            data = [];
        }
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                row = row + `
            <tr>
                <td colspan='5' style='text-indent:10px'>${i + 1}. ${data[i].DESCA}</td>
            <tr>
            <tr>
                <td colspan='5' style='text-indent:30px'><i>${data[i].directives ? data[i].directives : ""}</i></td>
            <tr>
            `;
            }
        }
        return row;
    }
    cautions(data) {
        var row = "";
        var rn = 1;
        var cns = [];
        row = row + `
            <tr>
            <td colspan='2' style='font-size:14px;padding-top:10px;'><b>Cautions </b></td>
            </tr>
            `;
        if (data.Prescriptions) {
            for (let i = 0; i < data.Prescriptions.length; i++) {
                if (data.Prescriptions[i].cautions && data.Prescriptions[i].cautions !== "" && !cns.find(x => x === data.Prescriptions[i].DESCA)) {
                    row = row + `
                    <tr>
                        <td colspan='5' style='text-indent:10px'>${++rn}. ${data.Prescriptions[i].DESCA} : ${data.Prescriptions[i].cautions ? data.Prescriptions[i].cautions : ""}</td>
                    <tr>
                    `;
                    cns.push(data.Prescriptions[i].DESCA);
                }
            }
        }
        if (data.EveningPrescriptions) {
            for (let i = 0; i < data.EveningPrescriptions.length; i++) {
                if (data.EveningPrescriptions[i].cautions && data.EveningPrescriptions[i].cautions !== "" && !cns.find(x => x === data.EveningPrescriptions[i].DESCA)) {
                    row = row + `
                    <tr>
                        <td colspan='5' style='text-indent:10px'>${++rn}. ${data.EveningPrescriptions[i].DESCA} : ${data.EveningPrescriptions[i].cautions ? data.EveningPrescriptions[i].cautions : ""}</td>
                    <tr>
                    `;
                    cns.push(data.EveningPrescriptions[i].DESCA);
                }
            }
        }
        return row;
    }
    footer() {
        return `
            <tr>
                <td colspan='5' style='font-size:14px;padding-top:10px;'><b>Notes </b></td>
            </tr>
            <tr>
                <td colspan='5' style='text-indent:10px'>Follow up after 3 months</td>
            <tr>
            <tr>
                <td colspan='5' style='text-indent:10px'>Consultation charge is valid till one month of your previous consultation date.</td>
            <tr>
            <tr>
                <td colspan='5' style='text-indent:10px'>Contact 1 month prior for follow up appointment.</td>
            <tr>`;
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childPreviewModal'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["b" /* ModalDirective */])
], TreatmentEntry.prototype, "childPreviewModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["b" /* ModalDirective */])
], TreatmentEntry.prototype, "childModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('deleteModal'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["b" /* ModalDirective */])
], TreatmentEntry.prototype, "deleteModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8__CustomerSelect_customerSelect_component__["a" /* CustomerSelect */]), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_8__CustomerSelect_customerSelect_component__["a" /* CustomerSelect */])
], TreatmentEntry.prototype, "CustomerSelect", void 0);
TreatmentEntry = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'treatment',
        styles: [__webpack_require__(1411)],
        template: __webpack_require__(1612),
    }), 
    __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_3__scheduleInput_service__["a" /* ScheduleInputService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_6__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_7__common_services_permission__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* Http */]])
], TreatmentEntry);


/***/ }),

/***/ 1547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TreatmentDetails; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__ = __webpack_require__(1378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_style_loader_masters_components_smartTables_scss__ = __webpack_require__(1410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_style_loader_masters_components_smartTables_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_style_loader_masters_components_smartTables_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_repositories_masterRepo_service__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__theme_pipes_label_pipe__ = __webpack_require__(328);










let TreatmentDetails = class TreatmentDetails {
    constructor(service, _authService, router, labelPipe) {
        this.service = service;
        this._authService = _authService;
        this.router = router;
        this.labelPipe = labelPipe;
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
        /*
        let Clist: Array<Treatment> = [];
        this.service.getTreatmentList(true).subscribe((data) => {
          Clist.push(<Treatment>data);
        },
          Error => console.log(Error),
          () => {
            this.service._treatmentList = Clist;
            this.source.load(Clist);
          });
    */
        const connection = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["e" /* XHRBackend */](new __WEBPACK_IMPORTED_MODULE_7__angular_http__["f" /* BrowserXhr */](), new __WEBPACK_IMPORTED_MODULE_7__angular_http__["g" /* ResponseOptions */](), new __WEBPACK_IMPORTED_MODULE_7__angular_http__["h" /* CookieXSRFStrategy */]());
        var http = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* Http */](connection, this.service.getRequestOption());
        this.source = new __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__["ServerDataSource"](http, {
            endPoint: this.service.apiUrl + '/getTreatmentList',
            dataKey: 'data.result',
            pagerPageKey: 'currentPage',
            pagerLimitKey: 'maxResultCount',
            totalKey: 'data.total',
        });
    }
    setMode() {
        // this.divService.create();
        //this.settings.mode='inline';
        //console.log(this.settings.mode);
    }
    onAddClick() {
        if (this._authService.getUserProfile()) {
            this.router.navigate(['/pages/schedule/treatment', { mode: "add", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = `You are not authorized to add ${this.labelPipe.transform('customer')}.`;
            this.childModal.show();
        }
    }
    onDeleteConfirm(event) {
        this.selectedRow = event;
        this.deleteModal.show();
    }
    DeleteEvent() {
        this.deleteModal.hide();
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            try {
                this.DialogMessage = "Deleting please wait...";
                this.childModal.show();
                //console.log("delete",this.selectedRow.data);
                let sub = this.service.postmaster("delete", { DocumentId: this.selectedRow.data.DocumentId }, "/deleteTreatment")
                    .subscribe(data => {
                    //console.log("sub",sub);
                    // if (data.status == 'ok') {
                    //console.log("data", data);
                    //Displaying dialog message for save with timer of 1 secs
                    if (data.status == "ok") {
                        this.DialogMessage = "Data Deleted Successfully";
                        if (this.service._customerList.length > 0) {
                            this.service._customerList.splice(this.service._customerList.indexOf(this.selectedRow.data), 1);
                            this.source.load(this.service._customerList);
                        }
                    }
                    else {
                        var error = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_jquery__["parseJSON"])(data.result._body);
                        this.DialogMessage = error.result;
                    }
                    setTimeout(() => {
                        this.childModal.hide();
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
                }, error => { alert(error); });
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
    }
    onViewClick(event) {
        this.router.navigate(["/pages/schedule/treatment", { id: event.data.DocumentId, mode: "view", returnUrl: this.router.url }]);
    }
    onEditClick(event) {
        // if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
        //   this.router.navigate(["/pages/schedule/treatment", { id: event.data.DocumentId, mode: "edit", returnUrl: this.router.url }])
        // } else {
        //   this.DialogMessage = "You are not authorized to edit Customer."
        //   this.childModal.show();
        // }
        this.router.navigate(["/pages/schedule/treatment", { id: event.data.DocumentId, mode: "edit", returnUrl: this.router.url }]);
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__["b" /* ModalDirective */])
], TreatmentDetails.prototype, "childModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('deleteModal'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__["b" /* ModalDirective */])
], TreatmentDetails.prototype, "deleteModal", void 0);
TreatmentDetails = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'treatment-details',
        template: __webpack_require__(1613),
        styles: [__webpack_require__(1411)],
        providers: [],
    }), 
    __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_5__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_9__theme_pipes_label_pipe__["a" /* LabelPipe */]])
], TreatmentDetails);


/***/ }),

/***/ 1548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return TreatmentList; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__ = __webpack_require__(1378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_style_loader_masters_components_smartTables_scss__ = __webpack_require__(1410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_style_loader_masters_components_smartTables_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_style_loader_masters_components_smartTables_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_repositories_masterRepo_service__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__theme_pipes_label_pipe__ = __webpack_require__(328);









let TreatmentList = class TreatmentList {
    constructor(service, _authService, router, labelPipe) {
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
                    valuePrepareFunction: (Patient) => {
                        return Patient.NAME;
                    },
                    filterFunction: (Patient, search) => {
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
                    valuePrepareFunction: (Patient) => {
                        return Patient.NAME;
                    },
                    filterFunction: (Patient, search) => {
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
        this.source = new __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__["LocalDataSource"]();
        let Clist = [];
        if (this.service.selected_Date != null) {
            //console.log('VALIDATED');
            // var date = new DatePipe("en-US").transform(Date.now(), "MM/dd/yyyy");
            //console.log(this.service.selected_Date, typeof this.service.selected_Date);
            var date = this.service.getDate();
            //console.log('saveDate',date,typeof date)
            this.service.getTreatmentListDetails(encodeURIComponent(date)).subscribe((data) => {
                Clist.push(data);
            }, Error => console.log(Error), () => {
                //console.log(Clist, "CLIST NG2")
                this.service._treatmentList = Clist;
                this.source.load(Clist);
            });
        }
        else {
            var date = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"]("en-US").transform(Date.now(), "MM/dd/yyyy");
            this.service.getTreatmentListDetails(encodeURIComponent(date)).subscribe((data) => {
                Clist.push(data);
            }, Error => console.log(Error), () => {
                this.service._treatmentList = Clist;
                this.source.load(Clist);
            });
        }
    }
    onAddClick() {
        if (this._authService.getUserProfile()) {
            this.router.navigate(['/pages/schedule/treatment', { mode: "add", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = `You are not authorized to add ${this.labelPipe.transform('customer')}.`;
            this.childModal.show();
        }
    }
    onDeleteConfirm(event) {
        this.selectedRow = event;
        this.deleteModal.show();
    }
    DeleteEvent() {
        this.deleteModal.hide();
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            try {
                this.DialogMessage = "Deleting please wait...";
                this.childModal.show();
                let sub = this.service.postmaster("delete", this.selectedRow.data, "/deleteTreatment")
                    .subscribe(data => {
                    // if (data.status == 'ok') {
                    //console.log("data", data);
                    //Displaying dialog message for save with timer of 1 secs
                    if (data.status == "ok") {
                        this.DialogMessage = "Data Deleted Successfully";
                        if (this.service._customerList.length > 0) {
                            this.service._customerList.splice(this.service._customerList.indexOf(this.selectedRow.data), 1);
                            this.source.load(this.service._customerList);
                        }
                    }
                    else {
                        this.DialogMessage = "An appointment has already been booked for this customer and cannot be deleted.";
                    }
                    setTimeout(() => {
                        this.childModal.hide();
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
                }, error => { alert(error); });
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
    }
    onViewClick(event) {
        this.router.navigate(["/pages/schedule/treatment", { id: event.data.DocumentId, mode: "view", returnUrl: this.router.url }]);
    }
    onEditClick(event) {
        if (this._authService.getUserProfile() && this._authService.getUserProfile().Role == "admin") {
            this.router.navigate(["/pages/schedule/treatment", { id: event.data.DocumentId, mode: "edit", returnUrl: this.router.url }]);
        }
        else {
            this.DialogMessage = "You are not authorized to edit Customer.";
            this.childModal.show();
        }
    }
    OnDateChangeEvent(v) {
        let Clist = [];
        //console.log('Before v:',v,typeof v);
        // var date = new DatePipe("en-US").transform(v, "MM/dd/yyyy"); 
        //console.log('After v:',v,typeof v);
        // this.service.saveDate(date);
        var date = v;
        //console.log('before date:',date,typeof date)
        this.service.saveDate(date);
        this.service.getTreatmentListDetails(encodeURIComponent(date)).subscribe((data) => {
            Clist.push(data);
        }, Error => console.log(Error), () => {
            this.service._treatmentList = Clist;
            this.source.load(Clist);
        });
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__["b" /* ModalDirective */])
], TreatmentList.prototype, "childModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('deleteModal'), 
    __metadata('design:type', __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__["b" /* ModalDirective */])
], TreatmentList.prototype, "deleteModal", void 0);
TreatmentList = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'treatment-list',
        template: __webpack_require__(1614),
        providers: [],
    }), 
    __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_5__common_repositories_masterRepo_service__["a" /* MasterRepo */], __WEBPACK_IMPORTED_MODULE_1__common_services_permission_authService_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_8__theme_pipes_label_pipe__["a" /* LabelPipe */]])
], TreatmentList);


/***/ }),

/***/ 1549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return Schedule; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

let Schedule = class Schedule {
    constructor() {
    }
    ;
};
Schedule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'schedule',
        template: '<router-outlet></router-outlet>'
    }), 
    __metadata('design:paramtypes', [])
], Schedule);


/***/ }),

/***/ 1555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Imports
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(26);
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
            setTimeout((function () {
                _this.instance.removeAllListeners();
                _this.instance.destroy();
                _this.instance = null;
            }));
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
        this.zone.run((function () {
            _this.value = value;
            _this.onChange(value);
            _this.onTouched();
            _this.change.emit(value);
        }));
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
        this.instance.on('instanceReady', (function (evt) {
            // send the evt to the EventEmitter
            _this.ready.emit(evt);
        }));
        // CKEditor change event
        this.instance.on('change', (function () {
            _this.onTouched();
            var value = _this.instance.getData();
            // Debounce update
            if (_this.debounce) {
                if (_this.debounceTimeout)
                    clearTimeout(_this.debounceTimeout);
                _this.debounceTimeout = setTimeout((function () {
                    _this.updateValue(value);
                    _this.debounceTimeout = null;
                }), parseInt(_this.debounce));
            }
            else {
                _this.updateValue(value);
            }
        }));
        // CKEditor blur event
        this.instance.on('blur', (function (evt) {
            _this.blur.emit(evt);
        }));
        // CKEditor focus event
        this.instance.on('focus', (function (evt) {
            _this.focus.emit(evt);
        }));
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
                            useExisting: core_1.forwardRef((function () { return CKEditorComponent; })),
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

/***/ 1561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return CustomerPipe; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

let CustomerPipe = class CustomerPipe {
    transform(data, query) {
        if (data) {
            if (query.length) {
                return data.filter(item => {
                    const searchedQuery = query.replace(/[^A-Z0-9]/ig, '').toLowerCase();
                    const comId = (item.NAME) ? (item.NAME).replace(/[^A-Z0-9]/ig, '').toLowerCase() : '';
                    if (comId.indexOf(searchedQuery) !== -1) {
                        return item;
                    }
                });
            }
            else {
                return data;
            }
        }
    }
};
CustomerPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'searchData', pure: false }), 
    __metadata('design:paramtypes', [])
], CustomerPipe);


/***/ }),

/***/ 1562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", (function() { return MobilePipe; }));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

let MobilePipe = class MobilePipe {
    transform(data, query) {
        if (data) {
            if (query.length) {
                return data.filter(item => {
                    const searchedQuery = query.replace(/[^0-9]/ig, '').toLowerCase();
                    const comId = (item.MOBILE) ? (item.MOBILE).replace(/[^0-9]/ig, '').toLowerCase() : '';
                    if (comId.indexOf(searchedQuery) !== -1) {
                        return item;
                    }
                });
            }
            else {
                return data;
            }
        }
    }
};
MobilePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'searchMobile', pure: false }), 
    __metadata('design:paramtypes', [])
], MobilePipe);


/***/ }),

/***/ 1563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_permission_guard_service__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_component__ = __webpack_require__(1549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ScheduleInput_masterSchedule_component__ = __webpack_require__(1543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ScheduleInput_scheduleInput_component__ = __webpack_require__(1544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_TreatmentEntry_Treatment_component__ = __webpack_require__(1546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_FollowUp_followup_component__ = __webpack_require__(1542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_TreatmentEntry_TreatmentList_component__ = __webpack_require__(1548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_TreatmentEntry_TreatmentDetails_component__ = __webpack_require__(1547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_CheckIn_checkIn_component__ = __webpack_require__(1539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_CheckOut_CheckInList_component__ = __webpack_require__(1540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_CheckOut_CheckOut_component__ = __webpack_require__(1541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_AppointmentRequest_RequestList_component__ = __webpack_require__(1537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_AppointmentRequest_requestDetail_component__ = __webpack_require__(1538);














// noinspection TypeScriptValidateTypes
const routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__schedule_component__["a" /* Schedule */],
        children: [
            { path: 'mastersche', component: __WEBPACK_IMPORTED_MODULE_3__components_ScheduleInput_masterSchedule_component__["a" /* MasterSchedule */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__common_services_permission_guard_service__["a" /* CanActivateTeam */]] },
            { path: 'scheInput', component: __WEBPACK_IMPORTED_MODULE_4__components_ScheduleInput_scheduleInput_component__["a" /* ScheduleInput */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__common_services_permission_guard_service__["a" /* CanActivateTeam */]] },
            { path: 'checkIn', component: __WEBPACK_IMPORTED_MODULE_9__components_CheckIn_checkIn_component__["a" /* CheckIn */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__common_services_permission_guard_service__["a" /* CanActivateTeam */]] },
            { path: 'check-in-list', component: __WEBPACK_IMPORTED_MODULE_10__components_CheckOut_CheckInList_component__["a" /* CheckInList */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__common_services_permission_guard_service__["a" /* CanActivateTeam */]] },
            { path: 'checkOut', component: __WEBPACK_IMPORTED_MODULE_11__components_CheckOut_CheckOut_component__["a" /* CheckOutEntry */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__common_services_permission_guard_service__["a" /* CanActivateTeam */]] },
            { path: 'treatment', component: __WEBPACK_IMPORTED_MODULE_5__components_TreatmentEntry_Treatment_component__["a" /* TreatmentEntry */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__common_services_permission_guard_service__["a" /* CanActivateTeam */]] },
            { path: 'followup', component: __WEBPACK_IMPORTED_MODULE_6__components_FollowUp_followup_component__["a" /* FollowUp */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__common_services_permission_guard_service__["a" /* CanActivateTeam */]] },
            { path: 'treatment-list', component: __WEBPACK_IMPORTED_MODULE_7__components_TreatmentEntry_TreatmentList_component__["a" /* TreatmentList */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__common_services_permission_guard_service__["a" /* CanActivateTeam */]] },
            { path: 'treatment-details', component: __WEBPACK_IMPORTED_MODULE_8__components_TreatmentEntry_TreatmentDetails_component__["a" /* TreatmentDetails */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__common_services_permission_guard_service__["a" /* CanActivateTeam */]] },
            { path: 'appointment-requests', component: __WEBPACK_IMPORTED_MODULE_12__components_AppointmentRequest_RequestList_component__["a" /* AppointmentRequestList */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__common_services_permission_guard_service__["a" /* CanActivateTeam */]] },
            { path: 'request-detail', component: __WEBPACK_IMPORTED_MODULE_13__components_AppointmentRequest_requestDetail_component__["a" /* AppointmentRequest */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__common_services_permission_guard_service__["a" /* CanActivateTeam */]] }
        ]
    },
];
/* unused harmony export routes */

const routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
/* harmony export (immutable) */ __webpack_exports__["a"] = routing;



/***/ }),

/***/ 1565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(41);
var ckeditor_component_1 = __webpack_require__(1555);
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

/***/ 1566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ckeditor_module_1 = __webpack_require__(1565);
exports.CKEditorModule = ckeditor_module_1.CKEditorModule;
var ckeditor_component_1 = __webpack_require__(1555);
exports.CKEditorComponent = ckeditor_component_1.CKEditorComponent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1602:
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-10 col-md-4\" >\r\n        <select class=\"form-control\" id=\"outlet\" (change)=\"branchChanged()\" [(ngModel)] = \"selectedBranch\">\r\n            <option *ngFor = \"let branch of userBranches\" value=\"{{branch.branchId}}\">{{branch.branchName}}</option>\r\n        </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <ba-card title=\"Requests List\"  baCardClass=\"with-scroll\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\"></ng2-smart-table>\r\n    </ba-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>          \r\n        </button>\r\n        <h4 class=\"modal-title\">Information</h4>\r\n      </div>\r\n\r\n      <div class=\"modal-body\">\r\n        <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n        {{DialogMessage}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Once you delete the Treatment you can't recover it back. Are U sure you want to delete this Treatment?\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n        <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=\"deleteModal.hide()\">Cancel</button>\r\n      </div>!\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 1603:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <ba-card>\r\n      <div style=\"height: 100%;\">\r\n        <fieldset style=\" border: none;padding: 0; margin: 0;\" [disabled]=\"disableScheduleInput\">\r\n          <div class=\"form-group\">\r\n            \r\n            <div class=\"row\">\r\n              <div class=\"form-group col-sm-12  col-md-3  col-lg-2 col-xxl-1\">\r\n                <label for=\"miti\">Miti</label>\r\n\r\n                <input type=\"text\" class=\"form-control disabledFont\" id=\"miti\" \r\n                  disabled [(ngModel)]=\"appRequest.miti\">\r\n              </div>\r\n              <div class=\"form-group col-sm-12  col-md-3  col-lg-2 col-xxl-1\">\r\n                <label for=\"date\">Date</label>\r\n                <span class=\"input-like\">{{appRequest.appointmentDate | date:'dd MMM yyyy'}}</span>\r\n              </div>\r\n\r\n              <div class=\"form-group col-sm-12  col-md-6 col-lg-4 col-xxl-3\">\r\n                <label for=\"outlet\">Outlet</label>\r\n                <input type=\"text\" class=\"form-control  disabledFont\" id=\"date\" \r\n                  disabled [(ngModel)]=\"appRequest.outlet.branchName\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"form-group\">\r\n            <table id=\"tblPatientInfo\">\r\n                <tr>\r\n                    <td>{{'customer' | labelPipe}} Name</td>\r\n                    <td>: {{appRequest.Customer.NAME}}</td>\r\n                    <td>Mobile No</td>\r\n                    <td>: {{appRequest.Customer.MOBILE}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Address</td>\r\n                    <td>: {{appRequest.Customer.ADDRESS}}</td>\r\n                    <td>{{'customer' | labelPipe}} Id</td>\r\n                    <td>: {{appRequest.Customer.PATIENT_ID}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Age</td>\r\n                    <td>: {{appRequest.Customer.Age}}</td>\r\n                    <td>Gender</td>\r\n                    <td>: {{appRequest.Customer.GENDER}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Membership</td>\r\n                    <td>: {{appRequest.Customer.Membership}}</td>\r\n                    <td>Email</td>\r\n                    <td style=\"width: 35%;\">: {{appRequest.Customer.EMAIL}}</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        </fieldset>\r\n      </div>          \r\n    </ba-card>\r\n      <ba-card title=\"Appointments\">\r\n        <div class=\"table-responsive mb-3\" style=\"height: 500px;\">\r\n          <table class=\"table align-items-center table-flush\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th scope=\"col\" style=\"width: 50px;\">S.No.</th>\r\n                <th scope=\"col\" style=\"width: 40%;\">Service</th>\r\n                <th scope=\"col\" style=\"width: 20%;\">Therapist</th>\r\n                <th scope=\"col\" style=\"width: 20%;\">Room</th>\r\n                <th scope=\"col\" style=\"width: 20%;\">Appointment Time</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <ng-container *ngIf=\"appRequest.items && appRequest.items.length > 0\">\r\n                <tr\r\n                  *ngFor=\"let app of appRequest.items;let i=index;\">\r\n                  <td scope=\"row\">{{i+1}}</td>  \r\n                  <td class=\"text-capitalize\">{{app.serviceName}}</td>\r\n                  <td class=\"text-capitalize\">\r\n                    <select class=\"form-control\" name=\"empselect\" id=\"empselect\" [(ngModel)]=\"app.employee\">\r\n                      <option *ngFor=\"let e of app.employeeList\" [ngValue]=\"e\">{{e.NAME}}</option>\r\n                    </select>                  \r\n                  </td>\r\n                  <td class=\"text-capitalize\">\r\n                    <select class=\"form-control\" name=\"roomselect\" id=\"roomselect\" [(ngModel)]=\"app.room\">\r\n                      <option *ngFor=\"let r of app.roomList\" [ngValue]=\"r\">{{r.DESCRIPTION}}</option>\r\n                    </select>\r\n                  </td>\r\n                  <td class=\"text-capitalize\">\r\n                    <!-- <div class=\"row\">\r\n                      <span *ngIf=\"!app.editTime\">{{app.appointmentTime}}</span>\r\n                      <input *ngIf=\"app.editTime\" type=\"time\" class=\"form-control\" style=\"width: 90%;display:inline !important;\"\r\n                      (change)=\"starttimeChange($event.target.value)\" [(ngModel)]=\"app.appointmentTime\" />\r\n                      <i class=\"fa fa-pencil\" *ngIf=\"!app.editTime\" (click)=\"editTime(app)\"></i>\r\n                      <i class=\"fa fa-check\" *ngIf=\"app.editTime\" (click)=\"app.editTime = false\"></i>\r\n                    </div> -->\r\n                    <div class=\"row\">\r\n                      <!-- Display selected time if not editing -->\r\n                      <span *ngIf=\"!app.editTime\" style=\"width: 90%; display: inline-block !important;\">{{ app.displayTime }}</span>\r\n                    \r\n                      <!-- Time selection UI -->\r\n                      <div *ngIf=\"app.editTime\" style=\"width: 90%; display: inline-block !important;\">\r\n                        <!-- Dropdown for pre-calculated available time blocks -->\r\n                        <select class=\"form-control\" [(ngModel)]=\"app.selectedTimeBlock\" (change)=\"onTimeBlockChange(app)\">\r\n                          <option *ngFor=\"let block of app.freeBlocks\" [ngValue]=\"block\">\r\n                            {{ block.Start }} - {{ block.End }}\r\n                          </option>\r\n                          <option value=\"custom\">Other...</option>\r\n                        </select>\r\n                    \r\n                        <!-- Manual time input, only shown if 'Other...' is selected -->\r\n                        <input *ngIf=\"app.selectedTimeBlock === 'custom'\" type=\"time\" class=\"form-control mt-1\"\r\n                               [(ngModel)]=\"app.appointmentTime\" />\r\n                      </div>\r\n                    \r\n                      <!-- Edit icon -->\r\n                      <i class=\"fa fa-pencil\" *ngIf=\"!app.editTime\" (click)=\"editTime(app)\"></i>\r\n                    \r\n                      <!-- Confirm icon -->\r\n                      <i class=\"fa fa-check\" *ngIf=\"app.editTime\" (click)=\"confirmTime(app)\"></i>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </ng-container>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </ba-card>   \r\n          \r\n            \r\n          \r\n        \r\n\r\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"SaveClickEvent()\">Submit</button>\r\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"DeleteConformation()\"\r\n        *ngIf=\"mode=='edit'&& disableScheduleInput==false && scheduleInput.billableSchedule!=1\">Delete</button>\r\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Back</button>\r\n    </div>\r\n    \r\n  \r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n\r\n        </button>\r\n        <h4 class=\"modal-title\">Information</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{DialogMessage}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 1604:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <ba-card>\r\n      <div style=\"height: 100%;\">\r\n        <fieldset style=\" border: none;padding: 0; margin: 0;\" [disabled]=\"disableScheduleInput\">\r\n          <div class=\"form-group\">\r\n            \r\n            <div class=\"row\">\r\n              <div class=\"form-group col-sm-12  col-md-3  col-lg-2 col-xxl-1\">\r\n                <label for=\"miti\">Miti</label>\r\n                <input type=\"text\" class=\"form-control disabledFont\" id=\"miti\" \r\n                  disabled [(ngModel)]=\"checkIn.miti\">\r\n              </div>\r\n              <div class=\"form-group col-sm-12  col-md-3  col-lg-2 col-xxl-1\">\r\n                <label for=\"date\">Date</label>\r\n                <input type=\"text\" class=\"form-control  disabledFont\" id=\"date\" \r\n                  disabled [(ngModel)]=\"checkIn.date\">\r\n              </div>\r\n\r\n              <div class=\"form-group col-sm-12  col-md-6 col-lg-4 col-xxl-3\">\r\n                <label for=\"outlet\">Outlet</label>\r\n                <select class=\"form-control\" id=\"outlet\" [(ngModel)] = \"checkIn.branch\"\r\n                (ngModelChange)=\"getServices(checkIn.branch.branchId);GetAppointmentForCheckIn();\">\r\n                    <option *ngFor = \"let branch of userBranches\" [ngValue]=\"branch\">{{branch.branchName}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          <customer-select (customerChanged)=\"customerChanged($event)\"\r\n            *ngIf=\"mode != 'add'\">\r\n          </customer-select>\r\n        </fieldset>\r\n      </div>          \r\n    </ba-card>\r\n      <ba-card title=\"Appointments\">\r\n        <div class=\"table-responsive mb-3\">\r\n          <table class=\"table align-items-center table-flush\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th scope=\"col\"></th>\r\n                <th scope=\"col\">S.No.</th>\r\n                <th scope=\"col\">Service</th>\r\n                <th scope=\"col\">Therapist</th>\r\n                <th scope=\"col\">Room</th>\r\n                <th scope=\"col\">Start Time</th>\r\n                <th scope=\"col\">End Time</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <ng-container *ngIf=\"appointments && appointments.length > 0\">\r\n                <tr\r\n                  *ngFor=\"let app of appointments;let i=index;\">\r\n                  <td scope=\"row\">{{i+1}}</td>\r\n                  <td><input type=\"checkbox\"/></td>     \r\n                  <td class=\"text-capitalize\">{{app.service.name}}</td>\r\n                  <td class=\"text-capitalize\">{{app.employee.name}}</td>\r\n                  <td class=\"text-capitalize\">{{app.room.name}}</td>\r\n                  <td class=\"text-capitalize\">{{app.startTime}}</td>\r\n                  <td class=\"text-capitalize\">{{app.endTime}}</td>                                \r\n                </tr>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"userList && (userList | searchData: filter).length === 0\">\r\n                <tr>\r\n                  <td colspan=\"8\">\r\n                    <div class=\"font-weight-bold\">User List is unavailable.</div>\r\n                  </td>\r\n                </tr>\r\n              </ng-container>\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </ba-card>\r\n\r\n      <ba-card title=\"Other Services\">\r\n        <div class=\"table-responsive mb-3\" style=\"height: 500px;\">\r\n          <table class=\"table align-items-center table-flush\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th scope=\"col\" style=\"width: 60px;\">S.No.</th>\r\n                <th scope=\"col\" style=\"width: 40%;\">Service</th>\r\n                <th scope=\"col\" style=\"width: 30%;\">Therapist</th>\r\n                <th scope=\"col\" style=\"width: 30%;\">Room</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <ng-container *ngIf=\"addOnServices && addOnServices.length > 0\">\r\n                <tr\r\n                  *ngFor=\"let addOnService of addOnServices;let i=index;\">\r\n                  <th scope=\"row\">{{i+1}}</th>\r\n                    <td class=\"text-capitalize\">\r\n                      <angular2-multiselect [data]=\"ServiceList\" [settings]=\"serviceSetting\" (ngModelChange)=\"serviceChangeEvent($event, i)\" [(ngModel)]=\"addOnService.service\">\r\n                      </angular2-multiselect>\r\n                      <!-- <select class=\"form-control\" name=\"serviceselect\" id=\"serviceselect\" [(ngModel)]=\"addOnService.service\"\r\n                        (ngModelChange)=\"serviceChangeEvent(addOnService, i)\">\r\n                        <option *ngFor=\"let s of ServiceList\" [ngValue]=\"s\">{{s.DESCRIPTION}}</option>\r\n                      </select> -->\r\n                    </td>\r\n                    <td class=\"text-capitalize\">\r\n                      <select class=\"form-control\" name=\"employeeselect\" id=\"employeeselect\"\r\n                      [(ngModel)]=\"addOnService.employee\">\r\n                      <option *ngFor=\"let em of addOnService.employeeList\" [ngValue]=\"em\">{{em.NAME}}</option>\r\n                    </select>\r\n                    </td>\r\n                    <td class=\"text-capitalize\">\r\n                      <select class=\"form-control\" name=\"roomselect\" id=\"roomselect\" [(ngModel)]=\"addOnService.room\">\r\n                        <option *ngFor=\"let r of addOnService.roomList\" [ngValue]=\"r\">{{r.ROOMNO}}({{r.DESCRIPTION}})</option>\r\n                      </select>\r\n                    </td>\r\n                </tr>\r\n              </ng-container>\r\n              <ng-container>\r\n                <div class=\"col-12 col-md-2 control-buttons text-right\" style=\"margin-top: 5px;\">\r\n                  <img src=\"/assets/icon/add.svg\" alt=\"\" (click)=\"addNewRow()\">\r\n                </div>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"userList && (userList | searchData: filter).length === 0\">\r\n                <tr>\r\n                  <td colspan=\"8\">\r\n                    <div class=\"font-weight-bold\">User List is unavailable.</div>\r\n                  </td>\r\n                </tr>\r\n              </ng-container>\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </ba-card>\r\n          \r\n            \r\n          \r\n        \r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\"\r\n          *ngIf=\"mode=='edit' && canBeBillable() && scheduleInput.billableSchedule!=1\" (click)=\"ProceedBill()\">\r\n          Proceed To Bill\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\"\r\n          *ngIf=\"mode=='edit' && canBeBillable() && scheduleInput.billableSchedule==1\" (click)=\"CancelBill()\">\r\n          Cancel Bill\r\n        </button>\r\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"SaveClickEvent()\"\r\n          [disabled]=\"(appointments.length==0 && addOnServices.length == 0) || checkIn.CUSTOMER==null\">Submit</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"DeleteConformation()\"\r\n          *ngIf=\"mode=='edit'&& disableScheduleInput==false && scheduleInput.billableSchedule!=1\">Delete</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Back</button>\r\n      </div>\r\n    \r\n  \r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n\r\n        </button>\r\n        <h4 class=\"modal-title\">Information</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{DialogMessage}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 1605:
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n  <div class=\"row\">\r\n    <ba-card title=\"Check - In List\" baCardClass=\"with-scroll\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\"></ng2-smart-table>\r\n    </ba-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>          \r\n        </button>\r\n        <h4 class=\"modal-title\">Information</h4>\r\n      </div>\r\n\r\n      <div class=\"modal-body\">\r\n        <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n        {{DialogMessage}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Once you delete the Treatment you can't recover it back. Are U sure you want to delete this Treatment?\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n        <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=\"deleteModal.hide()\">Cancel</button>\r\n      </div>!\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 1606:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xlg-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12\" style=\"width:100%;\">\r\n        <ba-card title=\"{{'customer' | labelPipe}} Information\">\r\n            <div>\r\n                <div class=\"form-group\" *ngIf=\"IntegrateTreatmentWithAppointment || mode != 'add'\">\r\n                    <table id=\"tblPatientInfo\">\r\n                        <tr>\r\n                            <td>{{'customer' | labelPipe}} Name</td>\r\n                            <td>: {{model.CUSTOMER.NAME}}</td>\r\n                            <td>Mobile No</td>\r\n                            <td>: {{model.CUSTOMER.MOBILE}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Address</td>\r\n                            <td>: {{model.CUSTOMER.ADDRESS}}</td>\r\n                            <td>{{'customer' | labelPipe}} Id</td>\r\n                            <td>: {{model.CUSTOMER.PATIENT_ID}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Age</td>\r\n                            <td>: {{model.CUSTOMER.Age}}</td>\r\n                            <td>Gender</td>\r\n                            <td>: {{model.CUSTOMER.GENDER}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Membership</td>\r\n                            <td>: {{model.CUSTOMER.Membership}}</td>\r\n                            <td>Email</td>\r\n                            <td style=\"width: 35%;\">: {{model.CUSTOMER.EMAIL}}</td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <div *ngIf=\"!IntegrateTreatmentWithAppointment && mode == 'add'\">\r\n                    <customer-select (customerChanged)=\"customerChanged($event)\"\r\n                        (historyChange)=\"historyChange($event)\">\r\n                    </customer-select>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"employeeselect\" style=\"font-weight: 600;\">Staff</label>\r\n                        <div>\r\n                            <select class=\"form-control\" style=\"width: 200px;\" name=\"employeeselect\" id=\"employeeselect\"\r\n                                [(ngModel)]=\"model.Healer\">\r\n                                <option *ngFor=\"let em of employeeList\" [ngValue]=\"em\">{{em.NAME}}</option>\r\n                            </select>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ba-card>\r\n\r\n        <ba-card title=\"Service Details\">\r\n            <div class=\"table-responsive mb-3\">\r\n              <table class=\"table align-items-center table-flush\">\r\n                <thead class=\"thead-light\">\r\n                  <tr>\r\n                    <th scope=\"col\">S.No.</th>\r\n                    <th scope=\"col\">Service</th>\r\n                    <th scope=\"col\">Quanity</th>\r\n                    <th scope=\"col\">Rate</th>\r\n                    <th scope=\"col\">Amount</th>\r\n                    <th scope=\"col\">Discount</th>\r\n                    <th scope=\"col\">Vat</th>\r\n                    <th scope=\"col\">Gross Amount</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <ng-container *ngIf=\"model.Services && model.Services.length > 0\">\r\n                    <tr\r\n                      *ngFor=\"let app of model.Services;let i=index;\">\r\n                      <td scope=\"row\">{{i+1}}</td>\r\n                      <td class=\"text-capitalize\">{{app.service.name}}</td>\r\n                      <td class=\"text-capitalize\">{{app.quantity}}</td>\r\n                      <td class=\"text-capitalize\">{{app.rate | number: '1.2-2'}}</td>\r\n                      <td class=\"text-capitalize\">{{app.amount  | number: '1.2-2'}}</td>\r\n                      <td class=\"text-capitalize\">{{app.discount  | number: '1.2-2'}}</td>                                \r\n                      <td class=\"text-capitalize\">{{app.vat  | number: '1.2-2'}}</td>                                \r\n                      <td class=\"text-capitalize\">{{app.netAmount  | number: '1.2-2'}}</td>       \r\n                    </tr>\r\n                  </ng-container>\r\n    \r\n                  <ng-container *ngIf=\"userList && (userList | searchData: filter).length === 0\">\r\n                    <tr>\r\n                      <td colspan=\"8\">\r\n                        <div class=\"font-weight-bold\">User List is unavailable.</div>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-container>\r\n    \r\n                </tbody>\r\n                <tfoot class=\"tfoot-light\">\r\n                    <tr>\r\n                        <th scope=\"col\"></th>\r\n                        <th scope=\"col\">Totals</th>\r\n                        <th scope=\"col\">{{model.totalQty}}</th>\r\n                        <th scope=\"col\"></th>\r\n                        <th scope=\"col\">{{model.totAmnt | number: '1.2-2'}}</th>\r\n                        <th scope=\"col\">{{model.discount | number: '1.2-2'}}</th>\r\n                        <th scope=\"col\">{{model.vat | number: '1.2-2'}}</th>\r\n                        <th scope=\"col\">{{model.netAmnt | number: '1.2-2'}}</th>\r\n                      </tr>\r\n                </tfoot>\r\n              </table>\r\n            </div>\r\n          </ba-card>\r\n\r\n        \r\n\r\n        \r\n        \r\n\r\n        \r\n\r\n        <ba-card>\r\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"SaveClickEvent()\">Submit</button>\r\n            <!--<button type=\"button\" class=\"btn btn-danger\" (click)=\"DeleteConformation()\" *ngIf=\"mode=='edit'\">Delete\r\n            </button>\r\n            <button type=\"submit\" class=\"btn btn-primary\" *ngIf=\"mode!='add'\" (click)=\"printTreatmentEntry(model, true)\">Print</button>\r\n        -->\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Back</button>\r\n        </ba-card>\r\n\r\n       \r\n    </div>\r\n\r\n    <!-- END FORM -->\r\n\r\n    <div bsModal #childPreviewModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button class=\"close\" aria-label=\"Close\" (click)=\"childPreviewModal.hide()\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Treatment Documents</h4>\r\n                </div>\r\n                <button id=\"button\" class=\"btn btn-primary confirm-btn\" (click)=\"nextImage($event)\">Next</button>\r\n                <div id=\"container\" style=\"text-align: center;\">\r\n                    <img width=\"600px\" height=\"600px\" style=\"object-fit: contain;\" [src]=\"selectedImage\" id=\"image\"\r\n                        (click)=\"onImageClick($event)\" />\r\n                </div>\r\n\r\n                <div class=\"modal-footer\" style=\"text-align: center;\">\r\n                    <img *ngFor=\"let e of uploadFilesUrl\" height=\"80px\" width=\"80px\" style=\"object-fit: contain;\"\r\n                        src=\"{{e}}\" (click)=\"changeImage($event)\" />\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-sm\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Information</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    {{DialogMessage}}\r\n                </div>\r\n                <!--<div class=\"modal-footer\">\r\n                      <button class=\"btn btn-primary confirm-btn\" (click)=\"hideChildModal()\">Save changes</button>\r\n                      <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=onsubmit()>Save</button>\r\n                  </div>!-->\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-sm\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button class=\"close\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Warning</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    Once you delete the schedule you can't recover it back. Are U sure you want to delete this\r\n                    Schedule?\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n                    <button class=\"btn btn-primary confirm-btn\" type=\"button\"\r\n                        (click)=\"deleteModal.hide()\">Cancel</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ 1607:
/***/ (function(module, exports) {

module.exports = "<style type=\"text/css\">\r\n  input{\r\n    margin-bottom: 2px;\r\n  }\r\n</style>\r\n<div class=\"form-group\">\r\n  <label for=\"customerEntry\" style=\"font-weight:600; font-size: 14px;cursor: pointer;\"\r\n    (click)=\"redirectToPatient()\">{{'customer' | labelPipe}}</label>\r\n  <button type=\"submit\" class=\"btn \" style=\"margin-left:20px;\" (click)=\"onAddNewCustomer()\">New</button>\r\n  <div class=\"row\" *ngIf=\"!CustomerEntryVisible\">\r\n    <div class=\"col-sm-12  col-md-3  col-lg-2 col-xxl-1\">\r\n      <input [(ngModel)]=\"barcode\" style=\"color:black\" type=\"text\" class=\"form-control \" name=\"cusBarcode\"\r\n        id=\"cusBarcode\" [readOnly]=\"mode=='edit'?true:false\" (input)=\"onBarcodeChange($event.target.value)\"\r\n        placeholder=\"Barcode\">\r\n    </div>\r\n\r\n    <div class=\"col-sm-12  col-md-3  col-lg-2 col-xxl-1\">\r\n      <input type=\"text\" (change)=\"mobileChange($event)\" id=\"customerSelectMobile\" list=\"mobileList\" (keyup)=\"mobile_keyup($event)\" [(ngModel)]=\"MobileInput\" class=\"form-control\" autocomplete=\"off\"       \r\n        placeholder=\"Mobile No\">\r\n\r\n      <div style=\"position: absolute; background-color: white; \">\r\n        <datalist *ngIf=\"CustomerList && CustomerList.length>0\" id=\"mobileList\">\r\n          <option *ngFor=\"let r of CustomerList\" [value]=\"r.MOBILE\">\r\n            {{r.NAME}} </option>\r\n        </datalist>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"col-sm-12  col-md-6  col-lg-4 col-xxl-3\">\r\n      <input type=\"text\" (change)=\"customerChange($event)\"  id=\"customerSelect\" list=\"customerList\" (keyup)=\"customer_keyup($event)\" [(ngModel)]=\"CustomerInput\" class=\"form-control\" autocomplete=\"off\"\r\n        placeholder=\"{{'customer' | labelPipe}} Name\">\r\n\r\n      <div style=\"position: absolute; background-color: white; \">\r\n        <datalist *ngIf=\"CustomerList && CustomerList.length>0\" id=\"customerList\" >\r\n          <option *ngFor=\"let r of CustomerList\" [value]=\"r.NAME\">\r\n            {{r.NAME}} </option>\r\n        </datalist>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\"  *ngIf=\"!CustomerEntryVisible\">\r\n    <table id=\"tblPatientInfo\" style=\"margin-left: 15px; margin-top: 10px;\">\r\n      <tr>\r\n          <td>Membership</td>\r\n          <td>: {{SelectedCustomer.Membership}}</td>\r\n          <td>Issued Date</td>\r\n          <td style=\"width: 35%;\">: {{SelectedCustomer.REGDATE | date:'dd MMM yyyy'}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Balance</td>\r\n        <td>: {{SelectedCustomer.balance}}</td>\r\n        <td>Expiry Date</td>\r\n        <td style=\"width: 35%;\">: {{SelectedCustomer.EXPDATE | date:'dd MMM yyyy'}}</td>\r\n    </tr>\r\n    </table>\r\n  </div>\r\n  \r\n</div>\r\n<div *ngIf=\"CustomerEntryVisible\" class=\"form-group\">\r\n  <fieldset style=\"  border: 1px solid #dcdcdc; padding:10px; margin: 0;\">\r\n    <form id=formId class=\"form-horizontal\" [formGroup]=\"customerForm\" (ngSubmit)=\"saveCustomer()\">\r\n      <div class=\"form-group row \" *ngIf=\"customerForm.contains('NAME')\">\r\n        <label for=\"name\" class=\"col-sm-2 form-control-label \">{{'customer' | labelPipe}} Name</label>\r\n        <div class=\"col-sm-6 \">\r\n          <input style=\"color:black\" type=\"text \" class=\"form-control \" name=\"name\" id=\"name\" formControlName=\"NAME\"\r\n            placeholder=\"Name \">\r\n          <div\r\n            *ngIf=\"customerForm.controls['NAME'].invalid && (isSubmitting || customerForm.controls['NAME'].dirty || customerForm.controls['NAME'].touched)\"\r\n            class=\"invalid-feedback d-block\">\r\n            <small *ngIf=\"customerForm.controls['NAME'].errors.required\">{{'customer' | labelPipe}} Name is required.</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row \" *ngIf=\"customerForm.contains('ADDRESS')\">\r\n        <label for=\"address\" class=\"col-sm-2 form-control-label \">Address</label>\r\n        <div class=\"col-sm-6 \">\r\n          <input style=\"color:black\" type=\"text \" class=\"form-control \" name=\"address\"\r\n            id=\"address\" placeholder=\"Address\" formControlName=\"ADDRESS\">\r\n          <div\r\n            *ngIf=\"customerForm.controls['ADDRESS'].invalid && (isSubmitting || customerForm.controls['ADDRESS'].dirty || customerForm.controls['ADDRESS'].touched)\"\r\n            class=\"invalid-feedback d-block\">\r\n            <small *ngIf=\"customerForm.controls['ADDRESS'].errors.required\">Address is required.</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\" *ngIf=\"customerForm.contains('Membership')\">\r\n        <label for=\"Membership\" class=\"col-sm-2 form-control-label\">Membership</label>\r\n        <div class=\"col-sm-6 \">\r\n          <select class=\"form-control\" placeholder=\"Select Membership\" formControlName=\"Membership\">\r\n            <option value=\"Gold\">Gold</option>\r\n            <option value=\"Silver\">Silver</option>\r\n            <option value=\"Platinum\">Platinum</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row \" *ngIf=\"customerForm.contains('MOBILE')\">\r\n        <label for=\"mobile\" class=\"col-sm-2 form-control-label \">Mobile</label>\r\n        <div class=\"col-sm-6 \">\r\n          <input style=\"color:black\" type=\"number\" (input)=\"onMobileChange($event)\" formControlName=\"MOBILE\"\r\n            class=\"form-control \" name=\"mobile\" id=\"mobile\" placeholder=\"Mobile No\">\r\n            <div\r\n                *ngIf=\"customerForm.controls['MOBILE'].invalid && (isSubmitting || customerForm.controls['MOBILE'].dirty || customerForm.controls['MOBILE'].touched)\"\r\n                class=\"invalid-feedback d-block\">\r\n                <small *ngIf=\"customerForm.controls['MOBILE'].errors.required\">Mobile is required.</small>\r\n            </div>\r\n        </div>\r\n      </div>   \r\n      <div class=\"form-group row\" *ngIf=\"customerForm.contains('DOB')\">\r\n        <label for=\"DOB\" class=\"col-sm-2 form-control-label\">DOB</label>\r\n        <div class=\"col-sm-6 \">\r\n          <input  (change)=\"changeDOB($event)\" style=\"color:black\" type=\"date\"\r\n            class=\"form-control \" name=\"DOB\" id=\"DOB\" placeholder=\"Date of Birth \" formControlName=\"DOB\">\r\n          <div\r\n            *ngIf=\"customerForm.controls['DOB'].invalid && (isSubmitting || customerForm.controls['DOB'].dirty || customerForm.controls['DOB'].touched)\"\r\n            class=\"invalid-feedback d-block\">\r\n            <small *ngIf=\"customerForm.controls['DOB'].errors.required\">Date of Birth is required.</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\" *ngIf=\"customerForm.contains('AGE')\">\r\n        <label for=\"gender\" class=\"col-sm-2 form-control-label\">Age</label>\r\n        <div class=\"col-sm-6 \">\r\n          <input style=\"color:black\" type=\"text \" class=\"form-control \" name=\"age\" id=\"age\"\r\n            placeholder=\"Age \" formControlName=\"AGE\">\r\n          <div\r\n            *ngIf=\"customerForm.controls['AGE'].invalid && (isSubmitting || customerForm.controls['AGE'].dirty || customerForm.controls['AGE'].touched)\"\r\n            class=\"invalid-feedback d-block\">\r\n            <small *ngIf=\"customerForm.controls['AGE'].errors.required\">Age is required.</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\" *ngIf=\"customerForm.contains('GENDER')\">\r\n        <label for=\"gender\" class=\"col-sm-2 form-control-label\">Gender</label>\r\n        <div class=\"col-sm-6 \">\r\n          <select class=\"form-control\" [(ngModel)]=\"gender\" placeholder=\"Select Gender\" formControlName=\"GENDER\">\r\n            <option value=\"Male\">Male</option>\r\n            <option value=\"Female\">Female</option>\r\n            <option value=\"Others\">Others</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      \r\n      <div class=\"form-group row \" *ngIf=\"customerForm.contains('EMAIL')\">\r\n        <label for=\"email\" class=\"col-sm-2 form-control-label \">Email</label>\r\n        <div class=\"col-sm-6 \">\r\n          <input style=\"color:black\" type=\"email\" class=\"form-control \" name=\"email\"\r\n            id=\"email\" placeholder=\"Email Address\" formControlName=\"EMAIL\">\r\n          <div\r\n            *ngIf=\"customerForm.controls['EMAIL'].invalid && (isSubmitting || customerForm.controls['EMAIL'].dirty || customerForm.controls['EMAIL'].touched)\"\r\n            class=\"invalid-feedback d-block\">\r\n            <small *ngIf=\"customerForm.controls['EMAIL'].errors.required\">Email Address is required.</small>\r\n            <small *ngIf=\"customerForm.controls['EMAIL'].errors.pattern\">Invalid Email Address.</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      \r\n\r\n      <div class=\"form-group row \" *ngIf=\"customerForm.contains('PATIENT_ID')\">\r\n        <label for=\"patientid\" class=\"col-sm-2 form-control-label \">{{'customer' | labelPipe}} ID</label>\r\n        <div class=\"col-sm-6 \">\r\n          <input style=\"color:black\" type=\"text \" class=\"form-control \"\r\n            name=\"patientid\" id=\"patientid\" placeholder=\"{{'customer' | labelPipe}} ID\" formControlName=\"PATIENT_ID\">\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"form-group row \" *ngIf=\"customerForm.contains('Patient_Weight')\">\r\n        <label for=\"address\" class=\"col-sm-2 form-control-label \">{{'customer' | labelPipe}} Weight</label>\r\n        <div class=\"col-sm-6 \">\r\n          <input  style=\"color:black\" type=\"text \" class=\"form-control \" name=\"patientid\"\r\n            id=\"patientid\" placeholder=\"{{'customer' | labelPipe}} Weight\" formControlName=\"Patient_Weight\">\r\n        </div>\r\n        \r\n\r\n      </div>\r\n      <div class=\"form-group row \">\r\n        <button type=\"submit\" [disabled]=\"false\" class=\"btn btn-primary\" \r\n          style=\"margin-top:3px;margin-left: 10px;\">Save\r\n          {{'customer' | labelPipe}}</button>\r\n      </div>\r\n    </form>\r\n  </fieldset>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n\r\n        </button>\r\n        <h4 class=\"modal-title\">Information</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{DialogMessage}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 1608:
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n    <div class=\"row\">\r\n      <input type=\"date\" name=\"date\" id=\"date\" value=\"{{ScheduleDate}}\"\r\n            (change)=\"OnDateChangeEvent($event.target.value)\" />\r\n    </div>\r\n    <div class=\"row\">\r\n      <ba-card title=\"Customers\" baCardClass=\"with-scroll\">\r\n        <ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\r\n      </ba-card>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ 1609:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4 col-md-3 col-lg-3 col-xl-2\">\r\n            <button class=\"btn btn-primary\" style=\"margin-bottom: 5px;\" (click)=\"onAddClick()\">New\r\n                Appointment</button>\r\n        </div>\r\n        <div class=\"col-xs-6 col-sm-4 col-md-3  col-lg-2\">\r\n            <nepali-date-picker name=\"nepaliDateFrom\" [id]=\"'nepaliDatefrom'\"\r\n                (change)=\"changeEntryDate($event.detail.value,'BS')\" [label]=\"'yyyy-mm-dd'\"\r\n                [(ngModel)]=\"this.ScheduleDateBS\" >\r\n            </nepali-date-picker>\r\n        </div>\r\n        <div class=\"col-xs-6 col-sm-4 col-md-2  col-lg-2\">\r\n            <input type=\"date\" class=\"date-input form-control\" [(ngModel)]=\"this.ScheduleDateAD\"\r\n                (change)=\"changeEntryDate($event.target.value,'AD')\" style=\"max-width: 150px; height: 35px;\">\r\n        </div>\r\n        <div class=\"col-xs-10 col-sm-10 col-md-8  col-lg-4 col-xl-3\">\r\n            <label for=\"outlet\" class=\"col-sm-2\" style=\"position: relative;top: 10px;\">Outlet</label>\r\n            <div class=\"col-sm-10\" >\r\n                <select class=\"form-control\" id=\"outlet\" (change)=\"changeEntryDate(ScheduleDateAD,'AD')\" [(ngModel)] = \"selectedBranch\">\r\n                    <option *ngFor = \"let branch of userBranches\" value=\"{{branch.branchId}}\">{{branch.branchName}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"w-100 d-inline-block d-md-none\">.</div>\r\n        <div class=\"col-xs-6 col-sm-4 col-md-2  col-lg-2 col-xl-2\">\r\n            <input #inputBox type=\"number\" name=\"searchCustomer\" id=\"searchCustomer\"\r\n                style=\"max-width: 150px;height:35px;align-self:self-start;\" [(ngModel)]=\"searchCustomer\"\r\n                (keydown.enter)=\"customerSearchChange($event)\" placeholder=\"Search Mobile\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"col-xs-6 col-sm-4 col-md-2  col-lg-2 col-xl-2\">\r\n            <button class=\"btn btn-primary\" style=\"margin-bottom: 5px;\" (click)=\"showDetails()\">View Details</button>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"row\">\r\n        \r\n        \r\n         <input type=\"date\" name=\"date\" id=\"date\" value=\"{{ScheduleDate}}\"\r\n            (change)=\"OnDateChangeEvent($event.target.value)\" /> \r\n         \r\n        \r\n            \r\n         <input type=\"text\" (change)=\"customerSearchChange($event)\" id=\"customer\"\r\n        list=\"dynmicUserIds\" [(ngModel)]=\"searchCustomer\" class=\"form-control\" placeholder=\"Customer\" style=\"width: 150px;\">\r\n\r\n          <datalist id=\"dynmicUserIds\" (keyEnter)=\"keyenterCustomer($event)\" >\r\n            <option *ngFor=\"let r of CustomerList | customerSearch: searchCustomer | slice: 0: 10\" [value]=\"r.NAME\" > \r\n              {{r.NAME}} </option>\r\n          </datalist> \r\n        </div>\r\n        <button class=\"btn btn-primary\" style=\"margin-bottom: 10px;margin-left:18px;margin-right:20px;float:right\"\r\n            (click)=\"showDetails()\">View Details</button> \r\n    </div> -->\r\n\r\n    <div class=\"dayWiseSchedule\">\r\n        <div class=\"row\" style=\"height: 30px; line-height: 30px;  vertical-align: middle;  \">{{ScheduleDate |\r\n            date:'EEEE, MMMM d, y'}}</div>\r\n\r\n        <div class=\"row\" id=\"tblSchedule\" style=\"min-height: 380px\">\r\n            <table>\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"headcol\"\r\n                            style=\"border: 1px solid #dcdcdc;font-size: 17px;font-weight:400;text-shadow: 0px 1px 2px;width:110px;height: 41px; text-align: center; line-height: 40px;margin-top: -1px;\">\r\n                            Employee\r\n                        </th>\r\n                        <th *ngFor=\"let h of hourHeaderList\" [attr.colspan]=\"SectionPerHour\"\r\n                            style=\" border: 1px solid #dcdcdc;height: 30px\">{{h}}</th>\r\n                    </tr>\r\n                    <tr style=\"height: 10px;\">\r\n                        <th></th>\r\n                        <th [style.max-width]=\"minuteCellWidth+'px'\" [style.min-width]=\"minuteCellWidth+'px'\"\r\n                            style=\"border: 1px solid #dcdcdc;\" *ngFor=\"let m of minList\">\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let e of employeeList \" style=\"border: 1px solid #dcdcdc;\">\r\n                        <td class=\"headcol\"\r\n                            style=\"border: 1px solid #dcdcdc;font-size:11px;font-weight:bold; width:110px; vertical-align: middle; height: 60px;\">\r\n                            {{e.NAME}}\r\n                        </td>\r\n                        <td id=\"tdDataCont\" (click)=\"roomCellClick(e)\" *ngFor=\"let a of e.minList\"\r\n                            [attr.colspan]=\"a.colspan\" [style.max-width]=\"minuteCellWidth+'px'\"\r\n                            [style.min-width]=\"minuteCellWidth+'px'\">\r\n                            <div *ngFor=\"let m of a.appointments\" class=\"emptooltip\">\r\n                                <div class=\"timeline\" [style.background] = \"getAppointmentBackground(m)\" \r\n                                [style.color]=\"getAppointmentTextColor(m)\" (click)=\"labelClickEvent(m.sid)\">\r\n                                    {{m.customer}}<br>{{m.service}}<br>{{m.room}}\r\n                                </div>\r\n                                <span *ngIf=\"IntegrateTreatmentWithAppointment\" class=\"tooltiptext\">\r\n                                    <table id=\"tooltipTable\">\r\n                                        <tr>\r\n                                            <td style=\"width: 100px\">\r\n                                                Patient</td>\r\n                                            <td style=\"font-weight: 600; width: 150px;\">\r\n                                                : {{m.customer}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td style=\"width: 100px\">\r\n                                                Service</td>\r\n                                            <td style=\"font-weight: 600; width: 150px;\">\r\n                                                : {{m.service}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td style=\"width: 100px\">\r\n                                                Time</td>\r\n                                            <td style=\"font-weight: 600; width: 150px;\">\r\n                                                : {{m.time}}</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td colspan=\"2\">\r\n                                                <button class=\"btn btn-primary\" style=\"width:100%\"\r\n                                                    (click)=\"treatmentClickEvent(m.sid)\">Treatment</button>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </table>\r\n                                </span>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\" style=\"margin-top:50px;\" *ngIf=\"DisplayRoomTimeLine\">\r\n        <table id=\"dayWiseSchedule\">\r\n            <tr>\r\n                <td rowspan=\"3\"\r\n                    style=\"color: black;font-size: 17px;font-weight: bold;text-shadow: 0px 1px 2px;width:100px\">\r\n                    Rooms Schedule</td>\r\n                <td [attr.colspan]=\"totalNoOfMinCell\">{{ScheduleDate | date:'EEEE, MMMM d, y'}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td [attr.rowspan]=\"roomList.length+3\">\r\n                    <div id=\"tblSchedule\" style=\"width:1000px; overflow:scroll\">\r\n                        <table>\r\n                            <thead>\r\n                                <tr>\r\n                                    <th *ngFor=\"let h of hourHeaderList\" [attr.colspan]=\"SectionPerHour\"\r\n                                        style=\" border: 1px solid #dcdcdc; \">{{h}}</th>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th [style.max-width]=\"minuteCellWidth+'px'\"\r\n                                        [style.min-width]=\"minuteCellWidth+'px'\" style=\"border: 1px solid #dcdcdc;\"\r\n                                        *ngFor=\"let m of minList\"></th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let e of roomList\" style=\"border: 1px solid #dcdcdc;\">\r\n                                    <td [attr.colspan]=\"totalNoOfMinCell\">\r\n                                <tr>\r\n                                    <td id=\"tdDataCont\" (click)=\"roomCellClick(e)\" *ngFor=\"let m of e.minList\"\r\n                                        [attr.colspan]=\"m.colspan\" [style.max-width]=\"m.width\"\r\n                                        [style.min-width]=\"m.width\">\r\n                                        <label class=\"timeline\" *ngIf=\"m.booked==1\"\r\n                                            (click)=\"labelClickEvent(m.sid)\">{{m.room}}<br>{{m.service}}<br>{{m.customer}}</label>\r\n\r\n                                    </td>\r\n                                </tr>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    </td>\r\n    </tr>\r\n    <tr></tr>\r\n    <tr *ngFor=\"let e of roomList\" style=\"border: 1px solid #dcdcdc;\">\r\n        <td style=\"font-size:11px;font-weight:bold; height:52px\">{{e.ID}}({{e.NAME}})</td>\r\n    </tr>\r\n    <tr style=\"height:7px\">\r\n        <td>\r\n            <div style=\"height:5px\"></div>\r\n        </td>\r\n    </tr>\r\n    </table>\r\n</div>\r\n\r\n<!--<daypilot-scheduler [config]=\"config\" [events]=\"events\"  #scheduler></daypilot-scheduler>-->\r\n<!--<table>\r\n        <tr style=\"display: block; float: left;\">\r\n          <td rowspan=\"4\" colspan=\"4\" *ngFor=\"let h of hourHeaderList\" style=\" border: 1px solid #dcdcdc;display: block;height:100px\">{{h}}</td>\r\n        </tr>\r\n        <tr style=\"display: block; float: left;\">\r\n          <td *ngFor=\"let m of minList\" style=\" border: 1px solid #dcdcdc;display: block;height:25px;width:25px\"></td>\r\n        </tr>\r\n        <tr *ngFor=\"let e of employeeList\" style=\"display: block; float: left;\">\r\n\r\n          <td [attr.colspan]=\"totalNoOfMinCell\" style=\"display: block;\">\r\n            <tr style=\"display: block; float: left;margin-top:-2px\">\r\n              <td style=\"display: block;width:50px;height:25px\"  id=\"tdDataCont\" *ngFor=\"let m of e.minList\"  [style.max-height]=\"m.width\" [style.min-height]=\"m.width\"\r\n                (click)=\"CellClick(m)\">\r\n                <div ><label style=\"width:50px;background:brown\"  [style.height]=\"m.width\" *ngIf=\"m.booked==1\">{{m.room}}<br>{{m.service}}<br>{{m.customer}}</label></div>\r\n              </td>\r\n            </tr>\r\n          </td>\r\n        </tr>\r\n          <tr *ngFor=\"let e of roomList\" style=\"display: block; float: left;\">\r\n               <td [attr.colspan]=\"totalNoOfMinCell\" style=\"display: block;\">\r\n                    <tr style=\"display: block; float: left;margin-top:-2px\">\r\n                        <td style=\"display: block;width:50px;height:25px\" id=\"tdDataCont\" *ngFor=\"let m of e.minList\"  [style.max-height]=\"m.width\" [style.min-height]=\"m.width\">\r\n                            <div><label style=\"width:50px;background:brown\" *ngIf=\"m.booked==1\" [style.height]=\"m.width\">{{m.room}}{{m.service}}{{m.customer}}</label></div>\r\n                        </td>\r\n                    </tr>\r\n                </td>\r\n            </tr>\r\n\r\n      </table>-->\r\n\r\n\r\n</div>\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n\r\n                </button>\r\n                <h4 class=\"modal-title\">Information</h4>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n                <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n                {{DialogMessage}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" bsModal #scheduleInputModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\"\r\n    role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-md\">\r\n        <div #employeeEmailSchedule class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button class=\"close\" aria-label=\"Close\" (click)=\"scheduleInputModal.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n\r\n                </button>\r\n                <h4 class=\"modal-title\">Schedule:</h4>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"time\">Time</label>\r\n                    <!--<input type=\"input\" class=\"form-control\" id=\"time\" [(ngModel)]=\"scheduleInput.startTime\">-->\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #ScheduleForMail=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button class=\"close\" aria-label=\"Close\" (click)=\"ScheduleForMail.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n\r\n                </button>\r\n                <h4 class=\"modal-title\">Employee Schedule:</h4>\r\n            </div>\r\n\r\n            <div class=\"modal-body\" style=\"overflow: scroll;\">\r\n                <div class=\"row\" id=\"employeeSchedule\"\r\n                    style=\" background: white;margin-left:20px;padding-right: 5px;width:750px; height: 400px;\">\r\n                    <label style=\"width:100%;font-weight: bold;font-size: 16px;text-decoration: underline;\">Date :\r\n                        {{rtFormat}} AD, {{rtFormatNepali}} BS </label>\r\n                    <!-- <div  *ngFor=\"let e of et.EMPLOYEES\" style=\"margin-bottom:25px\" class=\"row\">\r\n                        <label\r\n                            style=\"width:100%;font-weight: bold;font-size: 14px;text-decoration: underline;\">{{e.EMPLOYEENAME}}</label><br>\r\n                        <div style=\"width:20%;float:left;font-weight: bold;font-size: 12px;text-decoration: underline;\">\r\n                            Time </div>\r\n                        <div style=\"width:12%;float:left;font-weight: bold;font-size: 12px;text-decoration: underline;\">\r\n                            Service</div>\r\n                        <div style=\"width:12%;float:left;font-weight: bold;font-size: 12px;text-decoration: underline;\">\r\n                            Customer</div>\r\n                            <div style=\"width:11%;float:left;font-weight: bold;font-size: 12px;text-decoration: underline;\">\r\n                                Mobile</div>\r\n                        <div style=\"width:15%;float:left;font-weight: bold;font-size: 12px;text-decoration: underline;\">\r\n                            Room No.</div>\r\n\r\n                    <div style=\"width:8%;float:left;font-weight: bold;font-size: 12px;text-decoration: underline;\">\r\n                        Fee</div>\r\n                        <div  *ngFor=\"let t of e.BOOKEDTIMES\">\r\n                            <div style=\"clear:left\">\r\n                                <span style=\"width:20%;float:left;font-size: 12px;\">\r\n                                    {{t.STARTTIME}} &nbsp;&nbsp;</span>\r\n                                <span style=\"width:12%;float:left;font-size: 12px;\">{{t.SERVICE}}</span>\r\n                                <span style=\"width:12%;float:left;font-size: 12px;\">{{t.CUSTOMER}}</span>\r\n                                <span style=\"width:11%;float:left;font-size: 12px;\">{{t.MOBILE}}</span>\r\n                                <span style=\"width:15%;float:left;font-size: 12px;\">{{t.ROOM}}</span>\r\n                                <span style=\"width:8%;float:left;font-size: 12px;\">{{t.TYPE}}</span>\r\n                                <span\r\n                                    style=\"width:10%;float:left;font-size: 12px;color:blue;cursor: pointer; margin-left: 5px\"\r\n                                    (click)=\"labelClickEvent(t.SCHEDULEID)\">Details</span>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div> -->\r\n                    <div *ngIf=\"rt.length == 0\">\r\n                        <h1 style=\"margin-left:100px; margin-top:50px;\"> NO SCHEDULE</h1>\r\n                    </div>\r\n                    <div *ngFor=\"let r of rt.ROOMS\" style=\"margin-bottom:25px\" class=\"row\">\r\n                        <label\r\n                            style=\"width:100%;font-weight: bold;font-size: 14px;text-decoration: underline;\">{{r.ROOMNO}}</label><br>\r\n                        <div style=\"width:10%;float:left;font-weight: bold;font-size: 12px;text-decoration: underline;\">\r\n                            Time </div>\r\n                        <div style=\"width:12%;float:left;font-weight: bold;font-size: 12px;text-decoration: underline;\">\r\n                            Service</div>\r\n                        <div style=\"width:12%;float:left;font-weight: bold;font-size: 12px;text-decoration: underline;\">\r\n                            Customer</div>\r\n                        <div style=\"width:11%;float:left;font-weight: bold;font-size: 12px;text-decoration: underline;\">\r\n                            Mobile</div>\r\n                        <div style=\"width:15%;float:left;font-weight: bold;font-size: 12px;text-decoration: underline;\">\r\n                            Employee</div>\r\n\r\n                        <div style=\"width:8%;float:left;font-weight: bold;font-size: 12px;text-decoration: underline;\">\r\n                            Fee</div>\r\n                        <div *ngFor=\"let t of r.BOOKEDTIMES\">\r\n                            <div style=\"clear:left\">\r\n                                <span style=\"width:10%;float:left;font-size: 12px;\">\r\n                                    {{t.STARTTIME}} &nbsp;&nbsp;</span>\r\n                                <span style=\"width:12%;float:left;font-size: 12px;\">{{t.SERVICE}}</span>\r\n                                <span style=\"width:12%;float:left;font-size: 12px;\">{{t.CUSTOMER}}</span>\r\n                                <span style=\"width:11%;float:left;font-size: 12px;\">{{t.MOBILE}}</span>\r\n                                <span style=\"width:15%;float:left;font-size: 12px;\">{{t.EMPLOYEE}}</span>\r\n                                <span *ngIf=\"t.TYPE!=null\"\r\n                                    style=\"width:8%;float:left;font-size: 12px;\">{{t.TYPE}}</span>\r\n                                <span *ngIf=\"t.TYPE==null\" style=\"width:8%;float:left;font-size: 12px;\">&nbsp;</span>\r\n                                <!-- <span\r\n                                    style=\"width:10%;float:left;font-size: 12px;color:blue;cursor: pointer; margin-left: 5px\"\r\n                                    (click)=\"labelClickEvent(t.SCHEDULEID)\">Details</span> -->\r\n                                <span class=\"target-light fa fa-ellipsis-h\"\r\n                                    style=\"width:10%;float:left;font-size: 12px;color:blue;cursor: pointer; margin-left: 5px\"\r\n                                    (click)=\"labelClickEvent(t.SCHEDULEID)\"></span>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-primary confirm-btn\" (click)=\"sendEmail()\">Send Mail</button>\r\n                <button class=\"btn btn-primary confirm-btn\" (click)=\"downloadPDF()\">Download PDF</button>\r\n                <button class=\"btn btn-primary confirm-btn\" type=\"button\"\r\n                    (click)=\"ScheduleForMail.hide()\">Cancel</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<customer-all-schedule [mobile]=\"searchCustomer\" [date]=\"ScheduleDate\" #customerSchedule></customer-all-schedule>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 1610:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <ba-card title=\"Schedule Input\">\r\n      <div style=\"height: 100%;\">\r\n        <fieldset style=\" border: none;padding: 0; margin: 0;\" [disabled]=\"disableScheduleInput\">\r\n          <div class=\"form-group\" *ngIf=\"IntegrateTreatmentWithAppointment || mode != 'add'\">\r\n            <table id=\"tblPatientInfo\">\r\n              <tr>\r\n                <td>{{'customer' | labelPipe}} Name</td>\r\n                <td>: {{scheduleInput.CUSTOMER?.NAME}}</td>\r\n                <td>Mobile No</td>\r\n                <td>: {{scheduleInput.CUSTOMER?.MOBILE}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Address</td>\r\n                <td>: {{scheduleInput.CUSTOMER?.ADDRESS}}</td>\r\n                <td>{{'customer' | labelPipe}} Id</td>\r\n                <td>: {{scheduleInput.CUSTOMER?.PATIENT_ID}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Check In</td>\r\n                <td>: {{scheduleInput.checkInTime}}</td>\r\n                <td>Entry User</td>\r\n                <td>: {{scheduleInput.UserId}}</td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n          <customer-select (customerChanged)=\"customerChanged($event)\"\r\n            *ngIf=\"!IntegrateTreatmentWithAppointment && mode == 'add'\"></customer-select>\r\n\r\n          <div class=\"form-group\">\r\n            \r\n            <div class=\"row\">\r\n              <div class=\"form-group col-sm-12  col-md-3  col-lg-2 col-xxl-1\">\r\n                <label for=\"miti\">Miti</label>\r\n                <nepali-date-picker name=\"nepaliDateFrom\" [id]=\"'nepaliDatefrom'\"\r\n                  (change)=\"changeEntryDate($event.detail.value, 'BS')\" [label]=\"'yyyy-mm-dd'\"\r\n                  [(ngModel)]=\"ScheduleDateBS\">\r\n                </nepali-date-picker>\r\n              </div>\r\n              <div class=\"form-group col-sm-12  col-md-3  col-lg-2 col-xxl-1\">\r\n                <label for=\"date\">Date</label>\r\n                <input type=\"date\" class=\"form-control\" id=\"date\" \r\n                  [disabled]=\"multipleServiceList.length>0 || mode=='edit'\" [(ngModel)]=\"scheduleInput.DATE\"\r\n                  (change)=\"changeEntryDate($event.target.value, 'AD')\">\r\n              </div>\r\n\r\n              <div class=\"form-group col-sm-12  col-md-6 col-lg-4 col-xxl-3\">\r\n                <label for=\"outlet\">Outlet</label>\r\n                <select class=\"form-control\" id=\"outlet\" [(ngModel)] = \"scheduleInput.branch\"\r\n                (ngModelChange)=\"getServices(scheduleInput.branch.branchId)\">\r\n                    <option *ngFor = \"let branch of userBranches\" [ngValue]=\"branch\">{{branch.branchName}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n            \r\n          <div class=\"row\" *ngIf=\"mode=='edit' && !enableCheckIn\">\r\n            <div class=\"form-group col-md-4 col-xl-3\">\r\n              <label for=\"Status\">Status</label>\r\n              <select class=\"form-control\" name=\"Status\" id=\"Status\" [(ngModel)]=\"scheduleInput.STATUS\">\r\n                <option *ngFor=\"let s of statusList\" [ngValue]=\"s.status\">{{s.description}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\" border: 1px solid #dcdcdc;padding:10px;\" class=\"col-12 col-xxl-6\">\r\n            <fieldset style=\" border: none;padding: 0; margin: 0;\"\r\n              [disabled]=\"scheduleInput.DATE == null || scheduleInput.DATE == ''\">\r\n              <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                  <label for=\"sserviceselect\">Service</label>\r\n                  <angular2-multiselect [data]=\"ServiceList\" [settings]=\"serviceSetting\" (ngModelChange)=\"serviceChangeEvent($event)\" [(ngModel)]=\"selectedService\">\r\n                  </angular2-multiselect>\r\n                </div>\r\n                <div class=\"form-group col-md-2 col-lg-1\">\r\n                  <label for=\"pax\">Pax</label>\r\n                    <input  class=\"form-control\" name=\"pax\" id=\"pax\" (change)=\"paxChanged($event.target.value)\" [(ngModel)]=\"multipleServiceObj.PAX\"/>\r\n                </div>\r\n                <div class=\"form-group col-lg-5 col-md-4\">\r\n                  <label for=\"employeeselect\" style=\"margin-left:10px\">Staff</label>\r\n                  <label style=\"width: 160px;font-size: 13px;margin-left:10px\">\r\n                    <input type=\"checkbox\" style=\"vertical-align: middle\"\r\n                      (change)=\"$event.target.checked?(multipleServiceObj.EMPLOYEE_BOOKED_BYCUSTOMER=1):(multipleServiceObj.EMPLOYEE_BOOKED_BYCUSTOMER=0)\"\r\n                      [checked]=\"multipleServiceObj.EMPLOYEE_BOOKED_BYCUSTOMER==1\"\r\n                      [disabled]=\"mode == 'edit' && multipleServiceObj.EMPLOYEE_BOOKED_BYCUSTOMER==1 && user.Role == 'user' && multipleServiceObj.SNO > 0\">\r\n                    Is Booked By {{'customer' | labelPipe}}\r\n                  </label>\r\n\r\n                  <angular2-multiselect [data]=\"employeeList\" [settings]=\"empSetting\" [(ngModel)]=\"multipleServiceObj.EMPLOYEE\">\r\n                  </angular2-multiselect>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                  <label for=\"roomselect\">Room</label>\r\n                  <angular2-multiselect [data]=\"roomList\" [settings]=\"roomSetting\" [(ngModel)]=\"multipleServiceObj.ROOM\">\r\n                  </angular2-multiselect>\r\n                </div>\r\n\r\n                <div class=\"form-group col-12 col-md-6\">\r\n                  <label for=\"roomselect\">Fee</label>\r\n                  <select class=\"form-control\" name=\"typeselect\" id=\"typeselect\" [(ngModel)]=\"multipleServiceObj.TYPE\"\r\n                    (ngModelChange)=\"TypeChange(multipleServiceObj.TYPE)\">\r\n                    <option Value=\"NotPaid\">NotPaid </option>\r\n                    <option Value=\"Paid\">Paid</option>\r\n                    <option Value=\"Free\">Free</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\" style=\"margin: 20px;\">\r\n                <button type=\"button\" *ngFor=\"let time of appTimeSlots\"\r\n                    class=\"btn btn-primary\" (click)=\"selectAppointmentTime(time)\" style=\"margin-right: 10px;\">{{time.time}}</button>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"form-group col-12 col-md-10 col-sm-10 col-xs-8\">\r\n                  <label for=\"time\">Time</label>\r\n                  <!--<input type=\"input\" class=\"form-control\" id=\"time\" [(ngModel)]=\"scheduleInput.startTime\">-->\r\n                  <div class=\"demo row\">\r\n                    <div class=\"col-12 col-md-5 col-sm-4 col-xs-3\">\r\n                      <input type=\"time\" class=\"form-control\" style=\"width: 150px;\"\r\n                        (change)=\"starttimeChange($event.target.value)\" [(ngModel)]=\"StartTime\" />\r\n                    </div>\r\n                    <div class=\"col-12 col-md-1 col-sm-1  col-xs-1\">\r\n                      <label style=\"margin: 10px;\">To</label>\r\n                    </div>\r\n                    <div class=\"col-12 col-md-5 col-sm-4  col-xs-3\">\r\n                      <input type=\"time\" class=\"form-control\" style=\"width: 150px;\" disabled [(ngModel)]=\"EndTime\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12 col-md-2 col-sm-2 col-xs-2\">\r\n                  <button type=\"button\"\r\n                    [disabled]=\"multipleServiceObj==null|| multipleServiceObj.SERVICE==null || multipleServiceObj.EMPLOYEE==null || multipleServiceObj.ROOM==null || scheduleInput.billableSchedule==1\"\r\n                    class=\"btn btn-primary\" (click)=\"AddClickEvent()\" style=\"margin-top:20px;\">Add</button>\r\n                </div>\r\n              </div>\r\n\r\n              <Table id=\"BlueHeaderResizableTable\" style=\"width:100%;max-height:300px\">\r\n                <thead>\r\n                  <tr>\r\n                    <th style=\"width:30px\">SN.</th>\r\n                    <th style=\"width:35%\">Service</th>\r\n                    <th style=\"width:35%\">Therapist</th>\r\n                    <th style=\"width:20%\">Room</th>\r\n                    <th style=\"width:10%\">Time</th>\r\n                    <th style=\"width:60px\"></th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody class=\"tabelRowWithAutoScroll\">\r\n                  <tr *ngFor=\"let ir of multipleServiceList;let i=index\" style=\"height:28px;font-size:small\">\r\n                    <td style=\"width:30px\">{{i+1}}</td>\r\n                    <td style=\"width:35%\">{{ir.SERVICE.DESCRIPTION}}</td>\r\n                    <td style=\"width:35%\">{{ir.EMPLOYEE.NAME}}</td>\r\n                    <td style=\"width:20%\">{{ir.ROOM.ROOMNO}}</td>\r\n                    <td style=\"width:10%\">{{ir.STARTTIME}}</td>\r\n                    <td>\r\n                      <button class=\"glyphicon glyphicon-edit\" (click)=\"editSchedule(i)\"\r\n                        [disabled]=\"scheduleInput.billableSchedule==1\"></button>\r\n                      <button class=\"glyphicon glyphicon-remove\" (click)=\"removeSchedule(i)\" style=\"float: right;\"\r\n                        [disabled]=\"(mode == 'edit' && ir.EMPLOYEE_BOOKED_BYCUSTOMER==1 && user.Role == 'user') || scheduleInput.billableSchedule==1\"></button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </Table>\r\n            </fieldset>\r\n          </div>\r\n        </fieldset>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\"\r\n          *ngIf=\"false && mode=='edit' && canBeBillable() && scheduleInput.billableSchedule!=1\" (click)=\"ProceedBill()\">\r\n          Proceed To Bill\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\"\r\n          *ngIf=\"mode=='edit' && canBeBillable() && scheduleInput.billableSchedule==1\" (click)=\"CancelBill()\">\r\n          Cancel Bill\r\n        </button>\r\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"SaveClickEvent()\"\r\n          [disabled]=\"multipleServiceList.length==0 || scheduleInput.CUSTOMER==null || scheduleInput.DATE==null ||disableScheduleInput || scheduleInput.billableSchedule==1\">Submit</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"DeleteConformation()\"\r\n          *ngIf=\"mode=='edit'&& disableScheduleInput==false && scheduleInput.billableSchedule!=1\">Delete</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Back</button>\r\n      </div>\r\n    </ba-card>\r\n  </div>\r\n</div>\r\n\r\n<div bsModal #childEmployeeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"childEmployeeModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <h4 class=\"modal-title\">Replace Therapist</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <label for=\"employeeselectForEdit\">Available Therapist</label>\r\n        <select class=\"form-control\" name=\"employeeselectForEdit\" id=\"employeeselectForEdit\"\r\n          [(ngModel)]=\"ReplacedEmployee\">\r\n          <option *ngFor=\"let em of replacementEmployeeList\" [ngValue]=\"em\">{{em.NAME}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary confirm-btn\" (click)=\"saveChildModal(ReplacedEmployee)\">Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n\r\n        </button>\r\n        <h4 class=\"modal-title\">Information</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{DialogMessage}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Once you delete the schedule you can't recover it back. Are U sure you want to delete this Schedule?\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n        <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=\"deleteModal.hide()\">Cancel</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 1611:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" bsModal #CustomerSchedule=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button class=\"close\" aria-label=\"Close\" (click)=\"CustomerSchedule.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Patient Schedule:</h4>\r\n                \r\n                <label class=\"switch\" style=\"float: right; margin-left: 5px;\">\r\n                    <input type=\"checkbox\" [(ngModel)]=\"ShowAll\" (change)=\"CheckAllChanged($event.target.checked)\">\r\n                    <span class=\"slider round\"></span>\r\n                </label>\r\n                <label style=\"float: right;line-height: 20px;\">Show All</label>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\" id=\"customerSchedule\">\r\n                    <div class=\"col-5 col-sm-7 col-md-7\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\">Patient Name</span>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Customer.NAME\" readonly\r\n                                aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-5 col-sm-5 col-md-5\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\" id=\"basic-addon1\">Mobile No</span>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Customer.MOBILE\" readonly\r\n                                aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <table class=\"table table-bordered table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Sn.</th>\r\n                            <th>Date</th>\r\n                            <th>Time</th>\r\n                            <th>Employee</th>\r\n                            <th>Service</th>\r\n                            <th>Room</th>\r\n                            <th></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let t of schedules\">\r\n                            <td>1</td>\r\n                            <td>{{t.strDate}}</td>\r\n                            <td>{{t.STARTTIME}}</td>\r\n                            <td>{{t.EMPLOYEE}}</td>\r\n                            <td>{{t.SERVICE}}</td>\r\n                            <td>{{t.ROOMNO}}</td>\r\n                            <td> <span style=\"color:blue;cursor: pointer; margin-left: 5px\"\r\n                                    (click)=\"labelClickEvent(t._id)\">Details</span></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n                <div class=\"modal-footer\">\r\n                    <button class=\"btn btn-primary confirm-btn\" type=\"button\"\r\n                        (click)=\"CustomerSchedule.hide()\">Close</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ 1612:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xlg-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12\" style=\"width:100%;\">\r\n        <ba-card title=\"Patient Information\">\r\n            <div>\r\n                <div class=\"form-group\" *ngIf=\"IntegrateTreatmentWithAppointment || mode != 'add'\">\r\n                    <table id=\"tblPatientInfo\">\r\n                        <tr>\r\n                            <td>Patient Name</td>\r\n                            <td>: {{model.Patient.NAME}}</td>\r\n                            <td>Mobile No</td>\r\n                            <td>: {{model.Patient.MOBILE}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Address</td>\r\n                            <td>: {{model.Patient.ADDRESS}}</td>\r\n                            <td>Patient Id</td>\r\n                            <td>: {{model.Patient.PATIENT_ID}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Age</td>\r\n                            <td>: {{model.Patient.Age}}</td>\r\n                            <td>Gender</td>\r\n                            <td>: {{model.Patient.GENDER}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Staff</td>\r\n                            <td>: {{model.Healer.NAME}}</td>\r\n                            <td>Weight</td>\r\n                            <td>: {{model.Patient.Patient_Weight}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Membership</td>\r\n                            <td>: {{model.Patient.Membership}}</td>\r\n                            <td>Email</td>\r\n                            <td style=\"width: 35%;\">: {{model.Patient.EMAIL}}</td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <div *ngIf=\"!IntegrateTreatmentWithAppointment && mode == 'add'\">\r\n                    <customer-select (customerChanged)=\"customerChanged($event)\" (ncw)=\"customerWeight($event)\"\r\n                        (historyChange)=\"historyChange($event)\">\r\n                    </customer-select>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"employeeselect\" style=\"font-weight: 600;\">Staff</label>\r\n                        <div>\r\n                            <select class=\"form-control\" style=\"width: 200px;\" name=\"employeeselect\" id=\"employeeselect\"\r\n                                [(ngModel)]=\"model.Healer\">\r\n                                <option *ngFor=\"let em of employeeList\" [ngValue]=\"em\">{{em.NAME}}</option>\r\n                            </select>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ba-card>\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-6\">\r\n                <ba-card title=\"Patient Complaint\">\r\n                    <ckeditor [config]=\"ckPatientComplaintConfig\" [(ngModel)]=\"PatientComplaint\">\r\n                        {{model.PatientComplaint}}\r\n                    </ckeditor>\r\n                </ba-card>\r\n            </div>\r\n            <div class=\"col-xl-6\">\r\n                <ba-card title=\"Treatment Notes\">\r\n                    <ckeditor [(ngModel)]=\"TreatmentNotes\" [config]=\"ckTreatmentNoteConfig\">{{model.TreatmentNotes}}\r\n                    </ckeditor>\r\n                </ba-card>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-6\">\r\n                <ba-card title=\"Disease & Medication\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"diseases\">Diseases: </label>\r\n\r\n                        <ol style=\"width: 300px\">\r\n\r\n                            <li style=\"display: flex;\" *ngFor=\"let e of model.Diseases;let i=index\">{{e}} <i\r\n                                    (click)=\"model.Diseases.splice($event.target.id,1)\" id=\"{{i}}\" style=\"margin-left: auto;\" class=\"fa fa-times\"\r\n                                    aria-hidden=\"true\"></i> </li>\r\n                            <input type=\"text\" class=\"form-control\" list=\"diseasesCode\" [(ngModel)]=\"disease\"\r\n                                placeholder=\"Enter Disease\" (keyup.enter)=\"addDisease($event)\" />\r\n                            <small>Please press \"Enter\" to add Disease</small>\r\n\r\n                            <datalist id=\"diseasesCode\">\r\n                                <option *ngFor=\"let d of diseaseList\" [value]=\"d.DESCRIPTION\">{{d.DESCRIPTION}}\r\n                                </option>\r\n                            </datalist>\r\n\r\n                        </ol>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"medication\">Medication: </label>\r\n\r\n                        <ol style=\"width: 300px\">\r\n\r\n                            <input type=\"text\" class=\"form-control\" list=\"medicationsCode\" [(ngModel)]=\"medication\"\r\n                                placeholder=\"Enter Medication\" (keyup.enter)=\"addMedication($event)\" />\r\n                            <small>Please press \"Enter\" to add Medication</small>\r\n\r\n                            <datalist id=\"medicationsCode\">\r\n                                <option *ngFor=\"let d of medicationList\" [value]=\"d.DESCRIPTION\">{{d.DESCRIPTION}}\r\n                                </option>\r\n                            </datalist>\r\n                            <div *ngFor=\"let e of model.Medications;let i=index\">\r\n                                <h5 style=\"display: flex;\">\r\n                                    {{e.DESCRIPTION}} <i (click)=\"model.Medications.splice($event.target.id,1)\" id=\"{{i}}\" style=\"margin-left: auto;\"\r\n                                        class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n\r\n                                </h5>\r\n                                <p *ngIf=\"!e.RemarksEditable\" style=\"margin-left:20px; display: flex;\">{{e.REMARKS}}<i\r\n                                        (click)=\"e.RemarksEditable=true\" id=\"{{i}}\" style=\"margin-left: auto;\"\r\n                                        class=\"fa fa-pencil\" aria-hidden=\"true\"></i></p>\r\n                                <input type=\"text\" class=\"form-control\" *ngIf=\"e.RemarksEditable\" [(ngModel)]=\"e.REMARKS\" (keyup.enter)=\"e.RemarksEditable=false\" />\r\n                            </div>\r\n                        </ol>\r\n                    </div>\r\n                </ba-card>\r\n            </div>\r\n\r\n            <div class=\"col-xl-6\">\r\n                <ba-card title=\"Prescriptions\">\r\n                    <!-- Fix this code later : Amir May 30 2022 -->\r\n                    <div class=\"form-group\">\r\n                        <label for=\"prescription\">Morning Prescriptions:</label>\r\n\r\n                        <ol style=\"width: 300px\">\r\n                            <input id=\"morningPrescription\" type=\"text\" class=\"form-control\" list=\"codes\" [(ngModel)]=\"prescription\"\r\n                                placeholder=\"Enter Prescriptions\" (keyup.enter)=\"addPrescription($event, model.Prescriptions)\" />\r\n                            <small>Please press \"Enter\" to add Prescription</small>\r\n                            <datalist id=\"codes\">\r\n                                <option *ngFor=\"let p of prescriptionList\" [value]=\"p.DESCA\">{{p.DESCA}}\r\n                                </option>\r\n                            </datalist>\r\n\r\n                            <div *ngFor=\"let e of model.Prescriptions;let i=index\">\r\n                                <h5 style=\"display: flex;\">\r\n                                    {{e.DESCA}} <i (click)=\"model.Prescriptions.splice($event.target.id, 1)\" id=\"{{i}}\" style=\"margin-left: auto;\"\r\n                                        class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n\r\n                                </h5>\r\n                                <p *ngIf=\"!e.DirectiveEditable\" style=\"margin-left:20px; display: flex;\">{{e.directives}}<i\r\n                                        (click)=\"e.DirectiveEditable=true\" id=\"{{i}}\" style=\"margin-left: auto;\"\r\n                                        class=\"fa fa-pencil\" aria-hidden=\"true\"></i></p>\r\n                                <input type=\"text\" class=\"form-control\" *ngIf=\"e.DirectiveEditable\" [(ngModel)]=\"e.directives\" (keyup.enter)=\"e.DirectiveEditable=false\" />\r\n                            </div>\r\n                        </ol>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"prescription\">Evening Prescriptions:</label>\r\n\r\n                        <ol style=\"width: 300px\">\r\n                            <input id=\"eveningPrescription\" type=\"text\" class=\"form-control\" list=\"codes\" [(ngModel)]=\"eveningPrescription\"\r\n                                placeholder=\"Enter Prescriptions\" (keyup.enter)=\"addPrescription($event, model.EveningPrescriptions)\" />\r\n                            <small>Please press \"Enter\" to add Prescription</small>\r\n                           \r\n\r\n                            <div *ngFor=\"let e of model.EveningPrescriptions;let i=index\">\r\n                                <h5 style=\"display: flex;\">\r\n                                    {{e.DESCA}} <i (click)=\"model.EveningPrescriptions.splice($event.target.id, 1)\" id=\"{{i}}\" style=\"margin-left: auto;\"\r\n                                        class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                                </h5>\r\n                                <p *ngIf=\"!e.DirectiveEditable\" style=\"margin-left:20px; display: flex;\">{{e.directives}}<i\r\n                                        (click)=\"e.DirectiveEditable=true\" id=\"{{i}}\" style=\"margin-left: auto;\"\r\n                                        class=\"fa fa-pencil\" aria-hidden=\"true\"></i></p>\r\n                                <input type=\"text\" class=\"form-control\" *ngIf=\"e.DirectiveEditable\" [(ngModel)]=\"e.directives\" (keyup.enter)=\"e.DirectiveEditable=false\" />\r\n                            </div>\r\n                        </ol>\r\n                    </div>                    \r\n                    \r\n                </ba-card>\r\n            </div>\r\n        </div>\r\n        <ba-card title=\"Followup & Session Documents\">\r\n            <div class=\"form-group\" style=\"display: inline-block; vertical-align: top;\">\r\n                <label for=\"followup\">Followup Period</label>\r\n                <input class=\"form-control\" type=\"number\" [(ngModel)]=\"model.FollowUpPeriod\" />\r\n            </div>\r\n            <div style=\"display: flex; margin-bottom: 10px; overflow: scroll; \">\r\n                <li *ngFor=\"let f of model.TreatmentDocuments\" style=\"margin-right: 5px;\">\r\n\r\n                    <button type=\"button \" class=\"btn btn-danger close-pdf\" (click)=\"deleteImage(f)\">x</button>\r\n\r\n                    <ng-container *ngIf=\"!f.endsWith('pdf')\">\r\n                        <img height=\"80px\" width=\"80px\" style=\"object-fit: contain;\" src=\"{{contentUrl + f}}\"\r\n                            (click)=\"previewImage($event)\" />\r\n                    </ng-container>\r\n\r\n                    <a *ngIf=\"f.endsWith('pdf')\" target=\"_blank\" href=\"{{contentUrl + f}}\">\r\n                        <img height=\"50px\"\r\n                            src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png\" />\r\n                    </a>\r\n\r\n                </li>\r\n            </div>\r\n            <!-- <img *ngFor=\"let e of uploadFilesUrl\" height=\"80px\" width=\"80px\" src=\"{{e}}\"\r\n            (click)=\"previewImage($event)\" /> -->\r\n            <input type=\"file\" (change)=\"onFileChanged($event)\" multiple=\"multiple\" />\r\n            <!-- // <button type=\"button \" class=\"btn btn-danger\" (click)=\"removeDocument(e)\">X</button>\r\n        </ba-card>\r\n        <ba-card title=\"NOTES & REMARKS\">\r\n            <textarea class=\"form-control\" [(ngModel)]=\"model.remarks\">{{model.remarks}}</textarea>\r\n\r\n       // <button type=\"button \" class=\"btn btn-danger\" (click)=\"removeDocument(e)\">X</button> -->\r\n        </ba-card>\r\n\r\n        <ba-card title=\"NOTES & REMARKS\">\r\n            <textarea class=\"form-control\" [(ngModel)]=\"model.remarks\">{{model.remarks}}</textarea>\r\n        </ba-card>\r\n\r\n        <ba-card>\r\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"SaveClickEvent()\">Submit</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"DeleteConformation()\" *ngIf=\"mode=='edit'\">Delete\r\n            </button>\r\n            <button type=\"submit\" class=\"btn btn-primary\" *ngIf=\"mode!='add'\" (click)=\"printTreatmentEntry(model, true)\">Print</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">Back</button>\r\n        </ba-card>\r\n\r\n        <!-- PATIENT HISTORY -->\r\n        <ba-card title=\"Patient Treatment History\">\r\n            <ng2-smart-table [settings]=\"settings\" [(source)]=\"historySource\" (view)=\"editList($event)\">\r\n            </ng2-smart-table>\r\n        </ba-card>\r\n    </div>\r\n\r\n    <!-- END FORM -->\r\n\r\n    <div bsModal #childPreviewModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button class=\"close\" aria-label=\"Close\" (click)=\"childPreviewModal.hide()\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Treatment Documents</h4>\r\n                </div>\r\n                <button id=\"button\" class=\"btn btn-primary confirm-btn\" (click)=\"nextImage($event)\">Next</button>\r\n                <div id=\"container\" style=\"text-align: center;\">\r\n                    <img width=\"600px\" height=\"600px\" style=\"object-fit: contain;\" [src]=\"selectedImage\" id=\"image\"\r\n                        (click)=\"onImageClick($event)\" />\r\n                </div>\r\n\r\n                <div class=\"modal-footer\" style=\"text-align: center;\">\r\n                    <img *ngFor=\"let e of uploadFilesUrl\" height=\"80px\" width=\"80px\" style=\"object-fit: contain;\"\r\n                        src=\"{{e}}\" (click)=\"changeImage($event)\" />\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-sm\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Information</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    {{DialogMessage}}\r\n                </div>\r\n                <!--<div class=\"modal-footer\">\r\n                      <button class=\"btn btn-primary confirm-btn\" (click)=\"hideChildModal()\">Save changes</button>\r\n                      <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=onsubmit()>Save</button>\r\n                  </div>!-->\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-sm\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button class=\"close\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                    <h4 class=\"modal-title\">Warning</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    Once you delete the schedule you can't recover it back. Are U sure you want to delete this\r\n                    Schedule?\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n                    <button class=\"btn btn-primary confirm-btn\" type=\"button\"\r\n                        (click)=\"deleteModal.hide()\">Cancel</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ 1613:
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n    <div class=\"row\">\r\n      <!-- <button class=\"btn btn-primary\" style=\"margin-bottom: 10px;margin-left:18px\" (click)=\"onAddClick()\">New Treatment Entry</button> -->\r\n      <!-- <input type=\"date\" name=\"date\" id=\"date\" \r\n      (change)=\"OnDateChangeEvent($event.target.value)\" /> -->\r\n    </div>\r\n    <div class=\"row\">\r\n      <ba-card title=\"Treatment Details\" baCardClass=\"with-scroll\">\r\n        <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (delete)=\"onDeleteConfirm($event)\"\r\n          (view)=\"onViewClick($event)\"></ng2-smart-table>\r\n      </ba-card>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-md\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n            \r\n          </button>\r\n          <h4 class=\"modal-title\">Information</h4>\r\n        </div>\r\n  \r\n        <div class=\"modal-body\">\r\n          <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n          {{DialogMessage}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button class=\"close\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n                              <span aria-hidden=\"true\">&times;</span>\r\n                          </button>\r\n          <h4 class=\"modal-title\">Warning</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          Once you delete the Treatment you can't recover it back. Are U sure you want to delete this Treatment?\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n          <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=\"deleteModal.hide()\">Cancel</button>\r\n        </div>!\r\n  \r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ 1614:
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n  <div class=\"row\">\r\n    <button class=\"btn btn-primary\" style=\"margin-bottom: 10px;margin-left:18px\" (click)=\"onAddClick()\">New Treatment Entry</button>\r\n    <input type=\"date\" name=\"date\" id=\"date\" \r\n    (change)=\"OnDateChangeEvent($event.target.value)\" />\r\n  </div>\r\n  <div class=\"row\">\r\n    <ba-card title=\"Treatments\" baCardClass=\"with-scroll\">\r\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (edit)=\"onEditClick($event)\" (delete)=\"onDeleteConfirm($event)\"\r\n        (view)=\"onViewClick($event)\"></ng2-smart-table>\r\n    </ba-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>          \r\n        </button>\r\n        <h4 class=\"modal-title\">Information</h4>\r\n      </div>\r\n\r\n      <div class=\"modal-body\">\r\n        <div class=\"modal-title glyphicon glyphicon-warning-sign\" style=\"display:inline-block\"></div>\r\n        {{DialogMessage}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button class=\"close\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Once you delete the Treatment you can't recover it back. Are U sure you want to delete this Treatment?\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary confirm-btn\" (click)=\"DeleteEvent()\">Yes</button>\r\n        <button class=\"btn btn-primary confirm-btn\" type=\"button\" (click)=\"deleteModal.hide()\">Cancel</button>\r\n      </div>!\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 1619:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(1);
var Subscriber_1 = __webpack_require__(5);
var Subscription_1 = __webpack_require__(22);
var ObjectUnsubscribedError_1 = __webpack_require__(160);
var SubjectSubscription_1 = __webpack_require__(331);
var rxSubscriber_1 = __webpack_require__(159);
/**
 * @class SubjectSubscriber<T>
 */
var SubjectSubscriber = (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        _super.call(this, destination);
        this.destination = destination;
    }
    return SubjectSubscriber;
}(Subscriber_1.Subscriber));
exports.SubjectSubscriber = SubjectSubscriber;
/**
 * @class Subject<T>
 */
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        _super.call(this);
        this.observers = [];
        this.closed = false;
        this.isStopped = false;
        this.hasError = false;
        this.thrownError = null;
    }
    Subject.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
exports.Subject = Subject;
/**
 * @class AnonymousSubject<T>
 */
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        _super.call(this);
        this.destination = destination;
        this.source = source;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));
exports.AnonymousSubject = AnonymousSubject;
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ 1622:
/***/ (function(module, exports, __webpack_require__) {

!(function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dayjs=e()})(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=(function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=(function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)})(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||(function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null})(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M})(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));

/***/ })

});