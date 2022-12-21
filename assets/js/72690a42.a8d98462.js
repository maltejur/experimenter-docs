(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[323],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},373:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o={id:"2022-08",title:"What's Newsletter August 2022",slug:"/2022-08"},l="What's New in Nimbus August 2022",u={unversionedId:"whats-news/2022/2022-08",id:"whats-news/2022/2022-08",isDocsHomePage:!1,title:"What's Newsletter August 2022",description:"Welcome",source:"@site/docs/whats-news/2022/2022-08.md",sourceDirName:"whats-news/2022",slug:"/2022-08",permalink:"/2022-08",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/whats-news/2022/2022-08.md",tags:[],version:"current",frontMatter:{id:"2022-08",title:"What's Newsletter August 2022",slug:"/2022-08"},sidebar:"sidebar",previous:{title:"What's Newsletter July 2022",permalink:"/2022-07"},next:{title:"What's Newsletter February 2021",permalink:"/2021-02"}},s=[{value:"Welcome",id:"welcome",children:[]},{value:"Exciting Changes",id:"exciting-changes",children:[{value:"Mobile First Run",id:"mobile-first-run",children:[]},{value:"Improved Rollout Support",id:"improved-rollout-support",children:[]},{value:"Cancel Review",id:"cancel-review",children:[]},{value:"UI/UX Updates",id:"uiux-updates",children:[]},{value:"Improved Testing and Validation",id:"improved-testing-and-validation",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"whats-new-in-nimbus-august-2022"},"What's New in Nimbus August 2022"),(0,a.kt)("h2",{id:"welcome"},"Welcome"),(0,a.kt)("p",null,"The Nimbus team will have a ",(0,a.kt)("strong",{parentName:"p"},"demo booth at #moz-aloha")," All-Hands at the end of September! Come find us, chat about experimentation, and maybe even grab a sticker!"),(0,a.kt)("h2",{id:"exciting-changes"},"Exciting Changes"),(0,a.kt)("h3",{id:"mobile-first-run"},"Mobile First Run"),(0,a.kt)("p",null,"Mobile First Run refers to the work done in Nimbus to allow experiments during an user's first run of the Firefox mobile app."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Instrument Nimbus SDK in telemetry in order to provide experimental treatments during the onboarding experience.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This was affecting more than 100,000 clients and over 1.5M events/requests.")))),(0,a.kt)("h3",{id:"improved-rollout-support"},"Improved Rollout Support"),(0,a.kt)("p",null,"A Rollout is an experiment where instead of configuring control and treatment branches, a feature is slowly rolled out to a population of clients. Experimenter now has improved support for Rollouts."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A client can:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"enroll in a rollout, receive feature values, send telemetry"),(0,a.kt)("li",{parentName:"ul"},"explicitly unenroll from the client UI"),(0,a.kt)("li",{parentName:"ul"},"be automatically unenrolled by unpublishing the record from RS"),(0,a.kt)("li",{parentName:"ul"},"enroll in a rollout for a feature, and then ALSO enroll in an experiment for the same feature, receive the experiment feature configuration while enrolled in the experiment, then be unenrolled from the experiment and fall back to the rollout feature configuration"))),(0,a.kt)("li",{parentName:"ul"},"User Interface",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Now just check a box to make your experiment a rollout!"),(0,a.kt)("li",{parentName:"ul"},"For rollout experiments, branch configuration UI is removed.")))),(0,a.kt)("h3",{id:"cancel-review"},"Cancel Review"),(0,a.kt)("p",null,"If you launch, end, or end enrollment for an experiment it automatically goes to Review. Now, there is an option\nto cancel that change and go back to an idle state where changes can be made."),(0,a.kt)("h3",{id:"uiux-updates"},"UI/UX Updates"),(0,a.kt)("p",null,"Various user experience updates to streamline workflows and provide more consistency throughout the tool, like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Improved labels"),(0,a.kt)("li",{parentName:"ul"},"Analysis Results Time -- now you can see on the Results page when the last analysis started"),(0,a.kt)("li",{parentName:"ul"},"Performance improvements"),(0,a.kt)("li",{parentName:"ul"},"All displayed dates now include the year")),(0,a.kt)("h3",{id:"improved-testing-and-validation"},"Improved Testing and Validation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Better integration testing"),(0,a.kt)("li",{parentName:"ul"},"Better validation of configurations")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Stay tuned for snakes, camels, and more in next month's edition of What's New in Nimbus!")))}p.isMDXComponent=!0}}]);