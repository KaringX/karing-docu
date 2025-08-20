---
sidebar_position: 6
slug: /clash
title: Clash Compatibility List
---

# Karing Compatible Clash Function Comparison Table

- This document aims to list the similarities and differences between Karing and Clash (Meta/mihome) functions.
- Users can choose the required client software according to their own needs.
- The document lags behind the actual development process, please forgive me.
- Clash document address: [Empty Terminal Docs](https://wiki.metacubex.one/config/)
- The following documents are compatible with the ones marked with ✔

## Outbound Proxy
- [x] TLS Configuration 🙆‍♂️
- [x] Transport Layer Configuration
- [x] dialer-proxy
- Settings -> Front Proxy
- [x] sing-mux
- Settings -> Mux
- [x] DIRECT
- [x] DNS
- [x] HTTP
- [x] SOCKS
- [x] Shadowsocks
- [x] ShadowsocksR
- [ ] Snell
- To be supported
- [x] VMess
- [x] VLESS
- [x] Trojan
- [x] Hysteria
- [x] Hysteria2
- Port hopping Supported >=[1.0.29.390](https://github.com/KaringX/karing/releases/tag/v1.0.29.390)
- [x] TUIC
- [x] WireGuard
- [x] SSH
- [x] AnyTLS
- [x] Mieru

## Inbound
- [x] Proxy port
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
- Configurable in the APP, not supported by subscription link
- Configuration options Settings -> DNS
- PS: There is a server speed test in the upper right corner of the DNS list, it is recommended to choose the fastest ones.
- [x] DNS type All supported 🙆‍♂️
- [x] hosts DNS-static IP
- [x] Domain name sniffing
- Settings -> Protocol detection

## Proxy set
- [x] Proxy set content 🙆‍♂️

## Policy group
- [x] Manual selection
- [x] Automatic selection
- [ ] Automatic fallback 🙅
- [ ] Load balancing 🙅
- [ ] Chain proxy 🙅
- [x] Built-in policy
- DIRECT
- REJECT
- REJECT-DROP
- [x] Routing rules
- IP-CIDR
- IP-CIDR6
- DOMAIN
- DOMAIN-SUFFIX
- DOMAIN-KEYWORD
- PROCESS-NAME

## Rule set
- [x] Rule set content
- Reference https://github.com/karingX/karing-ruleset
- [ ] Sub-rules 🙅

## Others
- [ ] Traffic tunnel
- [x] NTP 🙆‍♂️
- Settings -> NTP