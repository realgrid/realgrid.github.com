---
layout: apipost
title: onEditCanceled
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onEditCanceled/
tags:
  - event
  - cancel
  - edit
  - editCancel
  - 편집취소
---


#### Description

 사용자가 편집중 ESCAPE 키를 입력하거나 [GridBase cancel](/api/GridBase/cancel/)이 호출되어 편집이 취소된후 호출된다.  

#### Syntax

> function onEditCanceled(id, index)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **index**  
> Type: [CellIndex](/api/types/CellIndex/)과 같은 구조의 object.  
> 편집이 취소된 데이터 셀의 인덱스 

#### Return

None.

#### Examples 

<pre class="prettyprint">
gridView.onEditCanceled =  function (id, index) {
    console.log("id ==>",id,"index ==>",index);
};
</pre>

---

#### API Links

* [onEditCommit](/api/GridBase/onEditCommit)