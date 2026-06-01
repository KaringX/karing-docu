---
sidebar_position: 1
title: План открытия исходного кода
date: 2024-04-22
authors: [gooringx, elon]
tags: [fullter, sing-box, github, karing]
---

# План открытия исходного кода

- Список проектов.
- Приглашаем помочь с многоязычной поддержкой:
  - Если вы готовы помочь с переводами, включая, но не ограничиваясь английским, русским, персидским, арабским, вьетнамским, бирманским, испанским, турецким, греческим и другими языками, свяжитесь с [GooRingX](https://t.me/ovowe).
  - Ваша помощь сделает `karing` ещё сильнее.

## Организация

- [x] KaringX переведён в организацию
  - https://github.com/KaringX/
- [x] Документационный сайт пересобран на _Docusaurus_
  - https://karing.app/
  - Исходные файлы: https://github.com/KaringX/karing-docu/

## Ядро sing-box

- [x] Встроенный sing-box
  - Модификации и оптимизация производительности
  - https://github.com/KaringX/sing-box

## Основное приложение

- [x] karing
  - https://github.com/KaringX/karing/
  - Начиная с commit: 36e8f225f60601a77b9f4c8746487a8f5c678c54
- [x] Многоязычная поддержка karing-langs
  - https://github.com/KaringX/karing-langs

## Компоненты и экосистема

- [x] **ruleset**: правила маршрутизации по умолчанию
  - https://github.com/KaringX/karing-ruleset

- [x] **languages**: многоязычная поддержка
  - https://github.com/KaringX/karing-langs

- [x] Модифицированная версия window_manager
  - https://github.com/KaringX/window_manager

- [x] Модифицированная версия flutter_ui_mode_manager
  - https://github.com/KaringX/flutter_ui_mode_manager

## Сервер backend для провайдеров

- [x] Backend для провайдеров, только как пример: sing-poet
  - Поддерживает интеграцию с panel
  - Поддерживает протоколы tuic, hy2, anytls, vless-reality
  - https://github.com/KaringX/sing-poet
