---
sidebar_position: 10
---
# URL Scheme

## 打开系统调用监听
- 设置 -> `系统Scheme调用` -> 开启需要的项目, 默认监听
  - `karing://`
  - `clash://`


## Scheme 格式
- **注意:**
    - 参数必须urlencode
- 格式:
```jsx
# 添加配置
clash://install-config?url=xxxx&name=xxx
karing://install-config?url=xxxx&name=xxx&isp-name=xxx&isp-faq=xxx&isp-url=xxx


# 连接操作
karing://connect      打开连接
karing://disconnect   断开连接
karing://reconnect    重新连接
```

