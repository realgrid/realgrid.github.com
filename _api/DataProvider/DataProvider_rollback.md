---
layout: apipost
title: rollback
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/rollback/
tags:
  - savePoint
  - 복원
  - 복제 데이터
---


#### Description

> savePoint로 저장한 데이터복사본을 이용하여 DataProvider를 복원한다.
> 지정된 savePoint 이후의 [DataProvider savePoint](/api/DataProvider/savePoint)들은 삭제된다.  
> 최초복제된 데이터셋은 rollBack을 이용해서 복원은 할수 있지만 삭제를 할수 없기 때문에 [DataProvider clearSavePoints](/api/DataProvider/clearSavePoints) 를 이용하여 삭제한다.  
> savePoint를 지정하지 않으면 최초복제로 복원된다.

#### Syntax

> function rollback(savePoint)

#### Parameters

> **savePoint**  
> Type: Number  
> savePoint를 사용하여 복제한 데이터셋의 id  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    provider.rollback(0);
</pre>

