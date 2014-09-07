# Date.getTimezoneOffset() _ECMAScript v1_

判断与GMT的时间差

## 摘要

date.getTimezoneOffset()

## 返回值

本地时间与GMT时间之间的时差，以分钟为单位。

## 描述

getTimezoneOffset()返回的是本地时间和GMT时间或UTC时间之间相关的分钟数。实际上，该函数告诉了你运行JavaScript代码的时区，以及指定的时间是否是夏令时。  
  
  
返回值以分钟计，而不是以小时计，原因是某些国家所占有的时区甚至不到一个小时的间隔。

