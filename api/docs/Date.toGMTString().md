# Date.toGMTString() _ECMAScript v1_

将Date转换为世界时字符串

## 摘要

date.toGMTString();  
ECMAString v3返回使用

## 返回值

Date对象date所指定的日期和时间的字符串表示。这个日期在转换成字符串之前由本地时区转换成了GMT时区。

## 描述

不赞成使用方法toGMTString()，而赞成使用Date.toUTCString()。  
从ECMAString v3起，JavaScript的实现不再要求使用该函数，而用toUTCString()代替它。

## 参阅

Date.toUTCString()

