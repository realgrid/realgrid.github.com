---
layout: apipost
title: onPageChanged
part: Objects
objectname: GridView
directiontype: Callback
permalink: /api/GridView/onPageChanged/
tags: 
  - 페이지 이동 이벤트
---


#### Description

> 그리드가 [Paging](/api/features/Paging/) 상태일 때, 다른 페이지로 이동한 후 호출된다.

#### Syntax

> function onPageChanged(grid, page)

#### Arguments

> **grid**  
> Type: [GridView](/api/GridView/)  
> GridView 컨트롤

> **page**  
> Type: number  
> 새로 이동한 페이지 인덱스.

#### Return

> None.

#### Examples 

<pre class="prettyprint">
    gridView.onPageChanged =  function (grid, page) {
        alert("Page moved to " + page);
    }
</pre>

---

#### See Also

> [PagingLazyLoading](http://demo.realgrid.com/Demo/PagingLazyLoading2#.example){:target="_blank"} 참조