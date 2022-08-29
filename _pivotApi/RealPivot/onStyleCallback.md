---
layout: apipost
title: onStyleCallback
part: Objects
objectname: onStyleCallback
directiontype: Callback
permalink: /pivotApi/RealPivot/onStyleCallback/
versions:
  - 1.0.9+
tags:
  - style
  - className
  - className 지정  
---


#### Description

 셀의 배경색 폰트색 등을 지정하기위한 className을 지정한다.           

#### Syntax

> function onStyleCallback(pivot, index, value)

#### Arguments

> **pivot**   
> Type: PivotView      
> pivotView 컨트롤     
 
> **index**   
> Type: Object   
> columns, rows 객체와 valueField    

> **value**   
> Type: Number | string   
>    

#### Return

> Type: String  
> class에 추가할 string 

#### Examples 

<pre class="prettyprint">
<style>
.기아-low {
	background-color: lightblue;
}

.기아-high {
	background-color: lightpink;
}
</style>

pivot.onStyleCallback = function (pivot, index, value) {
    if (index.rows["국가"] === "국산" && index.rows["브랜드명"] === "기아" && index.valueField === "판매수량") {
        var st = '기아';
        if (value < 10000) {
            st += '-low';
        } else if (value > 50000) {
            st += '-high';
        }
        return st;
    }
}
</pre>

---

#### API Links

