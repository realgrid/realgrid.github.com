---
layout: apipost
title: setSelection
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setSelection/
tags:
  - select
  - 범위선택
---


#### Description

 그리드에서 선택할 영역을 지정한다. [SelectionItem](/api/types/SelectionItem/)이 설정모델이다.


#### Syntax

> function setSelection(selection, fireEvent)

#### Parameters

> **selection**  
> Type: object  
> [SelectionItem](/api/types/SelectionItem/) 모델과 같은 설정 정보. [SelectionItem](/api/types/SelectionItem/) 중 선택하고자 하는 영역의 속성만 전달하면 된다.  

> **fireEvent**
> Type: boolean
> `true`로 전달하면 [onSelectionAdd](/api/GridBase/onSelectionAdded/), [onSelectionChanged](/api/GridBase/onSelectionChanged/)이벤트가 발생하지 않는다.

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
var sel = {startItem: 0, endItem: 10, style: "rows"};
gridView.setSelection(sel);
</pre>

---

#### API Links

* [getSelection](/api/GridBase/getSelection)
* [getSelectionData](/api/GridBase/getSelectionData)