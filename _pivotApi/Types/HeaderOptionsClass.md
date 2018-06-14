---
layout: apipost
title: HeaderOptions
part: Types
typename: Classes
order: HeaderOptions
objectname: 
directiontype: 
permalink: /pivotApi/types/HeaderOptions/
tags: 
  - HeaderOptions
  - 헤더옵션
---

#### Description
피벗 그리드의 상단 헤더의 표시여부 설정 모델이다.

#### Properties

> **titleVisible**  
> Type: Boolean   
> Default: true       
> 타이틀 바(Context Menu, Setup Menu 버튼이 있는 영역)의 표시 여부를 지정한다.  

> **titleHeight**  
> Type: Number   
> Default: 20       
> 타이틀 바의 높이를 지정한다.  

> **rowHeadVisible**  
> Type: Boolean   
> Default: true       
> 행 헤더 바의 표시 여부를 지정한다.  

> **columnHeadVisible**  
> Type: Boolean   
> Default: true       
> 컬럼 헤더 바의 표시 여부를 지정한다.  

> **valueHeadVisible**  
> Type: Boolean   
> Default: true       
> 값 헤더 바의 표시 여부를 지정한다.  

> **menuButtonVisible**  
> Type: Boolean   
> Default: true       
> Context Menu 버튼의 표시 여부를 지정한다.  

> **setupButtonVisible**  
> Type: Boolean   
> Default: true       
> Setup 버튼의 표시 여부를 지정한다.  

#### Examples   

<pre class="prettyprint">
pivot.setOptions({
	header: {
	    titleVisible: true, 
    	titleHeight: 50,
		setupButtonVisible: false, 
		menuButtonVisible: false
	}
});	

or 

pivot.setHeaderOptions({
	titleVisible: true, 
	titleHeight: 50,
	setupButtonVisible: false, 
	menuButtonVisible: false
});
</pre>

---


