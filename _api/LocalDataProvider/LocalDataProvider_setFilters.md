---
layout: apipost
title: setFilters
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/setFilters/
tags:
  - 필터
  - 필터 조건
  - filterMode
---


#### Description

> DataProvider에 필터를 적용한다. 필터에 부합하지 않은 행은 DataProvider에 존재하지 않게 된다.

#### Syntax

> function setFilters: function (filters, filterMode)

#### Parameters

> **filters**  
> Type: Array of String  
> filter조건의 배열이다.

> **filterMode**  
> Type: String  
> Default: 'and'  
> filters에 지정된 필터 조건들의 합산 방법. 'and' \| 'or'

#### Return value

> none

##### Examples 

<pre class="prettyprint">
    var filters = [
        "value['company'] = 'Mynte'",
        "value['gender'] = 'Female'"
    ];
    var filterMode = 'and';

    dataProvider.setFilters(filters, filterMode);	
</pre>
