---
layout: apipost
title: onFilterActionClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onFilterActionClicked/
tags:
  - filter
  - userFilter
  - 사용자필터
  - filterAction
---


#### Description

> 사용자가 임의의 동작을 할 수 있게 추가한 filter action을 클릭했을때 발생한다.   
> Column에 설정된 필터가 filter action하나 만 있는 경우 필터아이콘을 클릭했을때 발생한다.

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

##### Examples 

<pre class="prettyprint">
gridView.onFilterActionClicked = function (grid, column, action, x, y) {
  var offset = $("#realgrid").offset();
  x += offset.left;
  y += offset.top;
  window.open("http://demo.realgrid.com", "_blank", "top=" + y + ", left=" + x + ", width=500, height=400");
};</pre>

#### See Also
> [Filtering Demo](http://demo.realgrid.com/Demo/ColumnFiltering)
> [Filter Action 응용 자동 필터 구현](/tutorial/b1-4/)