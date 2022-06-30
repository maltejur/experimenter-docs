(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[7478],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1639:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o={id:"2022-06",title:"What's Newsletter June 2022",slug:"/2022-06"},s="What's New in Nimbus June 2022",l={unversionedId:"whats-news/2022/2022-06",id:"whats-news/2022/2022-06",isDocsHomePage:!1,title:"What's Newsletter June 2022",description:"Welcome",source:"@site/docs/whats-news/2022/2022-06.md",sourceDirName:"whats-news/2022",slug:"/2022-06",permalink:"/2022-06",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/whats-news/2022/2022-06.md",tags:[],version:"current",frontMatter:{id:"2022-06",title:"What's Newsletter June 2022",slug:"/2022-06"},sidebar:"sidebar",previous:{title:"Features",permalink:"/capabilities"},next:{title:"What's Newsletter February 2021",permalink:"/2021-02"}},u=[{value:"Welcome",id:"welcome",children:[]},{value:"Exciting Changes",id:"exciting-changes",children:[{value:"Mobile Messaging",id:"mobile-messaging",children:[]},{value:"Mobile Language Targeting",id:"mobile-language-targeting",children:[]},{value:"Mobile Country Targeting",id:"mobile-country-targeting",children:[]},{value:"Analysis Fixes",id:"analysis-fixes",children:[]},{value:"Reporting",id:"reporting",children:[]},{value:"Feature Imports",id:"feature-imports",children:[]},{value:"Sticky Targeting",id:"sticky-targeting",children:[]}]}],c={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"whats-new-in-nimbus-june-2022"},"What's New in Nimbus June 2022"),(0,a.kt)("h2",{id:"welcome"},"Welcome"),(0,a.kt)("p",null,"The Nimbus team has welcomed many new team members including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Yashika Khurana, Web"),(0,a.kt)("li",{parentName:"ul"},"Mike Williams, Web/Data"),(0,a.kt)("li",{parentName:"ul"},"Daniel Berry, Data Science"),(0,a.kt)("li",{parentName:"ul"},"Barret Rennie, Desktop")),(0,a.kt)("p",null,"We're thrilled to have them all aboard!"),(0,a.kt)("h2",{id:"exciting-changes"},"Exciting Changes"),(0,a.kt)("h3",{id:"mobile-messaging"},"Mobile Messaging"),(0,a.kt)("p",null,"  Nimbus now supports the ability to send messages to mobile clients through messaging surfaces in each mobile application.  This unlocks the ability for Nimbus to run surveys, update users about important new information, or incorporate messages into other experiments/rollouts.  More detailed information ",(0,a.kt)("a",{parentName:"p",href:"https://experimenter.info/mobile-messaging"},"can be found here"),"."),(0,a.kt)("h3",{id:"mobile-language-targeting"},"Mobile Language Targeting"),(0,a.kt)("p",null,"  Mobile devices use a different ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"},"list of languages")," than ",(0,a.kt)("a",{parentName:"p",href:"https://firefox-source-docs.mozilla.org/intl/locale.html"},"desktop Firefox does"),", and so the locale field on the Audience page didn't work as expected for mobile experiments.  To address this, we've added a new 'Language' field on the Audience page that can be used to target device languages for mobile experiments."),(0,a.kt)("h3",{id:"mobile-country-targeting"},"Mobile Country Targeting"),(0,a.kt)("p",null,"  Mobile devices do use the same ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes"},"list of countries")," that desktop Firefox does, and now country filtering has been implemented in the mobile client and so country targeting for mobile experiments is now available on the Audience page."),(0,a.kt)("h3",{id:"analysis-fixes"},"Analysis Fixes"),(0,a.kt)("p",null,"  There have been several ongoing bugs that affected the automatic analysis of many experiments, which have now been resolved.  All experiments should now have access to the full analysis report including all metrics.  If any experiment analyses are still missing information, please reach out on #ask-experimenter."),(0,a.kt)("h3",{id:"reporting"},"Reporting"),(0,a.kt)("p",null,"  Experimenter now has the ability to export a list of all Nimbus experiments as a CSV spreadsheet using the 'Reporting' button on the landing page.  This can help organize large groups of experiments for review and planning."),(0,a.kt)("h3",{id:"feature-imports"},"Feature Imports"),(0,a.kt)("p",null,"  Nimbus Features are defined using manifest files in the code repositories of each supported Firefox application across desktop and mobile.  All features for all supported applications are now automatically imported by Experimenter and automatically updated as new features or changes to existing features occur.  Each Feature has a schema that is either specified in the manifest or automatically generated based on the Feature's variables, and is used to validate the JSON that is provided in each branch."),(0,a.kt)("h3",{id:"sticky-targeting"},"Sticky Targeting"),(0,a.kt)("p",null,"  Every experiment or rollout in Nimbus includes a targeting expression that clients use to determine whether to enroll or unenroll.  The targeting expressions is frequently re evaluated after enrollment to determine if the client should unenroll early before the experiment ends.  If any part of the targeting expression evaluates to False, then the client will unenroll.  Sometimes this is the desired behaviour for an experiment, sometimes it is not.  For cases where clients should not unenroll even if the targeting no longer matches, we now provide the option for Sticky Targeting, which can be found on the Audience page.  If an experiment uses Sticky Targeting, then clients will not be unenrolled, even if the targeting becomes False, until the experiment ends."))}p.isMDXComponent=!0}}]);