---
layout: apipost
title: addCellStyle
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/addCellStyle/
tags:
  - cellStyle
  - setCellStyles
---


#### Description

 셀 스타일 정보를 미리 추가한다.   
 DataProvider의 각 행 및 필드 단위로 미리 지정된 스타일을 javascript를 통해 지정할 수 있게 한다.    

#### Syntax

> function addCellStyle(id, cellStyle, overwrite)  

#### Parameters

> **id**    
> Type: String    
> 셀 스타일의 id    

> **cellStyle**  
> Type: Object  
> 계층적 구조로 구성되는 셀 스타일 데이터  

> **overwrite**  
> Type: Boolean  
> Default: false  
> true로 지정하면 기존에 중복된 id가 있을 경우 해당하는 스타일을 제거하고 새로 추가한다    

#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
gridView.addCellStyle("style01", {
    "background": "#4400ff00",
    "fontSize": 14,
    "paddingTop": 5
});

....
gridView.setCellStyles([dataRows], [fieldNames], "styleId");
</pre>

---

#### API Links
* [setCellStyles](/api/GridBase/setCellStyles) 
* [addCellStyles](/api/GridBase/addCellStyles) 
* [clearCellStyles](/api/GridBase/clearCellStyles) 
* [removeAllCellStyles](/api/GridBase/removeAllCellStyles) 
* [removeCellStyles](/api/GridBase/removeCellStyles)  