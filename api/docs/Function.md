# Function _ECMAScript v1_

JavaScript函数 _Object->Function_

## 构造函数

new Function(argument\_names..., body)

## 摘要

function functionname(argument\_name\_list){     // Function definition statement  
    body  
}  
function (argument\_name\_list) {body}      // Unnamed function literal  
functionname(argument\_value\_list

## 参数

argument\_names  
    任意多个字符串参数，每人字符串命名一个或多个要创建的Function对象的参数。  
body  
    一个字符串，指定函数的主体，可以含有任意多条JavaScript语句，这些语句之间用分号隔开，可以给该构造函数引用前面的参数设置的任何参数名。

## 返回值

新创建的Function对象。调用该函数，将执行body指定的JavaScript代码。

## 抛出

SyntaxError  
    说明在参数body或某个argument\_names参数中存在JavaScript语法错误。

## 属性

arguments[]  
    一个参数数组，元素是传递给函数的参数。反对使用该属性。  
caller  
    对调用当前函数的Function对象引用，如果当前函数由顶层代码调用，这个属性的值为null。反对使用该属性。  
length  
    在声明函数时指定的命名参数的个数。  
prototype  
    一个对象，用于构造函数，这个对象定义的属

## 方法

apply()  
    将函数作为指定对象的方法来调用，传递给它的是指定的参数数组。  
call()  
    将函数作为指定对象的方法来调用，传递给它的是指定的参数。  
toString()  
    返回函数的字符串表示。

## 描述

函数是JavaScript的一种基本数据类型。虽然可以用Function()构造函数创建函数对象，但这样做效率不高，在大多数情况下，建议使用函数定义语句或函数直接量来定义函数。  
  
  
在JavaScript1.1及以后版本中，函数主体会被自动地给予一个局部变量arguments，它引用一个Arguments对象。该对象是一个数组，元素是传递给函数的参数值。不要将这一属性和上面介绍的反对使用的属性arguments[]相混淆。

## 参阅

Arguments

