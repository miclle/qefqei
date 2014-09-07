# Array.toString() _ECMAScript v1_

把数组转换成一个字符串 _覆盖object.toString()_

## 摘要

array.toString()

## 返回值

array的字符串表示。

## 抛出

TypeError  
    调用该方法时，若对象不是Array，则招聘该异常。

## 描述

数组的toStirng()方法将把数组转换成一个字符串，首先是把每个数组元素转换为字符串并且返回这个字符串。当数组用于字符串环境中，JavaScript会调用这一方法将数组自动转换成一个字符串。但在某些情况下，需要显式地调用这个方法。  
toString()在把数组转换成字符串时，首先要将数组的每个元素都转换成字符串（通过调用这些元素的toString()方法）。当每个元素都被转换成字符串时，它就以列表的形式输出这些字符串，字符串之间用逗号分隔。返回值与没有参数的join()方法返回的字符串相同。**
## 参阅
**

Array.toLocaleString(), Objcet.toString()

