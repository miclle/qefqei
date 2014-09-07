# Object.hasOwnProperty() _ECMAScript v3_

检查属性是否被继承

## 摘要

object.hasOwnProperty(propname)

## 参数

propname  
    一个字符串，包含object的属性名。

## 返回值

如果object有propname指定的非继承属性，则返回true。如果object没有名为propname指定的属性，或者它从原型对象继承了这一属性，则返回false。

## 描述

JavaScript对象既可以有自己的属性，又可以从原型对象继承属性。hasOwnProperty()方法提供了区分继承属性和非继承属性的局部属性的方法。

## 例子

    var o = new Object( ); // Create an object
    o.x = 3.14; // Define a noninherited local property
    o.hasOwnProperty("x"); // Returns true: x is a local property of o
    o.hasOwnProperty("y"); // Returns false: o doesn't have a property y
    o.hasOwnProperty("toString"); // Returns false: toString property is inherited

## 参阅

Function.prototype  
Object.propertyIsEnumerable()

