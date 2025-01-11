---
sidebar_position: 6
slug: /clash
title: Clash 兼容列表
---


# Karing兼容Clash功能对照表

- 本文档旨在列出 Karing 兼容 Clash(Meta/mihome) 功能的异同.
	- 用户可根据自身需求, 选择需要的客户端软件.
	- 文档相对实际开发进程有滞后, 敬请见谅.
- Clash文档地址: [虚空终端 Docs](https://wiki.metacubex.one/config/)
- 以下文档中 ✔打勾的即已兼容

## 出站代理
- [x] TLS配置 🙆‍♂️
- [x] 传输层配置
- [x] dialer-proxy
	- 设置 -> 前置代理
- [x] sing-mux
	- 设置 -> Mux
- [x] DIRECT
- [x] DNS
- [x] HTTP
- [x] SOCKS
- [x] Shadowsocks
- [x] ShadowsocksR
- [ ] Snell
	- 待支持
- [x] VMess
- [x] VLESS
- [x] Trojan
- [x] Hysteria
- [x] Hysteria2
	- 端口跳跃 已支持 >=[1.0.29.390](https://github.com/KaringX/karing/releases/tag/v1.0.29.390)
- [x] TUIC
- [x] WireGuard
- [x] SSH



## 入站
- [x] 代理端口
- [x] Tun
- listeners
	- [x] http
	- [x] socks
	- [x] mixed
	- [ ] redirect
	- [ ] tproxy
	- [x] tun
	- [ ] ShadowSocks
	- [ ] VMess
	- [ ] TUIC v4
	- [ ] TUIC v5
	- [ ] Hysteria2
	- [ ] tunnel

## DNS
- APP内可配置, 不支持通过订阅链接配置
	- 配置选项 设置 -> DNS
	- PS: DNS 列表右上角有服务器测速, 建议选择最快的那几个。
- [x] DNS类型 全部支持 🙆‍♂️
- [x] hosts  DNS-静态IP
- [x] 域名嗅探
	- 设置 -> 协议探测

## 代理集合
- [x] 代理集合内容 🙆‍♂️

## 策略组
- [x] 手动选择
- [x] 自动选择
- [ ] 自动回退 🙅
- [ ] 负载均衡 🙅
- [ ] 链式代理 🙅
- [x] 内置策略
	- DIRECT
	- REJECT
	- REJECT-DROP
- [x] 路由规则
	- IP-CIDR
	- IP-CIDR6
	- DOMAIN
	- DOMAIN-SUFFIX
	- DOMAIN-KEYWORD
	- PROCESS-NAME


## 规则集合
- [x] 规则集合内容
	- 参考 https://github.com/karingX/karing-ruleset
- [ ] 子规则 🙅

## 其他
- [ ] 流量隧道
- [x] NTP 🙆‍♂️
	- 设置 -> NTP



