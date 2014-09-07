# RegExp.lastIndex _ECMAScript v3_

下次匹配的起始位置

## 摘要

regexp.lastIndex

## 描述

RegExp对象的属性lastIndex是一个可读写的值。对于设置了g性质的正则表达式来说，该属性存放的是一个整数，它声明了紧接着上次找到的匹配文本的字符的位置。上次匹配的结果是由方法RegExp.exec()或RegExp.test()找到的，它们都以lastIndex属性所指定的位置作为下次检索的起始点。这样，就可以通过反复调用这两个方法来遍历一个字符串中的所有匹配文本。注意，不具有性质g和不表示全局模式的RegExp对象不能使用lastIndex属性。  
  
  
由于这一属性是可读可写的，所以只

## 参阅

RegExp.exec()  
RegExp.test()

