---
layout: apipost
title: onLoadCompleted
part: Objects
objectname: DataProvider
directiontype: Callback
permalink: /api/DataProvider/onLoadCompleted/
tags:
  - 데이터 로드 성공
  - 호출 성공
---

#### Description

> [DataProvider loadData](/api/DataProvider/loadData/)() 호출이 성공적으로 완료됐을 때 호출된다. 하지만 [DataProvider loadData](/api/DataProvider/loadData/)의 onCompleted 매개변수에 callback 함수를 지정했다면 이 callback은 호출되지 않는다.

#### Syntax

> function onLoadCompleted (provider, ticket)

#### Arguments

> **provider**  
> Type: [DataProvider](/api/features/Data Provider/)
> DataProvider.

> **ticket**
> Type: Number 
> 실행 횟수

#### Return

> None.

#### Examples 

<pre class="prettyprint">
    dataProvider.onLoadCompleted = function (provider) {
        console.log("Data loaded.");
    }
</pre>
