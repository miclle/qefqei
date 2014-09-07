# JavaObject _LiveConnect_

Java对象的JavaScript表示

## 摘要

javaobject.member // Read or write an instance field or method

## 属性

每个JavaObject对象的属性和方法都与它表示的Java对象的公有实例字体段和方法（而不是表态的属性和方法，或者说类方法、类属性）同名。用这些属性可以读写那个类的公有字段并调用它的公有方法。一个给定的JavaObject对象的属性显然是由它所表示的Java对象的类型决定的。可以使用for/in循环枚举一个给定的JavaObject对象的属性。

## 描述

JavaObject对象是Java对象的JavaScript表示。它的属性表示它所定义的对象的公有实例字段和公有实例方法（对象的类或静态字段和对象方法由JavaClass的对象表示。）  
  
  
JavaObject对象实现了LiveConnect的功能，这使得JavaScript程序可以使用常规的JavaScript语法对Java对象的公有实例字段进行读写操作。此外，它还提供了让JavaScript调用Java对象方法的功能。LiveConnect会自动处理JavaScript表示和Java表示之间

## 例子

    java.awt.Rectangle是一个JavaClass对象，它表示java.awt.Rectangle类。我们可以创建一个JavaObject对象来表示这个类的实例，代码如下：
        var r = new java.awt.Rectangle(0, 0, 4, 5);
    然后就可以使用如下代码对JavaObject对象r的公有实例变量进行读操作：
        var perimeter = 2*r.width + 2*r.height;
    还可以使用JavaScript语法来设置r的公有实例变量：
        r.width = perimeter/4;
        r.height = perimeter/4

## 参阅

getClass()  
JavaArray  
JavaClass  
JavaPackage

