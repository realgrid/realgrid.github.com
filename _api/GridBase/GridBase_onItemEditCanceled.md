---
layout: apipost
title: onItemEditCanceled
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onItemEditCanceled/
jsonly: true
tags:
  - event
  - edit
  - cancel
---


#### Description

 사용자가 행 편집을 취소했을때 발생한다.    

#### Syntax

> function onItemEditCanceled(grid, itemIndex, itemState)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **itemIndex**  
> Type: Number   
> 편집이 취소된 행의 아이템 인덱스이다.   

> **itemState**  
> Type: String    
> 편집 취소된 행의 상태이다. updating, inserting, appending 이 반환된다.     

#### Return

> None.

#### Examples 

<pre class="prettyprint">
gridView.onItemEditCanceled(grid, itemIndex, itemState)  {
    console.log("onItemEditCanceled: " + itemIndex + ", " + itemState);
};
</pre>

---

