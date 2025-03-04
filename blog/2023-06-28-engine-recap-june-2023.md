---
slug: enginerecap-june2023
title: Engine Recap - June 2023
authors: [james]
tags: [canaryengine, recap]
---

**Hi developers,**

With engine update 3.0.0, a lot of features have been revamped. Lots of stuff comes with this update, including the new and improved plugin!

<!--truncate-->

### New Plugin

Since the last plugin was just a few buttons, we wanted to do a UI approach instead. This allows us to improve the UX of the plugin, and make it more advanced then ever. Some new features include specific package installation and auto updating.

### Reworked Data Saving

With the new data saving methods, it's even easier to save data for your game. The code has been improved to be more efficient, and it now has better API methods than previously. Custom key patterns are also now a thing, along with data editing via tables instead of get/set methods.

### Reworked Networking

The networking system has been completely changed, and are NetworkControllers are no longer called NetworkSignals. This is mainly because they now support server invocation, and have a lot more methods than previously.

### Name Param for `CreateSignal`

Previously, `CanaryEngine.CreateSignal` would not allow you to take in names, which requires you to create a custom caching system. This update changes that and you can now declare a name for your signals. All signals can now be accessed through scripts in the same environment as long as the names are matching.

### Entirely New Documentation

The documentation has been **completely** revamped, and now is hosted on a moonwave site. All API methods and properties are now documented.

---

If you're interested in contributing, please make a PR on our GitHub!