---
layout: apipost
title: getVersion
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getVersion/
tags:
  - version
---


#### Description

> RealGrid+ WEB의 버전을 가져온다.  
> RealGridJS의 경우 RealGridJS.getVersion()을 이용한다.

#### Syntax

> function getVersion()

#### Parameters

> none

#### Return value

> Type: String  
> 버전을 가져온다.

#### Example

<pre class="prettyprint">
  /* RealGrid+ Web 버전 */
    alert(gridView.getVersion());
  /* RealGridJS 버전 */
    alert(RealGridJS.getVersion());
</pre>
