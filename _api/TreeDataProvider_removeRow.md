---
layout: apipost
title: removeRow
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/removeRow/
---


#### Description

> 지정한 데이터행을 삭제합니다. 
> 지정한 데이터행이 조상행인 경우 모든 자손행들도 같이 삭제 됩니다.
> dataProvider의 softDeleting이 true인 경우 실제로 삭제되지않고 rowState만 변경된다.

#### Syntax

> function removeRow(rowId)

#### Parameters

> *rowId*
> Type: number
> 삭제할 데이터행의 인덱스.

#### Return value

> None.

#### Example

<pre class="prettyprint">
    provider.removeRow(10);
</pre>

