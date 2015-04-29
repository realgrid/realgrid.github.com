---
layout: apipost
title: setFilters
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/setFilters/
---


#### Description

> DataProvider에 필터를 적용한다. 필터에 부합하지 않은 행은 DataProvider에 존재하지 않게 된다.

#### Syntax

> function setFilters: function (filters, filterMode)

#### Parameters

> *filters*
> Type: Array of Object
> filter객체의 배열이다.

> *filterMode*
> Type: String
> filter의 동작 모드이다. 'and', 'or' 가 있다.

#### Return value

> none

#### Example

<pre class="prettyprint">
    var filters = [
        "value['company'] = 'Mynte'",
        "value['gender'] = 'Female'"
    ];
    var filterMode = 'and';

    dataProvider.setFilters(filters, filterMode);	
</pre>
