# Karing Android Automation Integration

This document explains how to enable third-party automation applications (such as Tasker, MacroDroid, and Automate) to call Karing on Android to connect, disconnect, and reconnect.

## Supported Call Methods

Karing currently supports two types of external calls:

1. Broadcast Actions (Recommended)

2. Deep Link / Activity Launch Parameters (Compatible)

## Method 1: Broadcast Actions (Recommended)

### Available Actions (>=1.2.20.2306)

- `com.nebula.karing.action.CONNECT`

- `com.nebula.karing.action.DISCONNECT`

- `com.nebula.karing.action.RECONNECT`

### adb Test Commands

```bash
adb shell am broadcast -a com.nebula.karing.action.CONNECT -p com.nebula.karing
adb shell am broadcast -a com.nebula.karing.action.DISCONNECT -p com.nebula.karing
adb shell am broadcast -a com.nebula.karing.action.RECONNECT -p com.nebula.karing

```

Explanation:

- `-p com.nebula.karing` specifies the target package name to prevent interception by other applications.

- It is recommended to use "Send Broadcast Intent" in automation tools.

## Method 2: Deep Link (Compatible)

### Available URLs

- `karing://connect`

- `karing://disconnect`

- `karing://reconnect`

### adb Test Commands

```bash
adb shell am start -a android.intent.action.VIEW -d "karing://connect"

adb shell am start -a android.intent.action.VIEW -d "karing://disconnect"

adb shell am start -a android.intent.action.VIEW -d "karing://reconnect"

```

## Method 3: Explicitly Launch Activity and Pass Command (Compatible)

### Available Commands

- `connect`

- `disconnect`

- `reconnect`

### adb Test Commands

```bash
adb shell am start -n com.nebula.karing/.MainActivity --es command connect

adb shell am start -n com.nebula.karing/.MainActivity --es command disconnect
adb shell am start -n com.nebula.karing/.MainActivity --es command reconnect

```

## Tasker / MacroDroid Configuration Recommendations

### Tasker

Recommended Action: `Send Intent`

- Action: `com.nebula.karing.action.CONNECT` (or DISCONNECT / RECONNECT)

- Cat: Leave blank

- Mime Type: Leave blank

- Data: Leave blank

- Extra: Leave blank

- Package: `com.nebula.karing`

- Class: Leave blank

- Target: `Broadcast Receiver`

### MacroDroid

Recommended Action: `Send Intent`

- Intent Action: `com.nebula.karing.action.CONNECT` (or DISCONNECT / RECONNECT)

- Target Package Name: `com.nebula.karing`

- Intent Type: Broadcast

## Prerequisites and Precautions

1. Upon initial connection, Android may display a VPN authorization dialog box, requiring manual confirmation from the user.

2. If strict power saving/background restrictions are enabled, automation triggering may be delayed. It is recommended to add Karing to the battery optimization whitelist.

3. Some ROMs have stricter restrictions on background startup; prioritize broadcast actions and do not rely solely on UI-based launches.

4. If you have a multi-user/work folder environment, ensure the automation tool and Karing are installed in the same user space.

## Troubleshooting

1. Use adb to verify command triggering before migrating to the automation tool.

2. Confirm the package name is `com.nebula.karing`.

3. Confirm Karing is installed and has been opened at least once.

4. If CONNECT fails, manually connect in Karing once to complete VPN authorization before testing automation.