---
layout: apipost
title: onGetEditValue
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onGetEditValue/
tags:
  - editor
  - dropDownEditor
  - searchcelleditor
  - datecelleditor
  - editresult
  - value
---


#### Description

셀 편집이 완료되었을때 발생하는 이벤트이다.    
[DropDownCellEditor](/api/types/DropDownCellEditor/), [SearchCellEditor](/api/types/SearchCellEditor/)의 경우 editResult.text에는 labels에 해당하는 값이 출력되고 editResult.value에는 values에 해당하는 값이 출력된다.    
[DateCellEditor](/api/types/DateCellEditor/)의 경우에는 editResult.text에는 editor의 datetimeFormat으로 Formatting된 값이 출력되고 editResult.value에는 Date객체가 출력된다.    
다른 Editor의 경우 text와 value에 동일한 값이 출력된다.

#### Syntax

<pre class="prettyprint">
function onGetEditValue(grid, index, editResult)  
</pre>

#### Arguments  

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **index**  
> Type:  [CellIndex](/api/types/CellIndex/)  
> 편집된 CellIndex  

> **editResult**  
> Type:  Object  
> 편집된 셀의 text와 value를 속성으로 갖는 단순한 객체로서 셀 편집기의 종류에 따라 출력되는 값이 달라진다.     
> [DropDownCellEditor](/api/types/DropDownCellEditor/), [SearchCellEditor](/api/types/SearchCellEditor/)의 경우 editResult.text에는 labels에 해당하는 값이 출력되고 editResult.value에는 values에 해당하는 값이 출력된다.    
> [DateCellEditor](/api/types/DateCellEditor/)의 경우에는 editResult.text에는 editor의 datetimeFormat으로 Formatting된 값이 출력되고 editResult.value에는 Date객체가 출력된다.    

#### Return  

> None.

#### Examples 

<pre class="prettyprint">
dataProvider.setFields([
    {fieldName:"code"},
    {fieldName:"codeName"}
]);
....
gridView.setColumns([
    {fieldName:"code", name:"code", labels:["A","B","C"], values[1,2,3], lookupDisplay:true, labelField:"codeName", editor:{type:"dropDown"}}
]);
....
gridView.onGetEditValue = function (grid, index, editResult) {
    if (index.column === "code") {
        grid.setValue(index.itemIndex, "codeName", editResult.text)
    }
} 
</pre>

---

#### Demo Links

* [Column Lookup](http://demo.realgrid.com/CellComponent/LookupColumn/)
* [Editors](http://demo.realgrid.com/Editing/Editors/)

