# Arguments _ECMAScript v1_

一个函数的参数和其他属性 _Object->Arguments_

## 摘要

argumentsarguments[n]

## 元素

Arguments对象只在函数体中定义。虽然技术上说来，它不是数组，但Arguments对象有带编号的属性，这些属性可以作为数组元素，而且它有length属性，该属性声明了数组元素的个数。它的元素是作为参数传递给函数的值。元素0是每一个参数，元素1是第二个参数，以此类推。所有作为参数传递的值都会成为Arguments对象的数组元素，无论函数声明中是否有这些参数的名称。

## 属性

callee 对当前正在执行的函数的引用。length 传递给函数的参数个数，同时也是Arguments对象中的数组元素个数。

## 描述

当一个函数被调用时，会为该函数创建一个Arguments对象，局部变量arguments也会自动控制地初始化以便引用那个Arguments对象。Arguments对象的主要用途是提供一种方法，用来确定传递给函数的参数个数并且引用未命名的参数。除了数组元素和属性length之外，属性callee可以使用未命名的函数引用自身。大多数情况下，可以将Arguments对象看做是具有callee属性的数组。但它并不是Array类的实例，Arguments.length属性没有Array.length属性的专

## 参阅

Function

