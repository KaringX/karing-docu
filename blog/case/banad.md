---
authors: [elon]
tags: [广告屏蔽,BanAD,category-ads,geosite]
---

# 自定义规则 屏蔽广告
- karing默认集成[ACL和geosite规则](https://github.com/KaringX/karing-ruleset/)
- 直接利用 `acl:BanAD` 和 `geosite:category-ads` 即可屏蔽广告

## 步骤
### 1 开启规则
- 设置 -> 分流 -> *ACL* -> 打开 `启用`, 进入 ACL -> 搜索并打开 `BanAD`
- 设置 -> 分流 -> *GeoSite* -> 打开 `启用`, 进入 GeoSite -> 搜索并打开 `category-ads`

### 2 定义规则动作
- 设置 -> 分流 -> *分流规则* -> `ACL:BanAD` -> 选择 **拦截**
- 设置 -> 分流 -> *分流规则* -> `GeoSite:category-ads` -> 选择 **拦截**

- 返回首页, 重连即生效


### 关于 category-ads
- geosite:category-ads      包含了常见的广告域名。
- geosite:category-ads-all  包含了常见的广告域名，以及广告提供商的域名。




