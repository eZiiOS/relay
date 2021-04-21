(window.webpackJsonp=window.webpackJsonp||[]).push([[940],{1017:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),i=(n(0),n(1142)),o=n(1148),c={id:"runtime-architecture",title:"Runtime Architecture",slug:"/principles-and-architecture/runtime-architecture/",description:"Relay runtime architecture guide",keywords:["runtime","architecture","store","DataID","Record","RecordSource"]},s={unversionedId:"principles-and-architecture/runtime-architecture",id:"principles-and-architecture/runtime-architecture",isDocsHomePage:!1,title:"Runtime Architecture",description:"Relay runtime architecture guide",source:"@site/docs/principles-and-architecture/runtime-architecture.md",slug:"/principles-and-architecture/runtime-architecture/",permalink:"/docs/next/principles-and-architecture/runtime-architecture/",editUrl:"https://github.com/facebook/relay/edit/master/website/docs/principles-and-architecture/runtime-architecture.md",version:"current",lastUpdatedBy:"Rick Hanlon",lastUpdatedAt:1619042315,sidebar:"docs",previous:{title:"Compiler Architecture",permalink:"/docs/next/principles-and-architecture/compiler-architecture/"},next:{title:"Videos",permalink:"/docs/next/principles-and-architecture/videos/"}},l=[{value:"Data Types",id:"data-types",children:[]},{value:"Data Model",id:"data-model",children:[{value:"Store Operations",id:"store-operations",children:[]},{value:"Example Data Flow: Fetching Query Data",id:"example-data-flow-fetching-query-data",children:[]},{value:"Example Data Flow: Reading and Observing the Store",id:"example-data-flow-reading-and-observing-the-store",children:[]}]}],u={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Relay runtime is a full-featured GraphQL client that is designed for high performance even on low-end mobile devices and is capable of scaling to large, complex apps. The runtime API is not intended to be used directly in product code, but rather to provide a foundation for building higher-level product APIs such as React/Relay. This foundation includes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A normalized, in-memory object graph/cache."),Object(i.b)("li",{parentName:"ul"},'An optimized "write" operation for updating the cache with the results of queries/mutations/subscriptions.'),Object(i.b)("li",{parentName:"ul"},"A mechanism for reading data from the cache and subscribing for updates when these results change due to a mutation, subscription update, etc."),Object(i.b)("li",{parentName:"ul"},"Garbage collection to evict entries from the cache when they can no longer be referenced by any view."),Object(i.b)("li",{parentName:"ul"},"A generic mechanism for intercepting data prior to publishing it to the cache and either synthesizing new data or merging new and existing data together (which among other things enables the creation of a variety of pagination schemes)."),Object(i.b)("li",{parentName:"ul"},"Mutations with optimistic updates and the ability to update the cache with arbitrary logic."),Object(i.b)("li",{parentName:"ul"},"Support for live queries where supported by the network/server."),Object(i.b)("li",{parentName:"ul"},"Core primitives to enable subscriptions."),Object(i.b)("li",{parentName:"ul"},"Core primitives for building offline/persisted caching.")),Object(i.b)("h2",{id:"data-types"},"Data Types"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DataID")," (type): A globally unique or client-generated identifier for a record, stored as a string."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Record")," (type): A representation of a distinct data entity with an identity, type, and fields. Note that the actual runtime representation is opaque to the system: all accesses to ",Object(i.b)("inlineCode",{parentName:"li"},"Record")," objects (including record creation) is mediated through the ",Object(i.b)("inlineCode",{parentName:"li"},"RelayModernRecord")," module. This allows the representation itself to be changed in a single place (e.g. to use ",Object(i.b)("inlineCode",{parentName:"li"},"Map"),"s or a custom class). It is important that other code does not assume that ",Object(i.b)("inlineCode",{parentName:"li"},"Record"),"s will always be plain objects."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RecordSource")," (type): A collection of records keyed by their data ID, used both to represent the cache and updates to it. For example the store's record cache is a ",Object(i.b)("inlineCode",{parentName:"li"},"RecordSource")," and the results of queries/mutations/subscriptions are normalized into ",Object(i.b)("inlineCode",{parentName:"li"},"RecordSource"),"s that are published to a store. Sources also define methods for asynchronously loading records in order to (eventually) support offline use-cases. Currently the only implementation of this interface is ",Object(i.b)("inlineCode",{parentName:"li"},"RelayInMemoryRecordSource"),"; future implementations may add support for loading records from disk."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Store")," (type): The source of truth for an instance of ",Object(i.b)("inlineCode",{parentName:"li"},"RelayRuntime"),", holding the canonical set of records in the form of a ",Object(i.b)("inlineCode",{parentName:"li"},"RecordSource")," (though this is not required). Currently the only implementation is ",Object(i.b)("inlineCode",{parentName:"li"},"RelayModernStore"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Network")," (type): Provides methods for fetching query data from and executing mutations against an external data source."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Environment")," (type): Represents an encapsulated environment combining a ",Object(i.b)("inlineCode",{parentName:"li"},"Store")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Network"),", providing a high-level API for interacting with both. This is the main public API of ",Object(i.b)("inlineCode",{parentName:"li"},"RelayRuntime"),".")),Object(i.b)("p",null,"Types for working with queries and their results include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Selector"),' (type): A selector defines the starting point for a traversal into the graph for the purposes of targeting a subgraph, combining a GraphQL fragment, variables, and the Data ID for the root object from which traversal should progress. Intuitively, this "selects" a portion of the object graph.'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Snapshot")," (type): The (immutable) results of executing a ",Object(i.b)("inlineCode",{parentName:"li"},"Selector")," at a given point in time. This includes the selector itself, the results of executing it, and a list of the Data IDs from which data was retrieved (useful in determining when these results might change).")),Object(i.b)("h2",{id:"data-model"},"Data Model"),Object(i.b)("p",null,"Relay Runtime is designed for use with GraphQL schemas that describe ",Object(i.b)("strong",{parentName:"p"},"object graphs")," in which objects have a type, an identity, and a set of fields with values. Objects may reference each other, which is represented by fields whose values are one or more other objects in the graph ","[1]",". To distinguish from JavaScript ",Object(i.b)("inlineCode",{parentName:"p"},"Object"),"s, these units of data are referred to as ",Object(i.b)("inlineCode",{parentName:"p"},"Record"),"s. Relay represents both its internal cache as well as query/mutation/etc results as a mapping of ",Object(i.b)("strong",{parentName:"p"},"data ID"),"s to ",Object(i.b)("strong",{parentName:"p"},"records"),". The data ID is the unique (with respect to the cache) identifier for a record - it may be the value of an actual ",Object(i.b)("inlineCode",{parentName:"p"},"id")," field or based on the path to the record from the nearest object with an ",Object(i.b)("inlineCode",{parentName:"p"},"id")," (such path-based ids are called ",Object(i.b)("strong",{parentName:"p"},"client ids"),"). Each ",Object(i.b)("inlineCode",{parentName:"p"},"Record")," stores its data ID, type, and any fields that have been fetched. Multiple records are stored together as a ",Object(i.b)("inlineCode",{parentName:"p"},"RecordSource"),": a mapping of data IDs to ",Object(i.b)("inlineCode",{parentName:"p"},"Record")," instances."),Object(i.b)("p",null,"For example, a user and their address might be represented as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\n// GraphQL Fragment\nfragment on User {\n  id\n  name\n  address {\n    city\n  }\n}\n\n// Response\n{\n  id: '842472',\n  name: 'Joe',\n  address: {\n    city: 'Seattle',\n  }\n}\n\n// Normalized Representation\nRecordSource {\n  '842472': Record {\n    __id: '842472',\n    __typename: 'User', // the type is known statically from the fragment\n    id: '842472',\n    name: 'Joe',\n    address: {__ref: 'client:842472:address'}, // link to another record\n  },\n  'client:842472:address': Record {\n    // A client ID, derived from the path from parent & parent's ID\n    __id: 'client:842472:address',\n    __typename: 'Address',\n    city: 'Seattle',\n  }\n}\n")),Object(i.b)("p",null,"[1]"," Note that GraphQL itself does not impose this constraint, and Relay Runtime may also be used for schemas that do not conform to it. For example, both systems can be used to query a single denormalized table. However, many of the features that Relay Runtime provides, such as caching and normalization, work best when the data is represented as a normalized graph with stable identities for discrete pieces of information."),Object(i.b)("h3",{id:"store-operations"},"Store Operations"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Store")," is the source of truth for application data and provides the following core operations."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"lookup(selector: Selector): Snapshot"),": Reads the results of a selector from the store, returning the value given the data currently in the store.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"subscribe(snapshot: Snapshot, callback: (snapshot: Snapshot) => void): Disposable"),": Subscribe to changes to the results of a selector. The callback is called when data has been published to the store that would cause the results of the snapshot's selector to change.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"publish(source: RecordSource): void"),": Update the store with new information. All updates to the store are expressed in this form, including the results of queries/mutation/subscriptions as well as optimistic mutation updates. All of those operations internally create a new ",Object(i.b)("inlineCode",{parentName:"p"},"RecordSource")," instance and ultimately publish it to the store. Note that ",Object(i.b)("inlineCode",{parentName:"p"},"publish()")," does ",Object(i.b)("em",{parentName:"p"},"not")," immediately update any ",Object(i.b)("inlineCode",{parentName:"p"},"subscribe()"),"-ers. Internally, the store compares the new ",Object(i.b)("inlineCode",{parentName:"p"},"RecordSource")," with its internal source, updating it as necessary:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Records that exist only in the published source are added to the store."),Object(i.b)("li",{parentName:"ul"},"Records that exist in both are merged into a new record (inputs unchanged), with the result added to the store."),Object(i.b)("li",{parentName:"ul"},"Records that are null in the published source are deleted (set to null) in the store."),Object(i.b)("li",{parentName:"ul"},"Records with a special sentinel value are removed from the store. This supports un-publishing optimistically created records."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"notify(): void"),": Calls any ",Object(i.b)("inlineCode",{parentName:"p"},"subscribe()"),"-ers whose results have changed due to intervening ",Object(i.b)("inlineCode",{parentName:"p"},"publish()"),"-es. Separating ",Object(i.b)("inlineCode",{parentName:"p"},"publish()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"notify()")," allows for multiple payloads to be published before performing any downstream update logic (such as rendering).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"retain(selector: Selector): Disposable"),": Ensure that all the records necessary to fulfill the given selector are retained in-memory. The records will not be eligible for garbage collection until the returned reference is disposed."))),Object(i.b)("h3",{id:"example-data-flow-fetching-query-data"},"Example Data Flow: Fetching Query Data"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\n               \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n               \u2502         Query         \u2502\n               \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                           \u2502\n                           \u25bc\n                                             \u250c \u2500 \u2500 \u2500 \u2510\n                         fetch \u25c0\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6 Server\n                                             \u2514 \u2500 \u2500 \u2500 \u2518\n                           \u2502\n                     \u250c\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                     \u25bc             \u25bc\n               \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n               \u2502  Query   \u2502  \u2502 Response \u2502\n               \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                     \u2502             \u2502\n                     \u2514\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                           \u2502\n                           \u25bc\n                       normalize\n                           \u2502\n                           \u25bc\n               \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n               \u2502     RecordSource      \u2502\n               \u2502                       \u2502\n               \u2502\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2510\u2502\n               \u2502\u2502Record\u2502\u2502Record\u2502\u2502 ... \u2502\u2502\n               \u2502\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2518\u2502\n               \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The query is fetched from the network."),Object(i.b)("li",{parentName:"ol"},"The query and response are traversed together, extracting the results into ",Object(i.b)("inlineCode",{parentName:"li"},"Record")," objects which are added to a fresh ",Object(i.b)("inlineCode",{parentName:"li"},"RecordSource"),".")),Object(i.b)("p",null,"This fresh ",Object(i.b)("inlineCode",{parentName:"p"},"RecordSource")," would then be published to the store:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\n                        publish\n                           \u2502\n                           \u25bc\n             \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n             \u2502           Store           \u2502\n             \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n             \u2502 \u2502     RecordSource      \u2502 \u2502\n             \u2502 \u2502                       \u2502 \u2502\n             \u2502 \u2502\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2510\u2502 \u2502\n             \u2502 \u2502\u2502Record\u2502\u2502Record\u2502\u2502 ... \u2502\u2502 \u2502 <--- records are updated\n             \u2502 \u2502\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2518\u2502 \u2502\n             \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n             \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n             \u2502 \u2502     Subscriptions     \u2502 \u2502\n             \u2502 \u2502                       \u2502 \u2502\n             \u2502 \u2502\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2510\u2502 \u2502\n             \u2502 \u2502\u2502 Sub. \u2502\u2502 Sub. \u2502\u2502 ... \u2502\u2502 \u2502 <--- subscriptions do not fire yet\n             \u2502 \u2502\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2518\u2502 \u2502\n             \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n             \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),Object(i.b)("p",null,"Publishing the results updates the store but does ",Object(i.b)("em",{parentName:"p"},"not")," immediately notify any subscribers. This is accomplished by calling ",Object(i.b)("inlineCode",{parentName:"p"},"notify()"),"..."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\n                        notify\n                           \u2502\n                           \u25bc\n             \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n             \u2502           Store           \u2502\n             \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n             \u2502 \u2502     RecordSource      \u2502 \u2502\n             \u2502 \u2502                       \u2502 \u2502\n             \u2502 \u2502\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2510\u2502 \u2502\n             \u2502 \u2502\u2502Record\u2502\u2502Record\u2502\u2502 ... \u2502\u2502 \u2502\n             \u2502 \u2502\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2518\u2502 \u2502\n             \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n             \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n             \u2502 \u2502     Subscriptions     \u2502 \u2502\n             \u2502 \u2502                       \u2502 \u2502\n             \u2502 \u2502\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2510\u2502 \u2502\n             \u2502 \u2502\u2502  Sub.\u2502\u2502  Sub.\u2502\u2502  ...\u2502\u2502 \u2502 <--- affected subscriptions fire\n             \u2502 \u2502\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2518\u2502 \u2502\n             \u2502 \u2514\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2518 \u2502\n             \u2514\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2518\n                   \u2502       \u2502       \u2502\n                   \u25bc       \u2502       \u2502\n               callback    \u2502       \u2502\n                           \u25bc       \u2502\n                       callback    \u2502\n                                   \u25bc\n                               callback\n\n")),Object(i.b)("p",null,"...which calls the callbacks for any ",Object(i.b)("inlineCode",{parentName:"p"},"subscribe()"),"-ers whose results have changed. Each subscription is checked as follows:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"First, the list of data IDs that have changed since the last ",Object(i.b)("inlineCode",{parentName:"li"},"notify()")," is compared against data IDs listed in the subscription's latest ",Object(i.b)("inlineCode",{parentName:"li"},"Snapshot"),". If there is no overlap, the subscription's results cannot possibly have changed (if you imagine the graph visually, there is no overlap between the part of the graph that changed and the part that is selected). In this case the subscription is ignored, otherwise processing continues."),Object(i.b)("li",{parentName:"ol"},"Second, any subscriptions that do have overlapping data IDs are re-read, and the new/previous results are compared. If the result has not changed, the subscription is ignored (this can occur if a field of a record changed that is not relevant to the subscription's selector), otherwise processing continues."),Object(i.b)("li",{parentName:"ol"},"Finally, subscriptions whose data actually changed are notified via their callback.")),Object(i.b)("h3",{id:"example-data-flow-reading-and-observing-the-store"},"Example Data Flow: Reading and Observing the Store"),Object(i.b)("p",null,"Products access the store primarily via ",Object(i.b)("inlineCode",{parentName:"p"},"lookup()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"subscribe()"),". Lookup reads the initial results of a fragment, and subscribe observes that result for any changes. Note that the output of ",Object(i.b)("inlineCode",{parentName:"p"},"lookup()")," - a ",Object(i.b)("inlineCode",{parentName:"p"},"Snapshot")," - is the input to ",Object(i.b)("inlineCode",{parentName:"p"},"subscribe()"),". This is important because the snapshot contains important information that can be used to optimize the subscription - if ",Object(i.b)("inlineCode",{parentName:"p"},"subscribe()")," accepted only a ",Object(i.b)("inlineCode",{parentName:"p"},"Selector"),", it would have to re-read the results in order to know what to subscribe to, which is less efficient."),Object(i.b)("p",null,"Therefore a typical data flow is as follows - note that this flow is managed automatically by higher-level APIs such as React/Relay. First a component will lookup the results of a selector against a record source (e.g. the store's canonical source):"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\n    \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510       \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n    \u2502     RecordSource      \u2502       \u2502              \u2502\n    \u2502                       \u2502       \u2502              \u2502\n    \u2502\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2510\u2502       \u2502   Selector   \u2502\n    \u2502\u2502Record\u2502\u2502Record\u2502\u2502 ... \u2502\u2502       \u2502              \u2502\n    \u2502\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2518\u2502       \u2502              \u2502\n    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518       \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                \u2502                           \u2502\n                \u2502                           \u2502\n                \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                               \u2502\n                               \u2502  lookup\n                               \u2502  (read)\n                               \u2502\n                               \u25bc\n                        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                        \u2502             \u2502\n                        \u2502  Snapshot   \u2502\n                        \u2502             \u2502\n                        \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                               \u2502\n                               \u2502  render, etc\n                               \u2502\n                               \u25bc\n\n")),Object(i.b)("p",null,"Next, it will ",Object(i.b)("inlineCode",{parentName:"p"},"subscribe()")," using this snapshot in order to be notified of any changes - see the above diagram for ",Object(i.b)("inlineCode",{parentName:"p"},"publish()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"notify()"),"."),Object(i.b)(o.a,{mdxType:"DocsRating"}))}d.isMDXComponent=!0},1142:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,h=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1143:function(e,t,n){"use strict";(function(e){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.bloks=void 0,t.bloks=i(n(1146));const o=["internal","external"];let c;try{c=n(1144).usePluginData}catch(p){c=null}function s(e){return u(e),d()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const t=Object.keys(e).filter((e=>!o.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${o}`)}function d(){return e.env.FB_INTERNAL||c&&c("internaldocs-fb").FB_INTERNAL}t.fbContent=s,t.fbInternalOnly=function(e){return s({internal:e})},t.validateFbContentArgs=u,t.isInternal=d,t.FbInternalOnly=function(e){return d()?e.children:null},t.OssOnly=function(e){return d()?null:e.children}}).call(this,n(1145))},1144:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return o}));var r=n(22);function a(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=a()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},1145:function(e,t){var n,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var s,l=[],u=!1,d=-1;function p(){u&&s&&(u=!1,s.length?l=s.concat(l):d=-1,l.length&&b())}function b(){if(!u){var e=c(p);u=!0;for(var t=l.length;t;){for(s=l,l=[];++d<t;)s&&s[d].run();d=-1,t=l.length}s=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||u||c(b)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},1146:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{s(r.next(e))}catch(t){i(t)}}function c(e){try{s(r.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const a=n(1147);t.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},1147:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{s(r.next(e))}catch(t){i(t)}}function c(e){try{s(r.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let a=!1,i=0;const o={};t.call=function(e){return r(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in o||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?o[t].resolve(e.data.response):o[t].reject(new Error(e.data.error)),delete o[t]})));const t=i++,n=new Promise(((e,n)=>{o[t]={resolve:e,reject:n}})),r={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,c),n}))}},1148:function(e,t,n){"use strict";n(61);var r=n(1143),a=n(0);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var t=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),t)}var c=function(){var e=a.useState(!1),t=e[0],n=e[1],r=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},l=function(){return a.createElement(o,null,a.createElement(s,null),a.createElement(c,null))},u=function(){return a.createElement(o,null,a.createElement(c,null))};t.a=function(){return Object(r.fbContent)({internal:a.createElement(l,null),external:a.createElement(u,null)})}}}]);