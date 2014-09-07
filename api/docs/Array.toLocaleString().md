# Array.toLocaleString() _ECMAScript v1_

把数组转换成一个局部字符串 _覆盖object.toLocaleString()_

## 摘要

array.toLocaleString()

## 返回值

数组array的局部字符串表示。

## 抛出

TypeError  
    调用该方法时，若对象不是Array，则抛出该异常。

## 描述

数组的方法toLocaleString()将返回数组的局部字符串表示。它首先调用每个数组元素的toLocaleString()方法，然后使用地区特定的分隔符把生成的字符串连接起来，形成一个新字符串。

## 参阅

Array.toStirng(), Objcet.toLocaleString()

