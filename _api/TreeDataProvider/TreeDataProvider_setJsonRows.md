---
layout: apipost
title: setJsonRows
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/setJsonRows/
tags:
 - 트리 데이터 로드
 - 트리데이터
 - 트리데이타
 - json
 - rowsProp
 - childrenProp
 - iconProp
---


#### Description

> 트리의 기존 데이터행들을 모두 삭제하고 매개변수로 전달되는 JSON 객체를 데이터 행들로 추가한다.  
> 트리의 JSON 데이터 구조에 관한 설명은 튜토리얼 [B9-2](/tutorial/b9-2/)페이지를 참조.  

#### Syntax

> function setJsonRows(json, rowsProp, childrenProp, iconProp)  

#### Parameters

> **json**  
> Type: Array \| object.  
> Json 배열이거나 Json 배열을 속성으로 갖는 object. Json 배열이 아닌 경우 rowsProp에 지정된 속성을 배열로 지정해야 한다.  

> **rowsProp**  
> Type: String  
> Json 중 트리의 데이터행들로 사용될 배열을 값으로 하는 속성의 이름.  

> **childrenProp**   
> Type: String  
> 자식 행이 있는 지를 지시하는 속성 이름.   

> **iconProp**   
> Type: String   
> 트리 노드에 표시할 아이콘 경로를 값으로 가지고 있는 속성 이름.   

#### Return value

> None.   

#### Examples 

<pre class="prettyprint">
    treeProvider.setJsonRows(data, "rows", "", "icon");
</pre>

