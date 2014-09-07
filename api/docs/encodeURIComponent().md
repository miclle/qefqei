# encodeURIComponent() _ECMAScript v3_

转义URI组件中的字符

## 摘要

encodeURIComponent(s)

## 参数

s  
    一个字符串，含有URI的一部分或其他要编码的文本。

## 返回值

s的副本，其中某些字符被十六进制的转义序列替换了。

## 抛出

URIError  
    说明s中含有格式化错误的Unicode替代对，不能被编码。

## 描述

encodeURIComponent()是全局函数，返回参数s的编码副本。ASCII的字母和数字不编码，此外下面的ASCII标点符号也不编码：  
    - \_ . ! ~ \* ' ( )  
其他字符（像/, :,#这样用于分隔URI各种组件的标点符号），都由一个或多个十六进制的转义序列替换。关于使用编码模式，请参阅“encodeURI()”的描述。  
  
  
注意encodeURIComponent()和encodeURI()之间的差别，前者假定它的参数是URI

## 例子

    encodeURIComponent("hello world?"); // Returns hello%20world%3F

## 参阅

decodeURI()  
decodeURIComponent()  
encodeURI()  
escape()  
unescape()

