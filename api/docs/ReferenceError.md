# ReferenceError _ECMAScript v3_

在读取不存在的变量时抛出 _Object->Error->ReferenceError_

## 构造函数

new ReferenceError()  
new ReferenceError(message)

## 参数

message  
    可选的出错消息，提供异常的详细情况。如果指定了该参数，它将作为ReferenceError对象的message属性的值。

## 返回值

新构造的ReferenceError对象。如果指定了参数message，该Error对象把它作为message属性的值，否则，它将用实现定义的默认字符串作为该属性的值。如果不用new运算符，把ReferenceError()构造函数当作函数调用，它的行为与使用new运算符调用时一样。

## 属性

message  
    提供异常细节的出错消息。该属性存放传递构造函数的字符串，或实现定义的默认字符串。详见“Error.message”。  
  
  
name  
    声明异常类型的字符串。所有ReferenceError对象的name属性都继承值“ReferenceError”。

## 描述

在读取一个不存在的变量的值时，ReferenceError类的一个实例就会抛出。关于抛出和捕捉异常的细节，请参阅“Error”。

## 参阅

Error  
Error.message  
Error.name

