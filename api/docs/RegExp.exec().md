# RegExp.exec() _ECMAScript v3_

通用的匹配模式

## 摘要

regexp.exec(string)

## 参数

string  
    要检索的字符串。

## 返回值

一个数组，存放的是匹配的结果。如果没有找到匹配，则值为null。返回的数组的格式在下面介绍。

## 抛出

TypeError  
    调用该方法的对象不是RegExp时，抛出该异常。

## 描述

在所有的RegExp模式匹配方法和String模式匹配方法中，exec()的功能最强大。它是一个通用的方法，使用起来比RegExp.test()、String.search()、String.replace()和String.match()都复杂。  
  
  
exec()将检索字符串string，从中等到与正则表达式regexp相匹配的文本。如果exec()找到了匹配的文本，它就会返回一个结果数组。否则，返回null。这个返回数组的第0个元素就是与表达式相匹配的文本。第1个元素是与regexp的第一个

## 例子

    可以在循环中使用exec()来检索一个字符串中的所有匹配文本。例如：
        var pattern = /\bJava\w*\b/g;
        var text = "JavaScript is more fun than Java or JavaBeans!";
        var result;
        while((result = pattern.exec(text)) != null) {
            alert("Matched '" + result[0] +
                  "' at position " + result.index +
                  " next search begins at position " + pattern.lastIndex);
        }

## 参阅

RegExp.lastIndex  
RegExp.test()  
String.match()  
String.replace()  
String.search()

