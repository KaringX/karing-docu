---
authors: [elon]
tags: [youtube,ios,AdGuard,去广告]
---

# 如何跳过YouTube赞助商广告
- 这里汇总下各平台使用karing过程中, 去除YouTube广告的方法.
- sing-box内核目前还不支持mitm, 所以去YouTube广告得搭配其他工具.

## ios
- ios 建议使用 [AdGuard](https://apps.apple.com/us/app/adguard-adblock-privacy/id1047223162)
- 安装完成之后, 在 设置 - Safari - 扩展 - 打开所有 AdGuard 选项
- 接着使用 Safari 打开 `www.youtube.com` 广告即可去除
- 更多设置请参考 [Safari Web 扩展 | AdGuard Knowledge Base](https://adguard.com/kb/zh-CN/adguard-for-ios/web-extension/#ios-%E8%AE%BE%E7%BD%AE)


## android
- 安卓上去除广告的方式有许多，这里仅列举下:

###  Edge Canary + SponsorBlock for YouTube
- Edge Canary是微软推出的前沿浏览器金丝雀版，用于测试新功能，可支持扩展。
  - 安装可使用 [APKPure](https://apkpure.com/apkpure/com.apkpure.aegon/download/3.19.99?utm_content=1006&icn=aegon&ici=text_home-m&from=text_home-m)
- SponsorBlock for YouTube 是 Edge中的扩展, 可跳过 YouTube 视频中的赞助广告、订阅提醒等片段。
	- 打开Edge Canary之后 菜单 - 扩展 - 开启 SponsorBlock即可

### NewPipe
- NewPipe 是一个第三方的youtube应用，开源无广告
- 介绍： https://github.com/TeamNewPipe/NewPipe/blob/dev/doc/README.zh_TW.md
- GitHub下载：https://github.com/TeamNewPipe/NewPipe/releases

### YouTube ReVanced
- [YouTube ReVanced](https://revanced.net/)是一款免Root的第三方油管客户端，提供无广告观看、后台播放、视频下载等高级功能，支持多语言翻译和个性化设置


## windows
- 但凡chrome内核浏览器，推荐 [AdGuard 广告拦截器](https://chromewebstore.google.com/detail/adguard-%E5%B9%BF%E5%91%8A%E6%8B%A6%E6%88%AA%E5%99%A8/bgnkhhnnamicmpeenaelnjfhikgbkllg)



## karing
- karing默认自带规则 "🛑广告拦截(Adblock)", 能屏蔽常见的广告, 使用规则:
  - geosite:category-ads
  - acl:BanAD



