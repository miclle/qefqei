# Global _ECMAScript v1_

全局对象 _Object->Global_

## 摘要

this

## 属性

全局属性  
全局对象不是一个类，所以下面的全局属性在自己名称下有单独的参考条目。也就是说在“undefined”名下可以找到undefined属性的详细信息，而不是在“Global.undefined”下寻找。注意，所有顶层变量也都是全局对象的属性。  
  
  
Infinity  
    表示正无穷大的数值。  
java  
    表示java.\*包层级的一个JavaPackage。  
NaN  
 &nbsp

## 方法

全局函数  
全局对象是一个对象，而不是类。下面列出的全局函数不是任何对象的方法，它们的参考条目出现在函数名下。例如，在“parseInt()”下可以找到parseInt()函数的详细信息，在“Global.parseInt()”下就无法找到该函数的详细信息。  
  
  
decodeURI()  
    对decodeURI()转义的字符串解码。  
decodeURIComponent()  
    对decodeURIComp

## 描述

全局对象是预定义的对象，作为JavaScript的全局属性和全局函数的占位符。通过使用全局对象，可以访问其它所有预定义的对象、函数和属性。全局对象不是任何对象的属性，所以它没有名字（之所以选择Global作为这个参考页的标题，只是为了方便组织，并不是说全局对象名为“Global”）。在顶层JavaScript代码中，可以用关键字this引用全局对象。但通常不必用这种方式引用全局对象，因为全局对象是作用域链的头，这意味着所有非限定性的变量和函数名都会作为该对象的属性来查询。例如，当JavaScript代码引

## 例子

    在JavaScript核心语言中，全局对象的预定义属性都是不可枚举的，所以可以用for/in循环列出所有隐式或显式声明的全局变量，如下所示：
        var variables = ""
        for(var name in this)
        variable += name + "\n";

## 参阅

Window

