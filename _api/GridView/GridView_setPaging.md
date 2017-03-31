---
layout: apipost
title: setPaging
part: Objects
objectname: GridView
directiontype: Function
permalink: /api/GridView/setPaging/
tags: 
  - 페이지 설정
  - 페이징 모드
  - 페이지 수
  - 페이지 행 개수
  - pageCount
  - pageSize
---


#### Description

 그리드가 [Paging](/api/features/Paging/) 모드로 실행되도록 한다. 

#### Syntax

> function setPaging(paging, pageSize, pageCount, pageSource)

#### Parameters

> **paging**  
> Type: Boolean  
> true면 그리드가 페이징 모드로 데이터를 표시한다.

> **pageSize**  
> Type: number  
> Default: 10  
> 페이지에 표시할 행의 개수.

> **pageCount**  
> Type: number  
> Default: -1  
> 페이지 수.

> **pageSoruce**  
> Type: "rows" | "items"  
> Default: "rows"  
> Paging 처리에 사용되는 원본 데이터의 유형, "items"로 하면 화면상에 보여지는 행을 기준으로 paging처리한다.

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    gridView.setPaging(true, 10, -1);
</pre>

---

#### Demo Links

* [PagingOverview](http://demo.realgrid.com/Paging/paging1){:target="_blank"}