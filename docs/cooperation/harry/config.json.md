---
sidebar_position: 7
---

# APP配置文件 config.json

## 说明
- `config.json` 存储机场自定义的Karing配置, 比如: DNS、延迟检测地址等.

### 什么时候会请求机场对应配置？
- 当用户完成机场与Karing的绑定之后, `base.json` 加载完成, 即会拉取`config.json`, 并覆盖对应Karing的默认配置项.

### 可否自主托管
- 默认托管在 karing 站点上.
  - 地址为 `https://potter.karing.app/isp/{pid}/config.json?v={version}`
- 机长可自主选择托管地址, 比如托管在自己站点
  - 修改 [base.json](./base.json.md) 文件的 `config` 项
    ```jsx title="base.json"
    {
    ... ...
    "config": "https://your-own-website/karing/config.json",
    ... ...
    }
    ```

## 注释说明 {#desc}
```jsx title="config.json"

// APP初始配置文件


```