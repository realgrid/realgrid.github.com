---
layout: apipost
title: onRowsMoving
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onRowsMoving/
---


#### Description

> LocalDataProvider에 데이터행들이 이동되기 직전에 호출된다.

#### Syntax

> function onRowsMoving(provider, row, count, newRow)

#### Arguments

> **provider**  
> Type: [LocalDataProvider](/api/LocalDataProvider/)  
> LocalDataProvider object.  

> **row**  
> Number  
> 이동하려는 데이터행의 Index.  

> **count**  
> Number  
> 이동되는 행의 개수.  

> **newRow**  
> Number  
> 이동될 데이터행의 Index.

#### Return

> None.

#### Example

<pre class="prettyprint">
    dataProvider.onRowsMoving = function (provider, row, count, newRow) {
        if (provider.getValue(row,"field") == "move") {
        } else {
            return false;
        }
    };
</pre>

