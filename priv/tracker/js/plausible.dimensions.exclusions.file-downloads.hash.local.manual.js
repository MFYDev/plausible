!function(){"use strict";var s=window.location,d=window.document,f=d.currentScript,w=f.getAttribute("data-api")||new URL(f.src).origin+"/api/event";function g(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(e){}var r=f&&f.getAttribute("data-include"),i=f&&f.getAttribute("data-exclude");if("pageview"===e){var a=!r||r&&r.split(",").some(u),n=i&&i.split(",").some(u);if(!a||n)return g("exclusion rule")}var o={};o.n=e,o.u=t&&t.u?t.u:s.href,o.d=f.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var p=f.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),l=o.p||{};p.forEach(function(e){var t=e.replace("event-",""),r=f.getAttribute(e);l[t]=l[t]||r}),o.p=l,o.h=1;var c=new XMLHttpRequest;c.open("POST",w,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(o)),c.onreadystatechange=function(){4===c.readyState&&t&&t.callback&&t.callback()}}function u(e){return s.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var t=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],r=f.getAttribute("file-types"),i=f.getAttribute("add-file-types"),o=r&&r.split(",")||i&&i.split(",").concat(t)||t;function a(e){for(var t=e.target,r="auxclick"===e.type&&2===e.which,i="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;var a,n=t&&t.href&&t.href.split("?")[0];n&&(a=n.split(".").pop(),o.some(function(e){return e===a}))&&((r||i)&&plausible("File Download",{props:{url:n}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!i||(setTimeout(function(){s.href=t.href},150),e.preventDefault()))}d.addEventListener("click",a),d.addEventListener("auxclick",a);var n=window.plausible&&window.plausible.q||[];window.plausible=e;for(var p=0;p<n.length;p++)e.apply(this,n[p])}();