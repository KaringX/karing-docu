---
sidebar_position: 6
title: Пример V2Board
---

# Изменение V2Board для интеграции с Karing

### Материалы

- V2Board 1.7.4: https://github.com/v2board/v2board/releases/tag/1.7.4
- karing-connect: [https://github.com/KaringX/karing-connect](https://github.com/KaringX/karing-connect/tree/main/v2board)
  - Содержит файлы, изменяемые в этом примере

### Видео-пример

- Заклинание: `v2board`
- Страница подключения провайдера: `http://v2board.local/karing-connect.html`
- Демонстрация:
- <video controls width="320">
    <source src="/videos/v2board-1.mp4" type="video/mp4" />
    Ваш браузер не поддерживает HTML5-видео.
  </video>

## Вариант A: быстрая привязка Karing {#shortcut}

- Karing уже содержит код автоматической привязки для последних версий(>=2024.1) sspanel, v2board, xboard. Достаточно выбрать соответствующую систему в поле системы.
  - В этом варианте не нужно менять систему панели и добавлять страницу подключения; в параметр `connect` достаточно указать URL входа на сайт.
  - ![panel system](./img/set-spell-3.png)
- Если после выбора системы панели и тестирования привязка не завершается, выберите “Other” и попробуйте **вариант B**

## Вариант B: привязка Karing через заклинание {#spell}

### Идея

- **Дисклеймер**: автор не является специалистом по v2board и frontend, пример сделан по личной логике.
  - Если есть лучший способ, пожалуйста, поделитесь им: отправьте [connect issue](https://github.com/KaringX/karing-connect/issues) или свяжитесь с автором [@elon](https://t.me/ElonWang)
- Сначала Karing APP открывает промежуточную страницу `karing-connect.html`
  - Устанавливает cookie `karing=connect` как метку входа подключения Karing
  - Переходит на `/#/login`
- Затем открывается frontend-страница v2board и загружается пользовательский JS-файл `custom.js`
  - 1 Проверяет, находится ли страница в webview-контейнере Karing и есть ли cookie-метка
  - 2 Проверяет, вошел ли текущий пользователь
  - 3 Загружает JS-файл интеграции `karing.js`
  - 4 Вызывает backend API `/api/v1/user/getSubscribe`, чтобы получить информацию пользователя и ссылку подписки
  - 5 Вызывает метод `_karing` для импорта информации пользователя
- В конце Karing APP получает информацию, проверяет ее и завершает привязку провайдера.

### Первый шаг: система v2board

- Добавьте два файла в каталог v2board
  - custom.js: [`public/theme/v2board/assets/custom.js`](https://github.com/KaringX/karing-connect/blob/main/v2board/custom.js)
  - karing-connect.html: [`public/karing-connect.html`](https://github.com/KaringX/karing-connect/blob/main/v2board/karing-connect.html)
  - _Примечание_: если используете другую тему, замените `theme/v2board` в пути custom
  - Актуальный адрес файлов: - https://github.com/KaringX/karing-connect/tree/main/v2board

#### Описание custom.js

- custom загружает удаленный файл `karing.min.js`
  - Также можно скачать исходный файл с GitHub и развернуть самостоятельно.
  - Кроме имени интерфейса, разработанного Karing, остальные части можно менять под свои задачи.
  - Исходный файл не зашифрован и содержит комментарии.
    - https://github.com/KaringX/karing-connect/blob/main/karing.js
- Параметр debug в файле по умолчанию false. Если установить true:
  - В терминал выводятся логи
  - Не проверяется наличие объекта window.karing, процесс симулируется напрямую
    - В итоге будет ошибка: импорт конфигурации не удался.

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

 	"connet": "https://your-domain/karing-connect.html",
    "spells": [
        '急速云',
        'RapidNetwork',
    ],
    ...
}
```

### В конце: тест привязки

- Karing APP -> Настройки -> ISP/привязка провайдера -> введите заклинание -> войдите в v2board -> привязка завершена

## Вариант C: отображение информации провайдера через ссылку подписки {#link}

- **Напоминание**: если вы уже завершили подключение к Karing, например настроили файл `base.json`, изменения ссылки подписки ниже не обязательны.

- При добавлении isp-информации Karing сможет:
  - Показывать информацию провайдера(вход) на странице настроек
  - Напоминать об окончании подписки

### Изменение кода

- Karing поддерживает форматы подписок clash, clash.meta, v2ray, shadowsocks и другие
  - Здесь для простоты изменяется только один файл `ClientController.php`

- Файл:
  - app/Http/Controllers/Client/ClientController.php

- Перед вызовом handle и die добавьте три строки с префиксом `isp-`

```jsx title="app/Http/Controllers/Client/ClientController.php"
class ClientController extends Controller
{
    public function subscribe(Request $request)
    {
        // ...

        $userService = new UserService();
        if ($userService->isAvailable($user)) {
            $serverService = new ServerService();
            $servers = $serverService->getAvailableServers($user);
            $this->setSubscribeInfoToServers($servers, $user);

            // for karing
            $appName = config('v2board.app_name', 'V2Board');
            $appURL = config('v2board.app_url');
            header("isp-name: " . urlencode($appName));
            header("isp-url: " . urlencode($appURL . '/#/plan'));
            header("isp-faq: " . urlencode($appURL . '/#/knowledge'));

            // ...

            die($class->handle());
        }
    }

```

- **Подсказка**:
  - После сохранения изменения кода перезагрузите процесс php-fpm, чтобы opcode-кеш не мешал отладке
  - Обязательно проверьте через инструмент отладки, что isp-url и isp-faq являются нужными адресами
  - Если app_name содержит китайский, нужно использовать urlencode

### Итоговый результат

- Отладочная информация:
  - ![debug](./img/cpr-3.png)

- Меню настроек
  - ![menu](./img/cpr-1.png)
