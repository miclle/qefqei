# Error _ECMAScript v3_

普通异常

## 构造函数

new Error()  
new Error(message)

## 摘要

## 参数

message  
    提供异常的详细信息的出错消息，选用。

## 返回值

新构造的Error对象。如果指定了参数message，该Error对象将它作为message属性的值；否则，它将用实现定义的默认字符串作为该属性的值。如果把Error()构造函数当作函数调用时不使用new运算符，它的行为与使用new运算符调用时一样。

## 属性

message  
    提供异常详细信息的出错消息。该属性存放传递给构造函数的字符串，或实现定义的默认字符串。  
name  
    声明异常类型的字符串。对于Error类的实例和所有子类来说，该属性声明了用于创建实例的构造函数名。

## 方法

toString()  
    返回一个表示Error对象的字符串，该字符串由实现定义。

## 描述

Error类的实例表示错误或异常，通常与throw语句和try/catch语句一起使用。属性name声明了异常的类型，message属性可以提供人们能够读懂的异常的详细信息。  
  
  
JavaScritp解释器从不直接抛出Error对象，而是抛出Error子类（如SyntaxError或RangeError)的实例。在代码中，你会发现抛出Error对象指示异常非常方便，或者也可以用原始字符串或数字的形式抛出出错消息或出错代码。  
  
  
注意，ECMAStript标准为Error类定义了toSt

## 例子

    可以用下列代码指示一个异常：
        function factorial(x) {
            if (x < 0) throw new Error("factorial: x must be >= 0");
            if (x <= 1) return 1; else return x * factorial(x-1);
        }
    如果捕获到一个异常，可以用下列代码把它显示给用户（这段代码使用了客户端Window.alert()方法）：
        try { &*(&/* an error is thrown here */ }
        catch(e) {
            if (e instanceof Error) { // Is it an instance of Error or a subclass?
                alert(e.name + ": " + e.message);
            }
        }

## 参阅

EvalError  
RangeError  
ReferenceError  
SyntaxError  
TypeError  
URIError

