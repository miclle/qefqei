# Date 

操作日期和时间的对象 _Object->Date_

## 构造函数

    new Date()  
    new Date(milliseconds)  
    new Date(datestring)  
    new Date(year, month, day, hours, minutes, seconds, ms)  
  
  
没有参数的构造函数Date()将把创建的Date对象设置为当前日期和时间。如果传递给它的参数是一个数字，

## 参数

milliseconds  
    期望的日期距1970年1月1日午夜（UTC）的ms数。例如，假定传递的参数值为5000，那么创建的Date对象代表日期就是1970年1月1日午夜过5s。  
  
  
datestring  
    一个字符串，声明了日期，也可以同时声明时间。这个字符串的格式应该是方法Date.parse()能接受的。  
  
  
year  
    年份，一个四位数。例如，2001

## 抛出

只有Data对象才能调用Data方法，如果用其他对象调用这些方法，将抛出异常TypeError。

## 方法

Data对象没有可以直接读写的属性，所有对日期的访问都是通过方法执行的。Data对象的大多数方法采用两种形式，一种是使用来地时间进行操作，另一种是使用世界(UTC或GMT)时间进行操作。如果方法的名称中有“UTC”，它将使用世界时进行操作。下面将这些方法对列在一起。例如，get[UTC]Day()指方法getDay()和getUTCDay()。  
  
  
get[UTC]Date()  
    返回Date对象所代表的月中的某一天，采用本地时间或世界时。  
get

## 描述

Date对象是JavaScript语言的一种内部数据类型。它由语法new Date()语法创建。  
创建对象之后，就可以使用多种方法来操作它。大多数方法只能用来设置或获取对象的年份字段、月份字段、天数字段、小时字段以及秒字段，采用本地时间或UTC（世界时间或GMT）时间。方法toString()以及它的变种可以把时期转换成人们能够文以读懂的字符串。所谓Date对象的内部表示就是距1970年1月1日午夜（GMT时间）的毫秒数，方法getTime()可以把它内部表示转换成其他形式。采用标准的毫秒格式时，日

## 例子

    d = new Date( ); // Get the current date and time
    document.write('Today is: " + d.toLocaleDateString( ) + '. '); // Display date
    document.write('The time is: ' + d.toLocaleTimeString( )); // Display time
    var dayOfWeek = d.getDay( ); // What weekday is it?
    var weekend = (dayOfWeek == 0) || (dayOfWeek == 6); // Is it a weekend?
    Date对象的另一种常见的用法是用某个时间的毫少表示减去当前时间的毫秒表示来判断（两个而间之前的时差）。
    <script language="JavaScript">
    today = new Date( ); // Make a note of today's date
    christmas = new Date( ); // Get a date with the current year
    christmas.setMonth(11); // Set the month to December...
    christmas.setDate(25); // and the day to the 25th
    // If Christmas hasn't already passed, compute the number of
    // milliseconds between now and Christmas, convert this
    // to a number of days and print a message
    if (today.getTime() < christmas.getTime( )) {
        difference = christmas.getTime() - today.getTime( );
        difference = Math.floor(difference / (1000 * 60 * 60 * 24));
        document.write('Only ' + difference + ' days until Christmas!<p>');
    }
    </script>
    // ... rest of HTML document here ...
    <script language="JavaScript">
    // Here we use Date objects for timing
    // We divide by 1000 to convert milliseconds to seconds
    now = new Date( );
    document.write('<p>It took ' +
        (now.getTime()-today.getTime( ))/1000 +
        'seconds to load this page.');
    </script>

## 参阅

Dte.parse(), Date.UTC()

