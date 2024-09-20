---
sidebar_position: 2
---
# 策略和分流

## 概述
- 分流策略有三类:
  - 1 机场自带策略
    - 添加配置的时候有 `启用ISP分流规则` 开关
  - 2 内置的 geosite、geoip、ACL
    - 默认情况下, 会根据 设置 -> 分流 -> `国家与地区` 开启规则(geosite、geoip)
    - 比如: 中国地区, 默认开启 `geosite:cn` 和 `geoip:cn`, 相应动作都是 **直连**
    - 注意:geosite 目前仅cn和ir会自动启用
  - 3 [自定义规则](/tutorial/custom-diversion)
- *补充*: 首次安装karing, 会推荐一系列分流组,可以根据自己具体情况开启/关闭
 

## 内置规则集

### 开启内置策略
- 设置 -> 分流 -> 分流规则 -> 编辑 -> 选择要编辑的自定义分流组 -> Rule Set(build-in)->勾选相关规则 -> 保存
- 返回分流规则 -> 设置分流
- 返回karing首页, Karing会自动重连生效

### GeoSite/GeoIP规则说明
- 中国大陆(`cn`)地区举例:
  - 名称中带有!cn, 说明该规则里的站点在cn地区无法正常访问,需要通过代理服务器
  - 名称中带有cn(无!), 说明该规则里的站点在cn地区可以正常访问,不需要代理, 设置为直连
  - 对于cn地区的用户, 建议手动开启geolocation-!cn, 并且在路由组策略中设置为 *自动选择服务器* 或 手动指定服务器

- 伊朗(`ir`)地区
  - 内置规则已合并[Iran-sing-box-rules](https://github.com/Chocolate4U/Iran-sing-box-rules/tree/rule-set?tab=readme-ov-file)
  - 下面是一份增加规则的列表
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
- ACL由一些列规则碎片组成: [一份不全的名单](https://github.com/KaringX/karing-ruleset?tab=readme-ov-file#%E8%A7%84%E5%88%99%E7%A2%8E%E7%89%87)


## 更改策略匹配
- 分流策略可以对应两项配置：
  - 匹配动作: 当前选择/自动选择/直连/拦截/无
    - 如果一个规则暂时不想启用, 可以置为 *无*
  - 匹配代理组 or 单个节点服务器
    - 您可把固定的节点自定义成代理组, 方便维护

### 设置步骤
- 设置 -> 分流 -> `分流规则` -> 选择分流策略 -> 修改对应动作or节点
- 返回karing首页, 关闭连接, 重连生效



## 案例
- [docker加速器](/blog/case/docker)
- [屏蔽广告](/blog/case/banad)

## 其他分流功能
- [下一课 自定义分流](/tutorial/custom-diversion)
- [Android 分应用分流](/tutorial/perapp-proxy)

