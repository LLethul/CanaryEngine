"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5993],{78450:e=>{e.exports=JSON.parse('{"functions":[{"name":"GetEngineServer","desc":"Gets the server-sided interface of CanaryEngine","params":[],"returns":[{"desc":"","lua_type":"EngineServer?"}],"function_type":"static","realm":["Server"],"source":{"line":398,"path":"src/init.lua"}},{"name":"GetEngineClient","desc":"Gets the client-sided interface of CanaryEngine","params":[],"returns":[{"desc":"","lua_type":"EngineClient?"}],"function_type":"static","realm":["Client"],"yields":true,"source":{"line":435,"path":"src/init.lua"}},{"name":"CreateSignal","desc":"Creates a new signal that is then given a reference in the signals table.","params":[{"name":"signalName","desc":"The name of the signal","lua_type":"string"}],"returns":[{"desc":"","lua_type":"ScriptSignal<any>"}],"function_type":"static","source":{"line":527,"path":"src/init.lua"}},{"name":"GetLatestPackageVersionAsync","desc":"Checks the latest version of the provided package, and returns the latest version if you gave version permissions.\\n\\n:::caution\\n\\nIf you come across the error \\"package must have a valid \'VersionNumber\'\\", that means the description of your asset does not contain the current version of your asset. This is required to compare versions.\\n\\n:::","params":[{"name":"package","desc":"The package to check the version of, must have the required attributes.","lua_type":"Instance"},{"name":"warnIfNotLatestVersion","desc":"An optional setting to warn the user if the provided package is not up-to-date, defaults to true.","lua_type":"boolean?"},{"name":"respectDebugger","desc":"An optional setting to respect the debugger when warning the user, only applies when `warnIfNotLatestVersion` is true.","lua_type":"boolean?"}],"returns":[{"desc":"","lua_type":"number?"}],"function_type":"static","realm":["Server"],"yields":true,"source":{"line":556,"path":"src/init.lua"}}],"properties":[{"name":"Runtime","desc":"The runtime property contains settings that are set during runtime, and the current context of the server/client.","lua_type":"{RuntimeSettings: RuntimeSettings, RuntimeContext: RuntimeContext}","readonly":true,"source":{"line":19,"path":"src/init.lua"}},{"name":"DeveloperMode","desc":"Toggles developer mode.","lua_type":"boolean","private":true,"source":{"line":28,"path":"src/init.lua"}},{"name":"Libraries","desc":"The libraries property contains useful libraries like Benchmark or Serialize.","lua_type":"{Utility: Utility, Benchmark: Benchmark, Statistics: Statistics, Serialize: Serialize}","readonly":true,"source":{"line":37,"path":"src/init.lua"}}],"types":[{"name":"ScriptConnection","desc":"A script connection, similar to an [RBXScriptConnection]","fields":[{"name":"Disconnect","lua_type":"(self: ScriptConnection) -> ()","desc":""},{"name":"Connected","lua_type":"boolean","desc":""}],"private":true,"source":{"line":139,"path":"src/init.lua"}},{"name":"ScriptSignal","desc":"A script signal, similar to an [RBXScriptSignal]","fields":[{"name":"Connect","lua_type":"(self: ScriptSignalBasic<T>?, func: (data: {T}) -> ()) -> (ScriptConnection)","desc":""},{"name":"Wait","lua_type":"(self: ScriptSignalBasic<T>?) -> ({T})","desc":""},{"name":"Once","lua_type":"(self: ScriptSignalBasic<T>?, func: (data: {T}) -> ()) -> (ScriptConnection)","desc":""},{"name":"Fire","lua_type":"(self: ScriptSignal<T>?, data: ({T} | T)?) -> ()","desc":""},{"name":"DisconnectAll","lua_type":"(self: ScriptSignal<T>?) -> ()","desc":""},{"name":"Name","lua_type":"string","desc":""}],"private":true,"source":{"line":161,"path":"src/init.lua"}},{"name":"ClientNetworkController","desc":"A ClientNetworkController is basically a mixed version of a [RemoteEvent] and [RemoteFunction]. It has better features and is more performant.","fields":[{"name":"Connect","lua_type":"(self: ClientNetworkController<T>?, func: (data: {T}) -> ()) -> (ScriptConnection)","desc":""},{"name":"Once","lua_type":"(self: ClientNetworkController<T>?, func: (data: {T}) -> ()) -> (ScriptConnection)","desc":""},{"name":"Wait","lua_type":"(self: ClientNetworkController<T>?) -> ({T})","desc":""},{"name":"Fire","lua_type":"(self: ClientNetworkController<T>?, data: ({T} | T)?) -> ()","desc":""},{"name":"InvokeAsync","lua_type":"(self: ClientNetworkController<T>?, data: ({T} | T)?) -> ({T})","desc":""},{"name":"Name","lua_type":"string","desc":""}],"source":{"line":187,"path":"src/init.lua"}},{"name":"ServerNetworkController","desc":"A ServerNetworkController is basically a mixed version of a [RemoteEvent] and [RemoteFunction]. It has better features and is more performant, though this is the server-sided API.","fields":[{"name":"Connect","lua_type":"(self: ServerNetworkController<T>?, func: (sender: Player, data: {T}) -> ()) -> (ScriptConnection)","desc":""},{"name":"Once","lua_type":"(self: ServerNetworkController<T>?, func: (sender: Player, data: {T}) -> ()) -> (ScriptConnection)","desc":""},{"name":"Wait","lua_type":"(self: ServerNetworkController<T>?) -> (Player, {T})","desc":""},{"name":"Fire","lua_type":"(self: ServerNetworkController<T>?, recipient: Player | {Player}, data: ({T} | T)?) -> ()","desc":""},{"name":"OnInvoke","lua_type":"(self: ServerNetworkController<T>?, callback: (sender: Player, data: {T}) -> ()) -> ()","desc":""},{"name":"Name","lua_type":"string","desc":""}],"source":{"line":213,"path":"src/init.lua"}},{"name":"EngineServer","desc":"This is the server sided API for CanaryEngine.","fields":[{"name":"Packages","lua_type":"{Server: typeof(script.Parent.Packages.Server), Replicated: typeof(script.Parent.Packages.Replicated)}","desc":""},{"name":"Media","lua_type":"{Server: typeof(script.Parent.Media.Server), Replicated: typeof(script.Parent.Media.Replicated)}","desc":""},{"name":"CreateNetworkController","lua_type":"(controllerName: string) -> (ServerNetworkController<any>)","desc":""}],"private":true,"source":{"line":235,"path":"src/init.lua"}},{"name":"EngineClient","desc":"This is the client sided API for CanaryEngine.","fields":[{"name":"Packages","lua_type":"{Client: typeof(script.Parent.Packages.Client), Replicated: typeof(script.Parent.Packages.Replicated)}","desc":""},{"name":"Media","lua_type":"{Client: typeof(script.Parent.Media.Client), Replicated: typeof(script.Parent.Media.Replicated)}","desc":""},{"name":"Player","lua_type":"Player","desc":""},{"name":"PlayerGui","lua_type":"StarterGui","desc":""},{"name":"PlayerBackpack","lua_type":"StarterPack","desc":""},{"name":"CreateNetworkController","lua_type":"(controllerName: string) -> (ClientNetworkController<any>)","desc":""}],"private":true,"source":{"line":268,"path":"src/init.lua"}},{"name":"CanaryEngine","desc":"This is the main API for CanaryEngine","fields":[{"name":"GetEngineServer","lua_type":"() -> (EngineServer),","desc":""},{"name":"GetEngineClient","lua_type":"() -> (EngineClient),","desc":""},{"name":"CreateSignal","lua_type":"() -> (ScriptSignal<any>),","desc":""},{"name":"GetLatestPackageVersionAsync","lua_type":"(CanaryEngine: Instance, warnIfNotLatestVersion: boolean?, respectDebugger: boolean?) -> (number?),","desc":""},{"name":"Runtime","lua_type":"{RuntimeSettings: {StudioDebugEnabled: boolean, CheckLatestVersion: boolean, LiveGameDebugger: boolean}, RuntimeContext: {Studio: boolean, Server: boolean, Client: boolean, StudioPlay: boolean}},","desc":""},{"name":"Libraries","lua_type":"{Utility: Utility, Benchmark: Benchmark, Statistics: Statistics,\\tSerialize: Serialize,}","desc":""},{"name":"DeveloperMode","lua_type":"boolean","desc":""},{"name":"RuntimeCreatedSignals","lua_type":"{[string]: ScriptSignal<any>}","desc":""},{"name":"RuntimeCreatedNetworkControllers","lua_type":"{[string]: ServerNetworkController<any> | ClientNetworkController<any>}","desc":""}],"private":true,"source":{"line":357,"path":"src/init.lua"}}],"name":"CanaryEngine","desc":"The parent of all classes.","source":{"line":9,"path":"src/init.lua"}}')}}]);