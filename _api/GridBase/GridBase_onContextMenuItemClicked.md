---
layout: apipost
title: onContextMenuItemClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onContextMenuItemClicked/
tags:
  - event
  - contextMenu
  - popupMenu
---


#### Description

> [GridBase setContextMenu](/api/GridBase/setContextMenu/)를 통해 추가한 컨텍스트 메뉴 항목을 클릭했을 때 호출된다.  
> RealGridJS의 경우 MenuItem.callback이 지정된 경우 호출되지 않는다.

#### Syntax
> RealGridJS  
> function onContextMenuItemClicked (grid, data, index)  
> RealGrid+ Web  
> function onContextMenuItemClicked (grid, label, index)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **label**  
> Type: string  
> 메뉴 항목의 label.  
> RealGrid+ Web 전용 

> **data**  
> Type: [MenuItem](/api/types/MenuItem/)  
> 클릭된 메뉴 항목의 menuItem정보  
> RealGridJS 전용  

> **index**  
> Type: object  
> 마우스가 클릭된 위치의 셀 인덱스. [CellIndex](/api/types/CellIndex/) 모델과 같은 구조의 object.  

#### Return

None

##### Examples 

<pre class="prettyprint">
    gridView.setContextMenu([
        {label:"Menu1"},
        {label:"Menu2"},
        ....
    ]);
    ....
    gridView.onContextMenuItemClicked = function (grid, data, index) {
        alert("Context menu가 클릭됐습니다: " + data.label+"\n"+JSON.stringify(index));

        var selRow = dataProvider.getJsonRow(index.dataRow);
        console && console.log(selRow);
    };
</pre>

