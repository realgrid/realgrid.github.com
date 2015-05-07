---
layout: apipost
title: getLevel
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/getLevel/
---


#### Description

> 트리에서 지정된 rowId의 레벨을 가져온다.

#### Syntax

> function getLevel(rowId)

#### Parameters

> **rowId**
> Type: Number
> 데이터 행의 트리 아이디.

#### Return value

> Type: Number
> 트리의 레벨

#### Example

<pre class="prettyprint">
    var level = tree.getLevel(10);
</pre>

