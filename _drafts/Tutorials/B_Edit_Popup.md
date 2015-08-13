---
layout: post
title: B 팝업메뉴 사용하기
date: 2015-08-12 15:00:00 +9:00 GMT
permalink: /tutorial/bEditPopup
categories:
  - Tutorial
author: fanelia@wrw.kr
course:
  - B-Class
tags: 
  - RealGridJS
  - RealGrid
  - Popup
  - AddPopup
  - 팝업
---

<script type="text/javascript" src="/script/dlgrids_eval.js"></script>
<script type="text/javascript" src="/script/realgridjs.js"></script>

<script>
var gridView;
var dataProvider;

$(document).ready( function(){
    RealGridJS.setTrace(false);
    RealGridJS.setRootContext("/script");
    
    dataProvider = new RealGridJS.LocalDataProvider();
    gridView = new RealGridJS.GridView("realgrid");
    gridView.setDataSource(dataProvider);

    //필드 배열 객체를 생성합니다.
    var fields = [
        {
            fieldName: "field1"
        },
        {
            fieldName: "field2"
        },
        {
            fieldName: "field3"
        },
        {
            fieldName: "field4"
        },
        {
            fieldName: "field5"
        },
        {
            fieldName: "field6"
        },
        {
            fieldName: "field7"
        },
        {
            fieldName: "field8"
        },
        {
            fieldName: "field9"
        },
        {
            fieldName: "field10"
        }
    ];
    //DataProvider의 setFields함수로 필드를 입력합니다.
    dataProvider.setFields(fields);

    //필드와 연결된 컬럼 배열 객체를 생성합니다.
    var columns = [
        {
            name: "col1",
            fieldName: "field1",
            header : {
                text: "직업"
            },
            width : 60
        },
        {
            name: "col2",
            fieldName: "field2",
            header : {
                text: "성별"
            },
            width: 50
        },
        {
            name: "col3",
            fieldName: "field3",
            header : {
                text: "이름"
            },
            width: 80
        },
        {
            name: "col4",
            fieldName: "field4",
            header : {
                text: "국어"
            },
            width: 80
        },
        {
            name: "col5",
            fieldName: "field5",
            header : {
                text: "수학"
            },
            width: 80
        },
        {
            name: "col6",
            fieldName: "field6",
            header : {
                text: "민법"
            },
            width: 80
        },
        {
            name: "col7",
            fieldName: "field7",
            header : {
                text: "한국사"
            },
            width: 80
        },
        {
            name: "col8",
            fieldName: "field8",
            header : {
                text: "영어"
            },
            width: 80
        },
        {
            name: "col9",
            fieldName: "field9",
            header : {
                text: "과학"
            },
            width: 80
        },
        {
            name: "col10",
            fieldName: "field10",
            header : {
                text: "사회"
            },
            width: 80
        }
    ];
    //컬럼을 GridView에 입력 합니다.
    gridView.setColumns(columns);

    var data = [
        ["배우", "여자", "전도연", "20", "22", "90", "70", "60", "100", "80"],
        ["가수", "여자", "이선희", "40", "33", "90", "70", "60", "100", "80"],
        ["배우", "여자", "하지원", "10", "11", "90", "70", "60", "100", "80"],
        ["가수", "여자", "박정현", "40", "22", "90", "70", "60", "100", "80"],
        ["배우", "여자", "전지현", "20", "44", "90", "70", "60", "100", "80"]
    ];
    dataProvider.setRows(data);

    //메뉴 구성후 메뉴 등록
    $("#btnConfigureMenu").click(function () {
        //메뉴 구성    
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

        //메뉴 등록  
        gridView.addPopupMenu("menuTest", menu);
    });

    //컬럼에 팝업메뉴 등록
    $("#btnSetColumn").click(function () {
        var column = gridView.columnByName('col1');
        column.button = 'popup'
        column.popupMenu = 'menuTest';

        gridView.setColumn(column);  
    });

    //메뉴 항목이 클릭되었을때의 동작 설정
    $("#btnSetCallback").click(function () {    
        gridView.onMenuItemClicked = function (grid, data) {
            var s = data.label + (data.checked ? " checked" : "");
            if (data.tag)
                s += "\n" + "tag: " + data.tag;
            alert(s);
        };      
    });  

    gridView.onMenu3Clicked = function() {
        alert("menu3 clicked~!!!!!!!!!!!!!");
    }   

});   
</script>

### 들어가며

이번 강좌에서는 RealGrid에서 팝업 메뉴를 사용하는 방법을 배워보겠습니다.

### 이론

팝업메뉴는 일상 업무에서 특정 컬럼에 다양한 기능/동작이 필요할 경우 사용합니다.  
RealGrid에서는 매우 간단한 3가지 설정으로 팝업메뉴가 사용 가능합니다.  

1. [MenuItem](/api/types/MenuItem/)으로 구성된 메뉴정보를 구성합니다..   
2. 구성한 메뉴정보를 [addPopupMenu()](/api/GridBase/addPopupMenu/)로 그리드에 추가합니다..   
3. [column](/api/types/DataColumn/)의 popupMenu 속성에 2번에서 추가한 이름으로 등록합니다..  

아래에서는 팝업 메뉴와 관계되는 클래스, api 및 콜백함수 등을 자세히 설명하도록 하겠습니다.

#### [메뉴항목(MenuItem)](/api/types/MenuItem/)    
각 메뉴항목은 아래와 같이 7개의 속성으로 이루어져 있습니다.    

1. ```label``` : 메뉴에 표시될 몀칭   
2. ```type``` :  메뉴항목의 형태를 지정합니다. [MenuItemType](/api/types/MenuItemType/) 중 하나를 선택합니다.  
3. ```group``` : 그룹의 이름을 지정합니다. type이 radio이고 그룹명을 지정하면 동일한 그룹명을 가진 것들 중에서 하나만 선택(checked) 됩니다.  
4. ```checked``` : 체크 여부를 지정합니다.
5. ```enabled``` : 사용 여부를 지정합니다.
6. ```tag``` : 테그명을 지정합니다.
7. ```children``` : 하위메뉴를 구성할때 하위메뉴에 해당하는 메뉴항목들로 이루어진 메뉴정보를 등록합니다.  

#### [GridBase.addPopupMenu()](/api/GridBase/addPopupMenu/)  
메뉴항목이나 메뉴항목들로 구성된 메뉴정보를 그리드에 등록할때 사용합니다.  
그리드에 등록만 하는 것이지 컬럼과 연결되기 전에는 아무 기능을 하지 않습니다.     

##### Arguments

1. ```name``` : 컬럼에 지정할 이름을 지정합니다.
2. ```menuItems``` : 메뉴항목들로 구성된 메뉴정보를 지정합니다.

#### [GridBase.onMenuItemClicked()](/api/GridBase/onMenuItemClicked/)  
그리드에 등록된 팝업메뉴의 메뉴항목이 클릭될 경우 호출됩니다.     

##### Arguments

1. ```grid``` : 그리드 객체.
2. ```data``` : 메뉴항목 객체


### 실습

실습에서는 컬럼에 메뉴를 등록하고 어떻게 동작하는지 확인해보도록 하겠습니다.

1. Menu를 구성하고, addPopupMenu()를 사용하여 그리드에 "menuTest"란 이름으로 등록합니다.

    <pre class="prettyprint">
    //메뉴 구성    
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

    //메뉴 등록  
    gridView.addPopupMenu("menuTest", menu);
    </pre>

2. 직업 컬럼에 1번에서 등록한 팝업메뉴 "menuTest" 을 합니다.

    <pre class="prettyprint">
        var column = gridView.columnByName('col1');
        column.button = 'popup'
        column.popupMenu = 'menuTest';

        gridView.setColumn(column);     
    </pre>

3. 메뉴항목이 클릭되었을때의 동작을 설정합니다.

    <pre class="prettyprint">
        gridView.onMenuItemClicked = function (grid, data) {
            var s = data.label + (data.checked ? " checked" : "");
            if (data.tag)
                s += "\n" + "tag: " + data.tag;
            alert(s);
        };  
    </pre>

4. 직업 컬럼의 버튼을 클릭하고, 등록한 메뉴항목들을 클릭하여 동작을 확인합니다.  


### 실행화면

1. <button type="button" class="btn btn-primary btn-xs" id="btnConfigureMenu">메뉴를 구성하고 addPopupMenu()로 등록</button> 

2. <button type="button" class="btn btn-primary btn-xs" id="btnSetColumn">직업 컬럼에 popup 메뉴 연결</button> 

3. <button type="button" class="btn btn-primary btn-xs" id="btnSetCallback">메뉴항목이 클릭되었을 때의 동작을 설정</button> 

4. 직업 컬럼의 버튼을 클릭하여 팝업메뉴 동작을 확인 합니다.    

<div id="realgrid" style="width: 100%; height: 200px;"></div>
<p></p>


### 전체 소스코드

##### SCRIPT    
<pre class="prettyprint full-source-script">
&lt;link rel=&quot;stylesheet&quot; href=&quot;/css/bootstrap.css&quot;&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;/script/jquery-1.112.min.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;/script/bootstrap.min.js&quot;&gt;&lt;/script&gt;
&lt;!--realgrid--&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;/script/dlgrids_eval.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;/script/realgridjs.js&quot;&gt;&lt;/script&gt;

&lt;script&gt;
var gridView;
var dataProvider;

$(document).ready( function(){
    RealGridJS.setTrace(false);
    RealGridJS.setRootContext("/script");
    
    dataProvider = new RealGridJS.LocalDataProvider();
    gridView = new RealGridJS.GridView("realgrid");
    gridView.setDataSource(dataProvider);

    //필드 배열 객체를 생성합니다.
    var fields = [
        {
            fieldName: "field1"
        },
        {
            fieldName: "field2"
        },
        {
            fieldName: "field3"
        },
        {
            fieldName: "field4"
        },
        {
            fieldName: "field5"
        },
        {
            fieldName: "field6"
        },
        {
            fieldName: "field7"
        },
        {
            fieldName: "field8"
        },
        {
            fieldName: "field9"
        },
        {
            fieldName: "field10"
        }
    ];
    //DataProvider의 setFields함수로 필드를 입력합니다.
    dataProvider.setFields(fields);

    //필드와 연결된 컬럼 배열 객체를 생성합니다.
    var columns = [
        {
            name: "col1",
            fieldName: "field1",
            header : {
                text: "직업"
            },
            width : 60
        },
        {
            name: "col2",
            fieldName: "field2",
            header : {
                text: "성별"
            },
            width: 50
        },
        {
            name: "col3",
            fieldName: "field3",
            header : {
                text: "이름"
            },
            width: 80
        },
        {
            name: "col4",
            fieldName: "field4",
            header : {
                text: "국어"
            },
            width: 80
        },
        {
            name: "col5",
            fieldName: "field5",
            header : {
                text: "수학"
            },
            width: 80
        },
        {
            name: "col6",
            fieldName: "field6",
            header : {
                text: "민법"
            },
            width: 80
        },
        {
            name: "col7",
            fieldName: "field7",
            header : {
                text: "한국사"
            },
            width: 80
        },
        {
            name: "col8",
            fieldName: "field8",
            header : {
                text: "영어"
            },
            width: 80
        },
        {
            name: "col9",
            fieldName: "field9",
            header : {
                text: "과학"
            },
            width: 80
        },
        {
            name: "col10",
            fieldName: "field10",
            header : {
                text: "사회"
            },
            width: 80
        }
    ];
    //컬럼을 GridView에 입력 합니다.
    gridView.setColumns(columns);

    var data = [
        ["배우", "여자", "전도연", "20", "22", "90", "70", "60", "100", "80"],
        ["가수", "여자", "이선희", "40", "33", "90", "70", "60", "100", "80"],
        ["배우", "여자", "하지원", "10", "11", "90", "70", "60", "100", "80"],
        ["가수", "여자", "박정현", "40", "22", "90", "70", "60", "100", "80"],
        ["배우", "여자", "전지현", "20", "44", "90", "70", "60", "100", "80"]
    ];
    dataProvider.setRows(data);

    //메뉴 구성후 메뉴 등록
    $("#btnConfigureMenu").click(function () {
        //메뉴 구성    
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

        //메뉴 등록  
        gridView.addPopupMenu("menuTest", menu);
    });

    //컬럼에 팝업메뉴 등록
    $("#btnSetColumn").click(function () {
        var column = gridView.columnByName('col1');
        column.button = 'popup'
        column.popupMenu = 'menuTest';

        gridView.setColumn(column);  
    });

    //메뉴 항목이 클릭되었을때의 동작 설정
    $("#btnSetCallback").click(function () {    
        gridView.onMenuItemClicked = function (grid, data) {
            var s = data.label + (data.checked ? " checked" : "");
            if (data.tag)
                s += "\n" + "tag: " + data.tag;
            alert(s);
        };      
    });  

});   
&lt;/script&gt;
</pre>

##### HTML
<pre class="prettyprint full-source-html">

</pre>


---
**참조**

* [RealGrid Help](http://help.realgrid.com){:target="_blank"}
* [팝업메뉴 데모](http://demo.realgrid.com/Demo/PopupMenu){:target="_blank"}

