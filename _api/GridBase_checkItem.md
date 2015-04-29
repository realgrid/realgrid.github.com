---
layout: apipost
title: checkItem
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/checkItem/
---


#### Description

> 지정된 아이템을 체크하거나 해제한다.

#### Syntax

> function checkItem(itemIndex, checked, exclusive)

#### Parameters

> *itemIndex*
> Type: Number
> 아이템의 index를 입력한다.

> *checked*
> Type: Boolean
> Default: true
> true를 입력하면 itemIndex로 지정된 아이템을 체크한다. false로 입력하면 체크를 해제한다.

> *exclusive*
> Type: Boolean
> Default: false
> true로 입력하면 체크된 다른아이템이 있는 경우 모두 해제하고 itemIndex로 입력된 아이템만 체크한다.

#### Return value

> None.

#### Example

<pre class="prettyprint">
    gridMain.checkItem(0,true,false);    
</pre>

