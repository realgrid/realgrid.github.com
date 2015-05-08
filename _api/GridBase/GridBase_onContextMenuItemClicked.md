---
layout: apipost
title: onContextMenuItemClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onContextMenuItemClicked/
---


#### Description

> [GridBase setContextMenu](/api/GridBase/setContextMenu/)를 통해 추가한 Flash 컨텍스트 메뉴 항목을 오른쪽 마우스로 클릭했을 때 호출된다.  

#### Syntax

> function onContextMenuItemClicked (grid, label, index)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/types/GridBase/)  
> GridBase 컨트롤  

> **label**  
> Type: string  
> 메뉴 항목의 label.  

> **index**  
> Type: object  
> 마우스가 클릭된 위치의 셀 인덱스. [CellIndex](/api/types/CellIndex/) 모델과 같은 구조의 object.  

#### Return

None

#### Example

<pre class="prettyprint">
    grid.onContextMenuItemClicked = function (grid, label, index) {
        alert("Context menu가 클릭됐습니다: " + label + "n" + JSON.stringify(index));

        var selRow = dataProvider.getRow(index.dataRow);
        console && console.log(selRow);
    };
</pre>

