# Number.toPrecision() _ECMAScript v1_

格式化数字的有效位

## 摘要

number.toPrecision(precision)

## 参数

precision  
    返回的字符串中的有效位数，是1~21之间（包括1和21）的值。有些实现允许有选择地支持更大或列小的precision。如果省略了该参数，将调用方法toString()，而不是把数字转换成十进制的值。

## 返回值

number的字符串表示，包含precision个有效数字。如果precision足够大，能够包括number整数部分的所有数字，那么返回的字符串将采用定点计数法。否则，采用指数计数法，即小数点前有一位数字，小数点后有precision-1位数字。必要时，该数字会被舍入或用0补足。

## 抛出

RangeError  
    digits太小或太大时抛出的异常。1~21之间（包括1和21）的值不会引发RangeError。有些实现允许支持更大的范围或更小的范围内的值。  
  
  
TypeError  
    调用该方法的对象不是Number时抛出的异常。

## 例子

    var n = 12345.6789;
    n.toPrecision(1); // Returns 1e+4
    n.toPrecision(3); // Returns 1.23e+4
    n.toPrecision(5); // Returns 12346: note rounding
    n.toPrecision(10); // Returns 12345.67890: note added zero

## 参阅

Number.toExponential()  
Number.toFixed()  
Number.toLocaleString()  
Number.toString()

