# parseInt() _ECMAScript v1_

把字符串转换成整数

## 摘要

parseInt(s)  
parseInt(s, radix)

## 参数

s  
    要被解析的字符串。  
radix  
    选用的整数参数，表示要解析的数字的基数。如果省略了该参数或者它的值为0，数字将以10为基数来解析。如果它以“0x”或"0X"开头，则以16为基数。如果该参数小于2或大于36，则parseInt()返回NaN。

## 返回值

解析后的数字，如果字符串s不是以一个有效整数开头，则返回NaN。在JavaScript 1.0中，当parseInt()不解析s时，它返回的是0而不是NaN。

## 描述

方法parseInt()将对字符串s进行解析，并且返回出现在s中的第一个数字（可以具有减号）。当parseInt()在s中遇到的字符不是指定的基数radix可以使用的有效数字时，解析过程就停止，解析的结果也将在此时返回。如果s的开头是parseInt()不能解析的数字，该函数将返回NaN。可以用函数isNaN()来检测这个值。  
  
  
参数radix指定的是要解析成的数字的基数。如果将它设置为10，parseInt()就会将字符串解析成十进制的数。将它设置为8，那么解析的结果就是八进制（使用0~7八

## 例子

    parseInt("19", 10); // Returns 19 (10 + 9)
        parseInt("11", 2); // Returns 3 (2 + 1)
        parseInt("17", 8); // Returns 15 (8 + 7)
        parseInt("1f", 16); // Returns 31 (16 + 15)
        parseInt("10"); // Returns 10
        parseInt("0x10"); // Returns 16
        parseInt("010"); // Ambiguous: returns 10 or 8

## Bugs

在没有指定radix时ECMAScript v3允许实现将以“0”（但不是“0x”或“0X”）开头的字符串解析为八进制或十进制的数。要避免这种二义性，应该明确指定基数，可只有确定所有要解析的数字都是以“0x”或“0X”开头的十进制数或十六进制时，才可以不指定基数。

## 参阅

isNaN()  
parseFloat()

