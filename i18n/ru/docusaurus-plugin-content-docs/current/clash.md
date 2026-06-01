---
sidebar_position: 6
slug: /clash
title: Список совместимости Clash
---

# Таблица совместимости функций Karing и Clash

- Этот документ перечисляет сходства и различия совместимости Karing с функциями Clash(Meta/mihomo).
  - Пользователи могут выбрать клиентское приложение в соответствии со своими потребностями.
  - Документация может отставать от фактического процесса разработки, благодарим за понимание.
- x
- Если вам нужен полнофункциональный клиент Clash, рекомендуем [**Clash Mi**](https://clashmi.app/download) на базе ядра Mihomo
  - https://clashmi.app/download
- x
- Документация Clash: [Metacubex Docs](https://wiki.metacubex.one/config/)
- В документации ниже отметка ✔ означает, что функция уже совместима

## Исходящие прокси

- [x] Настройка TLS 🙆‍♂️
- [x] Настройка транспортного уровня
- [x] dialer-proxy
  - Настройки -> Предварительный прокси
- [x] sing-mux
  - Настройки -> Mux
- [x] DIRECT
- [x] DNS
- [x] HTTP
- [x] SOCKS
- [x] Shadowsocks
- [x] ShadowsocksR
- [ ] Snell
  - Будет поддерживаться позже
- [x] VMess
- [x] VLESS
- [x] Trojan
- [x] Hysteria
- [x] Hysteria2
  - Port hopping поддерживается с >=[1.0.29.390](https://github.com/KaringX/karing/releases/tag/v1.0.29.390)
- [x] TUIC
- [x] WireGuard
- [x] SSH
- [x] AnyTLS
- [x] Mieru

## Входящие подключения

- [x] Прокси-порт
- [x] Tun
- listeners
  - [x] http
  - [x] socks
  - [x] mixed
  - [ ] redirect
  - [ ] tproxy
  - [x] tun
  - [ ] ShadowSocks
  - [ ] VMess
  - [ ] TUIC v4
  - [ ] TUIC v5
  - [ ] Hysteria2
  - [ ] tunnel

## DNS

- Можно настроить внутри приложения, настройка через ссылку подписки не поддерживается
  - Параметр: Настройки -> DNS
  - PS: в правом верхнем углу списка DNS есть проверка скорости серверов, рекомендуется выбрать самые быстрые.
- [x] Типы DNS поддерживаются полностью 🙆‍♂️
- [x] hosts DNS-статический IP
- [x] Сниффинг доменов
  - Настройки -> Определение протокола

## Наборы прокси

- [x] Содержимое наборов прокси 🙆‍♂️

## Группы политик

- [x] Ручной выбор
- [x] Автоматический выбор
- [ ] Автоматический fallback 🙅
- [ ] Балансировка нагрузки 🙅
- [ ] Цепочка прокси 🙅
- [x] Встроенные политики
  - DIRECT
  - REJECT
  - REJECT-DROP
- [x] Правила маршрутизации
  - IP-CIDR
  - IP-CIDR6
  - DOMAIN
  - DOMAIN-SUFFIX
  - DOMAIN-KEYWORD
  - PROCESS-NAME

## Наборы правил

- [x] Содержимое наборов правил
  - См. https://github.com/karingX/karing-ruleset
- [ ] Подправила 🙅

## Другое

- [ ] Туннель трафика
- [x] NTP 🙆‍♂️
  - Настройки -> NTP
