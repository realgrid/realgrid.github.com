---
layout: apipost
title: checkItems
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/checkItems/
---


#### Description

> 입력된 아이템배열에 해당하는 아이템을 체크하거나 해제한다.  

#### Syntax

> function checkItems(items, checked)  

#### Parameters

> **items**  
> Type: Array of Number  
> 아이템 Index배열을 입력한다.  

> **checked**  
> Type: Boolean  
> Default: true  
> true를 입력하면 items로 입력된 아이템배열에 해당하는 아이템을 체크한다. false로 입력하면 체크를 해제한다.  


#### Return value

> None.  

#### Example

<pre class="prettyprint">
    gridMain.checkItems([0,1,2,3],true);    
</pre>

