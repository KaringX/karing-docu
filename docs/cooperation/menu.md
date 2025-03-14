---
sidebar_position: 2
title: 集成机场菜单
---

# 集成机场(ISP)菜单
- 如果您仅想看一眼效果, 请跳转至 [菜单截图](#demo)

将ISP(机场)链接与karing菜单集成, 可解决以下问题:
1. 用户添加配置之后, 到期续费将被提醒, 增加复购;
2. 当ISP(机场)**域名失效**、被wall封禁banned等, 直接修改订阅链接header信息, 即能更新入口
   - 用户无感知
3. 在karing - 设置 页显示机场信息有两种方案:
   - 方案A 在`harry.karing.app` 进行配置, 最终用户以`咒语`的方式跳转至机场登录页, 登录成功即导入配置并显示机场信息.
   - 方案B 通过修改机场`订阅链接`的`HEADER头`, 加入信息内容.
   - 两种方案相辅相成, 各有优劣, 从用户体验以及机场品牌的角度, 推荐*方案A*
   - 但B方案也许更加通用, 以下将进行说明的是 **方案B**


### 一、案例 机场管理面板
- 如果您的系统在以下列表中, 请直接看配置步骤
- [案例展示 SSPanel-Uim](./sspanel.md#link)
- [案例展示 V2Board](./v2board.md#link)


## 二、演示
### 设置菜单 {#demo}
- 在karing - 设置菜单 - 顶部显示 `机场名称`、`服务到期时间`、`机场FAQ`
- 用户可点击 `机场名称` 进入机场续费or订购新套餐
- 如下图: ![menu](./img/cpr-1.png)

### 服务到期提醒
- 当用户服务到期时间小于7天, 则显示红字的<font color='red'>到期提示</font>

- 用户可点击 红字的<font color='red'>到期时间</font> 进入机场续费
- 如下图:
  - ![expiration reminder](./img/cpr-4.png)
  - ![click to isp](./img/cpr-5.png)



## 三、设置逻辑
- 以下由两种方案, 推荐修改header的方式, 代码侵入比较小。

### 方案1 修改HTTP 标头（header）
- 在订阅链接的 HTTP响应（response）中加入四个*响应标头*
  - (必填) **Subscription-Userinfo**
    - 用于显示用户 已上传、下载、总共多少流量，套餐什么时候到期
    - `upload= ; download= ; total= ; expire= ;`
  - (必填) **isp-name**: 您的服务名称(机场名字)
    - 展示在 设置 - ISP - 第一行
    - 如果isp-name包含非ASCII字符(比如:中文), 必须使用urlencode
  - (必填) **isp-url**: 用户点击isp-name时跳转的URL
  - (可选) *isp-faq*: 您服务的FAQ URL
    - 展示在 设置 - ISP - 第二行
- 修改后, 通过调试工具可显示, 如下图:
  - ![header](./img/cpr-3.png)

### 方案2 自定义URL Scheme
- karing支持通过scheme唤起karing的`添加配置`页面, 您可把`自动导入karing`的链接改成下面的形式
```html
<a href="karing://install-config?url=xxxx&name=xxx&isp-name=xxx&isp-url=xxx&isp-faq=xxx">自动导入karing</a>
```
- 注意:
  - url 必须通过urlencode转义


### 展示优先级
1. 默认设置 - ISP菜单仅展示一个ISP信息
   - 用户有多个订阅配置的情况下, 按照排序, 展示第一条有有效isp信息
2. scheme的优先级高于header
   - 即首先会展示通过 karing://install-config 设置的isp信息, 如没有,则再判断response header

## 四、和karing进行合作
- 点击进入👉 [联系方式与合作形式](/blog/isp/cooperation)
