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
    function searchHandler() {
        var value = $("#searchTxt").val();
        var fields = [ "RequestType", "ServiceCode" ];
        var startFieldIndex = fields.indexOf(grdMain.getCurrent().fieldName) + 1;
        var options = {
            fields : fields,
            value : value,
            startItemIndex : grdMain.getCurrent().itemIndex,
            startFieldIndex : startFieldIndex,
            wrap : true,
            caseSensitive : false,
            partialMatch : true
        };

        var index = grdMain.searchCell(options);
        grdMain.setCurrent(index);
    }
</pre>

