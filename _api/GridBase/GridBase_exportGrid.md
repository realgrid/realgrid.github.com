---
layout: apipost
title: exportGrid
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/exportGrid/
tags:
  - excel
  - export
---


#### Description

 지정한 설정에 따라 현재 그리드의 모양과 데이터를 외부 문서로 내보낸다.  

 **RealGridJS 1.1.27부터 sparkLine, sparkColumn, sparkWinLoss 컬럼을 내보낼 수 있는 기능이 추가되었다.**
 spark컬럼을 export할때에는 spark컬럼들이 참조하고 있는 [DataColumn](/api/types/DataColumn/)들을 반드시 포함하여 export하여야 한다.   
 그리고 DataColumn의 name 속성은 반드시 지정되어 있어야 한다.  


#### Syntax

> function exportGrid(options)  

#### Parameters

> **options**  
> Type: object  
> [GridExportOptions](/api/types/GridExportOptions/)과 같은 설정 모델로 지정한다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
gridView.exportGrid({
    type: "excel",
    target: "remote",
    url: "/demo/excelbin",
    indicator: "default",
    header: "visible",
    footer: "hidden"
});
</pre>

