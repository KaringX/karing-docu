---
title: Diversion
sidebar_position: 7
---

![](./img/diversion.png#center)

### Country Or Region: The country and region where the user is actually located. Karing will automatically add some diversion rules (geosite, geoip) according to this setting

### Rule Set: Built-in rule set settings

### Front proxy: Pack a proxy request into another proxy request and forward it. For example, there are two proxy nodes A and B, the current device D, and the target W. The delay of D->A and D->W is too high or unreachable, the delay of D->B is low, and the delay of B->A is low. Then B can be set as the front node (proxy) of A, so that the request path becomes D->B->A->W, the overall delay is low, and the experience is significantly improved

### Custom Proxy Group/Custom Auto Select: Custom version of [Auto Select], supports regular matching

### Diversion Rules: Diversion related settings, including new creation/editing, etc.

### Diversion Rule Detect: Detect the diversion rules hit by the domain name. Since only the domain name is matched, other factors are not considered, the detection results may deviate from the actual usage results