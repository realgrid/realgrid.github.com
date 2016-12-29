---
layout: apipost
title: fitRowHeight
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/fitRowHeight/
jsonly: true
versions:
  - JS 1.1.21+
tags:
  - 행높이변경
  - 높이변경
  - rowheight
  - height
---


#### Description

 지정한 행 높이를 표시되는 데이터에 맞게 변경한다.   
 (* displayOptions.eachRowResizable: true로 지정되어 있어야 한다. multiLine인 경우 textWrap: "explicit"로 지정 )

#### Syntax

> function fitRowHeight(itemIndex, maxHeight, textOnly, refresh)  

#### Parameters

> **itemIndex**  
> Type: Number  
> 높이 변경할 아이템의 index를 지정한다.  

> **maxHeight**  
> Type: Number  
> Default: 0  
> 0으로 지정시 데이터의 양에 따라 높이 제한 없이 변경된다. 값 지정시 데이터의 양이 많아도 지정한 행 높이 만큼까지마 변경 된다.    

> **textOnly**  
> Type: Boolean  
> Default: true  
> 텍스트 컬럼만을 대상으로 높이 계산을 수행한다.   

> **refresh**  
> Type: Boolean  
> Default: true  
> 변경한 행 높이를 바로 화면에 반영할 것인지의 여부를 지정한다.    


#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
gridView.fitRowHeight(1,100,true,true);    
</pre>

---

#### API Links

* [fitRowHeightAll](/api/GridBase/fitRowHeightAll)
* [setRowHeight](/api/GridBase/setRowHeight)
* [clearRowHeights](/api/GridBase/clearRowHeights)

#### Demo Links

* [fitRowHeight](http://demo.realgrid.com/Demo/fitRowHeight)