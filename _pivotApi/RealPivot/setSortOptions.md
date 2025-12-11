---
layout: apipost
title: setSortOptions
part: Objects
objectname: setSortOptions
directiontype: Function
permalink: /pivotApi/RealPivot/setSortOptions/
versions:
  - 1.0.16+
tags:
  - 정렬
  - sortOptions
  - 옵션
---


#### Description

 피벗 그리드의 Sort옵션정보들을 설정한다.    

#### Syntax

> function setSortOptions(options)

#### Parameters

> **options**   
> Type: Object   
> [SortOptions](/pivotApi/types/SortOptions/)로 구성된 객체     

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
pivot.setSortOptions({
    valueFieldSortable: true,
    alwaysSort: false
});
</pre>

---

#### API Links

* [SortOptions](/pivotApi/types/SortOptions/)   
* [getSortOptions](/pivotApi/RealPivot/getSortOptions/)   
