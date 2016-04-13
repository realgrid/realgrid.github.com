---
layout: apipost
title: showProgress
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/showProgress/
jsonly: true
tags:
  - progress
  - 진행바
---


#### Description

> 프로그래스 창을 표시한다.

#### Syntax

> function showProgress(modal)

#### Parameters

>**modal**  
>Type: Boolean   
>프로그래스 창의 모달 여부를 지정한다.   

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

#### Demo Links
#### See Also

#### See Also
> [closeProgress](/api/GridBase/closeProgress), [setProgress](/api/GridBase/setProgress)