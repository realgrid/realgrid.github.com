---
layout: apipost
title: getItemState
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getItemState/
tags:
  - edit
  - itemState
---


#### Description

> 그리드 Item의 상태값을 가져온다.  

#### Syntax

> function getItemState(itemIndex)  

#### Parameters

> **itemIndex**  
> Type: Number  
> 상태를 가져오려는 itemIndex를 입력한다.  

#### Return value

> Type: String  
> 그리드 item의 상태값. 편집중이거나,추가,입력중이 아닌경우 "normal"이 출력된다.  
> 편집:"updating", 추가:"appending", 삽입:"inseting"이 출력된다.  
> 입력된 itemIndex가 현재 선택된 itemIndex인 경우 "focused"가 출력된다.

#### Example

<pre class="prettyprint">
    idx = gridView.getCurrent().itemIndex;
    consloe.log(grdMain.getItemState(idx));
</pre>
