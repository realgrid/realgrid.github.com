---
layout: apipost
title: exportGrid
part: Objects
objectname: getOptions
directiontype: Function
permalink: /pivotApi/RealPivot/exportGrid/
tags:
  - excel
  - export
---


#### Description

 지정한 설정에 따라 현재 그리드의 모양과 데이터를 외부 문서로 내보낸다.  
 xlsx 타입만 지원한다.(Excel 2007 이상 지원)  

#### Syntax

> function exportGrid(options)  

#### Parameters

> **options**  
> Type: object  
> [ExportOptions](/pivotApi/types/ExportOptions/)과 같은 설정 모델로 지정한다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
pivot.exportGrid({
    target: "local",
    fileName: "gridExportSample.xlsx"
});
</pre>

