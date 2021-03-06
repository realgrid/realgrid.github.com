---
layout: apipost
title: MultiLineCellEditor
part: Types
typename: Cell Editors
order: MultiLineCellEditor
objectname: 
directiontype: 
permalink: /api/types/MultiLineCellEditor/
tags:
  - 멀티라인셀편집기
  - 에디터
  - 여러줄
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

 여러 줄을 입력을 받을 수 있는 텍스트 편집기이다.   
Ctrl+Enter로 줄 나누기를 할 수 있다.  

#### Properties

> **maxLength**  
> Type: Number  
> Default: 0  
> 사용자가 입력할 수 있는 문자의 최대 개수. 0으로 지정하면 제한이 없다.  

> **textCase**  
> Type: String  
> Default: [TextInputCase](/api/types/TextInputCase).DEFAULT  
> 편집기에 입력되는 문자를 자동으로 대소문자로 변경한다. [TextInputCase](/api/types/TextInputCase)에 지정할 수 있는 값들이 선언되어 있다. [TextInputCase](/api/types/TextInputCase).DEFAULT로 지정하면 컬럼의 textInputCase에 지정한 값을 따르게 된다.

> **minHeight**  
> Type: Number  
> Default: 0  
> 멀티라인셀 에디터가 펼쳐졌을때의 최소 높이를 지정한다.   

> **altEnterNewLine**  
> Type: Boolean  
> Default: false  
> true인경우 ctrl+enter는 무시되고 alt+enter또는 shift+Enter로 newLine이 된다.    
> RealGridJS 1.1.33버전 이상부터 지원한다.   

#### Examples 

<pre class="prettyprint">
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
    }...

    }]

    grid.setColumns(columns);
}
</pre>

그리드의 직업 컬럼은 ctrl + enter키로 여러 줄로 입력이 가능하고, 입력할 수 있는 문자는 5개이며, 편집기에 입력되는 문자는 모두 대문자로 변경한다.
<br/>
<div id="realgrid" style="width: 100%; height: 300px;"></div>
<p></p>

---

#### Demo Links

* [Editors](http://demo.realgrid.com/Editing/Editors/){:target="_blank"}