---
title: Custom diversion group editing
sidebar_position: 8
---
![](./img/diversion-rule-edit.png#center)

### Edit custom diversion group: OR/AND logic operations are supported between each item
- OR: The rule is hit when one item is met
- AND: The rule is hit when all items are met

### Item type
- Domain Suffix: such as .google.com or google.com
- Domain: Full domain name, such as www.google.com
- Domain Keyword: such as google
- Domain Regex: Regular expression that matches the domain name
- IP Cidr: IP segment, the format is 178.0.55.32/32 (ip/mask)
- Port: Target port
- Protocol: The protocol used for the request, click the arrow on the right to select
- Rule Set: Remote rule set, the URL needs to include the file name and file extension (.srs or .json); invalid files will not cause VPN startup connection failure, you can go to [Diversion Rule Detection] to check whether the download is successful
- Rule Set (build-in): Built-in rule set, click the arrow on the right to select
- Process name: (PC only), the name and uppercase must match exactly
- Process path: (PC only), the full path and path uppercase must match exactly
- Application package id: (Android only), the id and uppercase must match exactly