---
title: Diversion
sidebar_position: 2
---


# Diversion Rules

## Overview
- There are three types of Diversion Rules:
  - 1. Diversion provided by the service provider
    - There is a switch for `Enable Diversion Rules` when adding a configuration
  - 2. Built-in geosite, geoip, and ACL rules
    - By default, rules are enabled based on Settings -> Diversion -> `Country and Region`
    - For example, in the China region, `geosite:cn` and `geoip:cn` are enabled by default, and the corresponding actions are **Current Selected**
  - 3. [Custom Diversion Group](/tutorial/custom-diversion)
- *Note*: The first time you install karing, **Novice Mode** will recommend a series of diversion groups
  - For detailed rules, please visit [karing-ruleset](https://github.com/KaringX/karing-ruleset/tree/sing/recommend)

## Built-in Rule Sets

### Enabling Built-in Diversion Rules
- Settings -> Diversion -> `GeoSite`/`GeoIP`/`ACL` -> Enable the switch -> Search and select the appropriate rules, swipe the button to enable
- Settings -> Diversion -> `Diversion Rules` -> Select the rule -> Modify the corresponding action or node
- Return to karing homepage, disconnect and reconnect to apply the settings

### GeoSite/GeoIP Rules Explanation
- Example for Mainland China (`cn`):
  - If the name contains !cn, it means the sites in this rule cannot be accessed normally in the cn region and need to go through a proxy server
  - If the name contains cn (without !), it means the sites in this rule can be accessed normally in the cn region without a proxy, and should be set to direct connect
  - For users in the cn region, it is recommended to manually enable geolocation-!cn and set it to *auto-select server* or manually specify a server in the routing group policy

- Example for Iran (`ir`):
  - The built-in rules have merged [Iran-sing-box-rules](https://github.com/Chocolate4U/Iran-sing-box-rules/tree/rule-set?tab=readme-ov-file)
  - Below is a list of additional rules
    ```
    geoip/
        amazon.srs
        arvancloud.srs
        bing.srs
        derakcloud.srs
        digitalocean.srs
        github.srs
        iranserver.srs
        ir.srs
        linode.srs
        malware.srs
        microsoft.srs
        openai.srs
        oracle.srs
        parspack.srs
        phishing.srs

    geosite
        ads.srs
        category-ads-ir.srs
        category-bank-ir.srs
        category-bourse-ir.srs
        category-education-ir.srs
        category-forums-ir.srs
        category-gov-ir.srs
        category-insurance-ir.srs
        category-ir.srs
        category-media-ir.srs
        category-news-ir.srs
        category-payment-ir.srs
        category-scholar-ir.srs
        category-shopping-ir.srs
        category-social-media-ir.srs
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
- ACL consists of a series of rule fragments: [An incomplete list](https://github.com/KaringX/karing-ruleset?tab=readme-ov-file#%E8%A7%84%E5%88%99%E7%A2%8E%E7%89%87)

## Changing Rules Matching
- Diversion rules can correspond to two configurations:
  - Matching Action: Current-Selected/Auto-Selected/Direct/Block/None
    - If you do not want to enable a rule temporarily, you can set it to *None*
  - Matching Proxy Group or Individual Node Server
    - You can customize fixed nodes into proxy groups for easy maintenance

### Setup Steps
- Settings -> Diversion -> `Diversion Rules` -> Select the rule -> Modify the corresponding action or node
- Return to karing homepage, disconnect and reconnect to apply the settings

## Examples
- [Docker Accelerator](/blog/case/docker)
- [Ad Blocking](/blog/case/banad)

## Other Diversion Features
- [Next Lesson Custom Diversion Group](/tutorial/custom-diversion)
- [Android Per-App Proxy](/tutorial/perapp-proxy)

