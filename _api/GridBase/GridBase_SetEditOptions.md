---
layout: apipost
title: setEditOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setEditOptions/
tags:
  - editing
  - edit Option
  - 편집옵션
---


#### Description

> 그리드 편집 방식과 관련된 정보들을 재설정한다. [EditOptions](/api/types/EditOptions/)이 설정 모델이다.

#### Syntax

> function setEditOptions(options)

#### Parameters

> **options**  
> Type: Object  
> [EditOptions](/api/types/EditOptions/) 모델과 같은 설정 정보. [EditOptions](/api/types/EditOptions/) 중 변경하고자 하는 값들만 전달하면 된다.    

#### Return value

> None.

##### Examples 

<pre class="prettyprint">
    gridView.setEditOptions({
        deletable: true,
        readOnly: false,
        ...
    });
</pre>

#### See Also
> [getEditOptions](/api/GridBase/getEditOptions)  
> [데이터 편집하기](/tutorial/a23/)