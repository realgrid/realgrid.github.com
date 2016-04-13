---
layout: apipost
title: onEditCommit
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onEditCommit/
tags:
  - event
  - 편집완료
  - commit
---


#### Description

> 사용자 입력이 셀에 반영될때 발생한다.  
> 편집중인 셀에서 다른 셀로 이동하거나 또는 [commitEditor](/api/GridBase/commitEditor)를 호출하면 발생한다.  
> setValue 등 사용자 코드로 변경될때는 발생하지 않는다.  

#### Syntax

> function onEditCommit(grid, index, oldValue, newValue)   

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **index**  
> Type:  [CellIndex](/api/types/CellIndex/)  
> 변경된 CellIndex  

> **oldValue**  
> Type: *  
> 편집전 셀의 데이터 값  

> **newValue**  
> Type: *  
> 편집후 셀의 데이터 값  

#### Return

None.

##### Examples 

<pre class="prettyprint">
    gridView.onEditCommit = function (id, index, oldValue, newValue) {
        console.log("onEditCommit: " + index.itemIndex + ", " + index.column + ", " + oldValue + " => " + newValue);   
</pre>

#### See Also
> [onEditCanceled](/api/GridBase/onEditCanceled), [commitEditor](/api/GridBase/commitEditor)