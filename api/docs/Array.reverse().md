# Array.reverse() _ECMAScript v1_

颠倒数组中的元素顺序

## 摘要

array.reverse()

## 描述

Array对象的方法reverse()将颠倒数组中元素的顺序。它在原数组上实现这一操作作为替代：重排指定的array的元素，但并不创建新数组。如果对array有多个引用，那么通过所有引用都可以看到数组元素的新顺序。

## 例子

    a = new Array(1, 2, 3); // a[0] == 1, a[2] == 3;
        a.reverse(); // Now a[0] ==3, a[2] == 1;

