(window.webpackJsonp=window.webpackJsonp||[]).push([[820],{1142:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=l(r),h=a,m=b["".concat(p,".").concat(h)]||b[h]||u[h]||o;return r?n.a.createElement(m,c(c({ref:t},s),{},{components:r})):n.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var s=2;s<o;s++)p[s]=r[s];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},899:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(8),o=(r(0),r(1142)),p={id:"prerequisites",title:"Prerequisites",original_id:"prerequisites"},c={unversionedId:"prerequisites",id:"version-v9.1.0/prerequisites",isDocsHomePage:!1,title:"Prerequisites",description:"React",source:"@site/versioned_docs/version-v9.1.0/Introduction-Prerequisites.md",slug:"/prerequisites",permalink:"/docs/v9.1.0/prerequisites",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v9.1.0/Introduction-Prerequisites.md",version:"v9.1.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1618892859,sidebar:"version-v9.1.0/docs",previous:{title:"Introduction to Relay",permalink:"/docs/v9.1.0/"},next:{title:"Installation and Setup",permalink:"/docs/v9.1.0/installation-and-setup"}},i=[{value:"React",id:"react",children:[]},{value:"GraphQL",id:"graphql",children:[{value:"A GraphQL Schema",id:"a-graphql-schema",children:[]},{value:"A GraphQL Server",id:"a-graphql-server",children:[]}]}],s={toc:i};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"react"},"React"),Object(o.b)("p",null,"Relay is a framework for data management with the primary supported binding for React applications, so we assume that you are already familiar with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/"}),"React"),"."),Object(o.b)("h2",{id:"graphql"},"GraphQL"),Object(o.b)("p",null,"We also assume basic understanding of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://graphql.org/learn/"}),"GraphQL"),". In order to start using Relay, you will also need:"),Object(o.b)("h3",{id:"a-graphql-schema"},"A GraphQL Schema"),Object(o.b)("p",null,"A description of your data model with an associated set of resolve methods that know how to fetch any data your application could ever need."),Object(o.b)("p",null,"GraphQL is designed to support a wide range of data access patterns. In order to understand the structure of an application's data, Relay requires that you follow certain conventions when defining your schema. These are documented in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./graphql-server-specification"}),"GraphQL Server Specification"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://github.com/graphql/graphql-js"}),"graphql-js"))," on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/graphql"}),"npm")),Object(o.b)("p",{parentName:"li"},"General-purpose tools for building a GraphQL schema using JavaScript")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://github.com/graphql/graphql-relay-js"}),"graphql-relay-js"))," on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/graphql-relay"}),"npm")),Object(o.b)("p",{parentName:"li"},"JavaScript helpers for defining connections between data, and mutations, in a way that smoothly integrates with Relay."))),Object(o.b)("h3",{id:"a-graphql-server"},"A GraphQL Server"),Object(o.b)("p",null,"Any server can be taught to load a schema and speak GraphQL. Our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/relayjs/relay-examples"}),"examples")," use Express."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://github.com/graphql/express-graphql"}),"express-graphql"))," on ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/express-graphql"}),"npm")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://github.com/graphcool/graphql-up"}),"graphql-up"))," on ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/graphql-up"}),"npm")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://www.graph.cool/"}),"Graphcool"))," (",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.graph.cool/docs/quickstart/"}),"Quickstart tutorial"),")")))}l.isMDXComponent=!0}}]);