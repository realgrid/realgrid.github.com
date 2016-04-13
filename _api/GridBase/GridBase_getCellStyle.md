---
layout: apipost
title: getCellStyle
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getCellStyle/
tags:
  - cellStyle
  - dataCellStyle
---


#### Description

> dataRow 행의 field 셀에 지정된 DataCellStyle을 가져온다.   

#### Syntax

> function getCellStyle(dataRow, field)  

#### Parameters

> **dataRow**  
> Type: number  
> 셀 스타일을 가져올 데이터 행의 번호  

> **field**  
> Type: string \| number  
> 셀 스타일을 가져올 필드명이나 필드순서  

#### Return value

> Type: string  
> 셀 스타일 id가 반환된다.  

#### Examples 

<pre class="prettyprint">
    gridView.addCellStyle("style02", {
        "paddingLeft": 15,
        "background": "#000000",
        "foreground": "#ffffff"
    }, true);
    gridView.setCellStyle(4, 1, "style02");
    gridView.setCellStyle(4, 3, "style02");
    gridView.setCellStyle(3, 2, "style02");

    gridView.getCellStyle(4, 1);
</pre>

#### See Also
[DataCellStyle Demo](http://demo.realgrid.com/Demo/DataCellStyleConcept)