(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{1142:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(h,s(s({ref:t},c),{},{components:n})):a.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},421:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),i=(n(0),n(1142)),o={id:"persisted-queries",title:"Persisted Queries"},s={unversionedId:"persisted-queries",id:"version-v1.6.0/persisted-queries",isDocsHomePage:!1,title:"Persisted Queries",description:"The relay compiler supports persisted queries which is useful because:",source:"@site/versioned_docs/version-v1.6.0/Modern-PersistedQueries.md",slug:"/persisted-queries",permalink:"/docs/v1.6.0/persisted-queries",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v1.6.0/Modern-PersistedQueries.md",version:"v1.6.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1618930227},p=[{value:"Usage on the client",id:"usage-on-the-client",children:[{value:"The <code>--persist-output</code> flag",id:"the---persist-output-flag",children:[]},{value:"Network layer changes",id:"network-layer-changes",children:[]}]},{value:"Executing Persisted Queries on the Server",id:"executing-persisted-queries-on-the-server",children:[{value:"Compile time push",id:"compile-time-push",children:[]},{value:"Run time push",id:"run-time-push",children:[]},{value:"Simple server example",id:"simple-server-example",children:[]}]},{value:"Using <code>--persist-output</code> and <code>--watch</code>",id:"using---persist-output-and---watch",children:[]}],c={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The relay compiler supports persisted queries which is useful because:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"the client operation text becomes just an md5 hash which is usually shorter than the real\nquery string. This saves upload bytes from the client to the server.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"the server can now whitelist queries which improves security by restricting the operations\nthat can be executed by a client."))),Object(i.b)("h2",{id:"usage-on-the-client"},"Usage on the client"),Object(i.b)("h3",{id:"the---persist-output-flag"},"The ",Object(i.b)("inlineCode",{parentName:"h3"},"--persist-output")," flag"),Object(i.b)("p",null,"In your ",Object(i.b)("inlineCode",{parentName:"p"},"npm")," script in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),", run the relay compiler using the ",Object(i.b)("inlineCode",{parentName:"p"},"--persist-output")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --persist-output ./path/to/persisted-queries.json"\n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"--persist-ouput")," flag does 2 things:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"It converts all query and mutation operation texts to md5 hashes."),Object(i.b)("p",{parentName:"li"},"For example without ",Object(i.b)("inlineCode",{parentName:"p"},"--persist-output"),", a generated ",Object(i.b)("inlineCode",{parentName:"p"},"ConcreteRequest")," might look like below:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'const node/*: ConcreteRequest*/ = (function(){\n//... excluded for brevity\nreturn {\n  "kind": "Request",\n  "operationKind": "query",\n  "name": "TodoItemRefetchQuery",\n  "id": null, // NOTE: id is null\n  "text": "query TodoItemRefetchQuery(\\n  $itemID: ID!\\n) {\\n  node(id: $itemID) {\\n    ...TodoItem_item_2FOrhs\\n  }\\n}\\n\\nfragment TodoItem_item_2FOrhs on Todo {\\n    text\\n    isComplete\\n}\\n",\n  //... excluded for brevity\n};\n})();\n\n')),Object(i.b)("p",{parentName:"li"},"With ",Object(i.b)("inlineCode",{parentName:"p"},"--persist-output <path>")," this becomes:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'const node/*: ConcreteRequest*/ = (function(){\n//... excluded for brevity\nreturn {\n  "kind": "Request",\n  "operationKind": "query",\n  "name": "TodoItemRefetchQuery",\n  "id": "3be4abb81fa595e25eb725b2c6a87508", // NOTE: id is now an md5 hash of the query text\n  "text": null, // NOTE: text is null now\n  //... excluded for brevity\n};\n})();\n\n'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"It generates a JSON file at the ",Object(i.b)("inlineCode",{parentName:"p"},"<path>")," you specify containing a mapping from query ids\nto the corresponding operation texts."))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --persist-output ./src/queryMaps/queryMap.json"\n}\n')),Object(i.b)("p",null,"The example above writes the complete query map file to ",Object(i.b)("inlineCode",{parentName:"p"},"./src/queryMaps/queryMap.json"),". You need to ensure all the directories\nleading to the ",Object(i.b)("inlineCode",{parentName:"p"},"queryMap.json")," file exist."),Object(i.b)("h3",{id:"network-layer-changes"},"Network layer changes"),Object(i.b)("p",null,"You'll need to modify your network layer fetch implementation to pass a documentId parameter in the POST body instead of a query parameter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"function fetchQuery(operation, variables,) {\n  return fetch('/graphql', {\n    method: 'POST',\n    headers: {\n      'content-type': 'application/json'\n    },\n    body: JSON.stringify({\n      documentId: operation.id, // NOTE: pass md5 hash to the server\n      // query: operation.text, // this is now obsolete because text is null\n      variables,\n    }),\n  }).then(response => {\n    return response.json();\n  });\n}\n")),Object(i.b)("h2",{id:"executing-persisted-queries-on-the-server"},"Executing Persisted Queries on the Server"),Object(i.b)("p",null,"To execute client requests that send persisted queries instead of query text, your server will need to be able\nto lookup the query text corresponding to each id. Typically this will involve saving the output of the ",Object(i.b)("inlineCode",{parentName:"p"},"--persist-output <path>")," JSON file to a database or some other storage mechanism, and retrieving the corresponding text for the ID specified by a client."),Object(i.b)("p",null,"For universal applications where the client and server code are in one project, this is not an issue since you can place\nthe query map file in a common location accessible to both the client and the server."),Object(i.b)("h3",{id:"compile-time-push"},"Compile time push"),Object(i.b)("p",null,"For applications where the client and server projects are separate, one option is to have an additional npm run script\nto push the query map at compile time to a location accessible by your server:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'"scripts": {\n  "push-queries": "node ./pushQueries.js",\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --persist-ouput <path> && npm run push-queries"\n}\n')),Object(i.b)("p",null,"Some possibilities of what you can do in ",Object(i.b)("inlineCode",{parentName:"p"},"./pushQueries.js"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"git push")," to your server repo")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"save the query maps to a database"))),Object(i.b)("h3",{id:"run-time-push"},"Run time push"),Object(i.b)("p",null,"A second more complex option is to push your query maps to the server at runtime, without the server knowing the query ids at the start.\nThe client optimistically sends a query id to the server, which does not have the query map. The server then in turn requests\nfor the full query text from the client so it can cache the query map for subsequent requests. This is a more complex approach\nrequiring the client and server to interact to exchange the query maps."),Object(i.b)("h3",{id:"simple-server-example"},"Simple server example"),Object(i.b)("p",null,"Once your server has access to the query map, you can perform the mapping. The solution varies depending on the server and\ndatabase technologies you use, so we'll just cover the most common and basic example here."),Object(i.b)("p",null,"If you use ",Object(i.b)("inlineCode",{parentName:"p"},"express-graphql")," and have access to the query map file, you can import the ",Object(i.b)("inlineCode",{parentName:"p"},"--persist-output")," JSON file directly and\nperform the matching using the ",Object(i.b)("inlineCode",{parentName:"p"},"matchQueryMiddleware")," from ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/yusinto/relay-compiler-plus"}),"relay-compiler-plus"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import Express from 'express';\nimport expressGraphql from 'express-graphql';\nimport {matchQueryMiddleware} from 'relay-compiler-plus';\nimport queryMapJson from './path/to/persisted-queries.json';\n\nconst app = Express();\n\napp.use('/graphql',\n  matchQueryMiddleware(queryMapJson),\n  expressGraphql({schema}));\n")),Object(i.b)("h2",{id:"using---persist-output-and---watch"},"Using ",Object(i.b)("inlineCode",{parentName:"h2"},"--persist-output")," and ",Object(i.b)("inlineCode",{parentName:"h2"},"--watch")),Object(i.b)("p",null,"It is possible to continuously generate the query map files by using the ",Object(i.b)("inlineCode",{parentName:"p"},"--persist-output")," and ",Object(i.b)("inlineCode",{parentName:"p"},"--watch")," options simultaneously.\nThis only makes sense for universal applications i.e. if your client and server code are in a single project\nand you run them both together on localhost during development. Furthermore, in order for the server to pick up changes\nto the ",Object(i.b)("inlineCode",{parentName:"p"},"queryMap.json"),", you'll need to have server side hot-reloading set up. The details on how to set this up\nis out of the scope of this document."))}l.isMDXComponent=!0}}]);