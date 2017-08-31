---
layout: apipost
title: collapseAll
part: Objects
objectname: GridView
directiontype: Function
permalink: /api/GridView/collapseAll/
jsonly: true
versions:
  - JS 1.1.25+
tags: 
  - 그룹
  - 닫기
  - 접기
  - collapse
---


#### Description

 모든 그룹을 접는다. recursive를 true로 하면 그룹에 포함된 자손 그룹도 접힌 상태가 된다.

#### Syntax

> function collapseAll(recursive)

#### Parameters

> **recursive**  
> Type: boolean  
> Default: false  
> true로 하면 그룹에 포함된 자손 그룹도 펼친 상태가 된다.

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
	gridView.collapseAll();
</pre>

---
