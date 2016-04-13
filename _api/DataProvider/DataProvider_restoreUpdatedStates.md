---
layout: apipost
title: restoreUpdatedStates
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/restoreUpdatedStates/
jsonly: true
tags:
  - rowState 복원
  - 상태 복원
  - 상태 아이콘 복원
---


#### Description

> dataProvider.options.[restoreMode](/api/types/RestoreMode/) 가 "explicit" 일 경우 수정되었던 데이터가 원래대로 다시 수정된 경우 RowState를 원래대로 복원하고 싶을때 사용한다.   

#### Syntax

> function restoreUpdatedStates(rows)

#### Parameters

> **rows**  
> Type: Array of integer  
> RowState를 원래대로 복원하려는 dataRow 배열이다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    var rows = grid.getCheckedRows();
    provider.restoreUpdatedStates(rows);
</pre>

