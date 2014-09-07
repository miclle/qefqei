# Arguments.length _ECMAScript v1_

传递给函数的参数个数

## 描述

Arguments对象的属性length声明了传递参数给当前函数的参数个数。该属性只在函数体内被定义。  
注意，这个属性声明的是实际传递给函数的参数个数，而不是期望传递的参数个数。有关声明的参数个数，请参阅属性"Function.length"。还要注意，该属性不具备Array.length属性的专有行为。

## 例子

    function check(args){
      var actual = args.length;//The actual number of arguments
      var expected = args.callee.length; //The expected number of arguments
      if(actual != expected){ //Throw exception if they don't match
        throw new Error("Wrong number of arguments: expected: "+
       expected + "; actually passed " + actual);
      }
    } 
    //A function that demonstrates how to use the function above
    function f(x,y,z) {
      check(arguments); //Check for correct number of arguments
      return x + y + z; //Now do the rest of the function normally
    }

## 参阅

Array.length,  Function.length

