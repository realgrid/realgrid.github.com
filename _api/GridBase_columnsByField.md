---
layout: apipost
title: columnsByField
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/columnsByField/
---


#### Description

> 그리드에는 동일한 데이터필드를 참조하는 여러 컬럼이 존재할 수 있다.
> 이 메쏘드는 필드명에 해당하는 컬럼 정보의 목록을 배열로 반환한다.

#### Syntax

> function columnsByField(fieldName)

#### Parameters

> **fieldName**
> Type: string
> 데이터필드 이름

#### Return value

> Type: array of Object
> 컬럼 정보 배열이거나 존재하지 않는 경우 null.

#### Example

<pre class="prettyprint">
var field = "field1";
var columns = grid.columnsByField(field);
</pre>




