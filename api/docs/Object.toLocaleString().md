# Object.toLocaleString() _ECMAScript v3_

返回对象的本地字符串表示

## 摘要

object.toLocaleString()

## 返回值

表示对象的字符串。

## 描述

该方法用于返回对象的字符串表示，本地化为适合本地的形式。Object类提供的默认的toLocaleString()方法只调用toString()方法，返回非本地化的字符串。但其他类（包括Array、Date和Number）定义了自己的toLocaleString()版本，指定本地化字符串的转换。在定义自己的类时，也可以覆盖该方法。

## 参阅

Array.toLocaleString()  
Date.toLocaleString()  
Number.toLocaleString()  
Object.toString()

