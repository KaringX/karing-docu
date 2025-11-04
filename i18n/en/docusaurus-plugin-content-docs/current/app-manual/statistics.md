---
title: Statistics And Analysis
sidebar_position: 7
---


### Traffic Trend Chart

![](./img/statistics_tranffic.png#center)

### Traffic Trend Chart - Traffic Distribution Rules

![](./img/statistics_tranffic_rule.png#center)

## Questions:

### Which information/charts are supported?

- Currently supports Request History/Traffic Trend Chart/Traffic Trend Chart - Traffic Distribution Rules

### Why does the traffic value on the chart suddenly drop and then rise again?

- Core reloading resets the traffic data, causing the traffic display to suddenly return to 0.

### What is the function of 'Data Anonymization'?

- After enabling 'Data Anonymization', privacy information related to access history will be replaced with '*' before storage. This function does not affect the 'Traffic Trend Chart', but it will affect the display of 'Request History'/'Traffic Trend Chart - Traffic Distribution Rules', etc.

## Note:

### Abnormal VPN process exit can cause some data to fail to be written to the database, resulting in data loss and potentially inaccurate data display.