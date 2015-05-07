---
layout: apipost
title: onLoadFailed Callback
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onLoadFailed Callback/
---


#### Description

> [loadData](/api/TreeDataProvider/)() 호출이 실패 했을 때 호출된다. 하지만 [loadData](/api/TreeDataProvider/)의 onFailed 매개변수에 callback 함수를 지정했다면 이 callback은 호출되지 않는다.

#### Syntax

> function onLoadFailed(provider, error, ticket)

#### Arguments

> **provider**
> Type: [TreeDataProvider \|TreeDataProvider ](/api/TreeDataProvider/)
> TreeDataProvider object.

> **error**
> Type:
> 실패 메시지.

> **ticket**
> string
> None.

#### Return

None.

#### Example

<pre class="prettyprint">
    dataProvider.onLoadFailed= function (provider, error) {
        console.log("Data load failed: " + error);
    }
</pre>

