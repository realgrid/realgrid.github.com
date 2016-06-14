---
layout: apipost
title: commitEditor
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/commitEditor/
tags:
  - editing
  - commitEditor
---


#### Description

 현재 Editor의 내용을 Cell에 반영한다.  
 실행 후 onEditCommit -> onEditRowChanged -> onCellEdited 이벤트가 순차적으로 발생한다.

#### Syntax

> function commitEditor(hideEditor)  

#### Parameters

> **hideEditor**  
> Type: Boolean  
> Default: true  
> Editor의 종료 여부를 지정한다.

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
gridView.commitEditor(true);
</pre>

---

#### API Links

* [commit](/api/GridBase/commit)
* [cancelEditor](/api/GridBase/cancelEditor)  
