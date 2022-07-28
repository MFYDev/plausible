!function(){"use strict";var t,e,a,u=window.location,d=window.document,f=d.getElementById("plausible"),g=f.getAttribute("data-api")||(t=f.src.split("/"),e=t[0],a=t[2],e+"//"+a+"/api/event");function w(t){console.warn("Ignoring Event: "+t)}function r(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(u.hostname)||"file:"===u.protocol)return w("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return w("localStorage flag")}catch(t){}var a=f&&f.getAttribute("data-include"),r=f&&f.getAttribute("data-exclude");if("pageview"===t){var i=!a||a&&a.split(",").some(c),n=r&&r.split(",").some(c);if(!i||n)return w("exclusion rule")}var o={};o.n=t,o.u=e&&e.u?e.u:u.href,o.d=f.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var l=f.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),p=o.p||{};l.forEach(function(t){var e=t.replace("event-",""),a=f.getAttribute(t);p[e]=p[e]||a}),o.p=p,o.h=1;var s=new XMLHttpRequest;s.open("POST",g,!0),s.setRequestHeader("Content-Type","text/plain"),s.send(JSON.stringify(o)),s.onreadystatechange=function(){4===s.readyState&&e&&e.callback&&e.callback()}}function c(t){return u.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var i=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],n=f.getAttribute("file-types"),o=f.getAttribute("add-file-types"),l=n&&n.split(",")||o&&o.split(",").concat(i)||i;function p(t){for(var e=t.target,a="auxclick"===t.type&&2===t.which,r="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;var i,n=e&&e.href&&e.href.split("?")[0];n&&(i=n.split(".").pop(),l.some(function(t){return t===i}))&&((a||r)&&plausible("File Download",{props:{url:n}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!r||(setTimeout(function(){u.href=e.href},150),t.preventDefault()))}d.addEventListener("click",p),d.addEventListener("auxclick",p);var s=window.plausible&&window.plausible.q||[];window.plausible=r;for(var c=0;c<s.length;c++)r.apply(this,s[c])}();