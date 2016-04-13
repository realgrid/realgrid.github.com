---
layout: apipost
title: onRowsDeleting
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onRowsDeleting/
tags:
  - deleting
  - rowDelete
  - 삭제
---


#### Description

> 사용자가 Ctrl+Del 키를 누르거나 [deleteSelection](/api/GridBase/deleteSelection/)을 삭제할 때, 실제 삭제 직전에 호출된다. 이 콜백에서 삭제를 거부하는 문자열을 리턴하면 행 삭제가 취소된다.   

#### Syntax

> function onRowsDeleting (grid, rows)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> 그리드.  

> **rows**  
> Array of number  
> 삭제하려는 행들의 데이터행 인덱스 배열.  

#### Return

> Type: string  
> null이 아닌 값을 리턴하면 이 텍스트를 표시하고 삭제를 취소한다.  

#### Examples 

<pre class="prettyprint">
    gridView.onRowsDeleting = function (grid, rows) {
        var msg = null;
        $(rows).each(function (idx, v) {
            console.log(grid.getValues(v));
            if (grid.getValues(v)) {
                if (grid.getValues(v).CustomerID === "HANAR") {
                    msg = 'Can not delete this row.";
                };
            };
        });
        return msg;
    };
</pre>

#### Demo Links
#### See Also

#### See Also
> [Deleting Demo](http://demo.realgrid.com/Demo/Deleting)
> [getValues](/api/GridBase/getValues)