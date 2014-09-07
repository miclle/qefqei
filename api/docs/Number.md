# Number _ECMAScript v1_

对数字的支持 _Object->Number_

## 构造函数

new Number(value)  
Number(value)

## 参数

value  
    要创建的value对象的数值,或是要转换成数字的值。

## 返回值

当Number()和运算符new一起作为构造函数使用时，它返回一个新创建的Number对象。如果不是用new运算符，把Number()作为一个函数来使用，它将把自己的参数转换成一具原始的数值，并且返回这个值（如果转换失败，返回NaN）。

## 常量

Number.MAX\_VALUE  
    可表示的最大数。  
Number.MIN\_VALUE  
    可表示的最小数。  
Number.NaN  
    非数值。  
Number.NEGATIVE\_INFINITY  
    负无穷大；溢出时返回该值。  
Number.POSITIVE\_INFINITY  
    正

## 方法

toString()  
    把数字转换成字符串，使用指定的基数。  
toLocaleString()  
    把数字转换成字符串，使用本地数字格式规则。  
toFixed()  
    把数字转换成字符串，结果的小数点后有指定位数的数字。  
toExponential()  
    把数字转换成字符串，结果采用指数计数法，小数点后有指定的位数的数字。**
## 描述
**

在JavaScript中，数字是一种基本的基本数据类型。JavaScript还支持Number对象，该对象是原始数值的包装对象。JavaScript必要是自动进行原始数据和对象之间的转换。在JavaScript1.1中，可以用构造函数Number()明确创建一个Number对象，尽管这样做并没有什么必要。  
  
  
构造函数Number()还可以不与运算符new一起使用，而直接作为转换函数来使用。以这种方式调用Number()时，它会把自己的参数转换成一个数字，然后返回转换后的原始数值（或NaN）。

## 参阅

Infinity  
Math  
NaN

