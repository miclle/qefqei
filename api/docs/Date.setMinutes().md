# Date.setMinutes() _ECMAScript v1_

设置Date对象的分钟字段和秒字段

## 摘要

date.setMinutes(minutes)  
date.setMinutes(minutes, seconds)  
date.setMinutes(minutes, seconds, millis)

## 参数

minutes  
    0~59之间的整数，用于设置Date对象date的分钟字段（以本地时间计）。  
seconds  
    可选的整数，在0~59之间，用作date的秒字段的新值（以本地时间计）。  
    ECMAScript标准化前，不支持该参数。  
millis  
   可选的整数，在0~999之间，用作date的毫秒字段的新值（以本地时间计）。  
&

## 返回值

调整过的日期的毫秒表示。ECMAScript标准化前，该方法不返回值。

