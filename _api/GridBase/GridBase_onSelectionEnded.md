---
layout: apipost
title: onSelectionEnded
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onSelectionEnded/
tags:
  - selection
  - event
---


#### Description

 사용자가 마우스나 키보드로 선택 영역 변경을 완료했을 때 호출된다. 변경된 선택 영역의 정보는 [getSelection](/api/GridBase/getSelection/)함수로 알수 있고 선택영역의 데이터는 
 [getSelectionData](/api/GridBase/getSelectionData/) 함수로 알 수 있다.  

#### Syntax

> function OnSelectionEnded (grid)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

#### Return

> None.  

#### Examples 

<pre class="prettyprint">
gridView.OnSelectionEnded =  function (grid) {
    var cells = grid.getSelectionData();
    console.log(cells);  
};
</pre>

---

#### API Links

* [onSelectionChanged](/api/GridBase/onSelectionChanged)