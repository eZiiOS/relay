(window.webpackJsonp=window.webpackJsonp||[]).push([[565],{1142:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},h=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(t),h=a,d=b["".concat(o,".").concat(h)]||b[h]||u[h]||i;return t?r.a.createElement(d,c(c({ref:n},l),{},{components:t})):r.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1149:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return o}));var a=t(22),r=t(1150);function i(){var e=Object(a.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,l=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if(Object(r.b)(t))return t;if(c)return n+t;var p=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+p:p}(i,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},1150:function(e,n,t){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return r}))},651:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(8),i=(t(0),t(1142)),o=t(1149),c={id:"graphql-server-specification",title:"GraphQL Server Specification",original_id:"graphql-server-specification"},s={unversionedId:"graphql-server-specification",id:"version-v1.5.0/graphql-server-specification",isDocsHomePage:!1,title:"GraphQL Server Specification",description:"The goal of this document is to specify the assumptions that Relay makes about a GraphQL server and demonstrate them through an example GraphQL schema.",source:"@site/versioned_docs/version-v1.5.0/GraphQL-ServerSpecification.md",slug:"/graphql-server-specification",permalink:"/docs/v1.5.0/graphql-server-specification",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v1.5.0/GraphQL-ServerSpecification.md",version:"v1.5.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1618892859,sidebar:"version-v1.5.0/docs",previous:{title:"Debugging",permalink:"/docs/v1.5.0/relay-debugging"},next:{title:"New in Relay Modern",permalink:"/docs/v1.5.0/new-in-relay-modern"}},l=[{value:"Preface",id:"preface",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Object Identification",id:"object-identification",children:[]},{value:"Connections",id:"connections",children:[]},{value:"Mutations",id:"mutations",children:[]},{value:"Further Reading",id:"further-reading",children:[]}],p={toc:l};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The goal of this document is to specify the assumptions that Relay makes about a GraphQL server and demonstrate them through an example GraphQL schema."),Object(i.b)("p",null,"Table of Contents:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#preface"}),"Preface")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#schema"}),"Schema")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#object-identification"}),"Object Identification")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#connections"}),"Connections")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#mutations"}),"Mutations")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#further-reading"}),"Further Reading"))),Object(i.b)("h2",{id:"preface"},"Preface"),Object(i.b)("p",null,"The three core assumptions that Relay makes about a GraphQL server are that it provides:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"A mechanism for refetching an object."),Object(i.b)("li",{parentName:"ol"},"A description of how to page through connections."),Object(i.b)("li",{parentName:"ol"},"Structure around mutations to make them predictable.")),Object(i.b)("p",null,"This example demonstrates all three of these assumptions. This example is not comprehensive, but it is designed to quickly introduce these core assumptions, to provide some context before diving into the more detailed specification of the library."),Object(i.b)("p",null,"The premise of the example is that we want to use GraphQL to query for information about ships and factions in the original Star Wars trilogy."),Object(i.b)("p",null,"It is assumed that the reader is already familiar with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://graphql.org/"}),"GraphQL"),"; if not, the README for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/graphql/graphql-js"}),"GraphQL.js")," is a good place to start."),Object(i.b)("p",null,"It is also assumed that the reader is already familiar with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Star_Wars"}),"Star Wars"),"; if not, the 1977 version of Star Wars is a good place to start, though the 1997 Special Edition will serve for the purposes of this document."),Object(i.b)("h2",{id:"schema"},"Schema"),Object(i.b)("p",null,"The schema described below will be used to demonstrate the functionality that a GraphQL server used by Relay should implement. The two core types are a faction and a ship in the Star Wars universe, where a faction has many ships associated with it. The schema below is the output of the GraphQL.js ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/graphql/graphql-js/blob/master/src/utilities/schemaPrinter.js"}),Object(i.b)("inlineCode",{parentName:"a"},"schemaPrinter")),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\ninterface Node {\n  id: ID!\n}\n\ntype Faction : Node {\n  id: ID!\n  name: String\n  ships: ShipConnection\n}\n\ntype Ship : Node {\n  id: ID!\n  name: String\n}\n\ntype ShipConnection {\n  edges: [ShipEdge]\n  pageInfo: PageInfo!\n}\n\ntype ShipEdge {\n  cursor: String!\n  node: Ship\n}\n\ntype PageInfo {\n  hasNextPage: Boolean!\n  hasPreviousPage: Boolean!\n  startCursor: String\n  endCursor: String\n}\n\ntype Query {\n  rebels: Faction\n  empire: Faction\n  node(id: ID!): Node\n}\n\ninput IntroduceShipInput {\n  factionId: String!\n  shipNamed: String!\n  clientMutationId: String!\n}\n\ntype IntroduceShipPayload {\n  faction: Faction\n  ship: Ship\n  clientMutationId: String!\n}\n\ntype Mutation {\n  introduceShip(input: IntroduceShipInput!): IntroduceShipPayload\n}\n")),Object(i.b)("h2",{id:"object-identification"},"Object Identification"),Object(i.b)("p",null,"Both ",Object(i.b)("inlineCode",{parentName:"p"},"Faction")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Ship")," have identifiers that we can use to refetch them. We expose this capability to Relay through the ",Object(i.b)("inlineCode",{parentName:"p"},"Node")," interface and the ",Object(i.b)("inlineCode",{parentName:"p"},"node")," field on the root query type."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Node")," interface contains a single field, ",Object(i.b)("inlineCode",{parentName:"p"},"id"),", which is a ",Object(i.b)("inlineCode",{parentName:"p"},"ID!"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"node")," root field takes a single argument, a ",Object(i.b)("inlineCode",{parentName:"p"},"ID!"),", and returns a ",Object(i.b)("inlineCode",{parentName:"p"},"Node"),". These two work in concert to allow refetching; if we pass the ",Object(i.b)("inlineCode",{parentName:"p"},"id")," returned in that field to the ",Object(i.b)("inlineCode",{parentName:"p"},"node")," field, we get the object back."),Object(i.b)("p",null,"Let's see this in action, and query for the ID of the rebels:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nquery RebelsQuery {\n  rebels {\n    id\n    name\n  }\n}\n")),Object(i.b)("p",null,"returns"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'\n{\n  "rebels": {\n    "id": "RmFjdGlvbjox",\n    "name": "Alliance to Restore the Republic"\n  }\n}\n')),Object(i.b)("p",null,"So now we know the ID of the Rebels in our system. We can now refetch them:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'\nquery RebelsRefetchQuery {\n  node(id: "RmFjdGlvbjox") {\n    id\n    ... on Faction {\n      name\n    }\n  }\n}\n')),Object(i.b)("p",null,"returns"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'\n{\n  "node": {\n    "id": "RmFjdGlvbjox",\n    "name": "Alliance to Restore the Republic"\n  }\n}\n')),Object(i.b)("p",null,"If we do the same thing with the Empire, we'll find that it returns a different ID, and we can refetch it as well:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nquery EmpireQuery {\n  empire {\n    id\n    name\n  }\n}\n")),Object(i.b)("p",null,"yields"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'\n{\n  "empire": {\n    "id": "RmFjdGlvbjoy",\n    "name": "Galactic Empire"\n  }\n}\n')),Object(i.b)("p",null,"and"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'\nquery EmpireRefetchQuery {\n  node(id: "RmFjdGlvbjoy") {\n    id\n    ... on Faction {\n      name\n    }\n  }\n}\n')),Object(i.b)("p",null,"yields"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'\n{\n  "node": {\n    "id": "RmFjdGlvbjoy",\n    "name": "Galactic Empire"\n  }\n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Node")," interface and ",Object(i.b)("inlineCode",{parentName:"p"},"node")," field assume globally unique IDs for this refetching. A system without globally unique IDs can usually synthesize them by combining the type with the type-specific ID, which is what was done in this example."),Object(i.b)("p",null,"The IDs we got back were base64 strings. IDs are designed to be opaque (the only thing that should be passed to the ",Object(i.b)("inlineCode",{parentName:"p"},"id")," argument on ",Object(i.b)("inlineCode",{parentName:"p"},"node")," is the unaltered result of querying ",Object(i.b)("inlineCode",{parentName:"p"},"id")," on some object in the system), and base64ing a string is a useful convention in GraphQL to remind viewers that the string is an opaque identifier."),Object(i.b)("p",null,"Complete details on how the server should behave are available in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql.org/learn/global-object-identification/"}),"GraphQL Object Identification")," spec."),Object(i.b)("h2",{id:"connections"},"Connections"),Object(i.b)("p",null,"A faction has many ships in the Star Wars universe. Relay contains functionality to make manipulating one-to-many relationships easy, using a standardized way of expressing these one-to-many relationships. This standard connection model offers ways of slicing and paginating through the connection."),Object(i.b)("p",null,"Let's take the rebels, and ask for their first ship:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nquery RebelsShipsQuery {\n  rebels {\n    name,\n    ships(first: 1) {\n      edges {\n        node {\n          name\n        }\n      }\n    }\n  }\n}\n")),Object(i.b)("p",null,"yields"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'\n{\n  "rebels": {\n    "name": "Alliance to Restore the Republic",\n    "ships": {\n      "edges": [\n        {\n          "node": {\n            "name": "X-Wing"\n          }\n        }\n      ]\n    }\n  }\n}\n')),Object(i.b)("p",null,"That used the ",Object(i.b)("inlineCode",{parentName:"p"},"first")," argument to ",Object(i.b)("inlineCode",{parentName:"p"},"ships")," to slice the result set down to the first one. But what if we wanted to paginate through it? On each edge, a cursor will be exposed that we can use to paginate. Let's ask for the first two this time, and get the cursor as well:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nquery MoreRebelShipsQuery {\n  rebels {\n    name,\n    ships(first: 2) {\n      edges {\n        cursor\n        node {\n          name\n        }\n      }\n    }\n  }\n}\n")),Object(i.b)("p",null,"and we get back"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'\n{\n  "rebels": {\n    "name": "Alliance to Restore the Republic",\n    "ships": {\n      "edges": [\n        {\n          "cursor": "YXJyYXljb25uZWN0aW9uOjA=",\n          "node": {\n            "name": "X-Wing"\n          }\n        },\n        {\n          "cursor": "YXJyYXljb25uZWN0aW9uOjE=",\n          "node": {\n            "name": "Y-Wing"\n          }\n        }\n      ]\n    }\n  }\n}\n')),Object(i.b)("p",null,"Notice that the cursor is a base64 string. That's the pattern from earlier: the server is reminding us that this is an opaque string. We can pass this string back to the server as the ",Object(i.b)("inlineCode",{parentName:"p"},"after")," argument to the ",Object(i.b)("inlineCode",{parentName:"p"},"ships")," field, which will let us ask for the next three ships after the last one in the previous result:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'\nquery EndOfRebelShipsQuery {\n  rebels {\n    name,\n    ships(first: 3 after: "YXJyYXljb25uZWN0aW9uOjE=") {\n      edges {\n        cursor,\n        node {\n          name\n        }\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,"gives us"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'\n\n{\n  "rebels": {\n    "name": "Alliance to Restore the Republic",\n    "ships": {\n      "edges": [\n        {\n          "cursor": "YXJyYXljb25uZWN0aW9uOjI=",\n          "node": {\n            "name": "A-Wing"\n          }\n        },\n        {\n          "cursor": "YXJyYXljb25uZWN0aW9uOjM=",\n          "node": {\n            "name": "Millenium Falcon"\n          }\n        },\n        {\n          "cursor": "YXJyYXljb25uZWN0aW9uOjQ=",\n          "node": {\n            "name": "Home One"\n          }\n        }\n      ]\n    }\n  }\n}\n')),Object(i.b)("p",null,"Sweet! Let's keep going and get the next four!"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'\nquery RebelsQuery {\n  rebels {\n    name,\n    ships(first: 4 after: "YXJyYXljb25uZWN0aW9uOjQ=") {\n      edges {\n        cursor,\n        node {\n          name\n        }\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,"yields"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'\n{\n  "rebels": {\n    "name": "Alliance to Restore the Republic",\n    "ships": {\n      "edges": []\n    }\n  }\n}\n')),Object(i.b)("p",null,"Hm. There were no more ships; guess there were only five in the system for the rebels. It would have been nice to know that we'd reached the end of the connection, without having to do another round trip in order to verify that. The connection model exposes this capability with a type called ",Object(i.b)("inlineCode",{parentName:"p"},"PageInfo"),". So let's issue the two queries that got us ships again, but this time ask for ",Object(i.b)("inlineCode",{parentName:"p"},"hasNextPage"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'\nquery EndOfRebelShipsQuery {\n  rebels {\n    name,\n    originalShips: ships(first: 2) {\n      edges {\n        node {\n          name\n        }\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n    moreShips: ships(first: 3 after: "YXJyYXljb25uZWN0aW9uOjE=") {\n      edges {\n        node {\n          name\n        }\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,"and we get back"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'\n{\n  "rebels": {\n    "name": "Alliance to Restore the Republic",\n    "originalShips": {\n      "edges": [\n        {\n          "node": {\n            "name": "X-Wing"\n          }\n        },\n        {\n          "node": {\n            "name": "Y-Wing"\n          }\n        }\n      ],\n      "pageInfo": {\n        "hasNextPage": true\n      }\n    },\n    "moreShips": {\n      "edges": [\n        {\n          "node": {\n            "name": "A-Wing"\n          }\n        },\n        {\n          "node": {\n            "name": "Millenium Falcon"\n          }\n        },\n        {\n          "node": {\n            "name": "Home One"\n          }\n        }\n      ],\n      "pageInfo": {\n        "hasNextPage": false\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,"So on the first query for ships, GraphQL told us there was a next page, but on the next one, it told us we'd reached the end of the connection."),Object(i.b)("p",null,"Relay uses all of this functionality to build out abstractions around connections, to make these easy to work with efficiently without having to manually manage cursors on the client."),Object(i.b)("p",null,"Complete details on how the server should behave are available in the ",Object(i.b)("a",{href:Object(o.a)("graphql/connections.htm")},"GraphQL Cursor Connections")," spec."),Object(i.b)("h2",{id:"mutations"},"Mutations"),Object(i.b)("p",null,"Relay uses a common pattern for mutations, where they are root fields on the mutation type with a single argument, ",Object(i.b)("inlineCode",{parentName:"p"},"input"),", and where the input and output both contain a client mutation identifier used to reconcile requests and responses."),Object(i.b)("p",null,'By convention, mutations are named as verbs, their inputs are the name with "Input" appended at the end, and they return an object that is the name with "Payload" appended.'),Object(i.b)("p",null,"So for our ",Object(i.b)("inlineCode",{parentName:"p"},"introduceShip")," mutation, we create two types: ",Object(i.b)("inlineCode",{parentName:"p"},"IntroduceShipInput")," and ",Object(i.b)("inlineCode",{parentName:"p"},"IntroduceShipPayload"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\ninput IntroduceShipInput {\n  factionId: ID!\n  shipName: String!\n  clientMutationId: String!\n}\n\ntype IntroduceShipPayload {\n  faction: Faction\n  ship: Ship\n  clientMutationId: String!\n}\n")),Object(i.b)("p",null,"With this input and payload, we can issue the following mutation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nmutation AddBWingQuery($input: IntroduceShipInput!) {\n  introduceShip(input: $input) {\n    ship {\n      id\n      name\n    }\n    faction {\n      name\n    }\n    clientMutationId\n  }\n}\n")),Object(i.b)("p",null,"with these params:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'\n{\n  "input": {\n    "shipName": "B-Wing",\n    "factionId": "1",\n    "clientMutationId": "abcde"\n  }\n}\n')),Object(i.b)("p",null,"and we'll get this result:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'\n{\n  "introduceShip": {\n    "ship": {\n      "id": "U2hpcDo5",\n      "name": "B-Wing"\n    },\n    "faction": {\n      "name": "Alliance to Restore the Republic"\n    },\n    "clientMutationId": "abcde"\n  }\n}\n')),Object(i.b)("h2",{id:"further-reading"},"Further Reading"),Object(i.b)("p",null,"This concludes the overview of the GraphQL Server Specifications. For the detailed requirements of a Relay-compliant GraphQL server, a more formal description of the ",Object(i.b)("a",{href:Object(o.a)("graphql/connections.htm")},"Relay cursor connection")," model and the ",Object(i.b)("a",{href:"https://graphql.org/learn/global-object-identification/"},"GraphQL global object identification")," model are all available."),Object(i.b)("p",null,"To see code implementing the specification, the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/graphql/graphql-relay-js"}),"GraphQL.js Relay library")," provides helper functions for creating nodes, connections, and mutations; that repository's ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/graphql/graphql-relay-js/tree/master/src/__tests__"}),Object(i.b)("inlineCode",{parentName:"a"},"__tests__"))," folder contains an implementation of the above example as integration tests for the repository."))}b.isMDXComponent=!0}}]);