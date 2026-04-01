---
sidebar_position: 6
slug: /clash
title: Clash Compatibility List
---

# Karing Compatible Clash Function Comparison Table

- This document lists similarities and differences between Karing and Clash (Meta/mihomo) features.
- Users can choose the required client software according to their needs.
- This document may lag behind the latest development progress.
- Clash docs: [Mihomo Wiki](https://wiki.metacubex.one/config/)

## Outbound Proxy

- [x] TLS Configuration
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
- [ ] Snell (not yet)
- [x] VMess
- [x] VLESS
- [x] Trojan
- [x] Hysteria
- [x] Hysteria2
- Port hopping supported >= [1.0.29.390](https://github.com/KaringX/karing/releases/tag/v1.0.29.390)
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

- Configurable in the app, not supported via subscription link
- Settings -> DNS
- There is a server speed test in the DNS list (top-right)
- [x] DNS types (all common types)
- [x] hosts / static DNS IP
- [x] Domain sniffing
- Settings -> Protocol detection

## Proxy Set

- [x] Proxy set content

## Policy Group

- [x] Manual selection
- [x] Automatic selection
- [ ] Automatic fallback (not yet)
- [ ] Load balancing (not yet)
- [ ] Chain proxy (not yet)
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

## Rule Set

- [x] Rule set content
- Reference: https://github.com/karingX/karing-ruleset
- [ ] Sub-rules (not yet)

## Others

- [ ] Traffic tunnel
- [x] NTP
- Settings -> NTP
