(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1219:function(e,t,n){"use strict";n.r(t);n(693),n.p,n(694),n(695),n(696);var _=n(7),o=n(18),i=n(108),a=n.n(i),s=n(3);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var _=t[n];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(e,_.key,_)}}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,_=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(_,arguments,o)}else n=_.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var p=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(i,e);var t,n,_,o=u(i);function i(){var e;r(this,i);for(var t=arguments.length,n=new Array(t),_=0;_<t;_++)n[_]=arguments[_];return(e=o.call.apply(o,[this].concat(n))).recaptchaCallback=function(){var t={sitekey:e.siteKeyValue};"invisible"===e.element.dataset.captchaType&&(t.size="invisible",t.badge="inline");var n=grecaptcha.render(e.element,t);e.element.dataset.recaptchaId=n},e.rescaleCaptcha=function(){var t=e.element.parentNode.clientWidth,n=t<302?t/302:1;e.element.style.transform="scale(".concat(n,")"),e.element.style.transformOrigin="0 0"},e}return t=i,(n=[{key:"connect",value:function(){Object(s.Q)()||this.initRecaptcha()}},{key:"disconnect",value:function(){"invisible"!==this.element.dataset.captchaType&&window.removeEventListener("resize",this.rescaleCaptcha)}},{key:"initRecaptcha",value:function(){var e=this;window.recaptchaCallback=this.recaptchaCallback,"undefined"!==typeof grecaptcha?recaptchaCallback():a()("https://www.google.com/recaptcha/api.js?onload=recaptchaCallback&render=explicit"),"invisible"!==this.element.dataset.captchaType&&(window.addEventListener("resize",this.rescaleCaptcha),setTimeout((function(){e.rescaleCaptcha()})))}}])&&c(t.prototype,n),_&&c(t,_),i}(o.b);p.values={siteKey:String};var d=n(14),E=n(544),b=n(545),g=n(13),O=n.n(g),P=n(103);function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){for(var n=0;n<t.length;n++){var _=t[n];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(e,_.key,_)}}function M(e,t){return M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},M(e,t)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,_=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(_,arguments,o)}else n=_.apply(this,arguments);return k(this,n)}}function k(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(i,e);var t,n,_,o=m(i);function i(){var e;T(this,i);for(var t=arguments.length,n=new Array(t),_=0;_<t;_++)n[_]=arguments[_];return(e=o.call.apply(o,[this].concat(n))).connectFacebook=function(){e.facebook.connect()},e.connectGoogle=function(){e.google.connect()},e}return t=i,(n=[{key:"connect",value:function(){this.connectType=this.element.dataset.connectType,O.a.set("sessionViewActivity",Object(P.f)()),O.a.set("sessionDownloadActivity",Object(P.d)()),this.facebook=new E.a({buttonTarget:this.fbButtonTarget,textTarget:this.hasFbTextTarget?this.fbTextTarget:null,csrfToken:this.csrfToken,omniauthToken:this.element.dataset.omniauthToken}),this.google=new b.a({buttonTarget:this.googleButtonTarget,textTarget:this.hasGoogleTextTarget?this.googleTextTarget:null,csrfToken:this.csrfToken,omniauthToken:this.element.dataset.omniauthToken})}}])&&D(t.prototype,n),_&&D(t,_),i}(d.a);v.targets=["fbButton","fbText","googleButton","googleText"],Promise.resolve().then(n.bind(null,1248)),Promise.all([n.e(13),n.e(16),n.e(12),n.e(15),n.e(239)]).then(n.bind(null,1315)).then((function(e){_.default.register("registrations-account-form",e.default)})),Promise.all([n.e(13),n.e(16),n.e(12),n.e(15),n.e(240)]).then(n.bind(null,1316)).then((function(e){_.default.register("registrations-details-form",e.default)})),Promise.all([n.e(13),n.e(16),n.e(12),n.e(15),n.e(238)]).then(n.bind(null,1317)).then((function(e){_.default.register("login-form",e.default)})),Promise.all([n.e(13),n.e(16),n.e(12),n.e(15),n.e(241)]).then(n.bind(null,1318)).then((function(e){_.default.register("reset-password-form",e.default)})),Promise.all([n.e(9),n.e(21),n.e(242)]).then(n.bind(null,1319)).then((function(e){_.default.register("signup-modal",e.default)})),Promise.all([n.e(32),n.e(9),n.e(21),n.e(245)]).then(n.bind(null,1320)).then((function(e){_.default.register("signup-survey-component",e.default)})),Promise.all([n.e(13),n.e(16),n.e(12),n.e(15),n.e(246)]).then(n.bind(null,1321)).then((function(e){_.default.register("signup-survey-form",e.default)})),Promise.all([n.e(32),n.e(9),n.e(21),n.e(243)]).then(n.bind(null,1322)).then((function(e){_.default.register("signup-email-verification",e.default)})),Promise.all([n.e(9),n.e(17),n.e(21),n.e(244)]).then(n.bind(null,1323)).then((function(e){_.default.register("signup-email-verified",e.default)})),Promise.all([n.e(19),n.e(247)]).then(n.bind(null,1324)).then((function(e){_.default.register("google-one-tap",e.default)})),_.default.register("recaptcha",p),_.default.register("social-session-buttons",v)},1248:function(e,t,n){"use strict";n.r(t);n(697),n.p},544:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return FacebookLogin}));var scriptjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(108),scriptjs__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(scriptjs__WEBPACK_IMPORTED_MODULE_0__),axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(38),axios__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__),lib_helpers__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),js_cookie__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(13),js_cookie__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__),components_analytics_conversions_tracking__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),components_analytics_conversions_constants_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9),lib_social_session_helpers__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(59);function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var _=t[n];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(e,_.key,_)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var FacebookLogin=function(){function FacebookLogin(e){var t=this,n=e.buttonTarget,_=e.textTarget,o=void 0===_?null:_,i=e.csrfToken,a=e.omniauthToken;_classCallCheck(this,FacebookLogin),this.loadFacebookApi=function(){window.FB.init({appId:t.buttonTarget.dataset.appId,autoLogAppEvents:!0,cookie:!0,status:!0,xfbml:!1,version:"v3.2"}),t.buttonTarget.dataset.loaded="true"},this.handleFacebookResponse=function(){axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common["X-CSRF-Token"]=t.csrfToken,axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(t.buttonTarget.dataset.omniauthPath,t.formDataForAjaxPost,{withCredentials:!0}).then((function(e){t.responseSuccess(e)})).catch(t.handleError)},this.responseSuccess=function(e){200===e.status||204===e.status?t.processResponse(e):t.handleError(e.error),Object(lib_social_session_helpers__WEBPACK_IMPORTED_MODULE_6__.b)()},this.loginReject=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t.textTarget&&Object(lib_social_session_helpers__WEBPACK_IMPORTED_MODULE_6__.f)(t.buttonTarget,t.originalText),Object(lib_social_session_helpers__WEBPACK_IMPORTED_MODULE_6__.d)(e,t.buttonTarget),e&&(t.authType="rerequest")},this.handleError=function(e){e&&console.error(e),t.textTarget&&Object(lib_social_session_helpers__WEBPACK_IMPORTED_MODULE_6__.f)(t.buttonTarget,t.originalText),Object(lib_social_session_helpers__WEBPACK_IMPORTED_MODULE_6__.d)(!0,t.buttonTarget)},this.buttonTarget=n,this.textTarget=o,this.csrfToken=i,this.omniauthToken=a,this.connectType=n.getAttribute("data-oauth-type"),this.handleFacebookResponse=this.handleFacebookResponse.bind(this),this.handleError=this.handleError.bind(this),this.init()}return _createClass(FacebookLogin,[{key:"init",value:function(){Object(lib_social_session_helpers__WEBPACK_IMPORTED_MODULE_6__.d)(!1,this.buttonTarget),this.authType="reauthorize",scriptjs__WEBPACK_IMPORTED_MODULE_0___default()("https://connect.facebook.net/en_US/sdk.js",this.loadFacebookApi)}},{key:"connect",value:function(){var e=this,t=document.getElementById("user_newsletter"),n=!1;null!==t&&"hidden"!==t.type?n=t.checked:null!==t&&"hidden"===t.type&&(n=!0);var _=this.buttonTarget.dataset.omniauthPath,o="".concat(_,"/callback?newsletter=").concat(n,"&state=").concat(this.omniauthToken);this.buttonTarget.dataset.omniauthPath=o,this.textTarget&&(this.originalText=this.textTarget.innerHTML,Object(lib_social_session_helpers__WEBPACK_IMPORTED_MODULE_6__.f)(this.buttonTarget)),this.login().then((function(){e.validate().then((function(){e.handleFacebookResponse()}),(function(){e.loginReject(!0)}))}),(function(){e.loginReject()}))}},{key:"formDataForAjaxPost",get:function(){var e=new FormData;return e.append("authenticity_token",this.csrfToken),e}},{key:"processResponse",value:function processResponse(response){if(Object(lib_social_session_helpers__WEBPACK_IMPORTED_MODULE_6__.a)())return Object(lib_social_session_helpers__WEBPACK_IMPORTED_MODULE_6__.c)(response)&&eval(response.data),void Object(components_analytics_conversions_tracking__WEBPACK_IMPORTED_MODULE_4__.l)({action:components_analytics_conversions_constants_actions__WEBPACK_IMPORTED_MODULE_5__.mb,category:Object(components_analytics_conversions_tracking__WEBPACK_IMPORTED_MODULE_4__.e)(this.buttonTarget),label:"Sign_Up-Facebook",dataLayerCompleteAttrs:["email_address","email_hash_md5","email_hash_sha1","sign_in_type"]});Object(components_analytics_conversions_tracking__WEBPACK_IMPORTED_MODULE_4__.l)({action:components_analytics_conversions_constants_actions__WEBPACK_IMPORTED_MODULE_5__.Ab,category:Object(components_analytics_conversions_tracking__WEBPACK_IMPORTED_MODULE_4__.e)(this.buttonTarget),label:"Sign_In-Facebook",dataLayerCompleteAttrs:["email_address","email_hash_md5","email_hash_sha1","sign_in_type","name","country","postal_code","team_owner_email","team_seats","multiple_logins"]}),this.fromFollow?window.location.reload():"login_in_place"===response.data.message?Object(lib_helpers__WEBPACK_IMPORTED_MODULE_2__.X)("LoggedInPlace"):js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("sign_in_referrer")?window.location.assign(js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("sign_in_referrer")):window.location.reload()}},{key:"fromFollow",get:function(){return Object(lib_social_session_helpers__WEBPACK_IMPORTED_MODULE_6__.e)()}},{key:"login",value:function(){var e=this;return new Promise((function(t,n){window.FB.login((function(e){"connected"===e.status?t():n()}),{scope:"public_profile,email",auth_type:e.authType})}))}},{key:"validate",value:function(){return new Promise((function(e,t){window.FB.api("/me/permissions",(function(n){n.data.forEach((function(e){"email"===e.permission&&"granted"!==e.status&&t(),"public_profile"===e.permission&&"granted"!==e.status&&t()})),e()}))}))}}]),FacebookLogin}()},545:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return GoogleLogin}));var scriptjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(108),scriptjs__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(scriptjs__WEBPACK_IMPORTED_MODULE_0__),axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(38),axios__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__),js_cookie__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13),js_cookie__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__),lib_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),lib_social_session_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(59),components_analytics_conversions_tracking__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6),components_analytics_conversions_constants_actions__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9);function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var _=t[n];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(e,_.key,_)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var GoogleLogin=function(){function GoogleLogin(e){var t=this,n=e.buttonTarget,_=e.textTarget,o=void 0===_?null:_,i=e.csrfToken,a=e.omniauthToken;_classCallCheck(this,GoogleLogin),this.loadGoogleApi=function(){t.buttonTarget.dataset.loaded="true"},this.sendDialogTriggerEvent=function(e){e.isDisplayed()&&Object(components_analytics_conversions_tracking__WEBPACK_IMPORTED_MODULE_5__.k)({element:t.buttonTarget,data:{action:components_analytics_conversions_constants_actions__WEBPACK_IMPORTED_MODULE_6__.nb}})},this.responseSuccess=function(e){200===e.status||204===e.status?t.processResponse(e):t.handleError(e.error),Object(lib_social_session_helpers__WEBPACK_IMPORTED_MODULE_4__.b)()},this.handleError=function(e){e&&console.error(e),t.textTarget&&Object(lib_social_session_helpers__WEBPACK_IMPORTED_MODULE_4__.f)(t.buttonTarget,t.originalText),Object(lib_social_session_helpers__WEBPACK_IMPORTED_MODULE_4__.d)(!0,t.buttonTarget)},this.buttonTarget=n,this.textTarget=o,this.csrfToken=i,this.omniauthToken=a,this.handleGoogleResponse=this.handleGoogleResponse.bind(this),this.handleError=this.handleError.bind(this),this.init()}return _createClass(GoogleLogin,[{key:"init",value:function(){js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("G_AUTH2_MIGRATION","enforce"),Object(lib_social_session_helpers__WEBPACK_IMPORTED_MODULE_4__.d)(!1,this.buttonTarget);var e=this.buttonTarget.dataset.googleSigninUrl;scriptjs__WEBPACK_IMPORTED_MODULE_0___default()(e,this.loadGoogleApi)}},{key:"connect",value:function(){this.textTarget&&(this.originalText=this.textTarget.innerHTML,Object(lib_social_session_helpers__WEBPACK_IMPORTED_MODULE_4__.f)(this.buttonTarget)),Object(lib_social_session_helpers__WEBPACK_IMPORTED_MODULE_4__.d)(!1,this.buttonTarget),this.login()}},{key:"login",value:function(){var e=window.location.hostname.split("."),t="".concat(e[1],".").concat(e[2]);js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove("g_state",{domain:t});var n={client_id:this.buttonTarget.dataset.appId,callback:this.handleGoogleResponse,context:this.buttonTarget.dataset.context,state_cookie_domain:this.buttonTarget.dataset.stateCookieDomain,auto_select:"true"===this.buttonTarget.dataset.autoSelect};google.accounts.id.initialize(n),google.accounts.id.prompt(this.sendDialogTriggerEvent)}},{key:"handleGoogleResponse",value:function(e){if(e&&!e.error){var t=document.getElementById("user_newsletter"),n=!1;null!==t&&"hidden"!==t.type?n=t.checked:null!==t&&"hidden"===t.type&&(n=!0),js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("g_csrf_token",this.csrfToken),axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common["X-CSRF-Token"]=this.csrfToken,axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/google_one_tap?g_csrf_token=".concat(this.csrfToken,"&state=").concat(this.omniauthToken,"&newsletter=").concat(n),e).then(this.responseSuccess).catch(this.handleError)}else this.handleError(null==e?void 0:e.error)}},{key:"processResponse",value:function processResponse(response){if(Object(lib_social_session_helpers__WEBPACK_IMPORTED_MODULE_4__.a)())return Object(lib_social_session_helpers__WEBPACK_IMPORTED_MODULE_4__.c)(response)&&eval(response.data),void Object(components_analytics_conversions_tracking__WEBPACK_IMPORTED_MODULE_5__.l)({action:components_analytics_conversions_constants_actions__WEBPACK_IMPORTED_MODULE_6__.mb,category:Object(components_analytics_conversions_tracking__WEBPACK_IMPORTED_MODULE_5__.e)(this.buttonTarget),label:"Sign_Up-Google",dataLayerCompleteAttrs:["email_address","email_hash_md5","email_hash_sha1","sign_in_type"]});Object(components_analytics_conversions_tracking__WEBPACK_IMPORTED_MODULE_5__.l)({action:components_analytics_conversions_constants_actions__WEBPACK_IMPORTED_MODULE_6__.Ab,category:Object(components_analytics_conversions_tracking__WEBPACK_IMPORTED_MODULE_5__.e)(this.buttonTarget),label:"Sign_In-Google",dataLayerCompleteAttrs:["email_address","email_hash_md5","email_hash_sha1","sign_in_type","name","country","postal_code","team_owner_email","team_seats","multiple_logins"]}),this.fromFollow?window.location.reload():"login_in_place"===response.data.message?Object(lib_helpers__WEBPACK_IMPORTED_MODULE_3__.X)("LoggedInPlace"):js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("sign_in_referrer")?window.location.assign(js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("sign_in_referrer")):window.location.reload()}},{key:"fromFollow",get:function(){return Object(lib_social_session_helpers__WEBPACK_IMPORTED_MODULE_4__.e)()}}]),GoogleLogin}()},59:function(e,t,n){"use strict";n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return f}));var _=n(27),o=n(26),i=n(13),a=n.n(i);function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.querySelector('[data-social-session-buttons-target*="text"]')||null;n.innerHTML=t||e.dataset.loadingText}function r(e,t){e?Object(_.b)(t,Object(o.c)(t,"permissions_error")):Object(_.c)(t)}function c(){var e=a.a.get("primer_for_post_login_cookie");return!(!e||!e.includes("follow_after_login"))}function l(){return"registration"===a.a.get("social_oauth_type")}function u(e){return"text/javascript; charset=utf-8"===e.headers["content-type"]}function f(){a.a.remove("social_oauth_type")}},693:function(e,t,n){},694:function(e,t,n){},695:function(e,t,n){},696:function(e,t,n){},697:function(e,t,n){}}]);
//# sourceMappingURL=sessions-b6bab22ecc0dbd7251c0.chunk.js.map