# Math.pow() _ECMAScript v1_

计算x<sup>y</sup>

## 摘要

Math.pow(x, y)

## 参数

x  
    底数。  
y  
    幂数。

## 返回值

x的y次幂，即x<sup>y</sup>。

## 描述

Math.pow()计算x的y次幂。x和y可以是任意值。但如果结果是虚数或复数，Math.pow()将返回NaN。在实际应用中，这就意味着如果x是一个负数，那么y应该是一个正整数或是一个负整数。还要记住，指数过大会引起浮点溢出，此时该方法将返回Infinity。

