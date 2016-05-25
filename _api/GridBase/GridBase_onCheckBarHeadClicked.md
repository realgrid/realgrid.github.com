---
layout: apipost
title: onCheckBarHeadClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onCheckBarHeadClicked/
jsonly: true
tags:
  - event
  - 체크바헤드
  - 체크바클릭
  - CheckBarHead
  - CheckBarClick
---


#### Description

> CheckBar.showAll 속성이 false 일 때, 사용자가 마우스로 CheckBar의 Head를 클릭하였을때 때 호출된다.  
> (true인 경우 onItemAllChecked 가 호출된다.)  

#### Syntax

> function onCheckBarHeadClicked (grid)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

#### Return

> None.  

#### Examples 

<pre class="prettyprint">
    gridView.onCheckBarHeadClicked =  function (grid) {
        console.log("onCheckBarHeadClicked")
    };
</pre>

