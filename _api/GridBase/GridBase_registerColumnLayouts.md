---
layout: apipost
title: registerColumnLayouts
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/registerColumnLayouts/
---


#### Description

> 컬럼 레이아웃들을 미리 설정한다.

#### Syntax

> function registerColumnLayouts(layout)

#### Parameters

> **layouts**  
> Type: Objects  
> 컬럼 레이아웃 세트들.  

#### Return value

> none

#### Example

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
 
    grid.registerColumnLayouts(layouts);
</pre>
