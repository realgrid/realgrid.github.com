---
layout: apipost
title: setCellStyles
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setCellStyles/
tags:
  - cellStyle
  - style
  - dataCellStyle
---


#### Description

> 하나 이상의 데이터행과 하나 이상의 필드로 구성된 영역에 대해 스타일을 지정한다.  
> field가 0보다 작은 값이면 그 행의 모든 셀에 스타일을 지정하며, styleId를 null로 지정하면 기존에 지정된 스타일을 제거한다.  

#### Syntax

> function setCellStyles(dataRows, fields, styleId)

#### Parameters

> **dataRow**  
> Type: array of number  
> 셀 스타일을 적용할 데이터 행의 번호  

> **field**  
> Type: array of string \| number  
> 셀 스타일을 적용할 필드명이나 필드순서들  

> **styleId**  
> Type: string  
> 적용할 스타일 id  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    gridView.addCellStyle("style03", {
        "background": "#cc880000",
        "foreground": "#ffffff",
        "fontSize": 14
    }, true);
    gridView.setCellStyles([6,7,8,9], [2,3,4,5,6], "style03");
</pre>

#See Also
> [setCellStyle](/api/GridBase/setCellStyle), [addCellStyle](/api/GridBase/addCellStyle), [DataCellStyle Overview](http://demo.realgrid.com/Demo/DataCellStyleConcept)