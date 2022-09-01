---
layout: apipost
title: getCellValues
part: Objects
objectname: getCellValues
directiontype: Function
permalink: /pivotApi/RealPivot/getCellValues/
versions:
  - 1.0.9+
tags:
  - 컬럼
  - 로우
  - 필드
  - 값
  - values
  - column
  - row
  - field
---


#### Description

 피벗 그리드에 표시되고 있는 값들을 계층 구조로 가져온다.

#### Syntax

> function getCellValues(valueField, rowPath, columnPath)  

#### Parameters

> **valueField**
> Type: String
> 값 필드의 이름을 지정한다.

> **rowPath**
> Type: Object | Array
> 가져오려는 객체정보의 row정보를 지정한다. Object 또는 값 배열로 지정한다.

> **columnPath**
> Type: Object | Array
> 가져오려는 객체정보의 column정보를 지정한다. Object 또는 값 배열로 지정한다.

#### Return value

> Type: Object
> 피벗그리드의 값들을 계층 구조로 가져온다.        

#### Examples 

[pivot](/images/pivot/pivots1.png)

BMW-대형, 1사분기-3월의 판매수량 데이터를 가져오는 예제

<pre class="prettyprint">
var values = pivot.getCellValues("판매수량", ["BMW", "대형"], [1,3]);

//결과 values
{
  cols: {},
  dataRows: [971, 1091, 5971, 6091],  
  value: 12
}
</pre>

---

#### API Links


* [getRowValues](/pivotApi/RealPivot/getRowValues/)   
* [getColumnValues](/pivotApi/RealPivot/getColumnValues/)    


