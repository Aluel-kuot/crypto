(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{107:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"a",(function(){return c})),t.d(n,"c",(function(){return s})),t.d(n,"d",(function(){return f}));var o=t(23),a=t(13),r=t.n(a),i=t(3),d=t(47);function u(e,n){var t=document.createElement("a");t.download=n,t.href=e,document.body.appendChild(t),t.click(),t.remove()}function c(e){var n=e.url,t=e.filename,a=e.downloadSize,d=void 0===a?"original":a,c=e.reloadPage,s=void 0!==c&&c,f=function(){window.setTimeout((function(){window.location.reload()}),1e3)};if(Object(i.f)("customer_feedback")){var l=parseInt(r.a.get("download_count"),10)||0;r.a.set("download_count",l+1)}"original"===d?s?(window.open(n,"_blank"),f()):window.location.href=n:Object(o.b)(n,(function(e){var o,a=e.headers["content-type"],r=new Blob([e.data],{type:a});u(window.URL.createObjectURL(r),(t||(o=n.split("\\").pop().split("/").pop()),"original"!==d?"".concat(d,"-").concat(o):o)),s&&f()}),(function(e){return console.error(e)}),{},{headers:{},mode:"cors",responseType:"blob"})}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.onReload,t=void 0!==n&&n,a=e.manualTrigger,u=void 0!==a&&a;if(!Object(i.f)("customer_feedback"))return!1;if(!d.a.signedIn)return!1;if(d.a.feedbackProvided)return!1;var c=Object(i.t)()&&!u?3e4:0;setTimeout((function(){var e=parseInt(r.a.get("download_count"),10)||0;5!==e&&15!==e||(r.a.set("page_load_feedback_modal",!0),setTimeout((function(){if(!t){var e=document.body.dataset.customerFeedbackModalPath;Object(o.e)(e)}}),c))}))}var f=function(){if(r.a.get("returning_signin_denied"))return!1;if(document.querySelector("#signup-modal"))return!1;if(d.a.signedIn)return!1;var e=function(e){return!e||e.includes("new")};return!(e(r.a.get("user_status-start"))&&e(r.a.get("user_status-seen"))&&e(r.a.get("user_status-updated")))}}}]);
//# sourceMappingURL=download~ac606b3e-c2b6e81544a9b5e80e22.chunk.js.map