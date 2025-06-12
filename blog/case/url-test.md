---
title: 修改默认测试网址
authors: [elon]
tags: [clash,url-test,karing,clashmi]
---


## why
- 有时候karing/clash  的默认测联通性和ping的 http://www.gstatic.com/generate_204 但有的时候，但这个网址有问题的时候会出现你所有的测速都是超时，造成不必要的误会，那么这个时候，你可以考虑替换一下clash默认的测联通性的网址。
以下以clash的win版为例，其他版本一样，替换列表在最下面



## url-test网址列表
|:-:|:-:|:-:|:-:|
|Google|[http://www.gstatic.com/generate_204](http://www.gstatic.com/generate_204)|5|10|
|Google|[http://www.google-analytics.com/generate_204](http://www.google-analytics.com/generate_204)|6|4|
|Google|[http://www.google.com/generate_204](http://www.google.com/generate_204)|0|10|
|Google|[http://connectivitycheck.gstatic.com/generate_204](http://connectivitycheck.gstatic.com/generate_204)|4|10|
|Apple|[http://captive.apple.com](http://captive.apple.com/)|3|10|
|Apple|[http://www.apple.com/library/test/success.html](http://www.apple.com/library/test/success.html)|7|10|
|MicroSoft|[http://www.msftconnecttest.com/connecttest.txt](http://www.msftconnecttest.com/connecttest.txt)|5|10|
|Cloudflare|[http://cp.cloudflare.com/](http://cp.cloudflare.com/)|4|10|
|Firefox|[http://detectportal.firefox.com/success.txt](http://detectportal.firefox.com/success.txt)|5|10|
|V2ex|[http://www.v2ex.com/generate_204](http://www.v2ex.com/generate_204)|0|10|
|小米|[http://connect.rom.miui.com/generate_204](http://connect.rom.miui.com/generate_204)|10|4|
|华为|[http://connectivitycheck.platform.hicloud.com/generate_204](http://connectivitycheck.platform.hicloud.com/generate_204)|10|5|
|Vivo|[http://wifi.vivo.com.cn/generate_204](http://wifi.vivo.com.cn/generate_204)|10|5|


