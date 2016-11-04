---
layout: apipost
title: onItemEditCancel
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onItemEditCancel/
jsonly: true
versions:
  - JS 1.1.20+
tags:
  - event
  - edit
  - cancel
---


#### Description

 사용자가 행 편집을 취소하는 도중 발생한다.    

#### Syntax

> function onItemEditCancel(grid, itemIndex, itemState)  

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

> Type: Boolean
> Default: True
> false 를 return 하면 행 편집 취소가 취소된다.(계속 편집 상태)

#### Examples 

<pre class="prettyprint">
gridView.onItemEditCancel(grid, itemIndex, itemState)  {
    console.log("onItemEditCancel: " + itemIndex + ", " + itemState);
    if (itemIndex == 0) {
        return false;
    }
};
</pre>

---

