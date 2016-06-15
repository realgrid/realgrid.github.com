---
layout: apipost
title: onEditChange
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onEditChange/
tags:
  - event
  - edit
  - key
  - 입력
---


#### Description

 아이템이 사용자의 Key입력등으로 값이 변경되면 호출된다.  

#### Syntax

> function onEditChange(grid, index, value)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **index**  
> Type: [CellIndex](/api/types/CellIndex/)  
> CellIndex 모델 값을 갖는 현재 포커스 셀 위치 정보  

> **value**  
> Type: *  
> 편집중인 셀의 데이터 값  

#### Return

None.

#### Examples 

<pre class="prettyprint">
gridView.onEditChange =  function (grid, index, value) {
    console.log("grid ==>",grid.id," field ==>",index.fieldName," value==>",value);
};
</pre>

