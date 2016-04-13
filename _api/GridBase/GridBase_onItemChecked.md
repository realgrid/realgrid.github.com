---
layout: apipost
title: onItemChecked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onItemChecked/
tags:
  - event
  - check
  - checkBar
  - checkItem
---


#### Description

> 사용자가 checkBar의 체크박스를 클릭하거나 [GridBase checkItem](/api/GridBase/checkItem/)을 호출하여 체크를 변경한 경우 호출된다.  

#### Syntax

> function onItemChecked(grid, itemIndex, checked)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **itemIndex**  
> Type: Number  
> 체크된 데이터행의 아이템 인덱스이다.  

> **checked**  
> Type: Boolean  
> 체크되었으면 true, 해제되었으면 false가 출력된다.  

#### Return

> None.

#### Examples 

<pre class="prettyprint">
    gridView.onItemChecked = function (grid, itemIndex, checked) {
        console.log("onItemChecked:",grid.id, itemIndex, checked);
    };
</pre>

#### Demo Links
> [CheckBar](/api/types/CheckBar), [CheckBar Demo](http://demo.realgrid.com/Demo/CheckBar)