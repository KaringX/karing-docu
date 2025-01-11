---
authors: [elon]
tags: [广告屏蔽,BanAD,category-ads,geosite]
---

# 自定义规则 屏蔽广告
- karing默认集成[ACL和geosite规则](https://github.com/KaringX/karing-ruleset/)
- 直接利用 `acl:BanAD` 和 `geosite:category-ads` 即可屏蔽广告

## 设置流程

### 操作步骤
#### 1 开启规则
- 设置 -> 分流 -> *分流规则* -> 右上角修改按钮(✏图案)
  - -> 自定义分流组 右上角➕号 -> 备注 `BanAD`
  - -> 在规则列表中选择 *BanAD*
  - -> 下拉至内置规则 `Rule Set(build-in)`
  - 搜索选择  `acl:BanAD` 和 `geosite:category-ads`
  - 右上角 点击√保存

#### 2 定义规则动作
- 设置 -> 分流 -> *分流规则* -> 刚才定义的规则组 `BanAD` -> 选择 **拦截**

- 返回首页, 重连即生效


### 关于 category-ads
- geosite:category-ads      包含了常见的广告域名。
- geosite:category-ads-all  包含了常见的广告域名，以及广告提供商的域名。




### 以下步骤适用老版本 (小于v1.0.35.460)

#### 1 开启规则
- 设置 -> 分流 -> *ACL* -> 打开 `启用`, 进入 ACL -> 搜索并打开 `BanAD`
- 设置 -> 分流 -> *GeoSite* -> 打开 `启用`, 进入 GeoSite -> 搜索并打开 `category-ads`

#### 2 定义规则动作
- 设置 -> 分流 -> *分流规则* -> `ACL:BanAD` -> 选择 **拦截**
- 设置 -> 分流 -> *分流规则* -> `GeoSite:category-ads` -> 选择 **拦截**

- 返回首页, 重连即生效

