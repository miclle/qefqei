# eval() _ECMAScript v1_

执行字符串中的JavaScript代码

## 摘要

eval(code)

## 参数

code  
    字符串，含有要计算的JavaScript表达式或要执行的语句。

## 返回值

计算code等到的值（如果存在的话）。

## 抛出

SyntaxError  
    说明code中没有合法的JavaScript表达式或语句。  
EvalError  
    说明非法调用了eval()，例如使用的标识符不是“eval”。  
其它异常  
    如果传递给eval()的JavaScript代码生成了一个异常，eval()将把那个异常传递给调用者。

## 描述

eval()是全局方法，它将执行一个JavaScript代码字符串。如果code含有一个表达式，eval()将计算这个表达式，并返回它的值。如果code含有一个或多个JavaScript语句，eval()将执行这些语句，如果最后一个语句有返回值，它还会返回这个值。如果code没有返回任何值，eval()将返回undefined。最后，如果code抛出了一个异常，eval()将摊贩这个异常传递给调用都。  
  
  
虽然eval()给JavaScript语言提供了非常强大的功能，但在实际程序中极少用它。常

## 例子

    eval("1+2"); // Returns 3
        // This code uses client-side JavaScript methods to prompt the user to
        // enter an expression and to display the results of evaluating it.
        // See the client-side methods Window.alert() and Window.prompt( ) for details.
        try {
            alert("Result: " + eval(prompt("Enter an expression:","")));
        }
        catch(exception) {
            alert(exception);
        }
        var myeval = eval; // May throw an EvalError
        myeval("1+2"); // May throw an EvalError

