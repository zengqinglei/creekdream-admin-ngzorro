(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messagecenter-messagecenter-module"],{

/***/ "./src/app/pages/messagecenter/dashboard/dashboard.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/messagecenter/dashboard/dashboard.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<page-header></page-header>\r\n<p style=\"margin:0;padding:0;height:1000px;background-color:#affd;\">\r\n  messagecenter dashboard works!\r\n</p>"

/***/ }),

/***/ "./src/app/pages/messagecenter/dashboard/dashboard.component.less":
/*!************************************************************************!*\
  !*** ./src/app/pages/messagecenter/dashboard/dashboard.component.less ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lc3NhZ2VjZW50ZXIvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/messagecenter/dashboard/dashboard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/messagecenter/dashboard/dashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'messagecenter-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/messagecenter/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.less */ "./src/app/pages/messagecenter/dashboard/dashboard.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/messagecenter/messagecenter-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/messagecenter/messagecenter-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: MessageCenterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageCenterRoutingModule", function() { return MessageCenterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/messagecenter/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: 'dashboard' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] }
];
var MessageCenterRoutingModule = /** @class */ (function () {
    function MessageCenterRoutingModule() {
    }
    MessageCenterRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MessageCenterRoutingModule);
    return MessageCenterRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/messagecenter/messagecenter.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/messagecenter/messagecenter.module.ts ***!
  \*************************************************************/
/*! exports provided: MessageCenterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageCenterModule", function() { return MessageCenterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/messagecenter/dashboard/dashboard.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _messagecenter_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messagecenter-routing.module */ "./src/app/pages/messagecenter/messagecenter-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MessageCenterModule = /** @class */ (function () {
    function MessageCenterModule() {
    }
    MessageCenterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]
            ],
            imports: [
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _messagecenter_routing_module__WEBPACK_IMPORTED_MODULE_3__["MessageCenterRoutingModule"]
            ]
        })
    ], MessageCenterModule);
    return MessageCenterModule;
}());



/***/ })

}]);
//# sourceMappingURL=messagecenter-messagecenter-module.js.map