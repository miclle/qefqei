# Function.call() _ECMAScript v3_

将函数作为对象的方法调用

## 摘要

function.call(thisobj, args...)

## 参数

thisobj  
    调用function的对象。在函数主体中，thisobj是关键字this的值。如果这个参数为null，就使用全局对象。  
args  
    任意多个参数，这些参数将传递给函数function。

## 返回值

调用函数function的返回值。

## 抛出

TypeError  
    如果调用该函数的对象不是函数，则抛出该异常。

## 常量

## 描述

call()将指定的函数function将对象thisobj的方法来调用，把参数列表中thisobj后的参数传递给它，返回值是调用函数后的返回值。在函数体内，关键定this引用thisobj对象，或者如果thisobj为null，就使用全局对象。  
  
  
如果指定数组中传递给函数的参数，请使用Function.apply()方法。

## 例子

    // Call the default Object.toString( ) method on an object that
        // overrides it with its own version of the method. Note no arguments.
        Object.prototype.toString.call(o);

## 参阅

Function.apply()

