---
layout: apipost
title: setGroupOptions
part: Objects
objectname: setGroupOptions
directiontype: Function
permalink: /pivotApi/RealPivot/setGroupOptions/
versions:
  - 1.0.2+
tags:
  - GroupOptions
  - 그룹옵션
  - 옵션
---


#### Description

 피벗 그리드의 Group옵션정보들을 설정한다.    

#### Syntax

> function setCopyOptions(options)

#### Parameters

> **options**   
> Type: Object   
> [GroupOptions](/pivotApi/types/GroupOptions/)로 구성된 객체     

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
pivot.setGroupOptions({
    columnExpand: 0,
    rowExpand: -1 
});
</pre>

---

#### API Links

* [GroupOptions](/pivotApi/types/GroupOptions/)   
* [getGroupOptions](/pivotApi/RealPivot/getGroupOptions/)   
