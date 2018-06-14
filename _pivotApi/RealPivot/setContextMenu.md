---
layout: apipost
title: setContextMenu
part: Objects
objectname: setContextMenu
directiontype: Function
permalink: /pivotApi/RealPivot/setContextMenu/
tags:
  - 메뉴
  - 컨택스트메뉴
---


#### Description

 왼쪽 최상단에 위치한 버튼을 클릭할때 표시할 메뉴를 지정한다.   

#### Syntax

> function setContextMenu(items)

#### Parameters

> **items**   
> Type: Object   
> text와 callback으로 구성된 메뉴 정보 객체 배열.   

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
pivot.setContextMenu([{
	text: "버전확인",
	callback: function(){
		alert(pivot.getVersion())
	}
}, {
	text: "엑셀저장",
	callback: function(){
		pivot.exportGrid({
			target: "local",
    		fileName: "gridExportSample.xlsx"
	    });
	} 
}]);
</pre>

