---
title: 绿色U盘版
---

# 制作便携U盘karing
- 仅限 Windows 版本
- 方便把karing放到USB随身携带

## 步骤
- 设置 -> 开启 `便携模式` -> karing会自动退出
  - 退出时会把配置文件移动至 程序安装目录下的 **profiles**
- 再次启动karing, 即便携模式
- 如需转移至USB设备, 退出karing, 把安装目录整个拷贝即可.

### 另一个方法
- karing.exe添加启动参数 `--enable_portable_path`
- 启动后将会使用 `karing.exe` 所在目录创建配置文件目录

