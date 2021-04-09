(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r,a=n(3),i=n(8),o=(n(0),n(323)),c={id:"declarative-mutation-directives",title:"Debugging Declarative Mutation Directives",slug:"/debugging/declarative-mutation-directives/",description:"Debugging declarative mutation directives",keywords:["debugging","troubleshooting","declarative mutation directive","deleteRecord","handlerProvider","appendEdge","prependEdge","appendNode","prependNode"]},d={unversionedId:"debugging/declarative-mutation-directives",id:"debugging/declarative-mutation-directives",isDocsHomePage:!1,title:"Debugging Declarative Mutation Directives",description:"Debugging declarative mutation directives",source:"@site/docs/debugging/declarative-mutation-directives.md",slug:"/debugging/declarative-mutation-directives/",permalink:"/docs/next/debugging/declarative-mutation-directives/",editUrl:"https://github.com/facebook/relay/edit/master/website/docs/debugging/declarative-mutation-directives.md",version:"current",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1617999378,sidebar:"docs",previous:{title:"Inconsistent Typename Error",permalink:"/docs/next/debugging/inconsistent-typename-error/"},next:{title:"Thinking in GraphQL",permalink:"/docs/next/principles-and-architecture/thinking-in-graphql/"}},l=[],p=(r="FbEnvHandlerExample",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),u={toc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you see an error similar to:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"RelayFBHandlerProvider: No handler defined for `deleteRecord`. [Caught in: An uncaught error was thrown inside `RelayObservable`.]\n")),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"RelayModernEnvironment: Expected a handler to be provided for handle `deleteRecord`.\n")),Object(o.b)("p",null,"This probably means that you are using a Relay environment to which a ",Object(o.b)("inlineCode",{parentName:"p"},"handlerProvider")," is passed. However, the handler provider does not know how to accept the handles ",Object(o.b)("inlineCode",{parentName:"p"},'"deleteRecord"'),", ",Object(o.b)("inlineCode",{parentName:"p"},'"appendEdge"')," or ",Object(o.b)("inlineCode",{parentName:"p"},'"prependEdge"'),". If this is the case, you should return ",Object(o.b)("inlineCode",{parentName:"p"},"MutationHandlers.DeleteRecordHandler"),", ",Object(o.b)("inlineCode",{parentName:"p"},"MutationHandlers.AppendEdgeHandler"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"MutationHandlers.PrependEdgeHandler")," respectively (these can be imported from ",Object(o.b)("inlineCode",{parentName:"p"},"relay-runtime"),")."),Object(o.b)(p,{mdxType:"FbEnvHandlerExample"}))}s.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,g=u["".concat(o,".").concat(b)]||u[b]||s[b]||i;return n?a.a.createElement(g,c(c({ref:t},l),{},{components:n})):a.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);