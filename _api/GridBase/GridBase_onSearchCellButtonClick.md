---
layout: apipost
title: onSearchCellButtonClick
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onSearchCellButtonClick/
jsonly: true
versions:
  - JS 1.1.22+
tags:
  - editor
  - search
  - event
---


#### Description

 [SearchCellEditor](/api/types/SearchCellEditor/)에서 버튼을 클릭했을때 발생한다.    
 
#### Syntax

> function onSearchCellButtonClick(grid, index, text)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **index**  
> Type:  [CellIndex](/api/types/CellIndex/)  
> 변경된 CellIndex  

> **text**  
> Type: *  
> 셀이 입력된 값 

#### Return

None.

#### Examples 

<pre class="prettyprint">

gridView.onSearchCellButtonClick = function (grid, index, text) {
    console.log("onSearchCellButtonClick:" + index.itemIndex + "," + index.column + ", " + text);
};

</pre>

---

#### Tutorial Links

* [Search Editor](/tutorial/b7-10/)

#### API Links

* [fillEditSearchItems](/api/GridBase/fillEditSearchItems)

#### Demo Links

* [Editor Demo](http://demo.realgrid.com/Editing/Editors/)