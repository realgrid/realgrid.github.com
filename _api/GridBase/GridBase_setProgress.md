---
layout: apipost
title: setProgress
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setProgress/
jsonly: true
tags:
  - 진행
  - progress
---


#### Description

 프로그래스 창을 설정한다.   

 ※ 프로그래스바를 "데이터 로딩중" 용도로 사용한다면 HttpRequest ProgressEvent의 total, loaded 정보를 이용하여 프로그래스바를 진행시키기에 때문에 해당 정보가 반환되지 않는다면 프로그래스바는 진행되지 않는다.    

#### Syntax

> function setProgress(min, max, position, message)

#### Parameters

>**min**  
>Type: Number   
>프로그래스바의 시작값   

>**max**  
>Type: Number   
>프로그래스바의 끝값    

>**position**  
>Type: Number   
>프로그래스바의 위치값  

>**message**  
>Type: String  
>프로그래스바에 표시되는 메시지  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
gridView.showProgress();

$.ajax({
    type: "GET",
    url: "http://" + location.host + "/Demo/GetCustomOrders?__date__=" + new Date().getTime(),
    dataType: "json",
    success: function (data) {
        gridView.closeProgress();
        provider.fillJsonData(data, {
            start: 1,
            count : 10
        });
        var count = provider.getRowCount();
        $("#loadResult").css("color", "green").text(parseInt(count).toLocaleString() + " rows loaded.").show();
        gridView.setFocus();
    },
    error: function (xhr, status, error) {
        var err = xhr + ', ' + status + ', ' + error;
        console.log("Load failed: " + err);
        $("#loadResult").css("color", "red").text("Load failed: " + err).show();
    },
    complete: function (data) {
        gridView.closeProgress();
    },
    xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Download progress
        xhr.addEventListener("progress", function (evt) {
            if (evt.lengthComputable) {
                if (evt.loaded > evt.total / 2) {
                    gridView.setProgress(0, evt.total, evt.loaded, "Loading...");
                } else {
                    gridView.setProgress(0, evt.total, evt.loaded);
                }
            }
        }, false);
        return xhr;
    }
});
</pre>

---

#### API Links

* [showProgress](/api/GridBase/showProgress)
* [closeProgress](/api/GridBase/closeProgress)