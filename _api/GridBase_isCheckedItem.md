---
layout: apipost
title: isCheckedItem
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/isCheckedItem/
---


#### Description

> [CheckBar\|CheckBar](/api/GridBase/)에 체크가 되어있으면 true를 반환한다.

#### Syntax

> function isCheckedItem(itemIndex)

#### Parameters

> **itemIndex**
> Type: Number
> Grid Item의 index이다.

#### Return value

> Type: Boolean
> CheckBar에 체크가 되어있으면 true가 반환된다.

#### Example

<pre class="prettyprint">
    if (grdMain.isCheckedItem(0)) {
        alert("체크");
    }
</pre>
