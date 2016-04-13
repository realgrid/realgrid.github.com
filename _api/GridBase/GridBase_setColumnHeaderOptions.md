---
layout: apipost
title: setColumnHeaderOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setColumnHeaderOptions/
jsonly: true
tags:
  - columnHeader
  - 컬럼헤더
  - 헤더
  - Header
---


#### Description

> 컬럼 헤더 관련된 정보들을 재설정한다. [ColumnHeaderOptions](/api/types/ColumnHeaderOptions/)이 설정 클래스 이다.

#### Syntax

> function setColumnHeaderOptions(options)

#### Parameters

> **options**  
> Type: Object  
> [ColumnHeaderOptions](/api/types/ColumnHeaderOptions/) 모델과 같은 클래스 정보. [ColumnHeaderOptions](/api/types/ColumnHeaderOptions/) 중 변경하고자 하는 값들만 전달하면 된다.    

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    gridView.setColumnHeaderOptions({
        checkColor: "ffff0000",
        checkNoneColor: "ff00ff00",
        ...
    });
</pre>

#### Demo Links
> [getColumnHeaderOptions](/api/GridBase/getColumnHeaderOptions), [HeaderCheckBox](http://demo.realgrid.com/Demo/HeaderCheckbox)