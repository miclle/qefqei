# Number.toExponetial() _ECMAScript v1_

用指数计数法格式数字

## 摘要

number.toExponetial(digits)

## 参数

digits  
    小数点后的数字位数，值在0~20之间，包括20，有些实现可能支持更大的数值范围。如果省略了该参数，将使用尽可能多的数字。

## 返回值

number的字符串表示,采用指数计数法，即小数点之前有一位数字，小数点后有digits位数字。该数字的小数部分将被舍入，必要时用0补足，以便它达到指定的长度。

## 抛出

RangeError  
    digits太小或太大时抛出的异常。0~20之间（包括0和20）的值不会引发RangeError。有些实现允许支持更大的范围或更小的范围内的值。  
  
  
TypeError  
    调用该方法的对象不是Number时抛出的异常。

## 例子

    var n = 12345.6789;
    n.toExponential(1); // Returns 1.2e+4
    n.toExponential(5); // Returns 1.23457e+4
    n.toExponential(10); // Returns 1.2345678900e+4
    n.toExponential( ); // Returns 1.23456789e+4

## 参阅

Number.toFixed()  
Number.toLocaleString()  
Number.toPrecision()  
Number.toString()

