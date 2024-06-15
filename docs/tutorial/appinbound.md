---
title: Pre-App Proxy
sidebar_position: 7
---
# 分应用代理

## 前置条件
- 目前仅支持 **Android**
- 系统必须授权
  - 应用设置 - Karing - 权限 - 允许`获取应用列表`


- 用于设置哪些App可以使用VPN,如果没有选中任何app,则系统所有app的流量都会通过VPN, 如果选中了:白名单模式只有选中的app的流量才会走VPN,黑名单模式只有没有选中的app的流量才会走VPN
- 例子: 比如你现在所在地区为中国大陆(CN), 当你使用youtube, twitter, facebook, telegram等需要VPN的app时候,你只需要将这些app在应用入站代理中勾选(白名单模式), 一般还要将系统浏览器勾选上,这样只有你勾选的这些app会使用VPN代理,其他未勾选app的不受VPN影响
- 好处: 降低VPN app耗电,以及避免分流设置问题导致app无法上网或者网速慢的问题
- 强烈建议使用此功能

