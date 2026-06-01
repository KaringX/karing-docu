---
sidebar_position: 7
title: Пример SSPanel
---

# Изменение SSPanel для интеграции с Karing

### Материалы

- SSPanel-Uim 2024.1: https://github.com/Anankke/SSPanel-UIM/releases/tag/2024.1
- karing-connect: [https://github.com/KaringX/karing-connect](https://github.com/KaringX/karing-connect/tree/main/sspanel)
  - Содержит файлы, изменяемые в этом примере

## Вариант A: быстрая привязка Karing {#shortcut}

- Karing уже содержит код автоматической привязки для последних версий(>=2024.1) sspanel, v2board, xboard. Достаточно выбрать соответствующую систему в поле системы.
  - В этом варианте не нужно менять систему панели и добавлять страницу подключения; в параметр `connect` достаточно указать URL входа на сайт.
  - ![panel system](./img/set-spell-3.png)
- Если после выбора системы панели и тестирования привязка не завершается, выберите “Other” и попробуйте **вариант B**

## Вариант B: привязка Karing через заклинание {#spell}

### Идея

- Сначала Karing APP открывает промежуточную страницу `/karing/connect`
  - Устанавливает cookie `redir=/karing/connect` как адрес возврата
  - Переходит на `/auth/login`
- Затем пользователь входит в sspanel
  - 1 Возврат на `/karing/connect`, то есть KaringController
  - 2 Проверка, что пользователь вошел
  - 3 Получение информации пользователя и ссылки подписки
  - 4 response выводит view
  - 5 JS во view вызывает метод `_karing` для импорта информации пользователя
- В конце Karing APP получает информацию, проверяет ее и завершает привязку провайдера.

### Первый шаг: система sspanel

- 1 Добавить controller
  - Создайте новый контроллер для обработки подключения Karing
  - Добавьте файл `src/Controllers/KaringController.php`
  - Актуальный адрес файла: - https://github.com/KaringX/karing-connect/blob/main/sspanel/KaringController.php

- 2 Добавить маршрут
  - Измените файл `app/routes.php`, добавьте маршрут в конец

```php
    // Connect to Karing
    $app->get('/karing/connect', App\Controllers\KaringController::class . ':connect');

```

- 3 Соответствующая ссылка входа:
  - https://your-domain/karing/connect

### Второй шаг: панель harry.karing.app

#### Способ 1: быстрая настройка заклинания

- Войдите в harry, список провайдеров, нажмите кнопку `Настроить заклинание`.
  - ![button](./img/set-spell-1.png)
- Настройте заклинание и connect url
  - ![setting](./img/set-spell-2.png)

#### Способ 2: изменить конфигурационный файл `base.json`

- Поле _connect_
- Поле заклинаний _spells_, рекомендуется использовать имя провайдера.

```js
{
    "pid": 123456,
 	...

 	"connet": "https://your-domain/karing/connect",
    "spells": [
        '急速云',
        'RapidNetwork',
    ],
    ...
}
```

### В конце: тест привязки

- Karing APP -> Настройки -> ISP/привязка провайдера -> введите заклинание -> войдите в sspanel -> привязка завершена

## Вариант C: отображение информации провайдера через ссылку подписки {#link}

- **Напоминание**: если вы уже завершили подключение к Karing, например настроили файл `base.json`, изменения ссылки подписки ниже не обязательны.

- При добавлении isp-информации Karing сможет:
  - Показывать информацию провайдера(вход) на странице настроек
  - Напоминать об окончании подписки

### Изменение кода

- Файл: src/Controllers/SubController.php
- В return response добавьте три строки с префиксом `isp-`

```jsx title="src/Controllers/SubController.php"
 public function index($request, $response, $args): ResponseInterface
    {
        //...

        return $response->withHeader('Subscription-Userinfo', $sub_details)
            ->withHeader('Content-Type', $content_type)
            // for karing
            ->withHeader('isp-name', urlencode($_ENV['appName']))
            ->withHeader('isp-url', urlencode($_ENV['baseUrl'] . '/user/product'))
            ->withHeader('isp-faq', urlencode($_ENV['baseUrl'] . '/user/user'));
            ->write($sub_info);
    }
```

- **Подсказка**:
  - После сохранения изменения кода перезагрузите процесс php-fpm, чтобы opcode-кеш не мешал отладке
  - Обязательно проверьте через инструмент отладки, что isp-url и isp-faq являются нужными адресами
  - Если appName содержит китайский, нужно использовать urlencode

### Итоговый результат

- Отладочная информация:
  - ![debug](./img/cpr-3.png)

- Меню настроек
  - ![menu](./img/cpr-1.png)
