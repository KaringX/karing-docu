---
title: SSPanel-Uim
---

# 修改SSPanel-Uim代码 在karing菜单中显示机场信息

## 物料
- SSPanel-Uim: [2024.1](https://github.com/Anankke/SSPanel-UIM/releases/tag/2024.1)
- 通过添加isp信息 karing会为您:
  - 设置页展示机场信息(入口)
  - 订阅服务到期提醒

## 修改代码
- 文件: src/Controllers/SubController.php
- 在返回return response中添加三行`isp-`开头的信息
```php
 public function index($request, $response, $args): ResponseInterface
    {
        //...省略

        return $response->withHeader('Subscription-Userinfo', $sub_details)
            ->withHeader('Content-Type', $content_type)
            // for karing
            ->withHeader('isp-name', $_ENV['appName'])
            ->withHeader('isp-url', $_ENV['baseUrl'] . '/user/product')
            ->withHeader('isp-faq', $_ENV['baseUrl'] . '/user/user');
            ->write($sub_info);
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


