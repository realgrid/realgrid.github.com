---
layout: apipost
title: onScrollToBottom
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onScrollToBottom/
tags:
  - scroll
  - 마지막행
  - 스크롤링
  - event
---


#### Description

> 사용자가 키보드나 스크롤 바 등을 통해 그리드에 마지막 행이 표시되는 시점에 호출된다.  

#### Syntax

> function onScrollToBottom (grid)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

#### Return

> None.

#### Example

<pre class="prettyprint">
    gridView.onScrollToBottom =  function (grid) {
        var data = {"SearchKey":"searchData"},
        $.ajax({
            url:"/loadData.do",
            data:data,
            type:"post",
            async:false, /* 필요에 따라서 비동기 또는 동기 호출*/
            success: function (data, textStatus) {
                grid.fillJsonData(data.dataList, {fillMode:"append"});
            }
        })
    });
</pre>

#### See Also
> [Lazy Load Demo](http://demo.realgrid.com/Demo/LazyLoadData), [DataFillOptions](/api/types/DataFillOptions/), [fillJsonData](/api/GridBase/fillJsonData)