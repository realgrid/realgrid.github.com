---
layout: apipost
title: setSelection
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setSelection/
---


#### Description

> 그리드에서 선택할 영역을 지정한다. [SelectionItem](/api/GridBase/)이 설정모델이다.


#### Syntax

> function setSelection(selection)

#### Parameters

> *selection*
> Type: object
> [SelectionItem](/api/GridBase/) 모델과 같은 설정 정보. [SelectionItem](/api/GridBase/) 중 선택하고자 하는 영역의 속성만 전달하면 된다.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
        var sel = {startItem: 0, endItem: 10, style: "rows"};
        grdMain.setSelection(sel);
</pre>

