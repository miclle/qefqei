# Date.setUTCYear() _ECMAScript v1_

设置Date对象的年份字段

## 摘要

date.setUTCYear(year)

## 参数

year  
    要设置的Date对象date的年份字段的值，是一个整数。如果这个值在0~99之间，包括0和99，将会给它加上1900，作为1900~1999间的值处理。

## 返回值

调整过的日期的毫秒表示。在ECMAScript标准化前，该方法不返回值。

## 描述

方法setYear()可以设置指定的Date对象的年份字段，对于1900~1999之间的年份，带有特殊的行为。  
从ECMAScript v3起，JavaScript实现不再要求使用该函数，而使用setFullYear()函数代替它。

