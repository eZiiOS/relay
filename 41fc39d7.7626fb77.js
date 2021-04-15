(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{1142:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},h=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),h=r,d=p["".concat(i,".").concat(h)]||p[h]||m[h]||a;return t?o.a.createElement(d,c(c({ref:n},u),{},{components:t})):o.a.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=h;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},380:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(8),a=(t(0),t(1142)),i={id:"network-layer",title:"Network Layer",original_id:"network-layer"},c={unversionedId:"network-layer",id:"version-v2.0.0/network-layer",isDocsHomePage:!1,title:"Network Layer",description:"In order to know how to access your GraphQL server, Relay Modern requires developers to provide an object implementing the NetworkLayer interface when creating an instance of a Relay Environment. The environment uses this network layer to execute queries, mutations, and (if your server supports them) subscriptions. This allows developers to use whatever transport (HTTP, WebSockets, etc) and authentication is most appropriate for their application, decoupling the environment from the particulars of each application's network configuration.",source:"@site/versioned_docs/version-v2.0.0/Modern-NetworkLayer.md",slug:"/network-layer",permalink:"/docs/v2.0.0/network-layer",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v2.0.0/Modern-NetworkLayer.md",version:"v2.0.0",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1618463034,sidebar:"version-v2.0.0/docs",previous:{title:"Relay Environment",permalink:"/docs/v2.0.0/relay-environment"},next:{title:"QueryRenderer",permalink:"/docs/v2.0.0/query-renderer"}},s=[{value:"Caching",id:"caching",children:[]},{value:"Custom open-source implementations",id:"custom-open-source-implementations",children:[]}],u={toc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In order to know how to access your GraphQL server, Relay Modern requires developers to provide an object implementing the ",Object(a.b)("inlineCode",{parentName:"p"},"NetworkLayer")," interface when creating an instance of a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./relay-environment"}),"Relay Environment"),". The environment uses this network layer to execute queries, mutations, and (if your server supports them) subscriptions. This allows developers to use whatever transport (HTTP, WebSockets, etc) and authentication is most appropriate for their application, decoupling the environment from the particulars of each application's network configuration."),Object(a.b)("p",null,"Currently the easiest way to create a network layer is via a helper from the ",Object(a.b)("inlineCode",{parentName:"p"},"relay-runtime")," package:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import {\n  Environment,\n  Network,\n  RecordSource,\n  Store,\n} from 'relay-runtime';\n\n// Define a function that fetches the results of an operation (query/mutation/etc)\n// and returns its results as a Promise:\nfunction fetchQuery(\n  operation,\n  variables,\n  cacheConfig,\n  uploadables,\n) {\n  return fetch('/graphql', {\n    method: 'POST',\n    headers: {\n      // Add authentication and other headers here\n      'content-type': 'application/json'\n    },\n    body: JSON.stringify({\n      query: operation.text, // GraphQL text from input\n      variables,\n    }),\n  }).then(response => {\n    return response.json();\n  });\n}\n\n// Create a network layer from the fetch function\nconst network = Network.create(fetchQuery);\nconst store = new Store(new RecordSource())\n\nconst environment = new Environment({\n  network,\n  store\n  // ... other options\n});\n\nexport default environment;\n")),Object(a.b)("p",null,"Note that this is a basic example to help you get started. This example could be extended with additional features such as request/response caching (enabled e.g. when ",Object(a.b)("inlineCode",{parentName:"p"},"cacheConfig.force")," is false) and uploading form data for mutations (the ",Object(a.b)("inlineCode",{parentName:"p"},"uploadables")," parameter)."),Object(a.b)("h2",{id:"caching"},"Caching"),Object(a.b)("p",null,"Relay modern makes no assumptions about what to cache and will garbage collect any data that is no longer referenced."),Object(a.b)("p",null,"You have to implement your own cache strategy. A simple solution is to use ",Object(a.b)("inlineCode",{parentName:"p"},"RelayQueryResponseCache"),"(an in-memory cache):"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import {\n  Environment,\n  Network,\n  RecordSource,\n  Store,\n} from 'relay-runtime';\nimport RelayQueryResponseCache from 'relay-runtime/lib/RelayQueryResponseCache';\n\nconst oneMinute = 60 * 1000;\nconst cache = new RelayQueryResponseCache({ size: 250, ttl: oneMinute });\n\nfunction fetchQuery(\n  operation,\n  variables,\n  cacheConfig,\n) {\n  const queryID = operation.text;\n  const isMutation = operation.operationKind === 'mutation';\n  const isQuery = operation.operationKind === 'query';\n  const forceFetch = cacheConfig && cacheConfig.force;\n\n  // Try to get data from cache on queries\n  const fromCache = cache.get(queryID, variables);\n  if (\n    isQuery &&\n    fromCache !== null &&\n    !forceFetch\n  ) {\n    return fromCache;\n  }\n\n  // Otherwise, fetch data from server\n  return fetch('/graphql', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      query: operation.text,\n      variables,\n    }),\n  }).then(response => {\n    return response.json();\n  }).then(json => {\n    // Update cache on queries\n    if (isQuery && json) {\n      cache.set(queryID, variables, json);\n    }\n    // Clear cache on mutations\n    if (isMutation) {\n      cache.clear();\n    }\n\n    return json;\n  });\n}\n\nconst environment = new Environment({\n  network: Network.create(fetchQuery),\n  store: new Store(new RecordSource()),\n});\n\nexport default environment;\n")),Object(a.b)("h2",{id:"custom-open-source-implementations"},"Custom open-source implementations"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"https://github.com/relay-tools/react-relay-network-modern"}),"react-relay-network-modern"))," on ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-relay-network-modern"}),"npm")," - is a Network Layer for Relay Modern which has built-in highly customizable middlewares for commonly used scenarios: batching query requests, caching, authentication, request retrying, logging. Moreover, you may write your own middlewares with custom logic."))}l.isMDXComponent=!0}}]);