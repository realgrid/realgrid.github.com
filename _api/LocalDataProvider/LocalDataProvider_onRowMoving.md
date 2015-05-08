---
layout: apipost
title: onRowMoving
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onRowMoving/
---


#### Description

> LocalDataProvider에 데이터행이 이동되기 직전에 호출된다.

#### Syntax

> function onRowMoving(provider, row, newRow)

#### Arguments

> **provider**  
> Type: [LocalDataProvider](/api/LocalDataProvider/)  
> LocalDataProvider object.  

> **row**  
> Number  
> 이동하려는 데이터행의 Index.  

> **newRow**  
> Number  
> 이동될 데이터행의 Index.  

#### Return

> None.

#### Example

<pre class="prettyprint">
    dataProvider.onRowMoving = function (provider, row, newRow) {
        if (provider.getValue(row,"field") == "move") {
        } else {
            return false;
        }
    };
</pre>

