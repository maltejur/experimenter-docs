(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var o=n(3),r=n(7),i=(n(0),n(95)),a={id:"desktop-rollouts",title:"Desktop Rollouts",slug:"/desktop-rollouts"},l={unversionedId:"desktop-rollouts",id:"desktop-rollouts",isDocsHomePage:!1,title:"Desktop Rollouts",description:"If you want to set configurations for a feature remotely for non-experiment users, you can do so with Nimbus Rollouts.",source:"@site/docs/desktop-rollouts.md",sourceDirName:".",slug:"/desktop-rollouts",permalink:"/desktop-rollouts",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/desktop-rollouts.md",version:"current",frontMatter:{id:"desktop-rollouts",title:"Desktop Rollouts",slug:"/desktop-rollouts"},sidebar:"sidebar",previous:{title:"Migration Guide (JS)",permalink:"/desktop-migration-guide"},next:{title:"Desktop Front-end testing",permalink:"/desktop-frontend-testing"}},s=[{value:"FAQS",id:"faqs",children:[{value:"What is this for?",id:"what-is-this-for",children:[]},{value:"When should I not use a rollout?",id:"when-should-i-not-use-a-rollout",children:[]},{value:"When can I use them?",id:"when-can-i-use-them",children:[]},{value:"How do rollouts interact with experiments?",id:"how-do-rollouts-interact-with-experiments",children:[]}]},{value:"How to launch a roll-out",id:"how-to-launch-a-roll-out",children:[{value:"Step 1 - Register your feature in the Nimbus Manifest",id:"step-1---register-your-feature-in-the-nimbus-manifest",children:[]},{value:"Step 2 - Add a configuration",id:"step-2---add-a-configuration",children:[]},{value:"Step 3 - Monitor telemetry",id:"step-3---monitor-telemetry",children:[]}]},{value:"Testing instructions",id:"testing-instructions",children:[]}],u={toc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you want to set configurations for a feature remotely ",Object(i.b)("em",{parentName:"p"},"for non-experiment users"),", you can do so with Nimbus Rollouts."),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This feature is still in the early stages of development. The first version will be available in Firefox 89 for a limited set of early users and more extensively in Firefox 90. See ",Object(i.b)("a",{parentName:"p",href:"https://mana.mozilla.org/wiki/display/FJT/Rapid+Rollouts"},"our project plan")," for more information."))),Object(i.b)("h2",{id:"faqs"},"FAQS"),Object(i.b)("h3",{id:"what-is-this-for"},"What is this for?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Launching a winning branch of an experiment faster than the trains."),Object(i.b)("li",{parentName:"ul"},"Launching a configuration to non-experiment users ",Object(i.b)("em",{parentName:"li"},"during an experiment")," after a short period of verification"),Object(i.b)("li",{parentName:"ul"},"Configuring different settings for a feature for different audiences remotely"),Object(i.b)("li",{parentName:"ul"},'A "kill switch" if you want to launch a feature but then turn it off if something goes wrong.')),Object(i.b)("h3",{id:"when-should-i-not-use-a-rollout"},"When should I not use a rollout?"),Object(i.b)("p",null,"If the feature has not yet been extensively tested, isn't production quality, or needs a period of validation on the trains."),Object(i.b)("h3",{id:"when-can-i-use-them"},"When can I use them?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In Firefox 89 on Desktop, if you are an L3 Nimbus Reviewer or UJET engineer."),Object(i.b)("li",{parentName:"ul"},"In Desktop starting in ",Object(i.b)("strong",{parentName:"li"},"Firefox 90")),Object(i.b)("li",{parentName:"ul"},"(Mobile dates TBD)")),Object(i.b)("h3",{id:"how-do-rollouts-interact-with-experiments"},"How do rollouts interact with experiments?"),Object(i.b)("p",null,"If a client receives a rollout ",Object(i.b)("em",{parentName:"p"},"and")," enrolls in an experiment for the same feature, the Feature API will ",Object(i.b)("strong",{parentName:"p"},"prefer the experiment configuration"),"."),Object(i.b)("h2",{id:"how-to-launch-a-roll-out"},"How to launch a roll-out"),Object(i.b)("h3",{id:"step-1---register-your-feature-in-the-nimbus-manifest"},"Step 1 - Register your feature in the Nimbus Manifest"),Object(i.b)("p",null,"To be able to use rollouts, make sure you ",Object(i.b)("a",{parentName:"p",href:"desktop-feature-api#registering-a-new-feature"},"register your feature in the Nimbus manifest")," and add variables you want to be able to set remotely. This process is identical to what you would do for running Nimbus Experiments, so if you've already done that, you don't need to make any changes in Firefox."),Object(i.b)("h3",{id:"step-2---add-a-configuration"},"Step 2 - Add a configuration"),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This is for MVP testing only will be replaced by Experimenter UI by Firefox 90."))),Object(i.b)("p",null,"To rollout changes to a feature, you will need to update (or create, if none exists) the record that matches your feature id in the ",Object(i.b)("inlineCode",{parentName:"p"},"nimbus-desktop-defaults")," remote settings collection:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'{\n  // The feature id - should match your manifest entry\n  id: "aboutwelcome",\n\n  configurations: [\n    {\n      slug: "windows-pin",\n      description: "For windows users that can use the pin API",\n      targeting: "os.windowsBuildId > 12345",\n      enabled: true,\n      variables: { skipFocus: false },\n\n    },\n    {\n      slug: "all",\n      description: "All users",\n      targeting: "true",\n      enabled: true,\n      variables: { skipFocus: true },\n    },\n  ],\n}\n')),Object(i.b)("p",null,"Each entry in the ",Object(i.b)("inlineCode",{parentName:"p"},"configurations")," list can have a targeting ",Object(i.b)("inlineCode",{parentName:"p"},"JEXL")," expression that you can use to target a specific group of users. They will be evaluated in the order they are defined until one matches."),Object(i.b)("h3",{id:"step-3---monitor-telemetry"},"Step 3 - Monitor telemetry"),Object(i.b)("p",null,"You can monitor users that receive your configuration by looking at the ",Object(i.b)("a",{parentName:"p",href:"https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/data/environment.html?highlight=experiments#experiments"},"experiments environment"),". When a rollout is active, it will add the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"id"),": ",Object(i.b)("inlineCode",{parentName:"li"},"default-<feature>"),", where ",Object(i.b)("inlineCode",{parentName:"li"},"<feature>")," is the id of your feature in the manifest"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"branch"),": The slug of the whatever rollout configuration is active=")),Object(i.b)("h2",{id:"testing-instructions"},"Testing instructions"),Object(i.b)("p",null,"In the future, we will support a preview workflow like with experiments. For now:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add the config to the staging Remote Settings ",Object(i.b)("inlineCode",{parentName:"li"},"nimbus-desktop-defaults")," collection."),Object(i.b)("li",{parentName:"ol"},"Use the Remote Settings devtools to switch to the staging endpoint.")))}c.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),c=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),b=o,m=d["".concat(a,".").concat(b)]||d[b]||p[b]||i;return n?r.a.createElement(m,l(l({ref:t},u),{},{components:n})):r.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);