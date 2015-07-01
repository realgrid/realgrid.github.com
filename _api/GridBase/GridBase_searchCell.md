---
layout: apipost
title: searchCell
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/searchCell/
jsonly: true
---


#### Description

> 지정한 필드들의 값에 해당하는 셀을 찾아 CellIndex를 반환한다.  

#### Syntax

> function searchCell(options)

#### Parameters

> **options**  
> Type: object  
> [SearchOptions](/api/types/SearchOptions/) 모델로 지정한다.

#### Return value

> Type: CellIndex  
> 검색된 [CellIndex](/api/types/CellIndex/) 

#### Example

<pre class="prettyprint">
    var options = {
        fields = ['field1', 'field2'],
        values = ['value1', 'value2'],
        startItemIndex = 0,
        startFieldIndex = 0
    }
    var itemindex = grid.searchCell(options);
</pre>

