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
> Type: Object | Array of Object(JS ver. 1.1.24) 
> Default:  null     
> 푸터 데이터셀들에게 적용할 스타일들을 지정한다.   
> 멀티 풋터의 경우 [{}, {}, {}] 의 형태로 RealGridJS 1.1.24 부터 지원 한다.        

> **dynamicStyles**  
> Type: Array of Object 
> Default:  null     
> 푸터 데이터셀들에게 적용할 동적 스타일들을 지정한다.   
> 멀티 풋터의 경우 [[{}, {}], [{}], [{}]] 의 형태로 RealGridJS 1.1.24 부터 지원 한다.       

> **groupStyles**  
> Type: Object   
> Default:  null     
> 그룹 푸터 데이터셀들에게 적용할 스타일들을 지정한다.   

> **callback**  
> Type: function (column, footerIndex, grid) { }  
> Default: null     
> footer에 사용자 계산이 필요한 경우 사용한다. footer에 표시할 값을 return 하면 된다.   
> 3번째 parameter인 grid는 1.1.26부터 지원한다.   
> JS Only.   

> **groupCallback**  
> Type: function (itemIndex, column, grid, groupModel) { }    
> Default: null       
> group footer에 사용자 계산이 필요한 경우 사용한다. group footer에 표시할 값을 return 하면 된다.      
> 3,4번째 parameter인 grid, groupModel은 1.1.26부터 지원한다.  
> JS Only.

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
}, {
    "name": "Quantity1",
    "fieldName": "Quantity1",
    "type": "data",
    "width": "100",
    "styles": {
        "textAlignment": "far"
    },
    "header": {
        "text": "Quantity"
    },
    "footer": {
        //멀티풋터인 경우 footerIndex로 구분한다. 
        "callback":function (column, footerIndex, grid) {
            if(footerIndex == 0){
                return "index0"
            }
            if(footerIndex == 1){
                return "index1"
            }
            if(footerIndex == 2){
                return "index2"
            }
        }, 
        //itemIndex를 사용하여 값을 조작.       
        "groupCallback":function (itemIndex, column, grid, groupModel) {
            var mdl = gridView.getModel(itemIndex);
            var pmdl = gridView.getParentModel(mdl);
            var cmdl = gridView.getChildModels(pmdl)

            JSON.stringify(groupModel);   //groupModel
            JSON.stringify(cmdl);
        }
    }
}];

gridView.setColumns(columns);
</pre>

---

#### Demo Links 

* [Column Footer](http://demo.realgrid.com/HeaderAndFooter/ColumnFooter/) 
* [Expression Overview](http://help.realgrid.com/api/features/Expression) 