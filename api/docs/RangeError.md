# RangeError _ECMAScript v3_

在数字超出合法范围时抛出 _Object->Error->RangeError_

## 构造函数

new RangeError()  
new RangeError(message)

## 参数

message  
    可选的出错消息，提供异常的详细情况。如果指定了该参数，它将作为RangeError对象的message属性的值。

## 返回值

新构造的RangeError对象。如果指定了参数message，该Error对象把它作为message属性的值，否则，它将用实现定义的默认字符串作为该属性的值。如果不用new运算符，把RangeError()构造函数调用，那么它的行为与使用new运算符调用时一样。

## 属性

message  
    提供异常细节的出错消息。该属性存放传递给构造函数的字符串，或实现定义的默认字符串。详见“Error.message”。  
  
  
name  
    声明异常类型的字符串。所有RangeError对象的name属性都继承值“RangeError”。

## 描述

当数字超出合法范围时，RangeError类的一个实例就会被抛出。例如，把数组的length属性设置成一个负数，就会使RangeError对象被抛出。关于抛出和捕捉异常的细节，请参阅“Error”。

## 参阅

Error  
Error.message  
Error.name

