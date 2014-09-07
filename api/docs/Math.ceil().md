# Math.ceil() _ECMAScript v1_

对一个数上舍入

## 摘要

Math.ceil(x)

## 参数

x  
    任意数或表达式。

## 返回值

大于等于x，并且与它最接近的整数。

## 描述

Math.ceil()执行的是向上取整数计算，它返回的是大于或等于函数的参数，并且与之最接近的整数。Math.ceil()执行的操作不同于Math.round()，Math.ceil()总是向上舍入，而Math.round()可以上舍入或下舍入到接近的整数。还要注意，Math.ceil()不会将负数舍入为更小的负数，而是向0舍入。

## 例子

    a = Math.ceil(1.99); // Result is 2.0
        b = Math.ceil(1.01); // Result is 2.0
        c = Math.ceil(1.0); // Result is 1.0
        d = Math.ceil(-1.99); // Result is -1.0

