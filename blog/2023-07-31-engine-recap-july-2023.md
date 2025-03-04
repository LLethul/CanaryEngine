---
slug: enginerecap-july2023
title: Engine Recap - July 2023
authors: [james, contributor-koxx12]
tags: [canaryengine, recap]
---

**Hi developers,**

With engine update 3.2.4, we have released lots of changes based on feedback, and lots of long time bug fixes.

<!--truncate-->

### Anonymous Signals

First off, we have added the `AnonymousSignal` API thanks to @koxx12. This allows you to create signals that are only referenced once, and not cached.

```lua
local MyNewAnonymousSignal = CanaryEngine.CreateAnonymousSignal() -- this is the only reference held to the signal controller!
```

### Updated Benchmark Library

We have updated the `Benchmark` library to provide more accurate information, and more useful information such as longest benchmark and shortest. This will allow you to get a more in-depth result of your testing, allowing you to create even better code!

### EngineReplicatedFirst

We have added a folder for `ReplicatedFirst`! Now you can have custom loader scripts, or startup scripts still run without being deattached from the framework. This also lets us execute our next feature...

### Engine Loader

Introducing the engine loader! This is a custom loading screen made directly for CanaryEngine, and it functions better in performance than most loading screens. It also shares extensive info, like the current asset completed percentage, and even failed assets once finished! You can view the API under **Engine API > EngineLoader**.

### `roblox-ts` Typings

You can now use CanaryEngine with the new `roblox-ts` typings. Lots of people requested this feature and it is finally here!

### Other Improvements

* Improves types
* Fixes plugin bugs
* Fixes `SignalController`s not working *at all*
* Fixes other small bugs

---

If you're interested in contributing, please make a PR on our GitHub!