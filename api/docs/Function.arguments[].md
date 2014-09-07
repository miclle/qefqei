# Function.arguments[] _ECMAScript v1_

传递给函数的参数

## 摘要

function.arguments[]  
function.arguments.length

## 描述

ECMAScript v3反对使用  
Function对象的arguments属性是一个参数数组，它的元素是传递给函数的参数。只在执行函数时，它才被定义。arguments.length声明的是数组中的元素个数。  
  
  
反对使用该属性，赞成使用Arguments对象。虽然ECMAScript v1支持Function.arguments属性，但ECMAScript v3删除了它，遵守该标准的实现不再支持该属性。因此，在新的JavaScript代码中，不再应使用它。

## 例子

    
    

## 参阅

Arguments

