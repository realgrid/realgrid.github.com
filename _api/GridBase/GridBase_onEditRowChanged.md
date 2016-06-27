---
layout: apipost
title: onEditRowChanged
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onEditRowChanged/
tags:
  - event
  - edit
  - 편집
---


#### Description

 사용자 입력이나 setValue 등 사용자 코드로 변경된 값이 행에 반영될때 발생한다.  
 그러나 PasteOptions.noEditEvent가 true이면 발생하지 않는다.  

#### Syntax

> function onEditRowChanged(grid, itemIndex, dataRow, field, oldValue, newValue)   

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **itemIndex**  
> Type:  number  
> 변경된 ItemIndex  

> **dataRow**  
> Type:  number  
> 변경된 dataRow  

> **oldValue**  
> Type: *  
> 편집전 셀의 데이터 값  

> **newValue**  
> Type: *  
> 편집후 셀의 데이터 값  

#### Return

> None.

#### Examples 

<pre class="prettyprint">
gridView.onEditRowChanged = function (grid, itemIndex, dataRow, field, oldValue, newValue) {
    var v = grid.getValue(itemIndex, field);
    console.log("onEditRowChanged, " + field + ": " + oldValue + " => " + newValue);  
};
</pre>

