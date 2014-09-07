# Object.propertyIsEnumberable() _ECMAScript v3_

是否可以通过for/in循环看到属性

## 摘要

Object.propertyIsEnumberable(pronpname)

## 参数

pronpname  
    一个字符串，包含object属性名称。

## 返回值

如果object具有名为pronpname的非继承属性，而且该属性是可枚举的（即用for/in循环可以枚举出它），则返回true。

## 描述

用for/in语句可以遍历一个对象“可枚举”的属性。但并非一个对象的所有属性都是可枚举的，通过JavaScript代码添加到对象的属性是可枚举的，而内部对象的预定义属性（如方法）通常是不可枚举的。propertyIsEnumberable()方法提供了区分可枚举属性和不可枚举属性的方法。但要注意事项，ECMAScript标准规定，propertyIsEnumberable()方法不检测原型链，这意味着它只适用于局部属性，不能检测继承属性的可枚举性。

## 例子

    var o = new Object( ); // Create an object
        o.x = 3.14; // Define a property
        o.propertyIsEnumerable("x"); // true: property x is local and enumerable
        o.propertyIsEnumerable("y"); // false: o doesn't have a property y
        o.propertyIsEnumerable("toString"); // false: toString property is inherited
        Object.prototype.propertyIsEnumerable("toString"); // false: nonenumerable

## 参阅

Function.prototype  
Object.hasOwnProperty()

