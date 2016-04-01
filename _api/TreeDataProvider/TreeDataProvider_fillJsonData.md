---
layout: apipost
title: fillJsonData
part: Objects
objectname: TreeDataProvider
directiontype: Function
permalink: /api/TreeDataProvider/fillJsonData/
jsonly: true
---


#### Description

> 지정한 설정에 따라 데이터셋을 로드해서 TreeDataProvider 로컬 저장소에 저장한다. 

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
    treeMain.showProgress();

    $.ajax({
        url: "../DemoData/TreeViewJsonData.json?__time__=" + new Date().getTime(),
        success: function (data) {
            treeProvider.fillJsonData(data, { rows: "rows", icon: "icon" });
        },
        error: function (xhr, status, error) {
            //$("#loadResult").css("color", "red").text("Load failed: " + error).show();
        },
        complete: function (data) {
            setLoading(false);
            treeMain.closeProgress();

            treeMain.setFocus();
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
#### See Also

> [TreeView Load Json](http://demo.realgrid.net/Demo/TreeLoadJsonData){:target="_blank"} 참조    