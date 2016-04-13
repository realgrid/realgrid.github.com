---
layout: apipost
title: setStateBar
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setStateBar/
tags:
  - stateBar
  - 상태바
---


#### Description

> 그리드 StateBar와 관련된 정보들을 설정한다. [StateBar](/api/types/StateBar/)가 설정 모델이다.

#### Syntax

> function setStateBar(options)

#### Parameters

> **options**  
> Type: object  
> [StateBar](/api/types/StateBar/) 모델과 같은 설정 정보. [StateBar](/api/types/StateBar/) 모델의 속성들 중 변경하고자 하는 값들만 전달하면 된다.    

#### Return value

> None.

##### Examples 

<pre class="prettyprint">
    gridView.setStateBar({
        width: 20,
        visible: true,
        ...
    });
</pre>

#### See Also
> [getStateBar](/api/GridBase/getStateBar), [getRowState](/api/DataProvider/getRowState), [setRowState](/api/DataProvider/setRowState)  
> [StateBar Demo](http://demo.realgrid.com/Demo/StateBar)