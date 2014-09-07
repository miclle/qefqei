# Date.setSeconds() _ECMAScript v1_

设置Date对象的秒字段和毫秒字段

## 摘要

date.steSeconds(seconds)  
date.steSeconds(seconds, millis)

## 参数

seconds  
    0~59之间的一个整数，用于设置Date对象date的秒字段。  
millis  
    可选的整数，在0~999之间，用做date的毫秒字段的新值（以本地时间计）。、  
    ECMAScript标准化前，不支持该参数。

## 返回值

调整过的日期的毫秒表示。在ECMAScript标准化前，该方法不返回值。

