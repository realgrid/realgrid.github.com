---
layout: apipost
title: removeRows
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/removeRows/
tags:
 - 다행 삭제
---


#### Description

> 지정한 데이터행들을 삭제합니다.   
> 지정한 데이터행이 조상행인 경우 모든 자손행들도 같이 삭제 됩니다.  
> DataProvider의 [softDeleting](/api/types/DataProviderOptions/)이 true인 경우 실제로 삭제되지않고 rowState만 변경된다.  

#### Syntax

> function removeRows(rowIds)  

#### Parameters

> **rowIds**  
> Type: number  
> 삭제할 데이터행들의 트리 아이디.  

#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
    treeProvider.removeRows([10, 30, 40]);
</pre>

---

#### Demo Links
#### See Also

#### See Also

> [TreeView Editing](http://demo.realgrid.net/Demo/TreeEditing){:target="_blank"} 참조   