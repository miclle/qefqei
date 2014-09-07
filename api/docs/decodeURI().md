# decodeURI() _ECMAScript v3_

URI中未转义的字符

## 摘要

decodeURI(uri)

## 参数

uri  
    一个字符串，含有编码的URI或要其他要解码的文本。

## 返回值

uri的副本，

## 抛出

URIError  
    说明uri中的一个或多个转义序列被错误地格式化，不能被正确解码。

## 描述

decodeURI()是一个全局函数，它返回参数uri解码后的副本。它将保留decodeURI()方法执行的编码操作。

## 参阅

decodeURIComponent()  
encodeURI()  
encodeURIComponent()  
escape()  
unescape()

