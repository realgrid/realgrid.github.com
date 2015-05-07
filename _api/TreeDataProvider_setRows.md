---
layout: apipost
title: setRows
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/setRows/
---


#### Description

> 트리의 기존 데이터행들을 모두 삭제하고 매개변수로 전달되는 배열의 배열을 데이터 행들로 추가한다.

#### Syntax

> function setRows(rows, treeField, needSorting, childrenField, iconField)

#### Parameters

> **rows**
> Type: Array of Array
> 추가할 행들.

> **treeField**
> Type: String
> 계층 정보로 사용할 필드의 이름.

> **needSorting**
> Type: Boolean
> 트리를 구성하기 전에 treeField를 기준으로 정렬을 먼저 해야 하는 지를 지정한다.

> **childrenField**
> Type: String
> 자식 행이 있는 지를 지시하는 필드.

> **iconField**
> Type: String
> 트리 노드에 표시할 아이콘 경로를 값으로 가지고 있는 필드 이름.

#### Return value

> None.

#### Example

<pre class="prettyprint">
    provider.setDataRows(rows, "tree", true, "", "icon");
</pre>

