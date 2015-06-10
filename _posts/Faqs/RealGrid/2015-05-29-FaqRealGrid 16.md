---
layout: faqpost
title:  db에서 읽어온 데이타로 dropdown 설정하는 방법이 궁금합니다.
date:   2015-05-29 00:00:00
categories: faq
part: RealGrid
directiontype: 
---

# Q.

db에서 데이타를 가져와서 dropdown 에 보여지도록 하고 싶습니다.
  
---
***

# A.

컬럼에 values와 labels를 DB에서 읽어온 데이타를 설정 후 setColumns나 setColumn으로 컬럼을 구성하면 됩니다.

<pre class="prettyprint">
function setColumns(grid) {
    var values = [];
    var labels = [];

    var columns = [{
        "name" : "code",
        "fieldName" : "code",
        "width" : 90,
        "header" : { "text" : "영업부서" },
        "styles" : { "textAlignment" : "center" },
        "lookupDisplay" : true,
        "values": values,
        "labels": labels,
        "editor" : {
            "type" : "dropDown"         
        }
    }]; 

    //영업부서 column의 속성 values,labels에 값을 설정 후 setColumns로 컬럼 구성.
    $.post("/realgrid/product/dptCode.do",function(json){
        $.each(json,function(k,v){
            values.push(v.code);
            labels.push(v.name);
        });
            grid.setColumns(columns);
    });
}
</pre>