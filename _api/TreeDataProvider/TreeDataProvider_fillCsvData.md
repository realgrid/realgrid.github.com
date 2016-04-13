---
layout: apipost
title: fillCsvData
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/fillCsvData/
jsonly: true
tag:
 - set csv
 - load data
 - csv 로드하기
 - csv 불러오기
---


#### Description

> 지정한 설정에 따라 데이터셋을 로드해서 TreeDataProvider 로컬 저장소에 저장한다. 

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
    treeMain.showProgress();
    $.ajax({
        type: "GET",
        url: "http://" + location.host + "/DemoData/TreeViewCsvData.txt?__time__=" + new Date().getTime(),
        dataType: "text",
        success: function (data) {
            treeProvider.fillCsvData(data, {tree:"tree",icon:"icon",quoted:true, start:1});
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
#### See Also

#### See Also

> [TreeView Load CSV](http://demo.realgrid.net/Demo/TreeLoadCsvData){:target="_blank"} 참조    