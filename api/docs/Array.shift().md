# Array.shift() _ECMAScript v3_

将数组头部的元素移出数组头部

## 摘要

array.shift()

## 返回值

数组原来的第一个元素。

## 描述

方法shift()将把array的第一个元素移出数组，返回那个元素的值，并且将余下的所有元素前移一们，以填补数组头部的空缺。如果数组是空的，shift()将不进行任何操作，返回undefiend值。注意，该方法不创建新的数组，而是直接修改原有的array。  
  
  
方法sihft()和方法Array.pop()相似，只不过它在数组头部操作，而不是在尾部操作。该方法常常和unshift()一起使用。

## 例子

    var a = [1, [2,3], 4];
        a.shift(); // Return 1; a = [[2,3], 4];
        a.shift(); // Return [2,3]; a = [4];

## 参阅

Array.pop(), Array.unshift()

