---
layout: apipost
title: onCurrentChanging
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onCurrentChanging/
---


#### Description

> 그리드의 포커스 셀의 위치가 변경되기 직전에 호출되는 callback 이다. 변경된 후에는 [onCurrentChanged](/api/GridBase/onCurrentChanged/)가 호출된다.  


#### Syntax

> function onCurrentChanging (grid, oldIndex, newIndex)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **oldIndex**  
> Type: [CellIndex](/api/types/CellIndex/)과 같은 구조의 object.  
> 변경 전 인덱스  

> **newIndex**  
> Type: [CellIndex](/api/types/CellIndex/)과 같은 구조의 object.  
> 변경 되는 인텍스  

#### Return

> callback 함수에서 명시적으로 false를 리턴하면 current가 변경되지 않는다.  

#### Example

<pre class="prettyprint">
    grid.onCurrentChanging =  function (grid, oldIndex, newIndex) {
      console.log(oldIndex);
      console.log(newIndex);
    };
</pre>

