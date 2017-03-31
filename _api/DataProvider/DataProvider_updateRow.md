---
layout: apipost
title: updateRow
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/updateRow/
tags:
  - 필드값 수정
  - 데이터 수정
  - 행 수정
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
        ["가수", "여자", "정수라", "19880902", "99", "90", "90", "100", "100", "90"],
        ["배우", "여자", "송윤아", "19900218", "33", "90", "70", "60", "100", "80"],
        ["배우", "여자", "전도연", "19910821", "22", "90", "70", "60", "100", "80"],
        ["가수", "여자", "이선희", "19780119", "33", "90", "70", "60", "100", "80"],
        ["배우", "여자", "하지원", "19791209", "11", "90", "70", "60", "100", "80"],
        ["가수", "여자", "소찬휘", "19870512", "55", "90", "70", "60", "100", "80"],
        ["가수", "여자", "박정현", "19800806", "22", "90", "70", "60", "100", "80"],
        ["배우", "여자", "전지현", "19770328", "44", "90", "70", "60", "100", "80"]
    ];
    dataProvider.setRows(data);

    gridView.resetCurrent();

    $("#button1").click(function(){
      var row = gridView.getCurrent().itemIndex;
      var values = [{
        field1: "배우",
        field2: "여자",
        field3: "전지현",
        field4: 19770328
      }];

      dataProvider.updateRows(row, values);
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
        dataType: "datetime",
        datetimeFormat: "yyyyMMdd"
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

</script>

#### Description

 지정한 데이터행의 필드 값들을 수정한다. values 매개변수로 넘겨지는 값은 Array이거나 Json 객체일 수 있다.

#### Syntax

> function updateRow(row, values)

#### Parameters

> **row**  
> Type: number  
> 수정할 데이터행 인덱스.  

> **values**  
> Type: Array\|object  
> 필드값의 배열이거나 object.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
$("#button1").click(function(){
    var row = gridView.getCurrent().itemIndex;
    var values = [{
        field1: "배우",
        field2: "여자",
        field3: "전지현",
        field4: 19770328
    }];

    dataProvider.updateRows(row, values);
})
</pre>

<button id="button1" class="btn btn-success btn-xs">버튼1</button>
버튼을 누르면 선택된 데이터 행의 필드 값들을 수정한다.


<div id="realgrid" style="width: 100%; height: 300px;"></div>
<p></p>

---

#### Demo Links

