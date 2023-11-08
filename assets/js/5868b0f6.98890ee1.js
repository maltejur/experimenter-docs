"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[837],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||r;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(7462),a=(n(7294),n(4137));const r={id:"getting-started-for-ios-engineers",title:"Getting Started for iOS Engineers",slug:"getting-started-for-ios-engineers"},o=void 0,s={unversionedId:"getting-started/engineers/getting-started-for-ios-engineers",id:"getting-started/engineers/getting-started-for-ios-engineers",title:"Getting Started for iOS Engineers",description:"Introduction",source:"@site/docs/getting-started/engineers/02-ios-integration.md",sourceDirName:"getting-started/engineers",slug:"/getting-started/engineers/getting-started-for-ios-engineers",permalink:"/getting-started/engineers/getting-started-for-ios-engineers",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/getting-started/engineers/02-ios-integration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"getting-started-for-ios-engineers",title:"Getting Started for iOS Engineers",slug:"getting-started-for-ios-engineers"},sidebar:"sidebar",previous:{title:"Getting Started for Android Engineers",permalink:"/getting-started/engineers/getting-started-for-android-engineers"},next:{title:"Desktop Feature API (JS and C++)",permalink:"/desktop-feature-api"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Building with Nimbus",id:"building-with-nimbus",level:2},{value:"Generating Swift with the Nimbus FML",id:"generating-swift-with-the-nimbus-fml",level:3},{value:"Setting up",id:"setting-up",level:4},{value:"Adding Nimbus FML to the build",id:"adding-nimbus-fml-to-the-build",level:4},{value:"The start-up sequence",id:"the-start-up-sequence",level:2},{value:"Getting errors out of <code>Nimbus</code>",id:"getting-errors-out-of-nimbus",level:3},{value:"Connecting the <code>NimbusInterface</code> to FML generated code",id:"connecting-the-nimbusinterface-to-fml-generated-code",level:3},{value:"Handling First Run experiments",id:"handling-first-run-experiments",level:3},{value:"Using the experiments preview collection",id:"using-the-experiments-preview-collection",level:3},{value:"Instrumenting the app for testing",id:"instrumenting-the-app-for-testing",level:3},{value:"A complete <code>NimbusBuilder</code> example",id:"a-complete-nimbusbuilder-example",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Nimbus is an experimentation platform from Mozilla."),(0,a.kt)("p",null,"This document shows you how to set up the Nimbus SDK with a new iOS app. It assumes that your app is already using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/glean/blob/main/docs/dev/ios/setup-ios-build-environment.md"},"Glean SDK")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/rust-components-swift"},"Rust Swift Components"),"."),(0,a.kt)("h2",{id:"building-with-nimbus"},"Building with Nimbus"),(0,a.kt)("h3",{id:"generating-swift-with-the-nimbus-fml"},"Generating Swift with the Nimbus FML"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/fml-spec"},"Feature Manifest Language")," provides type-safe access to configuration coming out of the Nimbus SDK, and is used to configure your application features, by generating Swift from a Feature Manifest."),(0,a.kt)("p",null,"Once you have this running, the FML files will the main way you interact with Nimbus."),(0,a.kt)("h4",{id:"setting-up"},"Setting up"),(0,a.kt)("p",null,"Run the following command in a terminal, from the top level directory of your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"NIMBUS_FML_FILE=./nimbus.fml.yaml\ncurl --proto '=https' --tlsv1.2 -sSf \\\n    https://raw.githubusercontent.com/mozilla/application-services/main/components/nimbus/ios/scripts/bootstrap.sh | bash -s -- $NIMBUS_FML_FILE\n")),(0,a.kt)("p",null,"You should also add it to your project's ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.sh")," or installer script."),(0,a.kt)("p",null,"This will download the shell script that will run on each build. On first run, it will download a sample ",(0,a.kt)("inlineCode",{parentName:"p"},"nimbus.fml.sh")," to the given location, and configuration files to ",(0,a.kt)("inlineCode",{parentName:"p"},"./bin"),"."),(0,a.kt)("p",null,"Edit the configuration file ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/mozilla/application-services/main/components/nimbus/ios/scripts/nimbus-fml-configuration.sh"},(0,a.kt)("inlineCode",{parentName:"a"},"nimbus-fml-configuration.sh"))," to match your setup. For example, any time you add a new ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIGURATION")," (e.g. Debug, Release), you should add a new mapping to a build ",(0,a.kt)("inlineCode",{parentName:"p"},"CHANNEL")," in this file."),(0,a.kt)("p",null,"If you need to move the ",(0,a.kt)("inlineCode",{parentName:"p"},"nimbus.fml.yaml")," file, then you should edit this in the call in the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.sh")," file and in the ",(0,a.kt)("inlineCode",{parentName:"p"},"nimbus-fml-configuration.sh")," file."),(0,a.kt)("h4",{id:"adding-nimbus-fml-to-the-build"},"Adding Nimbus FML to the build"),(0,a.kt)("p",null,"A build phase needs to be added to the app, calling in to ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/mozilla/application-services/main/components/nimbus/ios/scripts/nimbus-fml.sh"},(0,a.kt)("inlineCode",{parentName:"a"},"nimbus-fml.sh")),". This is configured with a project specific ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/mozilla/application-services/main/components/nimbus/ios/scripts/nimbus-fml-configuration.sh"},(0,a.kt)("inlineCode",{parentName:"a"},"nimbus-fml-configuration.sh")),"."),(0,a.kt)("p",null,"This will generate a Swift file in a ",(0,a.kt)("inlineCode",{parentName:"p"},"$MODULE/Generated/AppConfig.swift"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"AppConfig")," is the name of the manifest as specified in the FML files."),(0,a.kt)("h2",{id:"the-start-up-sequence"},"The start-up sequence"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"nimbus")," object, an instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"NimbusInterface")," manages the connection between your app and the Nimbus SDK."),(0,a.kt)("p",null,"It can be constructed with a ",(0,a.kt)("inlineCode",{parentName:"p"},"NimbusBuilder"),". Here is a minimal example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'import Foundation\nimport MozillaAppServices\n\npublic static var nimbus: NimbusInterface = {\n    // App settings, to allow experiments to target the app name and the\n    // channel. The values given here should match what `Experimenter`\n    // thinks it is.\n    let appSettings = NimbusAppSettings(\n        appName: "example-app",\n        channel: "release"\n    )\n\n    guard let dbPath = defaultDatabasePath() else {\n        log.error("Nimbus didn\'t get to create, because of a nil dbPath")\n        return NimbusDisabled.shared\n    }\n\n    return NimbusBuilder(dbPath: dbPath)\n        .with(url: remoteSettingsURL)\n        .with(featureManifest: AppConfig.shared)\n        .build(appInfo: appSettings)\n}()\n\nstatic func defaultDatabasePath() -> String? {\n    let paths = FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask)\n    if paths.count == 0 {\n        return nil\n    }\n    return paths[0].appendingPathComponent("nimbus.db").path\n}\n')),(0,a.kt)("p",null,"The Nimbus object should be constructed and configured as soon as the app is launched, for example, at the beginning of\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1623032-application"},(0,a.kt)("inlineCode",{parentName:"a"},"application(_:willFinishLaunchingWithOptions)")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"func application(\n    _ application: UIApplication,\n    willFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil\n) -> Bool {\n    let sdk = nimbus // or wherever you've put the nimbus singleton\n\n    // Fetch experiments on a background thread.\n    // These will not be ready until the next startup.\n    sdk.fetchExperiments()\n}\n")),(0,a.kt)("h3",{id:"getting-errors-out-of-nimbus"},"Getting errors out of ",(0,a.kt)("inlineCode",{parentName:"h3"},"Nimbus")),(0,a.kt)("p",null,"By design, Nimbus is deliberately unobtrusive; if it fails then it should not crash, but continue as if not enrolled in any experiments."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"errorReporter")," callback is there to connect ",(0,a.kt)("inlineCode",{parentName:"p"},"Nimbus")," to any error reporting framework in the rest of the app."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'    return NimbusBuilder(dbPath: dbPath)\n        //\xa0\u2026\n        .with(errorReporter: { err ->\n            log.error("Error in Nimbus SDK", err)\n        }\n        // \u2026\n        .build(appInfo: appInfo)\n')),(0,a.kt)("h3",{id:"connecting-the-nimbusinterface-to-fml-generated-code"},"Connecting the ",(0,a.kt)("inlineCode",{parentName:"h3"},"NimbusInterface")," to FML generated code"),(0,a.kt)("p",null,"The FML generated code has a runtime dependency on the ",(0,a.kt)("inlineCode",{parentName:"p"},"NimbusInterface"),"."),(0,a.kt)("p",null,"To connect it to the Nimbus object, we need to tell the ",(0,a.kt)("inlineCode",{parentName:"p"},"NimbusBuilder"),". In this case, the generated class is ",(0,a.kt)("inlineCode",{parentName:"p"},"AppConfig.shared"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"    return NimbusBuilder(dbPath: dbPath)\n        //\xa0\u2026\n        .with(featureManifest: AppConfig.shared)\n        // \u2026\n        .build(appInfo: appInfo)\n")),(0,a.kt)("h3",{id:"handling-first-run-experiments"},"Handling First Run experiments"),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchExperiments")," from the remote settings URL is slow, and we wish to be able have access to the Nimbus experimental configuration as early in start up as possible, Nimbus downloads and caches the experiment recipes on the ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),"th run of the app and only applies them and makes them available to the app at the beginning of the ",(0,a.kt)("em",{parentName:"p"},"next")," i.e. the ",(0,a.kt)("inlineCode",{parentName:"p"},"(n + 1)"),"th run of the app."),(0,a.kt)("p",null,"Astute readers will notice that when ",(0,a.kt)("inlineCode",{parentName:"p"},"n = 0"),", i.e. the very first time the app is run, there are no experiment recipes downloaded. If Remote Settings experiment recipes JSON payload is available as a ",(0,a.kt)("inlineCode",{parentName:"p"},"raw/")," resource, it can be loaded in at first run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'    return NimbusBuilder(dbPath: dbPath)\n        //\xa0\u2026\n        .isFirstRun(isFirstRun)\n        .with(initialExperiments: Bundle.main.url(forResource: "initial_experiments", withExtension: "json"))\n        .with(timeoutLoadingExperiments: TIME_OUT_LOADING_EXPERIMENT_FROM_DISK_MS)  // defaults to 200 (ms)\n        // \u2026\n        .build(appInfo: appInfo)\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"initial_experiments.json")," file can be downloaded, either as part of the build, or in an automated/timed job. e.g. this is the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla-mobile/firefox-ios/blob/main/.github/workflows/update-nimbus-experiments.yml"},"Github Action workflow used by Firefox for iOS"),"."),(0,a.kt)("h3",{id:"using-the-experiments-preview-collection"},"Using the experiments preview collection"),(0,a.kt)("p",null,"The preview collection is a staging area for new experiments to be tested on the device. This should be toggleable via the UI, but should trigger a restart."),(0,a.kt)("p",null,"Adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"usePreviewCollection")," flag allows the builder to configure a ",(0,a.kt)("inlineCode",{parentName:"p"},"NimbusInterface")," object connected to the experiment recipes in the preview collection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"    return NimbusBuilder(dbPath: dbPath)\n        // \u2026\n        .with(url: remoteSettingsURL)\n        .using(previewCollection: usePreviewCollection)\n        // \u2026\n        .build(appInfo: appInfo)\n")),(0,a.kt)("h3",{id:"instrumenting-the-app-for-testing"},"Instrumenting the app for testing"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/nimbus-cli"},(0,a.kt)("inlineCode",{parentName:"a"},"nimbus-cli"))," allows QA and engineers to launch the app in different experimental configurations. It largely obviates the need for configuring Nimbus to use the preview collection, above."),(0,a.kt)("p",null,"To connect the ",(0,a.kt)("inlineCode",{parentName:"p"},"NimbusInterface")," object to the command line, we need to feed the command line arguments through ",(0,a.kt)("inlineCode",{parentName:"p"},"NimbusBuilder"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"    return NimbusBuilder(dbPath: dbPath)\n        // \u2026\n        .with(commandLineArguments: CommandLine.arguments)\n        // \u2026\n        .build(appInfo: appInfo)\n")),(0,a.kt)("h2",{id:"a-complete-nimbusbuilder-example"},"A complete ",(0,a.kt)("inlineCode",{parentName:"h2"},"NimbusBuilder")," example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'import Foundation\nimport MozillaAppServices\n\npublic static var nimbus: NimbusInterface = {\n    let defaults = UserDefaults.standard\n    let usePreviewCollection = defaults.bool(forKey: NimbusUsePreviewCollectionDefault)\n    let isFirstRun = !defaults.bool(forKey: NimbusIsFirstRunDefault)\n    if isFirstRun {\n        defaults.set(false, forKey: NimbusIsFirstRunDefault)\n    }\n\n    // App settings, to allow experiments to target the app name and the\n    // channel. The values given here should match what `Experimenter`\n    // thinks it is.\n    let appSettings = NimbusAppSettings(\n        appName: "example-app",\n        channel: "release",\n        customTargetingAttributes: [\n            "is_first_run": isFirstRun,\n        ]\n    )\n\n    let errorReporter: NimbusErrorReporter = { err in\n        log.error("Error in Nimbus SDK", err)\n    }\n\n    guard let dbPath = defaultDatabasePath() else {\n        log.error("Nimbus didn\'t get to create, because of a nil dbPath")\n        return NimbusDisabled.shared\n    }\n\n    let bundles = [\n        Bundle.main,\n        Bundle.main.fallbackTranslationBundle()\n    ].compactMap { $0 }\n\n    return NimbusBuilder(dbPath: dbPath)\n        .with(url: remoteSettingsURL)\n        .using(previewCollection: usePreviewCollection)\n        .with(errorReporter: errorReporter)\n        .with(initialExperiments: Bundle.main.url(forResource: "initial_experiments", withExtension: "json"))\n        .isFirstRun(isFirstRun)\n        .with(bundles: bundles)\n        .with(userDefaults: UserDefaults.standard)\n        .with(featureManifest: AppConfig.shared)\n        .build(appInfo: appSettings)\n}()\n')))}m.isMDXComponent=!0}}]);