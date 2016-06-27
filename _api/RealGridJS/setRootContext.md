---
layout: apipost
title: setRootContext
part: Objects
objectname: RealGridJS
directiontype: Function
permalink: /api/RealGridJS/setRootContext/
---


#### Description

> RealGridJS가 사용하는 assets의 Root 경로를 지정한다.

#### Syntax

> function setRootContext(path)  

#### Parameters

> **path**    
> Type: String
> Default: "./"    
> assets의 Root 경로. 절대 경로나 페이지를 기준으로 상대 경로로 지정 가능하다.

#### Return value

> None.  

#### Example

<pre class="prettyprint">
    RealGridJS.setRootContext("/images/realgridjs");
</pre>
