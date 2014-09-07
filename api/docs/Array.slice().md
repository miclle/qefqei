# Array.slice() _ECMAScript v3_

返回数组的一个子数组

## 摘要

array.slice(start, end)

## 参数

start  
    数组片段开始处的数组下标。如果是负数，它声明从数组尾部开始算起的位置。也就是说-1指最后一个元素，-2指倒数第二个元素，以此类推。  
end  
    数组片段结束处的后一个元素的数组下标。如果没有指定这个参数，切分的数组包含从start开始到数组结束的所有元素。如果这个参数是负数，它声明的是从数组尾部开始算起的元素。

## 返回值

一个新数组，包含从start到end（不包括该元素）指定的array元素。

## 描述

方法slice()将返回array的一部分，或者说是一个子数组。返回的数组包含从start开始到end之间的所有元素，但是不包括end所指的元素。如果没有指定end，返回的数组包含从start开始到原数组结尾的所有元素。  
注意，该方法并不修改数组。如果想删除数组中的一段元素，应该使用方法Array.splice()。

## 例子

    var a = [1,2,3,4,5];
        a.slice(0,3); // Return [1,2,3]
        a.slice(3); // Return [4,5]
        a.slice(1,-1); // Return [2,3,4]
        a.slice(-3,-2); // Return [3]; buggy in IE 4: return [1,2,3]

## Bugs

在Internet Explorer 4中，参数start不能为负数。这在IE的最新版本中已经更正。

## 参阅

Array.splice()

