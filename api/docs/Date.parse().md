# Date.parse() _ECMAScript v1_

解析日期/时间字符串

## 摘要

Date.parse(date)

## 参数

date  
    含有要解析的日期和时间的字符串。

## 返回值

指定的日期和时间距1970年1月1日午夜（GMT时间）之间的毫秒数。

## 描述

Date.parse()是Date对象的静态方法。一般通过Date构造函数，采用Date.parse()的形式调用它，而不是通过date对象，采用date.parse()调用该方法。Date.parse()只有一个字符串型的参数。它将解析这个字符串中的日期，然后返回它的毫秒形式，这种形式可以直接使用，也可以用于创建一个新的Date对象，还可以用Date.setTime()方法来设置一个已经存在的日期。  
  
  
ECMAScript标准没有规定Date.parse()方法解析的字符串的格式，只是说该方

## 参阅

Date, Date.setTime(), Date.toGMTString()和Date.UTC()

