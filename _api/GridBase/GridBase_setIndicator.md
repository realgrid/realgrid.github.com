---
layout: apipost
title: setIndicator
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setIndicator/
tags:
  - indicator
  - 행번호표시
---


#### Description

> 그리드 Indicator와 관련된 정보들을 설정한다. [Indicator](/api/types/Indicator/)이 설정 모델이다.

#### Syntax

> function setIndicator(options)

#### Parameters

> **options**  
> Type: object  
> [Indicator](/api/types/Indicator/) 모델과 같은 설정 정보. [Indicator](/api/types/Indicator/) 중 변경하고자 하는 속성만 전달하면 된다.    

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    gridView.setIndicator({
        minWidth: 30,
        visible: true,
        displayValue:"row" 
        ...
    });
</pre>

#### Demo Links
#### See Also

#### See Also
> [getIndicator](/api/GridBase/getIndicator)