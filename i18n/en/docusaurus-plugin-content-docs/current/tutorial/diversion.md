---
sidebar_position: 2
---
# Policy and diversion

## Overview
- There are three types of diversion policies:
- 1 Airport built-in policies
- There is a switch `Enable ISP diversion rules` when adding configuration
- 2 Built-in geosite, geoip, ACL
- By default, the rules (geosite, geoip) will be enabled according to Settings -> Diversion -> `Country and Region`
- For example: in China, `geosite:cn` and `geoip:cn` are enabled by default, and the corresponding actions are **direct connection**
- Note: Currently, only cn and ir of geosite are automatically enabled
- 3 [Custom rules](/tutorial/custom-diversion)
- *Additional*: When installing karing for the first time, a series of diversion groups will be recommended, which can be enabled/disabled according to your specific situation

## Built-in rule set

### Enable built-in policies
- Settings -> Diversion -> Diversion rules -> Edit -> Select the custom diversion group to edit -> Rule Set (build-in)-> Check the relevant rules -> Save
- Return to the diversion rules -> Set diversion
- Return to the karing homepage, Karing will automatically reconnect to take effect

### GeoSite/GeoIP rule description
- Example of Chinese mainland (`cn`):
- The name contains !cn, which means that the site in the rule cannot be accessed normally in the cn area and needs to be accessed through a proxy server
- The name contains cn (no!), which means that the site in the rule can be accessed normally in the cn area, without a proxy, and is set to direct connection
- For users in the cn area, it is recommended to manually enable geolocation-!cn, and set it to *Automatically select a server* or manually specify a server in the routing group policy

- Iran (`ir`) area
- The built-in rules have been merged [Iran-sing-box-rules](https://github.com/Chocolate4U/Iran-sing-box-rules/tree/rule-set?tab=readme-ov-file)
- The following is a list of added rules
``` geoip/ amazon.srs arvancloud.srs bing.srs derakcloud.srs digitalocean.srs github.srs iranserver.srs ir.srs linode.srs malware.srs microsoft.srs openai.srs oracle.srs parspack.srs phishing.srs geosite ads.srs category-ads-ir.srs category-bank-ir.srs category-bourse-ir.srs category-education-ir.srs category-forums-ir.srs category-gov-ir.srs category-insurance-ir.srs category-ir.srs category-media-ir.srs category-news-ir.srs category-payment-ir.srs category-scholar-ir.srs category-shopping-ir.srs category-social-media-ir.srs
category-tech-ir.srs
category-travel-ir.srs
cn@ads.srs
cryptominers.srs
geolocation-!cn@ads.srs
geolocation-cn@ads.srs
ir.srs
malware.srs
nsfw.srs
phishing.srs
social.srs

```

### ACL
- ACL is composed of a series of rule fragments: [an incomplete list](https://github.com/KaringX/karing-ruleset?tab=readme-ov-file#%E8%A7%84%E5%88%99%E7%A2%8E%E7%89%87)

## Change policy matching
- Diversion policy can correspond to two configurations:
- Matching action: current selection/auto selection/direct connection/interception/none
- If a rule is not temporarily enabled, it can be set to *None*
- Match proxy group or single node server
- You can customize fixed nodes into proxy groups for easy maintenance

### Setup steps
- Settings -> Diversion -> `Diversion rules` -> Select diversion strategy -> Modify corresponding actions or nodes
- Return to karing homepage, close the connection, and reconnect to take effect

## Cases
- [Docker accelerator](/blog/case/docker)
- [Block ads](/blog/case/banad)

## Other diversion functions
- [Next lesson Custom diversion](/tutorial/custom-diversion)
- [Android per-application diversion](/tutorial/perapp-proxy)