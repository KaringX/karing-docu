---
title: Использование последней версии Karing на Linux
date: 2026-01-30
authors: [elon]
tags: [linux, rpm, deb, AppImage, install]
---

## Использование последней версии Karing на Linux

- Сейчас **Karing** предоставляет установочные пакеты трёх форматов: deb, rpm и AppImage.
  - Формат имени файла: `karing_[version]_linux_amd64.deb`.
  - Устройства на ARM пока не поддерживаются.

## Шаги установки {#install}

### Debian / Ubuntu {#debian}

- Скачайте deb-файл
  - [Стабильная версия - deb - Скачать](https://dot.karing.app/client.html?tag=linux-deb-stable)
  - [Бета-версия - deb - Скачать](https://dot.karing.app/client.html?tag=linux-deb-beta)
  - Или [страница GitHub Release](https://github.com/KaringX/karing/releases/latest)

- Установите
  - `sudo apt install ./karing_[version]_linux_amd64.deb`

### Fedora / Red Hat {#redhat}

- Скачайте rpm-файл
  - [Стабильная версия - rpm - Скачать](https://dot.karing.app/client.html?tag=linux-rpm-stable)
  - [Бета-версия - rpm - Скачать](https://dot.karing.app/client.html?tag=linux-rpm-beta)
  - Или [страница GitHub Release](https://github.com/KaringX/karing/releases/latest)
- Установите
  - `sudo dnf install ./karing_[version]_linux_amd64.rpm`

### Arch Linux / Manjaro {#archlinux}

- Спасибо @czyt за поддержку [AUR karing-bin](https://aur.archlinux.org/packages/karing-bin).

  ```bash
  # С yay
  yay -S karing-bin

  # Или с paru
  paru -S karing-bin
  ```

### AppImage

- Скачайте AppImage-файл
  - [страница GitHub Release](https://github.com/KaringX/karing/releases/latest)
- Установите / запустите

  ```bash
  # После скачивания добавьте право на выполнение
  chmod +x karing_[version]_linux_amd64.AppImage

  # Запустите
  sudo ./karing_[version]_linux_amd64.AppImage

  ```

## Возможные проблемы {#issues}
