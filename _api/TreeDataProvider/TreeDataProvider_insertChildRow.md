---
layout: apipost
title: insertChildRow
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/insertChildRow/
tags:
- index
- values
- iconIndex
- hasChildren
---


#### Description

> 지정한 행에 자식 행을 추가한다.    

#### Syntax

> function insertChildRow(rowId, index, values, iconIndex, hasChildren)

#### Parameters

> **rowId**  
> Type: Number  
> 데이터 행의 트리 아이디.  

> **index**  
> Type: Number  
> 지정한 부모 행의 자식들 중 삽입하려는 행이 들어갈 위치(순서)  

> **values**  
> Type: Object\|Array of String  
> 필드값의 배열이나 필드들을 속성으로 하는 json 객체.  

> **iconIndex**  
> Type: Number  
> Default: -1  
> 표시하려는 아이콘의 인덱스  

> **hasChildren**  
> Type: Boolean  
> Default: false  
> 추가된 자식행의 tree expander 표시 여부  

#### Return value

> Type: Number.  
> 추가된 자식 행의 Row Id.  

#### Examples 

<pre class="prettyprint">
    treeProvider.insertChildRow(9, 0, [], 2, false)
</pre>

---

#### See Also

> [TreeView Editing](http://demo.realgrid.net/Demo/TreeEditing){:target="_blank"} 참조   