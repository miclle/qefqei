# Date.setUTCFullYear() _ECMAScript v1_

设置年份、月份和天（世界时）

## 摘要

date.setUTCFullYear(year)  
date.setUTCFullYear(year, month)  
date.setUTCFullYear(year, month, day)

## 参数

year  
    要给date设置的年份值，用世界时表示。该参数应该是含有世纪值的完整年份，如1999，而不只是缩写的年份值，如99。  
month  
    可选的整数，在0~11之间，用作date的月份字段的新值（以世界时计）。注意，月份是以0开始计算的，而该月中的日期是从1开始计数的。  
day  
    可选的整数，在1~31之间，用date的天字段的新值（以世界时计）。

## 返回值

调整过的日期的毫秒表示。

