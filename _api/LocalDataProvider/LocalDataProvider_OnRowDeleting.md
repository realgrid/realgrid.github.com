---
layout: apipost
title: onRowDeleting
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onRowDeleting/
tags:
  - 삭제 직전
  - 삭제 취소 
  - 삭제 이벤트
---


#### Description

> LocalDataProvider에서 데이터행이 삭제되기 직전에 호출된다.  
> 삭제를 취소하려는 경우 false를 return한다.

#### Syntax

> function onRowDeleting(provider, row);

#### Parameters

> **provider**  
> Type: [LocalDataProvider](/api/LocalDataProvider/)  
> LocalDataProvider object.

> **row**  
> Type: Number  
> 삭제되는 데이터행의 id

#### Return value

> Type: Boolean  
> false를 리턴하면 삭제가 취소된다.

#### Example

<pre class="prettyprint">
    provider.onRowDeleting = function (provider, row) {
        if (provider.getValue(row,"field") == "1") {
            RealGrids.alert("삭제할수 없습니다");
            return false;  
        } else {
            return true;
        };
    };
</pre>

