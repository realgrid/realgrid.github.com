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

> 셀 편집을 완료하고 다른 셀로 이동할때 Javascript를 통한 사용자 validation을 실행한다.  
> 해당 컬럼 값에 문제가 있다면 검증 에러와 에러 메시지를 그리드에 리턴값으로 전달한다.  
> 
#### Syntax

> function onValidateColumn (grid, column, inserting, value)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **column**  
> Type: object  
> [DataColumn](/api/types/DataColumn/) 모델과 같은 구조의 컬럼 object.  

> **inserting**  
> Type: boolean  
> 열 추가 중이면 true. 열 수정 중이면 false.  

> **value**  
> Type: **  
> 입력된 필드의 값.  

#### Return

> Type: object  
> errorLevel과 errorMessage 값을 포함하는 object를 그리드에 전달하면 검증에 실패한 것으로 판단한다.  

##### Examples 

<pre class="prettyprint">
    gridView.onValidateColumn =  function (grid, column, inserting, value) {
        //validate Quantity
        if (column.name = "Quantity" &&  value < 100) {
            var error = {};
            error.level = RealGrids.ValidationLevel.ERROR;
            error.message = "onValidateRow Event: if Quantity < 100, validation level 'ERROR!!'";
            return error;
        }
    }
</pre>

#### See Also
> [onValidateRow](/api/GridBase/onValidateRow), [CustomColumnValidation](http://demo.realgrid.com/Demo/CustomColumnValidation)