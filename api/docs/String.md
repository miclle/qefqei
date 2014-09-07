# String _ECMAScript v1_

对字符串的支持 _从Object继承_

## 构造函数

new String(s)  // Constructor function  
String(s)        // Conversion function

## 参数

s  
    要存储在String对象中或转换成原始字符串的值。

## 返回值

当String()与new运算符一起作为构造函数使用时，返回一个新创建的String对象，存放的是字符串s或s的字符串表示。当不用new运算符调用String()时，它只把s转换成原始的字符串，并返回转换后的值。

## 属性

length  
    字符串中的字符数。

## 方法

charAt()  
    抽取字符串中指定位置处的字符。  
  
  
charCodeAt()  
    返回字符串中指定位置处的字符编码。  
  
  
concat()  
    把一个或多个值连接到字符串上。  
  
  
indexOf()  
    在字符串检索一个字符或一个子串。  
  
  
lastIndexOf()  
  &n

## 描述

字符串是JavaScript的一种基本数据类型。String类提供了操作原始字符串值的方法。String对象的length属性声明了该字符串的字符数。类String定论了大量操作字符串的方法，例如从字符串是提取字符或子串，或者检索字符或子串。注意，JavaScript的字符串是不可蛮（immutable）的，String类定义的方法都不能改变字符串的内容。像String.toUpperCase()这样的方法，返回的是全新的字符串，而不是修改原始字符串。  
  
  
较早的Nerscape代码基的Java

