---
layout: apipost
title: SortStyle
part: Types
typename: Constants
order: SortStyle
objectname: 
directiontype: 
permalink: /api/types/SortStyle/
tags:
    - 컬럼정렬방법
    - 단일컬럼정렬
    - 다중컬럼정렬
---


#### Description

 그리드 컬럼 Header 클릭 시 정렬하는 방법을 정의 합니다.

#### Memebers

> **NONE**      
> Value: "none"        
> 정렬하지 않습니다.                                       

> **EXCLUSIVE**   
> Value: "exclusive"   
> 마지막으로 클릭한 컬럼으로 정렬합니다.                   

> **INCLUSIVE**   
> Value: "inclusive"   
> 처음으로 클릭한 컬럼을 우선으로 순서대로 정렬합니다.     

> **REVERSE**  
> Value: "reverse"  
> 마지막으로 클릭한 컬럼을 우선으로 순서대로 정렬합니다. 

#### Examples 

<pre class="prettyprint">
var options = {};
options.style = "exclusive";
gridView.sortingOptions(options);
</pre>

---

#### API Links

* [Sorting](/api/features/Sorting/)
* [SortingOptions](/api/types/SortingOptions/)

#### Tutorial Links

* [A12 소팅(sorting), 데이터 정렬하기 - I 단일 컬럼 정렬](http://help.realgrid.com/tutorial/a12/)
* [A13 소팅(sorting), 데이터 정렬하기 - II 다중 컬럼 정렬](http://help.realgrid.com/tutorial/a13/)

#### Demo Links

* [Column Sorting Demo](http://demo.realgrid.com/Columns/ColumnSorting/)
