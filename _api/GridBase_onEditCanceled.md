---
layout: apipost
title: onEditCanceled
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onEditCanceled/
---


#### Description

> 사용자가 편집중 ESCAPE 키를 입력하거나 [GridBase cancel\|grid.cancel](/api/GridBase/)()이 호출되어 편집이 취소된후 호출된다.

#### Syntax

> function onEditCanceled(id, index)

#### Arguments

> **grid**
> Type: [GridView\|GridView](/api/GridBase/)
> GridView 컨트롤

> **index**
> Type: String
> 편집 중인 칼럼의 name. name이 없는 경우 null이 출력된다.

#### Return

None.

#### Example

<pre class="prettyprint">
    grid.onEditCanceled =  function (id, index) {
        console.log("id ==>",id,"index ==>",index);
        }
    };
</pre>

