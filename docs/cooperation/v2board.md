---
title: V2Board
---

# 修改V2Board代码 在karing菜单中显示机场信息

## 物料
- V2Board: [1.7.4](https://github.com/v2board/v2board/releases/tag/1.7.4)
- 通过添加isp信息 karing会为您:
  - 设置页展示机场信息(入口)
  - 订阅服务到期提醒


## 修改代码
- karing支持clash、clash.meta、v2ray、shadowsocks等订阅格式
  - 这里偷懒, 仅修改`ClientController.php`一个文件

- 文件:
  - app/Http/Controllers/Client/ClientController.php

- 在调用handle并die之前添加三行`isp-`开头的信息

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
            header("isp-name: {$appName}");
            header("isp-url: {$appURL}/#/plan");
            header("isp-faq: {$appURL}/#/knowledge");

            // ...

            die($class->handle());
        }
    }

```

- **提示**:
  - 代码修改保存之后, 请reload php-fpm进程, 防止opcode缓存影响调试
  - 一定要通过调试工具检查一下 isp-url 和 isp-faq 是您设置的地址

### 最终效果
- 调试信息:
  - ![debug](./img/cpr-3.png)

- 设置菜单
  - ![menu](./img/cpr-1.png)

