# String.slice() _ECMAScript v3_

抽取一个子串

## 摘要

string.slice(start, end)

## 参数

start  
    要抽取的片段的起始下标。如果是负数，那么该参数声明了从字符串的尾部开始算起的位置。也就是说，-1指字符串中的最后一个字符，-2是批倒数第二个字符，以此类推。  
  
  
end  
    紧接着要抽取的片段的结尾下标。如果没有指定这一参数，那么要抽取的子串包括start到原字符串结尾的字符串。如果该参数是负数，那么它声明了从字符串的尾部开始算起的位置。

## 返回值

一个新字符串，包括字符串string从start开始（包括start）到end为止（不包括end）的所有字符。

## 描述

方法slice()将返回一个含有字符串string片段的字符串或返回它的一个子串。但是该方法不修改string。  
  
  
String对象的方法slice()、substring()和substr()（不建议使用）都返回字符串的指定部分。slice()比substring()要灵活一些，因为它允许使用负数作为参数。slice()与substr()有所不同，因为它用两个字符的位置指定子串，而substr()则用字符位置和长度来指定子串。还要注意的是，String.slice()与Array.slice

## 例子

    var s = "abcdefg";
        s.slice(0,4) // Returns "abcd"
        s.slice(2,4) // Returns "cd"
        s.slice(4) // Returns "efg"
        s.slice(3,-1) // Returns "def"
        s.slice(3,-2) // Returns "de"
        s.slice(-3,-1) // Should return "ef"; returns "abcdef" in IE 4

## Bugs

在Internet Explorer 4中，参数start的值无效（但在IE后来的版本中修正了）。start值指定的不是从字符串尾部开始算起的字符位置，而是指定第0个字符的位置。

## 参阅

Array.slice()  
String.substring()

