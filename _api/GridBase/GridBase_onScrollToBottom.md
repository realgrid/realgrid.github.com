---
layout: apipost
title: onScrollToBottom
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onScrollToBottom/
---


#### Description

> 사용자가 키보드나 스크롤 바 등을 통해 그리드에 마지막 행이 표시되는 시점에 호출된다.  

#### Syntax

> function onScrollToBottom (grid)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/types/GridBase/)  
> GridBase 컨트롤  

#### Return

> None.

#### Example

<pre class="prettyprint">
    grid.onScrollToBottom =  function (grid) {
        dataProvider.loadData({
            type: "json",
            url: "http://" + location.host + "/DemoData/LargeDataSet.json?__time__=" + new Date().getTime(),
            progress: true,
            append: true,
            count: 1000
        }, function (provider) {
        }, function (provider, message) {
    });
</pre>

