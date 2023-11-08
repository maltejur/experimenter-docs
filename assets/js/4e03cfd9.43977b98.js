"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[5850],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||l;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),l=n(6010),i=n(2957),o=n(6550),s=n(5238),u=n(3609),d=n(2560);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=m({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=s??p;return f({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var h=n(1048);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==o&&(p(t),s(a))},f=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:f,onClick:c},i,{className:(0,l.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},1612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(4137)),l=n(3992),i=n(425);const o={id:"using-prefs",title:"Using prefs to override feature variables",slug:"/fml/using-prefs",sidebar_position:6},s=void 0,u={unversionedId:"deep-dives/specifications/fml/using-prefs",id:"deep-dives/specifications/fml/using-prefs",title:"Using prefs to override feature variables",description:"This page details adding pref-key to a feature definition. This cause the FML generated code to check the user preferences (UserDefaults or SharedPrefences) before checking the Nimbus configuration store or the default.",source:"@site/docs/deep-dives/specifications/fml/using-prefs.mdx",sourceDirName:"deep-dives/specifications/fml",slug:"/fml/using-prefs",permalink:"/fml/using-prefs",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/deep-dives/specifications/fml/using-prefs.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"using-prefs",title:"Using prefs to override feature variables",slug:"/fml/using-prefs",sidebar_position:6},sidebar:"sidebar",previous:{title:"Co-enrolling Features",permalink:"/fml/coenrolling-features"},next:{title:"Providing feature metadata",permalink:"/fml/feature-metadata"}},d={},p=[{value:"Setting up",id:"setting-up",level:2},{value:"Adding a <code>pref-key</code> to a feature variable definitions",id:"adding-a-pref-key-to-a-feature-variable-definitions",level:2},{value:"Generated code sketch",id:"generated-code-sketch",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Additional effects of experiment events",id:"additional-effects-of-experiment-events",level:2}],c={toc:p},f="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page details adding ",(0,r.kt)("inlineCode",{parentName:"p"},"pref-key")," to a feature definition. This cause the FML generated code to check the user preferences (",(0,r.kt)("inlineCode",{parentName:"p"},"UserDefaults")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"SharedPrefences"),") ",(0,r.kt)("strong",{parentName:"p"},"before")," checking the Nimbus configuration store or the default."),(0,r.kt)("h2",{id:"setting-up"},"Setting up"),(0,r.kt)("p",null,"The app's preferences object needs to be added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"NimbusBuilder")," call:"),(0,r.kt)(l.Z,{defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"NimbusBuilder()\n    .with(userDefaults: UserDefaults.standard) // or alternative\n    .build(\u2026)\n")),(0,r.kt)("p",null,"Without this line, the default value used is ",(0,r.kt)("inlineCode",{parentName:"p"},"UserDefaults.standard"),".")),(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"NimbusBuilder(context).apply {\n        sharedPreferences = \u2026 // the shared preferences being used for this app\n    }\n    .build(\u2026)\n")),(0,r.kt)("p",null,"Without this line, the default value used in ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", and this feature will not function."))),(0,r.kt)("p",null,"These should be readable by Nimbus, but writeable by the rest of the app. For best effect, these should be the same preferences that drive the Settings screens."),(0,r.kt)("p",null,"Once the preference object is available to nimbus, you can add ",(0,r.kt)("inlineCode",{parentName:"p"},"pref-key"),"s to feature variables."),(0,r.kt)("h2",{id:"adding-a-pref-key-to-a-feature-variable-definitions"},"Adding a ",(0,r.kt)("inlineCode",{parentName:"h2"},"pref-key")," to a feature variable definitions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pref-key")," can be specified by top level feature variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"features:\n    sample-feature:\n        variables:\n            is-enabled:\n                type: Boolean\n                default: false\n                pref-key: sample-feature.isEnabled\n")),(0,r.kt)("p",null,"The generated API is used in the same way as without the ",(0,r.kt)("inlineCode",{parentName:"p"},"pref-key"),":"),(0,r.kt)(l.Z,{defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let feature = FxNimbus.shared.features.sampleFeature.value()\nif feature.isEnabled {\n    // Do something because the feature has been enabled.\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val feature = FxNimbus.features.sampleFeature.value()\nif (feature.isEnabled) {\n    // Do something because the feature has been enabled.\n}\n")))),(0,r.kt)("p",null,"However, now, the call to ",(0,r.kt)("inlineCode",{parentName:"p"},"feature.isEnabled")," is overridden by the preference held at ",(0,r.kt)("inlineCode",{parentName:"p"},"sample-feature.isEnabled"),"."),(0,r.kt)("p",null,"This is available for types that are supported by preferences: ",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Int"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Text"),"."),(0,r.kt)("h3",{id:"generated-code-sketch"},"Generated code sketch"),(0,r.kt)("p",null,"The generated code looks approximately like:"),(0,r.kt)(l.Z,{defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Kotlin",value:"kotlin"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let isEnabled: Boolean {\n    return prefs.getBoolean("sample-feature.isEnabled") ??\n        json.getBoolean("is-enabled") ??\n        defaults.isEnabled\n}\n')),(0,r.kt)("p",null,"Without the ",(0,r.kt)("inlineCode",{parentName:"p"},"pref-key"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let isEnabled: Boolean {\n    return json.getBoolean("is-enabled") ??\n        defaults.isEnabled\n}\n'))),(0,r.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val isEnabled: Boolean =\n    prefs.getBoolean("sample-feature.isEnabled") ?:\n    json.getBoolean("is-enabled") ?:\n    defaults.isEnabled\n')),(0,r.kt)("p",null,"Without the ",(0,r.kt)("inlineCode",{parentName:"p"},"pref-key"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val isEnabled: Boolean =\n    json.getBoolean("is-enabled") ?:\n    defaults.isEnabled\n')))),(0,r.kt)("h3",{id:"limitations"},"Limitations"),(0,r.kt)("p",null,"This is available for feature variables (not nested ",(0,r.kt)("inlineCode",{parentName:"p"},"Objects")," fields), and only for scalar types."),(0,r.kt)("p",null,"It is not available for structural types (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"Option<T>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"List<T>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Map<String, T>"),")."),(0,r.kt)("admonition",{title:"Feedback welcome",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If there is demand for it, then support for these types and places will be considered."),(0,r.kt)("p",{parentName:"admonition"},"Similarly, we're looking for feedback on how to make this API or generated code better.")),(0,r.kt)("h2",{id:"additional-effects-of-experiment-events"},"Additional effects of experiment events"),(0,r.kt)("p",null,"If the user sets any of the named preferences for the feature, then the feature is said to be user-modified."),(0,r.kt)("p",null,"This is exposed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"isModified()")," method of the feature."),(0,r.kt)("p",null,"User-modified features will not emit exposure events."),(0,r.kt)("admonition",{title:"experimental",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Question"),": Should user-modification be allowed for the general population? i.e. can we add these toggles to a public facing settings screen?"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Answer"),": Currently, it is recommended that user-modification should be exposed only in Secret Settings screens."),(0,r.kt)("p",{parentName:"admonition"},"This is not suitable as building an opt out of all experiments involving the feature.")))}m.isMDXComponent=!0}}]);