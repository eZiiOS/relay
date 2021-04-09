(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{190:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return u})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return d}));var r=n(3),o=n(8),a=(n(0),n(323)),i=n(329),c=(n(324),{id:"introduction",title:"Introduction",slug:"/guided-tour/updating-data/",description:"Relay guide to updating data",keywords:["updating","mutation","useMutation","commitMutation"]}),u={unversionedId:"guided-tour/updating-data/introduction",id:"guided-tour/updating-data/introduction",isDocsHomePage:!1,title:"Introduction",description:"Relay guide to updating data",source:"@site/docs/guided-tour/updating-data/introduction.md",slug:"/guided-tour/updating-data/",permalink:"/docs/next/guided-tour/updating-data/",editUrl:"https://github.com/facebook/relay/edit/master/website/docs/guided-tour/updating-data/introduction.md",version:"current",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1617984473,sidebar:"docs",previous:{title:"Advanced Pagination",permalink:"/docs/next/guided-tour/list-data/advanced-pagination/"},next:{title:"GraphQL Mutations",permalink:"/docs/next/guided-tour/updating-data/graphql-mutations/"}},l=[],s={toc:l};function d(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Relay holds a local in-memory store of normalized GraphQL data, which accumulates data as GraphQL queries are made throughout usage of our app; think of it as a local database of GraphQL data. When records are updated, any components affected by the updated data will be notified and re-rendered with the updated data."),Object(a.b)("p",null,"In this section, we're going to go over how to update data in the server as well as how to update our local data store accordingly, ensuring that our components are kept in sync with the latest data."),Object(a.b)(i.a,{mdxType:"DocsRating"}))}d.isMDXComponent=!0},323:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=o.a.createContext({}),s=function(t){var e=o.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},d=function(t){var e=s(t.components);return o.a.createElement(l.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},p=o.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),d=s(n),p=r,h=d["".concat(i,".").concat(p)]||d[p]||f[p]||a;return n?o.a.createElement(h,c(c({ref:e},l),{},{components:n})):o.a.createElement(h,c({ref:e},l))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},324:function(t,e,n){"use strict";(function(t){var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return o(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.OssOnly=e.FbInternalOnly=e.isInternal=e.validateFbContentArgs=e.fbInternalOnly=e.fbContent=e.bloks=void 0,e.bloks=a(n(327));const i=["internal","external"];let c;try{c=n(325).usePluginData}catch(f){c=null}function u(t){return s(t),d()?"internal"in t?l(t.internal):[]:"external"in t?l(t.external):[]}function l(t){return"function"==typeof t?t():t}function s(t){if("object"!=typeof t)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${t}`);if(!Object.keys(t).find((t=>i.find((e=>e===t)))))throw new Error(`No valid args found in ${JSON.stringify(t)}. Accepted keys: ${i}`);const e=Object.keys(t).filter((t=>!i.find((e=>e===t))));if(e.length>0)throw new Error(`Unexpected keys ${e} found in fbContent() args. Accepted keys: ${i}`)}function d(){return t.env.FB_INTERNAL||c&&c("internaldocs-fb").FB_INTERNAL}e.fbContent=u,e.fbInternalOnly=function(t){return u({internal:t})},e.validateFbContentArgs=s,e.isInternal=d,e.FbInternalOnly=function(t){return d()?t.children:null},e.OssOnly=function(t){return d()?null:t.children}}).call(this,n(326))},325:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o})),n.d(e,"useAllPluginInstancesData",(function(){return a})),n.d(e,"usePluginData",(function(){return i}));var r=n(22);function o(){var t=Object(r.default)().globalData;if(!t)throw new Error("Docusaurus global data not found");return t}function a(t){var e=o()[t];if(!e)throw new Error("Docusaurus plugin global data not found for pluginName="+t);return e}function i(t,e){void 0===e&&(e="default");var n=a(t)[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+t+" and pluginId="+e);return n}},326:function(t,e){var n,r,o=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(t){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var u,l=[],s=!1,d=-1;function f(){s&&u&&(s=!1,u.length?l=u.concat(l):d=-1,l.length&&p())}function p(){if(!s){var t=c(f);s=!0;for(var e=l.length;e;){for(u=l,l=[];++d<e;)u&&u[d].run();d=-1,e=l.length}u=null,s=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new h(t,e)),1!==l.length||s||c(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},327:function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{u(r.next(t))}catch(e){a(e)}}function c(t){try{u(r.throw(t))}catch(e){a(e)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}u((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.getSpecInfo=void 0;const o=n(328);e.getSpecInfo=function(t){return r(this,void 0,void 0,(function*(){return yield o.call({module:"bloks",api:"getSpecInfo",args:{styleId:t}})}))}},328:function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{u(r.next(t))}catch(e){a(e)}}function c(t){try{u(r.throw(t))}catch(e){a(e)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}u((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.call=void 0;let o=!1,a=0;const i={};e.call=function(t){return r(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));o||(o=!0,window.addEventListener("message",(t=>{if("static-docs-bridge-response"!==t.data.event)return;const e=t.data.id;e in i||console.error(`Recieved response for id: ${e} with no matching receiver`),"response"in t.data?i[e].resolve(t.data.response):i[e].reject(new Error(t.data.error)),delete i[e]})));const e=a++,n=new Promise(((t,n)=>{i[e]={resolve:t,reject:n}})),r={event:"static-docs-bridge-call",id:e,module:t.module,api:t.api,args:t.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,c),n}))}},329:function(t,e,n){"use strict";n(61);var r=n(324),o=n(0);function a(){var t=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+t)}function i(t){var e=t.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),e)}var c=function(){var t=o.useState(!1),e=t[0],n=t[1],r=function(t){n(!0),function(t){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:t})}(t)};return e?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},u=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:a},"Filing a task"))},l=function(){return o.createElement(i,null,o.createElement(u,null),o.createElement(c,null))},s=function(){return o.createElement(i,null,o.createElement(c,null))};e.a=function(){return Object(r.fbContent)({internal:o.createElement(l,null),external:o.createElement(s,null)})}}}]);