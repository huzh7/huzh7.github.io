!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.GtJmyH5CtaEntrance=t():(e.groot=e.groot||{},e.groot.GtJmyH5CtaEntrance=t())}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}([function(e,t,n){var r=n(3),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,t,n){e.exports=n(6)},function(e,t,n){"use strict";n(0)},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],u=t.base?i[0]+t.base:i[0],s=n[u]||0,f="".concat(u," ").concat(s);n[u]=s+1;var d=c(f),l={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(l)):a.push({identifier:f,updater:y(l,t),references:1}),r.push(f)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var f,d=(f=[],function(e,t){return f[e]=t,f.filter(Boolean).join("\n")});function l(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */"));var a=window&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--foo: red)");if(e.styleSheet&&a)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function y(e,t){var n,r,o;if(t.singleton){var i=m++;n=h||(h=s(t)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else n=s(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=u(e,t),s=0;s<n.length;s++){var f=c(n[s]);0===a[f].references&&(a[f].updater(),a.splice(f,1))}n=i}}}},function(e,t,n){(t=n(5)(!1)).push([e.i,".gt-jmy-h5-cta-entrance[data-v-73ed399a] {\n  font-size: 0.875rem;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){"use strict";n.r(t);function r(e,t){return"https://duzhanread.cdn.bcebos.com/jianzhan_widget/online_loki/".concat(e).concat(t,".js")}var o=["offline","preonline","online","local"],i=o[0],a=o[1],c=o[2],u=o[3],s={"preview-sjh-offline.baidu.com":i,"sjh-offline.baidu.com":i,"sjh-preonline.baidu.com":a,"offline.wejianzhan.com":i,"wttest.baidu.com":i,"dev.wttest.baidu.com":i,"preview-sjh-preonline.baidu.com":a,"preonline.wejianzhan.com":a,"preview-sjh.baidu.com":c,"isite.baidu.com":c,"sjh.baidu.com":c,"wutong.baidu.com":c,localhost:u,"fmtest.baidu.com":i,"kaidian-offline.baidu.com":i,"kaidian-preonline.baidu.com":a,"kaidian.baidu.com":c,"audit-sjh-offline.baidu.com":i,"audit-sjh-preonline.baidu.com":a,"audit-sjh.baidu.com":c};function f(e,t){var n=new RegExp(e+"=([^?&=]*)").exec(t);return n&&decodeURIComponent(n[1])}function d(e,t){var n=document.location||{},d=n.port,l=n.search,p=function(e,t){var n=f("mockEnv",t);return n&&o.includes(n)?n:s[e]}(n.hostname,l);return document.children&&document.children[0]&&""===document.children[0].getAttribute("sp")?"./".concat(e,".js"):p===i?function(e,t){return"https://duzhanread.bj.bcebos.com/jianzhan_widget/loki/".concat(e).concat(t,".js")}(e,t):p===a?function(e,t){return"https://duzhanread.bj.bcebos.com/jianzhan_widget_lokijs/online_head/".concat(e).concat(t,"/").concat(e).concat(t,".js")}(e,t):p===c?r(e,t):p===u||+d>80?function(e,t,n){return t=t||window.location.hostname,n=n||8858,"http://".concat(t,":").concat(n,"/").concat(e,"/").concat(e,".js")}(e,f("mockHost",l),f("mockPort",l)):r(e,t)}function l(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"registedAsyncComponentError",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1;window.postMessage({name:"js动态注册报错",type:n,error:t,url:e,retryDelayTime:r},"*")}function y(e,t){return window.widgetAsyncLoader(e,t).then((function(){return e})).catch((function(e){throw new Error(e)}))}var b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=new RegExp("\\".concat(t,"([a-zA-Z])"),"g");return e.replace(n,(function(e,t){return t.toUpperCase()}))},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return e.replace(/([A-Z])/g,"".concat(t,"$1")).toLowerCase()};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){return{computed:w({},function(e){var t={};return e?(e instanceof Array&&(t=e.reduce((function(e,t){return e[t]=function(){var e=null;return this.$properties&&this.$properties.hasOwnProperty(t)?e=this.$properties[t]:this.properties&&this.properties.hasOwnProperty(t)&&(e=this.properties[t]),e},e}),{})),t):t}(e))}};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.keys(t).reduce((function(n,r){var o=v(r);if(!e.hasOwnProperty(r)&&!e.hasOwnProperty(o)){var i=t[r],a="function"==typeof i.default?i.default():i.default;n[o]=a}return n}),{});return C(C({},n),e)},P=function(e){if(e&&"[object Object]"===e.toString()){var t={};for(var n in e)e.hasOwnProperty(n)&&(/^[a-zA-Z]/.test(n)?(t[b(n)]=e[n],t[v(n)]=e[n],t[n]=e[n]):t[n]=e[n]);return t}return e||{}},E=function(){return{targetDomId:{type:String,require:!0}}},L="gt-jmy-h5-cta-layer",T="transparent-layer",I=1;var k,A,D={name:"gt-jmy-h5-cta-entrance",mixins:[(k={GtJmyH5CtaLayer:"GtJmyH5CtaLayer"},A={},Object.keys(k).forEach((function(e){var t=null,n=null;"string"==typeof k[e]?(t=k[e],n=269):"object"===h(k[e])&&(t=k[e].filename,n=k[e].appid),t&&n&&(A[e]=function(e,r){try{var o=d(t,n),i=window.widgetAsyncLoader&&"function"==typeof window.widgetAsyncLoader,a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};window.groot[t]?(n(),e(window.groot[t].default)):(i(),m(o,"资源已加载，但组件注册失败！"),r())};if(i){if(window.groot[t])return void e(window.groot[t].default);y(o,{isLoaded:function(e){var t=e&&"string"==typeof e&&e.split("/").pop();if(/^https\:\/\/duzhanread.(cdn|bj).bcebos.com\/(jianzhan_widget|jianzhan_widget_lokijs)\/(online_loki|online_head|loki)\//.test(e)&&t){var n=t.replace(/[0-9]*\.js/g,"");return!!window.groot[n]}return!0}}).then((function(){a()})).catch((function(e){var t=function(e){return"script.onerror=".concat(JSON.stringify(e))};m(o,t(e));var n=function(e){if(!e)return{};for(var t={},n=(e.startsWith("?")?e.replace("?",""):e).split("&"),r=0;r<n.length;r++){var o=n[r].split("=");t[o[0]]=o[1]}return t}(document.location.search),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:35,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,r=(t-e)/n,o=Math.floor(Math.random()*r),i=e+o*n;return i}(),c=n.debugRetryDelayTime||i;setTimeout((function(){y("".concat(o,"?timestamp=").concat((new Date).getTime())).then((function(){a((function(){m(o,"重试成功！","resource_retry_success",i)}))})).catch((function(e){m(o,t(e),"resource_retry_fail",i),r()}))}),c)}))}else{var c=l(document.getElementsByTagName("script")).filter((function(e){return e.src===o}))[0];if(c)if(window.groot[t])a();else{var u=c.onload;c.onload=function(){a(),"function"==typeof u&&u()}}else{var s=document.getElementsByTagName("head")[0],f=document.createElement("script");f.type="text/javascript",o.indexOf("duzhanread.cdn.bcebos.com")>-1&&f.setAttribute("crossorigin","anonymous"),f.src=o,f.onload=function(){a()},f.onerror=function(e){m(o,"script.onerror=".concat(JSON.stringify(e)))},s.appendChild(f)}}}catch(e){m(d(t,n),e)}})})),{components:A}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return{mixins:[O(t)],props:{properties:{type:Object,default:function(){return{}}}},computed:{$properties:function(){return P(x(this.properties,e))}},methods:{$getLocalProperties:function(t){var n=this,r=function(t){var r=b(t),o=v(t);if(n.properties.hasOwnProperty(o))return n.properties[o];if(n.properties.hasOwnProperty(r))return n.properties[r];if(e.hasOwnProperty(r)){var i=e[r].default;return"function"==typeof i?i():i}return null};return"string"==typeof t?r(t):t instanceof Array?t.map((function(e){return r(e)})):void 0}}}}(E(),Object.keys(E())),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{methods:{$hasHitExp:function(t){if(!this.$loki.getServiceSync)return!1;var n=this.$loki.getServiceSync("jmy-abtest-controller");if(!n)return!1;var r=n.registerExp(e,this)[t];return r?this.$loki.getServiceSync("jmy-abtest-controller").hasHitExp(r,t):(console.log("未在名单内，请检查参数"),!1)}}}}([{expInfo:{expId:"70300-1",debugParam:"cta_layer_normal"},userEmail:"liuheng05",desc:"cta透明浮层入口卡片居中",startTime:"20210730",endTime:"20210830"},{expInfo:{expId:"70300-2",debugParam:"cta_layer_fixed"},userEmail:"liuheng05",desc:"cta透明浮层入口卡片吸地",startTime:"20210730",endTime:"20210830"}])],props:{properties:{type:Object,required:!0},widgetInfoId:{type:String,required:!0}},data:function(){return{shouldDynLoadCompId:"",compsProperties:{}}},mounted:function(){this.init()},methods:{init:function(){this.isLayer()&&this.initComps(L)},initComps:function(e){this.shouldDynLoadCompId=e;var t=this.getMoldType().type;this.compsProperties={__type:t,targetDomId:this.targetDomId,abtest:{isLayerNormalCard:this.isLayerNormalCard(),isLayerFixedCard:this.isLayerFixedCard()}}},getLayerMoldType:function(){if(this.isLayer())return{type:T,subType:I}},getMoldType:function(){var e,t,n,r=(e={},t=L,n=this.getLayerMoldType,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e);return this.shouldDynLoadCompId&&r[this.shouldDynLoadCompId]?r[this.shouldDynLoadCompId]():""},isLayer:function(){return[this.isLayerNormalCard(),this.isLayerFixedCard()].some((function(e){return!0===e}))},isLayerNormalCard:function(){return this.$hasHitExp("70300-1")},isLayerFixedCard:function(){return this.$hasHitExp("70300-2")}}};n(2);var M=function(e,t,n,r,o,i,a,c){var u,s="function"==typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},s._ssrRegister=u):o&&(u=c?function(){o.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var f=s.render;s.render=function(e,t){return u.call(t),f(e,t)}}else{var d=s.beforeCreate;s.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:s}}(D,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"gt-jmy-h5-cta-entrance"},[t(this.shouldDynLoadCompId,{tag:"component",attrs:{"widget-info-id":this.widgetInfoId,properties:this.compsProperties}})],1)}),[],!1,null,"73ed399a",null);t.default=M.exports}])}));