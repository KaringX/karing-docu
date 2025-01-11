---
title: Backup and Sync
---

# Backup and Sync
- karing supports multi-terminal synchronization configuration through the following methods
- iCloud (ios/macos)
- Webdav
- LAN Sync
- zip file import/export

## Solution 1: Webdev
- Settings -> Backup and Sync -> `Webdav`
- For specific server configuration, please refer to the cloud disk document used by each

### AList
- It seems that only the native Nut Cloud supports Webdav in mainland China, and AList can be used to implement Webdav
- Reference document:
- https://alist.nn.ci/zh/guide/webdav.html
- https://alist.nn.ci/guide/webdav.html

## Solution 2: LAN Sync
- **Note**: Import only supports iOS/Android mobile phones
- Settings -> Backup and Sync -> `LAN Sync`
- Exporter -> Option `Sync to others` will generate a QR code
- Importer -> Option `Scan QR code to sync`

## Solution 3: File import/export
- Settings -> Backup and sync -> LAN sync -> `File import/export`