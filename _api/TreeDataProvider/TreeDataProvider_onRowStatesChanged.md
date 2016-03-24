---
layout: apipost
title: onRowStatesChanged
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowStatesChanged/
tags:
 - 다중 상태 변경 이벤트
---


#### Description

> TreeDataProvider에서 여러건의 데이터행의 rowState가 변경되는 경우 호출된다.   


#### Syntax

> function onRowStatesChanged(provider, rowIds)   

#### Arguments

> **provider**   
> Type: TreeDataProvider   
> TreeDataProvider object.   

> **rowIds**   
> Array of Number   
> 변경된 데이터행들의 트리 아이디. 

#### Return

> None.   

#### Example

<pre class="prettyprint">
    treeProvider.onRowStatesChanged = function (provider, rowIds) {
        if (rowIds.length > 0) {
            for (idx in rowIds) {
                console.log("row ==>", rowIds[idx], "rowState ==>", provider.getRowState(rowIds[idx]));
            }
        }
    };
</pre>

