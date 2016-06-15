---
layout: apipost
title: getGroupingOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getGroupingOptions/
tags:
  - option
  - rowGroup
  - groupingOptions
---


#### Description

 그리드 RowGrouping과 관련된 설정 정보들을 가져온다. [GroupingOptions](/api/types/GroupingOptions/)가 설정 모델이다.

#### Syntax

> function getGroupingOptions()

#### Parameters

> None

#### Return value

> Type: object  
> [GroupingOptions](/api/types/GroupingOptions/) 설정 모델과 동일한 내용의 객체가 반환된다.

#### Examples 

<pre class="prettyprint">
var options = gridView.getGroupingOptions();
if (options) {
    alert(JSON.stringify(options))
}
</pre>

---

#### API Links

*  [setGroupingOptions](/api/GridBase/setGroupingOptions)