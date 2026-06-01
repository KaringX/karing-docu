---
authors: [elon]
date: 2025-03-05
tags: [youtube, ios, AdGuard, adblock]
---

# Как пропускать спонсорскую рекламу на YouTube

- Здесь собраны способы убрать рекламу YouTube на разных платформах при использовании Karing.
- Ядро sing-box пока не поддерживает MITM, поэтому для блокировки рекламы YouTube нужны дополнительные инструменты.

## iOS

- На iOS рекомендуется использовать [AdGuard](https://apps.apple.com/us/app/adguard-adblock-privacy/id1047223162).
- После установки откройте Настройки -> Safari -> Расширения и включите все параметры AdGuard.
- Затем откройте `www.youtube.com` в Safari, и реклама будет блокироваться.
- Дополнительные настройки см. в [Safari Web Extensions | AdGuard Knowledge Base](https://adguard.com/kb/zh-CN/adguard-for-ios/web-extension/#ios-%E8%AE%BE%E7%BD%AE).

## Android

- На Android есть много способов убрать рекламу. Ниже несколько вариантов.

### Edge Canary + SponsorBlock for YouTube

- Edge Canary — экспериментальная версия браузера Microsoft Edge для тестирования новых функций, поддерживает расширения.
  - Для установки можно использовать [APKPure](https://apkpure.com/apkpure/com.apkpure.aegon/download/3.19.99?utm_content=1006&icn=aegon&ici=text_home-m&from=text_home-m).
- SponsorBlock for YouTube — расширение Edge, которое пропускает спонсорские вставки, напоминания о подписке и другие фрагменты в видео YouTube.
  - После открытия Edge Canary перейдите в меню -> Расширения и включите SponsorBlock.

### NewPipe

- NewPipe — стороннее приложение YouTube с открытым исходным кодом и без рекламы.
- Описание: https://github.com/TeamNewPipe/NewPipe/blob/dev/doc/README.zh_TW.md
- Скачать с GitHub: https://github.com/TeamNewPipe/NewPipe/releases

### YouTube ReVanced

- [YouTube ReVanced](https://revanced.net/) — сторонний клиент YouTube без root-доступа. Он поддерживает просмотр без рекламы, фоновое воспроизведение, скачивание видео, многоязычный перевод и персональные настройки.

## Windows

- Для браузеров на Chromium рекомендуется [AdGuard AdBlocker](https://chromewebstore.google.com/detail/adguard-%E5%B9%BF%E5%91%8A%E6%8B%A6%E6%88%AA%E5%99%A8/bgnkhhnnamicmpeenaelnjfhikgbkllg).

## Karing

- В Karing по умолчанию есть правило "Adblock", которое блокирует распространённую рекламу. Используемые правила:
  - geosite:category-ads
  - acl:BanAD
