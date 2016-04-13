---
layout: apipost
title: setColumnLayouts
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setColumnLayouts/
deprecated: true
---


#### Description

> 컬럼 레이아웃들을 미리 설정한다.  
> deprecated 대상  
> [registerColumnLayouts](/api/GridBase/registerColumnLayouts/)을 대신 사용한다.

#### Syntax

> function setColumnLayouts(layout)

#### Parameters

> **layouts**  
> Type: Objects  
> 컬럼 레이아웃 세트들.  

#### Return value

> None.

##### Examples 

<pre class="prettyprint">
    var layouts = [{
        name: "layout_1",
        columns: [
            "OrderID"
        ]
    }, {
        name: "layout_2",
        columns: [
            "CustomerID"
        ]
    }];
 
    grid.setColumnLayouts(layouts);
</pre>
