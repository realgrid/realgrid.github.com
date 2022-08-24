---
layout: apipost
title: getCellValuesAt
part: Objects
objectname: getCellValuesAt
directiontype: Function
permalink: /pivotApi/RealPivot/getCellValuesAt/
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

> function getCellValues(index)  

#### Parameters

> **cellIndex**
> Type: String
> 피벗 셀인덱스를 지정한다.  
> 생략하면 현재 선택된 셀의 값을 가져온다.


#### Return value

> Type: Object
> 피벗그리드의 값들을 계층 구조로 가져온다.        

#### Examples 

[pivot](/images/pivot/pivots1.png)

셀 포커스가 위치한 BMW-대형, 1사분기-3월의 판매수량의 데이터를 가져오는 예제

<pre class="prettyprint">
var curr = pivot.getCurrent();
var values = pivot.getCellValuesAt(curr);

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


