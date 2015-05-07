---
layout: apipost
title: onPageChanged
part: Objects
objectname: GridView
directiontype: Callback
permalink: /api/GridView/onPageChanged/
---


#### Description

> 그리드가 [Paging](/api/GridView/) 상태일 때, 다른 페이지로 이동한 후 호출된다.

#### Syntax

> function onPageChanged(grid, page)

#### Arguments

> **grid**
> Type: [GridView\|GridView](/api/GridView/)
> GridView 컨트롤

> **page**
> Type: number
> 새로 이동한 페이지 인덱스.

#### Return

None.

#### Example

<pre class="prettyprint">
    grid.onPageChanged =  function (grid, page) {
        alert("Page moved to " + page);
    }
</pre>

