---
layout: apipost
title: getDistinctValues
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/getDistinctValues/
---


#### Description

> 지정한 필드로 Ascending Sort 후 같은 필드 데이터는 중복 제거하고 지정한 개수만큼 가져온다.

#### Syntax

> function getDistinctValues(field, maxCount)

#### Parameters

> *field*
> Type: String
>  필드명

> *maxCount*
> Type: Number
>  가져올 데이터의 개수

#### Return value

> Type: Array
> 중복제거한 필드데이터

#### Example

<pre class="prettyprint">
    var distinctValues = provider.getDistinctValues("company", 10);
</pre>

