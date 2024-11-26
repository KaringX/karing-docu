---
title: Port Sharing
sidebar_position: 1
---

# Use karing to provide proxy services for other devices in the LAN
- Provide socks/http proxy for other devices in the LAN (same network segment)

## Materials
- System: windows11
- karing: 1.0.24.283

## Allow karing to pass through Windows Defender Firewall
- Enter windows `Control Panel` -> `Windows Defender Firewall` -> `Allow apps through Windows Firewall`
- Check both the `Private` and `Public` options for the karing application.
- Of course, if you can clearly distinguish whether your network is `Private` and `Public`, then only check the necessary ones.

- As shown below:
- ![defender](./img/lan-0.png)

### Tips
- How to view the current network type:
- `Control Panel` –> `Network and Internet` –> `View network status and tasks`

- Reference case: [Windows Firewall Settings](../../blog/case/wsl2#windows Firewall Settings)

## karing settings
- `Settings` -> Turn off `Newbie Mode`
- Settings -> Network Sharing -> Turn on `Allow other hosts to access`
- Check `Network Interface` to get the current IP address, for example: **192.168.1.x**
- `Settings` -> `Port` -> Get the current open port, the default is as follows:
- Based on rules **3067**
- Full direct connection **3065** (easy to debug)
- Full proxy **3066**

### Other device proxy settings
- kairng uses a hybrid proxy mode, That is, socks/http/https protocols are all supported
- As obtained in the previous step:
- Rule-based link: `socks5://192.168.1.110:3067`
- Full proxy link: `socks5://192.168.1.110:3066`
- **Native application** link: `socks5://127.0.0.1:3067`

- Proxy configuration screenshot:
- ![SwitchyOmega](./img/lan-1.png)