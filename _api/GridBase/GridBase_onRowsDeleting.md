---
layout: apipost
title: onRowsDeleting
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onRowsDeleting/
---


#### Description

> 사용자가 Ctrl+Del 키를 누르거나 [deleteSelection](/api/GridBase/)()을 호출해서 선택된 행(들)을 삭제할 때, 실제 삭제 직전에 호출된다. 이 콜백에서 삭제를 거부하는 문자열을 리턴하면 행 삭제가 취소된다. 

#### Syntax

> function onRowsDeleting (grid, rows)

#### Arguments

> **grid**
> Type: [GridView\|GridView](/api/GridBase/)
> 그리드.

> **rows**
> Array of number
> 삭제하려는 행들의 데이터행 인덱스 배열.

#### Return

> Type: string
> null이 아닌 값을 리턴하면 이 텍스트를 표시하고 삭제를 취소한다.

#### Example

<pre class="prettyprint">
    grid.onRowsDeleting = function (grid, rows) {
        var msg = null;
        $(rows).each(function (idx, v) {
            console.log(grid.getRowData(v));
            if (grid.getRowData(v)) {
                if (grid.getRowData(v).CustomerID === "HANAR") {
                    msg = 'Can not delete this row.";
                };
            };
        });
        return msg;
    };
</pre>

