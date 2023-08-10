"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[7799],{4137:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(t),d=o,h=c["".concat(s,".").concat(d)]||c[d]||p[d]||i;return t?r.createElement(h,a(a({ref:n},m),{},{components:t})):r.createElement(h,a({ref:n},m))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2649:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(7462),o=(t(7294),t(4137));const i={id:"monitoring",title:"Monitoring Your Experiment",sidebar_label:"Monitoring",slug:"/monitoring"},a=void 0,l={unversionedId:"workflow/monitoring/monitoring",id:"workflow/monitoring/monitoring",title:"Monitoring Your Experiment",description:'Once your experiment has launched, from your experimenter page you will now have a "Live Monitoring Dashboard" link in the gray sidebar (on the left of the page).',source:"@site/docs/workflow/monitoring/monitoring.md",sourceDirName:"workflow/monitoring",slug:"/monitoring",permalink:"/monitoring",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/workflow/monitoring/monitoring.md",tags:[],version:"current",frontMatter:{id:"monitoring",title:"Monitoring Your Experiment",sidebar_label:"Monitoring",slug:"/monitoring"},sidebar:"sidebar",previous:{title:"Launching",permalink:"/launching"},next:{title:"Ending",permalink:"/ending"}},s={},u=[],m={toc:u},c="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Once your experiment has launched, from your experimenter page you will now have a "Live Monitoring Dashboard" link in the gray sidebar (on the left of the page).  '),(0,o.kt)("p",null,"When to check here:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"15 mins to 2 hours after launch, check that your experiment is enrolling users.  If you have no users or gaining users much slower or quicker than you'd expect based on your expected number of clients - share the link and your concern in #ask-experimenter."),(0,o.kt)("li",{parentName:"ol"},"Anytime during your experiment you can check that you don't have unexpected enrollment changes."),(0,o.kt)("li",{parentName:"ol"},"Before you Close Enrollment, check that you have enrolled the expected number of clients.")),(0,o.kt)("p",null,"What the different charts mean:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Cummulative Population Estimate")," is the total number of people enrolled in your experiment.  This is the chart experiment owners most frequently check to see if enrollment is on track for the expected number of clients.  Experiments are sized for this cummulative enrollment number, not daily active numbers.  "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Cumulative Population Estimate by Branch")," is only used to troubleshoot if enrollment is unhealthy.  Example, if the branches are not enrolling evenly (the lines are far apart) it is a sign something could be wrong.  "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Daily Active Population")," is just a point of data to know how many of your enrolled users are active every day."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Daily Enrollments")," and other Enrollment charts provide data around new enrollments.  This is used for troubleshooting or evaluating how much longer enrollment may be needed (if we are seeing low enrollment numbers)."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Unenrollment Overall")," and other Unenrollment charts provide data around unenrolled users.  This is used for flagging when there may be an issue.  We always expect some unenrollments.")))}p.isMDXComponent=!0}}]);