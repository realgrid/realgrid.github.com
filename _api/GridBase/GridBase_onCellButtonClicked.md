---
layout: apipost
title: onCellButtonClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onCellButtonClicked/
---


#### Description

> 사용자가 데이터셀 내부의 버튼을 클릭했을 때 호출된다.  

#### Syntax

> function onCellButtonClicked (grid, itemIndex, column)  

#### Arguments

> **grid**  
> Type: [GridView](/api/types/GridView/)  
> GridView 컨트롤  

> **itemIndex**  
> Type: number  
> 데이터셀이 포함된 아이템의 인덱스.  

> **column**  
> Type: object  
> 데이터셀에 연결된 컬럼. [DataColumn](/api/types/DataColumn/)과 같은 구조의 object.  

#### Return

> None.  

#### Example

<pre class="prettyprint">
    grid.onCellButtonClicked =  function (grid, itemIndex, column) {
        alert("CellButton Clicked: itemIndex=" + itemIndex + ", fieldName=" + column.fieldName);
    };
</pre>

