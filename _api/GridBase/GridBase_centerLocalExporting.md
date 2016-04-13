---
layout: apipost
title: centerLocalExporting
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/centerLocalExporting/
tags:
  - excelExport
---


#### Description

> 엑셀저장 다이알로그창을 화면의 가운데로 위치시킨다.
> RealGrid+에서만 작동한다.

#### Syntax

> function centerLocalExporting()

#### Parameters

> None.

#### Return value

> None.

##### Examples 

<pre class="prettyprint">
	if (gridView.isLocalExporting()) {
		gridView.centerLocalExporting();
	}
	else
	{
		gridView.exportGrid({
			type: "excel",
			target: "local",
			url: (realgridType == "js") ? "gridExportSample.xlsx" : "gridExportSample.xls",
			confirmTitle: "Save To Excel",
			confirmMessage: "Do you want to save an Excel document?", 
			indicator: 'default',
			header: 'default',
			footer: 'default',
			// RealGrid+만 가능
			documentTitle: { 
				text: "heading message", 
				styles:{
					background: "#ffffff00",
					textAlignment: "center",
					fontSize: "20"
				}
			}
		});
	}
</pre>




