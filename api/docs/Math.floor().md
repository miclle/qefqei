# Math.floor() _ECMAScript v1_

对一个数下舍入

## 摘要

Math.floor(x)

## 参数

x  
    任意的数值或表达式。

## 返回值

小于等于x，并且与它最接近的整数。

## 描述

Math.floor()执行的是向下取整计算，它返回的是小于等于函数参数，并且与之最接近的整数。  
  
  
Math.floor()将一个浮点值下舍入为最接近的整数。Math.floor()执行的操作不同于Math.round()，它总是进行下舍入，而不是上舍入或下舍入到最接近的整数。还中注意Math.floor()将负数舍入为更小的负数，而不是向0进行舍入。

## 例子

    a = Math.floor(1.99); // Result is 1.0
        b = Math.floor(1.01); // Result is 1.0
        c = Math.floor(1.0); // Result is 1.0
        d = Math.floor(-1.01); // Result is -2.0

