---
sidebar_position: 6
---

# 机场基础配置 base.json

## 说明
- `base.json` 存储机场的基础信息, 当APP发生状态切换时更新(比如 启动、连接、切换至前台) , 最短时间间隔为3小时.

### 什么时候会请求机场对应配置？
- 当用户通过 [咒语](./spell.md) 登录机场, 完成导入配置之后, Karing APP即和机场绑定.
- 绑定发生时, 即开始请求相应机场配置(base.json), 并覆盖对应Karing的默认配置项.

### 可否自主托管
- 仅托管在 karing 站点上.

## 注释说明 {#desc}
```jsx title="base.json"
{
    // APP切换vpn状态/切换前台/启动时更新base.json, 最短时间间隔为3小时
    //
    // --- ---> 以下为机场基本信息
    // VPN服务(机场)名称
    "name": "your service name",
    // 主页, 中文域名/俄文域名/punycode 会自动转换成ascii码的域名
    "home": "https://your-homepage/",
    // 文档
    "faq": "https://your-homepage/docs",
    // 客服或工单
    "customer_service": "https://your-homepage/user/ticket",
    // 社交媒体
    "follow": "https://t.me/KaringApp",
    //
    // --- ---> 以下为APP配置
    // APP初始配置文件地址, 默认系统托管, 可由服务商自行定义
    "config": "",
    // APP通知配置文件地址, 默认系统托管, 可由服务商自行定义
    "notice": "",
    // 通知更新间隔，单位:分钟 用于控制更新notice的时间间隔.最低为10, 默认为3小时
    "notice_update_interval": 180,
    //
    // --- ---> 以下为与Karing对接的配置
    // 对接页面URL, 中文域名/俄文域名/punycode 会自动转换成ascii码的域名
    "connect": "",
    // 魔法指令 用于在绑定页面跳转至VPN服务(机场)的短语, 一个ISP最多定义2两个词
    "spells": [
        '急速云',
        'RapidNetwork',
    ],
    //
    // --- ---> 以下为系统生成
    // ProviderID 由系统分配,唯一标识
    "pid": null,
    // 配置每次修改 系统自动+1
    "version": 1
}


```