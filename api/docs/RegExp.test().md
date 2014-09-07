# RegExp.test() _ECMAScript v3_

检测一个字符串是否匹配某个模式

## 摘要

regexp.test(string)

## 参数

string  
    要检测的字符串。

## 返回值

如果字符串string中含有与regexp匹配的文本，就返回true，否则返回false。

## 抛出

TypeError  
    调用该方法的对象不是RegExp时，抛出该异常。

## 描述

方法test()将检测字符串string，看它是否含有与regexp相匹配的文本。如果string中含有这样的文本，该方法将返回true，否返回false。调用RegExp对象r的test()方法，给它传递字符串s，等价于下面的表达式：  
    (r.test(s) != null)

## 例子

    var pattern = /java/i;
        pattern.test("JavaScript"); // Returns true
        pattern.test("ECMAScript"); // Returns false

## 参阅

RegExp.exec()  
RegExp.lastIndex  
String.match()  
String.replace()  
String.substring()

