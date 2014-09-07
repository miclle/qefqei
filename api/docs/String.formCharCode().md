# String.formCharCode() _ECMAScript v1_

从字符编码创建一个字符串

## 摘要

string.formCharCode(c1, c2, ...)

## 参数

c1, c2, ...  
    零个或多个整数，声明了要创建的字符串的字符的Unicode编码。

## 返回值

含有指定编码的字符的新字符串。

## 描述

这个静态方法提供了一种创建字符串的方式，即字符串的每个字符都由单独的数字Unicode编码指定。注意，作为一种表态方法，fromCharCode()是构造函数String()的属性，而不是字符串或String对象的方法。  
  
  
String.charCodeAt()是与String.fromCharCode()配套使用的实例方法，它提供了获取字符串中单个字符的编码的方法。

## 例子

    // Create the string "hello"
        var s = String.fromCharCode(104, 101, 108, 108, 111);

## 参阅

String.charCodeAt()

