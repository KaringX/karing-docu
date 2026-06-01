---
sidebar_position: 10
---

# URL Scheme

## Включение прослушивания системных вызовов

- Настройки -> `Системный Scheme-вызов` -> включите нужные пункты, прослушивание по умолчанию
  - `karing://`
  - `clash://`

## Формат Scheme

- **Примечание:**
  - Параметры должны быть urlencode
- Формат:

```jsx
# Добавить конфигурацию
clash://install-config?url=xxxx&name=xxx
karing://install-config?url=xxxx&name=xxx&isp-name=xxx&isp-faq=xxx&isp-url=xxx
# Восстановление резервной копии
karing://restore-backup?url=xxxx

# Операции подключения
karing://connect      включить подключение
karing://disconnect   отключить подключение
karing://reconnect    переподключиться
```
