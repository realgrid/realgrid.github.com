---
layout: apipost
title: SearchCellEditor
part: Types
typename: Classes
order: SearchCellEditor
objectname: 
directiontype: 
permalink: /api/types/SearchCellEditor/
tags:
  - 검색셀편집기
  - 검색
  - 드롭다운 검색
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

    var CustomerNames = ["정수라","송윤아","전도연","이선희","하지원","소찬휘","박정현","전지현"];
    gridView.onEditSearch = function (grid, index, text) {
        var items = CustomerNames.filter(function (str) {
            return str.indexOf(text) == 0;
        });
        gridView.fillEditSearchItems(index.column, text, items);
    };

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
        editor: {
            type: "search",
            searchLength: 1,  
            searchDelay: 1000,
            useCtrlEnterKey: true,
            useEnterKey: true
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

 드롭다운 에디터에서 검색이 필요할때 사용하는 편집기이다. 

#### Properties

> **searchLength**    
> Type: Number    
> Default: 1    
> 검색 시작에 필요한 최소 글자 수를 지정한다.     

> **searchDelay**    
> Type: Number    
> Default: 1000    
> 마지막 키 입력이 완료된 후 검색이 시작될때까지의 시간을 지정한다. 단위는 밀리초(millisecond)이다.

> **dropDownCount**    
> Type: Number    
> Default: 8    
> 표시될 목록의 수를 지정한다.    

> **useCtrlEnterKey**    
> Type: boolean    
> Default: False     
> Version Type: JS Only     
> searchLength, searchDelay와 관계없이 Ctrl+Enter 키 입력으로 즉시 onEditSearch이벤트 발생  

> **useEnterKey**    
> Type: boolean    
> Default: False        
> Version Type: JS Only     
> searchLength, searchDelay와 관계없이 Enter 키 입력으로 즉시 onEditSearch이벤트 발생, 목록이 비어 있는 경우만 동작  

#### Examples 

<pre class="prettyprint">
var CustomerNames = ["정수라","송윤아","전도연","이선희","하지원","소찬휘","박정현","전지현"];
gridView.onEditSearch = function (grid, index, text) {
    var items = CustomerNames.filter(function (str) {
        return str.indexOf(text) == 0;
    });
gridView.fillEditSearchItems(index.column, text, items);
};

function setColumns(grid) {
    var columns = [{
        name: "col3",
        fieldName: "field3",
        header : {
            text: "이름"
        },
        editor: {
            type: "search",
            searchLength: 1,  
            searchDelay: 1000,
            useCtrlEnterKey: true,
            useEnterKey: true
        },
        width: 80
    }];

    gridView.setColumns(columns);
} 
</pre>

이름 컬럼에서 이름을 검색하면 설정된 값 중에 일치되는 값이 검색된다.
<div id="realgrid" style="width: 100%; height: 300px;"></div>
<p></p>

---

#### Demo Links

* [Editors](http://demo.realgrid.com/Demo/Editors){:target="_blank"}