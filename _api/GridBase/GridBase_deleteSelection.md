---
layout: apipost
title: deleteSelection
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/deleteSelection/
tags:
  - delete
  - select
---


#### Description

> 현재 선택된 행들을 삭제한다.  
> grid.editOptions.deletable이 false인 경우 작동하지 않는다.  
> grid.selectOptions.style이 columns이거나 singleColumn 인경우 작동하지 않는다.

#### Syntax

> function deleteSelection(force)  

#### Parameters

> **force**  
> Type: boolean  
> true면 설정에 상관없이 여부를 묻지 않고 선택된 행들을 삭제한다.


#### Return value

> None.

##### Examples 

<pre class="prettyprint">
    gridView.deleteSelection(true);
</pre>

#### See Also
> [setSelection](/api/GridBase/setSelection), [clearSelection](/api/GridBase/clearSelection)