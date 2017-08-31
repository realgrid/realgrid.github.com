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

#### Properties

> **criteria**  
> Type: String   
> Default: null      
> 조건식을 설정한다.      

> **styles**  
> Type: Object  
> 스타일을 설정한다.      

#### Examples   

<pre class="prettyprint">
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