---
layout: apipost
title: fitColumnWidth
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/fitColumnWidth/
tags:
  - columnWidth
  - width
---


#### Description

> 컬럼의 폭을 데이터에 따라 자동으로 조절한다.  

#### Syntax

> function fitColumnWidth (column, maxWidth, minWidth, visibleOnly)   

#### Parameters

> **column**  
> Type: Object\|String  
> Data Column, 폭을 지정할 컬럼을 지정한다.   
> null을 입력하면 전체 컬럼에 적용된다.  

> **maxWidth**  
> Type: Number  
> Default: 0  
> 조절되는 최대 폭을 지정한다. 0을 입력하면 데이터의 길이에 따라 변경된다.  

> **minWidth**  
> Type: Number  
> Default: 0  
> 조절되는 최소 폭을 지정한다. 0을 입력하면 데이터의 길이에 따라 변경된다.  

> **visibleOnly**  
> Type: Boolean  
> Default: true  
> 현재 그리드에 보이는 데이터만 가지고 폭을 결정한다.  

#### Return value

> None.  


#### Examples 

<pre class="prettyprint">
    gridView.fitColumnWidth('CustomerID', 200, 10, true);
</pre>

#### See Also
> [GridFitting](http://demo.realgrid.com/Demo/GridFitting)