---
layout: apipost
title: onEditCommit
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onEditCommit/
---


#### Description

> 사용자 입력이 행에 반영될때 발생한다.
> setValue 등 사용자 코드로 변경될때는 발생하지 않는다.

#### Syntax

> function onEditCommit(grid, index, oldValue, newValue) 

#### Arguments

> **grid**
> Type: [GridView\|GridView](/api/GridBase/)
> GridView 컨트롤

> **index**
> Type:  [CellIndex\|CellIndex](/api/GridBase/)
> 변경된 CellIndex

> **oldValue**
> Type: **
> 편집전 셀의 데이터 값

> **newValue**
> Type: **
> 편집후 셀의 데이터 값

#### Return

None.

#### Example

<pre class="prettyprint">
    grid.onEditCommit = function (id, index, oldValue, newValue) {
        console.log("onEditCommit:" + index.itemIndex + "," + index.column + ", " + oldValue + " => " + newValue);        }
    };
</pre>

