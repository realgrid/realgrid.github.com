---
layout: apipost
title: onCurrentChanged
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onCurrentChanged/
---


#### Description

> 그리드의 포커스 셀의 위치가 변경된 후 호출되는 callback 이다. 변경되기 직전에는 [onCurrentChanging](/api/GridBase/onCurrentChanging/) 이 호출된다.  

#### Syntax

> function onCurrentChanged (grid, newIndex)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/types/GridBase/)  
> GridBase 컨트롤  

> **newIndex**  
> Type: [CellIndex](/api/types/CellIndex/)과 같은 구조의 object.  
> 변경 되는 인텍스  

#### Return

> None  

#### Example

<pre class="prettyprint">
    grid.onCurrentChanged =  function (grid, newIndex) {
      console.log(newIndex);
    };
</pre>

