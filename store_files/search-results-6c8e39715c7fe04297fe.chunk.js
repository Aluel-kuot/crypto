(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{215:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(14),o=r(13),a=r.n(o),c=r(83),u=r(156),i=r(102),f=r(3),s=r(6),l=r(9);function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function y(t,e){return y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},y(t,e)}function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=v(t);if(e){var o=v(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return g(this,r)}}function g(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var d=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(g,t);var e,r,n,o=b(g);function g(){return h(this,g),o.apply(this,arguments)}return e=g,(r=[{key:"connect",value:function(){this.searchState=new i.a,this.flagLoaded()}},{key:"sendClickEvent",value:function(t){var e=this.getTagTitle(t.target);Object(s.k)({element:t.target,data:{action:l.sb,label:"Terms-".concat(e),content_type:"Content-".concat(Object(f.h)())}}),Object(c.b)({searchTerm:e}),Object(u.a)()}},{key:"performSearch",value:function(t){this.searchState.updateStateValue("page",1),this.searchState.resetStateToDefault();var e={term:this.getTagTitle(t.target),searchPath:this.getSearchPath(t.target),useSearchState:!0};t.metaKey&&t.code&&"Enter"===t.code&&(e.searchInNewTab=!0),a.a.set("ezSearchType","external"),Object(f.X)("Searched",e)}},{key:"getTagTitle",value:function(t){return t.getAttribute("title").trim()}},{key:"getSearchPath",value:function(t){return t.getAttribute("href")}},{key:"searchTerm",get:function(){var t=document.querySelector(".ez-search-form__input");if(t)return t.getAttribute("value")}}])&&p(e.prototype,r),n&&p(e,n),g}(n.a)}}]);
//# sourceMappingURL=search-results-6c8e39715c7fe04297fe.chunk.js.map