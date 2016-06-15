---
layout: apipost
title: beginUpdate
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/beginUpdate/
tags:
  - endUpdate
  - 일괄 반영
---

<script>
var gridView;
var dataProvider;
    
$(document).ready( function() {

    RealGridJS.setTrace(false);
    RealGridJS.setRootContext("/script");
    
    dataProvider = new RealGridJS.LocalDataProvider();
    gridView = new RealGridJS.GridView("realgrid");
    gridView.setDataSource(dataProvider);

    setFields(dataProvider);
    setColumns(gridView);

    var data = [
        ["가수", "여자", "정수라", "1988-09-02", "99", "90", "90", "100", "100", "90"],
        ["배우", "여자", "송윤아", "1990-02-18", "33", "90", "70", "60", "100", "80"],
        ["배우", "여자", "전도연", "1991-08-21", "22", "90", "70", "60", "100", "80"],
        ["가수", "여자", "이선희", "1978-01-19", "33", "90", "70", "60", "100", "80"],
        ["배우", "여자", "하지원", "1979-12-09", "11", "90", "70", "60", "100", "80"],
        ["가수", "여자", "소찬휘", "1987-05-12", "55", "90", "70", "60", "100", "80"],
        ["가수", "여자", "박정현", "1980-08-06", "22", "90", "70", "60", "100", "80"],
        ["배우", "여자", "전지현", "1977-03-28", "44", "90", "70", "60", "100", "80"]
    ];
    dataProvider.setRows(data);

    dataProvider.onRowInserting = function (provider, row) {
        addLog("provider.onRowInserting row=" + row);
    };    
      
    $("#button1").click(function(){
      dataProvider.beginUpdate();
      try {
        for (var i = 0; i < 10; i++) {
           var values = gridView.getValues(i);
           dataProvider.addRow(values);
        }
      } finally {
        dataProvider.endUpdate();
      }
    })

    $("#button2").click(function(){
        for (var i = 0; i < 10; i++) {
           var values = gridView.getValues(i);
           dataProvider.addRow(values);
        }
    })    

});

//다섯개의 필드를 가진 배열 객체를 생성합니다.
function setFields(provider) {
    var fields = [{
    fieldName: "field1"
    }, {
        fieldName: "field2"
    }, {
        fieldName: "field3"
    }, {
        fieldName: "field4",
        dataType: "datetime"
    }, {
        fieldName: "field5",
        dataType: "number"
    }, {
        fieldName: "field6",
        dataType: "number"
    },{
        fieldName: "field7",
        dataType: "number"
    }, {
        fieldName: "field8",
        dataType: "number"
    }, {
        fieldName: "field9",
        dataType: "number"
    }, {
        fieldName: "field10",
        dataType: "number"
    }];

    //DataProvider의 setFields함수로 필드를 입력합니다.    
    provider.setFields(fields);    
}

//필드와 연결된 컬럼 배열 객체를 생성합니다.
function setColumns(grid) {
    var columns = [{
        name: "col1",
        fieldName: "field1",
        header : {
            text: "직업"
        },
        width : 60            
    }, {
        name: "col2",
        fieldName: "field2",
        header : {
            text: "성별"
        },
        editor : {
            type: "dropDown",
            dropDownCount: 2,
            values: ["남자", "여자"],
            labels: ["남", "여"],
            lookupDisplay: true
        },
        width: 50
    }, {
        name: "col3",
        fieldName: "field3",
        header : {
            text: "이름"
        },
        width: 80
    }, {
        name: "col4",
        fieldName: "field4",
        header : {
            text: "생일"
        },
        editor: {
            type: "date",
            datetimeFormat: "yyyy-MM-dd"
        },
        width: 90
    }, {
        name: "col5",
        fieldName: "field5",
        header : {
            text: "수학"
        },
        editor : {
            type: "number"
        },
        width: 80
    }, {
        name: "col6",
        fieldName: "field6",
        header : {
          text: "민법"
        },
        width: 80
    }, {
        name: "col7",
        fieldName: "field7",
        header : {
            text: "한국사"
        },
        width: 80
    }, {
        name: "col8",
        fieldName: "field8",
        header : {
            text: "영어"
        },
        width: 80
    }, {
        name: "col9",
        fieldName: "field9",
        header : {
            text: "과학"
        },
        width: 80
    }, {
        name: "col10",
        fieldName: "field10",
        header : {
            text: "사회"
        },
        width: 80
    }];

    //컬럼을 GridView에 입력 합니다.
    grid.setColumns(columns);

}

function addLog(log) {
  var prevLog = $("#eventLog").val()
  $("#eventLog").val(prevLog + log + "\n");
  $("#eventLog").scrollTop($("#eventLog")[0].scrollHeight);
};

</script>

#### Description

 beginUpdate()를 호출하면 [endUpdate()](/api/DataProvider/endUpdate)가 호출될 때까지 DataProvider에 변경이 이루어질 때마다 관련 이벤트들이 발생하지 않고, endUpdate() 내에서 갱신 요구 이벤트가 한 번 발생하게 된다. 예를 들어 [LocalDataProvider addRow](/api/LocalDataProvider/addRow/), [DataProvider updateRow](/api/DataProvider/updateRow/)등을 연속해서 많이 호출한다거나, [LocalDataProvider addRows](/api/LocalDataProvider/addRows), [LocalDataProvider updateRows](/api/LocalDataProvider/updateRows/)등으로 수백건 이상의 많은 행을 전달할 때, beginUpdate()와 endUpdate()로 감싸서 호출하면 개별 행 처리에 대한 이벤트가 발생하지 않게된다. beginUpdate/endUpdate는 중첩될 수 있는데 쌍으로 개수를 맞춰야 한다. 가장 바깥의 endUpdate()가 호출될 때 갱신 요구 이벤트가 그리드 등에 전달된다.

#### Syntax

> function beginUpdate()

#### Parameters

> None.

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
$("#button1").click(function(){
  dataProvider.beginUpdate();
  try {
    for (var i = 0; i < 10; i++) {
       var values = gridView.getValues(i);
       dataProvider.addRow(values);
    }
  } finally {
    dataProvider.endUpdate();
  }
})

$("#button2").click(function(){
    for (var i = 0; i < 10; i++) {
       var values = gridView.getValues(i);
       dataProvider.addRow(values);
    }
}) 
</pre>

<button id="button1" class="btn btn-success btn-xs">버튼1</button>
버튼을 누르면 개별 행 처리에 대한 이벤트가 발생하지 않고 데이터 행이 추가된다. 
<br/>
<button id="button2" class="btn btn-success btn-xs">버튼2</button>
버튼을 누르면 개별 행 처리에 대한 이벤트가 발생하면서 데이터 행이 추가된다.
<textarea id="eventLog" style="width:100%; height:100px"></textarea>
<div id="realgrid" style="width: 100%; height: 300px;"></div>
<p></p>