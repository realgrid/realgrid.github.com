---
layout: apipost
title: setCheckBar
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setCheckBar/
tags:
  - check
  - 체크
  - checkBar
  - 체크바
---


#### Description

> 그리드 CheckBar와 관련된 정보들을 설정한다. [CheckBar](/api/types/CheckBar/)이 설정 모델이다.

#### Syntax

> function setCheckBar(options)

#### Parameters

> **options**  
> Type: object  
> [CheckBar](/api/types/CheckBar/) 모델과 같은 설정 정보. [CheckBar](/api/types/CheckBar/) 중 변경하고자 하는 속성만 전달하면 된다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    gridView.setCheckBar({
        width: 30,
        visible: true,
        ...
    });
</pre>

#### See Also
> [CheckBar Demo](http://demo.realgrid.com/Demo/CheckBar)