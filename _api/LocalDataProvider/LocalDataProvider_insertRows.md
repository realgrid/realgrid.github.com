---
layout: apipost
title: insertRows
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/insertRows/
tags:
  - 특정 행 추가
  - 새로운 행 추가
  - 새로운 행 삽입
  - 특정 위치 행 삽입
  - 여러행 값 추가
  - 지정한 데이터행
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
      var rows = [["가수","여자"], ["배우","여자"]];
      dataProvider.insertRows(0, rows, 0, -1);
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

 지정한 데이터행 위치에 한 행 이상의 값을 삽입한다.

#### Syntax

> function insertRows(row, rows, start, count, rowEvents, itemIndex)

#### Parameters

> **row**  
> Type: number  
> 삽입할 시작 데이터행 인덱스.

> **rows**  
> Type: Array of Array \| object  
> 값들의 배열. 각 행의 값은 Array이나 object.

> **start**  
> Type: number  
> Default: 0  
> rows에 지정된 배열 중에서 시작 위치.

> **count**  
> Type: number  
> Default: -1 (모든 행)  
> rows에 지정된 배열 중 수정할 행의 개수.

> **rowEvents**  
> Type: Boolean  
> Default: true  
> false면 상태 변경 이벤트를 발생시키지 않는다.  

> **itemIndex**  
> Type: number  
> Default: undefined  
> 화면에 표시될 위치를 지정한다.  
> JS 1.1.26 이상부터 지원한다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
$("#button1").click(function(){
    var rows = [["가수","여자"], ["배우","여자"]];
    dataProvider.insertRows(0, rows, 0, -1);
})
</pre>

<button id="button1" class="btn btn-success btn-xs">버튼1</button> 
버튼을 누르면 지정된 행부터 rows에 지정된 모든 배열값으로 새로운 행을 추가한다. 
<div id="realgrid" style="width: 100%; height: 300px;"></div>