---
layout: apipost
title: fillJsonData
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/fillJsonData/
jsonly: true
tags:
  - 데이터 채우기
  - json형태
  - 데이터셋 로드
  - dataProvider
---


#### Description

> 지정한 설정에 따라 데이터셋을 로드해서 DataProvider 로컬 저장소에 저장한다. 

#### Syntax

> function fillJsonData(data, options)

#### Parameters

> **data**
> Type: object  
> JSON형태의 array객체를 넘겨주어야 한다.  

> **options**  
> Type: object    
> [DataFillOptions](/api/types/DataFillOptions/)와 같은 내용의 설정 object.    

#### Return value

> None.   

#### Examples 

<pre class="prettyprint">
    gridView.showProgress();

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
            gridView.closeProgress();

            gridView.setFocus();
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

