# escape() _ECMAScript v1_

对字符串编码

## 摘要

escape(s)

## 参数

s  
    要被转义

## 返回值

编码了的s的副本,其中某些字符被替换成了十六进制的转义序列。

## 描述

ECMAScript v3反对使用  
escape()是全局函数。它返回一个含有s的编码版本的新字符串。s自身并没有被修改。在escape()返回的字符串中，除了ASCII字母、数字和标点符号@, \*, \_, +, -, . 和\之外，所有字符都由形为%xx 或 %uxxxx （x表示十六进制的数字）的转义序列替代。从\u0000到\u00ff的Unicode字符由转义序列%xx替代，其他所有Unicode字符由%uxxxx序列替代。  
  
  
使用函数unescape()可以对escape()编

## 例子

    escape("Hello World!"); // Returns "Hello%20World%21"

## 参阅

encodeURI()  
encodeURIComponent()

