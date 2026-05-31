---
sidebar_position: 8
slug: /download
---

# Скачать Karing

import React from 'react';
import Link from '@docusaurus/Link';

### Выберите систему

<div className="platform-cards-container">
  <div className="row platform-cards-row">
    <div className="col col--6 platform-card-col">
      <Link to="#ios" className="platform-card">
        <div className="platform-icon platform-icon-ios">📱</div>
        <h3>iOS</h3>
        <p>iPhone и iPad</p>
      </Link>
    </div>

    <div className="col col--6 platform-card-col">
      <Link to="#android" className="platform-card">
        <div className="platform-icon platform-icon-android">🤖</div>
        <h3>Android</h3>
        <p>Смартфоны и планшеты</p>
      </Link>
    </div>

    <div className="col col--4 platform-card-col">
      <Link to="#windows" className="platform-card">
        <div className="platform-icon platform-icon-windows">🖥︎</div>
        <h3>Windows</h3>
        <p>Версия для ПК</p>
      </Link>
    </div>

    <div className="col col--4 platform-card-col">
      <Link to="/blog/case/macos" className="platform-card">
        <div className="platform-icon platform-icon-macos">💻</div>
        <h3>macOS</h3>
        <p>Версия для Mac</p>
      </Link>
    </div>

    <div className="col col--4 platform-card-col">
      <Link to="/blog/case/linux" className="platform-card">
        <div className="platform-icon platform-icon-linux">🐧</div>
        <h3>Linux</h3>
        <p>Поддержка разных дистрибутивов</p>
      </Link>
    </div>

    <div className="col col--6 platform-card-col">
      <Link to="#ios" className="platform-card">
        <div className="platform-icon platform-icon-tvos">📺</div>
        <h3>tvOS</h3>
        <p>Apple TV</p>
      </Link>
    </div>

    <div className="col col--6 platform-card-col">
      <Link to="#android-tv" className="platform-card">
        <div className="platform-icon platform-icon-android-tv">📟</div>
        <h3>Android TV</h3>
        <p>Версия для ТВ</p>
      </Link>
    </div>

  </div>
</div>

<style>{`
  .platform-cards-container {
    margin: 2rem 0;
  }

  .platform-cards-row {
    margin: 0 -0.75rem;
  }

  .platform-card-col {
    margin-bottom: 1.5rem;
    padding: 0 0.75rem;
  }

  .platform-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1.5rem;
    text-decoration: none;
    color: inherit;
    height: 100%;
    border: 1px solid var(--ifm-color-emphasis-200);
    border-radius: 12px;
    transition: all 0.3s ease;
  }

  .platform-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    border-color: var(--ifm-color-primary);
    text-decoration: none;
  }

  .platform-icon {
    font-size: 4rem;
    margin-bottom: 0.75rem;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f7;
    border-radius: 12px;
  }

  .platform-icon-android {
    color: #3DDC84;
  }

  .platform-icon-windows {
    color: #0078D6;
  }

  .platform-icon-linux {
    color: #FCC624;
  }

  .platform-icon-android-tv {
    color: #3DDC84;
  }

  .platform-card h3 {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  .platform-card p {
    font-size: 0.9rem;
    color: var(--ifm-color-emphasis-700);
    margin: 0;
  }

  @media (max-width: 996px) {
    .platform-card {
      padding: 1.25rem;
    }

    .platform-icon {
      width: 50px;
      height: 50px;
      font-size: 1.75rem;
    }

    .platform-card h3 {
      font-size: 1.1rem;
    }

    .platform-card p {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 768px) {
    .col--6, .col--4 {
      width: 50% !important;
      max-width: 50% !important;
      flex: 0 0 50% !important;
    }

    .platform-card {
      padding: 1rem;
    }

    .platform-icon {
      width: 45px;
      height: 45px;
      font-size: 1.5rem;
    }

    .platform-card h3 {
      font-size: 1rem;
    }

    .platform-card p {
      font-size: 0.8rem;
    }
  }
`}</style>

### iOS (iPhone/iPad) / tvOS (Apple TV) {#ios}

- [Стабильная версия - App Store - Скачать](https://apps.apple.com/us/app/karing/id6472431552)
- [Бета-версия - TestFlight - Скачать](https://testflight.apple.com/join/RLU59OsJ)
- <font color="red">Примечание: если ваш аккаунт не может скачать приложение, попробуйте Apple ID из Гонконга, США или другого региона за пределами материкового Китая либо перейдите в [магазин Apple ID](https://dot.karing.app/pi.html?r_c=xda).</font>
- <font color="red">Примечание: версию из App Store и версию TestFlight нельзя установить одновременно. Выберите подходящую версию.</font>

### macOS

- [Стабильная версия - Скачать](https://dot.karing.app/client.html?tag=macos-stable)
- [Бета-версия - Скачать](https://dot.karing.app/client.html?tag=macos-beta)

### Android / HarmonyOS {#android}

- [Стабильная версия - Скачать](https://dot.karing.app/client.html?tag=android-stable)
- [Бета-версия - Скачать](https://dot.karing.app/client.html?tag=android-beta)
- [Альтернативная загрузка: стабильная версия - GitHub - Скачать](https://github.com/KaringX/karing/releases/latest)
- [Альтернативная загрузка: бета-версия - GitHub - Скачать](https://github.com/KaringX/karing/releases)
- [Альтернативная загрузка: стабильная версия - APKPure App Store - Скачать](https://apkpure.com/p/com.nebula.karing)
- <font color="red">Примечание для пользователей Xiaomi/MIUI: если приложение не устанавливается, перед установкой включите режим полета (без сети) и отключите Security Guard - Enhanced Protection.</font>
- <font color="red">Примечание: для HarmonyOS см. [Установка Karing на HarmonyOS](/blog/case/harmonyos).</font>

#### Android TV {#android-tv}

- [Android TV, стабильная версия (armeabi-v7a) - Скачать](https://dot.karing.app/client.html?tag=android-armv7a-stable)
- [Android TV, бета-версия (armeabi-v7a) - Скачать](https://dot.karing.app/client.html?tag=android-armv7a-beta)

### Windows {#windows}

- [Стабильная версия - установщик - Скачать](https://dot.karing.app/client.html?tag=windows-installer-stable)
- [Стабильная версия - архив - Скачать](https://dot.karing.app/client.html?tag=windows-zip-stable)
- [Бета-версия - установщик - Скачать](https://dot.karing.app/client.html?tag=windows-installer-beta)
- [Бета-версия - архив - Скачать](https://dot.karing.app/client.html?tag=windows-zip-beta)
- [Альтернативная загрузка: стабильная версия - GitHub - Скачать](https://github.com/KaringX/karing/releases/latest)
- [Альтернативная загрузка: бета-версия - GitHub - Скачать](https://github.com/KaringX/karing/releases)
- <font color="red">Примечание: если Microsoft Defender блокирует установщик, нажмите "Подробнее", затем "Выполнить в любом случае".</font>

### Linux

- [Стабильная версия - deb-пакет - Скачать](https://dot.karing.app/client.html?tag=linux-deb-stable)
- [Стабильная версия - rpm-пакет - Скачать](https://dot.karing.app/client.html?tag=linux-rpm-stable)
- [Бета-версия - deb-пакет - Скачать](https://dot.karing.app/client.html?tag=linux-deb-beta)
- [Бета-версия - rpm-пакет - Скачать](https://dot.karing.app/client.html?tag=linux-rpm-beta)
- [Альтернативная загрузка: бета-версия - GitHub - Скачать](https://github.com/KaringX/karing/releases)

## Другое

### Системные требования

```text
iOS >= 15
macOS >= 12
tvOS >= 17
Android >= 8
Windows >= 10
Linux kernel >= 6
```

### Уведомления о выпуске новых версий

- О новых выпусках сообщается в [Telegram-группе](https://t.me/KaringApp).
