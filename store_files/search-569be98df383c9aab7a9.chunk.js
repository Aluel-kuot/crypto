(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1237:function(e,t,r){"use strict";r.r(t);var n=r(7),a=r(13),i=r.n(a),o=r(14),c=r(19),s=r(3),u=r(102);function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f(e);if(t){var a=f(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return g(this,r)}}function g(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(o,e);var t,r,n,a=d(o);function o(){var e;return l(this,o),(e=a.apply(this,arguments)).applySearchFilters=function(t){e.resetContentType(t),i.a.set("ezSearchType","internal");var r=e.searchState.getFlatQueryString(),n=e.unverifiedPath||e.changingContentType()?e.getNewSearchUrl(e.searchRoute,e.searchTerm,r):"".concat(window.location.pathname).concat(r);i.a.remove("infinite_scroll_offset"),window.Turbolinks.visit(n)},e.postAjaxEvent=function(t){e.postAjax(t.detail.dataHash)},e.searchPaginationEvent=function(e){Object(s.X)("PaginationChanged",{page:e.detail.page,stateKey:"search-state",extraStates:["filterState"],ajaxEventName:"PostSearchAjax",resultsTarget:document.querySelector(".search-results")})},e.performSearch=function(t){var r=t.detail.searchPath,n=t.detail.searchRoute?t.detail.searchRoute:e.searchRoute,a=e.normalizeTerm(t.detail.term);e.resetContentType(t);var o=t.detail.useSearchState?e.searchState.getFlatQueryString().substring(1):null,c=r||e.getNewSearchUrl(n,a,o);i.a.remove("infinite_scroll_offset"),!0===t.detail.searchInNewTab?window.open(c,"_blank"):window.Turbolinks.visit(c)},e.resetContentType=function(t){e.contentType=t.detail.contentType||e.contentType,t.detail.contentType&&i.a.set("content_type",t.detail.contentType),e.changingContentType()&&e.searchState.resetStateToDefault()},e.postAjax=function(t){e.searchState.updateStateValue("page",t.page);var r=e.searchState.getFlatQueryString(),n=e.getNewSearchUrl(e.searchRoute,e.searchTerm,r);e.searchType&&i.a.set("ezSearchType",e.searchType),window.location.assign(n)},e.trackSearchClick=function(t){var r=t.target.closest(".search-results .ez-search-results .ez-resource-grid__item");r&&Object(s.X)(c.a.search.click,{resourceId:r.getAttribute("data-item-id"),resourcePosition:r.getAttribute("data-position"),resourcePro:r.getAttribute("data-pro"),searchTerm:e.searchTerm})},e.trackSponsoredSearchClick=function(t){var r=t.target.closest(".search-results .ez-sponsored-results .ez-resource-grid__item");r&&Object(s.X)(c.a.search.sponsored_click,{resourceId:r.getAttribute("data-item-id"),resourcePosition:r.getAttribute("data-position"),resourcePro:"",searchTerm:e.searchTerm,sponsored:!0})},e}return t=o,(r=[{key:"connect",value:function(){this.searchState=new u.a,this.searchFormInput=document.querySelector('[data-search-form-target="input"]'),this.searchFormInput&&(this.contentType=this.searchFormInput.getAttribute("data-content-type"),window.location.href.indexOf("/free-png/")>-1&&(this.contentType="png")),window.addEventListener("PostSearchAjax",this.postAjaxEvent),window.addEventListener("SearchPaginationChange",this.searchPaginationEvent),window.addEventListener("Searched",this.performSearch),window.addEventListener("click",this.trackSearchClick),window.addEventListener("click",this.trackSponsoredSearchClick),window.addEventListener(c.a.search.apply_filters,this.applySearchFilters),window.addEventListener(c.a.search.update_content_type,this.resetContentType)}},{key:"disconnect",value:function(){window.removeEventListener("PostSearchAjax",this.postAjaxEvent),window.removeEventListener("SearchPaginationChange",this.searchPaginationEvent),window.removeEventListener("Searched",this.performSearch),window.removeEventListener("click",this.trackSearchClick),window.removeEventListener("click",this.trackSponsoredSearchClick),window.removeEventListener(c.a.search.apply_filters,this.applySearchFilters),window.removeEventListener(c.a.search.update_content_type,this.resetContentType)}},{key:"changingContentType",value:function(){return this.contentType!==this.searchFormInput.getAttribute("data-content-type")}},{key:"toggleSearchFilters",value:function(){var e=new CustomEvent("search:toggle_search_filters");window.dispatchEvent(e)}},{key:"getNewSearchUrl",value:function(e,t,r){if(window.location.pathname.includes("search_by_image"))return"".concat(window.location.pathname).concat(r);var n=e,a=[];return e===this.searchRoute&&a.push("qterm=".concat(t),"content_type=".concat(this.contentType)),r&&r.replace(/^\?/,"").split("&").forEach((function(e){a.push(e)})),a.length>0?"/".concat(n,"?").concat(a.join("&")):n}},{key:"footerPagerChange",value:function(e){e.preventDefault();var t=document.querySelector('[data-ez-num-pager-target="currentPage"]'),r=Object(s.k)(t)+1;Object(s.X)("SearchPaginationChange",{page:r})}},{key:"normalizeTerm",value:function(e){return encodeURIComponent(e.toLowerCase().trim().replace(/ /g,"-"))}},{key:"searchRoute",get:function(){return this.searchFormInput?this.searchFormInput.getAttribute("data-search-route"):"search"}},{key:"searchTerm",get:function(){var e=this.element.querySelector("[data-search-term]");return e?e.getAttribute("data-search-term"):""}},{key:"searchType",get:function(){var e=this.element.querySelector("[data-search-type]");return e?e.getAttribute("data-search-type"):null}},{key:"unverifiedPath",get:function(){return window.location.pathname==="/".concat(this.searchRoute)}}])&&h(t.prototype,r),n&&h(t,n),o}(o.a),y=r(83),m=r(156),S=r(293),b=r(6),T=r(9);function w(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,t){return A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},A(e,t)}function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=O(e);if(t){var a=O(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return _(this,r)}}function _(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var j=new u.a;j.addPopStateListener();var P=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(o,e);var t,r,n,a=E(o);function o(){var e;C(this,o);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=a.call.apply(a,[this].concat(r))).navigationKeyCodes=["ArrowUp","ArrowLeft","ArrowRight","ArrowDown","Enter"],e.exclusionKeyCodes=["MetaLeft","MetaRight","ControlLeft","ControlRight","AltLeft","AltRight","ShiftLeft","ShiftRight"],e.wrapperToggleClasses=["inline-filters","inline-filters__arrow","inline-filters__current"],e.focusSearchField=function(t){t.target===t.currentTarget&&e.inputTarget.focus()},e.scrollToSearch=function(){if(e.isMobile()&&Object(s.r)()){var t=e.inputTarget.getBoundingClientRect().top+window.scrollY-20;Object(s.T)(t)}},e.updateSearchSwatch=function(t){var r=t.detail.color;e.searchFormColorSwatches.forEach((function(e){e.parentElement.classList.add("ez-search-form__searched-color--active"),e.style.backgroundColor="#".concat(r)}))},e.resetColorSwatchFilter=function(){e.searchFormColorSwatches.forEach((function(e){e.parentElement.classList.remove("ez-search-form__searched-color--active"),e.style.backgroundColor=""})),Object(s.X)("resetColorSwatchFilter")},e.resizeInput=function(){e.inputTarget.value?e.hiddenInputHolderTarget.textContent=e.inputTarget.value:(e.inputTarget.placeholder=e.savedPlaceholder||e.inputTarget.placeholder,e.inputTarget.setAttribute("aria-label",e.savedPlaceholder||e.inputTarget.placeholder),e.hiddenInputHolderTarget.textContent=e.inputTarget.placeholder),e.inputTarget.style.width="".concat(e.hiddenInputWidth||1,"px"),Object(s.w)()&&e.repositionColorSwatch()},e.repositionColorSwatch=function(){e.searchFormColorSwatches.forEach((function(t){t.parentElement.style.left="".concat(e.hiddenInputWidth||1,"px")}))},e.handleInputClick=function(){e.inputTarget.value.length>=2&&e.queryAutocomplete(e.inputTarget.value)},e.removeAutoFocus=function(t){e.element.classList.remove("is-auto-focused")},e.setTogglesFromState=function(){var t=j.getRawParamKeys();w(e.element.querySelectorAll(".ez-input--checkbox input")).forEach((function(r){var n=r.closest(".ez-input--checkbox").getAttribute("data-filter-param");t.includes(n)&&e.setActiveFilter(r)}))},e.clearPreviousSearches=function(){e.previousSearchesTarget.classList.add("is-hidden"),window.localStorage.removeItem("previous_searches")},e.handleFilterClick=function(t){e.wrapperToggleClasses.forEach((function(r){t.target.classList.contains(r)&&e.toggleInlineFilters()}))},e.setActiveFilter=function(t){var r=w(e.element.querySelectorAll("input")),n=t.closest(".inline-filters__item");r.forEach((function(e){e.checked=!1})),t.checked=!0,Object(s.n)()<=635?(e.currentLabelTarget.innerHTML="",e.currentLabelTarget.appendChild(n.querySelector("svg").cloneNode(!0))):e.currentLabelTarget.textContent=n.dataset.selected,e.inputTarget.placeholder=n.dataset.searchSelected,e.inputTarget.setAttribute("aria-label",n.dataset.searchSelected),e.hasPopularSearchesLinkTarget&&(e.popularSearchesLinkTarget.dataset.popularTypes.includes(t.value)?e.popularSearchesTarget.classList.remove("is-hidden"):e.popularSearchesTarget.classList.add("is-hidden"),e.popularSearchesLinkTarget.href=n.dataset.popularSearchPath,e.popularSearchesLinkTarget.textContent=n.dataset.popularSearchText,e.popularSearchesLinkTarget.setAttribute("data-english-label",n.dataset.englishLabel)),Object(s.X)(c.a.search.update_content_type,{contentType:t.value})},e.handleFilterOptionClick=function(t){e.setActiveFilter(t.target),j.omittedFromState(t.target.getAttribute("name"))||j.updateParamKey("".concat(t.target.getAttribute("name"),"-").concat(t.target.getAttribute("value"))),e.toggleInlineFilters(),document.body.classList.contains("searches-show")?Object(s.v)()?Object(s.M)("content_type",t.target.value):j.omittedFromState(t.target.getAttribute("name"))?Object(s.X)(c.a.search.apply_filters,{contentType:t.target.value}):e.submit(t):(e.updateContentType(t.target.value),e.autoFocusSearchForm()),e.trackContentTypeSelection(t.target)},e.handlePopularSearchesLinkClick=function(t){e.trackPopularSearchClick(t)},e.toggleInlineFilters=function(){e.inlineFiltersTarget.classList.toggle("is-open")},e.blurInlineFilters=function(t){e.inlineFiltersTarget.classList.contains("is-open")&&!t.target.closest(".ez-search-form .inline-filters")&&e.toggleInlineFilters()},e.handleInputKeyUp=function(t){e.exclusionKeyCodes.includes(t.code)||e.navigationKeyCodes.includes(t.code)||e.checkAndToggleIsTyped(),Object(s.w)()&&e.searchFormColorSwatches.forEach((function(e){""!==e.style.backgroundColor&&setTimeout((function(){e.parentElement.classList.add("ez-search-form__searched-color--active")}),600)})),e.navigationKeyCodes.includes(t.code)&&document.querySelector(".ez-search-form__suggestions li")?e.navigateSuggestions(t.code):!e.exclusionKeyCodes.includes(t.code)&&e.inputTarget.value.length>=2?e.queryAutocomplete(e.inputTarget.value):""!==e.autocompleteSuggestionsTarget.innerHTML&&e.resetAutocomplete()},e.handleInputKeyDown=function(t){t.metaKey&&"Enter"===t.code&&e.submit(t)},e.handleSuggestionClick=function(t){e.inputTarget.value=t.currentTarget.textContent,e.submit(t),e.trackAutoSuggestSearch(t)},e.navigateSuggestions=function(t){var r=e.autocompleteSuggestionsTarget,n=r.querySelector("li.is-active"),a=e.previousSearchTermsTarget,i=a.querySelector("li.is-active"),o=function(t){var r=e.autocompleteSuggestionsTarget.querySelector("li.is-active");r||(r=e.previousSearchTermsTarget.querySelector("li.is-active")),r&&r.classList.remove("is-active"),t&&(t.classList.add("is-active"),e.inputTarget.value=t.textContent)},c=function(t){e.previousSearchesTarget.classList.contains("is-hidden")?o("navDown"===t?r.querySelector("li:first-of-type"):r.querySelector("li:last-of-type")):o(a.querySelector("li:first-of-type"))};"ArrowUp"===t?i?o(r.querySelector("li:last-of-type")):n&&n.previousSibling?o(n.previousSibling):c("navUp"):"ArrowDown"===t?n&&n.nextSibling?o(n.nextSibling):n&&!n.nextSibling?c("navDown"):o(r.querySelector("li:first-of-type")):"ArrowRight"===t?i&&(i.nextElementSibling&&(Object(s.n)()<=750||i.getBoundingClientRect().top===i.nextElementSibling.getBoundingClientRect().top)?o(i.nextElementSibling):o(a.querySelector("li:first-of-type"))):"ArrowLeft"===t?function(){if(i)if(i.previousElementSibling)o(i.previousElementSibling);else if(Object(s.n)()<=750)o(a.querySelector("li:last-of-type"));else{var e,t=i.getBoundingClientRect().top;a.querySelectorAll("li").forEach((function(r){return r.getBoundingClientRect().top===t&&(e=r,!0)})),o(e)}}():"Enter"===t&&e.resetAutocomplete()},e.resetAutocomplete=function(){e.data.set("lastTerm",""),e.autocompleteSuggestionsTarget.innerHTML="",e.formTarget.classList.remove("is-suggesting")},e.queryAutocomplete=function(t){if(t!==e.data.get("lastTerm")){e.data.set("lastTerm",e.inputTarget.value);var r=new XMLHttpRequest,n=e.inputTarget.getAttribute("data-autocomplete-content-type");r.open("GET","".concat(e.autocompleteUrl,"?term=").concat(encodeURI(t),"&content_type=").concat(n),!0),r.setRequestHeader("Content-Type","text/plain"),r.onload=function(){try{e.renderAutocomplete(JSON.parse(r.response),t)}catch(n){console.error(n)}},r.send()}},e}return t=o,r=[{key:"connect",value:function(){window.EezyStickyScrollPositionHelper||(window.EezyStickyScrollPositionHelper=S.a),this.autocompleteUrl=this.inputTarget.dataset.autocompleteSource,this.isMobile()||this.autoFocusSearchForm(),!this.isMobile()&&window.EezyScrollPositionHelper&&window.EezyScrollPositionHelper.allowFocus()&&window.EezyScrollPositionHelper.resetScrollPosition(),Object(s.w)()&&(this.searchFormColorSwatches=document.querySelectorAll('[data-search-form-target="searchedColor"]'),window.addEventListener("updateEzSearchFormColorSwatch",this.updateSearchSwatch)),this.hasInlineFiltersTarget&&this.setupInlineFilters(),this.checkAndToggleIsTyped(),this.inputTarget.classList.add("is-ready"),Object(s.r)()&&this.clearSearchFiltersHidden(),this.inputTarget.addEventListener("blur",this.resizeInput),this.inputTarget.addEventListener("keyup",this.resizeInput),this.inputTarget.addEventListener("keydown",this.resizeInput),this.inputTarget.addEventListener("click",this.removeAutoFocus),this.inputTarget.addEventListener("keydown",this.removeAutoFocus),window.addEventListener(c.a.search.clear_searches,this.clearPreviousSearches),this.inputTarget.value&&this.resizeInput(),this.setPreviousSearches(),this.inputTarget.addEventListener("click",this.handleInputClick),this.flagLoaded(),this.trackSitelinksSearch()}},{key:"disconnect",value:function(){document.removeEventListener("click",this.blurInlineFilters),this.inputTarget.removeEventListener("blur",this.resizeInput),this.inputTarget.removeEventListener("keyup",this.resizeInput),this.inputTarget.removeEventListener("keydown",this.resizeInput),this.inputTarget.removeEventListener("click",this.removeAutoFocus),this.inputTarget.removeEventListener("keydown",this.removeAutoFocus),window.removeEventListener(c.a.search.clear_searches,this.clearPreviousSearches),window.removeEventListener("updateEzSearchFormColorSwatch",this.updateSearchSwatch),this.inputTarget.removeEventListener("click",this.handleInputClick)}},{key:"setupInlineFilters",value:function(){this.setLandingPageInlineFilterDefaults(),document.addEventListener("click",this.blurInlineFilters)}},{key:"hiddenInputWidth",get:function(){return Math.ceil(this.hiddenInputHolderTarget.getBoundingClientRect().width)}},{key:"clearSearchFiltersHidden",value:function(){i.a.remove("ezSearchFiltersHidden")}},{key:"autoFocusSearchForm",value:function(){var e=this.inputTarget.value;this.inputTarget.value="",this.inputTarget.focus(),this.inputTarget.value=e,this.element.classList.add("is-auto-focused")}},{key:"setLandingPageInlineFilterDefaults",value:function(){document.body.classList.contains("resource-landing")?j.resetStateToDefault():this.setTogglesFromState()}},{key:"setPreviousSearches",value:function(){var e=JSON.parse(this.previousSearchTermsTarget.dataset.recentSearches);if(e.length>0)this.addPreviousSearchElements(e,!1);else{var t=window.localStorage.getItem("previous_searches");if(t){var r=JSON.parse(t);this.addPreviousSearchElements(r,!0)}else this.previousSearchesTarget.classList.add("is-hidden")}}},{key:"addPreviousSearchElements",value:function(e,t){for(var r=0;r<e.length;r+=1){var n=t?JSON.parse(e[r]):e[r],a='\n        <li class="ez-btn ez-btn--light ez-btn--small" data-action="click->search-form#handleSuggestionClick"\n            data-content-type="'.concat(n.contentType,'">').concat(n.term,"</li>");this.previousSearchTermsTarget.insertAdjacentHTML("beforeend",a)}}},{key:"handlePreviousClickBlur",value:function(e){e.preventDefault()}},{key:"trackContentTypeSelection",value:function(e){Object(b.k)({element:e,data:{action:T.lc,label:e.value,category:document.body.dataset.conversionsCategory}})}},{key:"updateContentType",value:function(e){this.inputTarget.setAttribute("data-content-type",e),Object(s.X)(c.a.search.update_content_type,{contentType:e})}},{key:"trackPopularSearchClick",value:function(e){var t=this.inputTarget.getAttribute("data-content-type"),r=e.target.getAttribute("data-english-label");Object(b.k)({element:e.target,data:{action:T.Ob,label:"Link-".concat(r),content_type:"Content-".concat(t)}})}},{key:"checkAndToggleIsTyped",value:function(){this.searchInputContents?this.element.classList.add("is-typed"):this.element.classList.remove("is-typed")}},{key:"renderAutocomplete",value:function(e,t){var r=this;this.autocompleteSuggestionsTarget.innerHTML="",this.formTarget.classList.add("is-suggesting"),!e.length>0?this.resetAutocomplete():(i.a.set("last_search_autocomplete_results",e,{expires:1}),Object.keys(e).forEach((function(n){var a=document.createElement("LI"),i=t.toLowerCase();e[n].indexOf(i)>=0?a.innerHTML=e[n].replace(i,"<strong>".concat(i,"</strong>")):a.innerHTML=e[n],a.dataset.action="mousedown->search-form#handleSuggestionClick",r.autocompleteSuggestionsTarget.appendChild(a)})))}},{key:"isMobile",value:function(){return document.body.classList.contains("is-mobile")}},{key:"resetPagination",value:function(){j.updateStateValue("page",1)}},{key:"submitViaButton",value:function(e){e.preventDefault(),this.submit(e)}},{key:"submit",value:function(e){if(0!==this.inputTarget.value.length&&!this.element.hasAttribute("data-disable-form-submit")){this.resetPagination();var t={term:this.inputTarget.value,searchRoute:this.inputTarget.getAttribute("data-search-route"),useSearchState:!0,contentType:this.inputTarget.getAttribute("data-content-type")};e.metaKey&&e.code&&"Enter"===e.code&&(t.searchInNewTab=!0),i.a.set("ezSearchType","internal"),Object(s.X)("Searched",t),this.savePreviousSearch(t),this.trackSearchComplete(),Object(y.b)({searchTerm:this.inputTarget.value}),Object(m.a)()}}},{key:"savePreviousSearch",value:function(e){var t=JSON.parse(window.localStorage.getItem("previous_searches"));t||(t=[]);for(var r=0;r<t.length;r+=1)if(JSON.parse(t[r]).term===e.term){t.splice(r,1);break}t.unshift(JSON.stringify(e))>6&&t.pop(),window.localStorage.setItem("previous_searches",JSON.stringify(t))}},{key:"trackManualSearchClick",value:function(e){this.element.hasAttribute("data-disable-form-submit")||Object(b.k)({element:e.target,data:{action:T.nc,label:"Terms-".concat(this.inputTarget.value),content_type:"Content-".concat(Object(s.h)())}})}},{key:"trackAutoSuggestSearch",value:function(e){Object(b.k)({element:e.target,data:{action:T.gc,label:"Terms-".concat(this.inputTarget.value),content_type:"Content-".concat(Object(s.h)())}})}},{key:"trackSearchComplete",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[".search-results__meta__results-info",".custom-search-results-header__widget__header",".search-results__header--no-results"];Object(b.l)({action:T.kc,label:"".concat(e,"Terms-").concat(this.inputTarget.value),valueElementSelector:t,valueAttribute:"search-results-count",dimensions:{content_type:"Content-".concat(Object(s.h)())}})}},{key:"trackSitelinksSearch",value:function(){if(!this.element.parentNode.parentNode.classList.contains("ez-site-header")){var e=this.fromSitelinks;"sitelinks "===e&&this.trackSearchComplete(e)}}},{key:"resultsCount",get:function(){var e=document.querySelector("[data-search-results-count]");return e?e.getAttribute("data-search-results-count"):null}},{key:"pageNumber",get:function(){var e=Object(s.j)();return e||"1"}},{key:"searchTerm",get:function(){return this.element.getAttribute("data-search-term").replace(/ /g,"-")}},{key:"searchType",get:function(){return this.element.getAttribute("data-search-type")}},{key:"searchContentType",get:function(){return this.inputTarget.getAttribute("data-content-type")}},{key:"searchInputContents",get:function(){return this.inputTarget.value}},{key:"fromSitelinks",get:function(){var e=new URLSearchParams(window.location.search).get("referral");return e&&"sitelinks_searchbox"===e?"sitelinks ":""}}],r&&L(t.prototype,r),n&&L(t,n),o}(o.a);P.targets=["form","input","submit","currentLabel","popularSearches","popularSearchesLink","inlineFilters","previousSearches","hiddenInputHolder","previousSearchTerms","autocompleteSuggestions"],n.default.register("ez-search",v),n.default.register("search-form",P)}}]);
//# sourceMappingURL=search-569be98df383c9aab7a9.chunk.js.map