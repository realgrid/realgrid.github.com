---
layout: apipost
title: onLoadCompleted Callback
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onLoadCompleted Callback/
---


#### Description

> [loadData](/api/TreeDataProvider/)() 호출이 성공적으로 완료됐을 때 호출된다. 하지만 [loadData](/api/TreeDataProvider/)의 onCompleted 매개변수에 callback 함수를 지정했다면 이 callback은 호출되지 않는다.

#### Syntax

> function onLoadCompleted (provider, ticket)

#### Arguments

> **provider**
> Type: [TreeDataProvider \|TreeDataProvider ](/api/TreeDataProvider/)
> TreeDataProvider object.

> **ticket**
> Type: 
> None.

#### Return

None.

#### Example

<pre class="prettyprint">
    dataProvider.onLoadCompleted = function (provider) {
        console.log("Data loaded.");
    }
</pre>

