---
layout: apipost
title: onCopy
part: Objects
objectname: GridBase
directiontype: Callback
jsonly: true
versions:
  - JS 1.1.34+
permalink: /api/GridBase/onCopy/
tags:
  - copy
  - 복사 
---


#### Description

 control + c 키로 복사하기 시 발생한다.   
 false를 return하면 클립보드에 복사한 데이터를 저장하지 않는다.      

#### Syntax

> function onCopy(grid, range, event)  

#### Arguments  

> **grid**  
> Type: object
> GridBase 컨트롤  

> **range**  
> Type: object    
> 클릭된 데이터 셀의 인덱스  

> **event**  
> Type: *    
> 복사한 영역의 데이터 값  

#### Return  

> Type: Boolean  
> false를 리턴하면 복사가 취소된다.  

#### Examples 

<pre class="prettyprint">
gridView.onCopy = function(grid, range, event) {
	var data = JSON.stringify(grid.getSelectionData());
	if (data) {
		data = 'onCopy\r\n'+data;
		if (window.clipboardData) {
			window.clipboardData.setData("Text", data);
		} else {
			event.clipboardData.setData('text/plain', data);
		}
	}
	return false;
}
</pre>

