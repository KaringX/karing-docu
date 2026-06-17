# Karing Android 自动化接入

本文档说明如何让第三方自动化应用（如 Tasker、MacroDroid、Automate）在 Android 上调用 Karing 实现连接、断开和重连。

## 支持的调用方式

Karing 当前支持两类外部调用：

1. 广播动作（推荐）
2. Deep Link / Activity 启动参数（兼容）

## 方式一：广播动作（推荐）

### 可用 Action (>=1.2.20.2306)

- `com.nebula.karing.action.CONNECT`
- `com.nebula.karing.action.DISCONNECT`
- `com.nebula.karing.action.RECONNECT`

### adb 测试命令

```bash
adb shell am broadcast -a com.nebula.karing.action.CONNECT -p com.nebula.karing
adb shell am broadcast -a com.nebula.karing.action.DISCONNECT -p com.nebula.karing
adb shell am broadcast -a com.nebula.karing.action.RECONNECT -p com.nebula.karing
```

说明：

- `-p com.nebula.karing` 用于指定目标包名，避免被其他应用拦截。
- 推荐在自动化工具中使用“发送广播 / Send Broadcast Intent”实现。

## 方式二：Deep Link（兼容）

### 可用 URL

- `karing://connect`
- `karing://disconnect`
- `karing://reconnect`

### adb 测试命令

```bash
adb shell am start -a android.intent.action.VIEW -d "karing://connect"
adb shell am start -a android.intent.action.VIEW -d "karing://disconnect"
adb shell am start -a android.intent.action.VIEW -d "karing://reconnect"
```

## 方式三：显式启动 Activity 并传 command（兼容）

### 可用 command

- `connect`
- `disconnect`
- `reconnect`

### adb 测试命令

```bash
adb shell am start -n com.nebula.karing/.MainActivity --es command connect
adb shell am start -n com.nebula.karing/.MainActivity --es command disconnect
adb shell am start -n com.nebula.karing/.MainActivity --es command reconnect
```

## Tasker / MacroDroid 配置建议

### Tasker

推荐动作：`Send Intent`

- Action: `com.nebula.karing.action.CONNECT`（或 DISCONNECT / RECONNECT）
- Cat: 留空
- Mime Type: 留空
- Data: 留空
- Extra: 留空
- Package: `com.nebula.karing`
- Class: 留空
- Target: `Broadcast Receiver`

### MacroDroid

推荐动作：`发送 Intent`

- Intent Action: `com.nebula.karing.action.CONNECT`（或 DISCONNECT / RECONNECT）
- 目标包名: `com.nebula.karing`
- Intent 类型: 广播

## 使用前提与注意事项

1. 首次连接时，Android 可能弹出 VPN 授权对话框，需要用户手动确认一次。
2. 若系统开启了严格省电/后台限制，自动化触发可能被延迟，建议将 Karing 加入电池优化白名单。
3. 某些 ROM 对后台启动限制更严格，优先使用广播动作，不建议仅依赖界面拉起。
4. 若你有多用户/工作资料夹环境，请确保自动化工具与 Karing 安装在同一用户空间。

## 故障排查

1. 用 adb 先验证命令是否可触发，再迁移到自动化工具。
2. 确认包名是否为 `com.nebula.karing`。
3. 确认 Karing 已安装且至少打开过一次。
4. 若 CONNECT 无效，先手动在 Karing 中连接一次，完成 VPN 授权后再测自动化。
