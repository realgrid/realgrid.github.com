---
layout: apipost
title: onRowsDeleting
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowsDeleting/
---


#### Description

> TreeDataProvider에서 데이터행들이 삭제되기 직전에 호출된다.  
> 삭제를 취소하려는 경우 false를 return한다.  

#### Syntax

> function onRowsDeleting(provider, rowIds);  

#### Parameters

> **provider**  
> Type: TreeDataProvider  
> TreeDataProvider object.  

> **rowIds**  
> Type: Array of Number  
> 삭제되는 데이터행들의 id  

#### Return value

> Boolean  
> Default: true  
> 삭제하려면 true, 삭제를 취소하려면 false 를 리턴한다.  

#### Example

<pre class="prettyprint">
    provider.onRowsDeleting = function (provider, rowIds) {
        if (rowIds.length >= 10) {
            RealGrids.alert("10행 이상 삭제할 수 없습니다. 삭제를 취소 합니다.");
            return false;  
        } else {
            return true;
        };
    };
</pre>

