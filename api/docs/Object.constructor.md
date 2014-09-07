# Object.constructor _ECMAScript v1_

对象的构造函数

## 摘要

object.constructor

## 描述

对象的constructor属性引用了该对象的构造函数。例如，如果是Array()构造函数创建一个数组，那么a.constructor引用的就是Array:  
    a = new Array(1, 2, 3);    // Create an object  
    a.constructor == Array     // Evaluates to true

## 参阅

Object.toString()

