---
layout: apipost
title: fillXmlData
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/fillXmlData/
jsonly: true
tag:
 - set xml
 - load data
 - xml 로드하기
 - xml 불러오기
---


#### Description

 지정한 설정에 따라 데이터셋을 로드해서 TreeDataProvider 로컬 저장소에 저장한다. 

#### Syntax

> function fillXmlData(data, options)

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
treeMain.showProgress();
$.ajax({
    type: "GET",
    url: "http://" + location.host + "/DemoData/TreeViewXmlData.xml?__time__=" + new Date().getTime(),
    dataType: "text",
    success: function (data) {
        treeProvider.fillXmlData(data, { rows: "row", icon: "icon" });
        var count = treeProvider.getRowCount();
        $("#loadResult").css("color", "green").text(parseInt(count).toLocaleString() + " rows loaded.").show();
        treeMain.setFocus();
    },
    error: function (xhr, status, error) {
        $("#loadResult").css("color", "red").text("Load failed: " + message).show();
    },
    complete: function (data) {
        treeMain.closeProgress();
    },
    xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Download progress
        xhr.addEventListener("progress", function (evt) {
            if (evt.lengthComputable) {
                treeMain.setProgress(0, evt.total, evt.loaded);
            }
        }, false);
        return xhr;
    }
});
</pre>

---

#### Demo Links

* [TreeView Load Xml](http://demo.realgrid.net/Demo/TreeLoadXmlData){:target="_blank"}    