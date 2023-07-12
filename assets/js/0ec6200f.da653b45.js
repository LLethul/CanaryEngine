"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[375],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={"sidebar-position":1},i="Networking",l={unversionedId:"Tutorials/networking",id:"Tutorials/networking",title:"Networking",description:"CanaryEngine's networking system is very straightforward compared to some of the other game frameworks out there. It uses a method which reduces bandwidth by a lot, and in turn will help your game lag less. This document serves as a simple tutorial on the networking system, explaining all the functionality available in the NetworkController.",source:"@site/docs/Tutorials/networking.md",sourceDirName:"Tutorials",slug:"/Tutorials/networking",permalink:"/CanaryEngine/docs/Tutorials/networking",draft:!1,editUrl:"https://github.com/canary-development/CanaryEngine/edit/main/docs/Tutorials/networking.md",tags:[],version:"current",frontMatter:{"sidebar-position":1},sidebar:"defaultSidebar",previous:{title:"Data Management",permalink:"/CanaryEngine/docs/Tutorials/datastoring"},next:{title:"Package System",permalink:"/CanaryEngine/docs/Tutorials/packages"}},s={},u=[{value:"RemoteEvents",id:"remoteevents",level:3},{value:"RemoteFunctions",id:"remotefunctions",level:3},{value:"Server:",id:"server",level:4},{value:"Client:",id:"client",level:4}],c={toc:u},h="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"networking"},"Networking"),(0,o.kt)("p",null,"CanaryEngine's networking system is very straightforward compared to some of the other game frameworks out there. It uses a method which reduces bandwidth by a lot, and in turn will help your game lag less. This document serves as a simple tutorial on the networking system, explaining all the functionality available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkController"),"."),(0,o.kt)("h3",{id:"remoteevents"},"RemoteEvents"),(0,o.kt)("p",null,"Instead of interacting with the normal ",(0,o.kt)("a",{parentName:"p",href:"https://create.roblox.com/docs/reference/engine/classes/RemoteEvent"},"RemoteEvent")," API, we use a custom method which is much more compatible with many game's standards. Though, to first create a new controller, use the ",(0,o.kt)("inlineCode",{parentName:"p"},".CreateNetworkController")," function in the context specific framework. In this tutorial, we assume the server is trying to send information to the client. Here's an example of how you would set up the network controller:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local SendInfoNetwork = CanaryEngineServer.CreateNetworkController("SendInfoNetwork")\n\nprint(SendInfoNetwork.Name) -- Output: SendInfoNetwork\n')),(0,o.kt)("p",null,"Now lets set up the network controller to be client-sided as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local SendInfoNetwork = CanaryEngineClient.CreateNetworkController("SendInfoNetwork")\n')),(0,o.kt)("p",null,"Now lets continue this code and make it so it can recieve info from the server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local SendInfoNetwork = CanaryEngineClient.CreateNetworkSignal("SendInfoNetwork")\n\nSendInfoNetwork:Connect(function(data)\n    print(data)\nend)\n')),(0,o.kt)("p",null,"Though, we have a problem. ",(0,o.kt)("inlineCode",{parentName:"p"},"SendInfoNetwork")," is not recieving anything on the client if nothing is being fired from the server. To pass data through the network controller, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkController:Fire"),". Here's how we would do that on the server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local SendInfoNetwork = CanaryEngineServer.CreateNetworkController("SendInfoNetwork")\nlocal PlayerService = game:GetService("Players")\n\nprint(SendInfoNetwork.Name) -- Output: SendInfoNetwork\n\nSendInfoNetwork:Fire(PlayerService:GetPlayers(), { -- When sending data on the server, you must pass a player argument. This can be a single player or a table of players. In this situation, we use Players:GetPlayers to send this to all players.\n    "Sent through a",\n    "RemoteEvent"\n})\n')),(0,o.kt)("p",null,"When we start the script, we should then see the the name in the output, and also see the following in the client output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'{\n    "Sent through a",\n    "RemoteEvent"\n}\n')),(0,o.kt)("p",null,"Please keep in mind that these can be used for many other things other than just passing strings through, also that if you just have a single piece of data you can send it through the fire method without wrapping it in a table. Though, keep in mind that the data you recieve will always be a table no matter how you pass the data originally."),(0,o.kt)("h3",{id:"remotefunctions"},"RemoteFunctions"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://create.roblox.com/docs/reference/engine/classes/RemoteFunction"},"RemoteFunction")," is a fairly straightforward way of sending and recieving data at the same time. For now, we only support invoking the server as invoking the client is fairly useless at this point. If you need this functionality, you can use the remote event part of the network controllers. You may already know how to set up the basic network controller, so here's just a basic example of the client asking the server for a value:"),(0,o.kt)("h4",{id:"server"},"Server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local ValueGetNetwork = CanaryEngineServer.CreateNetworkController("ValueGetNetwork")\n\nValueGetNetwork:OnInvoke(function(sender, data)\n    print(sender.Name) -- The player who sent the invoke\'s name\n    if data[1] then\n        return "yes" -- We must return a value here, or it will error\n    else\n        return "no"\n    end\nend)\n')),(0,o.kt)("h4",{id:"client"},"Client:"),(0,o.kt)("p",null,"Now on the client, we can invoke the server using ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkController:InvokeAsync"),". We must send a boolean through to be checked on invoked."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local ValueGetNetwork = CanaryEngineClient.CreateNetworkController("ValueGetNetwork")\n\nprint(ValueGetNetwork:InvokeAsync(true)) -- When the value is recieved, this should return "yes" according to the server code.\n')),(0,o.kt)("p",null,"Obviously, this isn't quite a valid use case for invoking the server, but some valid use cases include asking the server for a specific value. What we are doing here is just a waste of bandwidth, but for the sake of the tutorial I will be including this."))}p.isMDXComponent=!0}}]);