---
layout: apipost
title: setSortingOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setSortingOptions/
tags:
  - sort
  - sortOption
  - 정렬
---


#### Description

> 그리드 정렬과 관련된 정보들을 설정한다. [SortingOptions](/api/types/SortingOptions/)이 설정 모델이다.

#### Syntax

> function setSortingOptions(options)

#### Parameters

> **options**  
> Type: object  
> [SortingOptions](/api/types/SortingOptions/) 모델과 같은 설정 정보. [SortingOptions](/api/types/SortingOptions/) 중 변경하고자 하는 속성만 전달하면 된다.    

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    gridView.setSortingOptions({
        enabled: true,
        style: "exclusive",
        ...
    });
</pre>

#### Demo Links
#### See Also

#### See Also
> [getSortingOptions](/api/GridBase/getSortingOptions)  
> [Sort Demo](http://demo.realgrid.com/Demo/ColumnSorting)