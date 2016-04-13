---
layout: apipost
title: requestUpdateError
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/requestUpdateError/
tags:
  - error
---


#### Description

> UpdateError를 발생시킨다.(RealGrid+ Web TEST 용)

#### Syntax

> function requestUpdateError(context, message)

#### Parameters

> **context**  
> Type: String  
> 

> **message**
> Type: String
> 표시할 에러 메시지 내용

#### Return value

> None

#### Examples 

<pre class="prettyprint">
    gridView.requestUpdateError(null, "This is test update exception");
</pre>
