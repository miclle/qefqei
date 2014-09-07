# Array.concat() _ECMAScript v3_

连接数组

## 摘要

array.concat(value, ...)

## 参数

value, ...  
    要添加到array中的值，可以是任意多个。

## 返回值

一个新数组，是把指定的所有参数添加到array中构成的。

## 描述

方法concat()将创建并返回一个新数组，这个数组是将所有参数都添加到array中生成的。它并不修改array。如果要进行concat()操作的参数是一个数组，那么添加的是数组中的元素，而不是数组。

## 例子

    var a = [1,2,3];
        a.concat(4, 5); // Returns [1,2,3,4,5]
        a.concat([4,5]); // Returns [1,2,3,4,5]
        a.concat([4,5], [6,7]); // Returns [1,2,3,4,5,6,7]
        a.concat(4,[5, [6,7]]); // Returns [1,2,3,4,5,[6,7]]

## 参阅

Array.join(), Array.push(), Array.splice()

