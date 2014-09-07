# Object _ECMAScript v1_

含有所有JavaScript对象的特性的超类

## 构造函数

new Object()  
new Object(value)

## 参数

value  
    先用的参数，声明了要转换成Number对象、Boolean对象或String对象的原始值）即数字、布尔值或字符串）。

## 返回值

如果没有给构造函数传递value参数，那么它将返回车个新创建的Object实例。如果指定了原始的value参数，构造函数将创建并返回原始值的包装对象，即Number对象、Boolean对象或String对象。当不使用new运算符，而将Object()构造函数作为函数调用时，它的行为与使用new运算符时一样。

## 常量

constructor  
    对一个JavaScript函数的引用，该函数是对象的构造函数。

## 方法

hasOwnProperty()  
    检查对象是否有局部定义的（非继承的）、具有特定名称的属性。  
isPrototypeOf()  
    检查对象是否是指定对象的原形。  
propertyIsEnumerable()  
    检查指定的属性是否存在，以及是否能用for/in循环枚举。  
toLocaleString()  
    返回对象地方化的字

## 描述

Object类是JavaScript语言的内部数据类型。它是其他JavaScript对象的超类，因此其他对象都继承了Object类的方法和行为。

## 参阅

Array  
Boolean  
Function  
Function.prototype  
Number  
String

