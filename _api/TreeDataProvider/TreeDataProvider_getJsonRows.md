---
layout: apipost
title: getJsonRows
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/getJsonRows/
jsonly: true
tags:
 - recursive
 - childRowsProp
 - iconProp
---


#### Description

> 지정한 데이터행의 자식들을 JSON 객체로 가져온다.  

#### Syntax

> function getJsonRows(rowId, recursive, childRowsProp, iconProp)

#### Parameters

> **rowId**  
> Type: number  
> 데이터행의 트리 아이디.  
> 파라메타에 값을 지정하지 않거나 rowId를 -1로 지정하면 모든 루트노드의 데이터를 가져옵니다.  

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
    var rows = treeProvider.getJsonRows(-1, true, "child", "icon");
</pre>

