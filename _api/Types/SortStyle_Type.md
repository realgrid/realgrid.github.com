---
layout: apipost
title: SortStyle
part: Types
typename: Constants
order: SortStyle
objectname: 
directiontype: 
permalink: /api/types/SortStyle/
---


#### Description

> 그리드 컬럼 Header 클릭 시 정렬하는 방법을 정의 합니다.

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

#### Example

<pre class="prettyprint">
    var options = {};
    options.style = "exclusive";
    grdMain.sortingOptions(options);
</pre>

#### See Also

> [Column Sorting Demo](http://demo.realgrid.net/Demo/ColumnSorting) 참조

