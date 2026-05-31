---
sidebar_position: 7
---

# Конфигурационный файл APP config.json

## Описание

- `config.json` хранит пользовательскую конфигурацию Karing провайдера, например DNS, адрес проверки задержки и т.п.

### Когда запрашивается соответствующая конфигурация провайдера?

- После завершения привязки провайдера к Karing и загрузки `base.json` будет загружен `config.json`, который перезапишет стандартные параметры Karing.

### Можно ли разместить самостоятельно

- По умолчанию размещается на сайте karing.
  - Адрес: `https://potter.karing.app/isp/{pid}/config.json?v={version}`
- Владелец провайдера может выбрать собственное размещение, например на своем сайте
  - Измените пункт `config` в файле [base.json](/cooperation/harry/base.json)
    ```jsx title="base.json"
    {
    ... ...
    "config": "https://your-own-website/karing/config.json",
    ... ...
    }
    ```
  - **Примечание**: при самостоятельном размещении поддерживайте сайт доступным, иначе пользователи не смогут завершить вход и привязку.

## Описание комментариев {#desc}

```jsx title="config.json"
// Начальный конфигурационный файл APP
{
    "rule_sets": {
        // отключить правила провайдера; false - включить
        "disable_isp_diversion_group": true
    },
    "dns": {
        "ttl": 43200,
        // включить правила разделения dns
        "enable_rule": false,
        // тестовый домен
        "test_domain": "gstatic.com",
        // включить ecs
        "enable_client_subnet": true,
        // включить fakeip
        "enable_fake_ip": true,
        // прокси-трафик: разрешать dns через прокси
        "enable_proxy_resolve_by_proxy": true,
        // final: разрешать dns через прокси
        "enable_final_resolve_by_proxy": true,
        // включить разрешение входящих доменов(для tun)
        "enable_inbound_domain_resolve": false,
        // dns-серверы
        "resolver_addresses": [
            "local",
            "dhcp://auto",
            "udp://223.6.6.6"
        ],
        // прокси-серверы
        "outbound_addresses": [
            "local",
            "dhcp://auto",
            "udp://8.8.8.8",
            "udp://223.6.6.6"
        ],
        // прямой трафик
        "direct_addresses": [
            "local",
            "dhcp://auto",
            "udp://8.8.8.8",
            "udp://223.6.6.6"
        ],
        // прокси-трафик
        "proxy_addresses": [
            "https://1.1.1.1/dns-query",
            "https://dns.google/dns-query"
        ],
        // final
        "final_addresses": [
            "https://1.1.1.1/dns-query",
            "https://dns.google/dns-query"
        ],
        // пользовательский DNS провайдера, по умолчанию пусто
        "list": [
            {
                "isp": "custom dns",
                "url": "udp://7.8.9.9"
            }
        ]
    }
}

```
