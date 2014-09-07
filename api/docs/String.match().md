# String.match() _ECMAScript v3_

找到一个或多个正则表达式的匹配

## 摘要

string.match(regexp)

## 参数

regexp  
    声明了要匹配的模式的RegExp对象。如果该参数不是RegExp对象，则首先将把它传递给RegExp()构造函数，把它转换成RegExp对象。

## 返回值

存放匹配结果的数组。该数组的内容依赖于regexp是否具有全局性质g。下面详细说明了这个返回值。

## 描述

方法match()将检索字符串string，找到一个或多个与regexp匹配的文本。这个方法的行为很大程序上依赖于regexp是否具有性质g。  
  
  
如果regexp没有性质g，那么match()就只能在string执行一次匹配。如果没有找到任何匹配的文本有关的信息。该数组的第0个元素存放的是匹配文本，其余的元素存放的是与正则表达式的子表达式匹配的文本。除了这些常规的数组元素之外，返回的数组还含有两个对象属性。index属性声明的是匹配文本的起始字符在string中的位置，input属性声明的是对

## 例子

    下面的全局匹配可以找到字符串中的所有数字：
        "1 plus 2 equals 3".match(/\d+/g/); // Return ["1", "2", "3"]
    下面的非全局匹配使用了列加复杂的正则表达式，它具有几个用括号括起来的子表达式。与该表达式匹配的是一个URL，与它的子表达式匹配的是那个URL的协议部分、主机部分和路径部分：
        var url = /(\w+):\/\/([\w.]+)\/(\S*)/;
        var text = "Visit my home page at http://www.isp.com/~david";
        var result = text.match(url);
        if (result != null) {
            var fullurl = result[0]; // Contains "http://www.isp.com/~david"
            var protocol = result[1]; // Contains "http"
            var host = result[2]; // Contains "www.isp.com"
            var path = result[3]; // Contains "~david"
        }

## 参阅

RegExp  
RegExp.exec()  
RegExp.test()  
String.replace()  
String.search()

