---
layout: apipost
title: closeProgress
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/closeProgress/
jsonly: true
tags:
  - progress
---


#### Description

 프로그래스 창을 닫습니다.    
 
 ※ 프로그래스바를 "데이터 로딩중" 용도로 사용한다면 HttpRequest ProgressEvent의 total, loaded 정보를 이용하여 프로그래스바를 진행시키기에 때문에 해당 정보가 반환되지 않는다면 프로그래스바는 진행되지 않는다.     

#### Syntax

> function closeProgress()

#### Parameters

> None

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
gridView.showProgress();

var startTime = new Date().getTime();
$.ajax({
    url: "/DemoData/TooLargeDataSet.csv?__time__=" + startTime,
    success: function (data) {
        dataProvider.fillCsvData(data, {});

        var count = dataProvider.getRowCount();
        var ellapse = (new Date().getTime() - startTime) / 1000;
        $("#loadResult").css("color", "green").text(parseInt(count).toLocaleString() + " rows loaded. " + ellapse + " elapsed").show();
        gridView.setFocus();
    },
    error: function (xhr, status, error) {
        $("#loadResult").css("color", "red").text("Load failed: " + error).show();
        $("#btnLoad").removeAttr("disabled");
    },
    complete: function (data) {
        gridView.closeProgress();
    },
    xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Download progress
        xhr.addEventListener("progress", function (evt) {
            if (evt.lengthComputable) {
                gridView.setProgress(0, evt.total, evt.loaded);
            }
        }, false);
        return xhr;
    }
});
</pre>

---

#### API Links

* [showProgress](/api/GridBase/showProgress)
* [setProgress](/api/GridBase/setProgress)