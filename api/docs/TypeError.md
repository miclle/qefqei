# TypeError _ECMAScript v3_

当一个值的类型错误时，抛出该异常 _Object->Error->TypeError_

## 构造函数

new TypeError()  
new TypeError(message)

## 参数

message  
    提供异常细节的出借消息（可选）。如果设置了该参数，它将作为TypeError对象的message属性的值。

## 返回值

新构造的TypeError对象。如果指定了参数message，该Error对象将它作为message属性的值，否则，它将用实现定义的默认字符串作为该属性的值。如果不用new运算符，则把TypeError()构造函数作为函数调用，它的行为与使用new运算符调用时一样。

## 属性

message  
    提供异常细节的出错消息。该属性存放传递给构造函数的字符串，或存放实现定义的默认字符串。详见“Error.message”。  
  
  
name  
    声明异常类型的字符串。所有TypeError对象的name属性都继承值“TypeError”。

## 描述

当一个值的类型与要求不符时，TypeError类的一个实例就会被抛出。在访问值为null或nudefinde的属性时，这种情况经常发生。如果由一个对象（其他类的实例）调用另一个类定义的方法时，或者对于不是构造函数的值使用new运算符时，也会发生这种情况。当调用内部函数或方法时，如果传递的参数多于期望的个数，JavaScript的实现也允许招抛出TypeError异常。关于抛出和捕捉异常的细节，请参阅“Error”。

## 参阅

Error  
Error.message  
Error.name

