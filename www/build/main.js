webpackJsonp([0],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(authProvider, jwtHelper, httpClient, actionSheetCtrl) {
        var _this = this;
        this.authProvider = authProvider;
        this.httpClient = httpClient;
        this.actionSheetCtrl = actionSheetCtrl;
        this.authProvider.authUser.subscribe(function (jwt) {
            if (jwt) {
                var decoded = jwtHelper.decodeToken(jwt);
                _this.user = decoded.sub;
            }
            else {
                _this.user = null;
            }
        });
    }
    HomePage.prototype.logout = function () {
        this.authProvider.logout();
    };
    HomePage.prototype.presentActionSheet = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Cinema',
            buttons: [
                {
                    text: 'Film 1',
                    role: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: 'Archive',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n\n    <button ion-button icon-only menuToggle side="left">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="action-sheets-basic-page">\n  Welcome <strong>{{user}}</strong>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3>Start Game</ion-col>\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3>Active Games</ion-col>\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3>Finished Games</ion-col>\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3>EXTRA</ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__["b" /* JwtHelperService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, loadingCtrl, authProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authProvider = authProvider;
        this.toastCtrl = toastCtrl;
    }
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.login = function (value) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Logging in ...'
        });
        loading.present();
        this.authProvider
            .login(value)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["finalize"])(function () { return loading.dismiss(); }))
            .subscribe(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }, function (err) { return _this.handleError(err); });
    };
    LoginPage.prototype.handleError = function (error) {
        var message;
        if (error.status && error.status === 401) {
            message = 'Login failed';
        }
        else {
            message = "Unexpected error: " + error.statusText;
        }
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'bottom'
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form #form="ngForm" (ngSubmit)="login(form.value)" novalidate>\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input id="mail" type="text" name="email" ngModel required #email="ngModel"\n                   [class.invalid]="email.errors && email.dirty"></ion-input>\n      </ion-item>\n      <ion-item class="error-message" *ngIf="email.errors?.required && email.dirty">\n        Email is required\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input id="password" type="password" name="password" ngModel required #password="ngModel"\n                   [class.invalid]="password.errors && password.dirty"></ion-input>\n      </ion-item>\n      <ion-item class="error-message" *ngIf="password.errors?.required && password.dirty">\n        Password is required\n      </ion-item>\n\n      <div padding>\n        <button id="btnLogin" ion-button color="primary" block type="submit" [disabled]="!form.valid">Login</button>\n      </div>\n\n      <div padding>\n        <button id="btnSignUp" ion-button color="secondary" block type="button" (click)="register()">Sign up</button>\n      </div>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/game/game.module": [
		839,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 237;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_finalize__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_finalize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_finalize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(authProvider, loadingCtrl, toastCtrl, navCtrl) {
        this.authProvider = authProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
    }
    RegisterPage.prototype.register = function (value) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Signing up ...'
        });
        loading.present();
        this.authProvider
            .register(value)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_finalize__["finalize"])(function () { return loading.dismiss(); }))
            .subscribe(function (data) { }, function (jwt) { return _this.showSuccesToast(jwt); });
    };
    RegisterPage.prototype.showSuccesToast = function (jwt) {
        if (jwt.error.text === "Succes") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            var toast = this.toastCtrl.create({
                message: 'Sign up successful please check mail',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (jwt.error.text === "Failure type 1") {
            var toast = this.toastCtrl.create({
                message: 'Email already registered',
                duration: 3000,
                position: 'bottom'
            }).present();
            this.usernameModel.control.setErrors({ 'usernameTaken': true });
        }
        else {
            this.handleError(jwt);
        }
    };
    RegisterPage.prototype.handleError = function (error) {
        var message = 'Unexpected error occurred';
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'bottom'
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('username'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgModel"])
    ], RegisterPage.prototype, "usernameModel", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>register</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form #form="ngForm" (ngSubmit)="register(form.value)" novalidate>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>Firstname</ion-label>\n\n        <ion-input type="text" name="firstname" ngModel required #firstname="ngModel"\n\n                   [class.invalid]="firstname.errors && firstname.dirty"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="firstname.errors?.required && firstname.dirty">\n\n        FirstName is required\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Lastname</ion-label>\n\n        <ion-input type="text" name="lastname" ngModel required #lastname="ngModel"\n\n                   [class.invalid]="lastname.errors && lastname.dirty"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="lastname.errors?.required && lastname.dirty">\n\n        LastName is required\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input type="email" name="email" ngModel required email #email="ngModel"\n\n                   [class.invalid]="email.errors && email.dirty"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="email.errors?.required && email.dirty">\n\n        Email is required\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="email.errors?.email && email.dirty">\n\n        Email is not valid\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password" name="password" ngModel required #password="ngModel"\n\n                   [class.invalid]="password.errors && password.dirty"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="password.errors?.required && password.dirty">\n\n        Password is required\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Matching password</ion-label>\n\n        <ion-input type="password" name="mpassword" ngModel required #mpassword="ngModel"\n\n                   [class.invalid]="mpassword.errors && mpassword.dirty"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="mpassword.errors?.required && mpassword.dirty">\n\n        Matching password is required\n\n      </ion-item>\n\n\n\n      <div padding>\n\n        <button ion-button color="primary" block type="submit" [disabled]="!form.valid">Sign up</button>\n\n      </div>\n\n\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(425);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export jwtOptionsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_validation__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth0_angular_jwt__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














function jwtOptionsFactory(storage) {
    return {
        tokenGetter: function () { return storage.get('jwt_token'); },
        whitelistedDomains: ['localhost:8080']
    };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__auth0_angular_jwt__["c" /* JwtModule */].forRoot({
                    jwtOptionsProvider: {
                        provide: __WEBPACK_IMPORTED_MODULE_13__auth0_angular_jwt__["a" /* JWT_OPTIONS */],
                        useFactory: jwtOptionsFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ng2_validation__["CustomFormsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, authProvider) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.pages = [
            { title: 'Page One', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        authProvider.authUser.subscribe(function (jwt) {
            if (jwt) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            }
        });
        authProvider.checkLogin();
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <button ion-button icon-only menuToggle side="left">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title side="right">Menu</ion-title>\n    </ion-toolbar>\n\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="homePage()">\n        Home\n      </button>\n      <button ion-item (click)="gamePage()">\n        Games\n      </button>\n      <button ion-item (click)="openPage(eventsPage)">\n        Events\n      </button>\n    </ion-list>\n  </ion-content>\n  <ion-footer class="bar-light">\n    <div class="button-bar">\n      <button class="button button-icon icon " side="left" menuToggle>\n        <ion-icon name="home"></ion-icon>\n        Home\n      </button>\n      <button class="button button-icon icon ion-log-out" side="right" (click)="exitApp()">\n        <ion-icon name="exit"></ion-icon>\n        Exit\n      </button>\n    </div>\n  </ion-footer>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators_tap__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators_tap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_tap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth0_angular_jwt__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthProvider = /** @class */ (function () {
    function AuthProvider(httpClient, storage, jwtHelper) {
        this.httpClient = httpClient;
        this.storage = storage;
        this.jwtHelper = jwtHelper;
        this.jwtTokenName = 'token';
        this.email = '';
        this.firstName = '';
        this.lastName = '';
        this.password = '';
        this.matchingPassword = '';
        this.authUser = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["ReplaySubject"](1);
    }
    AuthProvider.prototype.checkLogin = function () {
        var _this = this;
        this.storage.get(this.jwtTokenName).then(function (jwt) {
            if (jwt && !_this.jwtHelper.isTokenExpired(jwt)) {
                _this.authUser.next(jwt);
            }
            else {
                _this.storage.remove(_this.jwtTokenName).then(function () { return _this.authUser.next(null); });
            }
        });
    };
    AuthProvider.prototype.login = function (values) {
        var _this = this;
        this.email = values.email;
        this.password = values.password;
        var body = JSON.stringify({
            email: values.email,
            password: values.password
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* SERVER_URL */] + "/login", body, { headers: headers })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_tap__["tap"])(function (jwt) { return _this.handleJwtResponse(jwt.token); }));
    };
    AuthProvider.prototype.logout = function () {
        var _this = this;
        this.storage.remove(this.jwtTokenName).then(function () { return _this.authUser.next(null); });
    };
    AuthProvider.prototype.register = function (values) {
        var _this = this;
        this.email = values.email;
        this.password = values.password;
        this.firstName = values.firstname;
        this.lastName = values.lastname;
        this.matchingPassword = values.mpassword;
        var body = JSON.stringify({
            email: this.email,
            password: this.password,
            matchingPassword: this.matchingPassword,
            firstName: this.firstName,
            lastName: this.lastName
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* SERVER_URL */] + "/users/register", body, { headers: headers })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_tap__["tap"])(function (jwt) {
            if (jwt.error.text !== 'Succes') {
                return _this.handleJwtResponse(jwt);
            }
            return jwt;
        }));
    };
    AuthProvider.prototype.handleJwtResponse = function (jwt) {
        var _this = this;
        return this.storage.set(this.jwtTokenName, jwt)
            .then(function () { return _this.authUser.next(jwt); })
            .then(function () { return jwt; });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__auth0_angular_jwt__["b" /* JwtHelperService */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVER_URL; });
var SERVER_URL = "https://springip2.herokuapp.com/";
//# sourceMappingURL=config.js.map

/***/ })

},[420]);
//# sourceMappingURL=main.js.map