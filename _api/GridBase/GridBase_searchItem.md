---
layout: apipost
title: searchItem
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/searchItem/
tags:
  - search
  - 찾기
---


#### Description

> 지정한 필드들의 값에 해당하는 첫번째 행을 찾아 행의 번호를 반환한다.

#### Syntax

> function searchItem(options)

#### Parameters

> **options**  
> Type: object  
> [SearchOptions](/api/types/SearchOptions/) 모델로 지정한다.

#### Return value

> Type: Number  
> 검색된 행 번호. 검색되지 않으면 -1.  

#### Example

<pre class="prettyprint">
    var options = {
        fields = ['field1', 'field2'],
        values = ['value1', 'value2']
    }
    var itemindex = gridView.searchItem(options);
</pre>

#### See Also
> [searchCell](/api/GridBase/searchCell)