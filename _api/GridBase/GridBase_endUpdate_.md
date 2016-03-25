---
layout: apipost
title: endUpdate
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/endUpdate/
tags:
  - update
  - lock
---


#### Description

> 이 전에 [beginUpdate](/api/GridBase/beginUpdate/)가 호출되었다면 update lock을 풀고 그리드를 다시 그리게 한다.  

#### Syntax

> function endUpdate(force)  

#### Parameters

> **force**  
>   Type: Boolean  
>   Default: true  
>   이 전에 [beginUpdate](/api/GridBase/beginUpdate)가 호출되었는 지와 상관 없이 그리드를 다시 그리게 한다.  

#### Return value

> None.  

#### Example

<pre class="prettyprint">
gridView.beginUpdate();

gridView.displayOptions( { ... });
gridView.selectOptions( { ... });
...

gridView.endUpdate();

</pre>



