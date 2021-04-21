(window.webpackJsonp=window.webpackJsonp||[]).push([[569],{1142:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(r),b=n,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return r?a.a.createElement(f,l(l({ref:t},s),{},{components:r})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},654:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return c}));var n=r(3),a=r(8),o=(r(0),r(1142)),i={id:"routing",title:"Routing",original_id:"routing"},l={unversionedId:"routing",id:"version-v6.0.0/routing",isDocsHomePage:!1,title:"Routing",description:"Historically, Relay started out internally at Facebook as a routing framework. However, Relay no longer makes any assumptions about routing, and works with a variety of routing options.",source:"@site/versioned_docs/version-v6.0.0/Modern-Routing.md",slug:"/routing",permalink:"/docs/v6.0.0/routing",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v6.0.0/Modern-Routing.md",version:"v6.0.0",lastUpdatedBy:"Alex Hornby",lastUpdatedAt:1619007531,sidebar:"version-v6.0.0/docs",previous:{title:"fetchQuery",permalink:"/docs/v6.0.0/fetch-query"},next:{title:"Debugging",permalink:"/docs/v6.0.0/relay-debugging"}},u=[{value:"No Routing",id:"no-routing",children:[]},{value:"Flat Routes",id:"flat-routes",children:[]},{value:"Nested Routes",id:"nested-routes",children:[{value:"React Router",id:"react-router",children:[]},{value:"Found",id:"found",children:[]}]},{value:"Custom Routing and More",id:"custom-routing-and-more",children:[]}],s={toc:u};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Historically, Relay started out internally at Facebook as a routing framework. However, Relay no longer makes any assumptions about routing, and works with a variety of routing options."),Object(o.b)("h2",{id:"no-routing"},"No Routing"),Object(o.b)("p",null,"If the Relay part of an application is some widget or single view as part of a larger application, you don't need any routing. You can just render a ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRenderer")," somewhere on the page to fetch and render the data you need there. This option is simple and should be used when sufficient."),Object(o.b)("h2",{id:"flat-routes"},"Flat Routes"),Object(o.b)("p",null,"When not nesting routes with Relay data dependencies, such as when using flat routes, it is sufficient to just render a ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRenderer")," for the parts of your application that require Relay data. You can also use the options below that integrate your routes with their data dependencies."),Object(o.b)("h2",{id:"nested-routes"},"Nested Routes"),Object(o.b)("p",null,"Nested routes with Relay data dependencies introduce an additional complication. While it's possible to render a ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRenderer")," per route, doing so will lead to request waterfalls in the general case where parent routes do not render their child routes until the data for those parent routes are available. This generally leads to an unnecessary additional delay in loading the data for the page, but may be acceptable for small applications or for applications with shallow route trees."),Object(o.b)("p",null,"Integration options are available for open-source routing libraries that can instead fetch data for nested routes in parallel. In many of these cases, using a batching network layer can bring additional benefits in avoiding sending multiple HTTP requests."),Object(o.b)("h3",{id:"react-router"},Object(o.b)("a",Object(n.a)({parentName:"h3"},{href:"https://reacttraining.com/react-router/"}),"React Router")),Object(o.b)("p",null,"Integration with Relay Classic for React Router v2 or v3 is available via ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/relay-tools/react-router-relay"}),Object(o.b)("inlineCode",{parentName:"a"},"react-router-relay")),", which will aggregate the queries for matched routes, and request data for all routes in parallel."),Object(o.b)("p",null,"The component-based approach of React Router v4 does not readily allow for aggregating the data requirements for nested routes, and as such does not readily permit an approach that will avoid request waterfalls from nesting ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRenderer")," components."),Object(o.b)("h3",{id:"found"},Object(o.b)("a",Object(n.a)({parentName:"h3"},{href:"https://github.com/4Catalyzer/found"}),"Found")),Object(o.b)("p",null,"Found offers integration with Relay Modern and Relay Classic via ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/4Catalyzer/found-relay"}),"Found Relay"),". Found Relay runs queries for matched routes in parallel, and supports fetching Relay data in parallel with downloading async bundles from code splitting when using Relay Modern."),Object(o.b)("h2",{id:"custom-routing-and-more"},"Custom Routing and More"),Object(o.b)("p",null,"The options listed above are not exhaustive. If you are aware of other routing solutions that work well with Relay Modern, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/relay/issues/new"}),"please let us know"),"."))}c.isMDXComponent=!0}}]);