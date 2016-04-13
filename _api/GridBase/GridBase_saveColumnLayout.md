---
layout: apipost
title: saveColumnLayout
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/saveColumnLayout/
tags:
  - columnLayout
  - layout
---


#### Description

> 그리드의 컬럼 레이아웃을 저장한다.

#### Syntax

> function saveColumnLayout()

#### Parameters

> None

#### Return value

> Type: Array of String  
> 그리드에 표시된 column명들   

#### Examples 

<pre class="prettyprint">
    var dispCols = gridView.saveColumnLayout();
    var params = { Id: SessionId, layout: JSON.stringify(dispCols) };
    $.ajax({
        type: "post",
        url: "/Demo/SetColumnLayout",
        data: params
    });
</pre>

#### Demo Links
> [ColumnLayout](http://demo.realgrid.com/Demo/ColumnLayout)