---
layout: apipost
title: ColumnFooter
part: Types
typename: Classes
order: ColumnFooter
objectname: 
directiontype: 
permalink: /api/types/ColumnFooter/
---

#### Description

 그리드 푸터 영역에 표시되는 컬럼 푸터에 대한 설정 정보를 관리한다.

#### Properties

> **text**  
> Type: String   
> Default:  null     
> expression이 설정되지 않은 경우 푸터에 표시될 문자열을 지정한다.   

> **expression**  
> Type: Expression  
> Default: null    
> 푸터에 표시될 [Expression](/api/features/Expression)을 지정한다.   

> **groupText**  
> Type: String  
> Default:  null     
> groupExpression이 설정되지 않은 경우 행 그룹 푸터에 표시될 문자열을 지정한다.  

> **groupExpression**  
> Type: [Expression](/api/features/Expression)  
> Default: null     
> 행 그룹 푸터에 표시될 [Expression](/api/features/Expression)을 지정한다. [Row Grouping](/api/features/Row Grouping/)을 참조한다.  

> **styles**  
> Type: Object   
> Default:  null     
> 푸터 데이터셀들에게 적용할 스타일들을 지정한다.   

> **groupStyles**  
> Type: Object   
> Default:  null     
> 그룹 푸터 데이터셀들에게 적용할 스타일들을 지정한다.   

#### Examples   

<pre class="prettyprint">
var columns = [{
    "name": "QuantityPerUnit",
    "fieldName": "QuantityPerUnit",
    "type": "data",
    "width": "140",
    "styles": {
        "textAlignment": "near"
    },
    "header": {
        "text": "Quantity / Unit"
    },
    "footer": {
        "styles": {
            "textAlignment": "far",
            "font": "굴림,12"
        },
        "text": "합계 =>",
        "groupText": "합계 =>"
    }
}, {
    "name": "Quantity",
    "fieldName": "Quantity",
    "type": "data",
    "width": "100",
    "styles": {
        "textAlignment": "far"
    },
    "header": {
        "text": "Quantity"
    },
    "footer": {
        "styles": { 
            "textAlignment": "far",
            "numberFormat": "#,##0",
            "suffix": " $",
            "font": "Arial,12"
            },
        "expression": "sum",
        "groupExpression": "sum"
    }
}];

gridView.setColumns(columns);
</pre>

---

#### Demo Links 

* [Column Footer](http://demo.realgrid.com/HeaderAndFooter/ColumnFooter/) 
* [Expression Overview](http://help.realgrid.com/api/features/Expression) 