# String.search() _ECMAScript v3_

检索与正则表达式相匹配的子串

## 摘要

string.search(regexp)

## 参数

regexp  
    要在字符串string中检索的RegExp对象，该对象具有指定的模式。如果该参数不是RegExp对象，则首选将它传递给RegExp()构造函数，把它转换成RegExp对象。

## 返回值

string中第一个与regexp匹配的子串的起始位置。如果没有找到任何匹配的子串，则返回-1。

## 描述

方法search()将字符串string中检索与regexp相匹配的子串，并且返回第一个匹配子串的第一个字符的位置。如果没有找到任何匹配的子串，则返回-1。  
  
  
search()并不执行全局匹配，它将忽略标志g。它也忽略regexp的lastIndex属性，并且总是从字符串的开始进行检索，这意味着它是返回string的第一个匹配的位置。

## 例子

    var s = "JavaScript is fun";
        s.search(/script/i) // Returns 4
        s.search(/a(.)a/) // Returns 1

## 参阅

RegExp  
RegExp.exec()  
RegExp.test()  
String.match()  
String.replace()

