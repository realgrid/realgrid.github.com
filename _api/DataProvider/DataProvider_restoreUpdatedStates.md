---
layout: apipost
title: restoreUpdatedStates
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/restoreUpdatedStates/
jsonly: true
---


#### Description

> dataProvider.options.[restoreMode](/api/types/RestoreMode/) 가 "explicit" 일 경우 수정되었던 데에터가 원래대로 다시 수정된 경우 RowState를 원래대로 복원하고 싶을때 사용한다.   

#### Syntax

> function restoreUpdatedStates(rows)

#### Parameters

> **rows**  
> Type: Array of integer  
> RowState를 원래대로 복원하려는 dataRow 배열이다.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    var rows = grid.getCheckedRows();
    provider.restoreUpdatedStates(rows);
</pre>

