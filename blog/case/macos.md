---
authors: [elon]
tags: [macOS,dmg,update,install]
---

# Using the Latest Version of Karing on macOS

## 在macOS上使用最新版Karing
- 目前**Karing**采用 **dmg** 文件安装和更新应用
  - 如果您从macOS的AppStore安装了旧版本(小于*1.2.1.827*), 请改用dmg重新安装最新版
- Currently, **Karing** uses **dmg** files to install and update the application.
  - If you have installed an older version (less than *1.2.1.827*) from the macOS AppStore, please reinstall the latest version using the dmg file.
- 系统要求 / System Requirements
  - macOS version: 12.0 (Monterey) or higher

## Installation Steps / 安装步骤 {#install}

- Download the DMG file, the file name is `karing_[version]_macos_universal.dmg`
  - 下载DMG文件，文件名为 `karing_[version]_macos_universal.dmg`
  - [下载稳定版 / download Stable version](https://dot.karing.app/client.html?tag=macos-stable)
  - OR [GitHub Release Page](https://github.com/KaringX/karing/releases/latest)

- 安装步骤
  1. 在Finder中找到下载的.dmg文件，双击打开DMG文件
  2. 将应用拖拽到"应用程序"文件夹
  3. 首次打开时，需要在"系统偏好设置 > 安全性与隐私"中允许运行

- Installation Steps
  1. Locate the downloaded .dmg file in Finder, and double-click to open the DMG file
  2. Drag the application to the "Applications" folder
  3. When opening for the first time, you need to allow it to run in "System Preferences > Security & Privacy"


## Issues / 问题列表 {#issues}

#### 应用无法访问文件或网络
- 前往"系统偏好设置" > "安全性与隐私" > "隐私"
- 检查"文件与文件夹"、"网络"等权限
- 确保应用已被授予必要权限

#### Application cannot access files or the network
- Go to "System Preferences" > "Security & Privacy" > "Privacy"
- Check the permissions for "Files and Folders", "Network", etc.
- Make sure the application has been granted the necessary permissions

#### 权限错误 / Permission errors
- 重置应用权限 / Reset application permissions
```bash
sudo chmod -R 755 /Applications/Karing.app
sudo chown -R $(whoami):staff /Applications/Karing.app
```