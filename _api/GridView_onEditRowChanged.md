---
layout: apipost
title: onEditRowChanged
part: Objects
objectname: GridView
directiontype: Callback
permalink: /api/GridView/onEditRowChanged/
---


#### Description

> setValue나 사용자의 입력에 의해 행의 값이 변경될때 발생한다.

#### Syntax

> function onEditRowChange(grid, itemIndex, dataRow, field, oldValue, newValue)

#### Arguments

> grid
> Type: [GridView|GridView](/api/GridView/)
> GridView 컨트롤

> itemIndex
> Type: number
> Grid상의 인덱스

> dataRow
> Type: number
> provider에서의 고유 번호

> field
> Type: string
> 편집이된 필드의 이름

> oldValue
> Type: *
> 편집전 셀의 데이터 값

> newValue
> Type: *
> 편집후 셀의 데이터 값

#### Return

None.

#### Example

<pre class="prettyprint">
    grid.onEditRowChanged = function (grid, itemIndex, dataRow, field, oldValue, newValue){
        console.log(grid, itemIndex, dataRow, field, oldValue, newValue);
        }
    };
</pre>

