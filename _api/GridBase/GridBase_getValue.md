---
layout: apipost
title: getValue
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getValue/
tags:
  - value
---


#### Description

> [Grid Item](/api/features/Grid Item/) 인덱스와 데이터 필드 인덱스로 지정되는 데이터셀의 값을 반환한다.  
> 선택된 행이 수정중인 경우 수정된 값을 가져온다. 편집이 완료되지 않은 셀의 값은 가져올수 없다.  

#### Syntax

> function getValue(itemIndex, field)  

#### Parameters

> **itemIndex**  
> Type: Number  
> 아이템 인덱스  

> **field**  
> Type: Number\|String  
> 필드 인덱스 또는 fieldName  

#### Return value

> Type: **  
> 데이터 필드의 값.  

#### Examples 

<pre class="prettyprint">
var itemIndex = grid.getCurrent().itemIndex;
var value = grid.getValue(itemIndex, 1);
</pre>

#### Demo Links
#### See Also

#### See Also
> [getValues](/api/GridView/getValues), [setValue](/api/GridBase/setValue), [dataProvider.getValue](/api/LocalDataProvider/getValue/)