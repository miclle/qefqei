# Number.NaN _ECMAScript v1_

特殊的非数字值

## 摘要

Number.NaN

## 描述

Number.NaN是一个特殊值，说明某些算术运算（如求负数的平方根）的结果不是数字。方法parseInt()和parseFloat()在不能解析指定的字符串时就返回这个值。对于一些常规情况下返回有效数字的函数，也可以采用这种方法，用Number.NaN说明它的错误情况。  
  
  
JavaScript以NaN的形式输出Number.NaN。注意，NaN与其他数值进行比较的结果总是不相等的，包括它自身在内。因此不能通过与Number.NaN比较来检测一个值是不是数字，而只能调用函数isNaN()来比较

