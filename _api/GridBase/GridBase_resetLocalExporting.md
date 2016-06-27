---
layout: apipost
title: resetLocalExporting
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/resetLocalExporting/
---


#### Description

 엑셀 저장이 불완전하게 종료되어 저장중이 아님에도 불구하고 엑셀 저장중으로 인식될 경우 초기화시켜준다.  
 RealGrid+ Web 전용이다.

#### Syntax

> function resetLocalExporting()

#### Parameters

> None.

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
if (gridView.isLocalExporting()) {
	gridView.resetLocalExporting();
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




