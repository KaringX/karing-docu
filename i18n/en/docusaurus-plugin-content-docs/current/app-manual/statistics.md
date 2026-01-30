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

### What is the purpose of 'Data Anonymization'?

- After enabling 'Data Anonymization', privacy information related to access history will be replaced with '*' and stored. This function does not affect the 'Traffic Trend Chart', but it will affect the display of 'Request History'/'Traffic Trend Chart - Traffic Distribution Rules', etc.

### Why is the 'Sampling Time Unit' in the chart limited in duration?

- Setting the time to 'seconds' or 'minutes' limits the data filtering duration to prevent the program from freezing or crashing due to excessive data volume.

## Note: 
- An abnormal exit of the VPN process may cause some data to fail to be written to the database, resulting in data loss and potentially inaccurate data display.