---
layout: apipost
title: setFilteringOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setFilteringOptions/
tags:
  - filter
  - 필터링옵션
  - option
---


#### Description

> 그리드 필터링과 관련된 정보들을 설정한다. [FilteringOptions](/api/types/FilteringOptions/)이 설정 모델이다.

#### Syntax

> function setFilteringOptions(options)

#### Parameters

> **options**  
> Type: object  
> [FilteringOptions](/api/types/FilteringOptions/) 모델과 같은 설정 정보. [FilteringOptions](/api/types/FilteringOptions/) 중 변경하고자 하는 속성만 전달하면 된다.    

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    gridView.setFilteringOptions({
        enabled: true,
        ...
    });
</pre>

#### Demo Links
#### See Also

#### See Also
> [getFilteringOptions](/api/GridBase/getFilteringOptions)  
> [Filtering Demo](http://demo.realgrid.com/Demo/ColumnFiltering)