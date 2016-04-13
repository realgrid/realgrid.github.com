---
layout: apipost
title: checkAll
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/checkAll/
tags:
  - check
---


#### Description

> 그리드의 데이터행을 모두 체크,해제한다. [CheckBar](/api/types/CheckBar/)의 exclusive에 영향을 받지않는다.  

#### Syntax

> function checkAll(checked, visibleOnly, checkableOnly)  

#### Parameters

> **checked**  
> Type: Boolean  
> Default: true  

> **visibleOnly**  
> Type: Boolean  
> Default: false  
> collapse로 인해 접혀서 보이지 않는 행의 포함여부    

> **checkableOnly**  
> Type: Boolean  
> Default: false  
> 체크가능한 행만 체크할 것인지의 여부    

#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
    gridView.checkAll(true,false);
</pre>

#### Demo Links
> [checkItem](/api/GridBase/checkItem), [checkItems](/api/GridBase/checkItems), [setCheckable](/api/GridBase/setCheckable), [setCheckableExpression](/api/GridBase/setCheckableExpression)    
> [CheckBar Demo](http://demo.realgrid.com/Demo/CheckBar)