# String.replace() _ECMAScript v3_

替换一个与正则表达式匹配的子串

## 摘要

string.replace(regexp, replacement)

## 参数

regexp  
    声明了要替换的模式的RegExp对象。如果该参数是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换成RegExp对象。  
  
  
replacement  
    一个字符串，声明的是替换文本或生成替换文本的函数。

## 返回值

一个新字符串，是用replacement替换了与regexp的第一次匹配或所有匹配之后等到的。

## 描述

字符串string的方法repace()执行的是查找并替换操作。它将在string中查找与regexp相匹配的子串，然后用replacement替换这些子串。如果regexp具有全局性质g，那么replace()将替换所有的匹配子串。否则，它只替换一个匹配子串。  
  
  
replacement可能是字符串或函数。如果它是一个字符串，那么每个匹配都将由字符串替换。但replacement中的$字符具有特殊的含义。如下表所示，它说明从模式匹配得到的字符串将用于替换。  
  
  
字符

## 例子

    要确保单词“JavaScript”中的大写字符是正确的，可用下列代码：
        text.replace(/javascript/i, "JavaScript");
    要将名字，“Doe，John”转换成“John Doe”的形式，可用下列代码：
        name.replace(/(\w+)\s*,\s*(\w+)/, "$2 $1");
    用花括号替换直引号，可用下列代码：
        text.replace(/"([^"]*)"/g, "''$1''");
    使字符串中所有单词的第一个字母都是大写的，可用下列代码：
        text.replace(/\b\w+\b/g, function(word) {
            return word.substring(0,1).toUpperCase( ) + word.substring(1);
        });

## 参阅

RegExp  
RegExp.exec()  
RegExp.test()  
String.match()  
String.search()

