---
sidebar_position: 2
---

# ISP与机场菜单

### ISP开放
- isp-name: isp(机场等)名称,展示在设置-第一行[必填]
- isp-url: 用户点击isp-name时候会跳转到isp-url[必填]
- isp-faq: isp自定义FAQ URL,展示在设置-第二行,用户点击会跳转到对应的URL
- isp-name,isp-faq,isp-url设置有两种方式:
  - 订阅请求返回的http头分开添加上述三个属性
  - karing://install-config?url=xxxx&name=xxx&isp-name=xxx&isp-faq=xxx&isp-url=xxx(xxx为urlencode后的参数)
- 展示优先级:
  - 通过 karing://install-config 设置的isp信息,如果没有,则继续
  - 按照用户订阅配置排序,找到第一条有有效isp信息的配置并展示

