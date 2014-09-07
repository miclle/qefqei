# Date.getTime() _ECMAScript v1_

返回Date对象的毫秒表示

## 摘要

date.getTime()

## 返回值

指定Date对象date的毫秒表示，也就是date指定的日期和时间距1970年1月1日午夜（GMT时间）之间的毫秒数。

## 描述

方法getTime()可以将日期和时间转换成一个整数。这在比较两个Date对象或者要判断两个日期之间的时差时非常有用。注意，日期的毫秒表示独立于时区，所以除了这个方法之外，没有getUTCTime()方法。不要混淆getTime()方法和getDay()及getDate()方法，getDay()及getDate()返回的分别是一周的第几天和一个月的第几天。  
  
  
可以Date.parse()或Date.UTC()将日期和时间转换成它们和毫秒表示，在此之前无须创建一个Date对象。

## 参阅

Date, Date.parse(), Date.getTime()或Date.UTC()

