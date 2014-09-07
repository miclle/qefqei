# isNaN() _ECMAScript v1_

检测非数字

## 摘要

isNaN(x)

## 参数

x  
    要检测的值。

## 返回值

如果x是特殊的非数字值NaN（或者能转换为这样的值），返回值就是true。如果x是其他值，返回值是false。

## 描述

isNaN()可以通过检测参数来判断值是否是NaN，该值表示一个非法的数字（如被0除后得到的结果）。这个函数是必需的，因为把NaN与任何值（包括它自身）进行比较等到的结果都是false，所以要检测一个值是否是NaN，不能使用==或===运算符。  
  
  
isNaN()通常用于检测方法parseFloat()和parseInt()的结果，以判断它们表示的是合法数字。也可以用isNaN()来检测算术错误，如用0作除数。

## 例子

    isNaN(0); // Returns false
        isNaN(0/0); // Returns true
        isNaN(parseInt("3")); // Returns false
        isNaN(parseInt("hello")); // Returns true
        isNaN("3"); // Returns false
        isNaN("hello"); // Returns true
        isNaN(true); // Returns false
        isNaN(undefined); // Returns true

## 参阅

isFinite()  
NaN  
Number.NaN  
parseFloat()  
parseInt()

