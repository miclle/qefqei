# String.indexOf() _ECMAScript v1_

检索字符串

## 摘要

string.indexOf(substring)  
string.indexOf(substring, start)

## 参数

substring  
    要在字符串string中检索的子串。  
start  
    一个选用的整数参数，声明了在字符串string中开始检索的位置。它的合法聚会是0（字符串中的第一个字符的位置）到string.length-1（字符串的最后一个字符的位置）。如果省略了这个参数，将从字符串的第一个字符开始检索。

## 返回值

如果在string中的start位置之后存在substring，返回出现的第一个substring的位置。如果没有找到子串substring，返回-1。

## 描述

方法String.indexOf()将从头到尾的检索字符串string，看它是否含有子串substring。开始检索的位置在字符串string的start处或string的开头（没有指定start参数时）。如果找到了一个substring，那么String.indexOf()将返回substring的第一个字符在string中的位置。string中的字符位置是从0开始的。  
  
  
如果在string中没有找到substring，那么String.indexOf()方法将返回-1。

## 参阅

String.charAt()  
String.lastIndexOf()  
String.substring()

