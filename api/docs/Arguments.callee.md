# Arguments.callee _ECMAScript v1_

当前正在运行的函数

## 摘要

arguments.callee

## 描述

属性arguments.callee引用当前正在运行的函数。它给未命名的函数提供了一种自我引用的方式。该属性只在函数体内被定义。

## 例子

    //An unnamed function literal uses callee property to refer
    //to itself so that it can be recursive
    var factorial = function(x){
      if(x < 2) return 1;
      else return x * arguments.callee(x-1);
    }
    var y = factorial(5); // Returns 120

