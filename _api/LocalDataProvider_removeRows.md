---
layout: apipost
title: removeRows
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/removeRows/
---


#### Description

> rows에 지정된 데이타행들을 삭제한다.
> dataProvider의 softDeleting이 true인 경우 실제로 삭제되지않고 rowState만 변경된다.
> 이 경우 onRowDeleted나 onRowsDeleted가 발생하지 않고 onRowStateChanged나 onRowStatesChanged가 발생한다.

#### Syntax

> function removeRows(rows, rowEvents)

#### Parameters

> **rows**
> Type: Array of number
> 삭제하려는 dataRow의 배열이다.

> **rowEvents**
> Type: Boolean
> true인경우 삭제되는 건별로 [LocalDataProvider onRowDeleted\|onRowDeleted](/api/LocalDataProvider/)가 호출된다.
> false인경우 삭제가 완료된후 [LocalDataProvider onRowsDeleted\|onRowsDeleted](/api/LocalDataProvider/)가 한번만 호출된다.
> 지정되지 않으면 false이다.

#### Return value

> None.

#### Example

<pre class="prettyprint">
    provider.removeRows([0,1,2], false);
</pre>

