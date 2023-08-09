"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5993],{78450:e=>{e.exports=JSON.parse('{"functions":[{"name":"GetEngineServer","desc":"Gets the server-sided interface of CanaryEngine","params":[],"returns":[{"desc":"","lua_type":"EngineServer?"}],"function_type":"static","realm":["Server"],"source":{"line":352,"path":"src/init.lua"}},{"name":"GetEngineClient","desc":"Gets the client-sided interface of CanaryEngine","params":[],"returns":[{"desc":"","lua_type":"EngineClient?"}],"function_type":"static","realm":["Client"],"yields":true,"source":{"line":383,"path":"src/init.lua"}},{"name":"GetEngineReplicated","desc":"Gets the global-sided interface of CanaryEngine. Recommended that use this only in replicated packages, this is a bad practice anywhere else.","params":[],"returns":[{"desc":"","lua_type":"EngineReplicated?"}],"function_type":"static","source":{"line":417,"path":"src/init.lua"}},{"name":"CreateSignal","desc":"Creates a new signal that is then given a reference in the signals table. Create a new anonymous signal by leaving the name blank.","params":[{"name":"signalName","desc":"The name of the signal","lua_type":"string"}],"returns":[{"desc":"","lua_type":"SignalController<any>"}],"function_type":"static","source":{"line":487,"path":"src/init.lua"}},{"name":"CreateAnonymousSignal","desc":"Creates a new anonymous signal, this does not have a reference outside of the variable it was created in.","params":[],"returns":[{"desc":"","lua_type":"SignalController<any>"}],"function_type":"static","source":{"line":506,"path":"src/init.lua"}},{"name":"GetLatestPackageVersionAsync","desc":"Checks the latest version of the provided package, and returns the latest version if you gave version permissions.\\n\\n\\n:::caution\\n\\nIf you come across the error \\"package must have a valid \'VersionNumber\'\\", that means the description of your asset does not contain the current version of your asset. This is required to compare versions.\\n\\n:::","params":[{"name":"package","desc":"The package to check the version of, must have the required attributes.","lua_type":"Instance"},{"name":"warnIfNotLatestVersion","desc":"An optional setting to warn the user if the provided package is not up-to-date, defaults to true.","lua_type":"boolean?"},{"name":"respectDebugger","desc":"An optional setting to respect the debugger when warning the user, only applies when `warnIfNotLatestVersion` is true.","lua_type":"boolean?"}],"returns":[{"desc":"","lua_type":"number?"}],"function_type":"static","realm":["Server"],"deprecated":{"version":"v3.1.4","desc":"Deprecated in favor of newer and better package systems"},"yields":true,"source":{"line":530,"path":"src/init.lua"}}],"properties":[{"name":"Runtime","desc":"The runtime property contains settings that are set during runtime, and the current context of the server/client.","lua_type":"{RuntimeSettings: RuntimeSettings, RuntimeContext: RuntimeContext, RuntimeObjects: {NetworkControllers: {[string]: (ServerNetworkController<any, any> | ServerNetworkController<any, any>)}, SignalControllers: {[string]: SignalController<any>}}}","readonly":true,"source":{"line":18,"path":"src/init.lua"}},{"name":"Libraries","desc":"The libraries property contains useful libraries like Benchmark or Serialize.","lua_type":"{Utility: Utility, Benchmark: Benchmark, Statistics: Statistics, Serialize: Serialize}","readonly":true,"source":{"line":27,"path":"src/init.lua"}}],"types":[{"name":"EngineServer","desc":"This is the server sided API for CanaryEngine.","fields":[{"name":"Packages","lua_type":"{Server: Folder, Folder}","desc":""},{"name":"Media","lua_type":"{Server: Folder, Replicated: Folder}","desc":""},{"name":"CreateNetworkController","lua_type":"(controllerName: string) -> (ServerNetworkController<any, any>)","desc":""}],"private":true,"source":{"line":169,"path":"src/init.lua"}},{"name":"EngineClient","desc":"This is the client sided API for CanaryEngine.","fields":[{"name":"Packages","lua_type":"{Client: Folder, Replicated: Folder}","desc":""},{"name":"Media","lua_type":"{Client: Folder, Replicated: Folder}","desc":""},{"name":"Player","lua_type":"Player","desc":""},{"name":"PlayerGui","lua_type":"StarterGui","desc":""},{"name":"PlayerBackpack","lua_type":"StarterPack","desc":""},{"name":"CreateNetworkController","lua_type":"(controllerName: string) -> (ClientNetworkController<any, any>)","desc":""}],"private":true,"source":{"line":199,"path":"src/init.lua"}},{"name":"EngineReplicated","desc":"This is the global sided API for CanaryEngine.","fields":[{"name":"Packages","lua_type":"Folder","desc":""},{"name":"Media","lua_type":"Folder","desc":""}],"private":true,"source":{"line":228,"path":"src/init.lua"}},{"name":"CanaryEngine","desc":"This is the main API for CanaryEngine","fields":[{"name":"GetEngineServer","lua_type":"() -> (EngineServer)","desc":""},{"name":"GetEngineClient","lua_type":"() -> (EngineClient)","desc":""},{"name":"CreateSignal","lua_type":"(signalName: string) -> (SignalController<any>)","desc":""},{"name":"CreateAnonymousSignal","lua_type":"() -> (SignalController<any>)","desc":""},{"name":"GetLatestPackageVersionAsync","lua_type":"(CanaryEngine: Instance, warnIfNotLatestVersion: boolean?, respectDebugger: boolean?) -> (number?)","desc":""},{"name":"Runtime","lua_type":"{RuntimeSettings: {StudioDebugEnabled: boolean, Version: number, LiveGameDebugger: boolean}, RuntimeContext: {Studio: boolean, Server: boolean, Client: boolean, StudioPlay: boolean}, RuntimeObjects: {NetworkControllers: {[string]: (ServerNetworkController<any, any> | ServerNetworkController<any, any>)}, SignalControllers: {[string]: SignalController<any>}}}","desc":""},{"name":"Libraries","lua_type":"{Utility: Utility, Benchmark: Benchmark, Statistics: Statistics, Serialize: Serialize, Fusion: Fusion}","desc":""},{"name":"Debugger","lua_type":"Debugger","desc":""},{"name":"RuntimeCreatedSignals","lua_type":"{[string]: SignalController<any>}","desc":""},{"name":"RuntimeCreatedNetworkControllers","lua_type":"{[string]: ServerNetworkController<any, any> | ClientNetworkController<any, any>}","desc":""}],"private":true,"source":{"line":299,"path":"src/init.lua"}}],"name":"CanaryEngine","desc":"The parent of all classes.","source":{"line":8,"path":"src/init.lua"}}')}}]);