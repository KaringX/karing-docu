---
sidebar_position: 10
slug: /provider-faq
title: Provider FAQ
---

# Provider FAQ

## How does Karing use private DNS?

### Option 1: Set DNS manually

:::tip User-manual DNS setup
- Settings -> DNS -> Servers -> "DNS servers"/"Proxy servers" -> top-right "..." -> "+ Add" -> keep the added server checked and uncheck the others
- Note 1: Example ISP `Google TLS Server`, URL `tls://8.8.8.8`
- Note 2: In DNS -> "Proxy servers", if the added DNS server is only used to resolve proxy node hostnames and the other DNS servers have no other purpose or may cause DNS pollution, be sure to uncheck the other DNS servers
:::

### Option 2: Use the `outbound-dns` scheme parameter

:::tip DNS is configured when importing
- Example: set proxy DNS servers
  - `karing://install-config?url=https%3A%2F%2Fxxxxx.com%2Fclash%2Fconfig&outbound-dns=udp%3A%2F%2F8.8.8.8%2Cudp%3A%2F%2F5.5.5.5`
  - `clash://install-config?url=https%3A%2F%2Fxxxxx.com%2Fclash%2Fconfig&outbound-dns=udp%3A%2F%2F8.8.8.8%2Cudp%3A%2F%2F5.5.5.5`
- You can also paste the full scheme link into the configuration box directly, as shown below
  - ![install-config-outbound-dns](pathname:///docs/tutorial/img/install-config-outbound-dns.jpg)
- ⚠️ Karing version must be >= `v1.2.22.2502`
:::
