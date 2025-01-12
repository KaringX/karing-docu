---
sidebar_position: 8
title: 案例 Xboard
---

# 修改XBoard与Karing实现互通

### 物料
- Xboard 0.1.1-dev: https://github.com/cedar2025/Xboard
  - Xboard是基于V2board二次开发，在性能上和功能上都有大部分增强的xx面板
- karing-connect: [https://github.com/KaringX/karing-connect](https://github.com/KaringX/karing-connect/tree/main/xboard)
  - 包含本案例涉及修改的文件
  - 本案custom.js文件根据v2board案例修改而来, 主要集中在
    - html元素对象名
    - Authorization获取路径

## 方案A 通过咒语绑定karing {#spell}
### 视频案例
- 咒语: `xboard`
- 机场连接页: `http://xboard.local/karing-connect.html`
- 演示:
-
  <video controls width="320">
    <source src="/videos/xboard-1.mp4" type="video/mp4" />
    您的浏览器不支持 HTML5 视频。
  </video>


### 思路
- **先叠个甲**: 本人对xboard/v2board不熟悉, 非前端, 仅按个人思路做的案例.
  - 如果有更好的方法, 麻烦不吝啬赐教, 提交[connect issue](https://github.com/KaringX/karing-connect/issues) 或联系本人[@elon](https://t.me/ElonWang)
- 首先，karing APP进入一个中间页 `karing-connect.html`
  - 设置cookie `karing=connect` 作为karing连接入口的标记
  - 跳转至 `/#/login`
- 然后, 进入Xboard前台页面, 载入自定义js文件 `custom.js`
  - 1 判断是否正在karing webview容器中, 并且存在cookie标记
  - 2 判断当前用户是否登录
  - 3 载入对接js文件 `karing.js`
  - 4 调用后台api `/api/v1/user/getSubscribe` 获取用户信息和订阅链接
  - 5 调用 `_karing` 方法导入用户信息
- 最后, Karing APP 接到信息, 验证并完成机场绑定.


### 前置 Xboard的配置
- 本地案例使用推荐的 docker-compose 安装: [Docker Compose 纯命令行快速部署]( https://github.com/cedar2025/Xboard/blob/dev/docs/docker-compose%E5%AE%89%E8%A3%85%E6%8C%87%E5%8D%97.md)
  - version: 0.1.1-dev
  - image: ghcr.io/cedar2025/xboard:latest
- Xboard运行于webman
- 容器共享目录 `.docker/.data:/var/www/.docker/.data`

### 第一步 v2board 系统
#### 1.1 添加新文件
- 在Xboard目录下增加两个文件
- custom.js: [`public/theme/Xboard/assets/custom.js`](https://github.com/KaringX/karing-connect/blob/main/xboard/custom.js)
- karing-connect.html:  [`public/karing-connect.html`](https://github.com/KaringX/karing-connect/blob/main/xboard/karing-connect.html)
	- *注意* 如果您使用其他主题, 注意替换custom路径中的 `theme/Xboard`
  - 最新文件地址:
    	- https://github.com/KaringX/karing-connect/tree/main/xboard

#### 1.2 custom.js生效
- 默认Xboard主题主题不判断载入 `custom.js`, 这里提供两种方法载入.
##### 方法1 修改dashboard.blade.php
- 在 [`public/theme/Xboard/dashboard.blade.php`](https://github.com/KaringX/karing-connect/blob/main/xboard/dashboard.blade.php) 底部 body之上添加判断语句:

```jsx title="/www/public/theme/Xboard/dashboard.blade.php"
... ...

  @if (request()->cookie('karing') === 'connect')
      @if (file_exists(public_path("/theme/{$theme}/assets/custom.js")))
        <script src="/theme/{{$theme}}/assets/custom.js?v={{$version}}"></script>
      @endif
  @endif
</body>

... ...

```

##### 方法2 管理员后台修改主题配置
- 登录Xboard管理员后台
- 主题设置 - Xboard - 主题设置 - 自定义页脚HTML
- 把`custom.js`的 script标签代码块填入其中即可

- *tip*: 本案采用第一种方法, 虽然有代码修改, 优点在于没走绑定karing流程时, 并不载入js

#### 1.3 custom.js 说明
- custom会载入一个远程文件 `karing.min.js`
  - 也可在GitHub下载原始文件 并自主部署.
  - 除了karing开发的接口名是固定的, 其他皆可按自己需求修改.
  - 原始文件无加密, 未删注释.
    - https://github.com/KaringX/karing-connect/blob/main/karing.js
- 文件中参数 debug 默认false, 设置为true时:
  - 终端打印日志
  - 不判断 window.karing 对象是否存在, 直接模拟走一遍流程
    - 最终会报错: 导入配置失败.


### 第二步 harry.karing.app 后台
- 修改配置文件 `base.json`
    - *connect* 字段
    - 咒语 *spells* 字段, 推荐使用机场名称.
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

### 最后 测试绑定
- Karing APP -> 设置 -> ISP/机场绑定 -> 填入咒语 -> 登录Xboard -> 完成绑定

