---
layout: apipost
title: onValidateColumn
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onValidateColumn/
tags:
  - validate
  - 검증
  - 검사
  - event
---


#### Description

 셀 편집을 완료하고 다른 셀로 이동할때 Javascript를 통한 사용자 validation을 실행한다.  
 해당 컬럼 값에 문제가 있다면 검증 에러와 에러 메시지를 그리드에 리턴값으로 전달한다.  
 
#### Syntax

> function onValidateColumn (grid, column, inserting, value, itemIndex, dataRow)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **column**  
> Type: Object  
> [DataColumn](/api/types/DataColumn/) 모델과 같은 구조의 컬럼 object.  

> **inserting**  
> Type: Boolean  
> 열 추가 중이면 true. 열 수정 중이면 false.  

> **value**  
> Type: **  
> 입력된 필드의 값.  

<a name="itemIndex"></a>
> **itemIndex**   
> Type: Number   
> 셀편집된 행의 아이템 인덱스.     
> RealGridJS 1.1.30 부터 지원한다.    

<a name="dataRow"></a>
> **dataRow**   
> Type: Number   
> 셀편집된 행의 데이터 행 번호.       
> RealGridJS 1.1.32 부터 지원한다.    

#### Return

> Type: object  
> errorLevel과 errorMessage 값을 포함하는 object를 그리드에 전달하면 검증에 실패한 것으로 판단한다.  

#### Examples 

<pre class="prettyprint">
gridView.onValidateColumn =  function (grid, column, inserting, value, itemIndex) {
    //validate Quantity
    var CustID = grid.getValue(itemIndex, "CustomerID")
    if (column.name = "Quantity" &&  value < 100 && CustID == "18650") {
        var error = {};
        error.level = RealGrids.ValidationLevel.ERROR;
        error.message = "onValidateRow Event: if Quantity < 100, validation level 'ERROR!!'";
        return error;
    }
}
</pre>

---

#### API Links

* [onValidateRow](/api/GridBase/onValidateRow)

#### Demo Links

* [CustomColumnValidation](http://demo.realgrid.com/Validation/CustomColumnValidation/)