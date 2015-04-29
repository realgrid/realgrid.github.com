---
layout: apipost
title: getValues
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/getValues/
---


#### Description

> 지정한 행의 값을 Array객체로 가져온다. 

#### Syntax

> function getValues(row)

#### Parameters

> *row*
> Type: integer
> dataRow를 입력한다.

#### Return value

> Type: Object
> Array객체로 만들어진 행의 값

#### Example

<pre class="prettyprint">
    var values = dataProvider.getValues(0);
</pre>
