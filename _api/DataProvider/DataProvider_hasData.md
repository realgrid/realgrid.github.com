---
layout: apipost
title: hasData
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/hasData/
tags:
  - 실제 값
  - 행의 값
---


#### Description

> 지정한 데이터행이 실제 값이 들어 있는 행이면 true를 리턴한다. [setRowCount](/api/LocalDataProvider/setRowCount/)로 생성된 가상 행 상태이면 false를 리턴한다.

#### Syntax

> function hasData(row)

#### Parameters

> **row**  
> Type: number  
> 행 번호

#### Return value

> Type: boolean.  
> 값이 있는 행이면 true. 가상 행이면 false.

#### Example

<pre class="prettyprint">
    if (!provider.hasData(10)) {
        alsert('10 row is virtual');
    }
</pre>


