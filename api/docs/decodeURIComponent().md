# decodeURIComponent() _ECMAScript v3_

URI组件中的未转义字符

## 摘要

decodeURI(s)

## 参数

s  
    一个字符串，含有编码URI组件或其他要解码的文本。

## 返回值

s的副本，其中十六进制的转义序列被它们所表示的字符替换。

## 抛出

URIError  
    说明s中的一个或多个转义序列被错误地格式化，不能被正确解码。

## 描述

decodeURIComponent()是一个全局函数，它返回参数s解码后的副本。它将保留encodeURIComponent()方法执行的编码操作。

## 参阅

decodeURI()  
encodeURI()  
encodeURIComponent()  
escape()  
unescape()

