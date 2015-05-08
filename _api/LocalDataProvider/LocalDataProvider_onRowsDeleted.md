---
layout: apipost
title: onRowsDeleted
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onRowsDeleted/
---


#### Description

> LocalDataProvider에 데이터행들이 삭제된 후 호출된다.

#### Syntax

> function onRowsDeleted (provider, rows)

#### Arguments

> **provider**  
> Type: [LocalDataProvider](/api/LocalDataProvider/)  
> LocalDataProvider object.  

> **rows**  
> Array of number  
> 삭제된 행들의 인덱스.  
> 이미 삭제가 되었기 때문에 더이상 참조할수 없다.

#### Return

> None.

#### Example

<pre class="prettyprint">
    dataProvider.onRowsDeleted = function (provider, rows) {
        console.log("Rows deleted: " + rows);
    };
</pre>

