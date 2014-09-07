# Date.UTC() _ECMAScript v1_

将Date规范转换成毫秒数

## 摘要

Date.UTC(year, month, day, hours, minutes, seconds, ms)

## 参数

year  
    四位数表示的年份值。如果该参数在0~99之间（包括0和99），它将加上1900，作为1900~1999之间的年份处理。  
month  
    月份值，是0（一月）到11（十二月）之间的整数。  
day  
    一个月中的某一天，是1~31之间的整数。注意，该参数的最小值是1，而其他的参数的最小值则是0。该参数是选用的。  
hours  
  &nb

## 返回值

指定的世界时的毫秒表示。简而言之，该方法返回指定的时间距GMT时间1970年1月1日午夜的毫秒数。

## 描述

Date.UTC()是一种静态方法它是通过构造函数Date()调用，而不是通过某个Date对象调用。  
  
  
Date.UTC()方法的参数指定日期和时间，它们都是UTC时间，处于GMT时区。指定的UTC时间将转换成毫秒的形式，这样构造函数Date()和方法Date.setTime()就可以使用它了。  
  
  
Date.UTC()能接受的日期和时间格式，构造函数Date()也可以接受。区别在于构造函数Date()假定这些参数是本地时间，而Date.UTC()却假定它们是世界时（GMT时间）。要

## 例子

    
    

## 参阅

Date, Date.parse()  
Date.setTime()

