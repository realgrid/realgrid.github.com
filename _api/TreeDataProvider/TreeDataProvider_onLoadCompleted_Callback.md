---
layout: apipost
title: onLoadCompleted
part: Objects
objectname: TreeDataProvider
directiontype: Callback
permalink: /api/TreeDataProvider/onLoadCompleted Callback/
---


#### Description

> [loadData](/api/TreeDataProvider/loadData) 호출이 성공적으로 완료됐을 때 호출된다. 하지만 [loadData](/api/TreeDataProvider/loadData)의 onCompleted 매개변수에 callback 함수를 지정했다면 이 callback은 호출되지 않는다.  
RealGrid Plus 전용 함수.  

#### Syntax

> function onLoadCompleted (provider, ticket)  

#### Arguments

> **provider**  
> Type: [TreeDataProvider](/api/TreeDataProvider/)  
> TreeDataProvider object.  

> **ticket**  
> Type:   
> None.  

#### Return

> None.  

#### Examples 

<pre class="prettyprint">
    treeProvider.onLoadCompleted = function (provider) {
        console.log("Data loaded.");
    }
</pre>

