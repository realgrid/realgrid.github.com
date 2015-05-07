---
layout: apipost
title: onRowsDeleted
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowsDeleted/
---


#### Description

> TreeDataProvider에 데이터행들이 삭제된 후 호출된다.

#### Syntax

> function onRowsDeleted (provider, rowIds)

#### Arguments

> **provider**
> Type: TreeDataProvider
> TreeDataProvider object.

> **rowIds**
> Array of number
> 삭제된 행들의 인덱스.
> 이미 삭제가 되었기 때문에 더이상 참조할수 없다.

#### Return

None.

#### Example

<pre class="prettyprint">
    dataProvider.onRowsDeleted = function (provider, rowIds) {
        console.log("Rows deleted: " + rowIds.length);
    };
</pre>

