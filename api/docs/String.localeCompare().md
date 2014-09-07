# String.localeCompare() _ECMAScript v3_

用本地特定顺序来比较两个字符串

## 摘要

string.localeCompare(target)

## 参数

target  
    要以本地特定的顺序与string进行比较的字符串。

## 返回值

说明比较结果的数字。如果string小target，则localeCompare()返回小于0的数。如果string大于target，该方法返回大于0的数。如果两小字符串相等，或根据本地排序规则没有区别，该方法返回0。

## 描述

把 < 和 > 运算符应用到字符串时，它们只用字符的Unicode编码比较字符串，而不考虑当地的排序规则。以这种方法生成的顺序不一定是正确的。例如，西班牙语中，其中字母“ch”通常作为出现在字母“c”和“d”之间的字符来排序。  
  
  
localeCompare()方法提供的比较字符串的方法，考虑了默认的本地排序规则。ECMAScript标准没有规定如何进行本地特定的比较操作，它只规定该函数采用底层操作系统提供的排序规则。

## 例子

    可以用下列代码，按照地方特定的排序规则对一个字符串数组排序。
        var strings; // The array of strings to sort; initialized elsewhere
        strings.sort(function(a,b) { return a.localeCompare(b) });

