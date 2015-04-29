---
layout: apipost
title: isLocalExporting
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/isLocalExporting/
---


#### Description

> 엑셀저장이 진행중인지 확인한다.

#### Syntax

> function isLocalExporting()

#### Parameters

> None.

#### Return value

> Type: Boolean
> 엑셀 저장중일 경우 true 가 리턴된다.

#### Example

<pre class="prettyprint">
	if (grdMain.isLocalExporting()) {
		grdMain.centerLocalExporting();
	}
	else
	{
		grdMain.exportGrid({
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




