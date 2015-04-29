---
layout: apipost
title: onLoadFailed
part: Objects
objectname: DataProvider
directiontype: Callback
permalink: /api/DataProvider/onLoadFailed/
---


#### Description

> [DataProvider loadData|loadData](/api/DataProvider/)() 호출이 실패 했을 때 호출된다. 하지만 [DataProvider loadData|loadData](/api/DataProvider/)의 onFailed 매개변수에 callback 함수를 지정했다면 이 callback은 호출되지 않는다.

#### Syntax

> function onLoadFailed(provider, error, ticket)

#### Arguments

> *provider*
> Type: [DataProvider|DataProvider](/api/DataProvider/)
> DataProvider.

> *message*
> Type: String
> 실패 메시지.

> *ticket*
> Type: Number
> 실행 횟수 

#### Return

None.

#### Example

<pre class="prettyprint">
    dataProvider.onLoadFailed= function (provider, error) {
        console.log("Data load failed: " + error);
    }
</pre>

