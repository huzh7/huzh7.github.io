!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["mip-sjh-btn"]=e():(t.groot=t.groot||{},t.groot["mip-sjh-btn"]=e())}(this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=5637)}({0:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,c){var u,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=u):o&&(u=c?function(){o.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var l=s.render;s.render=function(t,e){return u.call(e),l(t,e)}}else{var d=s.beforeCreate;s.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:s}}n.d(e,"a",(function(){return r}))},1:function(t,e,n){"use strict";e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return t.replace(/([A-Z])/g,"".concat(e,"$1")).toLowerCase()}},106:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.a=function(t){if(null==t)return 0;if("string"===!r(t)&&"number"===!r(t))throw new Error("传入的数据为非字符串或数字");var e=t.trim(),n=e.match(/[^\x20-\xff]/g);return e.length+(n?n.length:0)}},11:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(6),o=n(1),i=n(12);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.keys(e).reduce((function(n,r){var i=Object(o.a)(r);if(!t.hasOwnProperty(r)&&!t.hasOwnProperty(i)){var a=e[r],c="function"==typeof a.default?a.default():a.default;n[i]=c}return n}),{});return c(c({},n),t)},l=function(t){if(t&&"[object Object]"===t.toString()){var e={};for(var n in t)t.hasOwnProperty(n)&&(/^[a-zA-Z]/.test(n)?(e[Object(r.a)(n)]=t[n],e[Object(o.a)(n)]=t[n],e[n]=t[n]):e[n]=t[n]);return e}return t||{}};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return{mixins:[Object(i.a)(e)],props:{properties:{type:Object,default:function(){return{}}}},computed:{$properties:function(){return l(s(this.properties,t))}},methods:{$getLocalProperties:function(e){var n=this,i=function(e){var i=Object(r.a)(e),a=Object(o.a)(e);if(n.properties.hasOwnProperty(a))return n.properties[a];if(n.properties.hasOwnProperty(i))return n.properties[i];if(t.hasOwnProperty(i)){var c=t[i].default;return"function"==typeof c?c():c}return null};return"string"==typeof e?i(e):e instanceof Array?e.map((function(t){return i(t)})):void 0}}}}},117:function(t,e,n){"use strict";var r=[{backgroundColor:"#25BA45",boxShadowColor:"#00781A",activeColor:"#039E25"},{backgroundColor:"#3388FF",boxShadowColor:"#0045A6",activeColor:"#045DD9"},{backgroundColor:"#7D2EE6",boxShadowColor:"#410096",activeColor:"#5704C4"},{backgroundColor:"#E6322E",boxShadowColor:"#960300",activeColor:"#C40704"},{backgroundColor:"#FF7033",boxShadowColor:"#A63200",activeColor:"#D94404"},{backgroundColor:"#BD8552",boxShadowColor:"#4A2915",activeColor:"#704425"},{backgroundColor:"#333333",boxShadowColor:"#1F1F1F",activeColor:"#282828"}],o=n(93),i=/^rgba/i,a=function(t,e){return t.match(/(\d(\.\d+)?)+/g)[e]},c=function(t){return r.filter((function(e){return e.backgroundColor===t})).length>0};e.a={methods:{$mergeGlobalSkinColor:function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(i.test(t)&&(!n||!c(e))){var r=a(t,3);return Object(o.a)(e,r)}return e}}}},12:function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a=function(t){return{computed:o({},(e=t,n={},e?(e instanceof Array&&(n=e.reduce((function(t,e){return t[e]=function(){var t=null;return this.$properties&&this.$properties.hasOwnProperty(e)?t=this.$properties[e]:this.properties&&this.properties.hasOwnProperty(e)&&(t=this.properties[e]),t},t}),{})),n):n))};var e,n}},17:function(t,e,n){"use strict";e.a={computed:{isEditor:function(){var t=this.$loki,e=t.getData("pageConfig")||{},n=e.siteid,r=e.pageid,o="editor"===(t.getData("env")&&t.getData("env").platform)||0===n&&0===r;return o}}}},1863:function(t,e,n){var r=n(4),o=n(5639);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});t.exports=a},19:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"v",(function(){return i})),n.d(e,"q",(function(){return a})),n.d(e,"r",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"u",(function(){return s})),n.d(e,"n",(function(){return l})),n.d(e,"m",(function(){return d})),n.d(e,"s",(function(){return f})),n.d(e,"o",(function(){return b})),n.d(e,"t",(function(){return p})),n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return m})),n.d(e,"C",(function(){return y})),n.d(e,"B",(function(){return g})),n.d(e,"f",(function(){return v})),n.d(e,"c",(function(){return w})),n.d(e,"p",(function(){return j})),n.d(e,"j",(function(){return O})),n.d(e,"k",(function(){return S})),n.d(e,"z",(function(){return C})),n.d(e,"y",(function(){return x})),n.d(e,"x",(function(){return k})),n.d(e,"l",(function(){return P})),n.d(e,"w",(function(){return T})),n.d(e,"A",(function(){return _})),n.d(e,"i",(function(){return A})),n.d(e,"h",(function(){return I}));var r=375,o=16,i=",",a="https://fe-resource.cdn.bcebos.com/groot/modulesComp/pc-article-list-empty.png",c=5,u="exp",s="revert",l="imlp-sdk-init",d="IMLP_SDK_GLOBAL_OPTIONS",f="release_lock",b="lock_layer",p=1e3,h="consult-unread-and-invite-message",m="consult-will-show-message",y="66013-1",g="ym_consult_bar_3.0",v={HORIZONTAL:"horizontal",VERTICAL:"vertical"},w="contentCenterBtnBubble",j=[661,662,663,664,31478,1522],O=/(.*?)=(.*)/,S={PC:"https://baozhang.baidu.com/",H5:"https://baozhang.baidu.com/guarantee-wise/#/home?from=JMY"},C="touchstart",x="touchmove",k="touchend",P="imgType",T="textType",_="widgetsAnimationEvent",A="88619-1",I={expInfo:{expId:A,debugParam:"firstScreenAnimationParams",expStageParam:"88619_params"},userEmail:"duqinzhi",desc:"通用行业首屏动效",startTime:"20220607",endTime:"20220630"}},2:function(t,e,n){"use strict";function r(t){if(!t)return{};for(var e={},n=(t.startsWith("?")?t.replace("?",""):t).split("&"),r=0;r<n.length;r++){var o=n[r].split("=");e[o[0]]=o[1]}return e}n.d(e,"a",(function(){return r}))},20:function(t,e,n){"use strict";var r=n(19);e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.d,n=new RegExp("^[0-9]*$");n.test(t)&&(t=parseInt(t,10));var o="number"==typeof t?t:null;return"".concat(t).indexOf("px")>-1&&(o=+t.split("px")[0]),o?"".concat((o/e).toFixed(6),"rem"):t}},28:function(t,e,n){"use strict";e.a={computed:{isBPreview:function(){var t=this.$loki;return!!(t&&t.router&&t.router.route.path.startsWith("/template/"))||"bPreview"===(this.$loki.getData("editorData")||{}).platformName}}}},3:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,u;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}},4:function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function c(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function u(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],u=e.base?i[0]+e.base:i[0],s=n[u]||0,l="".concat(u," ").concat(s);n[u]=s+1;var d=c(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:m(f,e),references:1}),r.push(l)}return r}function s(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,d=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function f(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function b(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */"));var a=window&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--foo: red)");if(t.styleSheet&&a)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var p=null,h=0;function m(t,e){var n,r,o;if(e.singleton){var i=h++;n=p||(p=s(e)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=s(e),r=b.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=u(t,e),s=0;s<n.length;s++){var l=c(n[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},43:function(t,e,n){"use strict";e.a={computed:{isSP:function(){var t=this.$loki.getData("serverPrerender")||{};return t&&t.isServerPrerender}}}},5:function(t,e,n){"use strict";function r(t,e){return"https://duzhanread.cdn.bcebos.com/jianzhan_widget/online_loki/".concat(t).concat(e,".js")}n.d(e,"a",(function(){return d}));var o=["offline","preonline","online","local"],i=o[0],a=o[1],c=o[2],u=o[3],s={"preview-sjh-offline.baidu.com":i,"sjh-offline.baidu.com":i,"sjh-preonline.baidu.com":a,"offline.wejianzhan.com":i,"wttest.baidu.com":i,"dev.wttest.baidu.com":i,"preview-sjh-preonline.baidu.com":a,"preonline.wejianzhan.com":a,"preview-sjh.baidu.com":c,"isite.baidu.com":c,"sjh.baidu.com":c,"wutong.baidu.com":c,localhost:u,"fmtest.baidu.com":i,"kaidian-offline.baidu.com":i,"kaidian-preonline.baidu.com":a,"kaidian.baidu.com":c,"audit-sjh-offline.baidu.com":i,"audit-sjh-preonline.baidu.com":a,"audit-sjh.baidu.com":c,"groupoffline.wejianzhan.com":i,"grouppreonline.wejianzhan.com":a};function l(t,e){var n=new RegExp(t+"=([^?&=]*)").exec(e);return n&&decodeURIComponent(n[1])}function d(t,e){var n=document.location||{},d=n.port,f=n.search,b=function(t,e){var n=l("mockEnv",e);return n&&o.includes(n)?n:s[t]}(n.hostname,f);return document.children&&document.children[0]&&""===document.children[0].getAttribute("sp")?"./".concat(t,".js"):b===i?function(t,e){return"https://duzhanread.bj.bcebos.com/jianzhan_widget/loki/".concat(t).concat(e,".js")}(t,e):b===a?function(t,e){return"https://duzhanread.bj.bcebos.com/jianzhan_widget_lokijs/online_head/".concat(t).concat(e,"/").concat(t).concat(e,".js")}(t,e):b===c?r(t,e):b===u||+d>80?function(t,e,n){return e=e||window.location.hostname,n=n||8858,"http://".concat(e,":").concat(n,"/").concat(t,"/").concat(t,".js")}(t,l("m_widgetEnv",f)||l("mockHost",f),l("mockPort",f)):r(t,e)}},5637:function(t,e,n){t.exports=n(6573)},5638:function(t,e,n){"use strict";n(1863)},5639:function(t,e,n){(e=n(3)(!1)).push([t.i,".mip-sjh-btn[data-v-dbffa306] {\n  text-align: center;\n  position: relative;\n}\n.mip-sjh-btn-container[data-v-dbffa306] {\n  font-size: 1rem;\n  padding: 0.9375rem 0;\n  margin: 0 1.0625rem;\n}\n.mip-sjh-btn-container .btn-btnc[data-v-dbffa306] {\n  position: relative;\n  text-align: center;\n  font-size: 1rem;\n  margin: auto;\n  overflow: hidden;\n}\n.mip-sjh-btn-container .btn-btnc .btn-text[data-v-dbffa306] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -55%);\n  width: 100%;\n}\n.mip-sjh-btn-container .btn-layer[data-v-dbffa306] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.mip-wt-btn-container[data-v-dbffa306] {\n  width: 100%;\n  height: 100%;\n}\n.mip-wt-btn-container .wt-btn-btnc[data-v-dbffa306] {\n  position: relative;\n  box-sizing: border-box;\n}\n.mip-wt-btn-container .btn-layer[data-v-dbffa306] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.mip-wt-btn-container .bottom-fixed-btn[data-v-dbffa306] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n.mip-wt-btn-container .fixed-btn[data-v-dbffa306] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.mip-wt-btn-container .btn-bold-text[data-v-dbffa306] {\n  font-weight: bold;\n}\n.mip-wt-btn-container .border-btn-layer[data-v-dbffa306] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 1;\n}\n.mip-wt-btn-container[data-v-dbffa306] .mip-sjh-text {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  font-size: 0.875rem;\n}\n.mip-wt-btn-container[data-v-dbffa306] .wt-btn-text {\n  padding: 0 0.45289855rem;\n  box-sizing: border-box;\n  overflow: hidden;\n  white-space: nowrap;\n}\n",""]),t.exports=e},57:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c}));var r="--m-ui-color-brand-1",o="--m-ui-color-brand-4",i="--m-ui-color-brand-7",a="--m-ui-color-brand-8",c="--m-ui-color-brand-9";e.f={methods:{$getGlobalColor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.$loki.getData("pageConfig")||{},n=e.extData,r=void 0===n?{}:n,o=r.pageStyle,i=o&&o.themeTimestamp||-1,a=o&&o.theme;return+i>+t?a:""},$getGlobalColorTimestamp:function(){var t=(this.$loki.getData("pageConfig")||{}).extData,e=(void 0===t?{}:t).pageStyle;return e&&e.themeTimestamp||-1}}}},6:function(t,e,n){"use strict";e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=new RegExp("\\".concat(e,"([a-zA-Z])"),"g");return t.replace(n,(function(t,e){return e.toUpperCase()}))}},62:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c}));var r="9000 !important",o="10000 !important",i="12000 !important",a="13000 !important",c={L1:r,L2:o,L3:"11000 !important",L4:i,L5:a,L6:"14000 !important"}},6573:function(t,e,n){"use strict";n.r(e);var r=n(11),o=n(7),i=n(43),a=n(73),c=n(57),u=n(20),s=n(117),l=n(106),d=function(){return{url:{type:String,default:""},appUrl:{type:Object,default:function(){return{show:!1,schemaUrl:""}}},xcxPath:{type:String,default:""},solutionId:{type:String,default:""},solutionType:{type:String,default:""},text:{type:String,default:""},buttonStyle:{type:Object,default:function(){return{}}},border:{type:Object,default:function(){return{}}},background:{type:Object,default:function(){return{}}},__type:{type:String,default:"normal"},mSizeWidth:{type:Object,default:function(){return{}}},mSizeHeight:{type:Object,default:function(){return{}}},fixed:{type:Object,default:function(){return{}}},textStyle:{type:Object,default:function(){return{}}},styleType:{type:Object,default:function(){return{}}},transParams:{type:Object,default:function(){return{}}}}};function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=Object(u.a)(375),m=0,y=1,g=3,v={default:"15px",large:"18px"},w={name:"mip-sjh-btn-label",mixins:[Object(r.b)(d(),Object.keys(d())),s.a],props:{properties:{type:Object,required:!0},globalColor:{type:Object,default:function(){return{}}}},data:function(){return{showTouchActiveStyle:!1}},computed:{isConstrictionSkin:function(){return Object.keys(this.styleType).length},isRichDotted:function(){return this.styleType&&+this.styleType.type===g},rootClass:function(){var t=["mip-sjh-btn"];return t.push("wt-btn"===this.__type?"mip-wt-btn-container":"mip-sjh-btn-container"),t},shadeColor:function(){if(this.background["shade-color"])return{"background-color":this.background["shade-color"]};var t=this.isConstrictionSkin,e=this.showTouchActiveStyle,n=this.buttonStyle,r=void 0===n?{}:n,o=this.border,i=void 0===o?{}:o,a=this.styleType,c=void 0===a?{}:a,s=this.globalColor,l=void 0===s?{}:s;if(t&&e){var d=Object(u.a)(r["border-radius"]);if(+c.type===m){var f=l.backgroundColor;return f||(f="default"===c.colorType?r.activeColor:"rgba(0, 0, 0, 0.1)"),{backgroundColor:f,borderRadius:d}}if(+c.type===y||+c.type===g)return{backgroundColor:l.borderActiveColor||i["border-color"],opacity:.1,borderRadius:d}}return{}},buttonStyles:function(){return this.isConstrictionSkin?this.constrictionButtonStyle():"normal"===this.__type?this.normalButtonStyle():this.wtButtonStyle()},btnClass:function(){var t=["wt-btn-btnc"];return this.isConstrictionSkin&&(t.push("btn-bold-text"),this.buttonStyle&&this.buttonStyle.boxShadowColor&&(Object(u.a)(this.buttonStyle.width)===h?t.push("bottom-fixed-btn"):t.push("fixed-btn"))),t},maskClass:function(){var t=["btn-layer"];return this.isConstrictionSkin&&[m,y,g].indexOf(+this.styleType.type)>-1&&t.push("border-btn-layer"),t},showText:function(){return this.isConstrictionSkin?function(t,e,n){for(var r=0,o="",i=/[^\x00-\xff]/g,a=Object(l.a)(t),c=0;c<a;c++){var u=t.charAt(c).toString();if((r=null!=u.match(i)?r+2:r+1)>e)break;o+=u}return n&&a>e&&(o+="..."),o}(this.text,24):this.text},showTextStyle:function(){if(!this.isConstrictionSkin)return{};var t=this.textStyle,e=void 0===t?{}:t,n=this.styleType,r=void 0===n?{}:n,o=this.globalColor,i=void 0===o?{}:o,a=this.border,c=parseFloat(e.fontSize,10),s=isNaN(c)?Object(u.a)(v[e.fontSize||"default"]):Object(u.a)(c);return+r.type!==y&&+r.type!==g||!i.borderColor?b(b({},this.textStyle),{},{fontSize:s}):{fontSize:s,color:this.isRichDotted&&!e.useGlobal?e.textColor||"#fff":this.$mergeGlobalSkinColor(a["border-color"],i.borderColor)}}},methods:{normalButtonStyle:function(){var t=Object.assign({},this.border),e=Object.assign({},this.buttonStyle),n=Object.assign({},this.background);e.background&&(e["background-color"]=e.background,delete e.background);var r=n["background-image"];return n["background-image"]="url(".concat(r,")"),"100%"===e.width&&delete e.width,Object.assign(t,n,e)},wtButtonStyle:function(){var t=this.mSizeHeight,e=void 0===t?{}:t,n=this.globalColor,r=Object.assign({},this.border),o=Object.assign({},this.buttonStyle),i=Object.assign({},this.background);delete o.width;var a=e.value||48,c=Object(u.a)(a),s=parseInt(r["border-width"],10);o.height=c,o["line-height"]=Object(u.a)(+a-2*(isNaN(s)?0:s)),isNaN(s)&&(o["border-width"]="0px");var l=i["background-image"];return l?(i["background-image"]="url(".concat(l,")"),i["background-color"]&&delete i["background-color"],o.background&&delete o.background):o.background&&(o["background-color"]=n.backgroundColor||o.background,delete o.background),Object.assign(r,i,o)},constrictionButtonStyle:function(){var t=this.mSizeHeight,e=void 0===t?{}:t,n=this.mSizeWidth,r=void 0===n?{}:n,o=this.styleType,i=void 0===o?{}:o,a=this.globalColor,c=this.background,s=void 0===c?{}:c,l=Object.assign({},this.border),d=Object.assign({},this.buttonStyle),f=Object(u.a)(this.buttonStyle["border-radius"]),p=e.value||43,v=r.value||344,w=isNaN(parseInt(l["border-width"],10))?0:parseInt(l["border-width"],10),j=Object(u.a)(p),O=Object(u.a)(v),S="",C=Object(u.a)(+p-2*+w);if(i.boxShadowType){if(O=Object(u.a)(d.width),j=Object(u.a)(d.height),O!==h){var x="default"===i.colorType&&2!==i.type?d.boxShadowColor:"rgba(0, 0, 0, 0.2)";S="0 ".concat(Object(u.a)(1)," ").concat(Object(u.a)(6)," 0 ").concat(x)}var k=parseInt(d.height,10);C=Object(u.a)(+k-2*+w)}return+i.type===m?(a.backgroundColor&&(d.background=this.$mergeGlobalSkinColor(d.background,a.backgroundColor)),{borderRadius:f,width:O,height:j,boxShadow:S,lineHeight:j,backgroundColor:d.background}):+i.type===y?(a.borderColor&&(l["border-color"]=this.$mergeGlobalSkinColor(l["border-color"],a.borderColor)),b(b({},l),{},{borderRadius:f,width:O,height:j,lineHeight:C,boxShadow:S,borderWidth:Object(u.a)(w),backgroundColor:i.boxShadowType?"rgba(255, 255, 255, 1)":""})):+i.type===g?(a.borderColor&&(l["border-color"]=this.$mergeGlobalSkinColor(l["border-color"],a.borderColor)),a.backgroundColor&&(d.background=this.$mergeGlobalSkinColor(d.background,a.backgroundColor)),b(b({},l),{},{borderRadius:f,width:O,height:j,lineHeight:C,boxShadow:S,borderWidth:Object(u.a)(w),backgroundColor:d.background})):b(b({},s),{},{borderRadius:f,width:O,height:j,lineHeight:j,backgroundImage:s["background-image"]?"url(".concat(s["background-image"],")"):""})},handleTouch:function(){this.showTouchActiveStyle=!this.showTouchActiveStyle}}},j=(n(5638),n(0)),O=Object(j.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.rootClass,on:{touchstart:t.handleTouch,touchend:t.handleTouch}},["normal"===t.__type?n("div",{staticClass:"btn-btnc",style:t.buttonStyles},[n("div",{staticClass:"btn-layer",style:t.shadeColor}),t._v(" "),n("mip-sjh-text",{attrs:{properties:{text:t.text,customClass:"btn-text"}}})],1):t._e(),t._v(" "),"wt-btn"===t.__type?n("div",{class:t.btnClass,style:t.buttonStyles},[n("div",{class:t.maskClass,style:t.shadeColor}),t._v(" "),n("mip-sjh-text",{attrs:{properties:{text:t.showText,customStyle:t.showTextStyle,customClass:t.buttonStyle.activeColor?"wt-btn-text":""}}})],1):t._e()])}),[],!1,null,"dbffa306",null).exports;function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){x(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var k={name:"mip-sjh-btn",components:{BtnLabel:O},mixins:[a.a,c.f,i.a,Object(o.a)({GtJmyH5BaseActions:"GtJmyH5BaseActions","mip-sjh-new-download":"mip-sjh-new-download"}),Object(r.b)(d(),Object.keys(d()))],props:{widgetInfoId:{type:[String,Number],default:0},properties:{type:Object,required:!0}},data:function(){return{baseActionLoaded:!1,isShowLayer:!1}},computed:{isRichDotted:function(){return this.styleType&&3==+this.styleType.type},baseActionProperties:function(){var t=this.appUrl,e=void 0===t?{}:t,n=this.url,r=this.extra,o=this.solutionId,i=this.solutionType,a=this.xcxPath,c=e.show,u=e.schemaUrl;if(c||n||a)return{actionType:"jump",jumpContent:{schemaUrl:c?u:"",url:n,extra:r,solutionId:o,solutionType:i,xcxPath:a}}},globalColor:function(){var t=this.buttonStyle,e=this.border,n={};if(t){var r=this.$getGlobalColor(t.backgroundTimeStamp||-1);r&&(n.backgroundColor=r["--m-ui-color-brand-7"],n.backgroundActiveColor=r["--m-ui-color-brand-8"])}if(e){var o=this.$getGlobalColor(e.borderColorTimeStamp||-1);o&&(n.borderColor=o["--m-ui-color-brand-7"],n.borderActiveColor=o["--m-ui-color-brand-8"])}return n},isDownloadTrans:function(){return this.transParams&&"download"===this.transParams.actionType},downloadButtonProperties:function(){var t,e,n,r=this.transParams.downloadContent,o=r.systemInfo,i=r.docBtnText,a=r.iosBtnText,c=r.showIcon,s=r.buttonIcon,l=r.customButtonStyle,d=r.customIconStyle,f=this.globalColor.borderColor?this.globalColor.borderColor:this.border["border-color"]||this.border.borderColor,b=this.globalColor.backgroundColor?this.globalColor.backgroundColor:this.buttonStyle.background,p=null!==(t=this.textStyle)&&void 0!==t&&t.useGlobal&&this.globalColor.borderColor?this.globalColor.borderColor:this.textStyle.color,h=JSON.parse(JSON.stringify({__type:"btn",systemInfo:o,docBtnText:i,iosBtnText:a,icon:s,buttonStyle:{"btn-font-size":{type:"2",value:"14"},"btn-style-type":"0","btn-radius":{},"btn-bg-color":{custom:{}}},customButtonStyle:C(C(C({},this.border),this.buttonStyle),{},{minWidth:this.mSizeWidth&&this.mSizeWidth.value?Object(u.a)(this.mSizeWidth.value):void 0,height:this.mSizeHeight&&this.mSizeHeight.value?Object(u.a)(this.mSizeHeight.value):void 0,lineHeight:this.mSizeHeight&&this.mSizeHeight.value?Object(u.a)(this.mSizeHeight.value):void 0,textAlign:"center",fontWeight:"normal"},l),btnTextStyle:C({},this.textStyle),customIconStyle:C({},d)}));(h.btnTextStyle.fontSize&&(h.buttonStyle["btn-font-size"].value=h.btnTextStyle.fontSize),c&&(h.iconType=s),h.customButtonStyle["border-color"]=f,h.customButtonStyle.borderColor=f,h.customIconStyle.color=this.isRichDotted?p:f,this.properties.btnStyleUpgradeUser||(h.btnTextStyle.color=this.isRichDotted?p:f),this.isRichDotted&&(h.customButtonStyle.background=b),delete h.customButtonStyle.borderColorTimeStamp,delete h.customButtonStyle.backgroundTimeStamp,this.properties.btnStyleUpgradeUser)&&(h.customIconStyle.color=h.btnTextStyle.color,0===(null===(e=this.styleType)||void 0===e?void 0:e.type)&&(h.customButtonStyle.border="none"),1===(null===(n=this.styleType)||void 0===n?void 0:n.type)&&(h.customButtonStyle.background="unset",h.customButtonStyle.backgroundColor="unset"));return h}},mounted:function(){this.isSP||(this.baseActionLoaded=!0)},$lokiPrerender:function(t){return!0},methods:{onOpenLayer:function(){this.isShowLayer=!0},onCloseLayer:function(){this.isShowLayer=!1}}},P=Object(j.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.baseActionLoaded&&(t.baseActionProperties||t.properties.transParams)?t.isDownloadTrans?n("mip-sjh-new-download",{attrs:{"widget-info-id":t.widgetInfoId,properties:t.downloadButtonProperties}}):n("gt-jmy-h5-base-actions",{attrs:{"widget-info-id":t.widgetInfoId,properties:t.properties.transParams?t.properties.transParams:t.baseActionProperties,"is-show":t.isShowLayer},on:{click:t.onOpenLayer,close:t.onCloseLayer}},[n("btn-label",{attrs:{properties:t.properties,"global-color":t.globalColor}})],1):n("btn-label",{attrs:{properties:t.properties,"global-color":t.globalColor}})}),[],!1,null,null,null);e.default=P.exports},7:function(t,e,n){"use strict";var r=n(5),o=n(2),i=n(8);function a(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"registedAsyncComponentError",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1;window.postMessage({name:"js动态注册报错",type:n,error:e,url:t,retryDelayTime:r},"*")}function l(t,e){return window.widgetAsyncLoader(t,e).then((function(){return t})).catch((function(t){throw new Error(t)}))}e.a=function(t){var e={};return Object.keys(t).forEach((function(n){var c=null,d=null;"string"==typeof t[n]?(c=t[n],d=269):"object"===u(t[n])&&(c=t[n].filename,d=t[n].appid),c&&d&&(e[n]=function(t,e){try{var n=Object(r.a)(c,d),u=window.widgetAsyncLoader&&"function"==typeof window.widgetAsyncLoader,f=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};window.groot[c]?(r(),t(window.groot[c].default)):(o(),s(n,"资源已加载，但组件注册失败！"),e())};if(u){if(window.groot[c])return void t(window.groot[c].default);l(n,{isLoaded:function(t){var e=t&&"string"==typeof t&&t.split("/").pop();if(/^https\:\/\/duzhanread.(cdn|bj).bcebos.com\/(jianzhan_widget|jianzhan_widget_lokijs)\/(online_loki|online_head|loki)\//.test(t)&&e){var n=e.replace(/[0-9]*\.js/g,"");return!!window.groot[n]}return!0}}).then((function(){f()})).catch((function(t){var r=function(t){return"script.onerror=".concat(JSON.stringify(t))};s(n,r(t));var a=Object(o.a)(document.location.search),c=Object(i.a)(),u=a.debugRetryDelayTime||c;setTimeout((function(){l("".concat(n,"?timestamp=").concat((new Date).getTime())).then((function(){f((function(){s(n,"重试成功！","resource_retry_success",c)}))})).catch((function(t){s(n,r(t),"resource_retry_fail",c),e()}))}),u)}))}else{var b=a(document.getElementsByTagName("script")).filter((function(t){return t.src===n}))[0];if(b)if(window.groot[c])f();else{var p=b.onload;b.onload=function(){f(),"function"==typeof p&&p()}}else{var h=document.getElementsByTagName("head")[0],m=document.createElement("script");m.type="text/javascript";n.indexOf("duzhanread.cdn.bcebos.com")>-1&&m.setAttribute("crossorigin","anonymous"),m.src=n,m.onload=function(){f()},m.onerror=function(t){s(n,"script.onerror=".concat(JSON.stringify(t)))},h.appendChild(m)}}}catch(t){s(Object(r.a)(c,d),t)}})})),{components:e}}},73:function(t,e,n){"use strict";var r=n(20),o=n(1),i=n(62),a=n(19),c=n(17),u=n(28);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var p=["left","right","top","bottom"];e.a={mixins:[c.a,u.a],computed:{fixedStyle:function(){var t,e=this.properties.fixed,n=this.properties["m-size-width"]||this.properties.mSizeWidth||{value:375},c=this.properties["m-size-height"]||this.properties.mSizeHeight||{value:0},u=function(t){var e=i.b;try{var n=t.properties.fixed,r=(t.$loki.getData("pageConfig")||{}).widgets||[],o=n&&n.type||"top";return r.filter((function(t){return t&&t.properties&&t.properties.fixed&&t.properties.fixed.type===o})).forEach((function(n,r){n&&n.widgetInfoId&&n.widgetInfoId===t.widgetInfoId&&(e=i.b.replace(/(\d{5})/,(function(t){return+t-r})))})),e}catch(t){return e}}(this),s=l(l({},e),{},{width:375===n.value?"100%":Object(r.a)(n.value),height:c.value?Object(r.a)(c.value):"auto",overflow:"visible",backgroundColor:(t=this,((t.$loki.getData("pageConfig")||{}).widgets||[]).filter((function(e){return e&&e.widgetInfoId===t.widgetInfoId&&a.p.indexOf(e.widgetMoldId)>-1})).length?"#FFF":"transparent"),transform:"translateZ(0)",zIndex:u,position:"fixed"});return p.forEach((function(t){s.hasOwnProperty(t)&&(s[t]=Object(r.a)(s[t]))})),Object.keys(s).map((function(t){return"".concat(Object(o.a)(t),":").concat(s[t])})).join(";")}},methods:{handleFixedDom:function(){if(this.properties.fixed&&(!this.isEditor||this.isBPreview)){var t=function(t){for(;t&&(t=t.parentNode,!(String(t.className).indexOf("m-loki-row-container")>-1)););return t}(this.$el);!function(t){var e=getComputedStyle(t).marginBottom;if(e){var n=f(document.body.childNodes).filter((function(t){return"DIV"===t.tagName}))[0];n&&(n.style.marginBottom=e)}}(t),t.style.cssText=this.fixedStyle,t.classList.add("m-loki-row-container-fixed");var e,n,r=this.properties.fixed.type;r&&t.setAttribute("fixed-type",r),"bottom"===this.properties.fixed.type&&t.classList.add("iphonex-adaper-content"),e=t,(n=document&&document.body)&&n.appendChild(e),this.$once("hook:beforeDestroy",(function(){t&&t.parentNode&&t.parentNode.removeChild(t)}))}}},mounted:function(){this.handleFixedDom()}}},8:function(t,e,n){"use strict";e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:35,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,r=(e-t)/n,o=Math.floor(Math.random()*r),i=t+o*n;return i}},93:function(t,e,n){"use strict";var r=/^#?(([0-9a-zA-Z]{3}){1,3})$/;e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t&&t.match(r)?"rgba("+parseInt("0x"+t.slice(1,3),16)+","+parseInt("0x"+t.slice(3,5),16)+","+parseInt("0x"+t.slice(5,7),16)+","+e+")":t}}})}));