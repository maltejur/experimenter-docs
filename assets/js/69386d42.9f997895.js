(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[1376],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(7294),r=n(9443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var d=function(e){var t,n=e.lazy,r=e.block,d=e.defaultValue,p=e.values,u=e.groupId,c=e.className,m=a.Children.toArray(e.children),h=null!=p?p:m.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=d?d:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=i(),f=v.tabGroupChoices,k=v.setTabGroupChoices,b=(0,a.useState)(g),y=b[0],N=b[1],w=[];if(null!=u){var x=f[u];null!=x&&x!==y&&h.some((function(e){return e.value===x}))&&N(x)}var C=function(e){var t=e.currentTarget,n=w.indexOf(t),a=h[n].value;N(a),null!=u&&(k(u,a),setTimeout((function(){var e,n,a,r,i,o,l,d;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,d=o.innerWidth,n>=0&&i<=d&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},c)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:C,onClick:C},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},8731:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=n(5064),l=n(8215),s={id:"mobile-behavioral-targeting",title:"Behavioral Targeting",slug:"/mobile-behavioral-targeting"},d=void 0,p={unversionedId:"deep-dives/mobile/mobile-behavioral-targeting",id:"deep-dives/mobile/mobile-behavioral-targeting",isDocsHomePage:!1,title:"Behavioral Targeting",description:"Behavioral targeting is a term used to describe a set of jexl transforms which can be used to target specific user behaviors. User behaviors might be the user opened the app, the user logged in, the user navigated to a specific view, or any user-triggered event that has Glean metrics associated with it.",source:"@site/docs/deep-dives/mobile/behavioral-targeting.mdx",sourceDirName:"deep-dives/mobile",slug:"/mobile-behavioral-targeting",permalink:"/mobile-behavioral-targeting",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/deep-dives/mobile/behavioral-targeting.mdx",tags:[],version:"current",frontMatter:{id:"mobile-behavioral-targeting",title:"Behavioral Targeting",slug:"/mobile-behavioral-targeting"},sidebar:"sidebar",previous:{title:"Mobile Messaging",permalink:"/mobile-messaging"},next:{title:"Configuring",permalink:"/configuring"}},u=[{value:"Event Bucketing",id:"event-bucketing",children:[{value:"Bucket Advancement &amp; Retention",id:"bucket-advancement--retention",children:[]}]},{value:"Querying for User Behavior",id:"querying-for-user-behavior",children:[]},{value:"Designing Experiments &amp; Behavior Triggers",id:"designing-experiments--behavior-triggers",children:[]},{value:"Instrumented Events",id:"instrumented-events",children:[]},{value:"Engineering",id:"engineering",children:[]}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Behavioral targeting is a term used to describe a set of jexl transforms which can be used to target specific user behaviors. User behaviors might be ",(0,i.kt)("inlineCode",{parentName:"p"},"the user opened the app"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"the user logged in"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"the user navigated to a specific view"),", or any user-triggered event that has Glean metrics associated with it."),(0,i.kt)("p",null,"In order to maintain user privacy, this entire system lives in the Nimbus client launched by our mobile applications. Additionally, events are recorded and stored as counts in time interval-based buckets, allowing for a predictably small amount of disk spaceto be used for this event store."),(0,i.kt)("h2",{id:"event-bucketing"},"Event Bucketing"),(0,i.kt)("p",null,"Stored events are bucketed into time intervals. The time intervals are Minutes, Hours, Days, Weeks, Months, and Years. No additional setup is required for this bucketing process, it is handled entirely by the SDK. Buckets for each of the time intervals are created and stored whenever a new event is recorded."),(0,i.kt)("h3",{id:"bucket-advancement--retention"},"Bucket Advancement & Retention"),(0,i.kt)("p",null,"When buckets are created, they have a starting date. This date is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"Jan 1 00:00:00 UTC")," of the current year. As time passes, the current time is incremented by the time difference in whole intervals and the buckets are advanced that many positions."),(0,i.kt)("p",null,"Bucket advancement occurs when an event is recorded, or when a query is performed. Buckets always advance based off whole increments of their time interval; ",(0,i.kt)("inlineCode",{parentName:"p"},"Minutes")," will advance by full minutes, ",(0,i.kt)("inlineCode",{parentName:"p"},"Hours")," by full hours, and so on. One exception to this rule is the ",(0,i.kt)("inlineCode",{parentName:"p"},"Months")," time interval \u2013\xa0it advances in increments of 28 days."),(0,i.kt)("p",null,"Based on the current datetime, the buckets may not advance at all, or may advance so much that all the buckets are cleared. As an example, if the current date for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Hours")," bucket is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"May 1 10:00:00 UTC"),", and an event is recorded at ",(0,i.kt)("inlineCode",{parentName:"p"},"May 1 12:45:00 UTC"),", the buckets will be advanced 2 positions, the current date will be updated to ",(0,i.kt)("inlineCode",{parentName:"p"},"May 1 12:00:00 UTC"),", and the event will be recorded in the bucket for the 12pm hour."),(0,i.kt)("h4",{id:"retention"},"Retention"),(0,i.kt)("p",null,"Each time interval has a maximum number of buckets it retains. As the time intervals move forward, buckets are rotated off of the deque and new buckets are added. If a query is performed that would go beyond the bucket count, it instead is cut off at the bucket count."),(0,i.kt)("p",null,"The following is a list of the time intervals and their bucket counts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Minutes 60\nHours   24\nDays    56\nWeeks   52\nMonths  12\nYears   4\n")),(0,i.kt)("h2",{id:"querying-for-user-behavior"},"Querying for User Behavior"),(0,i.kt)("p",null,"User behaviors are recorded in the same way as Glean events, and there are a number of ways in which they can be queried."),(0,i.kt)("p",null,"The following is a list of jexl transforms that exist within the Nimbus targeting helper, and thus are usable on all projects that use the Nimbus Rust library."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Transform"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Args"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Returns"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventSum")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Calculates the sum of all bucket values within the range"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"interval, bucket_count, starting_bucket")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventCountNonZero")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Calculates the total number of buckets with a non-zero value within the range"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"interval, bucket_count, starting_bucket")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventAverage")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Calculates the average of all event bucket values within the range"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"interval, bucket_count, starting_bucket")),(0,i.kt)("td",{parentName:"tr",align:"left"},"float")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventAveragePerNonZeroInterval")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Calculates the average of all buckets with a non-zero value within the range"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"interval, bucket_count, starting_bucket")),(0,i.kt)("td",{parentName:"tr",align:"left"},"float")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventLastSeen")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Returns the number of whole time intervals between the starting bucket and the first bucket with a non-zero value"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"interval, starting_bucket")),(0,i.kt)("td",{parentName:"tr",align:"left"},"int")))),(0,i.kt)("h2",{id:"designing-experiments--behavior-triggers"},"Designing Experiments & Behavior Triggers"),(0,i.kt)("p",null,"The following are the existing options for behavioral targeting as defined in Experimenter (found under ",(0,i.kt)("inlineCode",{parentName:"p"},"Advanced Targeting")," in the audience editor). In order to use these targeting options, the application must be Firefox or Focus for Android or iOS."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Targeting String"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Core Active Users"),(0,i.kt)("td",{parentName:"tr",align:"left"},"A user who has used the application 21 out of the last 28 days."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("pre",null,(0,i.kt)("code",null,"'app-opened-event'","|","eventCountNonZero('Days', 28, 0) >= 21")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Recently Logged In Users"),(0,i.kt)("td",{parentName:"tr",align:"left"},"A user who has logged into Sync within the last 12 weeks."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("pre",null,(0,i.kt)("code",null,"'sync-signin-event'","|","eventCountNonZero('Weeks', 12, 0) > 0")))))),(0,i.kt)("p",null,"There are many ways these queries could be used to our advantage when writing behavior-oriented code. One example could be to show a certain message to users after they have launched the app ",(0,i.kt)("em",{parentName:"p"},"n")," times, and after 12hrs has passed from when they first opened the application."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"'app-opened-event'&#124;eventSum('Years', 4, 0) >= 3 &&      // The sum of app opened events within the last four years must be 3 or more\n(\n  'app-opened-event'&#124;eventSum('Hours', 12, 12) >= 1 ||  // The sum of app opened events within 12hrs, starting 12hrs ago\n  'app-opened-event'&#124;eventSum('Days', 7, 1) >= 1 ||     // The sum of app opened events within 7 days, starting 1 day ago\n  'app-opened-event'&#124;eventSum('Weeks', 52, 1) >= 1      // The sum of app opened events within 52 weeks, starting 1 week ago\n)                                                            // Any one of these results must have been 1 or more\n")),(0,i.kt)("h2",{id:"instrumented-events"},"Instrumented Events"),(0,i.kt)("p",null,"The following are the events that are currently instrumented in Firefox for iOS and Android, respectively:"),(0,i.kt)(o.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Event"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Application opened"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://dictionary.telemetry.mozilla.org/apps/fenix/metrics/events_app_opened"},"app_opened"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"User logged into Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://dictionary.telemetry.mozilla.org/apps/fenix/metrics/sync_auth_sign_in"},"sync_auth.sign_in")))))),(0,i.kt)(l.Z,{value:"ios",mdxType:"TabItem"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Event"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Application opened"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://dictionary.telemetry.mozilla.org/apps/firefox_ios/metrics/app_cycle_foreground"},"app_cycle.foreground"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"User logged into Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://dictionary.telemetry.mozilla.org/apps/firefox_ios/metrics/sync_login_completed_view"},"sync.login_completed_view"))))))),(0,i.kt)("h2",{id:"engineering"},"Engineering"),(0,i.kt)("p",null,"In order to instrument a new behavior/event, an equivalent call to the Nimbus event recording method must be made alongside the call to record a Glean event."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"While this process is currently required, long-term we hope to have a hook in Glean that will record certain events automatically."))),(0,i.kt)(o.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,i.kt)("p",null,"On Firefox for Android, a call should be made to ",(0,i.kt)("inlineCode",{parentName:"p"},"components.analytics.experiments.recordEvent")," immediately following the Glean event being recorded. The argument should be the event name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="app/src/main/java/org/mozilla/fenix/HomeActivity.kt"',title:'"app/src/main/java/org/mozilla/fenix/HomeActivity.kt"'},'import org.mozilla.fenix.ext.components\n\n// ...\nopen class HomeActivity : LocaleAwareAppCompatActivity(), NavHostActivity {\n    // ...\n    final override fun onCreate(savedInstanceState: Bundle?) {\n        // ...\n        if (settings().isTelemetryEnabled) {\n            // ...\n            safeIntent\n                ?.let(::getIntentSource)\n                ?.also {\n                    Events.appOpened.record(Events.AppOpenedExtra(it))\n                    // This will record an event in Nimbus\' internal event store. Used for behavioral targeting\n                    components.analytics.experiments.recordEvent("app_opened")\n                }\n        }\n        // ...\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla-mobile/fenix/pull/27934"},"Example in PR"))),(0,i.kt)(l.Z,{value:"ios",mdxType:"TabItem"},(0,i.kt)("p",null,"On Firefox for iOS, there is a wrapper for telemetry which makes this process rather simple. In the switch case for the event you want to implement, add a call to ",(0,i.kt)("inlineCode",{parentName:"p"},"Experiments.shared.recordEvent"),". The argument should be the event name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift",metastring:'title="Client/Telemetry/TelemetryWrapper.swift"',title:'"Client/Telemetry/TelemetryWrapper.swift"'},'extension TelemetryWrapper {\n    // ...\n    static func gleanRecordEvent(category: EventCategory, method: EventMethod, object: EventObject, value: EventValue? = nil, extras: [String: Any]? = nil) {\n        switch (category, method, object, value, extras) {\n        // ...\n        case (.firefoxAccount, .view, .fxaLoginCompleteWebpage, _, _):\n            GleanMetrics.Sync.loginCompletedView.record()\n            // record the same event for Nimbus\' internal event store\n            Experiments.shared.recordEvent("sync.login_completed_view")\n        // ...\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla-mobile/firefox-ios/pull/12560"},"Example in PR")))),(0,i.kt)("hr",null))}m.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);