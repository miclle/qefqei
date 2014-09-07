# Array.splice() _ECMAScript v3_

插入、删除或替换一个数组元素

## 摘要

array.splice(start, deleteCount, value, ...)

## 元素

start  
    开始插入和（或）删除的数组元素下标。  
deleteCount  
    从start开始，包括start所指的元素在内要删除的元素个数。这个参数是先用的，如果没有指定它，splice()将删除从start开始到原数组结尾的所有元素。  
value, ...  
    要插入数组的零个或多个值，从start所指的下标处开始插入。

## 返回值

如果从array中删除了元素，则返回的是含有被删除的元素的数组。

## 描述

方法splice()将删除从start开始（包括start所指的元素在内）的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。位于插入或删除的元素之后的数组元素都会被移动，以保持它们与数组其它元素的连续性。注意，虽然splice()方法与slice()方法名称很相似，但作用不同，方法splice()直接修改数组。

## 例子

    var a = [1,2,3,4,5,6,7,8];
        a.splice(4); // Returns [5,6,7,8] ; a is [1,2,3,4]
        a.splice(1,2); // Returns [2,3] ; a is [1,4]
        a.splice(1,1); // Returns [4] ; a is [1]
        a.splice(1,0,2,3); // Returns [] ; a is [1,2,3]

## 参阅

Array.slice()

