---
layout: apipost
title: NumberCellEditor
part: Types
typename: Cell Editors
order: NumberCellEditor
objectname: 
directiontype: 
permalink: /api/types/NumberCellEditor/
tags:
  - 숫자편집기
  - 넘버에디터
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
		var column = gridView.columnByName("col5");
	    column.editor = { positiveOnly: true };
	    gridView.setColumn(column);
	})

	$("#button2").click(function(){
		var column = gridView.columnByName("col5");
	    column.editor = { integerOnly: true };
	    gridView.setColumn(column);
            console.log("OK");
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
        width : 60,
        editor: {
            type: "multiline",
            textCase: "upper",
            maxLength: 5
        }           
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

 숫자와 구두점 및 부호만을 입력할 수 있고 우측으로 정렬된 편집기이다.
 
 RealGridJS 1.1.27에서 styles.numberFormat에 round 관련 속성이 추가되었다. 가장 마지막 위치에 c나 f 지정하여 사용한다.  
 styles.numberFormat = "#,##0.###;.;,;f" 포멧;소수점기호;천자리기호;f 또는 c를 입력  
 f:Math.floor 절사   
 c:Math.ceil 올림  

#### Properties

> **maxLength**  
> Type: Number  
> Default: 0  
> 사용자가 입력할 수 있는 문자의 최대 개수. 0으로 지정하면 제한이 없다.

> **positiveOnly**  
> Type: boolean  
> Default: false  
> true이면 양수값만 입력할수 있다.  

> **integerOnly**  
> Type: boolean  
> Default: false  
> true이면 정수만 입력할수 있다.  

> **textAlignment**  
> Type: [Alignment](/api/types/Alignment/)
> Default: Alignment.NEAR  
> 입력이 시작되는 위치를 지정한다. far로 지정하면 오른쪽 끝에서 부터 입력이 시작된다.  
> ver 1.1.20부터 지원된다.  

> **editFormat**  
> Type: numberFormat
> Default: null  
> 입력되는 숫자의 포맷을 지정한다. "#,##0.##" 을 지정하면 "1,234,567.89" 와 같이 천단위 구분기호 , 를 표시하면서 소수점은 2자리까지만 입력받는다.    
> RealGridJS 1.1.20부터 지원된다.  
> 일부 국가에서 사용되는 천단위 구분기호와 소수점이 반대인 경우 "#,##0.##;,;." 으로 지정한다.  
> styles.numberFormat도 "#,##0.##;,;."로 형태로 지정하면 된다.  

> **multipleChar**  
> Type: String
> Default: null  
> 문자 지정시 해당 키를 입력하면 000 이 입력 된다.      
> RealGridJS 1.1.21부터 지원된다.  


#### Examples 

<pre class="prettyprint">
$("#button1").click(function(){
    var column = gridView.columnByName("col5");
    column.editor = { positiveOnly: true };
    gridView.setColumn(column);
})

$("#button2").click(function(){
    var column = gridView.columnByName("col5");
    column.editor = { integerOnly: true };
    gridView.setColumn(column);
})
</pre>

<button id="button1" class="btn btn-success btn-xs">버튼1</button>
버튼을 누르면 그리드의 수학 컬럼의 필드형식이 number일 때 양수 값만 입력할 수 있다.
<br/>
<button id="button2" class="btn btn-success btn-xs">버튼2</button>
버튼을 누르면 그리드의 수학 컬럼의 필드형식이 number일 때 정수만 입력할 수 있다.
<br/>
<div id="realgrid" style="width: 100%; height: 300px;"></div>
<p></p>

---

#### Demo Links

* [Editors](http://demo.realgrid.com/Editing/Editors/){:target="_blank"}