---
layout: apipost
title: setXmlRows
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/setXmlRows/
tags:
 - xml load
 - rowElement
 - childrenField
 - iconField
---


#### Description

> 트리의 기존 데이터행들을 모두 삭제하고 매개변수로 전달되는 XML을 데이터 행들로 추가한다.   

#### Syntax
   
> function setXmlRows(xml, rowElement, childrenField, iconField)   

#### Parameters

> **xml**   
> Type: String   
> XML 소스.   

> **rowElement**   
> Type: String   
> XML 중 트리의 데이터행들로 사용될 element의 이름.   

> **childrenField**   
> Type: String   
> 자식 행이 있는 지를 지시하는 필드.   

> **iconField**   
> Type: String   
> 트리 노드에 표시할 아이콘 경로를 값으로 가지고 있는 필드 이름.   

#### Return value

> None.  

##### Examples 

<pre class="prettyprint">
    treeProvider.setXmlRows(rows, "row", "", "icon");
</pre>

