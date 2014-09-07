# Number.toString() _ECMAScript v1_

将数字转换成字符串 _覆盖Object.toString()_

## 摘要

number.toString(radix)

## 参数

radix  
    选用的参数，指定表示数字的基数，是2~36之间的整数。如果省略了该参数，使用基数10。但要注意，如果该参数是10以外的其他值，则ECMAScript标准允许实现返回任意值。

## 返回值

数字的字符串表示。

## 抛出

TypeError  
    调用该方法的对象不是Number时抛出的异常。

## 描述

Number对象的方法toString()可以将数字换成字符串。当省略了radix参数或指定它的值为10时，该数字将被转换成基数为10的字符串。尽管ECMAScript规范并不要求实现为radix保证任何其他的值，但是所有的实现通常都接受2到36之间的值。

## 参阅

Number.toExponential()  
Number.toFixed()  
Number.toLocaleString()  
Number.toPrecision()

