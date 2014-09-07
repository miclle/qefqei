# parseFloat() _ECMAScript v1_

把字符串转换成数字

## 摘要

parseFloat(s)

## 参数

s  
    要被解析并转换成数字的字符串。

## 返回值

解析后的数字，如果字符串s没有以一个有效的数字开头，则返回NaN。在JavaScript 1.0中，当s不能被解析成数字时，parseFloat()返回的是0而不是NaN。

## 描述

方法parseFloat()将对字符串s进行解析，返回出现在s中的第一个数字。当parseFloat()在s中遇到了一个不是有效数字的字符串时，解析过程就停止了，解析将返回NaN。可以用函数isNaN()来柏油这个值。如果只想解析数字的整数部分，则使用parseInt()方法而不是parseFloat()方法。

## 参阅

isNan()  
parseInt()

