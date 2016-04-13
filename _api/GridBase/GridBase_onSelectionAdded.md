---
layout: apipost
title: onSelectionAdded
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onSelectionAdded/
tags:
  - selection
  - event
---


#### Description

> 선택 영역이 새로 추가됐을 때 호출된다.  

#### Syntax

> function onSelectionAdded (grid, selection)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **selection**  
> Type: [SelectionItem](/api/types/SelectionItem/)과 같은 구조의 object.  
> 선택 영영 정보.  

#### Return

> None.  

#### Examples 

<pre class="prettyprint">
    gridView.onSelectionAdded =  function (grid, selection) {
      console.log(selection);
    };
</pre>

#### See Also
> [onSelectionChanged](/api/GridBase/onSelectionChanged)