import{l as e,q as r,$ as t,r as n,a0 as a,S as i,o,N as s,w as u,a1 as l,X as f,f as c,D as d}from"./user-9b1b9132.js";import{b as p,d as v,D as y,i as g,M as h,r as m,f as b,c as w,e as j,a3 as q,ao as F,J as O,R as x,T as A,h as E,q as P,v as S,n as k,l as I,_ as R,aa as $,K as B,G as M,g as _,L as W,aw as D,az as V,p as z,F as C,I as N,aP as L,ba as T,O as U,w as J,j as G,a5 as Z,m as H,x as K,y as X,P as Y,k as Q,b7 as ee,H as re,aC as te}from"./index-28412557.js";import{r as ne,i as ae,s as ie,t as oe,k as se,v as ue,w as le,n as fe,x as ce,y as de,z as pe,A as ve,B as ye,e as ge,S as he,D as me}from"./el-input-4ed11238.js";var be=Object.create,we=function(){function r(){}return function(t){if(!e(t))return{};if(be)return be(t);r.prototype=t;var n=new r;return r.prototype=void 0,n}}();const je=we;function qe(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function Fe(e,n,a,i){var o=!a;a||(a={});for(var s=-1,u=n.length;++s<u;){var l=n[s],f=i?i(a[l],e[l],l,a,e):void 0;void 0===f&&(f=e[l]),o?r(a,l,f):t(a,l,f)}return a}var Oe=Object.prototype.hasOwnProperty;function xe(r){if(!e(r))return function(e){var r=[];if(null!=e)for(var t in Object(e))r.push(t);return r}(r);var t=ne(r),n=[];for(var a in r)("constructor"!=a||!t&&Oe.call(r,a))&&n.push(a);return n}function Ae(e){return ae(e)?ie(e,!0):xe(e)}const Ee=oe(Object.getPrototypeOf,Object);function Pe(){if(!arguments.length)return[];var e=arguments[0];return n(e)?e:[e]}var Se="object"==typeof exports&&exports&&!exports.nodeType&&exports,ke=Se&&"object"==typeof module&&module&&!module.nodeType&&module,Ie=ke&&ke.exports===Se?a.Buffer:void 0,Re=Ie?Ie.allocUnsafe:void 0;function $e(e,r){if(r)return e.slice();var t=e.length,n=Re?Re(t):new e.constructor(t);return e.copy(n),n}var Be=Object.getOwnPropertySymbols?function(e){for(var r=[];e;)fe(r,ue(e)),e=Ee(e);return r}:le;const Me=Be;function _e(e){return ce(e,Ae,Me)}var We=Object.prototype.hasOwnProperty;function De(e){var r=new e.constructor(e.byteLength);return new de(r).set(new de(e)),r}var Ve=/\w*$/;var ze=i?i.prototype:void 0,Ce=ze?ze.valueOf:void 0;function Ne(e,r){var t=r?De(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var Le="[object Boolean]",Te="[object Date]",Ue="[object Map]",Je="[object Number]",Ge="[object RegExp]",Ze="[object Set]",He="[object String]",Ke="[object Symbol]",Xe="[object ArrayBuffer]",Ye="[object DataView]",Qe="[object Float32Array]",er="[object Float64Array]",rr="[object Int8Array]",tr="[object Int16Array]",nr="[object Int32Array]",ar="[object Uint8Array]",ir="[object Uint8ClampedArray]",or="[object Uint16Array]",sr="[object Uint32Array]";function ur(e,r,t){var n,a=e.constructor;switch(r){case Xe:return De(e);case Le:case Te:return new a(+e);case Ye:return function(e,r){var t=r?De(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}(e,t);case Qe:case er:case rr:case tr:case nr:case ar:case ir:case or:case sr:return Ne(e,t);case Ue:return new a;case Je:case He:return new a(e);case Ge:return function(e){var r=new e.constructor(e.source,Ve.exec(e));return r.lastIndex=e.lastIndex,r}(e);case Ze:return new a;case Ke:return n=e,Ce?Object(Ce.call(n)):{}}}function lr(e){return"function"!=typeof e.constructor||ne(e)?{}:je(Ee(e))}var fr=ve&&ve.isMap;const cr=fr?ye(fr):function(e){return o(e)&&"[object Map]"==pe(e)};var dr=ve&&ve.isSet;const pr=dr?ye(dr):function(e){return o(e)&&"[object Set]"==pe(e)};var vr=1,yr=2,gr=4,hr="[object Arguments]",mr="[object Function]",br="[object GeneratorFunction]",wr="[object Object]",jr={};function qr(r,a,i,o,s,u){var l,f=a&vr,c=a&yr,d=a&gr;if(i&&(l=s?i(r,o,s,u):i(r)),void 0!==l)return l;if(!e(r))return r;var p=n(r);if(p){if(l=function(e){var r=e.length,t=new e.constructor(r);return r&&"string"==typeof e[0]&&We.call(e,"index")&&(t.index=e.index,t.input=e.input),t}(r),!f)return qe(r,l)}else{var v=pe(r),y=v==mr||v==br;if(ge(r))return $e(r,f);if(v==wr||v==hr||y&&!s){if(l=c||y?{}:lr(r),!f)return c?function(e,r){return Fe(e,Me(e),r)}(r,function(e,r){return e&&Fe(r,Ae(r),e)}(l,r)):function(e,r){return Fe(e,ue(e),r)}(r,function(e,r){return e&&Fe(r,se(r),e)}(l,r))}else{if(!jr[v])return s?r:{};l=ur(r,v,f)}}u||(u=new he);var g=u.get(r);if(g)return g;u.set(r,l),pr(r)?r.forEach((function(e){l.add(qr(e,a,i,e,r,u))})):cr(r)&&r.forEach((function(e,t){l.set(t,qr(e,a,i,t,r,u))}));var h=p?void 0:(d?c?_e:me:c?Ae:se)(r);return function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n&&!1!==r(e[t],t,e););}(h||r,(function(e,n){h&&(e=r[n=e]),t(l,n,qr(e,a,i,n,r,u))})),l}jr[hr]=jr["[object Array]"]=jr["[object ArrayBuffer]"]=jr["[object DataView]"]=jr["[object Boolean]"]=jr["[object Date]"]=jr["[object Float32Array]"]=jr["[object Float64Array]"]=jr["[object Int8Array]"]=jr["[object Int16Array]"]=jr["[object Int32Array]"]=jr["[object Map]"]=jr["[object Number]"]=jr[wr]=jr["[object RegExp]"]=jr["[object Set]"]=jr["[object String]"]=jr["[object Symbol]"]=jr["[object Uint8Array]"]=jr["[object Uint8ClampedArray]"]=jr["[object Uint16Array]"]=jr["[object Uint32Array]"]=!0,jr["[object Error]"]=jr[mr]=jr["[object WeakMap]"]=!1;function Fr(e){return qr(e,4)}const Or=p({size:{type:String,values:s},disabled:Boolean}),xr=p({...Or,model:Object,rules:{type:v(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:Boolean,scrollToError:Boolean,scrollIntoViewOptions:{type:[Object,Boolean]}}),Ar={validate:(e,r,t)=>(y(e)||g(e))&&h(r)&&g(t)};function Er(){const e=m([]),r=b((()=>{if(!e.value.length)return"0";const r=Math.max(...e.value);return r?`${r}px`:""}));function t(t){const n=e.value.indexOf(t);return-1===n&&r.value,n}return{autoLabelWidth:r,registerLabelWidth:function(r,n){if(r&&n){const a=t(n);e.value.splice(a,1,r)}else r&&e.value.push(r)},deregisterLabelWidth:function(r){const n=t(r);n>-1&&e.value.splice(n,1)}}}const Pr=(e,r)=>{const t=Pe(r);return t.length>0?e.filter((e=>e.prop&&t.includes(e.prop))):e},Sr=w({name:"ElForm"});var kr=R(w({...Sr,props:xr,emits:Ar,setup(e,{expose:r,emit:t}){const n=e,a=[],i=u(),o=j("form"),s=b((()=>{const{labelPosition:e,inline:r}=n;return[o.b(),o.m(i.value||"default"),{[o.m(`label-${e}`)]:e,[o.m("inline")]:r}]})),f=(e=[])=>{n.model&&Pr(a,e).forEach((e=>e.resetField()))},c=(e=[])=>{Pr(a,e).forEach((e=>e.clearValidate()))},d=b((()=>!!n.model)),p=async e=>y(void 0,e),v=async(e=[])=>{if(!d.value)return!1;const r=(e=>{if(0===a.length)return[];const r=Pr(a,e);return r.length?r:[]})(e);if(0===r.length)return!0;let t={};for(const a of r)try{await a.validate("")}catch(n){t={...t,...n}}return 0===Object.keys(t).length||Promise.reject(t)},y=async(e=[],r)=>{const t=!$(r);try{const t=await v(e);return!0===t&&(null==r||r(t)),t}catch(a){if(a instanceof Error)throw a;const e=a;return n.scrollToError&&g(Object.keys(e)[0]),null==r||r(!1,e),t&&Promise.reject(e)}},g=e=>{var r;const t=Pr(a,e)[0];t&&(null==(r=t.$el)||r.scrollIntoView(n.scrollIntoViewOptions))};return q((()=>n.rules),(()=>{n.validateOnRuleChange&&p().catch((e=>F()))}),{deep:!0}),O(l,x({...A(n),emit:t,resetFields:f,clearValidate:c,validateField:y,addField:e=>{a.push(e)},removeField:e=>{e.prop&&a.splice(a.indexOf(e),1)},...Er()})),r({validate:p,validateField:y,resetFields:f,clearValidate:c,scrollToField:g}),(e,r)=>(E(),P("form",{class:k(I(s))},[S(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);function Ir(){return Ir=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ir.apply(this,arguments)}function Rr(e){return Rr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Rr(e)}function $r(e,r){return $r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},$r(e,r)}function Br(e,r,t){return Br=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct.bind():function(e,r,t){var n=[null];n.push.apply(n,r);var a=new(Function.bind.apply(e,n));return t&&$r(a,t.prototype),a},Br.apply(null,arguments)}function Mr(e){var r="function"==typeof Map?new Map:void 0;return Mr=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return Br(e,arguments,Rr(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),$r(n,e)},Mr(e)}var _r=/%[sdj%]/g,Wr=function(){};function Dr(e){if(!e||!e.length)return null;var r={};return e.forEach((function(e){var t=e.field;r[t]=r[t]||[],r[t].push(e)})),r}function Vr(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var a=0,i=t.length;return"function"==typeof e?e.apply(null,t):"string"==typeof e?e.replace(_r,(function(e){if("%%"===e)return"%";if(a>=i)return e;switch(e){case"%s":return String(t[a++]);case"%d":return Number(t[a++]);case"%j":try{return JSON.stringify(t[a++])}catch(r){return"[Circular]"}break;default:return e}})):e}function zr(e,r){return null==e||(!("array"!==r||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"date"===e||"pattern"===e}(r)||"string"!=typeof e||e))}function Cr(e,r,t){var n=0,a=e.length;!function i(o){if(o&&o.length)t(o);else{var s=n;n+=1,s<a?r(e[s],i):t([])}}([])}"undefined"!=typeof process&&process.env;var Nr=function(e){var r,t;function n(r,t){var n;return(n=e.call(this,"Async Validation Error")||this).errors=r,n.fields=t,n}return t=e,(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,$r(r,t),n}(Mr(Error));function Lr(e,r,t,n,a){if(r.first){var i=new Promise((function(r,i){var o=function(e){var r=[];return Object.keys(e).forEach((function(t){r.push.apply(r,e[t]||[])})),r}(e);Cr(o,t,(function(e){return n(e),e.length?i(new Nr(e,Dr(e))):r(a)}))}));return i.catch((function(e){return e})),i}var o=!0===r.firstFields?Object.keys(e):r.firstFields||[],s=Object.keys(e),u=s.length,l=0,f=[],c=new Promise((function(r,i){var c=function(e){if(f.push.apply(f,e),++l===u)return n(f),f.length?i(new Nr(f,Dr(f))):r(a)};s.length||(n(f),r(a)),s.forEach((function(r){var n=e[r];-1!==o.indexOf(r)?Cr(n,t,c):function(e,r,t){var n=[],a=0,i=e.length;function o(e){n.push.apply(n,e||[]),++a===i&&t(n)}e.forEach((function(e){r(e,o)}))}(n,t,c)}))}));return c.catch((function(e){return e})),c}function Tr(e,r){return function(t){var n,a;return n=e.fullFields?function(e,r){for(var t=e,n=0;n<r.length;n++){if(null==t)return t;t=t[r[n]]}return t}(r,e.fullFields):r[t.field||e.fullField],(a=t)&&void 0!==a.message?(t.field=t.field||e.fullField,t.fieldValue=n,t):{message:"function"==typeof t?t():t,fieldValue:n,field:t.field||e.fullField}}}function Ur(e,r){if(r)for(var t in r)if(r.hasOwnProperty(t)){var n=r[t];"object"==typeof n&&"object"==typeof e[t]?e[t]=Ir({},e[t],n):e[t]=n}return e}var Jr,Gr=function(e,r,t,n,a,i){!e.required||t.hasOwnProperty(e.field)&&!zr(r,i||e.type)||n.push(Vr(a.messages.required,e.fullField))},Zr=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,Hr=/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,Kr={integer:function(e){return Kr.number(e)&&parseInt(e,10)===e},float:function(e){return Kr.number(e)&&!Kr.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(r){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear&&!isNaN(e.getTime())},number:function(e){return!isNaN(e)&&"number"==typeof e},object:function(e){return"object"==typeof e&&!Kr.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&e.length<=320&&!!e.match(Zr)},url:function(e){return"string"==typeof e&&e.length<=2048&&!!e.match(function(){if(Jr)return Jr;var e="[a-fA-F\\d:]",r=function(r){return r&&r.includeBoundaries?"(?:(?<=\\s|^)(?="+e+")|(?<="+e+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",a=("\n(?:\n(?:"+n+":){7}(?:"+n+"|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:"+n+":){6}(?:"+t+"|:"+n+"|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:"+n+":){5}(?::"+t+"|(?::"+n+"){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:"+n+":){4}(?:(?::"+n+"){0,1}:"+t+"|(?::"+n+"){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:"+n+":){3}(?:(?::"+n+"){0,2}:"+t+"|(?::"+n+"){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:"+n+":){2}(?:(?::"+n+"){0,3}:"+t+"|(?::"+n+"){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:"+n+":){1}(?:(?::"+n+"){0,4}:"+t+"|(?::"+n+"){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::"+n+"){0,5}:"+t+"|(?::"+n+"){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),i=new RegExp("(?:^"+t+"$)|(?:^"+a+"$)"),o=new RegExp("^"+t+"$"),s=new RegExp("^"+a+"$"),u=function(e){return e&&e.exact?i:new RegExp("(?:"+r(e)+t+r(e)+")|(?:"+r(e)+a+r(e)+")","g")};u.v4=function(e){return e&&e.exact?o:new RegExp(""+r(e)+t+r(e),"g")},u.v6=function(e){return e&&e.exact?s:new RegExp(""+r(e)+a+r(e),"g")};var l=u.v4().source,f=u.v6().source;return Jr=new RegExp("(?:^(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|"+l+"|"+f+'|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$)',"i")}())},hex:function(e){return"string"==typeof e&&!!e.match(Hr)}},Xr="enum",Yr={required:Gr,whitespace:function(e,r,t,n,a){(/^\s+$/.test(r)||""===r)&&n.push(Vr(a.messages.whitespace,e.fullField))},type:function(e,r,t,n,a){if(e.required&&void 0===r)Gr(e,r,t,n,a);else{var i=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(i)>-1?Kr[i](r)||n.push(Vr(a.messages.types[i],e.fullField,e.type)):i&&typeof r!==e.type&&n.push(Vr(a.messages.types[i],e.fullField,e.type))}},range:function(e,r,t,n,a){var i="number"==typeof e.len,o="number"==typeof e.min,s="number"==typeof e.max,u=r,l=null,f="number"==typeof r,c="string"==typeof r,d=Array.isArray(r);if(f?l="number":c?l="string":d&&(l="array"),!l)return!1;d&&(u=r.length),c&&(u=r.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),i?u!==e.len&&n.push(Vr(a.messages[l].len,e.fullField,e.len)):o&&!s&&u<e.min?n.push(Vr(a.messages[l].min,e.fullField,e.min)):s&&!o&&u>e.max?n.push(Vr(a.messages[l].max,e.fullField,e.max)):o&&s&&(u<e.min||u>e.max)&&n.push(Vr(a.messages[l].range,e.fullField,e.min,e.max))},enum:function(e,r,t,n,a){e[Xr]=Array.isArray(e[Xr])?e[Xr]:[],-1===e[Xr].indexOf(r)&&n.push(Vr(a.messages[Xr],e.fullField,e[Xr].join(", ")))},pattern:function(e,r,t,n,a){if(e.pattern)if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||n.push(Vr(a.messages.pattern.mismatch,e.fullField,r,e.pattern));else if("string"==typeof e.pattern){new RegExp(e.pattern).test(r)||n.push(Vr(a.messages.pattern.mismatch,e.fullField,r,e.pattern))}}},Qr=function(e,r,t,n,a){var i=e.type,o=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(zr(r,i)&&!e.required)return t();Yr.required(e,r,n,o,a,i),zr(r,i)||Yr.type(e,r,n,o,a)}t(o)},et={string:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(zr(r,"string")&&!e.required)return t();Yr.required(e,r,n,i,a,"string"),zr(r,"string")||(Yr.type(e,r,n,i,a),Yr.range(e,r,n,i,a),Yr.pattern(e,r,n,i,a),!0===e.whitespace&&Yr.whitespace(e,r,n,i,a))}t(i)},method:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(zr(r)&&!e.required)return t();Yr.required(e,r,n,i,a),void 0!==r&&Yr.type(e,r,n,i,a)}t(i)},number:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(""===r&&(r=void 0),zr(r)&&!e.required)return t();Yr.required(e,r,n,i,a),void 0!==r&&(Yr.type(e,r,n,i,a),Yr.range(e,r,n,i,a))}t(i)},boolean:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(zr(r)&&!e.required)return t();Yr.required(e,r,n,i,a),void 0!==r&&Yr.type(e,r,n,i,a)}t(i)},regexp:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(zr(r)&&!e.required)return t();Yr.required(e,r,n,i,a),zr(r)||Yr.type(e,r,n,i,a)}t(i)},integer:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(zr(r)&&!e.required)return t();Yr.required(e,r,n,i,a),void 0!==r&&(Yr.type(e,r,n,i,a),Yr.range(e,r,n,i,a))}t(i)},float:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(zr(r)&&!e.required)return t();Yr.required(e,r,n,i,a),void 0!==r&&(Yr.type(e,r,n,i,a),Yr.range(e,r,n,i,a))}t(i)},array:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(null==r&&!e.required)return t();Yr.required(e,r,n,i,a,"array"),null!=r&&(Yr.type(e,r,n,i,a),Yr.range(e,r,n,i,a))}t(i)},object:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(zr(r)&&!e.required)return t();Yr.required(e,r,n,i,a),void 0!==r&&Yr.type(e,r,n,i,a)}t(i)},enum:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(zr(r)&&!e.required)return t();Yr.required(e,r,n,i,a),void 0!==r&&Yr.enum(e,r,n,i,a)}t(i)},pattern:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(zr(r,"string")&&!e.required)return t();Yr.required(e,r,n,i,a),zr(r,"string")||Yr.pattern(e,r,n,i,a)}t(i)},date:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(zr(r,"date")&&!e.required)return t();var o;if(Yr.required(e,r,n,i,a),!zr(r,"date"))o=r instanceof Date?r:new Date(r),Yr.type(e,o,n,i,a),o&&Yr.range(e,o.getTime(),n,i,a)}t(i)},url:Qr,hex:Qr,email:Qr,required:function(e,r,t,n,a){var i=[],o=Array.isArray(r)?"array":typeof r;Yr.required(e,r,n,i,a,o),t(i)},any:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(zr(r)&&!e.required)return t();Yr.required(e,r,n,i,a)}t(i)}};function rt(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var tt=rt(),nt=function(){function e(e){this.rules=null,this._messages=tt,this.define(e)}var r=e.prototype;return r.define=function(e){var r=this;if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");this.rules={},Object.keys(e).forEach((function(t){var n=e[t];r.rules[t]=Array.isArray(n)?n:[n]}))},r.messages=function(e){return e&&(this._messages=Ur(rt(),e)),this._messages},r.validate=function(r,t,n){var a=this;void 0===t&&(t={}),void 0===n&&(n=function(){});var i=r,o=t,s=n;if("function"==typeof o&&(s=o,o={}),!this.rules||0===Object.keys(this.rules).length)return s&&s(null,i),Promise.resolve(i);if(o.messages){var u=this.messages();u===tt&&(u=rt()),Ur(u,o.messages),o.messages=u}else o.messages=this.messages();var l={};(o.keys||Object.keys(this.rules)).forEach((function(e){var t=a.rules[e],n=i[e];t.forEach((function(t){var o=t;"function"==typeof o.transform&&(i===r&&(i=Ir({},i)),n=i[e]=o.transform(n)),(o="function"==typeof o?{validator:o}:Ir({},o)).validator=a.getValidationMethod(o),o.validator&&(o.field=e,o.fullField=o.fullField||e,o.type=a.getType(o),l[e]=l[e]||[],l[e].push({rule:o,value:n,source:i,field:e}))}))}));var f={};return Lr(l,o,(function(r,t){var n,a=r.rule,s=!("object"!==a.type&&"array"!==a.type||"object"!=typeof a.fields&&"object"!=typeof a.defaultField);function u(e,r){return Ir({},r,{fullField:a.fullField+"."+e,fullFields:a.fullFields?[].concat(a.fullFields,[e]):[e]})}function l(n){void 0===n&&(n=[]);var l=Array.isArray(n)?n:[n];!o.suppressWarning&&l.length&&e.warning("async-validator:",l),l.length&&void 0!==a.message&&(l=[].concat(a.message));var c=l.map(Tr(a,i));if(o.first&&c.length)return f[a.field]=1,t(c);if(s){if(a.required&&!r.value)return void 0!==a.message?c=[].concat(a.message).map(Tr(a,i)):o.error&&(c=[o.error(a,Vr(o.messages.required,a.field))]),t(c);var d={};a.defaultField&&Object.keys(r.value).map((function(e){d[e]=a.defaultField})),d=Ir({},d,r.rule.fields);var p={};Object.keys(d).forEach((function(e){var r=d[e],t=Array.isArray(r)?r:[r];p[e]=t.map(u.bind(null,e))}));var v=new e(p);v.messages(o.messages),r.rule.options&&(r.rule.options.messages=o.messages,r.rule.options.error=o.error),v.validate(r.value,r.rule.options||o,(function(e){var r=[];c&&c.length&&r.push.apply(r,c),e&&e.length&&r.push.apply(r,e),t(r.length?r:null)}))}else t(c)}if(s=s&&(a.required||!a.required&&r.value),a.field=r.field,a.asyncValidator)n=a.asyncValidator(a,r.value,l,r.source,o);else if(a.validator){try{n=a.validator(a,r.value,l,r.source,o)}catch(c){console.error,o.suppressValidatorError||setTimeout((function(){throw c}),0),l(c.message)}!0===n?l():!1===n?l("function"==typeof a.message?a.message(a.fullField||a.field):a.message||(a.fullField||a.field)+" fails"):n instanceof Array?l(n):n instanceof Error&&l(n.message)}n&&n.then&&n.then((function(){return l()}),(function(e){return l(e)}))}),(function(e){!function(e){for(var r,t,n=[],a={},o=0;o<e.length;o++)r=e[o],t=void 0,Array.isArray(r)?n=(t=n).concat.apply(t,r):n.push(r);n.length?(a=Dr(n),s(n,a)):s(null,i)}(e)}),i)},r.getType=function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!et.hasOwnProperty(e.type))throw new Error(Vr("Unknown rule type %s",e.type));return e.type||"string"},r.getValidationMethod=function(e){if("function"==typeof e.validator)return e.validator;var r=Object.keys(e),t=r.indexOf("message");return-1!==t&&r.splice(t,1),1===r.length&&"required"===r[0]?et.required:et[this.getType(e)]||void 0},e}();nt.register=function(e,r){if("function"!=typeof r)throw new Error("Cannot register a validator by type, validator is not a function");et[e]=r},nt.warning=Wr,nt.messages=tt,nt.validators=et;const at=p({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:v([String,Array])},required:{type:Boolean,default:void 0},rules:{type:v([Object,Array])},error:String,validateStatus:{type:String,values:["","error","validating","success"]},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:s}}),it="ElLabelWrap";var ot=w({name:it,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(e,{slots:r}){const t=B(l,void 0),n=B(f);n||M(it,"usage: <el-form-item><label-wrap /></el-form-item>");const a=j("form"),i=m(),o=m(0),s=(n="update")=>{N((()=>{r.default&&e.isAutoWidth&&("update"===n?o.value=(()=>{var e;if(null==(e=i.value)?void 0:e.firstElementChild){const e=window.getComputedStyle(i.value.firstElementChild).width;return Math.ceil(Number.parseFloat(e))}return 0})():"remove"===n&&(null==t||t.deregisterLabelWidth(o.value)))}))},u=()=>s("update");return _((()=>{u()})),W((()=>{s("remove")})),D((()=>u())),q(o,((r,n)=>{e.updateAll&&(null==t||t.registerLabelWidth(r,n))})),V(b((()=>{var e,r;return null!=(r=null==(e=i.value)?void 0:e.firstElementChild)?r:null})),u),()=>{var s,u;if(!r)return null;const{isAutoWidth:l}=e;if(l){const e=null==t?void 0:t.autoLabelWidth,u={};if((null==n?void 0:n.hasLabel)&&e&&"auto"!==e){const r=Math.max(0,Number.parseInt(e,10)-o.value),n="left"===t.labelPosition?"marginRight":"marginLeft";r&&(u[n]=`${r}px`)}return z("div",{ref:i,class:[a.be("item","label-wrap")],style:u},[null==(s=r.default)?void 0:s.call(r)])}return z(C,{ref:i},[null==(u=r.default)?void 0:u.call(r)])}}});const st=["role","aria-labelledby"],ut=w({name:"ElFormItem"}),lt=w({...ut,props:at,setup(e,{expose:r}){const t=e,n=L(),a=B(l,void 0),i=B(f,void 0),o=u(void 0,{formItem:!1}),s=j("form-item"),p=c().value,v=m([]),y=m(""),w=T(y,100),F=m(""),R=m();let M,D=!1;const V=b((()=>{if("top"===(null==a?void 0:a.labelPosition))return{};const e=U(t.labelWidth||(null==a?void 0:a.labelWidth)||"");return e?{width:e}:{}})),C=b((()=>{if("top"===(null==a?void 0:a.labelPosition)||(null==a?void 0:a.inline))return{};if(!t.label&&!t.labelWidth&&ue)return{};const e=U(t.labelWidth||(null==a?void 0:a.labelWidth)||"");return t.label||n.label?{}:{marginLeft:e}})),re=b((()=>[s.b(),s.m(o.value),s.is("error","error"===y.value),s.is("validating","validating"===y.value),s.is("success","success"===y.value),s.is("required",de.value||t.required),s.is("no-asterisk",null==a?void 0:a.hideRequiredAsterisk),"right"===(null==a?void 0:a.requireAsteriskPosition)?"asterisk-right":"asterisk-left",{[s.m("feedback")]:null==a?void 0:a.statusIcon}])),te=b((()=>h(t.inlineMessage)?t.inlineMessage:(null==a?void 0:a.inlineMessage)||!1)),ne=b((()=>[s.e("error"),{[s.em("error","inline")]:te.value}])),ae=b((()=>t.prop?g(t.prop)?t.prop:t.prop.join("."):"")),ie=b((()=>!(!t.label&&!n.label))),oe=b((()=>t.for||(1===v.value.length?v.value[0]:void 0))),se=b((()=>!oe.value&&ie.value)),ue=!!i,le=b((()=>{const e=null==a?void 0:a.model;if(e&&t.prop)return d(e,t.prop).value})),fe=b((()=>{const{required:e}=t,r=[];t.rules&&r.push(...Pe(t.rules));const n=null==a?void 0:a.rules;if(n&&t.prop){const e=d(n,t.prop).value;e&&r.push(...Pe(e))}if(void 0!==e){const t=r.map(((e,r)=>[e,r])).filter((([e])=>Object.keys(e).includes("required")));if(t.length>0)for(const[n,a]of t)n.required!==e&&(r[a]={...n,required:e});else r.push({required:e})}return r})),ce=b((()=>fe.value.length>0)),de=b((()=>fe.value.some((e=>e.required)))),pe=b((()=>{var e;return"error"===w.value&&t.showMessage&&(null==(e=null==a?void 0:a.showMessage)||e)})),ve=b((()=>`${t.label||""}${(null==a?void 0:a.labelSuffix)||""}`)),ye=e=>{y.value=e},ge=async e=>{const r=ae.value;return new nt({[r]:e}).validate({[r]:le.value},{firstFields:!0}).then((()=>(ye("success"),null==a||a.emit("validate",t.prop,!0,""),!0))).catch((e=>((e=>{var r,n;const{errors:i,fields:o}=e;ye("error"),F.value=i?null!=(n=null==(r=null==i?void 0:i[0])?void 0:r.message)?n:`${t.prop} is required`:"",null==a||a.emit("validate",t.prop,!1,F.value)})(e),Promise.reject(e))))},he=async(e,r)=>{if(D||!t.prop)return!1;const n=$(r);if(!ce.value)return null==r||r(!1),!1;const a=(e=>fe.value.filter((r=>!r.trigger||!e||(Array.isArray(r.trigger)?r.trigger.includes(e):r.trigger===e))).map((({trigger:e,...r})=>r)))(e);return 0===a.length?(null==r||r(!0),!0):(ye("validating"),ge(a).then((()=>(null==r||r(!0),!0))).catch((e=>{const{fields:t}=e;return null==r||r(!1,t),!n&&Promise.reject(t)})))},me=()=>{ye(""),F.value="",D=!1},be=async()=>{const e=null==a?void 0:a.model;if(!e||!t.prop)return;const r=d(e,t.prop);D=!0,r.value=Fr(M),await N(),me(),D=!1};q((()=>t.error),(e=>{F.value=e||"",ye(e?"error":"")}),{immediate:!0}),q((()=>t.validateStatus),(e=>ye(e||"")));const we=x({...A(t),$el:R,size:o,validateState:y,labelId:p,inputIds:v,isGroup:se,hasLabel:ie,addInputId:e=>{v.value.includes(e)||v.value.push(e)},removeInputId:e=>{v.value=v.value.filter((r=>r!==e))},resetField:be,clearValidate:me,validate:he});return O(f,we),_((()=>{t.prop&&(null==a||a.addField(we),M=Fr(le.value))})),W((()=>{null==a||a.removeField(we)})),r({size:o,validateMessage:F,validateState:y,validate:he,clearValidate:me,resetField:be}),(e,r)=>{var t;return E(),P("div",{ref_key:"formItemRef",ref:R,class:k(I(re)),role:I(se)?"group":void 0,"aria-labelledby":I(se)?I(p):void 0},[z(I(ot),{"is-auto-width":"auto"===I(V).width,"update-all":"auto"===(null==(t=I(a))?void 0:t.labelWidth)},{default:J((()=>[I(ie)?(E(),G(Z(I(oe)?"label":"div"),{key:0,id:I(p),for:I(oe),class:k(I(s).e("label")),style:H(I(V))},{default:J((()=>[S(e.$slots,"label",{label:I(ve)},(()=>[K(X(I(ve)),1)]))])),_:3},8,["id","for","class","style"])):Y("v-if",!0)])),_:3},8,["is-auto-width","update-all"]),Q("div",{class:k(I(s).e("content")),style:H(I(C))},[S(e.$slots,"default"),z(ee,{name:`${I(s).namespace.value}-zoom-in-top`},{default:J((()=>[I(pe)?S(e.$slots,"error",{key:0,error:F.value},(()=>[Q("div",{class:k(I(ne))},X(F.value),3)])):Y("v-if",!0)])),_:3},8,["name"])],6)],10,st)}}});var ft=R(lt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const ct=re(kr,{FormItem:ft}),dt=te(ft);export{dt as E,qe as a,$e as b,Fe as c,Ne as d,ct as e,qr as f,Ee as g,lr as i,Ae as k};
