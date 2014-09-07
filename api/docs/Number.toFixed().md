# Number.toFixed() _ECMAScript v1_

采用定点计数法格式数字

## 摘要

number.toFixed(digits)

## 参数

digits  
    小数点后的数字位数，值在0~20之间，包括0和20，有些实现可能支持更大的数值范围。如果省略了该参数，将用0代理。

## 返回值

number的字符串表示，不采用指数计数法，小数点后有固定的digits位数字。如果必要，该数字会被舍入，也可以用0补足，以便达到指定的长度。如果number大于1e+21，该方法只调用Number.toString()，返回采用指数计数法表示的字符串。

## 抛出

RangeError  
    digits太小或太大时抛出的异常。0~20之间（包括0和20）的值不会引发RangeError。有些实现允许支持更大的范围或更小的范围内的值。  
  
  
TypeError  
    调用该方法的对象不是Number时抛出的异常。

## 例子

    var n = 12345.6789;
    n.toFixed( ); // Returns 12346: note rounding, no fractional part
    n.toFixed(1); // Returns 12345.7: note rounding
    n.toFixed(6); // Returns 12345.678900: note added zeros
    (1.23e+20).toFixed(2); // Returns 123000000000000000000.00
    (1.23e-10).toFixed(2) // Returns 0.00

## 参阅

Number.toExponential()  
Number.toLocaleString()  
Number.toPrecision()  
Number.toString()

