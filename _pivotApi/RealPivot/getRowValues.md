---
layout: apipost
title: getRowValues
part: Objects
objectname: getRowValues
directiontype: Function
permalink: /pivotApi/RealPivot/getRowValues/
versions:
  - 1.0.2+
tags:
  - row
  - 필드
  - 값
  - values
  - row
  - field
---


#### Description

 피벗 그리드에 표시되고 있는 값들을 계층 구조로 가져온다.        

#### Syntax

> function getRowValues(valueField, rowIndex, trimNumber)   

#### Parameters

> **valueField**   
> Type: String 
>    
> 값을 가져올 값 필드를 지정한다.  

> **rowIndex**   
> Type: Object     
> 값을 가져오려는 row 객체 정보를 지정한다. 행 번호가 아님에 주의한다.   

> **trimNumber**   
> Type: Boolean    
> Default: true   
> 부동소수점 연산에 의해 발생된 오차 실수 부분을 정리한다.   
> ex) 112.0000000000001 -> 112   


#### Return value

> Type: Object
> 피벗그리드의 값들을 계층 구조로 가져온다.       

#### Examples 

<pre class="prettyprint">
var values = pivot.getRowValues("UnitPrice", {CustomerID: "VINET", OrderID: "10248"}); 
</pre>

---

#### API Links


* [getAllValues](/pivotApi/RealPivot/getAllValues/)   
* [getColumnValues](/pivotApi/RealPivot/getColumnValues/)    


