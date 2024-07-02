---
title: Pre-App Proxy
sidebar_position: 4
---
Here is the translated markdown content in English:

---

# Per-App Proxy
- With this function, you can set certain App traffic to go through VPN or not.
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
- For apps that use VPN traffic, you can still use the diversion function to divert traffic outbound

## Prerequisites
- Currently only supports **Android**
- System authorization is required
  - App Settings -> Karing -> Permissions -> Allow `Access to app list`

## Setup Steps
### Whitelist Mode
- This feature makes the selected APP traffic to <font color="red">go through VPN</font>, and other applications to bypass VPN and connect directly.
- Settings -> TUN -> `Per-App Proxy` -> Enable `Enable`, Enable `Whitelist Mode`
  - **Select** the apps you want to use the proxy.
  - For example, YouTube, Telegram, etc.

### Blacklist Mode
- This feature makes the selected APP to  <font color="red">bypass VPN and connect directly</font>, while other application traffic goes through VPN.
- Settings -> TUN -> `Per-App Proxy` -> Enable `Enable`, Disable `Whitelist Mode`
  - **Select** the apps you want to connect directly.
  - For example, Notion, Outlook, etc.
