---
layout: apipost
title: removesRow
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/removesRow/
---


#### Description

> 지정된 데이타행들을 삭제한다.  
> TreeDataProvider의 softDeleting이 true인 경우 실제로 삭제되지않고 rowState만 변경된다.  
> 삭제할 데이터행들이 부모인 경우에는 자식까지 같이 삭제 된다.  
  
#### Syntax

> function removeRows(rowIds)  

#### Parameters

> **rowIds**  
> Type: Array of number  
> 삭제하려는 dataRow의 배열이다.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    provider.removeRows([0,1,2]);
</pre>

