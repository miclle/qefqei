# EvalError _ECMAScript v3_

在不正确使eval()时抛出 _Object->Error->EvalError_

## 构造函数

new EvalError()  
new EvalError(message)

## 参数

message  
    提供异常的详细信息的出错消息，选用。如果设置了该参数，它将用作EvalError对像的message属性的值。

## 返回值

新构造的EvalError对象。如果指定了参数message，Error对象将用作它的message属性的值，否则，它将用实现定义的默认字符串作为该属性的值。如果把EvalError()构造函数当作函数调用且不带有new运算符，它的行为与使用new运算符调用时一样。

## 属性

message  
    提供异常的详细信息的出错消息。该属性存放传递给构造函数的字符串，或存放实现定义默认字符串。  
name  
    声明异常类型的字符串。所有EvalError对象的name属性都继承值“ EvalError”。

## 描述

当在其他名称下调用全局函数eval()时，EvalError类的一个实例就会被抛出。关于调用eval()函数的限制，请参阅“eval()”。关于抛出和捕捉异常的细节，请参阅“Error”。

## 参阅

Error  
Error.message  
Error.name

