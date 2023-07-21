"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7684],{69148:e=>{e.exports=JSON.parse('{"functions":[{"name":"GetProfileData","desc":"Gets the data for the profile that was loaded in.","params":[],"returns":[{"desc":"","lua_type":"{[string]: any}?"}],"function_type":"method","source":{"line":397,"path":"src/dynamic/easyprofile.lua"}},{"name":"GetGlobalKeys","desc":"Gets all of the global keys that were recieved when the player was offline.","params":[],"returns":[{"desc":"","lua_type":"{GlobalKey}?"}],"function_type":"method","source":{"line":414,"path":"src/dynamic/easyprofile.lua"}},{"name":"AddUserIds","desc":"Adds `UserId`\'s to the player\'s profile.","params":[{"name":"userIds","desc":"The `UserId`s to add.","lua_type":"number | {number}"}],"returns":[],"function_type":"method","source":{"line":437,"path":"src/dynamic/easyprofile.lua"}},{"name":"GetUserIds","desc":"Gets all the associated `UserId`\'s of the player\'s profile.","params":[],"returns":[{"desc":"","lua_type":"{number}?"}],"function_type":"method","source":{"line":460,"path":"src/dynamic/easyprofile.lua"}},{"name":"RemoveUserIds","desc":"Removes all the associated `UserId`\'s off of the player\'s profile, leave `userIds` blank to clear all user IDs.","params":[{"name":"userIds","desc":"The `userId`\'s to clear off the player\'s profile","lua_type":"{number}?"}],"returns":[],"function_type":"method","source":{"line":476,"path":"src/dynamic/easyprofile.lua"}},{"name":"GetMetaData","desc":"Gets all metadata that is related to the player\'s profile.","params":[],"returns":[{"desc":"","lua_type":"ProfileMetaData?"}],"function_type":"method","source":{"line":498,"path":"src/dynamic/easyprofile.lua"}},{"name":"GetDataUsage","desc":"Gets the amount of data (in percent) currently being used by the profile.","params":[],"returns":[{"desc":"","lua_type":"number?"}],"function_type":"method","source":{"line":518,"path":"src/dynamic/easyprofile.lua"}}],"properties":[{"name":"GlobalKeyAdded","desc":"Fires when a global key has been recieved by the server.","lua_type":"ScriptSignal<GlobalKey>","tags":["Event"],"source":{"line":104,"path":"src/dynamic/easyprofile.lua"}},{"name":"Profile","desc":"The loaded profile.","lua_type":"any","private":true,"source":{"line":112,"path":"src/dynamic/easyprofile.lua"}}],"types":[],"name":"ProfileObject","desc":"The child object of `ProfileObject`.","realm":["Server"],"source":{"line":95,"path":"src/dynamic/easyprofile.lua"}}')}}]);