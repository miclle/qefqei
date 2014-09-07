# RegExp.toString() _ECMAScript v3_

把正则表达式转换成字符串 _覆盖Object.toString()_

## 摘要

regexp.toString()

## 返回值

regexp的字符串表示。

## 抛出

TypeError  
    调用该方法的对象不是RegExp时，抛出该异常。

## 描述

RegExp.toString()方法将以正则表达式直接量的形式返回正则表达式的字符串表示。  
  
  
注意，不允许用实现添加轩义序列，这样可以确保返回的字符串是合法的正则表达式直接量。考虑由表达式new RegExp("/", "g")创建的正则表达式。RegExp.toString()的一种实现对该正则表达式返回“///g”，此外它还能添加转义序列，返回“/、//g”。

