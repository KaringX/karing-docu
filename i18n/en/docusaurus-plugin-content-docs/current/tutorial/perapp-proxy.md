---
title: Pre-App Proxy
sidebar_position: 4
---
Here is the translated markdown content in English:

---

# Per-App Proxy
- This feature includes:
  - a. Whitelist Mode - Only certain apps use proxy traffic
  - b. Blacklist Mode - Exclude certain apps, all other apps use proxy traffic
- **Example**:
  - When the region is Mainland China (CN), select `Inbound Proxy` for apps like YouTube, Twitter, Facebook, Telegram, etc. (Whitelist Mode)
  - At this point, the above apps will all use proxy traffic

### Advantages of Per-App Proxy
- Effectively reduces app power consumption
- Avoids issues where certain apps cannot connect to the internet or slow down due to complex split-tunneling settings
- Recommended to use this feature
- **Note**:
  - After enabling this feature, the original diversion rules will be invalidated!

## Prerequisites
- Currently only supports **Android**
- System authorization is required
  - App Settings -> Karing -> Permissions -> Allow `Access to app list`

## Setup Steps
### Whitelist Mode
- This feature makes the selected apps <font color="red">use proxy</font>, while other apps will connect directly.
- Settings -> TUN -> `Per-App Proxy` -> Enable `Enable`, Enable `Whitelist Mode`
  - **Select** the apps you want to use the proxy.
  - For example, YouTube, Telegram, etc.

### Blacklist Mode
- This feature makes the selected apps <font color="red">connect directly</font>, while all other apps will use the proxy.
- Settings -> TUN -> `Per-App Proxy` -> Enable `Enable`, Disable `Whitelist Mode`
  - **Select** the apps you want to connect directly.
  - For example, Notion, Outlook, etc.
