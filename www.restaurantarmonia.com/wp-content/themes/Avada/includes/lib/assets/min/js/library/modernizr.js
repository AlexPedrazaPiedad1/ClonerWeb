/*!
 * modernizr v3.12.0
 * Build https://modernizr.com/download?-applicationcache-audio-backgroundsize-borderimage-borderradius-boxshadow-canvas-canvastext-cssanimations-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-flexbox-fontface-generatedcontent-geolocation-hashchange-history-hsla-inlinesvg-input-inputtypes-localstorage-multiplebgs-opacity-postmessage-rgba-sessionstorage-smil-svgclippaths-textshadow-touchevents-video-webgl-websockets-websqldatabase-webworkers-addtest-atrule-domprefixes-hasevent-load-mq-prefixed-prefixedcss-prefixes-printshiv-setclasses-testallprops-testprop-teststyles-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera
 *  Veeck

 * MIT License
 */
!function(e,t,n,o){var r=[],a={_version:"3.12.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){r.push({name:e,fn:t,options:n})},addAsyncTest:function(e){r.push({name:null,fn:e})}},i=function(){};i.prototype=a,i=new i;var s=[];function c(e,t){return typeof e===t}var l,d,u=n.documentElement,p="svg"===u.nodeName.toLowerCase();function f(e){var t=u.className,n=i._config.classPrefix||"";if(p&&(t=t.baseVal),i._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}i._config.enableClasses&&(e.length>0&&(t+=" "+n+e.join(" "+n)),p?u.className.baseVal=t:u.className=t)}function m(e,t){if("object"==typeof e)for(var n in e)l(e,n)&&m(n,e[n]);else{var o=(e=e.toLowerCase()).split("."),r=i[o[0]];if(2===o.length&&(r=r[o[1]]),void 0!==r)return i;t="function"==typeof t?t():t,1===o.length?i[o[0]]=t:(!i[o[0]]||i[o[0]]instanceof Boolean||(i[o[0]]=new Boolean(i[o[0]])),i[o[0]][o[1]]=t),f([(t&&!1!==t?"":"no-")+o.join("-")]),i._trigger(e,t)}return i}l=c(d={}.hasOwnProperty,"undefined")||c(d.call,"undefined")?function(e,t){return t in e&&c(e.constructor.prototype[t],"undefined")}:function(e,t){return d.call(e,t)},a._l={},a.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),i.hasOwnProperty(e)&&setTimeout(function(){i._trigger(e,i[e])},0)},a._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},i._q.push(function(){a.addTest=m});var h="Moz O ms Webkit",v=a._config.usePrefixes?h.split(" "):[];a._cssomPrefixes=v;var g=function(e){var n,r=L.length,a=t.CSSRule;if(void 0===a)return o;if(!e)return!1;if((n=(e=e.replace(/^@/,"")).replace(/-/g,"_").toUpperCase()+"_RULE")in a)return"@"+e;for(var i=0;i<r;i++){var s=L[i];if(s.toUpperCase()+"_"+n in a)return"@-"+s.toLowerCase()+"-"+e}return!1};a.atRule=g;var y=a._config.usePrefixes?h.toLowerCase().split(" "):[];function T(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}a._domPrefixes=y;var b,x=(b=!("onblur"in u),function(e,t){var n;return!!e&&(t&&"string"!=typeof t||(t=T(t||"div")),!(n=(e="on"+e)in t)&&b&&(t.setAttribute||(t=T("div")),t.setAttribute(e,""),n="function"==typeof t[e],t[e]!==o&&(t[e]=o),t.removeAttribute(e)),n)});a.hasEvent=x,p||function(e,t){var n,o,r=e.html5||{},a=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,i=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,s="_html5shiv",c=0,l={};function d(e,t){var n=e.createElement("p"),o=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",o.insertBefore(n.lastChild,o.firstChild)}function u(){var e=h.elements;return"string"==typeof e?e.split(" "):e}function p(e){var t=l[e[s]];return t||(t={},c++,e[s]=c,l[c]=t),t}function f(e,n,r){return n||(n=t),o?n.createElement(e):(r||(r=p(n)),!(s=r.cache[e]?r.cache[e].cloneNode():i.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e)).canHaveChildren||a.test(e)||s.tagUrn?s:r.frag.appendChild(s));var s}function m(e){e||(e=t);var r=p(e);return!h.shivCSS||n||r.hasCSS||(r.hasCSS=!!d(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),o||function(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return h.shivMethods?f(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+u().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(h,t.frag)}(e,r),e}!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",n="hidden"in e,o=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){n=!0,o=!0}}();var h={elements:r.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==r.shivCSS,supportsUnknownElements:o,shivMethods:!1!==r.shivMethods,type:"default",shivDocument:m,createElement:f,createDocumentFragment:function(e,n){if(e||(e=t),o)return e.createDocumentFragment();for(var r=(n=n||p(e)).frag.cloneNode(),a=0,i=u(),s=i.length;a<s;a++)r.createElement(i[a]);return r},addElements:function(e,t){var n=h.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),h.elements=n+" "+e,m(t)}};e.html5=h,m(t);var v,g=/^$|\b(?:all|print)\b/,y="html5shiv",T=!(o||(v=t.documentElement,void 0===t.namespaces||void 0===t.parentWindow||void 0===v.applyElement||void 0===v.removeNode||void 0===e.attachEvent));function b(e){for(var t,n=e.attributes,o=n.length,r=e.ownerDocument.createElement(y+":"+e.nodeName);o--;)(t=n[o]).specified&&r.setAttribute(t.nodeName,t.nodeValue);return r.style.cssText=e.style.cssText,r}function x(e){var t,n,o=p(e),r=e.namespaces,a=e.parentWindow;if(!T||e.printShived)return e;function i(){clearTimeout(o._removeSheetTimer),t&&t.removeNode(!0),t=null}return void 0===r[y]&&r.add(y),a.attachEvent("onbeforeprint",function(){i();for(var o,r,a,s=e.styleSheets,c=[],l=s.length,p=Array(l);l--;)p[l]=s[l];for(;a=p.pop();)if(!a.disabled&&g.test(a.media)){try{r=(o=a.imports).length}catch(e){r=0}for(l=0;l<r;l++)p.push(o[l]);try{c.push(a.cssText)}catch(e){}}c=function(e){for(var t,n=e.split("{"),o=n.length,r=RegExp("(^|[\\s,>+~])("+u().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+y+"\\:$2";o--;)(t=n[o]=n[o].split("}"))[t.length-1]=t[t.length-1].replace(r,a),n[o]=t.join("}");return n.join("{")}(c.reverse().join("")),n=function(e){for(var t,n=e.getElementsByTagName("*"),o=n.length,r=RegExp("^(?:"+u().join("|")+")$","i"),a=[];o--;)t=n[o],r.test(t.nodeName)&&a.push(t.applyElement(b(t)));return a}(e),t=d(e,c)}),a.attachEvent("onafterprint",function(){!function(e){for(var t=e.length;t--;)e[t].removeNode()}(n),clearTimeout(o._removeSheetTimer),o._removeSheetTimer=setTimeout(i,500)}),e.printShived=!0,e}h.type+=" print",h.shivPrint=x,x(t),"object"==typeof module&&module.exports&&(module.exports=h)}(void 0!==t?t:this,n);var w=function(){},S=function(){};function C(e,t,o,r){var a,i,s,c,l="modernizr",d=T("div"),f=function(){var e=n.body;return e||((e=T(p?"svg":"body")).fake=!0),e}();if(parseInt(o,10))for(;o--;)(s=T("div")).id=r?r[o]:l+(o+1),d.appendChild(s);return(a=T("style")).type="text/css",a.id="s"+l,(f.fake?f:d).appendChild(a),f.appendChild(d),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),d.id=l,f.fake&&(f.style.background="",f.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(f)),i=t(d,e),f.fake&&f.parentNode?(f.parentNode.removeChild(f),u.style.overflow=c,u.offsetHeight):d.parentNode.removeChild(d),!!i}function E(e,n,o){var r;if("getComputedStyle"in t){r=getComputedStyle.call(t,e,n);var a=t.console;if(null!==r)o&&(r=r.getPropertyValue(o));else if(a)a[a.error?"error":"log"].call(a,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else r=!n&&e.currentStyle&&e.currentStyle[o];return r}t.console&&(w=function(){var e=console.error?"error":"log";t.console[e].apply(t.console,Array.prototype.slice.call(arguments))},S=function(){var e=console.warn?"warn":"log";t.console[e].apply(t.console,Array.prototype.slice.call(arguments))}),a.load=function(){"yepnope"in t?(S("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. yepnope appears to be available on the page, so weâ€™ll use it to handle this call to Modernizr.load, but please update your code to use yepnope directly.\n See http://github.com/Modernizr/Modernizr/issues/1182 for more information."),t.yepnope.apply(t,[].slice.call(arguments,0))):w("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. Get it from http://yepnopejs.com. See http://github.com/Modernizr/Modernizr/issues/1182 for more information.")};var P,k=(P=t.matchMedia||t.msMatchMedia)?function(e){var t=P(e);return t&&t.matches||!1}:function(e){var t=!1;return C("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"===E(e,null,"position")}),t};function _(e,t){return!!~(""+e).indexOf(t)}a.mq=k;var z={elem:T("modernizr")};i._q.push(function(){delete z.elem});var N={style:z.elem.style};function M(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function $(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function j(e,n,r,a){if(a=!c(a,"undefined")&&a,!c(r,"undefined")){var i=function(e,n){var r=e.length;if("CSS"in t&&"supports"in t.CSS){for(;r--;)if(t.CSS.supports(M(e[r]),n))return!0;return!1}if("CSSSupportsRule"in t){for(var a=[];r--;)a.push("("+M(e[r])+":"+n+")");return C("@supports ("+(a=a.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"===E(e,null,"position")})}return o}(e,r);if(!c(i,"undefined"))return i}for(var s,l,d,u,p,f=["modernizr","tspan","samp"];!N.style&&f.length;)s=!0,N.modElem=T(f.shift()),N.style=N.modElem.style;function m(){s&&(delete N.style,delete N.modElem)}for(d=e.length,l=0;l<d;l++)if(u=e[l],p=N.style[u],_(u,"-")&&(u=$(u)),N.style[u]!==o){if(a||c(r,"undefined"))return m(),"pfx"!==n||u;try{N.style[u]=r}catch(e){}if(N.style[u]!==p)return m(),"pfx"!==n||u}return m(),!1}function A(e,t){return function(){return e.apply(t,arguments)}}function O(e,t,n,o,r){var a=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+v.join(a+" ")+a).split(" ");return c(t,"string")||c(t,"undefined")?j(i,t,o,r):function(e,t,n){var o;for(var r in e)if(e[r]in t)return!1===n?e[r]:c(o=t[e[r]],"function")?A(o,n||t):o;return!1}(i=(e+" "+y.join(a+" ")+a).split(" "),t,n)}i._q.unshift(function(){delete N.style}),a.testAllProps=O;var R=a.prefixed=function(e,t,n){return 0===e.indexOf("@")?g(e):(-1!==e.indexOf("-")&&(e=$(e)),t?O(e,t,n):O(e,"pfx"))},L=a._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];a._prefixes=L;a.prefixedCSS=function(e){var t=R(e);return t&&M(t)};function B(e,t,n){return O(e,o,o,t,n)}a.testAllProps=B;var D=a.testProp=function(e,t,n){return j([e],o,t,n)},F=a.testStyles=C;
/*!
{
  "name": "Touch Events",
  "property": "touchevents",
  "caniuse": "touch",
  "tags": ["media", "attribute"],
  "notes": [{
    "name": "Touch Events spec",
    "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
  }],
  "warnings": [
    "** DEPRECATED see https://github.com/Modernizr/Modernizr/pull/2432 **",
    "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
  ],
  "knownBugs": [
    "False-positive on some configurations of Nokia N900",
    "False-positive on some BlackBerry 6.0 builds â€“ https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
  ]
}
!*/
i.addTest("touchevents",function(){if("ontouchstart"in t||t.TouchEvent||t.DocumentTouch&&n instanceof DocumentTouch)return!0;var e=["(",L.join("touch-enabled),("),"heartz",")"].join("");return k(e)}),
/*!
{
  "name": "Application Cache",
  "property": "applicationcache",
  "caniuse": "offline-apps",
  "tags": ["storage", "offline"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/docs/HTML/Using_the_application_cache"
  }],
  "polyfills": ["html5gears"]
}
!*/
i.addTest("applicationcache","applicationCache"in t),
/*!
{
  "name": "HTML5 Audio Element",
  "property": "audio",
  "caniuse": "audio",
  "tags": ["html5", "audio", "media"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements"
  }]
}
!*/
function(){var e=T("audio");i.addTest("audio",function(){var t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t))}catch(e){}return t});try{e.canPlayType&&(i.addTest("audio.html",e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"")),i.addTest("audio-2.html",e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,"")),i.addTest("audio.opus",e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,"")),i.addTest("audio-3.html",e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"")),i.addTest("audio.m4a",(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,"")))}catch(e){}}(),
/*!
{
  "name": "Canvas",
  "property": "canvas",
  "caniuse": "canvas",
  "tags": ["canvas", "graphics"],
  "polyfills": ["flashcanvas", "excanvas", "slcanvas", "fxcanvas"]
}
!*/
i.addTest("canvas",function(){var e=T("canvas");return!(!e.getContext||!e.getContext("2d"))}),
/*!
{
  "name": "Canvas text",
  "property": "canvastext",
  "caniuse": "canvas-text",
  "tags": ["canvas", "graphics"],
  "polyfills": ["canvastext"]
}
!*/
i.addTest("canvastext",function(){return!1!==i.canvas&&"function"==typeof T("canvas").getContext("2d").fillText}),
/*!
{
  "name": "Hashchange event",
  "property": "hashchange",
  "caniuse": "hashchange",
  "tags": ["history"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onhashchange"
  }],
  "polyfills": [
    "jquery-hashchange",
    "moo-historymanager",
    "jquery-ajaxy",
    "hasher",
    "shistory"
  ]
}
!*/
i.addTest("hashchange",function(){return!1!==x("hashchange",t)&&(n.documentMode===o||n.documentMode>7)}),
/*!
{
  "name": "Geolocation API",
  "property": "geolocation",
  "caniuse": "geolocation",
  "tags": ["media"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation"
  }],
  "polyfills": [
    "joshuabell-polyfill",
    "webshims",
    "geo-location-javascript",
    "geolocation-api-polyfill"
  ]
}
!*/
i.addTest("geolocation","geolocation"in navigator),
/*!
{
  "name": "History API",
  "property": "history",
  "caniuse": "history",
  "tags": ["history"],
  "authors": ["Hay Kranen", "Alexander Farkas"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/html51/browsers.html#the-history-interface"
  }, {
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.history"
  }],
  "polyfills": ["historyjs", "html5historyapi"]
}
!*/
i.addTest("history",function(){var e=navigator.userAgent;return!!e&&((-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")||"file:"===location.protocol)&&(t.history&&"pushState"in t.history))});var q=T("input"),I="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),V={};
/*!
{
  "name": "Input attributes",
  "property": "input",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/input.html#input-type-attr-summary"
  }],
  "knownBugs": ["Some blackberry devices report false positive for input.multiple"]
}
!*/i.input=function(e){for(var n=0,o=e.length;n<o;n++)V[e[n]]=!!(e[n]in q);return V.list&&(V.list=!(!T("datalist")||!t.HTMLDataListElement)),V}(I),
/*!
{
  "name": "Form input types",
  "property": "inputtypes",
  "caniuse": "forms",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "polyfills": [
    "jquerytools",
    "webshims",
    "h5f",
    "webforms2",
    "nwxforms",
    "fdslider",
    "html5slider",
    "galleryhtml5forms",
    "jscolor",
    "html5formshim",
    "selectedoptionsjs",
    "formvalidationjs"
  ]
}
!*/
function(){for(var e,t,r,a=["search","tel","url","email","datetime","date","month","week","time","datetime-local","number","range","color"],s=0;s<a.length;s++)q.setAttribute("type",e=a[s]),(r="text"!==q.type&&"style"in q)&&(q.value="1)",q.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&q.style.WebkitAppearance!==o?(u.appendChild(q),r=(t=n.defaultView).getComputedStyle&&"textfield"!==t.getComputedStyle(q,null).WebkitAppearance&&0!==q.offsetHeight,u.removeChild(q)):/^(search|tel)$/.test(e)||(r=/^(url|email)$/.test(e)?q.checkValidity&&!1===q.checkValidity():"1)"!==q.value)),i.addTest("inputtypes."+e,!!r)}();
/*!
{
  "name": "postMessage",
  "property": "postmessage",
  "caniuse": "x-doc-messaging",
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/webmessaging/#crossDocumentMessages"
  }],
  "polyfills": ["easyxdm", "postmessage-jquery"],
  "knownBugs": ["structuredclones - Android 2&3 can not send a structured clone of dates, filelists or regexps"],
  "warnings": ["Some old WebKit versions have bugs. Stick with object, array, number and pixeldata to be safe."]
}
!*/
var W=!0;try{t.postMessage({toString:function(){W=!1}},"*")}catch(e){}i.addTest("postmessage",new Boolean("postMessage"in t)),i.addTest("postmessage.structuredclones",W),
/*!
{
  "name": "HTML5 Video",
  "property": "video",
  "caniuse": "video",
  "tags": ["html5", "video", "media"],
  "knownBugs": ["Without QuickTime, `Modernizr.video.h264` will be `undefined`; https://github.com/Modernizr/Modernizr/issues/546"],
  "polyfills": [
    "html5media",
    "mediaelementjs",
    "sublimevideo",
    "videojs",
    "leanbackplayer",
    "videoforeverybody"
  ]
}
!*/
function(){var e=T("video");i.addTest("video",function(){var t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t))}catch(e){}return t});try{e.canPlayType&&(i.addTest("video.html",e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,"")),i.addTest("video.h264",e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,"")),i.addTest("video.h265",e.canPlayType('video/mp4; codecs="hev1"').replace(/^no$/,"")),i.addTest("video.webm",e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")),i.addTest("video.vp9",e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,"")),i.addTest("video.hls",e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,"")),i.addTest("video.av1",e.canPlayType('video/mp4; codecs="av01"').replace(/^no$/,"")))}catch(e){}}(),
/*!
{
  "name": "WebGL",
  "property": "webgl",
  "caniuse": "webgl",
  "tags": ["webgl", "graphics"],
  "polyfills": ["jebgl", "cwebgl", "iewebgl"]
}
!*/
i.addTest("webgl",function(){return"WebGLRenderingContext"in t});
/*!
{
  "name": "WebSockets Support",
  "property": "websockets",
  "authors": ["Phread (@fearphage)", "Mike Sherov (@mikesherov)", "Burak Yigit Kaya (@BYK)"],
  "caniuse": "websockets",
  "tags": ["html5"],
  "warnings": [
    "This test will reject any old version of WebSockets even if it is not prefixed such as in Safari 5.1"
  ],
  "notes": [{
    "name": "CLOSING State and Spec",
    "href": "https://www.w3.org/TR/websockets/#the-websocket-interface"
  }],
  "polyfills": [
    "sockjs",
    "socketio",
    "kaazing-websocket-gateway",
    "websocketjs",
    "atmosphere",
    "graceful-websocket",
    "portal",
    "datachannel"
  ]
}
!*/
var U,H,G,J=!1;try{J="WebSocket"in t&&2===t.WebSocket.CLOSING}catch(e){}i.addTest("websockets",J),
/*!
{
  "name": "CSS Animations",
  "property": "cssanimations",
  "caniuse": "css-animation",
  "polyfills": ["transformie", "csssandpaper"],
  "tags": ["css"],
  "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
  "notes": [{
    "name": "Article: 'Dispelling the Android CSS animation myths'",
    "href": "https://web.archive.org/web/20180602074607/https://daneden.me/2011/12/14/putting-up-with-androids-bullshit/"
  }]
}
!*/
i.addTest("cssanimations",B("animationName","a",!0)),
/*!
{
  "name": "Background Size",
  "property": "backgroundsize",
  "tags": ["css"],
  "knownBugs": ["This will false positive in Opera Mini - https://github.com/Modernizr/Modernizr/issues/396"],
  "notes": [{
    "name": "Related Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/396"
  }]
}
!*/
i.addTest("backgroundsize",B("backgroundSize","100%",!0)),
/*!
{
  "name": "Border Image",
  "property": "borderimage",
  "caniuse": "border-image",
  "polyfills": ["css3pie"],
  "knownBugs": ["Android < 2.0 is true, but has a broken implementation"],
  "tags": ["css"]
}
!*/
i.addTest("borderimage",B("borderImage","url() 1",!0)),
/*!
{
  "name": "Border Radius",
  "property": "borderradius",
  "caniuse": "border-radius",
  "polyfills": ["css3pie"],
  "tags": ["css"],
  "notes": [{
    "name": "Comprehensive Compat Chart",
    "href": "https://muddledramblings.com/table-of-css3-border-radius-compliance"
  }]
}
!*/
i.addTest("borderradius",B("borderRadius","0px",!0)),
/*!
{
  "name": "Box Shadow",
  "property": "boxshadow",
  "caniuse": "css-boxshadow",
  "tags": ["css"],
  "knownBugs": [
    "WebOS false positives on this test.",
    "The Kindle Silk browser false positives"
  ]
}
!*/
i.addTest("boxshadow",B("boxShadow","1px 1px",!0)),
/*!
{
  "name": "Flexbox",
  "property": "flexbox",
  "caniuse": "flexbox",
  "tags": ["css"],
  "notes": [{
    "name": "The _new_ flexbox",
    "href": "https://www.w3.org/TR/css-flexbox-1/"
  }],
  "warnings": [
    "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
  ]
}
!*/
i.addTest("flexbox",B("flexBasis","1px",!0)),(U=navigator.userAgent,H=U.match(/w(eb)?osbrowser/gi),G=U.match(/windows phone/gi)&&U.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,H||G)?i.addTest("fontface",!1):F('@font-face {font-family:"font";src:url("https:///")}',function(e,t){var o=n.getElementById("smodernizr"),r=o.sheet||o.styleSheet,a=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",s=/src/i.test(a)&&0===a.indexOf(t.split(" ")[0]);i.addTest("fontface",s)}),
/*!
{
  "name": "CSS Generated Content",
  "property": "generatedcontent",
  "tags": ["css"],
  "warnings": ["Android won't return correct height for anything below 7px #738"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/css3-selectors/#gen-content"
  }, {
    "name": "MDN Docs on :before",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
  }, {
    "name": "MDN Docs on :after",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::after"
  }]
}
!*/
F('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){i.addTest("generatedcontent",e.offsetHeight>=6)}),
/*!
{
  "name": "CSS Gradients",
  "caniuse": "css-gradients",
  "property": "cssgradients",
  "tags": ["css"],
  "knownBugs": ["False-positives on webOS (https://github.com/Modernizr/Modernizr/issues/202)"],
  "notes": [{
    "name": "Webkit Gradient Syntax",
    "href": "https://webkit.org/blog/175/introducing-css-gradients/"
  }, {
    "name": "Linear Gradient Syntax",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient"
  }, {
    "name": "W3C Spec",
    "href": "https://drafts.csswg.org/css-images-3/#gradients"
  }]
}
!*/
i.addTest("cssgradients",function(){for(var e,t="background-image:",n="",o=0,r=L.length-1;o<r;o++)e=0===o?"to ":"",n+=t+L[o]+"linear-gradient("+e+"left top, #9f9, white);";i._config.usePrefixes&&(n+=t+"-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");var a=T("a").style;return a.cssText=n,(""+a.backgroundImage).indexOf("gradient")>-1}),
/*!
{
  "name": "CSS HSLA Colors",
  "caniuse": "css3-colors",
  "property": "hsla",
  "tags": ["css"]
}
!*/
i.addTest("hsla",function(){var e=T("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",_(e.backgroundColor,"rgba")||_(e.backgroundColor,"hsla")}),
/*!
{
  "name": "CSS Multiple Backgrounds",
  "caniuse": "multibackgrounds",
  "property": "multiplebgs",
  "tags": ["css"]
}
!*/
i.addTest("multiplebgs",function(){var e=T("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),
/*!
{
  "name": "CSS Opacity",
  "caniuse": "css-opacity",
  "property": "opacity",
  "tags": ["css"]
}
!*/
i.addTest("opacity",function(){var e=T("a").style;return e.cssText=L.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),
/*!
{
  "name": "CSS Reflections",
  "caniuse": "css-reflections",
  "property": "cssreflections",
  "tags": ["css"]
}
!*/
i.addTest("cssreflections",B("boxReflect","above",!0)),
/*!
{
  "name": "CSS rgba",
  "caniuse": "css3-colors",
  "property": "rgba",
  "tags": ["css"],
  "notes": [{
    "name": "CSSTricks Tutorial",
    "href": "https://css-tricks.com/rgba-browser-support/"
  }]
}
!*/
i.addTest("rgba",function(){var e=T("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),
/*!
{
  "name": "CSS textshadow",
  "property": "textshadow",
  "caniuse": "css-textshadow",
  "tags": ["css"],
  "knownBugs": ["FF3.0 will false positive on this test"]
}
!*/
i.addTest("textshadow",D("textShadow","1px 1px")),
/*!
{
  "name": "CSS Transforms",
  "property": "csstransforms",
  "caniuse": "transforms2d",
  "tags": ["css"]
}
!*/
i.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&B("transform","scale(1)",!0)});
/*!
{
  "name": "CSS Supports",
  "property": "supports",
  "caniuse": "css-featurequeries",
  "tags": ["css"],
  "builderAliases": ["css_supports"],
  "notes": [{
    "name": "W3C Spec (The @supports rule)",
    "href": "https://dev.w3.org/csswg/css3-conditional/#at-supports"
  }, {
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/648"
  }, {
    "name": "W3C Spec (The CSSSupportsRule interface)",
    "href": "https://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
  }]
}
!*/
var Z="CSS"in t&&"supports"in t.CSS,K="supportsCSS"in t;i.addTest("supports",Z||K),
/*!
{
  "name": "CSS Transforms 3D",
  "property": "csstransforms3d",
  "caniuse": "transforms3d",
  "tags": ["css"],
  "warnings": [
    "Chrome may occasionally fail this test on some systems; more info: https://bugs.chromium.org/p/chromium/issues/detail?id=129004"
  ]
}
!*/
i.addTest("csstransforms3d",function(){return!!B("perspective","1px",!0)}),
/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/
i.addTest("csstransitions",B("transition","all",!0)),
/*!
{
  "name": "Local Storage",
  "property": "localstorage",
  "caniuse": "namevalue-storage",
  "tags": ["storage"],
  "polyfills": [
    "joshuabell-polyfill",
    "cupcake",
    "storagepolyfill",
    "amplifyjs",
    "yui-cacheoffline"
  ]
}
!*/
i.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}),
/*!
{
  "name": "Session Storage",
  "property": "sessionstorage",
  "tags": ["storage"],
  "polyfills": ["joshuabell-polyfill", "cupcake", "sessionstorage"]
}
!*/
i.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(e){return!1}}),
/*!
{
  "name": "Web SQL Database",
  "property": "websqldatabase",
  "caniuse": "sql-storage",
  "tags": ["storage"]
}
!*/
i.addTest("websqldatabase","openDatabase"in t);var Q={}.toString;
/*!
{
  "name": "SVG clip paths",
  "property": "svgclippaths",
  "tags": ["svg"],
  "notes": [{
    "name": "Demo",
    "href": "http://srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg"
  }]
}
!*/i.addTest("svgclippaths",function(){return!!n.createElementNS&&/SVGClipPath/.test(Q.call(n.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),
/*!
{
  "name": "Inline SVG",
  "property": "inlinesvg",
  "caniuse": "svg-html5",
  "tags": ["svg"],
  "notes": [{
    "name": "Test page",
    "href": "https://paulirish.com/demo/inline-svg"
  }, {
    "name": "Test page and results",
    "href": "https://codepen.io/eltonmesquita/full/GgXbvo/"
  }],
  "polyfills": ["inline-svg-polyfill"],
  "knownBugs": ["False negative on some Chromia browsers."]
}
!*/
i.addTest("inlinesvg",function(){var e=T("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"===("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),
/*!
{
  "name": "SVG SMIL animation",
  "property": "smil",
  "caniuse": "svg-smil",
  "tags": ["svg"],
  "notes": [{
  "name": "W3C Spec",
  "href": "https://www.w3.org/AudioVideo/"
  }]
}
!*/
i.addTest("smil",function(){return!!n.createElementNS&&/SVGAnimate/.test(Q.call(n.createElementNS("http://www.w3.org/2000/svg","animate")))}),
/*!
{
  "name": "Web Workers",
  "property": "webworkers",
  "caniuse": "webworkers",
  "tags": ["performance", "workers"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/workers/"
  }, {
    "name": "HTML5 Rocks Tutorial",
    "href": "https://www.html5rocks.com/en/tutorials/workers/basics/"
  }, {
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"
  }],
  "polyfills": ["fakeworker", "html5shims"]
}
!*/
i.addTest("webworkers","Worker"in t),function(){var e,t,n,o,a,l;for(var d in r)if(r.hasOwnProperty(d)){if(e=[],(t=r[d]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=c(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)1===(l=e[a].split(".")).length?i[l[0]]=o:(i[l[0]]&&(!i[l[0]]||i[l[0]]instanceof Boolean)||(i[l[0]]=new Boolean(i[l[0]])),i[l[0]][l[1]]=o),s.push((o?"":"no-")+l.join("-"))}}(),f(s),delete a.addTest,delete a.addAsyncTest;for(var X=0;X<i._q.length;X++)i._q[X]();e.Modernizr=i}(window,window,document);