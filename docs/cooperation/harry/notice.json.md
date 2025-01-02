---
sidebar_position: 8
---

# APP通知消息 notice.json

## 说明
- `notice.json` 推送机场自定义的通知消息, 机长可给用户推送优惠、线路维护等全局消息.
- 展示位置: Karing - 设置 - 通知.

### 什么时候会请求机场对应消息？
- 当用户完成ISP/机场绑定, [应用启动/应用切换到前台/开启连接/断开连接]并且[配置请求时间]内未请求的,会触发请求`notice.json`.
- 配置请求时间:默认180分钟, 最小10分钟(`base.json`文件中`notice_update_interval`, 单位为分钟).

### 可否自主托管
- 默认托管在 karing 站点上.
  - 地址为 `https://potter.karing.app/isp/{pid}/notice.json?v={version}`
- 机长可自主选择托管地址, 比如托管在自己站点
  - 修改 [base.json](./base.json.md) 文件的 `notice` 项
    ```jsx title="base.json"
    {
    ... ...
    "notice": "https://your-own-website/karing/notice.json",
    ... ...
    }
    ```
- 如果有编码能力, 建议托管在自己站点, 发送机场消息时同步修改json文件, 省时省力.

## 注释说明 {#desc}

### 字段解释
 - platform [**必填**]: 平台类型,可选值为 windows,macos,ios,android 其中之一
 - channel [**必填**]: 按默认值即可,请勿修改,
 - version_regex: Karing版本号正则表达式, 留空则匹配所有版本
 - region_code:
   - 匹配用户在karing里设置的国家和地区
   - 多个地区用英文逗号`,`分割, 比如 `us,ru,ir`
   - 留空,则匹配所有地区
 - update_time [**必填**]: 通知更新时间
   - 格式 yyyy-mm-dd hh:mm:ss(比如 2010-12-10 12:10:00), 此时间会显示在karing端的通知信息中
 - expire_time: 通知过期时间
   - 格式 yyyy-mm-dd hh:mm:ss(比如 2010-12-10 12:10:00), 超过此时间后,Karing会删除该通知
   - 不填或为空: update_time + 30天

- title : 通知标题
  - 不宜过长, 以免移动端显示不全.
  - 留空则表示无消息.
- 通知展现形式包括:
  - content: 通知内容,用户点击title后,展示文本内容
  - url: 通知页面URL,用户点击title后,打开url对应的网页
  - content和url 只能设置其中一个

### 注意事项
- update_time和expire_time未对时区做任何处理, 可能存在由于时区上的差异导致实际会相差几个小时
- Karing会强制匹配字段列表, 如果不一致则认为是无效消息.
  - platform,channel,version_regex,region_code 必须存在


### 示例

```jsx title="notice.json"

[
    // --- ---> 以下为windows平台消息
    {
        "platform": "windows",
        "channel": "windows",
        "version_regex": "",
        "region_code": "",
        "update_time": "",
        "expire_time": "",
        "title": "",
        "content": "",
        "url": ""
    },
    // --- ---> 以下为ios testflight平台消息
    {
        "platform": "ios",
        "channel": "Apple - Test Flight",
        "version_regex": "",
        "region_code": "",
        "update_time": "",
        "expire_time": "",
        "title": "",
        "content": "",
        "url": ""
    },
    // --- ---> 以下为ios appstore平台消息
    {
        "platform": "ios",
        "channel": "Apple - App Store",
        "version_regex": "",
        "region_code": "",
        "update_time": "",
        "expire_time": "",
        "title": "",
        "content": "",
        "url": ""
    },
    // --- ---> 以下为macos平台消息(包括testflight)
    {
        "platform": "macos",
        "channel": "macos",
        "version_regex": "",
        "region_code": "",
        "update_time": "",
        "expire_time": "",
        "title": "",
        "content": "",
        "url": ""
    },
    // --- ---> 以下为android平台消息
    {
        "platform": "android",
        "channel": "*,android",
        "version_regex": "",
        "region_code": "",
        "update_time": "",
        "expire_time": "",
        "title": "",
        "content": "",
        "url": ""
    }
]
```