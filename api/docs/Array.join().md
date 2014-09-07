# Array.join() _ECMAScript v1_

将数组元素连接起来以构建一个字符串

## 摘要

array.join()  
array.join(separator)

## 参数

separator  
    在返回的字符串中用于分隔数组元素的字符或字符串，这是选用的。如果省略了这个参数，用逗号作为分隔符。

## 返回值

一个字符串，通过把array的每个元素转换成字符串，然后把这些字符串连接起来，在两个元素之间插入separator字符串而生成。

## 描述

方法join()把每个数组元素转换成一个字符串，然后把这些字符串连接起来，在两个元素之间插入separator字符串。返回生成的字符串。  
  
  
可以用String对象的split()方法执行相反的操作，即把一个字符串分割成数组元素。详情参见“String.split()”。

## 例子

    a = new Array(1, 2, 3, "testing");
        s = a.join("+"); // s is the String "1+2+testing"

## 参阅

String.split()

