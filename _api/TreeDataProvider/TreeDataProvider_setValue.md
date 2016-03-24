---
layout: apipost
title: setValue
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/setValue/
- 값 설정
---


#### Description

> row 인덱스와 데이터 필드 인덱스로 지정되는 데이터셀의 값을 변경한다.

#### Syntax

> function setValue(rowId, field, newValue)

#### Parameters

> **rowId**  
> Type: Number  
> 데이터행의 트리 아이디.  

> **field**  
> Type: Number \| String  
> 필드 인덱스 또는 FieldName

> **newValue**  
> Type: *  
> 필드에 설정할 값

#### Return value

> None

#### Example

<pre class="prettyprint">
	treeProvider.setValue(2, 1, "text");
</pre>
