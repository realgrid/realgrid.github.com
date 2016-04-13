---
layout: apipost
title: getJsonRow
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/getJsonRow/
jsonly: true
---


#### Description

> 지정한 데이터행을 JSON 객체로 가져온다. 

#### Syntax

> function getJsonRow(rowId)

#### Parameters

> **rowId**  
> Type: number  
> 데이터행의 트리 아이디.   

#### Return value

> Type: Object  
> JSON 객체   

##### Examples 

<pre class="prettyprint">
    var row = treeProvider.getJsonRow(2);
</pre>

