---
sidebar_position: 8
---
![](./img/diversion-rule-edit.png#center)


### 编辑自定义分流组:各分项之间支持OR/AND逻辑运算
- OR: 满足一项即命中规则
- AND: 满足所有项才命中规则
### 分项类型
- 域名后缀:比如.google.com或者google.com
- 域名:完整域名,比如www.google.com
- 域名关键词:比如google
- 域名正则:匹配域名的正则表达式
- IP Cidr:IP段,格式为178.0.55.32/32 (ip/掩码)
- 端口:目标端口
- 协议:请求所用的协议,点击右侧箭头即可选择
- Rule Set:远程规则集,URL中需要包含文件名及文件扩展名(.srs或.json);无效的文件不会导致VPN启动连接失败,可以到[分流规则探测]检测是否下载成功
- Rule Set(build-in):内置规则集,点击右侧箭头即可选择
- 进程名称:(仅windows), 名称以及大小写要完全匹配
- 进程路径:(仅windows), 完整路径及路径大小写需要完全匹配
- 应用包名:(仅android), 名称以及大小写要完全匹配