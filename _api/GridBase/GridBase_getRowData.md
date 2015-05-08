---
layout: apipost
title: getRowData
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getRowData/
---


#### Description

> [Grid Item](/api/features/Grid_item/)이 참조하는 데이터 행의 ,필드 값들을 Json 객체로 반환한다.  
> 필드 값들 외에 "__rowId" 속성에 데이터 행의 인덱스를 같이 반환한다.  
> 더 이상 사용되지 않습니다. [getValues](/api/GridBase/getValues/)를 대신 사용하세요.  

#### Syntax

> function getRowData(itemIndex)  

#### Parameters

> **itemIndex**  
> Type: Number  
> 아이템 인덱스  

#### Return value

> Type: Object  
> 아이템에 연결된 데이터 행의 필드 값들과 "__rowId" 속성에 데이터행 번호가 담겨있다.  
> 데이터 행이 아닌경우 null을 반환한다.  

#### Example

<pre class="prettyprint">
var itemIndex = grid.getCurrent().itemIndex;
var data = grid.getRowData(itemIndex);
alert(JSON.stringify(data));
</pre>





