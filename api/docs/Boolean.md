# Boolean _ECMAScript v1_

对布尔值的支持 _Object->Boolean_

## 构造函数

new Boolean(valeu)  //Constructor function  
Boolean(value)        //Conversion function

## 摘要

## 参数

value  
    由布尔对象存放的值或才要转换成布尔的值。

## 返回值

当作为一个构造函数（带有运算符new）调用时，Boolean()将把它的参数转换成一个布尔值，并且返回一个包含该值的Boolean对象。如果作为一个函数（不带有运算符new）调用的，Boolean()只将它的参数转换成一个原始的布尔值，并且返回这个值。  
0、NaN、null、空字符串“”和undefined值都将转换成false。其它的原始值，除了false（但包括字符串"false"），以及其它的对象和数组都会被转换成true。

## 方法

toString()  
    根据Boolean对象代表的布尔值返回"true"或"false"。  
valueOf()  
    返回Boolean对象中存放的原始布尔值。

## 描述

在JavaScript中，布尔值是一种基本的数据类型。Boolean对象是一个将布尔值打包的布尔对象。Boolean对象主要用于提供将布尔值转换成字符串toString()方法。当调用toString()方法将布尔值转换成字符串时（通过是由JavaScritp隐式地调用），JavaScript会内在地将这个布尔值转换成一个临时的Boolean对象，然后调用这个对象的toString()方法。

## 参阅

Object

