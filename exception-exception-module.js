(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exception-exception-module"],{

/***/ "./src/app/pages/exception/404/404.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/exception/404/404.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-empty [nzNotFoundContent]=\"contentTpl\" style=\"margin-top:100px;\">\r\n  <ng-template #contentTpl>\r\n    <span> 你要找的页面不存在... </span>\r\n  </ng-template>\r\n</nz-empty>"

/***/ }),

/***/ "./src/app/pages/exception/404/404.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/exception/404/404.component.ts ***!
  \******************************************************/
/*! exports provided: Exception404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exception404Component", function() { return Exception404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Exception404Component = /** @class */ (function () {
    function Exception404Component() {
    }
    Exception404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'exception-404',
            template: __webpack_require__(/*! ./404.component.html */ "./src/app/pages/exception/404/404.component.html")
        })
    ], Exception404Component);
    return Exception404Component;
}());



/***/ }),

/***/ "./src/app/pages/exception/exception-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/exception/exception-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ExceptionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionRoutingModule", function() { return ExceptionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _404_404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./404/404.component */ "./src/app/pages/exception/404/404.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '404', component: _404_404_component__WEBPACK_IMPORTED_MODULE_2__["Exception404Component"] }
];
var ExceptionRoutingModule = /** @class */ (function () {
    function ExceptionRoutingModule() {
    }
    ExceptionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ExceptionRoutingModule);
    return ExceptionRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/exception/exception.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/exception/exception.module.ts ***!
  \*****************************************************/
/*! exports provided: ExceptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionModule", function() { return ExceptionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _404_404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404/404.component */ "./src/app/pages/exception/404/404.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _exception_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exception-routing.module */ "./src/app/pages/exception/exception-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExceptionModule = /** @class */ (function () {
    function ExceptionModule() {
    }
    ExceptionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _404_404_component__WEBPACK_IMPORTED_MODULE_1__["Exception404Component"]
            ],
            imports: [
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _exception_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExceptionRoutingModule"]
            ]
        })
    ], ExceptionModule);
    return ExceptionModule;
}());



/***/ })

}]);
//# sourceMappingURL=exception-exception-module.js.map