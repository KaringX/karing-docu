---
sidebar_position: 7
title: 案例 SSPanel
---

# 修改SSPanel与Karing实现互通
### 物料
- SSPanel-Uim 2024.1: https://github.com/Anankke/SSPanel-UIM/releases/tag/2024.1
- karing-connect: [https://github.com/KaringX/karing-connect](https://github.com/KaringX/karing-connect/tree/main/sspanel)
  - 包含本案例涉及修改的文件

## 方案A 通过咒语绑定karing {#spell}
### 思路
- 首先，karing APP进入一个中间页 `/karing/connect`
  - 设置cookie `redir=/karing/connect` 作为返回地址
  - 跳转至 `/auth/login`
- 然后, 用户登录sspanel
  - 1 返回 `/karing/connect` 即 KaringController
  - 2 判断当前用户已登录
  - 3 获取用户信息 和 订阅链接
  - 4 response输出视图
  - 5 视图中js调用 `_karing` 方法导入用户信息
- 最后, Karing APP 接到信息, 验证并完成机场绑定.


### 第一步 sspanel 系统
- 1 添加controller
    - 新建控制器用于处理Karing连接
	- 添加文件 `src/Controllers/KaringController.php`
	- 最新文件地址:
    	- https://github.com/KaringX/karing-connect/blob/main/sspanel/KaringController.php

- 2 添加路由
	- 修改文件 `app/routes.php` 最后加入一条路由
```php
    // Connect to Karing
    $app->get('/karing/connect', App\Controllers\KaringController::class . ':connect');

```
- 3 对应的登录连接即
	- https://your-domain/karing/connect

### 第二步 harry.karing.app 后台
- 修改配置文件 `base.json`
    - *connect* 字段
    - 咒语 *spells* 字段, 推荐使用机场名称.
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

### 最后 测试绑定
- Karing APP -> 设置 -> ISP/机场绑定 -> 填入咒语 -> 登录sspanel -> 完成绑定



## 方案B 通过订阅链接展示机场信息 {#link}
- **提醒** 如果您已经完成与karing的连接, 比如配置了 `base.json` 文件, 则以下订阅链接的修改并不是必要的.


- 通过添加isp信息 karing会为您:
  - 设置页展示机场信息(入口)
  - 订阅服务到期提醒

### 修改代码
- 文件: src/Controllers/SubController.php
- 在返回return response中添加三行`isp-`开头的信息
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
- **提示**:
  - 代码修改保存之后, 请reload php-fpm进程, 防止opcode缓存影响调试
  - 一定要通过调试工具检查一下 isp-url 和 isp-faq 是您设置的地址
  - 如果appName包含中文, 必须使用urlencode


### 最终效果
- 调试信息:
  - ![debug](./img/cpr-3.png)

- 设置菜单
  - ![menu](./img/cpr-1.png)


