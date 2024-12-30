---
sidebar_position: 9
slug: /faq
title: FAQ
---

# FAQ

## Karing App

### Is Karing free? How much is it?
- Completely free
- Apple users: All Apple accounts outside of mainland China can download it
- Apple users: If you are not convenient to register directly, we recommend [苹果ID专卖小店](https://dot.karing.app/pi.html?r_c=xda)
- For Windows version, please go to [Github](https://github.com/KaringX/karing/releases/latest) to download (you may need to open a proxy to download)

### Which platforms are supported
- Already supported: IOS, MacOS, TvOS, Windows, Android
- To be developed: Linux

### Which subscription configuration types are supported
- Clash, V2ray (supports batch), Stash, Karing, Sing-box, Shadowsocks, Sub, Github

### Which protocols are supported
- Shadowsocks, ShadowsocksR, VMess, Vless, Trojan, Tuic, Socks, Http, Hysteria, Hysteria2, Wireguard and other protocols

### Which version should Apple users download?
- If you only want stable use, it is recommended to download the AppStore version
- If you want to try out new features, you can download the TestFlight Beta version

```mdx-code-block
import DocCard from '@theme/DocCard';

<DocCard
item={{ type: 'link', label: '⬇️ Download Karing', href: '/download' }}
/>
```

### How to use
- For new users who want to get started quickly, it is recommended to refer to the quick start tutorial on this site

```mdx-code-block
<DocCard
item={{ type: 'link', label: '📚 Quickstart', href: '/quickstart' }}
/>
```

### How to update the App
- Apple users: Use the system's own update
- Windows/Android users: Karing will prompt after automatic update, you just need to download or restart the App installation according to the prompt

### Is it safe
- Apps will be reviewed by Apple before being listed on the AppStore, and the Apple version can only be downloaded from the AppStore or TestFlight (please do not download apps from unofficial channels)
- We also follow the same security and privacy rules as Apple platforms for non-Apple platforms to ensure that your information will not be leaked
- Non-Apple platform users are recommended to download from [Github](https://github.com/KaringX/karing/releases/latest)
- Karing's official download sources are only AppStore and https://github.com/KaringX/karing/releases, please do not download and install from other channels
- Karing is not listed on Google Play, please do not download and install from Google Play

### What to do if there is no configuration
- Please refer to [Node Sharing](/blog/isp/node-share) or [Airport Recommendation](/blog/isp/cn)

### What is the difference between proxy and global?
- Reference - [4. Rule Mode: Rule/Global](./app-manual/home.md#mode)

### What is the difference between system proxy and TUN
- Note: System proxy and TUN are both ways for proxy software to enter the station, and have nothing to do with rule/global
- Note: System proxy: only for system proxy on PC devices
- System proxy refers to the proxy settings in your system, which requires other software to adapt. Unadapted software will not use system proxy
- TUN: virtual network card, the proxy software creates a virtual network card through the driver, and basically all software requests in the system will be automatically redirected to the virtual network card (different operating systems are slightly different, such as uwp applications in windows), without the need for other software adaptation

## Runtime problem list
### <font color="red">Note: If there is a problem, please upgrade to the latest version first</font>

### Add configuration/update configuration error
- Connection reset by peer or Connection refused: Most of the reasons are because the subscription request is blocked, please try again after opening VPN/proxy
- http statusCode:404: Subscription does not exist, try again after changing a subscription link or changing UserAgent (airport ISP may send different types of subscription configurations based on UserAgent)
- http statusCode:403: Request rejected by ISP, please try another subscription link
- Failed host lookup: Subscription link domain name resolution failed, please try again after opening VPN/proxy
- http response is empty: ISP response is empty, try another subscription link or change UserAgent
- No server available: If you can add it using other apps, try changing the UserAgent and try again

### How to check whether my current network supports IPv6
- Karing disconnects
- Click the speed test on the main screen(it needs to be the speed test that comes with the app. If you set a custom speed test, consult Google for usage)
- Find the page showing Connected via XXX, if XXX is IPv6, it means that your current network supports IPv6

### Some apps cannot connect or connection errors
- 1. Upgrade to the latest version first
- 2. First, you need to confirm that the proxy node used can be connected, and the country and region settings in [Diversion] are correct
- 3. Open [Home Screen]-[Network Detection] to check whether the corresponding domain name can be accessed normally, and modify the relevant settings according to the error message
- 4. If you don’t know how to set the domain name in the previous step, you can go to [Home Screen]-[Connection Status] to check whether there is a related domain name request (you need to switch the problematic app first and refresh the app)
- 5. If there is no related domain name request in step 4, it is basically a problem with DNS resolution. Go to [Home Screen]-[DNS]-[Server]-select a server setting-detect server delay-set the relevant DNS server according to the delay
- 6. If there is a related domain name request in step 4, check whether the diversion is correct. If it is a diversion error, modify the relevant diversion rules

### Android Xiaomi phone cannot be installed, prompting high-risk application
- This problem has nothing to do with the Karing version. Currently, all versions of Karing will have this problem on Xiaomi phones because Karing has been blacklisted by Xiaomi backend
- Solution: Exit the installer, disconnect all networks (switch to airplane mode), and retry the installation

### Android crashes frequently when opening the connection
- Change Settings-TUN-Network Stack to another value (such as gvisor) and try connecting again

### Android TV remote control cannot switch focus (home screen)
- You can use the menu button on the remote control to quickly switch, and then use the up, down, left, and right buttons to switch

### <a class="anchor" id="1023853913"></a>Android connection error: process is bad
- Start the connection from the control center instead

### Open Google.com, it will jump to Google.cn, etc.
- Open https://google.com/ncr in the browser, or manually clear the browser cache

### Windows system, after Karing turns on TUN mode, Karing memory and CPU usage are very high
- Caused by TUN mode conflict, such as clash series, etc., please uninstall other VPN software and restart Karing
- Caused by routing loop, such as turning on windows data forwarding (turning windows into a router), please disable this function, command reference Powershell:
```
Set-NetIPInterface -ifAlias ​​<your network card name> -Forwarding Disabled
```

### Windows system, error when opening the connection (TUN): A required privilege is not held by the client
- System permission setting error, solution reference https://answers.microsoft.com/en-us/insider/forum/all/error-0x80070522-build-10074-a-required-privilege/516f87a8-80a6-4acb-a278-8866b2080460

### <a class="anchor" id="1054821454"></a>### Windows system, error when opening the connection: configure tun interface: Cannot create a file when that file already exists
- Uninstall/delete other proxy software with TUN and restart the computer

### ### Windows系统,开启连接报错: configure tun interface: The system cannot find the file specified
- Uninstall/delete other proxy software with TUN and restart the computer

### <a class="anchor" id="783742866"></a>### Windows system, error when opening the connection: launch process karingService.exe failed: exception ProcessException: Access is denied.
- The launch of karingService.exe is restricted by the system or other software, try to reinstall Karing to another directory

### <a class="anchor" id="643911015"></a>### Error when opening the connection: start clash api: external controller listen error: listen tcp 127.0.0.1:3057: bind: An attempt was made to access a socket in a way forbidden by its access permissions
- Port 3057 (or other ports, depending on the settings) is occupied by other applications. Go to [Settings]-[Port]- Change the port value of 3057 to another unused port and try the connection again

### Windows system, error when opening the connectio: check port failed: SocketException: Failed to create server socket (OS Error: The shared flag to bind() needs to be `true` if binding multiple times on the same (address, port) combination.), address = 127.0.0.1, port = 3067
- Port 3067 used by Karing is occupied. If it is a Windows system, please check whether there is a karingService.exe process remaining in the task manager. If so, kill the process and try to connect again
- If it is a non-Windows system, you can try to restart the device, or go to Karing-Settings-Port, find the port of the error message above, change it to another port (recommended port number>4000), and try to connect again

### The node works normally under mobile network, but the delay test fails under WiFi (the same is true when reconnecting)
- Mobile network and WiFi are different networks. WiFi may be affected by WiFi router and operator(isp)
- You can try to restart the router. If it still doesn't work, it is probably affected by the operator(isp). You can try to change the DNS and try again

### High power consumption
- When using autom select or custom proxy group (setting path: Settings-Auto select):
  - Extend [Latency Checks interval]
  - Reduce [Maximux number of servers]
  - Enable [Filter invalid servers]
- Use highly stable proxy server nodes
- Reasonable diversion rule settings:
  - Inbound diversion:
    - Android recommends reasonable use of the application diversion function to reduce the traffic entering the proxy software
  - Outbound diversion:
    - Android: Use diversion based on package ID
    - Macos: Use diversion based on process path/process name
    - Windows: Use diversion based on process path/process name

## Karing is compatible with Clash. What are the differences and similarities in Karing functions?
- Karing is compatible with Clash subscription links, as well as most functions. Here is a detailed comparison list
- [karing and clash function comparison table](/clash)

## More questions/issue submission
- You can report issues to us through Settings-Feedback and leave your email address
- Or join the [Telegram group/Telegram](https://t.me/KaringApp) to report issues to the administrator
- Or submit issues to [Github](https://github.com/KaringX/karing/issues)