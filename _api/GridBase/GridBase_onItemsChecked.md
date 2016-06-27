---
layout: apipost
title: onItemsChecked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onItemsChecked/
tags:
  - check
  - 체크
  - checkBar
  - checkItem
---


#### Description

> [checkItems](/api/GridBase/checkItems/)을 입력하여 여러건의 체크상태를 변경하면 호출된다.  

#### Syntax

> function function(grid, items, checked)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **items**  
> Type: Array of Number  
> 체크상태가 변경된 아이템인덱스 배열이다.  

> **checked**  
> Type: Boolean  
> 체크가 되었으면 true, 해제가 되었으면 false가 출력된다.  

#### Return

> None.

#### Example

<pre class="prettyprint">
    gridView.onItemsChecked =  (grid, items, checked) {
        console.log("onItemsChecked", items, checked);
    };
</pre>

#### See Also
> [checkItems](/api/GridBase/checkItems)