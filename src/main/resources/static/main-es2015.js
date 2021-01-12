(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"router\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/browse/browse.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/browse/browse.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\r\n    <div *ngIf=\"games\">\r\n        <h1 *ngIf=\"hasGames\" class=\"popular-title\">Popular <span>{{games[0].platforms[0].name}}</span> Games:\r\n        </h1>\r\n        <hr>\r\n        <div *ngFor=\"let game of games\" class=\"game-content\">\r\n            <ul class=\"list-unstyled\">\r\n                <li class=\"media covers mg-fluid\">\r\n                    <div class=\"img-container\">\r\n                        <a (click)=\"toGame(game.id)\" class=\"clickable\">\r\n                            <img src=\"https://images.igdb.com/igdb/image/upload/t_cover_big/{{game.cover.image_id}}.png\"\r\n                                class=\"img img-fluid align-self-start mr-3\" alt=\"covers\">\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"media-body\">\r\n                        <a (click)=\"toGame(game.id)\" class=\"clickable\">\r\n                            <h4 class=\"mt-0 mb-1\" class=\"title\"><span><img src=\"../../../assets/img/Arrow.svg\"\r\n                                        width=\"25\" loading=\"lazy\"></span>\r\n                                {{game.name}}\r\n                            </h4>\r\n                        </a>\r\n                        <hr>\r\n                        <p class=\"summary\">{{game.summary}}</p>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"!hasGames\">\r\n        <div class=\"error\">\r\n            <img src=\"../../../assets/img/notFound.svg\" class=\"error-img\">\r\n            <div class=\"error-text\">\r\n                <p class=\"error-text-title\">Uh-Oh! Something went wrong!</p>\r\n                <p class=\"error-text-body\">The platform you are looking for doesn't exist!</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"spacer\"></div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-snackbar/custom-snackbar.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-snackbar/custom-snackbar.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">Game added successfully!\r\n    <button class=\"btn btn-outline-secondary btn-sm btn-select\" (click)=\"toProfile()\">\r\n        Go to Collection\r\n    </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a id=\"top\"></a>\n<footer class=\"footer-checkpoint\">\n    <div class=\"footer-container\">\n        <p>Created by <a href=\"https://github.com/t-mev\" target=\"_blank\">@T-Mev</a> |\n            Powered By <a href=\"https://api-docs.igdb.com/\" target=\"_blank\">IGDB</a>\n        </p>\n    </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-login/form-login.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-login/form-login.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form *ngIf=\"!isLoggedIn\" name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"username\">Username:</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" required minlength=\"3\"\r\n            maxlength=\"20\" #username=\"ngModel\">\r\n\r\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && username.invalid\">\r\n            <div *ngIf=\"username.errors.required\">Username is required!</div>\r\n            <div *ngIf=\"username.errors.minlength\">Username must be at least 3 characters!</div>\r\n            <div *ngIf=\"username.errors.maxlength\">Username cannot be more than 20 characters!</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"password\">Password:</label>\r\n        <input type=\"password\" class=\"form-control password\" name=\"password\" [(ngModel)]=\"form.password\" required\r\n            minlength=\"6\" #password=\"ngModel\">\r\n\r\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"f.submitted && password.invalid\">\r\n            <div *ngIf=\"password.errors.required\">Password is required</div>\r\n            <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\r\n        </div>\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-secondary btn-block btn-login\" matRipple>Sign In</button>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"f.submitted && isLoginFailed\">\r\n            <p>{{ errorMessage }}</p>\r\n        </div>\r\n    </div>\r\n\r\n</form>\r\n\r\n<div class=\"alert alert-success\" *ngIf=\"isLoggedIn\">Login successful!\r\n    <p>Hello {{currentUser.username}}!</p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-register/form-register.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-register/form-register.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form *ngIf=\"!isSuccessful\" name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"username\">Username:</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" required minlength=\"3\"\r\n            maxlength=\"20\" #username=\"ngModel\">\r\n\r\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && username.invalid\">\r\n            <div *ngIf=\"username.errors.required\">Username is required!</div>\r\n            <div *ngIf=\"username.errors.minlength\">Username must be at least 3 characters!</div>\r\n            <div *ngIf=\"username.errors.maxlength\">Username cannot be more than 20 characters!</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"password\">Password:</label>\r\n        <input type=\"password\" class=\"form-control password\" name=\"password\" [(ngModel)]=\"form.password\" required\r\n            minlength=\"6\" maxlength=\"40\" #password=\"ngModel\">\r\n\r\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && password.invalid\">\r\n            <div *ngIf=\"password.errors.required\">Password is required!</div>\r\n            <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters!</div>\r\n            <div *ngIf=\"password.errors.maxlength\">Password cannot be more than 40 characters!</div>\r\n        </div>\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-secondary btn-block btn-register\" matRipple>Create your account</button>\r\n    </div>\r\n\r\n    <div class=\"alert alert-warning\" *ngIf=\"f.submitted && isSignUpFailed\">\r\n        <p>{{ errorMessage }}</p>\r\n    </div>\r\n\r\n</form>\r\n\r\n<div class=\"alert alert-success\" *ngIf=\"isSuccessful\">Registration successful!</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-details/game-details.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-details/game-details.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"games\">\r\n    <div *ngIf=\"games[0].artworks; else jumboError1\" class=\"jumbotron jumbotron-fluid\" [ngStyle]=\"{ background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%),\r\n                url(https://images.igdb.com/igdb/image/upload/t_original/'+ games[0].artworks[0].image_id +'.png)'}\">\r\n    </div>\r\n\r\n    <ng-template #jumboError1>\r\n        <div *ngIf=\"games[0].screenshots; else jumboError2\" class=\"jumbotron jumbotron-fluid\" [ngStyle]=\"{ background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%),\r\n        url(https://images.igdb.com/igdb/image/upload/t_original/'+ games[0].screenshots[0].image_id +'.png)'}\">\r\n        </div>\r\n    </ng-template>\r\n\r\n    <ng-template #jumboError2>\r\n        <div class=\"jumbotron jumbotron-fluid jumbo-error\"\r\n            [ngStyle]=\"{ background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 100%, rgba(209, 209, 218) 100%)', height: '9vw'}\">\r\n        </div>\r\n    </ng-template>\r\n</div>\r\n\r\n<div class=\"info-container\" *ngIf=\"games\">\r\n    <div *ngFor=\"let game of games\" class=\"game-content\">\r\n        <div class=\"list-unstyled\">\r\n            <div class=\"media covers mg-fluid\">\r\n                <div class=\"img-container\">\r\n                    <img src=\"https://images.igdb.com/igdb/image/upload/t_cover_big/{{game.cover.image_id}}.png\"\r\n                        class=\"img img-fluid align-self-start mr-3\" alt=\"covers\">\r\n                    <div class=\"rating-container\" *ngIf=\"game.total_rating\"\r\n                        matTooltip=\"Based on {{game.total_rating_count}} ratings\" matTooltipClass=\"primary-tooltip\"\r\n                        [matTooltipPosition]=\"'above'\">\r\n                        <span class=\"rating-title\">Score:</span>\r\n                        <span class=\"rating-star\">★</span>\r\n                        <span class=\"rating-score\">{{formatScore(game.total_rating)}}</span>\r\n                    </div>\r\n                    <button *ngIf=\"!haveGame && currentUser != null && !addedToCollection\"\r\n                        (click)=\"addToCollection(game.id)\" type=\"button\"\r\n                        class=\"btn btn-secondary btn-block btn-collection\" matRipple>\r\n                        Add to Collection\r\n                    </button>\r\n\r\n                    <div *ngIf=\"haveGame\" class=\"included-container\">\r\n                        🗹 In collection!\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"media-body\">\r\n                    <h4 class=\"mt-0 mb-1\" class=\"title\">\r\n                        {{game.name}}\r\n                    </h4>\r\n                    <div class=\"dropdowns\">\r\n                        <div class=\"dropdown\">\r\n                            <button class=\"btn btn-secondary btn-sm dropdown-toggle\" type=\"button\"\r\n                                id=\"dropdownAvailableButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                                aria-expanded=\"false\" matRipple>\r\n                                <span class=\"button-label\">Available On</span>\r\n                            </button>\r\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownAvailableButton\">\r\n                                <p *ngFor=\"let platform of game.platforms\">• {{platform.name}}</p>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"dropdown\">\r\n                            <button data-display=\"static\" class=\"btn btn-secondary btn-sm  dropdown-toggle\"\r\n                                type=\"button\" id=\"dropdownReleaseButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                                aria-expanded=\"false\" matRipple>\r\n                                <span class=\"button-label\">Release Dates</span>\r\n                            </button>\r\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownReleaseButton\">\r\n                                <div *ngFor=\"let release of game.release_dates\">\r\n                                    <div class=\"release-dates\">\r\n                                        <p>• <strong>{{release.human}}</strong></p>\r\n                                        <p><em>{{getReleaseDateRegion(release.region)}}</em></p>\r\n                                        <p>On {{release.platform.name}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"dropdown\">\r\n                            <button class=\"btn btn-secondary btn-sm dropdown-toggle\" type=\"button\"\r\n                                id=\"dropdownGenresButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                                aria-expanded=\"false\" matRipple>\r\n                                <span class=\"button-label\">Genres</span>\r\n                            </button>\r\n                            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownGenresButton\">\r\n                                <p *ngFor=\"let genre of game.genres\">• {{genre.name}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <hr>\r\n                    <div class=\"title-container\">\r\n                        <h1 class=\"media-title\">\r\n                            <span><img src=\"../../../assets/img/Arrow.svg\" width=\"18\" loading=\"lazy\"></span>\r\n                            Summary\r\n                        </h1>\r\n                    </div>\r\n                    <p id=\"summary\">{{game.summary}}</p>\r\n                    <div class=\"error-media error-summary\" *ngIf=\"!game.summary\">\r\n                        <mat-icon class=\"error-icon\">\r\n                            error_outline\r\n                        </mat-icon>\r\n                        No summary\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"games\" class=\"media-container\">\r\n    <div class=\"container\">\r\n        <div class=\"title-container\">\r\n            <h1 class=\"media-title\">\r\n                <span><img src=\"../../../assets/img/Arrow.svg\" width=\"18\" loading=\"lazy\"></span>\r\n                Screenshots\r\n            </h1>\r\n            <hr>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div *ngFor=\"let game of games\">\r\n                <div *ngFor=\"let screenshot of game.screenshots\" class=\"col-lg-3 col-sm-6 media-list\">\r\n                    <div class=\"media-img-container hover\" matRipple>\r\n                        <img class=\"media-img img-fluid img-thumbnail\" data-toggle=\"modal\"\r\n                            [attr.data-target]=\"'#' + screenshot.image_id\"\r\n                            src=\"https://images.igdb.com/igdb/image/upload/t_screenshot_big/{{screenshot.image_id}}.png\">\r\n                    </div>\r\n                    <!-- Screenshot Modal -->\r\n                    <div class=\"modal fade\" id=\"{{screenshot.image_id}}\" tabindex=\"-1\"\r\n                        aria-labelledby=\"screenshotModalLabel\" aria-hidden=\"true\">\r\n                        <div class=\"modal-dialog modal-dialog-centered modal-xl\">\r\n                            <div class=\"modal-content\">\r\n                                <div class=\"modal-body\">\r\n                                    <img class=\"modal-img img-fluid\"\r\n                                        src=\"https://images.igdb.com/igdb/image/upload/t_original/{{screenshot.image_id}}.png\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"error-media\" *ngIf=\"!game.screenshots\">\r\n                    <mat-icon class=\"error-icon\">\r\n                        error_outline\r\n                    </mat-icon>\r\n                    No screenshots\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"title-container\">\r\n            <h1 class=\"media-title\">\r\n                <span><img src=\"../../../assets/img/Arrow.svg\" width=\"18\" loading=\"lazy\"></span>\r\n                Videos\r\n            </h1>\r\n            <hr>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div *ngFor=\"let game of games\">\r\n                <div *ngFor=\"let video of game.videos\" class=\"col-lg-3 col-sm-6 media-list\">\r\n                    <div class=\"hover-container media-img-container hover\" matRipple>\r\n                        <mat-icon (click)=\"openModal(video.video_id)\" class=\"play-button\" [inline]=\"true\"\r\n                            data-toggle=\"modal\" data-target=\"#video-modal\">\r\n                            play_circle_filled\r\n                        </mat-icon>\r\n                        <img (click)=\"openModal(video.video_id)\" class=\"media-img img-fluid img-thumbnail\"\r\n                            data-toggle=\"modal\" data-target=\"#video-modal\"\r\n                            src=\"http://i3.ytimg.com/vi/{{video.video_id}}/hqdefault.jpg\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"error-media\" *ngIf=\"!game.videos\">\r\n                    <mat-icon class=\"error-icon\">\r\n                        error_outline\r\n                    </mat-icon>\r\n                    No videos\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- Video Modal -->\r\n        <div (click)=\"closeModal()\" #videoModal class=\"modal fade\" id=\"video-modal\" tabindex=\"-1\"\r\n            aria-labelledby=\"videoModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-dialog-centered modal-xl\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"embed-responsive embed-responsive-16by9\">\r\n                            <iframe *ngIf=\"videoURL\" #iframeModal id=\"youtubeVideo\" class=\"embed-responsive-item\"\r\n                                width=\"560\" height=\"315\" [src]=\"videoURL\" allowfullscreen>\r\n                            </iframe>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"!gameExists\">\r\n    <div class=\"error\">\r\n        <img src=\"../../../assets/img/notFound.svg\" class=\"error-img\">\r\n        <div class=\"error-text\">\r\n            <p class=\"error-text-title\">Uh-Oh! Something went wrong!</p>\r\n            <p class=\"error-text-body\">The game you are looking for doesn't exist!</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"spacer\"></div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg fixed-top navbar-light\">\r\n    <a class=\"navbar-brand\" href=\"\">\r\n        <img src=\"../../../assets/img/LogoSmall.png\" width=\"250\" loading=\"lazy\" data-toggle=\"collapse\"\r\n            data-target=\".navbar-collapse.show\">\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\"\r\n        aria-controls=\"navbarToggler\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarToggler\">\r\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n            <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-link\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    Browse⯆\r\n                </a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                    <h6 class=\"dropdown-header\">Platform</h6>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <a class=\"dropdown-item\" (click)=\"toBrowse(48)\" data-toggle=\"collapse\"\r\n                        data-target=\".navbar-collapse.show\">PS4</a>\r\n                    <a class=\"dropdown-item\" (click)=\"toBrowse(49)\" data-toggle=\"collapse\"\r\n                        data-target=\".navbar-collapse.show\">Xbox One</a>\r\n                    <a class=\"dropdown-item\" (click)=\"toBrowse(130)\" data-toggle=\"collapse\"\r\n                        data-target=\".navbar-collapse.show\">Nintendo Switch</a>\r\n                    <a class=\"dropdown-item\" (click)=\"toBrowse(6)\" data-toggle=\"collapse\"\r\n                        data-target=\".navbar-collapse.show\">PC</a>\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"upcoming\">Upcoming</a>\r\n            </li>\r\n        </ul>\r\n\r\n        <mat-form-field appearance=\"standard\" class=\"search-bar\">\r\n            <mat-label>Search</mat-label>\r\n            <input matInput #newSearch (keydown.enter)=\"toSearch(newSearch.value); newSearch.value = ''\" type='search'\r\n                spellcheck=\"false\">\r\n            <mat-icon class=\"clickable search-button\" (click)=\"toSearch(newSearch.value); newSearch.value = ''\"\r\n                matSuffix>search</mat-icon>\r\n        </mat-form-field>\r\n\r\n        <div *ngIf=\"!currentUser || currentUser == null; else loggedIn\">\r\n            <button type=\"button\" class=\"btn btn-light btn-sm login login-register\" data-toggle=\"modal\"\r\n                data-target=\"#loginModal\" matRipple>\r\n                Sign In\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary btn-sm login-register btn-register\" data-toggle=\"modal\"\r\n                data-target=\"#registerModal\" matRipple>\r\n                Register\r\n            </button>\r\n        </div>\r\n        <ng-template #loggedIn>\r\n            <div>\r\n                <button type=\"button\" class=\"btn btn-light btn-sm btn-collection\" routerLink=\"profile\" matRipple>\r\n                    My Collection\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-secondary btn-sm btn-signout\" (click)=\"logOut()\" matRipple>\r\n                    Log Out\r\n                </button>\r\n            </div>\r\n        </ng-template>\r\n    </div>\r\n</nav>\r\n\r\n<div class=\"modal fade\" id=\"loginModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"loginModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"loginModalLabel\">Sign In</h5>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <app-form-login></app-form-login>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"registerModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"registerModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"registerModalLabel\">Register</h5>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <app-form-register></app-form-register>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 title\">Save your progress!</h1>\r\n    <p class=\"lead\">Easily track your entire video game collection with Checkpoint! Featuring thousands of titles with\r\n      detailed information.</p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4 content\">\r\n      <mat-card class=\"card\">\r\n        <div class=\"thumbnail\">\r\n          <mat-icon [inline]=\"true\">search</mat-icon>\r\n          <hr>\r\n        </div>\r\n        <h2>Search</h2>\r\n        <p>Explore through thousands of entries to find exactly what you're looking for!</p>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-lg-4 content\">\r\n      <mat-card class=\"card\">\r\n        <div class=\"thumbnail\">\r\n          <mat-icon [inline]=\"true\">add_task</mat-icon>\r\n          <hr>\r\n        </div>\r\n        <h2>Add</h2>\r\n        <p>Found what you are looking for? Add it to your collection for safe keeping!</p>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-lg-4 content\">\r\n      <mat-card class=\"card\">\r\n        <div class=\"thumbnail\">\r\n          <mat-icon [inline]=\"true\">insert_emoticon</mat-icon>\r\n          <hr>\r\n        </div>\r\n        <h2>Collect</h2>\r\n        <p>Checkpoint makes it easy to appreciate your collection and watch it grow! </p>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"games\" class=\"container container-games\">\r\n  <div class=\"title-container\">\r\n    <h1 class=\"title-popular\"><span class=\"upcoming-title\">Popular</span> Games:</h1>\r\n    <hr>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let game of games\" class=\"col-lg-3 col-sm-6 media-list\">\r\n      <a (click)=\"toGame(game.id)\" class=\"clickable\">\r\n        <img src=\"https://images.igdb.com/igdb/image/upload/t_cover_big/{{game.cover.image_id}}.png\"\r\n          class=\"img img-fluid\" alt=\"covers\">\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"spacer\"></div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"currentUser || urlUser; else loggedOut\">\r\n\r\n    <div *ngIf=\"games\" class=\"container container-games\">\r\n        <div class=\"title-container\">\r\n            <h1 class=\"title-profile\">\r\n                <span class=\"user-title\">{{ username.toUpperCase() }}'s</span> Collection\r\n                <span *ngIf=\"games.length == 1\" class=\"user-title-counter\">{{games.length}} Game</span>\r\n                <span *ngIf=\"games.length > 1\" class=\"user-title-counter\">{{games.length}} Games</span>\r\n            </h1>\r\n            <hr>\r\n        </div>\r\n        <div class=\"btn-container\">\r\n            <div *ngIf=\"isOwner\">\r\n                <button class=\"btn btn-outline-secondary btn-input\" matRipple (click)=\"onShareClick()\">Share\r\n                </button>\r\n                <div>\r\n                    <mat-form-field *ngIf=\"showInput\" class=\"input-share-form\">\r\n                        <mat-label class=\"input-label\">Your link:</mat-label>\r\n                        <input #share class=\"input-text\" matInput type=\"text\" value=\"{{shareUrl}}/profile/{{username}}\"\r\n                            readonly=\"readonly\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n            <button class=\"btn btn-warning btn-collection\" *ngIf=\"!itemsInGamesList && isOwner\" matRipple\r\n                (click)=\"toggleEdit()\">Edit\r\n                Collection\r\n            </button>\r\n            <button class=\"btn btn-outline-secondary btn-deselect\" *ngIf=\"itemsInGamesList\" matRipple\r\n                (click)=\"deselectAllFromGamesList()\">Deselect All\r\n            </button>\r\n            <button class=\"btn btn-danger btn-delete-collection\" *ngIf=\"itemsInGamesList\" matRipple\r\n                (click)=\"removeAllGames()\">Remove\r\n            </button>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div *ngFor=\"let game of games\" class=\"col-lg-3 col-sm-6 media-list\">\r\n                <div class=\"game-button\">\r\n                    <a (click)=\"toGame(game.id)\" class=\"clickable\">\r\n                        <img src=\"https://images.igdb.com/igdb/image/upload/t_cover_big/{{game.cover.image_id}}.png\"\r\n                            [ngStyle]='customStyle' class=\"img img-fluid\" alt=\"covers\">\r\n                    </a>\r\n                    <button *ngIf=\"showEdit\" class=\"btn btn-outline-warning btn-sm btn-block btn-select\"\r\n                        data-toggle=\"button\" matRipple (click)=\"addToGamesList(game.id)\">\r\n                        Select\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <button *ngIf=\"games.length > 20\" class=\"btn btn-outline-secondary btn-block btn-top\"\r\n            (click)=\"scrollToTop()\">Back To Top</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"!hasGames\">\r\n        <div class=\"container container-games\">\r\n            <div class=\"title-container\">\r\n                <h1 class=\"title-popular\"><span class=\"user-title\">{{ username.toUpperCase() }}'s</span>\r\n                    COLLECTION:</h1>\r\n                <hr>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"error\">\r\n            <img src=\"../../../assets/img/gaming.svg\" class=\"error-img2\">\r\n            <div class=\"error-text\">\r\n                <p class=\"error-text-title\">Uh-Oh! No games found!</p>\r\n                <p class=\"error-text-body\" *ngIf=\"isOwner\">Add some games to grow your collection!</p>\r\n                <p class=\"error-text-body\" *ngIf=\"!isOwner\">{{username}} needs to grow their collection!</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #loggedOut>\r\n    <div class=\"error\">\r\n        <img src=\"../../../assets/img/error.svg\" class=\"error-img\">\r\n        <div class=\"error-text\">\r\n            <p class=\"error-text-title\">Uh-Oh! Looks like you aren't signed in!</p>\r\n            <p class=\"error-text-body\">Don't have an account? Register now!</p>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<div class=\"spacer\"></div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\r\n    <div *ngIf=\"games\">\r\n        <h1 *ngIf=\"hasGames\" class=\"search-title\">Results For: <span>\"{{searchTerm}}\"</span></h1>\r\n        <hr>\r\n        <div *ngFor=\"let game of games\" class=\"game-content\">\r\n            <ul class=\"list-unstyled\">\r\n                <li class=\"media covers mg-fluid\">\r\n                    <div class=\"img-container\">\r\n                        <a (click)=\"toGame(game.id)\" class=\"clickable\">\r\n                            <img src=\"https://images.igdb.com/igdb/image/upload/t_cover_big/{{game.cover.image_id}}.png\"\r\n                                class=\"img img-fluid align-self-start mr-3\" alt=\"covers\">\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"media-body\">\r\n                        <a (click)=\"toGame(game.id)\" class=\"clickable\">\r\n                            <h4 class=\"mt-0 mb-1\" class=\"title\"><span>\r\n                                    <img src=\"../../../assets/img/Arrow.svg\" width=\"25\" loading=\"lazy\"></span>\r\n                                {{game.name}}\r\n                            </h4>\r\n                        </a>\r\n                        <hr>\r\n                        <p class=\"summary\">{{game.summary}}</p>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!hasGames\">\r\n        <div class=\"error\">\r\n            <img src=\"../../../assets/img/search.svg\" class=\"error-img\">\r\n            <div class=\"error-text\">\r\n                <p class=\"error-text-title\">No results found for search: \"<span>{{searchTerm}}</span>\"</p>\r\n                <p class=\"error-text-body\">Try a different search term!</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"spacer\"></div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upcoming/upcoming.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/upcoming/upcoming.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"title-container\">\r\n        <h1 class=\"upcoming-title\"><span>Upcoming</span> Games:</h1>\r\n        <hr>\r\n        <div class=\"row\">\r\n            <div *ngFor=\"let game of games\" class=\"col-lg-3 col-sm-6 upcoming-list\">\r\n                <mat-card (click)=\"toGame(game.id)\" class=\"game-card clickable\">\r\n                    <img src=\"https://images.igdb.com/igdb/image/upload/t_cover_big/{{game.cover.image_id}}.png\"\r\n                        class=\"img img-fluid img-game\" alt=\"covers\">\r\n                    <p class=\"game-title\">{{game.name}}</p>\r\n                    <mat-card-subtitle>Release Date: <p>{{game.release_dates[0].human}}</p>\r\n                    </mat-card-subtitle>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"spacer\"></div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_browse_browse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/browse/browse.component */ "./src/app/components/browse/browse.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_upcoming_upcoming_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/upcoming/upcoming.component */ "./src/app/components/upcoming/upcoming.component.ts");
/* harmony import */ var _components_game_details_game_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/game-details/game-details.component */ "./src/app/components/game-details/game-details.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");









const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], pathMatch: 'full' },
    { path: 'browse', component: _components_browse_browse_component__WEBPACK_IMPORTED_MODULE_3__["BrowseComponent"] },
    { path: 'upcoming', component: _components_upcoming_upcoming_component__WEBPACK_IMPORTED_MODULE_6__["UpcomingComponent"] },
    { path: 'search', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"] },
    { path: 'games', component: _components_game_details_game_details_component__WEBPACK_IMPORTED_MODULE_7__["GameDetailsComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"] },
    { path: 'profile/:username', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"] },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'enabled'
            })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.router {\r\n    min-height: 100vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnJvdXRlciB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG4iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'checkpoint-frontend';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_browse_browse_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/browse/browse.component */ "./src/app/components/browse/browse.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_upcoming_upcoming_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/upcoming/upcoming.component */ "./src/app/components/upcoming/upcoming.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_form_login_form_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/form-login/form-login.component */ "./src/app/components/form-login/form-login.component.ts");
/* harmony import */ var _components_form_register_form_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/form-register/form-register.component */ "./src/app/components/form-register/form-register.component.ts");
/* harmony import */ var _components_game_details_game_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/game-details/game-details.component */ "./src/app/components/game-details/game-details.component.ts");
/* harmony import */ var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./helpers/auth.interceptor */ "./src/app/helpers/auth.interceptor.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/custom-snackbar/custom-snackbar.component */ "./src/app/components/custom-snackbar/custom-snackbar.component.ts");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _components_browse_browse_component__WEBPACK_IMPORTED_MODULE_10__["BrowseComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
            _components_upcoming_upcoming_component__WEBPACK_IMPORTED_MODULE_12__["UpcomingComponent"],
            _components_search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
            _components_form_login_form_login_component__WEBPACK_IMPORTED_MODULE_15__["FormLoginComponent"],
            _components_form_register_form_register_component__WEBPACK_IMPORTED_MODULE_16__["FormRegisterComponent"],
            _components_game_details_game_details_component__WEBPACK_IMPORTED_MODULE_17__["GameDetailsComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
            _components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_20__["CustomSnackbarComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _modules_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"]
        ],
        entryComponents: [
            _components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_20__["CustomSnackbarComponent"]
        ],
        providers: [_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__["authInterceptorProviders"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/browse/browse.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/browse/browse.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::-webkit-scrollbar {\r\n    width: 3px;\r\n    height: 3px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: #b8b8ba;\r\n    border-radius: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover{\r\n    background: #FF7B00;\r\n}\r\n\r\n::-webkit-scrollbar-track{\r\n    background: #ffffff;\r\n    border-radius: 10px;\r\n}\r\n\r\n#container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.clickable {\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n\r\n.error {\r\n    margin-top: 50px;\r\n    text-align: center;\r\n    color: rgb(82, 82, 98);\r\n}\r\n\r\n.error-img {\r\n    width: 20vw;\r\n}\r\n\r\n.error-text {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.error-text-title {\r\n    font-size: 1.5vw;\r\n    font-weight: 600;\r\n    margin: 10px 0 0 0;\r\n}\r\n\r\n.error-text-body {\r\n    font-size: 1.1vw;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.game-content {\r\n    width: 1000px;\r\n    max-width: 95vw;\r\n    margin: 30px auto;\r\n    padding: 15px 15px 0px 15px;\r\n    border: 3px solid rgb(230, 230, 230);\r\n    border-radius: 5px;\r\n\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgb(255, 255, 255)), to(rgb(246, 246, 246)));\r\n\r\n    background-image: linear-gradient(rgb(255, 255, 255), rgb(246, 246, 246));\r\n    box-shadow: 0 8px 6px -6px rgba(153, 153, 153, 0.329);\r\n}\r\n\r\nhr {\r\n    border: none;\r\n    height: 2px;\r\n    background: rgb(203,203,208);\r\n    background: -webkit-gradient(linear, left top, right top, from(rgb(206, 206, 212)), to(rgba(255,255,255,0)));\r\n    background: linear-gradient(90deg, rgb(206, 206, 212) 0%, rgba(255,255,255,0) 100%);\r\n}\r\n\r\n.img {\r\n    width: 200px;\r\n    border-radius: 10px;\r\n    box-shadow: 0 8px 6px -6px rgba(153, 153, 153, 0.329);\r\n}\r\n\r\n.popular-title {\r\n    color: rgb(95, 95, 100);\r\n    font-family: 'Bebas Neue', cursive;\r\n    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0, 0, 0, 0.253);\r\n    margin-top: 2%;\r\n    font-size: 3rem;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.popular-title span {\r\n    color: rgb(248, 132, 0);\r\n}\r\n\r\n.summary {\r\n    max-height: 175px;\r\n    overflow-y: auto;\r\n    padding: 5px;\r\n    color: rgb(82, 82, 87);\r\n}\r\n\r\n.spacer {\r\n    padding-top: 3.5rem;\r\n}\r\n\r\n.title {\r\n    color: rgb(95, 95, 100);\r\n    font-family: 'Bebas Neue', cursive;\r\n    letter-spacing: 5px;\r\n    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0, 0, 0, 0.253);\r\n    padding-bottom: 5px;\r\n    margin-bottom: 0;\r\n    font-weight: 600;\r\n}\r\n\r\n.title:hover {\r\n    color: rgb(131, 131, 141);\r\n}\r\n\r\n@media only screen and (max-width: 990px) {\r\n    .error-img {\r\n        width: 50vw;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 650px) {\r\n\r\n    .img {\r\n        width: 250px;\r\n    }\r\n\r\n    .img-container {\r\n        margin: 0 auto 14px auto;\r\n        width: -webkit-fit-content;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n    }\r\n\r\n    .media {\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n    .media-body {\r\n        -webkit-box-flex: 70%;\r\n                flex: 70%;\r\n    }\r\n\r\n    .title {\r\n        font-size: 18px;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width:360px) {\r\n    .popular-title {\r\n        font-size: 2.7rem;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9icm93c2UvYnJvd3NlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLG9DQUFvQztJQUNwQyxrQkFBa0I7O0lBRWxCLG1IQUF5RTs7SUFBekUseUVBQXlFO0lBR3pFLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLDRHQUFtRjtJQUFuRixtRkFBbUY7QUFDdkY7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBR25CLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsaUZBQWlGO0lBQ2pGLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsaUZBQWlGO0lBQ2pGLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsMEJBQWtCO1FBQWxCLHVCQUFrQjtRQUFsQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0kscUJBQVM7Z0JBQVQsU0FBUztJQUNiOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jyb3dzZS9icm93c2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICNiOGI4YmE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY3QjAwO1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2xpY2thYmxlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDgyLCA4MiwgOTgpO1xyXG59XHJcblxyXG4uZXJyb3ItaW1nIHtcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG59XHJcblxyXG4uZXJyb3ItdGV4dCB7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmVycm9yLXRleHQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XHJcbn1cclxuXHJcbi5lcnJvci10ZXh0LWJvZHkge1xyXG4gICAgZm9udC1zaXplOiAxLjF2dztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5nYW1lLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIG1heC13aWR0aDogOTV2dztcclxuICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDBweCAxNXB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAyNTUsIDI1NSksIHJnYigyNDYsIDI0NiwgMjQ2KSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4zMjkpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMzI5KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4zMjkpO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMDMsMjAzLDIwOCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYigyMDYsIDIwNiwgMjEyKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMzI5KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggcmdiYSgxNTMsIDE1MywgMTUzLCAwLjMyOSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMzI5KTtcclxufVxyXG5cclxuLnBvcHVsYXItdGl0bGUge1xyXG4gICAgY29sb3I6IHJnYig5NSwgOTUsIDEwMCk7XHJcbiAgICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnLCBjdXJzaXZlO1xyXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuMSksIDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNTMpO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLnBvcHVsYXItdGl0bGUgc3BhbiB7XHJcbiAgICBjb2xvcjogcmdiKDI0OCwgMTMyLCAwKTtcclxufVxyXG5cclxuLnN1bW1hcnkge1xyXG4gICAgbWF4LWhlaWdodDogMTc1cHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6IHJnYig4MiwgODIsIDg3KTtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMy41cmVtO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgY29sb3I6IHJnYig5NSwgOTUsIDEwMCk7XHJcbiAgICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnLCBjdXJzaXZlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjEpLCAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUzKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRpdGxlOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2IoMTMxLCAxMzEsIDE0MSk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcclxuICAgIC5lcnJvci1pbWcge1xyXG4gICAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcblxyXG4gICAgLmltZyB7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAxNHB4IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tZWRpYSB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZWRpYS1ib2R5IHtcclxuICAgICAgICBmbGV4OiA3MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2MHB4KSB7XHJcbiAgICAucG9wdWxhci10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjdyZW07XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/browse/browse.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/browse/browse.component.ts ***!
  \*******************************************************/
/*! exports provided: BrowseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseComponent", function() { return BrowseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/rest.service */ "./src/app/service/rest.service.ts");




let BrowseComponent = class BrowseComponent {
    constructor(router, route, rest) {
        this.router = router;
        this.route = route;
        this.rest = rest;
        this.hasGames = true;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(param => {
            this.rest.getPlatform(param.platform).subscribe(res => {
                this.games = res;
                if (this.games.length === 0) {
                    this.hasGames = false;
                }
                else {
                    this.hasGames = true;
                }
            }, err => {
                this.hasGames = false;
                this.errorMessage = "User Not found";
            });
        });
    }
    toGame(gameId) {
        this.router.navigate(['/games'], { queryParams: { id: gameId } });
    }
};
BrowseComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] }
];
BrowseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-browse',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./browse.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/browse/browse.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./browse.component.css */ "./src/app/components/browse/browse.component.css")).default]
    })
], BrowseComponent);



/***/ }),

/***/ "./src/app/components/custom-snackbar/custom-snackbar.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/custom-snackbar/custom-snackbar.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.btn-select {\r\n    padding: 3px;\r\n    border-color:#ec7e00;\r\n    color:  #ec7e00;\r\n    margin-left: 30px;\r\n}\r\n\r\n.btn-select:hover {\r\n    color: white;\r\n    border-color: #d6751b;\r\n    background-color:#ec7e00;\r\n}\r\n\r\n.btn-select:not(:disabled):not(.disabled).active, .btn-select:not(:disabled):not(.disabled):active, .show>.btn-select.dropdown-toggle {\r\n    color: white;\r\n    border-color: #d6751b;\r\n    background-color:#ec7e00;\r\n}\r\n\r\n.container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tc25hY2tiYXIvY3VzdG9tLXNuYWNrYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N1c3RvbS1zbmFja2Jhci9jdXN0b20tc25hY2tiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYnRuLXNlbGVjdCB7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBib3JkZXItY29sb3I6I2VjN2UwMDtcclxuICAgIGNvbG9yOiAgI2VjN2UwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uYnRuLXNlbGVjdDpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItY29sb3I6ICNkNjc1MWI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlYzdlMDA7XHJcbn1cclxuXHJcbi5idG4tc2VsZWN0Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLmJ0bi1zZWxlY3Q6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuc2hvdz4uYnRuLXNlbGVjdC5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDY3NTFiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWM3ZTAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/custom-snackbar/custom-snackbar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/custom-snackbar/custom-snackbar.component.ts ***!
  \*************************************************************************/
/*! exports provided: CustomSnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSnackbarComponent", function() { return CustomSnackbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let CustomSnackbarComponent = class CustomSnackbarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    toProfile() {
        this.router.navigate(['/profile'])
            .then(() => {
            window.location.reload();
        });
    }
};
CustomSnackbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CustomSnackbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-custom-snackbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-snackbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-snackbar/custom-snackbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-snackbar.component.css */ "./src/app/components/custom-snackbar/custom-snackbar.component.css")).default]
    })
], CustomSnackbarComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.footer-checkpoint{\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgb(255, 255, 255)), to(rgb(240, 240, 240)));\r\n    background-image: linear-gradient(rgb(255, 255, 255), rgb(240, 240, 240));\r\n    padding: 1rem 0 .5rem 0;\r\n    font-size: 50%;\r\n    border-top: 1px solid #d4d4d4;;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.footer-container a {\r\n    color: rgb(233, 110, 27);\r\n    font-weight: 500;\r\n}\r\n\r\n.footer-container p {\r\n    margin: 0 0 7px auto;\r\n    font-size: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksbUhBQXlFO0lBQXpFLHlFQUF5RTtJQUN6RSx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb290ZXItY2hlY2twb2ludHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAyNTUsIDI1NSksIHJnYigyNDAsIDI0MCwgMjQwKSk7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDAgLjVyZW0gMDtcclxuICAgIGZvbnQtc2l6ZTogNTAlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkNGQ0ZDQ7O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmZvb3Rlci1jb250YWluZXIgYSB7XHJcbiAgICBjb2xvcjogcmdiKDIzMywgMTEwLCAyNyk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZm9vdGVyLWNvbnRhaW5lciBwIHtcclxuICAgIG1hcmdpbjogMCAwIDdweCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/form-login/form-login.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/form-login/form-login.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.alert-danger {\r\n    color: #b80012;\r\n    margin-top: 5px;\r\n    padding: 2px;\r\n    border-radius: 2px;\r\n    text-align: center;\r\n}\r\n\r\n.alert-danger p {\r\n    margin: 0;\r\n}\r\n\r\n.alert-success {\r\n    color: #155724;\r\n    background-color: #d4edda;\r\n    border-color: #c3e6cb;\r\n    text-align: center;\r\n}\r\n\r\n.alert-success p {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.btn-login {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-control {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin : 0 auto;\r\n}\r\n\r\nhr {\r\n    margin-top: 10px;\r\n}\r\n\r\nlabel {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtLWxvZ2luL2Zvcm0tbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1sb2dpbi9mb3JtLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogI2I4MDAxMjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciBwIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmFsZXJ0LXN1Y2Nlc3Mge1xyXG4gICAgY29sb3I6ICMxNTU3MjQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYzNlNmNiO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWxlcnQtc3VjY2VzcyBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5idG4tbG9naW4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4gOiAwIGF1dG87XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/form-login/form-login.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/form-login/form-login.component.ts ***!
  \***************************************************************/
/*! exports provided: FormLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginComponent", function() { return FormLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_service_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/token-storage.service */ "./src/app/service/token-storage.service.ts");




let FormLoginComponent = class FormLoginComponent {
    constructor(authService, tokenStorage) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
    }
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.currentUser = this.tokenStorage.getUser();
        }
    }
    onSubmit() {
        this.authService.login(this.form).subscribe(res => {
            this.tokenStorage.saveToken(res.accessToken);
            this.tokenStorage.saveUser(res);
            this.currentUser = this.tokenStorage.getUser();
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            setTimeout(() => window.location.reload(), 1000);
        }, err => {
            if (err.error.message) {
                this.errorMessage = err.error.message;
            }
            else if (err.error) {
                this.errorMessage = err.error;
            }
            this.isLoginFailed = true;
        });
    }
};
FormLoginComponent.ctorParameters = () => [
    { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_service_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
];
FormLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-login/form-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-login.component.css */ "./src/app/components/form-login/form-login.component.css")).default]
    })
], FormLoginComponent);



/***/ }),

/***/ "./src/app/components/form-register/form-register.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/form-register/form-register.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.alert-danger {\r\n    color: #b80012;\r\n    background-color: #f8d7da;\r\n    border-color: #f5c6cb;\r\n    margin-top: 5px;\r\n    padding: 2px;\r\n    border-radius: 2px;\r\n    text-align: center;\r\n}\r\n\r\n.alert-danger p {\r\n    margin: 0;\r\n}\r\n\r\n.alert-warning {\r\n    color: #b80012;\r\n    background-color: #f8d7da;\r\n    border-color: #f5c6cb;\r\n    margin-top: 5px;\r\n    padding: 2px;\r\n    border-radius: 2px;\r\n    text-align: center;\r\n}\r\n\r\n.alert-warning p {\r\n    margin: 0;\r\n}\r\n\r\n.btn-register {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-control {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin : 0 auto;\r\n}\r\n\r\nhr {\r\n    margin-top: 10px;\r\n}\r\n\r\nlabel {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtLXJlZ2lzdGVyL2Zvcm0tcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JtLXJlZ2lzdGVyL2Zvcm0tcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYWxlcnQtZGFuZ2VyIHtcclxuICAgIGNvbG9yOiAjYjgwMDEyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y1YzZjYjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciBwIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmFsZXJ0LXdhcm5pbmcge1xyXG4gICAgY29sb3I6ICNiODAwMTI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjVjNmNiO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWxlcnQtd2FybmluZyBwIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmJ0bi1yZWdpc3RlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbiA6IDAgYXV0bztcclxufVxyXG5cclxuaHIge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/form-register/form-register.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/form-register/form-register.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRegisterComponent", function() { return FormRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_service_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/token-storage.service */ "./src/app/service/token-storage.service.ts");




let FormRegisterComponent = class FormRegisterComponent {
    constructor(authService, tokenStorage) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.form = {};
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
    }
    ngOnInit() {
    }
    onSubmit() {
        this.authService.register(this.form).subscribe(res => {
            this.isSuccessful = true;
            this.isSignUpFailed = false;
            this.authService.login(this.form).subscribe(res => {
                this.tokenStorage.saveToken(res.accessToken);
                this.tokenStorage.saveUser(res);
            });
            setTimeout(() => window.location.reload(), 1000);
        }, err => {
            this.errorMessage = err.error;
            this.isSignUpFailed = true;
        });
    }
};
FormRegisterComponent.ctorParameters = () => [
    { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_service_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
];
FormRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-register/form-register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-register.component.css */ "./src/app/components/form-register/form-register.component.css")).default]
    })
], FormRegisterComponent);



/***/ }),

/***/ "./src/app/components/game-details/game-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/game-details/game-details.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n::-webkit-scrollbar {\r\n    width: 3px;\r\n    height: 3px;\r\n   }\r\n   ::-webkit-scrollbar-thumb {\r\n    background: #b8b8ba;\r\n    border-radius: 10px;\r\n   }\r\n   ::-webkit-scrollbar-thumb:hover{\r\n    background: #FF7B00;\r\n   }\r\n   ::-webkit-scrollbar-track{\r\n    background: #ffffff;\r\n    border-radius: 10px;\r\n   }\r\n   .btn-block {\r\n    display: block;\r\n    width: 96%;\r\n    margin-top: 10px;\r\n}\r\n   .btn-collection {\r\n    color: #fff;\r\n    background-color: #ec7e00;\r\n    border-color: #d6751b;\r\n    margin-bottom: 5%;\r\n    font-size: 16px;\r\n}\r\n   .btn-collection:hover {\r\n    background-color: #ca6c00;\r\n}\r\n   .card {\r\n    background-color: transparent;\r\n}\r\n   .clickable {\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n   .dropdown {\r\n    display: inline-block;\r\n    margin: 5px;\r\n}\r\n   .dropdown-menu{\r\n    padding: 0;\r\n    border-radius: .50rem;\r\n    width: 150px !important;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n}\r\n   .dropdown p {\r\n    text-align: left;\r\n    padding: 1px 10px;\r\n    margin: 3px;\r\n}\r\n   .dropdowns {\r\n    text-align: left;\r\n    margin-bottom: 10px;\r\n}\r\n   .error {\r\n    margin-top: 50px;\r\n    text-align: center;\r\n    color: rgb(82, 82, 98);\r\n}\r\n   .error-img {\r\n    width: 20vw;\r\n}\r\n   .error-text {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n   .error-text-title {\r\n    font-size: 1.5vw;\r\n    font-weight: 600;\r\n    margin: 10px 0 0 0;\r\n}\r\n   .error-text-body {\r\n    font-size: 1.1vw;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n   .error-icon {\r\n    width: 23px;\r\n    vertical-align: -3px;\r\n    color: rgb(95, 95, 100);\r\n    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0, 0, 0, 0.295);\r\n}\r\n   .error-media {\r\n    font-size: 24px;\r\n    margin-left: 16px;\r\n    letter-spacing: 1px;\r\n    color: rgb(255, 123, 0);\r\n    font-family: 'Bebas Neue', cursive;\r\n    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0, 0, 0, 0.295);\r\n}\r\n   .error-summary {\r\n    margin-left: 0px;\r\n}\r\n   .game-content {\r\n    width: 1200px;\r\n    max-width: 95vw;\r\n    margin: 30px auto;\r\n    padding: 15px 15px 0px 15px;\r\n}\r\n   hr {\r\n    border: none;\r\n    height: 2px;\r\n    background: rgb(203,203,208);\r\n    background: -webkit-gradient(linear, left top, right top, from(rgb(206, 206, 212)), to(rgba(255,255,255,0)));\r\n    background: linear-gradient(90deg, rgb(206, 206, 212) 0%, rgba(255,255,255,0) 100%);\r\n}\r\n   .hover {\r\n    -webkit-transition: border .2s ease-in-out, -webkit-transform .2s ease-in-out;\r\n    transition: border .2s ease-in-out, -webkit-transform .2s ease-in-out;\r\n    transition: border .2s ease-in-out, transform .2s ease-in-out;\r\n    transition: border .2s ease-in-out, transform .2s ease-in-out, -webkit-transform .2s ease-in-out;\r\n    border: 2px solid transparent;\r\n}\r\n   .hover:hover {\r\n    border: 4px solid rgb(248, 132, 0);\r\n    border-radius: 5px;\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n    cursor: pointer;\r\n}\r\n   .hover-container {\r\n    position: relative;\r\n}\r\n   .img {\r\n    width: 300px;\r\n    border-radius: 10px;\r\n    box-shadow: 0 8px 6px -6px  rgba(31, 31, 31, 0.329);\r\n    -webkit-box-shadow: 0 8px 6px -6px  rgba(31, 31, 31, 0.329);\r\n    -moz-box-shadow: 0 8px 6px -6px  rgba(31, 31, 31, 0.329);\r\n}\r\n   .img-container {\r\n    position: relative;\r\n}\r\n   .included-container {\r\n    background-color: rgb(0, 153, 38);\r\n    border-radius: 5px;\r\n    color: white;\r\n    cursor: default;\r\n    text-align: center;\r\n    margin: 10px 10px 0 auto;\r\n    height: 37px;\r\n    padding-top: 7px;\r\n    font-size: 16px;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    border: 1px solid rgb(8, 138, 41);\r\n}\r\n   .info-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    position: relative;\r\n    bottom: 20vh;\r\n    z-index: 1;\r\n}\r\n   .jumbotron {\r\n    color: white;\r\n    height: 25vw;\r\n    background-repeat: no-repeat !important;\r\n    background-size: cover !important;\r\n    background-position-y: 15% !important;\r\n}\r\n   .jumbo-error {\r\n    padding-top: 10px;\r\n}\r\n   .lead {\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    text-shadow: 1px 0px 1px #2c2e3618, 0px 1px 1px #2c2e3618, 2px 1px 1px #2c2e3618, 1px 2px 1px #2c2e3618,\r\n    3px 2px 1px #2c2e3618, 2px 3px 1px #2c2e3618, 4px 3px 1px #2c2e3618, 3px 4px 1px #2c2e3618, 5px 4px 1px #2c2e3618,\r\n     4px 5px 1px #2c2e3618, 6px 5px 1px #2c2e3618, 5px 6px 1px #2c2e3618, 7px 6px 1px #2c2e3618;\r\n}\r\n   ::ng-deep .mat-snack-bar-container {\r\n    background: rgba(82, 82, 87, 0.925);\r\n    margin-bottom: 40px !important;\r\n}\r\n   .media {\r\n    margin-bottom: -170px;\r\n}\r\n   .media-img-container {\r\n    margin: 10px 0;\r\n    min-width: 255px;\r\n    text-align: center;\r\n}\r\n   .media-img {\r\n    box-shadow: 0 8px 6px -6px rgba(153, 153, 153, 0.329);\r\n    -webkit-box-shadow: 0 8px 6px -6px rgba(153, 153, 153, 0.329);\r\n    -moz-box-shadow: 0 8px 6px -6px rgba(153, 153, 153, 0.329);\r\n}\r\n   .media-list {\r\n    display: inline-block;\r\n}\r\n   .media-title {\r\n    letter-spacing: 3px;\r\n    font-size: 25px;\r\n}\r\n   .modal {\r\n    text-align: center;\r\n}\r\n   .modal-img {\r\n    width: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n   .play-button {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    z-index: 1000;\r\n    color:#ffffffbd;\r\n    font-size: 70px;\r\n    cursor: pointer;\r\n    text-shadow: 0 0 10px #0000000a;\r\n}\r\n   .rating-container {\r\n    font-size: 27px;\r\n    width: 96%;\r\n    height: 32.78px;\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    font-family: 'Bebas Neue', cursive;\r\n    color: rgb(255, 255, 255);\r\n    letter-spacing: 2px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    background: -webkit-gradient(linear, left top, right top, color-stop(5%, rgba(255,255,255,0)), color-stop(50%, rgba(98,106,116,1)), color-stop(95%, rgba(255,255,255,0)));\r\n    background: linear-gradient(90deg, rgba(255,255,255,0) 5%, rgba(98,106,116,1) 50%, rgba(255,255,255,0) 95%);\r\n}\r\n   .rating-title {\r\n    padding-left: 85px;\r\n    padding-top: 2px;\r\n    text-shadow: 0 0 8px #3b3b3b;\r\n}\r\n   .rating-star {\r\n    font-size: 24px;\r\n    padding-left: 5px;\r\n    padding-top: 2px;\r\n    color: rgb(255, 219, 17);\r\n    text-shadow: 0 0 8px #3b3b3b;\r\n}\r\n   .rating-score {\r\n    font-size: 28px;\r\n    padding-top: 3px;\r\n    text-shadow: 0 0 8px #3b3b3b;\r\n}\r\n   .release-dates {\r\n    box-shadow: 0 8px 6px -6px rgba(153, 153, 153, 0.15);\r\n}\r\n   #summary {\r\n    max-height: 290px;\r\n    overflow-y: auto;\r\n    padding: 5px;\r\n    color: rgb(82, 82, 87);\r\n}\r\n   .spacer {\r\n    padding-top: 6.5rem;\r\n}\r\n   .temp-error {\r\n    font-family: 'Bebas Neue', cursive;\r\n    text-align: center;\r\n    margin: 30px auto;\r\n    padding: 15px 15px 0px 15px;\r\n    border: 4px solid rgb(230, 230, 230);\r\n    border-radius: 5px;\r\n    color: rgb(255, 123, 0);\r\n    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0, 0, 0, 0.295);\r\n}\r\n   .title {\r\n    color: rgb(113, 113, 119);\r\n    font-family: 'Bebas Neue', cursive;\r\n    font-size: 40px;\r\n    letter-spacing: 5px;\r\n    text-shadow: 0 0 40px #ffffff;\r\n    margin-bottom: 5px;\r\n    margin-left: 6px;\r\n    font-weight: 600;\r\n}\r\n   .title-container {\r\n    margin: 2% auto 0 auto;\r\n    color: rgb(119, 119, 131);\r\n    font-family: 'Bebas Neue', cursive;\r\n    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0, 0, 0, 0.253);\r\n}\r\n   @media only screen and (max-width: 990px) {\r\n    .error-img {\r\n        width: 50vw;\r\n    }\r\n}\r\n   @media only screen and (max-width: 800px) {\r\n\r\n    .img {\r\n        width: 290px;\r\n    }\r\n\r\n    .img-container {\r\n        padding-top: 95px;\r\n        margin: 0 auto 14px auto;\r\n        width: -webkit-fit-content;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n    }\r\n\r\n    .media {\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n    .media-body {\r\n        -webkit-box-flex: 70%;\r\n                flex: 70%;\r\n    }\r\n\r\n    .title {\r\n        font-size: 10vw;\r\n    }\r\n\r\n}\r\n   @media (min-width: 992px) {\r\n    .col-lg-3 {\r\n        -webkit-box-flex: 0;\r\n        flex: 0 0 25%;\r\n        max-width: 25%;\r\n    }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLWRldGFpbHMvZ2FtZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7R0FDWjtHQUNBO0lBQ0MsbUJBQW1CO0lBQ25CLG1CQUFtQjtHQUNwQjtHQUNBO0lBQ0MsbUJBQW1CO0dBQ3BCO0dBQ0E7SUFDQyxtQkFBbUI7SUFDbkIsbUJBQW1CO0dBQ3BCO0dBRUg7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtHQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7R0FFQTtJQUNJLHlCQUF5QjtBQUM3QjtHQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDO0dBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCO0dBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmO0dBRUE7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0dBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjtHQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtHQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7R0FFQTtJQUNJLFdBQVc7QUFDZjtHQUVBO0lBQ0kseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCO0dBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtHQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTO0FBQ2I7R0FFQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGlGQUFpRjtBQUNyRjtHQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxpRkFBaUY7QUFDckY7R0FFQTtJQUNJLGdCQUFnQjtBQUNwQjtHQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMkJBQTJCO0FBQy9CO0dBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDRCQUE0QjtJQUM1Qiw0R0FBbUY7SUFBbkYsbUZBQW1GO0FBQ3ZGO0dBRUE7SUFDSSw2RUFBNkQ7SUFBN0QscUVBQTZEO0lBQTdELDZEQUE2RDtJQUE3RCxnR0FBNkQ7SUFDN0QsNkJBQTZCO0FBQ2pDO0dBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjtHQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0dBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1EQUFtRDtJQUNuRCwyREFBMkQ7SUFDM0Qsd0RBQXdEO0FBQzVEO0dBRUE7SUFDSSxrQkFBa0I7QUFDdEI7R0FFQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7R0FFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7QUFDZDtHQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix1Q0FBdUM7SUFDdkMsaUNBQWlDO0lBQ2pDLHFDQUFxQztBQUN6QztHQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0dBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCOzsrRkFFMkY7QUFDL0Y7R0FFQTtJQUNJLG1DQUFtQztJQUNuQyw4QkFBOEI7QUFDbEM7R0FFQTtJQUNJLHFCQUFxQjtBQUN6QjtHQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7R0FFQTtJQUNJLHFEQUFxRDtJQUNyRCw2REFBNkQ7SUFDN0QsMERBQTBEO0FBQzlEO0dBRUE7SUFDSSxxQkFBcUI7QUFDekI7R0FFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0dBRUE7SUFDSSxrQkFBa0I7QUFDdEI7R0FFQTtJQUNJLFdBQVc7SUFDWCxvQkFBaUI7T0FBakIsaUJBQWlCO0FBQ3JCO0dBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7SUFDZiwrQkFBK0I7QUFDbkM7R0FFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5S0FBMkc7SUFBM0csMkdBQTJHO0FBQy9HO0dBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtBQUNoQztHQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtBQUNoQztHQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7R0FFQTtJQUNJLG9EQUFvRDtBQUN4RDtHQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0dBRUE7SUFDSSxtQkFBbUI7QUFDdkI7R0FFQTtJQUNJLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixpRkFBaUY7QUFDckY7R0FFQTtJQUNJLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7R0FFQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsa0NBQWtDO0lBQ2xDLGlGQUFpRjtBQUNyRjtHQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSjtHQUVBOztJQUVJO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsMEJBQWtCO1FBQWxCLHVCQUFrQjtRQUFsQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0kscUJBQVM7Z0JBQVQsU0FBUztJQUNiOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSjtHQUVBO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLGNBQWM7SUFDbEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1kZXRhaWxzL2dhbWUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICB9XHJcbiAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogI2I4YjhiYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgIH1cclxuICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICNGRjdCMDA7XHJcbiAgIH1cclxuICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFja3tcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICB9XHJcblxyXG4uYnRuLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDk2JTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tY29sbGVjdGlvbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYzdlMDA7XHJcbiAgICBib3JkZXItY29sb3I6ICNkNjc1MWI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmJ0bi1jb2xsZWN0aW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYTZjMDA7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY2xpY2thYmxlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmRyb3Bkb3duIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudXtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNTByZW07XHJcbiAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmRyb3Bkb3duIHAge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDFweCAxMHB4O1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bnMge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYig4MiwgODIsIDk4KTtcclxufVxyXG5cclxuLmVycm9yLWltZyB7XHJcbiAgICB3aWR0aDogMjB2dztcclxufVxyXG5cclxuLmVycm9yLXRleHQge1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5lcnJvci10ZXh0LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG59XHJcblxyXG4uZXJyb3ItdGV4dC1ib2R5IHtcclxuICAgIGZvbnQtc2l6ZTogMS4xdnc7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZXJyb3ItaWNvbiB7XHJcbiAgICB3aWR0aDogMjNweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiAtM3B4O1xyXG4gICAgY29sb3I6IHJnYig5NSwgOTUsIDEwMCk7XHJcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LC4xKSwgMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI5NSk7XHJcbn1cclxuXHJcbi5lcnJvci1tZWRpYSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMTIzLCAwKTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIGN1cnNpdmU7XHJcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LC4xKSwgMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI5NSk7XHJcbn1cclxuXHJcbi5lcnJvci1zdW1tYXJ5IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5nYW1lLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEyMDBweDtcclxuICAgIG1heC13aWR0aDogOTV2dztcclxuICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDBweCAxNXB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMDMsMjAzLDIwOCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYigyMDYsIDIwNiwgMjEyKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTtcclxufVxyXG5cclxuLmhvdmVyIHtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlciAuMnMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhvdmVyOmhvdmVyIHtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYigyNDgsIDEzMiwgMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaG92ZXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggIHJnYmEoMzEsIDMxLCAzMSwgMC4zMjkpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCAgcmdiYSgzMSwgMzEsIDMxLCAwLjMyOSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4ICByZ2JhKDMxLCAzMSwgMzEsIDAuMzI5KTtcclxufVxyXG5cclxuLmltZy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW5jbHVkZWQtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNTMsIDM4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAxMHB4IDAgYXV0bztcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4LCAxMzgsIDQxKTtcclxufVxyXG5cclxuLmluZm8tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDIwdmg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uanVtYm90cm9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMjV2dztcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMTUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5qdW1iby1lcnJvciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmxlYWQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMHB4IDFweCAjMmMyZTM2MTgsIDBweCAxcHggMXB4ICMyYzJlMzYxOCwgMnB4IDFweCAxcHggIzJjMmUzNjE4LCAxcHggMnB4IDFweCAjMmMyZTM2MTgsXHJcbiAgICAzcHggMnB4IDFweCAjMmMyZTM2MTgsIDJweCAzcHggMXB4ICMyYzJlMzYxOCwgNHB4IDNweCAxcHggIzJjMmUzNjE4LCAzcHggNHB4IDFweCAjMmMyZTM2MTgsIDVweCA0cHggMXB4ICMyYzJlMzYxOCxcclxuICAgICA0cHggNXB4IDFweCAjMmMyZTM2MTgsIDZweCA1cHggMXB4ICMyYzJlMzYxOCwgNXB4IDZweCAxcHggIzJjMmUzNjE4LCA3cHggNnB4IDFweCAjMmMyZTM2MTg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg4MiwgODIsIDg3LCAwLjkyNSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZWRpYSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTcwcHg7XHJcbn1cclxuXHJcbi5tZWRpYS1pbWctY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgbWluLXdpZHRoOiAyNTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1lZGlhLWltZyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMzI5KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggcmdiYSgxNTMsIDE1MywgMTUzLCAwLjMyOSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4zMjkpO1xyXG59XHJcblxyXG4ubWVkaWEtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5tZWRpYS10aXRsZSB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubW9kYWwtaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5wbGF5LWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGNvbG9yOiNmZmZmZmZiZDtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCAjMDAwMDAwMGE7XHJcbn1cclxuXHJcbi5yYXRpbmctY29udGFpbmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIHdpZHRoOiA5NiU7XHJcbiAgICBoZWlnaHQ6IDMyLjc4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgY3Vyc2l2ZTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMCkgNSUsIHJnYmEoOTgsMTA2LDExNiwxKSA1MCUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgOTUlKTtcclxufVxyXG5cclxuLnJhdGluZy10aXRsZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDg1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA4cHggIzNiM2IzYjtcclxufVxyXG5cclxuLnJhdGluZy1zdGFyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyMTksIDE3KTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgOHB4ICMzYjNiM2I7XHJcbn1cclxuXHJcbi5yYXRpbmctc2NvcmUge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgOHB4ICMzYjNiM2I7XHJcbn1cclxuXHJcbi5yZWxlYXNlLWRhdGVzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4xNSk7XHJcbn1cclxuXHJcbiNzdW1tYXJ5IHtcclxuICAgIG1heC1oZWlnaHQ6IDI5MHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGNvbG9yOiByZ2IoODIsIDgyLCA4Nyk7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDYuNXJlbTtcclxufVxyXG5cclxuLnRlbXAtZXJyb3Ige1xyXG4gICAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgY3Vyc2l2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDBweCAxNXB4O1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDEyMywgMCk7XHJcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LC4xKSwgMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI5NSk7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBjb2xvcjogcmdiKDExMywgMTEzLCAxMTkpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDQwcHggI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udGl0bGUtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMiUgYXV0byAwIGF1dG87XHJcbiAgICBjb2xvcjogcmdiKDExOSwgMTE5LCAxMzEpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgY3Vyc2l2ZTtcclxuICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjEpLCAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUzKTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xyXG4gICAgLmVycm9yLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDUwdnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuXHJcbiAgICAuaW1nIHtcclxuICAgICAgICB3aWR0aDogMjkwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA5NXB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDE0cHggYXV0bztcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lZGlhIHtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lZGlhLWJvZHkge1xyXG4gICAgICAgIGZsZXg6IDcwJTtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTB2dztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmNvbC1sZy0zIHtcclxuICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xyXG4gICAgICAgIGZsZXg6IDAgMCAyNSU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/game-details/game-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/game-details/game-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: GameDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameDetailsComponent", function() { return GameDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/rest.service */ "./src/app/service/rest.service.ts");
/* harmony import */ var src_app_service_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/token-storage.service */ "./src/app/service/token-storage.service.ts");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../custom-snackbar/custom-snackbar.component */ "./src/app/components/custom-snackbar/custom-snackbar.component.ts");









let GameDetailsComponent = class GameDetailsComponent {
    constructor(route, rest, sanitizer, token, userService, router, snackBar) {
        this.route = route;
        this.rest = rest;
        this.sanitizer = sanitizer;
        this.token = token;
        this.userService = userService;
        this.router = router;
        this.snackBar = snackBar;
        this.addedToCollection = false;
        this.errorMessage = '';
        this.gameExists = true;
    }
    ngOnInit() {
        this.currentUser = this.token.getUser();
        this.route.queryParams.subscribe(param => {
            this.rest.getGame(param.id).subscribe(res => {
                this.games = res;
                this.gameId = this.games[0].id;
                if (this.token.getUser() !== null) {
                    this.userService.includedInCollection(this.currentUser.username, this.gameId).subscribe(res => {
                        this.haveGame = res;
                    });
                }
            }, err => {
                this.gameExists = false;
                this.errorMessage = "Game Not found";
            });
        });
    }
    getReleaseDateRegion(regionID) {
        switch (regionID) {
            case 1: return "Europe";
            case 2: return "North America";
            case 3: return "Australia";
            case 4: return "New Zealand";
            case 5: return "Japan";
            case 6: return "China";
            case 7: return "Asia";
            case 8: return "Worldwide";
        }
    }
    formatScore(num) {
        return Math.round(num) / 10;
    }
    updateVideoUrl(id) {
        this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id + '?autoplay=1');
    }
    openModal(id) {
        this.updateVideoUrl(id);
    }
    closeModal() {
        setTimeout(() => this.videoURL = null, 300);
    }
    addToCollection(gameId) {
        this.userService.addGameToCollection(this.currentUser.username, this.gameId).subscribe(res => {
            this.successMessage = res;
            this.addedToCollection = true;
            this.snackBar.openFromComponent(_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_8__["CustomSnackbarComponent"], {
                duration: 3000,
                panelClass: ['snackbar']
            });
        }, err => {
            this.errorMessage = err.error;
        });
    }
};
GameDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: src_app_service_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"] },
    { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
GameDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-details/game-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-details.component.css */ "./src/app/components/game-details/game-details.component.css")).default]
    })
], GameDetailsComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.btn-collection {\r\n    color:rgba(0,0,0,.5);\r\n    background: rgba(255, 255, 255, 0);\r\n    border-color: rgba(255, 255, 255, 0);\r\n}\r\n\r\n.btn-register {\r\n    color: #fff;\r\n    background-color: #ec7e00;\r\n    border-color: #d6751b;\r\n}\r\n\r\n.btn-register:hover {\r\n    background-color: #ca6c00;\r\n}\r\n\r\n.btn-signout {\r\n    color: #fff;\r\n    background-color: #ec7e00;\r\n    border-color: #d6751b;\r\n    margin-left: 17px;\r\n\r\n}\r\n\r\n.btn-signout:hover {\r\n    background-color: #ca6c00;\r\n}\r\n\r\n.clickable {\r\n    cursor: pointer;\r\n}\r\n\r\n.dropdown .dropdown-menu .dropdown-item:active, .dropdown .dropdown-menu .dropdown-item:hover {\r\n    background-color: rgb(253, 147, 27) !important;\r\n}\r\n\r\n.dropdown-header {\r\n    color: rgb(231, 136, 26);\r\n    font-family: 'Bebas Neue', cursive;\r\n    letter-spacing: 2px;\r\n    font-size: 22px;\r\n    font-weight: 600;\r\n    text-align: center;\r\n    padding: 4px 1.5rem 0 1.5rem;\r\n}\r\n\r\n.dropdown-item {\r\n    cursor: pointer;\r\n}\r\n\r\n.login {\r\n    color:rgba(0,0,0,.5);\r\n    margin-right: 17px;\r\n}\r\n\r\n.navbar {\r\n    font-size: 12px;\r\n    padding-top: 0 !important;\r\n    padding-bottom: 0 !important;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgb(255, 255, 255)), to(rgb(240, 240, 240)));\r\n    background-image: linear-gradient(rgb(255, 255, 255), rgb(240, 240, 240));\r\n    box-shadow: 0 8px 6px -6px rgba(153, 153, 153, 0.452);\r\n}\r\n\r\n.modal-body {\r\n    margin: auto;\r\n}\r\n\r\n.modal-content {\r\n    width: 250px;\r\n    margin: 100px auto;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgb(255, 255, 255)), to(rgb(231, 231, 231)));\r\n    background-image: linear-gradient(rgb(255, 255, 255), rgb(231, 231, 231));\r\n}\r\n\r\n.modal-header {\r\n    padding: 5px 10px 0 1rem;\r\n    /* background: url(../../../assets/img/modal-background.png); */\r\n    background-position: center;\r\n    background-size: cover;\r\n\r\n}\r\n\r\n.modal-title {\r\n    color: rgb(248, 132, 0);\r\n    font-family: 'Bebas Neue', cursive;\r\n    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0, 0, 0, 0.253);\r\n    font-size: 30px;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.nav-link {\r\n    font-size: 15px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.navbar-toggler {\r\n    width: 50px;\r\n    margin-right: 0em;\r\n}\r\n\r\n.navbar-toggler-icon{\r\n    font-size: 0.7em;\r\n}\r\n\r\n.search-bar {\r\n    width: 350px;\r\n    margin-right: 0.7em;\r\n    color: rgb(90, 92, 95);\r\n}\r\n\r\n.search-button:hover {\r\n    color:rgb(248, 132, 0);\r\n}\r\n\r\n@media only screen and (max-width: 989px) {\r\n\r\n    .btn-collection {\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .btn-signout {\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .login-register {\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .search-bar {\r\n        width: 250px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtDQUFrQztJQUNsQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixtSEFBeUU7SUFBekUseUVBQXlFO0lBR3pFLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1IQUF5RTtJQUF6RSx5RUFBeUU7QUFDN0U7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsK0RBQStEO0lBQy9ELDJCQUEyQjtJQUkzQixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxpRkFBaUY7SUFDakYsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJ0bi1jb2xsZWN0aW9uIHtcclxuICAgIGNvbG9yOnJnYmEoMCwwLDAsLjUpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxufVxyXG5cclxuLmJ0bi1yZWdpc3RlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYzdlMDA7XHJcbiAgICBib3JkZXItY29sb3I6ICNkNjc1MWI7XHJcbn1cclxuXHJcbi5idG4tcmVnaXN0ZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NhNmMwMDtcclxufVxyXG5cclxuLmJ0bi1zaWdub3V0IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjN2UwMDtcclxuICAgIGJvcmRlci1jb2xvcjogI2Q2NzUxYjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xyXG5cclxufVxyXG5cclxuLmJ0bi1zaWdub3V0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYTZjMDA7XHJcbn1cclxuXHJcbi5jbGlja2FibGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06YWN0aXZlLCAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMTQ3LCAyNykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWhlYWRlciB7XHJcbiAgICBjb2xvcjogcmdiKDIzMSwgMTM2LCAyNik7XHJcbiAgICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnLCBjdXJzaXZlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0cHggMS41cmVtIDAgMS41cmVtO1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbiB7XHJcbiAgICBjb2xvcjpyZ2JhKDAsMCwwLC41KTtcclxuICAgIG1hcmdpbi1yaWdodDogMTdweDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAyNTUsIDI1NSksIHJnYigyNDAsIDI0MCwgMjQwKSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC40NTIpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNDUyKTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC40NTIpO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAyNTUsIDI1NSksIHJnYigyMzEsIDIzMSwgMjMxKSk7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHggMCAxcmVtO1xyXG4gICAgLyogYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvbW9kYWwtYmFja2dyb3VuZC5wbmcpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG59XHJcblxyXG4ubW9kYWwtdGl0bGUge1xyXG4gICAgY29sb3I6IHJnYigyNDgsIDEzMiwgMCk7XHJcbiAgICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnLCBjdXJzaXZlO1xyXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuMSksIDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNTMpO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwZW07XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlci1pY29ue1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxufVxyXG5cclxuLnNlYXJjaC1iYXIge1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjdlbTtcclxuICAgIGNvbG9yOiByZ2IoOTAsIDkyLCA5NSk7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOnJnYigyNDgsIDEzMiwgMCk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTg5cHgpIHtcclxuXHJcbiAgICAuYnRuLWNvbGxlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1zaWdub3V0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbi1yZWdpc3RlciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWJhciB7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/token-storage.service */ "./src/app/service/token-storage.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(router, token) {
        this.router = router;
        this.token = token;
    }
    ngOnInit() {
        this.currentUser = this.token.getUser();
    }
    toBrowse(id) {
        this.router.navigate(['/browse'], { queryParams: { platform: id } });
    }
    toSearch(value) {
        this.router.navigate(['/search'], { queryParams: { term: value } });
    }
    logOut() {
        this.token.logout();
        this.router.navigate(['']);
        setTimeout(() => window.location.reload(), 20);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.card {\r\n    cursor: default;\r\n    width: 100%;\r\n    max-width: 350px;\r\n    margin: 0 auto;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgb(255, 255, 255)), to(rgb(243, 243, 243)));\r\n    background-image: linear-gradient(rgb(255, 255, 255), rgb(243, 243, 243));\r\n    box-shadow: 0 8px 6px -6px rgba(153, 153, 153, 0.329);\r\n}\r\n\r\n.clickable {\r\n    cursor: pointer;\r\n}\r\n\r\n.container-games {\r\n    width: 70%;\r\n}\r\n\r\n.content {\r\n    text-align: center;\r\n    margin: 20px 0 20px 0;\r\n}\r\n\r\n.content h2 {\r\n    color: rgb(95, 95, 100);\r\n    font-family: 'Bebas Neue', cursive;\r\n    letter-spacing: 1px;\r\n    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0, 0, 0, 0.253);\r\n}\r\n\r\n.img {\r\n    border-radius: 10px;\r\n    width: 85%;\r\n    -webkit-transition: border .2s ease-in-out, -webkit-transform .2s ease-in-out;\r\n    transition: border .2s ease-in-out, -webkit-transform .2s ease-in-out;\r\n    transition: border .2s ease-in-out, transform .2s ease-in-out;\r\n    transition: border .2s ease-in-out, transform .2s ease-in-out, -webkit-transform .2s ease-in-out;\r\n    box-shadow: 0 8px 6px -6px  rgba(0, 0, 0, 0.329);\r\n    -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.329);\r\n    -moz-box-shadow: 0 8px 6px -6px  rgba(0, 0, 0, 0.329);\r\n}\r\n\r\n.img:hover {\r\n    border: 4px solid rgb(248, 132, 0);\r\n    border-radius: 10px;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n}\r\n\r\n.img-thumbnail {\r\n    box-shadow: 0 8px 6px -6px rgba(153, 153, 153, 0.329);\r\n    -webkit-box-shadow: 0 8px 6px -6px rgba(153, 153, 153, 0.329);\r\n    -moz-box-shadow: 0 8px 6px -6px rgba(153, 153, 153, 0.329);\r\n}\r\n\r\n.jumbotron {\r\n    color: white;\r\n    height: 255px;\r\n    margin-bottom: 50px;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    background-image: linear-gradient(45deg,rgba(0, 4, 238, 0.52), rgba(211, 102, 0, 0.73)), url('jumbotron-image.png');\r\n    background-size: cover;\r\n    background-position-y: 3%;\r\n    box-shadow: 0 8px 6px -6px rgba(153, 153, 153, 0.329);\r\n    -webkit-box-shadow: 0 8px 6px -6px rgba(153, 153, 153, 0.329);\r\n    -moz-box-shadow: 0 8px 6px -6px rgba(153, 153, 153, 0.329);\r\n}\r\n\r\n.lead {\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    text-shadow: 1px 0px 1px #2c2e3618, 0px 1px 1px #2c2e3618, 2px 1px 1px #2c2e3618, 1px 2px 1px #2c2e3618,\r\n    3px 2px 1px #2c2e3618, 2px 3px 1px #2c2e3618, 4px 3px 1px #2c2e3618, 3px 4px 1px #2c2e3618, 5px 4px 1px #2c2e3618,\r\n     4px 5px 1px #2c2e3618, 6px 5px 1px #2c2e3618, 5px 6px 1px #2c2e3618, 7px 6px 1px #2c2e3618;\r\n}\r\n\r\n.media-list{\r\n    text-align: center;\r\n    padding: 0;\r\n    margin: 40px 0 5px 0;\r\n}\r\n\r\n.spacer {\r\n    padding-top: 5.5rem;\r\n}\r\n\r\n.thumbnail {\r\n    font-size: 100px;\r\n    color: rgb(255, 123, 0);\r\n    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0, 0, 0, 0.295);\r\n}\r\n\r\n.title {\r\n    font-family: 'Bebas Neue', cursive;\r\n    font-size: 60px;\r\n    color: white;\r\n    text-shadow: 1px 0px 1px #2c2e3618, 0px 1px 1px #2c2e3618, 2px 1px 1px #2c2e3618, 1px 2px 1px #2c2e3618,\r\n     3px 2px 1px #2c2e3618, 2px 3px 1px #2c2e3618, 4px 3px 1px #2c2e3618, 3px 4px 1px #2c2e3618, 5px 4px 1px #2c2e3618,\r\n      4px 5px 1px #2c2e3618, 6px 5px 1px #2c2e3618, 5px 6px 1px #2c2e3618, 7px 6px 1px #2c2e3618;\r\n}\r\n\r\n.title-container {\r\n    margin-top: 50px;\r\n    color: rgb(95, 95, 100);\r\n    font-family: 'Bebas Neue', cursive;\r\n    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0, 0, 0, 0.253);\r\n}\r\n\r\n.title-popular {\r\n    font-size: 3.5rem;\r\n}\r\n\r\n.upcoming-title {\r\n    color: rgb(248, 132, 0);\r\n}\r\n\r\n@media only screen and (max-width: 435px) {\r\n    .jumbotron {\r\n        height: 325px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0lBQ2pCLG1IQUF5RTtJQUF6RSx5RUFBeUU7SUFHekUscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixpRkFBaUY7QUFDckY7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLDZFQUE2RDtJQUE3RCxxRUFBNkQ7SUFBN0QsNkRBQTZEO0lBQTdELGdHQUE2RDtJQUM3RCxnREFBZ0Q7SUFDaEQsdURBQXVEO0lBQ3ZELHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFEQUFxRDtJQUNyRCw2REFBNkQ7SUFDN0QsMERBQTBEO0FBQzlEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0lBQ2pCLG1IQUFxSTtJQUNySSxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHFEQUFxRDtJQUNyRCw2REFBNkQ7SUFDN0QsMERBQTBEO0FBQzlEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQjs7K0ZBRTJGO0FBQy9GOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGlGQUFpRjtBQUNyRjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsWUFBWTtJQUNaOztnR0FFNEY7QUFDaEc7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxpRkFBaUY7QUFDckY7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNhcmQge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAyNTUsIDI1NSksIHJnYigyNDMsIDI0MywgMjQzKSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4zMjkpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMzI5KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4zMjkpO1xyXG59XHJcblxyXG4uY2xpY2thYmxlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lci1nYW1lcyB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XHJcbn1cclxuXHJcbi5jb250ZW50IGgyIHtcclxuICAgIGNvbG9yOiByZ2IoOTUsIDk1LCAxMDApO1xyXG4gICAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgY3Vyc2l2ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LC4xKSwgMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1Myk7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjJzIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggIHJnYmEoMCwgMCwgMCwgMC4zMjkpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMzI5KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggIHJnYmEoMCwgMCwgMCwgMC4zMjkpO1xyXG59XHJcblxyXG4uaW1nOmhvdmVyIHtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYigyNDgsIDEzMiwgMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4uaW1nLXRodW1ibmFpbCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMzI5KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggcmdiYSgxNTMsIDE1MywgMTUzLCAwLjMyOSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4zMjkpO1xyXG59XHJcblxyXG4uanVtYm90cm9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMjU1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcscmdiYSgwLCA0LCAyMzgsIDAuNTIpLCByZ2JhKDIxMSwgMTAyLCAwLCAwLjczKSksIHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2p1bWJvdHJvbi1pbWFnZS5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMyU7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMzI5KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggcmdiYSgxNTMsIDE1MywgMTUzLCAwLjMyOSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4zMjkpO1xyXG59XHJcblxyXG4ubGVhZCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAwcHggMXB4ICMyYzJlMzYxOCwgMHB4IDFweCAxcHggIzJjMmUzNjE4LCAycHggMXB4IDFweCAjMmMyZTM2MTgsIDFweCAycHggMXB4ICMyYzJlMzYxOCxcclxuICAgIDNweCAycHggMXB4ICMyYzJlMzYxOCwgMnB4IDNweCAxcHggIzJjMmUzNjE4LCA0cHggM3B4IDFweCAjMmMyZTM2MTgsIDNweCA0cHggMXB4ICMyYzJlMzYxOCwgNXB4IDRweCAxcHggIzJjMmUzNjE4LFxyXG4gICAgIDRweCA1cHggMXB4ICMyYzJlMzYxOCwgNnB4IDVweCAxcHggIzJjMmUzNjE4LCA1cHggNnB4IDFweCAjMmMyZTM2MTgsIDdweCA2cHggMXB4ICMyYzJlMzYxODtcclxufVxyXG5cclxuLm1lZGlhLWxpc3R7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiA0MHB4IDAgNXB4IDA7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDUuNXJlbTtcclxufVxyXG5cclxuLnRodW1ibmFpbCB7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDEyMywgMCk7XHJcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LC4xKSwgMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI5NSk7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAwcHggMXB4ICMyYzJlMzYxOCwgMHB4IDFweCAxcHggIzJjMmUzNjE4LCAycHggMXB4IDFweCAjMmMyZTM2MTgsIDFweCAycHggMXB4ICMyYzJlMzYxOCxcclxuICAgICAzcHggMnB4IDFweCAjMmMyZTM2MTgsIDJweCAzcHggMXB4ICMyYzJlMzYxOCwgNHB4IDNweCAxcHggIzJjMmUzNjE4LCAzcHggNHB4IDFweCAjMmMyZTM2MTgsIDVweCA0cHggMXB4ICMyYzJlMzYxOCxcclxuICAgICAgNHB4IDVweCAxcHggIzJjMmUzNjE4LCA2cHggNXB4IDFweCAjMmMyZTM2MTgsIDVweCA2cHggMXB4ICMyYzJlMzYxOCwgN3B4IDZweCAxcHggIzJjMmUzNjE4O1xyXG59XHJcblxyXG4udGl0bGUtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBjb2xvcjogcmdiKDk1LCA5NSwgMTAwKTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIGN1cnNpdmU7XHJcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LC4xKSwgMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1Myk7XHJcbn1cclxuXHJcbi50aXRsZS1wb3B1bGFyIHtcclxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG59XHJcblxyXG4udXBjb21pbmctdGl0bGUge1xyXG4gICAgY29sb3I6IHJnYigyNDgsIDEzMiwgMCk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDM1cHgpIHtcclxuICAgIC5qdW1ib3Ryb24ge1xyXG4gICAgICAgIGhlaWdodDogMzI1cHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/rest.service */ "./src/app/service/rest.service.ts");




let HomeComponent = class HomeComponent {
    constructor(router, rest) {
        this.router = router;
        this.rest = rest;
    }
    ngOnInit() {
        this.rest.getPopular().subscribe(res => {
            this.games = res;
        });
    }
    toGame(gameId) {
        this.router.navigate(['/games'], { queryParams: { id: gameId } });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.btn {\r\n    font-size: 16px;\r\n}\r\n\r\n.btn-block {\r\n    display: block;\r\n    margin-top: 10px;\r\n}\r\n\r\n.btn-collection {\r\n    color: #fff;\r\n    background-color: #ec7e00;\r\n    border-color: #d6751b;\r\n}\r\n\r\n.btn-collection:hover {\r\n    background-color: #ca6c00;\r\n}\r\n\r\n.btn-container {\r\n    margin: 25px auto 0 auto;\r\n    width: 95%;\r\n}\r\n\r\n.btn-delete-collection {\r\n    color: #fff;\r\n    background-color: #c32510;\r\n    border-color: #c21700;\r\n    margin-left: 10px;\r\n}\r\n\r\n.btn-delete-collection:hover {\r\n    background-color: #a8200e;\r\n}\r\n\r\n.btn-deselect {\r\n    margin-top: 1px;\r\n}\r\n\r\n.btn-input {\r\n    margin-bottom: 10px;\r\n    float: right;\r\n}\r\n\r\n.btn-select {\r\n    width: 75%;\r\n    margin: 5px auto;\r\n    border-color:#ec7e00;\r\n    color:  #ec7e00;\r\n    box-shadow: 0 8px 6px -6px rgba(153, 153, 153, 0.329);\r\n    -webkit-box-shadow: 0 8px 6px -6px rgba(153, 153, 153, 0.329);\r\n    -moz-box-shadow: 0 8px 6px -6px rgba(153, 153, 153, 0.329);\r\n}\r\n\r\n.btn-select:hover {\r\n    color: white;\r\n    border-color: #d6751b;\r\n    background-color:#ec7e00;\r\n}\r\n\r\n.btn-select:not(:disabled):not(.disabled).active, .btn-select:not(:disabled):not(.disabled):active, .show>.btn-select.dropdown-toggle {\r\n    color: white;\r\n    border-color: #d6751b;\r\n    background-color:#ec7e00;\r\n}\r\n\r\n.btn-top {\r\n    width: 97%;\r\n    margin: 30px auto 0 auto;\r\n}\r\n\r\n.clickable {\r\n    cursor: pointer;\r\n}\r\n\r\n.container {\r\n    max-width: 1920px;\r\n    padding: 0;\r\n    margin: 0 auto;\r\n}\r\n\r\n.container-games {\r\n    width: 65%;\r\n}\r\n\r\n.error {\r\n    margin-top: 50px;\r\n    text-align: center;\r\n    color: rgb(82, 82, 98);\r\n}\r\n\r\n.error-img {\r\n    width: 30vw;\r\n}\r\n\r\n.error-img2 {\r\n    width: 25vw;\r\n}\r\n\r\n.error-text {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.error-text-title {\r\n    font-size: 1.5vw;\r\n    font-weight: 600;\r\n    margin: 10px 0 0 0;\r\n}\r\n\r\n.error-text-body {\r\n    font-size: 1.1vw;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.error-text-body::first-letter {\r\n    text-transform: capitalize;\r\n}\r\n\r\nhr {\r\n    border: none;\r\n    height: 2px;\r\n    background: rgb(203,203,208);\r\n    background: -webkit-gradient(linear, left top, right top, from(rgb(206, 206, 212)), to(rgba(255,255,255,0)));\r\n    background: linear-gradient(90deg, rgb(206, 206, 212) 0%, rgba(255,255,255,0) 100%);\r\n}\r\n\r\n.img {\r\n    border-radius: 10px;\r\n    width: 80%;\r\n    max-height: 299px;\r\n    -webkit-transition: border .2s ease-in-out, -webkit-transform .2s ease-in-out;\r\n    transition: border .2s ease-in-out, -webkit-transform .2s ease-in-out;\r\n    transition: border .2s ease-in-out, transform .2s ease-in-out;\r\n    transition: border .2s ease-in-out, transform .2s ease-in-out, -webkit-transform .2s ease-in-out;\r\n    box-shadow: 0 8px 6px -6px  rgba(0, 0, 0, 0.329);\r\n    -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.329);\r\n    -moz-box-shadow: 0 8px 6px -6px  rgba(0, 0, 0, 0.329);\r\n}\r\n\r\n.img:hover {\r\n    border: 4px solid rgb(248, 132, 0);\r\n    border-radius: 10px;\r\n    -webkit-transform: scale(1.08);\r\n            transform: scale(1.08);\r\n}\r\n\r\n.input-label {\r\n    font-size: 20px;\r\n}\r\n\r\n.input-share-form {\r\n    width: 25%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.input-text {\r\n    font-size: 16px;\r\n    -webkit-user-select: all;\r\n    -moz-user-select: all;\r\n    -ms-user-select: all;\r\n    user-select: all;\r\n}\r\n\r\n.media-list{\r\n    text-align: center;\r\n    padding: 0;\r\n    margin-top: 20px;\r\n}\r\n\r\n.row {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n}\r\n\r\n.spacer {\r\n    padding-top: 5.5rem;\r\n}\r\n\r\n.title-container {\r\n    margin-top: 50px;\r\n    color: rgb(95, 95, 100);\r\n    font-family: 'Bebas Neue', cursive;\r\n    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0, 0, 0, 0.253);\r\n}\r\n\r\n.title-profile {\r\n    font-size: 3.5rem;\r\n    margin-bottom: 5px;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.user-title {\r\n    color: rgb(248, 132, 0);\r\n}\r\n\r\n.user-title-counter {\r\n    color: rgb(248, 132, 0);\r\n    float: right;\r\n}\r\n\r\n@media only screen and (max-width: 990px) {\r\n    .error-img {\r\n        width: 80vw;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .btn-delete-collection {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .btn-deselect {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .btn-container {\r\n        text-align: center;\r\n    }\r\n\r\n    .btn-input {\r\n        float: inherit;\r\n    }\r\n\r\n    .input-share-form {\r\n        width: 100%;\r\n    }\r\n\r\n    .title-container {\r\n        text-align: center;\r\n    }\r\n\r\n    .user-title-counter {\r\n        float: inherit;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixxREFBcUQ7SUFDckQsNkRBQTZEO0lBQzdELDBEQUEwRDtBQUM5RDs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLDRHQUFtRjtJQUFuRixtRkFBbUY7QUFDdkY7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQiw2RUFBNkQ7SUFBN0QscUVBQTZEO0lBQTdELDZEQUE2RDtJQUE3RCxnR0FBNkQ7SUFDN0QsZ0RBQWdEO0lBQ2hELHVEQUF1RDtJQUN2RCxxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLDhCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsaUZBQWlGO0FBQ3JGOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5idG4ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uYnRuLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmJ0bi1jb2xsZWN0aW9uIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjN2UwMDtcclxuICAgIGJvcmRlci1jb2xvcjogI2Q2NzUxYjtcclxufVxyXG5cclxuLmJ0bi1jb2xsZWN0aW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYTZjMDA7XHJcbn1cclxuXHJcbi5idG4tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMjVweCBhdXRvIDAgYXV0bztcclxuICAgIHdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbi5idG4tZGVsZXRlLWNvbGxlY3Rpb24ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzMyNTEwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYzIxNzAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tZGVsZXRlLWNvbGxlY3Rpb246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E4MjAwZTtcclxufVxyXG5cclxuLmJ0bi1kZXNlbGVjdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbn1cclxuXHJcbi5idG4taW5wdXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmJ0bi1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBib3JkZXItY29sb3I6I2VjN2UwMDtcclxuICAgIGNvbG9yOiAgI2VjN2UwMDtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4zMjkpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMzI5KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggcmdiYSgxNTMsIDE1MywgMTUzLCAwLjMyOSk7XHJcbn1cclxuXHJcbi5idG4tc2VsZWN0OmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1jb2xvcjogI2Q2NzUxYjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2VjN2UwMDtcclxufVxyXG5cclxuLmJ0bi1zZWxlY3Q6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuYnRuLXNlbGVjdDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5zaG93Pi5idG4tc2VsZWN0LmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItY29sb3I6ICNkNjc1MWI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlYzdlMDA7XHJcbn1cclxuXHJcbi5idG4tdG9wIHtcclxuICAgIHdpZHRoOiA5NyU7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0byAwIGF1dG87XHJcbn1cclxuXHJcbi5jbGlja2FibGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTkyMHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWdhbWVzIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYig4MiwgODIsIDk4KTtcclxufVxyXG5cclxuLmVycm9yLWltZyB7XHJcbiAgICB3aWR0aDogMzB2dztcclxufVxyXG5cclxuLmVycm9yLWltZzIge1xyXG4gICAgd2lkdGg6IDI1dnc7XHJcbn1cclxuXHJcbi5lcnJvci10ZXh0IHtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uZXJyb3ItdGV4dC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcclxufVxyXG5cclxuLmVycm9yLXRleHQtYm9keSB7XHJcbiAgICBmb250LXNpemU6IDEuMXZ3O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmVycm9yLXRleHQtYm9keTo6Zmlyc3QtbGV0dGVyIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMDMsMjAzLDIwOCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYigyMDYsIDIwNiwgMjEyKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC1oZWlnaHQ6IDI5OXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIC4ycyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4ICByZ2JhKDAsIDAsIDAsIDAuMzI5KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjMyOSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4ICByZ2JhKDAsIDAsIDAsIDAuMzI5KTtcclxufVxyXG5cclxuLmltZzpob3ZlciB7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2IoMjQ4LCAxMzIsIDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XHJcbn1cclxuXHJcbi5pbnB1dC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1zaGFyZS1mb3JtIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmlucHV0LXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogYWxsO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogYWxsO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBhbGw7XHJcbiAgICB1c2VyLXNlbGVjdDogYWxsO1xyXG59XHJcblxyXG4ubWVkaWEtbGlzdHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDUuNXJlbTtcclxufVxyXG5cclxuLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgY29sb3I6IHJnYig5NSwgOTUsIDEwMCk7XHJcbiAgICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnLCBjdXJzaXZlO1xyXG4gICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuMSksIDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNTMpO1xyXG59XHJcblxyXG4udGl0bGUtcHJvZmlsZSB7XHJcbiAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4udXNlci10aXRsZSB7XHJcbiAgICBjb2xvcjogcmdiKDI0OCwgMTMyLCAwKTtcclxufVxyXG5cclxuLnVzZXItdGl0bGUtY291bnRlciB7XHJcbiAgICBjb2xvcjogcmdiKDI0OCwgMTMyLCAwKTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xyXG4gICAgLmVycm9yLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDgwdnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5idG4tZGVsZXRlLWNvbGxlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1kZXNlbGVjdCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWNvbnRhaW5lciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4taW5wdXQge1xyXG4gICAgICAgIGZsb2F0OiBpbmhlcml0O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dC1zaGFyZS1mb3JtIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUtY29udGFpbmVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItdGl0bGUtY291bnRlciB7XHJcbiAgICAgICAgZmxvYXQ6IGluaGVyaXQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/token-storage.service */ "./src/app/service/token-storage.service.ts");
/* harmony import */ var src_app_service_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/url.service */ "./src/app/service/url.service.ts");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");






let ProfileComponent = class ProfileComponent {
    constructor(router, token, userService, route, url) {
        this.router = router;
        this.token = token;
        this.userService = userService;
        this.route = route;
        this.url = url;
        this.buttonText = "delete";
        this.currentUser = null;
        this.gamesList = [];
        this.hasGames = true;
        this.itemsInGamesList = false;
        this.showEdit = false;
        this.showInput = false;
        this.urlUser = null;
    }
    ngOnInit() {
        this.currentUser = this.token.getUser();
        this.shareUrl = this.url.shareProdUrl;
        this.route.params.subscribe(res => {
            if (res.username) {
                this.urlUser = res.username;
            }
        });
        if (!this.urlUser && this.currentUser != null) {
            this.getCollection(this.currentUser.username);
            this.username = this.currentUser.username;
            this.isOwner = true;
        }
        else {
            this.getCollection(this.urlUser);
            this.username = this.urlUser;
            this.isOwner = this.urlUser === this.currentUser.username;
        }
    }
    toGame(gameId) {
        this.router.navigate(['/games'], { queryParams: { id: gameId } });
    }
    addToGamesList(gameId) {
        if (!this.gamesList.includes(gameId)) {
            this.gamesList.push(gameId);
            this.itemsInGamesList = true;
            this.buttonText = "check";
        }
        else {
            this.gamesList.splice(this.gamesList.indexOf(gameId), 1);
            if (this.gamesList.length <= 0) {
                this.itemsInGamesList = false;
                this.toggleEdit();
            }
            this.buttonText = "delete";
        }
    }
    removeAllGames() {
        this.userService.removeAllGamesFromCollection(this.currentUser.username, this.gamesList).subscribe(res => {
            this.successMessage = res;
            window.location.reload();
        }, err => {
            this.errorMessage = err.error;
        });
    }
    toggleEdit() {
        this.showEdit = !this.showEdit;
        if (this.showEdit) {
            this.customStyle = {
                'transform': 'scale(.93)'
            };
        }
        else {
            this.customStyle = {
                'transform': 'scale(.99)'
            };
        }
    }
    deselectAllFromGamesList() {
        this.gamesList = [];
        if (this.gamesList.length <= 0) {
            this.itemsInGamesList = false;
            this.toggleEdit();
        }
    }
    getCollection(username) {
        this.userService.getUserCollection(username).subscribe(res => {
            this.games = res;
        }, err => {
            this.hasGames = false;
            this.errorMessage = "User Not found";
        });
    }
    scrollToTop() {
        window.scrollTo(0, 0);
    }
    onShareClick() {
        this.showInput = !this.showInput;
        if (this.showInput) {
            this.shareHighlight();
        }
    }
    shareHighlight() {
        if (this.share) {
            this.share.nativeElement.select();
        }
        else {
            setTimeout(() => {
                this.shareHighlight();
            }, 3);
        }
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] },
    { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_url_service__WEBPACK_IMPORTED_MODULE_4__["UrlService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("share", { static: false })
], ProfileComponent.prototype, "share", void 0);
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n::-webkit-scrollbar {\r\n    width: 3px;\r\n    height: 3px;\r\n   }\r\n   ::-webkit-scrollbar-thumb {\r\n    background: #b8b8ba;\r\n    border-radius: 10px;\r\n   }\r\n   ::-webkit-scrollbar-thumb:hover{\r\n    background: #FF7B00;\r\n   }\r\n   ::-webkit-scrollbar-track{\r\n    background: #ffffff;\r\n    border-radius: 10px;\r\n   }\r\n   #container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n   .clickable {\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n   .error {\r\n    margin-top: 50px;\r\n    text-align: center;\r\n    color: rgb(82, 82, 98);\r\n}\r\n   .error-img {\r\n    width: 25vw;\r\n}\r\n   .error-text {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n   .error-text-title {\r\n    font-size: 1.5vw;\r\n    font-weight: 600;\r\n    margin: 10px 0 0 0;\r\n}\r\n   .error-text-body {\r\n    font-size: 1.1vw;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n   .error-text span {\r\n    color: rgb(248, 132, 0);\r\n}\r\n   .game-content {\r\n    width: 1000px;\r\n    max-width: 95vw;\r\n    margin: 30px auto;\r\n    padding: 15px 15px 0px 15px;\r\n    border: 3px solid rgb(230, 230, 230);\r\n    border-radius: 5px;\r\n\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgb(255, 255, 255)), to(rgb(246, 246, 246)));\r\n\r\n    background-image: linear-gradient(rgb(255, 255, 255), rgb(246, 246, 246));\r\n    box-shadow: 0 8px 6px -6px rgba(153, 153, 153, 0.329);\r\n}\r\n   hr {\r\n    border: none;\r\n    height: 2px;\r\n    background: rgb(203,203,208);\r\n    background: -webkit-gradient(linear, left top, right top, from(rgb(206, 206, 212)), to(rgba(255,255,255,0)));\r\n    background: linear-gradient(90deg, rgb(206, 206, 212) 0%, rgba(255,255,255,0) 100%);\r\n}\r\n   .img {\r\n    width: 200px;\r\n    border-radius: 10px;\r\n    /* transition: border .2s ease-in-out, transform .2s ease-in-out; */\r\n    box-shadow: 0 8px 6px -6px rgba(153, 153, 153, 0.329);\r\n}\r\n   .search-title {\r\n    color: rgb(95, 95, 100);\r\n    font-family: 'Bebas Neue', cursive;\r\n    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0, 0, 0, 0.253);\r\n    margin-top: 2%;\r\n    font-size: 3rem;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n   .search-title span {\r\n    color: rgb(248, 132, 0);\r\n}\r\n   .summary {\r\n    max-height: 175px;\r\n    overflow-y: auto;\r\n    padding: 5px;\r\n    color: rgb(82, 82, 87);\r\n}\r\n   .spacer {\r\n    padding-top: 4.5rem;\r\n}\r\n   .title {\r\n    color: rgb(95, 95, 100);\r\n    font-family: 'Bebas Neue', cursive;\r\n    letter-spacing: 5px;\r\n    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0, 0, 0, 0.253);\r\n    padding-bottom: 5px;\r\n    margin-bottom: 0;\r\n    font-weight: 600;\r\n}\r\n   .title:hover {\r\n    color: rgb(131, 131, 141);\r\n}\r\n   @media only screen and (max-width: 990px) {\r\n    .error-img {\r\n        width: 50vw;\r\n    }\r\n}\r\n   @media only screen and (max-width: 650px) {\r\n\r\n    .img {\r\n        width: 250px;\r\n    }\r\n\r\n    .img-container {\r\n        margin: 0 auto 14px auto;\r\n        width: -webkit-fit-content;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n    }\r\n\r\n    .media {\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n    .media-body {\r\n        -webkit-box-flex: 70%;\r\n                flex: 70%;\r\n\r\n    }\r\n\r\n    .title {\r\n        font-size: 20px;\r\n    }\r\n\r\n}\r\n   @media screen and (max-width:360px) {\r\n    .search-title {\r\n        font-size: 2.7rem;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7R0FDWjtHQUNBO0lBQ0MsbUJBQW1CO0lBQ25CLG1CQUFtQjtHQUNwQjtHQUNBO0lBQ0MsbUJBQW1CO0dBQ3BCO0dBQ0E7SUFDQyxtQkFBbUI7SUFDbkIsbUJBQW1CO0dBQ3BCO0dBRUg7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7R0FFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7R0FFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0dBRUE7SUFDSSxXQUFXO0FBQ2Y7R0FFQTtJQUNJLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQjtBQUNyQjtHQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7R0FFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUztBQUNiO0dBRUE7SUFDSSx1QkFBdUI7QUFDM0I7R0FFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixvQ0FBb0M7SUFDcEMsa0JBQWtCOztJQUVsQixtSEFBeUU7O0lBQXpFLHlFQUF5RTtJQUd6RSxxREFBcUQ7QUFDekQ7R0FFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLDRHQUFtRjtJQUFuRixtRkFBbUY7QUFDdkY7R0FFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUVBQW1FO0lBR25FLHFEQUFxRDtBQUN6RDtHQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxpRkFBaUY7SUFDakYsY0FBYztJQUNkLGVBQWU7SUFDZix5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUI7QUFDckI7R0FFQTtJQUNJLHVCQUF1QjtBQUMzQjtHQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0dBRUE7SUFDSSxtQkFBbUI7QUFDdkI7R0FFQTtJQUNJLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLGlGQUFpRjtJQUNqRixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtHQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0dBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtBQUNKO0dBRUE7O0lBRUk7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksd0JBQXdCO1FBQ3hCLDBCQUFrQjtRQUFsQix1QkFBa0I7UUFBbEIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLHFCQUFTO2dCQUFULFNBQVM7O0lBRWI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKO0dBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgIH1cclxuICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjhiOGJhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgfVxyXG4gICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogI0ZGN0IwMDtcclxuICAgfVxyXG4gICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNre1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgIH1cclxuXHJcbiNjb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNsaWNrYWJsZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYig4MiwgODIsIDk4KTtcclxufVxyXG5cclxuLmVycm9yLWltZyB7XHJcbiAgICB3aWR0aDogMjV2dztcclxufVxyXG5cclxuLmVycm9yLXRleHQge1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5lcnJvci10ZXh0LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG59XHJcblxyXG4uZXJyb3ItdGV4dC1ib2R5IHtcclxuICAgIGZvbnQtc2l6ZTogMS4xdnc7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZXJyb3ItdGV4dCBzcGFuIHtcclxuICAgIGNvbG9yOiByZ2IoMjQ4LCAxMzIsIDApO1xyXG59XHJcblxyXG4uZ2FtZS1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDk1dnc7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDE1cHggMTVweCAwcHggMTVweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDI1NSwgMjU1LCAyNTUpLCByZ2IoMjQ2LCAyNDYsIDI0NikpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMzI5KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggcmdiYSgxNTMsIDE1MywgMTUzLCAwLjMyOSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMzI5KTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjAzLDIwMywyMDgpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMjA2LCAyMDYsIDIxMikgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC8qIHRyYW5zaXRpb246IGJvcmRlciAuMnMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7ICovXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4zMjkpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMzI5KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4zMjkpO1xyXG59XHJcblxyXG4uc2VhcmNoLXRpdGxlIHtcclxuICAgIGNvbG9yOiByZ2IoOTUsIDk1LCAxMDApO1xyXG4gICAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgY3Vyc2l2ZTtcclxuICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjEpLCAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUzKTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtdGl0bGUgc3BhbiB7XHJcbiAgICBjb2xvcjogcmdiKDI0OCwgMTMyLCAwKTtcclxufVxyXG5cclxuLnN1bW1hcnkge1xyXG4gICAgbWF4LWhlaWdodDogMTc1cHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6IHJnYig4MiwgODIsIDg3KTtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogNC41cmVtO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgY29sb3I6IHJnYig5NSwgOTUsIDEwMCk7XHJcbiAgICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnLCBjdXJzaXZlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjEpLCAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUzKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRpdGxlOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2IoMTMxLCAxMzEsIDE0MSk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcclxuICAgIC5lcnJvci1pbWcge1xyXG4gICAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcblxyXG4gICAgLmltZyB7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAxNHB4IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tZWRpYSB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZWRpYS1ib2R5IHtcclxuICAgICAgICBmbGV4OiA3MCU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweCkge1xyXG4gICAgLnNlYXJjaC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjdyZW07XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/rest.service */ "./src/app/service/rest.service.ts");




let SearchComponent = class SearchComponent {
    constructor(router, route, rest) {
        this.router = router;
        this.route = route;
        this.rest = rest;
        this.hasGames = true;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(param => {
            this.searchTerm = param.term.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase());
            this.rest.getSearch(param.term).subscribe(res => {
                this.games = res;
                if (this.games.length === 0) {
                    this.hasGames = false;
                }
                else {
                    this.hasGames = true;
                }
            }, err => {
                this.hasGames = false;
                this.errorMessage = "User Not found";
            });
        });
    }
    toGame(gameId) {
        this.router.navigate(['/games'], { queryParams: { id: gameId } });
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/components/upcoming/upcoming.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/upcoming/upcoming.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.clickable {\r\n    cursor: pointer;\r\n}\r\n\r\n.container {\r\n    max-width: 90%;\r\n}\r\n\r\n.game-card {\r\n    margin: 10px auto;\r\n    text-align: center;\r\n\r\n    border: 3px solid rgb(243, 243, 243);\r\n    border-radius: 10px;\r\n    -webkit-transition: border .2s ease-in-out, -webkit-transform .2s ease-in-out;\r\n    transition: border .2s ease-in-out, -webkit-transform .2s ease-in-out;\r\n    transition: border .2s ease-in-out, transform .2s ease-in-out;\r\n    transition: border .2s ease-in-out, transform .2s ease-in-out, -webkit-transform .2s ease-in-out;\r\n\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgb(255, 255, 255)), to(rgb(243, 243, 243)));\r\n\r\n    background-image: linear-gradient(rgb(255, 255, 255), rgb(243, 243, 243));\r\n    box-shadow: 0 8px 6px -6px rgba(153, 153, 153, 0.329);\r\n}\r\n\r\n.game-card:hover {\r\n    border: 3px solid rgb(248, 132, 0);\r\n    border-radius: 10px;\r\n    -webkit-transform: scale(1.02);\r\n            transform: scale(1.02);\r\n}\r\n\r\n.game-title {\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    margin-top: 5px;\r\n\r\n    width: 100%;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\nhr {\r\n    border: none;\r\n    height: 2px;\r\n    background: rgb(203,203,208);\r\n    background: -webkit-gradient(linear, left top, right top, from(rgb(206, 206, 212)), to(rgba(255,255,255,0)));\r\n    background: linear-gradient(90deg, rgb(206, 206, 212) 0%, rgba(255,255,255,0) 100%);\r\n}\r\n\r\n.img-game {\r\n    max-height: 320px;\r\n    border-radius: 10px;\r\n    box-shadow: 0 8px 6px -6px  rgba(0, 0, 0, 0.329);\r\n    -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.329);\r\n    -moz-box-shadow: 0 8px 6px -6px  rgba(0, 0, 0, 0.329);\r\n}\r\n\r\n.row {\r\n    margin-top: 25px;\r\n}\r\n\r\n.spacer {\r\n    padding-top: 3.5rem;\r\n}\r\n\r\n.title-container {\r\n    width: 80%;\r\n    margin: 2% auto;\r\n    padding: 15px 15px 0px 15px;\r\n\r\n    -webkit-box-pack: center;\r\n\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n\r\n    color: rgb(95, 95, 100);\r\n    font-family: 'Bebas Neue', cursive;\r\n}\r\n\r\n.upcoming-title {\r\n    color: rgb(95, 95, 100);\r\n    font-family: 'Bebas Neue', cursive;\r\n    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0, 0, 0, 0.253);\r\n    margin-top: 1%;\r\n    font-size: 3.5rem;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.upcoming-title span{\r\n    color: rgb(248, 132, 0);\r\n}\r\n\r\n@media screen and (max-width:1025px) {\r\n\r\n    .container {\r\n        max-width: 100%;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width:541px) {\r\n\r\n    .container {\r\n        max-width: 100%;\r\n    }\r\n\r\n    .upcoming-title {\r\n        font-size: 3.5rem;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:361px) {\r\n\r\n    .upcoming-title {\r\n        font-size: 2.8rem;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:321px) {\r\n\r\n    .upcoming-title {\r\n        font-size: 2.5rem;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:281px) {\r\n\r\n    .upcoming-title {\r\n        font-size: 2.5rem;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGNvbWluZy91cGNvbWluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjs7SUFFbEIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQiw2RUFBNkQ7SUFBN0QscUVBQTZEO0lBQTdELDZEQUE2RDtJQUE3RCxnR0FBNkQ7O0lBRTdELG1IQUF5RTs7SUFBekUseUVBQXlFO0lBR3pFLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsOEJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTs7SUFFZixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDRCQUE0QjtJQUM1Qiw0R0FBbUY7SUFBbkYsbUZBQW1GO0FBQ3ZGOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnREFBZ0Q7SUFDaEQsdURBQXVEO0lBQ3ZELHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsMkJBQTJCOztJQUUzQix3QkFBdUI7O1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1COztJQUVuQix1QkFBdUI7SUFDdkIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxpRkFBaUY7SUFDakYsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztBQUVKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91cGNvbWluZy91cGNvbWluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jbGlja2FibGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG59XHJcblxyXG4uZ2FtZS1jYXJkIHtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyNDMsIDI0MywgMjQzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjJzIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAyNTUsIDI1NSksIHJnYigyNDMsIDI0MywgMjQzKSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4zMjkpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMzI5KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4zMjkpO1xyXG59XHJcblxyXG4uZ2FtZS1jYXJkOmhvdmVyIHtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyNDgsIDEzMiwgMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxufVxyXG5cclxuLmdhbWUtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwMywyMDMsMjA4KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDIwNiwgMjA2LCAyMTIpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpO1xyXG59XHJcblxyXG4uaW1nLWdhbWUge1xyXG4gICAgbWF4LWhlaWdodDogMzIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggIHJnYmEoMCwgMCwgMCwgMC4zMjkpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMzI5KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggIHJnYmEoMCwgMCwgMCwgMC4zMjkpO1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDMuNXJlbTtcclxufVxyXG5cclxuLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAyJSBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDBweCAxNXB4O1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBjb2xvcjogcmdiKDk1LCA5NSwgMTAwKTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi51cGNvbWluZy10aXRsZSB7XHJcbiAgICBjb2xvcjogcmdiKDk1LCA5NSwgMTAwKTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIGN1cnNpdmU7XHJcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LC4xKSwgMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1Myk7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi51cGNvbWluZy10aXRsZSBzcGFue1xyXG4gICAgY29sb3I6IHJnYigyNDgsIDEzMiwgMCk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNXB4KSB7XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NDFweCkge1xyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAudXBjb21pbmctdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2MXB4KSB7XHJcblxyXG4gICAgLnVwY29taW5nLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozMjFweCkge1xyXG5cclxuICAgIC51cGNvbWluZy10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MjgxcHgpIHtcclxuXHJcbiAgICAudXBjb21pbmctdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/upcoming/upcoming.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/upcoming/upcoming.component.ts ***!
  \***********************************************************/
/*! exports provided: UpcomingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingComponent", function() { return UpcomingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/rest.service */ "./src/app/service/rest.service.ts");




let UpcomingComponent = class UpcomingComponent {
    constructor(router, rest) {
        this.router = router;
        this.rest = rest;
    }
    ngOnInit() {
        this.rest.getUpcoming().subscribe(res => {
            this.games = res;
        });
    }
    toGame(gameId) {
        this.router.navigate(['/games'], { queryParams: { id: gameId } });
    }
};
UpcomingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] }
];
UpcomingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upcoming',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upcoming.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upcoming/upcoming.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upcoming.component.css */ "./src/app/components/upcoming/upcoming.component.css")).default]
    })
], UpcomingComponent);



/***/ }),

/***/ "./src/app/helpers/auth.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/helpers/auth.interceptor.ts ***!
  \*********************************************/
/*! exports provided: AuthInterceptor, authInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function() { return authInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/token-storage.service */ "./src/app/service/token-storage.service.ts");




const TOKEN_HEADER_KEY = 'Authorization';
let AuthInterceptor = class AuthInterceptor {
    constructor(token) {
        this.token = token;
    }
    intercept(req, next) {
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authReq);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _service_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthInterceptor);

const authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/modules/material.module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");












































let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        ]
    })
], MaterialModule);

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */


/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./url.service */ "./src/app/service/url.service.ts");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let AuthService = class AuthService {
    constructor(http, url) {
        this.http = http;
        this.url = url;
    }
    login(credentials) {
        return this.http.post(this.url.authUrl + 'login', {
            username: credentials.username,
            password: credentials.password
        }, httpOptions);
    }
    register(user) {
        return this.http.post(this.url.authUrl + 'register', {
            username: user.username,
            password: user.password
        }, httpOptions);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _url_service__WEBPACK_IMPORTED_MODULE_3__["UrlService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/service/rest.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/rest.service.ts ***!
  \*****************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./url.service */ "./src/app/service/url.service.ts");




let RestService = class RestService {
    constructor(http, url) {
        this.http = http;
        this.url = url;
    }
    getGame(id) {
        return this.http.get(`${this.url.generalUrl}/REST/games?id=${id}`);
    }
    getPlatform(id) {
        return this.http.get(`${this.url.generalUrl}/REST/browse?platform=${id}`);
    }
    getPopular() {
        return this.http.get(`${this.url.generalUrl}/REST`);
    }
    getSearch(value) {
        return this.http.get(`${this.url.generalUrl}/REST/search?term=${value}`);
    }
    getUpcoming() {
        return this.http.get(`${this.url.generalUrl}/REST/upcoming`);
    }
};
RestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _url_service__WEBPACK_IMPORTED_MODULE_3__["UrlService"] }
];
RestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], RestService);



/***/ }),

/***/ "./src/app/service/token-storage.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/token-storage.service.ts ***!
  \**************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
let TokenStorageService = class TokenStorageService {
    constructor() { }
    logout() {
        window.sessionStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return sessionStorage.getItem(TOKEN_KEY);
    }
    saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        return JSON.parse(sessionStorage.getItem(USER_KEY));
    }
};
TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenStorageService);



/***/ }),

/***/ "./src/app/service/url.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/url.service.ts ***!
  \****************************************/
/*! exports provided: UrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlService", function() { return UrlService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UrlService = class UrlService {
    constructor() {
        // Auth Development URL:
        this.authUrl = "/REST/auth/";
        // Auth Production URL:
        // authUrl: string = "";
        // User Development URL:
        this.userUrl = '/REST/user/';
        // User Production URL:
        // userUrl: string = "";
        // General Development URL:
        this.generalUrl = "";
        // General Production URL:
        // generalUrl: string = "";
        // Share Development URL:
        this.shareUrl = "http://localhost:4200";
        // Share Production URL:
        this.shareProdUrl = "https://app-checkpoint.herokuapp.com";
    }
};
UrlService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UrlService);



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./url.service */ "./src/app/service/url.service.ts");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let UserService = class UserService {
    constructor(http, url) {
        this.http = http;
        this.url = url;
    }
    getUserCollection(username) {
        return this.http.get(`${this.url.generalUrl}/REST/user/${username}`);
    }
    addGameToCollection(username, gameId) {
        return this.http.post(`${this.url.generalUrl}/REST/user/${username}/game/${gameId}`, gameId, httpOptions);
    }
    removeGameFromCollection(username, gameId) {
        return this.http.delete(`${this.url.generalUrl}/REST/user/${username}/game/${gameId}`);
    }
    removeAllGamesFromCollection(username, gameList) {
        return this.http.post(`${this.url.generalUrl}/REST/user/${username}/games`, gameList);
    }
    includedInCollection(username, gameId) {
        return this.http.get(`${this.url.generalUrl}/REST/user/${username}/game/${gameId}`);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _url_service__WEBPACK_IMPORTED_MODULE_3__["UrlService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Learn\Self-Taught\Projects\checkpoint\src\main\checkpoint-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map