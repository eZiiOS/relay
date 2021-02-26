(window.webpackJsonp=window.webpackJsonp||[]).push([[926],{1e3:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var i=t(3),a=t(7),r=(t(0),t(1069)),o=t(1075),s=t(1070),l={id:"blocking-pagination",title:"Blocking Pagination",slug:"/guided-tour/list-data/blocking-pagination/"},c={unversionedId:"guided-tour/list-data/blocking-pagination",id:"guided-tour/list-data/blocking-pagination",isDocsHomePage:!1,title:"Blocking Pagination",description:'Blocking ("all-at-once") Pagination [Concurrent Mode Only]',source:"@site/docs/guided-tour/list-data/blocking-pagination.md",slug:"/guided-tour/list-data/blocking-pagination/",permalink:"/docs/next/guided-tour/list-data/blocking-pagination/",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/docs/guided-tour/list-data/blocking-pagination.md",version:"current",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1614355063,sidebar:"docs",previous:{title:"Streaming Pagination",permalink:"/docs/next/guided-tour/list-data/streaming-pagination/"},next:{title:"Refetching Connections",permalink:"/docs/next/guided-tour/list-data/refetching-connections/"}},u=[{value:"Blocking (&quot;all-at-once&quot;) Pagination Concurrent Mode Only",id:"blocking-all-at-once-pagination-concurrent-mode-only",children:[]}],d={toc:u};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"blocking-all-at-once-pagination-concurrent-mode-only"},'Blocking ("all-at-once") Pagination ',"[Concurrent Mode Only]"),Object(r.b)("p",null,"So far when we've talked about pagination, we haven't specified how we want pagination to behave when we're rendering the new item's we've fetched. Since the new items that we're fetching and rendering might individually suspend due to their own asynchronous dependencies (",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"../../rendering/loading-states/"}),"Loading States With Suspense"),"), we need to be able to specify what kind of behavior we want to have as we render them."),Object(r.b)("p",null,"Usually, we've identified that this will fall under one of these 2 categories:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},'"One by one"'),' (or "stream-y") pagination: Regardless of whether we\'re actually streaming at the data layer, conceptually this type of pagination is where we want to render items one by one, in order, as they become available. In this use case, we usually want to show some sort of loading placeholder for the new items (either in aggregate or for each individual item) as they are loaded in. This should not exclude the possibility of ',Object(r.b)("em",{parentName:"li"},"also")," having a ",Object(r.b)("em",{parentName:"li"},"separate")," pending or busy state (like a spinner next to the button that started the action). This is generally the default pagination behavior that we'll want, which applies to most lists and feeds.")),Object(r.b)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"See ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://fb.workplace.com/notes/sebastian-markbage/3-paints/462082611213402/"}),"this guide")," about pending and busy states."))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},'"All at once"')," pagination: This type of pagination is where we want to load and render the entire next page of items ",Object(r.b)("em",{parentName:"li"},"all at once,")," in a ",Object(r.b)("em",{parentName:"li"},"single paint"),"; that is, we want to render the next page of items only when ",Object(r.b)("em",{parentName:"li"},"all"),' of the items are ready (including when individual items suspend). Unlike the previous case, in this case, we do not want to show individual placeholders for the new items in the list, but instead we want to immediately show a pending or busy state, such as a spinner next (or close) to the element that started the action (like a button); this pending spinner should continue "spinning" until the entire next page of items are ',Object(r.b)("em",{parentName:"li"},"fully")," loaded and rendered.")),Object(r.b)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The best example of a use case for blocking pagination is the comments list in UFI."))),Object(r.b)("p",null,"So far in the previous pagination sections, we've implicitly been referring to the ",Object(r.b)("em",{parentName:"p"},'"one by one"')," pagination case when describe using ",Object(r.b)("inlineCode",{parentName:"p"},"usePaginationFragment")," + ",Object(r.b)("inlineCode",{parentName:"p"},"SuspenseList")," to render lists and show loading placeholders."),Object(r.b)("p",null,"However, if we want to implement ",Object(r.b)("em",{parentName:"p"},'"all at once"')," pagination, we need to use a different api, ",Object(r.b)("inlineCode",{parentName:"p"},"useBlockingPaginationFragment"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"import type {FriendsListPaginationQuery} from 'FriendsListPaginationQuery.graphql';\nimport type {FriendsListComponent_user$key} from 'FriendsList_user.graphql';\n\nconst React = require('React');\nconst {Suspense} = require('React');\n\nconst {graphql, useBlockingPaginationFragment} = require('react-relay');\nconst SuspenseList = require('SuspenseList');\nconst useSuspenseTransition = require('useSuspenseTransition');\n\ntype Props = {\n  user: FriendsListComponent_user$key,\n};\n\nconst SUSPENSE_CONFIG = {\n  // timeoutMs allows us to delay showing the \"loading\" state for a while\n  // in favor of showing a \"pending\" state that we control locally\n  timeoutMs: 30 * 1000,\n};\n\nfunction FriendsListComponent(props: Props) {\n  // isPending captures the \"pending\" state. It will become true\n  // **immediately** when the pagination transition starts, and will be set back\n  // to false when the transition reaches the fully \"completed\" stage\n  // (i.e. when all the new items in the list have fully loaded and rendered)\n  const [startTransition, isPending] = useSuspenseTransition(SUSPENSE_CONFIG);\n  const {\n    data,\n    loadNext,\n    hasNext,\n  } = `useBlockingPaginationFragment``<``FriendsListPaginationQuery``,`` _``>`(\n    graphql`\n      fragment FriendsListComponent_user on User\n      @refetchable(queryName: \"FriendsListPaginationQuery\") {\n        name\n        friends(first: $count, after: $cursor)\n        @connection(key: \"FriendsList_user_friends\") {\n          edges {\n            node {\n              name\n              age\n            }\n          }\n        }\n      }\n    `,\n    props.user,\n  );\n\n  return (\n    <>\n      <h1>Friends of {data.name}:</h1>\n      <SuspenseList revealOrder=\"forwards\">\n        {(data.friends?.edges ?? []).map(edge => {\n          const node = edge.node;\n          return (\n            <Suspense fallback={<Glimmer />}>\n              <FriendComponent user={node} />\n            </Suspense>\n          );\n        })}\n      </SuspenseList>\n\n      {/* Render a Spinner next to the button immediately, while transition is pending */}\n      {isPending ? <Spinner /> : null}\n\n      {hasNext ? (\n        <Button\n          {/* Disbale the button immediately, while transition is pending */}\n          disabled={isPending}\n          onClick={() => {\n            startTransition(() => {\n              loadNext(10)\n            });\n          }}>\n          Load more friends\n        </Button>\n      ) : null}\n    </>\n  );\n}\n\nmodule.exports = FriendsListComponent;\n")),Object(r.b)("p",null,"Let's distill what's going on here:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"loadNext")," will cause the component to suspend, so we need to wrap it in ",Object(r.b)("inlineCode",{parentName:"li"},"startTransition"),", as explained in ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"../../rendering/loading-states/"}),"Transitions and Updates that Suspend"),"."),Object(r.b)("li",{parentName:"ul"},"Also similarly to the case described in ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"../../rendering/loading-states/"}),"Transitions and Updates that Suspend"),", we're passing the ",Object(r.b)("inlineCode",{parentName:"li"},"SUSPENSE_CONFIG")," config object to ",Object(r.b)("inlineCode",{parentName:"li"},"useSuspenseTransition")," in order to configure how we want this transition to behave. Specifically, we can pass a ",Object(r.b)("inlineCode",{parentName:"li"},"timeoutMs")," property in the config, which will dictate how long React should wait before transitioning to the ",Object(r.b)("em",{parentName:"li"},'"loading"')," state (i.e. transition to showing the loading placeholders for the new items), in favor of showing a ",Object(r.b)("em",{parentName:"li"},'"pending"')," state controlled locally by the component during that time."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"useSuspenseTransition")," will also return a ",Object(r.b)("inlineCode",{parentName:"li"},"isPending")," boolean value, which captures the pending state. That is, this value will become ",Object(r.b)("inlineCode",{parentName:"li"},"true")," ",Object(r.b)("em",{parentName:"li"},"immediately")," when the pagination transition starts, and will become ",Object(r.b)("inlineCode",{parentName:"li"},"false")," when the transition reaches the fully ",Object(r.b)("em",{parentName:"li"},'"completed"')," stage, that is, when all the new items have been ",Object(r.b)("em",{parentName:"li"},"fully")," loaded, including their own asynchronous dependencies that would cause them to suspend. We can use the ",Object(r.b)("inlineCode",{parentName:"li"},"isPending")," value to show immediate feedback to the user action, in this case by rendering a spinner next to the button and disabling the button. In this case, the spinner will be rendered and the button will be disable until ",Object(r.b)("em",{parentName:"li"},"all")," the new items in the list have been fully loaded and rendered.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"NOTE: If you're using pagination outside of React Concurrent mode, ",Object(r.b)("inlineCode",{parentName:"p"},"useBlockingPagination")," functionality will not be available; you will need to use ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"../pagination/"}),Object(r.b)("inlineCode",{parentName:"a"},"usePaginationFragment"))," instead.")),Object(r.b)(o.a,{mdxType:"DocsRating"}))}p.isMDXComponent=!0},1069:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=i,h=d["".concat(o,".").concat(b)]||d[b]||p[b]||r;return t?a.a.createElement(h,s(s({ref:n},c),{},{components:t})):a.a.createElement(h,s({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},1070:function(e,n,t){"use strict";(function(e){var i=this&&this.__createBinding||(Object.create?function(e,n,t,i){void 0===i&&(i=t),Object.defineProperty(e,i,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,i){void 0===i&&(i=t),e[i]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&i(n,e,t);return a(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.bloks=void 0,n.bloks=r(t(1073));const o=["internal","external"];let s;try{s=t(1071).usePluginData}catch(p){s=null}function l(e){return u(e),d()?"internal"in e?c(e.internal):[]:"external"in e?c(e.external):[]}function c(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const n=Object.keys(e).filter((e=>!o.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${o}`)}function d(){return e.env.FB_INTERNAL||s&&s("internaldocs-fb").FB_INTERNAL}n.fbContent=l,n.fbInternalOnly=function(e){return l({internal:e})},n.validateFbContentArgs=u,n.isInternal=d,n.FbInternalOnly=function(e){return d()?e.children:null},n.OssOnly=function(e){return d()?null:e.children}}).call(this,t(1072))},1071:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a})),t.d(n,"useAllPluginInstancesData",(function(){return r})),t.d(n,"usePluginData",(function(){return o}));var i=t(22);function a(){var e=Object(i.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function r(e){var n=a()[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return n}function o(e,n){void 0===n&&(n="default");var t=r(e)[n];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+n);return t}},1072:function(e,n){var t,i,a=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(e){t=r}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var l,c=[],u=!1,d=-1;function p(){u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&b())}function b(){if(!u){var e=s(p);u=!0;for(var n=c.length;n;){for(l=c,c=[];++d<n;)l&&l[d].run();d=-1,n=c.length}l=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(n){try{return i.call(null,e)}catch(n){return i.call(this,e)}}}(e)}}function h(e,n){this.fun=e,this.array=n}function f(){}a.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];c.push(new h(e,n)),1!==c.length||u||s(b)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=f,a.addListener=f,a.once=f,a.off=f,a.removeListener=f,a.removeAllListeners=f,a.emit=f,a.prependListener=f,a.prependOnceListener=f,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},1073:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(a,r){function o(e){try{l(i.next(e))}catch(n){r(n)}}function s(e){try{l(i.throw(e))}catch(n){r(n)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}l((i=i.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const a=t(1074);n.getSpecInfo=function(e){return i(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},1074:function(e,n,t){"use strict";var i=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(a,r){function o(e){try{l(i.next(e))}catch(n){r(n)}}function s(e){try{l(i.throw(e))}catch(n){r(n)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}l((i=i.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let a=!1,r=0;const o={};n.call=function(e){return i(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in o||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?o[n].resolve(e.data.response):o[n].reject(new Error(e.data.error)),delete o[n]})));const n=r++,t=new Promise(((e,t)=>{o[n]={resolve:e,reject:t}})),i={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},s="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(i,s),t}))}},1075:function(e,n,t){"use strict";t(60);var i=t(1070),a=t(0);var r=function(){var e=a.useState(!1),n=e[0],t=e[1],i=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),"Thank you for letting us know!"):a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return i(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return i(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},o=function(){return null};n.a=function(){return Object(i.fbContent)({internal:a.createElement(o,null),external:a.createElement(r,null)})}}}]);