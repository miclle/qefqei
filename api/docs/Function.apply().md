# Function.apply() _ECMAScript v3_

将函数做为一个对象的方法调用

## 摘要

function.apply(thisobj, args)

## 参数

thisobj  
    调用function的对象。在函数主体中，thisobj是关键字this的值。如果这个参数为null，就使用全局对象。  
args  
    一个数组，它的元素是要传递给函数function的参数值。

## 返回值

调用函数function的返回值。

## 抛出

TypeError  
    如果调用该函数的对象不是函数，或参数args不是数组和Arguments对象，则抛出该异常。

## 描述

apply()将指定的函数function作为对象thisobj的方法来调用，传递给它的是存放在数组args中的参数，返回的是调用function的返回值。在函数体内，关键字this引用thisobj对象。  
  
  
参数args必须是数组或Arguments对象。如果想单独传递给函数的参数，而不是指定数组元素，请使用Function.call()方法。

## 例子

    // Apply the default Object.toString( ) method to an object that
        // overrides it with its own version of the method. Note no arguments.
        Object.prototype.toString.apply(o);
        // Invoke the Math.max( ) method with apply to find the largest
        // element in an array. Note that first argument doesn't matter
        // in this case.
        var data = [1,2,3,4,5,6,7,8];
        Math.max.apply(null, data);

## 参阅

Function.call()

