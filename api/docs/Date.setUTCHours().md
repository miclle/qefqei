# Date.setUTCHours() _ECMAScript v1_

设置Date对象的小时字段、分钟字段、秒字段和毫秒字段（世界时）

## 摘要

date.Date.setUTCHours(hours)  
date.Date.setUTCHours(hours, minutes)  
date.Date.setUTCHours(hours, minutes, seconds)  
date.Date.setUTCHours(hours, minutes, seconds, millis)

## 参数

hours  
    要设置的date的小时字段的值，用世界时表示。该参数应该是0（午夜）到23（晚上11点）之间的一个整数。  
minutes  
    可选的整数，在0~59之间，用作date的分钟字段的新值（以世界时计）  
seconds  
    可选的整数，在0~59之间，用作date的秒字段的新值（以世界时计）  
millis  
    可选的整数

## 返回值

调整过的日期的毫秒表示。

