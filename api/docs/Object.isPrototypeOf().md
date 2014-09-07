# Object.isPrototypeOf() _ECMAScript v3_

一个对象是否是另一个对象的原型

## 摘要

object.isPrototypeOf(o)

## 参数

o  
    任意对象。

## 返回值

如果object是o的原型，则返回true。如果o不是对象，或者object不是o的原型，则返回false。

## 描述

JavaScript对象继承了原型对象的属性。一个对象的原型是通过用于创建并初始化该对象的构造函数的prototype属性引用的。isPrototypeOf()方法提供了判断一个对象是否是另一个对象原型的方法。该方法可以用于确定对象的类。

## 例子

    var o = new Object( ); // Create an object
        Object.prototype.isPrototypeOf(o) // true: o is an object
        Function.prototype.isPrototypeOf(o.toString); // true: toString is a function
        Array.prototype.isPrototypeOf([1,2,3]); // true: [1,2,3] is an array
        // Here is a way to perform a similar test
        (o.constructor == Object); // true: o was created with Object( ) constructor
        (o.toString.constructor == Function); // true: o.toString is a function
        // Prototype objects themselves have prototypes. The following call
        // returns true, showing that function objects inherit properties
        // from Function.prototype and also from Object.prototype.
        Object.prototype.isPrototypeOf(Function.prototype);

## 参阅

Function.prototype  
Object.constructor

