(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [hidden]=\"!showTemplate\" ></app-header>\n<app-menu [hidden]=\"!showTemplate\"></app-menu>\n\n\n<div [ngClass]=\"showContentWarpper()\" style=\"min-height: 960px;\">\n\n  <section class=\"content-header\">\n  </section>\n  <section class=\"content\">\n    <router-outlet></router-outlet>\n  </section>\n\n</div>\n\n\n\n<app-footer [hidden]=\"!showTemplate\"></app-footer>\n"

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
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.showTemplate = false;
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shared.showTemplate.subscribe(function (show) { return _this.showTemplate = show; });
    };
    AppComponent.prototype.showContentWarpper = function () {
        return {
            'content-wrapper': this.shared.isLoggedIn()
        };
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_security_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/security/login/login.component */ "./src/app/components/security/login/login.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_security_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/security/auth.interceptor */ "./src/app/components/security/auth.interceptor.ts");
/* harmony import */ var _components_security_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/security/auth.guard */ "./src/app/components/security/auth.guard.ts");
/* harmony import */ var _components_user_new_user_new_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user-new/user-new.component */ "./src/app/components/user-new/user-new.component.ts");
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/user-list/user-list.component */ "./src/app/components/user-list/user-list.component.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _components_ticket_new_ticket_new_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/ticket-new/ticket-new.component */ "./src/app/components/ticket-new/ticket-new.component.ts");
/* harmony import */ var _services_ticket_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/ticket.service */ "./src/app/services/ticket.service.ts");
/* harmony import */ var _components_ticket_list_ticket_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/ticket-list/ticket-list.component */ "./src/app/components/ticket-list/ticket-list.component.ts");
/* harmony import */ var _components_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/ticket-detail/ticket-detail.component */ "./src/app/components/ticket-detail/ticket-detail.component.ts");
/* harmony import */ var _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/summary/summary.component */ "./src/app/components/summary/summary.component.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_security_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_user_new_user_new_component__WEBPACK_IMPORTED_MODULE_16__["UserNewComponent"],
                _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_17__["UserListComponent"],
                _components_ticket_new_ticket_new_component__WEBPACK_IMPORTED_MODULE_19__["TicketNewComponent"],
                _components_ticket_list_ticket_list_component__WEBPACK_IMPORTED_MODULE_21__["TicketListComponent"],
                _components_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_22__["TicketDetailComponent"],
                _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_23__["SummaryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_9__["routes"],
            ],
            providers: [
                _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
                _services_ticket_service__WEBPACK_IMPORTED_MODULE_20__["TicketService"],
                _services_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"],
                _dialog_service__WEBPACK_IMPORTED_MODULE_18__["DialogService"],
                _components_security_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
                    useClass: _components_security_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_security_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/security/login/login.component */ "./src/app/components/security/login/login.component.ts");
/* harmony import */ var _components_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/security/auth.guard */ "./src/app/components/security/auth.guard.ts");
/* harmony import */ var _components_user_new_user_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-new/user-new.component */ "./src/app/components/user-new/user-new.component.ts");
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-list/user-list.component */ "./src/app/components/user-list/user-list.component.ts");
/* harmony import */ var _components_ticket_new_ticket_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ticket-new/ticket-new.component */ "./src/app/components/ticket-new/ticket-new.component.ts");
/* harmony import */ var _components_ticket_list_ticket_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ticket-list/ticket-list.component */ "./src/app/components/ticket-list/ticket-list.component.ts");
/* harmony import */ var _components_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ticket-detail/ticket-detail.component */ "./src/app/components/ticket-detail/ticket-detail.component.ts");
/* harmony import */ var _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/summary/summary.component */ "./src/app/components/summary/summary.component.ts");










var ROUTES = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'login', component: _components_security_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'user-new', component: _components_user_new_user_new_component__WEBPACK_IMPORTED_MODULE_4__["UserNewComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'user-new/:id', component: _components_user_new_user_new_component__WEBPACK_IMPORTED_MODULE_4__["UserNewComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'user-list', component: _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'ticket-new', component: _components_ticket_new_ticket_new_component__WEBPACK_IMPORTED_MODULE_6__["TicketNewComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'ticket-new/:id', component: _components_ticket_new_ticket_new_component__WEBPACK_IMPORTED_MODULE_6__["TicketNewComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'ticket-list', component: _components_ticket_list_ticket_list_component__WEBPACK_IMPORTED_MODULE_7__["TicketListComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'ticket-detail/:id', component: _components_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_8__["TicketDetailComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'summary', component: _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_9__["SummaryComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
];
var routes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(ROUTES);


/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n  <div class=\"pull-right hidden-xs\">\n    <b>Version</b> 1.0.0\n  </div>\n  <strong>Copyright © 2019 <a href=\"https://devolth.com\">Leonardo Volthier</a>.</strong> All rights\n  reserved.\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n\n  <!-- Logo -->\n  <a [routerLink]=\"['/']\" class=\"logo\">\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class=\"logo-mini\"><b>HELP</b></span>\n    <!-- logo for regular state and mobile devices -->\n    <span class=\"logo-lg\"><b>HELP DESK</b></span>\n  </a>\n\n  <!-- Header Navbar: style can be found in header.less -->\n  <nav class=\"navbar navbar-static-top\">\n    <!-- Sidebar toggle button-->\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n      <span class=\"sr-only\">Toggle navigation</span>\n    </a>\n    <!-- Navbar Right Menu -->\n    <div class=\"navbar-custom-menu\">\n      <p style=\"color: white\"> Ola: {{shared.user.email}} - {{shared.user.profile}} | <button class=\"brn btn-link\" (click)=\"signOut()\"> <font style=\"color: white\"> Sign Out </font> </button></p>\n    </div>\n\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/user.model */ "./src/app/model/user.model.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
        this.shared.user = new _model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](null, '', '', '');
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.signOut = function () {
        this.shared.token = null;
        this.shared.user = null;
        window.location.href = '/login';
        window.location.reload();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Bem vindo Home!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\n  <!-- sidebar: style can be found in sidebar.less -->\n  <section class=\"sidebar\" style=\"height: auto;\">\n\n    <ul class=\"sidebar-menu tree\" data-widget=\"tree\">\n      <li class=\"treeview\" *ngIf=\"shared.user.profile == 'ADMIN'\">\n        <a href=\"#\">\n          <i class=\"fa fa-edit\"></i> <span>User</span>\n          <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li><a [routerLink]=\"['/user-list']\"><i class=\"fa fa-circle-o\"></i> List </a></li>\n          <li><a [routerLink]=\"['/user-new']\"><i class=\"fa fa-circle-o\"></i> New User</a></li>\n        </ul>\n      </li>\n\n      <li class=\"treeview\" *ngIf=\"shared.user.profile != 'ADMIN'\">\n        <a href=\"#\">\n          <i class=\"fa fa-edit\"></i> <span>Ticket</span>\n          <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li><a [routerLink]=\"['/ticket-list']\"><i class=\"fa fa-circle-o\"></i> List </a></li>\n          <li *ngIf=\"shared.user.profile == 'CUSTOMER'\"><a  [routerLink]=\"['/ticket-new']\"><i class=\"fa fa-circle-o\"></i> New Ticket</a></li>\n        </ul>\n      </li>\n\n\n      <li class=\"treeview\">\n        <a href=\"#\">\n          <i class=\"fa fa-edit\"></i> <span>Summary</span>\n          <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li><a [routerLink]=\"['/summary']\"><i class=\"fa fa-circle-o\"></i> To View </a></li>\n        </ul>\n      </li>\n\n    </ul>\n  </section>\n  <!-- /.sidebar -->\n</aside>\n"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/services/shared.service.ts");



var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/security/auth.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/components/security/auth.guard.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/services/shared.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"].getInstance();
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.shared.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/security/auth.interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/security/auth.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"].getInstance();
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authRequest;
        if (this.shared.isLoggedIn()) {
            authRequest = req.clone({
                setHeaders: {
                    'Authorization': this.shared.token
                }
            });
            return next.handle(authRequest);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/components/security/login/login.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/security/login/login.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdXJpdHkvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/security/login/login.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/security/login/login.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\" style=\"margin-left: 20%\">\n  <div class=\"box box-info\">\n    <div class=\"box-header with-border\">\n      <h3 class=\"box-title\">HELP DESK | Login </h3>\n    </div>\n    <!-- /.box-header -->\n    <!-- form start -->\n    <form class=\"form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"login()\">\n\n      <div class=\"alert alert-error\" role=\"alert\" *ngIf=\"message\">\n          <strong>Invalid Email or Password!</strong>\n      </div>\n\n      <div class=\"box-body\">\n\n        <div [ngClass]=\"getFromGroupClass(email.invalid, email.dirty)\">\n          <label for=\"inputEmail\" class=\"col-sm-2 control-label\">Email</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"email\"\n              [(ngModel)]=\"user.email\"\n              class=\"form-control\"\n              name=\"email\"\n              id=\"inputEmail\"\n              #email=\"ngModel\"\n              placeholder=\"Email\"\n              email\n            >\n            <span class=\"help-block\" *ngIf=\"email.invalid && email.dirty\"> Email Invalid!</span>\n          </div>\n        </div>\n\n        <div [ngClass]=\"getFromGroupClass(password.invalid, password.dirty)\">\n          <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Password</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"password\"\n              [(ngModel)]=\"user.password\"\n              class=\"form-control\"\n              id=\"inputPassword\"\n              name=\"password\"\n              #password=\"ngModel\"\n              placeholder=\"Password\"\n              required\n            >\n            <span class=\"help-block\" *ngIf=\"password.invalid && password.dirty\"> Password is Required!</span>\n          </div>\n        </div>\n\n      </div>\n      <!-- /.box-body -->\n      <div class=\"box-footer\">\n        <button type=\"submit\" (click)=\"cancelLogin()\" class=\"btn btn-default\">Cancel</button>\n        <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-info pull-right\">Login</button>\n      </div>\n      <!-- /.box-footer -->\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/security/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/security/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/user.model */ "./src/app/model/user.model.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = new _model_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', '', '');
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"].getInstance();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.message = '';
        this.userService.login(this.user).subscribe(function (userAuthentication) {
            _this.shared.token = userAuthentication.token;
            _this.shared.user = userAuthentication.user;
            _this.shared.user.profile = _this.shared.user.profile.substring(5);
            _this.shared.showTemplate.emit(true);
            _this.router.navigate(['/']);
        }, function (err) {
            _this.shared.token = null;
            _this.shared.user = null;
            _this.shared.showTemplate.emit(false);
            _this.message = 'Error';
        });
    };
    LoginComponent.prototype.cancelLogin = function () {
        this.message = '';
        this.user = new _model_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', '', '');
        window.location.href = '/login';
        window.location.reload();
    };
    LoginComponent.prototype.getFromGroupClass = function (isInvalid, isDirty) {
        return {
            'from-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': !isInvalid && isDirty
        };
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/security/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/security/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/summary/summary.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/summary/summary.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/summary/summary.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/summary/summary.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10\" style=\"margin-left: 0%\">\n\n  <div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n    <strong>{{ message.text }}</strong>\n  </div>\n\n  <div class=\"box box-info\">\n    <div class=\"box-header with-border\">\n      <h3>Summary</h3>\n    </div>\n    <div class=\"box-body\">\n      <ul class=\"list-group list-group-unbordered\">\n          <li class=\"list-group-item\">\n            <b>New: </b>\n            <span class=\"pull-right\"><span>{{summary?.amountNew}}</span></span>\n          </li>\n        <li class=\"list-group-item\">\n          <b>Resolved: </b>\n          <span class=\"pull-right\"><span>{{summary?.amountResolved}}</span></span>\n        </li>\n        <li class=\"list-group-item\">\n          <b>Closed: </b>\n          <span class=\"pull-right\"><span>{{summary?.amountClosed}}</span></span>\n        </li>\n        <li class=\"list-group-item\">\n          <b>Disapproved: </b>\n          <span class=\"pull-right\"><span>{{summary?.amountDisapproved}}</span></span>\n        </li>\n        <li class=\"list-group-item\">\n          <b>Approved: </b>\n          <span class=\"pull-right\"><span>{{summary?.amountApproved}}</span></span>\n        </li>\n        <li class=\"list-group-item\">\n          <b>Assigned: </b>\n          <span class=\"pull-right\"><span>{{summary?.amountAssigned}}</span></span>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/summary/summary.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/summary/summary.component.ts ***!
  \*********************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ticket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ticket.service */ "./src/app/services/ticket.service.ts");
/* harmony import */ var _model_summary_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/summary.model */ "./src/app/model/summary.model.ts");




var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(ticketService
    // private route: ActivatedRoute
    ) {
        this.ticketService = ticketService;
        this.summary = new _model_summary_model__WEBPACK_IMPORTED_MODULE_3__["Summary"]();
        // this.shared = SharedService.getInstance();
    }
    SummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ticketService.summary().subscribe(function (responseApi) {
            _this.summary = responseApi.data;
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    SummaryComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    SummaryComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/components/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.css */ "./src/app/components/summary/summary.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ticket_service__WEBPACK_IMPORTED_MODULE_2__["TicketService"]
            // private route: ActivatedRoute
        ])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/app/components/ticket-detail/ticket-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/ticket-detail/ticket-detail.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0LWRldGFpbC90aWNrZXQtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/ticket-detail/ticket-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/ticket-detail/ticket-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10\" style=\"margin-left: 0%\">\n  <div class=\"box box-info\">\n    <div class=\"box-header with-border\">\n      <h3> Detalhes do Ticket</h3>\n    </div>\n    <form class=\"form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"register()\">\n\n      <div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n        <strong>{{ message.text }}</strong>\n      </div>\n\n      <div class=\"box-body\">\n          <ul class=\"list-group list-group-unbordered\">\n            <li class=\"list-group-item\">\n              <b>Number:</b> <span>{{ticket.number}}</span>\n              <span class=\"pull-right\"><b>Title:</b> <span>{{ticket.title}}</span></span>\n            </li>\n            <li class=\"list-group-item\">\n              <b>Priority:</b> <span>{{ticket.priority}}</span>\n              <span class=\"pull-right\"><b>Created By:</b> <span>{{ticket?.user?.email}}</span></span>\n            </li>\n            <li class=\"list-group-item\">\n              <b>Status:</b> <span>{{ticket.status}}</span>\n              <span class=\"pull-right\"><b>Assigned to:</b> <span>{{ticket.assignedUser?.email}}</span></span>\n            </li>\n            <li class=\"list-group-item\">\n              <b>Date:</b> <span>{{ticket.date | date:'dd/MM/yyyy'}}</span>\n              <span class=\"pull-right\"><b>Description: </b> <span>{{ticket.description}}</span></span>\n            </li>\n            <li class=\"list-group-item\">\n              <span> <img [src]=\"ticket.image\" width=\"450px\" height=\"370px\"></span>\n              <span class=\"pull-right\">\n                <table class=\"table table-bordered\">\n                    <tr>\n                      <th>User Change</th>\n                      <th>Date Change Status</th>\n                      <th>Status</th>\n                    </tr>\n                  <tr *ngFor=\"let change of ticket.changes\">\n                    <td>{{change?.userChange.email}}</td>\n                    <td>{{change?.dateChangeStatus | date:'dd/MM/yyyy HH:mm:ss'}}</td>\n                    <td>{{change?.status}}</td>\n                  </tr>\n                </table>\n              </span>\n            </li>\n          </ul>\n      </div>\n\n      <div class=\"box-footer\">\n          <button\n            class=\"btn btn-primary\"\n            (click)=\"changeStatus('Assigned')\"\n            *ngIf=\"shared.user.profile == 'TECHNICIAN' && ticket.status == 'New'\"\n          >\n            Accept\n          </button>\n        <button\n          class=\"btn btn-primary\"\n          (click)=\"changeStatus('Resolved')\"\n          *ngIf=\"shared.user.profile == 'TECHNICIAN' && (ticket.status == 'Assigned' || ticket.status == 'Disapproved')\"\n        >\n          Solve\n        </button>\n        <button\n          class=\"btn btn-primary\"\n          (click)=\"changeStatus('Approved')\"\n          *ngIf=\"shared.user.profile == 'CUSTOMER' && ticket.status == 'Resolved'\"\n        >\n          Approve\n        </button>\n\n        <button\n          class=\"btn btn-primary\"\n          (click)=\"changeStatus('Disapproved')\"\n          *ngIf=\"shared.user.profile == 'CUSTOMER' && ticket.status == 'Resolved'\"\n        >\n          Disapprove\n        </button>\n        <button\n          class=\"btn btn-primary\"\n          (click)=\"changeStatus('Closed')\"\n          *ngIf=\"shared.user.profile == 'CUSTOMER' && ticket.status == 'Approved'\"\n        >\n          Close\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/ticket-detail/ticket-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/ticket-detail/ticket-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: TicketDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailComponent", function() { return TicketDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_ticket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ticket.service */ "./src/app/services/ticket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_ticket_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/ticket.model */ "./src/app/model/ticket.model.ts");






var TicketDetailComponent = /** @class */ (function () {
    function TicketDetailComponent(ticketService, route) {
        this.ticketService = ticketService;
        this.route = route;
        this.ticket = new _model_ticket_model__WEBPACK_IMPORTED_MODULE_5__["Ticket"](null, 0, '', '', '', '', '', null, null, '', null);
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
    }
    TicketDetailComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id !== undefined) {
            this.findById(id);
        }
    };
    TicketDetailComponent.prototype.findById = function (id) {
        var _this = this;
        this.ticketService.findById(id).subscribe(function (responseApi) {
            _this.ticket = responseApi.data;
            _this.ticket.date = new Date(_this.ticket.date).toISOString();
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    TicketDetailComponent.prototype.changeStatus = function (status) {
        var _this = this;
        this.ticketService.changeStatus(status, this.ticket).subscribe(function (responseApi) {
            _this.ticket = responseApi.data;
            _this.ticket.date = new Date(_this.ticket.date).toISOString();
            _this.showMessage({
                type: 'success',
                text: 'Successfully changed status'
            });
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    TicketDetailComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    TicketDetailComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    TicketDetailComponent.prototype.getFromGroupClass = function (isInvalid, isDirty) {
        return {
            'from-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': !isInvalid && isDirty
        };
    };
    TicketDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ticket-detail',
            template: __webpack_require__(/*! ./ticket-detail.component.html */ "./src/app/components/ticket-detail/ticket-detail.component.html"),
            styles: [__webpack_require__(/*! ./ticket-detail.component.css */ "./src/app/components/ticket-detail/ticket-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ticket_service__WEBPACK_IMPORTED_MODULE_3__["TicketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TicketDetailComponent);
    return TicketDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/ticket-list/ticket-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/ticket-list/ticket-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0LWxpc3QvdGlja2V0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/ticket-list/ticket-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/ticket-list/ticket-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n  <strong>{{ message.text }}</strong>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-8\">\n    <div class=\"box\">\n      <div class=\"box-header with-border\">\n        <h3 class=\"box-title\">User List</h3>\n      </div>\n      <!-- /.box-header -->\n\n      <div class=\"box-body\">\n        <div class=\"form-group\" *ngIf=\"shared.user.profile == 'TECHNICIAN'\">\n          <div class=\"checkbox\">\n            <label>\n            <input\n              type=\"checkbox\"\n              [(ngModel)]=\"assignedToMe\"\n              name=\"assignedToMe\"\n              id=\"assignedToMe\"\n            >\n              <b>Assigned to Me</b></label>\n          </div>\n        </div>\n\n        <div class=\"form-group\" >\n          <label for=\"inputNumber\" class=\"col-sm-2 control-label\"> Number</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"number\"\n              [(ngModel)]=\"ticketFilter.number\"\n              name=\"number\"\n              id=\"inputNumber\"\n            >\n          </div>\n        </div>\n\n        <div class=\"form-group\" >\n          <label for=\"inputTitle\" class=\"col-sm-2 control-label\">Title</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              [(ngModel)]=\"ticketFilter.title\"\n              name=\"title\"\n              id=\"inputTitle\"\n            >\n          </div>\n        </div>\n\n        <div class=\"form-group\" >\n          <label for=\"inputStatus\" class=\"col-sm-2 control-label\">Status</label>\n          <div class=\"col-sm-10\">\n            <select\n              class=\"form-control\"\n              [(ngModel)]=\"ticketFilter.status\"\n              name=\"status\"\n              id=\"inputStatus\"\n              style=\"width: 100%\"\n            >\n              <option>New</option>\n              <option>Assigned</option>\n              <option>Resolved</option>\n              <option>Approved</option>\n              <option>Disapproved</option>\n              <option>Closed</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"inputPriority\" class=\"col-sm-2 control-label\">Priority</label>\n          <div class=\"col-sm-10\">\n            <select\n              class=\"form-control\"\n              [(ngModel)]=\"ticketFilter.priority\"\n              id=\"inputPriority\"\n              name=\"priority\"\n              style=\"width: 100%\"\n            >\n              <option>Low</option>\n              <option>Normal</option>\n              <option>High</option>\n            </select>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"box-footer\">\n        <button (click)=\"cleanFilter()\" class=\"btn btn-info pull-left\">Clean Filter</button>\n        <button style=\"margin-left: 10px\" (click)=\"filter()\" class=\"btn btn-info pull-right\">Search</button>\n      </div>\n\n      <div class=\"box-body\">\n        <table class=\"table table-bordered\">\n          <tbody><tr>\n            <th class=\"text-left\">Number</th>\n            <th class=\"text-center\">Title</th>\n            <th class=\"text-center\">Priority</th>\n            <th class=\"text-center\">Status</th>\n            <th class=\"text-center\">Owner</th>\n            <th *ngIf=\"shared.user.profile == 'CUSTOMER'\"></th>\n            <th *ngIf=\"shared.user.profile == 'CUSTOMER'\"></th>\n            <th></th>\n          </tr>\n          <tr *ngFor=\"let ticket of listTicket; let i = index\">\n            <td>{{ticket.number}}</td>\n            <td class=\"text-center\">{{ticket.title}}</td>\n            <td class=\"text-center\">{{ticket.priority}}</td>\n            <td class=\"text-center\">{{ticket.status}}</td>\n            <td class=\"text-center\">{{ticket.user.email}}</td>\n            <td *ngIf=\"shared.user.profile == 'CUSTOMER'\"><button class=\"btn btn-primary\" style=\"margin: auto; display: block\" (click)=\"edit(ticket.id)\" >Edit</button></td>\n            <td *ngIf=\"shared.user.profile == 'CUSTOMER'\"><button class=\"btn btn-danger\" style=\"margin: auto; display: block\" (click)=\"delete(ticket.id)\">Delete</button></td>\n            <td><button class=\"btn btn-success\" style=\"margin: auto; display: block\" (click)=\"detail(ticket.id)\">Detail</button>       </td>\n          </tr>\n\n          </tbody>\n        </table>\n      </div>\n      <!-- /.box-body -->\n      <div class=\"box-footer clearfix\">\n        <ul class=\"pagination pagination-sm no-margin pull-right\">\n          <li><a href=\"\" (click)=\"setPreviusPage($event)\">«</a></li>\n          <li *ngFor=\"let pag of pages; let i=index\">\n            <a [ngClass]=\"{'pagination-focus': i == page }\" href=\"#\" (click)=\"setPage(i,$event)\">{{i+1}}</a>\n          </li>\n          <li><a href=\"\" (click)=\"setNextPage($event)\">»</a></li>\n        </ul>\n      </div>\n    </div>\n    <!-- /.box -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/ticket-list/ticket-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/ticket-list/ticket-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: TicketListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketListComponent", function() { return TicketListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_ticket_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/ticket.model */ "./src/app/model/ticket.model.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _services_ticket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ticket.service */ "./src/app/services/ticket.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var TicketListComponent = /** @class */ (function () {
    function TicketListComponent(dialogService, ticketService, route) {
        this.dialogService = dialogService;
        this.ticketService = ticketService;
        this.route = route;
        this.assignedToMe = true;
        this.page = 0;
        this.count = 5;
        this.listTicket = [];
        this.ticketFilter = new _model_ticket_model__WEBPACK_IMPORTED_MODULE_2__["Ticket"]('', 0, '', '', '', '', '', null, null, '', null);
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"].getInstance();
    }
    TicketListComponent.prototype.ngOnInit = function () {
        this.findAll(this.page, this.count);
    };
    TicketListComponent.prototype.findAll = function (page, count) {
        var _this = this;
        this.ticketService.findAll(page, count).subscribe(function (responseApi) {
            _this.listTicket = responseApi['data']['content'];
            _this.pages = new Array(responseApi['data']['totalPages']);
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'[0]]
            });
        });
    };
    TicketListComponent.prototype.filter = function () {
        var _this = this;
        this.page = 0;
        this.count = 5;
        this.ticketService.findByParams(this.page, this.count, this.ticketFilter, this.assignedToMe)
            .subscribe(function (responseApi) {
            _this.ticketFilter.title = _this.ticketFilter.title === 'uninformed' ? '' : _this.ticketFilter.title;
            _this.ticketFilter.number = _this.ticketFilter.number == 0 ? null : _this.ticketFilter.number;
            _this.listTicket = responseApi['data']['content'];
            _this.pages = new Array(responseApi['data']['totalPages']);
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'[0]]
            });
        });
    };
    TicketListComponent.prototype.cleanFilter = function () {
        this.assignedToMe = false;
        this.page = 0;
        this.count = 5;
        this.ticketFilter = new _model_ticket_model__WEBPACK_IMPORTED_MODULE_2__["Ticket"]('', 0, '', '', '', '', '', null, null, '', null);
        this.findAll(this.page, this.count);
    };
    TicketListComponent.prototype.edit = function (id) {
        this.route.navigate(['/ticket-new', id]);
    };
    TicketListComponent.prototype.detail = function (id) {
        this.route.navigate(['/ticket-detail', id]);
    };
    TicketListComponent.prototype.delete = function (id) {
        var _this = this;
        this.dialogService.confirm('Do you wanna delete the ticket?').then(function (canDelete) {
            if (canDelete) {
                _this.message = {};
                _this.ticketService.delete(id).subscribe(function (responseApi) {
                    _this.showMessage({
                        type: 'Success',
                        text: 'Record Deleted!'
                    });
                    _this.findAll(_this.page, _this.count);
                }, function (err) {
                    _this.showMessage({
                        type: 'error',
                        text: err['error']['errors'[0]]
                    });
                });
            }
        });
    };
    TicketListComponent.prototype.setNextPage = function (event) {
        event.preventDefault();
        if (this.page + 1 < this.pages.length) {
            ++this.page;
            this.findAll(this.page, this.count);
        }
    };
    TicketListComponent.prototype.setPreviusPage = function (event) {
        event.preventDefault();
        if (this.page > 0) {
            --this.page;
            this.findAll(this.page, this.count);
        }
    };
    TicketListComponent.prototype.setPage = function (num, event) {
        event.preventDefault();
        this.page = num;
        this.findAll(this.page, this.count);
    };
    TicketListComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    TicketListComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    TicketListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ticket-list',
            template: __webpack_require__(/*! ./ticket-list.component.html */ "./src/app/components/ticket-list/ticket-list.component.html"),
            styles: [__webpack_require__(/*! ./ticket-list.component.css */ "./src/app/components/ticket-list/ticket-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _services_ticket_service__WEBPACK_IMPORTED_MODULE_4__["TicketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], TicketListComponent);
    return TicketListComponent;
}());



/***/ }),

/***/ "./src/app/components/ticket-new/ticket-new.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/ticket-new/ticket-new.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0LW5ldy90aWNrZXQtbmV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/ticket-new/ticket-new.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/ticket-new/ticket-new.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\" style=\"margin-left: 0%\">\n  <div class=\"box box-info\">\n    <div class=\"box-header with-border\">\n      <h3 class=\"box-title\">New Ticket</h3>\n    </div>\n    <!-- /.box-header -->\n    <!-- form start -->\n    <form class=\"form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"register()\">\n\n      <div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n        <strong>{{ message.text }}</strong>\n      </div>\n\n      <div class=\"box-body\">\n\n        <div [ngClass]=\"getFromGroupClass(title.invalid, title.dirty)\">\n          <label for=\"inputTitle\" class=\"col-sm-2 control-label\">Email</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              [(ngModel)]=\"ticket.title\"\n              class=\"form-control\"\n              name=\"title\"\n              id=\"inputTitle\"\n              #title=\"ngModel\"\n              placeholder=\"Title\"\n              required=\"required\"\n            >\n            <span class=\"help-block\" *ngIf=\"title.invalid && title.dirty\"> Title is required!</span>\n          </div>\n        </div>\n\n        <div [ngClass]=\"getFromGroupClass(priority.invalid, priority.dirty)\">\n          <label for=\"inputPriority\" class=\"col-sm-2 control-label\">Priority</label>\n          <div class=\"col-sm-10\">\n            <select\n              [(ngModel)]=\"ticket.priority\"\n              class=\"form-control select2\"\n              id=\"inputPriority\"\n              name=\"priority\"\n              #priority=\"ngModel\"\n              style=\"width: 100%\"\n              required\n            >\n              <option>Low</option>\n              <option>Normal</option>\n              <option>High</option>\n            </select>\n            <span class=\"help-block\" *ngIf=\"priority.invalid && priority.dirty\"> Priority is Required!</span>\n          </div>\n        </div>\n\n        <div [ngClass]=\"getFromGroupClass(description.invalid, description.dirty)\">\n          <label for=\"inputDescription\" class=\"col-sm-2 control-label\">Description</label>\n          <div class=\"col-sm-10\">\n            <textarea\n              [(ngModel)]=\"ticket.description\"\n              class=\"form-control\"\n              name=\"description\"\n              rows=\"3\"\n              id=\"inputDescription\"\n              #description=\"ngModel\"\n              placeholder=\"Description...\"\n              required=\"required\"\n            ></textarea>\n            <span class=\"help-block\" *ngIf=\"description.invalid && description.dirty\"> Description is required!</span>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"inputImage\" class=\"col-sm-2 control-label\">Image</label>\n          <div class=\"col-sm-10\">\n            <img [src]=\"ticket.image\" width=\"50%\" height=\"50%\">\n            <input type=\"file\" id=\"image\" (change)=\"onFileChange($event)\"/>\n          </div>\n\n        </div>\n\n\n      </div>\n      <!-- /.box-body -->\n      <div class=\"box-footer\">\n        <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-info pull-right\">Submit</button>\n      </div>\n      <!-- /.box-footer -->\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/ticket-new/ticket-new.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/ticket-new/ticket-new.component.ts ***!
  \***************************************************************/
/*! exports provided: TicketNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketNewComponent", function() { return TicketNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_ticket_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/ticket.model */ "./src/app/model/ticket.model.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_ticket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ticket.service */ "./src/app/services/ticket.service.ts");







var TicketNewComponent = /** @class */ (function () {
    function TicketNewComponent(ticketService, route) {
        this.ticketService = ticketService;
        this.route = route;
        this.ticket = new _model_ticket_model__WEBPACK_IMPORTED_MODULE_3__["Ticket"](null, 0, '', '', '', '', '', null, null, '', null);
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"].getInstance();
    }
    TicketNewComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id != undefined) {
            this.findById(id);
        }
    };
    TicketNewComponent.prototype.findById = function (id) {
        var _this = this;
        this.ticketService.findById(id).subscribe(function (responseApi) {
            _this.ticket = responseApi.data;
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    TicketNewComponent.prototype.register = function () {
        var _this = this;
        this.message = '';
        this.ticketService.createOrUpdate(this.ticket).subscribe(function (responseApi) {
            _this.ticket = new _model_ticket_model__WEBPACK_IMPORTED_MODULE_3__["Ticket"](null, 0, '', '', '', '', '', null, null, '', null);
            var ticketRet = responseApi.data;
            _this.form.resetForm();
            _this.showMessage({
                type: 'success',
                text: "Registered " + ticketRet.title + " successfully!"
            });
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'[0]]
            });
        });
    };
    TicketNewComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (event.target.files[0].size > 20000000) {
            this.showMessage({
                type: 'error',
                text: 'Maximum image size of 2 MB'
            });
        }
        else {
            this.ticket.image = '';
            var reader = new FileReader();
            reader.onloadend = function (e) {
                _this.ticket.image = reader.result.toString();
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    TicketNewComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    TicketNewComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    TicketNewComponent.prototype.getFromGroupClass = function (isInvalid, isDirty) {
        return {
            'from-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': !isInvalid && isDirty
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], TicketNewComponent.prototype, "form", void 0);
    TicketNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ticket-new',
            template: __webpack_require__(/*! ./ticket-new.component.html */ "./src/app/components/ticket-new/ticket-new.component.html"),
            styles: [__webpack_require__(/*! ./ticket-new.component.css */ "./src/app/components/ticket-new/ticket-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ticket_service__WEBPACK_IMPORTED_MODULE_6__["TicketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], TicketNewComponent);
    return TicketNewComponent;
}());



/***/ }),

/***/ "./src/app/components/user-list/user-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n  <strong>{{ message.text }}</strong>\n</div>\n\n<div class=\"row\">\n<div class=\"col-md-8\">\n  <div class=\"box\">\n    <div class=\"box-header with-border\">\n      <h3 class=\"box-title\">User List</h3>\n    </div>\n    <!-- /.box-header -->\n    <div class=\"box-body\">\n      <table class=\"table table-bordered\">\n        <tbody><tr>\n          <th style=\"width: 10px\">#</th>\n          <th>Email</th>\n          <th>Profile</th>\n          <th style=\"width: 10px\">&nbsp;</th>\n          <th style=\"width: 10px\">&nbsp;</th>\n        </tr>\n        <tr *ngFor=\"let user of listUser; let i = index\">\n          <td>{{i+1}}</td>\n          <td>{{user.email}}</td>\n          <td>{{user.profile}}</td>\n          <td><button class=\"btn btn-primary\" (click)=\"edit(user.id)\">Edit</button>       </td>\n          <td><button class=\"btn btn-danger\" (click)=\"delete(user.id)\">Delete</button>       </td>\n        </tr>\n\n        </tbody>\n      </table>\n    </div>\n    <!-- /.box-body -->\n    <div class=\"box-footer clearfix\">\n      <ul class=\"pagination pagination-sm no-margin pull-right\">\n        <li><a href=\"\" (click)=\"setPreviusPage($event)\">«</a></li>\n        <li *ngFor=\"let pag of pages; let i=index\">\n          <a [ngClass]=\"{'pagination-focus': i == page }\" href=\"#\" (click)=\"setPage(i,$event)\">{{i+1}}</a>\n        </li>\n        <li><a href=\"\" (click)=\"setNextPage($event)\">»</a></li>\n      </ul>\n    </div>\n  </div>\n  <!-- /.box -->\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.ts ***!
  \*************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UserListComponent = /** @class */ (function () {
    function UserListComponent(dialogService, userService, router) {
        this.dialogService = dialogService;
        this.userService = userService;
        this.router = router;
        this.page = 0;
        this.count = 5;
        this.listUser = [];
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.findAll(this.page, this.count);
    };
    UserListComponent.prototype.findAll = function (page, count) {
        var _this = this;
        this.userService.findAll(page, count).subscribe(function (responseApi) {
            _this.listUser = responseApi['data']['content'];
            _this.pages = new Array(responseApi['data']['totalPages']);
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'[0]]
            });
        });
    };
    UserListComponent.prototype.edit = function (id) {
        this.router.navigate(['/user-new', id]);
    };
    UserListComponent.prototype.delete = function (id) {
        var _this = this;
        this.dialogService.confirm('Do you wanna delete the user?').then(function (canDelete) {
            if (canDelete) {
                _this.message = {};
                _this.userService.delete(id).subscribe(function (responseApi) {
                    _this.showMessage({
                        type: 'Success',
                        text: 'Record Deleted!'
                    });
                    _this.findAll(_this.page, _this.count);
                }, function (err) {
                    _this.showMessage({
                        type: 'error',
                        text: err['error']['errors'[0]]
                    });
                });
            }
        });
    };
    UserListComponent.prototype.setNextPage = function (event) {
        event.preventDefault();
        if (this.page + 1 < this.pages.length) {
            ++this.page;
            this.findAll(this.page, this.count);
        }
    };
    UserListComponent.prototype.setPreviusPage = function (event) {
        event.preventDefault();
        if (this.page > 0) {
            --this.page;
            this.findAll(this.page, this.count);
        }
    };
    UserListComponent.prototype.setPage = function (num, event) {
        event.preventDefault();
        this.page = num;
        this.findAll(this.page, this.count);
    };
    UserListComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    UserListComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/components/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/components/user-list/user-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/components/user-new/user-new.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/user-new/user-new.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1uZXcvdXNlci1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user-new/user-new.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/user-new/user-new.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\" style=\"margin-left: 0%\">\n  <div class=\"box box-info\">\n    <div class=\"box-header with-border\">\n      <h3 class=\"box-title\">New User</h3>\n    </div>\n    <!-- /.box-header -->\n    <!-- form start -->\n    <form class=\"form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"register()\">\n\n      <div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n        <strong>{{ message.text }}</strong>\n      </div>\n\n      <div class=\"box-body\">\n\n        <div [ngClass]=\"getFromGroupClass(email.invalid, email.dirty)\">\n          <label for=\"inputEmail\" class=\"col-sm-2 control-label\">Email</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"email\"\n              [(ngModel)]=\"user.email\"\n              class=\"form-control\"\n              name=\"email\"\n              id=\"inputEmail\"\n              #email=\"ngModel\"\n              placeholder=\"Email\"\n              email\n            >\n            <span class=\"help-block\" *ngIf=\"email.invalid && email.dirty\"> Email Invalid!</span>\n          </div>\n        </div>\n\n        <div [ngClass]=\"getFromGroupClass(password.invalid, password.dirty)\">\n          <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Password</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"password\"\n              [(ngModel)]=\"user.password\"\n              class=\"form-control\"\n              id=\"inputPassword\"\n              name=\"password\"\n              #password=\"ngModel\"\n              placeholder=\"Password\"\n              required\n            >\n            <span class=\"help-block\" *ngIf=\"password.invalid && password.dirty\"> Password is Required!</span>\n          </div>\n        </div>\n\n        <div [ngClass]=\"getFromGroupClass(profile.invalid, profile.dirty)\">\n          <label for=\"inputProfile\" class=\"col-sm-2 control-label\">Profile</label>\n          <div class=\"col-sm-10\">\n            <select\n              [(ngModel)]=\"user.profile\"\n              class=\"form-control select2\"\n              id=\"inputProfile\"\n              name=\"profile\"\n              #profile=\"ngModel\"\n              style=\"width: 100%\"\n              required\n            >\n              <option>ROLE_ADMIN</option>\n              <option>ROLE_CUSTOMER</option>\n              <option>ROLE_TECHNICIAN</option>\n            </select>\n            <span class=\"help-block\" *ngIf=\"profile.invalid && profile.dirty\"> Profile is Required!</span>\n          </div>\n        </div>\n\n      </div>\n      <!-- /.box-body -->\n      <div class=\"box-footer\">\n        <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-info pull-right\">Submit</button>\n      </div>\n      <!-- /.box-footer -->\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-new/user-new.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/user-new/user-new.component.ts ***!
  \***********************************************************/
/*! exports provided: UserNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNewComponent", function() { return UserNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/user.model */ "./src/app/model/user.model.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var UserNewComponent = /** @class */ (function () {
    function UserNewComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.user = new _model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](null, '', '', '');
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"].getInstance();
    }
    UserNewComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id != undefined) {
            this.findById(id);
        }
    };
    UserNewComponent.prototype.findById = function (id) {
        var _this = this;
        this.userService.findById(id).subscribe(function (responseApi) {
            _this.user = responseApi.data;
            _this.user.password = '';
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    UserNewComponent.prototype.register = function () {
        var _this = this;
        this.message = '';
        this.userService.createOrUpdate(this.user).subscribe(function (responseApi) {
            console.info(responseApi);
            _this.user = new _model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](null, '', '', '');
            var userRet = responseApi.data;
            _this.form.resetForm();
            _this.showMessage({
                type: 'success',
                text: "Registered " + userRet.email + " successfully!"
            });
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'[0]]
            });
        });
    };
    UserNewComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    UserNewComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    UserNewComponent.prototype.getFromGroupClass = function (isInvalid, isDirty) {
        return {
            'from-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': !isInvalid && isDirty
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], UserNewComponent.prototype, "form", void 0);
    UserNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-new',
            template: __webpack_require__(/*! ./user-new.component.html */ "./src/app/components/user-new/user-new.component.html"),
            styles: [__webpack_require__(/*! ./user-new.component.css */ "./src/app/components/user-new/user-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], UserNewComponent);
    return UserNewComponent;
}());



/***/ }),

/***/ "./src/app/dialog.service.ts":
/*!***********************************!*\
  !*** ./src/app/dialog.service.ts ***!
  \***********************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DialogService = /** @class */ (function () {
    function DialogService() {
    }
    DialogService.prototype.confirm = function (message) {
        return new Promise(function (resolve) { return resolve(window.confirm(message || 'Confirm ?')); });
    };
    DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/model/summary.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/summary.model.ts ***!
  \****************************************/
/*! exports provided: Summary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Summary", function() { return Summary; });
var Summary = /** @class */ (function () {
    function Summary() {
    }
    return Summary;
}());



/***/ }),

/***/ "./src/app/model/ticket.model.ts":
/*!***************************************!*\
  !*** ./src/app/model/ticket.model.ts ***!
  \***************************************/
/*! exports provided: Ticket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ticket", function() { return Ticket; });
var Ticket = /** @class */ (function () {
    function Ticket(id, number, title, description, status, priority, image, user, assignedUser, date, changes) {
        this.id = id;
        this.number = number;
        this.title = title;
        this.description = description;
        this.status = status;
        this.priority = priority;
        this.image = image;
        this.user = user;
        this.assignedUser = assignedUser;
        this.date = date;
        this.changes = changes;
    }
    return Ticket;
}());



/***/ }),

/***/ "./src/app/model/user.model.ts":
/*!*************************************!*\
  !*** ./src/app/model/user.model.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, email, password, profile) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.profile = profile;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/helpdesk.api.ts":
/*!******************************************!*\
  !*** ./src/app/services/helpdesk.api.ts ***!
  \******************************************/
/*! exports provided: HELP_DESK_API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HELP_DESK_API", function() { return HELP_DESK_API; });
var HELP_DESK_API = 'http://localhost:8080';


/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.showTemplate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return SharedService_1.instance = SharedService_1.instance || this;
    }
    SharedService_1 = SharedService;
    SharedService.getInstance = function () {
        if (this.instance == null) {
            this.instance = new SharedService_1();
        }
        return this.instance;
    };
    SharedService.prototype.isLoggedIn = function () {
        if (this.user == null) {
            return false;
        }
        return this.user.email !== '';
    };
    var SharedService_1;
    SharedService.instance = null;
    SharedService = SharedService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/ticket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/ticket.service.ts ***!
  \********************************************/
/*! exports provided: TicketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketService", function() { return TicketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpdesk_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpdesk.api */ "./src/app/services/helpdesk.api.ts");




var TicketService = /** @class */ (function () {
    function TicketService(http) {
        this.http = http;
    }
    TicketService.prototype.createOrUpdate = function (ticket) {
        if (ticket.id != null && ticket.id !== '') {
            return this.http.put(_helpdesk_api__WEBPACK_IMPORTED_MODULE_3__["HELP_DESK_API"] + "/api/ticket", ticket);
        }
        else {
            ticket.id = null;
            ticket.status = 'New';
            return this.http.post(_helpdesk_api__WEBPACK_IMPORTED_MODULE_3__["HELP_DESK_API"] + "/api/ticket", ticket);
        }
    };
    TicketService.prototype.findAll = function (page, count) {
        return this.http.get(_helpdesk_api__WEBPACK_IMPORTED_MODULE_3__["HELP_DESK_API"] + "/api/ticket/" + page + "/" + count);
    };
    TicketService.prototype.findById = function (id) {
        return this.http.get(_helpdesk_api__WEBPACK_IMPORTED_MODULE_3__["HELP_DESK_API"] + "/api/ticket/" + id);
    };
    TicketService.prototype.delete = function (id) {
        return this.http.delete(_helpdesk_api__WEBPACK_IMPORTED_MODULE_3__["HELP_DESK_API"] + "/api/ticket/" + id);
    };
    TicketService.prototype.findByParams = function (page, count, ticket, assignedToMe) {
        ticket.number = ticket.number == null ? 0 : ticket.number;
        ticket.title = ticket.title == '' ? 'uninformed' : ticket.title;
        ticket.status = ticket.status == '' ? 'uninformed' : ticket.status;
        ticket.priority = ticket.priority == '' ? 'uninformed' : ticket.priority;
        return this.http.get(_helpdesk_api__WEBPACK_IMPORTED_MODULE_3__["HELP_DESK_API"] + "/api/ticket/" + page + "/" + count + "/" + ticket.number + "/" + ticket.title + "/" + ticket.status + "/" + ticket.priority + "/" + assignedToMe);
    };
    TicketService.prototype.changeStatus = function (status, ticket) {
        return this.http.put(_helpdesk_api__WEBPACK_IMPORTED_MODULE_3__["HELP_DESK_API"] + "/api/ticket/" + ticket.id + "/" + status, ticket);
    };
    TicketService.prototype.summary = function () {
        return this.http.get(_helpdesk_api__WEBPACK_IMPORTED_MODULE_3__["HELP_DESK_API"] + "/api/ticket/summary");
    };
    TicketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TicketService);
    return TicketService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpdesk_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpdesk.api */ "./src/app/services/helpdesk.api.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.login = function (user) {
        return this.http.post(_helpdesk_api__WEBPACK_IMPORTED_MODULE_3__["HELP_DESK_API"] + "/api/auth", user);
    };
    UserService.prototype.createOrUpdate = function (user) {
        if (user.id !== null && user.id !== '') {
            return this.http.put(_helpdesk_api__WEBPACK_IMPORTED_MODULE_3__["HELP_DESK_API"] + "/api/user", user);
        }
        else {
            return this.http.post(_helpdesk_api__WEBPACK_IMPORTED_MODULE_3__["HELP_DESK_API"] + "/api/user", user);
        }
    };
    UserService.prototype.findAll = function (page, count) {
        return this.http.get(_helpdesk_api__WEBPACK_IMPORTED_MODULE_3__["HELP_DESK_API"] + "/api/user/" + page + "/" + count);
    };
    UserService.prototype.findById = function (id) {
        return this.http.get(_helpdesk_api__WEBPACK_IMPORTED_MODULE_3__["HELP_DESK_API"] + "/api/user/" + id);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(_helpdesk_api__WEBPACK_IMPORTED_MODULE_3__["HELP_DESK_API"] + "/api/user/" + id);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /workspace/HelpDesk/front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map