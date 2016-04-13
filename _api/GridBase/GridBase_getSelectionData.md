---
layout: apipost
title: getSelectionData
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getSelectionData/
tags:
  - select
---


#### Description

> 현재 선택 영역에 포함된 셀들의 값을 가져온다.  

#### Syntax

> function getSelectionData(maxRows)  

#### Parameters

> **maxRows**  
> Type: number  
> 반환할 최대 행의 개수. 지정하지 않으면 -1. 0보다 작은 값이면 제한 없이 모든 행을 가져온다.  

#### Return value

> Type: object  
> 셀 데이터들.  

#### Examples 

<pre class="prettyprint">
    var data = grid.getSelectionData(10);
    $("#txtTitle").text("selected values :").show();
</pre>

#### Demo Links
> [getSelection](/api/GridBase/getSelection)

