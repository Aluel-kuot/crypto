(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{1317:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n(36),o=n(6),i=n(9);function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return u="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},u(e,t,n||e)}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(y,e);var t,n,r,s=f(y);function y(){return c(this,y),s.apply(this,arguments)}return t=y,(n=[{key:"connect",value:function(){u(p(y.prototype),"connect",this).call(this),this.trackTriggerEvent(),Object(o.c)()}},{key:"validateFields",value:function(){u(p(y.prototype),"validateFields",this).call(this),this.formValid?(this.trackFormComplete(),this.submit(),Object(o.l)({action:i.Ab,category:Object(o.e)(this.element),label:"Sign_In-Email",dataLayerCompleteAttrs:["email_address","email_hash_md5","email_hash_sha1","sign_in_type","name","country","postal_code","team_owner_email","team_seats","multiple_logins"]})):u(p(y.prototype),"hideSpinner",this).call(this)}},{key:"trackCreate",value:function(e){Object(o.k)({element:e.target,data:{action:i.lb}})}},{key:"trackTriggerEvent",value:function(){var e=new URLSearchParams(window.location.search).get("referring_conversions_category"),t={data:{category:e,action:i.Bb}};"Trigger-Reset_Password_Token_Invalid"!==e&&"Trigger-Devise_Failure"!==e||Object(o.k)(t)}}])&&a(t.prototype,n),r&&a(t,r),y}(r.a)}}]);
//# sourceMappingURL=238-0c9cb61b3c66392c748d.chunk.js.map