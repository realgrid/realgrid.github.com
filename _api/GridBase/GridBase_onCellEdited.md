---
layout: apipost
title: onCellEdited
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onCellEdited/
---


#### Description

> 수정이나 추가 중인 편집 아이템의 한 필드값이 편집 완료되었을 때 호출된다.  

#### Syntax

> function onCellEdited (grid, itemIndex, dataRow, field)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **itemIndex**  
> Type: number  
> 편집 중인 행의 아이템 인덱스.  

> **dataRow**  
> Type: number  
> 편집 중인 행의 데이터 행 번호.  

> **field**  
> Type: number  
> 방금 편집된 필드의 인덱스.  

#### Return

> None.

#### Example

<pre class="prettyprint">
    grid.onCellEdited =  function (grid, itemIndex, dataRow, field) {
        if (field == 2) { // 2 == "Age"
            var v = grid.getValue(itemIndex, field);
            alert(v);
        }
    };
</pre>

