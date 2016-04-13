---
layout: apipost
title: onRowUpdating
part: Objects
objectname: LocalDataProvider
directiontype: Callback
permalink: /api/LocalDataProvider/onRowUpdating/
tags:
  - 데이터 수정 직전
  - 데이터 수정 이벤트
---


#### Description

> localDataProvider에 데이터를 수정하기 직전에 호출된다.  
> 결과값으로 false를 돌려주면 grid에서 편집중이던 내용이 무시되고 편집이전으로 돌아간다.  
> [LocalDataProvider.setValue](/api/LocalDataProvider/setValue/)(row, field, value)로 수정되는 경우에는 호출되지 않는다.

#### Syntax

> function onRowUpdating(provider, row)

#### Parameters

> **provider**  
> Type: [LocalDataProvider](/api/LocalDataProvider/)  
> LocalDataProvider object.

> **row**  
> Type: Number  
> 편집중인 데이터 행

#### Return value

> Type: Boolean
> false를 리턴하면 수정이 취소된다.

#### Examples 

<pre class="prettyprint">
    dataProvider.onRowUpdating = function (provider, row) {
        if ($("#chkAllow").is(":checked")) {
            // 그리드 콜백을 종료한 후 메시지를 표시되도록 해야 한다.
            RealGrids.alert('수정할 수 없습니다!');
            return false;
        }
        return true; 
    };
</pre>

