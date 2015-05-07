---
layout: apipost
title: onRowDeleting
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowDeleting/
---


#### Description

> TreeDataProvider에서 데이터행이 삭제되기 직전에 호출된다.
> 삭제를 취소하려는 경우 false를 return한다.

#### Syntax

> function onRowDeleting(provider, rowId);

#### Parameters

> **provider**
> Type: TreeDataProvider
> TreeDataProvider object.

> **rowId**
> Type: Number
> 삭제되는 데이터행의 id

#### Return value

> Boolean
> Default: true
> 삭제하려면 true, 삭제를 취소하려면 false 를 리턴한다.

#### Example

<pre class="prettyprint">
    provider.onRowDeleting = function (provider, rowId) {
        if (provider.getValue(rowId,"field") == "1") {
            RealGrids.alert("삭제할수 없습니다");
            return false;  
        } else {
            return true;
        };
    };
</pre>

