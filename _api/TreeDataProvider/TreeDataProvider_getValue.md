---
layout: apipost
title: getValue
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/getValue/
---


#### Description

>  row와 데이터 필드 인덱스로 지정되는 데이터셀의 값을 반환한다.

#### Syntax

> function getValue(rowId, field)

#### Parameters

> **rowId**  
> Type: Number  
> 데이터행의 트리 아이디.  

> **field**  
> Type: Number \| String  
> 필드 인덱스 또는 fieldName

#### Return value

> Type: *  
> 데이터 필드의 값.

##### Examples 

<pre class="prettyprint">
    treeProvider.getValue(3, "title");
</pre>




