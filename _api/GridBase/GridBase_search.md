---
layout: apipost
title: search
part: Objects
objectname: GridBase
directiontype: Function
deprecated: true
permalink: /api/GridBase/search/
---


#### Description

> 지정한 필드들의 값에 해당하는 첫번째 행을 찾아 행의 번호를 반환한다.  
> deprecated 대상  
> 대신 [searchItem](/api/GridBase/searchItem/)을 사용하세요  

#### Syntax

> function search(options)

#### Parameters

> **options**  
> Type: object  
> [SearchOptions](/api/types/SearchOptions/) 모델로 지정한다.  

#### Return value

> Type: Number
> 검색된 행 번호. 검색되지 않으면 -1.

#### Examples 

<pre class="prettyprint">
    var options = {
        fields = ['field1', 'field2'],
        values = ['value1', 'value2']
    }
    var itemindex = grid.search(options);
</pre>

