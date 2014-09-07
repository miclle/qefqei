# Math.sqrt() _ECMAScript v1_

计算平方根

## 摘要

Math.sqrt(x)

## 参数

x  
    大于等于0的数。

## 返回值

x的平方根。如果x小于0，返回NaN。

## 描述

Math.sqrt()计算数字的平方根。注意，用Math.pow()可以计算一个数的任意次根。例如：  
    Math.cuberoot = function(x){  
        return Math.pow(x,1/3);  
    }  
    Math.cuberoot(8);  // Returns 2

