# RegExp _ECMAScript v3_

用于模式匹配的正则表达式 _Object->RegExp_

## 构造函数

new RegExp(pattern, attributes)

## 参数

pattern  
    一个字符串，指定了正则表达式的模式或其他正则表达式。  
attributes  
    一个可选的字符串，包含属性“g”，“i”和“m”，分别用于指定全局匹配、区分大小写的匹配和多行匹配。ECMAScript标准化之前，不支持m属性。如果pattern是正则表达式，而不是字符串，则必须省略该参数。

## 返回值

一个新的RegExp对象，具有指定的模式和标志。如果参数pattern是正则表达式而不是字符串，那么RegExp()构造函数将用于指定的RegExp相同的模式和标志创建一个新的RegExp对象。如果不用new运算符，而将RegExp()作为函数调用，那么它的行为与用new运算符调用时一样，只是当pattern是正则表达式时，它只返回pattern，而不是再创建一个新的RegExp对象。

## 抛出

SyntaxError  
    如果pattern不是合法的正则表达式，或attributes含有“g”，“i”和“m”之外的字符，抛出该异常。  
  
  
TypeError  
    如果pattern是RegExp对象，但没有省略attributes参数，抛出该异常。

## 直接量语法

/pattern/attributes

## 属性

global  
    RegExp对象是否具有性质g。  
ignoreCase  
    RegExp对象是否具有性质i。  
lastIndex  
    上次匹配后的字符串位置，用于在一个字符串中进行多次匹配。  
multiline  
    RegExp对象是否具有m性质。  
source  
    正则表达式的源文

## 方法

exec()  
    执行强大的、通用的模式匹配。  
test()  
    检测一个字符串是否含有某个模式。

## 描述

RegExp对象表达一个正则表达式，它是对字符串执行模式匹配的强大工具。

