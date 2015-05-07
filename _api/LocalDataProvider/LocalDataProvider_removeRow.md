---
layout: apipost
title: removeRow
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/removeRow/
---


#### Description

> 지정한 데이터행을 삭제합니다.
> dataProvider의 softDeleting이 true인 경우 실제로 삭제되지않고 rowState만 변경된다.

#### Syntax

> function removeRow(row)

#### Parameters

> **row**
> Type: number
> 삭제할 데이터행의 인덱스.

#### Return value

> None.

#### Example

<pre class="prettyprint">
    provider.removeRow(10);
</pre>

