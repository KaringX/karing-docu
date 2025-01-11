---
sidebar_position: 2
---

# Integrate ISP menu
Integrating ISP (airport) link with karing menu can solve the following problems:
- 1. After the user adds configuration, the renewal will be reminded, increasing repeat purchases;
- 2. When the ISP (airport) **domain name expires**, is banned by the wall, etc., directly modify the subscription link header information to update the entry
- User unaware
- 3. *[TODO]* Consider adding more gameplay in the future, such as discount reminders, etc.

## 1. Case
### Set menu
- In karing - Set menu - display `Airport name`, `Service expiration time`, `Airport FAQ` at the top
- Users can click `Airport name` to enter the airport renewal or order a new package
- As shown below: ![menu](./img/cpr-1.png)

### Service expiration reminder
- When the user's service expiration time is less than 7 days, a red <font color='red'>Expiration reminder</font>

- Users can click the red <font color='red'>Expiration time</font> to enter the airport renewal
- As shown below:
- ![expiration reminder](./img/cpr-4.png)
- ![click to isp](./img/cpr-5.png)

### Airport Management Panel
- If your system is in the following list, please see the configuration steps directly
- [SSPanel-Uim](./sspanel.md)
- [V2Board](./v2board.md)

## 2. Setting logic
- There are two solutions below. It is recommended to modify the header, which has less code intrusion.

### Solution 1 Modify HTTP header
- Add four *response headers* to the HTTP response of the subscription link
- (Required) **Subscription-Userinfo**
- Used to display the user's uploaded, downloaded, total traffic, and when the package expires
- `upload= ; download= ; total= ; expire= ;`
- (Required) **isp-name**: Your service name (airport name)
- Displayed in Settings - ISP - First line
- If isp-name contains non-ASCII characters (such as Chinese), urlencode must be used
- (Required) **isp-url**: The URL that jumps when the user clicks on isp-name
- (Optional) *isp-faq*: FAQ URL of your service
- Displayed in Settings - ISP - Second line
- After modification, it can be displayed through the debugging tool, as shown below:
- ![header](./img/cpr-3.png)

### Solution 2 Customize URL Scheme
- Karing supports calling up the `Add Configuration` page of Karing through scheme. You can change the link of `Auto Import Karing` to the following format
```html
<a href="karing://install-config?url=xxxx&name=xxx&isp-name=xxx&isp-url=xxx&isp-faq=xxx">Auto Import Karing</a>
```
- Note:
- The url must be escaped through urlencode

### Display priority
1. Default setting - The ISP menu only displays one ISP information
- If the user has multiple subscription configurations, the first valid ISP information will be displayed in order
2. Scheme has a higher priority than header
- That is, the ISP information set through karing://install-config will be displayed first. If not, the response header will be judged

## 3. Cooperate with Karing
- Click to enter 👉 [Contact information and cooperation form](/blog/isp/cooperation)