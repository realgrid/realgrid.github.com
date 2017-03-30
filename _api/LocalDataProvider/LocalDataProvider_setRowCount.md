---
layout: apipost
title: setRowCount
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/setRowCount/
tags:
  - 데이터행의 개수
  - onRowCountChanged
  - 필요행 만큼의 행 추가
  - 지정한 값으로 채우기
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
    	dataProvider.setRowCount(100, false, ["가수","여자"], "updated");
    })

    $("#button2").click(function(){
    	dataProvider.setRowCount(5, false, null, "none");
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

 데이터행의 개수를 매개변수로 지정한 새로운 개수로 맞춘다. 기존 개수보다 적게 지정하면 기존 행에서 남는 부분을 삭제한다.  
 기존 행 개수보다 큰 경우에는 필요한 만큼의 행들을 추가한다.  
 새로 추가된 행들은 DataProvider 내에 자리만 존재할 뿐 각 필드의 값이 할당되지는 않은 상태로 존재한다.  
 이런 행들에 대해 [hasData](/api/DataProvider/hasData/)(row) 함수가 false를 리턴한다.  
 하지만, 기본값을 지정한 경우 그 값들로 채울 수 있다.  
 defaultValues에 기본값을 지정한 경우 신규 행을 지정된 값으로 채우고, fillFieldDefaults기 true이면 각 [DataField](/api/types/DataField)의 defaultValue로 값을 채우게 된다.  
 이 함수를 통해 행의 개수가 변경되는 경우 추가/삭제 이벤트는 발생하지 않고 [onRowCountChanged](/api/LocalDataProvider/onRowCountChanged) 이벤트만 발생한다.

#### Syntax

> function setRowCount(newCount, fillFieldDefaults, defaultValues, rowState)

#### Parameters

> **newCount**  
> Type: number  
> 행의 개수. 

> **fillFieldDefaults**  
> Type: boolean  
> Default: false  
> true면 [DataField](/api/types/DataField/).defaultValue로 새로 추가되는 행들의 값을 초기화한다.

> **defaultValues**  
> Type: Array  
> Default: null  
> null이 아닌 배열을 지정하면 이 값들로 새로 추가되는 행들의 값을 초기화 한다.  

> **rowState**  
> Type: [RowState](/api/types/RowState)  
> Default: "none"   
> 새로 추가되는 행들의 rowState이다.


#### Return value

> None.

#### Examples 

<pre class="prettyprint">
$("#button1").click(function(){
    dataProvider.setRowCount(100, false, ["가수","여자"], "updated");
})

$("#button2").click(function(){
    dataProvider.setRowCount(5, false, null, "none");
})
</pre>

<button id="button1" class="btn btn-success btn-xs">버튼1</button>
버튼을 누르면 100행까지 새로 추가되는 행들을 지정한 배열 값과 rowState로 추가한다.
<br/>
<button id="button2" class="btn btn-success btn-xs">버튼2</button>
버튼을 누르면 5행 까지만 출력하고 남는 부분은 삭제한다.
<br/>
<div id="realgrid" style="width: 100%; height: 300px;"></div>
<p></p>