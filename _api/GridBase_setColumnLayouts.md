---
layout: apipost
title: setColumnLayouts
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setColumnLayouts/
---


#### Description

> 컬럼 레이아웃들을 미리 설정한다. [GridBase_registerColumnLayouts|registerColumnLayouts](/api/GridBase/)을 사용하도록 한다.

#### Syntax

> function setColumnLayouts(layout)

#### Parameters

> *layouts*
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
 
    grid.setColumnLayouts(layouts);
</pre>
