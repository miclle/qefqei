# URIError _ECMAScript v3_

由URI的编码和解码方法抛出 _Object->Error->URIError_

## 构造函数

new URIError()  
new URIError(message)

## 参数

message  
    提供异常细节的出错消息（可选）。如果设置了该参数，它将作为URIError对象的message属性的值。

## 返回值

新构造的URIError对象。如果指定了参数message，该Error对象将它作为message属性的值，否则，它将用实现定义的默认字符串作为该属性的值。如果不用new运算符，而把URIError()构造函数当作函数调用，它的行为与使用new运算符调用时一样。

## 属性

message  
    提供异常细节的出错消息。该属性存放传递给构造函数的字符串，或存放实现定义的默认字符串。详见“Error.message”。  
  
  
name  
    声明异常类型的字符串。所有URIError对象的name属性都继承“URIError”。

## 描述

如果指定的字符串含有不合法的十六进制转义序列，则decodeURI()或decodeURIComponent()方法就会抛出URIError类的实例。如果指定的字符串含有不合法的Unicode替代对，encodeURI()或encodeURIComponent()方法也会抛出该异常。关于抛出的捕捉异常细节，请参阅“Error”。

## 参阅

Error  
Error.message  
Error.name

