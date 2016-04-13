---
layout: apipost
title: setRowGroup
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setRowGroup/
tags:
  - rowGroup
  - 로우그룹
---


#### Description

> 그리드 RowGroup과 관련된 정보들을 설정한다. [RowGroupOptions](/api/types/RowGroupOptions/)이 설정 모델이다.

#### Syntax

> function setRowGroup(options)

#### Parameters

> **options**  
> Type: object  
> [RowGroupOptions](/api/types/RowGroupOptions/) 모델과 같은 설정 정보. [RowGroupOptions](/api/types/RowGroupOptions/) 중 변경하고자 하는 속성만 전달하면 된다.    

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    gridView.setRowGroup({
        mergeExpander: true,
        mergeMode: true,
        ...
    });
</pre>

#### Demo Links
> [getRowGroup](/api/GridBase/getRowGroup)  
> [RowGrouping Demo](http://demo.realgrid.com/Demo/RowGrouping)