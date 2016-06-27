---
layout: apipost
title: setCellStyle
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setCellStyle/
tags:
  - cellStyle
  - style
  - 셀스타일
  - DataCellStyle
---


#### Description

 dataRow 행의 field 셀에 styleId에 해당하는 DataCellStyle을 지정한다.   
 field가 0보다 작은 값이면 그 행의 모든 셀에 스타일을 지정하며, styleId를 null로 지정하면 기존에 지정된 스타일을 제거한다.  

#### Syntax

> function setCellStyle(dataRow, field, styleId, updateNow)

#### Parameters

> **dataRow**  
> Type: number  
> 셀 스타일을 적용할 데이터 행의 번호  
> -1을 입력하는 경우 추가중인 행에 스타일이 적용된다.

> **field**  
> Type: string \| number  
> 셀 스타일을 적용할 필드명이나 필드순서  

> **styleId**  
> Type: string  
> 적용할 스타일 id  

> **updateNow**  
> Type: boolean  
> 지정한 스타일의 바로 반영 여부.   
> 여러번 setCellStyle 을 실행하는 경우 가장 마지막에만 true로 지정한다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
gridView.addCellStyle("style02", {
    "paddingLeft": 15,
    "background": "#000000",
    "foreground": "#ffffff"
}, true);
gridView.setCellStyle(4, 1, "style02");
gridView.setCellStyle(4, 3, "style02");
gridView.setCellStyle(3, 2, "style02", true);
</pre>

---

#### API Links

* [addCellStyle](/api/GridBase/addCellStyle)

#### Demo Links

* [DataCellStyle Overview](http://demo.realgrid.com/Demo/DataCellStyleConcept)