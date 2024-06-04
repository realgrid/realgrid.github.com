---
layout: apipost
title: onCut
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onCut/
tags:
  - 복사
  - 잘라내기
---


#### Description

 사용자가 Ctrl+ X 키를 눌러 셀 또는 block을 잘라내기 시 onCut이벤트가 호출된다.  

#### Syntax

> function onCut (grid, selection, event)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> 그리드.  

> **selection**  
> Type: SelectionItem과 같은 구조의 object.
> 선택 영영 정보.  

> **event**  
> Type: Object  
> event 정보   

#### Return

> Type: Boolean
> false를 리턴하면 잘라내기가 취소된다. 

#### Examples 

<pre class="prettyprint">
gridView.onCut = function(grid, selection, event){
    console.log("onCut")
}
</pre>
