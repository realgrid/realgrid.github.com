---
layout: apipost
title: onRowAdding
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onRowAdding/
tags:
 - index
 - 행 추가 이벤트
---


#### Description

> TreeDataProvider에 데이터가 추가되기 직전에 발생하는 이벤트 함수.  

#### Syntax

> function onRowAdding (provider, rowId, index)

#### Arguments

> **provider**  
> Type: [TreeDataProvider](/api/TreeDataProvider/)  
> TreeDataProvider object.  

> **rowId**  
> Type: Number  
> 데이터 행의 트리 아이디.  

> **index**  
> Type: Number  
> 부모 행의 자식들 중 삽입된 행의 위치(순서)  

#### Return

> callback 함수에서 명시적으로 false를 리턴하면 행이 삽입되지 않는다.  

##### Examples 

<pre class="prettyprint">
    treeProvider.onRowAdding = function (provider, rowId, index) {
        console.log("onRowAdding:" + rowId + ", " + index);
       	return true;
    };
</pre>

