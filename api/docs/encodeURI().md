# encodeURI() _ECMAScript v3_

URI中的转义字符

## 摘要

encodeURI(uri)

## 参数

uri  
    一个字符串，含有URI或其他要编码的文本。

## 返回值

uri的副本，其中某些字符被十六进制的转义序列替换了。

## 抛出

URIError  
    说明uri中含有格式化错误的Unicode替代对，不能被编码。

## 描述

encodeURI()是全局函数，返回参数uri的编码副本。ASCII的字母和数字不能编码，此外下面的ASCII标点符号也不编码：  
    - \_ . ! ~ \* ' ( )  
因为encodeURI()的目的是给URI进行完整的编码，所以以下在URI中具有特殊含义的ASCII标点符号也不转义：  
    ; / ? : @ & = + $ , #  
uri中的其他字符都将转换成它的UTF-8编码字符，然后用十六进制的转

## 例子

    // Returns http://www.isp.com/app.cgi?arg1=1&arg2=hello%20world
    encodeURI("http://www.isp.com/app.cgi?arg1=1&arg2=hello world");
    encodeURI("\u00a9"); // The copyright character encodes to %C2%A9

## 参阅

decodeURI()  
decodeURIComponent()  
encodeURIComponent()  
escape()  
unescape()

