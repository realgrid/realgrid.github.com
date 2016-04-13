---
layout: apipost
title: onValidateRow
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onValidateRow/
tags:
  - event
  - validate
  - 검증
  - 검사
---


#### Description

> Javascript를 통한 행 단위 사용자 validation을 실행한다. 해당 행의 값들에 문제가 있다면 검증 에러와 에러 메시지를 그리드에 리턴값으로 전달한다.  

#### Syntax

> function onValidateRow (grid, itemIndex, dataRow, inserting, values)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **itemIndex**  
> Type: number  
> 검증하는 행의 아이템 인덱스  

> **dataRow**  
> Type: number  
> 검증하는 행의 데이터 행 번호.  

> **inserting**  
> Type: boolean  
> 행 추가 중이면 true. 행 수정 중이면 false.  

> **values**  
> Type: array  
> 입력된 필드들의 값이 순서대로 들어 있다.  

#### Return

> Type: object  
> errorLevel과 errorMesage 값을 포함하는 object를 그리드에 전달하면 검증에 실패한 것으로 판단한다.  

##### Examples 

<pre class="prettyprint">
    gridView.onValidateRow = function (grid, itemIndex, dataRow, inserting, values) {
        console.log("onValidateRow:" + itemIndex + "," + dataRow + "," + inserting + "," + values.Quantity + "," + values.UnitPrice);

        var error = {};
        //validate Quantity
        if (values.Quantity < 100) {
            error.level = RealGrids.ValidationLevel.ERROR;
            error.message = "onValidateRow Event: if Quantity < 100, validation level 'ERROR!!'";
        }
        return error;
    }
</pre>

#### See Also
> [onValidateColumn](/api/GridBase/onValidateColumn), [CustomColumnValidation](http://demo.realgrid.com/Demo/CustomColumnValidation)