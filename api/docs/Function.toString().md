# Function.toString() _ECMAScript v1_

把函数转换成字符串

## 摘要

function.toString()

## 返回值

表示函数的字符串。

## 抛出

TypeError  
    如果调用该函数的对象不是Function，则抛出该异常。

## 描述

Function对象的方法toString()可以以一种与实现相关的方式将函数转换成字符串。在大多数实现中，如在Firefox和IE这样的实现中，该方法返回一个含有有效JavaScript代码的字符串，即包括关键字function，参数列表和函数的完整主体的代码。这些实现中，这个toString()方法的输出是全局eval()函数的合法输入。规范并没有要求这一行为，因此，不应该依赖于此。

