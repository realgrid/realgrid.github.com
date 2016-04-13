---
layout: apipost
title: setGroupingOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setGroupingOptions/
tags:
  - rowGrouping
  - 그룹핑
---


#### Description

> 그리드 RowGrouping에 관한 설정을 한다. [GroupingOptions](/api/types/GroupingOptions/)가 설정 모델이다.

#### Syntax

> function setGroupingOptions(Options)

#### Parameters

> **Options**  
> Type: Object  
>   

#### Return value

> Type: object
> [GroupingOptions](/api/types/GroupingOptions/) 모델과 같은 설정 정보. GroupingOptions 중 변경하고자 하는 속성만 전달하면 된다.

#### Examples 

<pre class="prettyprint">
    var opts = {linear:true};
    gridView.setGroupingOptions(opts);
</pre>

#### Demo Links
#### See Also

#### See Also
> [getGroupingOptions](/api/GridBase/getGroupingOptions), [Panel](/api/types/Panel)
