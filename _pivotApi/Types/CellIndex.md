---
layout: apipost
title: CellIndex
part: Types
typename: Classes
order: PivotField
objectname: 
directiontype: 
permalink: /pivotApi/types/CellIndex/
tags: 
  - index
  - CellIndex
  - 인덱스
---

#### Description
셀 인덱스의 설정 모델이다.

#### Properties

> **colPath**  
> Type: array of Number    
> 셀의 컬럼 경로 정보이다.      

> **columns**  
> Type: Object   
> 셀이 어느 컬럼으로 구성되었는지의 정보이다.     

> **rowPath**  
> Type: Object   
> 셀의 행 경로 정보이다.     

> **columns**  
> Type: Object   
> 셀이 어느 행으로 구성되었는지의 정보이다.     

> **valueField**  
> Type: String   
> 셀에 표시되고 있는 값의 필드 정보이다.     


#### Examples 

[pivot](/images/pivot/pivots1.png)

셀 포커스가 위치한 BMW-대형, 1사분기-3월의 판매수량의 셀 인덱스

<pre class="prettyprint">
var curr = pivot.getCurrent();

//결과 curr
{
	colPath: (2) [1, 1],            //1분기 -> 1월
	columns: {판매분기: 1, 판매월: 1, valueField: '판매수량'},
	rowPath: (2) ['BMW', '대형'],    //BMW -> 대형
	rows: {브랜드명: 'BMW', 차종: '대형'},
	valueField: "판매수량"
}
</pre>

---
