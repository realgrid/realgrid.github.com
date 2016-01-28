---
layout: apipost
title: getJsonRows
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/getJsonRows/
jsonly: true
---


#### Description

> 지정한 데이터행의 자식들을 JSON 객체로 가져온다.  

#### Syntax

> function getJsonRows(rowId, recursive, childRowsProp, iconProp)

#### Parameters

> **rowId**
> Type: number  
> 데이터행 index  

> **recursive**
> Type: boolean  
> Defautl: false
> 자식의 자식행들 즉 자손을 포함할 것인지의 여부  

> **childRowsProp**
> Type: string
> default: "rows"  
> 자식 속성의 속성명을 지정한다.

> **iconProp**
> Type: string
> Default: "icon"  
> 아이콘 필드의 속성명을 지정한다.

#### Return value

> Type: Array of Object
> JSON 객체들   

#### Example

<pre class="prettyprint">
    var rows = treeDataProvider.getJsonRows(-1, true, "child", "icon");
</pre>

