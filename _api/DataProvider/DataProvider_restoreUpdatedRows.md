---
layout: apipost
title: restoreUpdatedRows
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/restoreUpdatedRows/
jsonly: true
---


#### Description

> 수정된 행들만 데이터들을 원래대로 복원한다.  
> dataProvider.options.[restoreMode](/api/types/RestoreMode/)  가 "explicit" 나 "auto" 로 지정되어 있어야한다.  

#### Syntax

> function restoreUpdatedRows(rows)

#### Parameters

> **rows**  
> Type: Array of integer  
> 복원하려는 dataRow 배열이다.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    var rows = grid.getCheckedRows();
    provider.restoreUpdatedRows(rows);
</pre>

