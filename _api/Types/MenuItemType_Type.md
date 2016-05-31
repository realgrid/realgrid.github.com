---
layout: apipost
title: MenuItemType
part: Types
typename: Constants
order: MenuItemType
objectname: 
directiontype: 
permalink: /api/types/MenuItemType/
tags:
  - 메뉴아이템유형
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
    setOptions(gridView);

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
    
    function setOptions(grid) {
	    var menu = [{
        label: "menu1 입니다.",
        enabled: true,
        children: [{
            label: "submenu1 입니다."
        }, {
            label: "submenu2 입니다."
        }]
    }, {
        label: "menu2 입니다",
        enabled: false
    }, {
        label: "-"
    }, {
        label: "menu3 입니다",
        type: "check",
        checked: true,
        tag: "check_menu"
    }, {
        label: "group menu",
        children: [{
            label: "group1 - 첫번째",
            type: "radio",
            group: "group1",
            checked: true
        }, {
            label: "group1 - 두번째",
            type: "radio",
            group: "group1"
        }, {
            label: "group1 - 세번째",
            type: "radio",
            group: "group1"
        }]
    }];

    gridView.addPopupMenu("menu1", menu);
	}

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
        button: "popup",
        popupMenu: "menu1"            
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

> 셀의 PopupMenu나 Grid ContextMenu등에서 표시되는 메뉴 항목의 유형을 정의한다.

#### Members

> **NORMAL**       
> Type: "normal"      
> 일반 Text로 구성된 메뉴 항목      

> **CHECK**      
> Type: "check"       
> Check box와 Text로 구성된 메뉴 항목   

> **RADIO**      
> Type: "radio"       
> Radio button과 Text로 구성된 메뉴 항목   

> **SEPARATOR**  
> Type: "separator"   
> 메뉴 항목간 구분                

#### Examples 

<pre class="prettyprint">
function setOptions(grid) {
var menu = [{
        label: "menu1 입니다.",
        enabled: true,
        children: [{
            label: "submenu1 입니다."
        }, {
            label: "submenu2 입니다."
        }]
    }, {
        label: "menu2 입니다",
        enabled: false
    }, {
        label: "-"
    }, {
        label: "menu3 입니다",
        type: "check",
        checked: true,
        tag: "check_menu"
    }, {
        label: "group menu",
        children: [{
            label: "group1 - 첫번째",
            type: "radio",
            group: "group1",
            checked: true
        }, {
            label: "group1 - 두번째",
            type: "radio",
            group: "group1"
        }, {
            label: "group1 - 세번째",
            type: "radio",
            group: "group1"
        }]
    }];

    gridView.addPopupMenu("menu1", menu);
}
</pre>

그리드의 직업컬럼에 popupMenu가 설정되어 있다.
<br/>
<div id="realgrid" style="width: 100%; height: 300px;"></div>
<p></p>

---

#### Demo Links

> [PopupMenu](http://demo.realgrid.com/Demo/PopupMenu#.example){:target="_blank"} 참조