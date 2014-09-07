# unescape() _ECMAScript v1_

给转义字符串解码

## 摘要

ECMAScript v3  
unescape(s)

## 参数

s  
    要解码或“反转义”的字符串。

## 返回值

s解码后的一个副本。

## 描述

unescape()是全局函数，对escape()编码的字符串解码。该函数是通过找到形式为%xx和%uxxxx的字符序列（这里x表示十六进制的数字），用Unicode字符\u00xx和\uxxxx替换这样的字符序列进行解码的。  
  
  
虽然ECMAScript的第一个版本标准化了unescape()，但ECMAScript v3从标准中删除了它，反对使用该方法。虽然ECMAScript的实现可能实现了该函数，但这不是必需的。应该用decoddURI()和decodeURIComponent()代替u

## 例子

    U

## 参阅

decoddURI()  
decodeURIComponent()  
escape()  
String

