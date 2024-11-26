---
title: DNS
sidebar_position: 5
---

![](./img/dns.png#center)

### Enable DNS Diversion rules: According to the diversion settings of [diversion rules](../app-manual/diversion-rule), the relevant traffic uses the corresponding DNS server for domain name resolution
- [Proxy Server]: Use proxy server DNS to resolve domain names (merged into [Direct traffic] in novice mode)
- [Direct Traffic]: Use direct traffic DNS to resolve domain names
- [Proxy Traffic]: Use proxy traffic DNS to resolve domain names (merged into [final] in novice mode)
- [final]: Use final DNS to resolve domain names

### Enable ECS

### Enable FakeIP

### [Proxy Traffic] Resolve DNS through proxy server: Proxy traffic resolves domain names through proxy server instead of directly connecting to DNS server for resolution
- Depends on the proxy server's support for DNS. Some proxy servers may not support or support incompletely
- The DNS resolution of related traffic goes through the proxy channel completely, which is safer, but the performance may be worse
  
### [final] DNS resolution through proxy server: final traffic resolves the domain name through the proxy server instead of directly connecting to the DNS server for resolution-
- Depends on the degree of DNS support of the proxy server. Some proxy servers may not support or support incompletely
- The DNS resolution of related traffic goes through the proxy channel completely, which is safer, but the performance may be worse
  
### Static IP: Custom domain name resolution, similar to the host file configuration under Windows

### Resolve inbound domain names: For traffic from the proxy, first perform domain name resolution, and then divert according to domain name and IP, which is applicable to the case where domain name diversion rules are not configured in the diversion rules

### Test domain name: The domain name to be resolved used in the DNS delay test

### [TTL](../app-manual/glossary.md): DNS query result survival time/cache time
- The larger the value, the longer the cache time and the higher the performance; the smaller the value, the faster the update

### [Server](../app-manual/dns-server.md)