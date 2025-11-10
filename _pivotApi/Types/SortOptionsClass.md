---
layout: apipost
title: SortOptions
part: Types
typename: Classes
order: SortOptions
objectname: 
directiontype: 
permalink: /pivotApi/types/SortOptions/
versions:
  - 1.0.16+
tags: 
  - SortOptions
  - 정렬옵션
---

#### Description

 피벗 그리드의 정렬과 관련된 정보들에 대한 설정 모델이다.

#### Properties

> **valueFieldSortable**  
> Type: Boolean   
> Default: false      
> `true`로 지정하면 valueField로 정렬할수 있다.   
> `alwaysSort`가 `false`인 경우에만 적용된다.        

> **alwaysSort**    
> Type: Boolean    
> Default: true
> `false`로 지정하면 rowField를 클릭했을때 `순차정렬` => `역차정렬` => `정렬안함` 순으로 정렬상태가 변경된다.    

> **sortByLabel**    
> Type: Boolean    
> Default: false    
> `true`로 설정하면 행 또는 컬럼에 labelField가 지정된 경우 labelField의 값으로 정렬한다.    

> **keepFocusCell**    
> Type: Boolean    
> Default: true    
> `true`로 설정하면 정렬시 현재 선택된 셀을 유지한다.    
    


#### Examples   

<pre class="prettyprint">
pivot.setOptions({
    sort: {
        valueFieldSortable: true,
        alwaysSort: false
    }
});

or

pivot.setSortOptions({
    valueFieldSortable: true,
    alwaysSort: false
});
</pre>

---

#### API Links

* [setSortOptions](/pivotApi/RealPivot/setSortOptions/)   
* [getSortOptions](/pivotApi/RealPivot/getSortOptions/)   


