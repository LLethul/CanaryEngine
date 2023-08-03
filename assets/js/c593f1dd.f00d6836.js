"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3169],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38267:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const r={},i="Signals",l={unversionedId:"tutorials/customsignals",id:"tutorials/customsignals",title:"Signals",description:"CanaryEngine's signal system is essentially the successor of the well-known BindableEvent, but no special quirks come with it. Some of these issues include common memory leaks and overall slowness. Our signal implementation simply uses @stravant's signal implementation which solely relies on the task scheduler to work.",source:"@site/docs/tutorials/customsignals.md",sourceDirName:"tutorials",slug:"/tutorials/customsignals",permalink:"/CanaryEngine/docs/tutorials/customsignals",draft:!1,editUrl:"https://github.com/canary-development/CanaryEngine/edit/main/docs/tutorials/customsignals.md",tags:[],version:"current",frontMatter:{},sidebar:"CanaryEngineSidebar",previous:{title:"File Structure",permalink:"/CanaryEngine/docs/tutorials/structure"},next:{title:"Networking",permalink:"/CanaryEngine/docs/tutorials/networking"}},s={},c=[{value:"SignalControllers",id:"signalcontrollers",level:3},{value:"AnonymousSignals",id:"anonymoussignals",level:3},{value:"ControllerConnections",id:"controllerconnections",level:3}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"signals"},"Signals"),(0,o.kt)("p",null,"CanaryEngine's signal system is essentially the successor of the well-known ",(0,o.kt)("a",{parentName:"p",href:"https://create.roblox.com/docs/reference/engine/classes/BindableEvent"},"BindableEvent"),", but no special quirks come with it. Some of these issues include common memory leaks and overall slowness. Our signal implementation simply uses ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/stravant"},"@stravant")),"'s signal implementation which solely relies on the task scheduler to work."),(0,o.kt)("h3",{id:"signalcontrollers"},"SignalControllers"),(0,o.kt)("p",null,"Firing and connecting to signals should be as simple as possible. If you are familiar with the ",(0,o.kt)("a",{parentName:"p",href:"https://create.roblox.com/docs/reference/engine/datatypes/RBXScriptSignal"},"RBXScriptSignal"),", then it should be easy enough to learn ",(0,o.kt)("inlineCode",{parentName:"p"},"SignalController"),"'s. As common knowledge, firing + connecting is identical across both the ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkController")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SignalController"),". Here's an example of an event being fired and connected to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local TestSignal = CanaryEngine.CreateSignal("NewSignal")\n\nTestSignal:Connect(function(data)\n    print(data) -- Output: {"Hello,", "player"}\nend)\n\nTestSignal:Fire({\n    "Hello,",\n    "player"\n})\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SignalController")," also share identical methods with the ",(0,o.kt)("a",{parentName:"p",href:"https://create.roblox.com/docs/reference/engine/datatypes/RBXScriptSignal"},"RBXScriptSignal"),", such as including ",(0,o.kt)("inlineCode",{parentName:"p"},"SignalController:Once")," and even a ",(0,o.kt)("inlineCode",{parentName:"p"},"SignalController:Wait")," method. Though, an extra feature that comes with using ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/stravant"},"@stravant")),"'s signal implementation is that you have the ability to disconnect every connection associated with the signal. This allows for quick cleanups of a signal. "),(0,o.kt)("h3",{id:"anonymoussignals"},"AnonymousSignals"),(0,o.kt)("p",null,"Anonymous signals are a special type of signal that can be only used from this refrence. These are signals that are not stored in any way by default compared to ",(0,o.kt)("inlineCode",{parentName:"p"},"SignalController"),", and are meant to be used for objects and events, and not for script communcation. They are created by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"CanaryEngine.CreateAnonymousSignal")," method. Here's an example of an anonymous signal being used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local AnonymousSignal = CanaryEngine.CreateAnonymousSignal()\nlocal AnonymousSignal2 = CanaryEngine.CreateAnonymousSignal() -- no name conflicts!\n\nAnonymousSignal:Connect(function(data)\n    print(data) -- Output: "{"Signal 1"}"\nend)\n\nAnonymousSignal:Fire({\n    "Signal 1"\n})\n\nAnonymousSignal2:Connect(function(data)\n    print(data) -- Output: "{"Signal 2"}"\nend)\n\nAnonymousSignal2:Fire({\n    "Signal 2"\n})\n')),(0,o.kt)("p",null,"Anonymous signals share identical methods with ",(0,o.kt)("inlineCode",{parentName:"p"},"SignalController")," so there is nothing new to learn here. "),(0,o.kt)("h3",{id:"controllerconnections"},"ControllerConnections"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ControllerConnection"),"'s are what is returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"SignalController"),"'s, these allow you to check the current connection status with ",(0,o.kt)("inlineCode",{parentName:"p"},"ControllerConnection.Connected")," and allow you to disconnect any connections you made, either by using ",(0,o.kt)("inlineCode",{parentName:"p"},"SignalController:Connect")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"SignalController:Once"),", by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ControllerConnection:Disconnect")," method. These are identical to the ",(0,o.kt)("a",{parentName:"p",href:"https://create.roblox.com/docs/reference/engine/datatypes/RBXScriptConnection"},"RBXScriptConnection"),", so documentation isn't really needed with this."),(0,o.kt)("p",null,"That's really all for ",(0,o.kt)("inlineCode",{parentName:"p"},"SignalController"),", they are a fairly simple concept and are extremely useful in many varied ways."))}m.isMDXComponent=!0}}]);