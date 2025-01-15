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
  - **注意**: 自主托管请保持站点可用, 否则用户无法完成登录绑定.

## 注释说明 {#desc}
```jsx title="config.json"
// APP初始配置文件
{
    "rule_sets": {
        //禁用机场规则, false启用
        "disable_isp_diversion_group": true
    },
    "dns": {
        "ttl": 43200,
        //启用dns分流规则
        "enable_rule": false,
        //测试域名
        "test_domain": "gstatic.com",
        //启用ecs
        "enable_client_subnet": true,
        //启用fakeip
        "enable_fake_ip": true,
        //代理流量:通过代理解析dns
        "enable_proxy_resolve_by_proxy": true,
        //final:通过代理解析dns
        "enable_final_resolve_by_proxy": true,
        //开启入站域名解析(针对tun)
        "enable_inbound_domain_resolve": false,
        //dns服务器
        "resolver_addresses": [
            "local",
            "dhcp://auto",
            "udp://223.6.6.6"
        ],
        //代理服务器
        "outbound_addresses": [
            "local",
            "dhcp://auto",
            "udp://8.8.8.8",
            "udp://223.6.6.6"
        ],
        //直连流量
        "direct_addresses": [
            "local",
            "dhcp://auto",
            "udp://8.8.8.8",
            "udp://223.6.6.6"
        ],
        //代理流量
        "proxy_addresses": [
            "https://1.1.1.1/dns-query",
            "https://dns.google/dns-query"
        ],
        //final
        "final_addresses": [
            "https://1.1.1.1/dns-query",
            "https://dns.google/dns-query"
        ],
        //机场自定义DNS, 默认空
        "list": [
            {
                "isp": "custom dns",
                "url": "udp://7.8.9.9"
            }
        ]
    }
}


```