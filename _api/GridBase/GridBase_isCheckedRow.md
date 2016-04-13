---
layout: apipost
title: isCheckedRow
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/isCheckedRow/
tags:
  - checked
---


#### Description

> 입력된 dataRow와 연결된 item이 체크되어있으면 true를 반환한다.  

#### Syntax

> function isCheckedRow(dataRow)  

#### Parameters

> **dataRow**  
> Type: Number  
> data행의 index  

#### Return value

> Type: Boolean  
> dataRow와 연결된 item이 체크되어있으면 true를 반환한다.  

#### Examples 

<pre class="prettyprint">
    if (gridView.isCheckedRow(0)) {
        alert("체크");
    }
</pre>

#### Demo Links
#### See Also

#### See Also
> [isCheckedItem](/api/GridBase/isCheckedItem)