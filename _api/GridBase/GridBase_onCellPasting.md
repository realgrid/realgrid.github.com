---
layout: apipost
title: onCellPasting
part: Objects
objectname: GridBase
directiontype: Callback
jsonly: true
versions:
  - JS 1.1.34+
permalink: /api/GridBase/onCellPasting/
tags:
  - paste
  - 붙여넣기 
---


#### Description

 붙여 넣기 동작시 셀에 붙여넣는 동작시 발생한다.   
 false를 return하면 그 셀에는 붙여넣기 되지 않는다.        

#### Syntax

> function onCellPasting(grid, index, value)  

#### Arguments  

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **index**  
> Type: [CellIndex](/api/types/CellIndex/)과 같은 구조의 object    
> 클릭된 데이터 셀의 인덱스  

> **value**  
> Type: *    
> 붙여넣기 중인 데이터 값  

#### Return  

> Type: Boolean  
> false를 리턴하면 붙여넣기가 취소된다.  

#### Examples 

<pre class="prettyprint">
gridView.onCellPasting = function(grid, index, value) {
  /* 
  code가 1일때는 붙여넣기허용 2 일때는 붙여넣기불가 그 외에는 cell상태에 따라 결정.
  */
  var code = grid.getValue(index.itemIndex, 'code');
  return code === '1' ? true : code === '2' ? false : null;
}
</pre>

