---
title: SSPanel-Uim
sidebar_position: 3
---

# Modify SSPanel-Uim code to display airport information in the karing menu

## Materials
- SSPanel-Uim: [2024.1](https://github.com/Anankke/SSPanel-UIM/releases/tag/2024.1)
- By adding isp information, karing will:
- Display airport information on the settings page (entrance)
- Subscription service expiration reminder

## Modify code
- File: src/Controllers/SubController.php
- Add three lines of information starting with `isp-` in the return response
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
- **Tip**:
- After the code modification is saved, please reload the php-fpm process to prevent the opcode cache from affecting debugging
- Be sure to use the debugging tool to check that isp-url and isp-faq are the addresses you set
- If appName contains Chinese, urlencode must be used

### Final effect
- Debug information:
- ![debug](./img/cpr-3.png)

- Set menu
- ![menu](./img/cpr-1.png)