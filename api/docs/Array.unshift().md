# Array.unshift() _ECMAScript v3_

在数组的头部插入一个元素

## 摘要

array.unsift(value, ...)

## 参数

value, ...  
    要插入数组头部的一个或多个值。

## 返回值

数组的新长度。

## 描述

方法unshift()将把它的参数插入array的头部，并将已经存在的元素顺次地移到较高的下标处，以便留出空间。该方法的第一个参数将成为数组新的元素0，如果还有每二个参数，它将成为新的元素1，以经类推。注意，unshift()不创建新数组，而是直接修改原有数组。

## 例子

    方法unshift()通常和方法shift()一起使用。
        var a = []; // a : []
        a.unshift(1); // a : [1] Return 1
        a.unshift(22); // a : [22,1] Return 2
        a.shift(); // a : [1] Return 22
        a.unshift(33,[4,5]); // a : [33,[4,5],1] Return 3

## 参阅

Array.shift()

