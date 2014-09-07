# Date.setHousr() _ECMAScript v1_

设置Date对象的小时字段、分钟字段、秒字段和毫秒字段

## 摘要

date,setHours(hours)  
date,setHours(hours, minutes)  
date,setHours(hours, minutes, seconds)  
date,setHours(hours, minutes, seconds, millis)

## 参数

hours  
    0（午夜）到23（晚上11点）之间的整数，用作date对象的小时字段的新值（以本地时间计）。  
minutes  
    可选的整数，在0~59之间，用作date对象的分钟字段的新值（以本地时间计）。  
    ECMAScript标准化之前，不支持该参数。  
seconds  
    可选的整数，在0~59之间，用作date对象的秒字段的新

## 返回值

调整过的日期的毫秒表示。在ECMAScript标准化之前，该方法不返回值。

