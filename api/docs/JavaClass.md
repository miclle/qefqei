# JavaClass _LiveConnect_

Java类的JavaScript表示

## 摘要

javaclass.static\_member   // Read or write a static Java field or method  
new javaclass(...)        // Create a new Java object

## 属性

每个JavaClass对象含有的都是与它表示的Java类的公有静态字段和方法同名的属性。用这些属性可以读写那个类的静态字段并调用它的静态方法。每个JavaClass对象的属性都不同，可以使用for/in循环来枚举一个给定的JavaClass对象的属性。

## 描述

JavaClass对象是Java类的JavaScript表示。它的属性表示的是它所代表的类的公有静态字段和方法（有时称它们为类字段和类方法）。注意，JavaClass对象没有表示Java类的instance字段的属性，因为Java类的实例都是由JavaObject对象表示的。  
  
  
JavaClass对象实现了LiveConnect的功能，这使得JavaScript程序可以使用常规的JavaScript语法对Java类的静态变量进行读写操作。它还提供了让JavaScript调用Java类的静态方法

## 例子

    java.lang.System是一个JavaClass对象，表示Java中的java.lang.System类。可以使用如下代码对这个类的静态字段进行读操作：
        var java_console = java.lang.System.out;
    也可以使用下面的代码调用这个类的静态方法：
        var version = java.lang.System.getProperty("java.version");
    最后，用JavaClass对象还能创建新的Java对象，代码如下：
        var java_date = new java.lang.Date();

## 参阅

getClass()  
JavaArray  
JavaObject  
JavaPackage

