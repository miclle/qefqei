# String.lastIndexOf() _ECMAScript v1_

从后向前检索一个字符串

## 摘要

string.lastIndexOf(substring)  
string.lastIndexOf(substring, start)

## 参数

substring  
    要在字符串string中检索的子串。  
start  
    一个选用的参数，声明了在字符串string中开始检索的位置。它的合法取值是0（字符串中的第一个字符的位置）到string.length-1（字符串中的最后一个字符的位置）。如果省略了这个参数，将从字符串的最后一个字符处开始检索。

## 返回值

如果在string中的start位置之前存在substring，那么返回的就是出现的最后一个substring的位置。如果没有找到子串substring，那么返回的就是-1。

## 描述

方法String.lastIndexOf()将从尾到头的检索字符串string，看它是否含有子串substring。开始检索的位置在字符串string的start处或string的结尾（没有指定start参数时）。如果找到了一个substring，那么String.lastIndexOf()将返回substring的第一个字符在string中的位置。由于是从尾到头的检索一个字符串，所以找到的第一个substring其实是出现在位置start之前的最后一个substring。  
  
  
如果在strin

## 参阅

String.charAt()  
String.indexOf()  
String.substring()

