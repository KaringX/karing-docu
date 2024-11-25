---
title: Proxy by Application
sidebar_position: 4
---
# Proxy by Application
- With this function, you can set certain App traffic to go through VPN or not
- This function includes
- a. Whitelist mode - certain Apps only go through proxy traffic
- b. Blacklist mode - exclude certain Apps, and all other Apps go through proxy traffic
- **Example**:
- When the region is Chinese Mainland (CN), check `Application Inbound Proxy` (whitelist mode) for youtube, twitter, facebook, telegram, etc.
- At this time, all the above Apps will go through proxy traffic

### Advantages of Split Application
- Effectively reduce App power consumption
- Avoid complex diversion settings that cause some Apps to be unable to connect to the Internet or cause slow network speed
- It is strongly recommended to use this function
- For Apps that use VPN traffic, you can still use the diversion function for outbound diversion

## Prerequisites
- Currently only supports **Android**
- System must be authorized
- App Settings -> Karing -> Permissions -> Allow `Get Application List`

## Setup Steps
### Whitelist Mode
- This function allows the selected APP traffic to <font color="red">go through VPN</font>, and other applications bypass VPN and connect directly.
- Settings -> TUN -> `Proxy by Application` -> Turn on `Enable`, turn on `Whitelist Mode`
- **Check** the applications you want to use the proxy.
- For example, youtube, telegram, etc.

### Blacklist Mode
- This function allows the selected APP to <font color="red">go through VPN and connect directly</font>, and other applications traffic to go through VPN.
- Settings -> TUN -> `Proxy by Application` -> Turn on `Enable`, turn off `Whitelist Mode`
- **Check** the applications you want to connect directly.
- For example, notion, outlook, etc.