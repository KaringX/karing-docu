---
sidebar_position: 8
---

# APP通知消息 notice.json

## 说明
- `notice.json` 存储机场自定义的通知消息, 机长可给用户推送优惠、线路维护等全局消息.

### 什么时候会请求机场对应消息？
- 当用户完成机场与Karing的绑定之后, 根据`base.json`文件中`notice_update_interval`选项的时间, 轮询拉取`notice.json`
- 默认3小时拉取一次, 最小可配置为10分钟.

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
```jsx title="notice.json"
[
    // --- ---> 以下为windows平台消息
    {
        "platform": "windows",
        "channel": "windows",
        // 通知版本号
        //      默认留空, 全局通知
        "version_regex": "",
        // 对应地域, 比如: cn 中国区, ru 俄罗斯
        //      默认留空, 全局通知
        "region_code": "",
        // 消息时间
        "update_time": "",
        // 当前消息标题
        "title": "",
        // 当前消息内容
        "content": "",
        // 消息对应链接, 如设置 则用户点击消息会跳转至url
        "url": ""
    },
    // --- ---> 以下为ios testflight平台消息
    {
        "platform": "ios",
        "channel": "Apple - Test Flight",
        "version_regex": "",
        "region_code": "",
        "update_time": "",
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
        "title": "",
        "content": "",
        "url": ""
    },
    // --- ---> 以下为macos平台消息
    {
        "platform": "macos",
        "channel": "macos",
        "version_regex": "",
        "region_code": "",
        "update_time": "",
        "title": "",
        "content": "",
        "url": ""
    },
    // --- ---> 以下为android平台消息
    {
        "platform": "android",
        "channel": "*,android,Android - Manual installation",
        "version_regex": "",
        "region_code": "",
        "update_time": "",
        "title": "",
        "content": "",
        "url": ""
    }
]
```