# Date.setMonth() _ECMAScript v1_

设置Date对象的月份字段和天字段

## 摘要

date.setMonth(month)  
date.setMonth(month, day)

## 参数

month  
    0（一月）到11（十二月）之间的整数，用于设置Date对象date的月份字段。注意，月份从0开始编号，而月中的某一天则从1开始编号。  
day  
    可选的整数，在1~31之间，用做date的天娄字段的新值（以本地时间计）。  
    ECMAScript标准化前，不支持该参数。

## 返回值

调整过的日期的毫秒表示。在ECMAScript标准化前，该方法不返回值。

