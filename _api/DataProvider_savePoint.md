---
layout: apipost
title: savePoint
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/savePoint/
---


#### Description

> DataProvider에 저장되어 있는 데이터셋의 복제를 생성해서 저장하고 savePoint id를 리턴한다.

#### Syntax

> function savePoint(saveStates)

#### Parameters

> *saveStates*
> Type: boolean
> 지정하지 않으면 true이다.


#### Return value

> Type: Number;

#### Example

<pre class="prettyprint">
    provider.savePoint(true);
</pre>

