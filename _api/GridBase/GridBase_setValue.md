---
layout: apipost
title: setValue
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setValue/
tags:
  - edit
  - 편집
  - 값설정
---


#### Description

> [Grid Item](/api/features/Grid Item) 인덱스와 데이터 필드 인덱스로 지정되는 데이터셀의 값을 변경한다.  
> 그리드가 편집중인경우 편집중인 itemIndex의 값만 변경할수 있으며 편집이 완료된후 dataProvider에 값이 반영되고 편집중이 아닌경우 dataProvider에 즉시 반영된다.


#### Syntax

> function setValue(itemIndex, field, value)

#### Parameters

> **itemIndex**  
> Type: Number  
> 아이템 인덱스  

> **field**  
> Type: Number\|String  
> field 인덱스 또는 field명  

> **value**  
> Type: **   
> 필드에 설정할 값  

#### Return value

> None

#### Example

<pre class="prettyprint">
    var itemIndex = gridView.getCurrent().itemIndex;
    var value = $("#name").val();
    gridView.setValue(itemIndex, "fieldName", value);

</pre>

#### See Also
> [getValue](/api/GridBase/getValue), [getValues](/api/GridView/getValues), [setValues](/api/GridBase/setValues)