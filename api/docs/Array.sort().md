# Array.sort() _ECMAScript v1_

在原数组上对数组元素进行排序

## 摘要

array.sort()  
array.sort(orderfunc)

## 参数

orderfunc  
    用来指定按什么顺序进行排序的函数，可选。

## 返回值

对数组的引用。注意，数组在原数组上进行排序，不制作副本。

## 描述

方法sort()将在原数组上对数组元素进行排序，即排序时不创建新的数组副本。如果调用方法sort()时没使用参数，将按字母顺序（更精确地说，是按照字符编码的顺序）对数组中的元素进行排序。要实现这一点，首先应把数组的元素都转成字符串（如果有必要的话），以便进行比较。  
  
  
如果想按照特别的顺序进行排序，就必须提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数a和b，其返回值如下：  
●  如果根据你的评判标准，a小于b，在排序后的数

## 例子

    下面的代码展示了如何编写按数字顺序，而不是按字母顺序对数组进行排序的比较函数：
        //An ordering function for a numerical sort
        function numberorder(a, b){
            return a - b;
        }
        var a = new Array(33, 4, 1111, 222);
        a.sort(); //Alphabetical sort: 1111, 222, 33, 4
        a.sort(numberorder); //Numerical sort: 4, 33, 222, 1111

