---
sidebar_position: 9
slug: /faq
title: FAQ
---

# 常见问题

## Karing App

### Karing 免费吗？多少钱
- 完全免费
-  苹果用户:只要是非中国大陆地区的苹果账号都能下载
- 苹果用户:如果您不方便直接注册，推荐 [苹果ID专卖小店](https://dot.karing.app/pi.html?r_c=xda)
- Windows版本请到[Github](https://github.com/KaringX/karing/releases/latest)下载(可能需要开代理才能下载)

### 支持哪些平台
- 已支持:IOS, MacOS,TvOS, Windows, Android
- 待开发:Linux

### 支持哪些订阅配置类型
- Clash,V2ray(支持批量),Stash,Karing,Sing-box,Shadowsocks,Sub,Github

### 支持哪些协议
- Shadowsocks, ShadowsocksR, VMess, Vless, Trojan, Tuic, Socks, Http, Hysteria, Hysteria2, Wireguard等协议


### 苹果用户下载哪个版本
 - 如果只想稳定使用,建议下载AppStore版本
 - 如果想尝鲜新功能,可以下载TestFlight Beta版本

```mdx-code-block
import DocCard from '@theme/DocCard';

<DocCard
  item={{ type: 'link', label: '⬇️ Download Karing', href: '/download' }}
/>
```

### 如何使用
- 刚接触的用户，想快速上车，推荐参考本站 快速入门教程

```mdx-code-block
<DocCard
  item={{ type: 'link', label: '📚 Quickstart', href: '/quickstart' }}
/>
```

### App如何更新
 - 苹果用户:使用系统自带更新
 - Windows/Android用户:Karing自动更新后会有提示,您只需要按照提示下载或者重启App安装即可

### 安全吗
- App上架AppStore前会经过苹果审核，且苹果版本只能在 AppStore 或 TestFlight 才能下载(请勿从非官方渠道下载App)
- 非Apple平台我们也同样遵循和苹果平台一样的安全和隐私规则,确保您的信息不会泄露
- 非Apple平台用户建议从[Github](https://github.com/KaringX/karing/releases/latest)下载
- Karing 官方下载源只有AppStore及https://github.com/KaringX/karing/releases,请勿从其他渠道下载安装
- Karing 没有上架Google Play, 请勿从Google Play下载安装

### 没有配置怎么办
 - 请参考 [节点分享](/blog/isp/node-share) 或者 [机场推荐](/blog/isp/cn)

### 代理和全局的区别是什么?
 - 参考 - [4. 规则模式:规则/全局](./app-manual/home.md#mode)

### 系统代理和TUN的区别是什么
 - 说明:系统代理和TUN都是代理软件的入站方式,和 规则/全局 没有关系
 - 说明:系统代理:仅针对PC设备上的系统代理
 - 系统代理指的是你系统里的代理设置,需要其他软件适配,未适配的软件不会使用系统代理
 - TUN:虚拟网卡,代理软件在通过驱动建立了一张虚拟网卡,系统内基本所有软件的请求都会自动被重定向虚拟网卡(不同的操作系统洛稍有不同,比如windows想的uwp应用),无需其他软件适配

## 运行时问题list
### <font color="red">注意:出现问题,请先升级到最新版</font>

### 添加配置/更新配置 报错
 - Connection reset by peer 或者 Connection refused:大部分原因是因为订阅请求被拦截,请开启vpn/代理后重试
 - http statusCode:404 : 订阅不存在,换一个订阅链接或者更改 UserAgent 后重试(机场ISP可能会根据UserAgent下发不同类型的订阅配置)
 - http statusCode:403 : 请求被ISP拒绝,请换其他订阅链接
 - Failed host lookup  : 订阅链接域名解析失败, 请开启vpn/代理后重试
 - http response is empty : ISP响应为空,换一个订阅链接或者更改 UserAgent
 - No server available: 如果使用其他App可用添加,那么尝试更改 UserAgent 后重试

### 如果查看我当前的网络是否支持IPv6
- Karing断开连接
- 点击主屏上的测速(需要是app自带的测速,如果设置了自定义的测速,使用方法咨询google)
- 找到页面里显示的Connected via XXX, 如果XXX为IPv6,则说明你当前网络支持IPv6


### 一些App无法连接或连接报错
- 1. 先升级到最新版本
- 2. 首先需要确认使用的代理节点是可以联通的,并且[分流]里的国家和地区设置正确
- 3. 打开[主屏]-[网络检测],检查对应域名是否可以正常访问,根据错误提示信息修改相关设置
- 4. 如果上一步不知道如何设置域名,可以到[主屏]-[连接状态] 里查看是否有相关域名请求(需要先切换有问题的app并刷新一下app)
- 5. 如果第4步没有相关域名请求,基本就是DNS解析出问题,到[主屏]-[DNS]-[服务器]-任选一个服务器设置-检测服务器延迟-根据延迟设置相关DNS服务器
- 6. 如果第4步有相关域名请求,再检查分流是否正确,如果是分流错误,修改相关分流规则

### Android 小米手机无法安装,提示高风险应用
- 此问题和Karing版本无关,目前所有版本的Karing在小米手机上均会出现此问题,原因是Karing被小米后台加入了黑名单
- 解决方案:退出安装程序,断开所有网络后(切换到飞行模式),重试安装

### Android 开启连接频繁闪退
- 将 设置-TUN-网络栈 改成其他值(比如gvisor)再重试连接

### Android 报错:panic: invalid page type
- 断开连接-设置-清理缓存 后再重试连接

### Android 开启连接报错
- **错误信息:** `android.content.ActivityNotFoundException: Unable to find explicit activity class {com.android.vpndialogs/com.android.vpndialogs.ConfirmDialog}`
  - 原因:该Android系统移除/精简了VPN模块,导致VPN无法正常连接
  - 解决方案:换其他Android设备
- **错误信息:** process is bad
  - 解决方案:改为从控制中心启动连接
- **错误信息:** configure tun interface: com.bly.chaos.plugin.stub.VpnServiceStub does not require android.permission.BIND_VPN_SERVICE
  - 解决方案:请勿对VPN应用开启分身

### Android TV 遥控器无法切换焦点(主屏)
- 可使用遥控器上的菜单按钮快速切换,再结合上下左右按钮等切换

### ios/macos TUN模式关闭后,设备无法联网
- ios/macos 由于系统限制,软件架构上与android/windows等不同,在ios/macos下,即使未开启TUN模式,也一样会启动vpn 网络扩展进程,但是由于vpn 网络扩展进程未开启TUN模式,不会从系统读取/转发数据,因此无法联网
- 解决方案:1. 开启TUN模式 2.在其他app里手动设置设置代理为karing代理地址(代理地址可参考-设置-端口),此种设置只允许设置了代理的app经由karing连接到网络 3. 对于macos,可打开系统代理,以便支持系统代理的应用访问网络

### 打开Google.com,会跳转到Google.cn等
- 浏览器里打开 https://google.com/ncr ，也可以手动清除浏览器缓存

### Windows系统
- **如何以管理员身份开机启动**
  - 升级到>=1.0.38.506版本
  - 以管理员身份启动Karing
  - 开启[开机启动],如果之前已经开启,则需要关闭后,重新开启

### Windows系统,Karing开启TUN模式后, Karing内存及CPU占用超高
- TUN模式冲突所致,比如clash系列等,请卸载其他vpn软件后重新启动Karing
- 路由回环导致,比如开启了windows数据转发(将windows变成一台路由器),请禁用此功能,命令参考 Powershell:
```
  Set-NetIPInterface -ifAlias <你的网卡名称> -Forwarding Disabled
```

### Windows系统,开启连接报错
- **错误信息** (TUN)开启连接报错: A required privilege is not held by the client
  - 系统权限设置错误,解决方案参考 https://answers.microsoft.com/en-us/insider/forum/all/error-0x80070522-build-10074-a-required-privilege/516f87a8-80a6-4acb-a278-8866b2080460
- **错误信息：** configure tun interface: Cannot create a file when that file already exists
  - 卸载/删除其他有TUN的代理软件后重启电脑
- **错误信息：** configure tun interface: The system cannot find the file specified
  - 卸载/删除其他有TUN的代理软件后重启电脑
- **错误信息：** launch process karingService.exe failed: exception ProcessException: Access is denied.
  - karingService.exe 的启动被系统或其他软件限制,尝试将Karing重新安装到其他目录
- **错误信息：** `start clash api: external controller listen error: listen tcp 127.0.0.1:3057: bind: An attempt was made to access a socket in a way forbidden by its access permissions`
  - 端口 3057(也可能是其他端口,具体看设置) 被其他应用占用, 到 [设置]-[端口]- 将值为3057的端口改成其他未被使用的端口后重试连接
- **错误信息：** `check port failed:SocketException: Failed to create server socket (OS Error: The shared flag to bind() needs to be true if binding multiple times on the same (address, port) combination.), address = 127.0.0.1, port = 3067`
  - Karing用到的3067端口被占用,如果是Windows系统,请到任务管理器里检查是否有karingService.exe进程残留,如果有,强杀该进程后重试连接
  - 如果是非Windows系统,可以尝试重启设备,或者到Karing-设置-端口,找到上面错误信息的端口,改成其他端口(建议端口号>4000),重试连接

### 移动网络下节点正常使用,但是WiFi下延迟测试失败(重新连接也一样)
- 移动网络和WiFi是不同的网络,WiFi下可能受WiFi路由器及运营商影响
- 可用尝试重启路由器,如果依然不行,大概率是被运营商影响,可用尝试更改DNS后再试

### 耗电量比较高
- 使用自动选择或者自定义代理组的情况下(设置路径:设置-自动选择):
  - 延长[延迟检测时间间隔]
  - 降低[服务器数量上限]
  - 开启[过滤无效服务器]
- 使用高稳定性的代理服务器节点
- 合理的分流规则设置:
  - 入站分流:
    -  android建议合理使用分应用功能,降低进入代理软件的流量
  - 出站分流:
    - android:使用基于包Id的分流
    - macos:使用基于进程路径/进程名称的分流
    - windows:使用基于进程路径/进程名称的分流

## Karing兼容Clash, 在Karing功能上有何异同?
- karing兼容clash订阅链接, 以及大部分功能, 这里有个详细的对照列表
  - [karing与clash功能对照表](/clash)

## 更多问题/issue提交
- 您可以通过 设置-反馈 并留下您的邮箱,向我们反馈问题
- 或者加入 [电报群/Telegram](https://t.me/KaringApp) 向管理员反馈问题
- 或者提交问题到[Github](https://github.com/KaringX/karing/issues)
