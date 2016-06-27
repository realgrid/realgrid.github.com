---
layout: apipost
title: getGroupIndex
part: Objects
objectname: GridView
directiontype: Function
permalink: /api/GridView/getGroupIndex/
tags: 
  - itemIndex
  - 그룹
  - 자신이 속한 그룹
---


#### Description

> 자신이 속한 그룹의 ItemIndex를 반환한다.  
> 그룹이 없거나 그룹이 있을 경우 가장 첫 행의 getGroupIndex 결과는 -1 이다. 

#### Syntax

> function getGroupIndex(itemIndex)

#### Parameters

> **itemIndex**  
> Type: number  
> Grid상의 인덱스  

#### Return value

> Type: number
> 자신이 속한 그룹의 ItemIndex

#### Example

<pre class="prettyprint">
    var groupIndex = grid.getGroupIndex(itemIndex);
</pre>



