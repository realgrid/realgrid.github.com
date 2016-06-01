---
layout: apipost
title: updateStrictRows
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/updateStrictRows/
tags:
  - 지정한 위치부터 데이터 값 수정
  - onRowStateChanged
  - 데이터 값 수정
  - Array값
  - object값
  - rowEvents
  - updateRows
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
    
    $("#button1").click(function(){
        rows = [
            [undefined, undefined, , , "100", "100", "100", "100", "100", "100"],
            [undefined, undefined, , , "100", "100", "100", "100", "100", "100"], // Array
            {"field1":"배우", "field2":"여자", "field3":"전지현", "field4":"1977-03-28", "field5":"10", "field6":"100", "field7":"100", "field8":"100", "field9":"100", "field10":"100"} // Object
        ];

        dataProvider.updateStrictRows(0, rows, 0, 3, false);
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

</script>

#### Description

> 지정한 위치 부터 기존 데이터행의 값을 수정한다.  
> undefined로 지정하거나 명시되지 않은 경우 기존의 값을 유지.

#### Syntax

> function updateStrictRows(row, rows, start, count, rowEvents)

#### Parameters

> **row**  
> Type: number  
> 수정을 시작할 데이터행

> **rows**  
> Type: Array of Array \| Object  
> 값들의 배열. 각 행의 값은 Array이나 object.

> **start**  
> Type: number  
> Default: 0  
> rows로 입력된 Array의 시작Index.

> **count**  
> Type: number  
> Default: -1 (rows.length만큼 수정)  
> 수정할 건수

> **rowEvents**  
> Type: Boolean  
> Default: false  
> true이면 [onRowStateChanged](/api/LocalDataProvider/onRowStateChanged/) event가 건별로 호출된다.  
> false이면 [onRowStatesChanged](/api/LocalDataProvider/onRowStatesChanged/) event가 한번만 호출된다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
$("#button1").click(function(){
    rows = [
        [undefined, undefined, , , "100", "100", "100", "100", "100", "100"],
        [undefined, undefined, , , "100", "100", "100", "100", "100", "100"], // Array
        {"field1":"배우", "field2":"여자", "field3":"전지현", "field4":"1977-03-28",
        "field5":"10", "field6":"100", "field7":"100", "field8":"100","field9":"100", 
        "field10":"100"} // Object
    ];

    dataProvider.updateStrictRows(0, rows, 0, 3, false);
})
</pre>

<button id="button1" class="btn btn-success btn-xs">버튼1</button>
버튼을 누르면 그리드의 첫 행부터 rows배열의 0부터 3개의 행들로 값들을 수정한다.<br/>
(undefined로 지정하거나 명시되지 않은 경우에는 기존의 값을 유지)
<br/>
<div id="realgrid" style="width: 100%; height: 300px;"></div>
<p></p>

---

#### Demo Links

> [AddMultiRows](http://demo.realgrid.com/Demo/AddMultiRows){:target="_blank"} 참조