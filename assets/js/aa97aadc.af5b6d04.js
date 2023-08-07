"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[723],{14688:e=>{e.exports=JSON.parse('{"functions":[{"name":"SetFunction","desc":"Sets the function to be ran `timesToRun` amount of times. \\n\\n:::danger\\n\\n`BenchmarkObject:Stop` is already called after being finished, calling the latter manually will result in an error.\\n\\n:::","params":[{"name":"timesToRun","desc":"The amount of times to run `func`.","lua_type":"number"},{"name":"func","desc":"The function to run for each `timesToRun` index, has a `timesRan` argument which is how many times the benchmark has run so far.","lua_type":"(timesRan: number) -> ()"}],"returns":[{"desc":"","lua_type":"BenchmarkData"}],"function_type":"method","source":{"line":106,"path":"src/dynamic/benchmark.lua"}},{"name":"Start","desc":"Starts the benchmark object.","params":[],"returns":[],"function_type":"method","source":{"line":139,"path":"src/dynamic/benchmark.lua"}},{"name":"Stop","desc":"Stops the benchmark from running and destroys it, returns the amount of time it took to complete the code above it.","params":[],"returns":[{"desc":"","lua_type":"number"}],"function_type":"method","source":{"line":148,"path":"src/dynamic/benchmark.lua"}},{"name":"GetCurrentTime","desc":"Gets the current elapsed time of the benchmark.","params":[],"returns":[{"desc":"","lua_type":"number?"}],"function_type":"method","source":{"line":164,"path":"src/dynamic/benchmark.lua"}},{"name":"Destroy","desc":"Destroys the `BenchmarkObject`, this is done automatically after `SetFunction` is finished of `Stop` is called.","params":[],"returns":[],"function_type":"method","source":{"line":176,"path":"src/dynamic/benchmark.lua"}}],"properties":[{"name":"IsCompleted","desc":"A boolean to decide if the benchmark should be GC\'ed.","lua_type":"boolean","source":{"line":22,"path":"src/dynamic/benchmark.lua"}},{"name":"Destroying","desc":"A signal that fires when the benchmark has been disposed of.","lua_type":"SignalController","tags":["Event"],"source":{"line":30,"path":"src/dynamic/benchmark.lua"}},{"name":"StartTime","desc":"The time (in seconds) the benchmark was started at.","lua_type":"number","source":{"line":37,"path":"src/dynamic/benchmark.lua"}},{"name":"EndTime","desc":"The time (in seconds) the benchmark was ended at.","lua_type":"number","source":{"line":44,"path":"src/dynamic/benchmark.lua"}}],"types":[],"name":"BenchmarkObject","desc":"The benchmark object itself.","source":{"line":15,"path":"src/dynamic/benchmark.lua"}}')}}]);