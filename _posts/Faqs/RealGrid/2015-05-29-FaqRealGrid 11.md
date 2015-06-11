---
layout: faqpost
title:  데이타에 따라 동적으로 그리드를 생성할 수 있을까요?
date:   2015-05-29 00:00:00
categories: faq
part: RealGrid
directiontype: 
---

# Q.

setFields, setColumns를 데이타에 따라 동적으로 설정하고 싶습니다.

---
***

# A.

그리드생성의 경우 가급적이면 한번만 생성을 하고 field, column이 변경되는 경우에는 setFields, setColumns를 이용해서
field와 column만 변경을 하여 동적 그리드를 구성하는것을 권장합니다.  
RealGridJS의 경우 지정된 dom element하위에 새로운 div element와 canvas element를 생성해서 그리는 방식이기 때문에 여러번 생성을하게되면
div element가 계속 생성되게 됩니다.

<pre class="prettyprint">
$(function(){
    dsMaster = new RealGridJS.LocalDataProvider();
    grid = new RealGridJS.GridView("grid");
    grid.setDataSource(dsMaster);
//    grid.setOptions, grid.setDisplayOptions 등을 처리.
    setGrid();
}); 
//
function setGrid(){
    $.get(“url”, function(data){
        var fields = [];
        var keys = Object.keys(data[0]);
        for (var i in keys) {
            fields.push({fieldName:keys[i], name:keys[i]});
        };  
        dsMaster.setFields(fields);
        grid.setColumns(fields);
        // fields라는 동일한 배열을 이용해서 그리드와 dataProvider를 설정해도 상관없읍니다. 필요한 property외에는 무시합니다.
        dsMaster.fillJsonData(data);
    }
}
</pre>

간략하게 만들어본 코드입니다.  
dataProvider의 경우 setFields를 하게되면 기존에 load된 데이타는 모두 삭제하고 field를 재구성합니다.
