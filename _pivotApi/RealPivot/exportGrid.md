---
layout: apipost
title: exportGrid
part: Objects
objectname: exportGrid
directiontype: Function
permalink: /pivotApi/RealPivot/exportGrid/
tags:
  - export
  - 엑셀
  - excel
---


#### Description

 지정한 설정에 따라 현재 피벗 그리드의 모양과 데이터를 외부 문서로 내보낸다.  
 "local" 방식의 경우 IE 10이상만 지원가능하다.
 엑셀의 경우 xlsx파일로 내보내기 되고 엑셀의 버전별 최대 컬럼/행 갯수가 넘을 경우 열리지 않을 수 있다.  
 Excel 2002/2003: 65536 rows x 256 columns  
 Excel 2007이상 : 1048576 rows x 16384 columns

#### Syntax

> function exportGrid(options)  

#### Parameters

> **options**  
> Type: object  
> [GridExportOptions](/pivotApi/types/ExportOptions/)과 같은 설정 모델로 지정한다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
pivot.exportGrid({
    type: "excel",
    target: "local",
    fileName: "RealPivotExport.xlsx"
});
</pre>
