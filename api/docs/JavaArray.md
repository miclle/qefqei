# JavaArray _LiveConnect_

Java数组的JavaScript表示

## 摘要

javaarray.length // The length of the array  
javaarray[index] // Read or write an array element

## 参数

lengt  
    一个只读的整数，声明了JavaArray对象表示的Java数组中的元素数。

## 描述

JavaArray对象是Java数组的JavaScript表示，它使JavaScript代码能够使用你所熟悉的JavaScript数组语法对数组元素进行读写操作。而且，JavaArray对象的length字段还声明了Java数组中的元素个数。  
  
  
在对数组元素进行读写操作时，系统会自动执行JavaScript表示和Java表示之间的数据转换。  
  
  
习惯用法  
注意，Java数组和JavaScript数组有两方面不同之处。第一，Java数组具有固定的长度，这个长度是在创建它时指定的。

## 例子

    java.awt.Polygon是一个JavaClass对象。我们可以使用如下的代码创建一个JavaObject对象来表示这个类的实例：
        p = new java.awt.Polygon();
    对象p具有属性xpoints和ypoints，它们都是JavaArray对象，代表整型的Java数组。我们可以用如下的JavaScript代码初始化这两个数组的内容：
        for(var i = 0; i < p.xpoints.length; i++)
            p.xpoints[i] = Math.round(Math.random( )*100);
        for(var i = 0; i < p.ypoints.length; i++)
            p.ypoints[i] = Math.round(Math.random( )*100);

## 参阅

getClass()  
JavaClass  
JavaObject  
JavaPackage

