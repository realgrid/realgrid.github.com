---
layout: apipost
title: onCurrentRowChanged
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onCurrentRowChanged/
tags:
  - dataRow
  - event
  - current
  - row Change
---


#### Description

> dataRow의 위치가 변경된 후 호출되는 callback 이다.  
> [onCurrentChanged](/api/GridBase/onCurrentChanged)의 경우 선택된 cell의 itemIndex가 변경되는 경우 발생되지만  
> onCurrentRowChanged의 경우 선택된 cell의 dataRow가 변경되는 경우에 발생한다. 

#### Syntax

> function onCurrentRowChanged (grid, oldRow, newRow)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **oldRow**  
> Number  
> 변경 전 데이터행의 dataRow  

> **newRow**  
> Number  
> 변경 후 데이터행의 dataRow     
> -1인 경우 신규행이거나 또는 dataProvider가 비워진 경우이다.  

#### Return

> None  

#### Example

<pre class="prettyprint">
    gridView.onCurrentRowChanged =  function (grid, oldRow, newRow) {
      alert(onCurrentRowChanged: " + "(" + oldRow + " => " + newRow + ")");
    };
</pre>

#### See Also
> [onCurrentChanged](/api/GridBase/onCurrentChanged)