---
sidebar_position: 8
slug: /download
---

# Download Karing/下载Karing

import React from 'react';
import Link from '@docusaurus/Link';

### Select System / 选择平台

<div className="platform-cards-container">
  <div className="row platform-cards-row">
    {/* 第一行 */}
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
        <p>Mobile and Tablet</p>
      </Link>
    </div>

    {/* 第二行 */}
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

    {/* 第三行 */}
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
  /* 平台卡片容器 */
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

  /* 平台卡片样式 */
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

  /* 平台图标样式 */
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

  /* 卡片内文字样式 */
  .platform-card h3 {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  .platform-card p {
    font-size: 0.9rem;
    color: var(--ifm-color-emphasis-700);
    margin: 0;
  }

  /* 响应式调整 */
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



### iOS(iPhone/iPad)/tvOS(Apple TV) {#ios}
- [稳定版-应用市场-点击下载](https://apps.apple.com/us/app/karing/id6472431552)
- [测试版-TestFlight-点击下载](https://testflight.apple.com/join/RLU59OsJ)
- <font color="red">注意: 如果您的账号无法正常下载应用, 请尝试港区/美区等非中国大陆地区账号,或者移步:  [苹果ID专卖小店](https://dot.karing.app/pi.html?r_c=xda)</font>
- <font color="red">注意: 应用市场版 和 TestFlight版 无法同时安装,请您视具体情况选择要安装的版本</font>
-
- [Stable Version-AppStore-Download](https://apps.apple.com/us/app/karing/id6472431552)
- [Beta Version-TestFlight-Download](https://testflight.apple.com/join/RLU59OsJ)
- <font color="red">Note: AppStore version and TestFlight version cannot be installed at the same time. Please choose the version to install according to the specific situation.</font>

### MacOS
- [稳定版-点击下载](https://dot.karing.app/client.html?tag=macos-stable)
- [测试版-点击下载](https://dot.karing.app/client.html?tag=macos-beta)
-
- [Stable Version-Download](https://dot.karing.app/client.html?tag=macos-stable)
- [Beta Version-Download](https://dot.karing.app/client.html?tag=macos-beta)

### Android/Harmony {#android}
- [稳定版-点击下载](https://dot.karing.app/client.html?tag=android-stable)
- [测试版-点击下载](https://dot.karing.app/client.html?tag=android-beta)

- [备用下载: 稳定版-GitHub-点击下载](https://github.com/KaringX/karing/releases/latest)
- [备用下载: 测试版-GitHub-点击下载](https://github.com/KaringX/karing/releases)
- [备用下载: 稳定版-APKPure 应用市场-点击下载](https://apkpure.com/p/com.nebula.karing)
- <font color="red">注意: 小米/MIUI用户: 如遇无法安装的情况, 先打开`飞行模式(断网)` 和 `关闭安全守护-增强防护` 再安装</font>
- <font color="red">注意: 鸿蒙系统可参考: [HarmonyOS安装karing](/blog/case/harmonyos)</font>
-
- [Stable Version-Download](https://dot.karing.app/client.html?tag=android-stable)
- [Beta Version-Download](https://dot.karing.app/client.html?tag=android-beta)

- [Alternative downloads: Stable Version-GitHub-Download](https://github.com/KaringX/karing/releases/latest)
- [Alternative downloads: Beta Version-GitHub-Download](https://github.com/KaringX/karing/releases)
- [Alternative downloads: Stable Version-APKPure AppStore-Download](https://apkpure.com/p/com.nebula.karing)
- <font color="red">Note: Xiaomi/MIUI users: If you are unable to install, please turn on Airplane Mode (offline) and Turn off Security Guardian - Enhanced Protection before installing.</font>
- <font color="red">Note: For HarmonyOS system, please refer to: [HarmonyOS installation karing](/blog/case/harmonyos)</font>

#### Android TV {#android-tv}
- [Android TV 稳定版(armeabi-v7a)-点击下载](https://dot.karing.app/client.html?tag=android-armv7a-stable)
- [Android TV 测试版(armeabi-v7a)-点击下载](https://dot.karing.app/client.html?tag=android-armv7a-beta)
-
- [Android TV Stable Version(armeabi-v7a)-Download](https://dot.karing.app/client.html?tag=android-armv7a-stable)
- [Android TV Beta Version(armeabi-v7a)-Download](https://dot.karing.app/client.html?tag=android-armv7a-beta)

### Windows {#windows}
- [稳定版-安装包-点击下载](https://dot.karing.app/client.html?tag=windows-installer-stable)
- [稳定版-压缩包-点击下载](https://dot.karing.app/client.html?tag=windows-zip-stable)
- [测试版-安装包-点击下载](https://dot.karing.app/client.html?tag=windows-installer-beta)
- [测试版-压缩包-点击下载](https://dot.karing.app/client.html?tag=windows-zip-beta)
- [备用下载: 稳定版-GitHub-点击下载](https://github.com/KaringX/karing/releases/latest)
- [备用下载: 测试版-GitHub-点击下载](https://github.com/KaringX/karing/releases)
- <font color="red">注意: 安装时,如遇到defender拦截,请点击'显示详细信息' - '仍要运行' 即可安装</font>
-
- [Stable Version-Installer-Download](https://dot.karing.app/client.html?tag=windows-installer-stable)
- [Stable Version-Zip-Download](https://dot.karing.app/client.html?tag=windows-zip-stable)
- [Beta Version-Installer-Download](https://dot.karing.app/client.html?tag=windows-installer-beta)
- [Beta Version-Zip-Download](https://dot.karing.app/client.html?tag=windows-zip-beta)
- [Alternative downloads: Stable Version-GitHub-Download](https://github.com/KaringX/karing/releases/latest)
- [Alternative downloads: Beta Version-GitHub-Download](https://github.com/KaringX/karing/releases)
- <font color="red">Note: If you encounter defender blocking during installation, please click 'Show details' - 'Run anyway' to install</font>

### Linux
- [稳定版-deb安装包-点击下载](https://dot.karing.app/client.html?tag=linux-deb-stable)
- [稳定版-rpm安装包-点击下载](https://dot.karing.app/client.html?tag=linux-rpm-stable)
- [测试版-deb安装包-点击下载](https://dot.karing.app/client.html?tag=linux-deb-beta)
- [测试版-rpm安装包-点击下载](https://dot.karing.app/client.html?tag=linux-rpm-beta)
- [备用下载: 测试版-GitHub-点击下载](https://github.com/KaringX/karing/releases)
-
- [Beta Version-deb Package-Download](https://dot.karing.app/client.html?tag=linux-deb-beta)
- [Beta Version-rpm Package-Download](https://dot.karing.app/client.html?tag=linux-rpm-beta)
- [Alternative downloads: Beta Version-GitHub-Download](https://github.com/KaringX/karing/releases)

## 其他

### System requirements/系统要求
```
    iOS >= 15
    macOS >= 12
    tvOS >= 17
    Android >= 8
    Windows >= 10
    Linux kernel >= 6
```



### New version release notification/新版本发布通知
- 新发布版本, 同时会在 [电报群](https://t.me/KaringApp) 通知
- New releases will be notified in the [Telegram group](https://t.me/KaringApp)





