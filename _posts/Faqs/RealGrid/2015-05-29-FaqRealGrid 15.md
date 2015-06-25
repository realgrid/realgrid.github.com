---
layout: faqpost
title:  드롭다운에 현재 선택 된 라벨값 가져오는 기능이 있나요?
date:   2015-05-29 00:00:00
categories: faq
part: RealGrid
directiontype: 
tags:
    - oncelledited
    - dropdown
---

# Q.

onCellEdited 이벤트에서 dropDown 리스트의 value와 label 값을 가져와서 사용해야 하는데 value 값만 가져오고 label 값을 가져오는 방법을 찾을 수가 없습니다.   
label 값 가져오는 방법을 알려주세요.
  
---
***

# A.

column에 labels값을 지정한 경우 grdMain.columnByField("productName")와 같이 컬럼명으로 해당 컬럼 정보를 가져올 수 있습니다.  
아래와 같이 labels, values 속성에 값을 지정하고 확인 할 수 있습니다.  

<pre class="prettyprint">
// set columns
var columns = [{
    name: "productName",
    fieldName: "productName",
    lookupDisplay : true,
    labels: ["PC","Mouse","Keyboard"],
    values: [1,2,3]
}];


var column = grdMain.columnByField("productName");
console.log(column.labes);
//logs : ["PC","Mouse","Keyboard"]

grdMain.onCellEdited = function getLabels(grid, itemIndex, dataRow, field){ 

    var column = grid.columnByField("productName");
    var values = column.values;
    var labels = column.labels;
    var label;

    for(var k in values){
        if(values[k] == grid.getValue(itemIndex, field)) {
            label = labels[k];
            return;
        }
    }
    console.log(label);
}
</pre>