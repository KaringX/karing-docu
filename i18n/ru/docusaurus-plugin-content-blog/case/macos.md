---
authors: [elon]
date: 2026-01-30
tags: [macOS, dmg, update, install]
---

# Использование последней версии Karing на macOS

## Использование последней версии Karing на macOS

- Сейчас **Karing** устанавливается и обновляется через файлы **dmg**.
  - Если вы установили старую версию из macOS App Store, ниже _1.2.1.827_, переустановите последнюю версию через dmg-файл.
- Системные требования
  - macOS version: 12.0 (Monterey) or higher

## Шаги установки {#install}

- Скачайте DMG-файл. Имя файла: `karing_[version]_macos_universal.dmg`
  - [Скачать стабильную версию](https://dot.karing.app/client.html?tag=macos-stable)
  - Или [страница GitHub Release](https://github.com/KaringX/karing/releases/latest)

- Шаги установки
  1. Найдите скачанный `.dmg` файл в Finder и дважды щёлкните по нему, чтобы открыть DMG.
  2. Перетащите приложение в папку "Applications".
  3. При первом запуске может потребоваться разрешить запуск в "System Preferences > Security & Privacy".

## Возможные проблемы {#issues}

#### Приложение не может получить доступ к файлам или сети

- Откройте "System Preferences" -> "Security & Privacy" -> "Privacy".
- Проверьте разрешения для "Files and Folders", "Network" и других пунктов.
- Убедитесь, что приложению выданы необходимые разрешения.

#### Ошибки разрешений

- Сбросьте разрешения приложения:

```bash
sudo chmod -R 755 /Applications/Karing.app
sudo chown -R $(whoami):staff /Applications/Karing.app
```
