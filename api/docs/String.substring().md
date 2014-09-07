# String.substring() _ECMAScript v1_

返回字符串的一个子串

## 摘要

string.substring(from, to)

## 参数

from  
    一个非负的整数，声明了要抽取的子串的第一个字符在string中的位置。  
  
  
to  
    一个可选的非负的整数，比要抽取的子串的最后一个字符在string中的位置多1。如果省略了该参数，返回的子串直到字符串的结尾。

## 返回值

一个新字符串，其长度为to-from，存放的是字符串string的一个子串。这个新字符串含有的字符是从string中的from处到to-1处复制的。

## 描述

String.substring()将返回字符串string的子串，由from到to之间的字符构成，包括位于from的字符，不包括位于to的字符。  
  
  
如果参数from与to相等，那么该方法返回的就是一个空串（即长度为0的字符串）。如果from比to大，那么该方法在抽取子串之前会先交换这两个参数。要记住，该子串包括from处的字符，不包括to处的字符。虽然这样看来有违直觉，但这种系统一个值得注意的重要特性是，返回的子串的长度总等于to-from。  
  
  
注意String.slice()和

## 例子

    String.charAt( ), String.indexOf( ), String.lastIndexOf( ), String.slice( ), String.substr( )

## 参阅

String.charAt()  
String.indexOf()  
String.lastIndexOf()  
String.slice()  
String.substr()

