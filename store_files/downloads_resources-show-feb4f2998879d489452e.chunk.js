(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1126:function(e,t,n){},1127:function(e,t,n){},1128:function(e,t,n){},1129:function(e,t,n){},1130:function(e,t,n){},1197:function(e,t,n){"use strict";n.r(t);n(1126),n(1127),n(1128),n(1129),n.p,n(1130);var o=n(7),r=(n(144),n(14)),i=n(13),a=n.n(i),c=n(23),l=n(155),u=n(3),s=n(107),d=n(19),f=n(103),p=n(6),h=n(9),y=n(38),w=n.n(y),g=n(41),b=n(82),v=n(47),m=n(49),O=n.n(m),_=n(20);function k(e,t,n,o,r,i,a){try{var c=e[i](a),l=c.value}catch(u){return void n(u)}c.done?t(l):Promise.resolve(l).then(o,r)}function j(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function a(e){k(i,o,r,a,c,"next",e)}function c(e){k(i,o,r,a,c,"throw",e)}a(void 0)}))}}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=L(e);if(t){var r=L(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return C(this,n)}}function C(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var R=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(i,e);var t,n,o,r=S(i);function i(){var e;return D(this,i),(e=r.apply(this,arguments)).clickProcessing=!1,e.previewImageTriggerClick=function(){e.sendDownloadEvent(),"editorial"===e.resourceLicense?e.freeDownload():Object(c.e)(e.element.href)},e.proJoin=function(e){a.a.set("download_size_for_checkout",e.currentTarget.dataset.size)},e.proDownload=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(t&&t.preventDefault(),!0!==e.clickProcessing){e.clickProcessing=!0;var n=e.getDownloadSize(t,null==t?void 0:t.currentTarget);e.exceededDownloadLimit?e.openDownloadLimitModal():(e.triggerDownload(t,{size:n}),e.dailyDownloadCountValue+=1),e.clickProcessing=!1,(null==t?void 0:t.currentTarget.hasAttribute("data-license-selector-credit-radio-target"))||Object(s.c)()}},e.freeDownload=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(t&&t.preventDefault(),!0!==e.clickProcessing){e.clickProcessing=!0;var n=e.getDownloadSize(t,null==t?void 0:t.currentTarget);if(Object(s.d)())e.element.dataset.dlAdModalPath&&e.setDownloadCookie(e.element.dataset.dlAdModalPath,n),e.dailyDownloadCountValue-=1,e.openReturningSigninModal();else if(e.exceededDownloadLimit)e.element.dataset.dlAdModalPath&&e.setDownloadCookie(e.element.dataset.dlAdModalPath,n),e.openDownloadLimitModal();else if(e.element.dataset.dlAdModalPath){if(e.upsellExperience)Object(u.X)(_.o);else if(e.upsellPopupIsOpen&&Object(u.X)(_.n),e.showDownloadAdPopup(),"editorial"!==e.element.getAttribute("data-license-type")&&e.showFreeAttributionSlidedown(),"original"!==n){var o=e.getDownloadFileUrl(t);e.processDlSize({url:o,size:n})}}else e.triggerDownload(t,{size:n}),"editorial"!==e.element.getAttribute("data-license-type")&&Object(u.s)()&&e.showFreeAttributionSlidedown();document.querySelector(".is-logged-in")&&Object(u.f)("customer_feedback")&&Object(s.c)(),e.clickProcessing=!1,e.upsellPopupIsOpen||(e.dailyDownloadCountValue+=1)}},e.triggerDownload=function(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=o.size,i=void 0===r?"original":r,a=o.reloadPage,c=void 0!==a&&a;Object(f.a)(e.resourceId);var l=(null==(n=null==t?void 0:t.detail)?void 0:n.size)?t.detail.size:i,u=e.getDownloadFileUrl(t);"original"===l||e.dlPopupReady?(e.mainDlBtn.classList.contains("has-spinner")||Object(g.b)(e.mainDlBtn),e.deliverFile({url:u,downloadSize:l,reloadPage:c})):e.processDlSize({url:u,size:l,reloadPage:c})},e.urlCheck=function(e){return"undefined"===typeof e.data.url},e.pollForConvertedDlSize=function(){var t=j(regeneratorRuntime.mark((function t(n){var o,r,i,a,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.fn,r=n.fnCondition,i=n.jobId,a=n.interval,t.next=3,o(i);case 3:c=t.sent;case 4:if(!r(c)){t.next=12;break}return t.next=7,e.waitForConvertedDlSize(a);case 7:return t.next=9,o(i);case 9:c=t.sent,t.next=4;break;case 12:return t.abrupt("return",c);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.waitForConvertedDlSize=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise((function(t){setTimeout(t,e)}))},e.checkSizeConversion=function(e){return w.a.get("/api/v2/resource_conversion/".concat(e))},e.spendCreditAndDownload=function(t){var n=t.event,o=t.downloadSize;Object(s.c)({onReload:!0}),e.triggerDownload(n,{size:o,reloadPage:!0}),e.creditSpent=!0},e}return t=i,n=[{key:"connect",value:function(){if(this.mainDlBtn=this.element,!this.isTurbolinksPreview){var e=window.localStorage.getItem("resource-".concat(this.resourceId));e&&(this.searchData=JSON.parse(e),window.localStorage.removeItem("resource-".concat(this.resourceId))),this.flagLoaded(),this.checkDownloadCookie()}"pro-btn"===this.element.id&&this.trackLicenseTriggerEvent()}},{key:"resourceLicense",get:function(){return document.querySelector(".ez-resource-show").dataset.resourceType}},{key:"getDownloadSize",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n="original";return e?"undefined"!==typeof e.detail.dlSize?e.detail.dlSize:t&&t.dataset&&"undefined"!==typeof t.dataset.size?t.dataset.size:n:n}},{key:"getDownloadFileUrl",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.element.getAttribute("href");return e&&"undefined"!==typeof e.detail.downloadFileUrl?e.detail.downloadFileUrl:t}},{key:"upsellExperience",get:function(){return!!Object(u.U)("first_free_download_upsell")&&!(this.dailyDownloadCountValue>0)&&!(Object(u.n)()<=1101)&&!this.upsellPopupIsOpen}},{key:"upsellPopupIsOpen",get:function(){return!!document.querySelector('[data-controller="first-download-upsell-popup"].is-active')}},{key:"showFreeAttributionSlidedown",value:function(){document.querySelector('[data-controller="free-attribution-slidedown"]')&&document.querySelector('[data-controller="free-attribution-slidedown"]').remove();var e,t=document.querySelector('[data-controller*="resource-show-main"]').getAttribute("data-resource-id");e=document.querySelector('[data-controller="resource-show-modal-view"]')?document.querySelector('[data-controller="resource-show-modal-view"]'):document.querySelector(".ez-page-wrapper__content"),Object(c.f)({url:"/resources/".concat(t,"/show_free_attr_slidedown"),destElem:e,destPos:"afterbegin",successCb:function(){Object(u.X)(d.a.show_page.reveal_free_attribution_slidedown)}})}},{key:"processDlSize",value:function(e){var t=this,n=e.url,o=e.size,r=e.reloadPage,i=void 0!==r&&r;this.mainDlBtn.classList.contains("has-spinner")||Object(g.b)(this.mainDlBtn),Object(c.b)(n,function(){var e=j(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.pollForConvertedDlSize({fn:t.checkSizeConversion,fnCondition:t.urlCheck,jobId:n.data.job_id,interval:1e3});case 2:r=e.sent,t.setS3ResponseUrlOrDeliver({url:r.data.url,size:o,reloadPage:i});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.error(e)}),{params:{size:o}})}},{key:"setS3ResponseUrlOrDeliver",value:function(e){var t=e.url,n=e.size,o=e.reloadPage,r=void 0!==o&&o,i=document.body.querySelector("#download-popup-modal .download-popup");i?(this.dlPopupReady=!0,i.setAttribute("data-download-file-url",t)):this.deliverFile({url:t,downloadSize:n,reloadPage:r})}},{key:"deliverFile",value:function(e){var t=e.url,n=e.downloadSize,o=void 0===n?"original":n,r=e.reloadPage,i=void 0!==r&&r;if(Object(p.k)({data:{action:h.G,label:Object(b.a)(),category:"Show",content_type:"Content-".concat(this.resourceContentType)}}),Object(s.a)({url:t,downloadSize:o,reloadPage:i}),this.mainDlBtn.classList.contains("has-spinner")){var a=this.mainDlBtn;"original"===o?setTimeout((function(){Object(g.a)(a),document.querySelector(".ez-drop-down--download-btn")&&document.querySelector(".ez-drop-down--download-btn").classList.add("is-closed")}),1e3):Object(g.a)(a)}}},{key:"showDownloadAdPopup",value:function(){var e=this.element.dataset.dlAdModalPath;this.element.setAttribute("remote","true"),window.addEventListener("TriggerDownload",this.triggerDownload,{once:!0}),Object(c.e)(e)}},{key:"setDownloadCookie",value:function(e,t){Object(u.J)("download_after_social_signin",e),a.a.set("download_size",t)}},{key:"checkDownloadCookie",value:function(){var e=a.a.get("download_after_social_signin"),t=a.a.get("download_size");if(!this.exceededDownloadLimit&&e&&v.a.signedIn&&!new URLSearchParams(window.location.search).has("autodl_token")){if(this.element.setAttribute("remote","true"),window.addEventListener("TriggerDownload",this.triggerDownload,{once:!0}),t&&"original"!==t){var n=document.querySelector(".ez-resource-show__sidebar__download-options").dataset.downloadUrl;this.processDlSize({url:n,size:t})}Object(c.e)(e)}a.a.remove("download_after_social_signin"),a.a.remove("download_size")}},{key:"openDownloadLimitModal",value:function(){var e=this.element.dataset.dlLimitModalPath;this.element.setAttribute("remote","true"),this.inFreeTrialValue||Object(p.k)({element:this.element,data:{action:h.rb,category:"Trigger-Download_Limit-".concat(this.dailyDownloadCountValue)}}),Object(c.e)(e)}},{key:"openReturningSigninModal",value:function(){var e=this.element.dataset,t=e.returningSigninModalPath,n=e.licenseType,o=e.dlAdModalPath,r=e.dlLimitModalPath;this.element.setAttribute("remote","true"),Object(p.k)({element:this.element,data:{action:h.Bb,category:"Trigger-Download_Click"}}),window.addEventListener("TriggerFreeDownload",this.freeDownload,{once:!0}),Object(c.e)(t,null,null,null,{resource_dl_path:this.element.href,dl_size:a.a.get("download_size"),dl_license_type:n,dl_ad_modal_path:o,dl_limit_modal_path:r})}},{key:"confirmCreditSpend",value:function(e){e.preventDefault(),e.stopImmediatePropagation();var t=e.currentTarget.dataset.size||"original";this.creditSpent?this.triggerDownload(e,{size:t}):Object(l.a)(e.currentTarget.getAttribute("data-confirm-text"),this.spendCreditAndDownload,["Okay","Cancel"],{callbackArgs:{event:e,downloadSize:t}})}},{key:"bundleCreditSpend",value:function(e){e.preventDefault(),e.stopImmediatePropagation(),this.spendCreditAndDownload({event:e,downloadSize:"original"})}},{key:"isTurbolinksPreview",get:function(){return document.documentElement.hasAttribute("data-turbolinks-preview")}},{key:"resourceId",get:function(){return document.querySelector(".ez-resource-show").dataset.resourceId}},{key:"resourceType",get:function(){return document.querySelector(".ez-resource-show").dataset.resourceType}},{key:"resourceContentType",get:function(){return document.body.dataset.conversionsContentType||Object(u.h)()}},{key:"exceededDownloadLimit",get:function(){return this.dailyDownloadLimitValue&&this.dailyDownloadCountValue>=this.dailyDownloadLimitValue}},{key:"joinProClick",value:function(e){this.sendDownloadEvent();var t=Object(p.d)(e.target);Object(p.k)({element:e.target,data:{action:h.qb,category:t,label:"Pro"}});var n=e.params.completeLabel;Object(p.l)({action:h.pb,category:t,label:n||null})}},{key:"sendDownloadEvent",value:function(){var e={resourceId:this.resourceId,resourceType:this.resourceType};this.searchData&&(e=Object.assign(e,this.searchData)),Object(u.X)(d.a.download_btn.initial_click,e),Object(p.k)({element:this.element,data:{action:h.F,label:Object(b.a)(),category:"Show",content_type:"Content-".concat(this.resourceContentType)}})}},{key:"trackFreeLicenseSelectorTrigger",value:function(e){Object(p.k)({element:e.currentTarget,data:{action:h.vb,category:"Trigger-Download_Click",label:Object(b.a)(),content_type:"Content-".concat(this.resourceContentType)}})}},{key:"trackLicenseTriggerEvent",value:function(e){Object(p.k)({element:this.element,data:{category:"Trigger-License_Toggle",action:h.vb,label:"Free",content_type:"".concat(Object(u.h)(e))}})}},{key:"trackLicenseCompleteEvent",value:function(e){Object(p.k)({element:this.element,data:{category:"Trigger-License_Toggle",action:h.ub,label:"License-".concat(this.element.dataset.licenseType),content_type:"".concat(Object(u.h)(e))}})}},{key:"sendDownloadEventAndRedirect",value:function(e){e.preventDefault(),this.sendDownloadEvent(),O.a.visit(this.element.href)}}],n&&P(t.prototype,n),o&&P(t,o),i}(r.a);R.values={dailyDownloadCount:Number,dailyDownloadLimit:Number,inFreeTrial:Boolean};var A=n(18);function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function B(e,t){return B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},B(e,t)}function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=I(e);if(t){var r=I(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return F(this,n)}}function F(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var q=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(i,e);var t,n,o,r=x(i);function i(){var e;return z(this,i),(e=r.apply(this,arguments)).showUpsellProPopup=function(){e.element.classList.add("is-active"),e.mainDownloadBtn.classList.remove("ez-btn--lg"),window.addEventListener("click",e.watchForNextClick),e.dropDownDownloadBtn&&(e.element.classList.add("has-download-dropdown"),e.dropDownDownloadBtn.classList.remove("is-open"),e.dropDownDownloadBtn.classList.add("is-closed","ez-drop-down--upsell")),Object(p.k)({data:{category:"Trigger-1st_Download",action:h.qb,label:"Free"}})},e.hideUpsellProPopup=function(){e.element.classList.remove("is-active","has-download-dropdown"),e.dropDownDownloadBtn&&(e.mainDownloadBtn.classList.add("ez-btn--lg"),e.dropDownDownloadBtn.classList.remove("ez-drop-down--upsell"))},e.watchForNextClick=function(t){var n=t.target.closest(".download-upsell"),o=t.target.closest('[data-resource-show-main-target="photoSizeBtn"]');n||o||e.hideUpsellProPopup()},e.joinProComplete=function(){e.hideUpsellProPopup(),Object(p.l)({action:h.pb,category:"Trigger-1st_Download"})},e}return t=i,(n=[{key:"connect",value:function(){this.mainDownloadBtn=this.element.querySelector('[data-controller="download-btn"]'),this.dropDownDownloadBtn=document.querySelector(".ez-drop-down--download-btn"),window.addEventListener(_.o,this.showUpsellProPopup),window.addEventListener(_.n,this.hideUpsellProPopup)}},{key:"disconnect",value:function(){window.removeEventListener(_.o,this.showUpsellProPopup),window.removeEventListener(_.n,this.hideUpsellProPopup),window.removeEventListener("click",this.watchForNextClick)}}])&&E(t.prototype,n),o&&E(t,o),i}(A.b),M=n(29);function U(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function H(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function N(e,t,n){return N="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=X(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}},N(e,t,n||e)}function V(e,t){return V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},V(e,t)}function J(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=X(e);if(t){var r=X(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return W(this,n)}}function W(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function X(e){return X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},X(e)}var G=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(i,e);var t,n,o,r=J(i);function i(){return U(this,i),r.apply(this,arguments)}return t=i,(n=[{key:"connect",value:function(){N(X(i.prototype),"connect",this).call(this)}},{key:"close",value:function(e){var t=this;N(X(i.prototype),"close",this).call(this,e,(function(){var e=t.element.querySelector('[data-action*="click->returning-signin#downloadAnyway"]');e&&e.click()}))}},{key:"downloadAnyway",value:function(e){e.preventDefault(),e.stopPropagation();var t=e.target.dataset.dlSize;Object(u.X)("TriggerFreeDownload",{dlSize:t}),this.denyLogin()}},{key:"denyLogin",value:function(){var e=new Date;e.setTime(e.getTime()+18e5),a.a.set("returning_signin_denied","true",{expires:e})}}])&&H(t.prototype,n),o&&H(t,o),i}(M.a),K=function(){return parseInt(a.a.get("pop_count"),10)||0};function Q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Z(e,t){return Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Z(e,t)}function $(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=te(e);if(t){var r=te(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return ee(this,n)}}function ee(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function te(e){return te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},te(e)}var ne=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(i,e);var t,n,o,r=$(i);function i(){var e;return Q(this,i),(e=r.apply(this,arguments)).freeDownload=function(t){t.preventDefault(),e.hasHitDownloadLimit()?e.openDownloadLimitModal():e.downloadButtonTarget.dataset.dlAdModalPath?(e.showDownloadAdPopup(),"editorial"!==e.downloadButtonTarget.getAttribute("data-license-type")&&e.showFreeAttributionSlidedown()):e.triggerDownload()},e.triggerDownload=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.hasHitDownloadLimit()&&e.openDownloadLimitModal(),Object(f.a)(e.resourceId);var o=t&&"undefined"!==typeof t.detail.downloadFileUrl?t.detail.downloadFileUrl:e.downloadButtonTarget.getAttribute("href");n?(window.open(o,"_blank"),Object(p.l)({action:h.G,label:Object(b.a)(),category:"Show",dimensions:{content_type:"Content-".concat(Object(u.h)())}}),window.setTimeout((function(){window.location.reload()}),1e3)):(Object(p.k)({element:e.element,data:{action:h.G,label:Object(b.a)(),category:"Show",content_type:"Content-".concat(Object(u.h)())}}),window.location.href=o)},e.spendCreditAndDownload=function(t){e.triggerDownload(t,!0),e.creditSpent=!0},e}return t=i,(n=[{key:"connect",value:function(){if(!this.isTurbolinksPreview){var e=window.localStorage.getItem("resource-".concat(this.resourceId));e&&(this.searchData=JSON.parse(e),window.localStorage.removeItem("resource-".concat(this.resourceId))),this.flagLoaded()}}},{key:"showFreeAttributionSlidedown",value:function(){document.querySelector('[data-controller="free-attribution-slidedown"]')&&document.querySelector('[data-controller="free-attribution-slidedown"]').remove();var e=document.querySelector('[data-controller*="resource-show-main"]').getAttribute("data-resource-id"),t=document.querySelector(".ez-page-wrapper__content");Object(c.f)({url:"/resources/".concat(e,"/show_free_attr_slidedown"),destElem:t,destPos:"afterbegin",successCb:function(){Object(u.X)(d.a.show_page.reveal_free_attribution_slidedown)}})}},{key:"curPopCount",get:function(){return K()}},{key:"hasHitDownloadLimit",value:function(){return!v.a.isPro&&this.curPopCount>=3}},{key:"showDownloadAdPopup",value:function(){var e=this.downloadButtonTarget.dataset.dlAdModalPath;this.downloadButtonTarget.setAttribute("remote","true"),window.addEventListener("TriggerDownload",this.triggerDownload,{once:!0}),Object(c.e)(e)}},{key:"openDownloadLimitModal",value:function(){var e=this.downloadButtonTarget.dataset.dlLimitModalPath;this.downloadButtonTarget.setAttribute("remote","true"),Object(c.e)(e)}},{key:"confirmCreditSpend",value:function(e){e.preventDefault(),e.stopImmediatePropagation(),this.creditSpent?this.triggerDownload():Object(l.a)(e.currentTarget.getAttribute("data-confirm-text"),this.spendCreditAndDownload,["Okay","Cancel"])}},{key:"sendDownloadEvent",value:function(){var e={resourceId:this.resourceId,resourceType:this.resourceType};this.searchData&&(e=Object.assign(e,this.searchData)),Object(u.X)(d.a.download_btn.initial_click,e),Object(p.k)({element:this.element,data:{action:h.F,label:Object(b.a)(),category:"Show",content_type:"Content-".concat(Object(u.h)())}})}},{key:"sendDownloadCompleteEvent",value:function(){Object(p.k)({element:this.element,data:{action:h.G,label:Object(b.a)(),category:"Show",content_type:"Content-".concat(Object(u.h)())}})}},{key:"joinProClick",value:function(e){this.sendDownloadEvent();var t=Object(p.d)(e.target);Object(p.k)({element:e.target,data:{action:h.qb,category:t,label:"Pro"}}),Object(p.l)({action:h.pb,category:t})}},{key:"sendDownloadEventAndRedirect",value:function(e){e.preventDefault(),this.sendDownloadEvent(),O.a.visit(this.downloadButtonTarget.href)}},{key:"isTurbolinksPreview",get:function(){return document.documentElement.hasAttribute("data-turbolinks-preview")}},{key:"resourceId",get:function(){return document.querySelector(".ez-resource-show").dataset.resourceId}},{key:"resourceType",get:function(){return document.querySelector(".ez-resource-show").dataset.resourceType}},{key:"exceededDownloadLimit",get:function(){return this.dailyDownloadLimitValue&&this.dailyDownloadCountValue>=this.dailyDownloadLimitValue}}])&&Y(t.prototype,n),o&&Y(t,o),i}(r.a);function oe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function re(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ie(e,t){return ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},ie(e,t)}function ae(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=le(e);if(t){var r=le(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return ce(this,n)}}function ce(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function le(e){return le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},le(e)}ne.targets=["downloadButton"],ne.values={dailyDownloadCount:Number,dailyDownloadLimit:Number,inFreeTrial:Boolean};var ue=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ie(e,t)}(i,e);var t,n,o,r=ae(i);function i(){var e;return oe(this,i),(e=r.apply(this,arguments)).reveal=function(){e.element.style.height="".concat(e.innerTarget.offsetHeight,"px"),setTimeout((function(){e.element.classList.add("is-revealed"),e.element.style.height="auto"}),1e3)},e}return t=i,(n=[{key:"connect",value:function(){window.addEventListener(d.a.show_page.reveal_free_attribution_slidedown,this.reveal),this.sendAttributionTrigger(),this.sendJoinProTrigger()}},{key:"disconnect",value:function(){window.removeEventListener(d.a.show_page.reveal_free_attribution_slidedown,this.reveal)}},{key:"sendJoinProTrigger",value:function(){Object(p.k)({data:{action:h.qb,category:"Trigger-Attribution"}})}},{key:"sendJoinProComplete",value:function(){Object(p.k)({data:{action:h.pb,category:"Trigger-Attribution"}})}},{key:"sendAttributionTrigger",value:function(){this.sendAttribution(h.b,"Show","Free")}},{key:"sendAttributionComplete",value:function(){this.sendAttribution(h.a,"Show","Free")}},{key:"sendAttribution",value:function(e,t,n){Object(p.k)({data:{action:e,label:n,category:t,content_type:"Content-".concat(Object(u.h)())}})}}])&&re(t.prototype,n),o&&re(t,o),i}(A.b);function se(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function de(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function fe(e,t){return fe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},fe(e,t)}function pe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=ye(e);if(t){var r=ye(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return he(this,n)}}function he(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ye(e){return ye=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ye(e)}ue.targets=["inner","joinProBtn"];var we=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&fe(e,t)}(i,e);var t,n,o,r=pe(i);function i(){return se(this,i),r.apply(this,arguments)}return t=i,(n=[{key:"connect",value:function(){a.a.get("from_successful_checkout")&&a.a.remove("from_successful_checkout")}},{key:"close",value:function(){var e=this;this.element.classList.add("is-collapsed"),setTimeout((function(){e.element.remove()}),1500)}}])&&de(t.prototype,n),o&&de(t,o),i}(A.b),ge=n(299),be=n.n(ge);function ve(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function me(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Oe(e,t,n){return Oe="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=De(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}},Oe(e,t,n||e)}function _e(e,t){return _e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_e(e,t)}function ke(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=De(e);if(t){var r=De(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return je(this,n)}}function je(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function De(e){return De=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},De(e)}var Pe=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_e(e,t)}(i,e);var t,n,o,r=ke(i);function i(){var e;return ve(this,i),(e=r.apply(this,arguments)).dlAdCountdown=function(){Number.isNaN(e.count)?e.finishAndDownload():(e.count-=1,e.count<0?e.finishAndDownload():(e.countTarget.innerHTML=e.count.toString(),setTimeout(e.dlAdCountdown,1e3)))},e}return t=i,(n=[{key:"connect",value:function(){Oe(De(i.prototype),"connect",this).call(this),this.count=parseInt(this.countTarget.innerHTML,10),this.hasAdTemplateTarget&&this.initAd(),this.setupAdCountdown()}},{key:"close",value:function(e){Oe(De(i.prototype),"close",this).call(this,e,(function(){}),(function(){return Object(s.c)({manualTrigger:!0})}))}},{key:"initAd",value:function(){var e=this;this.adsScriptLoaded=!1;var t=this.adTemplateTarget.innerHTML;this.adWrapTarget.insertAdjacentHTML("beforeend",t);var n=setInterval((function(){e.properBuildSlotsReady&&!e.adsScriptLoaded&&(window.properBuildSlots(),e.adsScriptLoaded=!0),e.properBuildSlotsReady&&clearInterval(n)}),100)}},{key:"properBuildSlotsReady",get:function(){return"undefined"!==typeof window.properBuildSlots}},{key:"setupAdCountdown",value:function(){var e=this;setTimeout((function(){e.dlAdCountdown()}),1e3),new be.a.Circle('[data-download-popup-target="timer"]',{strokeWidth:7,easing:"easeInOut",duration:1e3*this.count,color:"#999999",trailColor:"#cccccc",trailWidth:7,svgStyle:null}).animate(1)}},{key:"finishAndDownload",value:function(){var e=this.downloadPopupContentTarget.dataset,t=e.dlSize,n=e.downloadFileUrl;this.setUpAdFinish(),Object(u.X)("TriggerDownload",{size:t,downloadFileUrl:n})}},{key:"setUpAdFinish",value:function(){this.element.querySelector("#download-popup-modal").classList.remove("is-counting-down"),this.element.removeAttribute("data-disable-easy-close"),this.addHiddenClass(this.timerWrapTarget),this.removeHiddenClass(this.upsellMessageTarget),this.downloadPopupContentTarget.classList.add("is-complete"),Object(p.k)({data:{action:h.qb,category:"Trigger-Download_Complete",label:"Message-".concat(this.upsellWrapperTarget.dataset.upsellLabel)}})}},{key:"addHiddenClass",value:function(e){e.classList.add("is-hidden")}},{key:"removeHiddenClass",value:function(e){e.classList.remove("is-hidden")}},{key:"trackJoinProClick",value:function(){var e=this.upsellWrapperTarget.dataset.upsellLabel;"Bundle"===e?a.a.set("join_pro_passthrough_label","Message-".concat(e)):Object(p.l)({action:h.pb,category:"Trigger-Download_Complete",label:"Message-".concat(e)})}}])&&me(t.prototype,n),o&&me(t,o),i}(M.a);function Te(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Se(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Ce(e,t,n){return Ce="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ze(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}},Ce(e,t,n||e)}function Le(e,t){return Le=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Le(e,t)}function Re(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=ze(e);if(t){var r=ze(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Ae(this,n)}}function Ae(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ze(e){return ze=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ze(e)}Pe.targets=["timer","count","adWrap","adTemplate","finishIcon","downloadPopupContent","upsellMessage","upsellWrapper","timerWrap"];var Ee=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Le(e,t)}(i,e);var t,n,o,r=Re(i);function i(){var e;Te(this,i);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=r.call.apply(r,[this].concat(n))).category="Trigger-Download_Limit-10",e}return t=i,(n=[{key:"connect",value:function(){Ce(ze(i.prototype),"connect",this).call(this),Object(p.k)({data:{action:h.qb,category:this.category,label:"Free",non_interaction:!0}})}},{key:"trackClick",value:function(){Object(p.k)({data:{action:h.pb,category:this.category}})}}])&&Se(t.prototype,n),o&&Se(t,o),i}(M.a),Be=n(315);o.default.register("download-btn",R),o.default.register("first-download-upsell-popup",q),o.default.register("returning-signin",G),o.default.register("download-btn-pricing",ne),o.default.register("free-attribution-slidedown",ue),o.default.register("post-purchase-banner",we),o.default.register("download-popup",Pe),o.default.register("daily-limit-join-pro-modal",Ee),o.default.register("free-trial-daily-limit-modal",Be.a)}}]);
//# sourceMappingURL=downloads~resources-show-feb4f2998879d489452e.chunk.js.map