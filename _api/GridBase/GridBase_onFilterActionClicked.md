---
layout: apipost
title: onFilterActionClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onFilterActionClicked/
---


#### Description

> 사용자가 임의의 동작을 할 수 있게 추가한 filter action을 클릭했을때 발생한다.   

#### Syntax

> function onFilterActionClicked(grid, column, action, x, y)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **column**  
> Type: String\|Object  
> column명 또는 [DataColumn](/api/types/DataColumn/)객체.  

> **action**  
> Type: String  
> [ColumnFilterAction](/api/types/ColumnFilterAction/)객체의 이름.  

> **x**  
> Type: Number  
> FilterAction에서 별도의 창을 표시할때 사용하는 x좌표.
> Column Filter Icon에서 이벤트가 동작된 경우는 그리드 좌측 경계에서부터 컬럼의 현재 표시된 위치의 좌측 경계까지의 pixel, Filter List에서 이벤트가 동작한 경우는 Filter List의 x좌표

> **y**  
> Type: Number  
> FilterAction에서 별도의 창을 표시할때 사용하는 y좌표.
> 그리드 상단 경계에서부터 Body영역의 상단까지의 pixel. 

#### Return value

> none  

#### Example

<pre class="prettyprint">
grdMain.onFilterActionClicked = function (grid, column, action, x, y) {
  var offset = $("#realgrid").offset();
  x += offset.left;
  y += offset.top;
  window.open("http://demo.realgrid.com", "_blank", "top=" + y + ", left=" + x + ", width=500, height=400");
};</pre>
