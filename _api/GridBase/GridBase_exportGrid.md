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

> 지정한 설정에 따라 현재 그리드의 모양과 데이터를 외부 문서로 내보낸다.  

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

