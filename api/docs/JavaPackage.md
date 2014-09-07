# JavaPackage _LiveConnect_

Java包的JavaScript表示

## 摘要

package.package\_name  // Refers to another JavaPackage  
package.class\_name    // Refers to a JavaClass object

## 常量

JavaPackage对象的属性是它含有的JavaPackage对象和JavaClass对象和名称。每个JavaPackage对象的属性都不同。注意，不能使用JavaScript的for/in循环遍历Package对象的属性名列表。要了解一个给定的包中含有哪些包和类，请参阅Java的参考手册。

## 属性

package.package\_name  // Refers to another JavaPackage  
package.class\_name    // Refers to a JavaClass object

## 描述

JavaPackage对象是Java包的JavaScript表示。在Java中，所谓包就是一级相关的类集合。不过，在JavaScript中，一个JavaPackage对象除了可以含有类（由JavaClass对象表示）之外，还可以含有其它的JavaPackage对象。  
  
  
全局对象具有一个名称为java的JavaPackage属性，表示java.\*包层次。这个JavaPackage对象定义了引用其它JavaPackage对象的发展。例如，java.lang和java.net引用java.lang和

## 参阅

java  
JavaArray  
JavaClass  
JavaObject  
Packages

