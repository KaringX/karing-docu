---
title: Custom Diversion Group
sidebar_position: 3
---

# Custom Diversion/Proxy Group
- If the built-in geo (-ip, -site) and ACL rules do not meet your needs, you can try `Custom Diversion Group` and `Custom Proxy Group`.

## Requirements
- karing >= 1.0.15.133
- Brave 1.67.116
  - Only applicable for the following example

## Custom Diversion Group
- Here we use this feature to *solve the issue of Brave's translation function being unusable in Mainland China* as an example.

### Configuration Steps
1. Add Diversion Group
  - Settings —> Diversion -> `Custom Diversion Group` -> ➕ icon in the upper right corner, add a diversion group, and write a remark like brave
2. Add Rules
  - Return to the `Custom Diversion Group` list, select the remark name you just created
  - Fill in the required rules, using brave as an example:
    - In `Domain Suffix`, enter "translate.brave.com"
    - Save with the checkmark in the upper left corner(✔ icon)
    - ![brave](./img/custom-diversion-1.png)

3. Select Rule Matching Action
  - Settings —> Diversion -> `Diversion Rules` -> In the first screen under Custom Group, select brave (the remark name of the rule you just created)
  - Select action **Current Selected**
    - ![rules](./img/custom-diversion-2.png)
  - Return to karing homepage and reconnect to make the settings take effect
  - Turn off the "Connect" button, then turn it back on, and the button background should be green
4. Test if it works
  - Open a page in Brave browser, right-click -> Translate
  - karing homepage -> Connection (💻 icon)
    - ![connections](./img/custom-diversion-3.png)

**Note**: All data in the rules are case-sensitive

### Terminology Explanation
:::tip Terminology Explanation
Domain Suffix: Domain suffix
  - For example, ads.google.com and api.google.com have the same domain suffix .google.com,
  - As long as the domain suffix is .google.com, it matches the rule;

Domain: Complete domain name
  - Must be an exact match to hit the rule;

Domain Keyword: Domain keyword
  - As long as the specified keyword is in the domain name, it matches the rule
  - For example, ads.google.com and ad.google.cn both have the keyword google;

IP Cidr: IP range
  - If matching a specific IP, the / should be followed by the full mask;

Process Name: Windows process name

Process Path: Complete Windows process path

App Package: Android application package id
:::

## Custom Proxy Group
- The steps are similar to custom diversion group, and will not be repeated here

