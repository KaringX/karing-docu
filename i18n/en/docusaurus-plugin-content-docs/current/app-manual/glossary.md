---
title: Glossary
sidebar_position: 20
---

### Current selection
- Automatic selection: Automatically select the node with the lowest latency from the candidate list
- Direct connection: Direct connection without proxy
- Custom proxy group/Custom Auto Select: Custom [Automatic selection]
- Proxy node: A specific proxy server

### DNS (Domain Name Service)
- Diversion: Use the corresponding DNS server to resolve the domain name according to the diversion rules
- ECS: EDNS Client Subnet
- FakeIP: A technology used to improve/improve DNS query performance/stability in TUN mode. The application's DNS query via TUN is intercepted by VPN and replaced with a fake IP. After the subsequent application initiates an HTTP request, the request is forwarded to the proxy server. The proxy server obtains the request response data after DNS domain name resolution and returns the response data to the requester; for traffic that does not need to go through the proxy, the VPN server directly requests it
- TTL: Lifetime

### Others
- TUN: Virtual network card mode, a type of transparent proxy, does not require application adaptation (different platforms handle slightly differently)
- System proxy: requires application active adaptation to use (will bypass TUN)
- Inbound: connection to VPN service
- Outbound: connection from VPN service to the outside
- Disconnected: The connection status on Karing main screen is connected, and other apps have network problems, such as being constantly updated
- Disconnected: The connection status on Karing main screen is disconnected, which may be caused by the VPN background process being killed or abnormal process exit