# Array.pop() _ECMAScript v3_

删除并返回数组的最后一个元素

## 摘要

     array.pop()

## 返回值

array

## 描述

方法pop()将删除array的最后一个元素，把数组长度减1，并且返回它删除的元素的值。如果数组已经为空，则pop()不改变数组，返回undefined值。

## 例子

    方法pop()和它的伴随方法push()可以提供先进后出(FILO)栈的功能。例如：
        var stack = []; // stack: []
        stack.push(1, 2); // stack: [1,2] Return 2
        stack.pop(); // stack: [1] Return 1
        stack.push(4, 5); // stack: [1,[4,5]] Return 2
        stack.pop(); // stack: [1] Return [4,5]
        stack.pop(); // stack: [] Return 1

## 参阅

Array.push()

