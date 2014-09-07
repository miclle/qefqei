# Function.caller _JavaScript 1.0_

调用当前函数的函数

## 摘要

function.caller

## 描述

ECMAScript反对使用  
在JavaScript的早期版本中，Function对象的caller属性是对调用当前函数的函数的引用。如果该函数是从JavaScript程序的顶层调用的，caller的值就为null。该属性只能在函数内部使用（例如，caller属性只有在函数执行时才会定义）。  
  
  
Function.caller属性不属于ECMAScript标准，在遵守该标准的实现中，不需要该属性。不应该再使用它。

