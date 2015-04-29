---
layout: apipost
title: setPaging
part: Objects
objectname: GridView
directiontype: Function
permalink: /api/GridView/setPaging/
---


#### Description

> 그리드가 [Paging](/api/GridView/) 모드로 실행되도록 한다. 

#### Syntax

> function setPaging(paging, pageSize, pageCount, pageSource)

#### Parameters

> *paging*
> Type: number
> true면 그리드가 페이징 모드로 데이터를 표시한다.

> *pageSize*
> Type: number
> 페이지에 표시할 행의 개수. 지정하지 않으면 10.

> *pageCount*
> Type: number
> 페이지 개수. 지정하지 않으면 -1.

> *pageSoruce*
> Type:
>

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grid.setPaging(true, 10, -1);
</pre>

