---
layout: apipost
title: getSavePoints
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/getSavePoints/
tags:
  - 복제 지점 가져오기
---


#### Description

> [DataProvider savePoint](/api/DataProvider/savePoint)를 이용해서 복제한 dataSet의 id를 가져온다.

#### Syntax

> function getSavePoints()

#### Parameters

> none

#### Return value

> Type: Array of Number  
> 저장되어있는 savePoint의 id를 배열로 반환한다.  

#### Example

<pre class="prettyprint">
    var spoints = provider.getSavePoints();
</pre>

