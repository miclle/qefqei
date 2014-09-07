# String.charCodeAt() _ECMAScript v1_

返回字符串中的第n个字符的代码

## 摘要

string.charCodeAt(n)

## 参数

n  
    返回编码的字符的下标。

## 返回值

string中的第n个字符的Unicode编码。这个返回值是0~65535之间的16位整数。

## 描述

方法charCodeAt()与charAt()执行的操作相似，只不过前者返回的是位于指定位置的字符的编码，而后者返回的则是有字符本身的子串。如果n是负数，或者大于等于字符串的长度，则charCodeAt()返回NaN。  
  
  
要了解从Unicode编码创建字符串的方法，请参阅String.formCharCode()。

## 参阅

String.charAt()  
String.formCharCode()。

