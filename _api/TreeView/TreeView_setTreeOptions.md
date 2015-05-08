---
layout: apipost
title: setTreeOptions
part: Objects
objectname: TreeView
directiontype: Function
permalink: /api/TreeView/setTreeOptions/
---


#### Description

> 트리뷰 표시 및 동작과 관련된 설정을 한다.

#### Syntax

> function setTreeOptions (options)

#### Parameters

> **options**  
> Type: object  
> [TreeOptions](/api/types/TreeOptions)와 같은 내용의 설정 정보. [TreeOptions](/api/types/TreeOptions) 중 변경하고자 하는 속성만 전달하면 된다.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    tree.setTreeOptions({
        iconImages: "icons",
        iconWidth: 20,
        ...
    });
</pre>

