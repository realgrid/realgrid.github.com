---
layout: apipost
title: fillJsonData
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/fillJsonData/
jsonly: true
---


#### Description

> 지정한 설정에 따라 데이터셋을 로드해서 DataProvider 로컬 저장소에 저장한다. 

#### Syntax

> function fillJsonData(data, options)

#### Parameters

> **data**
> Type: object  
> Json 형태의 data.  

> **options**  
> Type: object    
> [DataFillOptions](/api/types/DataFillOptions/)와 같은 내용의 설정 object.    

#### Return value

> None.   

#### Example

<pre class="prettyprint">
    grdMain.showProgress();

    $.ajax({
        url: "../../DemoData/defaultdemodata.json?__time__=" + new Date().getTime(),
        success: function (data) {
            dataProvider.fillJsonData(data, { count: 1000 });
        },
        error: function (xhr, status, error) {
            //$("#loadResult").css("color", "red").text("Load failed: " + error).show();
        },
        complete: function (data) {
            setLoading(false);
            grdMain.closeProgress();

            grdMain.setFocus();
        },
        xhr: function () {
            var xhr = new window.XMLHttpRequest();
            //Download progress
            xhr.addEventListener("progress", function (evt) {
                if (evt.lengthComputable) {
                    grdMain.setProgress(0, evt.total, evt.loaded);
                }
            }, false);
            return xhr;
        }
    });
</pre>

