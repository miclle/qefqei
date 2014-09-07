# SyntaxError _ECMAScript v3_

抛出该错误用来通知语法错 _Object->Error->SyntaxError_

## 构造函数

new SyntaxError()  
new SyntaxError(message)

## 参数

message  
    提供异常细节的出错消息（可选）。如果设置了该参数，它将作为SyntaxError对象的message属性的值。

## 返回值

新构造的SyntaxError对象。如果指定了参数message，该Error对象将它作为message属性的值，否则，它将用实现定义的默认字符串作为该属性的值。如果说不用new运算符，把SyntaxError()构造函数当作函数调用，它的行为与使用new运算符调用时一样。

## 属性

message  
    提供异常细节的出错消息。该属性存放传递给构造函数的字符串，或存放实现定义的默认字符串。详见“Error.message”。  
  
  
name  
    声明异常类型的字符串。所有SyntaxError对象的name属性都继承值“SyntaxError”。

## 描述

SyntaxError类的一个实例会被抛出以通知JavaScript代码中的语法错误。eval()方法、Function()构造函数和RegExp()构造函数都可能抛出这种类型的异常。关于抛出和捕捉异常的细节，请参阅“Error”。

## 参阅

Error  
Error.message  
Error.name

