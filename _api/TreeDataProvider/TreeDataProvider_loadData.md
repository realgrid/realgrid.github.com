---
layout: apipost
title: loadData
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/loadData/
tags:
- onCompleted
- onFailed
- plus
---


#### Description

> 지정한 설정에 따라 원격 데이터셋을 로드해서 TreeDataProvider로컬 저장소에 저장한다. 이 함수는 비동기로 실행된다. 즉, 호출하면 데이터 로드가 완료될 때까지 기다리지 않고 바로 리턴한다. 완료되는 시점에 매개변수로 지정하는 성공, 실패 콜백이 호출된다.  
RealGrid Plus 전용 함수.

#### Syntax

> function loadData(options, onCompleted, onFailed)  

#### Parameters

> **options**  
> Type: object  
> [DataLoadOptions](/api/types/DataLoadOptions)와 같은 내용의 설정 object.  

> **onCompleted**  
> Type: Function  
> 데이터 로드가 성공적으로 완료됐을 때 호출된다.  

> **onFailed**  
> Type: Function  
> 데이터 로드가 실패 했을 때 호출된다.  

#### Return value

> Type: string  
> Data load token.  

#### Examples 

<pre class="prettyprint">
    treeProvider.loadData({
        type: "json",
        url: "http://" + location.host + "/DemoData/TreeViewJsonData.json?__time__=" + new Date().getTime(),
        progress: true,
        rows: "rows",
        icon: "icon"
    }, function (provider) {
        var count = provider.getRowCount();
        $("#loadResult").css("color", "green").text(parseInt(count).toLocaleString() + " rows loaded.").show();
    }, function (provider, message) {
        $("#loadResult").css("color", "red").text("Load failed: " + message).show();
    });
</pre>

