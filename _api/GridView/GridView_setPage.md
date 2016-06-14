---
layout: apipost
title: setPage
part: Objects
objectname: GridView
directiontype: Function
permalink: /api/GridView/setPage/
tags: 
  - 페이지 번호 지정
  - paging
---


#### Description

 [Paging](/api/features/Paging/) 모드일 때 표시할 페이지 번호를 지정한다.

#### Syntax

> function setPage(page, startRow)

#### Parameters

> **page**  
> Type: number  
> 페이지 번호.

> **startRow**  
> Type: number  
> 이 페이지에 표시할 첫번째 행의 인덱스. -1이면 [setPaging](/api/GridView/setPaging)에 지정한 페이지 크기에 따라 결정된다. 지정하지 않으면 -1이다.

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
var count = gridView.getPageCount();
gridView.setPage(count - 1);
</pre>

---

#### Demo Links

* [Paging](http://demo.realgrid.com/Demo/PagingLazyLoading){:target="_blank"} 