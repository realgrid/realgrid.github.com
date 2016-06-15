---
layout: apipost
title: fillCsvData
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/fillCsvData/
jsonly: true
tags:
  - 데이터 채우기
  - csv형태
  - 데이터셋 로드
  - dataProvider
---


#### Description

 지정한 설정에 따라 데이터셋을 로드해서 DataProvider 로컬 저장소에 저장한다. 

#### Syntax

> function fillCsvData(data, options)

#### Parameters

> **data**
> Type: object  
> csv 형태의 data.  

> **options**  
> Type: object    
> [DataFillOptions](/api/types/DataFillOptions/)와 같은 내용의 설정 object.    

#### Return value

> None.   

#### Examples 

<pre class="prettyprint">
gridView.showProgress();

var current = gridView.getCurrent();
var dataRow = current.dataRow >= 0 ? current.dataRow : 0;    

$.ajax({
    url: "/DemoData/defaultloaddata.csv?__time__=" + new Date().getTime(),
    success: function (data) {
        dataProvider.fillCsvData(data, { count: 10, fillMode: "insert", fillPos: dataRow });
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

