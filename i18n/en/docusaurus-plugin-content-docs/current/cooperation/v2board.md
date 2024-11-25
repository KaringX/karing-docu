---
title: V2Board
sidebar_position: 4
---

# Modify V2Board code to display airport information in the karing menu

## Materials
- V2Board: [1.7.4](https://github.com/v2board/v2board/releases/tag/1.7.4)
- By adding isp information, karing will:
- Display airport information on the settings page (entrance)
- Subscription service expiration reminder

## Modify code
- Karing supports subscription formats such as clash, clash.meta, v2ray, shadowsocks, etc.
- Here I am lazy and only modify one file `ClientController.php`

- File:
- app/Http/Controllers/Client/ClientController.php

- Add three lines of information starting with `isp-` before calling handle and die

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

- **Tip**:
- After saving the code modification, please reload the php-fpm process to prevent the opcode cache from affecting debugging
- Be sure to use the debugging tool to check that isp-url and isp-faq are the addresses you set
- If app_name contains Chinese characters, urlencode must be used

### Final effect
- Debug information:
- ![debug](./img/cpr-3.png)

- Set menu
- ![menu](./img/cpr-1.png)