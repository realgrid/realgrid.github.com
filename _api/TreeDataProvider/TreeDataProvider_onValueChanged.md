---
layout: apipost
title: onValueChanged
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onValueChanged/
tags:
 - setValue event
 - 값 설정 이벤트
---


#### Description

 [TreeDataProvider.setValue](/api/TreeDataProvider/setValue/)를 이용하여 데이터를 변경한후 호출된다.

#### Syntax

> function onValueChanged(provider, rowId)  

#### Arguments

> **provider**  
> Type: [TreeDataProvider](/api/TreeDataProvider/)  
> TreeDataProvider object.  

> **rowId**  
> Type: number  
> 값이 변경되는 데이터행의 트리 아이디.  

#### Return

> None.  

#### Examples 

<pre class="prettyprint">
treeProvider.onValueChanged = function (provider, rowId) {
    console.log("onValueChanged:"+rowId);
};
</pre>

