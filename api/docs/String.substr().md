# String.substr() _JavaScript 1.2_

抽取一个子串

## 摘要

string.substr(start, length)

## 参数

start  
    要抽取的子串的起始下标。如果是一个负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1指定字符串中的最后一个字符，-2指倒数第二个字符，以此类推。  
  
  
length  
    子串中的字符数。如果省略这个参数，那么返回从string的开始位置到结尾的子串。

## 返回值

一个随行人员中的副本，包括从string的start处（包括start所指的字符）开始的length个字符。如果没有指定length，返回的字符串包含从start到string能结尾的字符。

## 描述

substr()将在string中抽取并返回一个子串。但是它并不修改string。  
  
  
注意，substr()指定的是子串的开始位置和长度，它是String.substring()和String.splice()的一种有用的替代方法，后两者指定的都是起始字符的位置。但要注意，ECMAScript没有标准化该方法，因此反对使用它。

## 例子

    var s = "abcdefg";
        s.substr(2,2); // Returns "cd"
        s.substr(3); // Returns "defg"
        s.substr(-3,2); // Should return "ef"; returns "ab" in IE 4

## Bugs

在IE4中，参数start的值无效（这在IE的后来版本中已修正了）。start值指定的不是从字符串尾部开始算起的字符位置，而是第0个字符的位置。

## 参阅

String.slice()  
String.substring()

