---
layout: apipost
title: DynamicStyle
part: Types
typename: Classes
order: DynamicStyle
objectname: 
directiontype: 
permalink: /api/types/DynamicStyle/
tags:
  - DynamicStyle
  - 다아나믹스타일
  - 동적스타일
---

#### Description

 동적 스타일을 적용할 조건과 표현식을 지정한다.
 1.1.28버전부터 function(){}으로 처리할 수 있다.  

#### Properties

> **criteria**  
> Type: String   
> Default: null      
> 조건식을 설정한다.      

> **styles**  
> Type: Object  
> 스타일을 설정한다.      

> **function(grid, index, value){}**
> grid: gridView객체  
> index: CellIndex  
> value: 해당셀의 값  
> 개발자 스크립트를 통해 적용할 스타일을 판단하고 해당 스타일을 return 하면 화면에 적용된다.
> 기존 criteria에서 사용하는 표현식들을 사용할 수 없으며 javascript로 구현하여야 한다.  
> 하나의 다이나믹스타일 객체에서 criteria, styles를 같이 사용할 수 없다.     

#### Examples   

<pre class="prettyprint">
//function()을 사용한 column 다이나믹스타일 지정법    
var columns = [{
    "name": "OrderID",
    "fieldName": "OrderID",
    "styles": {
        "textAlignment": "center"
    },
    "header": {
        "text": "Order ID"
    },
    "dynamicStyles": function(grid, index, value) { 
        if (value =="빨간색") {
            return {
                foreground:"#FFFF0000"
            };
        }
    }   
}]

//function()을 사용한 body 다이나믹스타일 지정법         
gridView.setStyles({
    body:{
        dynamicStyles: function(grid, index) {
            if ((index.itemIndex % 2) == 0) {
                return {
                    background:"#FFC9DAF8"
                }
            } else if ((index.itemIndex % 2) == 1) {
                return {
                    background:"#FF073763",
                    foreground:"#FFFFFFFF"
                }
            }
        }
    }
});

//function()과 기존 사용법을 혼용하여 사용하는 body 다이나믹스타일 지정법 
gridView.setStyles({
    body:{
        dynamicStyles:[{
            criteria: function(grid, index) {
                if ((index.itemIndex % 2) == 0) {
                    return {
                        background:"#FFC9DAF8"
                    }
                }
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

///////////////////////////////////////
gridView.setStyles({
    body:{
        cellDynamicStyles:[{
            criteria:"changedcell", //RealgridJS 1.1.25+, dataProvider.restoreMode가 "explicit" 또는 "auto"인 경우만 지원. 값이 변경된 셀에 스타일 적용 
            styles:{figureName:"leftTop", figureBackground:"#8800FF00", figureSize:"50%"}
        }],
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
</pre>

---

#### Tutorial Links

* [짝수, 홀수 행의 스타일을 다르게 표현하기](http://help.realgrid.com/tutorial/c3/)

#### Demo Links

* [Dynamic Styles on Columns](http://demo.realgrid.com/GridStyle/DynamicStylesonColumns/)    
* [Dynamic Styles on Rows](http://demo.realgrid.com/GridStyle/DynamicStylesonRows/)   