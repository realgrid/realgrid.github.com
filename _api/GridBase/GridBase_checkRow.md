---
layout: apipost
title: checkRow
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/checkRow/
tags:
  - check
  - checkRow
---


#### Description

> 지정된 rowId의 데이터행을 체크하거나 해제한다.  

#### Syntax

> function checkRow(rowId, checked, exclusive)  

#### Parameters

> **rowId**  
> Type: Number  
> 데이터행의 Index  

> **checked**  
> Type: Boolean  
> Default: true  
> true를 입력하면 지정된 rowId에 연결된 데이터행을 체크한다.  

> **exclusive**  
> Type: Boolean  
> Default: false  
> true로 입력하면 체크된 다른아이템이 있는 경우 모두 해제하고 rowId에 연결된 데이터행만 체크한다.  

#### Return value

> None.  

##### Examples 

<pre class="prettyprint">
    gridView.checkRow(0,true,false);    
</pre>

#### See Also
> [checkRows](/api/GridBase/checkRows)  
> [CheckBar Demo](http://demo.realgrid.com/Demo/CheckBar)
