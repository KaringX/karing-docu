---
sidebar_position: 8
slug: /download
---

# Download Karing

import React from 'react';
import Link from '@docusaurus/Link';

### Select System

<div className="platform-cards-container">
  <div className="row platform-cards-row">
    <div className="col col--6 platform-card-col">
      <Link to="#ios" className="platform-card">
        <div className="platform-icon platform-icon-ios">📱</div>
        <h3>iOS</h3>
        <p>iPhone and iPad</p>
      </Link>
    </div>

    <div className="col col--6 platform-card-col">
      <Link to="#android" className="platform-card">
        <div className="platform-icon platform-icon-android">🤖</div>
        <h3>Android</h3>
        <p>Mobile and tablet</p>
      </Link>
    </div>

    <div className="col col--4 platform-card-col">
      <Link to="#windows" className="platform-card">
        <div className="platform-icon platform-icon-windows">🖥︎</div>
        <h3>Windows</h3>
        <p>Desktop version</p>
      </Link>
    </div>

    <div className="col col--4 platform-card-col">
      <Link to="/blog/case/macos" className="platform-card">
        <div className="platform-icon platform-icon-macos">💻</div>
        <h3>macOS</h3>
        <p>Mac computer version</p>
      </Link>
    </div>

    <div className="col col--4 platform-card-col">
      <Link to="/blog/case/linux" className="platform-card">
        <div className="platform-icon platform-icon-linux">🐧</div>
        <h3>Linux</h3>
        <p>Support for multiple distributions</p>
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
        <p>TV version</p>
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

- [Stable Version - App Store - Download](https://apps.apple.com/us/app/karing/id6472431552)
- [Beta Version - TestFlight - Download](https://testflight.apple.com/join/RLU59OsJ)
- <font color="red">Note: If your account cannot download the app normally, try using an Apple account from Hong Kong, the United States, or another region outside mainland China, or visit the [Apple ID specialty shop](https://dot.karing.app/pi.html?r_c=xda).</font>
- <font color="red">Note: The App Store version and TestFlight version cannot be installed at the same time. Choose the version that fits your situation.</font>

### macOS

- [Stable Version - Download](https://dot.karing.app/client.html?tag=macos-stable)
- [Beta Version - Download](https://dot.karing.app/client.html?tag=macos-beta)

### Android / HarmonyOS {#android}

- [Stable Version - Download](https://dot.karing.app/client.html?tag=android-stable)
- [Beta Version - Download](https://dot.karing.app/client.html?tag=android-beta)
- [Alternative Download: Stable Version - GitHub - Download](https://github.com/KaringX/karing/releases/latest)
- [Alternative Download: Beta Version - GitHub - Download](https://github.com/KaringX/karing/releases)
- [Alternative Download: Stable Version - APKPure App Store - Download](https://apkpure.com/p/com.nebula.karing)
- <font color="red">Note: Xiaomi/MIUI users: If you cannot install the app, enable Airplane Mode (offline) and disable Security Guard - Enhanced Protection before installing.</font>
- <font color="red">Note: For HarmonyOS, see [Install Karing on HarmonyOS](/blog/case/harmonyos).</font>

#### Android TV {#android-tv}

- [Android TV Stable Version (armeabi-v7a) - Download](https://dot.karing.app/client.html?tag=android-armv7a-stable)
- [Android TV Beta Version (armeabi-v7a) - Download](https://dot.karing.app/client.html?tag=android-armv7a-beta)

### Windows {#windows}

- [Stable Version - Installer - Download](https://dot.karing.app/client.html?tag=windows-installer-stable)
- [Stable Version - Zip - Download](https://dot.karing.app/client.html?tag=windows-zip-stable)
- [Beta Version - Installer - Download](https://dot.karing.app/client.html?tag=windows-installer-beta)
- [Beta Version - Zip - Download](https://dot.karing.app/client.html?tag=windows-zip-beta)
- [Alternative Download: Stable Version - GitHub - Download](https://github.com/KaringX/karing/releases/latest)
- [Alternative Download: Beta Version - GitHub - Download](https://github.com/KaringX/karing/releases)
- <font color="red">Note: If Microsoft Defender blocks the installer, click "More info" and then "Run anyway" to install.</font>

### Linux

- [Stable Version - deb Package - Download](https://dot.karing.app/client.html?tag=linux-deb-stable)
- [Stable Version - rpm Package - Download](https://dot.karing.app/client.html?tag=linux-rpm-stable)
- [Beta Version - deb Package - Download](https://dot.karing.app/client.html?tag=linux-deb-beta)
- [Beta Version - rpm Package - Download](https://dot.karing.app/client.html?tag=linux-rpm-beta)
- [Alternative Download: Beta Version - GitHub - Download](https://github.com/KaringX/karing/releases)

## Other

### System requirements

```text
iOS >= 15
macOS >= 12
tvOS >= 17
Android >= 8
Windows >= 10
Linux kernel >= 6
```

### New version release notification

- New releases will be announced in the [Telegram group](https://t.me/KaringApp).
