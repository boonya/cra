(self.webpackChunkmy_create_react_app=self.webpackChunkmy_create_react_app||[]).push([[179],{"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return preview_namedExportsOrder},decorators:function(){return decorators},globalTypes:function(){return globalTypes},parameters:function(){return parameters}});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),dist=__webpack_require__("./node_modules/msw-storybook-addon/dist/index.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),prop_types=(__webpack_require__("./node_modules/core-js/modules/es.string.search.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),router=__webpack_require__("./node_modules/@remix-run/router/dist/router.js"),react_router_dist=__webpack_require__("./node_modules/react-router/dist/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function createHref(_ref){var pathname=_ref.pathname,search=_ref.search,hash=_ref.hash;return[[pathname,search].filter((function(v){return null==v?void 0:v.trim()})).join("?"),hash].filter((function(v){return null==v?void 0:v.trim()})).join("")}function Router(_ref2){var onPush=_ref2.onPush,onReplace=_ref2.onReplace,onGo=_ref2.onGo,onBack=_ref2.onBack,onForward=_ref2.onForward,route=_ref2.route,params=_ref2.params,queryString=_ref2.queryString,children=_ref2.children,navigator={push:onPush,replace:onReplace,go:onGo,back:onBack,forward:onForward,createHref:createHref},location=[(0,router.Gn)(route,params),queryString].join("?");return(0,jsx_runtime.jsx)(react_router_dist.F0,{navigator:navigator,location:location,children:(0,jsx_runtime.jsx)(react_router_dist.Z5,{children:(0,jsx_runtime.jsx)(react_router_dist.AW,{path:route,element:children})})})}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}Router.propTypes={children:prop_types_default().node.isRequired,onBack:prop_types_default().func,onForward:prop_types_default().func,onGo:prop_types_default().func,onPush:prop_types_default().func,onReplace:prop_types_default().func,params:prop_types_default().shape({}),queryString:prop_types_default().string,route:prop_types_default().string},Router.defaultProps={onBack:function onBack(){return null},onForward:function onForward(){return null},onGo:function onGo(){return null},onPush:function onPush(){return null},onReplace:function onReplace(){return null},params:{},queryString:void 0,route:"/"};__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.values.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),Theme=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/providers/Theme/index.css"),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(Theme.Z,options),Theme.Z.locals;function Theme_Theme(_ref){return _ref.children}Theme_Theme.propTypes={children:prop_types_default().node.isRequired};var COLOR_SCHEME={light:"light",dark:"dark"};(0,dist.initialize)({serviceWorker:{url:"".concat("/cra/main/","mockServiceWorker.js")},onUnhandledRequest:"bypass"});var decorators=[function withStyle(){return function(Story,_ref){var parameters=_ref.parameters;return parameters.style?(0,jsx_runtime.jsx)("div",{style:parameters.style,children:(0,jsx_runtime.jsx)(Story,{})}):(0,jsx_runtime.jsx)(Story,{})}}(),function withTheme(){return function(Story,_ref){var globals=_ref.globals,css=getComputedStyle(document.documentElement),currentBackgroundColor=css.getPropertyValue("--background-color"),lightBackgroundColor=css.getPropertyValue("--light-background-color"),lightTextColor=css.getPropertyValue("--light-text-color"),lightLinkColor=css.getPropertyValue("--light-link-color"),darkBackgroundColor=css.getPropertyValue("--dark-background-color"),darkTextColor=css.getPropertyValue("--dark-text-color"),darkLinkColor=css.getPropertyValue("--dark-link-color");return globals.theme===COLOR_SCHEME.light&&currentBackgroundColor!==lightBackgroundColor?(document.documentElement.style.setProperty("--background-color",lightBackgroundColor),document.documentElement.style.setProperty("--text-color",lightTextColor),document.documentElement.style.setProperty("--link-color",lightLinkColor)):globals.theme===COLOR_SCHEME.dark&&currentBackgroundColor!==darkBackgroundColor&&(document.documentElement.style.setProperty("--background-color",darkBackgroundColor),document.documentElement.style.setProperty("--text-color",darkTextColor),document.documentElement.style.setProperty("--link-color",darkLinkColor)),(0,jsx_runtime.jsx)(Theme_Theme,{children:(0,jsx_runtime.jsx)(Story,{})})}}(),function withRouter(){return function(Story,_ref){var parameters=_ref.parameters;return(0,jsx_runtime.jsx)(Router,_objectSpread(_objectSpread({onPush:(0,esm.action)("history.push"),onReplace:(0,esm.action)("history.replace"),onGo:(0,esm.action)("history.go"),onBack:(0,esm.action)("history.back"),onForward:(0,esm.action)("history.forward"),basename:"/"},parameters.router),{},{children:(0,jsx_runtime.jsx)(Story,{})}))}}(),dist.mswDecorator],parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(?:bac[k\u212A]ground|color)$/i,date:/(?:date|dateTime|time)$/i}},backgrounds:{disable:!0}},globalTypes={theme:function getThemeToolbar(){return{name:"Theme",defaultValue:window.matchMedia("(prefers-color-scheme: dark)").matches?COLOR_SCHEME.dark:COLOR_SCHEME.light,toolbar:{icon:"eye",items:Object.values(COLOR_SCHEME).map((function(value){return{value:value,title:value}}))}}}()},preview_namedExportsOrder=["decorators","parameters","globalTypes"];function preview_js_generated_config_entry_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function preview_js_generated_config_entry_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?preview_js_generated_config_entry_ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):preview_js_generated_config_entry_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/components/GeneralError/index.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GeneralError:function(){return GeneralError},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_stories}});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Component=__webpack_require__("./src/components/Component.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function GeneralError_GeneralError(props){return(0,jsx_runtime.jsx)(Component.Z,function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},props))}function index_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function index_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?index_stories_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):index_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}GeneralError_GeneralError.propTypes={children:prop_types_default().node,component:prop_types_default().elementType},GeneralError_GeneralError.defaultProps={children:"An error occurred.",component:"h1"};var index_stories={component:GeneralError_GeneralError},GeneralError=function GeneralError(args){return(0,jsx_runtime.jsx)(GeneralError_GeneralError,index_stories_objectSpread({},args))};GeneralError.parameters=index_stories_objectSpread({storySource:{source:"function GeneralError(args) {\n\treturn <Component {...args} />;\n}"}},GeneralError.parameters);var __namedExportsOrder=["GeneralError"]},"./src/components/NotFound/index.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NotFound:function(){return NotFound},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_stories}});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Component=__webpack_require__("./src/components/Component.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function NotFound_NotFound(props){return(0,jsx_runtime.jsx)(Component.Z,function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},props))}function index_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function index_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?index_stories_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):index_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}NotFound_NotFound.propTypes={children:prop_types_default().node,component:prop_types_default().elementType},NotFound_NotFound.defaultProps={children:"Not Found.",component:"h1"};var index_stories={component:NotFound_NotFound},NotFound=function NotFound(args){return(0,jsx_runtime.jsx)(NotFound_NotFound,index_stories_objectSpread({},args))};NotFound.parameters=index_stories_objectSpread({storySource:{source:"function NotFound(args) {\n\treturn <Component {...args} />;\n}"}},NotFound.parameters);var __namedExportsOrder=["NotFound"]},"./src/components/Progressbar/index.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Progressbar:function(){return index_stories_Progressbar},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_stories}});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),Progressbar=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Progressbar/index.css"),options={insert:"head",singleton:!1},react=(injectStylesIntoStyleTag_default()(Progressbar.Z,options),Progressbar.Z.locals,__webpack_require__("./node_modules/react/index.js")),Component=__webpack_require__("./src/components/Component.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Progressbar_Progressbar=(0,react.forwardRef)((function(props,ref){return(0,jsx_runtime.jsx)(Component.Z,_objectSpread(_objectSpread({ref:ref,component:"span",role:"progressbar","aria-label":"Please wait",className:"progressbar"},props),{},{children:"Please Wait..."}))}));Progressbar_Progressbar.displayName="Progressbar",Progressbar_Progressbar.__docgenInfo={description:"",methods:[],displayName:"Progressbar"};var src_components_Progressbar=Progressbar_Progressbar;function index_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function index_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?index_stories_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):index_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Progressbar/index.js"]={name:"Progressbar",docgenInfo:Progressbar_Progressbar.__docgenInfo,path:"src/components/Progressbar/index.js"});var index_stories={component:src_components_Progressbar},index_stories_Progressbar=function Progressbar(args){return(0,jsx_runtime.jsx)(src_components_Progressbar,index_stories_objectSpread({},args))};index_stories_Progressbar.parameters=index_stories_objectSpread({storySource:{source:"function Progressbar(args) {\n\treturn <Component {...args} />;\n}"}},index_stories_Progressbar.parameters);var __namedExportsOrder=["Progressbar"]},"./src/modules/App/index.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{App:function(){return App},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_stories}});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function App_App(){return(0,jsx_runtime.jsx)("h1",{children:"My own version of Create React App"})}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var index_stories={component:App_App},App=function App(args){return(0,jsx_runtime.jsx)(App_App,_objectSpread({},args))};App.parameters=_objectSpread({storySource:{source:"function App(args) {\n\treturn <Component {...args} />;\n}"}},App.parameters);var __namedExportsOrder=["App"]},"./src/components/Component.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),prop_types__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__),react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["component","children"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Component=(0,react__WEBPACK_IMPORTED_MODULE_9__.forwardRef)((function(_ref,ref){var C=_ref.component,children=_ref.children,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_11__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(C,_objectSpread(_objectSpread({ref:ref},props),{},{children:children}))}));Component.displayName="Component",Component.__docgenInfo={description:"",methods:[],displayName:"Component",props:{component:{defaultValue:{value:"'span'",computed:!1},description:"",type:{name:"elementType"},required:!1},children:{description:"",type:{name:"node"},required:!0}}},__webpack_exports__.Z=Component,Component.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_12___default().node.isRequired,component:prop_types__WEBPACK_IMPORTED_MODULE_12___default().elementType},Component.defaultProps={component:"span"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Component.js"]={name:"Component",docgenInfo:Component.__docgenInfo,path:"src/components/Component.js"})},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Progressbar/index.css":function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".progressbar {\n\tdisplay: block;\n\tmargin: 1em 0;\n\tanimation: pulse-animation 1s infinite;\n}\n\n@keyframes pulse-animation {\n\t0% {\n\t\topacity: 0.1;\n\t}\n\t50% {\n\t\topacity: 1;\n\t}\n\t100% {\n\t\topacity: 0.1;\n\t}\n}\n","",{version:3,sources:["webpack://./src/components/Progressbar/index.css"],names:[],mappings:"AAAA;CACC,cAAc;CACd,aAAa;CACb,sCAAsC;AACvC;;AAEA;CACC;EACC,YAAY;CACb;CACA;EACC,UAAU;CACX;CACA;EACC,YAAY;CACb;AACD",sourcesContent:[".progressbar {\n\tdisplay: block;\n\tmargin: 1em 0;\n\tanimation: pulse-animation 1s infinite;\n}\n\n@keyframes pulse-animation {\n\t0% {\n\t\topacity: 0.1;\n\t}\n\t50% {\n\t\topacity: 1;\n\t}\n\t100% {\n\t\topacity: 0.1;\n\t}\n}\n"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/providers/Theme/index.css":function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,':root {\n\t--light-background-color: #ffffff;\n\t--light-text-color: #2f446c;\n\t--light-link-color: #0c5e75;\n\n\t--dark-background-color: #282c34;\n\t--dark-text-color: #ffffff;\n\t--dark-link-color: #61dafb;\n}\n\n@media (prefers-color-scheme: dark) {\n\t:root {\n\t\t--background-color: var(--dark-background-color);\n\t\t--text-color: var(--dark-text-color);\n\t\t--link-color: var(--dark-link-color);\n\t}\n}\n\n@media (prefers-color-scheme: light) {\n\t:root {\n\t\t--background-color: var(--light-background-color);\n\t\t--text-color: var(--light-text-color);\n\t\t--link-color: var(--light-link-color);\n\t}\n}\n\nhtml,\nbody,\n#root {\n\theight: 100%;\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbody {\n\tfont-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\n\t\t"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\n\t\t"Helvetica Neue", sans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tbackground-color: var(--background-color);\n\tcolor: var(--text-color);\n}\n\na {\n\tcolor: var(--link-color);\n}\n\ncode {\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n\t\tmonospace;\n}\n\np {\n\tdisplay: block;\n\tmargin: 1em 0;\n}\n',"",{version:3,sources:["webpack://./src/providers/Theme/index.css"],names:[],mappings:"AAAA;CACC,iCAAiC;CACjC,2BAA2B;CAC3B,2BAA2B;;CAE3B,gCAAgC;CAChC,0BAA0B;CAC1B,0BAA0B;AAC3B;;AAEA;CACC;EACC,gDAAgD;EAChD,oCAAoC;EACpC,oCAAoC;CACrC;AACD;;AAEA;CACC;EACC,iDAAiD;EACjD,qCAAqC;EACrC,qCAAqC;CACtC;AACD;;AAEA;;;CAGC,YAAY;CACZ,SAAS;CACT,UAAU;AACX;;AAEA;CACC;;8BAE6B;CAC7B,mCAAmC;CACnC,kCAAkC;CAClC,yCAAyC;CACzC,wBAAwB;AACzB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC;WACU;AACX;;AAEA;CACC,cAAc;CACd,aAAa;AACd",sourcesContent:[':root {\n\t--light-background-color: #ffffff;\n\t--light-text-color: #2f446c;\n\t--light-link-color: #0c5e75;\n\n\t--dark-background-color: #282c34;\n\t--dark-text-color: #ffffff;\n\t--dark-link-color: #61dafb;\n}\n\n@media (prefers-color-scheme: dark) {\n\t:root {\n\t\t--background-color: var(--dark-background-color);\n\t\t--text-color: var(--dark-text-color);\n\t\t--link-color: var(--dark-link-color);\n\t}\n}\n\n@media (prefers-color-scheme: light) {\n\t:root {\n\t\t--background-color: var(--light-background-color);\n\t\t--text-color: var(--light-text-color);\n\t\t--link-color: var(--light-link-color);\n\t}\n}\n\nhtml,\nbody,\n#root {\n\theight: 100%;\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbody {\n\tfont-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\n\t\t"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\n\t\t"Helvetica Neue", sans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tbackground-color: var(--background-color);\n\tcolor: var(--text-color);\n}\n\na {\n\tcolor: var(--link-color);\n}\n\ncode {\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n\t\tmonospace;\n}\n\np {\n\tdisplay: block;\n\tmargin: 1em 0;\n}\n'],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./components/GeneralError/index.stories.js":"./src/components/GeneralError/index.stories.js","./components/NotFound/index.stories.js":"./src/components/NotFound/index.stories.js","./components/Progressbar/index.stories.js":"./src/components/Progressbar/index.stories.js","./modules/App/index.stories.js":"./src/modules/App/index.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[155],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);