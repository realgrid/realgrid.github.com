---
layout: post
title: RealGridJS 짝/홀수 행의 색상을 다르게 표현  
date: 2015-08-03 13:49:31 +9:00 GMT
permalink: /tutorial/dynamicStyle
categories:
  - Tutorial
course:
  - C-Class
tags: 
  - RealGridJS
  - RealGrid
  - Style
  - Styles
  - DynamicStyle
  - DynamicStyles
---

<script type="text/javascript" src="/script/dlgrids_eval.js"></script>
<script type="text/javascript" src="/script/realgridjs.js"></script>

<script>
var gridView;
var dataProvider;

$(document).ready( function(){
    $("#btnSetStyles").click(function () {
        gridView.setStyles({
            body:{
                dynamicStyles:[{
                    criteria:"(row mod 2) = 0",
                    styles:{
                        background:"#FFC9DAF8"
                    }
                }, {
                    criteria:"(row mod 2) = 1", 
                    styles:{
                        background:"#FF073763",
                        foreground:"#FFFFFFFF"
                    }
                }]
            }
        });
    });

    RealGridJS.setTrace(false);
    RealGridJS.setRootContext("/script");
    
    dataProvider = new RealGridJS.LocalDataProvider();
    gridView = new RealGridJS.GridView("realgrid");
    gridView.setDataSource(dataProvider);

    //다섯개의 필드를 가진 배열 객체를 생성합니다.
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
            width : 60,
            filters : [{
                name: "가수",
                criteria: "value = '가수'"
            }, {
                name: "배우",
                criteria: "value = '배우'"
            }]
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
        ["가수", "여자", "정수라", "80", "99", "90", "90", "100", "100", "90"],
        ["배우", "여자", "송윤아", "10", "33", "90", "70", "60", "100", "80"],
        ["배우", "여자", "전도연", "20", "22", "90", "70", "60", "100", "80"],
        ["가수", "여자", "이선희", "40", "33", "90", "70", "60", "100", "80"],
        ["배우", "여자", "하지원", "10", "11", "90", "70", "60", "100", "80"],
        ["가수", "여자", "소찬휘", "30", "55", "90", "70", "60", "100", "80"],
        ["가수", "여자", "박정현", "40", "22", "90", "70", "60", "100", "80"],
        ["배우", "여자", "전지현", "20", "44", "90", "70", "60", "100", "80"]
    ];
    dataProvider.setRows(data);
});   
</script>

### 들어가며

이번 강좌에서는 그리드에 표현되는 짝/홀수 행의 색상을 다르게 표현하는 것을 배워보겠습니다.

### 이론

그리드는 몇개의 [영역](http://demo.realgrid.com/Demo/StylesRegions){:target="_blank"} 으로 구분되어 있으며, 각 영역은 셀로 채워져 있습니다. 

이러한 각 데이터셀은 컬럼에 지정된 셀 렌더러에 의해 표시됩니다. 셀 렌더러는 실행 시간에 여러 계층을 통해 전달된 스타일 속성 셋을 이용하여 그리게 됩니다. 하나의 스타일 셋은 아래 표에 나열된 속성들을 갖습니다. 각 렌더러는 이들 중 자신이 필요한 값들을 가져가 사용합니다. 

그리드 display와 관련된 주요한 요구사항 중 하나가 실행 시간에 셀의 값 등에 따라 표시 방식을 바꿔야 하는 것입니다. 대개의 기본적인 처리 방식은 이벤트 핸들러를 이용하는 것인데, RealGrid에서는 DynamicStyle 이라는 방식을 적극 사용합니다. Dynamic style에 셀의 값이나 행의 상태 등의 값을 사용할 수 있는 판정식(criteria)에 따라 스타일 속성들을 지정할 수 있습니다. 각각의 데이터 컬럼에 하나 이상의 동적 스타일을 지정할 수 있고, 그리드에는 행단위의 동적 스타일 셋을 지정할 수 있습니다. 이 동적 스타일들은 셀을 그리는 시점에 셀 렌더러에게 전달됩니다.

gridView.[setStyles()](api/GridBase/setStyles/)를 사용하여 각 영역별로 스타일(다이나믹 스타일 포함)을 적용하거나 gridView.[getStyles()](/api/GridBase/getStyles/)를 사용하여 지정 스타일 정보를 확인할 수 있습니다.

실습에서는 짝/홀수 행에 각각 색을 적용해보고 홀수행에서는 글자색까지 변경해보도록 하겠습니다.

### 실습

1. setStyle()을 사용하여 body영역에 다이나믹 스타일을 적용합니다.

    <pre class="prettyprint">
        gridView.setStyles({
            body:{
                dynamicStyles:[{
                    criteria:"(row mod 2) = 0",
                    styles:{
                        background:"#FFC9DAF8"
                    }
                }, {
                    criteria:"(row mod 2) = 1", 
                    styles:{
                        background:"#FF073763",
                        foreground:"#FFFFFFFF"
                    }
                }]
            }
        });</pre>


### 실행화면

<button type="button" class="btn btn-primary btn-xs" id="btnSetStyles">setStyles()</button>

<div id="realgrid" style="width: 100%; height: 200px;"></div>


