---
title: Settings
sidebar_position: 2
---

### Beginner mode: If you are not familiar with Karing, it is recommended to turn on this switch. There are several differences from non-beginner mode
- The functions are more streamlined, advanced functions are hidden, and advanced functions will not take effect (even if other advanced functions are enabled in non-beginner mode)
- Protocol sniffing is forced to turn on

### ISP (Airport): Display the ISP information of the first configuration related information in the [My Configuration] list
- Name: ISP (Airport), click to open the ISP settings webpage
- FAQ: ISP (Airport), click to open the FAQ webpage provided by the ISP
- Clear ISP information: Clear the ISP information

### Notification: Karing official notification display

### Online panel: Web version core allows status panel (not supported by IOS)

### DNS leak detection: Detect whether there is a DNS leak. This function is limited by the detection capabilities provided by the specific detection page and the influence of the diversion rules. It is not very accurate and is only for reference

### Text to QR code: Tool to convert text to QR code

### Speed ​​test URL: Set the URL for speed test on [Home screen]

### Delay detection URL: URL for testing node delay. Some proxy nodes have poor support for Karing's default delay detection. Users can change this URL to other URLs according to actual conditions

### Prioritize proxy download configuration: When the connection is turned on, prioritize [Current Selection] to download/update configuration

### Port: View relevant proxy/control port information

### IPv6: IPv6 settings. Before turning on IPv6, please confirm that the connected network and device support IPv6, otherwise it will cause some network access abnormalities

### NTP: Network time synchronization. Some proxy protocols use system time to participate in encryption and decryption. Incorrect system time will cause encryption and decryption errors, which will cause the proxy node to be unable to connect normally; it is recommended to correct the system time. This function is generally not recommended to be turned on

### TUN:
- Application proxy: Only supported on Android. Other platforms do not provide this function due to system restrictions
- You need to start Karing as an administrator on Windows to use this function

### TLS: tls security enhancement, only supports proxy protocols with TLS enabled

### Mux: Multiplexing, distributing data from multiple TCP connections on a TCP connection, can improve network performance, requires proxy server support

### Protocol detection: Detect the protocol used by network requests, this function affects diversion

### WARP
- License: After setting, newly added warp nodes without license will be bound to this License.

### Network sharing: Use the device where Karing is located as a Socks proxy server for other devices to access the network

### Always open connection (IOS/MacOS/TvOS):
- After turning on this switch, you cannot turn off the VPN by clicking the VPN switch in the system. You need to go to the VPN details to turn off [Connect on demand] or disconnect in Karing; when you disconnect in Karing, the [Connect on demand] in the system will also be invalid
- After turning on this switch, when the VPN background process exits due to abnormal reasons, the system will automatically start the VPN background process through [Connect on demand] (if the startup fails, please go to Karing to connect manually)