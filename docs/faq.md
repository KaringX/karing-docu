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


## 运行时问题list
### <font color="red">注意:出现问题,请先升级到最新版</font>
### 如果查看我当前的网络是否支持IPv6
- Karing断开连接
- 点击主屏上的测速
- 找到页面里显示的Connected via XXX, 如果XXX为IPv6,则说明你当前网络支持IPv6


### 一些App无法连接或连接报错
- 1. 先升级到最新版本
- 2. 首先需要确认使用的代理节点是可以联通的,并且[分流]里的国家和地区设置正确
- 3. 打开[主屏]-[网络检测],检查对应域名是否可以正常访问,根据错误提示信息修改相关设置
- 4. 如果上一步不知道如何设置域名,可以到[主屏]-[连接状态] 里查看是否有相关域名请求(需要先切换有问题的app并刷新一下app)
- 5. 如果第4步没有相关域名请求,基本就是DNS解析出问题,到[主屏]-[DNS]-[服务器]-任选一个服务器设置-检测服务器延迟-根据延迟设置相关DNS服务器
- 6. 如果第4步有相关域名请求,再检查分流是否正确,如果是分流错误,修改相关分流规则

### 点击连接时候报 create service: parse outbound[x][xxxxx] 错误
- 说明:xxxxx为服务器节点名称
- 该问题一般都是节点配置错误,长按后禁用,重新连接即可

### 网页打不开/应用网络加载失败
- 打开网络检测,点击检测,如果有错误,修改错误对应的配置后重试
- 如果依然不行,将发生错误的域名输入到网络检测重新检测,按照提示修改

### Android 下点击连接就闪退,日志显示 missing default interface
- 重启设备

### Android 开启连接频繁闪退
- 将 设置-TUN-网络栈 改成其他值再重试连接

### 打开Google.com,会跳转到Google.cn等
- 浏览器里打开 https://google.com/ncr ，也可以手动清除浏览器缓存

### Windows系统,Karing开启TUN模式后, Karing内存及CPU占用超高
- TUN模式冲突所致,比如clash系列等,请卸载其他vpn软件后重新启动Karing
- 路由回环导致,比如开启了windows数据转发(将windows变成一台路由器),请禁用此功能,命令参考 Powershell:
```
  Set-NetIPInterface -ifAlias <你的网卡名称> -Forwarding Disabled
```

## Karing兼容Clash, 在Karing功能上有何异同?
- karing兼容clash订阅链接, 以及大部分功能, 这里有个详细的对照列表
  - [karing与clash功能对照表](/clash)

## 更多问题/issue提交
- 您可以通过 设置-反馈 并留下您的邮箱,向我们反馈问题
- 或者加入 [电报群/Telegram](https://t.me/KaringApp) 向管理员反馈问题
- 或者提交问题到[Github](https://github.com/KaringX/karing/issues)
