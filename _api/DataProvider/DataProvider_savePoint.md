---
layout: apipost
title: savePoint
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/savePoint/
tags:
  - 데이터 복제
  - 저장
  - saveStates
  - 현재 상태 복제
---


#### Description

> DataProvider에 저장되어 있는 데이터셋의 복제를 생성해서 저장하고 savePoint id를 리턴한다.

#### Syntax

> function savePoint(saveStates)

#### Parameters

> **saveStates**  
> Type: boolean  
> 지정하지 않으면 true이다. 현재 row의 [RowState](/api/types/RowState/)를 함께 저장한다.  


#### Return value

> Type: Number  
> 복제된 dataSet의 id이다.  

#### Example

<pre class="prettyprint">
    provider.savePoint(true);
</pre>

