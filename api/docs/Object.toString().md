# Object.toString() _ECMAScript v1_

定义一个对象的字符串表示

## 摘要

object.toString()

## 返回值

表示对象的字符串。

## 描述

这里的方法toString并不是你在JavaScript程序中经常显式调用的那个toString()方法。它是你在对象中定义的一人方法，当系统需要转换成字符串时就会调用它。  
  
  
当在字符串环境中使用对象时，JavaScript系统就会调用toString()方法把那个对象转换成字符串。例如，假定一个函数期望得到的参数是字符串，那么把对象传递给它时，系统就会将这个对象转换成字符串：  
    alert(my\_object);  
同样，在用运算符“+”连接字符

## 参阅

Object.constructor  
Object.toLocaleString()  
Object.valueOf()

