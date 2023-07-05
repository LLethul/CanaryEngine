"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[688],{78450:e=>{e.exports=JSON.parse('{"functions":[{"name":"GetEngineServer","desc":"Gets the server-sided architecture of CanaryEngine","params":[],"returns":[{"desc":"","lua_type":"EngineServer?"}],"function_type":"static","realm":["Server"],"source":{"line":441,"path":"src/CanaryEngine.lua"}},{"name":"GetEngineClient","desc":"Gets the client-sided architecture of CanaryEngine","params":[],"returns":[{"desc":"","lua_type":"EngineClient?"}],"function_type":"static","realm":["Client"],"yields":true,"source":{"line":478,"path":"src/CanaryEngine.lua"}},{"name":"CreateSignal","desc":"Creates a new signal that is then given a reference in the signals table.","params":[{"name":"signalName","desc":"The name of the signal","lua_type":"string"}],"returns":[{"desc":"","lua_type":"ScriptSignal<any>"}],"function_type":"static","source":{"line":570,"path":"src/CanaryEngine.lua"}},{"name":"GetLatestPackageVersionAsync","desc":"Checks the latest version of the provided package, and returns the latest version if you gave version permissions.","params":[{"name":"package","desc":"The package to check the version of, must have the required attributes.","lua_type":"Instance"},{"name":"warnIfNotLatestVersion","desc":"An optional setting to warn the user if the provided package is not up-to-date, defaults to true.","lua_type":"boolean?"},{"name":"respectDebugger","desc":"An optional setting to respect the debugger when warning the user, only applies when `warnIfNotLatestVersion` is true.","lua_type":"boolean?"}],"returns":[{"desc":"","lua_type":"number?"}],"function_type":"static","errors":[{"lua_type":"\\"Asset description must have \'Version: (number) or \'v(number)\'\\"","desc":"This means that the description of your asset uploaded to Roblox does not contain the latter. Example of description:   My awesome new package for CanaryEngine! Version: 3.4.7"}],"realm":["Server"],"yields":true,"source":{"line":594,"path":"src/CanaryEngine.lua"}}],"properties":[{"name":"Runtime","desc":"The runtime property contains settings that are set during runtime, and the current context of the server/client.","lua_type":"{RuntimeSettings: RuntimeSettings, RuntimeContext: RuntimeContext}","readonly":true,"source":{"line":19,"path":"src/CanaryEngine.lua"}},{"name":"DeveloperMode","desc":"Toggles developer mode.","lua_type":"boolean","private":true,"source":{"line":28,"path":"src/CanaryEngine.lua"}},{"name":"Libraries","desc":"The libraries property contains useful libraries like Benchmark or Serialize.","lua_type":"{Utility: Utility, Benchmark: Benchmark, Statistics: Statistics, Serialize: Serialize}","readonly":true,"source":{"line":37,"path":"src/CanaryEngine.lua"}}],"types":[{"name":"ScriptConnection","desc":"A script connection, similar to an [RBXScriptConnection]","fields":[{"name":"Disconnect","lua_type":"(self: ScriptConnection) -> ()","desc":""},{"name":"Connected","lua_type":"boolean","desc":""}],"private":true,"source":{"line":145,"path":"src/CanaryEngine.lua"}},{"name":"ScriptSignalBasic","desc":"A basic script signal, similar to an [RBXScriptSignal]","fields":[{"name":"Connect","lua_type":"(self: ScriptSignalBasic<T>?, func: (data: {T}) -> ()) -> (ScriptConnection)","desc":""},{"name":"Wait","lua_type":"(self: ScriptSignalBasic<T>?) -> ({T})","desc":""},{"name":"Once","lua_type":"(self: ScriptSignalBasic<T>?, func: (data: {T}) -> ()) -> (ScriptConnection)","desc":""}],"private":true,"source":{"line":162,"path":"src/CanaryEngine.lua"}},{"name":"ScriptSignal","desc":"A script signal, similar to a [ScriptSignal]. Please note that this extends to [ScriptSignalBasic]","fields":[{"name":"Fire","lua_type":"(self: ScriptSignal<T>?, data: ({T} | T)?) -> ()","desc":""},{"name":"DisconnectAll","lua_type":"(self: ScriptSignal<T>?) -> ()","desc":""}],"source":{"line":177,"path":"src/CanaryEngine.lua"}},{"name":"NetworkControllerData","desc":"The type of the data being sent through a network controller, though it is generally known as a rule that sent data will be converted into a table.","lua_type":"({T} | T)","source":{"line":188,"path":"src/CanaryEngine.lua"}},{"name":"ClientNetworkController","desc":"A ClientNetworkController is basically a mixed version of a [RemoteEvent] and [RemoteFunction]. It has better features and is more performant.","fields":[{"name":"Connect","lua_type":"(self: ClientNetworkController<T>?, func: (data: {T}) -> ()) -> (ScriptConnection)","desc":""},{"name":"Once","lua_type":"(self: ClientNetworkController<T>?, func: (data: {T}) -> ()) -> (ScriptConnection)","desc":""},{"name":"Wait","lua_type":"(self: ClientNetworkController<T>?) -> ({T})","desc":""},{"name":"Fire","lua_type":"(self: ClientNetworkController<T>?, data: ({T} | T)?) -> ()","desc":""},{"name":"InvokeAsync","lua_type":"(self: ClientNetworkController<T>?, data: ({T} | T)?) -> ({T})","desc":""}],"source":{"line":203,"path":"src/CanaryEngine.lua"}},{"name":"ServerNetworkController","desc":"A ServerNetworkController is basically a mixed version of a [RemoteEvent] and [RemoteFunction]. It has better features and is more performant, though this is the server-sided API.","fields":[{"name":"Connect","lua_type":"(self: ServerNetworkController<T>?, func: (sender: Player, data: {T}) -> ()) -> (ScriptConnection)","desc":""},{"name":"Once","lua_type":"(self: ServerNetworkController<T>?, func: (sender: Player, data: {T}) -> ()) -> (ScriptConnection)","desc":""},{"name":"Wait","lua_type":"(self: ServerNetworkController<T>?) -> (Player, {T})","desc":""},{"name":"Fire","lua_type":"(self: ServerNetworkController<T>?, recipient: Player | {Player}, data: ({T} | T)?) -> ()","desc":""},{"name":"OnInvoke","lua_type":"(self: ServerNetworkController<T>?, callback: (sender: Player, data: {T}) -> ()) -> ()","desc":""}],"source":{"line":225,"path":"src/CanaryEngine.lua"}},{"name":"EngineServer","desc":"This is the server sided API for CanaryEngine.\\n\\n\\tServer: typeof(script.Parent.Packages.Server),\\n\\tReplicated: typeof(script.Parent.Packages.Replicated)\\n},\\n\\n\\tServer: typeof(script.Parent.Media.Server),\\n\\tReplicated: typeof(script.Parent.Media.Replicated)\\n},","fields":[{"name":"Packages","lua_type":"{","desc":""},{"name":"Media","lua_type":"{","desc":""},{"name":"CreateNetworkController","lua_type":"(controllerName: string) -> (ServerNetworkController<any>)","desc":""}],"private":true,"source":{"line":253,"path":"src/CanaryEngine.lua"}},{"name":"EngineClient","desc":"This is the client sided API for CanaryEngine.\\n\\n\\tClient: typeof(script.Parent.Packages.Client),\\n\\tReplicated: typeof(script.Parent.Packages.Replicated)\\n},\\n\\n\\tClient: typeof(script.Parent.Media.Client),\\n\\tReplicated: typeof(script.Parent.Media.Replicated)\\n},","fields":[{"name":"Packages","lua_type":"{","desc":""},{"name":"Media","lua_type":"{","desc":""},{"name":"Player","lua_type":"Player,","desc":""},{"name":"PlayerGui","lua_type":"typeof(game:GetService(\\"StarterGui\\")),","desc":""},{"name":"PlayerBackpack","lua_type":"typeof(game:GetService(\\"StarterPack\\")),","desc":""},{"name":"CreateNetworkController","lua_type":"(controllerName: string) -> (ClientNetworkController<any>)","desc":""}],"private":true,"source":{"line":294,"path":"src/CanaryEngine.lua"}},{"name":"CanaryEngine","desc":"This is the main API for CanaryEngine\\n\\n\\n\\tRuntimeSettings: {\\n\\t\\tStudioDebugEnabled: boolean,\\n\\t\\tCheckLatestVersion: boolean,\\n\\t\\tLiveGameDebugger: boolean,\\n\\t},\\n\\t\\n\\tRuntimeContext {\\n\\t\\tStudio: boolean,\\n\\t\\tServer: boolean,\\n\\t\\tClient: boolean,\\n\\t\\tStudioPlay: boolean,\\n\\t}\\n},\\n\\n\\tUtility: typeof(Utility),\\n\\tBenchmark: typeof(Benchmark),\\n\\tStatistics: typeof(Statistics),\\n\\tSerialize: typeof(Serialize),\\n}","fields":[{"name":"GetEngineServer","lua_type":"() -> (EngineServer),","desc":""},{"name":"GetEngineClient","lua_type":"() -> (EngineClient),","desc":""},{"name":"CreateSignal","lua_type":"() -> (ScriptSignal<any>),","desc":""},{"name":"GetLatestPackageVersionAsync","lua_type":"(CanaryEngine: Instance, warnIfNotLatestVersion: boolean?, respectDebugger: boolean?) -> (number?),","desc":""},{"name":"Runtime","lua_type":"{","desc":""},{"name":"Libraries","lua_type":"{","desc":""},{"name":"DeveloperMode","lua_type":"boolean","desc":""}],"private":true,"source":{"line":402,"path":"src/CanaryEngine.lua"}}],"name":"CanaryEngine","desc":"The parent class of all things CanaryEngine.","source":{"line":9,"path":"src/CanaryEngine.lua"}}')}}]);