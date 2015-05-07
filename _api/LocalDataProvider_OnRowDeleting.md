---
layout: apipost
title: OnRowDeleting
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/OnRowDeleting/
---


#### Description

> LocalDataProvider에서 데이터행이 삭제되기 직전에 호출된다.
> 삭제를 취소하려는 경우 false를 return한다.

#### Syntax

> function onRowDeleting(provider, row);

#### Parameters

> **provider**
> Type: [LocalDataProvider\|LocalDataProvider](/api/LocalDataProvider/)
> LocalDataProvider object.

> **row**
> Type: Number
> 삭제되는 데이터행의 id

#### Return value

> None.

#### Example

<pre class="prettyprint">
    provider.onRowDeleting = function (provider, row) {
        if (provider.getValue(row,"field") == "1") {
            RealGrids.alert("삭제할수 없습니다");
            return false;  
        } else {
            return true;
        };
    };
</pre>

