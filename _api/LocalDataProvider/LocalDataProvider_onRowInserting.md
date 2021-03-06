---
layout: apipost
title: onRowInserting
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onRowInserting/
tags:
  - 데이터행 추가 직전
  - 데이터행 추가 이벤트
---


#### Description

 LocalDataProvider에 데이터행이 추가되기 직전에 호출된다.

#### Syntax

> function onRowInserting (provider, row)

#### Arguments

> **provider**  
> Type: [LocalDataProvider](/api/LocalDataProvider/)  
> LocalDataProvider object.  

> **row**  
> Type: number  
> 추가되려는 행의 인덱스.  

#### Return

> Type: Boolean  
> false를 리턴하면 추가가 취소된다.

#### Examples 

<pre class="prettyprint">
dataProvider.onRowInserting = function (provider, row) {
    if ($("#chkAllow").is(":checked")) {
        // 그리드 콜백을 종료한 후 메시지를 표시되도록 해야 한다.
        RealGrids.alert('추가할 수 없습니다!');
        return false;
    }
    return true;
};
</pre>

