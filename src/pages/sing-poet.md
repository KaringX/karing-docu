---
title: sing-poet - 基于sing-box的机场集成后端案例
description: 机场后端服务器, sing-box
# hide_table_of_contents: true
---
# sing-poet
- Using sing-box as the backend server for VPN service providers
- 使用 sing-box 作为 VPN 服务提供商（机场）的后端服务器。
- 使用 XrayR项目代码作为联通panel系统的中枢.
- 支持:
    - 协议: sing-box支持的所有协议，参看 https://sing-box.sagernet.org/configuration/inbound/
    - 面板: 理论上XrayR支持的面板，都可以修改一点代码进行支持。
- 注意: 本项目仅当案例及练手之用，不保证稳定性及安全性。


## GitHub
- code: https://github.com/KaringX/sing-poet
- examples: https://github.com/KaringX/sing-poet/tree/poet/release/poet





## Documentation

### 使用步骤

1. 编译
```bash
#修改编译参数 TAGS_POET2
vim Makefile

#自动编译安装
bash release/poet/build_linux.sh
```

2. 配置
- 服务器配置案例 release/poet/server_vmess.json
- 面板配置案例   release/poet/panel_vmess.json

3. 启动
```bash
mv release/poet/test/sing-poet /usr/local/bin/sing-poet
chmod +x /usr/local/bin/sing-poet

#使用配置文件启动
sudo /usr/local/bin/sing-poet run -c server_vmess.json -p panel_vmess.json

```

4. systemd配置
- 服务配置案例: `release/poet/sing-poet.service`

```bash
#启动
systemctl start sing-poet

#停止
systemctl stop sing-poet

#重启
systemctl restart sing-poet
```
5. 查看日志
- 使用 **lumberjack** 进行日志轮换和管理
- 配置参考案例文件 `server_vmess.json` 中的`log`选项
```bash
#查看日志
tail -f /var/log/sing-poet.log
```




### 文档地址
 https://karing.app/sing-poet


## 鸣谢
- [sing-box](https://github.com/SagerNet/sing-box)
- [XrayR](https://github.com/XrayR-project/XrayR)
