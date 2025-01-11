---
sidebar_position: 10
---
# URL Scheme

## Open system call monitoring
- Settings -> `System Scheme Call` -> Open the required project, default monitoring
- `karing://`
- `clash://`

## Scheme format
- **Note:**
- Parameters must be urlencoded
- Format:
```jsx
# Add configuration
clash://install-config?url=xxxx&name=xxx
karing://install-config?url=xxxx&name=xxx&isp-name=xxx&isp-faq=xxx&isp-url=xxx
# Backup and restore
karing://restore-backup?url=xxxx

# Connection operation
karing://connect Open connection
karing://disconnect Disconnect
karing://reconnect Reconnect
```