# Object.valueOf() _ECMAScript v1_

指定对象的原始值

## 摘要

object.valueOf()

## 返回值

与对象object相关的原始值（如果存在）。如果没有值与object相关，则返回对象自身。

## 描述

对象的valueOf()方法返回的是与那个对象相关的原始值（如果这样的值存在）。对于类型为Object的对象来说，由于它们没有原始值，因此该方法返回的是这些对象自身。  
  
  
对于类型为Number的对象，valueOf()返回该对象表示的原始数值。同样，对于Boolean对象来说，该方法返回与对象相关的布尔值。对于String对象来说，返回与对象相关的字符串。  
  
  
其实，几乎没有必要自己调用valueOf()方法。在期望使用原始值的地方，JavaScript会自动地执行转换。事实上，由于

## 参阅

Object.toString()

