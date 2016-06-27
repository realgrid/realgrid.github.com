---
layout: apipost
title: setRowGroupOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setRowGroupOptions/
deprecated: true
---


#### Description

 deprecated 대상.  
 [setRowGroup](/api/GridBase/setRowGroup/)을 대신 사용해야 한다.  
 그리드 RowGroup과 관련된 정보들을 설정한다. [RowGroupOptions](/api/types/RowGroupOptions/)이 설정 모델이다.

#### Syntax

> function setRowGroupOptions(options)

#### Parameters

> **options**  
> Type: object  
> [RowGroupOptions](/api/types/RowGroupOptions/) 모델과 같은 설정 정보. [RowGroupOptions](/api/types/RowGroupOptions/) 중 변경하고자 하는 속성만 전달하면 된다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
gridView.setRowGroupOptions({
    expandedAdornments: "both",
    collapsedAdornments: "header",
    ...
});
</pre>

