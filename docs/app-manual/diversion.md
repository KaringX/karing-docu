---
title: 分流
sidebar_position: 7
---


![](./img/diversion.png#center)

### 国家与地区:用户实际所在的国家与地区,Karing会根据此设置自动添加部分分流规则(geosite,geoip)

### RuleSet: 内置规则集设置

### 前置代理: 将一个代理请求封包到另外一个代理请求中转发, 例如有两个代理节点A,B,当前设备D,以及目标W, D->A,D->W延迟过高或者不通,D->B延迟较低, B->A延迟低,那么就可以将B设置为A的前置节点(代理),这样请求路径变成了D->B->A->W,整体延迟较低,体验提升明显

### 自定义代理组/自定义自动选择: 自定义版本的[自动选择], 支持正则匹配

### 分流规则:分流相关设置,包括新建/编辑等

### 分流规则探测: 探测域名命中的分流规则,由于仅匹配了域名,未考虑其他因素,探测结果与实际使用结果可能有偏差