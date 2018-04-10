---
layout: apipost
title: fitRowHeightAll
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/fitRowHeightAll/
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

 모든 행의 높이를 표시되는 데이터에 맞게 변경한다.   
 (* displayOptions.eachRowResizable: true로 지정되어 있어야 한다. multiLine인 경우 textWrap: "explicit"로 지정 )   
 `*데이터 행의 수가 많은 경우 브라우져에서 응답없음이 발생할 수 있으므로 주의해서 사용한다.*`

#### Syntax

> function fitRowHeightAll(maxHeight, textOnly)  

#### Parameters

> **maxHeight**  
> Type: Number  
> 0으로 지정시 데이터의 양에 따라 높이 제한 없이 변경된다. 값 지정시 데이터의 양이 많아도 지정한 행 높이 만큼까지만 변경 된다.    

> **textOnly**  
> Type: Boolean  
> Default: true  
> 텍스트 컬럼만을 대상으로 높이 계산을 수행한다.   

#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
gridView.fitRowHeightAll(100,true);    
</pre>

---

#### API Links

* [fitRowHeight](/api/GridBase/fitRowHeight)
* [setRowHeight](/api/GridBase/setRowHeight)
* [clearRowHeights](/api/GridBase/clearRowHeights)

#### Demo Links

* [fitRowHeight](http://demo.realgrid.com/Columns/FitRowHeight)